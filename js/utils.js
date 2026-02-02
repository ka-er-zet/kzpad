// Funkcje pomocnicze dla Narzędzia Audytowego EAA

const STORAGE_KEY = 'eaa_audit_state';

/**
 * Ładuje stan aplikacji z localStorage.
 * @returns {Object} Zapisany stan lub domyślny stan początkowy.
 */
function loadState() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        try {
            return JSON.parse(saved);
        } catch (e) {
            console.error("Błąd parsowania zapisanego stanu:", e);
        }
    }
    return {
        product: '',
        executiveSummary: '', // Tekst podsumowania wykonawczego
        clauses: [], // Lista wybranych identyfikatorów klauzul
        tests: [],   // Spłaszczona lista wszystkich testów
        results: {}, // Klucz: testId, Wartość: { status: null, note: '' }
        currentIdx: 0
    };
}

/**
 * Zapisuje stan aplikacji do localStorage.
 * @param {Object} state Obiekt stanu do zapisania.
 */
function saveState(state) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
        console.error("Błąd zapisu stanu:", e);
        if (typeof setStatusMessage === 'function') {
            setStatusMessage((window.M && window.M.utils && window.M.utils.saveError) || "Błąd zapisu stanu aplikacji. Sprawdź ustawienia przeglądarki.", 8000);
        }
    }
}

/**
 * Czyści stan aplikacji z localStorage.
 */
function clearState() {
    localStorage.removeItem(STORAGE_KEY);
}

/**
 * Escapes XML special characters for ODT export.
 * @param {string} str The string to escape.
 * @returns {string} Escaped string.
 */
function xmlEscape(str) {
    if (!str) return '';
    // Zamień spacje niełamliwe (encje HTML) na encję numeryczną XML lub znak Unicode
    // Używamy &#160; zamiast &nbsp;, bo &nbsp; nie jest standardową encją XML.
    str = str.replace(/&nbsp;/g, '&#160;');
    return str.replace(/[<>&'"]/g, function (c) {
        switch (c) {
            case '<': return '&lt;';
            case '>': return '&gt;';
            case '&': return '&amp;';
            case '\'': return '&apos;';
            case '"': return '&quot;';
        }
    });
}

// App version for cache-busting verification
window.EAA_APP_VERSION = 'v13';

/**
 * Shows a prompt to refresh the page when a new version is available.
 */
function showUpdatePrompt() {
    const statusMessage = document.getElementById('status-message');
    if (statusMessage) {
        const message = window.M ? window.M.utils.updateAvailable : 'A new version of the application is available. Refresh the page to apply it.';
        statusMessage.textContent = message;
        // Auto-refresh after 3 seconds
        setTimeout(() => {
            window.location.reload();
        }, 3000);
    }
}

/**
 * Inicjalizuje motyw na podstawie localStorage lub preferencji systemu.
 */
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme ? savedTheme : (systemDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
    updateThemeIcon(theme);
    // Ensure theme toggle buttons reflect current state for assistive tech and visible labels
    if (typeof updateThemeToggleButtons === 'function') updateThemeToggleButtons(theme);
}

/**
 * Przełącza motyw między jasnym a ciemnym.
 */
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
    // Update buttons and announce new state to assistive technologies
    if (typeof updateThemeToggleButtons === 'function') updateThemeToggleButtons(newTheme);
    const hasM = (typeof M !== 'undefined' && M && M.navigation);
    const modeText = (newTheme === 'dark') ? (hasM && M.navigation.themeDark ? M.navigation.themeDark : 'Dark') : (hasM && M.navigation.themeLight ? M.navigation.themeLight : 'Light');
    const msgTemplate = (hasM && M.navigation.themeSet) ? M.navigation.themeSet : 'Theme set: {mode}.';
    const message = msgTemplate.replace('{mode}', modeText);
    if (typeof setStatusMessage === 'function') setStatusMessage(message, 4000);
}

function updateThemeIcon(theme) {
    const icon = document.getElementById('theme-icon');
    if (icon) {
        if (theme === 'dark') {
            icon.setAttribute('data-lucide', 'sun');
        } else {
            icon.setAttribute('data-lucide', 'moon');
        }
        lucide.createIcons();
    }
}

/**
 * Place an icon label so it stays inside the viewport.
 * Tries to center above the button, but if there's not enough space
 * it positions left or right accordingly.
 */
function placeIconLabel(buttonEl, labelEl) {
    if (!buttonEl || !labelEl) return;
    try {
        // Reset positioning classes/styles
        labelEl.classList.remove('icon-label--left','icon-label--right');
        labelEl.style.left = '';
        labelEl.style.right = '';

        // Force layout so measurements are reliable (label may be hidden initially)
        void labelEl.offsetWidth;

        const brect = buttonEl.getBoundingClientRect();
        const labelRect = labelEl.getBoundingClientRect();
        const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        const spaceRight = vw - brect.left;
        const centerLeft = brect.left + (brect.width / 2) - (labelRect.width / 2);

        // Preferred: center above button using absolute pixel coords (works with position:fixed)
        if (centerLeft >= 8 && (centerLeft + labelRect.width) <= (vw - 8)) {
            labelEl.style.left = `${centerLeft}px`;
            labelEl.classList.remove('icon-label--left','icon-label--right');
        } else if (brect.left < vw / 2) {
            // Place to the right aligned to button's left edge
            const leftPx = Math.min(brect.left + 8, vw - labelRect.width - 8);
            labelEl.style.left = `${leftPx}px`;
            labelEl.classList.add('icon-label--left');
        } else {
            // Place to the left aligned to button's right edge
            const leftPx = Math.max(brect.right - labelRect.width - 8, 8);
            labelEl.style.left = `${leftPx}px`;
            labelEl.classList.add('icon-label--right');
        }

        // Vertical placement: prefer below button, but move above if it would overflow viewport
        const viewportH = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
        let topPx = brect.bottom + 8;
        if ((topPx + labelRect.height + 8) > viewportH) {
            // move above
            topPx = Math.max(brect.top - labelRect.height - 8, 8);
        }
        labelEl.style.top = `${topPx}px`;
        labelEl.style.transform = 'translateY(0)';
    } catch (e) {
        // Ignore measurement errors
    }
}

// Global function to hide all icon labels
function hideAllIconLabels() {
    document.querySelectorAll('.icon-label').forEach(label => {
        label.style.opacity = '0';
        label.style.visibility = 'hidden';
        label.style.transform = 'translateY(-5px)'; // slight upward animation
    });
}

// Global timeout for auto-hide
let iconLabelTimeout = null;

function showIconLabel(label) {
    // Hide all others immediately
    hideAllIconLabels();
    // Show this one
    label.style.opacity = '1';
    label.style.visibility = 'visible';
    label.style.transform = 'translateY(0)';
    // Clear any existing timeout
    if (iconLabelTimeout) clearTimeout(iconLabelTimeout);
    // Set new timeout to hide after 4 seconds
    iconLabelTimeout = setTimeout(() => {
        hideAllIconLabels();
    }, 4000);
}

/**
 * Enhance icon-only buttons with visible labels on hover/focus for affordance.
 * Adds .icon-label spans that appear on hover/focus, removes redundant aria-label/title.
 */
function enhanceIconButtons(){
    const selectors = ['#menu-toggle', '#btn-save-audit', '#btn-edit-config', '#btn-save-wizard', '#btn-load-wizard', '#btn-download-spreadsheet', 'button[onclick*="toggleTheme"]', '.theme-toggle'];
    const seen = new Set();
    selectors.forEach(sel => {
        document.querySelectorAll(sel).forEach(el => {
            if (seen.has(el)) return;
            seen.add(el);
            // Special case: theme toggle buttons should always get icon-label even if they have other helpers
            const isThemeToggle = el.matches('button[onclick*="toggleTheme"]') || el.classList.contains('theme-toggle');
            // Skip buttons that already have helper spans (but allow theme toggles)
            if (!isThemeToggle && el.querySelector('.nav-helper, .sr-only, .visually-hidden')) return;
            // Prefer aria-label or title, fall back to data-i18n-title
            const label = el.getAttribute('aria-label') || el.title || el.getAttribute('data-i18n-title');
            if (!label) return;
            // Avoid duplicating existing labels
            if (el.querySelector('.icon-label')) return;
            // Ensure the button is positioned relative for absolute label
            if (!getComputedStyle(el).position || getComputedStyle(el).position === 'static') {
                el.style.position = 'relative';
            }
            const span = document.createElement('span');
            span.className = 'icon-label';
            span.textContent = label;
            span.setAttribute('aria-hidden', 'true');
            el.appendChild(span);

            // For buttons with visible labels, remove title to avoid browser tooltip (keep aria-label for screen readers)
            if (el.hasAttribute('title')) {
                el.removeAttribute('title');
            }

            // Position label correctly to avoid viewport overflow; do in next tick to allow layout to settle
            const showAndPosition = () => {
                placeIconLabel(el, span);
                showIconLabel(span);
            };
            el.addEventListener('mouseenter', showAndPosition);
            el.addEventListener('focus', showAndPosition);
            el.addEventListener('mousemove', () => placeIconLabel(el, span)); // reposition only
            try { setTimeout(() => { placeIconLabel(el, span); }, 0); } catch (e) { /* ignore */ }
        });
    });
}

// Reposition labels on resize to keep them inside viewport
window.addEventListener('resize', () => {
    document.querySelectorAll('.icon-label').forEach(label => {
        const btn = label.parentElement;
        placeIconLabel(btn, label);
    });
});

// Hide icon labels on scroll or when clicking outside
window.addEventListener('scroll', () => hideAllIconLabels());
document.addEventListener('click', (e) => {
    if (!e.target.closest('button') && !e.target.closest('.clause-tag')) {
        hideAllIconLabels();
    }
});

/**
 * Update attributes and accessible labels for theme toggle buttons
 * - role="switch" and aria-checked reflect current state
 * - update or create a sr-only .theme-state element and aria-describedby
 * - update visible .icon-label if present to include current state
 */
function updateThemeToggleButtons(theme) {
    try {
        const hasM = (typeof M !== 'undefined' && M && M.navigation);
        const lang = document.documentElement.lang || '';

        const localizedName = (t) => {
            if (hasM) return (t === 'dark') ? (M.navigation.themeDark || 'Dark') : (M.navigation.themeLight || 'Light');
            if (lang && lang.startsWith('pl')) return (t === 'dark') ? 'Motyw ciemny' : 'Motyw jasny';
            return (t === 'dark') ? 'Dark mode' : 'Light mode';
        };

        const localizedMode = (t) => {
            if (lang && lang.startsWith('pl')) return (t === 'dark') ? 'ciemny' : 'jasny';
            return (t === 'dark') ? 'dark' : 'light';
        };

        const stateText = localizedName(theme);
        const opposite = (theme === 'dark') ? 'light' : 'dark';
        const oppositeText = localizedMode(opposite);

        // Template for action (what will happen when activated)
        const actionTemplate = (hasM && M.navigation.toggleTo) ? M.navigation.toggleTo : (lang && lang.startsWith('pl') ? 'Przełącz motyw na {mode}' : 'Toggle theme to {mode}');
        const actionText = actionTemplate.replace('{mode}', oppositeText);

        document.querySelectorAll('button[onclick*="toggleTheme"]').forEach(el => {
            el.setAttribute('role', 'switch');
            el.setAttribute('aria-checked', theme === 'dark' ? 'true' : 'false');

            // Update aria-label to show the action (toggle to opposite)
            el.setAttribute('aria-label', actionText);

            // Update visible label to show the action (toggle to opposite)
            const labelEl = el.querySelector('.icon-label');
            if (labelEl) {
                labelEl.textContent = actionText;
                // Remove title to avoid duplicate tooltip when visible label exists
                if (el.hasAttribute('title')) {
                    el.removeAttribute('title');
                }
                // Position label to stay in viewport
                placeIconLabel(el, labelEl);
            }
        });
    } catch (e) {
        console.warn('updateThemeToggleButtons failed', e);
    }
}

/**
 * Wyświetla niestandardowe okno potwierdzenia.
 * @param {string} message Wiadomość do wyświetlenia.
 * @param {string} title Tytuł okna.
 * @param {string} confirmText Tekst przycisku potwierdzenia.
 * @param {string} cancelText Tekst przycisku anulowania.
 * @returns {Promise<boolean>} Promise rozwiązujący się na true jeśli potwierdzone, false w przeciwnym razie.
 */
/**
 * Wyświetla niestandardowe okno potwierdzenia.
 * @param {string} message Treść wiadomości
 * @param {string} title Tytuł dialogu
 * @param {string} confirmText Tekst przycisku potwierdzenia (wykona akcję)
 * @param {string} cancelText Tekst przycisku anulowania (anuluje akcję)
 * @param {string} focusOn Which button should be focused and placed on the right by default: 'confirm' or 'cancel'
 */
function confirmModal(message, title = "Potwierdzenie", confirmText = "Potwierdź", cancelText = "Anuluj", focusOn = 'confirm') {
    return new Promise((resolve) => {
        let dialog = document.getElementById('app-confirm-dialog');
        if (!dialog) {
            dialog = document.createElement('dialog');
            dialog.id = 'app-confirm-dialog';
            dialog.setAttribute('aria-labelledby', 'dialog-title');
            dialog.setAttribute('aria-modal', 'true');
            // aria-describedby removed to prevent repetitive reading on child focus in VoiceOver
            dialog.innerHTML = `
                <h3 id="dialog-title" style="margin-top: 0;"></h3>
                <p id="dialog-message"></p>
                <div class="dialog-actions">
                    <button id="dialog-cancel" class="outline secondary"></button>
                    <button id="dialog-confirm"></button>
                </div>
            `;
            document.body.appendChild(dialog);
        }

        const titleEl = dialog.querySelector('#dialog-title');
        const msgEl = dialog.querySelector('#dialog-message');
        const cancelBtn = dialog.querySelector('#dialog-cancel');
        const confirmBtn = dialog.querySelector('#dialog-confirm');

        titleEl.textContent = title;
        msgEl.textContent = message;
        confirmBtn.textContent = confirmText;
        cancelBtn.textContent = cancelText;

        const close = (result) => {
            dialog.close();
            resolve(result);
        };

        cancelBtn.onclick = () => close(false);
        confirmBtn.onclick = () => close(true);

        // Handle ESC
        dialog.oncancel = (e) => {
            e.preventDefault();
            close(false);
        };

        const actions = dialog.querySelector('.dialog-actions');
        if (focusOn === 'cancel') {
            // Place the cancel button on the right and make it the primary (focused) action
            actions.classList.add('reverse-buttons');
            // Swap visual styling: make cancel primary, confirm secondary
            cancelBtn.classList.remove('outline','secondary');
            confirmBtn.classList.add('outline','secondary');
            cancelBtn.focus();
        } else {
            actions.classList.remove('reverse-buttons');
            // Ensure default styling: confirm is primary
            confirmBtn.classList.remove('outline','secondary');
            cancelBtn.classList.add('outline','secondary');
            confirmBtn.focus();
        }

        dialog.showModal();
    });
}

/**
 * Wyświetla prosty dialog informacyjny z przyciskiem OK.
 * @param {string} message Treść wiadomości
 * @param {string} [title] Tytuł dialogu
 * @returns {Promise<void>} Promise rozwiązujący się po zamknięciu dialogu
 */
async function alertModal(message, title = 'Informacja') {
    return new Promise((resolve) => {
        let dialog = document.getElementById('app-alert-dialog');
        if (!dialog) {
            dialog = document.createElement('dialog');
            dialog.id = 'app-alert-dialog';
            dialog.setAttribute('aria-labelledby', 'alert-dialog-title');
            dialog.setAttribute('aria-modal', 'true');
            dialog.innerHTML = `
                <h3 id="alert-dialog-title" style="margin-top:0;"></h3>
                <p id="alert-dialog-message"></p>
                <div class="dialog-actions">
                    <button id="alert-ok"></button>
                </div>
            `;
            document.body.appendChild(dialog);
        }

        const titleEl = dialog.querySelector('#alert-dialog-title');
        const msgEl = dialog.querySelector('#alert-dialog-message');
        const okBtn = dialog.querySelector('#alert-ok');

        titleEl.textContent = title;
        msgEl.textContent = message;
        okBtn.textContent = (window.M && window.M.utils && window.M.utils.ok) || 'OK';

        const close = () => {
            dialog.close();
            resolve();
        };

        okBtn.onclick = close;

        dialog.oncancel = (e) => {
            e.preventDefault();
            close();
        };

        // Focus the OK button by default
        okBtn.focus();

        dialog.showModal();
    });
}

/**
 * Aktualizuje komunikat o stanie w regionie aria-live.
 * @param {string} message Treść komunikatu
 * @param {number} [duration] Czas wyświetlania w ms (0 = na stałe)
 */
function setStatusMessage(message, duration = 5000) {
    const statusEl = document.getElementById('status-message');
    if (statusEl) {
        statusEl.textContent = message;
        if (duration > 0) {
            setTimeout(() => {
                if (statusEl.textContent === message) {
                    statusEl.textContent = '';
                }
            }, duration);
        }
    }
}

/**
 * Generuje raport EARL ze stanu aplikacji.
 * @param {Object} state Stan aplikacji.
 * @returns {Object} Obiekt raportu EARL.
 */
function generateEARL(state) {
    const context = {
        "earl": "http://www.w3.org/ns/earl#",
        "dct": "http://purl.org/dc/terms/",
        "foaf": "http://xmlns.com/foaf/0.1/",
        "sch": "http://schema.org/",
        "xsd": "http://www.w3.org/2001/XMLSchema#",
        "eaa": "https://github.com/ka-er-zet/eaa-pfron#"
    };

    // Assertor (Narzędzie)
    const assertor = {
        "@id": "_:assertor",
        "@type": ["earl:Software", "earl:Assertor"],
        "dct:title": "Narzędzie Audytowe EAA",
        "dct:description": "Narzędzie do audytu dostępności cyfrowej wg EN 301 549",
        "dct:hasVersion": "1.0.0"
    };

    // Human Assertor (jeśli podany)
    let mainAssertor = assertor;
    if (state.auditor) {
        const humanAssertor = {
            "@id": "_:humanAssertor",
            "@type": ["foaf:Person", "earl:Assertor"],
            "foaf:name": state.auditor
        };

        // Utwórz złożony assertor
        mainAssertor = {
            "@id": "_:compoundAssertor",
            "@type": "earl:Assertor",
            "earl:mainAssertor": { "@id": "_:humanAssertor" },
            "dct:description": "Audyt przeprowadzony przez człowieka przy użyciu narzędzia"
        };
    }

    // Test Subject (Produkt)
    const testSubject = {
        "@id": "_:subject",
        "@type": ["earl:TestSubject", "sch:Product"],
        "dct:title": state.product || "Nieznany produkt",
        "dct:description": state.productDesc || '',
        "dct:date": new Date().toISOString()
    };

    // App Configuration (Custom extension to preserve state)
    const appConfig = {
        "@type": "eaa:Configuration",
        "eaa:clauses": state.clauses || [],
        "eaa:currentIdx": state.currentIdx || 0,
        "eaa:executiveSummary": state.executiveSummary || '',
        "eaa:selectedProfile": state.selectedProfile || 'none'
    };

    // Assertions
    const assertions = state.tests.filter(t => t.type === 'test').map(t => {
        const res = state.results[t.id] || { status: 'not-tested', note: '' };

        let outcome = 'earl:untested';
        if (res.status === 'pass' || res.status === 'Zaliczone') outcome = 'earl:passed';
        else if (res.status === 'fail' || res.status === 'Niezaliczone') outcome = 'earl:failed';
        else if (res.status === 'na' || res.status === 'Nie dotyczy') outcome = 'earl:inapplicable';
        else if (res.status === 'nt' || res.status === 'Nietestowalne') outcome = 'earl:cantTell';

        return {
            "@type": "earl:Assertion",
            "earl:assertedBy": { "@id": state.auditor ? "_:compoundAssertor" : "_:assertor" },
            "earl:subject": { "@id": "_:subject" },
            "earl:test": {
                "@type": "earl:TestCriterion",
                "dct:title": t.title,
                "dct:identifier": t.id
            },
            "earl:result": {
                "@type": "earl:TestResult",
                "earl:outcome": { "@id": outcome },
                "dct:description": res.note || '',
                "dct:date": new Date().toISOString()
            },
            "earl:mode": { "@id": "earl:manual" }
        };
    });

    const graph = [assertor, testSubject, appConfig, ...assertions];
    if (state.auditor) {
        graph.unshift({
            "@id": "_:humanAssertor",
            "@type": ["foaf:Person", "earl:Assertor"],
            "foaf:name": state.auditor
        });
        graph.unshift(mainAssertor);
    }

    return {
        "@context": context,
        "@graph": graph
    };
}

/**
 * Parses an EARL report back into an application state object.
 * @param {Object} earlData The EARL report object.
 * @returns {Object} The reconstructed application state.
 */
function parseEARL(earlData) {
    const graph = earlData['@graph'] || [];

    // Find Config
    const config = graph.find(item => item['@type'] === 'eaa:Configuration') || {};

    // Find Subject
    const subject = graph.find(item => {
        const types = Array.isArray(item['@type']) ? item['@type'] : [item['@type']];
        return types.includes('earl:TestSubject') || types.includes('sch:Product');
    }) || {};

    // Find Assertor (Human)
    const human = graph.find(item => {
        const types = Array.isArray(item['@type']) ? item['@type'] : [item['@type']];
        return types.includes('foaf:Person');
    });

    const state = {
        product: subject['dct:title'] || '',
        productDesc: subject['dct:description'] || '',
        auditor: human ? human['foaf:name'] : '',
        executiveSummary: config['eaa:executiveSummary'] || '',
        clauses: config['eaa:clauses'] || [],
        currentIdx: config['eaa:currentIdx'] || 0,
        selectedProfile: config['eaa:selectedProfile'] || 'none',
        tests: [], // Will be re-populated by the app based on clauses
        results: {}
    };

    // Parse Assertions
    graph.forEach(item => {
        if (item['@type'] === 'earl:Assertion') {
            const testId = item['earl:test']?.['dct:identifier'];
            const result = item['earl:result'];

            if (testId && result) {
                let status = null;
                const outcome = result['earl:outcome']?.['@id'] || result['earl:outcome'];

                if (outcome === 'earl:passed') status = 'pass';
                else if (outcome === 'earl:failed') status = 'fail';
                else if (outcome === 'earl:inapplicable') status = 'na';
                else if (outcome === 'earl:cantTell') status = 'nt';

                state.results[testId] = {
                    status: status,
                    note: result['dct:description'] || ''
                };
            }
        }
    });

    return state;
}

/**
 * Oblicza statystyki audytu i werdykt na podstawie stanu.
 * @param {Object} state Stan aplikacji.
 * @returns {Object} Obiekt statystyk { total, passed, failed, na, nt, toVerify, verdict, verdictLabel }
 */
function getAuditStats(state) {
    const results = state.results || {};
    const tests = (state.tests || []).filter(t => t.type === 'test');

    const failedTests = tests.filter(t => results[t.id]?.status === 'fail' || results[t.id]?.status === 'Niezaliczone');
    const passedTests = tests.filter(t => results[t.id]?.status === 'pass' || results[t.id]?.status === 'Zaliczone');
    const naTests = tests.filter(t => results[t.id]?.status === 'na' || results[t.id]?.status === 'Nie dotyczy');
    const ntTests = tests.filter(t => results[t.id]?.status === 'nt' || results[t.id]?.status === 'Nietestowalne' || results[t.id]?.status === 'Nie do sprawdzenia');

    // "To Verify" = All tests - (Failed + Passed + NA + NT)
    const processedIds = new Set([...failedTests, ...passedTests, ...naTests, ...ntTests].map(t => t.id));
    const verifyTests = tests.filter(t => !processedIds.has(t.id));

    let verdict = 'in-progress';
    let verdictLabel = 'NIEZAKOŃCZONY';

    if (failedTests.length > 0) {
        verdict = 'failed';
        verdictLabel = 'NIEZALICZONY';
    } else if (verifyTests.length > 0) {
        verdict = 'in-progress';
        verdictLabel = 'NIEZAKOŃCZONY';
    } else {
        verdict = 'passed';
        if (passedTests.length === 0 && naTests.length > 0 && ntTests.length === 0) {
            verdictLabel = 'BRAK NIEZGODNOŚCI';
        } else {
            verdictLabel = 'ZALICZONY';
        }
    }

    return {
        total: tests.length,
        passed: passedTests.length,
        failed: failedTests.length,
        na: naTests.length,
        nt: ntTests.length,
        toVerify: verifyTests.length,
        verdict,
        verdictLabel,
        lists: {
            passed: passedTests,
            failed: failedTests,
            na: naTests,
            nt: ntTests,
            verify: verifyTests
        }
    };
}

/**
 * Fixes orphaned conjunctions in text by adding non-breaking spaces.
 * @param {string} text The text to fix.
 * @returns {string} The fixed text.
 */
function fixOrphans(text) {
    if (!text) return text;
    // Replace space + single letter (a, i, o, u, w, z) + space with space + letter + non-breaking space
    // Case insensitive. We use \u00a0 which is safer for both XML and HTML.
    return text.replace(/(\s|^)([aiouwzAIOWZ])\s+/g, '$1$2\u00a0');
}

/**
 * Usuwa numerację ID z początku tekstu (np. "C.5.1 Tytuł" -> "Tytuł")
 */
function stripNumbering(text) {
    if (!text) return '';
    return text.replace(/^((C|U)\.[A-Z0-9\.]+|[\d\.]+|[A-Z]\d+[\.\)]?)\s*/, '');
}

/**
 * Rozwija skróty prawne dla czytników ekranu
 */
function expandLegal(text) {
    if (!text) return '';
    return text
        .replace(/art\./gi, 'artykuł ')
        .replace(/ust\./gi, ', ustęp ')
        .replace(/pkt\.?/gi, ', punkt ')
        .replace(/lit\./gi, ', litera ')
        .replace(/,\s*,/g, ',')    // sprzątanie podwójnych przecinków
        .replace(/^\s*,\s*/, '')   // usuń przecinek na samym początku
        .replace(/\s+/g, ' ')
        .trim();
}

/**
 * Returns the Polish label for a given status code.
 * @param {string} status The status code (pass, fail, na, nt, etc.)
 * @returns {string} The Polish label.
 */
function getStatusLabel(status) {
    if (!status || status === 'not-tested' || status === 'brak') return 'Nietestowany';
    if (status === 'pass' || status === 'Zaliczone') return 'Zaliczone';
    if (status === 'fail' || status === 'Niezaliczone') return 'Niezaliczone';
    if (status === 'na' || status === 'Nie dotyczy') return 'Nie dotyczy';
    if (status === 'nt' || status === 'Nietestowalne' || status === 'Nie do sprawdzenia') return 'Nietestowany';
    return status;
}

// Ensure skip links move focus programmatically for keyboard users
document.addEventListener('click', function (e) {
    const target = e.target;
    if (target && target.classList && target.classList.contains('skip-link')) {
        e.preventDefault();
        const href = target.getAttribute('href');
        if (!href || !href.startsWith('#')) return;
        const id = href.slice(1);
        const el = document.getElementById(id);
        if (el) {
            // Ensure element can be focused
            if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '-1');
            el.focus();
            // Update location hash without scrolling if possible
            if (history.replaceState) {
                history.replaceState(null, '', '#' + id);
            } else {
                window.location.hash = id;
            }
        }
    }
}, false);

/**
 * Generuje nazwę pliku dla raportu.
 * @param {string} product Nazwa produktu
 * @param {string} ext Rozszerzenie pliku (bez kropki)
 * @param {string} prefix Prefiks nazwy pliku (domyślnie 'raport_eaa_')
 * @returns {string} Nazwa pliku
 */
function getFilename(product, ext, prefix = 'raport_eaa_') {
    const date = new Date().toISOString().split('T')[0];
    const safeProduct = (product || 'produkt').replace(/[^a-z0-9]/gi, '_').toLowerCase();
    return `${prefix}${safeProduct}_${date}.${ext}`;
}

/**
 * Zapisuje stan i pobiera plik JSON z audytem (format EARL).
 * @param {Object} state Stan aplikacji
 * @param {boolean} isDraft Czy jest to wersja robocza (dodaje prefiks 'draft_')
 */
function downloadAudit(state, isDraft = true) {
    // 1. Zapisz do localStorage
    saveState(state);

    // 2. Generuj raport EARL
    const report = generateEARL(state);

    // 3. Pobierz stan jako JSON (format EARL)
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(report, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);

    const prefix = isDraft ? 'draft_raport_eaa_' : 'raport_eaa_';
    downloadAnchorNode.setAttribute("download", getFilename(state.product, 'json', prefix));

    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();

    // 4. Feedback dla czytników ekranu
    let liveRegion = document.getElementById('a11y-live-region');
    if (!liveRegion) {
        liveRegion = document.createElement('div');
        liveRegion.id = 'a11y-live-region';
        liveRegion.className = 'sr-only';
        liveRegion.setAttribute('aria-live', 'polite');
        document.body.appendChild(liveRegion);
    }
    liveRegion.innerText = (window.M && window.M.utils && window.M.utils.saveSuccess) || 'Zapisano raport i pobrano plik.';
}

// Data-i18n helper (messages object + optional root element)
function getMessageByKey(messages, key) {
    if (!messages || !key) return undefined;

    const tryKey = (k) => {
        const parts = k.split('.');
        let cur = messages;
        for (const p of parts) {
            if (!cur || !(p in cur)) return undefined;
            cur = cur[p];
        }
        return cur;
    };

    // Try the exact key first
    let val = tryKey(key);
    if (typeof val !== 'undefined') return val;

    // Aliases mapping to support gradual unification (backwards compatibility)
    const aliasPairs = [
        ['fileLoad.', 'error.load.'],
        ['error.load.', 'fileLoad.']
    ];

    for (const [from, to] of aliasPairs) {
        if (key.startsWith(from)) {
            const alt = to + key.slice(from.length);
            val = tryKey(alt);
            if (typeof val !== 'undefined') return val;
        }
    }

    return undefined;
}

function applyDataI18n(messages, root = document) {
    if (!messages) return;
    // Elements with data-i18n
    root.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const val = getMessageByKey(messages, key);
        if (typeof val === 'undefined') return;
        if (typeof val === 'string' && /<[^>]+>/.test(val)) {
            el.innerHTML = val;
        } else {
            el.textContent = val;
        }
    });
    // Hrefs
    root.querySelectorAll('a[data-i18n-href]').forEach(a => {
        const hrefKey = a.getAttribute('data-i18n-href');
        const hrefVal = getMessageByKey(messages, hrefKey);
        if (hrefVal) a.setAttribute('href', hrefVal);
    });

    // Titles
    root.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        const val = getMessageByKey(messages, key);
        if (val) el.setAttribute('title', val);
    });

    // ARIA labels
    root.querySelectorAll('[data-i18n-aria]').forEach(el => {
        const key = el.getAttribute('data-i18n-aria');
        const val = getMessageByKey(messages, key);
        if (val) el.setAttribute('aria-label', val);
    });

    // Placeholders
    root.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        const val = getMessageByKey(messages, key);
        if (val) el.setAttribute('placeholder', val);
    });
}

/**
 * Dev-time check for unresolved data-i18n keys.
 * Usage: append ?i18n-check to the page URL to enable when loading the page.
 * Returns an array of missing entries (empty if none).
 */
function checkDataI18n(messages, root = document) {
    const missing = [];
    const checkAttr = (attr) => {
        root.querySelectorAll('[' + attr + ']').forEach(el => {
            const key = el.getAttribute(attr);
            if (!key) return;
            const val = getMessageByKey(messages, key);
            if (typeof val === 'undefined') {
                missing.push({ attribute: attr, key, tag: el.tagName.toLowerCase(), snippet: el.outerHTML.slice(0, 200) });
            }
        });
    };

    ['data-i18n', 'data-i18n-href', 'data-i18n-title', 'data-i18n-aria', 'data-i18n-placeholder'].forEach(checkAttr);

    if (missing.length) {
        console.group('%cI18N: unresolved data-i18n keys', 'color: #d97706; font-weight: bold;');
        missing.forEach(m => console.warn(`Missing key "${m.key}" for ${m.attribute} on <${m.tag}>`, m.snippet));
        console.table(missing.map(m => ({ key: m.key, attribute: m.attribute, tag: m.tag })));
        console.groupEnd();
    } else {
        console.info('I18N: all data-i18n keys resolved on this page');
    }

    return missing;
} 

// Expose functions globally
window.utils = {
    loadState,
    saveState,
    clearState,
    xmlEscape,
    initTheme,
    toggleTheme,
    confirm: confirmModal,
    alert: alertModal,
    setStatusMessage,
    generateEARL,
    parseEARL,
    fixOrphans,
    stripNumbering,
    expandLegal,
    getAuditStats,
    getStatusLabel,
    getFilename,
    downloadAudit,
    applyDataI18n,
    getMessageByKey,
    checkDataI18n,
    protectAssistiveHelpers
};

/**
 * Ensure sr-only / visually-hidden / nav-helper elements cannot be made visible via inline styles
 * Attaches MutationObservers to clear any inline 'style' attribute written to these elements
 */
function protectAssistiveHelpers(root = document) {
    const protectElement = (el) => {
        if (!(el instanceof Element)) return;
        if (!el.classList) return;
        if (!el.classList.contains('sr-only') && !el.classList.contains('visually-hidden') && !el.classList.contains('nav-helper')) return;
        // clear any existing inline styles
        el.style.cssText = '';
        // Attach observer only once
        if (el.__srProtected) return;
        try {
            const mo = new MutationObserver((mutations) => {
                for (const m of mutations) {
                    if (m.type === 'attributes' && m.attributeName === 'style') {
                        if (el.getAttribute('style')) {
                            el.style.cssText = '';
                        }
                    }
                }
            });
            mo.observe(el, { attributes: true, attributeFilter: ['style'] });
            el.__srProtected = true;
            el.__srProtectedMo = mo;
        } catch (e) {
            // ignore environments without MutationObserver
            console.warn('protectAssistiveHelpers: could not observe element', e);
        }
    };

    try {
        // Protect existing elements
        (root.querySelectorAll('.sr-only, .visually-hidden, .nav-helper') || []).forEach(protectElement);

        // Observe additions to the DOM under root and protect new elements
        const rootObserver = new MutationObserver((mutations) => {
            mutations.forEach(m => {
                if (m.type === 'childList' && m.addedNodes && m.addedNodes.length) {
                    m.addedNodes.forEach(node => {
                        if (!(node instanceof Element)) return;
                        protectElement(node);
                        (node.querySelectorAll && node.querySelectorAll('.sr-only, .visually-hidden, .nav-helper') || []).forEach(protectElement);
                    });
                }
            });
        });
        rootObserver.observe(root, { childList: true, subtree: true });
    } catch (e) {
        console.warn('protectAssistiveHelpers failed to setup observers:', e);
    }
}

// Initialize theme on load
document.addEventListener('DOMContentLoaded', () => {
    initTheme();

    // Register Service Worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('service-worker.js')
            .then(registration => {
                // Immediately check for updates once on load
                try { registration.update(); } catch (e) { /* ignore */ }

                // Auto-check periodically (every 6 hours)
                setInterval(() => {
                    try { registration.update(); } catch (e) { /* ignore */ }
                }, 1000 * 60 * 60 * 6);

                // If a new worker is found, request it to skip waiting so it activates immediately
                registration.addEventListener('updatefound', () => {
                    const newWorker = registration.installing;
                    if (newWorker) {
                        newWorker.addEventListener('statechange', () => {
                            if (newWorker.state === 'installed') {
                                // If there's an active controller, this is an update. Ask SW to skip waiting.
                                if (navigator.serviceWorker.controller) {
                                    try {
                                        newWorker.postMessage({ type: 'SKIP_WAITING' });
                                    } catch (e) {
                                        // Fallback: send message to registration.waiting if present
                                        if (registration.waiting) registration.waiting.postMessage({ type: 'SKIP_WAITING' });
                                    }
                                }
                            }
                        });
                    }
                });

                // When the active controller changes (new SW took control), reload the page automatically
                let refreshing = false;
                navigator.serviceWorker.addEventListener('controllerchange', () => {
                    if (refreshing) return;
                    refreshing = true;
                    // Give a small timeout to ensure new SW is fully controlling fetches
                    setTimeout(() => window.location.reload(true), 300);
                });

            })
            .catch(error => {
                console.error('Service Worker registration failed:', error);
            });
    }

    // Harden assistive helper elements to prevent accidental inline-style reveals
    try {
        protectAssistiveHelpers(document);
    } catch (e) {
        console.warn('protectAssistiveHelpers invocation failed', e);
    }

    // Enhance icon buttons with labels
    try {
        enhanceIconButtons();
    } catch (e) {
        console.warn('enhanceIconButtons invocation failed', e);
    }
});
