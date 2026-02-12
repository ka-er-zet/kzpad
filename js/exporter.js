// exporter.js - Shared ODT export logic
// Dependencies: JSZip, utils.js (for xmlEscape, getAuditStats, etc.)

(function(root) {
    function exportToODT(state, messagesObject, filenameOverride) {
        console.log('Exporter: Starting ODT generation...');
        const M = messagesObject || (window.M) || {
            export: { saveReportSuccess: 'Raport ODT został pobrany.' }
        };

        const stats = window.utils.getAuditStats(state);
        const zip = new JSZip();
        // Fallback title
        const reportTitle = `Raport: ${state.product || 'EAA'}`;

        const stylesXml = `<?xml version="1.0" encoding="UTF-8"?>
<office:document-styles 
    xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" 
    xmlns:style="urn:oasis:names:tc:opendocument:xmlns:style:1.0" 
    xmlns:text="urn:oasis:names:tc:opendocument:xmlns:text:1.0" 
    xmlns:table="urn:oasis:names:tc:opendocument:xmlns:table:1.0" 
    xmlns:fo="urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0" 
    office:version="1.2">
    <office:styles>
        <style:default-style style:family="paragraph">
            <style:text-properties fo:language="pl" fo:country="PL" style:language-asian="pl" style:country-asian="PL" style:language-complex="pl" style:country-complex="PL"/>
        </style:default-style>
        <style:style style:name="Standard" style:family="paragraph" style:class="text">
            <style:text-properties fo:language="pl" fo:country="PL" />
        </style:style>
        <style:style style:name="T1" style:family="paragraph" style:parent-style-name="Standard">
            <style:paragraph-properties fo:margin-top="0.6cm" fo:margin-bottom="0.4cm"/>
            <style:text-properties fo:font-size="24pt" fo:font-weight="bold" fo:language="pl" fo:country="PL" />
        </style:style>
        <style:style style:name="H1" style:family="paragraph" style:parent-style-name="Standard">
            <style:paragraph-properties fo:margin-top="0.6cm" fo:margin-bottom="0.4cm"/>
            <style:text-properties fo:font-size="18pt" fo:font-weight="bold" fo:language="pl" fo:country="PL" />
        </style:style>
        <style:style style:name="H2" style:family="paragraph" style:parent-style-name="Standard">
            <style:paragraph-properties fo:margin-top="0.5cm" fo:margin-bottom="0.3cm"/>
            <style:text-properties fo:font-size="16pt" fo:font-weight="bold" fo:language="pl" fo:country="PL" />
        </style:style>
        <style:style style:name="P1" style:family="paragraph" style:parent-style-name="Standard">
            <style:paragraph-properties fo:margin-top="0cm" fo:margin-bottom="0.3cm"/>
            <style:text-properties fo:font-size="12pt" fo:language="pl" fo:country="PL" />
        </style:style>
        <style:style style:name="H3" style:family="paragraph" style:parent-style-name="Standard">
            <style:paragraph-properties fo:margin-top="0.4cm" fo:margin-bottom="0.2cm"/>
            <style:text-properties fo:font-size="12pt" fo:font-weight="bold" fo:language="pl" fo:country="PL" />
        </style:style>
        <style:style style:name="T_BOLD" style:family="text">
            <style:text-properties fo:font-weight="bold"/>
        </style:style>
        <style:style style:name="FooterP" style:family="paragraph" style:parent-style-name="Standard">
            <style:paragraph-properties fo:text-align="center"/>
            <style:text-properties fo:font-size="10pt"/>
        </style:style>
        <style:style style:name="P_Comment" style:family="paragraph" style:parent-style-name="Standard">
            <style:paragraph-properties fo:margin-left="1cm" fo:margin-top="0.2cm"/>
            <style:text-properties fo:font-size="10pt"/>
        </style:style>
        <style:style style:name="Tbl1" style:family="table">
            <style:table-properties table:border-model="collapsing" />
        </style:style>
        <style:style style:name="Tbl1.A" style:family="table-column"><style:table-column-properties style:column-width="4cm"/></style:style>
        <style:style style:name="Tbl1.B" style:family="table-column"><style:table-column-properties style:column-width="8cm"/></style:style>
        <style:style style:name="Tbl1.C" style:family="table-column"><style:table-column-properties style:column-width="3cm"/></style:style>
        <style:style style:name="Tbl1.D" style:family="table-column"><style:table-column-properties style:column-width="5cm"/></style:style>
        <style:style style:name="Tbl1.A1" style:family="table-cell">
            <style:table-cell-properties fo:border="0.5pt solid #000000" fo:padding="0.1cm" fo:background-color="#eeeeee"/>
            <style:text-properties fo:font-weight="bold" fo:language="pl" fo:country="PL"/>
        </style:style>
        <style:style style:name="Tbl1.A2" style:family="table-cell">
            <style:table-cell-properties fo:border="0.5pt solid #000000" fo:padding="0.1cm"/>
            <style:text-properties fo:language="pl" fo:country="PL"/>
        </style:style>
        <style:style style:name="Tbl1.Row" style:family="table-row">
            <style:table-row-properties fo:keep-together="auto" fo:margin-bottom="0.2cm"/>
        </style:style>
    </office:styles>
    <office:automatic-styles>
        <style:page-layout style:name="Mpm1">
            <style:page-layout-properties fo:page-width="29.7cm" fo:page-height="21cm" style:print-orientation="landscape" fo:margin-top="2cm" fo:margin-bottom="2cm" fo:margin-left="2cm" fo:margin-right="2cm"/>
        </style:page-layout>
        <text:list-style style:name="L1">
            <text:list-level-style-bullet text:level="1" text:style-name="Bullet_Symbols" style:num-suffix="." text:bullet-char="•">
                <style:list-level-properties text:list-level-position-and-spacing-mode="label-alignment">
                    <style:list-level-label-alignment text:label-followed-by="listtab" text:list-tab-stop-position="1.27cm" fo:text-indent="-0.635cm" fo:margin-left="1.27cm"/>
                </style:list-level-properties>
            </text:list-level-style-bullet>
        </text:list-style>
    </office:automatic-styles>
    <office:master-styles>
        <style:master-page style:name="Standard" style:page-layout-name="Mpm1">
            <style:footer>
                <text:p text:style-name="FooterP">
                    <text:page-number text:select-page="current"/> / <text:page-count/>
                </text:p>
            </style:footer>
        </style:master-page>
    </office:master-styles>
</office:document-styles>`;

        let contentXml = `<?xml version="1.0" encoding="UTF-8"?>
<office:document-content 
    xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" 
    xmlns:style="urn:oasis:names:tc:opendocument:xmlns:style:1.0" 
    xmlns:text="urn:oasis:names:tc:opendocument:xmlns:text:1.0" 
    xmlns:table="urn:oasis:names:tc:opendocument:xmlns:table:1.0" 
    xmlns:draw="urn:oasis:names:tc:opendocument:xmlns:drawing:1.0" 
    xmlns:fo="urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0" 
    xmlns:xlink="http://www.w3.org/1999/xlink" 
    xmlns:dc="http://purl.org/dc/elements/1.1/" 
    xmlns:meta="urn:oasis:names:tc:opendocument:xmlns:meta:1.0" 
    xmlns:number="urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0" 
    xmlns:svg="urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0" 
    office:version="1.2">
    <office:body>
        <office:text>`;

        // === TRYB CUSTOM (WIZARD) ===
        if (state.customSections && Array.isArray(state.customSections)) {
            // Renderujemy sekcje zdefiniowane dynamicznie w Wizardzie
            state.customSections.forEach(section => {
                if (section.type === 'title') {
                    // Tytuły (H1, H2, H3)
                    const style = section.level === 1 ? 'H1' : (section.level === 2 ? 'H2' : 'H3');
                    contentXml += `<text:h text:style-name="${style}" text:outline-level="${section.level}">${window.utils.xmlEscape(section.text)}</text:h>`;
                } else if (section.type === 'KV') {
                    // Key-Value (Metadane) - np. "Data: 2024-01-01"
                    const val = section.value ? section.value : '';
                    // Pogrubienie klucza
                    contentXml += `<text:p text:style-name="P1"><text:span text:style-name="T_BOLD">${window.utils.xmlEscape(section.key)}</text:span> ${window.utils.xmlEscape(val)}</text:p>`;
                } else if (section.type === 'text') {
                    // Zwykły akapit
                    contentXml += `<text:p text:style-name="P1">${window.utils.xmlEscape(section.text)}</text:p>`;
                } else if (section.type === 'list') {
                    // Lista punktowana
                    contentXml += `<text:list text:style-name="L1">`;
                    section.items.forEach(item => {
                        contentXml += `<text:list-item><text:p text:style-name="P1">${window.utils.xmlEscape(item.label)}</text:p>`;
                        if (item.note) {
                            // "nie notatka, a komentarz i jeśli się da, niech komentarz będzie w następnej linii pod wymaganiem, ale niech ma wcięcie"
                            contentXml += `<text:p text:style-name="P_Comment">Komentarz: ${window.utils.xmlEscape(item.note)}</text:p>`;
                        }
                        contentXml += `</text:list-item>`;
                    });
                    contentXml += `</text:list>`;
                } else if (section.type === 'separator') {
                    // Pomijamy puste linie (separatory) na rzecz marginesów w stylach akapitów (WCAG)
                }
            });

            // Nie dodajemy automatycznie nagłówka "Wyniki szczegółowe" ani tabel, jeśli nie jest to wymagane (na prośbę użytkownika customSections sterują całością)
            // Jeśli jednak chcemy tabele szczegółowe, to poniżej jest pętla generująca je. 
            // Zakładamy, że w trybie CUSTOM "Desc Summary" tabele są pomijane, chyba że użytkownik o nie poprosi.
            // DLA BEZPIECZEŃSTWA: Wygenerujmy tabele ale bez nagłówka "Wyniki szczegółowe", chyba że zdecydujemy się je ukryć całkowicie.
            // Użytkownik: "to jest niepotrzebne: Wyniki szczegółowe".
            // Interpretacja: Usuwamy nagłówek. Tabele zostają (chyba że też są "niepotrzebne").
            // Ale "Podsumowanie opisowe" w Excelu nie ma tabel.
            // Zatem: W trybie customSections SKIPUJEMY generowanie tabel na dole? 
            // Spróbujmy NIE generować tabel w trybie custom, aby plik był czystym podsumowaniem opisowym.
            // Jeśli wizard ich nie dodał do sekcji, to ich ma nie być.

        } else {
            // === TRYB STANDARDOWY (SUMMARY.JS) ===
            contentXml += `<text:h text:style-name="H1" text:outline-level="1">Raport</text:h>
            <text:h text:style-name="H2" text:outline-level="2">${window.utils.xmlEscape(state.product || 'Kontrola Dostępności')}</text:h>
            <text:p text:style-name="P1">Data: ${new Date().toLocaleString()}</text:p>`;

            if (state.auditor) {
                contentXml += `<text:p text:style-name="P1">Osoba kontrolująca: ${window.utils.xmlEscape(state.auditor)}</text:p>`;
            }
            if (state.productDesc) {
                contentXml += `<text:p text:style-name="P1">Opis: ${window.utils.xmlEscape(state.productDesc)}</text:p>`;
            }

            contentXml += `<text:h text:style-name="H2" text:outline-level="2">Kontrola ${stats.verdictLabel.toLowerCase()}</text:h>
            <text:h text:style-name="H3" text:outline-level="3">Komentarz osoby kontrolującej:</text:h>`;
            
             // Obsługa structuredSummary w trybie standard (wsteczna kompatybilność z poprzednią poprawką)
            if (state.structuredSummary) {
                 if (state.structuredSummary.description) {
                     contentXml += `<text:p text:style-name="P1">${window.utils.xmlEscape(state.structuredSummary.description)}</text:p>`;
                 }
                 if (state.structuredSummary.sections && state.structuredSummary.sections.length > 0) {
                     state.structuredSummary.sections.forEach(sec => {
                         contentXml += `<text:h text:style-name="H3" text:outline-level="4">${window.utils.xmlEscape(sec.title)}</text:h>`;
                         contentXml += `<text:list text:style-name="L1">`;
                         if (sec.list) {
                             sec.list.forEach(item => {
                                 contentXml += `<text:list-item><text:p text:style-name="P1">${window.utils.xmlEscape(item.label)}`;
                                 if (item.note) contentXml += ` (Notatka: ${window.utils.xmlEscape(item.note)})`;
                                 contentXml += `</text:p></text:list-item>`;
                             });
                         }
                         contentXml += `</text:list>`;
                     });
                 }
            } else {
                contentXml += `<text:p text:style-name="P1">${window.utils.xmlEscape(state.executiveSummary || 'Brak')}</text:p>`;
            }

            contentXml += `
            <text:h text:style-name="H3" text:outline-level="3">Statystyki</text:h>
            <text:p text:style-name="P1"> - Zaliczone: ${stats.passed}</text:p>
            <text:p text:style-name="P1"> - Niezaliczone: ${stats.failed}</text:p>
            <text:p text:style-name="P1"> - Nie dotyczy: ${stats.na}</text:p>
            <text:p text:style-name="P1"> - Nietestowalne: ${stats.nt}</text:p>
            <text:p text:style-name="P1"> - Do sprawdzenia: ${stats.toVerify}</text:p>`;
        }
        
        // Cześć wspólna - TABELE (Generowanie tabel szczegółowych C.5 - C.13)
        if (!state.customSections) {
        const tests = (state.tests || []).filter(t => t.type === 'test');

        // Szczegółowe wyniki po klauzulach
        for (let i = 5; i <= 13; i++) {
            const clause = `C.${i}`;
            const clauseTests = tests.filter(t => t.id.startsWith(clause + '.'));
            if (clauseTests.length === 0) continue;

            contentXml += `<text:h text:style-name="H3" text:outline-level="3">Klauzula ${clause}</text:h>
            <table:table table:name="ReportTable${i}" table:style-name="Tbl1">
                <table:table-column table:style-name="Tbl1.A"/>
                <table:table-column table:style-name="Tbl1.B"/>
                <table:table-column table:style-name="Tbl1.C"/>
                <table:table-column table:style-name="Tbl1.D"/>
                <table:table-header-rows>
                    <table:table-row table:style-name="Tbl1.Row">
                        <table:table-cell table:style-name="Tbl1.A1" office:value-type="string"><text:p>ID</text:p></table:table-cell>
                        <table:table-cell table:style-name="Tbl1.A1" office:value-type="string"><text:p>Tytuł</text:p></table:table-cell>
                        <table:table-cell table:style-name="Tbl1.A1" office:value-type="string"><text:p>Wynik</text:p></table:table-cell>
                        <table:table-cell table:style-name="Tbl1.A1" office:value-type="string"><text:p>Uwagi</text:p></table:table-cell>
                    </table:table-row>
                </table:table-header-rows>`;

            clauseTests.forEach(t => {
                const res = state.results[t.id] || { status: 'brak', note: '' };
                contentXml += `<table:table-row table:style-name="Tbl1.Row">
                    <table:table-cell table:style-name="Tbl1.A2" office:value-type="string"><text:p>${window.utils.xmlEscape(t.id)}</text:p></table:table-cell>
                    <table:table-cell table:style-name="Tbl1.A2" office:value-type="string"><text:p>${window.utils.xmlEscape(t.title.replace(t.id.split('#')[0] + ' ', ''))}</text:p></table:table-cell>
                    <table:table-cell table:style-name="Tbl1.A2" office:value-type="string"><text:p>${window.utils.xmlEscape(window.utils.getStatusLabel(res.status))}</text:p></table:table-cell>
                    <table:table-cell table:style-name="Tbl1.A2" office:value-type="string"><text:p>${window.utils.xmlEscape(res.note || '')}</text:p></table:table-cell>
                </table:table-row>`;
            });

            contentXml += `</table:table>`;
        }
        }

        contentXml += `</office:text></office:body></office:document-content>`;

        // Reduce namespace footprint
        contentXml = contentXml.replace(/xmlns:(?:svg|chart|dr3d|math|form|ooow|oooc|dom|xforms|xsd|xsi|rpt|of|xhtml|grddl)="[^"]+"\s*/g, '');

        // Normalize
        contentXml = contentXml.replace(/\u00a0/g, '&#160;');
        
        try {
            const parser = new DOMParser();
            const doc = parser.parseFromString(contentXml, 'application/xml');
            if (doc.getElementsByTagName('parsererror').length) {
                console.error('Generated content.xml parse error', doc.getElementsByTagName('parsererror')[0].textContent);
                // Use showToast if available, otherwise fall back to console
                if (typeof showToast === 'function') {
                    showToast('Wygenerowany dokument zawiera błędy XML. Szczegóły w konsoli.', 'error');
                } else {
                    console.error('Błąd: wygenerowany content.xml jest niepoprawny XML.');
                }
                return;
            }
        } catch (e) {
            console.warn('XML validation not available or failed', e);
        }

        const manifestXml = `<?xml version="1.0" encoding="UTF-8"?>
<manifest:manifest xmlns:manifest="urn:oasis:names:tc:opendocument:xmlns:manifest:1.0" manifest:version="1.2">
    <manifest:file-entry manifest:full-path="/" manifest:version="1.2" manifest:media-type="application/vnd.oasis.opendocument.text"/>
    <manifest:file-entry manifest:full-path="content.xml" manifest:media-type="text/xml"/>
    <manifest:file-entry manifest:full-path="styles.xml" manifest:media-type="text/xml"/>
    <manifest:file-entry manifest:full-path="meta.xml" manifest:media-type="text/xml"/>
    <manifest:file-entry manifest:full-path="settings.xml" manifest:media-type="text/xml"/>
</manifest:manifest>`;

        const productName = (state.product && state.product !== 'Nieokreślony' && state.product !== 'Profil nieokreślony') ? state.product : '';
        const meshTitle = productName 
            ? `Raport z kontroli zgodności ${productName} - podsumowanie`
            : `Raport z kontroli zgodności - podsumowanie`;

        const metaXml = `<?xml version="1.0" encoding="UTF-8"?>
<office:document-meta xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:meta="urn:oasis:names:tc:opendocument:xmlns:meta:1.0" office:version="1.2">
    <office:meta>
        <meta:generator>Narzędzie KZ-PAD</meta:generator>
        <dc:language>pl-PL</dc:language>
        <meta:creation-date>${new Date().toISOString()}</meta:creation-date>
        <dc:title>${window.utils.xmlEscape(meshTitle)}</dc:title>
    </office:meta>
</office:document-meta>`;

        const settingsXml = `<?xml version="1.0" encoding="UTF-8"?>
<office:document-settings xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" xmlns:config="urn:oasis:names:tc:opendocument:xmlns:config:1.0" office:version="1.2">
    <office:settings/>
</office:document-settings>`;

        zip.file("mimetype", "application/vnd.oasis.opendocument.text", { compression: "STORE" });
        zip.file("META-INF/manifest.xml", manifestXml);
        zip.file("content.xml", contentXml);
        zip.file("styles.xml", stylesXml);
        zip.file("meta.xml", metaXml);
        zip.file("settings.xml", settingsXml);

        zip.generateAsync({ type: "blob", mimeType: "application/vnd.oasis.opendocument.text" }).then(function (content) {
            const downloadAnchorNode = document.createElement('a');
            downloadAnchorNode.setAttribute("href", URL.createObjectURL(content));
            downloadAnchorNode.setAttribute("download", filenameOverride || window.utils.getFilename(state.product, 'odt'));
            document.body.appendChild(downloadAnchorNode);
            downloadAnchorNode.click();
            downloadAnchorNode.remove();

            // Dostępna informacja zwrotna
            const liveRegion = document.getElementById('status-message');
            if (liveRegion && M.export && M.export.saveReportSuccess) {
                liveRegion.innerText = M.export.saveReportSuccess;
            } else if (liveRegion) {
                liveRegion.innerText = "Raport został pobrany.";
            }
        });
    }

    // Export function to global scope
    root.exportToODT = exportToODT;

})(window);
