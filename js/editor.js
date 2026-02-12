/**
 * KZ-PAD JSON Editor Logic
 * Handles loading, editing, and exporting JSON database files.
 */

let currentData = null;
let currentType = 'clauses'; // 'clauses' | 'mapping' | 'summaries'
let activeItemId = null;

// DOM Elements
const typeButtons = document.querySelectorAll('#file-type-selector button');
const loaderSection = document.getElementById('loader-section');
const workspaceSection = document.getElementById('editor-workspace');
const itemsList = document.getElementById('items-list');
const formContainer = document.getElementById('form-container');
const fileInfo = document.getElementById('current-file-info');
const searchInput = document.getElementById('sidebar-search');

// Configuration for file paths
const DEFAULT_PATHS = {
    clauses: 'clauses_json/clauses.json',
    mapping: 'clauses_json/mapping.json',
    summaries: 'clauses_json/summaries.json'
};

/**
 * Initialize Event Listeners
 */
function init() {
    if (window.lucide) window.lucide.createIcons();
    // Tab switching
    typeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            typeButtons.forEach(b => b.classList.add('outline'));
            btn.classList.remove('outline');
            currentType = btn.dataset.type;
            resetEditor();
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

    // Export button
    document.getElementById('btn-export-json').addEventListener('click', exportJson);

    // Add new button
    document.getElementById('btn-add-new').addEventListener('click', addNewItem);
}

/**
 * Adds a new entry to the current data
 */
function addNewItem() {
    if (!currentData) {
        alert("Najpierw załaduj plik!");
        return;
    }
    const newId = prompt("Podaj identyfikator nowego elementu (np. C.9.9.9 lub Art. X):");
    if (!newId) return;

    if (currentType === 'clauses') {
        if (currentData[newId]) { alert("Element o tym ID już istnieje!"); return; }
        currentData[newId] = { title: "Nowa klauzula", evaluation: "", procedure: [], checklist: [], preconditions: [] };
    } else if (currentType === 'mapping') {
        if (currentData.matrix.find(it => it.id === newId)) { alert("Element o tym ID już istnieje!"); return; }
        currentData.matrix.push({
            id: newId,
            article: newId,
            category: "Nowa kategoria",
            requirement: "",
            product_mappings: Object.fromEntries(Object.keys(currentData.products || {}).map(p => [p, ""]))
        });
    } else if (currentType === 'summaries') {
        if (currentData.compliance_summaries[newId]) { alert("Element o tym ID już istnieje!"); return; }
        currentData.compliance_summaries[newId] = {
            id: newId,
            status: "STATUS",
            title: "Tytuł",
            description: "",
            sections: { failures_label: "Błędy:", passed_label: "Spełnione:" }
        };
    }

    renderList();
    loadItem(newId);
}

/**
 * Resets the editor state when switching types
 */
function resetEditor() {
    currentData = null;
    activeItemId = null;
    loaderSection.classList.remove('hidden');
    workspaceSection.classList.add('hidden');
    itemsList.innerHTML = '';
    formContainer.innerHTML = '<p class="secondary">Wybierz element z listy po lewej, aby rozpocząć edycję.</p>';
    fileInfo.textContent = 'Plik: niezaładowany';
}

/**
 * Loads default files from the server
 */
async function loadDefaults() {
    const path = DEFAULT_PATHS[currentType];
    try {
        const response = await fetch(path);
        if (!response.ok) throw new Error(`Błąd ładowania: ${response.statusText}`);
        currentData = await response.json();
        onDataLoaded(`Domyślny: ${path}`);
    } catch (err) {
        alert("Nie udało się pobrać pliku z serwera: " + err.message);
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
            currentData = JSON.parse(event.target.result);
            onDataLoaded(`Wgrany: ${file.name}`);
        } catch (err) {
            alert("Błąd parsowania pliku JSON: " + err.message);
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
    fileInfo.textContent = sourceInfo;
    renderList();
    if (window.lucide) window.lucide.createIcons();
}

/**
 * Renders the sidebar list based on current type and search term
 */
function renderList(searchTerm = '') {
    itemsList.innerHTML = '';
    let keys = [];

    if (currentType === 'clauses') {
        keys = Object.keys(currentData).sort();
    } else if (currentType === 'mapping') {
        keys = (currentData.matrix || []).map(item => item.id);
    } else if (currentType === 'summaries') {
        keys = Object.keys(currentData.compliance_summaries || {});
    }

    keys.filter(key => key.toLowerCase().includes(searchTerm))
        .forEach(key => {
            const div = document.createElement('div');
            div.className = 'list-item' + (activeItemId === key ? ' active' : '');
            div.textContent = key;
            div.onclick = () => loadItem(key);
            itemsList.appendChild(div);
        });
}

/**
 * Loads a specific item into the form
 */
function loadItem(id) {
    activeItemId = id;
    renderList(searchInput.value); // refresh active state in list
    
    let itemData = null;
    if (currentType === 'clauses') {
        itemData = currentData[id];
        renderClauseForm(id, itemData);
    } else if (currentType === 'mapping') {
        itemData = currentData.matrix.find(it => it.id === id);
        renderMappingForm(id, itemData);
    } else if (currentType === 'summaries') {
        itemData = currentData.compliance_summaries[id];
        renderSummaryForm(id, itemData);
    }

    if (window.lucide) window.lucide.createIcons();
}

/**
 * EDITOR: Clauses
 */
function renderClauseForm(id, data) {
    formContainer.innerHTML = `
        <h3>Edycja klauzuli: ${id}</h3>
        <label>Tytuł klauzuli
            <input type="text" id="edit-title" value="${data.title || ''}">
        </label>
        <label>Metoda oceny (Evaluation)
            <input type="text" id="edit-evaluation" value="${data.evaluation || ''}">
        </label>
        
        <div class="field-group">
            <h6>Procedura sprawdzania</h6>
            <div id="procedure-container">
                ${(data.procedure || []).map((item, idx) => renderArrayItem('procedure', item, idx)).join('')}
            </div>
            <button class="outline contrast" onclick="addArrayItem('procedure')">+ Dodaj krok procedury</button>
        </div>

        <div class="field-group">
            <h6>Checklista (punkty sprawdzenia)</h6>
            <div id="checklist-container">
                ${(data.checklist || []).map((item, idx) => renderArrayItem('checklist', item, idx)).join('')}
            </div>
            <button class="outline contrast" onclick="addArrayItem('checklist')">+ Dodaj punkt</button>
        </div>

        <div class="field-group">
            <h6>Warunki wstępne</h6>
            <div id="preconditions-container">
                ${(data.preconditions || []).map((item, idx) => renderArrayItem('preconditions', item, idx)).join('')}
            </div>
            <button class="outline contrast" onclick="addArrayItem('preconditions')">+ Dodaj warunek</button>
        </div>

        <button onclick="saveCurrent()">Zatwierdź zmiany</button>
    `;
}

/**
 * EDITOR: Mapping
 */
function renderMappingForm(id, data) {
    let productsHtml = '';
    // If it's the global mapping context, we might want to edit products too
    // For now, let's keep it simple and just edit the matrix item.
    // However, the user might want to edit product names.
    
    formContainer.innerHTML = `
        <div style="border-bottom: 2px solid var(--primary); margin-bottom: 2rem; padding-bottom: 1rem;">
            <h3>Edycja listy produktów (globalna)</h3>
            <div class="grid">
                <div><small>Zmieniaj nazwy produktów używanych w całej aplikacji.</small></div>
                <div style="text-align: right;"><button class="outline" onclick="toggleProductsEdit()">Pokaż/Ukryj listę produktów</button></div>
            </div>
            <div id="products-editor" class="hidden" style="margin-top: 1rem;">
                ${Object.entries(currentData.products || {}).map(([pId, pName]) => `
                    <div class="grid" style="margin-bottom: 0.5rem;">
                        <span style="font-family: monospace;">${pId}</span>
                        <input type="text" value="${pName}" onchange="updateProductName('${pId}', this.value)" style="margin-bottom: 0;">
                    </div>
                `).join('')}
            </div>
        </div>

        <h3>Edycja mapowania artykułu: ${id}</h3>
        <label>Artykuł
            <input type="text" id="edit-article" value="${data.article || ''}">
        </label>
        <label>Kategoria
            <input type="text" id="edit-category" value="${data.category || ''}">
        </label>
        <label>Wymaganie (treść)
            <textarea id="edit-requirement" rows="4">${data.requirement || ''}</textarea>
        </label>
        
        <div class="field-group">
            <h6>Powiązane klauzule wg Kategorii Produktów</h6>
            <p><small>Wpisz identyfikatory klauzul oddzielone średnikiem i spacją (np. C.5.1; C.9.1.1.1)</small></p>
            <div id="product-mappings-container">
                ${Object.entries(data.product_mappings || {}).map(([pId, val]) => {
                    const pName = currentData.products[pId] || pId;
                    return `<label>${pId} - ${pName}
                        <input type="text" class="prod-mapping-input" data-pid="${pId}" value="${val}">
                    </label>`;
                }).join('')}
            </div>
        </div>

        <button onclick="saveCurrent()">Zatwierdź zmiany</button>
    `;
}

window.toggleProductsEdit = () => {
    document.getElementById('products-editor').classList.toggle('hidden');
};

window.updateProductName = (pId, newName) => {
    currentData.products[pId] = newName;
};

/**
 * EDITOR: Summaries
 */
function renderSummaryForm(id, data) {
    formContainer.innerHTML = `
        <h3>Edycja szablonu: ${id}</h3>
        <label>Status wizualny
            <input type="text" id="edit-status" value="${data.status || ''}">
        </label>
        <label>Tytuł dokumentu
            <input type="text" id="edit-title" value="${data.title || ''}">
        </label>
        <label>Opis / Treść główna
            <textarea id="edit-description" rows="8">${data.description || ''}</textarea>
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
    `;
}

/**
 * Helpers for Array fields (Checklist/Preconditions)
 */
function renderArrayItem(type, value, index) {
    return `
        <div class="array-item" data-type="${type}" data-index="${index}">
            <textarea rows="2" oninput="syncArrayValue('${type}', ${index}, this.value)">${value}</textarea>
            <button class="outline error" style="width: auto;" onclick="removeArrayItem('${type}', ${index})">Usuń</button>
        </div>
    `;
}

window.syncArrayValue = (type, index, value) => {
    // We update currentData directly for checklists/preconditions to avoid complex DOM state management
    if (currentType === 'clauses') {
        currentData[activeItemId][type][index] = value;
    }
};

window.addArrayItem = (type) => {
    if (!currentData[activeItemId][type]) currentData[activeItemId][type] = [];
    currentData[activeItemId][type].push("");
    loadItem(activeItemId);
};

window.removeArrayItem = (type, index) => {
    currentData[activeItemId][type].splice(index, 1);
    loadItem(activeItemId);
};

/**
 * Save current form values back to currentData
 */
window.saveCurrent = () => {
    if (currentType === 'clauses') {
        const item = currentData[activeItemId];
        item.title = document.getElementById('edit-title').value;
        item.evaluation = document.getElementById('edit-evaluation').value;
        // Arrays (procedure, checklist, preconditions) are synced in real-time
    } else if (currentType === 'mapping') {
        const item = currentData.matrix.find(it => it.id === activeItemId);
        item.article = document.getElementById('edit-article').value;
        item.category = document.getElementById('edit-category').value;
        item.requirement = document.getElementById('edit-requirement').value;
        
        // Product mappings
        document.querySelectorAll('.prod-mapping-input').forEach(input => {
            item.product_mappings[input.dataset.pid] = input.value;
        });
    } else if (currentType === 'summaries') {
        const item = currentData.compliance_summaries[activeItemId];
        item.status = document.getElementById('edit-status').value;
        item.title = document.getElementById('edit-title').value;
        item.description = document.getElementById('edit-description').value;
        
        document.querySelectorAll('.section-label-input').forEach(input => {
            item.sections[input.dataset.skey] = input.value;
        });
    }
    
    alert("Zmiany zapisane w pamięci tymczasowej.");
};

/**
 * Export currentData to JSON file for download
 */
function exportJson() {
    if (!currentData) return;
    
    const jsonStr = JSON.stringify(currentData, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `${currentType}_updated.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Start app
init();
