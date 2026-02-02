# KZ-PAD — Konfigurator Arkusza Kontroli

<div align="center">
  <img src="img/EU1.svg" alt="EU1" height="50">
  <img src="img/EU2.svg" alt="EU2" height="50">
  <img src="img/EU3.svg" alt="EU3" height="50">
  <br>
  <img src="img/pfron.svg" alt="PFRON" height="50">
  <img src="img/uke.svg" alt="UKE" height="50">
</div>

**Wersja:** 1.0.0
**Status:** Stabilna

Aplikacja **KZ-PAD** służy do tworzenia arkuszy oceny dostępności cyfrowej produktów i usług zgodnie z **Polskim Aktem o Dostępności (PAD)** oraz normą **EN 301 549**. Narzędzie umożliwia przygotowanie formularza oceny, przeprowadzenie oceny (listy kontrolne) oraz wygenerowanie raportu.

---

## 🚀 Uruchamianie (Lokalne i Online)

Aplikacja jest statyczną stroną internetową (Single Page Application) i nie wymaga backendu (PHP, Node.js itp.), ale do poprawnego działania wymaga serwowania przez protokół HTTP/HTTPS.

### Wymagania lokalne
Uruchomienie pliku `index.html` bezpośrednio z dysku (przez dwuklik, protokół `file://`) **nie zadziała** poprawnie ze względu na zabezpieczenia przeglądarek (CORS), które blokują wczytywanie plików JSON z konfiguracją.

#### Jak uruchomić lokalnie:
Masz kilka opcji:
1. **Python** (jeśli masz zainstalowany):
   ```bash
   # W folderze projektu uruchom:
   python -m http.server 8000
   # W przeglądarce wejdź na: http://localhost:8000
   ```
2. **VS Code**: Zainstaluj rozszerzenie "Live Server" i kliknij "Go Live" w dolnym pasku.
3. **Node.js**: `npx http-server -p 8080`.

### Wymagania serwera (Online)
Aby udostępnić aplikację w sieci:
1. Wgraj zawartość folderu na dowolny serwer statyczny (Apache, Nginx, GitHub Pages, Netlify).
2. **Wymagane HTTPS**: Aplikacja korzysta z Service Workers (PWA), które działają tylko na bezpiecznym połączeniu (HTTPS) lub `localhost`.
3. Serwer musi poprawnie serwować pliki JSON (MIME type: `application/json`) oraz manifest PWA (`application/manifest+json`).

---

## 📱 PWA (Progressive Web App)

Aplikacja jest przystosowana do instalacji jako natywna aplikacja na komputerze lub urządzeniu mobilnym.

- **Instalacja**: Wejdź na stronę w przeglądarce (Chrome/Edge/Safari). W pasku adresu pojawi się ikona instalacji (ikona monitora ze strzałką lub "zainstaluj").
- **Offline**: Po pierwszym załadowaniu, aplikacja działa w pełni offline. Wszystkie dane konfiguracyjne oraz logika są zapisywane w pamięci podręcznej przeglądarki.

---

## 📖 Instrukcja Obsługi (End-User)

Aplikacja wspiera pełny proces audytu – od konfiguracji po raportowanie.

### 1. Rozpoczęcie pracy
- **Start**: Kliknij "Nowy arkusz kontroli" i wybierz kategorię produktu (np. "Systemy operacyjne", "Bankomaty"). Dostosuje to listę wymagań prawnych do specyfiki urządzenia/usługi.
- **Wczytaj stan**: Jeśli masz plik JSON z poprzedniej sesji, użyj opcji "Wczytaj zapisany stan" (z sekcji głównej, lub nawigacji górnej), aby kontynuować pracę dokładnie w miejscu, w którym została przerwana.

### 2. Praca z Arkuszem (Ocena)
Główny widok ("Formularz Oceny") zawiera listę wymagań prawnych (Artykuły). Każde wymaganie rozwija się w szczegółową listę kontrolną.
- **Akcje**: Dla każdego punktu zaznacz: `Spełnione`, `Niespełnione` lub `Nie dotyczy`.
- **Komentarze**: Dodaj notatki (ikona dymku), szczególnie przy błędach. Będą one widoczne w raporcie końcowym.
- **Zapisywanie w trakcie**: W dowolnym momencie kliknij przycisk "Zapisz wersję roboczą kontroli (JSON)" w menu górnym lub użyj kombinacji ctrl(cmd)+s. Pobrany plik to Twoja kopia bezpieczeństwa.

### 3. Eksport i Raporty
Narzędzie oferuje kilka formatów eksportu kontroli:
1. **JSON**:
- może być wygenerowany albo przy użyciu ikony z menu górnego, albo przycisku **Zapisz stan kontroli w formacie JSON** w sekcji **Podsumowanie kontroli**
- zawiera pełny zrzut audytu (odpowiedzi + widoczność pól)
- służy do archiwizacji w formacie pozwalającym na późniejszą edycję w narzędziu.
2. **Excel**:
-  może być wygenerowany albo przy użyciu ikony z menu górnego, albo przycisku **Pobierz podsumowanie w formacie Excel** w sekcji **Podsumowanie kontroli**
- jeśli generowany jest zaraz po stworeniu arkusza oceny zawiera jego kopię w formacie excel, wraz z wypełnianiem arkusza, zawiera też ocenę zgodności oraz komentarze
- wygenrowany z sekcji **Podsumowanie kontroli** zawiera też podsumowanie kontroli
3. **ODT**
- dokument tekstowy (OpenDocument) z podsumowaniem oceny i szczegółami, gotowy do dalszej edykcji i przygotowania raportu na potrzeby kontaktów z podmiotami rynku

### 4. Przeglądarka Wymagań (Baza Wiedzy)
W menu nawigacyjnym dostępna jest "Przeglądarka wymagań".
- Służy do szybkiego wyszukiwania treści klauzul technicznych (C.*) oraz wymagań Ustawy bez konieczności tworzenia nowego audytu.
- Pozwala sprawdzić dokładną treść procedur testowych z normy EN 301 549.

---

## 🛠 Przewodnik Administratora: Struktura Danych (JSON)

Logika aplikacji opiera się na plikach w folderze `clauses_json/`. Zrozumienie ich struktury jest kluczowe dla modyfikacji treści.

### 1. `clauses.json` – Baza Definicji
Plik ten to "słownik" wszystkich dostępnych weryfikacji. Zawiera dwa typy wpisów:

#### A. Klauzule Techniczne (Norma EN 301 549)
Oznaczone prefiksem `C.`. Odpowiadają konkretnym punktom normy.
- **Identyfikator**: np. `C.9.1.1.1` (Rozdział 9, punkt 1.1.1).
- **Struktura**:
  ```json
  "C.9.1.1.1": {
      "id": "C.9.1.1.1",
      "title": "Treść nietekstowa",
      "procedure": ["Sprawdź czy każdy element nietekstowy..."], // Instrukcja dla audytora
      "checklist": ["Czy obrazki mają alt?", "Czy dekoracje są ukryte?"], // Lista pytań TAK/NIE
      "evaluation": "Zgodne / Niezgodne" // Metoda oceny
  }
  ```

#### B. Wymagania Ustawowe (Ustawa o Dostępności - PAD)
Oznaczone prefiksem `U.`. Są to klauzule stworzone na potrzeby mapowania ogólnych zapisów ustawy na konkretne instrukcje sprawdzające.
- **Konwencja numeracji**: `U.[Art].[Ust].[Pkt].[Lit]`
  - np. `U.7.1.1.a` -> Art. 7, ust. 1, pkt 1, lit. a.
  - Jeśli jeden artykuł wymaga kilku osobnych testów, dodajemy sufiks liczbowy, np. `U.7.1.1.b-01`, `U.7.1.1.b-02`.
- **Struktura**:
  ```json
  "U.7.1.1.a": {
      "id": "U.7.1.1.a",
      "title": "U.7.1.1.a Więcej niż jeden kanał sensoryczny...", // Pełna nazwa z odniesieniem do Art.
      "procedure": ["Zweryfikuj, czy wszystkie informacje..."], // Główna instrukcja weryfikacji (z Ustawy)
      "evaluation": "Inspekcja i testy technologii asystujących", // Metodologia badania
      "checklist": [ // Szczegółowe pytania pomocnicze
          "Czy kluczowe oznaczenia fizyczne są wyczuwalne?",
          "Czy informacje cyfrowe są odczytywane przez czytnik?"
      ]
  }
  ```

### 2. `mapping.json` – Logika Biznesowa (Relacje)
Mapuje wymagania prawne na techniczne. To tutaj decydujesz, jakie testy wyświetlą się dla "Bankomatu".

#### Sekcja `products` (Słownik produktów)
Definiuje dostępne w kreatorze typy produktów.
```json
"p03": "Terminale płatnicze..."
```

#### Sekcja `matrix` (Wiersze audytu)
Każdy obiekt w tablicy to jeden wiersz widoczny w sekcji "Wymagania Prawne".
```json
{
  "id": "A07-01-01-a",        // ID systemowe (Art 7-01-01-a)
  "article": "Art. 7 ust. 1...", // Etykieta w interfejsie
  "product_mappings": {
     // Co sprawdzamy dla produktu p03?
     // Łączymy wymaganie ustawowe (U...) oraz techniczne (C...)
     "p03": "C.12.1.2; C.5.1.3.1; U.7.1.1.a", 
     "default": "C.9.1.1.1"
   }
}
```
**Wskazówka:** Aby dodać nową klauzulę do produktu, dopisz jej ID w polu `product_mappings` (oddzielając średnikiem).

### 3. `summaries.json` – Logika Raportów
Określa, jaki tekst pojawi się w podsumowaniu ("Executive Summary") w zależności od wyniku audytu.

| Klucz (ID) | Kiedy jest używany? | Opis |
|------------|---------------------|------|
| `full_compliance` | Wynik: 100% Zgodności | Wszystkie sprawdzone kryteria są "Spełnione". |
| `non_compliance_full` | Wynik: <100% (Znaleziono błędy) | Kontrola była kompletna, ale wykryto co najmniej jedną niezgodność. |
| `partial_compliance_passed` | Częściowa kontrola (Zaliczone) | Użytkownik pominął niektóre pytania ("Nieocenione"), ale w sprawdzonych nie było błędów. |
| `partial_compliance_failed` | Częściowa kontrola (Błędy) | Użytkownik pominął pytania, a w sprawdzonych znaleziono błędy. |
| `no_assessment` | Brak Oceny | Użytkownik nie wypełnił żadnego pola w arkuszu. |
| `all_inapplicable` | Brak Zastosowania (Pełny) | Oceniono wszystkie kryteria jako "Nie dotyczy". |
| `all_inapplicable_partial` | Brak Zastosowania (Częściowy) | Te kryteria, które sprawdzono, oceniono jako "Nie dotyczy", ale nie sprawdzono wszystkiego. |
Możesz dowolnie edytować pola `description` w tym pliku, używając zmiennej `{productName}`, która zostanie podmieniona na nazwę wpisaną przez użytkownika.

---

## 📚 Biblioteki Zewnętrzne i Licencje

Projekt wykorzystuje sprawdzone rozwiązania open-source. Wszystkie biblioteki znajdują się w repozytorium (brak konieczności `npm install`).

| Biblioteka | Plik | Licencja | Zastosowanie |
|------------|------|----------|--------------|
| **Pico.css** | `css/pico.min.css` | MIT | Lekki framework CSS odpowiadający za wygląd interfejsu (tryb ciemny/jasny). |
| **ExcelJS** | `js/exceljs.min.js` | MIT | Generowanie raportów w formacie .xlsx (Excel) bezpośrednio w przeglądarce. |
| **JSZip** | `js/jszip.min.js` | MIT/GPLv3 | Pakowanie plików, używane przez eksporter plików .odt. |
| **Lucide** | `js/lucide.min.js` | ISC | Zestaw ikon wektorowych (SVG). |

**Uwaga prawna**: Przed komercyjnym użyciem audytu jako usługi, zaleca się weryfikację aktualnych licencji w nagłówkach plików źródłowych.
