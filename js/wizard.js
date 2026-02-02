let matrixData = [];
let dictionaryData = {};
let productDictionary = {};
let summaryTemplates = {};

// Wizard-scoped utility accessor. Evaluated at load time.
const W = window.utils || {};

/**
 * Uproszczone nazwy rozdziałów do wyświetlenia w Wizardzie
 */
const chapterNames = {
    'C.5': 'Wymagania ogólne',
    'C.6': 'TIK z komunikacją głosową',
    'C.7': 'TIK z funkcją wideo',
    'C.8': 'Sprzęt (Hardware)',
    'C.9': 'Strony internetowe (Web)',
    'C.10': 'Dokumenty (Non-web)',
    'C.11': 'Oprogramowanie (Software)',
    'C.12': 'Dokumentacja i usługi wsparcia',
    'C.13': 'Usługi przekaźnikowe i alarmowe',
    'U': 'Wymagania wynikające z zapisów ustawy'
};

/**
 * Zwraca pełną nazwę produktu (Profil - Nazwa)
 */
function getFullProductNameWizard() {
    const resultsArea = document.getElementById('resultsArea');
    const profileName = resultsArea?.getAttribute('data-product-name') || 'Profil nieokreślony';
    const productName = document.getElementById('wizard-product-name')?.value || '';
    
    if (productName && productName !== 'Produkt/Usługa' && productName !== 'Produkt') {
        return `${profileName} - ${productName}`;
    }
    return profileName;
}

async function init() {
    try {
        const [dictResp, mappingResp, summaryResp] = await Promise.all([
            fetch('clauses_json/clauses.json'),
            fetch('clauses_json/mapping.json'),
            fetch('clauses_json/summaries.json')
        ]);
        
        dictionaryData = await dictResp.json();
        const mapping = await mappingResp.json();
        summaryTemplates = await summaryResp.json();
        
        matrixData = mapping.matrix;
        productDictionary = mapping.products;

        populateRadioList();
        // Button is always enabled to allow validation feedback
        document.getElementById('generateBtn').disabled = false;
        
        // Set focus to H1 on load so the user starts at the top 
        // and the first Tab lands on the first radio button
        document.querySelector('h1').focus();
        // Enhance icon buttons with visible labels and set ARIA state for theme toggles
        if (typeof enhanceIconButtonsWizard === 'function') enhanceIconButtonsWizard();
        if (typeof updateThemeToggleButtonsWizard === 'function') updateThemeToggleButtonsWizard(document.documentElement.getAttribute('data-theme') || 'dark');
        // Ensure Lucide renders icons that may have been added dynamically (close button, etc.)
        try { if (typeof lucide !== 'undefined' && typeof lucide.createIcons === 'function') lucide.createIcons(); } catch (e) { /* ignore */ }
        
        // Setup save button and Ctrl+S
        setupWizardSave();
        setupSummaryButton();
        setupHero();
        initBrowser();
    } catch (err) {
        console.error("Błąd podczas inicjalizacji:", err);
    }
}

/**
 * Inicjalizuje sekcję Hero
 */
function setupHero() {
    const heroNew = document.getElementById('hero-new-audit');
    const heroLoad = document.getElementById('hero-load-audit');
    const heroBrowse = document.getElementById('hero-browse-requirements');
    const heroSection = document.getElementById('hero-section');
    const setupSection = document.getElementById('setup-section');
    const browserSection = document.getElementById('browser-section');
    const fileInput = document.getElementById('wizard-file-input');

    if (heroNew) {
        heroNew.addEventListener('click', () => {
            // Ukryj inne sekcje jeśli otwarte
            if (browserSection) browserSection.classList.add('hidden');
            
            // Pokaż sekcję pod hero
            setupSection.classList.remove('hidden');
            
            // Przewiń do sekcji pod hero
            setTimeout(() => {
                const header = document.querySelector('.app-header');
                const headerOffset = header ? header.getBoundingClientRect().height : 0;
                const top = setupSection.getBoundingClientRect().top + window.pageYOffset - headerOffset - 20;
                window.scrollTo({ top, behavior: 'smooth' });

                // Przenieś fokus na główny tytuł arkusza
                const setupTitle = document.getElementById('setup-title');
                if (setupTitle) setupTitle.focus({ preventScroll: true });
            }, 100);
        });

        heroNew.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                heroNew.click();
            }
        });
    }

    if (heroLoad) {
        heroLoad.addEventListener('click', () => {
            if (fileInput) fileInput.click();
        });

        heroLoad.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                heroLoad.click();
            }
        });
    }

    if (heroBrowse) {
        heroBrowse.addEventListener('click', () => {
            // Ukryj sekcję setup jeśli otwarta
            if (setupSection) setupSection.classList.add('hidden');
            
            // Pokaż przeglądarkę
            browserSection.classList.remove('hidden');
            
            // Inicjalizacja widoku jeśli pusta
            if (typeof Browser !== 'undefined' && !Browser.initialized) {
                Browser.init();
            }

            // Przewiń
            setTimeout(() => {
                const header = document.querySelector('.app-header');
                const headerOffset = header ? header.getBoundingClientRect().height : 0;
                const top = browserSection.getBoundingClientRect().top + window.pageYOffset - headerOffset - 20;
                window.scrollTo({ top, behavior: 'smooth' });

                // Przenieś fokus na tytuł przeglądarki
                const browserTitle = document.getElementById('browser-title');
                if (browserTitle) browserTitle.focus({ preventScroll: true });
            }, 100);
        });

        heroBrowse.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                heroBrowse.click();
            }
        });
    }
}

/**
 * Globalny obiekt przeglądarki wymagań
 */
const Browser = {
    initialized: false,
    view: 'legal', // 'legal' | 'technical'
    currentCategory: null,
    searchQuery: '',

    init() {
        this.initialized = true;
        this.renderCategories();
        this.setupEventListeners();
    },

    setupEventListeners() {
        const btnLegal = document.getElementById('btn-view-legal');
        const btnTechnical = document.getElementById('btn-view-technical');
        const searchInput = document.getElementById('browser-search');

        btnLegal?.addEventListener('click', () => this.switchView('legal'));
        btnTechnical?.addEventListener('click', () => this.switchView('technical'));
        
        searchInput?.addEventListener('input', (e) => {
            this.searchQuery = e.target.value.toLowerCase();
            this.search();
        });
    },

    switchView(view) {
        this.view = view;
        this.currentCategory = null;
        this.searchQuery = '';
        
        const btnLegal = document.getElementById('btn-view-legal');
        const btnTechnical = document.getElementById('btn-view-technical');
        const searchInput = document.getElementById('browser-search');

        if (searchInput) searchInput.value = '';

        if (view === 'legal') {
            btnLegal.classList.replace('outline', 'primary');
            btnLegal.setAttribute('aria-checked', 'true');
            btnTechnical.classList.replace('primary', 'outline');
            btnTechnical.setAttribute('aria-checked', 'false');
        } else {
            btnTechnical.classList.replace('outline', 'primary');
            btnTechnical.setAttribute('aria-checked', 'true');
            btnLegal.classList.replace('primary', 'outline');
            btnLegal.setAttribute('aria-checked', 'false');
        }

        this.renderCategories();
    },

    renderCategories() {
        const grid = document.getElementById('browser-category-grid');
        const list = document.getElementById('browser-requirements-list');
        const breadcrumbs = document.getElementById('browser-breadcrumbs');
        
        grid.classList.remove('hidden');
        list.classList.add('hidden');
        breadcrumbs.classList.add('hidden');
        grid.innerHTML = '';

        let categories = [];
        if (this.view === 'legal') {
            // Po prostu bierzemy kategorie z mapping.json
            const uniqueCats = [...new Set(matrixData.map(item => item.category))].filter(Boolean);
            categories = uniqueCats.map(cat => ({ id: cat, name: cat, type: 'legal' }));
        } else {
            // Rozdziały normy EN — dynamicznie z `clauses.json` (dictionaryData)
            const chapterSet = new Set();
            Object.keys(dictionaryData).forEach(k => {
                if (!k || !k.startsWith('C.')) return;
                const parts = k.split('.');
                const chapter = parts.slice(0,2).join('.'); // e.g., C.10
                chapterSet.add(chapter);
            });

            const chapters = Array.from(chapterSet).sort((a,b) => {
                // sort numerically by the part after 'C.' (works for C.5, C.10, C.11 etc.)
                const numa = parseInt(a.split('.')[1] || 0, 10);
                const numb = parseInt(b.split('.')[1] || 0, 10);
                return numa - numb;
            });

            chapters.forEach(id => {
                categories.push({ id, name: chapterNames[id] || id, type: 'technical' });
            });
        }

        categories.forEach(cat => {
            const card = document.createElement('article');
            card.className = 'browser-category-card';
            card.setAttribute('role', 'button');
            card.tabIndex = 0;
            
            card.innerHTML = `
                <div class="browser-category-icon">
                    <i data-lucide="${cat.type === 'legal' ? 'scale' : 'book-open'}"></i>
                </div>
                <p class="browser-category-name">${cat.name}</p>
            `;

            card.addEventListener('click', () => this.selectCategory(cat.id));
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    card.click();
                }
            });

            grid.appendChild(card);
        });

        if (typeof lucide !== 'undefined') lucide.createIcons();
    },

    selectCategory(catId) {
        this.currentCategory = catId;
        this.renderRequirements();
    },

    renderRequirements() {
        const grid = document.getElementById('browser-category-grid');
        const list = document.getElementById('browser-requirements-list');
        const breadcrumbs = document.getElementById('browser-breadcrumbs');
        
        grid.classList.add('hidden');
        list.classList.remove('hidden');
        breadcrumbs.classList.remove('hidden');
        list.innerHTML = '';

        // Render breadcrumb
        breadcrumbs.innerHTML = `
            <a href="#" id="browser-back-to-cats" class="browser-back-link">← Powrót do listy kategorii</a>
        `;

        document.getElementById('browser-back-to-cats').addEventListener('click', (e) => {
            e.preventDefault();
            this.currentCategory = null;
            this.renderCategories();
        });

        // Wstaw nagłówek H2 z nazwą bieżącej kategorii dla poprawnej hierarchii nagłówków
        list.innerHTML = `<h2 id="browser-current-category" tabindex="-1" class="browser-current-category">${this.currentCategory}</h2>`;
        // Ustaw focus na nagłówku, aby narzędzia dostępności widziały od razu aktualny kontekst
        const catHeading = document.getElementById('browser-current-category');
        if (catHeading) catHeading.focus();

        // Filter dictionary by category
        let reqs = [];
        if (this.view === 'legal') {
            // Budujemy listę bezpośrednio z mapping.json — mapping jest źródłem prawdy.
            const matrixItems = matrixData.filter(m => m.category === this.currentCategory);

            reqs = matrixItems.map(m => {
                // Szukamy kodu U.* w product_mappings (agregacja wszystkich wartości, aby znaleźć definicję prawną)
                let uId = null;
                if (m.product_mappings) {
                    const pmVals = Object.values(m.product_mappings).join(';').split(';').map(s => s.trim()).filter(Boolean);
                    uId = pmVals.find(id => id.startsWith('U.'));
                }

                const dictEntry = uId ? dictionaryData[uId] : null;

                // Budujemy obiekt wymagania: priorytet na mapping (m.requirement, m.article), wzbogacamy gdy mamy dictEntry
                const result = {
                    id: dictEntry?.id || uId || m.id || m.article,
                    title: dictEntry?.title || m.requirement || m.article,
                    procedure: dictEntry?.procedure || [],
                    checklist: dictEntry?.checklist || [],
                    evaluation: dictEntry?.evaluation || '',

                    // info dla createRequirementCard (wyświetlany numer artykułu i tytuł z mappingu)
                    overrideId: m.article || (dictEntry && dictEntry.id) || (uId || m.id),
                    overrideTitle: (m.requirement || (dictEntry && dictEntry.title) || '').replace(/\s*\([^)]+\)$/, '').trim()
                };

                return result;
            });

        } else {
            // Rozdziały techniczne (C.*)
            const chapterPrefix = this.currentCategory; // np. 'C.9'

            // Kody dostępne w clauses.json dla danego rozdziału
            const dictCodes = Object.keys(dictionaryData).filter(k => k && (k === chapterPrefix || k.startsWith(chapterPrefix + '.')));

            // Dodatkowo zbierzemy kody C.* występujące w mapping.json, by uwzględnić brakujące wpisy w clauses.json
            const mappingCodes = new Set();
            matrixData.forEach(m => {
                // Agregujemy kody techniczne tylko z product_mappings
                const combined = Object.values(m.product_mappings || {}).join(';');
                combined.split(';').map(s => s.trim()).filter(Boolean).forEach(token => {
                    if (token === chapterPrefix || token.startsWith(chapterPrefix + '.') || token.startsWith(chapterPrefix)) {
                        if (token.startsWith('C.')) mappingCodes.add(token);
                    }
                });
            });

            const allCodes = Array.from(new Set([...dictCodes, ...mappingCodes])).filter(Boolean).sort();

            reqs = allCodes.map(code => {
                const dictEntry = dictionaryData[code] || {};
                return {
                    id: dictEntry.id || code,
                    title: dictEntry.title || code,
                    procedure: dictEntry.procedure || [],
                    checklist: dictEntry.checklist || [],
                    evaluation: dictEntry.evaluation || ''
                };
            });
        }

        reqs.forEach(req => {
            const card = this.createRequirementCard(req);
            list.appendChild(card);
        });

        if (typeof lucide !== 'undefined') lucide.createIcons();
        window.scrollTo({ top: list.getBoundingClientRect().top + window.pageYOffset - 150, behavior: 'smooth' });
    },

    createRequirementCard(req) {
        if (!req || !req.id) return document.createElement('div');
        const div = document.createElement('div');
        div.className = 'browser-card';
        
        // Formating ID for legal/technical display
        let displayId = req.overrideId || req.id;
        
        if (!req.overrideId && req.id.startsWith('U.')) {
            const parts = req.id.split('.');
            if (parts.length >= 2) {
                displayId = `Art. ${parts[1]}`;
                if (parts[2]) displayId += ` ust. ${parts[2]}`;
                if (parts[3]) displayId += ` pkt ${parts[3]}`;
                
                if (parts[4]) {
                    const subParts = parts[4].split('-');
                    displayId += ` lit. ${subParts[0]}`;
                    if (subParts[1]) {
                        const tirets = {
                            '01': 'pierwsze', '02': 'drugie', '03': 'trzecie', 
                            '04': 'czwarte', '05': 'piąte', '06': 'szóste',
                            '07': 'siódme', '08': 'ósme', '09': 'dziewiąte', '10': 'dziesiąte'
                        };
                        displayId += ` tiret ${tirets[subParts[1]] || subParts[1]}`;
                    }
                }
            }
        }
        
        let labelsHtml = '';
        if (req.evaluation) labelsHtml += `<span class="browser-label">Metoda: ${req.evaluation}</span>`;
        if (req.id && req.id.includes('9.')) labelsHtml += `<span class="browser-label">WCAG</span>`;

        // Procedure
        const procedureHtml = (req.procedure || []).map(p => `<li>${p}</li>`).join('');
        
        // Checklist
        let checklistHtml = '';
        if (req.checklist && req.checklist.length > 0) {
            checklistHtml = `
                <div class="browser-checklist" style="margin-top: 1.5rem; border-top: 1px dashed var(--muted-border-color); padding-top: 1rem;">
                    <strong style="display: block; margin-bottom: 0.5rem;">Czego szukać:</strong>
                    <ul>
                        ${req.checklist.map(c => `<li>${c}</li>`).join('')}
                    </ul>
                </div>
            `;
        }

        // Clean title
        let cleanTitle = req.overrideTitle || (req.title || '').replace(req.id, '').trim();
        if (!req.overrideTitle) {
            cleanTitle = cleanTitle.replace(/\s*\([^)]+\)$/, '').trim();
        }

        div.innerHTML = `
            <div class="browser-card-header">
                <div style="width: 100%;">
                    <div class="browser-card-id">${displayId}</div>
                    <h3 style="margin: 0.5rem 0;">${cleanTitle}</h3>
                    <div class="browser-card-labels">
                        ${labelsHtml}
                    </div>
                </div>
            </div>
            <div class="browser-card-body">
                <ul class="procedure-list">
                    ${procedureHtml}
                </ul>
                ${checklistHtml}
            </div>
        `;

        return div;
    },

    search() {
        const searchStatus = document.getElementById('browser-search-status');
        
        if (!this.searchQuery) {
            if (searchStatus) searchStatus.innerText = '';
            if (this.currentCategory) this.renderRequirements();
            else this.renderCategories();
            return;
        }

        const grid = document.getElementById('browser-category-grid');
        const list = document.getElementById('browser-requirements-list');
        const breadcrumbs = document.getElementById('browser-breadcrumbs');

        grid.classList.add('hidden');
        list.classList.remove('hidden');
        breadcrumbs.classList.add('hidden');
        list.innerHTML = '';

        const results = Object.values(dictionaryData).filter(req => {
            if (!req || !req.id) return false;
            const text = (req.id + ' ' + (req.title || '') + ' ' + (req.procedure || []).join(' ')).toLowerCase();
            return text.includes(this.searchQuery);
        });

        if (searchStatus) {
            searchStatus.innerText = results.length > 0 
                ? `Znaleziono ${results.length} wyników.` 
                : 'Brak wyników dla podanej frazy.';
        }

        if (results.length === 0) {
            list.innerHTML = '<p style="text-align: center; padding: 2rem;">Brak wyników dla podanej frazy.</p>';
            return;
        }

        results.slice(0, 50).forEach(req => {
            const card = this.createRequirementCard(req);
            list.appendChild(card);
        });

        if (typeof lucide !== 'undefined') lucide.createIcons();
    }
};

/**
 * Pusta funkcja inicjalizująca - faktyczna inicjalizacja następuje w init() -> initBrowser()
 */
function initBrowser() {
    // Rejestracja globalna jeśli potrzebna
}

/**
 * Logika generowania podsumowania opisowego
 */
function setupSummaryButton() {
    const resultsArea = document.getElementById('resultsArea');
    if (!resultsArea) return;

    // Dodaj dedykowaną sekcję podsumowania na końcu wyników
    let summarySection = document.getElementById('wizard-summary-section');
    if (!summarySection) {
        summarySection = document.createElement('section');
        summarySection.id = 'wizard-summary-section';
        summarySection.className = 'summary-section-container';
        summarySection.innerHTML = `
            <div class="summary-box" style="margin-top: 3rem; padding: 0.5rem; background: transparent;">
                <div id="summary-display-area" style="width: 100%;"></div>
            </div>
        `;
        resultsArea.appendChild(summarySection);
    }

    if (typeof lucide !== 'undefined') lucide.createIcons();
}

function scrollToRequirement(targetId) {
    const element = document.getElementById(targetId);
    if (!element) return;
    
    const header = document.querySelector('.app-header');
    const headerOffset = header ? header.getBoundingClientRect().height : 0;
    // Scroll so the element starts after the header with some padding
    const top = element.getBoundingClientRect().top + window.pageYOffset - headerOffset - 16;
    
    window.scrollTo({ top, behavior: 'smooth' });
    
    // Highlight effect
    const originalBg = element.style.backgroundColor;
    element.style.backgroundColor = 'var(--primary-focus)';
    element.style.transition = 'background-color 0.3s';
    
    setTimeout(() => {
        element.style.backgroundColor = originalBg;
        // Clean up transition after animation
        setTimeout(() => { element.style.transition = ''; }, 300);
    }, 2000);
}

function getAssessmentSummaryData() {
    const rows = Array.from(document.querySelectorAll('.requirement-row'));
    
    // Sprawdź czy Art. 19 jest włączony
    const art19Switch = document.querySelector('input[role="switch"]');
    const isArt19Enabled = art19Switch ? art19Switch.checked : false;
    
    // Filtruj wiersze
    const activeRows = rows.filter(row => {
        const isInArt19Container = row.closest('[data-art19-container="true"]');
        if (isInArt19Container) {
            return isArt19Enabled;
        }
        return true;
    });
    
    let passedCount = 0;
    let failedCount = 0;
    let inapplicableCount = 0;
    let untestedCount = 0;
    const totalCount = activeRows.length;
    
    const failures = [];
    const passed = [];
    const untested = [];
    const inapplicable = [];

    activeRows.forEach((row, index) => {
        // Dodaj unikalne ID do każdego wiersza dla nawigacji, jeśli jeszcze nie ma
        if (!row.id) row.id = `req-row-${index}`;
        
        const article = row.querySelector('.requirement-id span[aria-hidden="true"]')?.textContent?.trim() || '';
        const requirementText = row.querySelector('.requirement-text')?.textContent?.trim() || '';
        const comment = row.querySelector('textarea')?.value || '';
        const fullLabel = `${article} - ${requirementText}`;
        
        // Obiekt pomocniczy dla linku i danych
        const itemData = { 
            label: fullLabel, 
            article: article,
            requirement: requirementText,
            comment: comment,
            targetId: row.id 
        };
        
        const selectedRadio = row.querySelector('input[type="radio"]:checked');
        
        if (!selectedRadio) {
            untestedCount++;
            untested.push(itemData);
        } else {
            const val = selectedRadio.value;
            if (val === 'compliant') {
                passedCount++;
                passed.push(itemData);
            } else if (val === 'non-compliant') {
                failedCount++;
                failures.push(itemData);
            } else {
                inapplicableCount++;
                inapplicable.push(itemData);
            }
        }
    });

    // Ustal templateKey
    let templateKey = '';
    if (untestedCount === totalCount && totalCount > 0) {
        templateKey = 'no_assessment';
    } else if (totalCount === 0) {
        templateKey = 'no_assessment';
    } else if (passedCount === 0 && failedCount === 0 && inapplicableCount > 0) {
        templateKey = (untestedCount > 0) ? 'all_inapplicable_partial' : 'all_inapplicable';
    } else {
        const isFullAudit = (untestedCount === 0);
        if (isFullAudit) {
            templateKey = failedCount > 0 ? 'non_compliance_full' : 'full_compliance';
        } else {
            templateKey = failedCount > 0 ? 'partial_compliance_failed' : 'partial_compliance_passed';
        }
    }

    return {
        passed, failures, untested, inapplicable,
        passedCount, failedCount, untestedCount, inapplicableCount, totalCount,
        templateKey, isArt19Enabled
    };
}

function generateDescriptiveSummary(isInitial = false) {
    const resultsArea = document.getElementById('resultsArea');
    const displayArea = document.getElementById('summary-display-area');
    
    if (!displayArea) return;

    // Jeśli to inicjalizacja, pokaż tylko pustą kartę z przyciskiem
    if (isInitial) {
        let emptyHtml = `
            <article class="summary-result-card">
                <header class="summary-header initial">
                    <h2>Podsumowanie kontroli</h2>
                    <button id="btn-generate-summary" class="primary" onclick="generateDescriptiveSummary()">
                        <i data-lucide="file-text"></i> Generuj raport
                    </button>
                </header>
            </article>
        `;
        displayArea.innerHTML = emptyHtml;
        if (typeof lucide !== 'undefined') lucide.createIcons();
        return;
    }

    const fullProductName = getFullProductNameWizard();
    const summaryData = getAssessmentSummaryData();
    const { failures, passed, untested, inapplicable, templateKey, untestedCount } = summaryData;

    const config = summaryTemplates.compliance_summaries[templateKey];
    const currentDate = new Date().toLocaleDateString('pl-PL');

    // Kolorystyka zależy od wyniku
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const orangeColor = isDark ? '#ffa500' : '#6B4A0B';
    const borderColor = templateKey === 'no_assessment' ? orangeColor : (summaryData.failedCount > 0 ? 'var(--form-element-invalid-border-color)' : 'var(--form-element-valid-border-color)');
    
    // Dodaj informację o kontroli częściowej do statusu
    let displayStatus = config.status;
    if (templateKey !== 'no_assessment') {
        if (untestedCount > 0) {
            displayStatus += ' (kontrola częściowa)';
        } else {
            displayStatus += ' (kontrola pełna)';
        }
    }

    let html = `
        <article class="summary-result-card" style="border-left-color: ${borderColor}">
            <header class="summary-header">
                <h2>Podsumowanie kontroli</h2>
                <button id="btn-generate-summary" class="primary" onclick="generateDescriptiveSummary()">
                    <i data-lucide="refresh-cw"></i> Aktualizuj podsumowanie
                </button>
            </header>

            <div class="summary-content-area">
                <h3 class="summary-status-title" style="color: ${borderColor}">
                    STATUS: ${displayStatus}
                </h3>
                
                <div class="summary-meta">
                    <div><strong>Data kontroli:</strong> ${currentDate}</div>
                </div>

                <div class="summary-body">
                    ${config.description.replace('{productName}', `<strong>${fullProductName}</strong>`)}
                </div>
    `;

    if (config.meta) {
        html += `
            <div class="summary-meta" style="margin-top: 1.5rem; padding: 1rem; border: 1px dashed var(--muted-color); border-radius: 8px;">
                <div><strong>${config.meta.date_label}:</strong> ${currentDate}</div>
                <div><strong>${config.meta.scope_label}:</strong> ${config.meta.scope_value}</div>
            </div>
        `;
    }

    if (templateKey !== 'no_assessment') {
        const sections = config.sections || {};
        html += '<div class="summary-sections">';
        
        // Funkcja pomocnicza do budowania listy z linkami
        const renderLinkList = (items) => {
            return `<ul class="summary-link-list">${items.map(item => `
                <li>
                    <div class="summary-item-content">
                        <a href="#${item.targetId}" 
                           class="summary-anchor"
                           onclick="event.preventDefault(); scrollToRequirement('${item.targetId}');">
                            ${item.label}
                        </a>
                        ${item.comment ? `<p class="summary-item-comment">Komentarz: ${item.comment}</p>` : ''}
                    </div>
                </li>`).join('')}</ul>`;
        };

        // Niezgodności
        if (failures.length > 0) {
            const label = sections.failures_label || 'Wykryte niezgodności:';
            html += `<h3>${label}</h3>${renderLinkList(failures)}`;
        }
        
        // Zgodności
        if (passed.length > 0) {
            const label = sections.passed_label || 'Kryteria ocenione jako spełnione:';
            html += `<h3>${label}</h3>${renderLinkList(passed)}`;
        }

        // Nie dotyczy
        if (inapplicable.length > 0) {
            const label = sections.inapplicable_label || 'Kryteria niemające zastosowania:';
            html += `<h3>${label}</h3>${renderLinkList(inapplicable)}`;
        }

        // Nieocenione
        if (untested.length > 0) {
            const label = sections.untested_label || 'Kryteria niepoddane ocenie:';
            html += `<h3>${label}</h3>${renderLinkList(untested)}`;
        }

        // Uwaga / Wnioski
        if (sections.note_label) {
            html += `<p style="margin-top:1rem;"><strong>${sections.note_label}</strong> ${sections.note_value}</p>`;
        }

        if (sections.conclusions_label) {
            html += `<h3>${sections.conclusions_label}</h3><p>${sections.conclusions_value}</p>`;
        }

        // Podstawa prawna na końcu podsumowania
        if (summaryTemplates && summaryTemplates.legal_basis) {
            html += `
                <p class="summary-legal-basis" style="margin-top: 2rem; padding-top: 1rem; border-top: 1px solid var(--muted-border-color); text-align: center;">
                    ${summaryTemplates.legal_basis}
                </p>
            `;
        }

        html += '</div>';
    }

    if (templateKey !== 'no_assessment') {
        html += `
            <footer style="margin-top: 2rem; display: flex; flex-wrap: wrap; gap: 1rem;">
                <button class="outline" onclick="downloadWizardSpreadsheet(true)">
                    <i data-lucide="file-spreadsheet"></i> Pobierz podsumowanie w formacie Excel
                </button>
                <button class="outline" onclick="downloadSummaryODT()">
                    <i data-lucide="file-text"></i> Pobierz podsumowanie w formacie ODT
                </button>
                <button class="outline" onclick="downloadWizardAssessment()">
                    <i data-lucide="save"></i> Zapisz stan kontroli w formacie JSON
                </button>
            </footer>
        `;
    }

    html += `</article>`;

    displayArea.innerHTML = html;
    displayArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    // Announce to screen readers
    const announcement = document.getElementById('generation-announcement');
    if (announcement) {
        announcement.textContent = `Wygenerowano podsumowanie kontroli. Status: ${displayStatus}`;
        // Clear announcement after a moment so it can be re-announced
        setTimeout(() => { if (announcement.textContent.includes('podsumowanie')) announcement.textContent = ""; }, 1000);
    }

    if (typeof lucide !== 'undefined') lucide.createIcons();
}

/**
 * Pomocnicza funkcja do usuwania polskich znaków i znaków specjalnych z nazw plików
 */
function slugifyWizard(text) {
    if (!text) return '';
    const mapping = {
        'ą': 'a', 'ć': 'c', 'ę': 'e', 'ł': 'l', 'ń': 'n', 'ó': 'o', 'ś': 's', 'ź': 'z', 'ż': 'z',
        'Ą': 'A', 'Ć': 'C', 'Ę': 'E', 'Ł': 'L', 'Ń': 'N', 'Ó': 'O', 'Ś': 'S', 'Ź': 'Z', 'Ż': 'Z'
    };
    return text.toString().split('').map(char => mapping[char] || char).join('')
        .replace(/[^a-z0-9]/gi, '_')
        .replace(/_+/g, '_')
        .replace(/^_+|_+$/g, '')
        .toLowerCase();
}

/**
 * Generuje ustandaryzowaną nazwę pliku
 */
function generateWizardFileName(extension) {
    const resultsArea = document.getElementById('resultsArea');
    const profileName = resultsArea?.getAttribute('data-product-name') || 'arkusz';
    const productName = document.getElementById('wizard-product-name')?.value || '';
    const date = new Date().toISOString().split('T')[0];

    const pProfile = slugifyWizard(profileName);
    const pProduct = (productName && productName !== 'Produkt/Usługa' && productName !== 'Produkt') ? slugifyWizard(productName) : '';
    
    // Pliki JSON to wersje robocze (arkusz), Excel/ODT to raporty (podsumowanie)
    const prefix = (extension === 'json') ? 'arkusz' : 'podsumowanie';
    let base = `${prefix}_${pProfile}`;
    if (pProduct) base += `_${pProduct}`;
    
    return `${base}_${date}.${extension}`;
}

// Helper for ID Normalization
function normalizeId(rawId) {
    if (!rawId) return '';
    rawId = rawId.trim();
    if (rawId.startsWith('C.')) return rawId;
    // Map "9.1.1.1" -> "C.9.1.1.1"
    if (/^\d/.test(rawId)) return 'C.' + rawId;
    return rawId;
}

/**
 * Generuje dokument ODT z podsumowaniem (używa JSZip)
 */
async function downloadSummaryODT() {
    if (typeof exportToODT !== 'function') {
        alert('Błąd: Funkcja exportToODT nie jest dostępna. Sprawdź, czy załadowano exporter.js.');
        return;
    }

    const inputProductName = document.getElementById('wizard-product-name')?.value;
    const productName = (inputProductName && inputProductName !== 'Produkt' && inputProductName !== 'Produkt/Usługa') 
        ? inputProductName 
        : 'Nieokreślony';
    const productDesc = document.getElementById('wizard-product-desc')?.value || '';
    const auditor = document.getElementById('wizard-auditor-name')?.value || '';
    
    // Pobierz dane z DOM (aby odzwierciedlić aktualny stan zaznaczeń w Wizardzie)
    const rows = Array.from(document.querySelectorAll('.requirement-row'));
    
    // Obsługa przełącznika Art. 19
    const art19Switch = document.querySelector('input[role="switch"]');
    const isArt19Enabled = art19Switch ? art19Switch.checked : false;
    
    // Filtrowanie (tylko widoczne/aktywne wiersze)
    const activeRows = rows.filter(row => {
        const isInArt19Container = row.closest('[data-art19-container="true"]');
        if (isInArt19Container) return isArt19Enabled;
        return true;
    });

    const tests = [];
    const results = {};
    let passedCount = 0;
    let failedCount = 0;

    activeRows.forEach((row, index) => {
        let rawArticle = row.querySelector('.requirement-id span[aria-hidden="true"]')?.textContent?.trim() || '';
        const title = row.querySelector('.requirement-text')?.textContent?.trim() || '';
        const note = row.querySelector('textarea')?.value || '';
        
        // Ensure ID format matches what getAuditStats/exportToODT expects
        const id = normalizeId(rawArticle);

        // Dodajemy definicję testu
        tests.push({
            id: id,
            title: title,
            type: 'test'
        });

        // Sprawdzamy stan radio
        const selectedRadio = row.querySelector('input[type="radio"]:checked');
        let status = 'nt'; // domyślnie nietestowany
        if (selectedRadio) {
            const val = selectedRadio.value;
            // Map wizard radio values to summary internal status codes
            if (val === 'compliant') status = 'pass';
            else if (val === 'non-compliant') status = 'fail';
            else if (val === 'not-applicable') status = 'na';
        }

        results[id] = {
            status: status,
            note: note
        };
        
        if (status === 'pass') passedCount++;
        if (status === 'fail') failedCount++;
    });

    // Użyj logiki nazywania pliku z wizarda
    const targetFilename = generateWizardFileName('odt');

    // Konstruujemy obiekt stanu kompatybilny z summary.js/exporter.js
    // Custom Reports: Budujemy "customSections" aby ODT wyglądał identycznie jak Excel (Podsumowanie opisowe)

    const summaryData = getAssessmentSummaryData();
    const stats = window.utils.getAuditStats({ results: results, tests: tests });
    const templateKey = summaryData.templateKey || 'no_assessment';
    
    // Status Display String
    let displayStatus = 'BRAK DANYCH';
    if (templateKey !== 'no_assessment') {
        const config = summaryTemplates.compliance_summaries[templateKey];
        displayStatus = config.status;
        if (summaryData.untestedCount > 0) displayStatus += ' (kontrola częściowa)';
        else displayStatus += ' (kontrola pełna)';
    }

    // Metadane
    const resultsArea = document.getElementById('resultsArea');
    const selectedProductProfile = resultsArea?.getAttribute('data-product-name') || '';

    const customSections = [];

    // 1. Tytuł
    customSections.push({ type: 'title', level: 1, text: 'PODSUMOWANIE KONTROLI ZGODNOŚCI Z PAD' });
    customSections.push({ type: 'title', level: 2, text: `STATUS: ${displayStatus.toUpperCase()}` });

    // 2. Metadane (Key-Value)
    customSections.push({ type: 'KV', key: 'Data kontroli:', value: new Date().toLocaleDateString('pl-PL') });
    customSections.push({ type: 'KV', key: 'Profil/Kategoria:', value: selectedProductProfile || '(nie podano)' });
    
    // Obsługa wyświetlania nazwy produktu (jeśli "Nieokreślony" to traktujemy jako brak)
    const displayProductName = (productName && productName !== 'Nieokreślony') ? productName : '(nie podano)';
    customSections.push({ type: 'KV', key: 'Przedmiot kontroli:', value: displayProductName });
    
    customSections.push({ type: 'KV', key: 'Opis:', value: productDesc || '(nie podano)' });
    customSections.push({ type: 'KV', key: 'Osoba kontrolująca:', value: auditor || '(nie podano)' });
    customSections.push({ type: 'separator' });

    // 3. Tekst główny (z szablonu)
    let descText = 'Raport wygenerowany z Konfiguratora.';
    if (templateKey !== 'no_assessment') {
         const config = summaryTemplates.compliance_summaries[templateKey];
         const fullProductName = getFullProductNameWizard();
         descText = config.description.replace('{productName}', fullProductName).replace(/<[^>]*>/g, '');
    }
    customSections.push({ type: 'text', text: descText });
    customSections.push({ type: 'separator' });

    // 4. Listy (Niezgodności / Zgodności itp.)
    if (templateKey !== 'no_assessment') {
         const config = summaryTemplates.compliance_summaries[templateKey];
         const sections = config.sections || {};
         
         // Niezgodności
         const failuresLabel = sections.failures_label || "Wykryte niezgodności:";
         if (summaryData.failures.length > 0) {
             customSections.push({ type: 'title', level: 3, text: failuresLabel });
             customSections.push({ type: 'list', items: summaryData.failures.map(f => ({ label: f.label, note: f.comment })) });
         }
         
         // Zgodności
         const passedLabel = sections.passed_label || "Kryteria ocenione jako spełnione:";
         if (summaryData.passed.length > 0) {
              customSections.push({ type: 'title', level: 3, text: passedLabel });
              customSections.push({ type: 'list', items: summaryData.passed.map(f => ({ label: f.label, note: f.comment })) });
         }
         
         // Nie dotyczy
         const naLabel = sections.inapplicable_label || "Kryteria niemające zastosowania:";
         if (summaryData.inapplicable.length > 0) {
              customSections.push({ type: 'title', level: 3, text: naLabel });
              customSections.push({ type: 'list', items: summaryData.inapplicable.map(f => ({ label: f.label, note: f.comment })) });
         }
         
         // Nieocenione
         const untestedLabel = sections.untested_label || "Kryteria niepoddane ocenie:";
         if (summaryData.untested.length > 0) {
             customSections.push({ type: 'title', level: 3, text: untestedLabel });
             customSections.push({ type: 'list', items: summaryData.untested.map(f => ({ label: f.label, note: f.comment })) });
         }

         // Konkluzje (np. walidator)
         if (sections.conclusions_label) {
             customSections.push({ type: 'title', level: 3, text: sections.conclusions_label });
             customSections.push({ type: 'text', text: sections.conclusions_value });
         }
         
         // Notatka prawna
         if (sections.note_label) {
             customSections.push({ type: 'separator' });
             customSections.push({ type: 'text', text: `${sections.note_label} ${sections.note_value}` });
         }
    }

    // Stopka: Podstawa prawna (Zawsze dodawana dla wszystkich raportów poza no_assessment)
    if (templateKey !== 'no_assessment' && summaryTemplates && summaryTemplates.legal_basis) {
        customSections.push({ type: 'separator' });
        customSections.push({ type: 'text', text: summaryTemplates.legal_basis });
    }

    const state = {
        product: productName,
        productDesc: productDesc,
        auditor: auditor,
        // Ustawiamy flagę, żeby exporter wiedział że ma renderować custom sections zamiast domyślnego układu
        customSections: customSections,
        tests: tests,
        results: results
    };

    console.log('Generating ODT report (Wizard) with state:', state);
    console.log('Target filename:', targetFilename);
    
    try {
        // Pass filename as a 3rd argument (exporter.js needs update to support this)
        // OR temporarily hack it by hooking into utils.getFilename output?
        // Better: Update exporter.js to accept filenameOverride
        exportToODT(state, null, targetFilename);
    } catch (e) {
        console.error('Błąd generowania ODT:', e);
        alert('Błąd generowania raportu: ' + e.message);
    }
}

/**
 * Setup save functionality for wizard
 */
let isDownloadingWizard = false;

/**
 * Generuje arkusz Excel z wymaganiami do wypełnienia (ExcelJS)
 */
async function downloadWizardSpreadsheet(includeSummary = false) {
    // Sprawdzenie czy ExcelJS jest dostępny
    if (typeof ExcelJS === 'undefined') {
        console.error('ExcelJS library is not loaded');
        let liveRegion = document.getElementById('status-message') || document.getElementById('a11y-live-region');
        if (!liveRegion) {
            liveRegion = document.createElement('div');
            liveRegion.id = 'status-message';
            liveRegion.className = 'sr-only';
            liveRegion.setAttribute('aria-live', 'polite');
            liveRegion.setAttribute('role', 'status');
            document.body.appendChild(liveRegion);
        }
        liveRegion.innerText = 'Błąd: Biblioteka ExcelJS nie została załadowana. Spróbuj odświeżyć stronę.';
        return;
    }

    const resultsArea = document.getElementById('resultsArea');
    const productName = document.getElementById('wizard-product-name')?.value || '';
    const productDesc = document.getElementById('wizard-product-desc')?.value || '';
    const auditor = document.getElementById('wizard-auditor-name')?.value || '';
    const selectedProductProfile = resultsArea.getAttribute('data-product-name') || '';
    const currentDate = new Date().toISOString().split('T')[0];

    // Utwórz workbook
    const workbook = new ExcelJS.Workbook();

    // 4. Pobierz dane za pomocą nowej funkcji pomocniczej
    const summaryData = getAssessmentSummaryData();
    const rows = Array.from(document.querySelectorAll('.requirement-row')); // musimy przemapować wszystkie rzędy dla zapisu
    
    // --- ARKUSZ: PODSUMOWANIE (jeśli wybrano - teraz PIERWSZY) ---
    if (includeSummary && summaryData.templateKey !== 'no_assessment') {
        const summarySheet = workbook.addWorksheet('Podsumowanie opisowe');
        summarySheet.columns = [{ width: 120 }];
        
        const config = summaryTemplates.compliance_summaries[summaryData.templateKey];
        const displayDate = new Date().toLocaleDateString('pl-PL');
        
        let displayStatus = config.status;
        if (summaryData.untestedCount > 0) displayStatus += ' (kontrola częściowa)';
        else displayStatus += ' (kontrola pełna)';

        const addSummaryTitle = (text, size = 14) => {
            const r = summarySheet.addRow([text]);
            r.getCell(1).font = { bold: true, size: size };
            summarySheet.addRow([]); // Pusta linia po nagłówku
        };

        const addSummaryText = (label, value) => {
            const rowValue = value ? `${label} ${value}` : label;
            const r = summarySheet.addRow([rowValue]);
            r.getCell(1).alignment = { wrapText: true };
            
            // Bold specific values if label is present (label standard, value bold)
            if (label && value) {
                // ExcelJS Rich Text
                r.getCell(1).value = {
                    richText: [
                        { text: label + ' ' },
                        { font: { bold: true }, text: value }
                    ]
                };
            }
        };

        addSummaryTitle('PODSUMOWANIE KONTROLI ZGODNOŚCI Z PAD', 16);
        summarySheet.addRow([]); // Odstęp przed statusem
        addSummaryTitle(`STATUS: ${displayStatus.toUpperCase()}`, 14);
        summarySheet.addRow([]); // Odstęp po statusie
        
        // Zmieniona kolejność metadanych
        addSummaryText('Data kontroli:', displayDate);
        addSummaryText('Profil/Kategoria:', selectedProductProfile || '(nie podano)');
        
        const displayProductName = (productName && productName !== 'Nieokreślony') ? productName : '(nie podano)';
        addSummaryText('Przedmiot kontroli:', displayProductName);
        
        addSummaryText('Opis:', productDesc || '(nie podano)');
        addSummaryText('Osoba kontrolująca:', auditor || '(nie podano)');
        
        summarySheet.addRow([]); // Separator po metadanych
        
        const fullProductName = getFullProductNameWizard();
        const descText = config.description.replace('{productName}', fullProductName).replace(/<[^>]*>/g, '');
        // Dodaj description jako zwykły tekst
        const descRow = summarySheet.addRow([descText]);
        descRow.getCell(1).alignment = { wrapText: true };
        summarySheet.addRow([]); // Separator

        // Helper do dodawania listy z komentarzami
        const addListItems = (items) => {
             items.forEach(item => {
                const r = summarySheet.addRow([`• ${item.label}`]);
                r.getCell(1).alignment = { wrapText: true };
                if (item.comment) {
                    // Komentarz w nowej linii, wcięty
                    const rc = summarySheet.addRow([`Komentarz: ${item.comment}`]);
                    // Standardowy kolor, bez kursywy, wcięcie
                    rc.getCell(1).font = { size: 10 }; 
                    rc.getCell(1).alignment = { wrapText: true, indent: 2 }; 
                }
            });
            summarySheet.addRow([]); // Odstęp po sekcji
        };

        const sections = config.sections || {};

        // Niezgodności
        const failuresLabel = sections.failures_label || "Wykryte niezgodności:";
        if (summaryData.failures.length > 0) {
            addSummaryTitle(failuresLabel, 12);
            addListItems(summaryData.failures);
        }

        // Zgodności
        const passedLabel = sections.passed_label || "Kryteria ocenione jako spełnione:";
        if (summaryData.passed.length > 0) {
            addSummaryTitle(passedLabel, 12);
            addListItems(summaryData.passed);
        }

        // Nie dotyczy
        const naLabel = sections.inapplicable_label || "Kryteria niemające zastosowania:";
        if (summaryData.inapplicable.length > 0) {
            addSummaryTitle(naLabel, 12);
            addListItems(summaryData.inapplicable);
        }
        
        // Kryteria nieocenione
        const untestedLabel = sections.untested_label || "Kryteria niepoddane ocenie:";
        if (summaryData.untested.length > 0) {
            addSummaryTitle(untestedLabel, 12);
            addListItems(summaryData.untested);
        }

        // Wnioski
        if (sections.conclusions_label) {
            addSummaryTitle(sections.conclusions_label, 12);
            const r = summarySheet.addRow([sections.conclusions_value]);
            r.getCell(1).alignment = { wrapText: true };
            summarySheet.addRow([]);
        }
        
        // Notatka prawna
        if (sections.note_label) {
             summarySheet.addRow([]);
             addSummaryText(sections.note_label, sections.note_value);
        }

        // Stopka: Podstawa prawna
        if (summaryTemplates && summaryTemplates.legal_basis) {
            summarySheet.addRow([]);
            summarySheet.addRow([]);
            const footerRow = summarySheet.addRow([summaryTemplates.legal_basis]);
            // Formatowanie spójne z ODT (standardowy font)
            footerRow.getCell(1).font = { size: 10 };
            footerRow.getCell(1).alignment = { wrapText: true, horizontal: 'center' };
        }
    }

    // --- ARKUSZ: OCENA SZCZEGÓŁOWA (teraz DRUGI, lub pierwszy jeśli brak summary) ---
    const worksheet = workbook.addWorksheet('Ocena szczegółowa');

    // Konfiguracja kolumn
    worksheet.columns = [
        { key: 'article', width: 22 },
        { key: 'requirement', width: 75 },
        { key: 'status', width: 25 },
        { key: 'comment', width: 55 }
    ];

    // 1. Nagłówek główny
    const titleCell = worksheet.getCell('A1');
    titleCell.value = 'ARKUSZ OCENY ZGODNOŚCI Z PAD';
    worksheet.mergeCells('A1:D1');
    titleCell.font = { bold: true, size: 16 };
    titleCell.alignment = { horizontal: 'center', vertical: 'middle', wrapText: false };
    worksheet.getRow(1).height = 35;

    worksheet.addRow([]); // Pusty wiersz (wiersz 2)

    // 2. Metadane
    const metaData = [
        ['Profil oceny:', selectedProductProfile],
        ['Nazwa produktu/usługi:', productName || '(nie podano)'],
        ['Opis/Wersja/URL:', productDesc || '(nie podano)'],
        ['Osoba przeprowadzająca kontrolę:', auditor || '(nie podano)'],
        ['Data wypełnienia:', currentDate]
    ];

    metaData.forEach((data, index) => {
        const row = worksheet.addRow(data);
        row.getCell(1).font = { bold: true };
        row.getCell(1).alignment = { horizontal: 'left', vertical: 'middle', wrapText: true };
        row.getCell(2).alignment = { horizontal: 'left', vertical: 'middle', wrapText: true };
    });

    worksheet.addRow([]); // Pusty wiersz

    // 3. Nagłówek tabeli (Kolumny)
    const headerRow = worksheet.addRow(['Artykuł', 'Wymaganie', 'Ocena spełnienia', 'Komentarz']);
    headerRow.eachCell((cell) => {
        cell.font = { bold: true, color: { argb: 'FFFFFFFF' } };
        cell.fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: 'FF4472C4' }
        };
        cell.alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };
        cell.border = {
            top: { style: 'thin' },
            left: { style: 'thin' },
            bottom: { style: 'thin' },
            right: { style: 'thin' }
        };
    });
    headerRow.height = 30;

    const standardRowsData = [];
    const art19RowsData = [];
    const art19Description = "Jeżeli produkt albo usługa posiadają funkcje lub właściwości, które nie są objęte wymaganiami dostępności określonymi w art. 7–18, podmiot gospodarczy stosuje do nich odpowiednie kryteria funkcjonalne. Kryteria funkcjonalne mogą być stosowane zamiast jednego wymagania dostępności albo większej liczby wymagań dostępności określonych w art. 7–18, o ile zastosowanie tych kryteriów funkcjonalnych prowadzi do równoważnej albo większej dostępności produktu albo usługi dla osób ze szczególnymi potrzebami.";

    // Pobierz wszystkie wiersze (nie tylko aktywne), aby arkusz był kompletny, 
    // lub tylko aktywne jeśli tak wynika z kontekstu. 
    // Zwykle Excel powinien zawierać to co widzi użytkownik.
    rows.forEach((rowEl) => {
        const isInArt19Container = rowEl.closest('[data-art19-container="true"]');
        if (isInArt19Container && !summaryData.isArt19Enabled) return;

        const article = rowEl.querySelector('.requirement-id span[aria-hidden="true"]')?.textContent?.trim() || '';
        const requirementText = rowEl.querySelector('.requirement-text')?.textContent?.trim() || '';
        
        const selectedStatusEl = rowEl.querySelector('input[type="radio"]:checked');
        let currentStatus = 'Wybierz...';
        if (selectedStatusEl) {
            const val = selectedStatusEl.value;
            if (val === 'compliant') currentStatus = 'Spełnione';
            else if (val === 'non-compliant') currentStatus = 'Niespełnione';
            else if (val === 'not-applicable') currentStatus = 'Nie dotyczy';
        }

        const currentComment = rowEl.querySelector('textarea')?.value || '';
        const rowData = [article, requirementText, currentStatus, currentComment];

        if (article.includes('Art. 19')) {
            art19RowsData.push(rowData);
        } else {
            standardRowsData.push(rowData);
        }
    });

    // Funkcja pomocnicza do dodawania i formatowania wierszy danych
    const addDataRows = (ws, dataArray) => {
        dataArray.forEach(rowData => {
            const newRow = ws.addRow(rowData);
            
            newRow.getCell(1).alignment = { vertical: 'top', horizontal: 'left', wrapText: true }; 
            newRow.getCell(2).alignment = { vertical: 'top', horizontal: 'left', wrapText: true };
            newRow.getCell(3).alignment = { vertical: 'top', horizontal: 'center', wrapText: true };
            newRow.getCell(4).alignment = { vertical: 'top', horizontal: 'left', wrapText: true };

            newRow.eachCell((cell) => {
                cell.border = {
                    top: { style: 'thin' },
                    left: { style: 'thin' },
                    bottom: { style: 'thin' },
                    right: { style: 'thin' }
                };
            });

            newRow.getCell(3).dataValidation = {
                type: 'list',
                allowBlank: true,
                formulae: ['"Wybierz...,Spełnione,Niespełnione,Nie dotyczy"'],
                showErrorMessage: true,
                errorTitle: 'Nieprawidłowa wartość',
                error: 'Wybierz wartość z listy: Spełnione, Niespełnione lub Nie dotyczy'
            };
        });
    };

    // Dodaj wiersze standardowe
    addDataRows(worksheet, standardRowsData);

    // 5. Sekcja Art. 19
    if (art19RowsData.length > 0) {
        worksheet.addRow([]); // Odstęp

        
        // Opis Art. 19
        const descRow = worksheet.addRow([art19Description]);
        const currentRowNum = descRow.number;
        worksheet.mergeCells(`A${currentRowNum}:D${currentRowNum}`);
        descRow.getCell(1).alignment = { vertical: 'middle', horizontal: 'left', wrapText: true };
        descRow.getCell(1).font = { italic: true, color: { argb: 'FF555555' } };
        descRow.height = 60;

        // Nagłówek tabeli dla Art. 19
        const art19Header = worksheet.addRow(['Artykuł', 'Wymaganie', 'Ocena spełnienia', 'Komentarz']);
        art19Header.eachCell((cell) => {
            cell.font = { bold: true, color: { argb: 'FFFFFFFF' } };
            cell.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'FF777777' }
            };
            cell.alignment = { horizontal: 'center', vertical: 'middle' };
            cell.border = {
                top: { style: 'thin' },
                left: { style: 'thin' },
                bottom: { style: 'thin' },
                right: { style: 'thin' }
            };
        });
        art19Header.height = 25;

        // Dodaj wiersze Art. 19
        addDataRows(worksheet, art19RowsData);
    }

    // Zamrożenie nagłówka
    worksheet.views = [{ state: 'frozen', xSplit: 0, ySplit: 9 }];

    // --- ARKUSZ 2: PODSUMOWANIE (jeśli wybrano) ---
    // Kod ten został przeniesiony na początek funkcji, aby arkusz podsumowania był pierwszy.
    // Usunięto zduplikowany blok kodu.

    // Generowanie i pobieranie pliku
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url = window.URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = generateWizardFileName('xlsx');
    document.body.appendChild(anchor);
    anchor.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(anchor);

    // Feedback
    let liveRegion = document.getElementById('status-message') || document.getElementById('a11y-live-region');
    if (liveRegion) {
        liveRegion.innerText = 'Pobrano arkusz kontroli w formacie Excel' + (includeSummary ? ' z podsumowaniem.' : '.');
    }
}

/**
 * Zbiera dane z formularza wizard'a i pobiera je jako JSON w formacie EARL
 */
function downloadWizardAssessment() {
    // 1. Sprawdź, czy są dane do zapisania. Pobierz aktualne rzędy wymagań
    const rows = document.querySelectorAll('.requirement-row');
    if (rows.length === 0) {
        console.warn('Brak wymagań do zapisania.');
        
        // Komunikat dla screen readerów
        let liveRegion = document.getElementById('status-message');
        if (liveRegion) {
            liveRegion.innerText = 'Nie można zapisać: brak wygenerowanego arkusza kontroli.';
        }
        
        return;
    }

    // Zbierz dane produktu
    const productName = document.getElementById('wizard-product-name')?.value || '';
    const productDesc = document.getElementById('wizard-product-desc')?.value || '';
    const auditor = document.getElementById('wizard-auditor-name')?.value || '';

    // EARL Context
    const context = {
        "earl": "http://www.w3.org/ns/earl#",
        "dct": "http://purl.org/dc/terms/",
        "foaf": "http://xmlns.com/foaf/0.1/",
        "sch": "http://schema.org/",
        "xsd": "http://www.w3.org/2001/XMLSchema#",
        "eaa": "https://github.com/ka-er-zet/eaa-pfron#"
    };

    // Assertor (Narzędzie)
    const toolAssertor = {
        "@id": "_:toolAssertor",
        "@type": ["earl:Software", "earl:Assertor"],
        "dct:title": "Konfigurator Arkusza EAA",
        "dct:description": "Narzędzie do tworzenia arkuszy oceny dostępności cyfrowej wg EN 301 549",
        "dct:hasVersion": "1.0.0"
    };

    // Human Assertor (jeśli podany)
    let mainAssertor = toolAssertor;
    const graph = [toolAssertor];

    if (auditor) {
        const humanAssertor = {
            "@id": "_:humanAssertor",
            "@type": ["foaf:Person", "earl:Assertor"],
            "foaf:name": auditor
        };

        mainAssertor = {
            "@id": "_:compoundAssertor",
            "@type": "earl:Assertor",
            "earl:mainAssertor": { "@id": "_:humanAssertor" },
            "dct:description": "Audyt przeprowadzony przez człowieka przy użyciu narzędzia"
        };

        graph.push(humanAssertor);
        graph.push(mainAssertor);
    }

    // Test Subject (Produkt)
    const art19Switch = document.querySelector('input[role="switch"]');
    const isArt19Enabled = art19Switch ? art19Switch.checked : false;
    const selectedProduct = resultsArea?.getAttribute('data-selected-product') || '';

    const testSubject = {
        "@id": "_:subject",
        "@type": ["earl:TestSubject", "sch:Product"],
        "dct:title": productName || "Nieznany produkt",
        "dct:description": productDesc || '',
        "dct:date": new Date().toISOString(),
        "eaa:art19Enabled": isArt19Enabled,
        "eaa:productCategory": selectedProduct
    };
    graph.push(testSubject);

    // Assertions z ocen wymagań
    document.querySelectorAll('.requirement-row').forEach((row) => {
        const articleEl = row.querySelector('.requirement-id span[aria-hidden="true"]');
        if (!articleEl) return;

        const article = articleEl.textContent;
        const requirementText = row.querySelector('.requirement-text')?.textContent || '';
        
        // Szukaj radio buttons dla tego wymagania
        const radios = row.querySelectorAll(`input[name="status-${article}"]`);
        const textarea = row.querySelector(`textarea[name="comment-${article}"]`);

        let status = null;
        let outcome = 'earl:untested';

        radios.forEach(radio => {
            if (radio.checked) {
                status = radio.value;
                if (status === 'compliant') outcome = 'earl:passed';
                else if (status === 'non-compliant') outcome = 'earl:failed';
                else if (status === 'not-applicable') outcome = 'earl:inapplicable';
            }
        });

        const assertion = {
            "@type": "earl:Assertion",
            "earl:assertedBy": { "@id": auditor ? "_:compoundAssertor" : "_:toolAssertor" },
            "earl:subject": { "@id": "_:subject" },
            "earl:test": {
                "@type": "earl:TestCriterion",
                "dct:title": requirementText,
                "dct:identifier": article
            },
            "earl:result": {
                "@type": "earl:TestResult",
                "earl:outcome": { "@id": outcome },
                "dct:description": textarea?.value || '',
                "dct:date": new Date().toISOString()
            },
            "earl:mode": { "@id": "earl:manual" }
        };

        graph.push(assertion);
    });

    // Wygeneruj EARL JSON-LD
    const earlReport = {
        "@context": context,
        "@graph": graph
    };

    // Pobierz jako JSON
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(earlReport, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", generateWizardFileName('json'));

    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();

    // Feedback
    let liveRegion = document.getElementById('status-message') || document.getElementById('a11y-live-region');
    if (!liveRegion) {
        liveRegion = document.createElement('div');
        liveRegion.id = 'status-message';
        liveRegion.className = 'sr-only';
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('role', 'status');
        document.body.appendChild(liveRegion);
    }
    liveRegion.innerText = 'Zapisano wersję roboczą kontroli w pliku JSON.';
}

/**
 * Obsługuje wczytywanie pliku JSON ze stanem kontroli
 */
async function handleWizardFileLoad(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (e) => {
        try {
            const data = JSON.parse(e.target.result);

            // Pokaż sekcję setup, ukryj browser
            const setupSection = document.getElementById('setup-section');
            const browserSection = document.getElementById('browser-section');
            if (setupSection) setupSection.classList.remove('hidden');
            if (browserSection) browserSection.classList.add('hidden');

            // Sprawdzamy czy to format EARL (generowany przez Konfigurator)
            const graph = data['@graph'] || [];
            
            // 1. Znajdź TestSubject aby pobrać kategorię produktu i podstawowe info
            const subject = graph.find(it => it['@type'] && it['@type'].includes('earl:TestSubject'));
            const productCategory = subject?.['eaa:productCategory'] || '';
            const productName = subject?.['dct:title'] || '';
            const productDesc = subject?.['dct:description'] || '';
            const isArt19Enabled = subject?.['eaa:art19Enabled'] || false;

            // 2. Znajdź Assertor aby pobrać nazwisko osoby
            const humanAssertor = graph.find(it => it['@type'] && it['@type'].includes('foaf:Person'));
            const auditorName = humanAssertor?.['foaf:name'] || '';

            // 3. Wybierz odpowiedni radio button kategorii
            if (productCategory) {
                const radio = document.querySelector(`input[name="product_choice"][value="${productCategory}"]`);
                if (radio) {
                    radio.checked = true;
                }
            }

            // 4. Wypełnij pola tekstowe
            if (document.getElementById('wizard-product-name')) {
                document.getElementById('wizard-product-name').value = (productName === 'Nieznany produkt') ? '' : productName;
            }
            if (document.getElementById('wizard-product-desc')) document.getElementById('wizard-product-desc').value = productDesc;
            if (document.getElementById('wizard-auditor-name')) document.getElementById('wizard-auditor-name').value = auditorName;

            // 5. Wywołaj submit formularza aby wygenerować wiersze wymagań
            const form = document.getElementById('auditForm');
            if (form) {
                // Wywołujemy onsubmit bezpośrednio, ponieważ dispatchEvent nie zawsze wyzwala onsubmit przypisane przez element.onsubmit
                if (typeof form.onsubmit === 'function') {
                    form.onsubmit(new Event('submit'));
                }
            }

            // 6. Obsłuż przełącznik Art. 19 jeśli był włączony
            if (isArt19Enabled) {
                // Szukamy switcha (jest generowany dynamicznie w kroku 5)
                const art19Switch = document.querySelector('input[role="switch"]');
                if (art19Switch && !art19Switch.checked) {
                    art19Switch.click(); // To wyzwoli całą logikę przełączania
                }
            }

            // 7. Wypełnianie wyników
            const assertions = graph.filter(it => it['@type'] === 'earl:Assertion');
            assertions.forEach(assertion => {
                const articleId = assertion['earl:test']?.['dct:identifier'];
                const outcome = assertion['earl:result']?.['earl:outcome']?.['@id'];
                const comment = assertion['earl:result']?.['dct:description'] || '';

                if (articleId) {
                    // Mapowanie EARL outcome na wartości radio
                    let val = '';
                    if (outcome === 'earl:passed') val = 'compliant';
                    else if (outcome === 'earl:failed') val = 'non-compliant';
                    else if (outcome === 'earl:inapplicable') val = 'not-applicable';

                    if (val) {
                        const radio = document.querySelector(`input[name="status-${articleId}"][value="${val}"]`);
                        if (radio) radio.checked = true;
                    }

                    const textarea = document.querySelector(`textarea[name="comment-${articleId}"]`);
                    if (textarea) textarea.value = comment;
                }
            });

            // 8. Odśwież podsumowanie
            generateDescriptiveSummary();

            // 9. Przewiń do wyników (aby użytkownik widział wczytany arkusz)
            setTimeout(() => {
                const resultsHeader = document.getElementById('selectedProductName');
                if (resultsHeader) {
                    const header = document.querySelector('.app-header');
                    const headerOffset = header ? header.getBoundingClientRect().height : 0;
                    const top = resultsHeader.getBoundingClientRect().top + window.pageYOffset - headerOffset - 20;
                    window.scrollTo({ top, behavior: 'smooth' });
                    resultsHeader.focus({ preventScroll: true });
                }
            }, 150);

            // Powiadomienie
            let liveRegion = document.getElementById('status-message') || document.getElementById('a11y-live-region');
            if (liveRegion) {
                liveRegion.innerText = 'Wczytano stan kontroli z pliku JSON.';
            }

        } catch (err) {
            console.error('Błąd podczas wczytywania pliku:', err);
            
            // Komunikat dla screen readerów
            let liveRegion = document.getElementById('status-message');
            if (liveRegion) {
                liveRegion.innerText = 'Błąd podczas wczytywania pliku: ' + err.message;
            }
            
            alert('Błąd podczas wczytywania pliku: ' + err.message);
        }
    };
    reader.readAsText(file);
    // Zresetuj input, aby umożliwić ponowne wczytanie tego samego pliku
    event.target.value = '';
}

function setupWizardSave() {
    const saveBtn = document.getElementById('btn-save-wizard');
    const loadBtn = document.getElementById('btn-load-wizard');
    const spreadsheetBtn = document.getElementById('btn-download-spreadsheet');
    const fileInput = document.getElementById('wizard-file-input');

    if (saveBtn) {
        saveBtn.addEventListener('click', () => {
            if (isDownloadingWizard) return;
            isDownloadingWizard = true;
            downloadWizardAssessment();
            setTimeout(() => isDownloadingWizard = false, 1000);
        });
    }

    if (loadBtn) {
        loadBtn.addEventListener('click', () => {
            // Jeśli hero jest widoczne, kliknięcie w navbarze też powinno przygotować UI
            const heroSection = document.getElementById('hero-section');
            const setupSection = document.getElementById('setup-section');
            if (heroSection && !heroSection.classList.contains('hidden')) {
                // Nie ukrywamy jeszcze hero, zrobimy to po wybraniu pliku w handleWizardFileLoad
            }
            if (fileInput) fileInput.click();
        });
    }

    if (fileInput) {
        fileInput.addEventListener('change', handleWizardFileLoad);
    }

    if (spreadsheetBtn) {
        spreadsheetBtn.addEventListener('click', () => {
            if (isDownloadingWizard) return;
            isDownloadingWizard = true;
            downloadWizardSpreadsheet(true);
            setTimeout(() => isDownloadingWizard = false, 1000);
        });
    }

    // Handle Ctrl+S / Cmd+S to save and Ctrl+O to load
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 's') {
            e.preventDefault();
            if (isDownloadingWizard) return;
            isDownloadingWizard = true;
            downloadWizardAssessment();
            setTimeout(() => isDownloadingWizard = false, 1000);
        } else if ((e.ctrlKey || e.metaKey) && e.key === 'o') {
            e.preventDefault();
            const loadBtn = document.getElementById('btn-load-wizard');
            if (loadBtn) loadBtn.click();
        }
    });
}

function populateRadioList() {
    const fieldset = document.getElementById('productFieldset');
    const container = fieldset.querySelector('fieldset') || fieldset;
    
    // Remove old radio buttons but keep legend and error alert
    const oldRadios = container.querySelectorAll('label.product-radio-card');
    oldRadios.forEach(label => label.remove());
    
    // Filter products first to ensure order is consistent
    const entries = Object.entries(productDictionary)
        .filter(([key, name]) => name && name.trim())
        // Make sure the special "default" product (value "0") is first for debugging convenience
        .sort(([aKey], [bKey]) => aKey === 'default' ? -1 : (bKey === 'default' ? 1 : 0));

    entries.forEach(([key, name], idx) => {
        // Label acts as the container card for accessibility and click area
        const card = document.createElement('label');
        card.className = 'product-radio-card';
        
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'product_choice';
        input.value = key;
        input.id = `prod-${idx}`;
        
        input.addEventListener('change', () => {
            const errorEl = document.getElementById('product-selection-error');
            const productFieldset = document.getElementById('productFieldset');
            errorEl.classList.add('hidden');
            errorEl.style.display = 'none';
            productFieldset.removeAttribute('aria-invalid');
        });
        
        const span = document.createElement('span');
        span.textContent = name;
        
        card.appendChild(input);
        card.appendChild(span);
        fieldset.appendChild(card);
    });
    
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

document.getElementById('auditForm').onsubmit = (e) => {
    e.preventDefault();
    const selectedRadio = document.querySelector('input[name="product_choice"]:checked');
    const errorEl = document.getElementById('product-selection-error');
    const firstFieldset = document.querySelector('form fieldset');
    const resultsArea = document.getElementById('resultsArea');
    
    if (!selectedRadio) {
        resultsArea.classList.add('hidden');
        
        // Hide first to trigger aria-live announcement again if already visible
        errorEl.classList.add('hidden');
        errorEl.style.display = 'none';
        
        // Force a small tick to allow the browser to register the change
        setTimeout(() => {
            errorEl.classList.remove('hidden');
            errorEl.style.display = 'flex';
            firstFieldset.setAttribute('aria-invalid', 'true');
            
            // Scroll the actual error element into view (account for sticky header) and focus it
            const header = document.querySelector('.app-header');
            const headerHeight = header ? header.getBoundingClientRect().height : 0;
            const targetTop = window.pageYOffset + errorEl.getBoundingClientRect().top - headerHeight - 12;
            window.scrollTo({ top: targetTop, behavior: 'smooth' });

            // Ensure the alert can receive focus and announce to SR users
            errorEl.setAttribute('tabindex', '-1');
            errorEl.focus();

            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        }, 50);
        return;
    }
    
    errorEl.classList.add('hidden');
    errorEl.style.display = 'none';
    firstFieldset.removeAttribute('aria-invalid');
    
    const selectedProduct = selectedRadio.value;
    const productFullName = productDictionary[selectedProduct] || selectedProduct;

    const resultsContent = document.getElementById('resultsContent');
    resultsContent.innerHTML = `
        <h2 id="selectedProductName" tabindex="-1" style="outline: none;"><span class="selected-product-label">Arkusz dla:</span>${productFullName}</h2>
        <div id="requirementsList"></div>
    `;
    
    const list = document.getElementById('requirementsList');
    const selectedNameDisplay = document.getElementById('selectedProductName');
    
    resultsArea.classList.remove('hidden');
    resultsArea.setAttribute('data-selected-product', selectedProduct);
    resultsArea.setAttribute('data-product-name', productFullName);
    
    let currentCategory = '';
    let art19Container = null; // Track Art. 19 container for requirements
    
    matrixData.forEach(item => {
        let productClausesRaw = item.product_mappings[selectedProduct];
        
        const isProductDefault = selectedProduct === 'default';
        const isArt19 = item.article && item.article.includes('Art. 19');
        
        if (isProductDefault || (productClausesRaw && productClausesRaw.trim())) {
            const cleanCategory = item.category.trim();
            if (cleanCategory !== currentCategory) {
                const h3 = document.createElement('h3');
                h3.className = 'category-header';
                h3.innerHTML = `<span aria-hidden="true">${cleanCategory}</span><span class="sr-only">${expandLegal(cleanCategory)}</span>`;
                list.appendChild(h3);
                
                // Add description with toggle for Art. 19 if present
                if (item.description || isArt19) {
                    const descDiv = document.createElement('div');
                    descDiv.className = 'category-description';
                    let statusAnnouncement = null; // Declare here so it's available for use later
                    
                    if (item.description) {
                        const descText = document.createElement('p');
                        descText.textContent = item.description;
                        descDiv.appendChild(descText);
                    }
                    
                    // Add switch toggle for Art. 19 inside description
                    if (isArt19) {
                        const switchId = `art19-switch-${Math.random().toString(36).substr(2, 9)}`;
                        const label = document.createElement('label');
                        label.className = 'art19-switch-label';
                        
                        const checkbox = document.createElement('input');
                        checkbox.type = 'checkbox';
                        checkbox.id = switchId;
                        checkbox.setAttribute('role', 'switch');
                        checkbox.setAttribute('aria-checked', 'false');
                        
                        const labelText = document.createElement('span');
                        labelText.textContent = 'Skontroluj wymagania artykułu 19';
                        labelText.setAttribute('for', switchId);
                        
                        label.appendChild(checkbox);
                        label.appendChild(labelText);
                        descDiv.appendChild(label);
                        
                        // Create container for Art. 19 requirements (AFTER description, not inside)
                        art19Container = document.createElement('div');
                        art19Container.className = 'art19-requirements-container';
                        art19Container.style.display = 'none';
                        art19Container.setAttribute('data-art19-container', 'true');
                        
                        // Create status announcement for screen readers
                        statusAnnouncement = document.createElement('div');
                        statusAnnouncement.setAttribute('role', 'status');
                        statusAnnouncement.setAttribute('aria-live', 'polite');
                        statusAnnouncement.setAttribute('aria-atomic', 'true');
                        statusAnnouncement.className = 'sr-only';
                        statusAnnouncement.dataset.art19Status = switchId;
                        
                        // Store reference on checkbox so we can access it in handler
                        checkbox.dataset.art19ContainerId = switchId;
                        
                        // Toggle handler
                        checkbox.addEventListener('change', (e) => {
                            const container = list.querySelector(`[data-art19-container="true"]`);
                            const status = list.querySelector(`[data-art19-status="${switchId}"]`);
                            if (container && status) {
                                if (e.target.checked) {
                                    container.style.display = 'block';
                                    status.textContent = 'Załadowano listę wymagań dla artykułu 19';
                                } else {
                                    container.style.display = 'none';
                                    status.textContent = 'Ukryto listę wymagań dla artykułu 19';
                                }
                                e.target.setAttribute('aria-checked', String(e.target.checked));
                            }
                        });
                    }
                    
                    list.appendChild(descDiv);
                    
                    // Add status announcement and container after description (for Art. 19)
                    if (isArt19 && art19Container && statusAnnouncement) {
                        list.appendChild(statusAnnouncement);
                        list.appendChild(art19Container);
                    }
                }
                
                currentCategory = cleanCategory;
            }

            const article = document.createElement('article');
            article.className = 'requirement-row';
            
            if (isProductDefault && (!productClausesRaw || !productClausesRaw.trim())) {
                // Agregacja wszystkich klauzul z product_mappings jako fallback
                const allClauses = Object.values(item.product_mappings || {})
                    .join(';')
                    .split(';')
                    .map(c => c.trim())
                    .filter(Boolean);
                productClausesRaw = [...new Set(allClauses)].join('; ');
            }

            const clauses = (productClausesRaw || '').split(';').map(c => c.trim()).filter(c => c);
            const uIds = [...new Set(clauses.filter(c => c.startsWith('U.')))];
            const cClauses = clauses.filter(c => c.startsWith('C.'));

            // Renderowanie wskazówek "Jak to sprawdzić?"
            const uHtml = uIds.map(id => {
                const data = dictionaryData[id];
                if (!data) return '';
                
                let procedures = (data.procedure || []).map(p => 
                    `<p>${fixOrphans(stripNumbering(p))}</p>`
                ).join('');

                let checklists = '';
                if (data.checklist && data.checklist.length > 0) {
                    checklists = `
                    <div class="detailed-checklist-container">
                        ` + data.checklist.map(item => `<p class="checklist-item">${(W.fixOrphans || (s=>s))(item)}</p>`).join('') + `
                    </div>`;
                }

                return procedures + checklists;
            }).join('');

            // Renderowanie warunków wstępnych
            const preconditionsHtml = uIds.map(id => {
                const data = dictionaryData[id];
                if (!data || !data.preconditions || data.preconditions.length === 0) return '';
                return (data.preconditions || []).map(p => 
                    `<p>${fixOrphans(stripNumbering(p))}</p>`
                ).join('');
            }).join('');

            const grouped = {};
            cClauses.forEach(c => {
                const prefixMatch = c.match(/^(C\.\d+)/);
                const prefix = prefixMatch ? prefixMatch[0] : 'Inne';
                if (!grouped[prefix]) grouped[prefix] = [];
                grouped[prefix].push(c);
            });

            const cHtml = Object.keys(grouped).sort((a, b) => {
                const numA = parseInt(a.match(/\d+/)[0]);
                const numB = parseInt(b.match(/\d+/)[0]);
                return numA - numB;
            }).map(prefix => `
                <section class="clause-group">
                    <h6 class="clause-group-title">${chapterNames[prefix] || prefix}</h6>
                    ${grouped[prefix].map(c => {
                const clauseData = (dictionaryData && dictionaryData[c]) ? dictionaryData[c] : null;
                const clauseTitle = clauseData && clauseData.title ? clauseData.title.replace(/&nbsp;|\u00A0/g, ' ') : '';
                const cleanTitle = stripNumbering(clauseTitle);
                const ariaLabelSafe = `Klauzula ${c}${cleanTitle ? ': ' + cleanTitle : ''}`.replace(/"/g, '&quot;');
                return `<button class="clause-tag" data-clause-id="${c}" onclick="showClause('${c}')" aria-label="${ariaLabelSafe}">${c}</button>`;
            }).join(' ')}
                </section>
            `).join('');

            article.innerHTML = `
                <h4 class="requirement-id">
                    <span aria-hidden="true">${item.article}</span>
                    <span class="sr-only">${expandLegal(item.article)}</span>
                </h4>
                
                <p class="requirement-text">${item.requirement}</p>
                
                ${preconditionsHtml ? `
                <aside class="interpretation-area">
                    <h5 class="u-interpretation-header">Warunki wstępne</h5>
                    <section class="u-interpretation">${preconditionsHtml}</section>
                </aside>` : ''}
                
                ${uHtml ? `
                <aside class="interpretation-area">
                    <h5 class="u-interpretation-header">Jak to sprawdzić?</h5>
                    <section class="u-interpretation">${uHtml}</section>
                </aside>` : ''}

                ${cHtml ? `
                <section class="technical-area">
                    <details class="technical-details">
                        <summary class="technical-summary" aria-label="Szczegółowe testy techniczne (EN 301 549) dla artykułu ${expandLegal(item.article).replace(/\"/g, '&quot;')}">
                            <h5 class="technical-title">
                                Szczegółowe testy techniczne (EN 301 549)
                            </h5>
                        </summary>
                        <section class="technical-section">
                            ${cHtml}
                        </section>
                    </details>
                </section>` : ''}
                
                <section class="assessment-section">
                    <fieldset>
                        <legend>Ocena spełnienia wymagania</legend>
                        
                        <label for="status-compliant-${item.article}">
                            <input type="radio" id="status-compliant-${item.article}" name="status-${item.article}" value="compliant">
                            Spełnione
                        </label>
                        
                        <label for="status-non-compliant-${item.article}">
                            <input type="radio" id="status-non-compliant-${item.article}" name="status-${item.article}" value="non-compliant">
                            Niespełnione
                        </label>
                        
                        <label for="status-na-${item.article}">
                            <input type="radio" id="status-na-${item.article}" name="status-${item.article}" value="not-applicable">
                            Nie dotyczy
                        </label>
                    </fieldset>
                    
                    <label for="comment-${item.article}">Komentarz</label>
                    <textarea id="comment-${item.article}" name="comment-${item.article}" placeholder="Dodaj komentarz (opcjonalnie)"></textarea>
                </section>
            `;
            
            // For Art. 19, append to container; otherwise append to list
            const targetContainer = isArt19 && art19Container ? art19Container : list;
            targetContainer.appendChild(article);
            
            // Annotate links that open in a new tab (visual via CSS + SR text via JS)
            indicateNewTabLinks(article);
            // Ensure clause-tag buttons in dynamically generated article are enhanced
            try { enhanceClauseTagsWizard(article); } catch (e) { /* ignore */ }
        }
    });
    
    document.getElementById('resultsArea').classList.remove('hidden');
    
    // Announce completion to screen readers
    const announcement = document.getElementById('generation-announcement');
    announcement.textContent = "Wygenerowano arkusz dla: " + productFullName;
    
    // Zawsze generuj pustą kartę podsumowania na starcie
    generateDescriptiveSummary(true);

    // Move focus and scroll to the results header for better visibility
    setTimeout(() => {
        // Account for the sticky header so the heading is not hidden behind it
        const header = document.querySelector('.app-header');
        const headerOffset = header ? header.getBoundingClientRect().height : 0;
        const top = selectedNameDisplay.getBoundingClientRect().top + window.pageYOffset - headerOffset - 8;
        window.scrollTo({ top, behavior: 'smooth' });
        // Focus after scrolling; preventScroll so focus doesn't jump
        setTimeout(() => { selectedNameDisplay.focus({ preventScroll: true }); }, 100);
        // Clear announcement after it's read to allow re-triggering
        setTimeout(() => { announcement.textContent = ""; }, 800);
    }, 50);
};

window.showClause = (id) => {
    const data = dictionaryData[id.trim()];
    const modal = document.getElementById('clauseModal');
    const title = document.getElementById('modalTitle');
    const body = document.getElementById('modalBody');

    if (data) {
        const renderList = (arr, tag = 'ol') => {
            if (!arr || arr.length === 0) return '<p><i>Brak danych</i></p>';
            return `<${tag}>${arr.map(item => `<li>${(W.fixOrphans || (s=>s))((W.stripNumbering || (s=>s))(item))}</li>`).join('')}</${tag}>`;
        };

        const renderCriteria = (form) => {
            if (!form || !form.inputs) return '<p><i>Brak określonych kryteriów.</i></p>';
            return form.inputs.map(i => `<p><strong>${i.value.toUpperCase()}:</strong> ${(W.fixOrphans || (s=>s))(i.label)}</p>`).join('');
        };

        const cleanTitle = stripNumbering(data.title.replace(/&nbsp;/g, ' '));
        // Keep a generic modal header; show clause id and title inside the modal body instead
        title.textContent = 'Szczegóły klauzuli';
        
        body.innerHTML = `
            <div class="clause-body-title">
                <div class="clause-id">${data.id}</div>
                <h4 class="clause-title">${(W.fixOrphans || (s=>s))(cleanTitle)}</h4>
            </div>

            <section>
                <p class="browser-card-section-title">Warunki wstępne</p>
                <div class="section-content">
                    ${renderList(data.preconditions)}
                </div>
            </section>

            <section>
                <p class="browser-card-section-title">Procedura</p>
                <div class="section-content">
                    ${renderList(data.procedure)}
                </div>
            </section>

            <section class="criteria-section">
                <p class="browser-card-section-title">Kryteria oceny (${data.evaluation})</p>
                <div class="section-content">
                    ${renderCriteria(data.form)}
                </div>
            </section>

            <section class="how-to-check-section">
                <p class="browser-card-section-title">Jak to sprawdzić?</p>
                <div class="section-content">
                    ${data.checklist && data.checklist.length > 0 ? data.checklist.map(item => `<p class="checklist-item">${(W.fixOrphans || (s=>s))((W.stripNumbering || (s=>s))(item))}</p>`).join('') : `<p><i>Brak danych</i></p>`}
                </div>
            </section>

            ${data.notes && data.notes.length > 0 ? `
            <section>
                <p class="browser-card-section-title">Uwagi</p>
                <div class="section-content">
                    ${data.notes.map(n => `<p>${(W.fixOrphans || (s=>s))(n)}</p>`).join('')}
                </div>
            </section>` : ''}
        `;
        // Add SR hint for links that open in a new tab inside the modal
        indicateNewTabLinks(body);
    } else {
        title.textContent = "Błąd";
        body.textContent = "Nie odnaleziono szczegółów dla klauzuli: " + id;
    }
    document.documentElement.classList.add('modal-is-open');
    modal.showModal();
    // Reset scroll position to top
    document.getElementById('modalBody').scrollTop = 0;
    if (typeof lucide !== 'undefined' && lucide.createIcons) {
        lucide.createIcons();
    }
    // Move focus to close button for screen reader announcement
    setTimeout(() => {
        document.getElementById('closeModal').focus();
    }, 100);
};

const handleCloseModal = () => {
    document.getElementById('clauseModal').close();
    document.documentElement.classList.remove('modal-is-open');
};

document.getElementById('closeModal').onclick = handleCloseModal;
document.getElementById('closeModalBtn').onclick = handleCloseModal;

// Zamykanie modala przy kliknięciu w tło (backdrop)
document.getElementById('clauseModal').onclick = (e) => {
    if (e.target.nodeName === 'DIALOG') handleCloseModal();
};

// --- Accessibility helpers for icon buttons (wizard-specific simplified version) ---
function placeIconLabelWizard(buttonEl, labelEl) {
    if (!buttonEl || !labelEl) return;

    // Reset previous positioning and classes
    labelEl.classList.remove('icon-label--left','icon-label--right');
    labelEl.style.left = '';
    labelEl.style.right = '';
    labelEl.style.top = '';
    labelEl.style.maxWidth = '';
    labelEl.style.whiteSpace = 'nowrap';

    // Force layout so measurements are reliable
    void labelEl.offsetWidth;

    const brect = buttonEl.getBoundingClientRect();
    const labelRect = labelEl.getBoundingClientRect();
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

    // Preferred: center above the button when possible
    const centerLeft = brect.left + (brect.width / 2) - (labelRect.width / 2);
    if (centerLeft >= 8 && (centerLeft + labelRect.width) <= (vw - 8)) {
        labelEl.style.left = `${centerLeft}px`;
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

    // If label is wider than viewport, allow wrapping and cap width
    if (labelRect.width > (vw - 16)) {
        labelEl.style.maxWidth = `${vw - 16}px`;
        labelEl.style.whiteSpace = 'normal';
    }
}

function enhanceIconButtonsWizard(){
    const selectors = ['button[onclick*="toggleTheme"]', '.theme-toggle'];
    const seen = new Set();
    selectors.forEach(sel => {
        document.querySelectorAll(sel).forEach(el => {
            if (seen.has(el)) return;
            seen.add(el);
            
            const isThemeToggle = el.matches('button[onclick*="toggleTheme"]') || el.classList.contains('theme-toggle');
            // Prefer aria-label or title
            const label = el.getAttribute('aria-label') || el.title || el.getAttribute('data-i18n-aria');
            if (!label) return;
            if (el.querySelector('.icon-label')) return;
            if (!getComputedStyle(el).position || getComputedStyle(el).position === 'static') {
                el.style.position = 'relative';
            }
            const span = document.createElement('span');
            span.className = 'icon-label';
            span.textContent = label;
            span.setAttribute('aria-hidden', 'true');
            el.appendChild(span);
            if (el.hasAttribute('title')) el.removeAttribute('title');
            setTimeout(() => placeIconLabelWizard(el, span), 0);
        });
    });
}

function updateThemeToggleButtonsWizard(theme) {
    try {
        const lang = document.documentElement.lang || 'pl';
        const modeTo = theme === 'dark' ? 'jasny' : 'ciemny';
        const actionText = (lang && lang.startsWith('pl')) ? `Przełącz motyw na ${modeTo}` : `Toggle theme to ${modeTo}`;
        document.querySelectorAll('button[onclick*="toggleTheme"]').forEach(el => {
            el.setAttribute('role', 'switch');
            el.setAttribute('aria-checked', theme === 'dark' ? 'true' : 'false');
            el.setAttribute('aria-label', actionText);
            const labelEl = el.querySelector('.icon-label');
            if (labelEl) {
                // Visible label should show full action text on hover (hidden by default via CSS); aria-label keeps the action for SR
                labelEl.textContent = actionText;
                placeIconLabelWizard(el, labelEl);
            }
        });
        // Announce for screen readers (reuse generation-announcement if present)
        const announcement = document.getElementById('generation-announcement');
        if (announcement) {
            announcement.textContent = (lang && lang.startsWith('pl')) ? `Ustawiono motyw: ${theme === 'dark' ? 'ciemny' : 'jasny'}` : `Theme set: ${theme}`;
            setTimeout(() => { announcement.textContent = ''; }, 1200);
        }
    } catch (e) { /* ignore */ }
}

// Ensure labels reposition on resize
window.addEventListener('resize', () => {
    document.querySelectorAll('.icon-label').forEach(label => {
        const btn = label.parentElement;
        placeIconLabelWizard(btn, label);
    });
});


// Annotate links that open in a new tab for accessibility and security:
// - Visual marker (pseudo-element) is handled via CSS (see wizard.css)
// - For screen readers we append a hidden text node and ensure rel includes noopener/noreferrer
function indicateNewTabLinks(container = document) {
    try {
        const links = (container && container.querySelectorAll) ? container.querySelectorAll('a[target="_blank"]') : [];
        links.forEach(a => {
            // Skip nav items and buttons
            if (a.closest('nav') || a.classList.contains('nav-item') || a.getAttribute('role') === 'button') return;

            // Ensure rel includes noopener and noreferrer for security
            try {
                const relParts = (a.getAttribute('rel') || '').split(/\s+/).filter(Boolean);
                ['noopener','noreferrer'].forEach(x => { if (!relParts.includes(x)) relParts.push(x); });
                if (relParts.length) a.setAttribute('rel', relParts.join(' '));
            } catch (e) { /* ignore */ }

            if (!a.dataset.newTabIndicator) {
                const sr = document.createElement('span');
                sr.className = 'sr-only';
                sr.textContent = (document.documentElement.lang && document.documentElement.lang.startsWith('pl')) ? ' (otworzy się w nowej karcie)' : ' (opens in a new tab)';
                a.appendChild(sr);
                a.dataset.newTabIndicator = '1';
            }

            // Append Lucide icon markup for visual indicator if not present
            if (!a.querySelector('.external-link-icon')) {
                const iconWrap = document.createElement('span');
                iconWrap.className = 'external-link-icon';
                iconWrap.setAttribute('aria-hidden', 'true');
                iconWrap.innerHTML = '<i data-lucide="external-link" aria-hidden="true"></i>';
                a.appendChild(iconWrap);
                try { if (window.lucide && typeof window.lucide.createIcons === 'function') window.lucide.createIcons(); } catch (e) { /* ignore */ }
            }
            // Also enhance any clause tags inside the container (if present)
            try { enhanceClauseTagsWizard(container); } catch (e) { /* ignore */ }
        });
    } catch (e) { /* ignore */ }
}

// Run once on DOM ready to annotate any static content
document.addEventListener('DOMContentLoaded', () => { indicateNewTabLinks(document); enhanceClauseTagsWizard(document); });


// Enhance clause-tag buttons: add visible hover label and ensure screen reader label
function enhanceClauseTagsWizard(container = document) {
    try {
        const els = (container && container.querySelectorAll) ? container.querySelectorAll('.clause-tag') : [];
        els.forEach(btn => {
            if (btn.dataset.enhancedClauseTag) return;
            const clauseId = btn.dataset.clauseId ? btn.dataset.clauseId : btn.textContent.trim();

            // Basic helpers (local copy since this function is outside generate scope)
            const fixOrphansLocal = (text) => text ? text.replace(/(\s|^)([aiouwzAIOWZ])\s+/g, '$1$2&nbsp;') : '';
            const stripNumberingLocal = (text) => text ? text.replace(/^((C|U)\.[A-Z0-9\.]+|[\d\.]+|[A-Z]\d+[\.\)]?)\s*/, '') : '';

            const data = (window && window.dictionaryData && window.dictionaryData[clauseId]) ? window.dictionaryData[clauseId] : (dictionaryData && dictionaryData[clauseId] ? dictionaryData[clauseId] : null);
            const titleWithOrphans = data && data.title ? fixOrphansLocal(stripNumberingLocal(data.title.replace(/&nbsp;|\u00A0/g, ' '))) : `Klauzula ${clauseId}`;
            const titleClean = data && data.title ? stripNumberingLocal(data.title.replace(/&nbsp;|\u00A0/g, ' ')) : `Klauzula ${clauseId}`;

            // Ensure aria-label contains the clause name for screen readers
            const articleRef = btn.getAttribute('aria-label') || '';
            if (!articleRef.includes(titleClean)) {
                const newLabel = articleRef ? `${articleRef}: ${titleClean}` : `Klauzula ${clauseId}: ${titleClean}`;
                btn.setAttribute('aria-label', newLabel);
            }

            // Append visible label like icon buttons
            if (!btn.querySelector('.icon-label')) {
                if (!getComputedStyle(btn).position || getComputedStyle(btn).position === 'static') {
                    btn.style.position = 'relative';
                }
                const span = document.createElement('span');
                span.className = 'icon-label';
                span.textContent = titleClean;
                span.setAttribute('aria-hidden', 'true');
                btn.appendChild(span);

                // Position on hover/focus so labels are placed relative to current viewport (fixes off-screen placement)
                const reposition = () => placeIconLabelWizard(btn, span);
                btn.addEventListener('mouseenter', reposition);
                btn.addEventListener('focus', reposition);
                btn.addEventListener('mousemove', reposition);

                // Also position now in case the button is visible
                setTimeout(() => { try { placeIconLabelWizard(btn, span); } catch (e) { /* ignore */ } }, 0);
            }

            btn.dataset.enhancedClauseTag = '1';
        });
    } catch (e) { /* ignore */ }
}


(function applySavedTheme() {
    try {
        const saved = localStorage.getItem('theme');
        if (saved) {
            document.documentElement.setAttribute('data-theme', saved);
            const icon = document.getElementById('theme-icon');
            if (icon) {
                icon.setAttribute('data-lucide', saved === 'dark' ? 'moon' : 'sun');
                if (window.lucide) window.lucide.createIcons();
            }
            if (typeof updateThemeToggleButtonsWizard === 'function') updateThemeToggleButtonsWizard(saved);
            if (typeof enhanceIconButtonsWizard === 'function') enhanceIconButtonsWizard();
        }
    } catch (e) { /* ignore */ }
})();

document.getElementById('clauseModal').onclose = () => {
    document.documentElement.classList.remove('modal-is-open');
};

// Initialize
init();