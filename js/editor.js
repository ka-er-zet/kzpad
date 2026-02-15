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
 * Confirmation Modal state
 */
let confirmCallback = null;

function showConfirm(title, message, callback) {
    const modal = document.getElementById('modal-confirm');
    if (!modal) {
        // Fallback for safety, but we aim for 0 alerts
        if (confirm(message)) callback();
        return;
    }
    
    document.getElementById('modal-confirm-title').textContent = title;
    document.getElementById('modal-confirm-message').textContent = message;
    confirmCallback = callback;
    
    // Obsługa ESC i kliknięcia poza modalem (opcjonalnie)
    modal.oncancel = () => {
        confirmCallback = null;
    };

    modal.showModal();
}

window.closeConfirmModal = (confirmed) => {
    const modal = document.getElementById('modal-confirm');
    if (modal) modal.close();
    
    if (confirmed && confirmCallback) {
        confirmCallback();
    }
    confirmCallback = null;
};

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
    closeBtn.setAttribute('aria-label', `Zamknij`); // Simplified label
    closeBtn.setAttribute('type', 'button');
    closeBtn.innerHTML = '<i data-lucide="x" style="width: 1rem; height: 1rem;" aria-hidden="true"></i>';

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

    closeBtn.addEventListener('click', () => {
        if (lastToastMessage === message) lastToastMessage = ""; // reset so same message can be shown again
        toast.remove();
    });

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

    // Prevent accidental data loss on refresh/close
    window.addEventListener('beforeunload', (e) => {
        const hasUnsavedChanges = Object.values(editorState).some(state => state.modified);
        if (hasUnsavedChanges) {
            e.preventDefault();
            e.returnValue = ''; // Standard way to show exit confirmation
        }
    });

    // Tab switching — no preselection: user must choose type first
    // visually mark all as unpressed initially
    typeButtons.forEach(btn => { btn.setAttribute('aria-pressed', 'false'); });
    typeButtons.forEach(btn => {
        btn.addEventListener('click', async () => {
            // Check if current view has unsaved changes before switching
            if (isFormDirty || editorState[currentType].modified) {
                const confirmSwitch = await showConfirm(
                    `Niezapisane zmiany`,
                    `Masz niezapisane zmiany w sekcji "${editorState[currentType].label}". Czy na pewno chcesz zmienić kategorię? Zmiany zostaną utracone, chyba że pobierzesz plik JSON.`,
                    "Zmień bez zapisywania",
                    "Anuluj"
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
                    loaderTitle.focus();
                    loaderTitle.scrollIntoView({ behavior: 'smooth', block: 'center' });
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

    // Show loader button
    const showLoaderBtn = document.getElementById('btn-show-loader');
    if (showLoaderBtn) {
        showLoaderBtn.addEventListener('click', () => {
            loaderSection.classList.remove('hidden');
            workspaceSection.classList.add('hidden');
            document.querySelector('.editor-title-container').classList.add('hidden');
            document.getElementById('editor-secondary-actions').classList.add('hidden');
        });
    }

    // Add new button
    document.getElementById('btn-add-new').addEventListener('click', addNewItem);
}

/**
 * Adds a new entry to the current data
 */
function addNewItem() {
    if (!currentData) {
        showToast("Najpierw załaduj plik!", "warning");
        return;
    }

    if (currentType === 'summaries') {
        showToast("Podsumowania mają sztywną strukturę. Dodawanie nowych elementów jest zablokowane.", "info");
        return;
    }
    
    const modal = document.getElementById('modal-add-item');
    const input = document.getElementById('new-item-id');
    const suggestions = document.getElementById('id-suggestions');
    const title = modal ? modal.querySelector('h3') : null;
    
    if (modal && input) {
        input.value = "";
        suggestions.innerHTML = "";
        
        if (title) {
            title.textContent = currentType === 'glossary' ? 'Dodaj nowe pojęcie' : 'Dodaj nowy wpis';
        }

        if (currentType === 'glossary') {
            input.placeholder = "Np. Dostępność";
        } else if (currentType === 'mapping') {
            input.placeholder = "Np. A07-01";
        } else {
            input.placeholder = "Np. C.5.1 lub U.12.01";
        }

        // Add Enter key listener
        input.onkeydown = (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                confirmAddItem();
            }
        };

        modal.showModal();
        
        let keys = [];
        if (currentType === 'clauses') keys = Object.keys(currentData);
        else if (currentType === 'mapping') keys = currentData.matrix.map(m => m.id);
        
        if (keys.length > 0) {
            // Natural sort for suggestions as well
            keys.sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));
            
            const suggestForPrefix = (prefix) => {
                const prefixedKeys = keys.filter(k => k.startsWith(prefix)).sort();
                if (prefixedKeys.length === 0) return null;
                const lastId = prefixedKeys[prefixedKeys.length - 1];
                // Regex for incrementing last number
                const match = lastId.match(/^(.*?)(\d+)$/);
                if (match) {
                    const prefixPart = match[1];
                    const numPart = match[2];
                    const nextNum = (parseInt(numPart) + 1).toString().padStart(numPart.length, '0');
                    return prefixPart + nextNum;
                }
                return null;
            };

            let suggestionsList = [];
            if (currentType === 'clauses') {
                const suggC = suggestForPrefix('C.');
                const suggU = suggestForPrefix('U.');
                if (suggC) suggestionsList.push(suggC);
                if (suggU) suggestionsList.push(suggU);
                
                // Defaults if nothing found
                if (suggestionsList.length === 0) {
                    suggestionsList.push('C.1.1', 'U.1.1');
                }
            } else if (currentType === 'mapping') {
                const suggA = suggestForPrefix('A');
                if (suggA) suggestionsList.push(suggA);
                else suggestionsList.push('A01');
            }

            if (suggestionsList.length > 0) {
                suggestions.innerHTML = 'Sugestia ID: ' + suggestionsList.map(s => 
                    `<a href="#" onclick="document.getElementById('new-item-id').value='${s}'; return false;">${s}</a>`
                ).join(', ');
            }
        }
        
        setTimeout(() => input.focus(), 100);
    }
}

window.closeAddItemModal = () => {
    const modal = document.getElementById('modal-add-item');
    if (modal) modal.close();
};

window.updateIdSuggestions = () => {
    const input = document.getElementById('new-item-id');
    const suggestions = document.getElementById('id-suggestions');
    const val = input.value.trim();
    
    if (!val) return;
    
    // Proste sprawdzanie formatu i podpowiedzi
    if (val.startsWith('U') && !val.includes('.')) {
        suggestions.innerHTML = "Format ustawy: U.[Art].[Ust].[Pkt].[Lit]-[Tiret]";
    } else if (val.startsWith('C') && !val.includes('.')) {
        suggestions.innerHTML = "Format normy: C.[Rozdział].[Punkt]...";
    } else {
        suggestions.innerHTML = "";
    }
};

window.confirmAddItem = () => {
    const input = document.getElementById('new-item-id');
    const newId = input.value.trim();
    
    if (!newId) return;

    if (currentType === 'clauses') {
        if (currentData[newId]) { showToast("Element o tym ID już istnieje!", "error"); return; }
        currentData[newId] = { title: "Nowa klauzula", evaluation: "", procedure: [], checklist: [], preconditions: [], notes: [] };
    } else if (currentType === 'glossary') {
        if (currentData[newId]) { showToast("To hasło już istnieje!", "error"); return; }
        currentData[newId] = ""; // New entry in glossary is just an empty definition string
    } else if (currentType === 'mapping') {
        if (currentData.matrix.find(it => it.id === newId)) { showToast("Element o tym ID już istnieje!", "error"); return; }
        currentData.matrix.push({
            id: newId,
            legal_id: "",
            article: newId,
            category: "Nowa kategoria",
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
        }
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

    const modifiedCount = Object.values(editorState).filter(s => s.modified).length;
    if (modifiedCount > 0) {
        navDownload.classList.remove('secondary');
        navDownload.classList.add('primary');
        navDownload.title = `Pobierz zmiany (${modifiedCount})`;
    } else {
        navDownload.classList.remove('primary');
        navDownload.classList.add('secondary');
        navDownload.title = `Pobierz JSON`;
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
    formContainer.innerHTML = '<p class="secondary">Wybierz element z listy po lewej, aby rozpocząć edycję.</p>';
    
    // Show list, hide form
    itemsList.style.display = 'block';
    formContainer.style.display = 'none';

    // hide title container until user selects a category or loads data
    const titleContainer = document.querySelector('.editor-title-container');
    if (titleContainer) titleContainer.classList.add('hidden');

    const secondaryActions = document.getElementById('editor-secondary-actions');
    if (secondaryActions) secondaryActions.classList.add('hidden');
}

/**
 * Loads default files from the server
 */
async function loadDefaults() {
    const path = DEFAULT_PATHS[currentType];
    try {
        const response = await fetch(path);
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
    loaderSection.classList.add('hidden');
    workspaceSection.classList.remove('hidden');
    
    // update editor H2 with selected category (human-readable)
    const mapNames = { clauses: 'Klauzule', mapping: 'Mapowania', summaries: 'Podsumowania', glossary: 'Słownik' };
    const catName = mapNames[currentType] || currentType;
    const editorCat = document.getElementById('editor-category-name');
    if (editorCat) editorCat.textContent = catName;

    // show editor title container when data is loaded
    const titleContainer = document.querySelector('.editor-title-container');
    if (titleContainer) titleContainer.classList.remove('hidden');

    const secondaryActions = document.getElementById('editor-secondary-actions');
    if (secondaryActions) secondaryActions.classList.remove('hidden');

    // Show/hide quick filters for clauses
    const quickFilters = document.getElementById('quick-filters');
    if (quickFilters) {
        if (currentType === 'clauses') {
            quickFilters.classList.remove('hidden');
        } else {
            quickFilters.classList.add('hidden');
        }
    }

    // Reset view to list mode when data is loaded/switched
    showList(true);

    if (window.lucide) window.lucide.createIcons();

    // focus + smooth-scroll to editor area (Edycja...)
    const editorTitle = document.getElementById('editor-title');
    if (editorTitle) {
        // small delay to allow layout & focusable elements to settle
        setTimeout(() => {
            editorTitle.focus();
            editorTitle.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 80);
    }
}

/**
 * Renders the sidebar list based on current type and search term
 */
function renderList(searchTerm = '') {
    const term = (searchTerm || '').toLowerCase();
    itemsList.innerHTML = '';
    
    // Obsługa akcji specjalnych (np. Zarządzaj produktami) nad listą
    const specialActions = document.getElementById('special-actions');
    if (specialActions) {
        specialActions.innerHTML = '';
        if (currentType === 'mapping') {
            const productItem = document.createElement('div');
            productItem.className = 'special-action-item' + (activeItemId === '_products' ? ' active' : '');
            // Stylizacja bez dziedziczenia efektów drag/move z .list-item
            productItem.style.cssText = `
                border-left: 4px solid var(--primary);
                font-weight: bold;
                padding: 0.5rem 0.75rem;
                background: ${activeItemId === '_products' ? 'var(--secondary-focus)' : 'var(--card-background-color)'};
                border-radius: var(--border-radius);
                cursor: pointer;
                margin-bottom: 0.5rem;
                display: flex;
                align-items: center;
                user-select: none;
            `;
            productItem.innerHTML = `
                <i data-lucide="package" style="width: 1.2rem; height: 1.2rem; margin-right: 0.5rem; color: var(--primary);"></i>
                <span>Zarządzaj produktami</span>
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
            return (currentData.compliance_summaries[key].title || '').toLowerCase().includes(term);
        }
        return false;
    })
        .forEach(key => {
            const div = document.createElement('div');
            div.className = 'list-item' + (activeItemId === key ? ' active' : '');
            div.tabIndex = 0; // make focusable for keyboard support

            // Drag and Drop support
            div.draggable = true;
            div.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', key);
                // Używamy setTimeout(0), aby przeglądarka zrobiła "ghost image" 
                // z pełną widocznością elementu zanim nałożymy klasę .dragging
                setTimeout(() => div.classList.add('dragging'), 0);
                e.dataTransfer.effectAllowed = 'move';
            });

            div.addEventListener('dragover', (e) => {
                e.preventDefault();
                e.dataTransfer.dropEffect = 'move';
                div.classList.add('drag-over');
            });

            div.addEventListener('dragleave', () => {
                div.classList.remove('drag-over');
            });

            div.addEventListener('drop', (e) => {
                e.preventDefault();
                div.classList.remove('drag-over');
                const draggedKey = e.dataTransfer.getData('text/plain');
                if (draggedKey && draggedKey !== key) {
                    reorderTo(draggedKey, key);
                }
            });

            div.addEventListener('dragend', () => {
                div.classList.remove('dragging');
                document.querySelectorAll('.list-item').forEach(i => i.classList.remove('drag-over'));
            });

            // Modification indicator (per-item)
            if (editorState[currentType].modifiedItems.has(key)) {
                const dot = document.createElement('span');
                dot.className = 'item-mod-indicator';
                dot.title = 'Ten element został zmieniony';
                div.appendChild(dot);
            }

            // Show Up/Down controls to allow manual reordering
            const controls = document.createElement('span');
            controls.className = 'list-controls';
            controls.style.marginRight = '0.5rem';

            let idx, length, moveFn;
            if (currentType === 'mapping') {
                idx = (currentData.matrix || []).findIndex(it => it.id === key);
                length = (currentData.matrix || []).length;
                moveFn = (id, delta) => moveMatrixItem(id, delta);
            } else {
                const data = (currentType === 'summaries') ? currentData.compliance_summaries : currentData;
                const allKeys = Object.keys(data || {});
                idx = allKeys.indexOf(key);
                length = allKeys.length;
                moveFn = (id, delta) => moveObjectItem(currentType, id, delta);
            }

            const upBtn = document.createElement('button');
            upBtn.className = 'outline';
            upBtn.title = 'Przesuń w górę';
            upBtn.innerText = '↑';
            upBtn.disabled = idx <= 0;
            upBtn.addEventListener('click', (ev) => { ev.stopPropagation(); moveFn(key, -1); });

            const downBtn = document.createElement('button');
            downBtn.className = 'outline';
            downBtn.title = 'Przesuń w dół';
            downBtn.innerText = '↓';
            downBtn.disabled = idx === -1 || idx >= (length - 1);
            downBtn.addEventListener('click', (ev) => { ev.stopPropagation(); moveFn(key, 1); });

            controls.appendChild(upBtn);
            controls.appendChild(downBtn);
            div.appendChild(controls);

            const label = document.createElement('span');
            label.className = 'list-key';
            // Combine key and title
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
            } else if (currentType === 'summaries' && currentData.compliance_summaries && currentData.compliance_summaries[key] && currentData.compliance_summaries[key].title) {
                const title = currentData.compliance_summaries[key].title;
                if (title.startsWith(key + ' ')) {
                    displayText = title;
                } else {
                    displayText = key + ' | ' + title;
                }
            } else if (currentType === 'mapping') {
                const item = (currentData.matrix || []).find(it => it.id === key);
                if (item) {
                    const article = item.article || '';
                    const category = item.category || '';
                    displayText = `${key} | ${article} | ${category}`;
                }
            }
            label.textContent = displayText;
            div.appendChild(label);

            // Add edit button
            const editBtn = document.createElement('button');
            editBtn.className = 'primary outline small';
            editBtn.textContent = 'Edytuj';
            editBtn.onclick = (e) => { e.stopPropagation(); loadItem(key); };
            div.appendChild(editBtn);

            // Add delete button (if not summaries)
            if (currentType !== 'summaries') {
                const delBtn = document.createElement('button');
                delBtn.className = 'error outline small';
                delBtn.innerHTML = '<i data-lucide="trash-2"></i>';
                delBtn.style.padding = '0.25rem';
                delBtn.style.minWidth = '2rem';
                delBtn.title = 'Usuń';
                delBtn.onclick = (e) => { e.stopPropagation(); deleteItem(key); };
                div.appendChild(delBtn);
            }

            // click / keyboard handlers - remove click to load, only button
            div.onkeydown = (e) => {
                // Enter/Space loads item
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); loadItem(key); return; }
                
                // Alt+ArrowUp / Alt+ArrowDown to reorder (accessibility)
                if (e.altKey && (e.key === 'ArrowUp' || e.key === 'ArrowDown')) {
                    const delta = e.key === 'ArrowUp' ? -1 : 1;
                    if (currentType === 'mapping') {
                        e.preventDefault();
                        moveMatrixItem(key, delta);
                    } else if (currentType === 'clauses') {
                        e.preventDefault();
                        moveObjectItem('clauses', key, delta);
                    }
                }
            };

            itemsList.appendChild(div);
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
            "Zostań w edycji"
        );
        if (!confirmResult) return;
    }

    isFormDirty = false;
    activeItemId = null;
    itemsList.style.display = 'block';
    formContainer.style.display = 'none';
    
    // Show add button (except for summaries) and search
    const isSummaries = currentType === 'summaries';
    document.getElementById('btn-add-new').style.display = isSummaries ? 'none' : 'block';
    document.getElementById('sidebar-search').style.display = 'block';

    // Show quick filters only for clauses in list view
    const quickFilters = document.getElementById('quick-filters');
    if (quickFilters) {
        if (currentType === 'clauses') quickFilters.classList.remove('hidden');
        else quickFilters.classList.add('hidden');
    }
    
    renderList(searchInput.value);
}

/**
 * Sets the prefix filter for clauses (C. or U.)
 */
window.setPrefixFilter = (prefix) => {
    currentPrefixFilter = prefix;
    
    // Update UI
    document.querySelectorAll('#quick-filters button').forEach(btn => {
        if (btn.dataset.prefix === prefix) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    renderList(searchInput.value);
};
/**
 * Loads an item into the editor form
 */
async function loadItem(id, force = false) {
    if (!force && isFormDirty && activeItemId !== id) {
        const confirmResult = await showConfirm(
            "Zmiana edytowanej pozycji",
            "Masz niezapisane zmiany w aktualnie edytowanym formularzu. Jeśli przejdziesz do innej pozycji, te zmiany zostaną utracone.",
            "Przejdź bez zapisywania",
            "Anuluj"
        );
        if (!confirmResult) return;
    }

    activeItemId = id;
    isFormDirty = false; // Reset the dirty flag when a new item is loaded
    renderList(searchInput.value); // refresh active state in list
    
    // Hide list, show form
    itemsList.style.display = 'none';
    formContainer.style.display = 'block';
    
    // Hide add button, search and quick filters
    document.getElementById('btn-add-new').style.display = 'none';
    document.getElementById('sidebar-search').style.display = 'none';
    const quickFilters = document.getElementById('quick-filters');
    if (quickFilters) quickFilters.classList.add('hidden');
    
    let itemData = null;
    if (currentType === 'clauses') {
        itemData = currentData[id];
        renderClauseForm(id, itemData);
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
    setTimeout(() => {
        document.querySelectorAll('#form-container textarea').forEach(tx => {
            autoResize(tx);
        });
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
function renderClauseForm(id, data) {
    // Ensure all required arrays exist
    if (!data.preconditions) data.preconditions = [];
    if (!data.procedure) data.procedure = [];
    if (!data.checklist) data.checklist = [];
    if (!data.notes) data.notes = [];

    formContainer.innerHTML = `
        <p style="text-align: left;"><a href="#" onclick="showList(); return false;">← Powrót do listy</a></p>
        
        <div class="field-group">
            <h3>Edycja klauzuli</h3>
            <label>Identyfikator klauzuli (ID)
                <input type="text" id="edit-id" value="${id}">
            </label>
            <label>Tytuł klauzuli
                <input type="text" id="edit-title" value="${data.title || ''}">
            </label>
            <label>Metoda oceny (Evaluation)
                <input type="text" id="edit-evaluation" value="${data.evaluation || ''}">
            </label>
        </div>
        
        <div class="field-group">
            <h6>Wymagania wstępne (Warunki)</h6>
            <div id="preconditions-container">
                ${data.preconditions.map((item, idx) => renderArrayItem('preconditions', item, idx)).join('')}
            </div>
            <button class="outline contrast small" onclick="addArrayItem('preconditions')">+ Dodaj warunek</button>
        </div>
        
        <div class="field-group">
            <h6>${id.startsWith('U.') ? 'Jak to rozumieć?' : 'Procedura badania'}</h6>
            <div id="procedure-container">
                ${data.procedure.map((item, idx) => renderArrayItem('procedure', item, idx)).join('')}
            </div>
            <button class="outline contrast small" onclick="addArrayItem('procedure')">+ Dodaj krok</button>
        </div>

        <div class="field-group">
            <h6>Checklista (punkty sprawdzenia)</h6>
            <div id="checklist-container">
                ${data.checklist.map((item, idx) => renderArrayItem('checklist', item, idx)).join('')}
            </div>
            <button class="outline contrast small" onclick="addArrayItem('checklist')">+ Dodaj punkt</button>
        </div>

        <div class="field-group">
            <h6>Uwagi</h6>
            <div id="notes-container">
                ${data.notes.map((item, idx) => renderArrayItem('notes', item, idx)).join('')}
            </div>
            <button class="outline contrast small" onclick="addArrayItem('notes')">+ Dodaj uwagę</button>
        </div>

        <div style="margin-top: 2rem;">
            <button class="primary" onclick="saveCurrent()">Zapisz zmiany w klauzuli</button>
        </div>
    `;
}

/**
 * EDITOR: Products (Global)
 */
function renderProductsForm() {
    formContainer.innerHTML = `
        <p style="text-align: left;"><a href="#" onclick="showList(); return false;">← Powrót do listy</a></p>
        <div class="field-group">
            <div style="border-bottom: 2px solid var(--primary); margin-bottom: 2rem; padding-bottom: 1rem;">
                <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;">
                    <i data-lucide="package" style="width: 1.75rem; height: 1.75rem; color: var(--primary);"></i>
                    <h3 style="margin: 0;">Zarządzanie bazą produktów i usług</h3>
                </div>
                <p class="muted">Zmieniaj nazwy produktów używanych w całej aplikacji. Zmiany są widoczne we wszystkich mapowaniach.</p>
            </div>

            <div id="products-editor-main" style="padding: 1.5rem; background: var(--card-background-color); border: 1px solid var(--muted-border-color); border-radius: var(--border-radius);">
                <div style="margin-bottom: 1.5rem; display: grid; grid-template-columns: 5rem 1fr 3rem; gap: 1rem; font-weight: bold; border-bottom: 2px solid var(--muted-border-color); padding-bottom: 0.5rem;">
                    <div>ID</div>
                    <div>Pełna nazwa produktu / usługi</div>
                    <div></div>
                </div>
                ${Object.entries(currentData.products || {}).map(([pId, pName]) => `
                    <div style="display: grid; grid-template-columns: 5rem 1fr auto; gap: 1rem; align-items: center; margin-bottom: 1rem; border-bottom: 1px solid var(--muted-border-color); padding-bottom: 0.5rem;">
                        <span style="font-family: monospace; font-weight: bold; color: var(--primary);">${pId}</span>
                        <input type="text" value="${pName}" onchange="updateProductName('${pId}', this.value)" style="margin-bottom: 0; padding: 0.4rem 0.75rem;">
                        <button class="outline secondary" onclick="removeProduct('${pId}')" title="Usuń produkt" style="margin-bottom: 0; padding: 0.25rem 0.75rem; border-color: transparent;">
                            <i data-lucide="trash-2" style="width: 1.2rem; height: 1.2rem; color: var(--del-color);"></i>
                        </button>
                    </div>
                `).join('')}
                <div style="margin-top: 1.5rem; text-align: right;">
                    <button class="primary" onclick="addProductPrompt()" style="width: auto;">+ Dodaj nowy produkt</button>
                </div>
            </div>
        </div>
    `;
    if (window.lucide) window.lucide.createIcons();
}

/**
 * EDITOR: Mapping
 */
function renderMappingForm(id, data) {
    formContainer.innerHTML = `
        <p style="text-align: left;"><a href="#" onclick="showList(); return false;">← Powrót do listy</a></p>
        
        <div style="display:flex;align-items:center;gap:0.5rem;justify-content:space-between; border-bottom: 2px solid var(--primary); margin-bottom: 2rem; padding-bottom: 1rem;">
            <h3 style="margin:0;">Edycja mapowania artykułu</h3>
        </div>

        <label>Identyfikator (ID)
            <input type="text" id="edit-id" value="${id}">
        </label>
        <label>Identyfikator Klauzuli Ustawowej (U.*)
            <input type="text" id="edit-legal-id" value="${data.legal_id || ''}" placeholder="Np. U.7.1.1.a">
        </label>
        <label>Artykuł
            <input type="text" id="edit-article" value="${data.article || ''}">
        </label>
        <label>Kategoria
            <input type="text" id="edit-category" value="${data.category || ''}">
        </label>
        <label>Wymaganie (treść)
            <textarea id="edit-requirement" rows="4" oninput="autoResize(this)">${data.requirement || ''}</textarea>
        </label>
        
        <div class="field-group">
            <h6>Powiązane produkty i klauzule techniczne</h6>
            <p><small>Zaznacz produkty objęte tym artykułem. Jeśli produkt wymaga specyficznych klauzul technicznych (C.*), wpisz je lub wybierz przyciskiem.</small></p>
            <div id="product-mappings-container">
                ${Object.entries(data.product_mappings || {}).map(([pId, val]) => {
                    const pName = currentData.products[pId] || pId;
                    const isChecked = val !== null;
                    return `
                        <div class="product-mapping-row" style="margin-bottom: 1.25rem; border-bottom: 1px solid var(--muted-border-color); padding-bottom: 0.75rem;">
                            <div style="font-size: 0.85rem; font-weight: bold; margin-bottom: 0.25rem; display: flex; align-items: center; gap: 0.5rem;">
                                <span style="background: var(--primary); color: white; padding: 0.125rem 0.375rem; border-radius: var(--border-radius); font-family: monospace;">${pId}</span>
                                <span style="color: var(--h3-color);">${pName}</span>
                            </div>
                            <div class="grid" style="align-items:center; gap: 1.5rem; grid-template-columns: max-content 1fr max-content; margin-bottom: 0;">
                                <label style="margin-bottom:0; white-space:nowrap; display:flex; align-items:center; cursor:pointer; user-select:none; gap: 0.75rem;">
                                    <input type="checkbox" class="prod-mapping-check" data-pid="${pId}" ${isChecked ? 'checked' : ''} onchange="toggleMappingInput('${pId}', this.checked)" style="margin-bottom:0; width: 1.25rem; height: 1.25rem;">
                                    <span style="font-size: 0.9rem; font-weight: 500;">Dotyczy</span>
                                </label>
                                <input type="text" class="prod-mapping-input" id="input-${pId}" data-pid="${pId}" value="${val || ''}" ${!isChecked ? 'disabled' : ''} style="margin-bottom:0;" placeholder="Kody techniczne C.* (opcjonalnie)">
                                <button class="outline" onclick="openClausePicker('${pId}')" style="margin-bottom:0; padding: 0.25rem 1rem; font-size: 0.85rem; min-width: 8rem;">Wybierz kody</button>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>

        <button onclick="saveCurrent()">Zatwierdź zmiany</button>
        </div>
    `;
}

window.updateProductName = (pId, newName) => {
    currentData.products[pId] = newName;
    markAsModified();
};

// Add / remove products inline
window.addProductPrompt = async () => {
    updateStateFromUI();
    
    // Używamy nowej, dostępnej wersji promptModal
    const id = await promptModal('Podaj identyfikator produktu/usługi (krótki, np. p1):', 'Dodaj nowy produkt');
    if (!id) return;
    
    if (currentData.products && currentData.products[id]) { 
        showToast("Produkt o tym ID już istnieje!", "error"); 
        return; 
    }
    
    const name = await promptModal(`Nazwa produktu/usługi dla ID: ${id}:`, 'Nazwa produktu', id);
    if (!name) return; // Anulowanie na drugim etapie

    if (!currentData.products) currentData.products = {};
    currentData.products[id] = name;
    
    // ensure mapping entry exists for this product in the current matrix item if editing one
    if (currentType === 'mapping' && activeItemId) {
        const item = currentData.matrix.find(it => it.id === activeItemId);
        if (item) {
            item.product_mappings = item.product_mappings || {};
            item.product_mappings[id] = '';
        }
    }
    markAsModified();
    renderList();
    renderProductsForm(); // Odśwież widok produktów
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
        }
    );
};

// Clause picker: fetch clauses.json on demand and show a checkbox list to select clause IDs
window._clausesCache = null;
window.openClausePicker = async (productId) => {
    if (!activeItemId) return showToast("Wybierz najpierw artykuł/mapowanie po lewej.", "warning");
    // load clauses.json if needed
    if (!window._clausesCache) {
        try {
            const resp = await fetch('clauses_json/clauses.json');
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
        <article style="max-width: 50rem; width: 95%;">
            <header>
                <a href="#close" aria-label="Zamknij" class="close" onclick="document.getElementById('clause-picker-dialog').close()"></a>
                <h3 style="margin-bottom:0;">Wybierz klauzule techniczne</h3>
                <p style="margin-top:0; font-size:0.9rem; opacity:0.8;">Dla produktu: <strong>${productId} — ${pName}</strong></p>
            </header>
            
            <div class="field-group">
                <input type="search" placeholder="Szukaj klauzuli (ID lub tytuł)..." class="clause-picker-search" style="margin-bottom:1rem;">
            </div>
            
            <div class="clause-picker-list" style="max-height: 50vh; overflow-y: auto; border: 1px solid var(--muted-border-color); border-radius: var(--border-radius); padding: 0.5rem; background: var(--card-background-color);">
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
        // Return focus to the trigger button
        const trigger = document.querySelector(`button[onclick="openClausePicker('${productId}')"]`);
        if (trigger) trigger.focus();
    });

    if (window.lucide) window.lucide.createIcons();

    overlay.showModal();

    const listEl = overlay.querySelector('.clause-picker-list');
    const searchEl = overlay.querySelector('.clause-picker-search');
    const item = currentData.matrix.find(it => it.id === activeItemId);
    
    // Get current value from the input field in the main editor UI
    const inputField = document.getElementById(`input-${productId}`);
    const currentVal = inputField ? inputField.value : '';
    const selectedSet = new Set(currentVal.split(';').map(s=>s.trim()).filter(Boolean));

    const renderList = (filter='') => {
        listEl.innerHTML = '';
        const entries = Object.entries(window._clausesCache).filter(([k,v]) => {
            if (k.startsWith('U.')) return false; 
            if (filter && !k.toLowerCase().includes(filter) && !(v.title || '').toLowerCase().includes(filter)) return false;
            return true;
        });

        if (entries.length === 0) {
            listEl.innerHTML = '<p style="text-align:center; padding:1rem; opacity:0.6;">Brak pasujących klauzul.</p>';
            return;
        }

        entries.forEach(([k,v]) => {
            const row = document.createElement('label');
            row.style.display = 'flex';
            row.style.alignItems = 'start';
            row.style.gap = '0.625rem';
            row.style.padding = '0.25rem 0';
            row.style.cursor = 'pointer';
            row.style.borderBottom = '1px solid var(--muted-border-color)';
            
            const isChecked = selectedSet.has(k);
            row.innerHTML = `
                <input type="checkbox" value="${k}" ${isChecked ? 'checked' : ''} style="margin-top: 0.25rem;">
                <div style="flex:1;">
                    <strong style="font-family:monospace; color:var(--primary);">${k}</strong>
                    <div style="font-size:0.85rem; line-height:1.3;">${v.title || ''}</div>
                </div>
            `;
            listEl.appendChild(row);
        });
    };

    renderList('');
    // Focus search input after modal is shown
    setTimeout(() => searchEl.focus(), 50);
    searchEl.addEventListener('input', (e)=> renderList(e.target.value.toLowerCase()));

    overlay.querySelector('.save').addEventListener('click', ()=>{
        const checked = Array.from(listEl.querySelectorAll('input[type=checkbox]:checked')).map(i=>i.value);
        
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
    
    activeItemId = id; // keep the moved item highlighted
    markAsModified();
    // refresh UI
    renderList(searchInput.value);
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
    
    activeItemId = key;
    markAsModified();
    renderList(searchInput.value);
};

// Reorder items by dragging: moves draggedKey to targetKey's position
window.reorderTo = (draggedKey, targetKey) => {
    if (!currentData || draggedKey === targetKey) return;

    if (currentType === 'mapping') {
        const matrix = currentData.matrix;
        const fromIdx = matrix.findIndex(it => it.id === draggedKey);
        const toIdx = matrix.findIndex(it => it.id === targetKey);
        if (fromIdx !== -1 && toIdx !== -1) {
            const [item] = matrix.splice(fromIdx, 1);
            matrix.splice(toIdx, 0, item);
        }
    } else {
        const data = (currentType === 'summaries') ? currentData.compliance_summaries : currentData;
        const keys = Object.keys(data);
        const fromIdx = keys.indexOf(draggedKey);
        const toIdx = keys.indexOf(targetKey);
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
    
    activeItemId = draggedKey;
    markAsModified();
    renderList(searchInput.value);
};

/**
 * EDITOR: Summaries
 */
function renderSummaryForm(id, data) {
    formContainer.innerHTML = `
        <p style="text-align: left;"><a href="#" onclick="showList(); return false;">← Powrót do listy</a></p>
        <div class="field-group">
            <h3>Edycja szablonu</h3>
            <label>Identyfikator (ID)
                <input type="text" id="edit-id" value="${id}">
            </label>
        <label>Status wizualny
            <input type="text" id="edit-status" value="${data.status || ''}">
        </label>
        <label>Tytuł dokumentu
            <input type="text" id="edit-title" value="${data.title || ''}">
        </label>
        <label>Opis / Treść główna
            <textarea id="edit-description" rows="8" oninput="autoResize(this)">${data.description || ''}</textarea>
        </label>
        
        <div class="field-group">
            <h6>Etykiety sekcji</h6>
            ${Object.entries(data.sections || {}).map(([sKey, sVal]) => `
                <label>${sKey}
                    <input type="text" class="section-label-input" data-skey="${sKey}" value="${sVal}">
                </label>
            `).join('')}
        </div>

        <button onclick="saveCurrent()">Zatwierdź zmiany</button>
        </div>
    `;
}

/**
 * EDITOR: Glossary (read/edit)
 */
function renderGlossaryForm(id, data) {
    // data is the definition string from glossary.json
    formContainer.innerHTML = `
        <p style="text-align: left;"><a href="#" onclick="showList(); return false;">← Powrót do listy</a></p>
        <div class="field-group">
            <div style="display:flex;justify-content:space-between;align-items:center;gap:1rem;">
                <h3 style="margin:0;">Słownik</h3>
            </div>
            <label>Hasło (ID/term)
                <input type="text" id="edit-id" value="${id.replace(/"/g, '&quot;')}">
            </label>
            <label>Definicja / opis
                <textarea id="edit-definition" rows="8" oninput="autoResize(this)">${(data || '').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</textarea>
            </label>
            <button onclick="saveCurrent()">Zatwierdź zmiany</button>
        </div>
    `;
}

window.toggleGlossaryEdit = () => {
    // simple UX: focus the definition field
    const def = document.getElementById('edit-definition');
    if (def) def.focus();
};

/**
 * Helpers for Array fields (Checklist/Preconditions)
 */
function renderArrayItem(type, value, index) {
    return `
        <div class="array-item" data-type="${type}" data-index="${index}">
            <textarea rows="2" oninput="syncArrayValue('${type}', ${index}, this.value); autoResize(this)">${value}</textarea>
            <button class="outline error" style="width: auto;" onclick="removeArrayItem('${type}', ${index})">Usuń</button>
        </div>
    `;
}

/**
 * Updates the data model from the current UI state without notifications.
 * Necessary before operations that trigger a re-render (like adding/removing array items).
 * Returns true if successful, false if there was a validation error (currently only for empty ID).
 */
function updateStateFromUI() {
    if (!activeItemId || !currentData) return true;
    if (activeItemId === '_products') return true; // Produkty zapisują się automatycznie na onchange

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
        if (titleInput) item.title = titleInput.value;
        if (evalInput) item.evaluation = evalInput.value;

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
        currentData[activeItemId][type][index] = value;
        markAsModified();
    }
};

window.addArrayItem = (type) => {
    updateStateFromUI();
    if (!currentData[activeItemId][type]) currentData[activeItemId][type] = [];
    currentData[activeItemId][type].push("");
    markAsModified();
    loadItem(activeItemId, true);
};

window.removeArrayItem = (type, index) => {
    updateStateFromUI();
    currentData[activeItemId][type].splice(index, 1);
    markAsModified();
    loadItem(activeItemId, true);
};

/**
 * Save current form values back to currentData
 */
window.saveCurrent = () => {
    // Collect specific error for the toast
    let error = null;
    const idInput = document.getElementById('edit-id');
    const newId = idInput ? idInput.value.trim() : null;

    if (!newId) {
        error = "ID nie może być puste!";
    } else if (newId !== activeItemId) {
        if (currentType === 'clauses' && currentData[newId]) error = "Element o tym ID już istnieje!";
        else if (currentType === 'mapping' && currentData.matrix.find(it => it.id === newId)) error = "Element o tym ID już istnieje!";
        else if (currentType === 'summaries' && currentData.compliance_summaries[newId]) error = "Element o tym ID już istnieje!";
        else if (currentType === 'glossary' && currentData[newId]) error = "Takie hasło już istnieje w słowniku!";
    }

    if (error) {
        showToast(error, "error");
        return;
    }

    // Call state update
    updateStateFromUI();
    isFormDirty = false; // Changes are now saved to the editor state
    
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

// Theme helpers
function applyTheme(theme){
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('kzpad-theme', theme);
    // update theme icon in topbar (support both selector patterns)
    const iconBtnChild = document.querySelector('#btn-theme-toggle i');
    const themeIconById = document.getElementById('theme-icon');
    if (window.lucide) {
        const name = theme === 'dark' ? 'sun' : 'moon';
        if (iconBtnChild) iconBtnChild.setAttribute('data-lucide', name);
        if (themeIconById) themeIconById.setAttribute('data-lucide', name);
        window.lucide.createIcons();
    }
}

function toggleTheme(){
    const cur = document.documentElement.getAttribute('data-theme') || 'dark';
    applyTheme(cur === 'dark' ? 'light' : 'dark');
}

// Start app
init();

window.toggleMappingInput = (pId, isChecked) => {
    const input = document.getElementById(`input-${pId}`);
    if (input) {
        input.disabled = !isChecked;
        if (isChecked) {
            input.focus();
        } else {
            input.value = ""; // Clear if unchecked? Usually safer.
        }
    }
    markAsModified();
};
