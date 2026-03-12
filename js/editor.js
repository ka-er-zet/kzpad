/**
 * KZ-PAD JSON Editor Logic
 * Handles loading, editing, and exporting JSON database files.
 */

/**
 * Toast notification system - displays non-blocking messages to users
 * @param {string} message - The message to display
 * @param {string} type - Type of toast: 'success', 'error', 'warning' (default: 'success')
 * @param {number} duration - How long to show the toast in ms (default: 0 - stays until closed)
 */
let lastToastMessage = "";
let lastToastTime = 0;

/**
 * Announces a message to screen readers via the live region.
 * Clears and re-sets to ensure re-announcement even for identical messages.
 * @param {string} message
 */
function srAnnounce(message) {
    const el = document.getElementById('sr-announcer');
    if (!el) return;
    el.textContent = '';
    // rAF + timeout: daje czas na reset przed wstrzyknięciem nowej treści
    requestAnimationFrame(() => {
        setTimeout(() => { el.textContent = message; }, 50);
    });
}

/**
 * Returns Polish plural form for a count.
 * @param {number} n
 * @param {string} one   - np. "klauzula"
 * @param {string} few   - np. "klauzule"  (2–4 oraz 22–24, 32–34…)
 * @param {string} many  - np. "klauzul"   (0, 5+, 11–19)
 * @returns {string}
 */
function plPlural(n, one, few, many) {
    if (n === 1) return one;
    const mod10 = n % 10;
    const mod100 = n % 100;
    if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return few;
    return many;
}

/**
 * Counts loaded items and returns a human-readable announcement string.
 * @returns {string}
 */
function buildLoadAnnouncement() {
    if (!currentData) return 'Dane zostały załadowane.';

    let count = 0;
    let noun = '';

    if (currentType === 'clauses') {
        count = Object.keys(currentData).length;
        noun = plPlural(count, 'klauzula', 'klauzule', 'klauzul');
    } else if (currentType === 'mapping') {
        count = (currentData.matrix || []).length;
        noun = plPlural(count, 'mapowanie', 'mapowania', 'mapowań');
    } else if (currentType === 'summaries') {
        const sums = currentData.compliance_summaries || currentData;
        count = typeof sums === 'object' ? Object.keys(sums).length : 0;
        noun = plPlural(count, 'podsumowanie', 'podsumowania', 'podsumowań');
    } else if (currentType === 'glossary') {
        count = Object.keys(currentData).length;
        noun = plPlural(count, 'pojęcie', 'pojęcia', 'pojęć');
    }

    return `Załadowano ${count} ${noun}.`;
}

/**
 * Confirmation Modal state
 */
let confirmPromiseResolve = null;

/**
 * Shows a confirmation dialog (modal or native fallback)
 * @param {string} title - Modal title
 * @param {string} message - Modal message
 * @param {string|Function} confirmText - Label for confirm button or callback function
 * @param {string} cancelText - Label for cancel button (optional)
 * @param {string} type - 'default' or 'warning' (swaps button priority)
 * @returns {Promise<boolean>} Resolves with true if confirmed, false otherwise
 */
function showConfirm(title, message, confirmText = 'Potwierdź', cancelText = 'Anuluj', type = 'default') {
    // Legacy support for callback as 3rd parameter
    let callback = null;
    if (typeof confirmText === 'function') {
        callback = confirmText;
        confirmText = 'Potwierdź';
    }

    return new Promise((resolve) => {
        const modal = document.getElementById('modal-confirm');

        if (!modal) {
            const confirmed = confirm(message);
            if (confirmed && callback) callback();
            resolve(confirmed);
            return;
        }

        // Update content
        document.getElementById('modal-confirm-title').textContent = title;
        document.getElementById('modal-confirm-message').textContent = message;

        // Update button labels and styles
        const confirmBtn = document.getElementById('modal-confirm-btn');
        const cancelBtn = document.getElementById('modal-confirm-cancel-btn');

        if (confirmBtn) confirmBtn.textContent = typeof confirmText === 'string' ? confirmText : 'Potwierdź';
        if (cancelBtn) cancelBtn.textContent = typeof cancelText === 'string' ? cancelText : 'Anuluj';

        // Swap styles based on type
        if (type === 'warning') {
            if (confirmBtn) confirmBtn.className = 'primary outline';
            if (cancelBtn) cancelBtn.className = 'primary'; // Safe action is primary
        } else {
            if (confirmBtn) confirmBtn.className = 'primary'; // Intentional action is primary
            if (cancelBtn) cancelBtn.className = 'secondary outline';
        }

        confirmPromiseResolve = (confirmed) => {
            const currentResolve = confirmPromiseResolve;
            confirmPromiseResolve = null; // Prevent double resolution
            if (confirmed && callback) callback();
            resolve(confirmed);
        };

        modal.oncancel = () => {
            if (confirmPromiseResolve) confirmPromiseResolve(false);
        };

        modal.showModal();
    });
}

window.closeConfirmModal = (confirmed) => {
    const modal = document.getElementById('modal-confirm');
    if (modal) modal.close();

    if (confirmPromiseResolve) {
        confirmPromiseResolve(confirmed);
        confirmPromiseResolve = null;
    }
};

/**
 * Generic prompt modal that returns a promise
 */
async function promptModal(message, title = 'Wprowadź dane', defaultValue = '') {
    return new Promise((resolve) => {
        let dialog = document.getElementById('app-prompt-dialog');
        if (!dialog) {
            dialog = document.createElement('dialog');
            dialog.id = 'app-prompt-dialog';
            dialog.setAttribute('aria-modal', 'true');
            dialog.innerHTML = `
                <article>
                    <header>
                        <button aria-label="Zamknij" class="close" id="prompt-close"></button>
                        <h3 id="prompt-dialog-title" class="m-0 dialog-title"></h3>
                    </header>
                    <p id="prompt-dialog-message" class="mb-1 dialog-message"></p>
                    <label for="prompt-input" class="sr-only">Wprowadź dane</label>
                    <input type="text" id="prompt-input" class="mb-1-5 dialog-input">
                    <footer>
                        <button id="prompt-cancel" class="outline secondary">Anuluj</button>
                        <button id="prompt-ok" class="primary">OK</button>
                    </footer>
                </article>
            `;
            document.body.appendChild(dialog);
        }

        const titleEl = dialog.querySelector('#prompt-dialog-title');
        const msgEl = dialog.querySelector('#prompt-dialog-message');
        const inputEl = dialog.querySelector('#prompt-input');
        const cancelBtn = dialog.querySelector('#prompt-cancel');
        const okBtn = dialog.querySelector('#prompt-ok');
        const closeBtn = dialog.querySelector('#prompt-close');

        titleEl.textContent = title;
        msgEl.textContent = message;
        inputEl.value = defaultValue;

        const close = (result) => {
            dialog.close();
            resolve(result);
        };

        okBtn.onclick = () => close(inputEl.value);
        cancelBtn.onclick = () => close(null);
        closeBtn.onclick = () => close(null);

        inputEl.onkeydown = (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                close(inputEl.value);
            }
        };

        dialog.oncancel = () => resolve(null);

        dialog.showModal();
        setTimeout(() => inputEl.focus(), 50);
    });
}

function showToast(message, type = 'success', duration = 0) {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => showToast(message, type, duration));
        return;
    }

    const container = document.getElementById('toast-container');
    if (!container) {
        console.error('Toast container (#toast-container) not found in DOM');
        return;
    }

    // NEW: Check if this exact message is already being displayed
    const existingToasts = container.querySelectorAll('.toast-content');
    for (const t of existingToasts) {
        if (t.textContent === message) {
            // Pulse the existing toast instead of adding a new one
            const parent = t.closest('.toast');
            parent.style.animation = 'none';
            parent.offsetHeight; /* trigger reflow */
            parent.style.animation = 'pulse 0.3s ease-in-out';
            return;
        }
    }

    // Prevent spamming the same toast message in very quick succession (fallback)
    const now = Date.now();
    if (message === lastToastMessage && (now - lastToastTime < 500)) {
        return;
    }
    lastToastMessage = message;
    lastToastTime = now;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.setAttribute('role', 'none'); // Container for visual and SR content

    const announcement = document.createElement('div');
    announcement.setAttribute('role', type === 'error' ? 'alert' : 'status');
    announcement.setAttribute('aria-live', type === 'error' ? 'assertive' : 'polite');
    announcement.className = 'sr-only';

    const visualContent = document.createElement('div');
    visualContent.style.display = 'flex';
    visualContent.style.alignItems = 'center';
    visualContent.style.flex = '1';
    visualContent.setAttribute('aria-hidden', 'true');

    const icons = {
        success: 'check-circle',
        error: 'alert-circle',
        warning: 'alert-triangle',
        info: 'info'
    };
    const iconName = icons[type] || 'info';

    const icon = document.createElement('i');
    icon.setAttribute('data-lucide', iconName);
    icon.className = 'toast-icon';
    icon.style.marginRight = '0.75rem';

    const textSpan = document.createElement('span');
    textSpan.className = 'toast-content';
    textSpan.textContent = message;

    visualContent.appendChild(icon);
    visualContent.appendChild(textSpan);

    const closeBtn = document.createElement('button');
    closeBtn.className = 'toast-close';
    closeBtn.setAttribute('aria-label', `Zamknij powiadomienie: ${message}`);
    closeBtn.setAttribute('type', 'button');
    closeBtn.innerHTML = '<i data-lucide="x" class="icon-sm" aria-hidden="true"></i>';

    toast.appendChild(announcement);
    toast.appendChild(visualContent);
    toast.appendChild(closeBtn);

    container.appendChild(toast);

    // Screen reader announcement
    setTimeout(() => {
        announcement.textContent = message;
    }, 50);

    if (window.lucide) {
        window.lucide.createIcons();
    }

    // Store previously focused element for restore after close
    const previouslyFocused = document.activeElement;

    closeBtn.addEventListener('click', () => {
        if (lastToastMessage === message) lastToastMessage = ""; // reset so same message can be shown again
        toast.remove();
        // Restore focus to the element that triggered the toast
        if (previouslyFocused && previouslyFocused !== document.body) {
            previouslyFocused.focus();
        }
    });

    // Move focus to close button immediately after display
    // Use setTimeout to ensure the element is in the DOM and visible
    setTimeout(() => {
        closeBtn.focus();
    }, 100);

    // Auto-hide only if explicitly requested with duration > 0
    if (duration > 0) {
        setTimeout(() => {
            if (toast.parentNode) toast.remove();
        }, duration);
    }
}

// Global state to store data and modification status for each JSON type
let editorState = {
    clauses: { data: null, modified: false, label: 'Klauzule', modifiedItems: new Set() },
    mapping: { data: null, modified: false, label: 'Mapowania', modifiedItems: new Set() },
    summaries: { data: null, modified: false, label: 'Podsumowania', modifiedItems: new Set() },
    glossary: { data: null, modified: false, label: 'Słownik', modifiedItems: new Set() }
};

let currentType = 'clauses'; // 'clauses' | 'mapping' | 'summaries' | 'glossary'
let currentData = null;      // shortcut to editorState[currentType].data
let activeItemId = null;
let currentPrefixFilter = ''; // Quick filter for clauses (C. or U.)
let isFormDirty = false;     // Tracks if the current form has unsaved changes
let isCreatingNewItem = false; // Flag: are we creating a new item or editing existing
let currentNewItemPrefix = null; // Stores forcedPrefix for new items so re-renders stay correct

// DOM Elements
const typeButtons = document.querySelectorAll('#file-type-selector button');
const loaderSection = document.getElementById('loader-section');
const workspaceSection = document.getElementById('editor-workspace');
const itemsList = document.getElementById('items-list');
const formContainer = document.getElementById('form-container');
const searchInput = document.getElementById('sidebar-search');

// Configuration for file paths
const DEFAULT_PATHS = {
    clauses: 'clauses_json/clauses.json',
    mapping: 'clauses_json/mapping.json',
    summaries: 'clauses_json/summaries.json',
    glossary: 'clauses_json/glossary.json'
};

/**
 * Initialize Event Listeners
 */
function init() {
    if (window.lucide) window.lucide.createIcons();
    // Apply persisted theme (default: dark)
    applyTheme(localStorage.getItem('kzpad-theme') || 'dark');

    // Note: Removed beforeunload to use consistent UI (toasts/modals only)
    // Users are warned when switching sections if form has unsaved changes

    // Tab switching — no preselection: user must choose type first
    // visually mark all as unpressed initially
    typeButtons.forEach(btn => { btn.setAttribute('aria-pressed', 'false'); });
    typeButtons.forEach(btn => {
        btn.addEventListener('click', async () => {
            // Check if current form has unsaved changes before switching
            if (isFormDirty) {
                const confirmSwitch = await showConfirm(
                    `Niezapisane zmiany w formularzu`,
                    `Masz niezapisane zmiany w aktualnie edytowanym formularzu. Czy na pewno chcesz zmienić kategorię? Zmiany zostaną utracone.`,
                    "Zmień bez zapisywania",
                    "Anuluj",
                    "warning"
                );
                if (!confirmSwitch) return;
            }

            // mark selection visually & accessibility state
            typeButtons.forEach(b => { b.setAttribute('aria-pressed', 'false'); b.classList.remove('active'); });
            btn.setAttribute('aria-pressed', 'true');
            btn.classList.add('active');

            // set chosen type
            const newType = btn.dataset.type;
            currentType = newType;

            // Clear search when switching categories
            const searchInput = document.getElementById('sidebar-search');
            if (searchInput) searchInput.value = '';

            // If we already have data for this type, switch to it
            if (editorState[currentType].data) {
                currentData = editorState[currentType].data;
                onDataLoaded(`Pamięć: ${currentType}`);
            } else {
                // No data, show loader (next step)
                loaderSection.classList.remove('hidden');
                workspaceSection.classList.add('hidden');

                // show & focus loader H2
                const loaderTitle = document.getElementsByClassName('loader-title')[0];
                if (loaderTitle) {
                    loaderTitle.classList.remove('hidden');
                    // Update heading text to reflect selected category with specific messages
                    const categoryMessages = {
                        'clauses': 'Wczytaj plik z klauzulami',
                        'mapping': 'Wczytaj plik z mapowaniem',
                        'summaries': 'Wczytaj plik z podsumowaniami',
                        'glossary': 'Załaduj plik słownika'
                    };
                    const headingText = categoryMessages[currentType];
                    loaderTitle.textContent = headingText;
                    loaderTitle.className = 'loader-title';
                    
                    // Update loader card descriptions based on category
                    const categoryLabels = {
                        'clauses': 'klauzulami',
                        'mapping': 'mapowaniem',
                        'summaries': 'podsumowaniami',
                        'glossary': 'słownika'
                    };
                    const categoryLabel = categoryLabels[currentType];
                    
                    const defaultsDesc = document.getElementById('defaults-desc');
                    if (defaultsDesc) {
                        if (currentType === 'glossary') {
                            defaultsDesc.innerHTML = `<small>Załaduj plik słownika, na którym pracuje aplikacja</small>`;
                        } else {
                            defaultsDesc.innerHTML = `<small>Użyj pliku z ${categoryLabel}, na którym pracuje aplikacja</small>`;
                        }
                    }
                    
                    const fileDesc = document.getElementById('file-desc');
                    if (fileDesc) {
                        if (currentType === 'glossary') {
                            fileDesc.innerHTML = `<small>Załaduj plik słownika z dysku komputera</small>`;
                        } else {
                            fileDesc.innerHTML = `<small>Załaduj plik z ${categoryLabel} z dysku komputera</small>`;
                        }
                    }
                    
                    // Focus first action button to provide immediate interaction point
                    // Screen reader announces heading automatically when text changes
                    const firstButton = document.getElementById('btn-load-defaults');
                    if (firstButton) {
                        firstButton.focus();
                    }
                    loaderSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }

                // reset editor view state (keep other types' data)
                resetEditorViewState();
            }
        });
    });

    // Load defaults
    document.getElementById('btn-load-defaults').addEventListener('click', loadDefaults);

    // File input change
    document.getElementById('file-input').addEventListener('change', handleFileUpload);

    // Clear selection/focus when clicking outside list items
    document.addEventListener('click', (e) => {
        // Find if we clicked inside a list item or a button/input
        const isClickInside = e.target.closest('.list-item') ||
            e.target.closest('button') ||
            e.target.closest('input') ||
            e.target.closest('textarea');

        if (!isClickInside) {
            // Remove focus from any active element
            if (document.activeElement) {
                document.activeElement.blur();
            }
        }
    });

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        renderList(term);
    });

    // Track changes in the form to prevent accidental data loss
    formContainer.addEventListener('input', () => {
        isFormDirty = true;
    });
    formContainer.addEventListener('change', (e) => {
        // Change event covers checkboxes and selects better than input in some browsers
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') {
            isFormDirty = true;
        }
    });

    // Topbar download icon (nav)
    const navDownload = document.getElementById('btn-download-json-nav');
    if (navDownload) navDownload.addEventListener('click', exportAllModified);

    // Theme toggle
    const themeToggle = document.getElementById('btn-theme-toggle');
    if (themeToggle) themeToggle.addEventListener('click', () => toggleTheme());

    // Enhance icon buttons with visible labels
    enhanceIconButtons();
}

/**
 * Adds a new entry to the current data
 * @param {string} forcedPrefix - opcjonalny prefiks (np. 'C.' lub 'U.')
 */
function addNewItem(forcedPrefix) {
    if (!currentData) {
        showToast("Najpierw załaduj plik!", "warning");
        return;
    }

    if (currentType === 'summaries') {
        showToast("Podsumowania mają sztywną strukturę. Dodawanie nowych elementów jest zablokowane.", "info");
        return;
    }

    // Mark as creating new item and open form directly
    isCreatingNewItem = true;
    activeItemId = '';
    
    let newItemData = null;
    
    if (currentType === 'clauses') {
        const baseStructure = {
            id: '',
            title: "",
            evaluation: "",
            procedure: [],
            checklist: [],
            preconditions: [],
            notes: []
        };

        if (forcedPrefix === 'C.') {
            baseStructure.title = "";
            baseStructure.form = { inputs: [] };
        } else {
            baseStructure.title = "";
            baseStructure.form = {};
        }
        newItemData = { ...baseStructure };
    } else if (currentType === 'glossary') {
        newItemData = "";
    } else if (currentType === 'mapping') {
        newItemData = {
            id: '',
            legal_id: "",
            article: "",
            category: "",
            requirement: "",
            product_mappings: Object.fromEntries(Object.keys(currentData.products || {}).map(p => [p, null]))
        };
    }

    // Show form directly
    itemsList.style.display = 'none';
    formContainer.style.display = 'block';
    
    const addActions = document.getElementById('add-item-actions');
    if (addActions) addActions.style.display = 'none';
    
    document.getElementById('sidebar-search').style.display = 'none';
    const quickFilters = document.getElementById('quick-filters');
    if (quickFilters) quickFilters.classList.add('hidden');
    
    const specialActions = document.getElementById('special-actions');
    if (specialActions) specialActions.style.display = 'none';

    if (currentType === 'clauses') {
        currentData[''] = newItemData;
        currentNewItemPrefix = forcedPrefix;
        renderClauseForm('', newItemData, forcedPrefix);
    } else if (currentType === 'glossary') {
        renderGlossaryForm('', newItemData);
    } else if (currentType === 'mapping') {
        renderMappingForm('', newItemData);
    }

    if (window.lucide) window.lucide.createIcons();

    setTimeout(() => {
        // Focus on ID input field
        const idInput = document.getElementById('edit-id');
        if (idInput) idInput.focus();
    }, 0);
}

window.closeAddItemModal = () => {
    const modal = document.getElementById('modal-add-item');
    if (modal) modal.close();
};

/**
 * Wstawia nowy klucz do obiektu we właściwej pozycji (natural sort).
 * Zamiast dodawać na końcu, szuka miejsca gdzie nowy klucz "pasuje" w posortowanej kolejności.
 */
function insertKeyAtNaturalPosition(obj, newId, newValue) {
    const keys = Object.keys(obj);

    // Znajdź indeks wśród istniejących kluczy gdzie newId "pasuje" naturalnie
    // bez zmiany kolejności pozostałych kluczy
    let insertIdx = keys.length; // domyślnie na końcu
    for (let i = 0; i < keys.length; i++) {
        const cmp = newId.localeCompare(keys[i], undefined, { numeric: true, sensitivity: 'base' });
        if (cmp < 0) { insertIdx = i; break; }
    }

    // Wstaw nowy klucz w znalezione miejsce, reszta bez zmian
    const result = {};
    for (let i = 0; i < keys.length; i++) {
        if (i === insertIdx) result[newId] = newValue;
        result[keys[i]] = obj[keys[i]];
    }
    if (insertIdx === keys.length) result[newId] = newValue;
    return result;
}

/**
 * Wstawia nowy element do tablicy matrix we właściwej pozycji (natural sort po id).
 */
function insertMatrixItemAtNaturalPosition(matrix, newItem) {
    const allIds = [...matrix.map(it => it.id), newItem.id].sort((a, b) =>
        a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })
    );
    const insertIdx = allIds.indexOf(newItem.id);
    const result = [...matrix];
    result.splice(insertIdx, 0, newItem);
    return result;
}

window.confirmAddItem = () => {
    const input = document.getElementById('new-item-id');
    const newId = input.value.trim();

    if (!newId) return;

    if (currentType === 'clauses') {
        if (currentData[newId]) { showToast("Element o tym ID już istnieje!", "error"); return; }

        // Domyślna struktura zależna od typu klauzuli
        const baseStructure = {
            id: newId,
            title: "",
            evaluation: "",
            procedure: [],
            checklist: [],
            preconditions: [],
            notes: []
        };

        if (newId.startsWith('C.')) {
            // Struktura dla klauzuli Technicznej (C)
            baseStructure.title = "";
            baseStructure.form = {
                inputs: []
            };
        } else {
            // Struktura dla klauzuli Prawnej (U)
            baseStructure.title = "";
            baseStructure.form = {};
        }

        currentData = insertKeyAtNaturalPosition(currentData, newId, baseStructure);
        editorState[currentType].data = currentData;
    } else if (currentType === 'glossary') {
        if (currentData[newId]) { showToast("To hasło już istnieje!", "error"); return; }
        currentData = insertKeyAtNaturalPosition(currentData, newId, "");
        editorState[currentType].data = currentData; // New entry in glossary is just an empty definition string
    } else if (currentType === 'mapping') {
        if (currentData.matrix.find(it => it.id === newId)) { showToast("Element o tym ID już istnieje!", "error"); return; }
        currentData.matrix = insertMatrixItemAtNaturalPosition(currentData.matrix, {
            id: newId,
            legal_id: "",
            article: "",
            category: "",
            requirement: "",
            product_mappings: Object.fromEntries(Object.keys(currentData.products || {}).map(p => [p, null]))
        });
    }

    markAsModified(newId);
    closeAddItemModal();
    renderList(searchInput.value);
    loadItem(newId, true);

    const typeLabel = editorState[currentType].label || currentType;
    showToast(`Dodano nowy element (${typeLabel}): ${newId}. Pamiętaj o pobraniu zmian!`, "success");
};

window.deleteItem = (key) => {
    if (!currentData) return;

    let itemName = key;
    if (currentType === 'clauses' && currentData[key]?.title) {
        itemName = `${key} (${currentData[key].title})`;
    } else if (currentType === 'glossary' && currentData[key]?.term) {
        itemName = `${key} (${currentData[key].term})`;
    }

    showConfirm(
        "Usuwanie elementu",
        `Czy na pewno chcesz bezpowrotnie usunąć element: ${itemName}?`,
        () => {
            if (currentType === 'clauses' || currentType === 'glossary') {
                delete currentData[key];
                editorState[currentType].modifiedItems.delete(key);
            } else if (currentType === 'mapping') {
                const idx = (currentData.matrix || []).findIndex(it => it.id === key);
                if (idx !== -1) {
                    currentData.matrix.splice(idx, 1);
                    editorState[currentType].modifiedItems.delete(key);
                }
            } else if (currentType === 'summaries') {
                showToast("Podsumowania mają sztywną strukturę i nie mogą być usuwane.", "warning");
                return;
            }

            if (activeItemId === key) {
                showList(true);
            }

            markAsModified();
            renderList(searchInput.value);
            showToast(`Usunięto element: ${key}. Pamiętaj o eksporcie uaktualnionego pliku JSON!`, "success");
        },
        "Anuluj",
        "warning"
    );
};

/**
 * Marks current type as modified and updates UI
 */
/**
 * Marks current type as modified and updates UI
 */
function markAsModified(itemId = null) {
    if (!currentData) return;

    const state = editorState[currentType];
    state.modified = true;

    // Add specific item to modified list if provided or if we have an active item
    const targetId = itemId || activeItemId;
    if (targetId) {
        state.modifiedItems.add(targetId);
    }

    updateDownloadButtonState();
}

/**
 * Updates the download button appearance if modifications exist
 */
function updateDownloadButtonState() {
    const navDownload = document.getElementById('btn-download-json-nav');
    if (!navDownload) return;

    const modifiedCount = Object.values(editorState).filter(s => s.modified && s.data).length;

    let label = "Pobierz zmiany (JSON)";
    if (modifiedCount > 0) {
        navDownload.classList.remove('secondary');
        navDownload.classList.add('primary');
        const pl = plPlural(modifiedCount, 'plik', 'pliki', 'plików');
        label = `Pobierz zmienione pliki (${modifiedCount} ${pl})`;
    } else {
        navDownload.classList.remove('primary');
        navDownload.classList.add('secondary');
    }

    navDownload.setAttribute('aria-label', label);
    navDownload.setAttribute('data-icon-label', label);

    // Update visible label if exists
    const labelEl = navDownload.querySelector('.icon-label');
    if (labelEl) {
        labelEl.textContent = label;
        if (labelEl.classList.contains('icon-label--visible')) {
            placeIconLabel(navDownload, labelEl);
        }
    }

    // Update category buttons (hero-cards) to show modification status
    typeButtons.forEach(btn => {
        const type = btn.dataset.type;
        const state = editorState[type];

        let indicator = btn.querySelector('.mod-indicator');
        if (state && state.modified) {
            if (!indicator) {
                indicator = document.createElement('span');
                indicator.className = 'mod-indicator';
                indicator.title = "Niezapisane zmiany";
                indicator.style.cssText = "position:absolute; top:0.625rem; right:0.625rem; width:0.625rem; height:0.625rem; background:var(--primary); border-radius:50%; box-shadow: 0 0 0.3125rem var(--primary);";
                btn.style.position = 'relative';
                btn.appendChild(indicator);
            }
        } else if (indicator) {
            indicator.remove();
        }
    });
}

/**
 * Resets the editor view state when switching types
 * NOTE: Does NOT clear editorState[type].data
 */
function resetEditorViewState() {
    activeItemId = null;
    currentPrefixFilter = ''; // Reset quick filter

    // Reset quick filter UI buttons
    document.querySelectorAll('#quick-filters button').forEach(btn => {
        if (btn.dataset.prefix === '') btn.classList.add('active');
        else btn.classList.remove('active');
    });

    workspaceSection.classList.add('hidden');
    itemsList.innerHTML = '';
    formContainer.innerHTML = '<p class="secondary">Wybierz element z listy, aby rozpocząć edycję.</p>';

    // Show list, hide form
    itemsList.style.display = 'block';
    formContainer.style.display = 'none';

    // hide title container until user selects a category or loads data
    const titleContainer = document.querySelector('.editor-title-container');
    if (titleContainer) titleContainer.classList.add('hidden');
}

/**
 * Loads default files from the server
 */
async function loadDefaults() {
    const path = DEFAULT_PATHS[currentType];
    try {
        // Dodajemy timestamp, aby ominąć cache przeglądarki przy wczytywaniu z serwera
        const response = await fetch(`${path}?t=${Date.now()}`, { cache: 'no-store' });
        if (!response.ok) throw new Error(`Błąd ładowania: ${response.statusText}`);
        const data = await response.json();
        editorState[currentType].data = data;
        currentData = data;
        onDataLoaded(`Domyślny: ${path}`);
    } catch (err) {
        showToast("Nie udało się pobrać pliku z serwera: " + err.message, "error");
    }
}

/**
 * Handles manual file upload
 */
function handleFileUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
        try {
            const data = JSON.parse(event.target.result);
            editorState[currentType].data = data;
            currentData = data;
            onDataLoaded(`Wgrany: ${file.name}`);
        } catch (err) {
            showToast("Błąd parsowania pliku JSON: " + err.message, "error");
        }
    };
    reader.readAsText(file);
}

/**
 * Called when data is ready for editing
 */
function onDataLoaded(sourceInfo) {
    // Nie dotykamy loaderSection — fokus zostaje na przycisku "Wczytaj".
    // Pokazujemy workspace (był hidden), ale NIE chowamy loadera.
    workspaceSection.classList.remove('hidden');

    // update editor H2
    const mapNames = { clauses: 'klauzule', mapping: 'mapowania', summaries: 'podsumowania', glossary: 'słownik' };
    const catName = mapNames[currentType] || currentType;
    const editorCat = document.getElementById('editor-category-name');
    if (editorCat) editorCat.textContent = catName;

    // show editor title container and secondary actions
    const titleContainer = document.querySelector('.editor-title-container');
    if (titleContainer) titleContainer.classList.remove('hidden');

    // Show/hide quick filters for clauses
    const quickFilters = document.getElementById('quick-filters');
    if (quickFilters) {
        quickFilters.classList.toggle('hidden', currentType !== 'clauses');
    }

    // Renderuj listę
    showList(true);

    if (window.lucide) window.lucide.createIcons();

    // Najpierw focus (NVDA ogłosi nagłówek), potem announce z opóźnieniem
    // żeby live region nie był przerywany przez zmianę fokusu
    const editorTitle = document.getElementById('editor-title');
    if (editorTitle) {
        editorTitle.scrollIntoView({ behavior: 'smooth', block: 'start' });
        editorTitle.focus({ preventScroll: true });
    }

    // Ogłoszenie SR po tym jak NVDA skończy czytać nagłówek (~500ms)
    setTimeout(() => srAnnounce(buildLoadAnnouncement()), 500);
}

/**
 * Renders the sidebar list based on current type and search term
 */
function renderList(searchTerm = '') {
    const term = (searchTerm || '').toLowerCase();
    itemsList.innerHTML = '';

    // Podpowiedź jako pierwszy element listy (li), tylko dla listy
    if (currentType !== 'summaries') {
        const hintLi = document.createElement('li');
        hintLi.className = 'list-hint';
        let hintText = '<i data-lucide="info" class="icon-sm" aria-hidden="true"></i> <span>Chwyć uchwyt kropkowany, aby przeciągnąć, lub użyj <strong>Alt + strzałki</strong>, aby zmienić kolejność.</span>';
        if (currentType === 'glossary') {
            hintText = '<i data-lucide="info" class="icon-sm" aria-hidden="true"></i> <span>W aplikacji, wpisy w słowniku są automatycznie ułożone <strong>alfabetycznie</strong></span>';
        }
        hintLi.innerHTML = hintText;
        itemsList.appendChild(hintLi);
    } else {
        itemsList.removeAttribute('aria-describedby');
    }

    // Obsługa dodawania nowych elementów (dynamiczne przyciski pod wyszukiwarką)
    const addActions = document.getElementById('add-item-actions');
    if (addActions) {
        addActions.innerHTML = '';
        if (currentType === 'clauses') {
            const grid = document.createElement('div');
            grid.style.display = 'grid';
            grid.style.gridTemplateColumns = '1fr 1fr';
            grid.style.gap = '0.5rem';

            const btnC = document.createElement('button');
            btnC.className = 'primary small';
            btnC.innerHTML = '<i data-lucide="plus" class="icon-left" aria-hidden="true"></i> Dodaj klauzulę C';
            btnC.onclick = () => addNewItem('C.');

            const btnU = document.createElement('button');
            btnU.className = 'primary small';
            btnU.innerHTML = '<i data-lucide="plus" class="icon-left" aria-hidden="true"></i> Dodaj klauzulę U';
            btnU.onclick = () => addNewItem('U.');

            grid.appendChild(btnC);
            grid.appendChild(btnU);
            addActions.appendChild(grid);
        } else if (currentType !== 'summaries') {
            const btn = document.createElement('button');
            btn.className = 'primary small';
            btn.style.width = 'auto';
            btn.innerHTML = (currentType === 'mapping') ? '+ Dodaj nowe mapowanie' : '+ Dodaj nowy wpis';
            btn.onclick = () => addNewItem();
            addActions.appendChild(btn);
        }
    }

    // Obsługa akcji specjalnych (np. Zarządzaj produktami) nad listą
    const specialActions = document.getElementById('special-actions');
    if (specialActions) {
        specialActions.innerHTML = '';
        if (currentType === 'mapping') {
            const productItem = document.createElement('button');
            productItem.type = 'button';
            productItem.className = 'special-action-item' + (activeItemId === '_products' ? ' active' : '');
            productItem.setAttribute('aria-pressed', activeItemId === '_products' ? 'true' : 'false');
            productItem.innerHTML = `
                <i data-lucide="package" class="icon-md" aria-hidden="true"></i>
                Zarządzaj produktami
            `;
            productItem.onclick = () => loadItem('_products');
            specialActions.appendChild(productItem);
        }
    }
    if (window.lucide) window.lucide.createIcons();

    let keys = [];

    const naturalSort = (arr) => {
        return arr.sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));
    };

    if (currentType === 'clauses' || currentType === 'glossary') {
        // Keep the original order from JSON (legal text structure)
        keys = Object.keys(currentData);
    } else if (currentType === 'mapping') {
        keys = (currentData.matrix || []).map(item => item.id);
    } else if (currentType === 'summaries') {
        keys = Object.keys(currentData.compliance_summaries || {});
    }

    // Apply quick prefix filter if active
    if (currentType === 'clauses' && currentPrefixFilter) {
        keys = keys.filter(k => k.startsWith(currentPrefixFilter));
    }

    keys.filter(key => {
        if (key.toLowerCase().includes(term)) return true;

        // Extended search for better usability
        if (currentType === 'clauses' && currentData[key]) {
            return (currentData[key].title || '').toLowerCase().includes(term);
        } else if (currentType === 'mapping') {
            const item = (currentData.matrix || []).find(it => it.id === key);
            if (item) {
                return (item.article || '').toLowerCase().includes(term) ||
                    (item.category || '').toLowerCase().includes(term) ||
                    (item.requirement || '').toLowerCase().includes(term);
            }
        } else if (currentType === 'glossary' && currentData[key]) {
            return (currentData[key].term || '').toLowerCase().includes(term) ||
                (currentData[key].definition || '').toLowerCase().includes(term);
        } else if (currentType === 'summaries' && currentData.compliance_summaries && currentData.compliance_summaries[key]) {
            const s = currentData.compliance_summaries[key];
            const friendly = {
                'full_compliance': 'Zgodny (Pełny)',
                'non_compliance_full': 'Niezgodny (Pełny)',
                'partial_compliance_passed': 'Zgodny w zakresie (Częściowy)',
                'partial_compliance_failed': 'Niezgodny (Częściowy)',
                'no_assessment': 'Brak ocen',
                'all_inapplicable': 'Brak wymagań (Pełny)',
                'all_inapplicable_partial': 'Brak wymagań (Częściowy)'
            };
            return (s.title || '').toLowerCase().includes(term) ||
                (s.status || '').toLowerCase().includes(term) ||
                (friendly[key] || '').toLowerCase().includes(term);
        }
        return false;
    })
        .forEach(key => {
            const li = document.createElement('li');
            li.className = 'list-item' + (activeItemId === key ? ' active' : '');
            li.dataset.key = key;
            // li is NOT a tab stop — buttons inside are the tab targets.
            // Clicking anywhere on the card (not on action buttons) opens the edit form.
            li.onclick = () => loadItem(key);

            // 1. Add Drag Handle (Grip) for visual cue only
            if (currentType !== 'summaries' && currentType !== 'glossary') {
                const handle = document.createElement('span');
                handle.className = 'drag-handle';
                handle.setAttribute('aria-hidden', 'true');
                handle.innerHTML = '<i data-lucide="grip-vertical" aria-hidden="true"></i>';
                li.appendChild(handle);
            }

            // Drag and Drop support — ENABLED only when reordering is allowed
            if (currentType !== 'summaries' && currentType !== 'glossary') {
                li.draggable = true;

                li.addEventListener('dragstart', (e) => {
                    e.dataTransfer.setData('text/plain', key);
                    setTimeout(() => li.classList.add('dragging'), 0);
                    e.dataTransfer.effectAllowed = 'move';
                });

                li.addEventListener('dragover', (e) => {
                    e.preventDefault();
                    e.dataTransfer.dropEffect = 'move';
                    li.classList.add('drag-over');
                });

                li.addEventListener('dragleave', () => {
                    li.classList.remove('drag-over');
                });

                li.addEventListener('drop', (e) => {
                    e.preventDefault();
                    li.classList.remove('drag-over');
                    const draggedKey = e.dataTransfer.getData('text/plain');
                    if (draggedKey && draggedKey !== key) {
                        reorderTo(draggedKey, key);
                    }
                });

                li.addEventListener('dragend', () => {
                    li.classList.remove('dragging');
                    document.querySelectorAll('.list-item').forEach(i => i.classList.remove('drag-over'));
                });
            } else {
                li.draggable = false;
            }

            // Modification indicator (per-item)
            if (editorState[currentType].modifiedItems.has(key)) {
                const dot = document.createElement('span');
                dot.className = 'item-mod-indicator';
                dot.title = 'Ten element został zmieniony';
                dot.setAttribute('aria-label', 'Niezapisane zmiany');
                dot.setAttribute('role', 'img');
                li.appendChild(dot);
            }

            // Visual label — aria-hidden because screen reader gets context from editBtn's aria-label
            const label = document.createElement('span');
            label.className = 'list-key';
            label.setAttribute('aria-hidden', 'true');

            // Compute displayText
            let displayText = key;
            if (currentType === 'clauses' && currentData[key] && currentData[key].title) {
                const title = currentData[key].title;
                if (title.startsWith(key + ' ')) {
                    displayText = title;
                } else {
                    displayText = key + ' | ' + title;
                }
            } else if (currentType === 'glossary' && currentData[key] && currentData[key].term) {
                const term = currentData[key].term;
                if (term.startsWith(key + ' ')) {
                    displayText = term;
                } else {
                    displayText = key + ' | ' + term;
                }
            } else if (currentType === 'summaries' && currentData.compliance_summaries && currentData.compliance_summaries[key]) {
                const s = currentData.compliance_summaries[key];
                const templateNames = {
                    'full_compliance': 'ZGODNY (Pełny zakres - wszystkie klauzule OK)',
                    'non_compliance_full': 'NIEZGODNY (Pełny zakres - błędy w klauzulach)',
                    'partial_compliance_passed': 'ZGODNY W ZAKRESIE (Częściowy zakres - sprawdzone OK)',
                    'partial_compliance_failed': 'NIEZGODNY (Częściowy zakres - błędy w sprawdzonych)',
                    'no_assessment': 'BŁĄD: BRAK OCEN (Nie wypełniono arkusza)',
                    'all_inapplicable': 'BRAK WYMAGAŃ (Wszystkie klauzule: Nie dotyczy)',
                    'all_inapplicable_partial': 'BRAK WYMAGAŃ (Częściowy zakres: Wszystkie "Nie dotyczy")'
                };
                displayText = templateNames[key] || s.status || key;
            } else if (currentType === 'mapping') {
                const item = (currentData.matrix || []).find(it => it.id === key);
                if (item) {
                    const article = item.article || '';
                    const category = item.category || '';
                    displayText = `${key} | ${article} | ${category}`;
                }
            }
            label.textContent = displayText;
            li.appendChild(label);

            // Edit button — PRIMARY tab stop on the card.
            // aria-label includes full displayText so screen reader announces
            // context + action in one: "Edytuj: [full name], przycisk"
            const editBtn = document.createElement('button');
            editBtn.className = 'primary outline small';
            editBtn.textContent = 'Edytuj';
            editBtn.setAttribute('aria-label', `Edytuj: ${displayText}`);

            // Keyboard reordering (Alt+Arrow) handled on the edit button
            if (currentType !== 'summaries' && currentType !== 'glossary') {
                editBtn.addEventListener('keydown', (e) => {
                    if (e.altKey && (e.key === 'ArrowUp' || e.key === 'ArrowDown')) {
                        e.preventDefault();
                        const delta = e.key === 'ArrowUp' ? -1 : 1;
                        if (currentType === 'mapping') {
                            moveMatrixItem(key, delta);
                        } else {
                            moveObjectItem(currentType, key, delta);
                        }
                        // Refocus the edit button after re-render
                        setTimeout(() => {
                            const newLi = document.querySelector(`li[data-key="${key}"]`);
                            if (newLi) {
                                const btn = newLi.querySelector('button.primary');
                                if (btn) btn.focus();
                            }
                        }, 50);
                    }
                });
            }
            editBtn.onclick = (e) => { e.stopPropagation(); loadItem(key); };
            li.appendChild(editBtn);

            // Delete button
            if (currentType !== 'summaries' && currentType !== 'glossary') {
                const delBtn = document.createElement('button');
                delBtn.className = 'primary outline small';
                delBtn.innerHTML = '<i data-lucide="trash-2" class="icon-xs" aria-hidden="true"></i>';
                delBtn.style.margin = '0';
                delBtn.setAttribute('aria-label', `Usuń: ${key}`);
                delBtn.onclick = (e) => { e.stopPropagation(); deleteItem(key); };
                li.appendChild(delBtn);
            }

            itemsList.appendChild(li);
        });


    if (window.lucide) window.lucide.createIcons();
}

/**
 * Shows the list view, hides the form
 */
async function showList(force = false) {
    if (!force && isFormDirty) {
        const confirmResult = await showConfirm(
            "Nieopisane zmiany",
            "Masz niezapisane zmiany w formularzu. Jeśli teraz wrócisz do listy, te zmiany zostaną utracone.",
            "Wyjdź bez zapisywania",
            "Zostań w edycji",
            "warning"
        );
        if (!confirmResult) return;
    }

    isFormDirty = false;
    const lastActiveId = activeItemId; // zapamiętaj przed wyzerowaniem
    activeItemId = null;
    // Clean up new-item placeholder if user cancels without saving
    if (currentData && currentData['']) delete currentData[''];
    currentNewItemPrefix = null;
    itemsList.style.display = 'block';
    formContainer.style.display = 'none';

    // Show add actions and search
    const addActions = document.getElementById('add-item-actions');
    const isSummaries = currentType === 'summaries';
    if (addActions) addActions.style.display = isSummaries ? 'none' : 'block';

    document.getElementById('sidebar-search').style.display = 'block';

    const specialActions = document.getElementById('special-actions');
    if (specialActions) specialActions.style.display = 'block';

    // Show quick filters only for clauses in list view
    const quickFilters = document.getElementById('quick-filters');
    if (quickFilters) {
        if (currentType === 'clauses') quickFilters.classList.remove('hidden');
        else quickFilters.classList.add('hidden');
    }

    renderList(searchInput.value);

    // Ustaw focus na przycisku Edytuj ostatnio edytowanego elementu
    if (lastActiveId) {
        setTimeout(() => {
            const targetLi = Array.from(itemsList.querySelectorAll('.list-item'))
                .find(el => el.dataset.key === lastActiveId);
            if (targetLi) {
                const editBtn = targetLi.querySelector('button.primary');
                const focusTarget = editBtn || targetLi;
                focusTarget.focus();
                targetLi.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }, 50);
    }
}

/**
 * Sets the prefix filter for clauses (C. or U.)
 */
window.setPrefixFilter = (prefix) => {
    currentPrefixFilter = prefix;

    // Update UI + aria-pressed
    document.querySelectorAll('#quick-filters button').forEach(btn => {
        const isActive = btn.dataset.prefix === prefix;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    renderList(searchInput.value);
};
/**
 * Loads an item into the editor form
 */
async function loadItem(id, force = false, suppressHeaderFocus = false) {
    if (!force && isFormDirty && activeItemId !== id) {
        const confirmResult = await showConfirm(
            "Zmiana edytowanej pozycji",
            "Masz niezapisane zmiany w aktualnie edytowanym formularzu. Jeśli przejdziesz do innej pozycji, te zmiany zostaną utracone.",
            "Przejdź bez zapisywania",
            "Anuluj",
            "warning"
        );
        if (!confirmResult) return;
    }

    activeItemId = id;
    isFormDirty = false; // Reset the dirty flag when a new item is loaded
    if (id !== '') isCreatingNewItem = false; // Keep true while still in new-item mode
    renderList(searchInput.value); // refresh active state in list
    // Ukryj listę i podpowiedź, gdy edytujemy formularz
    itemsList.style.display = 'none';
    formContainer.style.display = 'block';

    // Hide add actions container instead of individual button
    const addActions = document.getElementById('add-item-actions');
    if (addActions) addActions.style.display = 'none';

    document.getElementById('sidebar-search').style.display = 'none';
    const quickFilters = document.getElementById('quick-filters');
    if (quickFilters) quickFilters.classList.add('hidden');

    const specialActions = document.getElementById('special-actions');
    if (specialActions) specialActions.style.display = 'none';

    let itemData = null;
    if (currentType === 'clauses') {
        itemData = currentData[id];
        renderClauseForm(id, itemData, id === '' ? currentNewItemPrefix : null);
    } else if (currentType === 'glossary') {
        itemData = currentData[id];
        renderGlossaryForm(id, itemData);
    } else if (currentType === 'mapping') {
        if (id === '_products') {
            renderProductsForm();
        } else {
            itemData = currentData.matrix.find(it => it.id === id);
            renderMappingForm(id, itemData);
        }
    } else if (currentType === 'summaries') {
        itemData = currentData.compliance_summaries[id];
        renderSummaryForm(id, itemData);
    }

    if (window.lucide) window.lucide.createIcons();

    // Auto-resize all textareas once the form is loaded
    // + przenieś fokus na formularz, aby czytnik ekranu wiedział o zmianie kontekstu
    setTimeout(() => {
        document.querySelectorAll('#form-container textarea').forEach(tx => {
            autoResize(tx);
        });
        if (!suppressHeaderFocus) {
            // Ustaw focus na nagłówku formularza (h3)
            const h3 = document.querySelector('#form-container h3');
            if (h3) h3.focus();
        }
    }, 0);
}

/**
 * Automatically resizes a textarea based on its content
 */
window.autoResize = (el) => {
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = (el.scrollHeight + 2) + 'px';
};

/**
 * EDITOR: Clauses
 */
function renderClauseForm(id, data, forcedPrefix = null) {
    const isLegal = id.startsWith('U.') || forcedPrefix === 'U.';
    const isNew = isCreatingNewItem;

    // Ensure all required arrays exist
    if (!data.preconditions) data.preconditions = [];
    if (!data.procedure) data.procedure = [];
    if (!data.checklist) data.checklist = [];
    if (!data.notes) data.notes = [];
    if (!data.form) data.form = {};
    if (!data.form.inputs && !isLegal) data.form.inputs = [];

    // Build ID hints HTML — always shown so layout is consistent for new and edit
    let idHintsHTML;
    if (forcedPrefix === 'C.' || id.startsWith('C.')) {
        idHintsHTML = `
            <small class="field-hint">
                Format: <strong>C.[rozdział].[punkt]</strong> (np. C.9.2.1.1)<br>
                Używaj numeracji zgodnej z rozdziałami normy <strong>EN 301 549</strong>
            </small>
        `;
    } else if (forcedPrefix === 'U.' || id.startsWith('U.')) {
        idHintsHTML = `
            <small class="field-hint">
                Format: <strong>U.[art].[ust].[pkt].[lit]-[tiret]</strong> (np. U.7.1.1.a lub U.7.1.1.a-01)<br>
                Art. = numer artykułu, Ust. = ustęp, Pkt = punkt, Lit. = litera, Tiret = myślnik numeryczny
            </small>
        `;
    } else {
        idHintsHTML = `
            <small class="field-hint">
                <strong>C.[Numer]</strong> dla klauzul technicznych (Norma EN 301 549)<br>
                <strong>U.[Numer]</strong> dla klauzul prawnych (Ustawa PAD)
            </small>
        `;
    }

    formContainer.innerHTML = `
        <p class="text-left"><a href="#" aria-label="Powrót do listy" onclick="showList(); return false;"><span aria-hidden="true">← </span>Powrót do listy</a></p>
        
        <div class="field-group" role="region" aria-labelledby="h3-clause-header">
            <div class="section-header">
                <i data-lucide="${isLegal ? 'scale' : 'code'}" class="icon-md icon-primary" aria-hidden="true"></i>
                <h3 id="h3-clause-header" class="m-0" tabindex="-1">${isNew ? (forcedPrefix === 'U.' ? 'Nowa klauzula prawna (U)' : forcedPrefix === 'C.' ? 'Nowa klauzula techniczna (C)' : 'Nowa klauzula') : 'Edycja: ' + (isLegal ? 'Klauzula Prawna' : 'Klauzula Techniczna')}</h3>
            </div>

            <label for="edit-id">Identyfikator (ID)
                ${idHintsHTML}
                <input type="text" id="edit-id" value="${id}">
            </label>

            <label for="edit-title">Tytuł klauzuli
                <input type="text" id="edit-title" value="${data.title || ''}">
            </label>

            ${isLegal ? `
            <fieldset>
                <legend>Kategoria</legend>
                <label for="edit-category-accessibility">
                    <input type="radio" name="edit-category" id="edit-category-accessibility" value="accessibility_requirements" ${(data.category === 'accessibility_requirements' || !data.category) ? 'checked' : ''}>
                    Wymagania dostępności
                </label>
                <label for="edit-category-obligations">
                    <input type="radio" name="edit-category" id="edit-category-obligations" value="service_provider_obligations" ${data.category === 'service_provider_obligations' ? 'checked' : ''}>
                    Obowiązki producenta / usługodawcy
                </label>
            </fieldset>
            ` : ''}
            
            <label for="edit-evaluation">Metoda oceny (Evaluation)
                <input type="text" id="edit-evaluation" value="${data.evaluation || ''}">
            </label>
        </div>

        <div class="field-group" role="region" aria-labelledby="h4-preconditions">
            <h4 id="h4-preconditions">Wymagania wstępne (Preconditions)</h4>
            <div id="preconditions-container">
                ${data.preconditions.map((item, idx) => renderArrayItem('preconditions', item, idx, isLegal, data.preconditions)).join('')}
            </div>
            <button class="outline contrast small" onclick="addArrayItem('preconditions')">+ Dodaj warunek</button>
        </div>

        <div class="field-group" role="region" aria-labelledby="h4-procedure">
            <h4 id="h4-procedure">${isLegal ? 'Jak to rozumieć?' : 'Procedura badania (Procedure)'}</h4>
            <div id="procedure-container">
                ${data.procedure.map((item, idx) => renderArrayItem('procedure', item, idx, isLegal, data.procedure)).join('')}
            </div>
            <button class="outline contrast small" onclick="addArrayItem('procedure')">${isLegal ? '+ Dodaj punkt' : '+ Dodaj krok'}</button>
        </div>

        ${!isLegal ? `
        <!-- KRYTERIA SUKCESU (form) - Tylko dla technicznych -->
        <div class="field-group" role="region" aria-labelledby="h4-criteria">
            <h4 id="h4-criteria">Kryteria sukcesu (Logic)</h4>
            
            <div class="mt-1">
                <!-- Nagłówki dla dostępności i przejrzystości -->
                <div class="table-header-compact">
                    <div>Wynik (Wartość)</div>
                    <div>Warunek / Kryterium wyboru</div>
                    <div></div>
                </div>

                <div id="form-inputs-container">
                    ${data.form.inputs.map((inp, idx) => `
                        <div class="grid-1-2-auto array-item" data-index="${idx}">
                            <div class="col-stack">
                                <label for="form-val-${idx}" class="sr-only">Wynik (Wartość)</label>
                                <input type="text" id="form-val-${idx}" value="${inp.value}" onchange="syncFormInput(${idx}, 'value', this.value)" placeholder="Np. Zaliczone">
                            </div>
                            <div class="col-stack">
                                <label for="form-lab-${idx}" class="sr-only">Warunek / Kryterium wyboru</label>
                                <input type="text" id="form-lab-${idx}" value="${inp.label}" onchange="syncFormInput(${idx}, 'label', this.value)" placeholder="Np. Wszystkie elementy mają opisy alternatywne">
                            </div>
                            <div class="col-stack" style="justify-content: flex-start;">
                                <button class="outline error small btn-tight" onclick="removeFormInput(${idx})" aria-label="Usuń wiersz ${idx + 1}"><i data-lucide="trash-2" class="icon-xs" aria-hidden="true"></i></button>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <button class="outline contrast small" onclick="addFormInput()">+ Dodaj nowe kryterium sukcesu</button>
            </div>
        </div>
        ` : ''}
        
        <div class="field-group" role="region" aria-labelledby="h4-checklist">
            <h4 id="h4-checklist">${isLegal ? 'Jak sprawdzić?' : 'Jak sprawdzić?'}</h4>
            <div id="checklist-container">
                ${data.checklist.map((item, idx) => renderArrayItem('checklist', item, idx, isLegal, data.checklist)).join('')}
            </div>
            <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
                <button class="outline contrast small" onclick="addArrayItem('checklist')">${isLegal ? '+ Dodaj blok tekstu' : '+ Dodaj punkt'}</button>
                ${isLegal ? `<button class="outline contrast small" onclick="addTestItem('checklist')">+ Dodaj test</button>` : ''}
            </div>
        </div>

        <div class="field-group" role="region" aria-labelledby="h4-notes">
            <h4 id="h4-notes">Dodatkowe uwagi / Wyjątki (Notes)</h4>
            <div id="notes-container">
                ${data.notes.map((item, idx) => renderArrayItem('notes', item, idx, isLegal, data.notes)).join('')}
            </div>
            <button class="outline contrast small" onclick="addArrayItem('notes')">+ Dodaj uwagę</button>
        </div>

        <div class="form-actions">
            <button class="primary flex-2" onclick="saveCurrent()">Zapisz zmiany w klauzuli</button>
            <button class="outline secondary flex-1" onclick="showList()">Anuluj</button>
        </div>
    `;
    if (window.lucide) window.lucide.createIcons();
}

/**
 * EDITOR: Products (Global)
 */
function renderProductsForm() {
    // Ensure we track this view correctly
    activeItemId = '_products';
    isFormDirty = false;

    formContainer.innerHTML = `
        <p class="text-left"><a href="#" aria-label="Powrót do listy" onclick="showList(); return false;"><span aria-hidden="true">← </span>Powrót do listy</a></p>
        <div class="field-group" role="region" aria-labelledby="h3-products-header">
            <div class="section-border">
                <div class="section-title-row">
                    <i data-lucide="package" class="icon-lg icon-primary" aria-hidden="true"></i>
                    <h3 id="h3-products-header" class="m-0">Zarządzanie bazą produktów i usług</h3>
                </div>
                <p class="muted">Zmieniaj nazwy produktów używanych w całej aplikacji. Zmiany są widoczne we wszystkich mapowaniach.</p>
            </div>

            <div id="products-editor-main" class="editor-card">
                <div class="product-table-header">
                    <div>ID</div>
                    <div>Pełna nazwa produktu / usługi</div>
                    <div></div>
                </div>
                ${Object.entries(currentData.products || {}).map(([pId, pName]) => `
                    <div class="product-row">
                        <span class="product-id-badge">${pId}</span>
                        <div class="product-name-wrap">
                            <label for="prod-name-${pId}">Pełna nazwa produktu / usługi</label>
                            <input type="text" id="prod-name-${pId}" class="product-name-input" value="${pName}" oninput="updateProductName('${pId}', this.value)" placeholder="Wpisz nazwę produktu...">
                        </div>
                        <button class="outline error small product-remove-btn" onclick="removeProduct('${pId}')" aria-label="Usuń produkt: ${pName} (${pId})">
                            <i data-lucide="trash-2" class="icon-xs" aria-hidden="true"></i>
                        </button>
                    </div>
                `).join('')}
                <div class="text-right">
                    <button class="primary" onclick="addProductPrompt()">+ Dodaj nowy produkt</button>
                </div>
            </div>

            <div class="form-actions">
                <button class="primary flex-2" onclick="saveCurrent()">Zapisz zmiany w produktach</button>
                <button class="outline secondary flex-1" onclick="showList()">Wróć do listy</button>
            </div>
        </div>
    `;
    if (window.lucide) window.lucide.createIcons();
}

/**
 * EDITOR: Mapping
 */
function renderMappingForm(id, data) {
    const isNew = isCreatingNewItem;
    
    let idHintsHTML = '';
    if (isNew) {
        idHintsHTML = `
            <small class="field-hint">
                Format: <strong>[Art]-[Ust]-[Pkt]-[Lit]</strong> (np. A07-04-01-a)<br>
                Identyfikator artykułu ustawy lub normy
            </small>
        `;
    }
    
    formContainer.innerHTML = `
        <p class="text-left"><a href="#" aria-label="Powrót do listy" onclick="showList(); return false;"><span aria-hidden="true">← </span>Powrót do listy</a></p>
        
        <div class="field-group" role="region" aria-labelledby="h3-mapping-header">
            <div class="section-header">
                <i data-lucide="map" class="icon-md icon-primary" aria-hidden="true"></i>
                <h3 id="h3-mapping-header" class="m-0" tabindex="-1">${isNew ? 'Nowe mapowanie' : 'Edycja mapowania artykułu'}</h3>
            </div>

        <label for="edit-id">Identyfikator (ID)
            ${idHintsHTML}
            <input type="text" id="edit-id" value="${id}">
        </label>
        <label for="edit-legal-id">Identyfikator powiązanej klauzuli ustawowej (U.*)
            <div class="grid grid-1-maxcontent">
                <input type="text" id="edit-legal-id" value="${data.legal_id || ''}" placeholder="Np. U.7.1.1.a">
                <button class="outline picker-action-btn" onclick="openLegalClausePicker()">Wybierz powiązaną klauzulę z listy</button>
            </div>
        </label>
        <label for="edit-article">Artykuł
            <input type="text" id="edit-article" value="${data.article || ''}">
        </label>
        <label for="edit-category">Kategoria
            <input type="text" id="edit-category" value="${data.category || ''}">
        </label>
        <label for="edit-requirement">Wymaganie (treść)
            <textarea id="edit-requirement" rows="4" oninput="autoResize(this)">${data.requirement || ''}</textarea>
        </label>
        </div>
        
        <div class="field-group" role="region" aria-labelledby="h4-mappings">
            <h4 id="h4-mappings">Powiązane produkty i klauzule techniczne</h4>
            <p><small>Zaznacz produkty objęte tym artykułem. Jeśli produkt wymaga specyficznych klauzul technicznych (C.*), wpisz je lub wybierz przyciskiem.</small></p>
            <div id="product-mappings-container">
                ${Object.entries(currentData.products || {}).map(([pId, pName]) => {
        const val = (data.product_mappings || {})[pId];
        const isChecked = val !== null && val !== undefined;
        return `
                        <div class="product-mapping-row">
                            <div class="product-mapping-header">
                                <span class="product-id-badge">${pId}</span>
                                <span class="product-name">${pName}</span>
                            </div>
                            <div class="product-mapping-grid">
                                <label class="prod-mapping-label">
                                    <input type="checkbox" class="prod-mapping-check" data-pid="${pId}" ${isChecked ? 'checked' : ''} onchange="toggleMappingInput('${pId}', this.checked)" aria-label="Dotyczy: ${pName} (${pId})">
                                    <span class="prod-mapping-label-text">Dotyczy</span>
                                </label>
                                <div class="prod-mapping-codes" data-pid="${pId}" style="display: ${isChecked ? '' : 'none'}">
                                    <label for="input-${pId}" class="prod-mapping-codes-label">Klauzule techniczne (C.*):</label>
                                    <input type="text" class="prod-mapping-input" id="input-${pId}" data-pid="${pId}" value="${isChecked ? (val || '') : ''}" ${!isChecked ? 'disabled' : ''} placeholder="Np. C.9.1.1.1; C.9.1.1.2">
                                </div>
                                <button class="outline picker-btn" data-pid="${pId}" aria-label="Wybierz powiązane klauzule techniczne dla: ${pName} (${pId})" onclick="openClausePicker('${pId}')" style="display: ${isChecked ? '' : 'none !important'}">Wybierz powiązane klauzule techniczne</button>
                            </div>
                        </div>
                    `;
    }).join('')}
            </div>
        </div>

        <div class="form-actions">
            <button class="primary flex-2" onclick="saveCurrent()">Zatwierdź zmiany</button>
            <button class="outline secondary flex-1" onclick="showList()">Anuluj</button>
        </div>
        </div>
    `;
}

window.updateProductName = (pId, newName) => {
    currentData.products[pId] = newName;
    markAsModified();
};

// Add / remove products inline
window.addProductPrompt = () => {
    // 1. Ensure we are in mapping mode
    if (currentType !== 'mapping' || !currentData) return;

    // 2. Save current state of the list if any (though products use live-sync oninput)
    updateStateFromUI();

    // 3. Ensure products object exists
    if (!currentData.products) currentData.products = {};

    // 4. Generate next ID (p1, p2, etc.)
    const keys = Object.keys(currentData.products);
    let maxNum = 0;
    keys.forEach(k => {
        const match = k.match(/^p(\d+)$/);
        if (match) {
            const num = parseInt(match[1]);
            if (num > maxNum) maxNum = num;
        }
    });
    const newId = `p${maxNum + 1}`;

    // 5. Add empty product to the master list
    currentData.products[newId] = "";

    // 6. Explicitly ensure this product key exists in ALL matrix entries as null (not applicable)
    // This solves the issue of the product not appearing in mappings until manually touched
    if (currentData.matrix && Array.isArray(currentData.matrix)) {
        currentData.matrix.forEach(item => {
            if (!item.product_mappings) item.product_mappings = {};
            if (!(newId in item.product_mappings)) {
                item.product_mappings[newId] = null;
            }
        });
    }

    // 7. Mark as modified and refresh UI
    markAsModified('_products');
    renderProductsForm();

    // 8. Focus the new input
    setTimeout(() => {
        const inputs = document.querySelectorAll('#products-editor-main input');
        if (inputs.length > 0) {
            const lastInput = inputs[inputs.length - 1];
            lastInput.focus();
            lastInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, 100);
};

window.removeProduct = (pId) => {
    updateStateFromUI();
    showConfirm(
        "Usuwanie produktu",
        `Czy na pewno chcesz usunąć produkt '${pId}' oraz wszystkie jego przypisania w tej tabeli?`,
        () => {
            if (currentData.products) delete currentData.products[pId];
            // remove from all matrix entries
            (currentData.matrix || []).forEach(m => { if (m.product_mappings) delete m.product_mappings[pId]; });
            markAsModified();
            renderList();
            loadItem(activeItemId);
        },
        "Anuluj",
        "warning"
    );
};

// Clause picker: fetch clauses.json on demand and show a checkbox list to select clause IDs
window._clausesCache = null;
window.openClausePicker = async (productId) => {
    if (!activeItemId) return showToast("Wybierz najpierw artykuł/mapowanie po lewej.", "warning");
    // load clauses.json if needed
    if (!window._clausesCache) {
        try {
            const resp = await fetch(`clauses_json/clauses.json?t=${Date.now()}`, { cache: 'no-store' });
            if (!resp.ok) throw new Error(resp.statusText);
            window._clausesCache = await resp.json();
        } catch (err) {
            return showToast("Nie udało się załadować listy klauzul: " + err.message, "error");
        }
    }

    const pName = currentData.products[productId] || productId;

    // build overlay using Pico.css <dialog> style
    const overlay = document.createElement('dialog');
    overlay.id = 'clause-picker-dialog';
    // Native <dialog> handles ESC by default when opened with showModal()
    overlay.innerHTML = `
        <article class="dialog-article">
            <header>
                <a href="#close" aria-label="Zamknij" class="close" onclick="document.getElementById('clause-picker-dialog').close()"></a>
                <h3 class="m-0">Wybierz klauzule techniczne</h3>
                <p class="muted-help">Dla produktu: ${productId} — ${pName}</p>
            </header>
            
            <div class="field-group">
                <label for="clause-picker-search-id" class="picker-search-label">Wyszukaj na liście:</label>
                <input type="search" id="clause-picker-search-id" placeholder="Szukaj klauzuli (ID lub tytuł)..." class="clause-picker-search picker-search">
            </div>
            
            <div class="clause-picker-list">
                <!-- Lista klauzul -->
            </div>

            <footer>
                <button class="secondary outline" onclick="document.getElementById('clause-picker-dialog').close()">Anuluj</button>
                <button class="primary save">Zastosuj zmiany</button>
            </footer>
        </article>
    `;
    document.body.appendChild(overlay);

    // Cleanup on close
    overlay.addEventListener('close', () => {
        overlay.remove();
        document.body.classList.remove('modal-is-open');
        // Return focus to the trigger button
        const trigger = document.querySelector(`button[onclick="openClausePicker('${productId}')"]`);
        if (trigger) trigger.focus();
    });

    if (window.lucide) window.lucide.createIcons();

    overlay.showModal();
    document.body.classList.add('modal-is-open');

    const listEl = overlay.querySelector('.clause-picker-list');
    const searchEl = overlay.querySelector('.clause-picker-search');
    const item = currentData.matrix.find(it => it.id === activeItemId);

    // Get current value from the input field in the main editor UI
    const inputField = document.getElementById(`input-${productId}`);
    const currentVal = inputField ? inputField.value : '';
    const selectedSet = new Set(currentVal.split(';').map(s => s.trim()).filter(Boolean));

    const renderList = (filter = '') => {
        listEl.innerHTML = '';
        const entries = Object.entries(window._clausesCache).filter(([k, v]) => {
            if (k.startsWith('U.')) return false;
            if (filter && !k.toLowerCase().includes(filter) && !(v.title || '').toLowerCase().includes(filter)) return false;
            return true;
        }).sort(([kA], [kB]) => kA.localeCompare(kB, undefined, { numeric: true, sensitivity: 'base' }));

        if (entries.length === 0) {
            listEl.innerHTML = '<p class="empty-list-msg">Brak pasujących klauzul.</p>';
            return;
        }

        entries.forEach(([k, v]) => {
            const row = document.createElement('label');
            row.style.display = 'flex';
            row.style.alignItems = 'start';
            row.style.gap = '0.625rem';
            row.style.padding = '0.25rem 0';
            row.style.cursor = 'pointer';
            row.style.borderBottom = '1px solid var(--muted-border-color)';

            const isChecked = selectedSet.has(k);
            row.innerHTML = `
                <input type="checkbox" value="${k}" ${isChecked ? 'checked' : ''} class="chk-top">
                <div class="flex-1">
                    <strong class="mono-primary">${k}</strong>
                    <div class="clause-desc">${v.title || ''}</div>
                </div>
            `;
            listEl.appendChild(row);
        });
    };

    renderList('');
    // Focus search input after modal is shown
    setTimeout(() => searchEl.focus(), 50);
    searchEl.addEventListener('input', (e) => renderList(e.target.value.toLowerCase()));

    overlay.querySelector('.save').addEventListener('click', () => {
        const checked = Array.from(listEl.querySelectorAll('input[type=checkbox]:checked')).map(i => i.value);

        // Zaktualizuj widoczny input (C.*)
        const inp = document.getElementById(`input-${productId}`);
        const chk = document.querySelector(`.prod-mapping-check[data-pid="${productId}"]`);

        if (inp) inp.value = checked.join('; ');

        // Jeśli coś wybrano, zaznaczamy produkt
        if (checked.length > 0 && chk && !chk.checked) {
            chk.checked = true;
            if (inp) inp.disabled = false;
        }

        markAsModified();
        overlay.remove();
    });
};

window.openLegalClausePicker = async () => {
    // load clauses.json if needed
    if (!window._clausesCache) {
        try {
            const resp = await fetch(`clauses_json/clauses.json?t=${Date.now()}`, { cache: 'no-store' });
            if (!resp.ok) throw new Error(resp.statusText);
            window._clausesCache = await resp.json();
        } catch (err) {
            return showToast("Nie udało się załadować listy klauzul: " + err.message, "error");
        }
    }

    // build overlay using Pico.css <dialog> style
    const overlay = document.createElement('dialog');
    overlay.id = 'legal-clause-picker-dialog';
    overlay.innerHTML = `
        <article class="dialog-article">
            <header>
                <a href="#close" aria-label="Zamknij" class="close" onclick="document.getElementById('legal-clause-picker-dialog').close()"></a>
                <h3 class="m-0">Wybierz klazulę ustawową (U.*)</h3>
                <p class="muted-help">Wybierz jedną klauzulę z listy poniżej.</p>
            </header>
            
            <div class="field-group">
                <label for="legal-picker-search-id" class="picker-search-label">Wyszukaj na liście:</label>
                <input type="search" id="legal-picker-search-id" placeholder="Szukaj klauzuli (ID lub tytuł)..." class="clause-picker-search picker-search">
            </div>
            
            <div class="clause-picker-list">
                <!-- Lista klauzul -->
            </div>

            <footer>
                <button class="secondary outline" onclick="document.getElementById('legal-clause-picker-dialog').close()">Anuluj</button>
                <button class="primary save">Wybierz</button>
            </footer>
        </article>
    `;
    document.body.appendChild(overlay);

    // Cleanup on close
    overlay.addEventListener('close', () => {
        overlay.remove();
        document.body.classList.remove('modal-is-open');
        // Return focus to the trigger button
        const trigger = document.querySelector('button[onclick="openLegalClausePicker()"]');
        if (trigger) trigger.focus();
    });

    overlay.showModal();
    document.body.classList.add('modal-is-open');

    const listEl = overlay.querySelector('.clause-picker-list');
    const searchEl = overlay.querySelector('.clause-picker-search');
    const editLegalId = document.getElementById('edit-legal-id');
    const currentVal = editLegalId ? editLegalId.value.trim() : '';

    const renderList = (filter = '') => {
        listEl.innerHTML = '';
        const entries = Object.entries(window._clausesCache).filter(([k, v]) => {
            if (!k.startsWith('U.')) return false;
            if (filter && !k.toLowerCase().includes(filter) && !(v.title || '').toLowerCase().includes(filter)) return false;
            return true;
        }).sort(([kA], [kB]) => kA.localeCompare(kB, undefined, { numeric: true, sensitivity: 'base' }));

        if (entries.length === 0) {
            listEl.innerHTML = '<p class="empty-list-msg">Brak pasujących klauzul ustawowych.</p>';
            return;
        }

        entries.forEach(([k, v]) => {
            const row = document.createElement('label');
            row.style.display = 'flex';
            row.style.alignItems = 'start';
            row.style.gap = '0.625rem';
            row.style.padding = '0.25rem 0';
            row.style.cursor = 'pointer';
            row.style.borderBottom = '1px solid var(--muted-border-color)';

            const isChecked = (k === currentVal);
            row.innerHTML = `
                <input type="radio" name="legal-clause-radio" value="${k}" ${isChecked ? 'checked' : ''} class="chk-top">
                <div class="flex-1">
                    <strong class="mono-primary">${k}</strong>
                    <div class="clause-desc">${v.title || ''}</div>
                </div>
            `;
            listEl.appendChild(row);
        });
    };

    renderList('');
    setTimeout(() => searchEl.focus(), 50);
    searchEl.addEventListener('input', (e) => renderList(e.target.value.toLowerCase()));

    overlay.querySelector('.save').addEventListener('click', () => {
        const selected = listEl.querySelector('input[type=radio]:checked');
        if (selected && editLegalId) {
            editLegalId.value = selected.value;
            markAsModified();
        }
        overlay.remove();
    });
};

// Move an item inside mapping.matrix up or down by delta (-1 = up, +1 = down)
window.moveMatrixItem = (id, delta) => {
    if (!currentData || !Array.isArray(currentData.matrix)) return;
    const idx = currentData.matrix.findIndex(it => it.id === id);
    if (idx === -1) return;
    const newIndex = idx + delta;
    if (newIndex < 0 || newIndex >= currentData.matrix.length) return;
    // swap
    const tmp = currentData.matrix[newIndex];
    currentData.matrix[newIndex] = currentData.matrix[idx];
    currentData.matrix[idx] = tmp;

    markAsModified(id);
    renderList(searchInput.value);
    // Przywróć widoczność listy i podpowiedzi po powrocie do listy
    itemsList.style.display = '';
    // Announce new position to screen reader
    const newPos = currentData.matrix.findIndex(it => it.id === id) + 1;
    const total = currentData.matrix.length;
    const dir = delta < 0 ? 'w górę' : 'w dół';
    setTimeout(() => srAnnounce(`Karta przeniesiona ${dir} na pozycję ${newPos} z ${total}`), 200);
    // Refocus edit button for keyboard users
    setTimeout(() => {
        const el = document.querySelector(`li[data-key="${id}"]`);
        if (el) {
            const btn = el.querySelector('button.primary');
            if (btn) btn.focus();
        }
    }, 50);
};

// Move an item in an object-based data structure (reorders keys)
window.moveObjectItem = (type, key, delta) => {
    const data = (type === 'summaries') ? currentData.compliance_summaries : currentData;
    if (!data) return;

    const keys = Object.keys(data);
    const idx = keys.indexOf(key);
    if (idx === -1) return;

    const newIndex = idx + delta;
    if (newIndex < 0 || newIndex >= keys.length) return;

    const targetKey = keys[newIndex];

    // Rebuild the object to reflect the new key order
    const newObj = {};
    keys.forEach((k, i) => {
        if (i === newIndex) {
            newObj[key] = data[key];
        } else if (i === idx) {
            newObj[targetKey] = data[targetKey];
        } else {
            newObj[k] = data[k];
        }
    });

    if (type === 'summaries') {
        currentData.compliance_summaries = newObj;
    } else {
        editorState[type].data = newObj;
        currentData = newObj;
    }

    markAsModified(key);
    renderList(searchInput.value);
    // Announce new position to screen reader
    const posData = (type === 'summaries') ? currentData.compliance_summaries : currentData;
    const allKeys = Object.keys(posData);
    const newPos = allKeys.indexOf(key) + 1;
    const total = allKeys.length;
    const dir = delta < 0 ? 'w górę' : 'w dół';
    setTimeout(() => srAnnounce(`Karta przeniesiona ${dir} na pozycję ${newPos} z ${total}`), 200);
    // Refocus edit button for keyboard users
    setTimeout(() => {
        const el = document.querySelector(`li[data-key="${key}"]`);
        if (el) {
            const btn = el.querySelector('button.primary');
            if (btn) btn.focus();
        }
    }, 50);
};

// Reorder items by dragging: moves draggedKey to targetKey's position
window.reorderTo = (draggedKey, targetKey) => {
    if (!currentData || draggedKey === targetKey) return;

    // Capture fromIdx before reorder to determine direction
    let fromIdx = -1, toIdx = -1;
    if (currentType === 'mapping') {
        const matrix = currentData.matrix;
        fromIdx = matrix.findIndex(it => it.id === draggedKey);
        toIdx = matrix.findIndex(it => it.id === targetKey);
        if (fromIdx !== -1 && toIdx !== -1) {
            const [item] = matrix.splice(fromIdx, 1);
            matrix.splice(toIdx, 0, item);
        }
    } else {
        const data = (currentType === 'summaries') ? currentData.compliance_summaries : currentData;
        const keys = Object.keys(data);
        fromIdx = keys.indexOf(draggedKey);
        toIdx = keys.indexOf(targetKey);
        if (fromIdx !== -1 && toIdx !== -1) {
            const [key] = keys.splice(fromIdx, 1);
            keys.splice(toIdx, 0, key);

            const newObj = {};
            keys.forEach(k => { newObj[k] = data[k]; });

            if (currentType === 'summaries') {
                currentData.compliance_summaries = newObj;
            } else {
                editorState[currentType].data = newObj;
                currentData = newObj;
            }
        }
    }

    markAsModified(draggedKey);
    renderList(searchInput.value);
    // Announce new position to screen reader
    (() => {
        const posData = currentType === 'mapping'
            ? currentData.matrix
            : Object.keys((currentType === 'summaries') ? currentData.compliance_summaries : currentData);
        const newPos = currentType === 'mapping'
            ? posData.findIndex(it => it.id === draggedKey) + 1
            : posData.indexOf(draggedKey) + 1;
        const total = posData.length;
        const dir = toIdx < fromIdx ? 'w górę' : 'w dół';
        setTimeout(() => srAnnounce(`Karta przeniesiona ${dir} na pozycję ${newPos} z ${total}`), 200);
    })();
    // Refocus the edit button of the dragged item after re-render
    setTimeout(() => {
        const newLi = document.querySelector(`li[data-key="${draggedKey}"]`);
        if (newLi) {
            const editBtn = newLi.querySelector('button.primary');
            if (editBtn) editBtn.focus();
            newLi.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }, 50);
};

/**
 * EDITOR: Summaries
 */
function renderSummaryForm(id, data) {
    const templateNames = {
        'full_compliance': 'ZGODNY (Pełny zakres - wszystkie klauzule OK)',
        'non_compliance_full': 'NIEZGODNY (Pełny zakres - błędy w klauzulach)',
        'partial_compliance_passed': 'ZGODNY W ZAKRESIE (Częściowy zakres - sprawdzone OK)',
        'partial_compliance_failed': 'NIEZGODNY (Częściowy zakres - błędy w sprawdzonych)',
        'no_assessment': 'BŁĄD: BRAK OCEN (Nie wypełniono arkusza)',
        'all_inapplicable': 'BRAK WYMAGAŃ (Wszystkie klauzule: Nie dotyczy)',
        'all_inapplicable_partial': 'BRAK WYMAGAŃ (Częściowy zakres: Wszystkie "Nie dotyczy")'
    };

    formContainer.innerHTML = `
        <p class="text-left"><a href="#" aria-label="Powrót do listy" onclick="showList(); return false;"><span aria-hidden="true">← </span>Powrót do listy</a></p>
        <div class="field-group" role="region" aria-labelledby="h3-summary-header">
            <div class="section-header">
                <i data-lucide="file-text" class="icon-md icon-primary" aria-hidden="true"></i>
                <h3 id="h3-summary-header" class="m-0">Edycja Szablonu: ${templateNames[id] || data.status || id}</h3>
            </div>

            <label for="edit-title">Tytuł dokumentu
                <input type="text" id="edit-title" value="${data.title || ''}">
            </label>

            <label for="edit-description">Opis / Treść główna
                <small class="field-hint">
                    <strong>Wskazówka:</strong> Użyj klucza <code>{productName}</code> w treści, aby system automatycznie wstawił nazwę audytowanego produktu.
                </small>
                <textarea id="edit-description" rows="8" oninput="autoResize(this)" placeholder="Wprowadź treść podsumowania...">${data.description || ''}</textarea>
            </label>
        </div>
        
        <div class="field-group" role="region" aria-labelledby="h4-section-labels">
            <h4 id="h4-section-labels">Etykiety sekcji (Teksty nagłówków list w raporcie)</h4>
                ${Object.entries(data.sections || {})
        .filter(([sKey]) => !sKey.includes('conclusions') && !sKey.includes('note'))
        .map(([sKey, sVal]) => {
        const friendlyLabels = {
            failures_label: 'Nagłówek: Niezgodności',
            passed_label: 'Nagłówek: Spełnione',
            inapplicable_label: 'Nagłówek: Nie dotyczy',
            untested_label: 'Nagłówek: Niepoddane ocenie'
        };
        return `
                    <label>${friendlyLabels[sKey] || sKey}
                        <input type="text" class="section-label-input" data-skey="${sKey}" value="${sVal}" style="width: 100%;" aria-label="${friendlyLabels[sKey] || sKey}">
                    </label>
                `;
    }).join('')}
        </div>

        <div class="field-group" role="region" aria-labelledby="h4-additional-sections">
            <h4 id="h4-additional-sections">Dodatkowe sekcje podsumowania</h4>
                ${Object.entries(data.sections || {})
        .filter(([sKey]) => sKey.includes('conclusions') || sKey.includes('note'))
        .map(([sKey, sVal]) => {
        const friendlyLabels = {
            conclusions_label: 'Nagłówek: Wnioski',
            conclusions_value: 'Treść wniosków (domyślna)',
            note_label: 'Nagłówek: Uwaga',
            note_value: 'Treść uwagi (domyślna)'
        };
        return `
                    <label>${friendlyLabels[sKey] || sKey}
                        <input type="text" class="section-label-input" data-skey="${sKey}" value="${sVal}" style="width: 100%;" aria-label="${friendlyLabels[sKey] || sKey}">
                    </label>
                `;
    }).join('')}
        </div>

        ${data.meta ? `
        <div class="field-group" role="region" aria-labelledby="h4-metadata">
            <h4 id="h4-metadata">Metadane (Etykiety danych dodatkowych)</h4>
                ${Object.entries(data.meta || {}).map(([mKey, mVal]) => {
        const friendlyMeta = {
            date_label: 'Etykieta: Data kontroli',
            scope_label: 'Etykieta: Zakres kontroli',
            scope_value: 'Wartość: Zakres (np. Pełny)'
        };
        return `
                    <label>${friendlyMeta[mKey] || mKey}
                        <input type="text" class="meta-label-input" data-mkey="${mKey}" value="${mVal}" style="width: 100%;" aria-label="${friendlyMeta[mKey] || mKey}">
                    </label>
                `;
    }).join('')}
        </div>
        ` : ''}

        <div class="form-actions">
            <button class="primary flex-2" onclick="saveCurrent()">Zatwierdź zmiany</button>
            <button class="outline secondary flex-1" onclick="showList()">Anuluj</button>
        </div>
    `;
}

/**
 * EDITOR: Glossary (read/edit)
 */
function renderGlossaryForm(id, data) {
    const isNew = isCreatingNewItem;
    
    // data is the definition string from glossary.json
    let idHintsHTML = '';
    if (isNew) {
        idHintsHTML = `
            <small class="field-hint">
                Podaj hasło/pojęcie (np. "Dostępność", "Funkcjonalność")
            </small>
        `;
    }
    
    formContainer.innerHTML = `
        <p class="text-left"><a href="#" aria-label="Powrót do listy" onclick="showList(); return false;"><span aria-hidden="true">← </span>Powrót do listy</a></p>
        <div class="field-group" role="region" aria-labelledby="h3-glossary-header">
            <div class="section-header">
                <i data-lucide="book" class="icon-md icon-primary" aria-hidden="true"></i>
                <h3 id="h3-glossary-header" class="m-0" tabindex="-1">${isNew ? 'Nowe pojęcie w słowniku' : 'Edycja pojęcia w słowniku'}</h3>
            </div>
            <label for="edit-id">Hasło (ID/term)
                ${idHintsHTML}
            </label>
            <input type="text" id="edit-id" value="${id.replace(/"/g, '&quot;')}" style="width: 100%;">
            <label for="edit-definition">Definicja / opis
                <textarea id="edit-definition" rows="8" oninput="autoResize(this)">${(data || '').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</textarea>
            </label>
            <div class="form-actions">
                <button class="primary flex-2" onclick="saveCurrent()">Zatwierdź zmiany</button>
                <button class="outline secondary flex-1" onclick="showList()">Anuluj</button>
            </div>
        </div>
    `;
};

window.toggleGlossaryEdit = () => {
    // simple UX: focus the definition field
    const def = document.getElementById('edit-definition');
    if (def) def.focus();
};

/**
 * Helpers for Array fields (Checklist/Preconditions)
 */
function renderArrayItem(type, value, index, isLegal = false, allItems = []) {
    // Calculate separate numbering for tests vs non-test items
    let itemNumber = index + 1;
    if (value && typeof value === 'object' && value.type === 'test') {
        // Count only tests before this index
        itemNumber = allItems.slice(0, index).filter(item => item && typeof item === 'object' && item.type === 'test').length + 1;
    } else {
        // Count only non-test items before this index
        itemNumber = allItems.slice(0, index).filter(item => !item || typeof item !== 'object' || item.type !== 'test').length + 1;
    }
    
    // Object items (test cards) get a specialised two-field editor
    if (value && typeof value === 'object' && value.type === 'test') {
        return `
        <div class="array-item array-item--test" data-type="${type}" data-index="${index}">
            <div class="test-item-fields">
                <label for="arr-${type}-${index}-title">Tytuł testu ${itemNumber}</label>
                <input id="arr-${type}-${index}-title" type="text" value="${(value.title || '').replace(/"/g, '&quot;')}"
                       oninput="syncTestArrayValue('${type}', ${index}, 'title', this.value)"
                       placeholder="Nazwa / tytuł testu">
                <label for="arr-${type}-${index}-desc">Opis testu ${itemNumber}</label>
                <textarea id="arr-${type}-${index}-desc" rows="3"
                          oninput="syncTestArrayValue('${type}', ${index}, 'description', this.value); autoResize(this)"
                          placeholder="Szczegółowy opis kroku testowego…">${value.description || ''}</textarea>
            </div>
            <button class="outline error small btn-tight" onclick="removeArrayItem('${type}', ${index})" aria-label="Usuń test ${itemNumber}"><i data-lucide="trash-2" class="icon-xs" aria-hidden="true"></i></button>
        </div>
        `;
    }
    
    // Generate label text based on type
    let labelText = `Element ${itemNumber}`;
    if (type === 'preconditions') {
        labelText = `Warunek wstępny ${itemNumber}`;
    } else if (type === 'procedure') {
        labelText = isLegal ? `Punkt wyjaśnienia ${itemNumber}` : `Krok procedury ${itemNumber}`;
    } else if (type === 'checklist') {
        labelText = isLegal ? `Blok tekstu ${itemNumber}` : `Punkt kontrolny ${itemNumber}`;
    } else if (type === 'notes') {
        labelText = `Uwaga ${itemNumber}`;
    }
    
    return `
        <div class="array-item" data-type="${type}" data-index="${index}">
            <label for="arr-${type}-${index}">${labelText}</label>
            <textarea id="arr-${type}-${index}" rows="2" oninput="syncArrayValue('${type}', ${index}, this.value); autoResize(this)">${value}</textarea>
            <button class="outline error small btn-tight" onclick="removeArrayItem('${type}', ${index})" aria-label="Usuń ${labelText.toLowerCase()}"><i data-lucide="trash-2" class="icon-xs" aria-hidden="true"></i></button>
        </div>
    `;
}

/**
 * Updates the data model from the current UI state without notifications.
 * Necessary before operations that trigger a re-render (like adding/removing array items).
 * Returns true if successful, false if there was a validation error (currently only for empty ID).
 */
function updateStateFromUI() {
    if (activeItemId == null || !currentData) return true;
    if (activeItemId === '_products') return true;

    if (currentType === 'clauses') {
        const idInput = document.getElementById('edit-id');
        const newId = idInput ? idInput.value.trim() : activeItemId;
        if (!newId) return false;

        if (newId !== activeItemId) {
            if (currentData[newId]) {
                // If ID exists and we are not just saving, we might have a conflict.
                // But for silent update, we just don't rename if there's a conflict to avoid data loss.
                // Or we can just ignore renaming here and let saveCurrent handle it.
            } else {
                currentData[newId] = currentData[activeItemId];
                delete currentData[activeItemId];
                editorState[currentType].modifiedItems.delete(activeItemId);
                activeItemId = newId;
            }
        }

        const item = currentData[activeItemId];
        const titleInput = document.getElementById('edit-title');
        const evalInput = document.getElementById('edit-evaluation');
        const categoryRadio = document.querySelector('input[name="edit-category"]:checked');
        if (titleInput) item.title = titleInput.value;
        if (evalInput) item.evaluation = evalInput.value;
        if (categoryRadio) item.category = categoryRadio.value;

        // Note: form.legend and form.noteId are no longer used/saved from UI
    } else if (currentType === 'mapping') {
        const idInput = document.getElementById('edit-id');
        const newId = idInput ? idInput.value.trim() : activeItemId;
        if (!newId) return false;

        if (newId !== activeItemId) {
            if (!currentData.matrix.find(it => it.id === newId)) {
                const item = currentData.matrix.find(it => it.id === activeItemId);
                if (item) item.id = newId;
                editorState[currentType].modifiedItems.delete(activeItemId);
                activeItemId = newId;
            }
        }

        const item = currentData.matrix.find(it => it.id === activeItemId);
        if (item) {
            const artInput = document.getElementById('edit-article');
            const catInput = document.getElementById('edit-category');
            const reqInput = document.getElementById('edit-requirement');
            const legalIdInput = document.getElementById('edit-legal-id');

            if (artInput) item.article = artInput.value;
            if (catInput) item.category = catInput.value;
            if (reqInput) item.requirement = reqInput.value;
            if (legalIdInput) item.legal_id = legalIdInput.value.trim();

            const newMappings = {};
            document.querySelectorAll('.prod-mapping-check').forEach(chk => {
                const pId = chk.dataset.pid;
                if (chk.checked) {
                    const input = document.getElementById(`input-${pId}`);
                    newMappings[pId] = input ? input.value : "";
                } else {
                    newMappings[pId] = null;
                }
            });
            item.product_mappings = newMappings;
        }
    } else if (currentType === 'summaries') {
        const idInput = document.getElementById('edit-id');
        const newId = idInput ? idInput.value.trim() : activeItemId;
        if (!newId) return false;

        if (newId !== activeItemId) {
            if (!currentData.compliance_summaries[newId]) {
                currentData.compliance_summaries[newId] = currentData.compliance_summaries[activeItemId];
                delete currentData.compliance_summaries[activeItemId];
                editorState[currentType].modifiedItems.delete(activeItemId);
                activeItemId = newId;
            }
        }

        const item = currentData.compliance_summaries[activeItemId];
        if (item) {
            const statusInput = document.getElementById('edit-status');
            const titleInput = document.getElementById('edit-title');
            const descInput = document.getElementById('edit-description');
            if (statusInput) item.status = statusInput.value;
            if (titleInput) item.title = titleInput.value;
            if (descInput) item.description = descInput.value;

            document.querySelectorAll('.section-label-input').forEach(input => {
                item.sections[input.dataset.skey] = input.value;
            });

            document.querySelectorAll('.meta-label-input').forEach(input => {
                if (!item.meta) item.meta = {};
                item.meta[input.dataset.mkey] = input.value;
            });
        }
    } else if (currentType === 'glossary') {
        const idInput = document.getElementById('edit-id');
        const defInput = document.getElementById('edit-definition');
        const newTerm = idInput ? idInput.value.trim() : activeItemId;
        const newDefinition = defInput ? defInput.value.trim() : (currentData[activeItemId] || "");

        if (!newTerm) return false;

        if (newTerm !== activeItemId) {
            if (!currentData[newTerm]) {
                delete currentData[activeItemId];
                editorState[currentType].modifiedItems.delete(activeItemId);
                activeItemId = newTerm;
            }
        }
        currentData[activeItemId] = newDefinition;
    }

    markAsModified();
    return true;
}

window.syncArrayValue = (type, index, value) => {
    // We update currentData directly for checklists/preconditions to avoid complex DOM state management
    if (currentType === 'clauses') {
        // Guard: don't overwrite object items with a flat string
        if (currentData[activeItemId][type][index] && typeof currentData[activeItemId][type][index] === 'object') return;
        currentData[activeItemId][type][index] = value;
        markAsModified();
    }
};

window.syncTestArrayValue = (type, index, field, value) => {
    if (currentType === 'clauses') {
        const item = currentData[activeItemId][type][index];
        if (item && typeof item === 'object') {
            item[field] = value;
            markAsModified();
        }
    }
};

const scrollToLastArrayItem = (type) => {
    // Use two nested setTimeout(0) calls so this runs after loadItem's own
    // setTimeout(0) (which focuses the form h3), ensuring focus lands on
    // the new item's first input/textarea instead of the section header.
    setTimeout(() => {
        const container = document.getElementById(type + '-container');
        if (!container) return;
        const items = container.querySelectorAll('.array-item');
        if (items.length === 0) return;
        const last = items[items.length - 1];
        last.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        // Focus the first editable field in the new item
        const focusTarget = last.querySelector('input[type="text"], textarea');
        if (focusTarget) focusTarget.focus({ preventScroll: true });
    }, 50);
};

/**
 * Add new array item directly to DOM without re-rendering the entire form
 * This ensures screen reader only announces the new item, not the whole form
 */
const addArrayItemToDOM = (type) => {
    const container = document.getElementById(type + '-container');
    if (!container) return;

    const isLegal = activeItemId.startsWith('U.') || (isCreatingNewItem && currentNewItemPrefix === 'U.');
    const data = currentData[activeItemId][type];
    const newIndex = data.length - 1; // Already added by addArrayItem
    const newItem = data[newIndex];
    
    // Render just the new item
    const itemHTML = renderArrayItem(type, newItem, newIndex, isLegal, data);
    
    // Create wrapper div and insert
    const wrapper = document.createElement('div');
    wrapper.innerHTML = itemHTML;
    const newElement = wrapper.firstElementChild;
    container.appendChild(newElement);
    
    // Initialize Lucide icons only for the new element
    if (window.lucide) {
        window.lucide.createIcons({ elements: [newElement] });
    }
    
    // Announce to screen reader
    const label = {
        'preconditions': 'Warunek wstępny',
        'procedure': isLegal ? 'Punkt wyjaśnienia' : 'Krok procedury',
        'checklist': isLegal ? 'Blok tekstu' : 'Punkt kontrolny',
        'notes': 'Uwaga'
    }[type] || 'Element';
    
    srAnnounce(`Dodano ${label}`);
    
    // Scroll and focus the new item - delay to let screen reader announce first (1200ms)
    setTimeout(() => {
        newElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        const focusTarget = newElement.querySelector('input[type="text"], textarea');
        if (focusTarget) focusTarget.focus({ preventScroll: true });
    }, 1200);
};

window.addArrayItem = (type) => {
    updateStateFromUI();
    if (!currentData[activeItemId][type]) currentData[activeItemId][type] = [];
    currentData[activeItemId][type].push("");
    markAsModified();
    addArrayItemToDOM(type);
};

window.addTestItem = (type) => {
    updateStateFromUI();
    if (!currentData[activeItemId][type]) currentData[activeItemId][type] = [];
    currentData[activeItemId][type].push({ type: 'test', title: '', description: '' });
    markAsModified();
    addArrayItemToDOM(type);
};

/**
 * Remove array item directly from DOM without re-rendering the entire form
 * This ensures screen reader only announces the removal, not the whole form
 */
const removeArrayItemFromDOM = (type, index) => {
    const container = document.getElementById(type + '-container');
    if (!container) return;

    // Find element by data-index attribute (not by position)
    const itemToRemove = container.querySelector(`.array-item[data-index="${index}"]`);
    if (!itemToRemove) return;
    
    const labelText = {
        'preconditions': 'Warunek wstępny',
        'procedure': 'Krok procedury',
        'checklist': 'Punkt kontrolny',
        'notes': 'Uwaga'
    }[type] || 'Element';
    
    itemToRemove.remove();
    
    // Announce to screen reader
    srAnnounce(`Usunięto ${labelText}`);
    
    // Don't focus after removal - let screen reader announce cleanly without triggering region hierarchy read
};

window.removeArrayItem = (type, index) => {
    updateStateFromUI();
    const list = currentData[activeItemId][type];
    list.splice(index, 1);
    markAsModified();
    removeArrayItemFromDOM(type, index);
};

// Funkcje do obsługi formularza (inputs w klauzulach C)
window.syncFormInput = (index, field, value) => {
    if (currentType === 'clauses') {
        if (!currentData[activeItemId].form) currentData[activeItemId].form = {};
        if (!currentData[activeItemId].form.inputs) currentData[activeItemId].form.inputs = [];
        currentData[activeItemId].form.inputs[index][field] = value;
        markAsModified();
    }
};

/**
 * Add new form input directly to DOM without re-rendering the entire form
 * This ensures screen reader only announces the new input, not the whole form
 */
const addFormInputToDOM = () => {
    const container = document.getElementById('form-inputs-container');
    if (!container) return;

    const data = currentData[activeItemId].form;
    const newIndex = data.inputs.length - 1;
    const newInput = data.inputs[newIndex];
    
    // Render just the new form input row
    const inputHTML = `
        <div class="grid-1-2-auto array-item" data-index="${newIndex}">
            <div class="col-stack">
                <label for="form-val-${newIndex}" class="sr-only">Wynik (Wartość)</label>
                <input type="text" id="form-val-${newIndex}" value="${newInput.value}" onchange="syncFormInput(${newIndex}, 'value', this.value)" placeholder="Np. Zaliczone">
            </div>
            <div class="col-stack">
                <label for="form-lab-${newIndex}" class="sr-only">Warunek / Kryterium wyboru</label>
                <input type="text" id="form-lab-${newIndex}" value="${newInput.label}" onchange="syncFormInput(${newIndex}, 'label', this.value)" placeholder="Np. Wszystkie elementy mają opisy alternatywne">
            </div>
            <div class="col-stack" style="justify-content: flex-start;">
                <button class="outline error small btn-tight" onclick="removeFormInput(${newIndex})" aria-label="Usuń wiersz ${newIndex + 1}"><i data-lucide="trash-2" class="icon-xs" aria-hidden="true"></i></button>
            </div>
        </div>
    `;
    
    // Create wrapper div and insert
    const wrapper = document.createElement('div');
    wrapper.innerHTML = inputHTML;
    const newElement = wrapper.firstElementChild;
    container.appendChild(newElement);
    
    // Initialize Lucide icons only for the new element
    if (window.lucide) {
        window.lucide.createIcons({ elements: [newElement] });
    }
    
    // Announce to screen reader
    srAnnounce(`Dodano wiersz warunku ${newIndex + 1}`);
    
    // Scroll and focus the new item - delay to let screen reader announce first (1200ms)
    setTimeout(() => {
        newElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        const focusTarget = newElement.querySelector('input[type="text"]');
        if (focusTarget) focusTarget.focus({ preventScroll: true });
    }, 1200);
};

window.addFormInput = () => {
    updateStateFromUI();
    if (!currentData[activeItemId].form) currentData[activeItemId].form = {};
    if (!currentData[activeItemId].form.inputs) currentData[activeItemId].form.inputs = [];
    currentData[activeItemId].form.inputs.push({ value: "", label: "" });
    markAsModified();
    addFormInputToDOM();
};

/**
 * Remove form input directly from DOM without re-rendering the entire form
 * This ensures screen reader only announces the removal, not the whole form
 */
const removeFormInputFromDOM = (index) => {
    const container = document.getElementById('form-inputs-container');
    if (!container) return;

    // Find element by data-index attribute (not by position)
    const itemToRemove = container.querySelector(`.array-item[data-index="${index}"]`);
    if (!itemToRemove) return;
    
    itemToRemove.remove();
    
    // Announce to screen reader
    srAnnounce('Usunięto wiersz warunku');
    
    // Don't focus after removal - let screen reader announce cleanly without triggering region hierarchy read
};

window.removeFormInput = (index) => {
    updateStateFromUI();
    currentData[activeItemId].form.inputs.splice(index, 1);
    markAsModified();
    removeFormInputFromDOM(index);
};

/**
 * Save current form values back to currentData
 */
window.saveCurrent = () => {
    // If we are in products mode, we skip ID validation as it's a bulk edit
    if (activeItemId === '_products') {
        isFormDirty = false;
        renderList(searchInput.value);
        showToast(`Zmiany w liście produktów zostały zapisane lokalnie. Pamiętaj o eksporcie pliku JSON.`, "success");
        return;
    }

    // Summaries have fixed IDs (no edit-id input in form) — skip ID validation
    if (currentType === 'summaries') {
        updateStateFromUI();
        isFormDirty = false;
        renderList(searchInput.value);
        loadItem(activeItemId, true);
        const nameLabel = editorState[currentType].label || currentType;
        showToast(`Zmiany zapisane: ${nameLabel} — ${activeItemId}. Pamiętaj o pobraniu uaktualnionego pliku JSON!`, "success");
        return;
    }

    // Collect specific error for the toast
    let error = null;
    const idInput = document.getElementById('edit-id');
    const newId = idInput ? idInput.value.trim() : null;

    if (!newId) {
        error = "ID nie może być puste!";
    } else if (newId !== activeItemId && activeItemId !== '') {
        // ID changed - check if new ID already exists
        if (currentType === 'clauses' && currentData[newId]) error = "Element o tym ID już istnieje!";
        else if (currentType === 'mapping' && currentData.matrix.find(it => it.id === newId)) error = "Element o tym ID już istnieje!";
        else if (currentType === 'glossary' && currentData[newId]) error = "Takie hasło już istnieje w słowniku!";
    } else if (newId !== activeItemId && activeItemId === '') {
        // New item - check if ID already exists
        if (currentType === 'clauses' && currentData[newId]) error = "Element o tym ID już istnieje!";
        else if (currentType === 'mapping' && currentData.matrix.find(it => it.id === newId)) error = "Element o tym ID już istnieje!";
        else if (currentType === 'glossary' && currentData[newId]) error = "Takie hasło już istnieje w słowniku!";
    }

    if (error) {
        showToast(error, "error");
        return;
    }

    // Handle ID change or new item creation
    if (newId !== activeItemId) {
        if (activeItemId !== '') {
            // ID was changed - remove old ID, add new ID
            if (currentType === 'clauses' || currentType === 'glossary') {
                currentData[newId] = currentData[activeItemId];
                delete currentData[activeItemId];
            } else if (currentType === 'mapping') {
                const idx = currentData.matrix.findIndex(it => it.id === activeItemId);
                if (idx !== -1) {
                    currentData.matrix[idx].id = newId;
                }
            }
        } else {
            // New item — move placeholder '' data to the real ID
            if (currentType === 'clauses' || currentType === 'glossary') {
                currentData[newId] = currentData[''];
                delete currentData[''];
            }
        }
        activeItemId = newId;
    }

    // Call state update
    updateStateFromUI();
    isFormDirty = false;
    isCreatingNewItem = false; // Reset flag after save

    // Refresh the sidebar list to show potential name/ID changes
    renderList(searchInput.value);
    loadItem(activeItemId, true); // Refresh form to sync any ID changes

    const typeLabel = editorState[currentType].label || currentType;
    const nameLabel = activeItemId === '_products' ? 'Lista Produktów' : activeItemId;
    showToast(`Zmiany zapisane: ${typeLabel} — ${nameLabel}. Pamiętaj o pobraniu uaktualnionego pliku JSON!`, "success");
};

/**
 * Export all modified editorState items to JSON files for download
 */
function exportAllModified() {
    const modifiedEntries = Object.entries(editorState).filter(([type, s]) => s.modified && s.data);

    if (modifiedEntries.length === 0) {
        // If nothing modified, fallback to current data even if not "modified" flag set (backwards compat)
        if (currentData) {
            downloadJson(currentType, currentData);
        } else {
            showToast("Brak zmian do pobrania.", "warning");
        }
        return;
    }

    if (modifiedEntries.length > 1) {
        const names = modifiedEntries.map(([type, s]) => s.label).join(", ");
        showConfirm(
            "Pobieranie plików",
            `Czy chcesz pobrać zmiany dla: ${names}? Pliki zostaną pobrane sekwencyjnie.`,
            () => executeExport(modifiedEntries)
        );
        return;
    }

    executeExport(modifiedEntries);
}

/**
 * Internal helper to run the actual download loop
 */
function executeExport(entries) {
    entries.forEach(([type, s], index) => {
        // Use a small delay for multiple downloads to prevent browser blocking
        setTimeout(() => {
            downloadJson(type, s.data);
        }, index * 250);

        s.modified = false;
        s.modifiedItems.clear();
    });

    updateDownloadButtonState();
    const searchInput = document.getElementById('sidebar-search');
    renderList(searchInput ? searchInput.value : "");
}

/**
 * Generic JSON download helper
 */
function downloadJson(type, data) {
    const jsonStr = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `${type}_updated.json`;
    document.body.appendChild(a);
    a.click();

    // cleanup
    setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }, 100);
}

/**
 * Place an icon label so it stays inside the viewport.
 * Adapted from wizard.js for consistency.
 */
function placeIconLabel(buttonEl, labelEl) {
    if (!buttonEl || !labelEl) return;
    try {
        labelEl.classList.remove('icon-label--left', 'icon-label--right');
        labelEl.style.left = '';
        labelEl.style.right = '';

        void labelEl.offsetWidth; // Force layout

        const brect = buttonEl.getBoundingClientRect();
        const labelRect = labelEl.getBoundingClientRect();
        const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        const centerLeft = brect.left + (brect.width / 2) - (labelRect.width / 2);

        if (centerLeft >= 8 && (centerLeft + labelRect.width) <= (vw - 8)) {
            labelEl.style.left = `${centerLeft}px`;
        } else if (brect.left < vw / 2) {
            const leftPx = Math.min(brect.left + 8, vw - labelRect.width - 8);
            labelEl.style.left = `${leftPx}px`;
            labelEl.classList.add('icon-label--left');
        } else {
            const leftPx = Math.max(brect.right - labelRect.width - 8, 8);
            labelEl.style.left = `${leftPx}px`;
            labelEl.classList.add('icon-label--right');
        }

        const viewportH = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
        let topPx = brect.bottom + 8;
        if ((topPx + labelRect.height + 8) > viewportH) {
            topPx = Math.max(brect.top - labelRect.height - 8, 8);
        }
        labelEl.style.top = `${topPx}px`;
        labelEl.style.transform = 'translateY(0)';
    } catch (e) { /* ignore */ }
}

function hideAllIconLabels() {
    document.querySelectorAll('.icon-label').forEach(label => {
        label.classList.remove('icon-label--visible');
    });
}

function showIconLabel(label) {
    if (label.dataset.isDismissed === 'true') return;
    hideAllIconLabels();
    label.classList.add('icon-label--visible');
}

/**
 * Enhance icon-only buttons with visible labels on hover/focus.
 */
function enhanceIconButtons() {
    const selectors = ['#btn-download-json-nav', '#btn-theme-toggle', '.theme-toggle'];
    selectors.forEach(sel => {
        document.querySelectorAll(sel).forEach(el => {
            const label = el.getAttribute('data-icon-label') || el.getAttribute('aria-label') || el.title;
            if (!label || el.querySelector('.icon-label')) return;

            if (!getComputedStyle(el).position || getComputedStyle(el).position === 'static') {
                el.style.position = 'relative';
            }
            const span = document.createElement('span');
            span.className = 'icon-label';
            span.textContent = label;
            span.setAttribute('aria-hidden', 'true');
            el.appendChild(span);

            if (el.hasAttribute('title')) el.removeAttribute('title');

            const showAndPosition = () => {
                placeIconLabel(el, span);
                showIconLabel(span);
            };

            el.addEventListener('mouseenter', showAndPosition);
            el.addEventListener('focus', showAndPosition);
            el.addEventListener('mouseleave', (e) => {
                if (e.relatedTarget !== span && !span.contains(e.relatedTarget)) {
                    delete span.dataset.isDismissed;
                    hideAllIconLabels();
                }
            });
            el.addEventListener('blur', (e) => {
                if (e.relatedTarget !== span) {
                    delete span.dataset.isDismissed;
                    hideAllIconLabels();
                }
            });
            el.addEventListener('mousemove', () => {
                if (span.classList.contains('icon-label--visible')) placeIconLabel(el, span);
            });
            span.addEventListener('mouseenter', () => showIconLabel(span));
            span.addEventListener('mouseleave', (e) => {
                if (e.relatedTarget !== el && !el.contains(e.relatedTarget)) {
                    delete span.dataset.isDismissed;
                    hideAllIconLabels();
                }
            });
        });
    });
}

/**
 * Handle Escape for tooltips and reposition on resize/scroll/click.
 */
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.icon-label--visible').forEach(label => {
            label.dataset.isDismissed = 'true';
            label.classList.remove('icon-label--visible');
        });
    }
});
window.addEventListener('resize', () => {
    document.querySelectorAll('.icon-label').forEach(label => placeIconLabel(label.parentElement, label));
});

// Header hide/show on scroll
let lastScrollY = window.pageYOffset;
window.addEventListener('scroll', () => {
    const header = document.querySelector('.app-header');
    if (!header) {
        hideAllIconLabels();
        return;
    }

    const currentScrollY = window.pageYOffset;
    
    // Don't hide at the top or on minimal scroll
    if (currentScrollY < 100) {
        header.classList.remove('header-hidden');
        lastScrollY = currentScrollY;
    } else {
        // Hide on scroll down, show on scroll up
        if (currentScrollY > lastScrollY && !header.classList.contains('header-hidden')) {
            header.classList.add('header-hidden');
        } else if (currentScrollY < lastScrollY && header.classList.contains('header-hidden')) {
            header.classList.remove('header-hidden');
        }
        lastScrollY = currentScrollY;
    }
    
    hideAllIconLabels();
}, { passive: true });
document.addEventListener('click', (e) => {
    if (!e.target.closest('button')) hideAllIconLabels();
});

// Theme helpers
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('kzpad-theme', theme);
    const iconBtnChild = document.querySelector('#btn-theme-toggle i');
    const themeIconById = document.getElementById('theme-icon');
    if (window.lucide) {
        const name = theme === 'dark' ? 'sun' : 'moon';
        if (iconBtnChild) iconBtnChild.setAttribute('data-lucide', name);
        if (themeIconById) themeIconById.setAttribute('data-lucide', name);
        window.lucide.createIcons();
    }

    // Update labels for theme toggle
    const themeToggle = document.getElementById('btn-theme-toggle');
    if (themeToggle) {
        const actionText = theme === 'dark' ? 'Przełącz na motyw jasny' : 'Przełącz na motyw ciemny';
        themeToggle.setAttribute('aria-label', actionText);
        themeToggle.setAttribute('data-icon-label', actionText);
        const labelEl = themeToggle.querySelector('.icon-label');
        if (labelEl) {
            labelEl.textContent = actionText;
            placeIconLabel(themeToggle, labelEl);
        }
    }
}

function toggleTheme() {
    const cur = document.documentElement.getAttribute('data-theme') || 'dark';
    applyTheme(cur === 'dark' ? 'light' : 'dark');
}

// Start app
init();

window.toggleMappingInput = (pId, isChecked) => {
    const input = document.getElementById(`input-${pId}`);
    const codesLabel = document.querySelector(`label[for="input-${pId}"]`);
    const button = document.querySelector(`button.picker-btn[data-pid="${pId}"]`);
    const codesDiv = document.querySelector(`.prod-mapping-codes[data-pid="${pId}"]`);
    
    if (input) {
        input.disabled = !isChecked;
        input.style.display = isChecked ? '' : 'none';
        if (isChecked) {
            input.focus();
        } else {
            input.value = "";
        }
    }
    
    if (codesLabel) codesLabel.style.display = isChecked ? '' : 'none';
    if (button) {
        button.style.display = isChecked ? '' : 'none';
        button.style.visibility = isChecked ? 'visible' : 'hidden';
    }
    if (codesDiv) codesDiv.style.display = isChecked ? '' : 'none';
    
    markAsModified();
};
