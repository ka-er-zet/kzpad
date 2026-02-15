# Clauses

## U.7.1.1.a U.7.1.1.a Więcej niż jeden zmysł (kanał sensoryczny) (Art. 7 ust. 1 pkt 1 lit. a)

### Procedure
['Przepis ten wprowadza wymóg wielozmysłowego dostępu do informacji. Oznacza to, że żadna informacja dotycząca obsługi produktu, etykieta ani ostrzeżenie nie mogą być przekazywane wyłącznie za pomocą jednego zmysłu (np. tylko wzroku lub tylko słuchu).\nNależy przyjąć dwie kluczowe zasady interpretacyjne:\n- Informacje wizualne (tekst, ikony, diody, komunikaty na ekranie) muszą posiadać alternatywę dostępną dla słuchu (np. odczyt przez lektora) lub dotyku (np. wypukłe oznaczenia).\n- Informacje dźwiękowe (sygnały ostrzegawcze, dźwięki błędów) muszą posiadać alternatywę wizualną (np. komunikat tekstowy, miganie elementu) lub dotykową (wibracje).\nCelem regulacji jest zapewnienie możliwości obsługi urządzenia oraz odczytania ostrzeżeń niezależnie od tego, czy osoba korzystająca widzi, czy słyszy.']

### Evaluation
Inspekcja i testy technologii asystujących

### Checklist
- **Sprawdzenie dotykowe**: Należy zweryfikować, czy przyciski i kluczowe elementy sterujące są możliwe do zidentyfikowania bez użycia wzroku (np. czy posiadają wypukłe symbole, grawerowanie lub oznaczenia w alfabecie Braille'a).
- **Klawiatura numeryczna**: Jeśli urządzenie posiada klawiaturę fizyczną, należy sprawdzić, czy na klawiszu z cyfrą „5” znajduje się wyczuwalny dotykiem punkt lub kreska (punkt orientacyjny).
- **Etykiety i tabliczki**: Należy sprawdzić, czy informacje na tabliczce znamionowej są dostępne w alternatywnej formie, np. poprzez kod QR lub tag NFC, który po zeskanowaniu telefonem umożliwia odczytanie treści głosem.
- **Test wyjścia audio**: Jeżeli produkt ma wyjście audio, należy podłączyć słuchawki do gniazda audio (minijack) lub poprzez innych typowy interfejs (np. bluetooth). Należy zweryfikować, czy po podłączeniu urządzenie uruchamia tryb głosowy i czy wszystkie informacje wyświetlane na ekranie (np. ceny, opcje wyboru) są odczytywane przez syntezator mowy.
- **Test komunikatów błędu**: Należy spróbować wywołać błąd w obsłudze. Należy sprawdzić, czy informacja o błędzie jest przekazywana zarówno wizualnie (komunikat), jak i dźwiękowo.
- **Weryfikacja wizualna dźwięków**: W przypadku urządzeń emitujących dźwięki (np. sygnał zatwierdzenia), należy sprawdzić (przy wyciszonym dźwięku lub w stoperach), czy każdemu sygnałowi towarzyszy wyraźna reakcja wizualna na ekranie lub obudowie (np. mignięcie ramki, podświetlenie diody).
- **Ważne**: Urządzenie posiadające ekran dotykowy, które nie jest wyposażone w fizyczne wyjście audio (gniazdo słuchawkowe) ani wbudowany głośnik z funkcją lektora, należy uznać za niezgodne z tym wymaganiem (brak alternatywnego kanału sensorycznego dla wzroku).

---

## U.7.1.1.b-01 U.7.1.1.b-01 Zrozumiałość i zauważalność informacji (Art. 7 ust. 1 pkt 1 lit. b tiret 1)

### Procedure
['Wymóg ten dotyczy sposobu prezentacji informacji tak, aby były one logiczne i możliwe do zinterpretowania przez każdego użytkownika. „Zrozumiałość i postrzegalność” w kontekście dostępności oznacza dwie rzeczy:\n1. Lokalizacja i relacje: Informacja (np. etykieta) musi znajdować się w miejscu, które jednoznacznie wskazuje, czego dotyczy (np. napis „Start” musi być wyraźnie przypisany do konkretnego przycisku, zarówno wizualnie, jak i cyfrowo dla czytników ekranu).\n2. Język i forma: Treść musi być przedstawiona w sposób umożliwiający jej poprawne odczytanie (np. odpowiednie kodowanie języka w menu cyfrowym, aby syntezator mowy użył właściwego akcentu, lub użycie powszechnie znanych symboli na obudowie).\nChodzi o to, aby użytkownik nie musiał zgadywać, który opis pasuje do którego elementu, oraz aby technologia asystująca mogła poprawnie przetworzyć treść etykiety.']

### Evaluation
Inspekcja

### Checklist
- Weryfikacja fizyczna (Obudowa i przyciski):
- **Test bliskości**: Sprawdź, czy etykiety i symbole są umieszczone w bezpośrednim sąsiedztwie elementów sterujących (przycisków, pokręteł), których dotyczą. Czy jest jasne, że dany napis opisuje ten konkretny przycisk, a nie sąsiedni?
- **Test symboli**: Zweryfikuj, czy użyte ikony są standardowe i intuicyjne (np. standardowy symbol włącznika, a nie autorska grafika producenta).
- Weryfikacja interfejsu cyfrowego (Menu na ekranie):
- **Test relacji (dla czytnika ekranu)**: Uruchom czytnik ekranu i nawiguj po menu. Sprawdź, czy po najechaniu na pole formularza lub przycisk, czytnik odczytuje jego etykietę (nazwę). Jeśli czytnik mówi tylko „przycisk” lub „pole edycji” bez nazwy, relacja nie jest zachowana.
- **Test języka**: Sprawdź, czy syntezator mowy czyta komunikaty poprawnie w języku polskim. Jeśli czyta polski tekst z angielskim akcentem (lub literuje), oznacza to, że język interfejsu nie został określony programowo i jest to błąd.
- **Test spójności**: Sprawdź, czy ta sama funkcja (np. „Pomoc” lub „Wstecz”) jest zawsze oznaczona tą samą ikoną i tym samym tekstem na każdym ekranie urządzenia.

---

## U.7.1.1.b-02 U.7.1.1.b-02 Postrzegalność wizualna: Kontrast i Typografia (Art. 7 ust. 1 pkt 1 lit. b tiret 2)

### Procedure
['Ten wymóg dotyczy czytelności napisów. Informacja jest bezużyteczna, jeśli użytkownik nie jest w stanie jej odczytać z powodu zbyt małych liter, bladego druku lub „zlewania się” tekstu.\nJako osoba sprawdzająca musisz zwrócić uwagę na trzy parametry:\n1. Kontrast: Czy tekst wyraźnie „odcina się” od tła? (np. czarny tekst na białym tle jest czytelny, ale szary tekst na srebrnej obudowie – nie).\n2. Rozmiar i krój: Czy litery są odpowiednio duże i mają prosty kształt? Wymóg ten uwzględnia „przewidywalne warunki użytkowania” – czyli np. to, że na ekran bankomatu patrzymy z większej odległości niż na telefon.\n3. Odstępy: Czy litery i wiersze nie są upakowane zbyt ciasno? Odpowiednie światło między liniami ułatwia czytanie osobom słabowidzącym i osobom z dysleksją.\nWymóg dotyczy zarówno napisów nadrukowanych na obudowie (np. „Włóż kartę”), jak i treści wyświetlanych na ekranie urządzenia.']

### Evaluation
Inspekcja / Pomiary kontrastu

### Checklist
- Jeśli sprawdzasz nadruki na obudowie (etykiety fizyczne):
- **Test widoczności**: Spójrz na urządzenie w typowym oświetleniu dla miejsca jego instalacji. Czy napisy są czytelne, czy może powierzchnia odbija światło (powoduje odblaski), co uniemożliwia odczyt?
- **Test kroju pisma**: Sprawdź, czy czcionka jest prosta (np. typu Arial, a nie ozdobna). Czy kształty liter są wyraźne i nie zlewają się ze sobą?
- Jeśli sprawdzasz ekran urządzenia (np. bankomat, biletomat):
- **Pomiary kontrastu**: Jeśli masz możliwość wykonania zdjęcia lub zrzutu ekranu, użyj analizatora kontrastu (np. darmowej aplikacji mobilnej). Sprawdź, czy stosunek jasności tekstu do tła wynosi co najmniej 4,5:1 (dla małego tekstu).
- **Test powiększania (dla systemów otwartych)**: Sprawdź w ustawieniach, czy możesz powiększyć tekst (do 200%) bez utraty treści (tzn. tekst nie powinien „ucinać się” ani znikać poza ekranem).
- **Test wielkości „H” (dla systemów zamkniętych)**: Jeśli urządzenie nie pozwala na powiększanie tekstu (np. prosty wyświetlacz w automacie), musisz zmierzyć wielkość liter. Zmierz wysokość wielkiej litery „H”.
  - Zasada: Przy typowej odległości, z jakiej klient obsługuje urządzenie, litera musi być na tyle duża, by była widoczna pod kątem 0,7 stopnia.
  - Uproszczenie: Jeśli stoisz 50 cm od ekranu, litera „H” powinna mieć co najmniej 6,1 mm wysokości. Jeśli stoisz 40 cm – min. 4,9 mm.
- **Ważne**: Jeśli tekst na ekranie jest blady, ma niski kontrast lub jest bardzo drobny i nie da się go powiększyć – oznacz wynik jako NEGATYWNY.

---

## U.7.1.2 U.7.1.2 Dostępność instrukcji zewnętrznych (Art. 7 ust. 1 pkt 2)

### Procedure
['Przepis ten reguluje sytuację, w której pełna instrukcja obsługi nie znajduje się bezpośrednio na produkcie (np. w menu urządzenia) ani nie została dołączona w formie drukowanej. W takim przypadku podmiot gospodarczy ma obowiązek udostępnić te informacje publicznie (np. na stronie internetowej).\nKluczowe są tutaj dwa powiązane wymagania:\n1. Informacja o lokalizacji: Na samym produkcie lub jego opakowaniu musi znajdować się fizyczna informacja wskazująca, gdzie znaleźć instrukcję (np. adres strony www, kod QR). Informacja ta musi być trwała i czytelna.\n2. Dostępność samej instrukcji: Dokument cyfrowy (np. plik PDF lub strona www), do którego odsyła informacja na opakowaniu, musi spełniać wymogi dostępności cyfrowej (być czytelny dla czytników ekranu, posiadać odpowiedni kontrast itp.).']

### Evaluation
Inspekcja

### Checklist
- Inspekcja wizualna opakowania lub produktu:
- **Weryfikacja obecności informacji**: Należy sprawdzić, czy na obudowie urządzenia lub na jego opakowaniu znajduje się wyraźna informacja o miejscu pobrania instrukcji (np. „Instrukcja dostępna pod adresem: ...” lub kod QR).
- **Weryfikacja trwałości i czytelności**: Należy ocenić, czy nadruk jest trwały (nie ściera się pod wpływem dotyku) oraz czy zastosowano czcionkę o odpowiednim kontraście i wielkości, umożliwiającą odczytanie adresu osobom słabowidzącym (zgodnie z ogólną zasadą postrzegalności).
- Weryfikacja cyfrowa (wskazanego źródła):
- **Dostępność adresu**: Należy wpisać adres URL z opakowania lub zeskanować kod QR i sprawdzić, czy prowadzi bezpośrednio do instrukcji (lub strony, gdzie łatwo ją znaleźć).
- **Dostępność dokumentu**: Należy pobrać instrukcję i sprawdzić, czy jest ona dostępna cyfrowo.
  - Czy tekst w dokumencie można zaznaczyć (nie jest skanem/obrazkiem)?
  - Czy grafiki i schematy w instrukcji posiadają opisy alternatywne (tekstowe wyjaśnienie co przedstawiają)
  - Czy dokument posiada logiczną strukturę nagłówków (Tytuł, Rozdziały), która ułatwia nawigację?
- **Ważne**: Jeśli adres na opakowaniu prowadzi do instrukcji w formie skanu (obrazu) bez warstwy tekstowej, wymóg nie jest spełniony, ponieważ taka instrukcja jest nieczytelna dla osób niewidomych korzystających z syntezatorów mowy.

---

## U.7.1.2.a U.7.1.2.a Spełnienie wymogów pkt 1 przez instrukcje (Art. 7 ust. 1 pkt 2 lit. a)

### Procedure
['Przepis ten przenosi wymagania dostępności z fizycznego urządzenia na jego cyfrową instrukcję obsługi (np. plik PDF, e-book lub stronę www). Oznacza to, że dokumentacja pobrana z internetu musi spełniać te same standardy czytelności i dostępności, co informacje na produkcie.\nKluczowe jest zapewnienie, aby dokument cyfrowy był uniwersalny:\n- Dla osób niewidomych: Instrukcja nie może być „płaskim” skanem lub zdjęciem tekstu. Musi zawierać warstwę tekstową, którą oprogramowanie (czytnik ekranu) zamieni na mowę.\n- Dla osób słabowidzących: Tekst w instrukcji musi być wyraźny (wysoki kontrast) i możliwy do powiększenia bez utraty jakości i konieczności przewijania ekranu w dwóch kierunkach (prawo-lewo).\n- Zrozumiałość: Dokument musi posiadać logiczną strukturę (tytuły, nagłówki rozdziałów), która pozwala na nawigację bez konieczności czytania całości.']

### Evaluation
Inspekcja i Kontrola

### Checklist
- **Test „zaznaczania” (Weryfikacja czytnika ekranu)**:
- Należy otworzyć instrukcję (np. PDF) i spróbować zaznaczyć myszką pojedyncze zdanie lub słowo.
- Jeśli tekstu nie da się zaznaczyć (zaznacza się cała strona jako obrazek) – dokument jest skanem i nie spełnia wymagań (jest niewidoczny dla technologii asystujących).
- **Test obrazków (Alternatywa tekstowa)**:
- Należy sprawdzić, czy kluczowe ilustracje (np. schemat podłączenia kabli, rysunek przycisków) posiadają opis alternatywny (ukryty tekst wyjaśniający, co jest na obrazku). W programach biurowych/przeglądarkach PDF często widać to po najechaniu kursorem lub w właściwościach obrazu.
- **Test powiększania**:
- Należy powiększyć dokument do 200%. Należy zweryfikować, czy tekst pozostaje ostry (nie „pikseluje się”) i czy w przypadku stron WWW tekst układa się w kolumnie, tak aby nie trzeba było przewijać ekranu w poziomie.
- **Ważne**: Sama obecność instrukcji w internecie nie wystarcza. Jeśli plik jest technicznie niedostępny (np. nieotagowany PDF, skan), podmiot nie spełnia tego wymogu.

---

## U.7.1.2.b-01 U.7.1.2.b-01 Alternatywna prezentacja treści nietekstowych w instrukcjach (Art. 7 ust. 1 pkt 2 lit. b tiret 1)

### Procedure
['Wymóg ten zobowiązuje do zapewnienia tekstowego odpowiednika dla każdego elementu wizualnego znajdującego się w instrukcji. Chodzi o to, aby osoba niewidoma, korzystająca z czytnika ekranu, otrzymała te same informacje, co osoba widząca grafikę.\nKluczowe zasady interpretacji:\n- Równoważność: Tekst alternatywny musi przekazywać sens i funkcję grafiki, a nie tylko jej opis wizualny (np. zamiast „czerwony trójkąt”, należy napisać „Uwaga: ryzyko oparzenia”).\n- Dekoracje: Elementy czysto ozdobne (np. linie oddzielające, zdjęcia tła bez znaczenia merytorycznego) powinny być technicznie oznaczone jako ignorowane przez technologie asystujące (tzw. artefakty).\n- Złożone grafiki: W przypadku skomplikowanych schematów lub wykresów, krótki tekst alternatywny powinien odsyłać do pełnego opisu znajdującego się w treści dokumentu.']

### Evaluation
Inspekcja i Kontrola

### Checklist
- Weryfikacja obecności tekstu alternatywnego (Inspekcja techniczna)
- **Działanie**: W przypadku strony WWW – należy sprawdzić kod elementu graficznego (np. klikając prawym przyciskiem myszy „Zbadaj” i szukając atrybutu alt="..."). W przypadku dokumentu PDF – należy użyć narzędzia do sprawdzania dostępności (np. w programie Adobe Acrobat Pro lub darmowym czytniku z funkcją inspekcji tagów) i sprawdzić właściwości obrazka.
- **Kryterium sukcesu**: Każda grafika niosąca treść posiada przypisany tekst alternatywny. Grafiki dekoracyjne mają pusty atrybut alt (alt="") lub są oznaczone jako artefakty.
- Weryfikacja jakości opisu (Ocena merytoryczna)
- **Działanie**: Należy porównać treść widoczną na obrazku z treścią ukrytego tekstu alternatywnego.
- **Pytania pomocnicze**:
  - Czy opis wyjaśnia, co przedstawia obrazek w kontekście instrukcji (np. „Schemat podłączenia kabla zasilającego do gniazda A”)?
  - Czy w przypadku wykresu, tekst alternatywny zawiera dane lub wnioski z tego wykresu, czy tylko informację „Wykres wydajności”? (Opis „Wykres” jest niewystarczający).
- **Kryterium sukcesu**: Tekst alternatywny pozwala zrozumieć sens grafiki bez jej oglądania.
- Weryfikacja grafik złożonych
- **Działanie**: Jeśli instrukcja zawiera skomplikowane schematy blokowe lub infografiki.
- **Sprawdzenie**: Należy zweryfikować, czy w pobliżu grafiki znajduje się jej pełny opis tekstowy lub czy tekst alternatywny odsyła do miejsca w dokumencie, gdzie taki opis się znajduje. Sama krótka etykieta dla złożonego schematu jest niewystarczająca.

---

## U.7.1.2.b-02 U.7.1.2.b-02 Opis sposobu obsługi (interfejsu) produktu w instrukcjach (Art. 7 ust. 1 pkt 2 lit. b tiret 2)

### Procedure
['Wymóg ten zobowiązuje podmiot gospodarczy do zapewnienia w dokumentacji cyfrowej kompletnego opisu sposobu obsługi urządzenia. Użytkownik, który nie ma fizycznego dostępu do urządzenia w momencie czytania instrukcji (lub nie może go zobaczyć), musi być w stanie zbudować sobie „mentalną mapę” interfejsu na podstawie samego tekstu.\nOpis ten nie może ograniczać się tylko do listy przycisków. Musi wyjaśniać:\n- Anatomię produktu: Gdzie znajdują się poszczególne elementy sterujące i jak je rozpoznać (np. „okrągły przycisk po prawej stronie”).\n- Funkcjonalność: Do czego służy dany element i jak wywołuje się funkcje (np. krótkie vs długie naciśnięcie).\n- Informację zwrotną: Co oznaczają konkretne sygnały wysyłane przez urządzenie (np. dioda migająca na czerwono, potrójny sygnał dźwiękowy).\nJest to kluczowe dla osób niewidomych, które muszą poznać układ urządzenia przed rozpoczęciem jego obsługi.']

### Evaluation
Inspekcja

### Checklist
- Weryfikacja opisu elementów sterujących:
- **Działanie**: Należy odszukać sekcję „Opis urządzenia”, „Budowa” lub „Rozmieszczenie przycisków”.
- **Sprawdzenie**: Czy instrukcja zawiera opis lokalizacji i funkcji wszystkich fizycznych przycisków, pokręteł, portów i złącz?
- **Kryterium jakości**: Czy opis pozwala zidentyfikować przycisk bez patrzenia na niego (np. czy wspomina o wypukłościach, kształcie lub pozycji względem innych elementów)?
- Weryfikacja opisu interfejsu cyfrowego (Menu)
- **Działanie**: Jeśli produkt posiada ekran, należy sprawdzić opis menu.
- **Sprawdzenie**: Czy struktura menu (kolejność opcji, sposób nawigacji, sposób zatwierdzania i cofania) jest opisana w sposób logiczny?
- **Kryterium sukcesu**: Instrukcja wyjaśnia strukturę menu w sposób umożliwiający nawigację osobie, która nie widzi ekranu i korzysta z czytnika (np. „Użyj strzałek góra/dół, aby wybrać opcję, naciśnij OK, aby wejść”).
- Weryfikacja opisu sygnałów zwrotnych
- **Działanie**: Należy odszukać opis diod LED, sygnałów dźwiękowych lub wibracji.
- **Sprawdzenie**: Czy instrukcja wyjaśnia znaczenie każdego sygnału, który urządzenie może wyemitować (np. „Ciągły sygnał oznacza błąd krytyczny”)?
- **Ważne**: Opis ten jest niezbędny dla osób niesłyszących (aby wiedziały, co oznacza migająca dioda) i niewidomych (aby wiedziały, co oznacza dźwięk).

---

## U.7.1.2.b-03 U.7.1.2.b-03 Informacje o dostępności i wdrożonych rozwiązaniach w instrukcjach (Art. 7 ust. 1 pkt 2 lit. b tiret 3)

### Procedure
['Wymóg ten nakłada na producenta obowiązek stworzenia w instrukcji sekcji poświęconej dostępności. Dokumentacja nie może ograniczać się do stwierdzenia „produkt jest dostępny”. Musi ona precyzyjnie wyjaśniać użytkownikowi:\n1. Które potrzeby są zaspokojone: Czy produkt jest dostosowany do osób niewidomych? Czy ma rozwiązania dla osób słabosłyszących? (Odwołanie do Art. 8–11).\n2. Jakie konkretne rozwiązania zastosowano: Np. „Urządzenie posiada gniazdo słuchawkowe do obsługi głosowej” albo „Klawiatura posiada wypustkę na klawiszu 5”.\n3. Jak z nich korzystać: Instrukcja musi pełnić rolę przewodnika po funkcjach dostępności, wyjaśniając krok po kroku, jak uruchomić i obsługiwać tryby asystujące.\nCelem jest zapewnienie, aby użytkownik ze szczególnymi potrzebami wiedział, że produkt jest dla niego odpowiedni i potrafił uruchomić niezbędne mu funkcje bez metody prób i błędów.']

### Evaluation
Inspekcja

### Checklist
- Identyfikacja sekcji dostępności:
- **Działanie**: Należy przeszukać spis treści lub dokument pod kątem słów kluczowych: „Dostępność”, „Ułatwienia dostępu”, „Accessibility”, „Dla osób niepełnosprawnych”.
- **Sprawdzenie**: Czy dokumentacja zawiera wyodrębnioną część lub wyraźne fragmenty opisujące funkcje dostępności?
- Weryfikacja opisu rozwiązań (Powiązanie z Art. 8–11):
- **Działanie**: Należy sprawdzić, czy instrukcja wymienia konkretne cechy produktu odpowiadające na wymogi ustawowe.
- **Przykłady weryfikacji**:
  - Jeśli produkt obsługuje mowę (Art. 8 pkt 1 lit. b) – czy instrukcja opisuje komendy głosowe?
  - Jeśli produkt ma gniazdo słuchawkowe dla osób niewidomych (Art. 9) – czy instrukcja informuje, że służy ono do prywatnego odsłuchu menu?
  - Jeśli produkt ma tryb wysokiego kontrastu (Art. 8 pkt 1 lit. c) – czy jest informacja o jego istnieniu?
- Weryfikacja instrukcji obsługi funkcji:
- **Działanie**: Należy sprawdzić, czy opis nie jest tylko listą funkcji, ale zawiera instrukcję ich użycia.
- **Sprawdzenie**: Czy instrukcja wyjaśnia, jak aktywować daną funkcję?
  - Błędny opis: „Produkt posiada funkcję czytnika ekranu.”
  - Poprawny opis: „Aby włączyć czytnik ekranu, naciśnij i przytrzymaj przycisk Menu przez 3 sekundy.”
- Informacje o kompatybilności
- Działanie: Jeśli produkt współpracuje z zewnętrznymi technologiami asystującymi (np. aparaty słuchowe, zewnętrzne czytniki ekranu), należy sprawdzić, czy instrukcja o tym informuje.
- Sprawdzenie: Czy wymieniono standardy lub nazwy oprogramowania, z którymi produkt został przetestowany?

---

## U.7.1.2.c U.7.1.2.c Formaty tekstowe instrukcji umożliwiające wspomaganą komunikację (Art. 7 ust. 1 pkt 2 lit. c)

### Procedure
['Wymóg ten wykracza poza standardową obsługę czytników ekranu dla osób niewidomych. Dotyczy on zapewnienia interoperacyjności treści instrukcji z oprogramowaniem AAC (Alternative and Augmentative Communication). Oprogramowanie to jest używane przez osoby, które mają trudności z mówieniem lub rozumieniem języka pisanego (np. po udarze, osoby z afazją).\nAby oprogramowanie AAC mogło przetworzyć instrukcję (np. zamienić tekst na sekwencję symboli graficznych lub piktogramów, uprościć składnię lub odczytać treść specyficznym głosem syntezatora), dokument musi spełniać dwa techniczne warunki (zgodnie z mapowaniem w Arkuszu Kontrolnym):\n1. Musi być tekstem, a nie obrazem: Komputer musi „widzieć” znaki, aby móc je przetłumaczyć na symbole.\n2. Musi mieć zdefiniowany język: Program musi wiedzieć, czy przetwarza język polski, czy angielski, aby dobrać odpowiedni zestaw symboli i reguł gramatycznych.\n3. Musi być solidny technicznie: Struktura dokumentu musi być poprawna kodowo, aby zewnętrzne oprogramowanie mogło pobrać treść bez błędów.']

### Evaluation
Inspekcja i Kontrola Dostępności Cyfrowej

### Checklist
- Weryfikacja warstwy tekstowej (Selekcja)
- **Działanie**: Należy otworzyć instrukcję i spróbować zaznaczyć myszką dowolny fragment tekstu, a następnie skopiować go i wkleić do notatnika.
- **Sprawdzenie**: Czy wklejony tekst jest czytelny i poprawny (zawiera polskie znaki, spacje)?
- **Interpretacja**: Jeśli tekstu nie da się zaznaczyć lub po wklejeniu pojawiają się „krzaki” (błędy kodowania), format nie jest tekstowy lub jest uszkodzony. Uniemożliwia to pracę oprogramowania AAC.
- Weryfikacja określenia języka
- **Działanie**: Należy sprawdzić właściwości dokumentu (np. w PDF: Plik -> Właściwości -> Zaawansowane -> Opcje czytania; w HTML: atrybut lang w kodzie strony).
- **Sprawdzenie**: Czy język dokumentu jest zdefiniowany programowo i zgodny z treścią (np. „pl” lub „Polish” dla instrukcji po polsku)?
- **Interpretacja**: Brak zdefiniowanego języka jest błędem krytycznym dla narzędzi AAC, które mogą próbować czytać polski tekst przy użyciu angielskich reguł wymowy lub słowników symboli.
- Weryfikacja dostępności formatu dla zewnętrznych narzędzi
- **Działanie**: Należy sprawdzić, czy plik nie posiada zabezpieczeń DRM lub haseł blokujących „kopiowanie treści dla dostępności” (ang. content copying for accessibility).
- **Sprawdzenie**: W ustawieniach zabezpieczeń pliku (np. PDF) należy zweryfikować, czy opcja kopiowania zawartości jest dozwolona.
- **Interpretacja**: Zablokowanie możliwości kopiowania tekstu uniemożliwia oprogramowaniu wspomagającemu pobranie treści w celu jej przetworzenia (np. zamiany na symbole).

---

## U.7.1.2.d U.7.1.2.d Współpraca (interoperacyjność) instrukcji z narzędziami wspomagającymi (Art. 7 ust. 1 pkt 2 lit. d)

### Procedure
['Wymóg ten nakłada na podmiot gospodarczy obowiązek zapewnienia precyzyjnej informacji o kompatybilności. Użytkownik korzystający z technologii asystującej (AT – np. linijka brajlowska, specyficzny czytnik ekranu, sterowanie wzrokiem) musi wiedzieć przed zakupem lub użyciem, czy jego sprzęt zadziała z danym produktem.\nDokumentacja musi zawierać dwa konkretne elementy (zgodnie z klauzulą C.12.1.1):\n1. Opis techniczny połączenia: Wyjaśnienie, w jaki sposób produkt łączy się z AT. Może to być opis fizycznych portów (np. "Gniazdo minijack obsługuje pętlę indukcyjną") lub opis interfejsów programowych (np. "Aplikacja wykorzystuje standardowe API dostępności systemu Android").\n2. Wykaz przetestowanych rozwiązań: Producent nie może poprzestać na ogólnym stwierdzeniu "współpracuje z czytnikami ekranu". Musi wymienić konkretne nazwy i wersje oprogramowania lub sprzętu, które zostały zweryfikowane w toku testów (np. "Przetestowano z NVDA wersja 2023.1 oraz JAWS wersja 2023").\nBrak tych informacji zmusza użytkownika do zgadywania lub testowania produktu metodą prób i błędów, co jest niezgodne z ustawą.']

### Evaluation
Inspekcja i Test Funkcjonalny

### Checklist
- Weryfikacja opisu interfejsów (Sprzęt i Software)
- **Działanie**: Należy odszukać w instrukcji sekcje "Dane techniczne", "Łączność", "Dostępność" lub "Wymagania systemowe".
- **Sprawdzenie**: Czy znajduje się tam opis standardów wykorzystywanych do łączności z AT?
  - Przykład dla sprzętu: Czy wskazano, że gniazdo audio 3,5 mm obsługuje standardowe zestawy słuchawkowe lub pętle indukcyjne?
  - Przykład dla oprogramowania: Czy wskazano, że aplikacja korzysta z usług dostępności (Accessibility Services) danego systemu operacyjnego?
- Weryfikacja wykazu przetestowanych narzędzi
- **Działanie**: Należy sprawdzić, czy dokumentacja zawiera listę konkretnych produktów wspomagających.
- **Sprawdzenie**:
  - Czy wymieniono nazwy własne narzędzi (np. "NVDA", "VoiceOver", "TalkBack")?
  - Czy podano wersje tych narzędzi? (Informacja o wersji jest kluczowa, ponieważ kompatybilność może zmieniać się wraz z aktualizacjami).
  - Czy lista jest przedstawiona jako zamknięty katalog ("Przetestowano z...")?
- **Ważne**: Ogólne stwierdzenia typu "Produkt jest zgodny z popularnymi czytnikami ekranu" bez podania konkretnych nazw i wersji nie spełniają wymogu dostarczenia wykazu narzędzi, które były testowane razem z produktem.

---

## U.7.1.3 U.7.1.3 Instrukcje instalacji, konserwacji, przechowywania i pozbywania się (Art. 7 ust. 1 pkt 3)

### Procedure
['Przepis ten dotyczy dokumentacji technicznej towarzyszącej produktowi, która obejmuje instalację, konserwację, przechowywanie i utylizację. Jeśli producent decyduje się nie drukować tych instrukcji, lecz udostępnić je w internecie (np. jako PDF do pobrania), musi zapewnić ich pełną dostępność cyfrową.\nUstawodawca precyzuje, że te konkretne dokumenty muszą spełniać wybrane wymogi dostępności:\n1. Dostępność sensoryczna (Pkt 1): Dokument musi być czytelny dla różnych zmysłów (np. wzrok i słuch poprzez czytnik ekranu). Tekst musi mieć odpowiedni kontrast, krój czcionki i odstępy.\n2. Alternatywa dla grafik (Pkt 2 lit. b tiret pierwsze): Wszystkie schematy montażowe, rysunki konserwacyjne czy ikony ostrzegawcze dotyczące utylizacji muszą posiadać opis tekstowy (tekst alternatywny).', '3. Format tekstowy dla AAC (Pkt 2 lit. c): Plik musi być technicznie przygotowany tak, aby oprogramowanie do komunikacji alternatywnej mogło przetworzyć jego treść (nie może to być skan, musi mieć zdefiniowany język).', 'Uwaga: W przeciwieństwie do głównej instrukcji obsługi, te dokumenty nie muszą zawierać opisu interfejsu użytkownika ani deklaracji zgodności z Art. 8–11 (chyba że wynika to z innych przepisów).']

### Evaluation
Inspekcja i Kontrola Dostępności

### Checklist
- Weryfikacja informacji o dostępie (Inspekcja fizyczna)
- **Działanie**: Należy obejrzeć produkt i jego opakowanie.
- **Sprawdzenie**: Czy znajduje się tam trwała informacja (np. adres URL, kod QR) wskazująca, gdzie można pobrać instrukcję instalacji/konserwacji?
- **Wymóg**: Informacja ta musi być czytelna (odpowiedni kontrast, wielkość czcionki).
- Weryfikacja dostępności pliku.
Należy pobrać dokument i sprawdzić go pod kątem wymienionych w ustawie cech.
- Test grafik (Alternatywa tekstowa):
  - Należy sprawdzić, czy schematy instalacji i rysunki techniczne posiadają tekst alternatywny wyjaśniający, co przedstawiają.
  - Błąd: Rysunek „Sposób podłączenia kabla” bez opisu tekstowego jest niewidoczny dla osoby niewidomej.
- Test formatu tekstowego (AAC i Czytniki):
   - Należy spróbować zaznaczyć i skopiować tekst instrukcji. Jeśli zaznacza się cała strona jako obrazek – dokument jest skanem i nie spełnia wymagań.
  - Należy sprawdzić we właściwościach pliku, czy zdefiniowano język dokumentu (np. „Polski”). Jest to kluczowe dla poprawnej wymowy przez syntezatory.
- Test czytelności (Kontrast i Typografia):
  - Należy zweryfikować, czy tekst instrukcji ma wysoki kontrast względem tła (min. 4,5:1 dla małego tekstu).
  - Należy sprawdzić, czy przy powiększeniu dokumentu do 200% tekst pozostaje ostry i czytelny.

---

## U.7.1.4 U.7.1.4 Dostępność informacji na opakowaniu produktu (Art. 7 ust. 1 pkt 4)

### Procedure
["Wymóg ten rozszerza zasady dostępności informacji o produkcie (opisane w Art. 7 ust. 1 pkt 1) na jego fizyczne opakowanie. Oznacza to, że informacje nadrukowane na pudełku, folii lub etykiecie zewnętrznej nie mogą dyskryminować użytkowników ze względu na ich możliwości sensoryczne.\nPonieważ norma EN 301 549 dotyczy technologii cyfrowych (ICT), a nie druku na kartonie, weryfikacja tego punktu opiera się na Kryteriach Funkcjonalnych oraz analogii do dokumentacji:\n1. Wielozmysłowość: Jeśli na opakowaniu jest ważna informacja (np. ostrzeżenie o alergenach, wymagania systemowe), musi być ona dostępna nie tylko wzrokowo. W praktyce realizuje się to często poprzez kod QR lub tag NFC prowadzący do dostępnej wersji cyfrowej, rzadziej przez napisy w alfabecie Braille'a.\n2. Czytelność (Postrzegalność): Tekst na opakowaniu musi mieć wysoki kontrast i odpowiednią wielkość, aby był czytelny dla osób słabowidzących i starszych.\n3. Zrozumiałość: Informacje muszą być sformułowane w sposób prosty, a układ graficzny nie może wprowadzać w błąd co do zawartości."]

### Evaluation
Inspekcja

### Checklist
- Inspekcja wizualna czytelności (Kontrast i Czcionka)
- **Działanie**: Należy ocenić tekst nadrukowany na opakowaniu w warunkach oświetleniowych typowych dla sklepu lub domu.
- **Sprawdzenie**:
  - Czy tekst posiada wysoki kontrast względem tła (np. unikanie jasnoszarego druku na białym kartonie)?
  - Czy powierzchnia opakowania nie jest zbyt błyszcząca (laminowana), co powodowałoby odblaski uniemożliwiające odczytanie treści pod pewnym kątem?
  - Czy zastosowano czcionkę bezszeryfową o wielkości umożliwiającej odczyt bez lupy?
- Weryfikacja kanału alternatywnego (Cyfrowy most)
- **Uzasadnienie**: Ponieważ opakowanie fizyczne rzadko „mówi”, kluczowe jest sprawdzenie, czy odsyła ono do dostępnej wersji cyfrowej (zgodnie z ideą wielokanałowości).
- **Działanie**: Należy poszukać na opakowaniu kodu QR, tagu NFC lub wyraźnego adresu strony internetowej oznaczonego jako źródło informacji o produkcie.
- **Sprawdzenie**:
  - Czy kod/adres jest łatwy do znalezienia i zeskanowania?
  - Czy po zeskanowaniu kodu użytkownik trafia bezpośrednio do treści, która jest dostępna cyfrowo (np. strony HTML spełniającej WCAG lub dostępnego PDF)?
  - **Uwaga**: Jeśli opakowanie nie posiada żadnego elementu umożliwiającego szybkie dotarcie do treści w formie cyfrowej (dostępnej dla czytników ekranu) i nie zawiera napisów w Braille'u, wymóg wielokanałowości (Art. 7 ust. 1 pkt 1 lit. a) może zostać uznany za niespełniony.
- Weryfikacja informacji o dostępności
- **Działanie**: Należy sprawdzić, czy na opakowaniu znajduje się informacja o cechach dostępności produktu (jeśli dotyczy).
- **Sprawdzenie**: Czy zastosowano standardowe ikony lub proste komunikaty (np. „Produkt zgodny z aparatami słuchowymi”, „Menu głosowe”)?

---

## U.8.0.1.a U.8.0.1.a Rozwiązania alternatywne dla komunikacji (Art. 8 pkt 1 lit. a)

### Procedure
['Wymóg ten nakazuje, aby kluczowa funkcja produktu, jaką jest komunikacja, nie wykluczała użytkowników ze względu na brak jednego ze zmysłów (wzroku, słuchu, dotyku) lub zdolności mowy. Produkt musi oferować zamienniki (alternatywy) dla każdego kanału komunikacji:\n1. Dla wzroku: Jeśli interfejs pokazuje status połączenia lub wideo, musi to być również ogłaszane głosowo (dla niewidomych).\n2. Dla słuchu: Jeśli produkt przekazuje głos rozmówcy lub sygnały dźwiękowe, musi oferować tekst (np. napisy, czat w czasie rzeczywistym) lub sygnały wizualne (dla niesłyszących).\n3. Dla mowy: Jeśli produkt wymaga mówienia do mikrofonu, musi pozwalać na pisanie tekstu, który zostanie przesłany w czasie rzeczywistym (dla osób niemówiących).\n4. Dla dotyku: Jeśli obsługa wymaga precyzyjnych gestów dotykowych, musi istnieć alternatywa głosowa lub uproszczona obsługa mechaniczna.']

### Evaluation
Inspekcja i Testy funkcjonalne

### Checklist
- Weryfikacja alternatywy dla wzroku (Dla osób niewidomych):
- **Test wyjścia audio**: Należy sprawdzić, czy informacje wizualne związane z połączeniem (np. „Dzwoni numer X”, „Połączenie zakończone”, „Wideo włączone”) są odczytywane przez technologię mowy (syntezator) lub dostępne w inny sposób bez użycia wzroku.
- **Test rozpoznawania dotykowego**: Należy zweryfikować, czy fizyczne elementy służące do odbierania/kończenia rozmowy są rozpoznawalne dotykiem (np. mają inny kształt lub wypukłe oznaczenia).
- Weryfikacja alternatywy dla słuchu (Dla osób niesłyszących):
- **Test wskaźnika aktywności audio**: Podczas połączenia należy sprawdzić, czy na ekranie znajduje się wizualny wskaźnik informujący, że ktoś właśnie mówi (np. migająca ikona mikrofonu lub podświetlenie awatara). Jest to kluczowe, aby osoba niesłysząca wiedziała, że druga strona nadaje komunikat.
- **Test wizualizacji sygnałów**: Należy sprawdzić, czy dźwięki informacyjne (np. sygnał zajętości, dzwonek przychodzący) mają swój odpowiednik wizualny (np. komunikat na ekranie, miganie diody).
- Weryfikacja alternatywy dla mowy (Dla osób niemówiących):
- **Test Tekstu w Czasie Rzeczywistym - RTT**: Należy sprawdzić, czy podczas połączenia głosowego istnieje możliwość pisania tekstu, który jest przesyłany i wyświetlany u odbiorcy na bieżąco (znak po znaku lub natychmiastowo), co pozwala na płynną „rozmowę” tekstową zamiast głosowej.
- **Test obsługi bez mowy**: Należy zweryfikować, czy nawiązanie i odebranie połączenia jest możliwe bez wydawania komend głosowych.
- Weryfikacja alternatywy dla dotyku:
- **Test statusu**: Jeśli produkt posiada przyciski, których stan zmienia się pod wpływem dotyku (np. wciśnięty przycisk „Mute”), należy sprawdzić, czy informacja o tym stanie (Włączony/Wyłączony) jest dostępna nie tylko przez dotyk, ale także wizualnie lub dźwiękowo.

---

## U.8.0.1.b U.8.0.1.b Rozwiązania alternatywne dla mowy (Art. 8 pkt 1 lit. b)

### Procedure
['Wymóg ten dotyczy zapewnienia obsługi urządzenia osobom, które nie mogą mówić, mają niewyraźną mowę lub znajdują się w sytuacji uniemożliwiającej wydawanie komend głosowych (np. w bibliotece lub w hałasie).\n\nNależy zweryfikować, czy produkt nie wymusza użycia aparatu mowy jako jedynego kanału interakcji:\n1.  **Sterowanie i obsługa:** Jeśli urządzenie reaguje na komendy głosowe (np. "Włącz światło"), musi istnieć alternatywny sposób wywołania tej samej funkcji (np. przycisk fizyczny, panel dotykowy, klawiatura).\n2.  **Komunikacja:** Jeśli produkt służy do komunikacji (np. telefon, domofon), musi umożliwiać przekazanie informacji bez użycia głosu (np. poprzez tekst, wybór opcji z menu).\n3.  **Orientacja i nawigacja:** Jeśli system prosi o podanie celu podróży głosowo, musi umożliwiać również jego wpisanie.\n\nKluczowe jest, aby interfejs "Voice First" (najpierw głos) nie był interfejsem "Voice Only" (tylko głos).']

### Evaluation
Inspekcja i Testy funkcjonalne

### Checklist
- Weryfikacja sterowania bez użycia mowy (Funkcjonalność zamknięta)
- **Warunek:** Produkt posiada funkcję sterowania głosowego (np. kiosk informacyjny z asystentem głosowym).
- **Działanie:** Należy spróbować obsłużyć urządzenie bez wydawania żadnych dźwięków.
- **Sprawdzenie:** Czy każdą funkcję, którą można uruchomić głosem, da się również uruchomić alternatywnym mechanizmem (np. dotykiem, klawiaturą, gestem)?
- **Kryterium sukcesu:** Istnieje tryb pracy niewymagający mowy.
- Weryfikacja alternatyw dla usług głosowych (Komunikacja)
- **Warunek:** Produkt oferuje dwukierunkową komunikację głosową, pocztę głosową lub system IVR (automatyczne menu głosowe).
- **Działanie:** Należy nawiązać połączenie lub wejść w interakcję z systemem.
- **Sprawdzenie:**
  - Czy w systemie IVR można wybierać opcje za pomocą klawiatury (tonowo), zamiast wypowiadać hasła?
  - Czy produkt umożliwia komunikację tekstową (np. czat, SMS, RTT) jako zamiennik rozmowy głosowej?
- **Kryterium sukcesu:** Użytkownik może uzyskać dostęp do informacji i wykonać zadania bez użycia mowy.
- Weryfikacja wprowadzania danych (Klawiatura)**
- **Warunek:** Aplikacja zachęca do dyktowania treści (np. wyszukiwanie głosowe).
- **Działanie:** Należy sprawdzić, czy zawsze dostępna jest opcja przełączenia na klawiaturę ekranową lub fizyczną.
- **Ważne:** Jeśli jedynym sposobem wprowadzenia danych jest mikrofon (brak pola tekstowego), produkt **nie spełnia** wymagań.

---

## U.8.0.1.c U.8.0.1.c Rozwiązania dla elementów wizualnych (Art. 8 pkt 1 lit. c)

### Procedure
['Wymóg ten koncentruje się na potrzebach osób słabowidzących (które potrzebują powiększenia i kontrastu) oraz osób niewidomych (które potrzebują nawigacji bezwzrokowej). Przepis łączy w sobie cechy interfejsu graficznego z techniczną kompatybilnością.\n\nNależy zweryfikować produkt w trzech obszarach:\n1.  **Dostosowanie wyglądu (Wyrazistość):** Użytkownik musi mieć możliwość zmiany parametrów obrazu tak, aby był on dla niego czytelny. Obejmuje to powiększanie tekstu, zmianę kontrastu oraz dostosowanie jasności (często poprzez respektowanie ustawień systemowych urządzenia).\n2.  **Interoperacyjność (Współpraca):** Produkt nie może być "czarną skrzynką" dla technologii asystujących. Musi udostępniać informacje o swoim interfejsie (nazwy przycisków, ich stan) zewnętrznym programom, takim jak czytniki ekranu.\n3.  **Nawigacja:** Interfejs musi pozwalać na poruszanie się po nim w sposób logiczny i widoczny, co jest kluczowe dla osób korzystających z klawiatury lub programów sterujących.']

### Evaluation
Inspekcja i Testy funkcjonalne

### Checklist
- Powiększanie i Wyrazistość (Dla osób słabowidzących)
- **Dla oprogramowania/stron WWW:** Należy sprawdzić, czy tekst można powiększyć do **200%** bez utraty treści i funkcjonalności. Przy powiększeniu tekst nie powinien nakładać się na siebie, a użytkownik nie powinien być zmuszony do przewijania ekranu w dwóch wymiarach (poziomo i pionowo), aby przeczytać jedną linię.
- **Dla systemów zamkniętych (np. biletomat bez zoomu):** Należy zmierzyć wysokość wielkiej litery „H”. Musi ona być na tyle duża, aby przy typowej odległości obsługi była widoczna pod kątem co najmniej 0,7 stopnia (rekompensata braku funkcji zoom).
- Kontrast i Jasność
- **Pomiary kontrastu:** Należy sprawdzić, czy stosunek jasności tekstu do tła wynosi co najmniej **4,5:1** (dla małego tekstu).
- **Test preferencji systemowych:** Należy zmienić ustawienia urządzenia (systemu operacyjnego) na „Wysoki kontrast” lub „Tryb ciemny” oraz zmienić jasność ekranu. Należy zweryfikować, czy aplikacja/produkt reaguje na te zmiany i dostosowuje swój wygląd, czy też ignoruje ustawienia użytkownika (co jest błędem).
- Interoperacyjność (Dla czytników ekranu)
- **Działanie:** Należy uruchomić popularny czytnik ekranu (np. NVDA, TalkBack, VoiceOver).
- **Sprawdzenie:** Czy czytnik rozpoznaje wszystkie elementy interfejsu? Czy odczytuje ich:
    - **Nazwę** (np. "Przycisk Szukaj"),
    - **Rolę** (np. "Przycisk"),
    - **Wartość/Stan** (np. "Wciśnięty" lub wpisany tekst).
- **Interpretacja:** Jeśli czytnik mówi tylko "przycisk" lub milczy przy najechaniu na element, wymóg interoperacyjności **nie jest spełniony**.
- Nawigacja i Fokus
- **Widoczny fokus:** Należy nawigować po interfejsie za pomocą klawiatury (Tab/Strzałki). Czy widać ramkę lub podświetlenie wskazujące, który element jest aktualnie wybrany?
- **Logiczna kolejność:** Czy fokus przeskakuje po elementach w kolejności, która ma sens (np. od lewej do prawej, z góry na dół), czy skacze chaotycznie?

---

## U.8.0.1.d U.8.0.1.d Rozwiązania alternatywne dla kolorów (Art. 8 pkt 1 lit. d)

### Procedure
['Wymóg ten wynika z potrzeby zapewnienia dostępności dla osób z zaburzeniami rozpoznawania barw (daltonizm) oraz osób korzystających z urządzeń z wyświetlaczami monochromatycznymi lub w trybie wysokiego kontrastu.\n\nNależy interpretować ten przepis przez pryzmat zasady **podwójnego kodowania informacji**:\n1.  **Nie tylko kolor:** Barwa nigdy nie może być jedynym wyróżnikiem informacji wizualnej. Jeśli usuniemy kolor (zmienimy obraz na czarno-biały), informacja nadal musi być zrozumiała.\n2.  **Alternatywy:** Informacja przekazywana kolorem musi być równolegle przekazywana za pomocą:\n    -   **Tekstu** (np. etykieta "Błąd" obok czerwonego pola),\n    -   **Kształtu lub wzoru** (np. linia przerywana na wykresie zamiast tylko czerwonej linii),\n    -   **Symbolu** (np. ikona wykrzyknika).']

### Evaluation
Inspekcja i Testy funkcjonalne

### Checklist
- Weryfikacja w skali szarości (Dla oprogramowania i ekranów)
- **Działanie:** Należy zmienić ustawienia wyświetlacza lub systemu operacyjnego na "Skalę szarości" (Grayscale) lub wydrukować zrzut ekranu na drukarce czarno-białej.
- **Sprawdzenie:**
    -   Czy nadal widać, które pole formularza zawiera błąd? (Sama czerwona ramka to za mało; wymagana jest ikona lub tekst).
    -   Czy legendy wykresów są czytelne? (Czy da się przyporządkować opis do słupka/wycinka bez koloru?).
    -   Czy odnośniki w tekście (linki) różnią się od zwykłego tekstu czymś więcej niż kolorem (np. podkreśleniem, pogrubieniem lub ikoną)?
- Weryfikacja elementów fizycznych (Dla sprzętu)
- **Działanie:** Należy zidentyfikować wskaźniki świetlne (diody LED) lub przyciski oznaczone kolorami.
- **Sprawdzenie:**
    -   Czy dioda oznaczająca "Włączony" i "Błąd" różni się tylko kolorem (np. zielona vs czerwona w tym samym miejscu)? Jeśli tak – jest to błąd. Dioda powinna dodatkowo mieć inny opis, inną pozycję lub inny tryb świecenia (np. ciągły vs migający).
    -   Czy przyciski o różnych funkcjach są rozróżnialne tylko po kolorze (np. "Naciśnij zielony, aby zatwierdzić")? Jeśli przycisk nie ma opisu tekstowego lub symbolu (np. "OK", "X"), wymóg **nie jest spełniony**.
- Wyróżnianie elementów (Fokus i Zaznaczenie)
- **Sprawdzenie:** Należy nawigować po elementach interfejsu (np. lista opcji). Czy element wybrany różni się od niewybranego tylko kolorem tła? Należy zweryfikować, czy zastosowano dodatkowy wskaźnik (np. obramowanie, pogrubienie tekstu, "ptaszek" zaznaczenia).

---

## U.8.0.1.e U.8.0.1.e Rozwiązania alternatywne dla dźwięków (Art. 8 pkt 1 lit. e)

### Procedure
['Wymóg ten jest kluczowy dla osób niesłyszących i słabosłyszących. Każda informacja przekazywana przez produkt drogą słuchową musi być jednocześnie dostępna drogą wzrokową (lub dotykową).\nZasada podwójnego kanału informacyjnego oznacza, że:\n1. **Ekwiwalentność**: Jeśli urządzenie piszczy, musi też "mrugać" lub wyświetlać komunikat. Informacja wizualna musi pojawiać się w tym samym czasie co dźwięk.\n2. **Komunikatywność**: Sygnał wizualny musi być zrozumiały. Jeśli dźwięk oznacza "błąd", to mrugająca dioda też musi być jednoznacznie kojarzona z błędem (np. poprzez etykietę lub kolor, pamiętając o wymogach z lit. d).\nWeryfikacja opiera się na sprawdzeniu, czy po wyciszeniu urządzenia (lub przez osobę niesłyszącą) nadal można odebrać wszystkie komunikaty systemowe.']

### Evaluation
Inspekcja i Testy funkcjonalne

### Checklist
- Weryfikacja wizualizacji sygnałów statusu (Funkcjonalność zamknięta)
- **Działanie**: Należy doprowadzić do sytuacji, w której urządzenie emituje dźwięk ostrzegawczy lub informacyjny (np. zostawić otwarte drzwiczki, wpisać błędny PIN, nie odebrać gotówki przez chwilę).
- **Sprawdzenie**: Czy w momencie pojawienia się dźwięku:
  - Pojawia się komunikat tekstowy na ekranie?
  - Miga dioda LED lub podświetlenie ekranu?
- Interpretacja: Jeśli urządzenie tylko wydaje dźwięk (np. "bip-bip"), a na ekranie nic się nie zmienia – wynik jest NEGATYWNY.
- Wskaźnik aktywności audio (Komunikacja)
- **Warunek**: Produkt służy do rozmów głosowych/wideo.
- **Działanie**: Należy nawiązać połączenie i poprosić rozmówcę o mówienie.
- **Sprawdzenie**: Czy na ekranie widać, że dźwięk jest odbierany? (np. animacja fal głosowych, podświetlenie awatara osoby mówiącej, ikona głośnika).
- **Cel**: Osoba niesłysząca musi wiedzieć, że ktoś do niej mówi, aby np. spojrzeć na tłumacza języka migowego lub napisy.
- Alternatywy dla usług głosowych
- **Sprawdzenie**: Jeśli produkt posiada automatyczne menu głosowe (np. "Aby połączyć się z serwisem, powiedz SERWIS"), czy istnieje opcja wybrania tego samego na ekranie lub klawiaturze numerycznej, bez konieczności słuchania poleceń?

---

## U.8.0.1.f U.8.0.1.f Sterowanie elementami dźwiękowymi (Art. 8 pkt 1 lit. f)

### Procedure
['Wymóg ten koncentruje się na jakości i sterowalności sygnału audio, co jest kluczowe dla osób słabosłyszących oraz osób z zaburzeniami przetwarzania słuchowego. Użytkownik musi mieć kontrolę nad tym, co słyszy, a sam dźwięk musi być wysokiej jakości.\n\nUstawodawca wskazuje na cztery aspekty:\n1.  **Głośność:** Użytkownik musi mieć możliwość znacznego podgłośnienia dźwięku (aby skompensować ubytek słuchu).\n2.  **Szybkość:** Choć norma EN 301 549 nie zawiera bezpośredniego testu dla "szybkości odtwarzania" w ogólnym TIK (poza odtwarzaczami multimediów), wymóg ten należy rozumieć jako konieczność zapewnienia, by komunikaty nie były odtwarzane zbyt szybko lub by istniała możliwość ich powtórzenia/spowolnienia.\n3.  **Redukcja zakłóceń:** Produkt nie powinien "dokładać" własnych szumów ani zbierać zakłóceń z otoczenia, które utrudniałyby zrozumienie mowy (np. przez słuchawkę).\n4.  **Wyrazistość:** Dźwięk mowy musi obejmować szerokie pasmo częstotliwości, aby głoski były rozróżnialne.']

### Evaluation
Inspekcja i Testy funkcjonalne

### Checklist
- Weryfikacja zakresu głośności (Dla sprzętu i systemów zamkniętych)
- **Działanie:** Należy sprawdzić zakres regulacji głośności mowy.
- **Sprawdzenie:**
    - Czy urządzenie umożliwia wzmocnienie dźwięku do poziomu co najmniej **65 dBA** (dla systemów zamkniętych)?
    - Czy zakres regulacji wynosi co najmniej **18 dB** (dla sprzętu telekomunikacyjnego)?
    - Czy po zakończeniu sesji głośność wraca do poziomu bezpiecznego (domyślnego), aby nie ogłuszyć kolejnego użytkownika?
- Weryfikacja wyrazistości dźwięku (Jakość pasma)
- **Warunek:** Produkt służy do dwukierunkowej komunikacji głosowej.
- **Sprawdzenie:** Czy produkt koduje i dekoduje dźwięk w paśmie częstotliwości co najmniej do **7 000 Hz** (standard HD Voice)? Jest to niezbędne dla rozróżnialności spółgłosek (np. "s" vs "f"), co jest kluczowe dla osób słabosłyszących.
- Niezależna kontrola dźwięku (Dla oprogramowania)
- **Sprawdzenie:** Jeśli aplikacja odtwarza dźwięk automatycznie przez ponad 3 sekundy, czy użytkownik ma mechanizm do jego zatrzymania lub niezależnej regulacji głośności (niezależnie od głośności systemu), aby nie zagłuszał on np. czytnika ekranu?

---

## U.8.0.1.g U.8.0.1.g Sterowanie ręczne i precyzyjne ruchy (motoryka mała) (Art. 8 pkt 1 lit. g)

### Procedure
['Wymóg ten dotyczy dostępności dla osób z niepełnosprawnością ruchową (motoryczną). Obsługa urządzenia nie może wymagać dużej precyzji, siły ani koordynacji obu rąk.\n\nKluczowe zasady:\n1.  **Sterowanie sekwencyjne:** Każdą czynność musi dać się wykonać "krok po kroku", a nie "wszystko naraz" (unikanie wielodotyku).\n2.  **Motoryka mała:** Nie wolno wymagać gestów precyzyjnych, takich jak szczypanie, skręcanie nadgarstka czy mocne chwytanie.\n3.  **Jeden przełącznik:** Nie wolno wymagać jednoczesnego wciskania dwóch przycisków (np. "Ctrl+Alt+Del" musi mieć alternatywę).\n4.  **Rozróżnialność dotykowa:** Przyciski muszą różnić się od siebie w dotyku, aby osoba niewidoma lub mająca problem z kontrolą wzrokową ręki mogła je zidentyfikować.']

### Evaluation
Inspekcja i Testy funkcjonalne

### Checklist
- Weryfikacja gestów i chwytu (Środki obsługi)
- **Działanie:** Należy spróbować wykonać wszystkie zadania na urządzeniu używając tylko jednego palca (lub rysika) lub zaciśniętej pięści (bez użycia palców).
- **Sprawdzenie:**
    - Czy są wymagane gesty wielopunktowe (np. "uszczypnij, by powiększyć")? Jeśli tak, czy istnieje przycisk "+" robiący to samo jednym kliknięciem?
    - Czy obsługa wymaga mocnego chwytania i przekręcania (np. gałka obrotowa o dużym oporze)? Jeśli tak – wynik **NEGATYWNY**.
- Weryfikacja jednoczesnych czynności
- **Sprawdzenie:** Czy istnieje jakakolwiek funkcja wymagająca wciśnięcia dwóch przycisków naraz (np. "Przytrzymaj A i naciśnij B")? Jeśli tak, czy istnieje tryb (np. Klawisze trwałe/Sticky Keys), który pozwala wcisnąć je po kolei?
- Weryfikacja rozróżnialności dotykowej
- **Działanie:** Należy zamknąć oczy i dotknąć panelu sterowania.
- **Sprawdzenie:**
    - Czy przyciski są wyczuwalne pod palcem (wypukłe/wklęsłe), czy jest to płaski panel dotykowy? Płaski panel bez oznaczeń dotykowych **nie spełnia** tego wymogu (chyba że jest udźwiękowiony).
    - Czy na klawiaturze numerycznej (jeśli występuje) klawisz "5" ma wyczuwalną wypustkę?

---

## U.8.0.2 U.8.0.2 Wymagania ogólne interfejsu - ruchy i siła (Art. 8 pkt 2)

### Procedure
['Wymóg ten definiuje fizyczne granice interakcji z urządzeniem, mając na celu zapewnienie dostępności dla osób poruszających się na wózkach inwalidzkich, osób niskiego wzrostu oraz osób o osłabionej sile mięśniowej.\n\nPojęcia "duży zasięg" i "duża siła" są w normie EN 301 549 ściśle sparametryzowane:\n1.  **Ograniczenie zasięgu (Wymiary):** Elementy sterujące muszą znajdować się w strefie dostępnej dla osoby siedzącej. Norma określa maksymalną wysokość (sięganie w górę) oraz minimalną wysokość (sięganie w dół), aby uniknąć konieczności wstawania, kucania lub nadmiernego wychylania się.\n2.  **Ograniczenie siły (Dynamika):** Obsługa przycisków, ekranów dotykowych czy wkładanie karty nie może wymagać siły, która byłaby barierą dla osoby starszej lub osłabionej.\n3.  **Orientacja (Oprogramowanie):** W przypadku aplikacji mobilnych, wymóg braku konieczności wykonywania "ruchów o dużym zasięgu" interpretuje się również jako brak wymuszania obracania urządzenia (zmiany orientacji), co może być trudne dla osób z urządzeniem zamontowanym na stałe, np. do wózka.']

### Evaluation
Inspekcja i Testy funkcjonalne

### Checklist
- Pomiary zasięgu (Dla urządzeń stacjonarnych)
- **Działanie:** Należy zmierzyć wysokość umieszczenia najwyższego i najniższego elementu sterującego (przycisku, otworu na kartę, ekranu dotykowego) od poziomu podłoża.
- **Weryfikacja (Dostęp bez przeszkód):**
    - Czy najwyższy element znajduje się nie wyżej niż **1220 mm** nad podłożem?
    - Czy najniższy element znajduje się nie niżej niż **380 mm** nad podłożem?
- **Interpretacja:** Przekroczenie tych wartości oznacza, że tryb pracy wymaga ruchów o "dużym zasięgu", co jest niezgodne z ustawą (chyba że urządzenie posiada tryb alternatywny sterowany np. głosem lub smartfonem, który nie wymaga sięgania).
- Pomiar siły nacisku (Dla elementów mechanicznych)
- **Działanie:** Należy użyć siłomierza lub wykonać test organoleptyczny na przyciskach, klawiszach i elementach ruchomych.
- **Weryfikacja:** Czy siła potrzebna do aktywacji elementu (np. wciśnięcia przycisku) nie przekracza **22,2 N**?
- **Interpretacja:** Jeśli przycisk stawia duży opór lub wymaga mocnego uderzenia, produkt nie spełnia wymagania.
- Weryfikacja orientacji ekranu (Dla oprogramowania)
- **Działanie:** Należy uruchomić aplikację na tablecie lub smartfonie zamontowanym w uchwycie (symulacja montażu na wózku).
- **Sprawdzenie:** Czy treść aplikacji dostosowuje się zarówno do orientacji pionowej, jak i poziomej?
- **Błąd:** Jeśli aplikacja wymusza obrócenie urządzenia o 90 stopni, aby uzyskać dostęp do funkcji, narusza to wymóg unikania zbędnych ruchów fizycznych.

---

## U.8.0.3 U.8.0.3 Ograniczenie ataków padaczki wywołanych światłem (fotogennej) (Art. 8 pkt 3)

### Procedure
['Wymóg ten jest krytyczny dla bezpieczeństwa zdrowotnego użytkowników. Treści wizualne, które migają z określoną częstotliwością, mogą wywołać napad drgawkowy u osób cierpiących na padaczkę fotogenną.\n\nZgodnie z normą **EN 301 549**, wymóg ten mapuje się na klauzule:\n- **C.9.2.3.1** (dla stron WWW),\n- **C.10.2.3.1** (dla dokumentów),\n- **C.11.2.3.1** (dla oprogramowania).\n\nWszystkie te klauzule odsyłają do kryterium sukcesu **WCAG 2.1 – 2.3.1 (Trzy błyski lub wartości poniżej progu)**. Oznacza to, że żaden element nie może błyskać częściej niż 3 razy na sekundę, chyba że błysk jest bardzo mały (poniżej określonego progu powierzchni) lub ma niski kontrast/nasycenie czerwieni.']

### Evaluation
Inspekcja i Testy funkcjonalne

### Checklist
- Weryfikacja częstotliwości błysków:
- **Działanie:** Należy zidentyfikować wszystkie elementy, które migają, pulsują lub zmieniają jasność w sposób gwałtowny (np. reklamy, powiadomienia o błędach, animacje ładowania, filmy).
- **Sprawdzenie:** Czy element błyska częściej niż **3 razy w ciągu jednej sekundy**?
- **Analiza szczegółowa:**
    - Jeśli element błyska rzadziej (np. raz na 2 sekundy) – wynik **POZYTYWNY**.
    - Jeśli element błyska szybko (efekt stroboskopowy) – wynik **NEGATYWNY**, chyba że spełnia wyjątki dotyczące małej powierzchni określone w WCAG (np. jest mniejszy niż 25% 10-stopniowego pola widzenia centralnego).
- **Uwaga:** Szczególną uwagę należy zwrócić na błyski w kolorze czerwonym, które są najbardziej niebezpieczne dla układu nerwowego.

---

## U.8.0.4 U.8.0.4 Ochrona prywatności przy funkcjach dostępności (Art. 8 pkt 4)

### Procedure
['Wymóg ten ma na celu zapobieżenie sytuacji, w której osoba ze szczególnymi potrzebami jest zmuszona do ujawnienia swoich danych osobom postronnym, aby móc skorzystać z urządzenia (np. bankomat głośno odczytujący PIN).\n\nZgodnie z normą **EN 301 549** (rozdział 5.1.3), ochrona prywatności w kontekście dostępności realizowana jest poprzez trzy mechanizmy:\n1.  **Maskowanie danych wejściowych:** Jeśli na ekranie hasło jest ukryte (gwiazdki), to syntezator mowy nie może go głośno wypowiadać przez głośnik główny.\n2.  **Prywatny odsłuch:** Dane wrażliwe mogą być odczytywane głosowo tylko wtedy, gdy użytkownik korzysta z mechanizmu indywidualnego słuchania (np. słuchawek).\n3.  **Kontrola głośności:** Użytkownik musi mieć możliwość przyciszenia słuchawki, aby dźwięk nie był słyszalny dla osób postronnych.']

### Evaluation
Inspekcja i Testy funkcjonalne

### Checklist
- Weryfikacja wejścia maskowanego (Hasła i PIN)
- **Działanie:** Należy uruchomić tryb głosowy (np. czytnik ekranu) i wprowadzić dane w pole, które wizualnie maskuje znaki (wyświetla kropki/gwiazdki).
- **Sprawdzenie:**
    - Czy urządzenie wypowiada wpisywane znaki (np. "jeden, dwa, trzy") przez głośnik główny? – Jeśli tak, wynik **NEGATYWNY**.
    - Czy urządzenie wypowiada słowo "gwiazdka" lub wydaje sygnał dźwiękowy (bip) zamiast cyfry? – Jeśli tak, wynik **POZYTYWNY**.
    - *Wyjątek:* Urządzenie może wypowiadać znaki, jeśli podłączono słuchawki (mechanizm indywidualnego słuchania).
- Prywatny dostęp do danych osobowych
- **Działanie:** Należy wywołać funkcję prezentującą dane prywatne (np. stan konta, PESEL).
- **Sprawdzenie:** Czy te informacje są słyszalne przez głośnik zewnętrzny urządzenia?
- **Kryterium sukcesu:** Dane prywatne powinny być przekazywane głosowo wyłącznie przez słuchawki (lub słuchawkę telefoniczną). Jeśli nie podłączono słuchawek, urządzenie powinno milczeć lub prosić o ich podłączenie.
- Głośność odsłuchu prywatnego
- **Działanie:** Podłączyć słuchawki.
- **Sprawdzenie:** Czy istnieje możliwość regulacji głośności w słuchawkach? Jest to konieczne, aby zapobiec wyciekowi dźwięku.

---

## U.8.0.5.a U.8.0.5.a Rozwiązania alternatywne dla identyfikacji biometrycznej (Art. 8 pkt 5 lit. a)

### Procedure
['Wymóg ten wynika z faktu, że niektórzy użytkownicy mogą nie posiadać określonych cech biologicznych (np. brak palców, brak gałek ocznych) lub cechy te mogą być zniekształcone (np. zatarte linie papilarne, zmiany głosu).\n\nZgodnie z klauzulą **C.5.3** normy EN 301 549, nie wolno wykorzystywać tylko jednej cechy biologicznej jako jedynego sposobu identyfikacji lub kontroli. Należy zapewnić alternatywę.\n\nAlternatywą tą może być:\n1.  **Metoda niebiometryczna:** Np. kod PIN, hasło, klucz fizyczny, karta RFID. Jest to rozwiązanie zalecane, gdyż uniezależnia obsługę od cech fizycznych użytkownika.\n2.  **Inna metoda biometryczna:** Np. jeśli podstawową metodą jest odcisk palca, alternatywą może być skan twarzy lub rozpoznawanie głosu. Norma wskazuje, że zastosowanie odmiennych cech biologicznych zwiększa prawdopodobieństwo, że osoba z niepełnosprawnością będzie mogła skorzystać z przynajmniej jednej z nich.']

### Evaluation
Inspekcja i Testy funkcjonalne

### Checklist
- Weryfikacja alternatyw dla biometrii
- **Działanie:** Należy zidentyfikować funkcję wymagającą biometrii (np. odblokowanie ekranu odciskiem palca).
- **Sprawdzenie:** Czy istnieje sposób na wykonanie tej samej czynności bez użycia tej konkretnej cechy biologicznej?
    - Czy system pozwala wpisać kod PIN lub hasło zamiast przykładać palec?
    - Czy system pozwala użyć innej cechy (np. twarzy zamiast palca)?
- **Interpretacja:** Jeśli jedynym sposobem dostępu jest konkretna cecha biometryczna (brak alternatywy), wynik testu jest **NEGATYWNY**.

---

## U.8.0.5.b U.8.0.5.b Spójność funkcji (Art. 8 pkt 5 lit. b)

### Procedure
['Wymóg spójności funkcji w kontekście dostępności należy interpretować jako obowiązek zapewnienia **ciągłości działania** narzędzi i ustawień, z których korzysta użytkownik. Produkt nie działa w próżni – funkcjonuje w ramach systemu operacyjnego lub platformy (np. Windows, Android, iOS, terminal płatniczy).\n\nSpójność oznacza tu brak konfliktu między produktem a środowiskiem użytkownika:\n1.  **Ciągłość narzędzi asystujących:** Jeżeli użytkownik uruchomił systemowe narzędzie dostępności (np. lupę, czytnik ekranu, sterowanie głosem) przed włączeniem produktu, narzędzie to musi kontynuować działanie po uruchomieniu produktu. Produkt nie może wymuszać wyłączenia tych narzędzi ani przerywać ich pracy.\n2.  **Spójność z platformą:** Produkt powinien zachowywać się w sposób przewidywalny dla danego środowiska, nie blokując funkcji systemowych, na których polega użytkownik (np. systemowych gestów powiększania).\n\nNaruszeniem spójności jest sytuacja, w której uruchomienie aplikacji powoduje "wyrzucenie" lub zablokowanie działających w tle usług dostępności, zmuszając użytkownika do ich ponownej konfiguracji lub uniemożliwiając mu obsługę.']

### Evaluation
Inspekcja i Testy funkcjonalne

### Checklist
- Weryfikacja ciągłości działania funkcji dostępności
- **Warunki wstępne:** Produkt jest zainstalowany na platformie oferującej systemowe funkcje dostępności (np. smartfon, komputer, kiosk z systemem operacyjnym).
- **Działanie:**
    1.  Włącz w ustawieniach systemu wybraną funkcję dostępności (np. duży kontrast, odwrócenie kolorów, lupę ekranową lub czytnik ekranu).
    2.  Uruchom weryfikowany produkt (aplikację/program).
    3.  Rozpocznij korzystanie z głównych funkcji produktu.
- **Sprawdzenie:**
    *   Czy w momencie uruchomienia produktu funkcja systemowa została automatycznie wyłączona?
    *   Czy produkt wyświetlił komunikat żądający wyłączenia funkcji dostępności (np. ze względów bezpieczeństwa)?
  - Czy funkcja działa nieprzerwanie i stabilnie wewnątrz interfejsu produktu?
- **Interpretacja:** Jeśli produkt przerywa działanie funkcji systemowej bez wyraźnego, świadomego żądania użytkownika (np. naciśnięcia przycisku "Wyłącz dostępność"), wynik testu jest **NEGATYWNY**. Produkt musi szanować ciągłość środowiska pracy użytkownika.

---

## U.8.0.5.c U.8.0.5.c Czas na reakcję (Art. 8 pkt 5 lit. c)

### Procedure
['Wymóg ten wynika z faktu, że użytkownicy z niepełnosprawnością ruchową, wzrokową lub poznawczą potrzebują więcej czasu na przeczytanie treści, zrozumienie jej i wykonanie interakcji (np. odnalezienie kursora, wpisanie tekstu). Pojęcie "wystarczająco długi czas" nie jest subiektywne – norma techniczna precyzuje, że użytkownik musi mieć kontrolę nad tym czasem.\n\nZgodnie z normą EN 301 549 (klauzule dotyczące „Dostosowania czasu”), produkt spełnia ten wymóg, jeśli oferuje **przynajmniej jedną** z poniższych możliwości:\n1.  **Wyłączenie:** Użytkownik może całkowicie wyłączyć limit czasowy przed jego rozpoczęciem.\n2.  **Dostosowanie:** Użytkownik może samodzielnie zmienić długość limitu czasowego w ustawieniach (musi istnieć możliwość wydłużenia go co najmniej **10-krotnie** względem wartości domyślnej).\n3.  **Wydłużenie (Ostrzeżenie):** System ostrzega użytkownika przed upływem czasu i daje mu co najmniej **20 sekund** na wykonanie prostej czynności (np. naciśnięcie spacji), która wydłuży czas sesji (również co najmniej 10-krotnie).\n\n**Wyjątki:** Wymóg nie dotyczy sytuacji, w których limit czasu jest istotą działania (np. aukcje w czasie rzeczywistym) lub gdy limit jest bardzo długi (powyżej 20 godzin).']

### Evaluation
Inspekcja i Testy funkcjonalne

### Checklist
- Weryfikacja ustawień (Dostosowanie/Wyłączenie)
- **Działanie:** Należy przejść do ustawień produktu (sekcja "Dostępność", "Bezpieczeństwo" lub "Ogólne").
- **Sprawdzenie:**
    - Czy istnieje opcja wyłączenia limitów czasowych (np. "Nigdy nie wylogowuj")?
    - Czy istnieje suwak lub pole pozwalające wydłużyć czas sesji? Jeśli domyślny czas to 1 minuta, czy można go ustawić na 10 minut lub więcej?
- Weryfikacja ostrzeżenia o upływie czasu (Wydłużenie)
- **Działanie:** Należy pozostawić produkt w stanie bezczynności i poczekać na moment, w którym ma nastąpić wygaszenie sesji lub anulowanie operacji.
- **Sprawdzenie:**
    - Czy przed upływem czasu pojawia się komunikat ostrzegawczy?
    - Czy komunikat daje użytkownikowi co najmniej **20 sekund** na reakcję?
    - Czy wykonanie prostej akcji (np. kliknięcie "Przedłuż") powoduje zresetowanie licznika i przyznanie dodatkowego czasu?
- **Interpretacja:** Jeśli sesja wygasa nagle, bez ostrzeżenia, a użytkownik traci wprowadzone dane – wynik testu jest **NEGATYWNY**.
- Weryfikacja komunikatów znikających
- **Działanie:** Należy wywołać komunikat systemowy (np. "Zapisano zmiany", "Błąd połączenia"), który znika automatycznie.
- **Sprawdzenie:** Czy użytkownik ma czas na przeczytanie komunikatu? Czy istnieje sposób na zatrzymanie jego znikania lub przywołanie go w historii powiadomień? Zbyt szybkie znikanie treści narusza ten wymóg.

---

## U.8.0.5.d U.8.0.5.d Łączenie z narzędziami wspomagającymi (Art. 8 pkt 5 lit. d)

### Procedure
['Wymóg ten dotyczy interoperacyjności (współdziałania). Produkt nie musi mieć wbudowanych wszystkich możliwych funkcji dostępności, ale musi pozwalać na podłączenie i poprawne działanie specjalistycznego sprzętu i oprogramowania, którego używa osoba z niepełnosprawnością.\nAnalizę należy podzielić na dwa obszary:\n1. Sprzęt (Hardware): Produkt musi posiadać standardowe porty i złącza (np. USB, gniazdo audio minijack, Bluetooth), które nie są blokowane dla urządzeń asystujących. Nie może wymagać stosowania niestandardowych, autorskich adapterów, które są niedostępne na rynku.\n2. Oprogramowanie (Software): Aplikacja musi udostępniać informacje o swoim interfejsie (nazwy przycisków, rolę elementów, ich stan) poprzez standardowe API dostępności systemu operacyjnego (np. Accessibility API w Androidzie, UI Automation w Windows). Dzięki temu zewnętrzny czytnik ekranu "wie", co znajduje się na ekranie.']

### Evaluation
Inspekcja i Testy funkcjonalne

### Checklist
- Weryfikacja złącz fizycznych (Sprzęt)
- **Działanie**: Należy obejrzeć obudowę urządzenia.
- **Sprawdzenie**:
  - Czy urządzenie posiada standardowe gniazdo słuchawkowe (np. 3.5 mm) lub obsługuje standard audio Bluetooth/USB? Jest to niezbędne dla osób niewidomych (prywatny odsłuch) i słabosłyszących (pętle indukcyjne).
  - Czy porty USB (jeśli służą do obsługi) akceptują standardowe klawiatury zewnętrzne?
- Weryfikacja API Dostępności (Oprogramowanie)
- **Działanie**: Należy uruchomić na urządzeniu popularne narzędzie wspomagające (np. czytnik ekranu NVDA na Windows, TalkBack na Androidzie, VoiceOver na iOS).
- **Sprawdzenie**:
  - Czy po uruchomieniu aplikacji produktu, czytnik ekranu potrafi odczytać nazwy przycisków i pól edycyjnych?
  - Czy fokus (ramka zaznaczenia) podąża za elementami interfejsu?
- **Interpretacja**: Jeśli czytnik ekranu milczy lub mówi tylko "nieznany element", oznacza to, że oprogramowanie nie udostępnia danych do API dostępności i nie spełnia wymogu łączenia się z narzędziami wspomagającymi.

---

## U.19.02.01.a-01 U.19.02.01.a-01 Tryb obsługi bez zaangażowania wzroku (A19-02-01-a-01)

### Procedure
['Przepis ten realizuje specyfikację funkcjonalną „Obsługa bezwzrokowa” (Usage without vision) zdefiniowaną w klauzuli **4.2.1** normy EN 301 549. Oznacza to, że użytkownik musi być w stanie wykonać wszystkie zadania (identyfikacja, nawigacja, obsługa funkcji) bez użycia wzroku.\n\nRealizacja techniczna zależy od rodzaju produktu (otwarty vs. zamknięty):\n\n1.  **Funkcjonalność zamknięta (np. bankomat, biletomat, czytnik e-booków):**\n    -   Jeśli użytkownik nie może podłączyć własnego oprogramowania asystującego, urządzenie musi samo zapewnić **wyjście audio** dla wszystkich informacji wizualnych (zgodnie z klauzulą **5.1.3.1** normy) .\n    -   Wszystkie etykiety, instrukcje, błędy i wyniki transakcji muszą być odczytywane (np. przez Text-to-Speech).\n    -   Obsługa musi być możliwa bez użycia ekranu dotykowego (np. za pomocą klawiatury fizycznej) lub z użyciem trybu dotykowego przystosowanego dla osób niewidomych (gesty sterujące audio).\n\n2.  **Funkcjonalność otwarta (np. strona WWW, aplikacja mobilna, oprogramowanie):**\n    -   System musi być kompatybilny z zewnętrznymi **czytnikami ekranu** (Screen Readers). Oznacza to spełnienie wymogów WCAG dotyczących treści nietekstowych (tekst alternatywny), struktury nagłówków i dostępności z klawiatury.\n    -   Informacje nie mogą być przekazywane wyłącznie kolorem lub kształtem.\n\n3.  **Elementy dotykowe:**\n    -   Klawisze fizyczne muszą być rozpoznawalne dotykiem (np. wypustka na klawiszu „5” w klawiaturach numerycznych – klauzula **8.4.1**).']

### Evaluation
Inspekcja i Testy funkcjonalne

### Checklist
- Weryfikacja trybu audio (Dla systemów zamkniętych)
- **Działanie:** Podłącz słuchawki do urządzenia (jeśli dotyczy) i aktywuj tryb dla osób niewidomych. Zasłoń ekran lub zamknij oczy.
- **Sprawdzenie:**
    -   Czy wszystkie informacje wyświetlane na ekranie są odczytywane głosowo? (Klauzula 5.1.3.1).
    -   Czy można nawigować po menu i zatwierdzać opcje bez patrzenia (np. używając klawiatury wyczuwalnej dotykiem)?
    -   Czy dane prywatne (np. PIN) są maskowane w audio (nie są wymawiane głośno, ewentualnie tylko w słuchawkach)? (Klauzula 5.1.3.8).
- Weryfikacja kompatybilności (Dla oprogramowania/WWW)
- **Działanie:** Uruchom czytnik ekranu (np. NVDA, VoiceOver, TalkBack).
- **Sprawdzenie:**
    -   Czy można obsłużyć produkt/usługę wyłączając monitor?
    -   Czy wszystkie elementy graficzne niosące treść mają tekst alternatywny? (WCAG 1.1.1).
    -   Czy kolejność fokusu (nawigacji) jest logiczna? (WCAG 2.4.3).
- Weryfikacja obsługi bez myszy
- **Działanie:** Spróbuj obsłużyć interfejs wyłącznie za pomocą klawiatury (Tab, Enter, Strzałki).
- **Uzasadnienie:** Obsługa myszą wymaga koordynacji ręka-oko, co „angażuje wzrok”. Tryb niewizualny zazwyczaj opiera się na klawiaturze.
- **Sprawdzenie:** Czy wszystkie funkcje są dostępne i możliwe do uruchomienia z klawiatury?.
- Dokumentacja i uruchomienie**
- **Sprawdzenie:** Czy sposób uruchomienia trybu niewizualnego (np. „wciśnij przycisk z wypukłą kropką”) jest możliwy do odnalezienia bez użycia wzroku? (Klauzula 8.5).

---

## U.19.02.01.a-02 U.19.02.01.a-02 Tryb obsługi dla osób przy ograniczonej zdolności widzenia (A19-02-01-a-02)

### Procedure
['Przepis ten odnosi się do specyfikacji funkcjonalnej "Obsługa przy ograniczonej możliwości widzenia". Oznacza to, że produkt musi oferować mechanizmy kompensujące słabszy wzrok, takie jak powiększanie, wysoki kontrast lub zmiana układu treści.\nRealizacja tego wymogu zależy od charakteru produktu:\n1. **Systemy o funkcjonalności zamkniętej (np. bankomaty, biletomaty, terminale płatnicze)**:\n    - Jeśli użytkownik nie może podłączyć własnego sprzętu powiększającego, urządzenie musi posiadać wbudowaną funkcję powiększania lub zapewniać odpowiednią wielkość znaków "na sztywno".\n    - Wymagane jest, aby wielkość czcionki była dostosowana do przewidywanej odległości użytkownika od ekranu (zapewnienie odpowiedniego kąta widzenia dla znaku).\n    - Informacje nie mogą polegać wyłącznie na rozróżnianiu barw.\n2. **Systemy o funkcjonalności otwartej (Strony WWW, Aplikacje, Systemy operacyjne)**:\n    - Skalowanie (Zoom): Interfejs musi pozwalać na powiększenie treści (zazwyczaj do 200% lub 400%) bez utraty informacji i funkcjonalności.\n    - Dopasowanie (Reflow): Przy dużym powiększeniu treść powinna się przelać w jedną kolumnę (dopasować do szerokości ekranu), aby użytkownik nie musiał przewijać widoku w dwóch płaszczyznach (poziomo i pionowo), co jest krytyczne dla osób słabowidzących czytających z powiększeniem.\n    - Kontrast: Elementy tekstowe i nietekstowe (ikony, obramowania formularzy) muszą mieć wysoki kontrast względem tła (standardowo min. 4,5:1 dla tekstu i 3:1 dla grafiki).\n    - Ustawienia użytkownika: Aplikacja nie może blokować ustawień systemowych (np. trybu wysokiego kontrastu, dużej czcionki systemowej) i powinna się do nich dostosować.']

### Evaluation
Inspekcja i Testy funkcjonalne

### Checklist
- Weryfikacja powiększania i skalowania (Zoom & Reflow) Dla stron WWW i aplikacji.
- **Działanie**: Użyj funkcji powiększania w przeglądarce lub systemie (np. do 200% i 400%).
- **Sprawdzenie**:
    - Czy wszystkie treści są nadal widoczne i dostępne? (Czy tekst nie jest ucięty, czy przyciski nie zniknęły?)
    - Czy przy powiększeniu (odpowiadającym szerokości 320 pikseli CSS) konieczne jest przewijanie poziome, aby przeczytać wiersz tekstu? (Jeśli tak – jest to błąd, z wyjątkiem map i diagramów).
- Weryfikacja kontrastu
- **Działanie**: Użyj narzędzia do analizy kontrastu (np. Colour Contrast Analyser).
- **Sprawdzenie**:
    - Zmierz kontrast tekstu podstawowego względem tła. Czy wynosi min. 4,5:1?
    - Zmierz kontrast istotnych elementów graficznych (np. ikon nawigacyjnych, obrysów pól tekstowych). Czy wynosi min. 3:1?
- Weryfikacja wielkości tekstu (Systemy zamknięte) Dla terminali samoobsługowych.
- **Działanie**: Jeśli urządzenie nie ma funkcji zoom, zmierz fizyczną wysokość wielkich liter na ekranie oraz typową odległość oczu użytkownika od ekranu.
- **Sprawdzenie**: Czy wielkość czcionki jest wystarczająco duża, aby być czytelna z tej odległości? (Dla typowej odległości obsługi terminala stojącego tekst powinien być znacząco większy niż standardowy druk gazetowy).
- Respektowanie ustawień systemowych Dla aplikacji mobilnych i desktopowych.
- **Działanie**: Włącz w systemie operacyjnym (Windows/macOS/iOS/Android) tryb "Wysoki Kontrast" lub "Odwrócone kolory" oraz zwiększ systemową wielkość czcionki.
- **Sprawdzenie**: Czy aplikacja przejęła te ustawienia? Czy interfejs jest czytelny, czy też aplikacja "wymusza" swoje własne kolory, ignorując preferencje użytkownika?

---

## U.19.02.01.a-03 U.19.02.01.a-03 Tryb obsługi niewymagający rozróżniania barw (A19-02-01-a-03)

### Procedure
['Przepis ten realizuje specyfikację funkcjonalną „Obsługa bez możliwości rozpoznawania kolorów” (Klauzula 4.2.3 normy EN 301 549). Wymóg ten nie zabrania stosowania kolorów, lecz zabrania polegania wyłącznie na nich jako jedynym nośniku informacji.\nRealizacja techniczna zależy od rodzaju elementu:\n1. **Sprzęt (Hardware - Klauzula 8.1.3)**:\n    - Jeżeli urządzenie wykorzystuje diody LED lub kolorowe przyciski do sygnalizacji stanu (np. zielona dioda = włączony, czerwona = błąd), informacja ta musi być przekazana również w inny sposób.\n    - Rozwiązanie: Zastosowanie ikon, etykiet tekstowych, różnicowanie kształtem lub miganiem obok koloru.\n2. **Oprogramowanie i Strony WWW (Klauzule 9.1.4.1 / 11.1.4.1)**:\n    - Zgodnie z WCAG 1.4.1 (Użycie koloru), kolor nie może być jedynym wizualnym środkiem przekazywania informacji.\n    - Błędy w formularzach: Nie wystarczy zaznaczyć błędnego pola czerwoną ramką. Należy dodać ikonę błędu i/lub komunikat tekstowy.\n    - Linki: W tekście ciągłym linki nie mogą różnić się od zwykłego tekstu tylko kolorem (np. niebieskim), chyba że kontrast jest bardzo wysoki (3:1) i dodatkowo pojawia się inne wyróżnienie przy najechaniu kursorem (np. podkreślenie).\n    - Wykresy: Linie na wykresie lub segmenty kołowe muszą różnić się nie tylko kolorem, ale też wzorem (kropki, kreski) lub posiadać bezpośrednie etykiety tekstowe.\n3. **Ustawienia użytkownika**:\n    - W systemach oprogramowania dopuszczalne jest zapewnienie trybu „wysokiego kontrastu” lub trybu czarno-białego, który zastępuje kodowanie barwne innymi wyróżnikami, o ile jest on łatwo dostępny dla użytkownika.']

### Evaluation
Inspekcja i Testy funkcjonalne

### Checklist
- Test skali szarości (Dla ekranów)
- Działanie: Zmień ustawienia wyświetlania w systemie operacyjnym lub monitorze na „Skalę szarości” (Grayscale) lub wydrukuj zrzut ekranu na drukarce czarno-białej.
- Sprawdzenie:
    - Czy nadal wiesz, które pola formularza zawierają błędy?
    - Czy potrafisz odróżnić serie danych na wykresie?
    - Czy linki w tekście są widoczne?
    - Czy wiesz, który element menu jest aktualnie wybrany?
- Weryfikacja sprzętowa (Diody i Przyciski)
- Działanie: Obejrzyj fizyczne wskaźniki urządzenia.
- Sprawdzenie:
    - Czy dioda sygnalizująca np. „ładowanie” (pomarańczowa) i „naładowanie” (zielona) różni się czymś jeszcze (np. ikoną, pozycją, częstotliwością migania)? Jeśli jest to ta sama dioda zmieniająca tylko kolor – jest to błąd (chyba że stan można odczytać programowo np. przez aplikację).
    - Czy przyciski funkcyjne (np. „Start” - zielony, „Stop” - czerwony) są opisane tekstem lub symbolami, czy polegają tylko na kolorze?
- Instrukcje i opisy
- Działanie: Sprawdź komunikaty generowane przez system.
- Sprawdzenie: Czy system wydaje polecenia typu „Naciśnij zielony przycisk” lub „Wybierz elementy zaznaczone na czerwono”? Taki język instrukcji narusza wymóg, jeśli nie podano alternatywnego opisu (np. „Naciśnij zielony przycisk Start”).

---

## U.19.02.01.b U.19.02.01.b Ograniczenie ryzyka padaczki fotogennej (A19-02-01-b)

### Procedure
['Przepis ten realizuje specyfikację funkcjonalną „Minimalizacja czynników powodujących fotogenne napady padaczki” (Klauzula 4.2.9 normy EN 301 549). Celem jest zapewnienie, aby żaden element interfejsu nie migał w sposób, który jest neurologicznie niebezpieczny.\n\nAnaliza techniczna w oparciu o normę (zgodność z WCAG 2.1 Kryterium 2.3.1):\n1. **Zasada trzech błysków (Three Flashes Rule)**: Produkt jest uznawany za bezpieczny, jeżeli jego elementy nie błyskają częściej niż trzy razy w ciągu jednej sekundy.\n2. **Wartości graniczne (Thresholds)**: Jeśli miganie jest szybsze niż 3 Hz, jest ono dopuszczalne tylko wtedy, gdy błyski są "poniżej progu". Oznacza to, że muszą być:\n    - Małe (zajmować niewielką część pola widzenia, zwykle poniżej 0,006 steradianów w promieniu 10 stopni pola widzenia).\n    - Mało kontrastowe (zmiana jasności nie jest drastyczna).\n    - Pozbawione nasyconej czerwieni (błyski w kolorze czerwonym są bardziej ryzykowne i mają surowsze limity).\n3. **Tryb bezpieczny**: Zgodnie z Art. 19, produkt musi zapewniać „co najmniej jeden tryb”, który ogranicza to ryzyko. Oznacza to, że jeśli domyślna prezentacja zawiera ryzykowne miganie, użytkownik musi mieć możliwość przełączenia się na tryb bezpieczny (np. wyłączenie animacji) przed napotkaniem niebezpiecznej treści.']

### Evaluation
Inspekcja i Testy funkcjonalne

### Checklist
- Identyfikacja migających sekwencji
- **Działanie**: Przejrzyj interfejs, szukając elementów migających, pulsujących lub szybko zmieniających się (np. reklamy typu strobe, intensywne intra wideo, migające ostrzeżenia o błędach).
- **Sprawdzenie**: Czy zidentyfikowano jakiekolwiek elementy, które błyskają lub zmieniają się gwałtownie częściej niż 3 razy na sekundę? Jeśli tak, element jest potencjalnie niebezpieczny i wymaga dalszej analizy.
- Dostępność ustawień (Redukcja migotania)
- **Działanie**: Sprawdź ustawienia produktu/usługi oraz ustawienia systemu operacyjnego (np. opcja „Ograniczaj ruch” / „Reduce Motion”).
- **Sprawdzenie**: Czy dostępne są ustawienia pozwalające wyłączyć lub ograniczyć migotanie (np. zatrzymanie animacji, tryb statyczny)? Czy produkt respektuje ustawienia systemowe w tym zakresie?
    - **Uwaga**: Mechanizm wyłączania musi być dostępny zanim użytkownik zostanie narażony na atak.
- Treści odtwarzane automatycznie
- **Działanie**: Otwórz stronę lub aplikację.
- **Sprawdzenie**: Czy filmy lub animacje uruchamiają się same (autoplay)? Czy użytkownik może je natychmiast zatrzymać (np. klawiszem Spacji lub widocznym przyciskiem Pauzy)?
    - **Zasada**: Automatycznie odtwarzane treści trwające dłużej niż 5 sekund muszą posiadać mechanizm wstrzymania lub ukrycia [i.830].
- Weryfikacja negatywnego wpływu (Safety Check)
- **Analiza**: Czy wyłączenie migotania nie powoduje utraty kluczowych informacji?
    - **Przykład**: Jeśli alarm pożarowy w systemie wizualizowany jest tylko przez szybkie miganie ekranu na czerwono, a w trybie „bez migotania” nie ma żadnego innego komunikatu (np. stałego napisu „ALARM”), to wyłączenie migotania wpływa negatywnie na bezpieczeństwo. Należy zapewnić alternatywę (np. stały, wyraźny komunikat tekstowy).

---

## U.19.02.02.a U.19.02.02.a Tryb obsługi niewymagający słuchu (A19-02-02-a)

### Procedure
['Przepis ten realizuje specyfikację funkcjonalną „Obsługa bez zmysłu słuchu” (Usage without hearing) zdefiniowaną w klauzuli 4.2.4 normy EN 301 549. Oznacza to, że wszystkie funkcje muszą być dostępne dla użytkownika, który nie słyszy.\n\nRealizacja techniczna zależy od rodzaju interakcji:\n1. **Funkcjonalność zamknięta (np. biletomaty, kioski informacyjne)**:\n    - Urządzenie musi zapewniać wyjście wizualne dla informacji dźwiękowych (zgodnie z klauzulą 5.1.5). Oznacza to, że każdy sygnał audio (np. „piknięcie” przy błędzie, instrukcja głosowa „wyjmij kartę”) musi mieć równoważny komunikat na ekranie (tekst lub ikona) lub sygnał świetlny/dotykowy.\n2. **Komunikacja głosowa (np. domofony, systemy telekomunikacyjne)**:\n    - Jeżeli system opiera się na głosie (np. infolinia, wideodomofon), musi zapewniać alternatywy dla usług głosowych (klauzula 6.4). Użytkownik musi mieć możliwość załatwienia sprawy np. poprzez czat tekstowy, SMS, RTT (Real-Time Text) lub interfejs dotykowy, bez konieczności mówienia i słuchania.\n3. **Multimedia (Wideo)**:\n    - Wszelkie treści wideo z dźwiękiem muszą posiadać napisy dla niesłyszących (Captions/Subtitles), które są zsynchronizowane z obrazem i zawierają nie tylko dialogi, ale też opis istotnych dźwięków tła (klauzula 7.1).\n4. **Wskaźniki stanu**:\n    - Jeśli urządzenie informuje o swoim stanie dźwiękiem (np. winda dojeżdżająca na piętro, terminal płatniczy akceptujący kartę), musi istnieć równoczesny sygnał wizualny (wyświetlacz piętra, dioda na terminalu).']

### Evaluation
Inspekcja i Testy funkcjonalne

### Checklist
- Test „Mute” (Wyciszenie)
- **Działanie**: Wyłącz głośniki, wycisz urządzenie lub załóż słuchawki wygłuszające. Spróbuj wykonać kluczowy scenariusz użycia (np. zakup biletu, wypłata gotówki).
- **Sprawdzenie**:
    - Czy w którymkolwiek momencie napotkałeś barierę? (np. system czeka na reakcję na komendę głosową, której nie słyszysz?)
    - Czy wiesz, że transakcja zakończyła się sukcesem lub błędem, patrząc tylko na ekran?
    - **Błąd**: Terminal wydaje tylko dźwięk ostrzegawczy (bez komunikatu na ekranie), gdy użytkownik zapomni zabrać karty.
- Weryfikacja alternatyw wizualnych (Systemy zamknięte) Dotyczy klauzuli 5.1.5 normy EN 301 549.
- **Działanie**: Zidentyfikuj sytuacje, w których urządzenie wydaje dźwięki (np. błąd, ostrzeżenie, koniec czasu).
- **Sprawdzenie**: Czy każdemu z tych dźwięków towarzyszy komunikat tekstowy lub zmiana na ekranie?
    - **Przykład**: Jeśli po błędnym PIN-ie słychać dźwięk, na ekranie musi pojawić się napis „Błędny PIN”.
- Weryfikacja napisów (Multimedia) Dotyczy klauzuli 7.1.
- **Działanie**: Jeśli produkt wyświetla filmy instruktażowe lub reklamowe z dźwiękiem.
- **Sprawdzenie**: Czy filmy posiadają opcję włączenia napisów? Czy napisy te obejmują istotne informacje dźwiękowe?
- Alternatywa dla komunikacji głosowej Dotyczy klauzuli 6.4.
- **Działanie**: Jeśli usługa wymaga kontaktu głosowego (np. przycisk „Pomoc” łączy z konsultantem głosowym).
- **Sprawdzenie**: Czy istnieje alternatywa tekstowa (np. czat, wyświetlanie komunikatów tekstowych na ekranie sterowanych przez konsultanta)? Brak alternatywy dla interkomu głosowego jest naruszeniem wymogu.

---

## U.19.02.02.b U.19.02.02.b Zaawansowane funkcje dźwiękowe (A19-02-02-b)

### Procedure
['Przepis ten realizuje specyfikację funkcjonalną „Obsługa przy ograniczonej możliwości słyszenia” (Usage with limited hearing capabilities) zdefiniowaną w klauzuli **4.2.5** normy EN 301 549.\n\nWymagania techniczne koncentrują się na jakości i sterowalności sygnału audio:\n\n1.  **Jakość i czystość dźwięku (Szerokość pasma):** Aby mowa była zrozumiała dla osób słabosłyszących, system musi obsługiwać szerokie pasmo przenoszenia. W przypadku dwukierunkowej komunikacji głosowej wymagane jest kodowanie i dekodowanie w zakresie częstotliwości z górną granicą co najmniej **7 000 Hz** (Klauzula 6.1).\n2.  **Wzmocnienie (Głośność):**\n    -   Sprzęt z wyjściem mowy musi posiadać regulację głośności o zakresie co najmniej **18 dB** (Klauzula 8.2.1.1).\n    -   Jeśli regulacja jest skokowa, co najmniej jeden krok musi zapewniać wzmocnienie o 12 dB powyżej poziomu minimalnego.\n3.  **Współpraca z aparatami słuchowymi (Sprzężenie):**\n    -   Dla urządzeń przykładanych do ucha (słuchawki telefonów, domofony) wymagane jest **sprzężenie magnetyczne** (cewka T / pętla indukcyjna), aby przekazać dźwięk bezpośrednio do aparatu słuchowego bez zakłóceń z otoczenia (Klauzula 8.2.2).\n    -   Należy unikać zakłóceń elektromagnetycznych, które mogłyby powodować buczenie w aparatach słuchowych.\n4.  **Redukcja szumów i zakłóceń:** Zgodnie z Art. 8 pkt 1 lit. f oraz klauzulą 4.2.5 normy, produkt powinien oferować funkcje redukcji szumów tła oraz poprawy klarowności dźwięku.']

### Evaluation
Inspekcja i Testy funkcjonalne

### Checklist
- Weryfikacja regulacji głośności (Inspekcja/Pomiar)
- **Działanie:** Sprawdź zakres regulacji głośności.
- **Sprawdzenie:**
    - Czy urządzenie pozwala na znaczące podgłośnienie dźwięku?
    - Czy zakres regulacji wynosi co najmniej 18 dB? (Wymaga miernika poziomu dźwięku przyłożonego do głośnika/słuchawki).
    - Czy po zakończeniu sesji głośność wraca do poziomu domyślnego (poniżej 65 dBA), aby nie ogłuszyć kolejnego użytkownika? (Klauzula 5.1.3.13).
- Weryfikacja współpracy z aparatami słuchowymi (Sprzężenie magnetyczne)
- **Działanie:** Sprawdź, czy urządzenie (np. domofon, telefon, kiosk) posiada oznaczenie pętli indukcyjnej (symbol ucha z literą „T”).
- **Sprawdzenie:** Użyj testera pętli indukcyjnych (odbiornika pola magnetycznego). Czy po zbliżeniu do urządzenia słychać wyraźny sygnał audio w testerze? Brak sprzężenia magnetycznego w urządzeniach przykładanych do ucha jest naruszeniem tego wymogu.
- Możliwość podłączenia słuchawek
- **Działanie:** Sprawdź, czy urządzenie posiada standardowe gniazdo (np. Jack 3.5mm) lub Bluetooth, umożliwiające podłączenie własnych słuchawek użytkownika (które mogą pełnić funkcję wzmacniacza).
- **Sprawdzenie:** Czy po podłączeniu słuchawek dźwięk jest automatycznie przekierowywany i czy działa regulacja głośności?.
- Jakość dźwięku (Test subiektywny lub pomiar)
- **Sprawdzenie:** Czy w warunkach hałasu otoczenia (np. ulica) dźwięk z urządzenia jest słyszalny i czy nie jest zniekształcony? (Wymóg redukcji zakłóceń z Art. 8 pkt 1 lit. f).

---

## U.19.02.03 U.19.02.03 Tryb obsługi niewymagający wydawania dźwięków głosowych (A19-02-03)

### Procedure
['Przepis ten realizuje specyfikację funkcjonalną „Obsługa bez możliwości użycia mowy” (Usage without vocal capability) zdefiniowaną w klauzuli 4.2.6 normy EN 301 549. Kluczowe jest zapewnienie alternatywnego kanału wejścia (input).\n\n1. **Alternatywa dla sterowania głosowego**: Jeśli urządzenie (np. Smart TV, kiosk) jest sterowane komendami głosowymi („Wyszukaj film”), musi istnieć alternatywa w postaci klawiatury, ekranu dotykowego lub fizycznych przycisków, pozwalająca wykonać to samo zadanie.\n2. **Alternatywa dla komunikacji głosowej (Usługi)**: Jeśli usługa opiera się na rozmowie (np. domofon wideo, infolinia bankowa, system telekomunikacyjny), musi zapewniać alternatywne sposoby komunikacji dwukierunkowej, które nie wymagają mowy.\n    - Zgodnie z klauzulą 6.4, systemy te powinny oferować np. czat tekstowy, SMS, lub RTT (Real-Time Text – tekst w czasie rzeczywistym).\n3. **Funkcjonalność zamknięta (Klauzula 5.1.7)**: W przypadku urządzeń publicznych (np. kioski), jeśli autoryzacja lub obsługa wymaga mowy, musi istnieć tryb alternatywny (np. klawiatura ekranowa).']

### Evaluation
Inspekcja i Testy funkcjonalne

### Checklist
- Test „Ciszy” (Obsługa bez mowy)
- **Działanie**: Spróbuj obsłużyć produkt nie wypowiadając ani słowa.
- **Sprawdzenie**:
    - Czy wszystkie funkcje dostępne głosowo (np. „zadzwoń do mamy”, „sprawdź saldo”) można wywołać inaczej (np. klikając w menu)?
    - Błąd: Jedynym sposobem na połączenie się z konsultantem jest wypowiedzenie tematu rozmowy do bota głosowego („Powiedz nam, w jakiej sprawie dzwonisz”), a system nie reaguje na wciskanie klawiszy numerycznych.
- Alternatywa dla biometrii głosowej Zgodnie z Art. 8 pkt 5 lit. a.
- **Sprawdzenie**: Jeśli system wymaga autoryzacji głosowej (voice ID), czy istnieje alternatywa (np. PIN, hasło, odcisk palca)? Brak alternatywy jest naruszeniem.
- Komunikacja tekstowa (Dla usług komunikacyjnych) Zgodnie z klauzulą 6.4.
- **Działanie**: Sprawdź kanały kontaktu w usłudze.
- **Sprawdzenie**: Czy zamiast dzwonić na infolinię (wymaga mowy), użytkownik może załatwić tę samą sprawę przez czat na żywo, e-mail lub interfejs tekstowy w aplikacji?
- Dokumentacja i instrukcje
- Sprawdzenie: Czy instrukcja opisuje, jak korzystać z produktu bez użycia mowy? Często alternatywne tryby są ukryte w menu dostępności.

---

## U.19.02.04.a U.19.02.04.a Tryb obsługi bez wymogu motoryki małej (A19-02-04-a)

### Procedure
['Przepis ten realizuje specyfikację funkcjonalną „Obsługa przy ograniczonych możliwościach manualnych lub ograniczonej sile” (Klauzula 4.2.7 normy EN 301 549). Celem jest umożliwienie obsługi produktu osobie, która nie może chwytać, ściskać, skręcać nadgarstka ani wykonywać precyzyjnych ruchów palcami.\n\nAnaliza techniczna wymagań:\n1. **Motoryka mała i chwytanie (Sprzęt)**:\n    - Elementy sterujące muszą być możliwe do obsłużenia bez konieczności mocnego chwytania, szczypania (pinching) lub skręcania nadgarstka (Klauzula 5.5.1 / 8.4.2.1).\n    - Zasada ogólna: Produkt powinien dać się obsłużyć jedną ręką, przy użyciu zaciśniętej pięści lub prostego nacisku, bez konieczności angażowania konkretnych palców.\n2. **Siła fizyczna**:\n    - Siła wymagana do aktywacji elementu sterującego (przycisku, dźwigni, otwarcia klapki) nie może przekraczać 22,2 N (niutonów), co odpowiada w przybliżeniu sile potrzebnej do naciśnięcia klawisza starej maszyny do pisania lub podniesienia ok. 2,2 kg (Klauzula 8.4.2.2).\n3. **Jednoczesne czynności (Simultaneous Actions)**:\n    - Produkt nie może wymagać jednoczesnego użycia dwóch rąk (np. trzymania pokrywy jedną ręką i wkładania karty drugą) ani jednoczesnego wciśnięcia dwóch przycisków (np. Ctrl+Alt+Del), chyba że dostępny jest tryb sekwencyjny (np. funkcja Klawisze Trwałe / Sticky Keys) (Klauzula 5.9).\n4. **Gesty dotykowe (Oprogramowanie)**:\n    - Jeżeli interfejs (np. na ekranie dotykowym) wykorzystuje gesty wielopunktowe (multipoint) lub oparte na ścieżce (np. „szczypanie” w celu powiększenia, suwak do odblokowania), musi istnieć alternatywa w postaci pojedynczego stuknięcia (single pointer) (Klauzula 11.2.5.1 / WCAG 2.5.1)']

### Evaluation
Inspekcja i Testy funkcjonalne

### Checklist
- Test „Zaciśniętej pięści” (Brak motoryki małej)
- **Działanie**: Spróbuj obsłużyć wszystkie fizyczne elementy produktu (przyciski, ekrany dotykowe, czytniki kart) używając wyłącznie kłykci zaciśniętej dłoni lub łokcia.
- **Sprawdzenie**: Czy można wykonać wszystkie kluczowe zadania?
    - Błąd: Wymagane jest chwycenie gałki palcami i przekręcenie jej (skręcanie nadgarstka).
    - Błąd: Wymagane jest jednoczesne wciśnięcie małego przycisku zagłębionego w obudowie (wymaga precyzji opuszka palca).
- Weryfikacja siły nacisku
- **Działanie**: Naciśnij element sterujący.
- **Sprawdzenie**: Czy wymaga to dużej siły? Jeśli element stawia wyraźny opór, należy zmierzyć siłę aktywacji siłomierzem (push/pull gauge). Wynik powyżej 22,2 N oznacza niezgodność
- Test jednoczesności i sekwencyjności
- **Działanie**: Zidentyfikuj funkcje wymagające użycia dwóch punktów sterowania (np. przyciski Shift+Litera, dwa przyciski na obudowie).
- **Sprawdzenie**: Czy można je obsłużyć sekwencyjnie (jeden po drugim)?
    - Przykład: Czy w systemie operacyjnym terminala można włączyć funkcję „Sticky Keys”? Czy fizyczna pokrywa kiosku posiada siłownik/blokadę, dzięki czemu nie trzeba jej trzymać ręką podczas wymiany papieru?
- Alternatywa dla gestów złożonych (Ekrany dotykowe) Dotyczy klauzuli 11.2.5.1.
- **Działanie**: Sprawdź mapę lub przeglądarkę zdjęć.
- **Sprawdzenie**: Czy przybliżanie (zoom) wymaga gestu „szczypania” (multitouch), czy są też dostępne przyciski „+” i „-” (single touch)? Brak przycisków jest błędem

---

## U.19.02.04.b U.19.02.04.b Tryb obsługi przy ograniczonym zasięgu ruchów (A19-02-04-b)

### Procedure
['Przepis ten realizuje specyfikację funkcjonalną „Obsługa przy ograniczonym zasięgu rąk” (Klauzula 4.2.8 normy EN 301 549). Oznacza to, że wszystkie elementy niezbędne do obsługi muszą znajdować się w strefie dostępnej dla użytkownika siedzącego (np. na wózku) lub mającego ograniczoną możliwość wyciągnięcia ramion.\n\nAnaliza techniczna wymiarów (zgodnie z klauzulami 8.3.2 – 8.3.4 normy):\n1. **Zasięg pionowy (Wysokość)**:\n    - Elementy sterujące (najwyżej położony przycisk interaktywny) nie mogą znajdować się wyżej niż 1220 mm nad podłożem.\n    - Elementy nie mogą znajdować się niżej niż 380 mm nad podłożem.\n    - Uwaga: Dotyczy to co najmniej jednego elementu z każdego rodzaju (np. jeśli są dwa gniazda USB, przynajmniej jedno musi być w zasięgu).\n2. **Zasięg poziomy (Głębokość/Przeszkody)**:\n    - Jeśli urządzenie posiada półkę lub wystający element (przeszkodę), który utrudnia podjazd, maksymalna wysokość zasięgu ulega obniżeniu.\n    - Dla przeszkody o głębokości do 510 mm, zasięg wynosi max 1220 mm.\n    - Dla przeszkody głębszej (od 510 mm do 635 mm), zasięg wynosi max 1120 mm.\n3. **Przestrzeń na kolana i stopy (Podjazd)**:\n    - Urządzenie musi zapewniać pustą przestrzeń na podłodze (co najmniej 760 mm x 1220 mm) umożliwiającą podjazd wózkiem.\n    - Wymagana jest odpowiednia przestrzeń pod urządzeniem na stopy i kolana, aby użytkownik mógł podjechać dostatecznie blisko ekranu/klawiatury.\n4. **Aspekt programowy (Software)**:\n    - Interfejs oprogramowania nie może wymuszać orientacji (np. tylko pionowej), jeśli fizyczny montaż urządzenia w tej orientacji spowodowałby umieszczenie przycisków nawigacyjnych (np. paska „Wstecz” na górze ekranu) poza zasięgiem ręki użytkownika.']

### Evaluation
Inspekcja i Testy funkcjonalne

### Checklist
- Pomiary wysokości elementów sterujących (Dostęp z przodu)
- **Działanie**: Zmierz odległość od podłogi do środka najwyżej położonego elementu interaktywnego (np. najwyższy przycisk na ekranie dotykowym, szczelina na kartę).
- **Sprawdzenie**: Czy wysokość wynosi maksymalnie 1220 mm?
- **Działanie**: Zmierz odległość do najniżej położonego elementu.
- **Sprawdzenie**: Czy wysokość wynosi minimalnie 380 mm?
- Weryfikacja przeszkód i zasięgu w głąb
- **Działanie**: Sprawdź, czy przed ekranem znajduje się półka lub obudowa wymuszająca odsunięcie użytkownika. Zmierz głębokość tej przeszkody.
- **Sprawdzenie**:
    - Jeśli głębokość > 510 mm, czy najwyższy element jest obniżony do max 1120 mm?
    - Jeśli głębokość > 635 mm (25 cali), jest to naruszenie (zbyt duża odległość do sięgnięcia)
- Weryfikacja przestrzeni manewrowej
- **Sprawdzenie**: Czy przed urządzeniem jest płaska powierzchnia o wymiarach min. 760 x 1220 mm? Czy podjazd nie jest zbyt stromy (max nachylenie 1:48)?
- Układ interfejsu (Software)
- **Działanie**: Sprawdź układ elementów na ekranie dotykowym.
- **Analiza**: Czy kluczowe przyciski nawigacyjne (Menu, Wstecz, Pomoc) nie są umieszczone wyłącznie w górnym pasie ekranu, który w przypadku dużych monitorów może znaleźć się powyżej 1220 mm od podłoża? Preferowane jest umieszczenie sterowania w dolnej części ekranu lub zapewnienie trybu „obniżonego interfejsu” (tzw. reachability mode).

---

## U.19.02.05.a U.19.02.05.a Elementy w zasięgu wszystkich użytkowników (A19-02-05-a)

### Procedure
['Wymóg ten jest realizacją specyfikacji funkcjonalnej dotyczącej „dostępności elementów sterujących” dla osób o zróżnicowanych parametrach fizycznych. Kluczowe jest, aby interfejs był możliwy do obsłużenia zarówno przez osobę wysoką stojącą, jak i osobę niską lub siedzącą na wózku inwalidzkim.\n\nAnaliza techniczna w oparciu o normę EN 301 549 (Klauzula 8.3 - Stacjonarne ICT):\n1. **Zasięg pionowy (Wysokość)**:\n    - Wszystkie elementy niezbędne do obsługi (czytnik, klawiatura, najwyższy przycisk na ekranie dotykowym) muszą znajdować się w przedziale wysokości dostępnym dla osoby siedzącej.\n    - Zgodnie z normą, elementy sterujące powinny znajdować się na wysokości nie większej niż 1220 mm i nie mniejszej niż 380 mm od podłoża.\n    - Wyjątek: Jeśli dostęp jest utrudniony przez przeszkodę (np. ladę), maksymalna wysokość ulega obniżeniu (np. do 1120 mm).\n2. **Widoczność (Kąt patrzenia)**:\n    - „Znajdowanie się w zasięgu” dotyczy również wzroku. Informacje na ekranie muszą być czytelne dla osoby, której oczy znajdują się na niższym poziomie (typowa wysokość wzroku osoby na wózku to ok. 1015 mm - 1200 mm). Ekran nie może być zamontowany pod kątem, który powoduje, że osoba siedząca widzi tylko odbicie światła lub zniekształcony obraz (Klauzula 8.3.5).\n3. **Przestrzeń manewrowa (Podejście)**:\n    - Aby element był „w zasięgu”, użytkownik musi mieć możliwość podjechania do niego. Wymagane jest zapewnienie wolnej przestrzeni na podłodze (np. 760 mm x 1220 mm) oraz odpowiedniej przestrzeni na kolana i stopy pod urządzeniem, jeśli wymagany jest podjazd przodem (Klauzula 8.3.4).']

### Evaluation
Inspekcja i Testy funkcjonalne

### Checklist
- Pomiary wysokości elementów sterujących (Góra/Dół)
- **Działanie**: Zmierz odległość od podłoża do środka najwyżej położonego elementu interaktywnego (np. najwyższego przycisku wyboru na ekranie).
- **Sprawdzenie**: Czy wysokość ta wynosi maksymalnie 1220 mm?
    - Uwaga: Jeśli element znajduje się wyżej, sprawdź, czy istnieje programowy tryb „obniżania interfejsu” (np. przycisk na dole ekranu, który przesuwa całe menu w dół).
- **Działanie**: Zmierz odległość do najniżej położonego elementu (np. szczeliny odbioru biletu).
- **Sprawdzenie**: Czy wysokość ta wynosi minimalnie 380 mm?
- Weryfikacja zasięgu w głąb (Przeszkody)
- **Działanie**: Sprawdź, czy użytkownik musi sięgnąć „przez coś” (np. półkę, wystający blat), aby obsłużyć urządzenie.
- **Sprawdzenie**:
    - Jeśli głębokość przeszkody wynosi do 255 mm, dopuszczalna wysokość to nadal 1220 mm.
    - Jeśli głębokość przeszkody jest większa (np. do 510 mm), maksymalna wysokość elementów musi zostać zredukowana.
- Weryfikacja widoczności (Kąty)
- **Działanie**: Usiądź na krześle lub wózku przed urządzeniem (poziom wzroku ok. 1015 mm - 1100 mm).
- **Sprawdzenie**: Czy treść na ekranie jest czytelna? Czy kąt nachylenia ekranu lub rodzaj matrycy nie powoduje, że obraz jest niewidoczny z dołu?
- Przestrzeń pod urządzeniem (Podjazd)
- **Działanie**: Jeśli konstrukcja wymusza podjazd przodem (np. bankomat w ścianie), sprawdź, czy jest miejsce na kolana.
- **Sprawdzenie**: Czy pod blatem/ekranem jest wolna przestrzeń o wysokości co najmniej 685 mm i głębokości min. 200 mm (dla stóp) / 280 mm (dla kolan)? Brak miejsca na nogi zmusza użytkownika wózka do podjazdu bokiem, co może znacznie utrudnić dosięgnięcie elementów (wymaga skrętu tułowia).

---

## U.19.02.05.b U.19.02.05.b Funkcje upraszczające obsługę (A19-02-05-b)

### Procedure
['Przepis ten realizuje specyfikację funkcjonalną „Obsługa przy ograniczonych możliwościach poznawczych, językowych lub związanych z procesem nauki” (Klauzula 4.2.10 normy EN 301 549). „Upraszczanie i ułatwianie” w kontekście technicznym nie musi oznaczać stworzenia osobnego „trybu uproszczonego” (choć jest to dobre rozwiązanie), ale może polegać na wdrożeniu konkretnych mechanizmów w głównym interfejsie, które redukują obciążenie poznawcze.\n\nZgodnie z mapowaniem wymagań w normie (Tabela B.2 oraz analiza Art. 19 w źródłach), kluczowe cechy upraszczające to:\n1. **Pomoc przy wprowadzaniu informacji (Identyfikacja i korekta błędów)**:\n    - System musi w prosty sposób wskazywać błędy (np. w formularzu) i opisywać je tekstem, a nie tylko kolorem.\n    - System powinien podpowiadać, jak błąd naprawić (Sugestie korekty).\n    - Jest to kluczowe dla osób, które mają trudności z precyzyjnym wprowadzaniem danych lub rozumieniem skomplikowanych formatów.\n2. **Uproszczona nawigacja (Kolejność i pomijanie)**:\n    - Możliwość pominięcia bloków (Bypass blocks): Użytkownik nie powinien być zmuszany do przechodzenia przez te same, powtarzalne elementy menu na każdej podstronie. Musi istnieć mechanizm (np. link „Przejdź do treści”), który upraszcza dotarcie do celu.\n    - Logiczna kolejność (Focus order): Nawigacja musi podążać za sensem i logiką, a nie skakać chaotycznie po elementach ekranu.\n3. **Wsparcie językowe**:\n    - Oprogramowanie musi pozwalać na programowe określenie języka treści. Dzięki temu zewnętrzne narzędzia asystujące (np. wtyczki upraszczające tekst, translatory, syntezatory mowy) mogą poprawnie przetworzyć treść i przedstawić ją użytkownikowi w zrozumiałej formie.']

### Evaluation
Inspekcja i Testy funkcjonalne

### Checklist
- Weryfikacja obsługi błędów (Input Assistance)
- **Działanie**: Celowo popełnij błąd w formularzu (np. wpisz błędny format daty, zostaw puste pole wymagane).
- **Sprawdzenie**:
    - Czy system jasno identyfikuje błąd (tekstem, nie tylko czerwonym kolorem)?
    - Czy system podpowiada, jak błąd naprawić (np. „Wpisz datę w formacie RR-MM-DD”)? Brak podpowiedzi utrudnia obsługę osobom z ograniczeniami poznawczymi.
- Weryfikacja nawigacji i sekwencyjności
- **Działanie**: Przejdź przez proces (np. zakup biletu) używając klawisza Tab (lub gestów nawigacyjnych).
- **Sprawdzenie**: Czy kolejność przemieszczania się po elementach jest logiczna i przewidywalna? Czy nie ma momentów, w których fokus „gubi się” lub skacze w niespodziewane miejsce, dezorientując użytkownika?
- Weryfikacja pomijania powtarzalnych treści
- **Działanie**: Sprawdź, czy na początku strony/ekranu znajduje się mechanizm pozwalający ominąć obszerne menu nawigacyjne i przejść bezpośrednio do treści głównej.
- **Uzasadnienie**: Konieczność wielokrotnego „przeklikiwania się” przez te same elementy (np. 20 pozycji menu) przy każdej zmianie ekranu jest barierą dla osób z problemami z koncentracją i pamięcią krótkotrwałą.
- Dostępność trybu uproszczonego (Opcjonalne, ale zalecane)
- **Działanie**: Sprawdź w ustawieniach, czy istnieje opcja „Tryb prosty”, „Widok uproszczony” lub „Tryb czytania” (w przeglądarkach).
- **Sprawdzenie**: Czy aktywacja tego trybu usuwa zbędne „rozpraszacze” (reklamy, ozdobniki, skomplikowane tła) i pozostawia samą treść w czytelnej formie?

---

## U.19.02.05.c U.19.02.05.c Tryb obsługi zapewniający prywatność (A19-02-05-c)

### Procedure
['Przepis ten realizuje specyfikację funkcjonalną „Prywatność” (Klauzula 4.2.11 normy EN 301 549). Zasada jest prosta: użytkownik korzystający z udogodnień (np. osoba niewidoma) musi mieć zagwarantowany taki sam poziom prywatności jak użytkownik standardowy.\n\nAnaliza techniczna kluczowych zagrożeń i rozwiązań:\n1. **Maskowanie danych wejściowych (Input Masking)**:\n    - Jeśli na ekranie hasło lub PIN wyświetlane są jako gwiazdki (****), to w trybie głosowym (Text-to-Speech) system nie może odczytywać wprowadzanych cyfr na głos przez głośnik główny.\n    - Odczyt znaków maskowanych jest dopuszczalny tylko wtedy, gdy użytkownik podłączył słuchawki (mechanizm indywidualnego słuchania).\n2. Prywatny dostęp do danych (Private Data Output):\n    - Dane wrażliwe (np. „Saldo wynosi 10 000 zł”) nie mogą być odczytywane przez głośnik zewnętrzny urządzenia publicznego (np. bankomatu).\n    - System musi wykryć podłączenie słuchawek i dopiero wtedy przekierować tam poufne komunikaty audio (Klauzula 5.1.3.9).\n3. Widoczność ekranu:\n    - Dla osób korzystających z powiększenia lub wysokiego kontrastu, dane na ekranie są łatwiej widoczne dla osób postronnych. W terminalach samoobsługowych zaleca się rozwiązania ograniczające kąt widzenia (filtry prywatyzujące) lub opcję „wygaszenia ekranu” (screen curtain) przy zachowaniu obsługi głosowej/klawiaturowej.']

### Evaluation
Inspekcja i Testy funkcjonalne

### Checklist
- Weryfikacja maskowania PIN/Hasła (Audio)
- **Działanie**: Uruchom tryb głosowy w urządzeniu. Przejdź do pola wpisywania PIN-u lub hasła. Wpisz znaki.
- **Sprawdzenie**: Czy urządzenie wypowiada na głos wpisywane cyfry/znaki przez głośnik?
    - **Prawidłowo**: Słychać tylko sygnał „bip” lub ciszę (chyba że podłączono słuchawki).
    - **Błąd**: Urządzenie głośno dyktuje wpisywane cyfry („Jeden, Pięć, Osiem...”), ujawniając PIN otoczeniu.
- Weryfikacja prywatnego odsłuchu (Gniazdo słuchawkowe)
- **Działanie**: Znajdź w urządzeniu głośnomówiącym (np. biletomat, kiosk informacyjny) gniazdo słuchawkowe (Jack 3.5mm). Podłącz własne słuchawki.
- **Sprawdzenie**:
    - Czy dźwięk automatycznie przełącza się z głośnika na słuchawki?
    - Czy po odłączeniu słuchawek dźwięk prywatny nie jest emitowany przez głośniki?
- Regulacja głośności w trybie prywatnym
- **Działanie**: Podłącz słuchawki.
- **Sprawdzenie**: Czy dostępna jest regulacja głośności dla słuchawek? Jest to kluczowe, aby dźwięk nie był słyszalny „na zewnątrz” (zbyt głośno) lub niesłyszalny dla użytkownika (zbyt cicho), co mogłoby zmusić go do odłączenia słuchawek i naruszenia prywatności
- Opcje alternatywne dla głosu (Input)
- **Sprawdzenie**: Jeśli autoryzacja wymaga podania danych głosowo (np. w aplikacji bankowej na smartfonie), czy istnieje opcja wpisania ich tekstem? Wypowiadanie danych w miejscu publicznym narusza prywatność.

---

## U.23.6.2 U.23.6.2 Oznakowanie CE (Art. 23 ust. 6 pkt 2)

### Procedure
['Wymóg ten dotyczy fizycznego oznaczenia produktu, potwierdzającego zgodność z ustawą o dostępności (oraz innymi dyrektywami).\n\n1.  **Lokalizacja podstawowa:** Znak CE musi znajdować się **bezpośrednio na produkcie** lub na jego tabliczce znamionowej.\n    *   *Wyjątek (Art. 23 ust. 7):* Tylko jeśli umieszczenie znaku na produkcie jest niemożliwe (np. produkt jest zbyt mały) lub nieuzasadnione ze względu na charakter produktu (np. delikatna powierzchnia), znak CE można umieścić na opakowaniu **oraz** w dokumentach towarzyszących. Nie jest to wybór dowolny, lecz ostateczność.\n2.  **Cechy oznakowania:**\n    *   **Widoczne:** Znak musi być łatwy do znalezienia przez użytkownika lub organ nadzoru (nie może być ukryty wewnątrz obudowy, chyba że dostęp do niego nie wymaga narzędzi).\n    *   **Czytelne:** Musi zachować odpowiednie proporcje (zgodnie z wzorem ustawowym) i wielkość (zazwyczaj min. 5 mm, chyba że przepisy szczegółowe stanowią inaczej).\n    *   **Trwałe:** Nie może dać się łatwo usunąć (np. zmyć wodą, zdrapać paznokciem) w przewidywanych warunkach użytkowania.\n3.  **Definicja znaku:** Oznakowanie CE musi być zgodne z wzorem określonym w rozporządzeniu (WE) nr 765/2008 (Art. 5 pkt 18 ustawy).']

### Evaluation
Inspekcja

### Checklist
- Test A: Obecność i lokalizacja
- **Działanie:** Obejrzyj obudowę produktu i tabliczkę znamionową.
- **Sprawdzenie:** Czy znajduje się tam znak CE?
    - Jeśli **TAK**: Przejdź do Testu B.
    - Jeśli **NIE**: Sprawdź, czy charakter produktu uzasadnia skorzystanie z wyjątku (Art. 23 ust. 7). Jeśli tak, sprawdź opakowanie i dokumenty. Jeśli nie (np. na laptopie jest miejsce), brak znaku na obudowie jest naruszeniem.
- Test B: Widoczność i czytelność
- **Działanie:** Spójrz na znak z normalnej odległości czytania.
- **Sprawdzenie:**
    - Czy litery "C" i "E" są wyraźne?
    - Czy zachowane są proporcje (siatka modułowa)? Częstym błędem jest stosowanie znaku "China Export" (litery blisko siebie) zamiast "Conformité Européenne" (okręgi liter nakładają się na siebie).
    - Czy znak nie jest zasłonięty przez inne elementy?
- Test C: Trwałość (Test pocierania)
- **Działanie:** Spróbuj potrzeć znak palcem lub wilgotną szmatką (w zależności od specyfiki materiału).
- **Sprawdzenie:** Czy znak nie rozmazuje się, nie odkleja i nie blaknie? Tabliczka znamionowa nie powinna odpaść od produktu.
- Test D: Dostępność dla osób niedowidzących (Dobra praktyka)
- **Sprawdzenie:** Chociaż ustawa wprost tego nie nakazuje w Art. 23 ust. 6, dobrą praktyką zgodną z duchem ustawy o dostępności jest zapewnienie, aby znak CE był kontrastowy w stosunku do tła lub (idealnie) wyczuwalny dotykiem (grawer/tłoczenie), co ułatwia weryfikację osobom słabowidzącym.

---

## U.23.7.0 U.23.7.0 Oznakowanie CE na opakowaniu lub dokumentach (Art. 23 ust. 7)

### Procedure
['Przepis ten jest **wyjątkiem**, a nie alternatywą do wyboru przez producenta. Domyślnie znak CE musi być na produkcie (Art. 23 ust. 6). Dopiero gdy jest to technicznie niewykonalne, stosuje się ust. 7.\n\nKluczowe aspekty prawne:\n1.  **Zasada kumulacji (Opakowanie + Dokumenty):** Przepis stanowi jasno: „na opakowaniu **i** w dołączonych do produktu dokumentach”. Oznacza to obowiązek podwójnego oznaczenia w trybie awaryjnym. Umieszczenie znaku tylko na opakowaniu (które użytkownik może wyrzucić) jest niewystarczające.\n2.  **Jakość oznakowania:** Mimo przeniesienia lokalizacji znaku, nadal obowiązują wymogi z ust. 6 – znak musi być **widoczny, czytelny i trwały**. Wymiar znaku (zazwyczaj min. 5 mm) musi zostać zachowany, chyba że uniemożliwiają to rozmiary samego produktu (co w przypadku przeniesienia na dokumenty/opakowanie zazwyczaj nie ma miejsca).\n3.  **Definicja oznakowania:** Oznakowanie musi być zgodne z wzorem określonym w rozporządzeniu (WE) nr 765/2008 (zgodnie z definicją w Art. 5 pkt 18 ustawy).']

### Evaluation
Inspekcja

### Checklist
- Test A: Weryfikacja zasadności (Czy można było oznakować produkt?)
- **Działanie:** Obejrzyj produkt.
- **Analiza:** Czy na obudowie jest fizyczne miejsce na znak CE?
    - Jeśli produkt to np. duży terminal płatniczy lub kiosk informacyjny, a znaku CE nie ma na obudowie (lecz jest tylko w instrukcji) – jest to **naruszenie Art. 23 ust. 6**, ponieważ nie zachodzi przesłanka „niemożliwości”.
    - Jeśli produkt to np. douszna słuchawka bezprzewodowa (zbyt mała powierzchnia), przejście do Testu B jest uzasadnione.
- Test B: Weryfikacja kumulatywna (Opakowanie + Dokumenty)
- **Działanie:** Sprawdź opakowanie jednostkowe oraz instrukcję/kartę gwarancyjną.
- **Sprawdzenie:** Czy znak CE znajduje się **w obu** tych miejscach?
    - *Błąd:* Znak CE jest tylko na pudełku, ale brakuje go w dokumentacji. Jest to naruszenie wymogu ustawowego („na opakowaniu **i** w (...) dokumentach”).
- Test C: Jakość graficzna
- **Sprawdzenie:** Czy znak CE na opakowaniu i w dokumentach jest czytelny? Czy nie został zniekształcony (zachowane proporcje okręgów)? Czy jest trwały (nie jest naklejką, która łatwo odpada z opakowania)?

---

## U.23.6.1 U.23.6.1 Deklaracja zgodności (Art. 23 ust. 6 pkt 1)

### Procedure
['Wymóg ten jest formalnym przejęciem odpowiedzialności przez producenta. Deklaracja zgodności UE jest jedynym dokumentem, w którym producent prawnie zaświadcza, że produkt spełnia wymogi ustawy.\n\nAnaliza prawna wymogów dla dokumentu (na podstawie Art. 24 ustawy):\n1.  **Forma:** Ustawa dopuszcza formę pisemną w postaci papierowej lub **elektronicznej**. Oznacza to, że plik PDF podpisany kwalifikowanym podpisem elektronicznym jest równoważny wersji papierowej.\n2.  **Moment sporządzenia:** Deklaracja musi powstać **przed** wprowadzeniem produktu do obrotu. Data na deklaracji nie może być późniejsza niż data pierwszej sprzedaży/dystrybucji.\n3.  **Treść merytoryczna:** Deklaracja nie jest ogólnikowym stwierdzeniem "produkt jest dostępny". Zgodnie z Art. 24 ust. 2, producent musi w niej "wykazać spełnianie odpowiednich wymagań dostępności". Oznacza to konieczność powołania się na konkretne normy zharmonizowane (np. EN 301 549) lub specyfikacje techniczne.\n4.  **Zasada jednej deklaracji:** Jeśli produkt podlega pod kilka aktów prawnych (np. Dyrektywę Radiową RED i Ustawę o dostępności), sporządza się **jedną** deklarację wymieniającą wszystkie te akty.\n5.  **Odpowiedzialność:** Poprzez sporządzenie i podpisanie deklaracji producent przyjmuje pełną odpowiedzialność za zgodność produktu.\n\n**Kluczowy wyjątek (Nieproporcjonalne obciążenie):**\nJeśli producent skorzystał z Art. 21 (ocena nieproporcjonalnego obciążenia) i na tej podstawie nie spełnia niektórych wymagań, ma obowiązek **wskazać w deklaracji zgodności, które wymagania dostępności nie są spełnione**. Zatajenie tego faktu w deklaracji jest naruszeniem prawa.']

### Evaluation
Inspekcja

### Checklist
- Weryfikacja istnienia i formy
- **Działanie:** Zażądaj deklaracji zgodności lub znajdź ją na stronie producenta (często w sekcji "Wsparcie" lub "Certyfikaty").
- **Sprawdzenie:** Czy dokument istnieje w formie pisemnej (papier/plik)? Czy został sporządzony w języku polskim (lub przetłumaczony, zgodnie z wymogami dla produktów na rynku polskim)?
- 

---

## U.24.1.0 U.24.1.0 Sporządzenie deklaracji zgodności zgodnie z przepisami (Art. 24 ust.1)

### Procedure
['Przepis ten narzuca sztywną strukturę dokumentu. Deklaracja zgodności UE nie jest dowolnym oświadczeniem woli, lecz sformalizowanym dokumentem prawnym, który musi zawierać elementy określone w **Załączniku III do Decyzji 768/2008/WE**.\n\nZgodnie z wzorem (Załącznik III), deklaracja musi zawierać następujące punkty:\n\n1.  **Identyfikator produktu:** „Nr ... (niepowtarzalny identyfikator produktu)”. Może to być numer partii, serii lub typu.\n2.  **Podmiot odpowiedzialny:** Nazwa i adres producenta lub jego upoważnionego przedstawiciela.\n3.  **Klauzula odpowiedzialności:** Oświadczenie o treści: „Niniejsza deklaracja zgodności wydana zostaje na **wyłączną odpowiedzialność** producenta” (jest to element krytyczny prawnie).\n4.  **Przedmiot deklaracji:** Opis pozwalający na identyfikowalność (np. nazwa, model). Może zawierać zdjęcie, jeśli jest to stosowne.\n5.  **Deklaracja zgodności z prawem:** Oświadczenie: „Wymieniony powyżej przedmiot niniejszej deklaracji jest zgodny z odnośnymi wymaganiami unijnego prawodawstwa harmonizacyjnego”. W tym miejscu należy przywołać **Ustawę z dnia 26 kwietnia 2024 r.** (lub Dyrektywę 2019/882).\n6.  **Odniesienia do norm:** Wyszczególnienie zastosowanych **norm zharmonizowanych** (np. „PN-EN 301 549 V3.2.1”) lub innych specyfikacji technicznych, w odniesieniu do których deklarowana jest zgodność. Należy podać datę/wersję normy.\n7.  **Jednostka notyfikowana (opcjonalnie):** Jeśli w procedurze brała udział jednostka notyfikowana (np. przy ocenie systemu jakości), należy podać jej nazwę, numer i numer certyfikatu.\n8.  **Informacje dodatkowe:** Miejsce na wpisanie np. wyłączeń wynikających z art. 21 ustawy (nieproporcjonalne obciążenie).\n9.  **Podpis:** Miejsce i data wydania, imię, nazwisko, stanowisko oraz podpis osoby upoważnionej.']

### Evaluation
Inspekcja

### Checklist
- Weryfikacja struktury (Zgodność z Załącznikiem III Decyzji 768/2008/WE)
- **Działanie:** Pobierz deklarację zgodności i porównaj ją punkt po punkcie z listą wymogów.
- **Sprawdzenie:**
    - Czy dokument zawiera frazę „na wyłączną odpowiedzialność producenta”?.
    - Czy produkt jest jednoznacznie zidentyfikowany (numer/model)?.
    - Czy dokument jest podpisany (data, nazwisko)?.
- Weryfikacja podstawy prawnej
- **Sprawdzenie:** Czy w sekcji dotyczącej przepisów harmonizacyjnych wymieniono właściwą ustawę/dyrektywę o dostępności?
    - *Błąd:* Powołanie się wyłącznie na dyrektywę niskonapięciową (LVD) lub kompatybilność elektromagnetyczną (EMC), z pominięciem przepisów o dostępności, oznacza, że produkt formalnie nie posiada deklaracji zgodności w rozumieniu Art. 24.
- Weryfikacja norm (Standardy techniczne)
- **Sprawdzenie:** Czy wymieniono konkretne normy (np. EN 301 549) wraz z ich wersjami?
    - *Zasada:* Odniesienia muszą być „precyzyjne, kompletne i jasno zdefiniowane”. Ogólne stwierdzenie „zgodny z normami” jest niewystarczające.
- Spójność (Pojedyncza deklaracja)
- **Sprawdzenie:** Czy producent dostarczył jedną deklarację obejmującą wszystkie wymagania (np. RED + Dostępność + RoHS), czy też osobne dokumenty? Przepisy wymagają sporządzenia **pojedynczej deklaracji** (która może mieć formę dossier), odnoszącej się do wszystkich aktów prawnych.

---

## U.24.2.0 U.24.2.0 Wykazanie spełniania wymagań dostępności w deklaracji zgodności (Art. 24 ust.2)

### Procedure
['Przepis ten obliguje producenta do wskazania w dokumencie prawnym konkretnych podstaw technicznych, które posłużyły do oceny produktu. Nie wystarczy ogólne oświadczenie "produkt jest dostępny". „Wykazanie spełniania wymagań” realizuje się poprzez powołanie na konkretne dokumenty odniesienia.\n\n1.  **Odniesienie do norm (Zasada domniemania zgodności):** Zgodnie z Art. 20 ust. 1 ustawy, zgodność z normami zharmonizowanymi (np. EN 301 549) daje prawne domniemanie zgodności z wymaganiami ustawy. Dlatego w deklaracji zgodności, w sekcji dotyczącej norm, producent musi wymienić konkretne normy dostępności, z których skorzystał.\n2.  **Specyfikacje techniczne:** Jeśli producent nie zastosował norm zharmonizowanych (lub zastosował je tylko częściowo), musi w deklaracji wskazać inne **specyfikacje techniczne**, w odniesieniu do których deklarowana jest zgodność (zgodnie z pkt 6 Załącznika III do Decyzji 768/2008/WE).\n3.  **Precyzja:** Odniesienia muszą być precyzyjne – zawierać numer normy oraz jej wersję/datę wydania (np. "V3.2.1 (2021-03)"), aby jednoznacznie określić, według jakich kryteriów produkt był oceniany.']

### Evaluation
Inspekcja

### Checklist
- Weryfikacja obecności norm dostępności**
*Dotyczy pkt 6 wzoru z Załącznika III Decyzji 768/2008/WE.*
- **Działanie:** Sprawdź listę norm wymienionych w deklaracji.
- **Sprawdzenie:** Czy na liście znajduje się norma **EN 301 549** (lub jej krajowy odpowiednik PN-EN 301 549)?
    - *Sytuacja prawidłowa:* Deklaracja wymienia np. normy bezpieczeństwa (LVD), kompatybilności (EMC) oraz normę dostępności (EN 301 549).
    - *Błąd:* Deklaracja powołuje się na Ustawę o dostępności w nagłówku, ale w liście norm wymienia tylko normy elektryczne/radiowe. W takim przypadku producent **nie wykazał** spełniania wymagań dostępności w sposób techniczny.
- Weryfikacja aktualności norm
- **Sprawdzenie:** Czy powołana wersja normy jest aktualna (np. V3.2.1, która jest zharmonizowana z dyrektywą UE), czy jest to wersja przestarzała (np. V1.1.2)? Użycie nieaktualnej normy może oznaczać, że wykazanie zgodności jest nieskuteczne.
- Weryfikacja innych specyfikacji (gdy brak norm)
- **Działanie:** Jeśli na liście nie ma normy EN 301 549.
- **Sprawdzenie:** Czy wskazano inną specyfikację techniczną, która pokrywa wymagania dostępności z Art. 7-11 ustawy? Jeśli pole jest puste lub zawiera tylko normy niezwiązane z dostępnością, wymóg z Art. 24 ust. 2 nie jest spełniony.

---

## U.24.3.0 U.24.3.0 Informacje o niespełnionych wymaganiach dostępności w przypadku wyłączeń (Art. 24 ust.3)

### Procedure
['Przepis ten nakłada obowiązek transparentności. Producent nie może zadeklarować ogólnej „zgodności z ustawą”, jeśli produkt posiada braki w dostępności, nawet jeśli te braki są prawnie usprawiedliwione.\n\n1.  **Jawność wyłączeń:** Deklaracja zgodności jest dokumentem publicznym. Jeśli producent skorzystał z wyjątku (np. nie zamontował funkcji głosowych w terminalu, bo uznał to za nieproporcjonalny koszt), musi to wyraźnie napisać w deklaracji.\n2.  **Precyzja:** Przepis wymaga podania informacji, **które** wymagania nie są spełnione. Nie wystarczy ogólna fraza „zastosowano art. 21”. Należy wskazać konkretne punkty normy (np. „Nie spełniono wymogu 5.1.3.1 – Wyjście audio, ze względu na nieproporcjonalne obciążenie”).\n3.  **Miejsce w dokumencie:** Zgodnie z wzorem deklaracji (Załącznik III do Decyzji 768/2008/WE), właściwym miejscem na te dane jest punkt 8: **„Informacje dodatkowe”**.']

### Evaluation
Inspekcja

### Checklist
- Inspekcja treści deklaracji (Sekcja „Informacje dodatkowe”)
- **Działanie:** Przeczytaj dokładnie deklarację zgodności.
- **Sprawdzenie:** Czy znajduje się tam lista wyłączonych wymagań?
    - *Scenariusz 1:* Produkt jest w pełni dostępny. Deklaracja nie musi zawierać uwag o wyłączeniach.
    - *Scenariusz 2:* Produkt ma ewidentne braki (np. kiosk bez wejścia słuchawkowego), a deklaracja **nie zawiera** informacji o niespełnieniu wymagań z Art. 24 ust. 3.
        - *Wniosek:* Jest to błąd formalny (nieprawidłowo sporządzona deklaracja) lub merytoryczny (producent nie przeprowadził oceny z Art. 21 i bezprawnie wprowadził produkt na rynek).
- Spójność z oceną (Weryfikacja krzyżowa - ocena pogłębiona)
*Dotyczy sytuacji, gdy mamy dostęp do dokumentacji wewnętrznej (Art. 21 ust. 5).*
- **Działanie:** Porównaj „Dokumentację przebiegu oceny nieproporcjonalnego obciążenia” z Deklaracją Zgodności.
- **Sprawdzenie:** Czy wszystkie wymagania, które w ocenie wewnętrznej uznano za „zbyt obciążające”, zostały przepisane do Deklaracji Zgodności jako niespełnione? Zatajenie tych informacji w deklaracji publicznej jest naruszeniem Art. 24 ust. 3.

---

## U.26.1.0 U.26.1.0 Identyfikacja produktu (Art. 26 ust.1)

### Procedure
['Przepis ten dotyczy **identyfikowalności (traceability)** produktu. Jest to fundament nadzoru rynku, umożliwiający powiązanie konkretnego egzemplarza urządzenia z jego dokumentacją techniczną i deklaracją zgodności.\n\nAnaliza prawna w oparciu o Ustawę i "Blue Guide" (Wskazówki dotyczące wdrażania przepisów UE):\n\n1.  **Swoboda wyboru identyfikatora:** Producent ma swobodę wyboru elementu identyfikującego (może to być nazwa typu, numer partii, numer serii, model, SKU). Kluczowym warunkiem jest to, aby wybrany element zapewniał **jednoznaczne powiązanie** z Deklaracją Zgodności UE.\n2.  **Hierarchia lokalizacji (Zasada i Wyjątek):**\n    -   **Zasada:** Identyfikator musi znajdować się **na produkcie**.\n    -   **Wyjątek:** Przeniesienie identyfikatora na opakowanie lub do dokumentu jest dopuszczalne **tylko** wtedy, gdy umieszczenie go na produkcie jest niemożliwe ze względu na:\n        -   **Wielkość:** Produkt jest zbyt mały, by zmieścić czytelny tekst (np. czujniki, małe akcesoria).\n        -   **Charakter produktu:** Np. powierzchnia nie pozwala na trwałe znakowanie (jest chropowata, sferyczna) lub znakowanie mogłoby uszkodzić produkt.\n    -  **Niedopuszczalne uzasadnienia:** Producent **nie może** przenieść oznakowania na opakowanie ze względów estetycznych (design) lub ekonomicznych (koszt nadruku).\n3.  **Spójność:** Ten sam identyfikator (np. numer modelu "XYZ-123") musi znajdować się na produkcie i w Deklaracji Zgodności.']

### Evaluation
Inspekcja

### Checklist
- Obecność identyfikatora (Inspekcja wizualna)
- **Działanie:** Obejrzyj obudowę produktu.
- **Sprawdzenie:** Czy znajduje się na niej ciąg znaków (np. "Model: A123", "S/N: 99999")?
    - *Uwaga:* Jeśli produkt składa się z kilku części (zestaw), a nie jest możliwe oznakowanie każdej z nich, dopuszcza się oznakowanie głównego opakowania.
- Weryfikacja zasadności wyjątku (Jeśli brak na produkcie)
- **Działanie:** Jeśli identyfikatora nie ma na obudowie, ale jest na pudełku/w instrukcji.
- **Analiza:** Czy produkt jest fizycznie zdolny do pomieszczenia tego napisu?
    - *Błąd:* Smartfon lub terminal płatniczy nie posiada numeru modelu na obudowie (tylko na pudełku). Jest to naruszenie Art. 26 ust. 1, ponieważ urządzenie ma wystarczającą wielkość i powierzchnię techniczną, aby umieścić tam grawer lub naklejkę. Argumenty estetyczne są prawnie nieważne.
- Weryfikacja spójności (Linkowanie dokumentacji)
- **Działanie:** Porównaj identyfikator z produktu z Deklaracją Zgodności.
- **Sprawdzenie:** Czy identyfikator na produkcie (np. "Type: X") jest tożsamy z identyfikatorem w pkt 1 lub 4 Deklaracji Zgodności? Jeśli na produkcie jest "Model A", a w deklaracji "Seria B", identyfikowalność nie jest zapewniona.

---

## U.26.2.0 U.26.2.0 Dane producenta (Art. 26 ust.2)

### Procedure
['Wymóg ten służy zapewnieniu skutecznego nadzoru rynku i możliwości kontaktu konsumenta z podmiotem odpowiedzialnym. Składa się z trzech kluczowych elementów: zakresu danych, ich lokalizacji oraz języka.\n\nAnaliza prawna w oparciu o Ustawę i "Blue Guide":\n\n1.  **Zakres danych (Tożsamość):** Producent musi podać:\n    -   Nazwę (firmę) lub imię i nazwisko.\n    -   Zarejestrowaną nazwę handlową lub znak towarowy (jeśli posiada). Znak towarowy jest elementem wyróżniającym (logo, słowo), ale nie zastępuje adresu.\n    -   **Jeden punkt kontaktowy (Adres):** Adres musi wskazywać „pojedynczy punkt”, w którym można skontaktować się z producentem. Nie musi to być adres fabryki, może to być adres biura lub upoważnionego przedstawiciela, ale musi to być adres fizyczny (pocztowy) – sama strona internetowa nie jest wystarczająca.\n2.  **Lokalizacja (Zasada i Wyjątek):**\n    -   Domyślnie dane muszą znajdować się **na produkcie**.\n    -   Przeniesienie na opakowanie lub do dokumentu jest możliwe **wyłącznie** w przypadku niemożliwości technicznej (zbyt mały produkt) lub ze względu na charakter produktu (np. produkt sterylny, sypki). Względy estetyczne nie są uzasadnieniem dla pominięcia danych na produkcie.\n3.  **Wymóg językowy:** Ustawa wprost stanowi, że dane kontaktowe są podawane **w języku polskim**. Jest to wymóg surowszy niż w ogólnych przepisach unijnych (które mówią o języku zrozumiałym dla użytkowników). Oznacza to, że np. opis pola ("Adres:", "Producent:") powinien być zrozumiały dla polskiego odbiorcy.']

### Evaluation
Inspekcja

### Checklist
- Obecność danych i „Pojedynczy Punkt Kontaktowy”
- **Działanie:** Sprawdź tabliczkę znamionową lub nadruk na produkcie.
- **Sprawdzenie:**
    - Czy podano pełną nazwę producenta?
    - Czy podano adres fizyczny (ulica, numer, kod, miasto)?
    - *Błąd:* Podanie tylko adresu strony internetowej (`www.producent.com`) bez adresu fizycznego jest naruszeniem wymagań.
    - *Błąd:* Podanie kilku adresów bez wskazania, który z nich jest „głównym” punktem kontaktowym dla organów nadzoru.
- Weryfikacja językowa
- **Sprawdzenie:** Czy dane kontaktowe są podane w języku polskim?
    - W przypadku producentów zagranicznych, kluczowe jest, aby polski konsument i organ nadzoru mógł zidentyfikować te dane. Użycie alfabetu łacińskiego jest tu podstawą, ale zgodnie z literalnym brzmieniem ustawy, opisy pól (np. słowo "Manufacturer" vs "Producent") powinny uwzględniać wymóg języka polskiego lub być powszechnie zrozumiałe (np. powszechnie znane skróty). Wątpliwości należy rozstrzygać na korzyść bezpieczeństwa i zrozumiałości dla polskiego konsumenta.
- Lokalizacja (Uzasadnienie wyjątku)
- **Działanie:** Jeśli danych nie ma na produkcie, lecz są na opakowaniu.
- **Analiza:** Czy na produkcie faktycznie brakuje miejsca?
    - Jeśli produktem jest np. duży telewizor lub laptop, a dane producenta są tylko na kartonie – jest to **naruszenie**. Producent ma obowiązek umieścić dane trwale na urządzeniu, ponieważ opakowanie jest często wyrzucane przez użytkownika.

---

## U.22.00.1-4 Art 22 pkt 1-4 Usługi towarzyszące (Art. 22)

### Procedure
['Przepis ten wiąże jakość obsługi klienta z wymogami dostępności. Nie wystarczy, że produkt jest dostępny – użytkownik musi mieć możliwość uzyskania pomocy w jego obsłudze w sposób dostępny.\n\nAnaliza w oparciu o ustawę i normę EN 301 549 (Rozdział 12.2):\n\n1.  **Informacja o funkcjach dostępności (Klauzula 12.2.2):** Usługi wsparcia muszą posiadać wiedzę i udzielać informacji o tym, jak produkt spełnia wymogi dostępności.\n    -   *Przykład:* Konsultant infolinii bankowej musi potrafić odpowiedzieć na pytanie: "Czy aplikacja mobilna banku współpracuje z czytnikiem TalkBack?". Brak tej wiedzy lub odesłanie do ogólnej instrukcji narusza ten przepis.\n2.  **Efektywna komunikacja (Klauzula 12.2.3):** Usługi wsparcia muszą zaspokajać potrzeby komunikacyjne osób z niepełnosprawnościami, bezpośrednio lub przez punkt pośredni (np. tłumacz online). Oznacza to, że kanał wsparcia nie może być wyłącznie głosowy (tylko telefon) – musi istnieć alternatywa (czat, e-mail, wideo z PJM).\n3.  **Usługi przekazu (Art. 22 pkt 3 i Art. 13):** Jeśli usługa wsparcia polega na zapewnieniu łączności (np. usługa tłumacza migowego online dla klienta urzędu/banku), musi ona spełniać techniczne wymogi **Art. 13** ustawy (przekazywanie komunikacji głosowej, tekstowej w czasie rzeczywistym i wideo) oraz normy EN 301 549 (Rozdział 13). Kluczowa jest tu jakość i synchronizacja przekazu, aby konwersja (np. mowy na tekst) była zrozumiała.\n4.  **Dostępność dokumentacji (Klauzula 12.2.4):** Dokumentacja przekazywana przez wsparcie techniczne (np. instrukcje wysyłane mailem przez serwisanta, materiały szkoleniowe na kursie) musi być dostępna cyfrowo zgodnie z **Art. 12** (czyli spełniać WCAG/PDF UA).']

### Evaluation
Inspekcja i testy

### Checklist
- Weryfikacja wiedzy (Zgodność z 12.2.2 EN 301 549)
- **Działanie:** Skontaktuj się z pomocą techniczną lub infolinią.
- **Pytanie:** Zadaj pytanie specyficzne dla dostępności, np. "Jak włączyć napisy w państwa materiale wideo?" lub "Które bankomaty w mojej okolicy mają gniazdo słuchawkowe dla niewidomych?".
- **Sprawdzenie:** Czy pracownik posiada dostęp do bazy wiedzy o dostępności produktu i potrafi udzielić precyzyjnej informacji, czy też twierdzi, że "nie posiada takich danych"?
- Weryfikacja kanałów komunikacji (Zgodność z 12.2.3 EN 301 549)
- **Działanie:** Sprawdź stronę "Kontakt" lub "Pomoc".
- **Sprawdzenie:** Czy dla osoby głuchej (niekorzystającej z telefonu głosowego) dostępna jest alternatywna, dwukierunkowa metoda kontaktu w czasie rzeczywistym (np. czat, dedykowany numer SMS, wideoczat)?
    - *Uwaga:* Formularz kontaktowy (e-mail) często nie jest wystarczający w sytuacjach awaryjnych (np. zastrzeżenie karty), gdzie wymagana jest "efektywna komunikacja" tu i teraz.
- Weryfikacja usług szkoleniowych (Jeśli dotyczy)
- **Działanie:** Jeśli firma oferuje szkolenia z obsługi produktu (stacjonarne lub online).
- **Sprawdzenie:**
    - Czy materiały szkoleniowe (prezentacje, PDF) są dostępne cyfrowo?
    - Czy filmy instruktażowe posiadają napisy/audiodeskrypcję?
    - Czy trenerzy są przygotowani do obsługi osoby z niepełnosprawnością (np. czy wiedzą, jak udostępnić ekran osobie słabowidzącej)?
- Usługi przekazu (Zgodność z Art. 13)
*Dotyczy tylko podmiotów świadczących usługi konwersji (np. tłumacze online).*
- **Sprawdzenie:** Czy usługa zapewnia synchronizację obrazu i dźwięku (w przypadku tłumacza PJM) oraz czy tekst w czasie rzeczywistym (jeśli jest oferowany) pojawia się płynnie, umożliwiając swobodną rozmowę? (Zgodnie z wymaganiami technicznymi dla RTT i Total Conversation).

---

## U.9.01.01 U.9.01.01 Synteza mowy w terminalu (Art. 9 ust. 1 pkt 1)

### Procedure
['Terminal samoobsługowy jest traktowany jako urządzenie o **funkcjonalności zamkniętej** (Closed Functionality). Użytkownik nie może zainstalować na nim własnego oprogramowania asystującego (np. czytnika ekranu w smartfonie). Dlatego ustawodawca nakłada na producenta terminala obowiązek "wbudowania" czytnika ekranu w urządzenie.\n\nKluczowe aspekty tego przepisu to:\n1.  **Obecność technologii TTS (Text-to-Speech):** Terminal nie może polegać wyłącznie na nagranych wcześniej plikach audio (choć mogą one być używane uzupełniająco). Musi posiadać silnik syntezy mowy, który potrafi odczytać zmienne treści (np. nazwisko pasażera, saldo konta, dynamiczny rozkład jazdy).\n2.  **Zgodność językowa (Synchronizacja języka):** Zgodnie z klauzulą **C.5.1.3.14** normy EN 301 549, synteza mowy musi działać w tym samym języku, co wyświetlany interfejs. Jeśli użytkownik zmieni język na ekranie (np. z polskiego na angielski), język syntezatora mowy musi zmienić się automatycznie.\n\nBrak syntezy mowy w wybranym języku interfejsu oznacza, że terminal staje się bezużyteczny dla osoby niewidomej, która nie zna domyślnego języka urządzenia.']

### Evaluation
Inspekcja i Testy funkcjonalne

### Checklist
- Weryfikacja obecności syntezy mowy
- **Działanie:** Uruchom tryb dostępności/tryb głosowy terminala (zazwyczaj poprzez podłączenie słuchawek lub naciśnięcie dedykowanego przycisku/strefy dotykowej).
- **Sprawdzenie:** Czy terminal odczytuje na głos zawartość ekranu?
    - Należy zweryfikować, czy odczytywane są nie tylko statyczne etykiety (np. "Włóż kartę"), ale także dane dynamiczne (np. kwota transakcji, data).
- Weryfikacja zgodności języka
- **Działanie:**
    1. Zmień język interfejsu wizualnego terminala (np. wybierz język angielski lub niemiecki).
    2. Nasłuchuj komunikatów głosowych.
- **Sprawdzenie:** Czy syntezator mowy również zmienił język?
    - **Błąd:** Terminal wyświetla tekst po angielsku, ale lektor czyta go z polskim akcentem/wymową lub nadal mówi po polsku.
    - **Wymóg:** Jeśli treść jest wyświetlana w danym języku, musi być w tym samym języku odczytywana (z wyjątkiem nazw własnych i terminów technicznych nieprzetłumaczalnych).
- Zakres "Mowy" (Pokrycie interfejsu)
- **Sprawdzenie:** Czy synteza mowy obejmuje cały interfejs niezbędny do obsługi? Jeśli terminal posiada ekran dotykowy, czy dotknięcie elementu powoduje jego odczytanie? (Brak odczytu dla któregokolwiek elementu sterującego narusza ten wymóg).

---

## U.9.01.02.a U.9.01.02.a Podłączenie przewodowego stereofonicznego zestawu słuchawkowego (Art. 9 ust. 1 pkt 2 lit. a)

### Procedure
['Przepis ten nakłada na producenta terminala obowiązek zapewnienia fizycznego interfejsu audio. Jest to kluczowe dla zapewnienia **prywatności** (np. odsłuch salda konta) oraz **słyszalności** w głośnym otoczeniu miejskim.\n\nAnaliza wymogu w oparciu o normę EN 301 549:\n1.  **Przewodowość:** Ustawa wprost wymaga połączenia **przewodowego**. Obsługa słuchawek Bluetooth jest dodatkowym atutem, ale nie zwalnia z obowiązku posiadania fizycznego gniazda (gniazda jack). Jest to zawężenie wymagań normy EN 301 549, która traktuje zgodne ze standardami połączenia bezprzewodowe (jak np. Bluetooth) jako wystarczające.\n2.  **Standard przemysłowy:** Zgodnie z klauzulą **8.1.2** normy EN 301 549, połączenie musi być zgodne z niezastrzeżonym standardem przemysłowym. W kontekście terminali publicznych i klauzuli **5.1.3.2**, standardem tym jest gniazdo **3,5 mm (minijack)**. Użycie nietypowego złącza (np. tylko USB-C bez adaptera lub gniazda 2,5 mm) może być uznane za błąd, jeśli utrudnia podłączenie standardowych słuchawek posiadanych przez użytkownika.\n3.  **Stereofonia:** Wyjście musi obsługiwać dwa kanały dźwiękowe. Jest to istotne dla przestrzennego odwzorowania dźwięku, co może wspomagać orientację w interfejsie.\n4.  **Mechanizm indywidualnego słuchania:** Podłączenie słuchawek powinno automatycznie aktywować tryb prywatny, wyciszając głośniki zewnętrzne.']

### Evaluation
Inspekcja i Testy funkcjonalne

### Checklist
- Inspekcja fizyczna złącza
- **Działanie:** Obejrzyj front terminala (strefę operacyjną).
- **Sprawdzenie:**
    - Czy terminal posiada fizyczne gniazdo słuchawkowe?
    - Czy jest to standardowe gniazdo 3,5 mm?
    - Czy gniazdo jest łatwe do zlokalizowania dotykiem (np. posiada wypukły symbol słuchawek lub charakterystyczne wgłębienie, zgodnie z wymogiem dotykowym)?
- Weryfikacja sygnału i prywatności
- **Działanie:**
    1. Uruchom terminal w trybie generującym dźwięk (np. syntezę mowy).
    2. Podłącz słuchawki.
- **Sprawdzenie:**
    - Czy dźwięk pojawił się w słuchawkach?
    - Czy dźwięk w słuchawkach jest słyszalny w obu kanałach (lewy/prawy)?
    - Czy w momencie podłączenia słuchawek dźwięk z głośników zewnętrznych został **całkowicie wyciszony**? (Brak wyciszenia głośników narusza wymóg prywatności).
- Regulacja głośności w słuchawkach
- **Działanie:** Przy podłączonych słuchawkach spróbuj zmienić głośność za pomocą interfejsu (przycisków fizycznych lub ekranowych).
- **Sprawdzenie:** Czy zmiana głośności wpływa na poziom dźwięku w słuchawkach?
- **Wymóg:** Użytkownik musi mieć możliwość niezależnej regulacji głośności w trybie prywatnym.

---

## U.9.01.02.b U.9.01.02.b Dostęp do funkcji dostępności bez aktywacji (Art. 9 ust. 1 pkt 2 lit. b)

### Procedure
['Wymóg ten zapobiega sytuacjom, w których osoba z niepełnosprawnością podchodzi do urządzenia i nie może z niego skorzystać, ponieważ funkcja dostępności jest wyłączona w ustawieniach systemowych lub ukryta głęboko w menu.\n\nInterpretacja w oparciu o normę EN 301 549:\n1.  **Dostępność metody aktywacji:** Jeśli funkcja wymaga uruchomienia (np. włączenia trybu głosowego), metoda ta musi być dostępna dla osoby, która tej funkcji potrzebuje. Nie można wymagać od osoby niewidomej, aby odnalazła na ekranie dotykowym wizualne menu „Ustawienia -> Dostępność -> Włącz mowę”.\n2.  **Inicjacja sprzętowa:** W przypadku terminali publicznych (sprzętu) wyposażonych w wyjście mowy, norma wymaga istnienia **dotykowego oznaczenia** sposobu rozpoczęcia trybu mowy. Oznacza to, że uruchomienie funkcji dostępności musi odbywać się poprzez fizyczny, wyczuwalny element (np. przycisk z wypukłym symbolem, gniazdo słuchawkowe) lub w sposób niewymagający wzroku.\n3.  **Gotowość do pracy:** Funkcje muszą być dostępne natychmiast dla użytkownika końcowego. Podłączenie słuchawek powinno automatycznie uruchomić syntezę mowy (zgodnie z praktyką dla funkcjonalności zamkniętej), bez konieczności dodatkowej konfiguracji.']

### Evaluation
Inspekcja i Testy funkcjonalne

### Checklist
- Weryfikacja metody aktywacji
- **Działanie:** Podejdź do terminala w stanie spoczynku (ekran powitalny).
- **Sprawdzenie:** Czy istnieje sposób na uruchomienie funkcji dostępności (np. czytnika ekranu, powiększenia) bez konieczności korzystania ze standardowego interfejsu wizualnego?
    - Czy podłączenie słuchawek automatycznie uruchamia instrukcje głosowe?
    - Czy naciśnięcie dedykowanego przycisku fizycznego (np. na klawiaturze PIN padu lub obudowie) uruchamia tryb dostępny?
- **Błąd:** Jeśli uruchomienie trybu dla niewidomych wymaga poproszenia obsługi o „włączenie” terminala lub naciśnięcia ikony na ekranie dotykowym, której nie można odnaleźć bezwzrokowo – wymóg **nie jest spełniony**.
- Weryfikacja oznaczeń inicjujących (Dla mowy)
- **Działanie:** Zamknij oczy i zbadaj dotykiem front urządzenia.
- **Sprawdzenie:** Czy potrafisz znaleźć element służący do uruchomienia mowy?
    - Czy gniazdo słuchawkowe jest łatwo wyczuwalne?
    - Czy przycisk wywołujący pomoc/mowę ma wypukły symbol lub oznaczenie w Braille'u?
- Weryfikacja dostępności bez logowania
- **Sprawdzenie:** Czy funkcje dostępności działają **przed** włożeniem karty płatniczej lub zalogowaniem się? Użytkownik musi mieć wsparcie (np. głosowe) już na etapie ekranu powitalnego, aby wiedzieć, gdzie włożyć kartę lub jak rozpocząć transakcję.

---

## U.9.02.00 U.9.02.00 Oznaczenie klawiszy i przełączników (Art. 9 ust. 2)

### Procedure
['Wymóg ten odnosi się do dwóch kluczowych cech fizycznych elementów sterujących, niezbędnych dla osób słabowidzących (kontrast) i niewidomych (dotyk).\n\n1.  **Wystarczający kontrast:** Oznaczenia na przyciskach (litery, cyfry, symbole) muszą być wyraźnie widoczne na tle przycisku. Norma EN 301 549 w klauzuli **9.1.4.3** (odwołanie do WCAG 1.4.3) definiuje minimalny kontrast dla tekstu jako **4,5:1** (dla małego tekstu) lub **3:1** (dla dużego tekstu). Choć ten wymóg wprost dotyczy oprogramowania, w przypadku terminali należy stosować go analogicznie do oznaczeń fizycznych, aby zapewnić ich czytelność.\n2.  **Rozróżnialność dotykowa:** Zgodnie z klauzulą **C.5.5.2** normy, użytkownik musi być w stanie zidentyfikować przycisk i odróżnić go od innych bez patrzenia. Oznacza to, że przyciski muszą być wypukłe, wklęsłe, mieć różną fakturę lub być rozdzielone wyczuwalnymi odstępami. Płaski panel dotykowy (ekran dotykowy) bez nakładki fizycznej nie spełnia tego wymogu (chyba że posiada specjalne punkty orientacyjne).\n3.  **Klawiatura numeryczna (PIN Pad):** Zgodnie z klauzulą **C.8.4.1**, w standardowym układzie 12-klawiszowym (ITU), klawisz z cyfrą **„5”** musi posiadać wyczuwalny punkt orientacyjny (wypustkę), odróżniający go od pozostałych.']

### Evaluation
Inspekcja i Testy funkcjonalne

### Checklist
- Weryfikacja kontrastu
- **Działanie:** Obejrzyj klawiaturę i przyciski funkcyjne.
- **Sprawdzenie:** Czy znaki na klawiszach są wyraźne?
    - Należy ocenić, czy kolor znaku (np. biały) wyraźnie odcina się od tła przycisku (np. czarnego/szarego).
    - Przyciski metalowe z wygrawerowanymi znakami często mają niski kontrast (szary na szarym) – jeśli grawer nie jest wypełniony farbą, wymóg może **nie być spełniony**.
- Weryfikacja rozróżnialności dotykowej
- **Działanie:** Zamknij oczy i przesuń palcami po panelu sterowania.
- **Sprawdzenie:**
    - Czy jesteś w stanie wyczuć granice poszczególnych przycisków?
    - Czy przyciski funkcyjne (np. "Zatwierdź", "Anuluj") różnią się od siebie kształtem, położeniem lub fakturą? (Samo oznaczenie kolorem nie wystarczy dla osoby niewidomej).
    - Czy przyciski wystają ponad obudowę lub są wyraźnie wgłębione? Płaska naklejka membranowa bez tłoczenia jest błędem.
- Weryfikacja klawisza "5"
- **Działanie:** Znajdź dotykiem klawiaturę numeryczną.
- **Sprawdzenie:** Czy na klawiszu z cyfrą "5" znajduje się wyraźna, wypukła kropka lub kreska? Brak tego znacznika na standardowej klawiaturze numerycznej (np. PIN padzie) jest niezgodnością z normą.

---

## U.9.03.00 U.9.03.00 Informowanie o konieczności reakcji i możliwość wydłużenia czasu (Art. 9 ust. 3)

### Procedure
['Przepis ten nakłada na terminale dwa odrębne, ale powiązane obowiązki:\n\n1.  **Informowanie wielokanałowe:** Ostrzeżenie o upływającym czasie nie może być dostępne tylko dla jednego zmysłu.\n    -   Jeśli na ekranie pojawia się licznik ("Zostało 10 sekund"), informacja ta musi być równolegle przekazana dźwiękowo (komunikat głosowy lub charakterystyczny sygnał dźwiękowy) dla osób niewidomych.\n    -   Jeśli ostrzeżenie jest dźwiękowe, musi być równolegle widoczne na ekranie dla osób niesłyszących.\n2.  **Możliwość wydłużenia czasu:** Użytkownik, który potrzebuje więcej czasu (ze względu na ograniczenia motoryczne lub poznawcze), musi mieć możliwość zatrzymania licznika lub dodania czasu.\n    -   Zgodnie z klauzulą **11.2.2.1** normy EN 301 549 (Dostosowanie czasu), terminal powinien ostrzec użytkownika przed upływem czasu i dać mu co najmniej **20 sekund** na wykonanie prostej czynności (np. naciśnięcie dowolnego klawisza), która wydłuży limit (zazwyczaj co najmniej dziesięciokrotnie).']

### Evaluation
Inspekcja i Testy funkcjonalne

### Checklist
- Weryfikacja wielokanałowości powiadomienia
-   **Działanie:** Rozpocznij transakcję i przestań wykonywać jakiekolwiek akcje. Czekaj na moment, w którym terminal ma zamiar przerwać sesję.
-   **Sprawdzenie:** Czy w momencie pojawienia się ostrzeżenia (np. "Czy chcesz więcej czasu?"):
    -   Pojawił się komunikat wizualny na ekranie?
    -   Wygenerowany został sygnał dźwiękowy lub komunikat głosowy słyszalny przez głośnik lub słuchawki?
-   **Interpretacja:** Jeśli terminal tylko wyświetla odliczanie, ale milczy – wynik jest **NEGATYWNY**. Jeśli tylko piszczy, ale nie wyświetla komunikatu – wynik jest **NEGATYWNY**.
- Weryfikacja mechanizmu wydłużania czasu
-   **Działanie:** Gdy pojawi się ostrzeżenie o upływie czasu, spróbuj je zatrzymać.
-   **Sprawdzenie:**
    -   Czy interfejs jasno wskazuje, co należy zrobić, aby przedłużyć czas (np. "Naciśnij TAK, aby kontynuować")?
    -   Czy wykonanie tej akcji faktycznie resetuje licznik i pozwala dokończyć transakcję bez ponownego logowania?
    -   Czy czas na reakcję (od momentu pojawienia się ostrzeżenia do wylogowania) wynosi co najmniej **20 sekund**? Krótszy czas może uniemożliwić reakcję osobie z niepełnosprawnością ruchową.
- Metoda interakcji**
-   **Sprawdzenie:** Czy wydłużenie czasu wymaga skomplikowanych gestów? Powinno być możliwe za pomocą prostego naciśnięcia fizycznego klawisza lub dotknięcia wyraźnego pola na ekranie (zgodnie z wymogami motorycznymi).

---

## U.9.04.00 U.9.04.00 Kompatybilność elementów dźwiękowych z narzędziami wspomagającymi (Art. 9 ust. 4)

### Procedure
['Wymóg ten koncentruje się na **interoperacyjności** terminala z aparatami słuchowymi (zarówno tymi z cewką indukcyjną, jak i procesorami implantów ślimakowych) oraz innymi osobistymi wzmacniaczami dźwięku. Nie chodzi tu tylko o głośność (uregulowaną w art. 8), ale o fizyczną i elektromagnetyczną zdolność terminala do przekazania czystego sygnału do urządzenia użytkownika.\n\nKluczowe aspekty techniczne:\n1.  **Sprzężenie magnetyczne (Pętla indukcyjna):** Zgodnie z klauzulą **8.2.2.1** normy EN 301 549, terminale stacjonarne posiadające słuchawkę (np. domofony, kioski z telefonem) lub generujące mowę powinny zapewniać sprzężenie magnetyczne (tzw. cewkę T). Pozwala to na bezpośrednie przesyłanie dźwięku do aparatu słuchowego, eliminując hałas otoczenia.\n2.  **Standardowe złącza:** Aby zapewnić kompatybilność z zewnętrznymi narzędziami wzmacniającymi (np. osobistymi wzmacniaczami dźwięku podłączanymi kablem), terminal musi wykorzystywać standardowe, niezastrzeżone formaty połączeń (np. gniazdo minijack, USB, Bluetooth), zgodnie z klauzulą **8.1.2**.\n3.  **Brak zakłóceń:** Terminal nie może emitować pola elektromagnetycznego, które powodowałoby "buczenie" lub zakłócenia w aparatach słuchowych, uniemożliwiając zrozumienie komunikatu.']

### Evaluation
Inspekcja i Testy funkcjonalne

### Checklist
- Weryfikacja sprzężenia magnetycznego (Dla aparatów słuchowych)
- **Działanie:**
    1. Sprawdź, czy terminal jest oznaczony symbolem "T" (oznaczającym obecność pętli indukcyjnej/cewki telefonicznej).
    2. Użyj testera pętli indukcyjnej (odbiornika pola magnetycznego). Zbliż go do źródła dźwięku (głośnika lub słuchawki).
- **Sprawdzenie:** Czy tester wykrywa silny i wyraźny sygnał magnetyczny zsynchronizowany z dźwiękiem?
- **Wymóg:** Sygnał musi spełniać parametry techniczne określone w normie ETSI ES 200 381-1 (siła pola, pasmo przenoszenia).
- Weryfikacja standardowych połączeń (Interoperacyjność)
- **Działanie:** Dokonaj inspekcji dostępnych portów audio.
- **Sprawdzenie:**
    - Czy porty służące do podłączenia audio (np. słuchawek) są w standardzie powszechnym (np. Jack 3.5mm, USB)?
    - Czy wymagają stosowania niestandardowych, producenckich przejściówek, które nie są powszechnie dostępne na rynku? (Wymaganie standardu niezastrzeżonego).
- Weryfikacja zakłóceń**
- **Działanie:** Przeprowadź próbę odsłuchową za pomocą aparatu słuchowego ustawionego w tryb "T" lub testera.
- **Sprawdzenie:** Czy oprócz pożądanego sygnału audio słychać głośne buczenie, trzaski lub pisk pochodzący z elektroniki terminala (np. ekranu)? Czystość sygnału jest kluczowa dla kompatybilności.

---

## U.10.01.00 U.10.01.00 Synteza mowy w czytniku książek elektronicznych (Art. 10)

### Procedure
['Art. 10 nakłada na czytniki e-booków specyficzny wymóg dodatkowy, wykraczający poza ogólne zasady dostępności z Art. 8.\n\nKluczowe aspekty interpretacyjne:\n1.  **Technologia Syntezy Mowy (TTS):** Czytnik nie może polegać wyłącznie na odtwarzaniu gotowych audiobooków. Musi posiadać wbudowany silnik TTS (Text-to-Speech), który potrafi przetworzyć tekst na mowę w czasie rzeczywistym.\n2.  **Język interfejsu:** Jest to kluczowy parametr zgodności (odwołanie do klauzuli **5.1.3.14** normy EN 301 549). Jeśli użytkownik ustawi język menu na polski, czytnik musi „mówić” po polsku. Jeśli zmieni język na angielski, synteza mowy musi automatycznie przełączyć się na język angielski.\n3.  **Zakres działania:** Przepis mówi o wyposażeniu czytnika w technologię syntezy mowy. W powiązaniu z Art. 8 (dostępność interfejsu), TTS musi obsługiwać nie tylko treść książki, ale także **menu urządzenia, ustawienia i nawigację**. Czytnik, który czyta książkę, ale nie pozwala osobie niewidomej samodzielnie tej książki wybrać z listy, nie spełnia wymogów ustawy.']

### Evaluation
Inspekcja i Testy funkcjonalne

### Checklist
- Weryfikacja obecności i języka TTS
- **Działanie:**
    1. Uruchom czytnik i wejdź w ustawienia.
    2. Ustaw język interfejsu na polski.
    3. Uruchom funkcję czytania na głos (VoiceOver, TalkBack lub dedykowany TTS).
- **Sprawdzenie:** Czy komunikaty systemowe i treść przykładowej książki są odczytywane poprawnie po polsku?
- **Działanie (Kontrola krzyżowa):** Zmień język interfejsu na inny (np. angielski).
- **Sprawdzenie:** Czy język syntezatora mowy zmienił się adekwatnie do języka interfejsu? (Brak zmiany języka mowy przy zmianie języka menu jest błędem).
- Weryfikacja zakresu obsługi (Menu i Treść)
- **Działanie:** Spróbuj obsłużyć urządzenie bez patrzenia na ekran (lub z zasłoniętym ekranem), korzystając wyłącznie z syntezy mowy.
- **Sprawdzenie:**
    - Czy słyszysz nazwy pozycji w menu głównym?
    - Czy słyszysz tytuły książek w bibliotece?
    - Czy słyszysz stan baterii i ustawienia?
- **Interpretacja:** Jeśli TTS działa tylko wewnątrz otwartej książki, a milczy w menu głównym – produkt **nie spełnia** wymagań dostępności (brak samodzielności obsługi).
- Prywatność i Głośność
- **Działanie:** Podłącz słuchawki (przewodowe lub Bluetooth).
- **Sprawdzenie:**
    - Czy dźwięk syntezatora został przekierowany do słuchawek?
    - Czy głośnik zewnętrzny został wyciszony? (Ochrona prywatności czytanej treści).
    - Czy można regulować głośność i szybkość czytania?

---

## U.11.00.01.a-01 U.11.00.01.a-01 Komunikacja tekstowa w czasie rzeczywistym i dźwięk Hi‑Fi (Art. 11 pkt 1 lit. a tiret pierwsze)

### Procedure
['Przepis ten nakłada dwa konkretne wymogi technologiczne na urządzenia służące do komunikacji:\n\n1.  **Komunikacja tekstowa w czasie rzeczywistym (RTT - Real-Time Text):**\n    -   RTT różni się od standardowego czatu czy SMS-ów. W RTT tekst jest przesyłany i wyświetlany **znak po znaku** w trakcie pisania, a nie dopiero po naciśnięciu "Wyślij".\n    -   Zgodnie z klauzulą **6.2.1.2** normy EN 301 549, urządzenie musi umożliwiać jednoczesne przesyłanie głosu i tekstu RTT w ramach jednego połączenia. Pozwala to osobom niesłyszącym lub słabosłyszącym na płynną interakcję, przerwanie rozmówcy i natychmiastową reakcję, co jest kluczowe np. w połączeniach alarmowych 112.\n    -   Opóźnienie transmisji nie może przekraczać **500 ms** (pół sekundy) od momentu wprowadzenia znaku.\n\n2.  **Dźwięk jakości Hi-Fi:**\n    -   W kontekście usług telekomunikacyjnych i normy EN 301 549 (klauzula **6.1**), termin ten odnosi się do **dźwięku szerokopasmowego** (często nazywanego *HD Voice*).\n    -   Urządzenie musi być zdolne do kodowania i dekodowania dźwięku w paśmie częstotliwości z górną granicą co najmniej **7 000 Hz**. Jest to niezbędne dla rozróżnialności głosek syczących i szumiących (np. odróżnienie "s" od "f"), co jest krytyczne dla osób słabosłyszących.']

### Evaluation
Inspekcja i Testy funkcjonalne

### Checklist
- Weryfikacja RTT (Funkcjonalność i Opóźnienie)
- **Działanie:**
    1. Nawiąż połączenie głosowe z innym urządzeniem obsługującym RTT (urządzeniem referencyjnym).
    2. W trakcie trwania połączenia głosowego zacznij wprowadzać tekst w oknie rozmowy.
- **Sprawdzenie:**
    -   Czy tekst pojawia się na urządzeniu odbiorczym niemal natychmiast (znak po znaku), w czasie krótszym niż 0,5 sekundy?
    -   Czy wysyłanie tekstu nie przerywa połączenia głosowego? (Muszą działać jednocześnie).
    -   Czy tekst wysyłany i odbierany jest wizualnie rozróżnialny (np. po różnych stronach ekranu)?.
-   **Uwaga:** Standardowy czat (Instant Messaging), w którym tekst pojawia się dopiero po zatwierdzeniu całej wiadomości, **nie spełnia** definicji RTT.
- Weryfikacja jakości dźwięku (Hi-Fi / Wideband Audio)
- **Działanie:** Sprawdź specyfikację techniczną urządzenia oraz ustawienia połączeń.
- **Sprawdzenie:**
    -   Czy urządzenie obsługuje kodeki szerokopasmowe (np. G.722, AMR-WB)?.
    -   Czy urządzenie jest w stanie przetwarzać pasmo częstotliwości do 7000 Hz?
-   **Interpretacja:** Jeśli urządzenie obsługuje tylko standardowe pasmo telefoniczne (300–3400 Hz), wymóg **nie jest spełniony**.
- Interoperacyjność
- **Sprawdzenie:** Czy RTT działa nie tylko wewnątrz własnego ekosystemu producenta (np. tylko między dwoma telefonami tej samej marki), ale korzysta ze standardów umożliwiających połączenie z innymi sieciami (np. po protokole SIP/IMS)?.

---

## U.11.00.01.a-02 U.11.00.01.a-02 Transmisja wideo — pełna konwersacja (Art. 11 pkt 1 lit. a tiret drugie)

### Procedure
['Wymóg ten obliguje do zapewnienia standardu **Pełnej Konwersacji (Total Conversation).\n\nZgodnie z definicją ustawową (**Art. 5 pkt 19**) oraz normą EN 301 549, pełna konwersacja to nie tylko wideorozmowa. To jednoczesny przesył trzech strumieni danych:\n1.  **Wideo:** O rozdzielczości wystarczającej do komunikacji w polskim języku migowym (PJM).\n2.  **Głos:** Dźwięk w czasie rzeczywistym.\n3.  **Tekst w czasie rzeczywistym (RTT):** Przesyłanie znak po znaku.\n\nWszystkie trzy strumienie muszą być zsynchronizowane. Jest to kluczowe dla osób niesłyszących (używających PJM lub czytających z ruchu warg) oraz słabosłyszących (wspierających się tekstem RTT).\n\nWymogi techniczne wg normy EN 301 549 (Rozdział 6.5):\n-   **Rozdzielczość (Klauzula 6.5.2):** Minimum QCIF (rzadko używane), ale dla użyteczności w języku migowym wymagane jest co najmniej **QVGA (320x240)**, a zalecane **VGA (640x480)** lub wyższe.\n-   **Płynność (Klauzula 6.5.3):** Częstotliwość odświeżania musi wynosić co najmniej **20 klatek na sekundę (FPS)**. Niższa wartość powoduje rozmycie ruchu rąk, uniemożliwiając zrozumienie języka migowego.\n-   **Synchronizacja (Klauzula 6.5.4):** Opóźnienie między dźwiękiem a obrazem (ruchem warg) nie może przekraczać **100 ms**. Desynchronizacja uniemożliwia czytanie z ruchu warg.']

### Evaluation
Inspekcja i Testy funkcjonalne

### Checklist
- Weryfikacja trójmodalności (Pełna konwersacja)
- **Działanie:** Nawiąż połączenie wideo.
- **Sprawdzenie:** Czy w trakcie trwania połączenia wideo i audio możliwe jest jednoczesne wysyłanie tekstu (RTT)?
- **Wynik:** Jeśli uruchomienie czatu/tekstu powoduje zatrzymanie wideo lub wyciszenie audio, urządzenie **nie umożliwia** pełnej konwersacji. Wszystkie trzy kanały muszą działać symultanicznie.
- Weryfikacja jakości dla języka migowego
- **Działanie:** Przeprowadź testową rozmowę w języku migowym (lub wykonuj szybkie ruchy dłońmi przed kamerą).
- **Sprawdzenie:**
    - Czy obraz jest płynny (brak klatkowania)? Wymagane min. 20 FPS.
    - Czy rozdzielczość pozwala rozróżnić kształt palców i mimikę twarzy? Wymagane min. QVGA.
- **Interpretacja:** Jeśli obraz jest "rozpikselowany" lub zacina się przy szybkich ruchach rąk, urządzenie nie spełnia wymogu obsługi PJM.
- Weryfikacja synchronizacji (Czytanie z ruchu warg)
- **Działanie:** Obserwuj ruch warg rozmówcy i słuchaj dźwięku.
- **Sprawdzenie:** Czy dźwięk słychać dokładnie w momencie poruszania wargami? Opóźnienie powyżej 0,1 sekundy jest zauważalne i dyskwalifikujące dla czytania z ruchu warg.
- Identyfikacja mówcy w wideo
- **Sprawdzenie:** Czy w przypadku konferencji wieloosobowej urządzenie wskazuje wizualnie, która osoba (okno wideo) aktualnie nadaje dźwięk lub "miga"? Jest to niezbędne dla orientacji osoby niesłyszącej w dyskusji.

---

## U.11.00.01.b-01 U.11.00.01.b-01 Połączenia z narzędziami wspomagającymi wzmacniającymi dźwięk (Art. 11 pkt 1 lit. b)

### Procedure
['Wymóg ten dotyczy zapewnienia interoperacyjności urządzenia z osobistymi urządzeniami audio używanymi przez osoby słabosłyszące (np. aparaty słuchowe, implanty ślimakowe, słuchawki wzmacniające, pętle indukcyjne na szyję).\n\nW kontekście normy EN 301 549 należy to interpretować dwutorowo:\n1.  **Standardowe połączenia bezprzewodowe:** Zgodnie z klauzulą **8.1.2**, urządzenie musi udostępniać co najmniej jedno połączenie zgodne z niezastrzeżonym standardem przemysłowym. W przypadku technologii bezprzewodowych standardem tym jest obecnie najczęściej **Bluetooth**. Umożliwia to podłączenie zewnętrznych wzmacniaczy dźwięku lub streamerów audio.\n2.  **Kompatybilność z aparatami słuchowymi (HAC):** Zgodnie z klauzulą **8.2.2.2**, urządzenia bezprzewodowe przykładane do ucha muszą zapewniać sprzężenie magnetyczne z aparatami słuchowymi (spełniając wymagania normy ETSI ES 200 381-2 lub ANSI/IEEE C63.19) [5]. Oznacza to, że smartfon powinien być w stanie przesłać dźwięk bezpośrednio do aparatu słuchowego (np. przez cewkę T lub protokoły typu ASHA/MFi) bez zakłóceń.\n\nTermin „narzędzia wspomagające wzmacniające dźwięk” obejmuje szeroką gamę rozwiązań, od prostych słuchawek Bluetooth po zaawansowane systemy transmisji bezpośredniej do implantu.']

### Evaluation
Inspekcja i Testy funkcjonalne

### Checklist
- Weryfikacja łączności Bluetooth (Standard przemysłowy)
- **Działanie:**
    1. Uruchom tryb parowania w urządzeniu (np. Bluetooth).
    2. Spróbuj połączyć urządzenie z zewnętrznym systemem audio (np. bezprzewodowym zestawem słuchawkowym, pętlą indukcyjną Bluetooth, streamerem do aparatu słuchowego).
- **Sprawdzenie:**
    - Czy urządzenie wykrywa akcesorium?
    - Czy parowanie przebiega pomyślnie bez konieczności instalowania niestandardowych sterowników?
    - Czy dźwięk połączenia telefonicznego jest automatycznie przekierowywany do połączonego urządzenia?
- Weryfikacja jakości dźwięku i braku zakłóceń
- **Działanie:** Nawiąż połączenie głosowe przy użyciu podłączonego bezprzewodowo zestawu.
- **Sprawdzenie:**
    - Czy dźwięk w narzędziu wspomagającym jest czysty i zrozumiały?
    - Czy występują istotne opóźnienia (latencja), które utrudniałyby prowadzenie rozmowy (desynchronizacja ruchu warg z dźwiękiem)?
    - Czy występują zakłócenia elektromagnetyczne (buczenie, piski) wynikające z pracy anteny urządzenia? (Wymóg ten jest ściśle powiązany z *lit. c* tego samego artykułu ustawy, mówiącym o unikaniu zakłóceń).

---

## U.11.00.01.c-01 U.11.00.01.c-01 Unikanie zakłóceń podczas współpracy z narzędziami wspomagającymi (Art. 11 pkt 1 lit. c)

### Procedure
['Wymóg ten dotyczy **Kompatybilności Elektromagnetycznej (EMC)** pomiędzy urządzeniem nadawczym (smartfonem) a urządzeniem wspomagającym (np. aparatem słuchowym lub implantem ślimakowym).\n\nZgodnie z normą **EN 301 549**, klauzula **8.2.2.2** (Urządzenia do komunikacji bezprzewodowej), urządzenie musi zapewniać współpracę z technologiami wspomagającymi słyszenie bez wprowadzania uciążliwych zakłóceń.\n1.  **Zakłócenia RF (Radio Frequency):** Transmisja komórkowa generuje pole elektromagnetyczne. Jeśli nie jest ono odpowiednio kontrolowane, indukuje w obwodach aparatu słuchowego słyszalne „buczenie”, trzaski lub pisk, uniemożliwiając rozmowę. Unikanie zakłóceń oznacza, że poziom emisji RF w pobliżu głośnika słuchawki jest na tyle niski, by nie zakłócać pracy aparatu.\n2.  **Standardy HAC (Hearing Aid Compatibility):** Norma odsyła do standardu **ANSI/IEEE C63.19**, lub równoważnych, które klasyfikują urządzenia pod kątem poziomu generowanych zakłóceń (klasyfikacja M – Microphone) oraz siły sygnału magnetycznego (klasyfikacja T – Telecoil).\n\nWymóg „unikania zakłóceń” należy zatem rozumieć jako spełnienie parametrów technicznych minimalizujących interferencję RF (ocena M3 lub M4 według standardu ANSI).']

### Evaluation
Inspekcja i Testy funkcjonalne

### Checklist
- Weryfikacja klasyfikacji HAC (Dokumentacja)
- **Działanie:** Sprawdź specyfikację techniczną urządzenia lub instrukcję użytkownika pod kątem sekcji „Dostępność” lub „Hearing Aid Compatibility”.
- **Sprawdzenie:**
    - Czy urządzenie posiada deklarację zgodności z normą ANSI C63.19?
    - Czy urządzenie posiada ocenę odporności na zakłócenia RF na poziomie co najmniej **M3** (lub wyższym: M4)?
    - *Interpretacja:* Brak oceny M3/M4 oznacza wysokie ryzyko, że urządzenie będzie generować zakłócenia słyszalne w aparacie słuchowym.
- Test interferencji audio (Fizyczny)
- **Warunki:** Test należy przeprowadzić w miejscu o niskim poziomie tła elektromagnetycznego.
- **Działanie:**
    1. Ustaw aparat słuchowy (lub tester pętli indukcyjnej) w tryb mikrofonowy (M) i zbliż go do urządzenia nawiązującego połączenie głosowe (LTE/GSM).
    2. Nasłuchuj charakterystycznych dźwięków transmisji danych (rytmiczne „terkotanie”, buczenie).
- **Sprawdzenie:** Czy zakłócenia są na tyle głośne, że zagłuszają mowę rozmówcy?
- **Wymóg:** Urządzenie powinno minimalizować te zakłócenia poprzez odpowiednie ekranowanie anten i komponentów audio.
- Mechanizmy redukcji zakłóceń (Oprogramowanie)**
- **Działanie:** Sprawdź ustawienia dostępności w menu urządzenia.
- **Sprawdzenie:** Czy istnieje opcja „Tryb aparatu słuchowego” (Hearing Aid Mode)?
    - Włączenie tej opcji często zmienia parametry pracy nadajnika radiowego lub charakterystykę audio, aby zminimalizować interferencje. Obecność i skuteczność tej funkcji potwierdza spełnienie wymogu unikania zakłóceń.

---

## U.11.00.02 U.11.00.02 Udogodnienia audiowizualne: audiodeskrypcja, napisy i tłumaczenie na język migowy (Art. 11 pkt 2)

### Procedure
['Wymóg ten obliguje producenta sprzętu do zapewnienia warstwy technicznej umożliwiającej odbiór **udogodnień dla osób z niepełnosprawnościami**. Kluczowe dla interpretacji tego przepisu jest odwołanie do **Art. 4 pkt 28 ustawy o radiofonii i telewizji**, który definiuje te udogodnienia jako:\n\n> *„Element dźwiękowy lub graficzny zawarty w audycji lub rozpowszechniany równocześnie z nią, którego celem jest zapewnienie osobom z niepełnosprawnościami wzroku oraz osobom z niepełnosprawnościami słuchu możliwości zapoznania się z audycją w szczególności w formie napisów dla niesłyszących lub audiodeskrypcji, a także tłumaczenia na język migowy.”*\n\nW oparciu o tę definicję oraz normę **EN 301 549** (Rozdział 7), urządzenie końcowe musi obsługiwać technicznie trzy rodzaje strumieni danych towarzyszących audycji:\n\n1.  **Element graficzny – Napisy dla niesłyszących (Captions):**\n    -   Urządzenie musi potrafić zdekodować i wyświetlić napisy (klauzula 7.1.1).\n    -   Zgodnie z definicją, są one rozpowszechniane równocześnie, co wymusza na urządzeniu zapewnienie **synchronizacji** z dźwiękiem (klauzula 7.1.2).\n    -   Urządzenie musi umożliwiać **personalizację** elementu graficznego (zmiana wielkości, koloru czcionki – klauzula 7.1.4), aby zapewnić czytelność dla osób słabowidzących.\n\n2.  **Element dźwiękowy – Audiodeskrypcja (Audio Description):**\n    -   Urządzenie musi umożliwiać wybór dodatkowej ścieżki dźwiękowej lub strumienia audio zawierającego narrację opisową (klauzula 7.2.1).\n    -   Urządzenie musi pozwalać na sterowanie tym elementem (włączanie/wyłączanie, głośność) niezależnie od głównej ścieżki dźwiękowej, o ile standard nadawania na to pozwala.\n\n3.  **Element graficzny – Tłumaczenie na język migowy:**\n    -   Choć norma EN 301 549 w rozdziale 7 nie wydziela osobnej klauzuli technicznej dla "odbioru" języka migowego w TV (traktując go jako część wideo), definicja ustawowa wprost wskazuje go jako udogodnienie.\n    -   Urządzenie musi być zdolne do wyświetlenia tego elementu, jeśli jest on nadawany jako oddzielny strumień wideo lub element nakładany (np. w standardzie HbbTV), bez obcinania obrazu (overscan) w miejscu, gdzie znajduje się tłumacz.\n\n4.  **Sterowanie (User Controls):**\n    -   Dostęp do wyboru tych elementów (napisów, audiodeskrypcji) musi być prosty. Zgodnie z klauzulą **7.3**, aktywacja udogodnień powinna odbywać się na tym samym poziomie interakcji co sterowanie głośnością lub zmianą kanału.']

### Evaluation
Inspekcja i Testy funkcjonalne

### Checklist
- Weryfikacja obsługi napisów (Element graficzny)
- **Działanie:** Uruchom materiał wideo zawierający ścieżkę napisów dla niesłyszących.
- **Sprawdzenie:**
    - Czy istnieje mechanizm włączenia napisów?
    - Czy napisy są zsynchronizowane z dźwiękiem?
    - **Personalizacja:** Czy użytkownik może zmienić wygląd elementu graficznego (rozmiar czcionki, kontrast), aby dostosować go do swoich potrzeb wzrokowych?
- Weryfikacja obsługi audiodeskrypcji (Element dźwiękowy)
- **Działanie:** Uruchom materiał posiadający dedykowaną ścieżkę audiodeskrypcji.
- **Sprawdzenie:**
    - Czy urządzenie wykrywa ten element dźwiękowy i pozwala go wybrać?
    - Czy audiodeskrypcja jest odtwarzana równocześnie z audycją?
    - Czy sterowanie tym elementem (wybór) jest dostępne dla użytkownika?
- Weryfikacja dostępności sterowania
- **Działanie:** Sprawdź, jak głęboko w menu znajduje się opcja włączenia napisów lub audiodeskrypcji.
- **Wymóg:** Dostęp do "elementów dźwiękowych lub graficznych" wspierających osoby z niepełnosprawnościami nie może być trudniejszy niż dostęp do podstawowych funkcji (głośność, kanał). Jeśli pilot posiada dedykowany przycisk do Netflixa, a włączenie audiodeskrypcji wymaga 5 kliknięć w menu – jest to potencjalna niezgodność w zakresie "łatwego dostępu i sterowania".
- Współpraca z narzędziami wspomagającymi
- **Sprawdzenie:** Czy menu wyboru udogodnień (napisów/języka) jest odczytywane przez wbudowany w urządzenie czytnik ekranu (Voice Guide/TalkBack itp.)? Jest to niezbędne, aby osoba niewidoma mogła samodzielnie uruchomić audiodeskrypcję.

---

## U.12.01 U.12.01 Dostępność produktów wykorzystywanych do świadczenia usług (Art. 12 ust. 1)

### Procedure
['Przepis ten przenosi odpowiedzialność za dostępność sprzętu i oprogramowania na podmiot świadczący usługę. Usługodawca nie może zasłaniać się tym, że "kupił gotowy produkt". Ma prawny obowiązek wykorzystywać wyłącznie takie produkty, które spełniają wymogi z Art. 7–11.\n\nInterpretacja w kontekście normy EN 301 549 i ustawy:\n1.  **Zgodność produktowa:** Usługodawca nie może wykorzystywać w nowej usłudze terminala lub urządzenia, które nie spełnia wymogów z **art. 7** (informacja o produkcie), **art. 8** (interfejs użytkownika/funkcjonalność), oraz odpowiednio **art. 9, 10 lub 11** (wymogi specyficzne dla typu urządzenia) lub ewentualnie wymogów funkcjonalnych pisanych w **art. 19**.\n2.  **Odpowiedzialność za konfigurację:** Nawet jeśli produkt (np. kiosk informacyjny) jest fabrycznie zdolny do bycia dostępnym (posiada gniazdo słuchawkowe, syntezator mowy), ale usługodawca wdroży na nim oprogramowanie, które blokuje te funkcje lub nie obsługuje ich poprawnie (naruszenie **art. 8 pkt 5 lit. d** – łączenie z narzędziami wspomagającymi), dochodzi do naruszenia Art. 12 ust. 1.\n3.  **Zakres podmiotowy:** Obowiązek dotyczy produktu "wykorzystywanego". Oznacza to np., że jeśli bank (usługodawca) udostępnia klientowi aplikację na tablecie w oddziale, tablet ten musi spełniać wymogi dostępności. Jeśli klient korzysta z własnego tabletu w domu – przepis Art. 12 ust. 1 nie nakłada na bank obowiązku wymiany tabletu klienta, lecz zapewnia dostępność samej usługi cyfrowej (bankowości).\n\nAnaliza powinna przebiegać w dwóch krokach:\n1.  **Identyfikacja ogniw usługi:** Należy ustalić, jakie urządzenia lub oprogramowanie są niezbędne użytkownikowi do skorzystania z usługi (np. aby wypłacić gotówkę [usługa], klient musi użyć bankomatu [produkt]; aby przeczytać e-booka [usługa], musi użyć aplikacji lub czytnika [produkt]).\n2.  **Weryfikacja kaskadowa:**\n    -   Jeśli produktem jest **Terminal** (bankomat, biletomat, terminal płatniczy) – musi spełniać wymogi **Art. 9**.\n    -   Jeśli produktem jest **Czytnik e-booków** – musi spełniać wymogi **Art. 10**.\n    -   Jeśli produktem jest **Urządzenie konsumenckie** (np. router, modem, dekoder) – musi spełniać wymogi **Art. 11**.\n    -   Każdy z powyższych musi dodatkowo spełniać ogólne wymogi dla produktów z **Art. 7** (informacja) i **Art. 8** (interfejs użytkownika, funkcjonalność).']

### Evaluation
Analiza i inspekcja

### Checklist
- Inwentaryzacja produktów w procesie usługi
- **Działanie:** Sporządź listę wszystkich punktów styku (touchpoints) klienta z usługą, które są urządzeniami technicznymi lub oprogramowaniem.
- **Sprawdzenie:** Czy zidentyfikowane produkty znajdują się w wykazie z Art. 3 ust. 1 ustawy?
    - *Przykład:* Bankomat – TAK (jest terminalem samoobsługowym).
    - *Przykład:* Ekspres do kawy w oddziale banku – NIE (nie jest terminalem w rozumieniu ustawy, mimo że służy klientom).
- Weryfikacja certyfikacji i zgodności (Art. 7-11)
- **Działanie:** Dla każdego zidentyfikowanego produktu sprawdź posiadanie Deklaracji Zgodności z wymaganiami dostępności (zgodnie z Art. 23 i 24 ustawy).
- **Sprawdzenie:** Czy usługodawca posiada dokumentację potwierdzającą, że wykorzystywane terminale/urządzenia spełniają normę EN 301 549 (odpowiednie rozdziały, np. Rozdział 8 dla sprzętu, Rozdział 11 dla oprogramowania)?.
- **Przykład niespełnienia wymagań:** Wykorzystywanie w nowej usłudze terminali starszego typu, które nie posiadają np. gniazda słuchawkowego (naruszenie Art. 9 ust. 1 pkt 2) lub syntezy mowy (naruszenie Art. 9 ust. 1 pkt 1), jest bezpośrednim naruszeniem Art. 12 ust. 1.
- Weryfikacja kompletności łańcucha dostępności
- **Działanie:** Sprawdź, czy produkt umożliwia realizację głównego celu usługi osobie z niepełnosprawnością.
- **Analiza:** Czy bariery w produkcie (np. brak obsługi bezwzrokowej w terminalu płatniczym) uniemożliwiają skuteczne skorzystanie z usługi (dokonanie płatności)? Zgodnie z ustawą, produkt musi zapewniać samodzielność obsługi (chyba że zastosowano Art. 21 dotyczący nieproporcjonalnego obciążenia).
- Analiza wyjątków (Data wdrożenia)
Jeśli produkt nie spełnia wymagań, sprawdź datę jego instalacji/uruchomienia.
*   Jeśli terminal zainstalowano przed 28.06.2025 – sprawdź, czy mieści się w okresie ochronnym (do 20 lat użyteczności) zgodnie z art. 85 ust. 3.

---

## U.12.02.01.a U.12.02.01.a Informacje o produktach wykorzystywanych w świadczeniu usługi — dostępność i interoperacyjność (Art. 12 ust. 2 pkt 1 lit. a)

### Procedure
['Wymóg ten obliguje usługodawcę do zapewnienia **redundancji sensorycznej** w przekazywaniu informacji. Informacja nie może być dostępna wyłącznie dla jednego zmysłu (np. tylko wzroku lub tylko słuchu).\n\nAnaliza prawno-techniczna:\n1.  **Zakres informacji:** Zgodnie z ustawą, informacja musi obejmować nie tylko opis samej usługi, ale także:\n    *   Wskazanie, jak produkt (np. bankomat) łączy się z usługą (wypłata gotówki).\n    *   Opis funkcji dostępności produktu (np. "Bankomat posiada tryb głosowy").\n    *   Opis interoperacyjności (np. "Urządzenie współpracuje ze słuchawkami minijack").\n2.  **Więcej niż jeden kanał sensoryczny:**\n    *   **Dla informacji elektronicznej:** Dokument cyfrowy (PDF, HTML) spełnia ten wymóg, jeśli jest zgodny ze standardem dostępności (WCAG/EN 301 549 Rozdział 9 lub 10). Tekst cyfrowy jest postrzegalny wzrokiem, a dzięki czytnikom ekranu (technologii asystującej) staje się postrzegalny słuchem (Text-to-Speech) lub dotykiem (monitor brajlowski).\n    *   **Dla informacji papierowej:** Tradycyjny druk jest jednokanałowy (tylko wzrok). Aby spełnić wymóg ustawy, usługodawca musi zapewnić alternatywę, np. kod QR prowadzący do dostępnej wersji cyfrowej, wersję w Braille\'u (dotyk) lub zapewnić odczytanie informacji przez personel (słuch).\n3.  **Cel:** Użytkownik niewidomy, niesłyszący lub głuchoniewidomy musi mieć możliwość samodzielnego zapoznania się z instrukcją obsługi terminala lub regulaminem usługi przed skorzystaniem z niej.']

### Evaluation
Inspekcja i weryfikacja dokumentacji

### Checklist
- Weryfikacja dostępności dokumentacji elektronicznej
- **Działanie:** Pobierz regulamin usługi lub instrukcję korzystania z terminala ze strony www usługodawcy.
- **Sprawdzenie:**
    - Czy dokument jest dostępny dla czytników ekranu (nie jest skanem obrazkowym)?
    - Czy struktura dokumentu (nagłówki) pozwala na nawigację bezwzrokową?
    - *Interpretacja:* Prawidłowo przygotowany dokument cyfrowy automatycznie zapewnia "drugi kanał sensoryczny" poprzez technologie asystujące.
- Weryfikacja informacji w miejscu świadczenia usługi (Papier/Fizycznie)
- **Działanie:** Udaj się do placówki lub punktu samoobsługowego.
- **Sprawdzenie:**
    - Czy obok instrukcji wizualnej (np. naklejki na bankomacie) znajduje się alternatywa?
    - Czy dostępne są kody QR lub tagi NFC, które po zeskanowaniu telefonem odczytają treść instrukcji (przekształcenie wzroku na słuch)?
    - Czy w placówce dostępna jest informacja w formacie dostępnym dla osób niewidomych (np. e-dokument do wysłania na e-mail) lub czy personel jest przeszkolony do udzielenia tej informacji głosowo?
- Weryfikacja kompletności treści
- **Sprawdzenie:** Czy w udostępnianych materiałach (niezależnie od formatu) znajdują się wyraźne informacje o:
    - Funkcjach dostępności sprzętu (np. "To urządzenie wspiera technologię zamiany treści tekstowych na głos")?
    - Interoperacyjności (np. "Możesz podłączyć własne słuchawki")?
    - *Błąd:* Brak informacji o tym, że urządzenie jest dostępne, jest naruszeniem tego przepisu, nawet jeśli samo urządzenie jest technicznie doskonałe. Użytkownik musi wiedzieć o dostępności, aby z niej skorzystać.

---

## U.12.02.01.b U.12.02.01.b Informacje o produktach wykorzystywanych w świadczeniu usługi — zrozumiałość informacji (Art. 12 ust. 2 pkt 1 lit. b)

### Procedure
['Wymóg ten nakłada na usługodawcę obowiązek dbałości o **dostępność poznawczą (kognitywną)** przekazywanych treści. Informacja jest bezużyteczna, jeśli jest dostępna zmysłowo (np. widoczna), ale niezrozumiała dla odbiorcy.\n\nInterpretacja w oparciu o normę EN 301 549 (Rozdział 9.3 i 10.3 – Zrozumiałość):\n1.  **Zrozumiałość techniczna (Dla formy elektronicznej):** Aby treść była zrozumiała dla technologii asystujących (np. syntezatora mowy), dokument musi mieć poprawnie zdefiniowany język (klauzule **9.3.1** i **10.3.1**). Syntezator musi „wiedzieć”, czy czytać tekst po polsku, czy po angielsku, aby wymowa była zrozumiała dla użytkownika.\n2.  **Zrozumiałość treściowa (Prosty Język):** Choć norma EN 301 549 w poziomie zgodności AA nie narzuca ścisłego wymogu „prostego języka” dla wszystkich treści (jest to wymóg poziomu AAA – klauzula 9.5), to ustawa w Art. 12 ust. 2 pkt 1 lit. b nakazuje zapewnienie zrozumiałości *w ogóle*. Oznacza to konieczność unikania żargonu technicznego i prawnego tam, gdzie to możliwe, lub jego wyjaśnianie (zgodnie z definicją "Zrozumiałości" w art. 5 pkt 38 ustawy: *właściwość [...] umożliwiającą zrozumienie treści i informacji związanych z korzystaniem z produktu albo usługi*).\n3.  **Spójność i Przewidywalność:** Informacje powinny być zorganizowane w sposób logiczny i przewidywalny (klauzule **9.3.2** i **10.3.2**). Elementy nawigacyjne i instrukcje nie mogą zmieniać swojego działania w sposób zaskakujący dla użytkownika.']

### Evaluation
Testy użyteczności i przegląd ekspercki

### Checklist
- Weryfikacja określenia języka (Dokumenty elektroniczne/WWW)
- **Działanie:** Sprawdź kod strony internetowej (`<html lang="pl">`) lub właściwości pliku PDF/e-booka.
- **Sprawdzenie:**
    - Czy domyślny język dokumentu jest zdefiniowany programowo?
    - Czy fragmenty w języku obcym (np. cytaty, nazwy własne w innym języku) są odpowiednio oznaczone w kodzie?
- **Uzasadnienie:** Brak definicji języka powoduje, że czytnik ekranu może czytać polski tekst z angielską wymową, co czyni go całkowicie niezrozumiałym.
- Analiza prostoty i struktury (Inspekcja ekspercka)
- **Działanie:** Przeanalizuj instrukcję obsługi terminala lub opis usługi.
- **Sprawdzenie:**
    - Czy zdania są krótkie i niezłożone wielokrotnie?
    - Czy terminy specjalistyczne (np. „autoryzacja”, „uwierzytelnianie dwuskładnikowe”) są wyjaśnione w tekście lub słowniczku?
    - Czy zastosowano podział na akapity, listy punktowane i nagłówki ułatwiające skanowanie tekstu?
    - Czy instrukcje są sformułowane w trybie rozkazującym lub bezosobowym w sposób jednoznaczny (np. „Włóż kartę”, a nie „Zaleca się umieszczenie instrumentu płatniczego w odpowiednim slotcie”)?

---

## U.12.02.01.c U.12.02.01.c Informacje o produktach wykorzystywanych w świadczeniu usługi — formaty tekstowe dla komunikacji alternatywnej (Art. 12 ust. 2 pkt 1 lit. c)

### Procedure
['Przepis ten łączy wymóg techniczny (format tekstowy) z celem funkcjonalnym (wsparcie AAC).\n\n1.  **Definicja AAC (Art. 5 pkt 1):** „Alternatywna i wspomagająca komunikacja” to korzystanie z pomocy komunikacyjnych wspierających lub zastępujących mowę. Użytkownicy AAC często korzystają ze specjalistycznego oprogramowania, które konwertuje tekst na mowę syntetyczną lub na sekwencję symboli/piktogramów.\n2.  **Format tekstowy (Text-based formats):** Aby oprogramowanie AAC mogło zadziałać, informacja dostarczona przez usługodawcę musi być **tekstem cyfrowym**, a nie obrazem tekstu (skanem). Zgodnie z normą EN 301 549 (klauzule **10.1.1.1**, **11.1.1.1.1**), treść musi być możliwa do odczytania programowego. Tylko wtedy urządzenie użytkownika może „przeczytać” instrukcję na głos lub „przetłumaczyć” ją na symbole.\n3.  **Więcej niż jeden kanał sensoryczny:** Jeśli informacja jest poprawnym formatem tekstowym, to z definicji (dzięki technologii asystującej) może być przedstawiona:\n    -   **Wzrokowo:** Jako tekst na ekranie (możliwy do powiększenia).\n    -   **Słuchowo:** Przez syntezę mowy w urządzeniu AAC.\n    -   **Dotykowo:** Przez monitor brajlowski podłączony do urządzenia.\n\nWymóg ten nie oznacza konieczności tworzenia przez usługodawcę gotowych materiałów piktograficznych (chyba że wynika to z innych przepisów), lecz dostarczenie materiałów w formacie (np. dostępny PDF, HTML, EPUB), który jest **interoperacyjny** z narzędziami użytkownika.']

### Evaluation
Inspekcja, testy użyteczności z udziałem użytkowników korzystających z AAC oraz przegląd ekspercki

### Checklist
- Weryfikacja formatu tekstowego (Interoperacyjność z AAC)
- **Działanie:** Otwórz dokument elektroniczny z informacją o usłudze.
- **Sprawdzenie:**
    - Czy tekst można zaznaczyć, skopiować i wkleić do innego programu (np. notatnika)? Jeśli nie (jest to skan/obraz), oprogramowanie AAC nie będzie w stanie go przetworzyć.
    - Czy dokument ma poprawnie zdefiniowany język w metadanych? (Urządzenia AAC muszą wiedzieć, jakiego syntezatora lub biblioteki symboli użyć).
- Weryfikacja struktury (Dla logicznego przetwarzania)
- **Działanie:** Sprawdź strukturę dokumentu.
- **Sprawdzenie:** Czy dokument posiada tagi nagłówków, list i tabel?
- **Uzasadnienie:** Użytkownicy AAC często nawigują skokowo. Brak struktury powoduje, że urządzenie czyta tekst jako nieprzerwany ciąg, co uniemożliwia zrozumienie skomplikowanych instrukcji.
- Test praktyczny z narzędziem (Symulacja AAC)**
- **Działanie:** Użyj prostego narzędzia typu "Text-to-Speech" lub czytnika ekranu na udostępnionym pliku.
- **Sprawdzenie:** Czy narzędzie poprawnie odczytuje treść w logicznej kolejności?
    - Jeśli syntezator zacina się, czyta śmieciowe znaki lub milczy – plik nie spełnia wymogu "umożliwienia wykorzystania w alternatywnej komunikacji".
- Dostępność wielokanałowa**
- **Sprawdzenie:** Czy ten sam plik tekstowy, bez modyfikacji dokonanych przez użytkownika, może być jednocześnie wyświetlony na ekranie i odczytany głosowo? (Wymóg ten jest spełniony domyślnie przez poprawny dokument cyfrowy).

---

## U.12.02.01.d U.12.02.01.d Informacje o produktach wykorzystywanych w świadczeniu usługi — czytelność, rozmiar czcionki, kontrast i odstępy (Art. 12 ust. 2 pkt 1 lit. d)

### Procedure
['Przepis ten precyzuje wymóg „postrzegalności” informacji wizualnej poprzez narzucenie konkretnych parametrów typograficznych. Należy go interpretować w zależności od nośnika informacji:\n\n1.  **Rozmiar i krój czcionki ("Przewidywalne warunki użytkowania"):**\n    -   **Dla formy elektronicznej:** Zgodnie z normą EN 301 549 (klauzula **9.1.4.4** i **10.1.4.4**), tekst musi być skalowalny do **200%** bez użycia technologii wspomagających i bez utraty treści lub funkcjonalności.\n    -   **Dla formy papierowej lub zamkniętych interfejsów (np. wyświetlacz na terminalu):** Jeśli tekstu nie da się powiększyć, należy zastosować klauzulę **5.1.4** normy. Wymaga ona, aby wielka litera „H” przyjmowała rozmiar kątowy co najmniej **0,7 stopnia** w przewidywanej odległości widzenia. Oznacza to, że instrukcja wisząca na ścianie (czytana z daleka) musi mieć znacznie większą czcionkę niż ulotka trzymana w ręku.\n2.  **Wystarczający kontrast:**\n    -   Zgodnie z klauzulą **9.1.4.3** i **10.1.4.3**, minimalny współczynnik kontrastu między tekstem a tłem wynosi **4,5:1** dla zwykłego tekstu oraz **3:1** dla tekstu dużego (powyżej 18 pt lub 14 pt pogrubionego). Wymóg ten dotyczy zarówno ekranów, jak i wydruków.\n3.  **Odstępy (Światło tekstu):**\n    -   Zgodnie z klauzulą **9.1.4.12** i **10.1.4.12**, aby zapewnić czytelność (szczególnie dla osób z dysleksją lub słabowidzących), użytkownik musi mieć możliwość zmiany odstępów (w wersji cyfrowej) lub odstępy te muszą być „sztywne” ale wystarczające (w druku) wg parametrów: wysokość linii min. 1,5 wielkości czcionki; odstęp po akapicie min. 2 wielkości czcionki.']

### Evaluation
Inspekcja i testy z udziałem użytkowników (osoby z ograniczeniami wzroku)

### Checklist
- Weryfikacja dokumentów elektronicznych (WWW/PDF)
-   **Działanie (Skalowalność):** Użyj funkcji zoom w przeglądarce lub czytniku PDF, powiększając widok do 200%.
    -   *Sprawdzenie:* Czy tekst nie „rozjeżdża się”, nie nakłada na inne elementy i nie znika poza krawędzią ekranu (wymuszając przewijanie w dwóch wymiarach)? [8]
-   **Działanie (Kontrast):** Użyj narzędzia typu *Colour Contrast Analyser*.
    -   *Sprawdzenie:* Czy stosunek jasności tekstu do tła wynosi min. 4,5:1? (Dla tekstów istotnych, nie dekoracyjnych).
-   **Działanie (Odstępy):** Wstrzyknij style CSS wymuszające zwiększone odstępy (zgodnie z WCAG 1.4.12).
    -   *Sprawdzenie:* Czy tekst pozostaje czytelny i nie jest ucięty?
- Weryfikacja informacji fizycznej (Papier/Etykiety)
*Dotyczy Art. 7 ust. 1 oraz klauzuli 5.1.4 (analogia dla czytelności).*
-   **Działanie:** Określ typową odległość, z jakiej klient czyta informację (np. 50 cm dla ulotki, 100 cm dla plakatu).
-   **Sprawdzenie (Rozmiar):** Czy czcionka jest wystarczająco duża?
    -   Dla odległości 50 cm, litera „H” powinna mieć min. 6,1 mm wysokości.
    -   Dla odległości 100 cm, litera „H” powinna mieć min. 12,2 mm wysokości.
-   **Sprawdzenie (Powierzchnia):** Czy papier lub laminat nie jest błyszczący? (Odblaski zmniejszają efektywny kontrast i czytelność).
- Krój czcionki (Inspekcja ekspercka)**
-   **Sprawdzenie:** Czy zastosowano czcionkę bezszeryfową (np. Arial, Verdana, Tahoma) lub inną o prostym kroju? Unikanie czcionek ozdobnych, kursywy i pisania całych zdań wielkimi literami (all-caps) jest kluczowe dla „odpowiedniego kroju” wymaganego ustawą.

---

## U.12.02.01.e U.12.02.01.e Informacje o produktach wykorzystywanych w świadczeniu usługi — alternatywna prezentacja treści nietekstowych (Art. 12 ust. 2 pkt 1 lit. e)

### Procedure
['Wymóg ten obliguje usługodawcę do zapewnienia, aby każda informacja wizualna lub dźwiękowa, która nie jest tekstem, posiadała swój odpowiednik (alternatywę), który może być przetworzony przez zmysły użytkownika lub narzędzia wspomagające.\n\nInterpretacja w oparciu o normę EN 301 549:\n1.  **Definicja treści nietekstowej:** Zgodnie z definicją w normie (Rozdział 3.1) oraz WCAG 2.1, jest to treść, która nie jest ciągiem znaków możliwym do określenia programistycznie (np. obraz mapy, nagranie dźwiękowe sygnału błędu).\n2.  **Alternatywa dla grafiki (Dokumenty i WWW):**\n    -   Zgodnie z klauzulami **9.1.1.1** (dla stron www) i **10.1.1.1** (dla dokumentów), wszystkie treści nietekstowe muszą posiadać alternatywę tekstową (np. atrybut`alt`, opis w treści dokumentu), która pełni tę samą funkcję lub przekazuje tę samą informację.\n    -   Jeśli grafika jest tylko dekoracją, powinna być oznaczona w sposób, który pozwala technologiom asystującym ją zignorować (np. pusty`alt=""` w HTML lub oznaczenie jako „artefakt” w PDF).\n3.  **Alternatywa dla multimediów:**\n    -   Dla materiałów wideo z dźwiękiem wymagane są **napisy rozszerzone** (dla niesłyszących) zgodnie z klauzulami **9.1.2.2** i **10.1.2.2**.\n    -   Jeśli obraz wideo przekazuje kluczowe informacje, których nie ma w ścieżce dźwiękowej, wymagana jest **audiodeskrypcja** lub alternatywa tekstowa (transkrypcja) zgodnie z klauzulami **9.1.2.3** i **10.1.2.3**.\n4.  **Dla informacji papierowej:** W przypadku druku „alternatywna prezentacja” oznacza fizyczne umieszczenie opisu wyjaśniającego obok elementu graficznego (np. opis wykresu w tekście głównym) lub zapewnienie dostępu do wersji cyfrowej spełniającej powyższe wymogi (np. poprzez kod QR prowadzący do dostępnego dokumentu).']

### Evaluation
Inspekcja i testy z udziałem użytkowników (osoby niewidome, niesłyszące lub korzystające z AAC)

### Checklist
- Weryfikacja grafik w dokumentach elektronicznych (Inspekcja techniczna)
- **Działanie:** Użyj narzędzia inspekcyjnego (np. weryfikator dostępności w edytorze tekstu, czytnik ekranu) na pliku PDF, DOCX lub stronie www.
- **Sprawdzenie:**
    - Czy każdy obraz, wykres i ikona posiada opis alternatywny (tekst zastępczy)?
    - Czy opis ten jest adekwatny? (Błędem jest opis typu "obrazek1.jpg" lub "wykres"). Opis musi przekazywać merytoryczną treść elementu (np. "Wykres słupkowy pokazujący wzrost oprocentowania z 5% do 7%").
    - Czy elementy dekoracyjne są pomijane przez czytnik ekranu?
- Weryfikacja materiałów wideo (Multimedia)
- **Działanie:** Odtwórz materiał wideo promujący usługę lub instruktażowy.
- **Sprawdzenie (Napisy):** Czy dostępne są napisy? Czy zawierają nie tylko dialogi, ale też istotne dźwięki tła (np. [dźwięk alarmu], [muzyka])?
- **Sprawdzenie (Audiodeskrypcja/Transkrypcja):** Czy jeśli zamkniesz oczy, jesteś w stanie zrozumieć cały przekaz? Jeśli wideo pokazuje informacje tylko wizualnie (np. napisy na ekranie bez lektora), czy dostępna jest dodatkowa ścieżka dźwiękowa (audiodeskrypcja) lub pełna transkrypcja tekstowa opisująca te elementy?
- Weryfikacja materiałów audio (Tylko dźwięk)
- **Działanie:** Jeśli usługa udostępnia podcasty lub nagrania audio z informacjami.
- **Sprawdzenie:** Czy do nagrania dołączona jest transkrypcja tekstowa (zapis treści)?
- Testy z użytkownikami (Weryfikacja funkcjonalna)
- **Działanie:** Przeprowadź test z osobą niewidomą (korzystającą z czytnika ekranu).
- **Cel:** Potwierdzenie, czy alternatywy tekstowe dla skomplikowanych wykresów lub schematów (np. schemat procesu reklamacji) są zrozumiałe i pozwalają na zbudowanie w wyobraźni poprawnego modelu informacji.

---

## U.12.02.02 U.12.02.02 Informacje elektroniczne — postrzegalność, funkcjonalność, zrozumiałość i kompatybilność (Art. 12 ust. 2 pkt 2)

### Procedure
['Przepis ten przenosi cztery fundamentalne zasady dostępności cyfrowej (POUR: *Perceivable (Postrzegalność), Operable (Operacyjność/Funkcjonalność), Understandable (Zrozumiałość), Robust (Kompatybilność)*) na grunt informacji udzielanych przez usługodawcę. Oznacza to, że każda informacja cyfrowa (regulamin, cennik, opis oferty, instrukcja obsługi terminala) musi być zgodna z normą EN 301 549 (a tym samym z WCAG 2.1 na poziomie AA).\n\n1.  **Postrzegalność (Perceivability):** Informacja nie może być "niewidzialna" dla zmysłów użytkownika. Musi być dostępna w formie możliwej do odebrania (np. tekst alternatywny dla grafik dla osób niewidomych, napisy dla wideo dla osób niesłyszących, odpowiedni kontrast dla osób słabowidzących).\n2.  **Funkcjonalność (Operability):** Użytkownik musi być w stanie nawigować po informacji i korzystać z niej. Wymaga to pełnej dostępności z poziomu klawiatury (bez myszy), braku pułapek na klawiaturę oraz wystarczającego czasu na przeczytanie treści.\n3.  **Zrozumiałość (Understandability):** Informacja i interfejs muszą być zrozumiałe. Oznacza to czytelność tekstu, przewidywalne działanie interfejsu (np. nawigacji na stronie) oraz mechanizmy pomocy przy wprowadzaniu danych (jeśli informacja wymaga interakcji).\n4.  **Kompatybilność (Robustness / Solidność):** Treść musi być interpretowana poprawnie przez szeroką gamę programów użytkownika, w tym technologie asystujące (czytniki ekranu). Wymaga to poprawnego kodu, użycia standardowych znaczników i właściwego stosowania atrybutów (np. ARIA).']

### Evaluation
Zestaw testów: automatyczne narzędzia, ręczna inspekcja oraz testy z użytkownikami korzystającymi z narzędzi wspomagających

### Checklist
- Postrzegalność (Alternatywy i Struktura)
- **Działanie:** Sprawdź elementy nietekstowe (grafiki, wideo).
- **Sprawdzenie:**
    - Czy każda grafika niosąca treść posiada tekst alternatywny (`alt`)?
    - Czy materiały wideo posiadają napisy dla niesłyszących?
    - Czy struktura nagłówków (H1-H6) odzwierciedla logiczny układ treści, umożliwiając nawigację skokową osobom niewidomym?
- Funkcjonalność (Klawiatura)
- **Działanie:** Odłącz mysz lub nie używaj ekranu dotykowego. Spróbuj dotrzeć do każdej informacji i linku używając tylko klawisza`Tab`,`Enter`,`Spacja` i strzałek.
- **Sprawdzenie:**
    - Czy wskaźnik fokusu jest widoczny na każdym elemencie aktywnym?
    - Czy można obsłużyć wszystkie elementy (np. rozwinąć menu, zamknąć pop-up) z klawiatury?
- Zrozumiałość (Język i Błędy)
- **Działanie:** Sprawdź kod strony/dokumentu.
- **Sprawdzenie:**
    - Czy język dokumentu jest zdefiniowany programowo (np.`<html lang="pl">`)?
    - Jeśli informacja jest formularzem – czy etykiety pól są jednoznacznie powiązane z polami (programowo)?
- Kompatybilność (Kod i Parsowanie)
- **Działanie:** Użyj walidatora kodu (np. W3C Validator) oraz czytnika ekranu (NVDA/VoiceOver).
- **Sprawdzenie:**
    - Czy kod nie zawiera błędów składniowych (np. niezamknięte tagi, zduplikowane ID), które mogą zmylić technologię asystującą?
    - Czy nazwy, role i wartości elementów interfejsu (np. przycisków, zakładek) są poprawnie komunikowane przez czytnik ekranu?

---

## U.12.02.03 U.12.02.03 Kontrola dostępności (WCAG/EN) — postrzegalność, funkcjonalność, zrozumiałość i kompatybilność (Art. 12 ust. 2 pkt 3)

### Procedure
['Przepis ten nakłada obowiązek pełnej zgodności cyfrowej z normą EN 301 549 (która inkorporuje WCAG 2.1 na poziomie AA). Ustawodawca wymienia cztery filary dostępności (POUR):\n\n1.  **Postrzegalność (Perceivable):** Informacje i elementy interfejsu muszą być przedstawione w sposób, który użytkownicy mogą odebrać za pomocą zmysłów (wzroku, słuchu, dotyku). Obejmuje to m.in. alternatywy tekstowe dla grafik (klauzule 9.1.1/11.1.1), napisy dla multimediów (9.1.2/11.1.2) oraz możliwość adaptacji treści (np. tryb wysokiego kontrastu, powiększanie).\n2.  **Funkcjonalność (Operable):** Komponenty interfejsu i nawigacja muszą być możliwe do obsłużenia. Kluczowa jest obsługa wyłącznie za pomocą klawiatury (9.2.1/11.2.1), brak pułapek na klawiaturę, wystarczający czas na reakcję oraz nawigacja, która nie wywołuje ataków padaczki.\n3.  **Zrozumiałość (Understandable) – Aspekt Jednolitości:** Termin „jednolitość” w ustawie koresponduje z zasadą zrozumiałości, a konkretnie ze spójnością działania.\n    -   **Spójna nawigacja (Klauzula 9.3.2.3):** Mechanizmy nawigacyjne powtarzające się na wielu stronach (np. menu, wyszukiwarka) muszą występować w tej samej względnej kolejności.\n    -   **Spójna identyfikacja (Klauzula 9.3.2.4):** Komponenty pełniące tę samą funkcję (np. ikona koszyka, strzałka „dalej”) muszą być konsekwentnie identyfikowane (wyglądać i nazywać się tak samo) w całym serwisie.\n4.  **Kompatybilność (Robust):** Treść musi być solidna, aby mogła być interpretowana przez różnorodne oprogramowanie, w tym technologie asystujące. Wymaga to poprawnego kodu (parsowanie) oraz właściwego określenia nazw, ról i wartości elementów (ARIA).']

### Evaluation
Pełny raport Kontrolny zgodny z WCAG/EN, w tym lista niezgodności, priorytetów i rekomendacji oraz dowody testów (zrzuty, logi, transkrypcje testów użytkowników).

### Checklist
- Weryfikacja wymaga pełnego audytu zgodności (metoda ekspercka), łączącego trzy techniki: automatyczną, manualną oraz testy z użytkownikami (technologiami asystującymi).
- Weryfikacja stron internetowych (Zgodność z Rozdziałem 9 normy EN 301 549)
- **Metoda:** Audyt WCAG 2.1 AA.
- **Krytyczne punkty kontrolne:**
    - Czy kod strony przechodzi walidację bez błędów wpływających na technologie asystujące (np. zduplikowane ID)? (Klauzula 9.4.1.1).
    - Czy cała funkcjonalność jest dostępna z klawiatury (bez myszy)? (Klauzula 9.2.1.1).
    - Czy nawigacja jest spójna na wszystkich podstronach serwisu (warunek „jednolitości”)?
- Weryfikacja aplikacji mobilnych (Zgodność z Rozdziałem 11 normy EN)
- **Metoda:** Audyt aplikacji pod kątem specyfiki dotykowej i integracji z systemem operacyjnym (iOS/Android).
- **Krytyczne punkty kontrolne:**
    - Czy aplikacja wspiera systemowe funkcje dostępności (np. powiększanie czcionki, TalkBack/VoiceOver)? (Klauzula 11.5.2).
    - Czy orientacja ekranu (pozioma/pionowa) nie jest zablokowana bez uzasadnienia? (Klauzula 11.1.3.4).
    - Czy elementy dotykowe mają odpowiedni rozmiar i odstępy? (Zalecenie z sekcji AAA, ale kluczowe dla funkcjonalności mobilnej).
- Testy z technologiami asystującymi (Weryfikacja praktyczna)
- **Działanie:** Przeprowadź ścieżki krytyczne usługi (np. logowanie, zakup biletu, przelew) używając czytnika ekranu (NVDA/JAWS/VoiceOver itp.)
- **Sprawdzenie:**
    - Czy użytkownik jest informowany o zmianach stanu (np. błędnie wypełniony formularz, pojawienie się modala)?
    - Czy kolejność fokusu jest logiczna?
- Wynik końcowy (Raport):
Dokumentacja musi wskazywać konkretne niezgodności z kryteriami sukcesu WCAG (np. "Niezgodność z 1.4.3 - Kontrast"), określać ich priorytet (krytyczny/wysoki/średni) oraz zawierać rekomendacje naprawcze dla programistów.

---

## U.13 U.13 Przekazywanie komunikacji głosowej i tekstowej w czasie rzeczywistym — przekazywanie i pełna konwersacja (Art. 13)

### Procedure
['Art. 13 nakłada na operatorów telekomunikacyjnych obowiązek zapewnienia infrastruktury sieciowej obsługującej specyficzne protokoły transmisji danych dla osób z niepełnosprawnościami. Nie chodzi tu o dostarczenie urządzenia (to reguluje Art. 11), lecz o zapewnienie, że **sieć** przepuści odpowiednie sygnały.\n\n1.  **Komunikacja tekstowa w czasie rzeczywistym (RTT):**\n    -   Zgodnie z definicją w **Art. 5 pkt 13** ustawy oraz normą EN 301 549 (klauzula 6.2), RTT to przesyłanie tekstu w trybie **znak po znaku** (character-by-character).\n    -   Usługa musi gwarantować, że znak wprowadzony przez nadawcę pojawi się u odbiorcy w czasie nie dłuższym niż **500 ms** (klauzula 6.2.4).\n    -   **Różnica względem czatu:** Standardowe komunikatory (Instant Messaging) przesyłają tekst blokowo (po naciśnięciu Enter). Taka usługa **nie spełnia** wymogu Art. 13, ponieważ nie pozwala na dynamiczną interakcję (np. przerwanie wypowiedzi) w sposób równoważny rozmowie głosowej.\n\n2.  **Pełna konwersacja (Total Conversation):**\n    -   Wymagana tylko wtedy, gdy usługa oferuje transmisję wideo.\n    -   Zgodnie z **Art. 5 pkt 19**, jest to jednoczesny przesył trzech strumieni: **wideo + głos + tekst RTT**.\n    -   Usługa telekomunikacyjna musi zapewniać odpowiedni QoS (Quality of Service), aby te trzy strumienie były zsynchronizowane. Desynchronizacja ruchu warg (wideo) z głosem powyżej **100 ms** (klauzula 6.5.4 uniemożliwia czytanie z ruchu warg.\n\n3.  **Interoperacyjność:**\n    -   Usługa musi umożliwiać połączenia RTT/Total Conversation nie tylko wewnątrz własnej sieci, ale także z innymi operatorami (np. poprzez protokół SIP/IMS zgodnie z normą IETF RFC 4103 lub standardami 3GPP – klauzula 6.2.3).']

### Evaluation
Testy jakości usług (latencja, synchronizacja, kompletność tekstu), inspekcja funkcji oraz testy z udziałem przedstawicieli użytkowników

### Checklist
- Weryfikacja RTT (Płynność i Opóźnienie)
- **Działanie:** Zestaw połączenie między dwoma terminalami obsługującymi RTT w danej sieci.
- **Sprawdzenie:** Wpisuj tekst na jednym urządzeniu.
    - Czy litery pojawiają się na drugim urządzeniu pojedynczo, w trakcie pisania (zanim naciśniesz "Wyślij")?
    - Czy opóźnienie jest zauważalne (powyżej 0,5 sekundy)? Duże opóźnienia dyskwalifikują usługę jako RTT.
    - Czy RTT działa równocześnie z rozmową głosową (nie rozłącza jej ani nie zawiesza)?
- Weryfikacja Pełnej Konwersacji (Synchronizacja)
- **Działanie:** Zestaw wideorozmowę.
- **Sprawdzenie:**
    - Czy można jednocześnie przesyłać wideo, rozmawiać głosowo i wysyłać tekst RTT? (Brak obsługi któregokolwiek kanału jednocześnie oznacza brak "pełnej konwersacji").
    - Czy dźwięk jest zsynchronizowany z obrazem? (Test "klapsa" lub obserwacja ruchu warg).
- Jakość wideo dla języka migowego
- **Sprawdzenie:** Czy usługa zapewnia przepustowość wystarczającą do utrzymania rozdzielczości min. QVGA (320x240) i płynności min. 20 klatek na sekundę?
- **Interpretacja:** Jeśli usługa agresywnie kompresuje obraz przy słabszym zasięgu, czyniąc język migowy nieczytelnym (rozmycie dłoni), usługa nie spełnia wymogu obsługi "pełnej konwersacji" w rozumieniu ustawy.

---

## U.14.00.01 U.14.00.01 Dostępność przewodników po programach i informacji o udogodnieniach (Art. 14 pkt 1)

### Procedure
['Wymóg ten nakłada obowiązek pełnej dostępności cyfrowej interfejsu służącego do wyboru treści (EPG). EPG jest kluczową bramą do konsumpcji mediów – jeśli przewodnik jest niedostępny, sama treść (nawet dostępna) staje się nieosiągalna.\n\nAnaliza w oparciu o cztery zasady dostępności (POUR) zdefiniowane w ustawie i uszczegółowione w normie EN 301 549 (Rozdziały 9, 10, 11 w zależności od technologii EPG – www, dokument, aplikacja):\n\n1.  **Postrzegalność (Perceivable):** Informacje w EPG (tytuły, godziny emisji, opisy) muszą być dostępne dla różnych zmysłów.\n    -   Użytkownik niewidomy musi móc usłyszeć treść EPG (współpraca z czytnikiem ekranu lub wbudowana funkcja Text-to-Speech – TTS).\n    -   Użytkownik słabowidzący musi mieć możliwość zmiany kontrastu i powiększenia tekstu (klauzule 9.1.4/11.1.4).\n    -   Informacja o udogodnieniach (np. ikona „AD” dla audiodeskrypcji, „CC” dla napisów) musi być dostępna programowo, a nie tylko graficznie (tekst alternatywny).\n\n2.  **Funkcjonalność (Operable):** Nawigacja po EPG musi być możliwa bez użycia wzroku i precyzyjnych ruchów.\n    -   Obsługa wyłącznie pilotem/klawiaturą (bez myszki/ekranu dotykowego) jest kluczowa (klauzule 9.2.1/11.2.1).\n    -   Brak pułapek na fokus – użytkownik musi móc wejść i wyjść z każdego menu.\n    -   Odpowiedni czas na reakcję – informacje o programie nie mogą znikać zbyt szybko (klauzule 9.2.2/11.2.2).\n\n3.  **Zrozumiałość (Understandable):** Język i działanie interfejsu muszą być jasne.\n    -   Informacje o udogodnieniach muszą być jednoznaczne (np. jasne rozróżnienie między napisami dla niesłyszących a napisami obcojęzycznymi).\n    -   Spójna nawigacja i identyfikacja elementów (klauzule 9.3.2/11.3.2).\n\n4.  **Kompatybilność (Robust):** EPG musi współpracować z technologiami asystującymi systemu operacyjnego (np. TalkBack na Android TV, VoiceOver na Apple TV) lub posiadać własne wbudowane mechanizmy (np. „Voice Guide” w systemach zamkniętych TV). Zgodność ze standardami (np. HTML, ARIA) jest tu kluczowa.']

### Evaluation
Inspekcja i testy z użytkownikami

### Checklist
- Weryfikacja dostępności informacji o udogodnieniach
- **Działanie:** Przeszukaj EPG w poszukiwaniu programu oznaczonego jako posiadający audiodeskrypcję lub napisy.
- **Sprawdzenie:**
    -   Czy informacja ta jest odczytywana przez czytnik ekranu (TTS)? (Częsty błąd: ikona jest widoczna, ale syntezator milczy lub czyta „obrazek123”).
    -   Czy można filtrować/wyszukiwać programy po kryterium dostępności (np. „pokaż tylko filmy z audiodeskrypcją”)?
- Weryfikacja funkcjonalności (Nawigacja)
- **Działanie:** Spróbuj obsłużyć EPG wyłącznie za pomocą strzałek na pilocie lub klawiaturze (Tab/Strzałki).
- **Sprawdzenie:**
    -   Czy wskaźnik fokusu jest zawsze widoczny?
    -   Czy kolejność nawigacji jest logiczna (np. chronologiczna)?
    -   Czy można dotrzeć do każdego elementu (w tym przycisków „Więcej informacji” lub „Nagraj”)?
- Weryfikacja postrzegalności (Kontrast i Skalowanie)
- **Działanie:** Sprawdź czytelność interfejsu.
- **Sprawdzenie:**
    -   Czy tekst w EPG ma wystarczający kontrast względem tła (min. 4.5:1)?
    -   Czy interfejs oferuje tryb wysokiego kontrastu lub dużej czcionki (dla osób starszych i słabowidzących)?
- Test z technologią asystującą (TTS)
- **Działanie:** Włącz funkcję lektora (Screen Reader) w urządzeniu (dekoderze/TV).
- **Sprawdzenie:** Przejdź przez siatkę programów. Czy syntezator odczytuje poprawnie: Tytuł, Godzinę rozpoczęcia, Kanał? Czy zapowiedzi głosowe nie nakładają się na dźwięk bieżącego programu w sposób uniemożliwiający zrozumienie (audio ducking)?

---

## U.14.00.02 U.14.00.02 Udogodnienia audiowizualne — jakość, synchronizacja i sterowanie (Art. 14 pkt 2)

### Procedure
['Przepis ten nakłada na dostawcę usługi „transportowej” (przekazującej sygnał) obowiązek zachowania integralności technicznej udogodnień. Usługa musi być „przezroczysta” dla funkcji dostępności.\n\nAnaliza w oparciu o normę EN 301 549 (Rozdział 7):\n1.  **Przekazywanie i jakość (Preservation):**\n    -   Zgodnie z klauzulami **7.1.3** (Zachowanie napisów) i **7.2.3** (Zachowanie audiodeskrypcji), usługa nie może usuwać ani degradować danych o napisach czy dodatkowych ścieżkach audio podczas transmisji, konwersji formatów czy nagrywania (np. funkcja PVR/nagrywarki w dekoderze).\n    -   W przypadku języka migowego (będącego częścią obrazu wideo), kompresja sygnału w usłudze nie może być na tyle wysoka, by rozmyć obraz tłumacza (wymagania jakości wideo dla PJM – analogia do klauzuli 6.5.2).\n2.  **Synchronizacja:**\n    -   Usługa musi gwarantować, że w procesie przesyłu nie nastąpi desynchronizacja („rozjechanie się”) dźwięku i obrazu.\n    -   Norma EN 301 549 (klauzule **7.1.2** i **7.2.2**) określa precyzyjny limit: opóźnienie napisów lub audiodeskrypcji względem dźwięku/obrazu nie może przekraczać **100 ms**.\n3.  **Sterowanie przez użytkownika:**\n    -   Zgodnie z klauzulą **7.3**, mechanizmy włączania napisów i audiodeskrypcji muszą być dostępne na tym samym poziomie interakcji co główne sterowanie multimediami (np. głośność, pauza). Użytkownik musi mieć możliwość łatwego wyboru tych funkcji [i.210].\n    -   Zgodnie z klauzulą **7.1.4**, w przypadku napisów przesyłanych jako tekst (a nie „wypalonych” w obrazie), usługa powinna umożliwiać użytkownikowi dostosowanie ich wyglądu (kolor, rozmiar).']

### Evaluation
Inspekcja i testy jakości (jakość wyświetlania, synchronizacja, dostępność sterowania)

### Checklist
- Weryfikacja integralności przekazu (Zachowanie danych)
- **Działanie:** Uruchom materiał wideo, o którym wiadomo, że nadawca dołączył do niego napisy i audiodeskrypcję.
- **Sprawdzenie:**
    - Czy w menu usługi (dekodera/aplikacji) widoczne są opcje wyboru napisów i dodatkowej ścieżki dźwiękowej?
    - Czy po włączeniu funkcji nagrywania (jeśli dostępna), nagrany materiał nadal zawiera te opcje przy odtwarzaniu? (Utrata napisów w nagraniach jest częstym błędem naruszającym ten przepis).
- Weryfikacja synchronizacji (Jakość techniczna)
- **Działanie:** Obserwuj moment pojawienia się napisu względem dźwięku mowy.
- **Sprawdzenie:** Czy napisy pojawiają się równo z wypowiadanymi słowami? Opóźnienie zauważalne gołym okiem (powyżej 0,1 sekundy) oznacza brak spełnienia wymogu synchronizacji.
- Weryfikacja sterowania (Dostępność interfejsu)
- **Działanie:** Spróbuj włączyć audiodeskrypcję w trakcie oglądania programu.
- **Sprawdzenie:**
    - Czy wymaga to zagłębiania się w zaawansowane ustawienia systemowe, czy jest dostępne z poziomu podręcznego menu odtwarzacza (OSD)?
    - Czy sterowanie to jest dostępne za pomocą klawiatury/pilota (bez użycia myszy/ekranu dotykowego)?
- Weryfikacja personalizacji (Jakość wyświetlania)
- **Działanie:** Sprawdź ustawienia wyświetlania.
- **Sprawdzenie:** Czy usługa umożliwia zmianę wielkości czcionki napisów? Jest to kluczowe dla „właściwego wyświetlania” dla osób słabowidzących. Brak możliwości powiększenia napisów w usłudze VOD/TV jest niezgodnością z normą.

---

## U.15.01.01.a U.15.01.01.a Udostępnienie informacji o stanie i warunkach świadczenia usług transportowych (Art. 15 ust. 1 pkt 1 lit. a)

### Procedure
['Warto zauważyć, że przepis ten nie dotyczy fizycznej dostępności pojazdów (co regulują inne przepisy techniczne), lecz rzetelności informacji o tym, czy dany pojazd jest dostępny, oraz o bieżącym stanie tej dostępności (np. czy winda w autobusie działa).', 'Wymóg ten nakłada na przewoźników obowiązek dostarczania **dynamicznej i rzetelnej informacji** o dostępności konkretnych pojazdów realizujących kurs. Nie wystarczy ogólna deklaracja "nasza flota jest nowoczesna".\n\n1.  **Szczegółowość informacji:** Zgodnie z przepisem, informacja musi dotyczyć **zapewnienia warunków niezbędnych**, co oznacza konieczność wskazania konkretnych udogodnień w pojeździe (np. obecność rampy, dedykowanego miejsca na wózek, pętli indukcyjnej, toalety dostępnej dla osób z niepełnosprawnością).\n2.  **Bieżący stan (Real-time status):** Kluczowym elementem przepisu jest fraza **"w tym o bieżącym stanie"**. Oznacza to, że jeśli przewoźnik wie, iż w danym autobusie/pociągu winda uległa awarii lub podstawiono tabor zastępczy niedostosowany do potrzeb osób na wózkach, ma obowiązek o tym poinformować **przed** podróżą (np. w systemie sprzedaży biletów lub aplikacji mobilnej).\n3.  **Dostępność kanału informacyjnego:** Sama informacja o dostępności pojazdu musi być przekazana w sposób dostępny cyfrowo (zgodnie z Art. 12 ust. 2 i normą EN 301 549), aby osoba niewidoma mogła ją samodzielnie odczytać.']

### Evaluation
Przegląd materiałów informacyjnych i dokumentacji dostępności; sprawdzenie obecności alternatywnych formatów i kontaktów do wsparcia.

### Checklist
- Weryfikacja informacji o flocie (Statyczna) - Dotyczy kompletności danych o taborze.
- **Działanie:** Sprawdź opis połączenia w systemie rozkładowym.
- **Sprawdzenie:** Czy przy konkretnym kursie znajduje się oznaczenie dostępności (np. piktogram wózka inwalidzkiego)?
- **Weryfikacja szczegółowa:** Czy po rozwinięciu szczegółów dostępne są informacje o specyficznych udogodnieniach (np. "pojazd niskopodłogowy", "toaleta przystosowana", "miejsce dla psa asystującego")?
- Weryfikacja informacji o awariach (Dynamiczna - "Bieżący stan") - Dotyczy kluczowej frazy ustawy "o bieżącym stanie".*
- **Działanie:** Zweryfikuj procedury przewoźnika lub regulamin.
- **Sprawdzenie:** Czy istnieje mechanizm informowania pasażera o zmianie taboru na niedostępny lub o awarii urządzenia wspomagającego (windy/rampy) w konkretnym pojeździe?
    - *Przykład:* Czy aplikacja mobilna wysyła powiadomienie push lub oznacza kurs na czerwono, jeśli winda w pociągu jest nieczynna? Brak takiej informacji w czasie rzeczywistym (o ile przewoźnik o niej wie) jest naruszeniem tego punktu.
- Dostępność cyfrowa informacji (Format)
- **Działanie:** Użyj czytnika ekranu na stronie z rozkładem jazdy.
- **Sprawdzenie:** Czy informacje o dostępności pojazdu (np. ikony) posiadają tekst alternatywny (np.`alt="Pojazd niskopodłogowy"`)? Jeśli ikona jest "niema" dla czytnika, informacja nie została skutecznie udzielona osobie niewidomej.
- Alternatywne kanały kontaktu**
*Dotyczy procedur asysty.*
- **Sprawdzenie:** Czy w przypadku braku pewności co do stanu pojazdu, usługodawca podaje bezpośredni kontakt (telefon/czat) w celu weryfikacji dostępności konkretnego kursu dla osoby ze szczególnymi potrzebami?

---

## U.15.01.01.b U.15.01.01.b Udostępnienie informacji o obiektach i infrastrukturze (Art. 15 ust. 1 pkt 1 lit. b)

### Procedure
['Wymóg ten nakłada na usługodawcę obowiązek publikowania szczegółowych informacji o dostępności architektonicznej i informacyjnej miejsc, w których pasażer przebywa.\n\nKluczowe aspekty prawne i techniczne:\n1.  **Zakres treści (Art. 15 ust. 2):** Informacja nie może być ogólnikowa (np. "Dworzec jest dostępny"). Ustawa wymaga, aby informacja odnosiła się do spełniania wymagań określonych w:\n    -   **Art. 6 pkt 1 i 3 ustawy z 2019 r. o zapewnianiu dostępności:** Czyli informacja o wolnych od barier poziomych i pionowych przestrzeniach komunikacyjnych, instalacji urządzeń (windy, pochylnie), informacji o rozkładzie pomieszczeń, zapewnieniu informacji wizualnej i dotykowej (Braille) oraz możliwości wstępu z psem asystującym.\n    -   **Art. 5 ust. 1 Prawo budowlane:** Dostępność dla osób niepełnosprawnych w projektowaniu obiektu.\n2.  **Otaczająca infrastruktura:** Obowiązek informacyjny wykracza poza budynek. Należy poinformować o dojściach do budynku, parkingach (miejsca dla osób z niepełnosprawnością), czy drodze z przystanku komunikacji miejskiej do wejścia głównego.\n3.  **Bieżący stan (Dynamic status):** Podobnie jak w przypadku taboru, kluczowa jest aktualność. Jeśli winda na peron 3 jest w remoncie, informacja o tym musi być dostępna dla pasażera *zanim* ten dotrze na dworzec.\n4.  **Alternatywa (Certyfikat):** Zgodnie z **Art. 33**, usługodawca może zastąpić szczegółowy opis informacją o posiadanym ważnym **Certyfikacie Dostępności**, jeśli taki uzyskał.']

### Evaluation
Przegląd publikowanych opisów obiektów i infrastruktury pod kątem kompletności i dostępności formatów.

### Checklist
- Kompletność opisu (Zgodność z Art. 15 ust. 2)
- **Działanie:** Przeanalizuj zakładkę "Dostępność" lub "Informacje dla pasażera" na stronie www.
- **Sprawdzenie:** Czy opis zawiera informacje o:
    -   Dostępności wejść do budynku (schody/rampy)?
    -   Dostępności ciągów komunikacyjnych (windy/podnośniki)?
    -   Dostępności toalet (czy są, gdzie są, czy posiadają system wzywania pomocy)?
    -   Urządzeniach dla osób niesłyszących (pętle indukcyjne w kasach)?
    -   Oznakowaniu dla osób niewidomych (ścieżki naprowadzające, plany tyflograficzne)?
- Weryfikacja "Bieżącego stanu"
- **Działanie:** Sprawdź, czy serwis posiada mechanizm informowania o awariach infrastruktury dworcowej (np. "Komunikaty o utrudnieniach").
- **Analiza:** Brak informacji o długotrwałej awarii windy w kluczowym punkcie przesiadkowym jest naruszeniem wymogu informowania o "bieżącym stanie".
- Lokalizacja informacji (Art. 32 i 33)**
- **Sprawdzenie:** Czy informacje te są zawarte w **regulaminie świadczenia usług** lub innym równoważnym dokumencie podanym do publicznej wiadomości?. Informacja schowana w aktualnościach sprzed roku jest niewystarczająca.
- Dostępność cyfrowa opisu
- **Sprawdzenie:** Czy mapa dworca lub schemat otoczenia (otaczająca infrastruktura) są dostępne cyfrowo?
    -   Jeśli jest to grafika (mapa), czy posiada opis alternatywny lub wersję tekstową opisującą drogę dojścia? (Zgodnie z Art. 12 ust. 2 pkt 1 lit. e).

---

## U.15.01.02 U.15.01.02 Udostępnienie informacji o pomocy świadczonej osobom ze szczególnymi potrzebami (Art. 15 ust. 1 pkt 2)

### Procedure
['Należy zwrócić uwagę, że przepis ten dotyczy informacji o pomocy, a nie samej fizycznej realizacji pomocy (którą regulują odrębne rozporządzenia unijne wymienione w Art. 20 ust. 2 ustawy). Kluczowym i często pomijanym aspektem jest wymóg informowania o bieżącym stanie dostępu do tej pomocy (np. chwilowym braku personelu asystującego).', 'Wymóg ten obliguje przewoźników i zarządców infrastruktury do zapewnienia przejrzystości w zakresie procedur wsparcia (asysty). Informacja ta musi być nie tylko dostępna, ale i dynamiczna.\n\nAnaliza prawno-techniczna:\n1.  **Zakres informacji:** Usługodawca musi precyzyjnie opisać:\n    *   **Rodzaj pomocy:** Czego pasażer może oczekiwać? (np. pomoc przy wsiadaniu/wysiadaniu, transport bagażu, pomoc w poruszaniu się po dworcu, asysta psa przewodnika).\n    *   **Procedura zgłaszania:** Jak zamówić pomoc? (formularz, telefon, e-mail, czas wyprzedzenia – np. 24h lub 48h przed podróżą).\n    *   **Punkty styku:** Gdzie pasażer ma się zgłosić po przybyciu na miejsce (Meeting Points).\n2.  **Bieżący stan (Real-time status):** To krytyczny element przepisu. Usługodawca musi informować o **dostępności usługi pomocy w danym momencie**.\n    *   *Przykład:* Jeśli na małym dworcu kolejowym usługa asysty jest dostępna tylko w godzinach 8:00–16:00, a pasażer kupuje bilet na pociąg o 20:00, system musi go poinformować o braku możliwości skorzystania z pomocy w tym czasie.\n    *   *Awaria:* Jeśli system zgłaszania asysty (np. infolinia) uległ awarii, informacja o alternatywnym kanale kontaktu musi być natychmiast udostępniona.\n3.  **Dostępność kanału informacyjnego:** Zgodnie z Art. 12, informacja o pomocy musi być dostępna cyfrowo. Formularz zgłoszeniowy na stronie www musi być możliwy do obsłużenia przy pomocy klawiatury i czytnikiem ekranu (zgodność z EN 301 549 Rozdział 9).']

### Evaluation
Przegląd materiałów informacyjnych i potwierdzenie, że zgłoszenie wsparcia jest możliwe i opisane wraz z kontaktem oraz przewidywanym czasem realizacji.

### Checklist
- Kompletność procedury (Inspekcja)
- **Działanie:** Przeanalizuj regulamin przewozów lub zakładkę "Dla osób z niepełnosprawnością".
- **Sprawdzenie:** Czy jasno określono:
    - Kanały zgłoszeń (czy jest alternatywa dla telefonu, np. e-mail/SMS dla osób niesłyszących)?
    - Wymagany czas wyprzedzenia (zgodny z przepisami UE)?
    - Godziny dostępności asysty na poszczególnych stacjach/terminalach?
- Weryfikacja "Bieżącego stanu"
- **Działanie:** Sprawdź opis konkretnego dworca/przystanku w systemie informacyjnym przewoźnika.
- **Sprawdzenie:** Czy widnieje tam informacja o ograniczeniach w świadczeniu pomocy (np. "Brak personelu asystującego w weekendy")? Brak takiej informacji przy jednoczesnym braku możliwości realizacji usługi jest naruszeniem ustawy.
- Weryfikacja "Bieżącego stanu"
- **Działanie:** Sprawdź opis konkretnego dworca/przystanku w systemie informacyjnym przewoźnika.
- **Sprawdzenie:** Czy widnieje tam informacja o ograniczeniach w świadczeniu pomocy (np. "Brak personelu asystującego w weekendy")? Brak takiej informacji przy jednoczesnym braku możliwości realizacji usługi jest naruszeniem ustawy.
- Dostępność usług wsparcia (Zgodność z Art. 22 i EN 301 549 Rozdz. 12.2)
- **Sprawdzenie:** Jeśli przewoźnik udostępnia infolinię do zamawiania asysty, czy zapewnia ona alternatywne metody komunikacji dla osób, które nie mogą mówić lub słyszeć (np. czat tekstowy, obsługa SMS, wideo z tłumaczem PJM)?

---

## U.15.01.03 U.15.01.03 Udostępnienie informacji o elektronicznych systemach sprzedaży biletów i dostępnych opcjach zakupu (Art. 15 ust. 1 pkt 3)

### Procedure
['Należy wyraźnie rozróżnić ten wymóg od Art. 12. Podczas gdy Art. 12 nakazuje, aby systemy były dostępne, Art. 15 ust. 1 pkt 3 nakazuje informować o tych systemach. Jest to kluczowe dla pasażera, który musi wiedzieć, czy na danej stacji kupi bilet samodzielnie (czy biletomat jest dostępny), czy musi skorzystać z kanału alternatywnego.', 'Wymóg ten obliguje przewoźnika do zapewnienia pełnej przejrzystości co do kanałów dystrybucji biletów. Pasażer ze szczególnymi potrzebami musi otrzymać informację nie tylko o cenie biletu, ale o **technicznej możliwości jego zakupu**.\n\nAnaliza w kontekście ustawy i normy EN 301 549:\n1.  **Opis funkcjonalności urządzeń (Terminale):** Jeśli przewoźnik korzysta z biletomatów (zgodnie z Art. 3 ust. 1 pkt 2 lit. b), musi poinformować, czy urządzenia te posiadają funkcje dostępności (zgodnie z Art. 9 ustawy i Rozdziałem 8 normy EN 301 549), np. wyjście słuchawkowe, obsługę bezwzrokową, regulację wysokości.\n2.  **Opis kanałów cyfrowych:** Informacja musi wskazywać, które aplikacje lub serwisy www umożliwiają zakup biletu w sposób dostępny (zgodny z WCAG).\n3.  **Procedury awaryjne (Alternatywy):** Jest to kluczowy aspekt informacyjny. Co w sytuacji, gdy biletomat na peronie nie działa lub jest niedostępny dla osoby na wózku? Usługodawca musi jasno poinformować o alternatywnym sposobie zakupu (np. "zakup u kierowcy bez opłaty dodatkowej", "zakup przez infolinię").']

### Evaluation
Przegląd materiałów informacyjnych oraz potwierdzenie, że użytkownicy mają jasne instrukcje dotyczące zakupu i uzyskania pomocy.

### Checklist
- Weryfikacja informacji o biletomatach
- **Działanie:** Sprawdź stronę internetową lub regulamin przewozu w sekcji "Bilety".
- **Sprawdzenie:** Czy znajduje się tam informacja o dostępności biletomatów?
    - *Przykład dobrej praktyki:* "Biletomaty serii X na stacjach A i B posiadają interfejs głosowy (minijack) i klawiaturę brajlowską".
    - *Błąd:* Brak informacji, czy biletomat jest możliwy do obsłużenia przez osobę niewidomą, zmusza ją do fizycznego sprawdzenia urządzenia na miejscu, co jest barierą.
- Weryfikacja informacji o aplikacjach mobilnych
- **Sprawdzenie:** Czy usługodawca informuje, która z rekomendowanych aplikacji do zakupu biletów jest certyfikowana lub przetestowana pod kątem współpracy z czytnikami ekranu (VoiceOver/TalkBack)?
- Procedura zakupu alternatywnego
- **Działanie:** Przeanalizuj instrukcje dla pasażera.
- **Sprawdzenie:** Czy istnieje jasna informacja, co zrobić, gdy elektroniczny system zawiedzie lub jest niedostępny dla osoby z niepełnosprawnością?
    - Czy podano kontakt do wsparcia technicznego lub kasjera?
    - Czy informacja ta jest dostępna w formacie dostępnym cyfrowo (zgodnie z Art. 12 ust. 2)?
- Dostępność samej informacji**
- **Sprawdzenie:** Czy instrukcja obsługi biletomatu (np. umieszczona w sieci jako PDF lub na obudowie urządzenia) spełnia wymogi Art. 12 ust. 2 pkt 1 (wielokanałowość, zrozumiałość, kontrast)? Informacja o systemie sprzedaży musi być dostępna dla osoby, która nie może jej zobaczyć.

---

## U.15.01.04 U.15.01.04 Udostępnienie informacji o podróży w czasie rzeczywistym — treść i sposoby powiadamiania (Art. 15 ust. 1 pkt 4)

### Procedure
['Wymóg ten nakłada obowiązek dostarczania dynamicznych danych o przebiegu podróży. Należy go interpretować ściśle według definicji zawartej w **Art. 5 pkt 8 ustawy**, która określa zakres przedmiotowy i czasowy tej informacji.\n\n1.  **Zakres informacji:** Zgodnie z ustawą, informacja o podróży w czasie rzeczywistym **musi** obejmować:\n    *   a) rozkłady jazdy, lotów lub rejsów,\n    *   b) dalsze połączenia tym samym środkiem transportu,\n    *   c) podstawowe możliwości przesiadek,\n    *   d) **odwołania** danej podróży,\n    *   e) **opóźnienia** w rozpoczęciu podróży,\n    *   f) **zakłócenia** ruchu.\n2.  **Czas reakcji ("Niezwłocznie"):** Ustawa precyzuje, że informacje o odwołaniach, opóźnieniach i zakłóceniach (lit. d–f) muszą być udzielane **niezwłocznie po ich otrzymaniu** przez usługodawcę.\n3.  **Kanały dystrybucji:** Informacja ta ma być przekazywana przez systemy dynamicznej informacji pasażerskiej: strony internetowe, aplikacje mobilne, interaktywne ekrany informacyjne lub terminale samoobsługowe.\n4.  **Dostępność cyfrowa komunikatu:** Zgodnie z Art. 12 ust. 2 i normą EN 301 549, dynamiczna zmiana treści (np. pojawienie się komunikatu o opóźnieniu na ekranie lub w aplikacji) musi być zakomunikowana technologiom asystującym. Wymaga to zgodności z kryterium **Status Messages (Komunikaty o stanie)** – klauzula **9.4.1.3 / 11.4.1.3** normy EN 301 549 [5, 6]. Użytkownik niewidomy musi usłyszeć o zmianie statusu (opóźnieniu) bez konieczności ponownego przesuwania fokusu po całej stronie.']

### Evaluation
Przegląd materiałów informacyjnych i kanałów powiadamiania; weryfikacja dostępności alternatywnych formatów i kontaktu do wsparcia.

### Checklist
- Kompletność danych (Zgodność z Art. 5 pkt 8)
- **Działanie:** Sprawdź aplikację mobilną lub tablicę odjazdów w momencie wystąpienia zakłóceń (lub symulacji).
- **Sprawdzenie:** Czy system wyświetla informacje o czasie opóźnienia i odwołaniach?
    - *Błąd:* Wyświetlanie tylko statycznego rozkładu jazdy bez uwzględnienia bieżących opóźnień jest naruszeniem wymogu informowania o "podróży w czasie rzeczywistym".
- Dostępność komunikatów dynamicznych (Software/Web)
- **Działanie:** Uruchom czytnik ekranu (np. TalkBack/VoiceOver) na stronie/aplikacji śledzącej pojazd.
- **Sprawdzenie:** Czy w momencie aktualizacji czasu przyjazdu lub pojawienia się komunikatu o awarii, czytnik ekranu automatycznie ogłasza tę informację (np. "Uwaga: pociąg opóźniony 10 minut")?
    - Jeśli informacja wizualna się zmienia, a czytnik milczy – usługa nie spełnia wymogu dostępności informacji w czasie rzeczywistym.
- Ekrany i terminale (Hardware/Interfejs)
- **Działanie:** Podejdź do interaktywnego kiosku informacyjnego na dworcu.
- **Sprawdzenie:** Czy informacje o opóźnieniach prezentowane na ekranie są dostępne w trybie bezwzrokowym (przez gniazdo słuchawkowe i syntezę mowy - zgodnie z Art. 9 ust. 1)? Czy osoby słabosłyszące mają dostęp do tych informacji wizualnie (tekst), jeśli są one ogłaszane głosowo przez system nagłośnienia (wymóg dwukanałowości - Art. 12 ust. 2 pkt 1 lit. a)?
- Alternatywne kanały wsparcia
- **Sprawdzenie:** Czy w przypadku awarii systemów cyfrowych wskazano kontakt (np. numer infolinii lub punkt obsługi), gdzie pasażer ze szczególnymi potrzebami może uzyskać te informacje werbalnie?

---

## U.15.02.01 U.15.02.01 Udostępnienie informacji o dostępności obiektów i wsparciu dla osób ze szczególnymi potrzebami (Art. 15 ust. 2 pkt 1)

### Procedure
['Warto podkreślić, że ten przepis nie nakłada nowych wymogów architektonicznych na sam budynek, lecz nakazuje szczegółowe informowanie o stanie faktycznym w odniesieniu do konkretnych kryteriów z ustawy z 2019 r.', 'Przepis ten precyzuje, co dokładnie musi znaleźć się w opisie dostępności budynku. Nie wystarczy ogólne stwierdzenie "dworzec dostępny". Ustawa wymaga odniesienia się do konkretnych punktów ustawy z 2019 r.:\n\n1.  **Przestrzenie komunikacyjne (Art. 6 pkt 1 ustawy z 2019 r.):** Informacja musi opisywać stan:\n    *   Ciągów komunikacyjnych (korytarzy, schodów, wind).\n    *   Wolność od barier poziomych (progów) i pionowych (schodów bez wind).\n    *   Dostęp do wszystkich pomieszczeń (z wyłączeniem technicznych).\n2.  **Informacja o rozkładzie pomieszczeń (Art. 6 pkt 3 lit. a ustawy z 2019 r.):** Usługodawca musi poinformować, czy i w jaki sposób zapewnia informację o rozkładzie pomieszczeń (np. "W holu głównym znajduje się plan dotykowy", "Tablice informacyjne posiadają duży kontrast").\n    *   **Wymóg wielokanałowości:** Informacja o rozkładzie pomieszczeń musi być dostępna w sposób **wizualny i dotykowy lub głosowy**.\n3.  **Pies asystujący (Art. 6 pkt 3 lit. b ustawy z 2019 r.):** Informacja musi wyraźnie potwierdzać (lub opisywać warunki) wstępu do budynku z psem asystującym.\n4.  **Dostępność cyfrowa opisu:** Sama informacja o tych udogodnieniach (opublikowana na www lub w aplikacji) musi być dostępna cyfrowo zgodnie z Art. 12 ust. 2 (np. tekst alternatywny dla mapy dworca).']

### Evaluation
Przegląd i Kontrola materiałów informacyjnych, weryfikacja obecności alternatywnych formatów oraz potwierdzenie możliwości zamówienia wsparcia (kontakt, system rezerwacji).

### Checklist
- Weryfikacja opisu architektonicznego (Zgodność z Art. 6 pkt 1 ustawy z 2019 r.)
- **Działanie:** Przeczytaj opis dworca/terminala na stronie www.
- **Sprawdzenie:** Czy tekst zawiera informacje o:
    -   Wejściach bezbarierowych (lub lokalizacji podjazdów)?
    -   Dostępności wind/platform na poszczególne poziomy/perony?
    -   Dostępności toalet (jeśli są częścią infrastruktury obsługi pasażera)?
- Weryfikacja informacji o nawigacji (Zgodność z Art. 6 pkt 3 lit. a ustawy z 2019 r.)
- **Działanie:** Szukaj informacji o systemach orientacji przestrzennej.
- **Sprawdzenie:** Czy usługodawca informuje o obecności:
    -   Planów tyflograficznych (map dotykowych)?
    -   Oznaczeń w alfabecie Braille'a (np. na poręczach, przyciskach wind)?
    -   Systemów głosowych (np. beacony, komunikaty głosowe w windach)?
    -   *Błąd:* Brak wzmianki o systemach dla osób niewidomych sugeruje niespełnienie wymogu informacyjnego, nawet jeśli systemy te fizycznie istnieją.
- Weryfikacja informacji o psach asystujących
- **Działanie:** Sprawdź regulamin lub zakładkę "Dostępność".
- **Sprawdzenie:** Czy znajduje się tam wyraźna informacja o prawie wstępu z psem asystującym? (Jest to kluczowe dla upewnienia pasażera, że nie zostanie wyproszony przez ochronę).
- Weryfikacja informacji o psach asystujących
- **Działanie:** Sprawdź regulamin lub zakładkę "Dostępność".
- **Sprawdzenie:** Czy znajduje się tam wyraźna informacja o prawie wstępu z psem asystującym? (Jest to kluczowe dla upewnienia pasażera, że nie zostanie wyproszony przez ochronę).

---

## U.15.02.02 U.15.02.02 Informacja o spełnieniu podstawowych wymagań bezpieczeństwa i dostępności obiektów (Art. 15 ust. 2 pkt 2)

### Procedure
['Przepis ten doprecyzuje zakres merytoryczny informacji o budynku. Usługodawca musi odnieść się do dwóch konkretnych aspektów zdefiniowanych w Prawie budowlanym:\n\n1.  **Bezpieczeństwo użytkowania (Art. 5 ust. 1 pkt 1 lit. d Prawa budowlanego):**\n    -   Informacja nie może ograniczać się do wygody, musi dotyczyć bezpieczeństwa.\n    -   Należy poinformować o elementach takich jak: nawierzchnie antypoślizgowe, odpowiednie oświetlenie ciągów komunikacyjnych, zabezpieczenie przeszkleń (oznaczenia kontrastowe na szklanych drzwiach/witrynach), stabilność poręczy i balustrad.\n    -   W kontekście osób ze szczególnymi potrzebami, bezpieczeństwo użytkowania obejmuje również **procedury ewakuacyjne** (np. informacja o strefach oczekiwania na ewakuację dla osób na wózkach).\n\n2.  **Niezbędne warunki do korzystania z obiektów (Art. 5 ust. 1 pkt 4 Prawa budowlanego):**\n    -   Przepis ten nakazuje zapewnienie warunków dla osób niepełnosprawnych i starszych.\n    -   W informacji pasażerskiej/klienckiej musi znaleźć się opis rozwiązań niwelujących bariery, takich jak: pochylnie (rampy) o odpowiednim kącie nachylenia, windy, odpowiednia szerokość drzwi i przejść, dostępność toalet (przestrzeń manewrowa, pochwyty).\n\n**Interpretacja praktyczna:**\nUsługodawca nie może napisać jedynie „Obiekt spełnia wymogi prawa”. Musi dostarczyć konkretnych danych, które pozwolą osobie z niepełnosprawnością ocenić, czy będzie w stanie bezpiecznie skorzystać z usługi (np. „Wejście posiada drzwi obrotowe nieprzystosowane dla wózków, wejście boczne z domofonem znajduje się 10 m dalej”).']

### Evaluation
Przegląd publikowanych oświadczeń i dokumentów informacyjnych oraz potwierdzenie, że zawierają one wymienione elementy i wskazania kontaktowe.

### Checklist
- Weryfikacja informacji o bezpieczeństwie (Safety)
- **Sprawdzenie:** Czy w opisie obiektu znajdują się informacje dotyczące bezpieczeństwa poruszania się?
    - Czy wskazano, że powierzchnie są antypoślizgowe (istotne dla osób o ograniczonej mobilności)?
    - Czy opisano sposób oznaczenia powierzchni szklanych (istotne dla osób słabowidzących)?
    - Czy podano informacje o procedurach ewakuacyjnych dla osób, które nie mogą korzystać ze schodów (np. czy są krzesła ewakuacyjne, czy windy są pożarowe)?
- Weryfikacja informacji o dostępności architektonicznej
- **Sprawdzenie:** Czy opis zawiera szczegóły dotyczące:
    - **Dojścia:** Czy jest bezbarierowe, czy wymaga pokonania schodów?
    - **Toalet:** Czy w strefie obsługi klienta znajduje się toaleta dostępna?
    - **Obsługi:** Czy stanowiska obsługi są obniżone lub dostępne dla osób na wózkach?
- Aktualność i kontakt („Bieżący stan”)
- **Działanie:** Zweryfikuj, czy podano kontakt do zarządcy obiektu lub punktu informacyjnego.
- **Uzasadnienie:** Zgodnie z Art. 15 ust. 1, informacja musi dotyczyć „bieżącego stanu”. Jeśli winda ulegnie awarii, opis statyczny staje się nieprawdziwy w kontekście bezpieczeństwa i dostępności. Musi istnieć kanał zgłaszania usterek lub uzyskania informacji o awariach.
- Dostępność cyfrowa informacji
- **Sprawdzenie:** Czy dokument zawierający te informacje (np. Plan Ewakuacji, Opis Dworca) jest dostępny cyfrowo? (zgodnie z Art. 12 ust. 2 i Art. 15 ust. 1). Częstym błędem jest publikowanie planów ewakuacyjnych jako skanów (obrazków) bez opisu tekstowego, co czyni informację o bezpieczeństwie niedostępną dla osób niewidomych.

---

## U.32.02.01.a U.32.02.01.a Informacje o oferowanej usłudze (Art. 32)

### Procedure
['Przepis ten nakłada na usługodawcę obowiązek zapewnienia dostępności formy dokumentów regulujących świadczenie usługi. Kluczowym aspektem jest to, że regulamin (lub dokument równoważny) nie może być dostępny tylko dla wybranych klientów – musi być dostępny dla osób ze szczególnymi potrzebami.\nAnaliza prawna w oparciu o Art. 12 ust. 2:\n1. **Forma publikacji**: Informacja o usłudze musi być podana do publicznej wiadomości. Usługodawca ma wybór między formą papierową a elektroniczną, jednak wybrana forma musi spełniać rygory dostępności określone w Art. 12 ust. 2.\n2. **Dostępność cyfrowa (Forma elektroniczna)**: Jeśli regulamin jest udostępniany elektronicznie (np. jako PDF na stronie www, treść w aplikacji mobilnej), musi spełniać zasady postrzegalności, funkcjonalności, zrozumiałości i kompatybilności (Art. 12 ust. 2 pkt 2). Oznacza to konieczność zgodności z normą EN 301 549:\n    - Dla dokumentów (PDF, DOCX): Zgodność z Rozdziałem 10 normy (Dokumenty nieinternetowe) [i.795].\n    - Dla treści na stronach WWW: Zgodność z Rozdziałem 9 normy (Internet/WCAG 2.1 AA) [i.770, i.793].\n3. **Dostępność sensoryczna (Forma papierowa/elektroniczna)**: Niezależnie od nośnika, informacja musi być prezentowana:\n    - Za pomocą więcej niż jednego kanału sensorycznego (np. tekst wizualny, który może być odczytany głosowo przez technologię asystującą).\n    - Przy użyciu odpowiedniej czcionki i kontrastu (Art. 12 ust. 2 pkt 1 lit. d).\n    - W sposób zrozumiały (jasny język).', '**Uwaga dotycząca treści (Art. 33)**: Niniejszy punkt (Art. 32 ust. 2 pkt 1 lit. a) weryfikuje sam fakt publikacji informacji o usłudze w dostępnej formie. Szczegółowa weryfikacja czy w tej informacji zawarto dane o dostępności architektonicznej lub certyfikatach jest przedmiotem weryfikacji dla Art. 33.']

### Evaluation
Inspekcja techniczna dokumentu

### Checklist
- Lokalizacja i forma (Dostępność publiczna)
- **Działanie**: Wejdź na stronę internetową usługi lub do aplikacji mobilnej. Znajdź „Regulamin”, „Zasady świadczenia usług” lub „Informacje o usłudze”.
- **Sprawdzenie**: Czy dokument jest łatwo dostępny (nie wymaga logowania, jeśli jest to informacja o oferowanej usłudze)? Czy jest dostępny w formie tekstowej (HTML/PDF), a nie jako skan (obraz)?
- Weryfikacja techniczna dokumentu elektronicznego (WCAG/PDF UA). Jeśli regulamin jest plikiem do pobrania (np. PDF):
- **Sprawdzenie**:
  - Semantyka (Tagi): Czy plik posiada strukturę tagów (nagłówki, akapity, listy)? (Klauzula 10.1.3.1).
  - Kolejność czytania: Czy tekst jest odczytywany w logicznej kolejności przez czytnik ekranu? (Klauzula 10.1.3.2).
  - Tytuł: Czy dokument ma zdefiniowany tytuł w metadanych? (Klauzula 10.2.4.2).
  - Kontrast: Czy tekst regulaminu zachowuje minimalny kontrast 4,5:1? (Klauzula 10.1.4.3).
- Weryfikacja treści na stronie WWW Dotyczy Art. 12 ust. 2 pkt 3 oraz EN 301 549 Klauzula 9 (Web). Jeśli regulamin jest treścią strony (HTML):
- **Sprawdzenie**:
  - Skalowanie: Czy tekst regulaminu można powiększyć do 200% bez utraty czytelności i konieczności przewijania poziomego (z wyjątkami)? (Klauzula 9.1.4.4).
  - Dostępność z klawiatury: Czy można przewijać i nawigować po treści regulaminu używając wyłącznie klawiatury? (Klauzula 9.2.1.1).
- Zrozumiałość (Art. 12 ust. 2 pkt 1 lit. b)
- **Sprawdzenie**: Czy regulamin jest napisany w sposób możliwie prosty i zrozumiały, czy też sformatowanie (np. ściana tekstu, brak akapitów, mała czcionka) utrudnia jego percepcję?

---

## U.32.02.01.b U.32.02.01.b Informacje o sposobie korzystania z usługi (Art. 32)

### Procedure
['Wymóg ten obliguje usługodawcę do dostarczenia „instrukcji obsługi” samej usługi. Informacje te, zawarte w regulaminie lub dokumencie pomocniczym (np. „Przewodnik użytkownika”, sekcja „Pomoc”), muszą być dostępne cyfrowo i percepcyjnie.\n\nAnaliza w oparciu o Art. 12 ust. 2 oraz normę EN 301 549:\n\n1.  **Zakres treści („Informacje niezbędne”):** Chodzi o opis czynności, które klient musi wykonać, aby usługa została zrealizowana. Obejmuje to np.:\n    -   Zasady logowania i uwierzytelniania (zgodność z Art. 16 dla bankowości lub Art. 18 dla e-commerce).\n    -   Opis metod płatności.\n    -   Procedury bezpieczeństwa (np. limity czasu sesji).\n    -   Sposób składania reklamacji.\n2.  **Dostępność formy (Art. 12):** Instrukcje te nie mogą być blokiem trudnego tekstu prawnego. Muszą być:\n    -   **Zrozumiałe (Art. 12 ust. 2 pkt 1 lit. b):** Napisane prostym językiem, logicznie ustrukturyzowane [i.74].\n    -   **Dostępne cyfrowo (Art. 12 ust. 2 pkt 2):** Jeśli są publikowane online, muszą spełniać WCAG 2.1 AA (Rozdział 9 EN 301 549) lub PDF/UA (Rozdział 10 EN 301 549).\n    -   **Multimodalne (Art. 12 ust. 2 pkt 1 lit. a):** Informacje wizualne (np. zrzuty ekranu w instrukcji) muszą posiadać tekst alternatywny.\n3.  **Formaty tekstowe dla AAC (Art. 12 ust. 2 pkt 1 lit. c):** Informacje te muszą być przygotowane w formatach tekstowych, które umożliwiają ich przetworzenie przez oprogramowanie do komunikacji alternatywnej i wspomagającej (np. czytniki, syntezatory).']

### Evaluation
Analiza dokumentów

### Checklist
- Weryfikacja kompletności i zrozumiałości (Human Readable)
- **Działanie:** Przeanalizuj sekcję "Jak korzystać z usługi" lub odpowiednie paragrafy regulaminu.
- **Sprawdzenie:** Czy opis procedury (np. "Jak odzyskać hasło") jest jasny i zrozumiały? Czy unika się żargonu prawnego tam, gdzie opisuje się czynności techniczne?
    - *Błąd:* Instrukcja korzystania z usługi jest ukryta wewnątrz długiego, niesformatowanego bloku tekstu prawnego, co utrudnia jej znalezienie i zrozumienie (naruszenie wymogu zrozumiałości z Art. 12).
- Weryfikacja techniczna (WCAG / EN 301 549)
*Dla instrukcji w formie strony WWW (HTML) lub pliku (PDF).*
- **Sprawdzenie:**
    -   **Struktura:** Czy instrukcja używa nagłówków i list do porządkowania kroków (np. Krok 1, Krok 2)? (Klauzula 9.1.3.1 / 10.1.3.1).
    -   **Grafika:** Jeśli instrukcja zawiera zrzuty ekranu (screenshoty) pokazujące, gdzie kliknąć – czy posiadają one tekst alternatywny opisujący akcję? (Klauzula 9.1.1.1 / 10.1.1.1).
    -   **Linki:** Czy linki do formularzy lub podstron mają zrozumiałe etykiety (np. "Przejdź do logowania" zamiast "Kliknij tutaj")? (Klauzula 9.2.4.4 / 10.2.4.4).
- Weryfikacja dostępności instrukcji wideo (Jeśli dotyczy)
- **Działanie:** Jeśli usługodawca udostępnia wideoporadniki (np. "Jak kupić bilet w aplikacji").
- **Sprawdzenie:** Czy filmy te posiadają napisy dla niesłyszących (Art. 12 ust. 2 pkt 1 lit. a w zw. z EN 301 549 9.1.2.2)? Czy posiadają audiodeskrypcję lub transkrypcję dla niewidomych?.

---

## U.32.02.01.c U.32.02.01.c Informacje o dostępności usług (Art. 32)

### Procedure
['Przepis ten nakłada na usługodawcę obowiązek „autodeklaracji” wewnątrz dokumentów regulujących usługę. Nie wystarczy spełniać wymagań – trzeba o tym napisać w sposób dostępny dla klienta.\n\nAnaliza prawna i techniczna:\n1.  **Opis rozwiązań („W jaki sposób”):** Ustawa wymaga podania informacji o sposobie spełniania wymagań. Oznacza to konieczność opisania konkretnych funkcjonalności lub udogodnień.\n    -   *Zgodność z normą EN 301 549 (Klauzula 12.1.1):* Dokumentacja produktu/usługi powinna zawierać listę funkcji dostępności oraz opisy sposobów ich wykorzystania.\n    -   *Przykłady:* Informacja, że aplikacja bankowa obsługuje logowanie biometryczne (alternatywa dla hasła), że infolinia obsługuje SMS, lub że strona internetowa jest zgodna z WCAG 2.1 na poziomie AA.\n2.  **Lokalizacja:** Informacja ta musi znaleźć się w **regulaminie** lub dokumencie równoważnym (np. Ogólne Warunki Umowy, Karta Produktu). Nie może być ukryta wyłącznie w FAQ na stronie internetowej, jeśli nie stanowi ono integralnej części warunków świadczenia usługi.\n3.  **Dostępność formy (Art. 12):** Sam opis (tekst w regulaminie) musi być dostępny cyfrowo (zgodnie z Art. 12 ust. 2). Oznacza to, że plik regulaminu (np. PDF) musi być tagowany, posiadać strukturę nagłówków i odpowiedni kontrast, aby osoba korzystająca z czytnika ekranu mogła do tej informacji dotrzeć.']

### Evaluation
Sprawdzenie zawartości merytorycznej oraz technicznej

### Checklist
- Weryfikacja merytoryczna (Obecność informacji)**
- **Działanie:** Przeszukaj tekst regulaminu lub dokumentu „O usłudze” pod kątem słów kluczowych: „dostępność”, „niepełnosprawność”, „udogodnienia”, „WCAG”.
- **Sprawdzenie:** Czy dokument zawiera sekcję opisującą, jakie cechy dostępności posiada usługa?
    - *Przykład pozytywny:* „Serwis bankowości elektronicznej jest dostosowany do obsługi przez czytniki ekranu (NVDA, JAWS) i umożliwia nawigację wyłącznie klawiaturą”.
    - *Błąd:* Regulamin zawiera jedynie ogólne zdanie „Usługodawca dokłada starań, aby usługa była dostępna”, bez wskazania konkretnych rozwiązań (naruszenie wymogu informowania „w jaki sposób” usługa spełnia wymagania).
- Weryfikacja merytoryczna (Obecność informacji)**
- **Działanie:** Przeszukaj tekst regulaminu lub dokumentu „O usłudze” pod kątem słów kluczowych: „dostępność”, „niepełnosprawność”, „udogodnienia”, „WCAG”.
- **Sprawdzenie:** Czy dokument zawiera sekcję opisującą, jakie cechy dostępności posiada usługa?
    - *Przykład pozytywny:* „Serwis bankowości elektronicznej jest dostosowany do obsługi przez czytniki ekranu (NVDA, JAWS) i umożliwia nawigację wyłącznie klawiaturą”.
    - *Błąd:* Regulamin zawiera jedynie ogólne zdanie „Usługodawca dokłada starań, aby usługa była dostępna”, bez wskazania konkretnych rozwiązań (naruszenie wymogu informowania „w jaki sposób” usługa spełnia wymagania).
- Spójność z deklaracją (Cross-check)**
*Jeśli dotyczy.*
- **Sprawdzenie:** Czy informacje w regulaminie są spójne z informacjami w Deklaracji Dostępności (publikowanej na podstawie innej ustawy, jeśli dotyczy podmiotu publicznego) lub z informacjami w sklepach z aplikacjami (App Store/Google Play)? Rozbieżności mogą sugerować nierzetelność informacji.

---

## U.32.02.02 U.32.02.02 Informacja o procesie oferowania i monitorowania usług (Art. 32)

### Procedure
['Przepis ten nakłada obowiązek opisania „cyklu życia” usługi. Użytkownik ma prawo wiedzieć, jak wygląda proces jej dostarczania oraz w jaki sposób usługodawca dba o jej jakość (monitorowanie).\n\nAnaliza prawna i techniczna:\n1.  **Opis procesu:** Usługodawca musi wyjaśnić, na czym polega proces oferowania/świadczenia.\n    -   *Przykłady:* Opis ścieżki zakupowej, procedury otwierania konta, harmonogramu aktualizacji aplikacji.\n2.  **Informacja o monitorowaniu:** Jest to kluczowy element tego punktu. Usługodawca musi poinformować, czy i jak monitoruje zgodność usługi z wymaganiami.\n    -   Zgodnie z **Art. 32 ust. 1**, usługodawca ma obowiązek przeprowadzać ocenę zgodności. W punkcie 2 nakazuje się poinformowanie o tym procesie.\n    -   *Przykładowa treść:* „Nasza usługa jest poddawana cyklicznym audytom dostępności co 12 miesięcy” lub „Monitorujemy działanie serwisu w trybie ciągłym pod kątem błędów zgłaszanych przez użytkowników czytników ekranu”.\n3.  **Dostępność formy (Art. 12):** Informacja ta, będąc dokumentem (papierowym lub elektronicznym), musi spełniać rygory dostępności:\n    -   **Postać elektroniczna:** Musi być zgodna z WCAG 2.1 AA (dla stron WWW – EN 301 549 Rozdział 9) lub PDF/UA (dla dokumentów – EN 301 549 Rozdział 10).\n    -   **Multimodalność:** Informacja musi być dostępna dla więcej niż jednego zmysłu (np. tekst wizualny z możliwością odczytu głosowego).']

### Evaluation
Ocena treści oraz formy dokumentacji

### Checklist
- Weryfikacja zawartości (Obecność informacji o monitorowaniu)
- **Działanie:** Przejrzyj regulamin, politykę jakości, zakładkę „Dostępność” lub „O nas”.
- **Sprawdzenie:** Czy znajduje się tam opis, w jaki sposób usługodawca weryfikuje poprawność działania usługi?
    - *Przykład pozytywny:* Dokument zawiera zapis: „W celu zapewnienia najwyższej jakości, proces świadczenia usługi bankowości elektronicznej jest stale monitorowany, a zmiany w interfejsie są testowane z użytkownikami niewidomymi”.
    - *Błąd:* Brak jakiejkolwiek wzmianki o procedurach kontrolnych lub monitorowaniu jakości/dostępności.
- Weryfikacja dostępności cyfrowej dokumentu
- **Działanie:** Jeśli informacja jest plikiem PDF lub stroną HTML.
- **Sprawdzenie:**
    - Czy dokument ma zdefiniowany język (Lang attribute)? (Test C.9.3.1.1 / C.10.3.1.1).
    - Czy tekst jest skalowalny i czytelny przy powiększeniu? (Test C.9.1.4.4 / C.10.1.4.4).
    - Czy treść jest sformatowana w sposób logiczny (nagłówki), co ułatwia zrozumienie procesu? (Art. 12 ust. 2 pkt 1 lit. b – zrozumiałość).
- Weryfikacja spójności (Dobra praktyka)
- **Sprawdzenie:** Czy opis procesu (np. „Usługa dostępna 24/7”) jest zgodny z informacjami o ewentualnych przerwach technicznych (monitorowanie dostępności)? Informacja powinna być rzetelna.

---

## U.33.01.01 U.33.01.01 Informacja o dostępności usługi (Art. 33)

### Procedure
['Ten przepis precyzuje, co dokładnie musi znaleźć się w "informacji o oferowanej usłudze" w kontekście fizycznej dostępności miejsc obsługi klienta. Jest to kluczowe dla osób z niepełnosprawnością ruchową lub sensoryczną, które muszą wiedzieć, czy dostaną się do placówki, zanim się do niej udadzą.\n\nAnaliza prawna:\n1.  **Lokalizacja informacji:** Zgodnie z odesłaniem do Art. 32 ust. 2 pkt 1 lit. a, dane te muszą znaleźć się w **regulaminie** lub dokumencie równoważnym (np. "Karta informacyjna usługi", podstrona "Dostępność" linkowana z regulaminu).\n2.  **Alternatywa (Opis lub Certyfikat):** Ustawodawca dopuszcza dwie ścieżki spełnienia obowiązku:\n    *   **Ścieżka 1 (Opisowa):** Usługodawca opisuje "aktualny stan". Musi to obejmować nie tylko wnętrze (pomieszczenia), ale też **budynek** i **otaczającą infrastrukturę** (np. czy jest miejsce parkingowe dla niepełnosprawnych, czy chodnik ma obniżony krawężnik). Ważne jest zastrzeżenie: "w zakresie, w jakim te warunki umożliwiają korzystanie z usługi" – nie trzeba opisywać pomieszczeń technicznych niedostępnych dla klientów.\n    *   **Ścieżka 2 (Certyfikacyjna):** Jeśli usługodawca uzyskał **certyfikat dostępności** (wydawany na podstawie art. 19 ust. 1 ustawy z 2019 r. o zapewnianiu dostępności), informacja o posiadaniu tego certyfikatu (ważnego) jest wystarczająca, gdyż potwierdza on spełnienie norm.\n3.  **Dostępność cyfrowa:** Ponieważ informacja ta jest częścią opisu usługi z Art. 12, sam tekst opisu (na stronie www lub w PDF) musi być dostępny cyfrowo (WCAG 2.1 AA / EN 301 549), aby np. osoba niewidoma mogła przeczytać, czy budynek posiada windę.']

### Evaluation
Analiza treści

### Checklist
- Weryfikacja zawartości (Obecność informacji)
- **Działanie:** Przejrzyj regulamin lub dedykowaną sekcję o dostępności.
- **Pytanie 1:** Czy podano informację o certyfikacie dostępności (data wydania, podmiot certyfikujący)?
    - Jeśli **TAK**: Wymóg spełniony (ścieżka 2).
- **Pytanie 2:** Jeśli nie ma certyfikatu, czy znajduje się opis dostępności architektonicznej placówek?
    - *Sprawdź obecność informacji o:* wejściu do budynku (schody/pochylnia), dostępności wewnątrz (windy, szerokość przejść), infrastrukturze (parking).
    - *Błąd:* Brak jakiejkolwiek informacji o barierach lub udogodnieniach architektonicznych w dokumencie opisującym usługę jest naruszeniem Art. 33.
- Rzetelność opisu (Zgodność ze stanem faktycznym - Opcjonalne)
*Wymaga wizji lokalnej lub weryfikacji zdjęciowej.*
- **Sprawdzenie:** Czy deklaracja "placówka dostępna dla wózków" jest prawdziwa? (np. czy pochylnia nie jest zbyt stroma, czy wejście nie ma progu > 2 cm). Podanie nieprawdziwych informacji narusza wymóg "aktualnego stanu".
- Dostępność cyfrowa informacji (Art. 12)
*Zgodnie z EN 301 549 Rozdział 9 (Web) lub 10 (Dokumenty).*
- **Działanie:** Sprawdź technicznie tekst opisu (np. na stronie www).
- **Sprawdzenie:**
    - Czy opis jest czytelny dla czytnika ekranu (nie jest skanem ulotki)?
    - Czy zastosowano odpowiedni kontrast tekstu?
    - Czy język opisu jest zrozumiały (np. unikanie technicznego żargonu budowlanego typu "przylga drzwiowa", jeśli nie jest to konieczne)?

---

## U.33.02 U.33.02 Informacja o dostępności usługi (Art. 33)

### Procedure
['Przepis ten narzuca strukturę i szczegółowość opisu dostępności. Poprzez odesłanie do **Art. 15 ust. 2**, ustawa obliguje każdego usługodawcę (nie tylko z branży transportowej) do uwzględnienia w informacji o usłudze następujących obszarów:\n\n1.  **Dostępność architektoniczna (Ustawa o dostępności 2019, art. 6 pkt 1):** Opis musi wyjaśniać, czy i jak zapewniono:\n    -   Wolne od barier przestrzenie komunikacyjne (poziome i pionowe) – np. czy są schody, windy, pochylnie.\n    -   Dostęp do wszystkich pomieszczeń (z wyłączeniem technicznych).\n    -   Informację o rozkładzie pomieszczeń (wizualną, dotykową lub głosową).\n    -   Możliwość wstępu z psem asystującym.\n    -   Możliwość ewakuacji osób ze szczególnymi potrzebami.\n2.  **Dostępność informacyjno-komunikacyjna (Ustawa o dostępności 2019, art. 6 pkt 3 lit. a i b):** Opis musi zawierać informacje o:\n    -   Obsłudze z wykorzystaniem środków wspierających komunikowanie się (np. tłumacz polskiego języka migowego PJM – online lub na miejscu).\n    -   Instalacji urządzeń wspomagających słyszenie (np. pętle indukcyjne, systemy FM).\n3.  **Zgodność z Prawem budowlanym:** Informacja powinna potwierdzać spełnienie podstawowych warunków bezpieczeństwa i dostępności obiektów użyteczności publicznej (zgodnie z art. 5 ust. 1 pkt 1 lit. d oraz pkt 4 Prawa budowlanego).', '**Interpretacja:** Usługodawca nie może napisać jedynie „Lokal jest dostępny”. Musi napisać konkretnie: „Lokal posiada wejście z poziomu chodnika (brak barier), toaletę dla osób niepełnosprawnych, pętlę indukcyjną przy stanowisku nr 2 oraz zapewnia dostęp do tłumacza PJM online”.']

### Evaluation
Szczegółowa analiza

### Checklist
- Kompletność opisu architektonicznego (Bariery i Przestrzeń)
- **Działanie:** Przeczytaj opis dostępności placówki/budynku.
- **Sprawdzenie:** Czy dokument zawiera informacje o:
    -   Wejściu (schody/winda/pochylnia)?
    -   Toaletach (dostępność/brak)?
    -   Możliwości wejścia z psem asystującym (jest to wymóg ustawowy)?
    -   *Błąd:* Opis pomija kwestię barier pionowych (np. brak informacji o windzie, gdy lokal jest na piętrze).
- Kompletność opisu komunikacyjnego (Zmysły)
- **Działanie:** Sprawdź sekcję dotyczącą obsługi klienta.
- **Sprawdzenie:** Czy dokument informuje o:
    -   Dostępności pętli indukcyjnej (lub innego systemu wspomagania słuchu)?
    -   Dostępności tłumacza języka migowego (PJM)?
    -   *Uwaga:* Jeśli usługa nie zapewnia tych rozwiązań, rzetelna informacja powinna o tym wspominać (np. „Brak pętli indukcyjnej”), aby nie wprowadzać klienta w błąd co do „aktualnego stanu”. Jednakże Art. 33 ust. 2 w zw. z Art. 15 ust. 2 sugeruje, że opis ma dotyczyć „spełniania wymagań”, co wywiera presję na faktyczne zapewnienie tych udogodnień.
- Precyzja i aktualność
- **Sprawdzenie:** Czy informacja odnosi się do *konkretnych* lokalizacji świadczenia usługi (np. lista placówek z opisem), czy jest tylko ogólną deklaracją polityki firmy? Ustawa wymaga podania informacji o stanie pomieszczeń i budynków „wykorzystywanych do oferowania lub świadczenia usług”, co implikuje konkretność.

---

## U.16.00.01 U.16.00.01 Zapewnienie dostępności usług bankowości detalicznej — identyfikacja, podpisy elektroniczne, bezpieczeństwo i usługi płatnicze (Art. 16 pkt 1)

### Procedure
['Wymóg ten nakłada na banki obowiązek zapewnienia, aby krytyczne ścieżki procesowe (logowanie, przelew, podpisanie umowy) były dostępne cyfrowo zgodnie z zasadami POUR (Postrzegalność, Funkcjonalność, Zrozumiałość, Kompatybilność).\n\nKluczowe aspekty techniczne wg normy EN 301 549:\n1.  **Metody identyfikacji (Biometria):** Zgodnie z klauzulą **5.3 (Biometria)**, jeśli bank stosuje biometrię (odcisk palca, FaceID) do logowania lub autoryzacji, nie może to być jedyna metoda. Musi istnieć alternatywa dla osób, które nie mogą użyć danej cechy biologicznej (np. PIN, hasło).\n2.  **Bezpieczeństwo (Limity czasu):** Sesje bankowe wygasają ze względów bezpieczeństwa. Zgodnie z klauzulą **9.2.2.1 / 11.2.2.1 (Dostosowanie czasu)**, użytkownik musi zostać ostrzeżony przed wylogowaniem i mieć możliwość przedłużenia sesji (np. przez naciśnięcie spacji), chyba że jest to wyjątek czasu rzeczywistego (np. aukcja walutowa).\n3.  **Składanie podpisów elektronicznych:** Proces ten musi być:\n    *   **Postrzegalny:** Dokument do podpisania musi być dostępny dla czytnika ekranu (nie skan obrazkowy), aby osoba niewidoma wiedziała, co podpisuje (zgodność z Rozdziałem 10 normy).\n    *   **Funkcjonalny:** Mechanizm złożenia podpisu (np. wpisanie kodu SMS, kliknięcie przycisku w aplikacji) musi być obsługiwalny bez użycia myszy (klawiatura/przełączniki).\n4.  **Zapobieganie błędom (Usługi płatnicze):** Zgodnie z klauzulą **9.3.3.4 / 11.3.3.4 (Zapobieganie błędom w sprawach finansowych)**, system musi umożliwiać sprawdzenie, potwierdzenie i korektę danych przelewu przed jego ostatecznym wysłaniem lub transakcja musi być odwracalna.']

### Evaluation
Przegląd dokumentacji i materiałów informacyjnych; weryfikacja zgodności interfejsów z technologiami wspomagającymi; potwierdzenie dostępności alternatywnych metod identyfikacji i podpisu oraz procedur kontaktowych.

### Checklist
- Weryfikacja metod identyfikacji (Biometria i Alternatywy)
- **Działanie:** Spróbuj zalogować się lub autoryzować transakcję.
- **Sprawdzenie:** Czy system wymusza użycie biometrii (np. "konieczność mrugnięcia do kamery") bez żadnej innej opcji?
    - *Wynik:* Jeśli nie ma alternatywy (np. hasła/PINu) dostępnej dla osoby, która nie może wykonać gestu lub nie posiada danej cechy fizycznej, wymóg nie jest spełniony.
- Weryfikacja procesu płatności (Zapobieganie błędom)
- **Działanie:** Wypełnij formularz przelewu.
- **Sprawdzenie:** Czy przed ostatecznym obciążeniem rachunku system wyświetla ekran podsumowania, na którym można zweryfikować kwotę i numer konta oraz cofnąć się do edycji? Brak takiego kroku (natychmiastowe wysłanie po wpisaniu danych) jest naruszeniem standardu dla transakcji finansowych.
- Weryfikacja dokumentów do podpisu (Podpis elektroniczny)
*Dotyczy Art. 16 pkt 1 (składanie podpisów) i Rozdziału 10 normy.*
- **Działanie:** Otwórz dokument, który wymaga "podpisania" (zaakceptowania) w systemie bankowym.
- **Sprawdzenie:** Czy treść umowy/regulaminu jest czytana przez czytnik ekranu? Czy nawigacja po dokumencie jest logiczna? Podpisanie dokumentu, którego treści użytkownik nie może poznać (bo jest np. obrazkiem tekstu), narusza zasadę postrzegalności i zrozumiałości.
- Weryfikacja tokenów sprzętowych/mobilnych (Kompatybilność)**
*Dotyczy klauzul 11.5.2 (Współpraca z technologią wspomagającą).*
- **Sprawdzenie:** Jeśli do autoryzacji wymagane jest przepisanie kodu z aplikacji mobilnej (tokena), czy ten kod jest odczytywany przez czytnik ekranu (TalkBack/VoiceOver) w telefonie? Jeśli aplikacja tokena jest "niema", usługa płatnicza jest niedostępna.

---

## U.16.00.02 U.16.00.02 Udostępnienie informacji w języku polskim i na żądanie w języku obcym (poziom B2) (Art. 16 pkt 2)

### Procedure
['Wymóg ten ma dwa kluczowe aspekty: prawny (zgoda) i lingwistyczny (poziom B2).\n\n1.  **Zasada języka polskiego:** Domyślnym językiem komunikacji i dokumentów jest język polski. Każda informacja (regulamin, umowa, komunikat w aplikacji) musi być dostępna po polsku.\n2.  **Tryb konsensualny dla języka obcego:** Bank może przekazywać informacje w innym języku (np. angielskim, ukraińskim) tylko wtedy, gdy uzyska na to **zgodę** konsumenta. Oznacza to, że bank nie może jednostronnie narzucić obsługi w języku obcym, nawet jeśli jest to bank zagraniczny działający w Polsce.\n3.  **Standard jakości (Poziom B2):** Ustawodawca narzuca konkretny poziom skomplikowania języka obcego – **B2 (średniozaawansowany wyższy)** wg ESOKJ (CEFR).\n    -   Język nie może być zbyt prymitywny (uniemożliwiający precyzyjne opisanie warunków finansowych).\n    -   Język nie może być zbyt hermetyczny/akademicki (poziom C2), jeśli utrudniałoby to zrozumienie przeciętnemu użytkownikowi posługującemu się tym językiem jako obcym.\n    -   Wymóg ten chroni konsumenta przed sytuacją, w której otrzymuje dokumenty w „niezrozumiałym” żargonie lub w „łamanym” języku (np. słabe tłumaczenie maszynowe).\n4.  **Relacja z Art. 12 (Zrozumiałość):** Nawet jeśli informacja jest w języku obcym (za zgodą), nadal musi spełniać wymogi Art. 12, czyli być **postrzegalna** (np. odpowiedni kontrast, dostępna dla czytnika ekranu) i **zrozumiała** (logiczna struktura).']

### Evaluation
Przegląd polityki językowej, weryfikacja dostępności kanałów zgłoszeń preferencji językowej oraz losowa kontrola jakości tłumaczeń/wersji obcojęzycznych.

### Checklist
- Weryfikacja dostępności języka polskiego (Fundamentalny)
- **Działanie:** Sprawdź kluczowe dokumenty (TOiP, Regulamin) oraz interfejs bankowości elektronicznej.
- **Sprawdzenie:** Czy wszystkie elementy są dostępne w języku polskim?
    - *Błąd krytyczny:* Sytuacja, w której część interfejsu (np. komunikaty błędów, opisy nowych funkcji) wyświetla się w języku obcym bez uprzedniej zmiany ustawień przez użytkownika.
- Weryfikacja mechanizmu zgody (Procedura)
- **Działanie:** Spróbuj zmienić język komunikacji na inny niż polski (np. w aplikacji lub u doradcy).
- **Sprawdzenie:**
    - Czy system/pracownik pyta o zgodę na zmianę języka?
    - Czy zgoda ta jest dobrowolna i odwracalna (można wrócić do języka polskiego)?
    - Czy po zmianie języka **cała** ścieżka krytyczna (np. zawarcie umowy lokaty) jest dostępna w wybranym języku, czy też następuje mieszanie języków (co narusza wymóg zrozumiałości z Art. 12)?
- Weryfikacja poziomu B2 (Audyt treści)
- **Działanie:** Pobierz dokument w języku obcym (np. Information Sheet) oferowany przez bank.
- **Analiza:** Czy tekst odpowiada poziomowi B2?
    - *Wskaźniki B2:* Tekst powinien pozwalać na zrozumienie głównych wątków w złożonych tekstach na tematy konkretne i abstrakcyjne, łącznie z dyskusjami technicznymi w zakresie specjalności (tu: finanse).
    - *Weryfikacja:* Jeśli tekst jest naszpikowany archaicznym słownictwem prawniczym (poziom C2+) lub zawiera błędy gramatyczne utrudniające zrozumienie (poniżej B1), wymóg nie jest spełniony. W przypadku wątpliwości wymagana jest opinia tłumacza przysięgłego lub filologa.
- Dostępność cyfrowa wersji obcojęzycznych
*Dotyczy Art. 12 ust. 2 pkt 1 lit. c (formaty tekstowe).*
- **Sprawdzenie:** Czy dokumenty w języku obcym (np. PDF w j. angielskim) są dostępne cyfrowo (otagowane, z warstwą tekstową), tak jak ich polskie odpowiedniki? Częstym błędem jest dbanie o dostępność wersji polskich, a udostępnianie wersji obcojęzycznych jako niedostępnych skanów.

---

## U.17.00.01 U.17.00.01 Synchronizacja tekstu i dźwięku w książkach elektronicznych (Art. 17 pkt 1)

### Procedure
['Wymóg ten obliguje dostawcę usługi do zapewnienia, aby format pliku oraz udostępniane oprogramowanie (czytnik/aplikacja) obsługiwały mechanizm śledzenia tekstu równolegle z odtwarzanym dźwiękiem.\n\nAnaliza techniczna i prawna:\n1.  **Synchronizacja (Media Overlays):** W kontekście standardów e-booków (np. EPUB 3), synchronizacja oznacza techniczne powiązanie fragmentu tekstu (np. zdania lub akapitu) z konkretnym znacznikiem czasowym w pliku audio. Pozwala to na:\n    *   Wizualne wyróżnienie czytanego fragmentu (pomocne dla osób z dysleksją lub słabowidzących).\n    *   Nawigację po audio poprzez kliknięcie w tekst.\n2.  **Oprogramowanie odczytujące:** Zgodnie z definicją usługi (Art. 5 pkt 33), jeśli dystrybutor dostarcza własną aplikację do czytania, musi ona technicznie obsługiwać tę synchronizację (nie może ignorować metadanych SMIL zawartych w pliku EPUB).\n3.  **Multimedia wewnątrz książki:** Jeśli książka zawiera osadzone klipy wideo lub audio (niebędące narracją całej książki), zastosowanie mają ogólne wymogi dla multimediów z normy EN 301 549 (Rozdział 10.1.2 dla dokumentów), wymagające synchronizacji napisów lub audiodeskrypcji z materiałem głównym.']

### Evaluation
Przegląd metadanych i plików publikacji; test w czytniku z dostępnością; kontrola jakości napisów/transkrypcji i poprawności synchronizacji.

### Checklist
- Weryfikacja mechanizmu synchronizacji (Media Overlays / SMIL)
- **Działanie:** Otwórz e-booka zawierającego narrację w dedykowanej aplikacji usługodawcy. Uruchom odtwarzanie dźwięku.
- **Sprawdzenie:**
    - Czy tekst na ekranie zmienia swój wygląd (np. podświetlenie, zmiana koloru) w miarę czytania przez lektora?
    - Czy tekst przesuwa się automatycznie (auto-scroll), aby czytany fragment był zawsze widoczny?
    - *Błąd:* Odtwarzanie dźwięku działa jak w zwykłym odtwarzaczu muzyki, bez żadnego związku z wyświetlanym tekstem.
- Weryfikacja interakcji (Nawigacja)
- **Działanie:** Kliknij/dotknij w losowy akapit tekstu na dalszych stronach książki.
- **Sprawdzenie:** Czy odtwarzanie dźwięku przeskoczyło do wskazanego momentu? (Brak tej funkcji oznacza brak funkcjonalnej synchronizacji dla użytkownika).
- Weryfikacja wideo (Jeśli dotyczy)
- **Działanie:** Jeśli e-book zawiera osadzone filmy z wypowiedziami.
- **Sprawdzenie:** Czy napisy (jeśli są dostępne) pojawiają się w tym samym czasie, co wypowiadane słowa? (Tolerancja błędu wynosi 100 ms zgodnie z normą EN 301 549 klauzula 10.1.2.2).
- Dostępność kontrolek synchronizacji
- **Sprawdzenie:** Czy funkcje sterujące synchronizacją (włącz/wyłącz podświetlenie, pauza, prędkość czytania) są dostępne dla technologii asystujących (np. czy przyciski mają etykiety tekstowe dla czytnika ekranu)?

---

## U.17.00.02 U.17.00.02 Interoperacyjność i kompatybilność plików książek elektronicznych (Art. 17 pkt 2)

### Procedure
['Wymóg ten koncentruje się na **technicznej jakości kodu pliku**. Książka elektroniczna (traktowana w normie EN 301 549 jako „Dokument” – definicja w rozdz. 3.1) musi być zbudowana w taki sposób, aby technologia wspomagająca (np. czytnik ekranu NVDA, linijka brajlowska) mogła ją poprawnie zinterpretować.\n\nKluczowe aspekty techniczne wg normy EN 301 549 (Rozdział 10 – Dokumenty nieinternetowe):\n\n1.  **Interoperacyjność (Definicja):** Zgodnie z Art. 5 pkt 11 ustawy, jest to właściwość umożliwiająca efektywne współdziałanie z narzędziami wspomagającymi. W kontekście pliku oznacza to zastosowanie standardów, które są otwarte i obsługiwane przez AT (Assistive Technology).\n2.  **Poprawność kodu (Parsowanie):** Zgodnie z klauzulą **10.4.1.1**, znaczniki w pliku (np. tagi w EPUB/HTML lub struktura w PDF) muszą być kompletne, poprawnie zagnieżdżone i nie zawierać duplikatów atrybutów. Błędy składniowe mogą spowodować, że czytnik ekranu pominie treść lub się zawiesi.\n3.  **Programowe określenie nazwy, roli i wartości:** Zgodnie z klauzulą **10.4.1.2**, wszelkie elementy interaktywne w książce (np. formularze ćwiczeń, linki, przypisy) muszą programowo zgłaszać swoją funkcję. Użytkownik niewidomy musi wiedzieć, że dany element to „przycisk” lub „pole edycji”, a nie tylko tekst.\n4.  **Struktura (Informacje i relacje):** Zgodnie z klauzulą **10.1.3.1**, struktura wizualna książki (nagłówki rozdziałów, listy wypunktowane, tabele) musi być odwzorowana w kodzie. Jeśli nagłówek jest tylko pogrubionym tekstem (bez tagu`<h1>`), plik nie jest interoperacyjny, ponieważ narzędzie wspomagające nie pozwoli na nawigację po strukturze.']

### Evaluation
Inspekcja plików i metadanych; walidacja standardów; testy z czytnikami ekranu i narzędziami do odczytu DAISY/EPUB.

### Checklist
- Walidacja standardu formatu (Inspekcja techniczna)**
- **Działanie:** Użyj narzędzia do walidacji formatu (np. *EPUBCheck* dla plików .epub, *PAC - PDF Accessibility Checker* dla plików .pdf).
- **Sprawdzenie:** Czy raport walidacji wykazuje błędy strukturalne lub błędy parsowania? Plik z błędami krytycznymi (np. niezamknięte tagi XML) nie spełnia wymogu interoperacyjności.
- Weryfikacja struktury semantycznej (Zgodność z Art. 12 i 10.1.3.1 EN)
- **Działanie:** Sprawdź strukturę dokumentu (np. drzewo tagów w PDF lub spis treści w EPUB).
- **Sprawdzenie:**
    - Czy tytuły rozdziałów są oznaczone jako nagłówki (H1-H6)?
    - Czy listy są oznaczone jako listy (a nie myślniki wpisane ręcznie)?
    - Czy tabele mają oznaczone nagłówki wierszy/kolumn?
    - *Błąd:* Brak struktury semantycznej uniemożliwia narzędziom wspomagającym "skakanie" po treści (nawigację), co narusza wymóg funkcjonalności narzędzi wspomagających.
- Weryfikacja elementów interaktywnych (Interakcja)
*Dotyczy klauzuli 10.4.1.2.*
- **Działanie:** Jeśli e-book zawiera testy, formularze lub aktywne przypisy.
- **Sprawdzenie:** Użyj czytnika ekranu. Czy po najechaniu na element interaktywny słyszysz jego etykietę i rolę (np. "Przycisk Sprawdź odpowiedź")?
- Weryfikacja elementów interaktywnych (Interakcja)**
*Dotyczy klauzuli 10.4.1.2.*
- **Działanie:** Jeśli e-book zawiera testy, formularze lub aktywne przypisy.
- **Sprawdzenie:** Użyj czytnika ekranu. Czy po najechaniu na element interaktywny słyszysz jego etykietę i rolę (np. "Przycisk Sprawdź odpowiedź")?

---

## U.17.00.03 U.17.00.03 Dostęp do treści i struktury książki elektronicznej (Art. 17 pkt 3)

### Procedure
['Wymóg ten nakazuje, aby logiczna struktura książki (wizualnie reprezentowana przez style, wielkość czcionki, układ) była odwzorowana w kodzie pliku (programowo określona). Tylko wtedy „treść i struktura” są dostępne dla technologii asystujących.\n\nAnaliza w oparciu o normę EN 301 549 (Rozdział 10 – Dokumenty):\n\n1.  **Informacje i relacje (Semantyka):** Zgodnie z klauzulą **10.1.3.1**, informacje prezentowane wizualnie muszą być dostępne programowo. Oznacza to, że:\n    -   Tytuły rozdziałów muszą być oznaczone tagami nagłówków (np.`<h1>`-`<h6>` w EPUB/HTML lub tagami`H` w PDF), a nie tylko pogrubieniem.\n    -   Listy muszą być oznaczone jako listy (tagi`<ul>`/`<ol>`/`<li>`), a nie jako akapity ze znakami specjalnymi.\n    -   Tabele muszą mieć zdefiniowane nagłówki wierszy i kolumn, aby czytnik ekranu mógł połączyć komórkę z jej nagłówkiem.\n2.  **Sensowna kolejność (Reading Order):** Zgodnie z klauzulą **10.1.3.2**, kolejność, w jakiej treść jest prezentowana technologii asystującej (np. czytnikowi ekranu), musi być logiczna i zgodna z wizualnym układem dokumentu. Jest to krytyczne w przypadku wielokolumnowych układów lub wstawek (ramek) z tekstem pobocznym.\n3.  **Tytuł dokumentu:** Zgodnie z klauzulą **10.2.4.2**, dokument musi posiadać zdefiniowany w metadanych tytuł (niezależny od nazwy pliku), który opisuje jego treść.\n4.  **Treść nietekstowa:** Zgodnie z klauzulą **10.1.1.1**, dostęp do "treści" obejmuje również dostęp do informacji zawartej w obrazach, co wymaga stosowania tekstów alternatywnych.']

### Evaluation
Inspekcja struktury dokumentu, walidacja semantyki i metadanych; testy z czytnikami ekranu i narzędziami do odczytu e-booków.

### Checklist
- Weryfikacja nagłówków i list (Semantyka)
- **Działanie:** Otwórz e-booka i użyj narzędzia do nawigacji po nagłówkach (np. klawisz`H` w NVDA/JAWS lub menu spisu treści generowanego z nagłówków).
- **Sprawdzenie:**
    - Czy wszystkie wizualne tytuły rozdziałów i podrozdziałów są wykrywane jako nagłówki?
    - Czy hierarchia jest zachowana (po H1 następuje H2, a nie H4)?
    - Czy listy są odczytywane jako "Lista, X elementów", czy jako osobne akapity?
- Weryfikacja tabel (Relacje danych)
- **Działanie:** Jeśli w książce występują tabele z danymi (nie layoutowe).
- **Sprawdzenie:** Czy przemieszczając się po komórkach, czytnik ekranu odczytuje przypisane im nagłówki kolumn i wierszy? Jeśli czyta tylko zawartość komórki (np. "15%"), struktura tabeli jest niedostępna.
- Weryfikacja kolejności czytania (Logic flow)
- **Działanie:** Włącz czytanie ciągłe (Say All) na stronie z układem wielokolumnowym lub z ramkami bocznymi (sidebar).
- **Sprawdzenie:**
    - Czy tekst jest czytany w poprawnej kolejności (np. najpierw cała lewa kolumna, potem prawa)?
    - Błąd: Czytnik czyta pierwszy wiersz lewej kolumny, potem pierwszy wiersz prawej kolumny (czytanie w poprzek szpalt).
- Język dokumentu (Struktura językowa)**
*Dotyczy klauzuli 10.3.1.1 [5].*
- **Sprawdzenie:** Czy w kodzie pliku zdefiniowano główny język publikacji (np.`xml:lang="pl"` w EPUB lub we właściwościach PDF)? Jest to element struktury niezbędny do poprawnego odczytania treści przez syntezator mowy.
- **Uwaga dotycząca metadanych:** Choć weryfikacja metadanych o dostępności (np.`schema:accessMode`) jest technicznie możliwa na tym etapie, formalnie jest ona przedmiotem **Art. 17 ust. 6**. W ramach ust. 3 weryfikujemy metadane strukturalne (Tytuł, Język).

---

## U.17.00.04 U.17.00.04 Nawigacja po treści i układzie graficznym (w tym dynamicznym) książki elektronicznej (Art. 17 pkt 4)

### Procedure
['Wymóg ten obliguje dostawcę do zapewnienia, aby użytkownik mógł efektywnie poruszać się po książce niezależnie od tego, jak ją wyświetla (np. na małym ekranie telefonu lub w dużym powiększeniu).\n\nAnaliza w oparciu o normę EN 301 549:\n1.  **Nawigacja strukturalna (Navigation):**\n    -   Zgodnie z klauzulami **10.2.4** (Dokumenty) i **11.2.4** (Oprogramowanie), użytkownik musi mieć możliwość przemieszczania się po treści nie tylko linearnie (strona po stronie), ale także skokowo.\n    -   Wymaga to poprawnego spisu treści (TOC), który jest interaktywny i dostępny dla technologii asystujących, oraz logicznej kolejności fokusu (Reading Order).\n2.  **Dynamiczny układ graficzny (Reflow):**\n    -   Jest to kluczowy wymóg techniczny, powiązany z klauzulą **10.1.4.10** (Dopasowanie do ekranu). Tekst książki nie może być „sztywny” (jak w typowym PDF). Musi się „przelewać” (*reflow*), dopasowując się do szerokości ekranu.\n    -   Przy powiększeniu do **400%**, użytkownik nie może być zmuszony do przewijania treści w dwóch wymiarach (poziomo i pionowo), aby przeczytać pojedynczą linię tekstu. Wyjątkiem są elementy, których sens zależy od układu dwuwymiarowego (np. mapy, złożone tabele).\n3.  **Elementy interaktywne:**\n    -   Jeśli książka zawiera elementy interaktywne (linki, przypisy, multimedia), muszą one być osiągalne z poziomu nawigacji klawiaturowej (bez użycia myszy/dotyku) i poprawnie opisane.']

### Evaluation
Inspekcja i testy z czytnikami ekranu; testy klawiaturowe; testy użyteczności z reprezentantami użytkowników; walidacja wersji alternatywnych.

### Checklist
- Weryfikacja dynamicznego układu (Reflow / 400% Zoom)
- **Działanie:** Otwórz e-booka w aplikacji czytającej. Zmniejsz szerokość okna lub użyj funkcji powiększenia tekstu.
- **Sprawdzenie:** Czy tekst automatycznie zawija się do nowej linii, mieszcząc się w widocznym obszarze?
    - *Błąd:* Konieczność przesuwania suwaka poziomego, aby przeczytać koniec każdego zdania przy dużym powiększeniu. Oznacza to brak obsługi dynamicznego układu.
- Weryfikacja nawigacji logicznej (Spis treści i Struktura)
- **Działanie:** Użyj spisu treści (NCX/NAV) w czytniku.
- **Sprawdzenie:**
    - Czy można przeskoczyć bezpośrednio do wybranego rozdziału?
    - Czy po kliknięciu w przypis (link wewnętrzny) można łatwo wrócić do miejsca czytania (np. mechanizm "wstecz" lub link powrotny)?
    - Czy czytnik ekranu (np. NVDA) poprawnie rozpoznaje i nawiguje po nagłówkach (skrót`H`)?
- Skalowanie i czytelność
- **Działanie:** Powiększ tekst do 200%.
- **Sprawdzenie:** Czy elementy nawigacyjne (np. przyciski "następna strona", menu spisu treści) pozostają dostępne i nie zasłaniają treści właściwej książki? Czy powiększenie nie "rozbija" układu w sposób uniemożliwiający czytanie?
- Metadane i dokumentacja (Wsparcie informacyjne)**
*Dotyczy Art. 17 ust. 6 oraz dobrej praktyki.*
- **Sprawdzenie:** Czy metadane pliku lub opis produktu informują o dostępnych trybach prezentacji (np. "Layout: reflowable" vs "fixed-layout")? Użytkownik powinien wiedzieć przed zakupem, czy książka obsługuje dynamiczny układ.

---

## U.17.00.05 U.17.00.05 Alternatywne sposoby prezentacji treści książki elektronicznej (Art. 17 pkt 5)

### Procedure
['Wymóg ten obliguje dostawcę do zapewnienia użytkownikowi kontroli nad sposobem prezentacji treści. E-book nie może być „statyczny” graficznie (jak np. skan strony). Treść musi być elastyczna, aby użytkownik mógł ją dostosować do swoich potrzeb sensorycznych bez utraty informacji.\n\nAnaliza w oparciu o normę EN 301 549:\n1.  **Preferencje użytkownika (Klauzula 11.7):** Oprogramowanie służące do odczytu (dostarczane w ramach usługi) nie może być odizolowane od ustawień platformy lub musi oferować własne mechanizmy zmiany wyglądu. Obejmuje to możliwość zmiany:\n    -   Jednostek miary,\n    -   Koloru i kontrastu (np. tryb wysokiego kontrastu, tryb nocny),\n    -   Typu czcionki (np. zmiana na czcionkę bezszeryfową lub dla dyslektyków),\n    -   Rozmiaru czcionki.\n2.  **Możliwość adaptacji pliku:** Sam plik książki (np. EPUB) musi być przygotowany w sposób, który nie blokuje tych zmian (np. brak wymuszonych stylów CSS`!important`, które uniemożliwiają nadpisanie czcionki przez użytkownika).\n3.  **Wersje alternatywne (Formaty):** Jeśli format podstawowy (np. PDF) nie pozwala na elastyczną zmianę prezentacji (np. reflow), usługodawca powinien zapewnić ten sam tytuł w formacie alternatywnym, który to umożliwia (np. EPUB 3), i umożliwić użytkownikowi łatwy wybór między nimi.\n4.  **Zachowanie treści:** Zmiana sposobu prezentacji (np. zmiana kolorów na czarno-żółte) nie może powodować zniknięcia treści (np. zniknięcia ikon, które nie mają tekstowej alternatywy) ani utraty funkcjonalności (np. przyciski stają się nieaktywne).']

### Evaluation
Inspekcja i testy użyteczności; porównanie zawartości między wersjami; testy z narzędziami wspomagającymi i użytkownikami korzystającymi z alternatywnych sposobów prezentacji.

### Checklist
- Weryfikacja personalizacji (User Preferences)
- **Działanie:** Otwórz książkę w aplikacji dostarczanej przez usługodawcę (lub rekomendowanej). Wejdź w ustawienia wyglądu.
- **Sprawdzenie:**
    - Zmień krój czcionki (np. na Arial lub OpenDyslexic). Czy tekst w książce faktycznie się zmienił?
    - Zmień kolory (np. na biały tekst na czarnym tle). Czy kontrast jest zachowany? Czy żadne elementy nie stały się niewidoczne?
    - Zmień interlinię lub odstępy między akapitami (zgodnie z WCAG 1.4.12 - Odstępy w tekście).
    - *Błąd:* Wydawca zablokował style w pliku, przez co zmiana ustawień w czytniku nie wpływa na tekst książki.
- Weryfikacja Reflow (Dopasowanie do ekranu)
- **Działanie:** Powiększ tekst do 400% lub zmniejsz szerokość okna aplikacji do odpowiednika 320 pikseli CSS.
- **Sprawdzenie:** Czy treść "przelewa się" (reflow) do nowej linii?
    - *Wynik negatywny:* Pojawienie się dolnego paska przewijania (konieczność przesuwania prawo-lewo, by przeczytać zdanie) oznacza, że wybrany sposób przedstawienia treści nie zapewnia funkcjonalności i postrzegalności.
- Weryfikacja dostępności wersji alternatywnych
- **Działanie:** Jeśli domyślny format to PDF (układ stały).
- **Sprawdzenie:** Czy w systemie sprzedaży/udostępniania, obok przycisku "Pobierz PDF", znajduje się opcja "Pobierz EPUB" lub "Pobierz wersję tekstową"?
- **Weryfikacja metadanych:** Czy opis produktu informuje, że dana wersja umożliwia zmianę wielkości tekstu ("reflowable")? (Zgodnie z Art. 17 ust. 6).
- Brak utraty danych**
- **Sprawdzenie:** Czy po przełączeniu na „tryb nocny” lub powiększeniu tekstu, elementy nawigacyjne (spis treści, zakładki) nadal działają poprawnie i prowadzą do właściwych miejsc w książce?

---

## U.17.00.06 U.17.00.06 Metadane dostępności dla książek elektronicznych (Art. 17 pkt 6)

### Procedure
['Wymóg ten nakłada obowiązek, aby informacje o dostępności nie były tylko zewnętrznym opisem na stronie sklepu, ale były **zaszyte w samym pliku** lub trwale z nim powiązane w systemie dystrybucji. Dzięki temu informacje te podróżują wraz z plikiem i mogą być odczytane przez urządzenia końcowe (np. czytnik informuje niewidomego użytkownika: "Ta książka posiada pełną nawigację i opisy obrazków").\n\nAnaliza w oparciu o normę EN 301 549:\n1.  **Standard metadanych:** Zgodnie z Uwagą 2 do klauzuli **12.1.1 (Funkcje dostępności i zgodności)**, dobrą praktyką jest stosowanie słownika **WebSchemas/Accessibility 2.0** (opartego na Schema.org). Jest to standard rozpoznawany przez globalne systemy dystrybucji e-booków.\n2.  **Kluczowe właściwości do opisania:** Metadane muszą precyzyjnie określać, jakie cechy dostępności posiada publikacja:\n    *`schema:accessMode`: Określa tryb percepcji (np. *textual* - tekstowy, *visual* - wizualny, *auditory* - słuchowy).\n    *`schema:accessibilityFeature`: Wskazuje konkretne funkcje (np. *alternativeText* - teksty alternatywne, *structuralNavigation* - nawigacja strukturalna, *displayTransformability* - możliwość zmiany wyglądu/reflow).\n    *`schema:accessibilityHazard`: Ostrzega przed zagrożeniami (np. *flashing* - migające treści, *noFlashing* - brak migających treści). Jest to krytyczne dla bezpieczeństwa użytkowników z epilepsją (zgodność z Rozdziałem 10.2.3).\n    *`schema:accessibilitySummary`: Zwięzły, zrozumiały dla człowieka opis stanu dostępności (np. "Publikacja dostępna, brak opisów dla wykresów w rozdziale 5").']

### Evaluation
Analiza metadanych (walidacja JSON-LD/RDFa/EPUB metadata), testy ekstrakcji (skrypty), sprawdzenie indeksacji i ręczna weryfikacja zawartości metadanych oraz porównanie z dokumentacją usługi.

### Checklist
- Walidacja techniczna metadanych (EPUB/ONIX)
- **Działanie:** Użyj narzędzia walidacyjnego (np. Ace by DAISY dla formatu EPUB) lub otwórz plik metadanych (np.`.opf` w paczce EPUB) w edytorze tekstu.
- **Sprawdzenie:**
    - Czy w sekcji metadata występują znaczniki zaczynające się od`schema:accessMode`,`schema:accessibilityFeature`,`schema:accessibilitySummary`?
    - Czy zadeklarowano wystarczające tryby dostępu (np. dla książki tekstowej:`accessMode: textual` oraz`accessMode: visual`)?
- Weryfikacja spójności (Prawdziwość danych)
- **Działanie:** Porównaj deklaracje w metadanych z faktyczną zawartością książki (zweryfikowaną w ramach Art. 17 ust. 3).
- **Sprawdzenie:**
    - Jeśli metadane zawierają`accessibilityFeature: alternativeText`, sprawdź losowo 3 obrazki. Czy faktycznie posiadają one tekst alternatywny?
    - Jeśli metadane zawierają`accessibilityFeature: displayTransformability` (reflow), sprawdź, czy powiększenie tekstu nie powoduje ucięcia treści (zgodnie z Art. 17 ust. 4).
    - *Błąd krytyczny:* Deklarowanie w metadanych pełnej dostępności (np. zgodności z WCAG 2.1 AA), gdy plik zawiera błędy blokujące (np. brak nawigacji), jest wprowadzeniem konsumenta w błąd.
- Informacje o zagrożeniach (Safety)
- **Sprawdzenie:** Jeśli książka zawiera treści wideo lub animacje, czy metadane zawierają pole`accessibilityHazard`? Jeśli treści są bezpieczne, dobrą praktyką jest wpis`accessibilityHazard: none`, co daje użytkownikowi pewność bezpieczeństwa.
- Czytelność dla człowieka (Podsumowanie)**
- **Sprawdzenie:** Czy pole`accessibilitySummary` (lub jego odpowiednik w opisie produktu na stronie sklepu) zawiera jasną informację o poziomie dostępności, zrozumiałą dla użytkownika nietechnicznego? (np. informacja o braku transkrypcji dla materiałów audio).

---

## U.18.00.01 U.18.00.01 Informacje o zgodności produktów/usług z wymaganiami dostępności (Art. 18 pkt 1)

### Procedure
['Przepis ten nakłada na usługodawcę e-commerce rolę „przekaźnika” informacji o dostępności. Klient musi mieć dostęp do tych danych przed zakupem, na karcie produktu.\n\n1.  **Ciągłość informacji:** Jeśli producent komputera dołączył do niego instrukcję opisującą funkcje ułatwień dostępu (np. opis skrótów klawiaturowych, zgodność z czytnikami ekranu – wymóg Art. 7 ust. 2), sklep internetowy musi te informacje udostępnić na stronie produktu.\n2.  **Forma prezentacji (Art. 12):** Informacja o dostępności produktu jest częścią „informacji o oferowanych usługach” (w tym wypadku usłudze sprzedaży). Musi być ona zatem dostępna cyfrowo:\n    -   Tekstowa (nie skan ulotki).\n    -   Zrozumiała.\n    -   Postrzegalna dla technologii asystujących (zgodnie z Art. 12 ust. 2).\n3.  **Zakres danych:** Zgodnie z normą EN 301 549 (klauzula **12.1.1** – Funkcje dostępności i zgodności), dokumentacja produktu powinna zawierać listę funkcji dostępności (np. „złącze słuchawkowe”, „opis przycisków w Braille’u”) oraz opis sposobu ich wykorzystania. Sklep internetowy powinien te dane odwzorować w opisie oferty.']

### Evaluation
Przegląd oświadczeń i dokumentów dostępności, weryfikacja dostępnych dowodów i raportów, test czy informacje są czytelne i łatwo dostępne (w tym sprawdzenie metadanych i linków do raportów).

### Checklist
- Weryfikacja obecności informacji (Inspekcja treści)
- **Działanie:** Wybierz produkt, który z mocy ustawy musi być dostępny (np. smartfon, telewizor z systemem operacyjnym).
- **Sprawdzenie:** Czy w sekcji „Specyfikacja”, „Opis” lub w załącznikach (np. „Instrukcja obsługi PDF”) znajdują się informacje o funkcjach dostępności?
    - *Przykład:* „Produkt posiada wbudowany czytnik ekranu TalkBack”, „Pilot posiada oznaczenia dotykowe”.
    - *Błąd:* Brak jakiejkolwiek wzmianki o dostępności, mimo że na stronie producenta takie informacje widnieją.
- Weryfikacja dostępności cyfrowej informacji (Zgodność z Art. 12)
- **Działanie:** Jeśli informacje o dostępności są udostępnione jako plik do pobrania (np.`Specyfikacja_Dostepnosci.pdf`).
- **Sprawdzenie:** Czy ten plik jest dostępny (tagowany, z warstwą tekstową)?
- **Działanie:** Jeśli informacje są bezpośrednio na stronie.
- **Sprawdzenie:** Czy są poprawnie sformatowane (nagłówki, listy) i czytelne dla czytnika ekranu?
- Weryfikacja rzetelności (Cross-check)
- **Działanie:** Sprawdź deklarację zgodności lub stronę producenta danego urządzenia.
- **Sprawdzenie:** Czy sklep internetowy pominął istotne ostrzeżenia dotyczące dostępności podane przez producenta (np. „Produkt nie obsługuje sterowania głosowego w języku polskim”)? Zatajenie takiej informacji narusza wymóg rzetelnego udzielania informacji.
- Metadane (Opcjonalnie - Dobra praktyka)
- **Sprawdzenie:** Czy sklep wykorzystuje metadane (np. schema.org) do oznaczania produktów dostępnych, co pozwalałoby na filtrowanie wyników wyszukiwania (np. „Pokaż tylko telefony z dużą czcionką”)? Chociaż ustawa wprost tego nie nakazuje w Art. 18 (jak robi to w Art. 17 dla e-booków), norma wskazuje to jako metodę dostarczania informacji o produkcie.

---

## U.18.00.02 U.18.00.02 Dostępność funkcji identyfikacji i uwierzytelniania w usługach handlu elektronicznego (Art. 18 pkt 2)

### Procedure
['Wymóg ten nakłada obowiązek zapewnienia dostępności cyfrowej dla procesów, które są często najbardziej skomplikowane technicznie i obwarowane wymogami bezpieczeństwa. Bezpieczeństwo nie może jednak wykluczać dostępności.\n\nAnaliza w oparciu o normę EN 301 549:\n\n1.  **Identyfikacja i Biometria:**\n    -   Jeśli aplikacja sklepu lub strona www wykorzystuje biometrię (np. odcisk palca, skan twarzy) do logowania lub zatwierdzania płatności, **nie może to być jedyna metoda**. Zgodnie z klauzulą **5.3 (Biometria)**, musi istnieć alternatywa dla osób, które nie posiadają danej cechy biologicznej lub nie mogą jej użyć (np. kod PIN, hasło).\n    -   Formularze logowania muszą posiadać jednoznaczne etykiety (zgodnie z WCAG 3.3.2 – Etykiety lub instrukcje) oraz, w przypadku technologii wspomagających, poprawnie zdefiniowane atrybuty`autocomplete` (WCAG 1.3.5), aby ułatwić wypełnianie danych.\n\n2.  **Zachowanie bezpieczeństwa (CAPTCHA i Sesje):**\n    -   **CAPTCHA:** Jeśli system stosuje testy CAPTCHA w celu ochrony przed botami, muszą one posiadać alternatywę dla różnych zmysłów (zgodnie z klauzulą **9.1.1.1** i WCAG 1.1.1). CAPTCHA wizualna musi mieć alternatywę audio; CAPTCHA logiczna nie może wymagać zdolności poznawczych wykraczających poza standard.\n    -   **Limity czasu (Timeouts):** Ze względów bezpieczeństwa sesje zakupowe wygasają. Zgodnie z klauzulą **9.2.2.1 (Dostosowanie czasu)**, użytkownik musi zostać ostrzeżony przed wylogowaniem i mieć możliwość przedłużenia sesji (np. przez naciśnięcie klawisza), chyba że jest to wyjątek czasu rzeczywistego (np. licytacja aukcyjna).\n\n3.  **Dokonywanie płatności i Podpisy (Zapobieganie błędom):**\n    -   Proces płatności jest transakcją finansową i prawną. Zgodnie z klauzulą **9.3.3.4 (Zapobieganie błędom w sprawach prawnych, finansowych)**, system musi umożliwiać użytkownikowi sprawdzenie, potwierdzenie i korektę danych (np. adresu dostawy, kwoty, liczby sztuk) przed ostatecznym złożeniem zamówienia.\n    -   Mechanizmy podpisu (np. checkbox "Akceptuję regulamin" lub podpis kwalifikowany) muszą być obsługiwalne za pomocą klawiatury (bez myszy) i czytnika ekranu (zgodność z WCAG 2.1.1 i 4.1.2).']

### Evaluation
Inspekcja procedur rejestracji i logowania; testy funkcjonalne z użytkownikami i technologiami wspomagającymi; sprawdzenie alternatyw CAPTCHA i procedur odzyskiwania konta.

### Checklist
- Weryfikacja metod uwierzytelniania (Biometria i Alternatywy)
- **Działanie:** Spróbuj zalogować się lub autoryzować płatność w aplikacji mobilnej sklepu.
- **Sprawdzenie:** Czy system wymusza użycie biometrii (np. "skan twarzy") bez widocznej opcji "Użyj kodu/hasła"? Brak alternatywy jest niezgodnością.
- Weryfikacja CAPTCHA
- **Działanie:** Przejdź do formularza rejestracji lub odzyskiwania hasła.
- **Sprawdzenie:** Jeśli występuje CAPTCHA obrazkowa (np. "zaznacz pasy"), czy dostępna jest działająca opcja "Odtwórz kod dźwiękowy" lub inna metoda weryfikacji (np. link weryfikacyjny na e-mail)?
- Zapobieganie błędom (Review Step)
- **Działanie:** Dodaj produkty do koszyka i przejdź do kasy.
- **Sprawdzenie:** Czy przed ostatecznym kliknięciem "Kupuję i płacę" (lub równoważnym) wyświetlane jest podsumowanie zamówienia, w którym można edytować dane (zmienić adres, usunąć produkt) bez konieczności cofania się przeglądarką i utraty wprowadzonych danych?
- Dostępność bramek płatniczych (Kompatybilność)
- **Działanie:** Wybierz płatność online.
- **Sprawdzenie:** Czy po przekierowaniu do operatora płatności (będącego częścią procesu zakupowego) interfejs jest nadal dostępny (widoczny fokus klawiatury, etykiety pól dla czytnika ekranu)? Odpowiedzialność za dostępność całego procesu spoczywa na usługodawcy handlu elektronicznego.
- Komunikaty błędów w formularzach
- **Działanie:** Wpisz błędne dane w formularzu płatności (np. niepoprawny format karty kredytowej).
- **Sprawdzenie:** Czy komunikat o błędzie jest dostępny tekstowo (a nie tylko przez zmianę koloru ramki na czerwony – zgodnie z 9.1.4.1) i czy system sugeruje, jak poprawić błąd? [4, 14].

---

## C.10.1.1.1 C.10.1.1.1 Treść nietekstowa

### Procedure
['1. Sprawdź, czy dokument spełnia kryterium sukcesu [WCAG 2.1 – 1.1.1 Treść nietekstowa](https://www.w3.org/Translations/WCAG21-pl/#tresc-nietekstowa)']

### Evaluation
Inspekcja

### Checklist
- **Tekst alternatywny:** Upewnij się, że każdy obraz i grafika ma odpowiedni tekst alternatywny zapisany w właściwościach obrazu lub atrybucie alt. Elementy dekoracyjne powinny mieć pusty alt; złożone grafiki (wykresy, diagramy) powinny też mieć skrócony opis alternatywny i odniesienie do pełnego opisu w treści dokumentu
- **Elementy dekoracyjne:** Upewnij się, że elementy dekoracyjne są oznaczone jako artefakty (PDF) lub nie mają tekstu alternatywnego, jeśli nie wnoszą treści.
- **Wykresy i diagramy:** Złożone grafiki powinny mieć krótki opis alternatywny oraz odniesienie do pełnego opisu w treści dokumentu.
- **Uwaga:** Mechanizmy CAPTCHA rzadko występują w dokumentach offline, ale jeśli się pojawią, należy stosować do nich te same zasady.

### Notes
- **Uwaga 1:** Przykłady dokumentów to listy, arkusze kalkulacyjne, e-maile, książki, zdjęcia, prezentacje i filmy, które otwierasz w odpowiednich programach (np. czytnikach, edytorach, odtwarzaczach).
- **Uwaga 2:** Jeden dokument może składać się z kilku plików, na przykład z materiału wideo i oddzielnego pliku z napisami. Dla użytkownika wygląda to zazwyczaj jak jedna całość.
- **Uwaga 3:** Aby wyświetlić dokument, potrzebujesz programu (np. przeglądarki PDF, odtwarzacza). Wymagania dla tych programów są opisane w Klauzuli 11.
- **Uwaga 4:** Jeśli treść jest częścią oprogramowania (np. ekran pomocy wbudowany w aplikację), stosuje się wymagania z Klauzuli 11.
- **Uwaga 8:** Te wymagania dotyczą także dokumentów zabezpieczonych (hasłem, szyfrowaniem, podpisem cyfrowym), w momencie gdy są one wyświetlane użytkownikowi.
- **Uwaga 9:** Zaleca się dołączanie informacji (metadanych) o dostępności dokumentu – wewnątrz niego lub w osobnym pliku (np. zgodnie ze standardem WebSchemas).

---

## C.10.1.2.1 C.10.1.2.1 Tylko audio lub tylko wideo (nagranie)

### Procedure
['1. Sprawdź, czy dokument spełnia kryterium sukcesu [WCAG 2.1 – 1.2.1 Tylko audio lub tylko wideo (nagranie)](https://www.w3.org/Translations/WCAG21-pl/#tylko-audio-lub-tylko-wideo-nagranie)']

### Evaluation
Inspekcja

### Checklist
- **Tylko audio (nagranie):** Sprawdź, czy dla nagrań dźwiękowych (np. podcastów) dostępna jest transkrypcja tekstowa zawierająca wszystkie dialogi i istotne dźwięki.
- **Tylko wideo (nagranie):** Sprawdź, czy dla nagrań wideo bez dźwięku (np. animacji instruktażowych) dostępna jest alternatywa tekstowa lub ścieżka audio opisująca to, co dzieje się na ekranie.
- **Uwaga:** Alternatywę można zamieścić bezpośrednio w dokumencie lub udostępnić w osobnej wersji, która spełnia wymagania.

---

## C.10.1.2.2 C.10.1.2.2 Napisy rozszerzone (nagranie)

### Procedure
['11. Sprawdź, czy dokument spełnia kryterium sukcesu [WCAG 2.1 – 1.2.2 Napisy rozszerzone (nagranie)](https://www.w3.org/Translations/WCAG21-pl/#napisy-rozszerzone-nagranie)']

### Evaluation
Inspekcja

### Checklist
- **Napisy:** Sprawdź, czy wszystkie nagrania wideo z dźwiękiem (dialogi, istotne odgłosy) posiadają zsynchronizowane napisy dla niesłyszących.
- **Kompletność napisów:** Sprawdź, czy napisy zawierają nie tylko dialogi, ale także informacje o istotnych dźwiękach (np. [muzyka], [śmiech], [dzwonek do drzwi]).
- **Uwaga:** Definicja WCAG 2.1 zauważa, że napisy (captions) są czasem nazywane "napisami dla niesłyszących". Niezależnie od nazwy, muszą one zapewniać zsynchronizowaną alternatywę tekstową zarówno dla mowy, jak i innych dźwięków (efekty dźwiękowe, muzyka, śmiech, identyfikacja mówcy), które są kluczowe dla zrozumienia treści.

---

## C.10.1.2.3 C.10.1.2.3 Audiodeskrypcja lub alternatywa tekstowa dla mediów (nagranie)

### Procedure
['1. Sprawdź, czy dokument spełnia kryterium sukcesu [WCAG 2.1 – 1.2.3 Audiodeskrypcja lub alternatywa tekstowa dla mediów (nagranie)](https://www.w3.org/Translations/WCAG21-pl/#audiodeskrypcja-lub-alternatywa-tekstowa-dla-mediow-nagranie)']

### Evaluation
Inspekcja

### Checklist
- **Audiodeskrypcja lub tekst:** Sprawdź, czy nagrania wideo posiadają audiodeskrypcję (dodatkową ścieżkę lektora opisującą obraz) LUB pełną alternatywę tekstową (transkrypcję opisową), która pozwala zrozumieć treść wizualną bez oglądania.
- **Uwaga 1:** Definicja WCAG 2.1 wskazuje, że audiodeskrypcja jest czasem nazywana "opisem wideo" lub "narracją opisową".
- **Uwaga 2:** Często wykorzystuje się do tego celu dodatkowe lub alternatywne ścieżki dźwiękowe.

---

## C.10.1.2.4 C.10.1.2.4 Napisy rozszerzone (na żywo)

### Procedure
['1. Sprawdź, czy dokument spełnia kryterium sukcesu [WCAG 2.1 – 1.2.4 Napisy rozszerzone (na żywo)](https://www.w3.org/Translations/WCAG21-pl/#napisy-rozszerzone-na-zywo)']

### Evaluation
Inspekcja

### Checklist
- **Napisy na żywo:** Jeśli dokument transmituje wideo na żywo z dźwiękiem, sprawdź, czy dostępne są napisy generowane w czasie rzeczywistym.
- **Uwaga:** Definicja WCAG 2.1 zauważa, że napisy (captions) są czasem nazywane "napisami dla niesłyszących". Niezależnie od nazwy, muszą one zapewniać zsynchronizowaną alternatywę tekstową zarówno dla mowy, jak i innych dźwięków (efekty dźwiękowe, muzyka, śmiech, identyfikacja mówcy), które są kluczowe dla zrozumienia treści.

---

## C.10.1.2.5 C.10.1.2.5 Audiodeskrypcja (nagranie)

### Procedure
['1. Sprawdź, czy dokument spełnia kryterium sukcesu [WCAG 2.1 – 1.2.5 Audiodeskrypcja (nagranie)](https://www.w3.org/Translations/WCAG21-pl/#audiodeskrypcja-nagranie)']

### Evaluation
Inspekcja

### Checklist
- **Audiodeskrypcja:** Sprawdź, czy nagrania wideo posiadają audiodeskrypcję, jeśli informacje wizualne są kluczowe i nie wynikają ze ścieżki dźwiękowej (wymagane dla poziomu AA).
- **Uwaga 1:** Definicja WCAG 2.1 wskazuje, że audiodeskrypcja jest czasem nazywana "opisem wideo" lub "narracją opisową".
- **Uwaga 2:** Często wykorzystuje się do tego celu dodatkowe lub alternatywne ścieżki dźwiękowe.

---

## C.10.1.3.1 C.10.1.3.1 Informacje i relacje

### Procedure
['11. Sprawdź, czy dokument spełnia kryterium sukcesu [WCAG 2.1 – 1.3.1 Informacje i\xa0relacje](https://www.w3.org/Translations/WCAG21-pl/#informacje-i-relacje)']

### Evaluation
Inspekcja

### Checklist
- **Nagłówki:** Sprawdź, czy nagłówki są zdefiniowane semantycznie w strukturze dokumentu (np. H1–H6, style nagłówków, tagi), a nie tylko ustawione wizualnie; poprawna semantyka poprawia czytelność dla czytników ekranu i ułatwia nawigację.
- **Listy:** Upewnij się, że listy (wypunktowane i numerowane) są tworzone za pomocą funkcji edytora lub stylów list, a nie przez ręczne wstawianie znaków — dzięki temu zachowana zostaje struktura semantyczna i ułatwiona obsługa przez technologie asystujące.
- **Tabele:** Sprawdź, czy tabele mają wyraźnie oznaczone nagłówki wierszy i/lub kolumn (np. ustawiony nagłówek wiersza/kolumny) oraz logiczną strukturę tabeli, zamiast używania wizualnego układu bez oznaczeń strukturalnych.
- **Uwaga:** W przypadku dokumentów zawierających niestandardowe typy ról strukturalnych, dobrą praktyką jest mapowanie ich na standardowe typy struktur jako rozwiązanie awaryjne dla czytnika.

---

## C.10.1.3.2 C.10.1.3.2 Zrozumiała kolejność

### Procedure
['1. Sprawdź, czy dokument spełnia kryterium sukcesu [WCAG 2.1 – 1.3.2 Zrozumiała kolejność](https://www.w3.org/Translations/WCAG21-pl/#zrozumia-a-kolejnosc)']

### Evaluation
Inspekcja

### Checklist
- **Kolejność odczytu:** Sprawdź w panelu 'Tagi' (PDF) lub 'Kolejność' (Acrobat Pro), czy kolejność elementów w drzewie struktury odpowiada logicznej kolejności czytania dokumentu.
- **Elementy wielokolumnowe:** Upewnij się, że tekst w układzie wielokolumnowym jest odczytywany w poprawnej kolejności (kolumna po kolumnie).

---

## C.10.1.3.3 C.10.1.3.3 Właściwości zmysłowe

### Procedure
['11. Sprawdź, czy dokument spełnia kryterium sukcesu [WCAG 2.1 – 1.3.3 Właściwości zmysłowe](https://www.w3.org/Translations/WCAG21-pl/#w-asciwosci-zmys-owe)']

### Evaluation
Inspekcja

### Checklist
- **Właściwości zmysłowe:** Sprawdź, czy instrukcje w dokumencie nie polegają wyłącznie na właściwościach zmysłowych, takich jak kształt, rozmiar, kolor czy lokalizacja (np. unikaj "zobacz tekst w czerwonej ramce", użyj "zobacz tekst w ramce 'Ważne'").

---

## C.10.1.3.4 C.10.1.3.4 Orientacja

### Procedure
['1. Sprawdź, czy dokument spełnia kryterium sukcesu [WCAG 2.1 – 1.3.4 Orientacja](https://www.w3.org/Translations/WCAG21-pl/#orientacja)']

### Evaluation
Inspekcja

### Checklist
- **Orientacja ekranu:** Sprawdź, czy dokument nie wymusza jednej orientacji ekranu (poziomej lub pionowej), chyba że jest to niezbędne (np. pianino, czek bankowy). Treść powinna być dostępna w obu orientacjach.

---

## C.10.1.3.5 C.10.1.3.5 Określenie pożądanej wartości

### Procedure
['1. Sprawdź, czy dokument spełnia kryterium sukcesu [WCAG 2.1 – 1.3.5 Określenie pożądanej wartości](https://www.w3.org/Translations/WCAG21-pl/#okreslenie-pozadanej-wartosci)']

### Evaluation
Inspekcja

### Checklist
- **Określenie celu pola:** W dokumentach zawierających formularze (np. PDF), sprawdź, czy pola zbierające dane o użytkowniku są jednoznacznie opisane (np. poprzez nazwę pola lub etykietę/tooltip), co pozwala technologiom asystującym na identyfikację ich celu.

---

## C.10.1.4.1 C.10.1.4.1 Użycie koloru

### Procedure
['1. Sprawdź, czy dokument spełnia kryterium sukcesu [WCAG 2.1 – 1.4.1 Użycie koloru](https://www.w3.org/Translations/WCAG21-pl/#uzycie-koloru)']

### Evaluation
Inspekcja

### Checklist
- **Kolor jako jedyny wyróżnik:** Sprawdź, czy kolor nie jest jedynym sposobem przekazywania informacji (np. błędy w formularzu oznaczone tylko czerwoną ramką). Należy dodać ikonę lub tekst.
- **Linki w tekście:** Sprawdź, czy linki wewnątrz bloków tekstu są wyróżnione czymś więcej niż tylko kolorem (np. podkreśleniem) lub czy mają wystarczający kontrast względem otoczenia (3:1) i tła.

---

## C.10.1.4.2 C.10.1.4.2 Kontrola odtwarzania dźwięku

### Procedure
['1. Sprawdź, czy dokument spełnia kryterium sukcesu zawarte w\xa0Tabeli 10.1.']

### Evaluation
Inspekcja

### Checklist
- **Kontrola dźwięku:** Jeśli jakikolwiek dźwięk w dokumencie jest odtwarzany automatycznie przez więcej niż 3 sekundy, sprawdź, czy dostępny jest mechanizm pozwalający na wstrzymanie lub zatrzymanie odtwarzania, albo mechanizm kontroli głośności dźwięku niezależny od głośności systemu.
- **Kryterium sukcesu (Tabela 10.1):** Jeśli jakikolwiek dźwięk w dokumencie odtwarza się automatycznie dłużej niż 3 sekundy, musi istnieć sposób, aby go zatrzymać, wstrzymać lub ściszyć (niezależnie od głośności całego urządzenia).
- **Uwaga:** Ponieważ jakakolwiek część dokumentu niespełniająca tego kryterium sukcesu może zakłócać zdolność użytkownika do korzystania z całego dokumentu, cała zawartość dokumentu (niezależnie od tego, czy jest używana do spełnienia innych kryteriów sukcesu) musi spełniać to kryterium.

---

## C.10.1.4.3 C.10.1.4.3 Kontrast (minimum)

### Procedure
['1. Sprawdź, czy dokument spełnia kryterium sukcesu [WCAG 2.1 – 1.4.3 Kontrast (minimum)](https://www.w3.org/Translations/WCAG21-pl/#kontrast-minimum)']

### Evaluation
Inspekcja

### Checklist
- **Kontrast tekstu:** Sprawdź, czy tekst dokumentu zachowuje minimalny kontrast 4.5:1 względem tła. Użyj narzędzia do pobierania kolorów (np. Colour Contrast Analyser), aby zmierzyć wartości w dokumencie.

---

## C.10.1.4.4 C.10.1.4.4 Zmiana rozmiaru tekstu

### Procedure
['1. Sprawdź, czy dokument spełnia kryterium sukcesu [WCAG 2.1 – 1.4.4 Zmiana rozmiaru tekstu](https://www.w3.org/Translations/WCAG21-pl/#zmiana-rozmiaru-tekstu)']

### Evaluation
Inspekcja

### Checklist
- **Powiększanie tekstu:** Sprawdź, czy tekst w dokumencie można powiększyć do 200% bez utraty treści i funkcjonalności (np. używając opcji powiększenia w przeglądarce PDF lub edytorze tekstu).
- **Skalowanie:** Upewnij się, że przy powiększeniu tekst nie nakłada się na inne elementy i nie jest ucinany.
- **Uwaga 1:** Treści, dla których istnieją odtwarzacze oprogramowania, przeglądarki lub edytory z funkcją powiększania do 200 procent, automatycznie spełniają to kryterium sukcesu, gdy są używane z takimi odtwarzaczami, chyba że treść nie będzie działać z powiększeniem.
- **Uwaga 2:** To kryterium sukcesu dotyczy możliwości powiększenia tekstu na ekranie co najmniej do 200% bez konieczności używania technologii asystujących. Oznacza to, że aplikacja zapewnia pewne środki do powiększania tekstu o 200% (zoom lub inne) bez utraty treści lub funkcjonalności, albo że aplikacja współpracuje z funkcjami platformy, które spełniają to wymaganie.
- **Uwaga 3:** Dobrą praktyką jest używanie tylko takich czcionek, które pozwalają na skalowanie bez utraty jakości (np. prezentacja pikselowa). Dotyczy to w szczególności czcionek wbudowanych.

---

## C.10.1.4.5 C.10.1.4.5 Obrazy tekstu

### Procedure
['1. Sprawdź, czy dokument spełnia kryterium sukcesu [WCAG 2.1 – 1.4.5 Obrazy tekstu](https://www.w3.org/Translations/WCAG21-pl/#obrazy-tekstu)']

### Evaluation
Inspekcja

### Checklist
- **Tekst jako grafika:** Sprawdź, czy tekst nie jest prezentowany w formie obrazka (chyba że jest to logo lub jest to niezbędne, np. wykres). Należy używać prawdziwego tekstu, aby był skalowalny i dostępny dla czytników.

---

## C.10.1.4.10 C.10.1.4.10 Dopasowanie do ekranu

### Procedure
['1. Sprawdź, czy dokument spełnia kryterium sukcesu zawarte w\xa0Tabeli 10.2.']

### Evaluation
Inspekcja

### Checklist
- **Dopasowanie do ekranu (Reflow):** Sprawdź, czy treść dokumentu może być prezentowana bez utraty informacji lub funkcjonalności i bez konieczności przewijania w dwóch wymiarach dla:
- - Treści przewijanej pionowo przy szerokości równoważnej 320 pikseli CSS (odpowiada to szerokości 1280 px przy powiększeniu 400%).
- - Treści przewijanej poziomo przy wysokości równoważnej 256 pikseli CSS.
- **Kryterium sukcesu (Tabela 10.2):** Treść dokumentu powinna dać się przeglądać bez utraty informacji i funkcji oraz bez konieczności przewijania w dwóch kierunkach (poziomo i pionowo) jednocześnie. Dotyczy to sytuacji, gdy szerokość widoku wynosi 320 pikseli CSS (dla treści przewijanych pionowo) lub wysokość 256 pikseli CSS (dla treści przewijanych poziomo). Wyjątkiem są treści, które ze swojej natury wymagają układu dwuwymiarowego.
- **Uwaga 1:** 320 pikseli CSS odpowiada szerokości ekranu 1280 pikseli przy powiększeniu 400%.
- **Uwaga 2:** Przykłady treści wymagających układu dwuwymiarowego to: obrazy, mapy, diagramy, wideo, gry, prezentacje, tabele danych oraz interfejsy, gdzie paski narzędzi muszą być widoczne podczas pracy.

---

## C.10.1.4.11 C.10.1.4.11 Kontrast elementów nietekstowych

### Procedure
['1. Sprawdź, czy dokument spełnia kryterium sukcesu [WCAG 2.1 – 1.4.11 Kontrast elementów nietekstowych](https://www.w3.org/Translations/WCAG21-pl/#kontrast-elementow-nietekstowych)']

### Evaluation
Inspekcja

### Checklist
- **Kontrast elementów nietekstowych:** Sprawdź, czy elementy interfejsu (przyciski, pola formularzy) oraz ważne elementy graficzne (wykresy) mają kontrast co najmniej 3:1 względem sąsiadujących kolorów.

---

## C.10.1.4.12 C.10.1.4.12 Odstępy w tekście

### Procedure
['1. Sprawdź, czy dokument spełnia kryterium sukcesu [WCAG 2.1 – 1.4.12 Odstępy w\xa0tekście](https://www.w3.org/Translations/WCAG21-pl/#odstepy-w-tekscie)']

### Evaluation
Inspekcja

### Checklist
- **Odstępy w tekście:** Sprawdź, czy użytkownik może zmienić odstępy w tekście (interlinia, odstępy między akapitami, słowami, literami) bez utraty treści lub funkcjonalności (np. używając skryptozakładki testowej).

---

## C.10.1.4.13 C.10.1.4.13 Treść spod kursora lub fokusu

### Procedure
['1. Sprawdź, czy dokument spełnia kryterium sukcesu [WCAG 2.1 – 1.4.13 Treść spod kursora lub fokusu](https://www.w3.org/Translations/WCAG21-pl/#tresc-spod-kursora-lub-fokusu)']

### Evaluation
Inspekcja

### Checklist
- **Treść spod kursora (Hover):** Sprawdź, czy treści pojawiające się po najechaniu myszą (tooltipy, menu) można odrzucić (klawiszem Esc), czy można na nie najechać kursorem bez ich znikania, i czy nie znikają same bez zmiany fokusu.

---

## C.10.2.1.1 C.10.2.1.1 Klawiatura

### Procedure
['1. Sprawdź, czy dokument spełnia kryterium sukcesu [WCAG 2.1 – 2.1.1 Klawiatura](https://www.w3.org/Translations/WCAG21-pl/#klawiatura)']

### Evaluation
Inspekcja

### Checklist
- **Obsługa klawiaturą:** Sprawdź, czy wszystkie elementy interaktywne w dokumencie (np. linki, pola formularzy, przyciski, multimedia) są dostępne i obsługiwalne wyłącznie za pomocą klawiatury.
- **Nawigacja:** Upewnij się, że możesz dotrzeć do każdego elementu interaktywnego używając klawisza Tab i aktywować go (np. Enter lub Spacja), nie używając myszki.

---

## C.10.2.1.2 C.10.2.1.2 Bez pułapki na klawiaturę

### Procedure
['1. Sprawdź, czy dokument spełnia kryterium sukcesu zawarte w\xa0Tabeli 10.3.']

### Evaluation
Inspekcja

### Checklist
- **Pułapka na klawiaturę:** Sprawdź, czy fokus nie zostaje uwięziony w żadnym elemencie (np. w odtwarzaczu wideo, oknie modalnym) i czy można z niego wyjść standardowymi klawiszami (np. Tab, Esc).
- **Kryterium sukcesu (Tabela 10.3):** Jeśli można wejść na element za pomocą klawiatury, musi być też możliwe wyjście z niego za pomocą klawiatury. Jeśli wyjście wymaga użycia innych klawiszy niż standardowe (np. strzałki, Tab), użytkownik musi zostać o tym poinformowany.
- **Uwaga 1:** Ponieważ "pułapka na klawiaturę" może uniemożliwić korzystanie z całego dokumentu, zasada ta dotyczy wszystkich treści w dokumencie.
- **Uwaga 2:** Standardowe metody wyjścia zależą od systemu (np. na komputerach często jest to klawisz Esc).

---

## C.10.2.1.4 C.10.2.1.4 Jednoznakowe skróty klawiaturowe

### Procedure
['1. Sprawdź, czy dokument spełnia kryterium sukcesu [WCAG 2.1 – 2.1.4 Jednoznakowe skróty klawiaturowe](https://www.w3.org/Translations/WCAG21-pl/#jednoznakowe-skroty-klawiaturowe)']

### Evaluation
Inspekcja

### Checklist
- **Skróty jednoliterowe:** Jeśli dokument obsługuje skróty klawiszowe oparte na pojedynczych literach, sprawdź, czy można je wyłączyć lub zmienić, aby uniknąć przypadkowego uruchomienia (np. podczas dyktowania tekstu).

---

## C.10.2.2.1 C.10.2.2.1 Dostosowanie czasu

### Procedure
['1. Sprawdź, czy dokument spełnia kryterium sukcesu zawarte w\xa0Tabeli 10.4.']

### Evaluation
Inspekcja

### Checklist
- **Limity czasowe:** Jeśli w dokumencie występują limity czasowe (np. sesja logowania), sprawdź, czy użytkownik może je wyłączyć, dostosować lub przedłużyć przed upływem czasu.
- **Kryterium sukcesu (Tabela 10.4):** Jeśli dokument narzuca limit czasu, musi zostać spełniony jeden z warunków:

- **Wyłączenie:** Użytkownik może wyłączyć limit.
- **Dostosowanie:** Użytkownik może wydłużyć limit co najmniej 10-krotnie.
- **Wydłużenie:** Użytkownik otrzymuje ostrzeżenie i ma co najmniej 20 sekund na wydłużenie czasu prostą czynnością (np. naciśnięciem spacji).

**Wyjątki:** Nie dotyczy to sytuacji, gdy limit czasu jest niezbędny (np. aukcje na żywo) lub trwa dłużej niż 20 godzin.
- **Uwaga:** Celem jest zapewnienie użytkownikom wystarczającej ilości czasu na wykonanie zadania bez niespodzianek.

---

## C.10.2.2.2 C.10.2.2.2 Pauza, zatrzymanie, ukrycie

### Procedure
['1. Sprawdź, czy dokument spełnia kryterium sukcesu zawarte w\xa0Tabeli 10.5.']

### Evaluation
Inspekcja

### Checklist
- **Pauza, zatrzymanie, ukrycie:** Sprawdź, czy ruszające się, migające lub przewijające się automatycznie treści (np. karuzele, tickery) można zatrzymać, zapauzować lub ukryć.
- **Kryterium sukcesu (Tabela 10.5):** Dla informacji poruszających się, migających, przewijających się lub aktualizujących się automatycznie, spełnione są wszystkie poniższe warunki:

- **Ruch, miganie, przewijanie:** Dla każdej takiej treści, która (1) uruchamia się automatycznie, (2) trwa dłużej niż 5 sekund i (3) jest prezentowana równolegle z innymi treściami, istnieje mechanizm pozwalający użytkownikowi na jej wstrzymanie, zatrzymanie lub ukrycie, chyba że jest ona częścią aktywności, w której jest niezbędna.
- **Automatyczna aktualizacja:** Dla każdej automatycznie aktualizowanej treści, która (1) uruchamia się automatycznie i (2) jest prezentowana równolegle z innymi treściami, istnieje mechanizm pozwalający użytkownikowi na wstrzymanie, zatrzymanie, ukrycie lub kontrolę częstotliwości aktualizacji, chyba że aktualizacja jest niezbędna.
- **Uwaga 1:** Wymagania dotyczące migotania lub błysków opisano w WCAG 2.1, wytyczna 2.3.
- **Uwaga 2:** Ponieważ jakakolwiek część dokumentu niespełniająca tego kryterium może zakłócać zdolność użytkownika do korzystania z całego dokumentu, cała zawartość dokumentu (niezależnie od tego, czy jest używana do spełnienia innych kryteriów sukcesu) musi spełniać to kryterium.
- **Uwaga 3:** Treści aktualizowane okresowo przez oprogramowanie lub przesyłane strumieniowo nie muszą zachowywać informacji wygenerowanych w trakcie pauzy, jeśli nie jest to technicznie możliwe lub mogłoby wprowadzać w błąd.
- **Uwaga 4:** Animacja będąca częścią fazy ładowania (preload) może być uznana za niezbędną, jeśli w tym czasie nie jest możliwa interakcja, a brak wskaźnika postępu mógłby zmylić użytkownika (sugerując awarię).

---

## C.10.2.3.1 C.10.2.3.1 Trzy błyski lub wartości poniżej progu

### Procedure
['1. Sprawdź, czy dokument spełnia kryterium sukcesu zawarte w\xa0Tabeli 10.6.']

### Evaluation
Inspekcja

### Checklist
- **Błyski:** Sprawdź, czy dokument nie zawiera elementów błyskających częściej niż 3 razy na sekundę (może to wywołać atak padaczki).
- **Kryterium sukcesu (Tabela 10.6):** Dokument nie może zawierać elementów, które błyskają częściej niż 3 razy na sekundę.
- **Uwaga:** Błyskanie może wywołać atak padaczki, dlatego zasada ta jest bezwzględna dla całego dokumentu.

---

## C.10.2.4.2 C.10.2.4.2 Tytuł dokumentu

### Procedure
['1. Sprawdź, czy dokument spełnia kryterium sukcesu zawarte w\xa0Tabeli 10.7.']

### Evaluation
Inspekcja

### Checklist
- **Tytuł dokumentu:** Sprawdź we właściwościach pliku, czy pole 'Tytuł' jest wypełnione i opisuje zawartość.
- **Wyświetlanie tytułu (PDF):** W plikach PDF sprawdź w ustawieniach, czy opcja 'Pokaż' jest ustawiona na 'Tytuł dokumentu', a nie 'Nazwa pliku'.
- **Kryterium sukcesu (Tabela 10.7):** Dokumenty muszą mieć tytuły, które opisują ich temat lub cel.
- **Uwaga:** Nazwa pliku może być uznana za wystarczający tytuł, jeśli trafnie opisuje temat lub cel dokumentu.

---

## C.10.2.4.3 C.10.2.4.3 Kolejność fokusu

### Procedure
['1. Sprawdź, czy dokument spełnia kryterium sukcesu zawarte w\xa0Tabeli 10.8.']

### Evaluation
Inspekcja

### Checklist
- **Kolejność fokusu:** Sprawdź, czy kolejność nawigacji klawiaturą (Tab) jest logiczna i przewidywalna (zazwyczaj od lewej do prawej, od góry do dołu).
- **Kryterium sukcesu (Tabela 10.8):** Jeśli po dokumencie można nawigować sekwencyjnie, a kolejność ta ma znaczenie dla zrozumienia treści lub obsługi, to elementy interaktywne muszą otrzymywać fokus w logicznej kolejności, która zachowuje sens i funkcjonalność.

---

## C.10.2.4.4 C.10.2.4.4 Cel łącza (w kontekście)

### Procedure
['1. Sprawdź, czy dokument spełnia kryterium sukcesu [WCAG 2.1 – 2.4.4 Cel łącza (w kontekście)](https://www.w3.org/Translations/WCAG21-pl/#cel-acza-w-kontekscie)']

### Evaluation
Inspekcja

### Checklist
- **Cel linku:** Sprawdź, czy treść każdego linku (lub linku wraz z kontekstem) jasno określa, dokąd on prowadzi. Unikaj linków typu "kliknij tutaj" bez kontekstu.

---

## C.10.2.4.6 C.10.2.4.6 Nagłówki i etykiety

### Procedure
['11. Sprawdź, czy dokument spełnia kryterium sukcesu [WCAG 2.1 – 2.4.6 Nagłówki i\xa0etykiety](https://www.w3.org/Translations/WCAG21-pl/#nag-owki-i-etykiety)']

### Evaluation
Inspekcja

### Checklist
- **Nagłówki i etykiety:** Sprawdź, czy nagłówki i etykiety jasno opisują temat lub cel sekcji/pola formularza.

---

## C.10.2.4.7 C.10.2.4.7 Widoczny fokus

### Procedure
['1. Sprawdź, czy dokument spełnia kryterium sukcesu [WCAG 2.1 – 2.4.7 Widoczny fokus](https://www.w3.org/Translations/WCAG21-pl/#widoczny-fokus)']

### Evaluation
Inspekcja

### Checklist
- **Widoczny fokus:** Sprawdź, czy każdy element interaktywny ma wyraźnie widoczne obramowanie (fokus) podczas nawigacji klawiaturą.

---

## C.10.2.5.1 C.10.2.5.1 Gesty dotykowe

### Procedure
['1. Sprawdź, czy dokument spełnia kryterium sukcesu zawarte w\xa0Tabeli 10.9.']

### Evaluation
Inspekcja

### Checklist
- **Gesty punktowe:** Sprawdź, czy funkcje wymagające gestów wielopunktowych (np. pinch-to-zoom) lub ścieżkowych można obsłużyć również za pomocą prostego kliknięcia/dotknięcia.
- **Kryterium sukcesu (Tabela 10.9):** Wszystkie funkcje, które używają gestów wielopunktowych (np. szczypanie) lub gestów opartych na ścieżce (np. przeciąganie), muszą być możliwe do obsłużenia za pomocą pojedynczego wskaźnika bez gestu opartego na ścieżce, chyba że gest wielopunktowy lub oparty na ścieżce jest niezbędny.
- **Uwaga:** Wymóg ten dotyczy dokumentów, które interpretują działania wskaźnika (nie dotyczy działań wymaganych do obsługi przeglądarki lub technologii wspomagającej).

---

## C.10.2.5.2 C.10.2.5.2 Rezygnacja ze wskazania

### Procedure
['1. Sprawdź, czy dokument spełnia kryterium sukcesu zawarte w\xa0Tabeli 10.10.']

### Evaluation
Inspekcja

### Checklist
- **Rezygnacja ze wskazania:** Sprawdź, czy funkcjonalność jest aktywowana przy zwolnieniu wskaźnika (up-event), co pozwala na anulowanie (np. przez przesunięcie kursora poza element). Jeśli aktywacja następuje przy naciśnięciu, upewnij się, że istnieje mechanizm cofnięcia lub zachowanie to jest niezbędne.
- **Kryterium sukcesu (Tabela 10.10):** Dla funkcji obsługiwanych jednym wskaźnikiem (np. myszką, palcem) musi być spełniony jeden z warunków:

- **Brak reakcji na wciśnięcie:** Samo wciśnięcie (down-event) nie uruchamia funkcji.
- **Anulowanie lub cofnięcie:** Funkcja działa dopiero po puszczeniu (up-event) i można ją anulować (np. odsuwając kursor) lub cofnąć po wykonaniu.
- **Odwrócenie:** Puszczenie przycisku cofa to, co zrobiło wciśnięcie.
- **Niezbędność:** Reakcja na wciśnięcie jest konieczna (np. emulacja klawiatury, pianino).
- **Uwaga:** Dotyczy to dokumentów interpretujących działania wskaźnika.

---

## C.10.2.5.3 C.10.2.5.3 Etykieta w nazwie

### Procedure
['1. Sprawdź, czy dokument spełnia kryterium sukcesu [WCAG 2.1 – 2.5.3 Etykieta w\xa0nazwie](https://www.w3.org/Translations/WCAG21-pl/#etykieta-w-nazwie)']

### Evaluation
Inspekcja

### Checklist
- **Etykieta w nazwie:** Sprawdź, czy widoczna etykieta tekstowa elementu (np. przycisku) jest zawarta w jego nazwie dostępnej (Accessible Name) dla czytników ekranu.

---

## C.10.2.5.4 C.10.2.5.4 Aktywowanie ruchem

### Procedure
['1. Sprawdź, czy dokument spełnia kryterium sukcesu [WCAG 2.1 – 2.5.4 Aktywowanie ruchem](https://www.w3.org/Translations/WCAG21-pl/#aktywowanie-ruchem)']

### Evaluation
Inspekcja

### Checklist
- **Aktywowanie ruchem:** Jeśli funkcja jest aktywowana ruchem urządzenia (np. potrząśnięcie), sprawdź, czy można ją wyłączyć lub obsłużyć interfejsem.

---

## C.10.3.1.1 C.10.3.1.1 Język dokumentu

### Procedure
['1. Sprawdź, czy dokument spełnia kryterium sukcesu zawarte w\xa0Tabeli 10.11.']

### Evaluation
Inspekcja

### Checklist
- **Język dokumentu:** Sprawdź we właściwościach pliku, czy główny język dokumentu jest poprawnie ustawiony (np. Polski).
- **Kryterium sukcesu (Tabela 10.11):** Domyślny język każdego dokumentu musi być możliwy do programowego określenia (czyli ustawiony w metadanych pliku).

---

## C.10.3.1.2 C.10.3.1.2 Język części

### Procedure
['1. Sprawdź, czy dokument spełnia kryterium sukcesu zawarte w\xa0Tabeli 10.12.']

### Evaluation
Inspekcja

### Checklist
- **Język części:** Jeśli w dokumencie występują fragmenty w innym języku, sprawdź w drzewie tagów (PDF), czy odpowiednie elementy (np. Span) mają ustawiony atrybut języka (Lang).
- **Kryterium sukcesu (Tabela 10.12):** Język każdego fragmentu tekstu w dokumencie musi być możliwy do programowego określenia. Wyjątkiem są nazwy własne, terminy techniczne, słowa o nieokreślonym języku oraz zwroty, które weszły do języka potocznego otaczającego tekstu.
- **Uwaga 1:** Niektóre formaty dokumentów mogą nie wspierać oznaczania języka dla fragmentów tekstu – w takim przypadku spełnienie tego kryterium może być niemożliwe.
- **Uwaga 2:** Zazwyczaj zakłada się, że cały tekst jest w głównym języku dokumentu, chyba że zaznaczono inaczej (dziedziczenie).

---

## C.10.3.2.1 C.10.3.2.1 Po otrzymaniu fokusu

### Procedure
['1. Sprawdź, czy dokument spełnia kryterium sukcesu [WCAG 2.1 – 3.2.1 Po otrzymaniu fokusu](https://www.w3.org/Translations/WCAG21-pl/#po-otrzymaniu-fokusu)']

### Evaluation
Inspekcja

### Checklist
- **Po otrzymaniu fokusu:** Sprawdź, czy otrzymanie fokusu przez element nie powoduje nieoczekiwanej zmiany kontekstu (np. automatycznego wysłania formularza, otwarcia nowego okna).
- **Uwaga:** Niektóre dokumenty złożone i ich programy obsługujące są zaprojektowane tak, aby zapewniać znacznie różniące się funkcje przeglądania i edycji w zależności od tego, z którą częścią dokumentu złożonego użytkownik wchodzi w interakcję (np. prezentacja zawierająca osadzony arkusz kalkulacyjny, gdzie menu i paski narzędzi zmieniają się w zależności od tego, czy użytkownik pracuje z treścią prezentacji, czy arkusza). Jeśli użytkownik korzysta z mechanizmu innego niż umieszczenie fokusu na tej części dokumentu (np. poprzez wybór z menu lub specjalny gest klawiaturowy), wynikająca z tego zmiana kontekstu nie podlega temu kryterium sukcesu, ponieważ nie została spowodowana zmianą fokusu.

---

## C.10.3.2.2 C.10.3.2.2 Podczas wprowadzania danych

### Procedure
['1. Sprawdź, czy dokument spełnia kryterium sukcesu [WCAG 2.1 – 3.2.2 Podczas wprowadzania danych](https://www.w3.org/Translations/WCAG21-pl/#podczas-wprowadzania-danych)']

### Evaluation
Inspekcja

### Checklist
- **Podczas wprowadzania danych:** Sprawdź, czy zmiana ustawienia elementu interfejsu (np. wybór z listy) nie powoduje nieoczekiwanej zmiany kontekstu, chyba że użytkownik został o tym uprzedzony.

---

## C.10.3.3.1 C.10.3.3.1 Identyfikacja błędu

### Procedure
['1. Sprawdź, czy dokument spełnia kryterium sukcesu [WCAG 2.1 – 3.3.1 Identyfikacja błędu](https://www.w3.org/Translations/WCAG21-pl/#identyfikacja-b-edu)']

### Evaluation
Inspekcja

### Checklist
- **Identyfikacja błędu:** Sprawdź, czy błędy w formularzu są automatycznie wykrywane, a użytkownik otrzymuje jasną informację tekstową, które pole zawiera błąd i na czym on polega.

---

## C.10.3.3.2 C.10.3.3.2 Etykiety lub instrukcje

### Procedure
['1. Sprawdź, czy dokument spełnia kryterium sukcesu [WCAG 2.1 – 3.3.2 Etykiety lub instrukcje](https://www.w3.org/Translations/WCAG21-pl/#etykiety-lub-instrukcje)']

### Evaluation
Inspekcja

### Checklist
- **Etykiety lub instrukcje:** Sprawdź, czy pola wymagające danych w określonym formacie posiadają odpowiednie instrukcje lub przykłady.

---

## C.10.3.3.3 C.10.3.3.3 Sugestie korekty błędów

### Procedure
['1. Sprawdź, czy dokument spełnia kryterium sukcesu [WCAG 2.1 – 3.3.3 Sugestie korekty błędów](https://www.w3.org/Translations/WCAG21-pl/#sugestie-korekty-b-edow)']

### Evaluation
Inspekcja

### Checklist
- **Sugestie korekty:** Sprawdź, czy w przypadku błędu system podpowiada poprawną wartość (jeśli jest to możliwe).

---

## C.10.3.3.4 C.10.3.3.4 Zapobieganie błędom (prawnym, finansowym, w danych)

### Procedure
['1. Sprawdź, czy dokument spełnia kryterium sukcesu zawarte w\xa0Tabeli 10.13.']

### Evaluation
Inspekcja

### Checklist
- **Zapobieganie błędom:** Dla dokumentów prawnych/finansowych: sprawdź, czy użytkownik może zweryfikować, potwierdzić lub cofnąć transakcję przed jej finalizacją.
- **Kryterium sukcesu (Tabela 10.13):** W przypadku dokumentów, które powodują zobowiązania prawne, transakcje finansowe, modyfikację danych lub przesyłanie odpowiedzi testowych, musi być spełniony jeden z warunków:

- **Odwracalność:** Przesłanie można cofnąć.
- **Sprawdzanie:** Dane są sprawdzane pod kątem błędów, a użytkownik może je poprawić.
- **Potwierdzanie:** Dostępny jest mechanizm przeglądania, potwierdzania i poprawiania informacji przed ich ostatecznym wysłaniem.

---

## C.10.4.1.1 C.10.4.1.1 Poprawność kodu

### Procedure
['1. Sprawdź, czy dokument spełnia kryterium sukcesu zawarte w\xa0Tabeli 10.14.']

### Evaluation
Inspekcja

### Checklist
- **Poprawność kodu (Parsing):** Sprawdź kod pod kątem błędów składniowych.
- **Kryterium sukcesu (Tabela 10.14):** W przypadku dokumentów używających języków znaczników, w taki sposób, że znaczniki są oddzielnie udostępniane i dostępne dla technologii wspomagających oraz funkcji dostępności oprogramowania lub dla wybranego przez użytkownika klienta użytkownika (chyba że specyfikacje zezwalają na te cechy):

- elementy mają kompletne znaczniki początkowe i końcowe,
- elementy są zagnieżdżone zgodnie z ich specyfikacjami,
- elementy nie zawierają zduplikowanych atrybutów,
- wszystkie identyfikatory (ID) są unikalne.
- **Uwaga 1:** Znaczniki początkowe i końcowe, w których brakuje znaku krytycznego w ich tworzeniu, takiego jak zamykający nawias ostry lub niedopasowany cudzysłów wartości atrybutu, nie są kompletne.
- **Uwaga 2:** Znaczniki nie zawsze są dostępne dla technologii wspomagających lub dla wybranych przez użytkownika klientów użytkownika, takich jak przeglądarki. W takich przypadkach zgodność z tym wymogiem nie miałaby wpływu na dostępność, tak jak ma to miejsce w przypadku treści internetowych, gdzie są one udostępniane.
- **Uwaga 3:** Przykłady znaczników, które są oddzielnie udostępniane i dostępne dla technologii wspomagających i klientów użytkownika, obejmują między innymi: dokumenty zakodowane w HTML, ODF i OOXML.

---

## C.10.4.1.2 C.10.4.1.2 Nazwa, rola, wartość

### Procedure
['1. Sprawdź, czy dokument spełnia kryterium sukcesu zawarte w\xa0Tabeli 10.15.']

### Evaluation
Inspekcja

### Checklist
- **Formularze:** Sprawdź, czy pola formularzy w PDF mają zdefiniowane etykiety (Tooltips) i czy są dostępne dla czytników ekranu.
- **Poprawność tagowania:** Upewnij się, że wszystkie istotne treści są objęte odpowiednimi tagami (P, H1, Figure itp.), a elementy nieistotne są oznaczone jako artefakty.
- **Kryterium sukcesu (Tabela 10.15):** Dla wszystkich elementów interfejsu (np. formularze, linki, skrypty) musi być możliwe programowe określenie ich nazwy, roli i wartości. Zmiany tych wartości muszą być zgłaszane technologiom asystującym.
- **Uwaga 1:** To kryterium jest skierowane głównie do programistów tworzących własne komponenty. Standardowe elementy interfejsu zazwyczaj spełniają te wymagania automatycznie.
- **Uwaga 2:** W dokumentach wspierających dostępność, standardowe elementy zazwyczaj działają poprawnie, jeśli są używane zgodnie z zasadami projektowania dla danego formatu.

---

## C.10.4.1.3 C.10.4.1.3 Komunikaty o stanie

### Procedure
['1. Sprawdź, czy dokument spełnia kryterium sukcesu [WCAG 2.1 – 4.1.3 Komunikaty o\xa0stanie](https://www.w3.org/Translations/WCAG21-pl/#komunikaty-o-stanie).']

### Evaluation
Inspekcja

### Checklist
- **Komunikaty o stanie:** Sprawdź, czy ważne komunikaty pojawiające się na ekranie (np. błędy walidacji formularza, potwierdzenie wysłania) są odczytywane przez czytnik ekranu, nawet jeśli kursor nie jest na nich ustawiony.
- **Wymaganie:** W dokumentach używających języków znaczników, komunikaty o stanie muszą być możliwe do programowego odczytania, tak aby technologie asystujące mogły je przedstawić użytkownikowi bez konieczności przenoszenia na nie fokusu.
- **Uwaga:** Dotyczy to np. sytuacji, gdy po wypełnieniu formularza w PDF pojawia się komunikat o błędzie lub sukcesie.

---

## C.11.1.1.1.1 C.11.1.1.1.1 Treść nietekstowa (obsługiwany odczyt ekranu, funkcjonalność otwarta)

### Procedure
['1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu [WCAG 2.1 – 1.1.1 Treść nietekstowa](https://www.w3.org/Translations/WCAG21-pl/#tresc-nietekstowa).']

### Evaluation
Inspekcja

### Checklist
- **Treść nietekstowa:** sprawdź, czy obrazy, ikony i inne elementy nietekstowe mają odpowiednie alternatywy tekstowe lub są oznaczone jako dekoracyjne (przegląd kodu, inspektor dostępności).
- **Test praktyczny:** Przełącz się na technologię wspomagającą (np. NVDA, JAWS, VoiceOver) i przejrzyj elementy nietekstowe; sprawdź, czy odczytane alternatywy są znaczące i przydatne. Upewnij się, że treści dekoracyjne są oznaczone jako dekoracyjne programowo.
- **Kryterium sukcesu (WCAG 2.1 – 1.1.1):** Treść nietekstowa ma alternatywny tekst lub inną formę zastępczą, chyba że jest wyłącznie dekoracyjna lub konieczna ze względów funkcjonalnych.
- **Uwaga:** CAPTCHAs aktualnie rzadko występują poza stronami WWW. Jeśli pojawiają się w oprogramowaniu, sprawdź, czy dostępna jest alternatywa (np. audio CAPTCHA, inne metody weryfikacji).

---

## C.11.1.1.1.2 C.11.1.1.1.2 Treść nietekstowa (funkcjonalność zamknięta)

### Procedure
['1. Sprawdź, czy wyjście mowy jest zapewniane jako alternatywa dla treści nietekstowej.', '2. Sprawdź, czy treść nietekstowa jest rzeczywiście istotna i\xa0potrzebna.', '3. Sprawdź, czy treść nietekstowa nie jest wyłącznie używana do formatowania wizualnego.', '4. Sprawdź, czy wyjście mowy jest zgodne z\xa0wytycznymi dotyczącymi "tekstu alternatywnego" opisanego w\xa0kryterium sukcesu WCAG 2.1 dla wytycznej [WCAG 2.1 – 1.1.1 Treść nietekstowa](https://www.w3.org/Translations/WCAG21-pl/#tresc-nietekstowa).']

### Evaluation
Test

### Checklist
- **Treść nietekstowa (funkcjonalność zamknięta):** sprawdź, czy każda treść nietekstowa ma odpowiednią alternatywę (wyjście mowy lub inna możliwość dostępu niewizualnego).
- **Kryterium sukcesu (WCAG 2.1 – 1.1.1):** Treść nietekstowa ma alternatywne przedstawienie, chyba że spełnia definicję treści dekoracyjnej lub jest niezbędna ze względów funkcjonalnych.
- **Uwaga:** Dotyczy treści w funkcjonalności zamkniętej; pamiętaj, że wybory realizacji (m.in. mowa) muszą być zrozumiałe i wierne treści.

---

## C.11.1.2.1.1 C.11.1.2.1.1 Tylko audio lub tylko wideo (nagranie – funkcjonalność otwarta)

### Procedure
['1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu [WCAG 2.1 – 1.2.1 Tylko audio lub tylko wideo (nagranie)](https://www.w3.org/Translations/WCAG21-pl/#tylko-audio-lub-tylko-wideo-nagranie).']

### Evaluation
Inspekcja

### Checklist
- **Tylko audio/wideo (nagranie):** sprawdź, czy nagrane materiały audio lub wideo mają odpowiednie alternatywy (np. transkrypcje dla audio, napisy/wersje z audiodeskrypcją dla wideo).
- **Kryterium sukcesu (WCAG 2.1 – 1):** Zgodnie z rodzajem treści, nagrania audio i wideo mają odpowiednio transkrypcje, napisy lub audiodeskrypcję, aby zapewnić równoważną alternatywę dla osób korzystających z technologii wspomagających.
- **Uwaga:** Sprawdź metadane, opcje wyłączenia dźwięku i dostęp do napisów/audiodeskrypcji.

---

## C.11.1.2.1.2.1 C.11.1.2.1.2.1 Nagrane tylko audio (funkcjonalność zamknięta)

### Procedure
['1. Sprawdź, czy informacje wizualne odpowiadają nagraniom sygnału dźwiękowego.']

### Evaluation
Inspekcja

### Checklist
- **Nagrane tylko audio:** sprawdź, czy istnieje tekstowy odpowiednik (transkrypcja) dla nagrań audio oraz czy metody odsłuchu są poprawnie udostępnione.
- **Uwaga:** Upewnij się, że dokumentacja i metadane wskazują na dostępność transkrypcji i napisów, jeśli mają zastosowanie.

---

## C.11.1.2.1.2.2 C.11.1.2.1.2.2 Nagrane tylko wideo (funkcjonalność zamknięta)

### Procedure
['1. Sprawdź, czy wyjście mowy zawiera informacje zgodne z\xa0napisami do nagranej treści wideo.']

### Evaluation
Inspekcja

### Checklist
- **Nagrane tylko wideo:** sprawdź, czy istnieją napisy, napisy dla niesłyszących lub alternatywne transkrypcje oraz, jeśli to konieczne, audiodeskrypcje.

---

## C.11.1.2.2 C.11.1.2.2 Napisy rozszerzone (nagranie)

### Procedure
['1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu [WCAG 2.1 – 1.2.2 Napisy rozszerzone (nagranie)](https://www.w3.org/Translations/WCAG21-pl/#napisy-rozszerzone-nagranie).']

### Evaluation
Inspekcja

### Checklist
- **Napisy rozszerzone (nagranie):** sprawdź, czy napisy są zgodne z nagranym dźwiękiem, synchronizowane i poprawnie pokazywane w czasie odtwarzania.
- **Kryterium sukcesu (WCAG 2.1 – 1.2.2):** Napisy powinny być poprawne i zsynchronizowane; dla nagrań live stosować napisy na żywo, dla nagrań dołączone napisy/closed captions.
- **Uwaga:** Sprawdź format i dostępność napisów w odtwarzaczu i w różnych trybach odtwarzania.

---

## C.11.1.2.3.1 C.11.1.2.3.1 Audiodeskrypcja lub alternatywa tekstowa dla mediów

### Procedure
['1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu [WCAG 2.1 – 1.2.3 Audiodeskrypcja lub alternatywa tekstowa dla mediów (nagranie)](https://www.w3.org/Translations/WCAG21-pl/#audiodeskrypcja-lub-alternatywa-tekstowa-dla-mediow-nagranie).']

### Evaluation
Inspekcja

### Checklist
- **Audiodeskrypcja lub alternatywa tekstowa dla mediów:** sprawdź, czy materiały wideo lub multimedia nagrane, które zawierają istotne treści wizualne, mają oferowaną ścieżkę audiodeskrypcji (AD) lub dokument/tekstowy opis wizualny zapewniający równoważną informację.
- **Test praktyczny:** Odtwórz przykładowe wideo z istotnymi informacjami wizualnymi i sprawdź w ustawieniach odtwarzacza, czy dostępna jest ścieżka AD; jeśli AD nie jest dostępne, sprawdź, czy dostępna jest alternatywna transkrypcja zawierająca opisy wizualne. Potwierdź, że AD/transkrypcja opisuje istotne obrazy, gesty i działania niewerbalne.
- **Kryterium sukcesu (WCAG 2.1 – 1.2.3):** Dla nagranych materiałów wizualnych udostępniono ścieżkę audiodeskrypcji lub alternatywny zapis tekstowy, który opisuje kluczowe informacje wizualne; opis jest synchronizowany adekwatnie do treści wideo.
- **Uwaga:** Jeśli materiał nie zawiera istotnych informacji wizualnych, audiodeskrypcja może nie być wymagana; sprawdź dokumentację i przypadki brzegowe.

---

## C.11.1.2.3.2 C.11.1.2.3.2 Audiodeskrypcja lub alternatywa tekstowa dla mediów (nagranie – funkcjonalność

### Procedure
['1. Sprawdź, czy wyjście mowy zawiera informacje zgodne z\xa0napisami do nagranej treści wideo.']

### Evaluation
Inspekcja

### Checklist
- **Audiodeskrypcja (funkcjonalność zamknięta):** jeśli funkcjonalność jest zamknięta i wyjście mowy jest jedyną metodą niewizualnego dostępu, sprawdź, czy wyjście mowy zawiera opisy wizualne i informacje równoważne audiodeskrypcji lub transkrypcji.
- **Test praktyczny:** Odtwórz przykładowe wideo, upewnij się, że wyjście mowy odtwarza informacje opisowe (np. z syntezatora lub wbudowanego odczytu) i porównaj z tekstową transkrypcją lub napisami rozszerzonymi; potwierdź, że brak wizualnego opisu jest kompensowany przez wyjście mowy.
- **Uwaga:** Przetestuj, czy wyjście mowy można wybrać/aktywować i czy jest zsynchronizowane z treścią; w razie potrzeby sprawdź dostępność w ustawieniach i dokumentacji platformy.

---

## C.11.1.2.4 C.11.1.2.4 Napisy rozszerzone (na żywo)

### Procedure
['1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu [WCAG 2.1 – 1.2.4 Napisy rozszerzone (na żywo)](https://www.w3.org/Translations/WCAG21-pl/#napisy-rozszerzone-na-zywo).']

### Evaluation
Inspekcja

### Checklist
- **Napisy na żywo:** sprawdź dostępność napisów na żywo dla treści transmitowanej na żywo, ich synchronizację oraz czy można je włączyć lub wyłączyć; ocenić czy są czytelne i właściwie zsynchronizowane z dźwiękiem.
- **Kryterium sukcesu (WCAG 2.1 – 1.2.4):** Treści transmitowane na żywo mają dostępne napisy na żywo, które przekazują dialog i istotne informacje dźwiękowe.

---

## C.11.1.2.5 C.11.1.2.5 Audiodeskrypcja (nagranie)

### Procedure
['1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu [WCAG 2.1 – 1.2.5 Audiodeskrypcja (nagranie)](https://www.w3.org/Translations/WCAG21-pl/#audiodeskrypcja-nagranie).']

### Evaluation
Inspekcja

### Checklist
- **Audiodeskrypcja (nagranie):** sprawdź, czy w materiałach wideo dostępna jest audiodeskrypcja lub alternatywnie tekstowa transkrypcja opisu wizualnego; potwierdź, że audiodeskrypcja opisuje istotne treści wizualne.
- **Kryterium sukcesu (WCAG 2.1 – 1.2.5):** Nagrania wideo mają audiodeskrypcję lub odpowiednią alternatywę pomagającą użytkownikom niewidzącym zrozumieć treści wizualne.

---

## C.11.1.3.1.1 C.11.1.3.1.1 Informacje i relacje (funkcjonalność otwarta)

### Procedure
['1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu [WCAG 2.1 – 1.3.1 Informacje i\xa0relacje](https://www.w3.org/Translations/WCAG21-pl/#informacje-i-relacje).']

### Evaluation
Inspekcja

### Checklist
- **Informacje i relacje:** sprawdź, czy znaczenie i relacje między elementami (np. etykiety, nagłówki, tabele, pola formularzy) są jawne i udostępnione programowo; użyj technologii wspomagających, aby upewnić się, że relacje są przekazywane poprawnie.
- **Kryterium sukcesu (WCAG 2.1 – 1.3.1):** Informacje i relacje są dostępne programowo, tak aby technologie wspomagające mogły je poprawnie odczytać i przejawić.

---

## C.11.1.3.2.1 C.11.1.3.2.1 Zrozumiała kolejność (funkcjonalność otwarta)

### Procedure
['1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu [WCAG 2.1 – 1.3.2 Zrozumiała kolejność](https://www.w3.org/Translations/WCAG21-pl/#zrozumiala-kolejnosc).']

### Evaluation
Inspekcja

### Checklist
- **Zrozumiała kolejność:** Przejrzyj interfejs i porównaj wizualną kolejność elementów z kolejnością odczytywaną programowo przez technologię wspomagającą; przeprowadź testy z użyciem screen readera (odczyt struktury) i inspektora dostępności.
- **Test praktyczny:** Użyj narzędzia inspektora (Inspect/UIA, AX Inspector, AT-SPI) aby potwierdzić, że programowa kolejność odzwierciedla układ wizualny, oraz sprawdź, czy fokus porusza się w logicznej kolejności; sprawdź skomplikowane układy (np. kolumny, modalne elm.) oraz czy sekwencja nie zmienia znaczenia.
- **Kryterium sukcesu (WCAG 2.1 – 1.3.2):** Informacje przedstawione w sekwencji, odtwarzane programowo lub podczas nawigacji, zachowują logiczne znaczenie i działanie.

---

## C.11.1.3.3 C.11.1.3.3 Właściwości zmysłowe

### Procedure
['1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu [WCAG 2.1 – 1.3.3 Właściwości zmysłowe](https://www.w3.org/Translations/WCAG21-pl/#w-asciwosci-zmys-owe).']

### Evaluation
Inspekcja

### Checklist
- **Właściwości zmysłowe:** sprawdź, czy instrukcje i informacje nie polegają wyłącznie na cechach zmysłowych (np. kolor, kształt, położenie, dźwięk).
- **Test praktyczny:** Wyłącz elementy sensoryczne (np. wyłącz dźwięk, użyj symulatora daltonizmu i przeglądu bez kolorów, zastosuj odczyt przez screen reader i sprawdź, czy treści są jednoznaczne), upewnij się, że wszystkie informacje przekazywane w sposób sensoryczny mają alternatywy tekstowe lub programowe.
- **Kryterium sukcesu (WCAG 2.1 – 1.3.3):** Informacje nie są przekazywane wyłącznie za pomocą charakterystyk zmysłowych lub, jeśli tak się dzieje, dostępne są alternatywne możliwości odczytu.

---

## C.11.1.3.4 C.11.1.3.4 Orientacja

### Procedure
['1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu [WCAG 2.1 – 1.3.4 Orientacja](https://www.w3.org/Translations/WCAG21-pl/#orientacja).']

### Evaluation
Inspekcja

### Checklist
- **Orientacja:** sprawdź, czy zawartość i funkcjonalność są dostępne i użyteczne zarówno w orientacji pionowej jak i poziomej (gdy to ma zastosowanie), oraz czy nie ma utraty krytycznych informacji przy zmianie orientacji czy proporcji okna.
- **Test praktyczny:** Obróć urządzenie lub zmień rozmiar okna, testuj w różnych rozdzielczościach i sprawdź zachowanie wszystkich kontrolek, czy są widoczne i funkcjonalne; dla aplikacji skomplikowanych sprawdź przystosowanie widżetów i toolbarów, czy nic nie zakrywa istotnych elementów.
- **Kryterium sukcesu (WCAG 2.1 – 1.3.4):** Zawartość i funkcjonalność zachowują sens i dostępność przy zmianie orientacji lub proporcji ekranu, chyba że dwu-wymiarowy układ jest niezbędny.

---

## C.11.1.3.5.1 C.11.1.3.5.1 Określenie pożądanej wartości (funkcjonalność otwarta)

### Procedure
['1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu [WCAG 2.1 – 1.3.5 Określenie pożądanej wartości](https://www.w3.org/Translations/WCAG21-pl/#okreslenie-pozadanej-wartosci).']

### Evaluation
Inspekcja

### Checklist
- **Określenie pożądanej wartości:** sprawdź, czy pola formularzy (np. pola adresu, numeru telefonu, e-mail) mają dodatkowe atrybuty określające przeznaczenie pola (np. HTML autocomplete, platformowe inputPurpose), oraz czy te informacje są udostępniane programowo do technologii wspomagających.
- **Test praktyczny:** Użyj inspektora dostępności, aby potwierdzić, że wartości przeznaczenia pól są dostępne oraz sprawdź, czy funkcje autouzupełniania/przechowywania danych są powiązane z odpowiednimi atrybutami semantycznymi; przetestuj z ekranowym odczytem czy dane są odczytywane i interpretowane prawidłowo.
- **Kryterium sukcesu (WCAG 2.1 – 1.3.5):** Najważniejsze cele wejściowe są określone i są dostępne programowo, aby ułatwić wypełnianie formularzy i precyzyjne dopasowanie danych przez technologie wspomagające.

---

## C.11.1.3.5.2 C.11.1.3.5.2 Określenie pożądanej wartości (funkcjonalność zamknięta)

### Procedure
['1. Sprawdź, czy sygnał dźwiękowy jest dostarczany za pomocą mechanizmu zawartego w\xa0TIK lub dostarczanego wraz z\xa0nią.', '2. Sprawdź, czy sygnał dźwiękowy jest dostarczany za pomocą osobistego zestawu słuchawkowego, który można podłączyć poprzez gniazdo audio 3,5 mm lub standardowe połączenie branżowe, bez konieczności korzystania ze wzroku.', '3. Sprawdź, czy sygnał dźwiękowy obejmuje elementy z\xa0sekcji Przeznaczenie pól danych w\xa0komponentach interfejsu użytkowników.']

### Evaluation
Inspekcja

### Checklist
- **Sygnał dźwiękowy dla funkcjonalności zamkniętej:** sprawdź, czy dźwięk jest dostarczany przez mechanizm wbudowany w TIK lub dostarczany wraz z nią, oraz czy obejmuje informacje o przeznaczeniu pól danych w komponentach interfejsu.
- **Test praktyczny:** Podłącz osobisty zestaw słuchawkowy przez gniazdo audio 3,5 mm lub standardowe połączenie branżowe, bez korzystania ze wzroku, i potwierdź, że sygnał dźwiękowy zawiera elementy określające przeznaczenie pól danych (np. adres, telefon, e-mail).
- **Uwaga:** Upewnij się, że dźwięk jest dostępny bez konieczności wizualnego interfejsu, zapewniając alternatywny dostęp dla użytkowników niewidomych.

---

## C.11.1.4.1 C.11.1.4.1 Użycie koloru

### Procedure
['1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu [WCAG 2.1 – 1.4.1 Użycie koloru](https://www.w3.org/Translations/WCAG21-pl/#uzycie-koloru).']

### Evaluation
Inspekcja

### Checklist
- **Użycie koloru:** sprawdź, czy kolor nie jest jedynym sposobem przekazywania informacji (np. błędy formularza oznaczone tylko kolorem).
- **Test praktyczny:** Wyłącz kolory (tryb kontrastu lub symulacja odcieni szarości) i potwierdź, że wszystkie informacje i instrukcje pozostają dostępne (za pomocą tekstu, etykiet, ikon lub kształtów).
- **Kryterium sukcesu (WCAG 2.1 – 1.4.1):** Informacje przekazywane za pomocą koloru mają również dodatkowe, niekolorystyczne metody identyfikacji (tekst, ikony, wzór).
- **Uwaga:** Dla dekoracji i elementów logo stosuje się wyjątki; zwróć szczególną uwagę na elementy formularzy i powiadomienia błędów.

---

## C.11.1.4.2 C.11.1.4.2 Kontrola odtwarzania dźwięku

### Procedure
['1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu zawarte w\xa0Tabeli 11.1']

### Evaluation
Inspekcja

### Checklist
- **Kontrola odtwarzania dźwięku:** sprawdź, czy odtwarzane dźwięki z materiałów multimedialnych lub z tła mają możliwość wstrzymania, pauzy, regulacji głośności i są dostępne poprzez interfejs użytkownika; upewnij się, że automatyczne odtwarzanie dźwięku można wyłączyć lub jest wyłączone.
- **Test praktyczny:** Odtwórz przykładowe treści z dźwiękiem, spróbuj zmienić głośność, wyciszyć ścieżkę audio, zatrzymać i wznowić odtwarzanie; sprawdź, czy sterowanie jest programowo dostępne (np. kontrolki w aplikacji i przez technologię wspomagającą).
- **Kryterium sukcesu (Tabela 11.1):** Użytkownik ma dostęp do kontroli dźwięku i może wyłączyć lub zatrzymać odtwarzanie dźwięku, w przypadku gdy jest on rozpraszający lub zbędny dla zrozumienia treści.
- **Uwaga:** W niektórych aplikacjach dźwięk systemowy może wymagać uprawnień lub ustawień systemowych; sprawdź także, czy istnieje możliwość wyłączenia globalnej ścieżki audio.

---

## C.11.1.4.3 C.11.1.4.3 Kontrast (minimum)

### Procedure
['1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu [WCAG 2.1 – 1.4.3 Kontrast (minimum)](https://www.w3.org/Translations/WCAG21-pl/#kontrast-minimum).']

### Evaluation
Inspekcja

### Checklist
- **Kontrast (minimum):** Użyj specjalistycznych narzędzi do pomiaru współczynnika kontrastu między tekstem a tłem. Wymagany współczynnik to 4.5:1 dla zwykłego tekstu i 3:1 dla dużego tekstu. Narzędzia: Dla Windows: Accessibility Insights lub Inspect.exe (część Windows SDK). Dla macOS: Accessibility Inspector w Xcode. Dla Android/iOS: Narzędzia deweloperskie w Android Studio/Xcode z wtyczkami do kontrastu. Sprawdź kontrast dla wszystkich elementów interfejsu, w tym ikon i przycisków, oraz w różnych stanach (normalny, disabled, hover, focus).
- **Test praktyczny:** Wybierz próbkę tekstu i tła w aplikacji, uruchom wybrane narzędzie, zmierz współczynnik kontrastu i porównaj z wymaganiami. Dla elementów nietekstowych (np. ikony) sprawdź, czy mają znaczenie dla użytkowników i czy spełniają analogiczne wymagania kontrastu lub mają alternatywy.
- **Kryterium sukcesu (WCAG 2.1 – 1.4.3):** Kontrast tekstu i tła spełnia minimalne wymagania; dla elementów niestandardowych stosuj analogiczne zasady lub zapewnij alternatywy.
- **Uwaga:** Sprawdź różne stany elementów (disabled, hover, focus), bo kontrast podczas stanu może różnić się od stanu normalnego.

---

## C.11.1.4.4.1 C.11.1.4.4.1 Zmiana rozmiaru tekstu (funkcjonalność otwarta)

### Procedure
['1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu [WCAG 2.1 – 1.4.4 Zmiana rozmiaru tekstu](https://www.w3.org/Translations/WCAG21-pl/#zmiana-rozmiaru-tekstu).']

### Evaluation
Inspekcja

### Checklist
- **Zmiana rozmiaru tekstu:** sprawdź, czy można powiększyć tekst do 200% bez utraty treści lub funkcjonalności; użyj opcji powiększania platformy, powiększenia w aplikacji i testów z powiększeniem przez technologie wspomagające.
- **Test praktyczny:** Powiększ interfejs do 200% i powyżej, sprawdź, czy tekst jest czytelny, przyciski oraz kontrolki pozostają dostępne i funkcjonalne, oraz czy nie występuje konieczność przewijania w dwóch wymiarach w standardowych scenariuszach.
- **Kryterium sukcesu (WCAG 2.1 – 1.4.4):** Interfejs umożliwia powiększenie tekstu do co najmniej 200% bez utraty funkcjonalności i informacji.

---

## C.11.1.4.4.2 C.11.1.4.4.2 Zmiana rozmiaru tekstu (funkcjonalność zamknięta)

### Procedure
['1. Zmierzyć wysokość wielkiej litery H.', '2. Sprawdź, czy odpowiada ona kątowi co najmniej 0,7 stopnia przy określonej odległości widzenia.']

### Evaluation
Inspekcja i pomiar

### Checklist
- **Zmiana rozmiaru tekstu (funkcjonalność zamknięta):** Zmierzyć wysokość wielkiej litery H i sprawdzić, czy odpowiada ona kątowi co najmniej 0,7 stopnia przy określonej odległości widzenia.
- **Uwaga:** Ponieważ obsługa renderowania tekstu w środowisku zamkniętym może być bardziej ograniczona niż obsługa dostępna w agentach użytkownika dla sieci Web, spełnienie niniejszej klauzuli w środowisku zamkniętym może nałożyć znacznie większy ciężar na autora treści.

---

## C.11.1.4.5.1 C.11.1.4.5.1 Obrazy tekstu (funkcjonalność otwarta)

### Procedure
['1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu [WCAG 2.1 – 1.4.5 Obrazy tekstu](https://www.w3.org/Translations/WCAG21-pl/#obrazy-tekstu).']

### Evaluation
Inspekcja

### Checklist
- **Obrazy tekstu (funkcjonalność otwarta):** sprawdź, czy elementy zawierające tekst używają rzeczywistego tekstu, a nie obrazu tekstu; jeśli użyto obrazu tekstu, sprawdź, czy istnieje równoważna alternatywa tekstowa lub, w przypadku potrzeby, możliwość jego zamiany na tekst.
- **Test praktyczny:** Użyj inspektora interfejsu i narzędzi programowych, aby zidentyfikować miejsca, gdzie tekst jest renderowany jako obraz (np. raster), a następnie potwierdź, że zapewniono alternatywę (tekst w treści lub opis). Sprawdź kontrolki, nagłówki, i fragmenty tekstu krytyczne dla zrozumienia, czy są dostępne w formie tekstowej.
- **Kryterium sukcesu (WCAG 2.1 – 1.4.5):** Tekst funkcjonalny nie jest przedstawiony jako obraz tekstu, chyba że jest to konieczne (logotypy, ozdobne czcionki); jeżeli użyto obrazu tekstu, zapewniono jego alternatywny odpowiednik.
- **Uwaga:** Logo i dekoracyjne grafiki z tekstem są wyjątkiem; w przypadku zamkniętych środowisk sprawdź, czy wyjście mowy dostarcza równoważny opis tekstu, jeśli obraz tekstu zawiera informacje istotne dla użytkownika.

---

## C.11.1.4.5.2 C.11.1.4.5.2 Obrazy tekstu (funkcjonalność zamknięta)

### Procedure
['1. Sprawdź, czy wyjście mowy jest zapewniane jako alternatywa dla treści nietekstowej.', '2. Sprawdź, czy treść nietekstowa jest rzeczywiście istotna i\xa0potrzebna.', '3. Sprawdź, czy treść nietekstowa nie jest wyłącznie używana do formatowania wizualnego.', '4. Sprawdź, czy wyjście mowy jest zgodne z\xa0wytycznymi dotyczącymi "tekstu alternatywnego" opisanego w\xa0kryterium sukcesu WCAG 2.1 dla wytycznej [WCAG 2.1 – 1.1.1 Treść nietekstowa](https://www.w3.org/Translations/WCAG21-pl/#tres-nietekstowa).']

### Evaluation
Test

### Checklist
- **Obrazy tekstu (funkcjonalność zamknięta):** sprawdź, czy w miejscach, gdzie zastosowano obrazy z tekstem, istnieje równoważna alternatywa dostarczana użytkownikom niewizualnym (np. wyjście mowy lub tekstowa transkrypcja).
- **Test praktyczny:** Identyfikuj obrazy zawierające tekst oraz potwierdź przy użyciu dostępnych funkcji platformy lub narzędzi inspektora, że brakujące treści są dostępne poprzez wyjście mowy lub tekst alternatywny; dla zamkniętej funkcjonalności sprawdź, czy wyjście mowy przekazuje tekst z obrazu.
- **Kryterium sukcesu (WCAG 2.1 – 1.4.5):** Obrazy tekstu nie zastępują tekstu funkcjonalnego bez zapewnienia jego alternatywy; w aplikacjach zamkniętych wyjście mowy jest równoważne tekstowi w obrazie.
- **Uwaga:** Wyjątki dotyczą logotypów i elementów dekoracyjnych; w sytuacjach, gdzie obraz tekstu jest jedyną opcją, upewnij się, że istnieje alternatywa dostępna programowo.

---

## C.11.1.4.10 C.11.1.4.10 Dopasowanie do ekranu

### Procedure
['1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu zawarte w\xa0Tabeli 11.2.']

### Evaluation
Inspekcja

### Checklist
- **Dopasowanie do ekranu (reflow):** Sprawdź, czy treść może być prezentowana bez utraty informacji lub funkcjonalności oraz bez konieczności przewijania w dwóch wymiarach dla: treści przewijanej pionowo przy szerokości równoważnej 320 pikselom CSS; treści przewijanej poziomo przy wysokości równoważnej 256 pikselom CSS; z wyjątkiem części treści, które wymagają układu dwuwymiarowego ze względu na użycie lub znaczenie.
- **Test praktyczny:** Przetestuj interfejs w różnych rozmiarach okna i przy różnych poziomach powiększenia (np. 200% i 400%); zweryfikuj, czy elementy i funkcje interfejsu pozostają dostępne oraz czy nie występuje poziome i pionowe przewijanie wymuszające utratę funkcjonalności.
- **Kryterium sukcesu (Tabela 11.2):** Treść i funkcjonalność są dostępne i nie wymagają dwuwymiarowego przewijania podczas standardowych scenariuszy dostępu.
- **Uwaga 1:** 320 pikseli CSS jest równoważne początkowej szerokości viewportu 1280 pikseli CSS przy powiększeniu 400%. Dla oprogramowania nieinternetowego zaprojektowanego do przewijania poziomego (np. z tekstem pionowym), 256 pikseli CSS jest równoważne początkowej wysokości viewportu 1024 px przy powiększeniu 400%.
- **Uwaga 2:** Przykłady treści wymagających układu dwuwymiarowego to obrazy, mapy, diagramy, wideo, gry, prezentacje, tabele danych oraz interfejsy, gdzie konieczne jest utrzymanie pasków narzędzi w widoku podczas manipulacji treścią.

---

## C.11.1.4.11 C.11.1.4.11 Kontrast elementów nietekstowych

### Procedure
['1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu [WCAG 2.1 – 1.4.11 Kontrast elementów nietekstowych](https://www.w3.org/Translations/WCAG21-pl/#kontrast-elementow-nietekstowych).']

### Evaluation
Inspekcja

### Checklist
- **Kontrast elementów nietekstowych:** sprawdź kontrast pomiędzy elementami interfejsu użytkownika (ramki, ikony, obramowania, separatory) i tłem oraz ich kontrast między sobą; użyj narzędzi do mierzenia kontrastu (np. Color Contrast Analyser) i sprawdź stany focus/hover/disabled.
- **Test praktyczny:** Zmierz kontrast kolorów elementów funkcjonalnych, takich jak ikony i obramowania, oraz kontrast pomiędzy elementami istotnymi a ich tłem; sprawdź w różnych motywach (jasny/ciemny) i stanach elementów.
- **Kryterium sukcesu (WCAG 2.1 – 1.4.11):** Elementy nietekstowe i ich części mają wystarczający kontrast (min. 3:1) w stosunku do tła lub w odniesieniu do funkcji elementu interfejsu użytkownika.
- **Uwaga:** Dla elementów niewizualnych lub dekoracyjnych, jeśli nie mają znaczenia funkcjonalnego, stosowanie tej zasady nie jest wymagane.

---

## C.11.1.4.12 C.11.1.4.12 Odstępy w tekście

### Procedure
['1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu [WCAG 2.1 – 1.4.12 Odstępy w\xa0tekście](https://www.w3.org/Translations/WCAG21-pl/#odstepy-w-tekscie).']

### Evaluation
Inspekcja

### Checklist
- **Odstępy w tekście:** sprawdź odstępy pomiędzy znakami, wyrazami i akapitami oraz wysokość linii; upewnij się, że użytkownik może czytać treści nawet po zwiększeniu odstępów ustawionych przez użytkownika lub system.
- **Test praktyczny:** Zwiększ spacje między liniami (line-height), pojedynczymi znakami i wyrazami (np. 1.5–2x) oraz między akapitami i potwierdź, że tekst pozostaje czytelny, nie nakłada się na siebie i zachowuje strukturę logiczną.
- **Kryterium sukcesu (WCAG 2.1 – 1.4.12):** Tekst poprawnie reaguje na zmiany odstępów i nie traci znaczenia lub struktury przy zwiększonych odstępach zgodnych z wymaganiami (line-height, letter-spacing, word-spacing).
- **Uwaga:** Sprawdź różne elementy dokumentu (nagłówki, listy, tabele) oraz wpływ na skomplikowane układy (np. przyciski w liniach).

---

## C.11.1.4.13 C.11.1.4.13 Treść spod kursora lub fokusu

### Procedure
['1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu [WCAG 2.1 – 1.4.13 Treść spod kursora lub fokusu](https://www.w3.org/Translations/WCAG21-pl/#tresc-spod-kursora-lub-fokusu).']

### Evaluation
Inspekcja

### Checklist
- **Treść spod kursora lub fokusu:** sprawdź, czy zawartość pojawiająca się w wyniku najechania kursorem lub uzyskania fokusu jest dostępna także dla użytkowników klawiaturowych oraz czy nie blokuje możliwości interakcji z innymi elementami interfejsu.
- **Test praktyczny:** Użyj klawiatury i kursora, aby wyzwolić tekst odsłaniany na hover/focus; sprawdź, czy jest możliwy do odczytania przez technologię wspomagającą i czy można zamknąć/opuścić treść bez utraty kontekstu.
- **Kryterium sukcesu (WCAG 2.1 – 1.4.13):** Informacje wyłącznie pojawiające się na hover/focus są dostępne i nie blokują dostępu do innych funkcji; są też dostępne z użyciem klawiatury i narzędzi wspomagających.
- **Uwaga:** Zweryfikuj także dostępność tych treści w usługach asystujących (np. screen reader), sprawdź synchronizację i wywołania dynamiczne.

---

## C.11.2.1.1.1 C.11.2.1.1.1 Klawiatura (funkcjonalność otwarta)

### Procedure
['1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu [WCAG 2.1 – 2.1.1 Klawiatura](https://www.w3.org/Translations/WCAG21-pl/#klawiatura).']

### Evaluation
Inspekcja

### Checklist
- **Klawiatura:** sprawdź, czy wszystkie elementy interfejsu i funkcje można obsłużyć przy pomocy samej klawiatury (Tab, Shift+Tab, strzałki, klawisze skrótów).
- **Test praktyczny:** Prowadź kompletne scenariusze użytkownika tylko przy użyciu klawiatury: nawiguj, wypełnij formularz, obsłuż elementy dynamiczne, modalne okna i widgety; upewnij się, że wszystkie funkcje są dostępne i aktywne.
- **Kryterium sukcesu (WCAG 2.1 – 2.1.1):** Wszystkie funkcje są możliwe do wykonania przy pomocy klawiatury, bez konieczności używania myszy lub wskaźników.
- **Uwaga:** Weź pod uwagę niestandardowe skróty i skróty systemowe; sprawdź też konflikty między skrótami a technologiami pomocniczymi.

---

## C.11.2.1.1.2 C.11.2.1.1.2 Klawiatura (funkcjonalność zamknięta)

### Procedure
['1. Sprawdź, czy wszystkie funkcjonalności interfejsu użytkownika można obsługiwać bez użycia wzroku.']

### Evaluation
Inspekcja

### Checklist
- **Klawiatura (funkcjonalność zamknięta):** sprawdź, czy funkcje, które są zamknięte dla technologii wspomagających lub platformy, mają alternatywne metody dostępu (np. wyjście mowy, dedykowane przyciski lub komendy), oraz czy oprogramowanie udostępnia odpowiednią dokumentację i możliwości konfiguracji.
- **Test praktyczny:** Sprawdź funkcje zamknięte z użyciem metod dostępnych na platformie (np. wyjście mowy, przyciski sprzętowe); upewnij się, że użytkownik może wykonywać istotne operacje poprzez alternatywne metody, oraz że funkcje są poprawnie opisane w dokumentacji.
- **Uwaga:** Zwróć uwagę, że w zamkniętych systemach może być potrzebna współpraca z dostawcą platformy w celu oceny dostępności.

---

## C.11.2.1.2 C.11.2.1.2 Bez pułapki na klawiaturę

### Procedure
['1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu zawarte w\xa0Tabeli 11.3.']

### Evaluation
Inspekcja

### Checklist
- **Bez pułapki na klawiaturę:** Sprawdź, czy jeśli fokus klawiatury może wejść na komponent oprogramowania przy użyciu interfejsu klawiatury, wówczas fokus można przesunąć z tego komponentu przy użyciu tylko interfejsu klawiatury, oraz jeśli wymaga to więcej niż niezmodyfikowane klawisze strzałek lub tab lub inne standardowe metody wyjścia, użytkownik jest informowany o metodzie przesunięcia fokusa.
- **Test praktyczny:** Przetestuj formularze, modalne okna dialogowe, niestandardowe kontrolki (np. panele, elementy drag-and-drop) oraz zewnętrzne biblioteki UI; zweryfikuj instrukcje, które informują użytkownika, jak opuścić komponent, jeżeli to nie jest naturalne; upewnij się, że istnieje sposoby alternatywne jeśli domyślne nie działają.
- **Kryterium sukcesu (Tabela 11.3):** Jeżeli fokus klawiatury może wejść na komponent oprogramowania przy użyciu interfejsu klawiatury, wówczas fokus można przesunąć z tego komponentu przy użyciu tylko interfejsu klawiatury, oraz jeśli wymaga to więcej niż niezmodyfikowane klawisze strzałek lub tab lub inne standardowe metody wyjścia, użytkownik jest informowany o metodzie przesunięcia fokusa.
- **Uwaga 1:** Ponieważ każda część oprogramowania, która nie spełnia tego kryterium sukcesu, może zakłócić zdolność użytkownika do korzystania z całego oprogramowania, konieczne jest, aby cała treść w oprogramowaniu (niezależnie od tego, czy jest używana do spełniania innych kryteriów sukcesu) spełniała to kryterium sukcesu.
- **Uwaga 2:** Standardowe metody wyjścia mogą się różnić w zależności od platformy. Na przykład, na wielu platformach desktopowych klawisz Escape jest standardową metodą wyjścia.

---

## C.11.2.1.4.1 C.11.2.1.4.1 Jednoznakowe skróty klawiaturowe (funkcjonalność otwarta)

### Procedure
['1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu [WCAG 2.1 – 2.1.4](https://www.w3.org/Translations/WCAG21-pl/#character-key-shortcuts) Jednoznakowe skróty klawiszowe.']

### Evaluation
Inspekcja

### Checklist
- **Jednoznakowe skróty (funkcjonalność otwarta):** sprawdź dokumentację skrótów oraz przetestuj skróty przy użyciu klawiatury; sprawdź, czy skróty składające się z jednego klawisza można wyłączyć lub zmienić, oraz czy użytkownik jest informowany o ich istnieniu i sposobie wyłączenia.
- **Test praktyczny:** Wypróbuj istniejące skróty przy pomocy klawiatury i aplikacji pomocniczych; zmień/włącz/wyłącz skrót (jeżeli to możliwe) i sprawdź, czy funkcje pozostają dostępne; upewnij się, że skróty nie kolidują z systemowymi i diagnostycznymi skrótami technologicznymi.
- **Kryterium sukcesu (WCAG 2.1 – 2.1.4):** Jednoznakowe skróty można wyłączyć lub zmienić, albo są one absolutnie konieczne i opisane w dokumentacji.
- **Uwaga:** Na platformach wbudowanych skróty zależne od systemu operacyjnego mogą wymagać specjalnych rozwiązań; zwróć uwagę na zgodność z technologiami wspomagającymi.

---

## C.11.2.1.4.2 C.11.2.1.4.2 Jednoznakowe skróty klawiaturowe (funkcjonalność zamknięta)

### Procedure
['1. Sprawdź, czy wszystkie funkcjonalności można obsługiwać bez użycia wzroku.']

### Evaluation
Inspekcja

### Checklist
- **Jednoznakowe skróty (funkcjonalność zamknięta):** sprawdź, czy w środowisku zamkniętym dla technologii wspomagających, jednoznakowe skróty mają alternatywne metody dostępu lub są opisane w dokumentacji, aby uniknąć przypadkowych aktywacji.
- **Test praktyczny:** W środowisku zamkniętym, przetestuj skróty przy użyciu dostępnych metod (np. mowa, przyciski sprzętowe); upewnij się, że skróty nie powodują niezamierzonych działań i są dostępne poprzez alternatywy.
- **Uwaga:** W zamkniętych systemach, współpraca z dostawcą platformy może być konieczna dla zapewnienia dostępności skrótów.

---

## C.11.2.2.1 C.11.2.2.1 Dostosowanie czasu

### Procedure
['1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu zawarte w\xa0Tabeli 11.4.']

### Evaluation
Inspekcja

### Checklist
- **Limity czasowe:** sprawdź wszystkie miejsce w oprogramowaniu gdzie narzucone są limity czasowe (np. sesje, formularze, edycja); upewnij się, że użytkownik może wyłączyć limit, dostosować czas (co najmniej 10x dłuższy) lub przedłużyć po ostrzeżeniu (min. 20 s).
- **Test praktyczny:** Potwierdź, że dla każdego limitu czasowego użytkownik ma kontrolę: wyłącz limit, dostosuj czas lub przedłuż po ostrzeżeniu; sprawdź wyjątki dla zdarzeń czasu rzeczywistego lub działań istotnych.
- **Kryterium sukcesu (Tabela 11.4):** Dla każdego limitu czasowego użytkownik może wyłączyć go, dostosować (co najmniej 10x) lub przedłużyć po ostrzeżeniu (min. 20 s), chyba że jest to niepraktyczne (np. realtime).
- **Uwaga:** Zwróć uwagę na wyjątki: zdarzenia czasu rzeczywistego (np. aukcje), gdzie limit jest niezbędny; działania istotne, gdzie przedłużenie unieważnia aktywność; lub limity dłuższe niż 20 godzin. Dokumentuj sytuacje, gdzie limity są wprowadzone przez zewnętrzne polityki.

---

## C.11.2.2.2 C.11.2.2.2 Pauza, zatrzymanie, ukrycie

### Procedure
['1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu zawarte w\xa0Tabeli 11.5.']

### Evaluation
Inspekcja

### Checklist
- **Pauza, zatrzymanie, ukrycie:** sprawdź, czy poruszające się, migające, przewijające lub automatycznie aktualizowane treści da się wstrzymać, zatrzymać lub ukryć; dla treści automatycznie aktualizowanych sprawdź mechanizm kontroli częstotliwości.
- **Test praktyczny:** Sprawdź elementy animowane, przewijające treści oraz automatyczne aktualizacje; potwierdź, że istnieje funkcja pauzy/stop/ukrywania lub ustawienia częstotliwości; dokumentuj wyjątki, gdzie ruch jest niezbędny (np. ładowanie).
- **Kryterium sukcesu (Tabela 11.5):** Dla ruchomych/migających/przewijanych elementów (trwających >5s, równolegle z inną treścią) oraz automatycznie aktualizowanych treści istnieje mechanizm zatrzymania/ukrycia lub kontroli częstotliwości, chyba że ruch/aktualizacja jest niezbędna.
- **Uwaga 1:** Dotyczy całej treści w oprogramowaniu (informacyjnej lub dekoracyjnej), która się porusza, miga, przewija lub aktualizuje automatycznie – każdy element niespełniający może zakłócić użytkowanie całego oprogramowania.
- **Uwaga 2:** Wyjątki dla treści niezbędnych (np. animacje ładowania, gdzie interakcja nie jest możliwa i wskazanie postępu jest ważne).
- **Uwaga 3:** Dla migotania/odblasków patrz [WCAG 2.1 – 2.3.1 Trzy błyski lub wartości poniżej progu](https://www.w3.org/Translations/WCAG21-pl/#trzy-b-yski-lub-wartosci-ponizej-progu).
- **Uwaga 4:** Treści strumieniowane lub okresowo aktualizowane nie muszą zachowywać danych między pauzą a wznowieniem.
- **Uwaga 5:** Dotyczy wszystkich treści, nawet dekoracyjnych, jeśli się aktualizują, migają lub poruszają.

---

## C.11.2.3.1 C.11.2.3.1 Trzy błyski lub wartości poniżej progu

### Procedure
['1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu zawarte w\xa0Tabeli 11.6.']

### Evaluation
Inspekcja

### Checklist
- **Błyski:** sprawdź całą aplikację pod kątem elementów migających/zmieniających jasność; użyj testów obrazu lub narzędzi mierzących częstotliwość błysku.
- **Kryterium sukcesu (Tabela 11.6):** Oprogramowanie nie powinno zawierać treści, które błyskają więcej niż trzy razy w ciągu jednego sekundy lub przekraczają progi ostrzegawcze migotania.
- **Uwaga:** Kryterium dotyczy całego oprogramowania (fragmenty migające mogą wpływać na użyteczność). Zobacz także [WCAG 2.1 – 2.3.1 Trzy błyski lub wartości poniżej progu](https://www.w3.org/Translations/WCAG21-pl/#trzy-b-yski-lub-wartosci-ponizej-progu).

---

## C.11.2.4.3 C.11.2.4.3 Kolejność fokusu

### Procedure
['1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu zawarte w\xa0Tabeli 11.7.']

### Evaluation
Inspekcja

### Checklist
- **Kolejność fokusu:** użyj nawigacji klawiaturowej (Tab/Shift+Tab) i sprawdź, czy kolejność fokusu jest logiczna i zachowuje znaczenie oraz pełną funkcjonalność interfejsu; potwierdź, że programowa kolejność odpowiada wizualnej kolejności, jeśli ma znaczenie.
- **Kryterium sukcesu (Tabela 11.7):** Jeśli oprogramowanie obsługuje sekwencyjną nawigację i ta kolejność ma wpływ na znaczenie lub działanie, kolejność fokusu powinna zachowywać znaczenie i funkcjonalność.

---

## C.11.2.4.4 C.11.2.4.4 Cel łącza (w kontekście)

### Procedure
['1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu [WCAG 2.1 – 2.4.4 Cel łącza (w kontekście)](https://www.w3.org/Translations/WCAG21-pl/#cel-acza-w-kontekscie).']

### Evaluation
Inspekcja

### Checklist
- **Cel łącza (w kontekście):** sprawdź, czy cel łącza (np. przycisku, linku) jest zrozumiały z samego tekstu łącza lub z kontekstu programowego (aria-label, title) oraz kontekstu wizualnego.
- **Test praktyczny:** Przejrzyj łącza bez kontekstu (np. lista linków); upewnij się, że tekst łącza sam w sobie lub z kontekstem wyjaśnia cel; sprawdź z technologią wspomagającą.
- **Kryterium sukcesu (WCAG 2.1 – 2.4.4):** Cel łącza jest zrozumiały z tekstu łącza lub kontekstu (programowego lub wizualnego).
- **Uwaga:** Jeśli łącze jest niejednoznaczne samo w sobie, kontekst musi wyjaśniać cel.

---

## C.11.2.4.6 C.11.2.4.6 Nagłówki i etykiety

### Procedure
['1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu [WCAG 2.1 – 2.4.6 Nagłówki i\xa0etykiety.](https://www.w3.org/Translations/WCAG21-pl/#nag-owki-i-etykiety)']

### Evaluation
Inspekcja

### Checklist
- **Nagłówki i etykiety:** sprawdź, czy nagłówki opisują temat sekcji, a etykiety pól formularzy są opisowe i jednoznaczne; upewnij się, że etykiety są programowo powiązane z kontrolkami.
- **Test praktyczny:** Przejrzyj nagłówki i etykiety z technologią wspomagającą; sprawdź, czy opisują odpowiednio sekcje/formularze; potwierdź powiązania programowe.
- **Kryterium sukcesu (WCAG 2.1 – 2.4.6):** Nagłówki i etykiety opisują temat lub cel.

---

## C.11.2.4.7 C.11.2.4.7 Widoczny fokus

### Procedure
['1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu [WCAG 2.1 – 2.4.7 Widoczny fokus.](https://www.w3.org/Translations/WCAG21-pl/#widoczny-fokus)']

### Evaluation
Inspekcja

### Checklist
- **Wskaźnik fokusu:** Przejdź po elementach interaktywnych używając klawiatury (Tab/Shift+Tab, strzałki) i sprawdź, czy aktywny element ma wyraźny wskaźnik fokusu; sprawdź wszystkie stany (focus, hover, active) oraz różne motywy (jasny/ciemny) i skalowanie interfejsu użytkownika.
- **Test praktyczny:** Użyj klawiatury do nawigacji po interfejsie i potwierdź, że wskaźnik fokusu jest zawsze widoczny dla każdego elementu interaktywnego; sprawdź, czy style CSS nie ukrywają fokusu (np. outline: none), oraz czy wskaźnik ma wystarczający kontrast i rozmiar.
- **Kryterium sukcesu (WCAG 2.1 – 2.4.7):** Elementy interaktywne mają widoczny, łatwo wykrywalny wskaźnik fokusu podczas nawigacji klawiaturą.
- **Uwaga:** W przypadku platform, które nadpisują domyślny fokus, upewnij się, że dostawca platformy zapewnia zamienny mechanizm widocznego fokusu; testuj także przy zwiększonym skalowaniu ekranu.

---

## C.11.2.5.1 C.11.2.5.1 Gesty dotykowe

### Procedure
['1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu zawarte w\xa0Tabeli 11.8.']

### Evaluation
Inspekcja

### Checklist
- **Gesty dotykowe:** sprawdź, czy wszystkie funkcje wykonywane gestami wielopunktowymi lub ścieżkowymi mają alternatywy ulepszające lub są dostępne przy użyciu jednego wskaźnika bez ścieżkowego gestu, chyba że gest jest niezbędny.
- **Kryterium sukcesu (Tabela 11.8):** Funkcje wykorzystujące gesty wielopunktowe i ścieżkowe muszą mieć możliwość ich uruchamiania także przy użyciu pojedynczego wskaźnika, chyba że gest jest zasadniczym elementem funkcjonalności.
- **Uwaga 1:** To wymaganie dotyczy oprogramowania nieinternetowego, które interpretuje działania wskaźnika (tj. nie dotyczy działań wymaganych do obsługi agenta użytkownika lub technologii wspomagającej).

---

## C.11.2.5.2 C.11.2.5.2 Rezygnacja ze wskazania

### Procedure
['1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu zawarte w\xa0Tabeli 11.9.']

### Evaluation
Inspekcja

### Checklist
- **Rezygnacja ze wskazania:** sprawdź, czy funkcje uruchamiane przez naciśnięcie wskaźnika można anulować lub cofnąć przed zwolnieniem, oraz czy przypadkowe aktywacje są minimalizowane.
- **Test praktyczny:** Testuj przyciski i kontrolki wskaźnikiem; sprawdź, czy można anulować akcję przed zwolnieniem (np. przeciągnięcie poza element); potwierdź, że nie ma niezamierzonych aktywacji.
- **Kryterium sukcesu (Tabela 11.9):** Funkcje wskaźnika można anulować lub cofnąć, chyba że anulowanie jest niemożliwe (np. zakończenie przeciągania).
- **Dla funkcjonalności obsługiwanej pojedynczym wskaźnikiem, przynajmniej jedno z poniższych jest prawdziwe:**
- Brak zdarzenia naciśnięcia: Zdarzenie naciśnięcia wskaźnika nie jest używane do wykonania żadnej części funkcji.
- Przerwanie lub cofnięcie: Ukończenie funkcji następuje przy zdarzeniu zwolnienia, oraz dostępny jest mechanizm do przerwania funkcji przed ukończeniem lub cofnięcia funkcji po ukończeniu.
- Odwrócenie zwolnienia: Zdarzenie zwolnienia odwraca każdy wynik poprzedzającego zdarzenia naciśnięcia.
- Istotne: Ukończenie funkcji przy zdarzeniu naciśnięcia jest istotne.
- **Uwaga 1:** Funkcje, które emulują naciśnięcie klawisza klawiatury lub klawiatury numerycznej, są uważane za istotne.
- **Uwaga 2:** To wymaganie dotyczy oprogramowania nieinternetowego, które interpretuje działania wskaźnika (tj. nie dotyczy działań wymaganych do obsługi agenta użytkownika lub technologii wspomagającej).

---

## C.11.2.5.3.1 C.11.2.5.3.1 Etykieta w nazwie (funkcjonalność otwarta)

### Procedure
['1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu [WCAG 2.1 – 2.5.3 Etykieta w\xa0nazwie.](https://www.w3.org/Translations/WCAG21-pl/#etykieta-w-nazwie)']

### Evaluation
Inspekcja

### Checklist
- **Etykieta w nazwie:** sprawdź, czy widoczny tekst etykiety jest zawarty na początku dostępnej nazwy kontrolki; upewnij się, że dodatkowe informacje (np. ikony) nie zmieniają znaczenia.
- **Test praktyczny:** Użyj inspektora dostępności, aby sprawdzić dostępną nazwę vs. widoczny tekst; potwierdź, że etykieta jest na początku nazwy; testuj z technologią wspomagającą.
- **Kryterium sukcesu (WCAG 2.1 – 2.5.3):** Widoczny tekst etykiety jest zawarty na początku dostępnej nazwy kontrolki.

---

## C.11.2.5.4 C.11.2.5.4 Aktywowanie ruchem

### Procedure
['1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu [WCAG 2.1 – 2.5.4 Aktywowanie ruchem.](https://www.w3.org/Translations/WCAG21-pl/#aktywowanie-ruchem)']

### Evaluation
Inspekcja

### Checklist
- **Aktywowanie ruchem:** sprawdź, czy funkcje uruchamiane ruchem urządzenia mają alternatywne metody aktywacji; upewnij się, że ruch można wyłączyć lub zmienić w ustawieniach.
- **Test praktyczny:** Testuj na urządzeniu mobilnym; wykonaj ruch (np. przechylenie); sprawdź alternatywy i kontrolę użytkownika; potwierdź brak niezamierzonych aktywacji.
- **Kryterium sukcesu (WCAG 2.1 – 2.5.4):** Funkcje wykorzystujące aktywację ruchem mają alternatywną metodę lub możliwość wyłączenia.

---

## C.11.3.1.1.1 C.11.3.1.1.1 Język oprogramowania (funkcjonalność otwarta)

### Procedure
['1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu zawarte w\xa0Tabeli 11.10.']

### Evaluation
Inspekcja

### Checklist
- **Język oprogramowania:** sprawdź, czy język interfejsu użytkownika jest poprawnie określony programowo (np. język systemu lub ustawienia aplikacji); upewnij się, że tekst jest w języku użytkownika.
- **Test praktyczny:** Sprawdź ustawienia języka w aplikacji i systemie; użyj technologii wspomagającej, aby potwierdzić język; przetestuj z różnymi językami.
- **Kryterium sukcesu (Tabela 11.10):** Domyślny język ludzki oprogramowania można określić programowo.
- **Uwaga 1:** W przypadku gdy platformy oprogramowania zapewniają ustawienie "locale / language", aplikacje, które używają tego ustawienia i renderują swój interfejs w tym "locale / language", spełniałyby to kryterium sukcesu. Aplikacje, które nie używają ustawienia "locale / language" platformy, ale zamiast tego używają metody wspomaganej dostępnością do ujawniania ludzkiego języka oprogramowania, również spełniałyby to kryterium sukcesu. Aplikacje zaimplementowane w technologiach, gdzie technologie wspomagające nie mogą określić ludzkiego języka i które nie obsługują ustawienia "locale / language" platformy, mogą nie być w stanie spełnić tego kryterium sukcesu w tym locale / language.

---

## C.11.3.1.1.2 C.11.3.1.1.2 Język oprogramowania (funkcjonalność zamknięta)

### Procedure
['1. Sprawdź, czy wyjście mowy występuje w\xa0tym samym języku co dostarczona wyświetlana treść.']

### Evaluation
Test

### Checklist
- **Język oprogramowania:** Sprawdź, czy wyjście mowy występuje w tym samym języku co wyświetlana treść; sprawdź także, czy wybór języka mowy jest wykonywalny z poziomu interfejsu niewizualnego (jeżeli dotyczy).

---

## C.11.3.2.1 C.11.3.2.1 Po otrzymaniu fokusu

### Procedure
['1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu [WCAG 2.1 – 3.2.1 Po otrzymaniu fokusu.](https://www.w3.org/Translations/WCAG21-pl/#po-otrzymaniu-fokusu)']

### Evaluation
Inspekcja

### Checklist
- **Po otrzymaniu fokusu:** sprawdź, czy po otrzymaniu fokusu przez komponent interfejsu użytkownika (np. przycisk, pole tekstowe) nie następuje automatyczna zmiana kontekstu, taka jak otwarcie nowego okna, zmiana fokusu na inny element, znaczna zmiana treści lub nawigacja do innej strony.
- **Test praktyczny:** Przejdź przez wszystkie interaktywne elementy aplikacji używając klawiatury (Tab); sprawdź, czy fokus nie powoduje nieoczekiwanych zmian; przetestuj z różnymi urządzeniami wejściowymi.
- **Kryterium sukcesu (WCAG 2.1 – 3.2.1):** Po otrzymaniu fokusu przez dowolny komponent interfejsu użytkownika nie następuje zmiana kontekstu.
- **Uwaga:**
- Niektóre złożone dokumenty i programy do ich obsługi są zaprojektowane tak, aby oferować różne funkcje przeglądania i edycji w zależności od części dokumentu, z którą użytkownik wchodzi w interakcję.
- Przykład: prezentacja zawierająca wbudowany arkusz kalkulacyjny, gdzie menu i paski narzędzi programu zmieniają się w zależności od tego, czy użytkownik pracuje z treścią prezentacji, czy z arkuszem.
- Jeśli użytkownik używa sposobu innego niż ustawienie fokusu na tej części dokumentu (np. przez wybór z menu lub specjalny gest klawiaturowy), to zmiana kontekstu nie podlega temu kryterium sukcesu, ponieważ nie została wywołana przez zmianę fokusu.

---

## C.11.3.2.2 C.11.3.2.2 Podczas wprowadzania danych

### Procedure
['1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu [WCAG 2.1 – 3.2.2 Podczas wprowadzania danych.](https://www.w3.org/Translations/WCAG21-pl/#podczas-wprowadzania-danych)']

### Evaluation
Inspekcja

### Checklist
- **Podczas wprowadzania danych:** sprawdź, czy zmiana ustawienia komponentu interfejsu użytkownika (np. wybór z listy, wprowadzenie tekstu) nie powoduje automatycznej zmiany kontekstu, takiej jak otwarcie nowego okna lub nawigacja, chyba że użytkownik został wcześniej poinformowany o tym zachowaniu.
- **Test praktyczny:** Wprowadź dane w formularzach i kontrolkach; sprawdź, czy nie następuje nieoczekiwana zmiana kontekstu; upewnij się, że wszelkie ostrzeżenia są obecne przed akcją.
- **Kryterium sukcesu (WCAG 2.1 – 3.2.2):** Zmiana ustawienia dowolnego komponentu interfejsu użytkownika nie powoduje automatycznie zmiany kontekstu, chyba że użytkownik został wcześniej poinformowany o tym zachowaniu przed użyciem komponentu.

---

## C.11.3.3.1.1 C.11.3.3.1.1 Identyfikacja błędu (funkcjonalność otwarta)

### Procedure
['1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu [WCAG 2.1 – 3.3.1 Identyfikacja błędu.](https://www.w3.org/Translations/WCAG21-pl/#identyfikacja-b-edu)']

### Evaluation
Inspekcja

### Checklist
- **Identyfikacja błędu:** sprawdź, czy w przypadku automatycznego wykrycia błędu wprowadzania (np. nieprawidłowy format daty, wymagane pole puste) błąd jest jasno zidentyfikowany, a użytkownik otrzymuje tekstowy opis błędu.
- **Test praktyczny:** Wprowadź błędne dane w formularzach; sprawdź, czy błędy są wykrywane i opisane tekstowo; upewnij się, że identyfikacja błędu jest dostępna dla technologii wspomagających.
- **Kryterium sukcesu (WCAG 2.1 – 3.3.1):** Jeśli błąd wprowadzania zostanie automatycznie wykryty, element, który zawiera błąd, zostaje zidentyfikowany, a błąd zostaje opisany użytkownikowi w tekście.

---

## C.11.3.3.1.2 C.11.3.3.1.2 Identyfikacja błędu (funkcjonalność zamknięta)

### Procedure
['1. Sprawdź, czy wyjście mowy wykrywa, że element jest błędny.', '2. Sprawdź, czy wyjście mowy opisuje element, który jest błędny.']

### Evaluation
Test

### Checklist
- **Identyfikacja błędu (funkcjonalność zamknięta):** sprawdź, czy w środowisku zamkniętym wyjście mowy wykrywa błędy wprowadzania i opisuje błędne elementy; upewnij się, że komunikaty są zrozumiałe i dostępne poprzez niewizualne metody.
- **Test praktyczny:** Wprowadź błędne dane w zamkniętym interfejsie; sprawdź wyjście mowy pod kątem wykrywania błędów i opisu błędnych elementów; potwierdź zgodność z warunkami wstępnymi.
- **Uwaga:** Dotyczy tylko środowisk zamkniętych z wyjściem mowy; błędy muszą być wykrywane automatycznie.

---

## C.11.3.3.2 C.11.3.3.2 Etykiety lub instrukcje

### Procedure
['1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu [WCAG 2.1 – 3.3.2 Etykiety lub instrukcje.](https://www.w3.org/Translations/WCAG21-pl/#etykiety-lub-instrukcje)']

### Evaluation
Inspekcja

### Checklist
- **Etykiety lub instrukcje:** sprawdź, czy wszystkie pola wprowadzania danych mają etykiety opisujące ich cel; upewnij się, że instrukcje są dostępne dla wymaganych formatów wprowadzania.
- **Test praktyczny:** Przejrzyj wszystkie formularze i pola wprowadzania; sprawdź dostępność etykiet poprzez technologie wspomagające; potwierdź, że instrukcje są jasne i dostępne.
- **Kryterium sukcesu (WCAG 2.1 – 3.3.2):** Etykiety lub instrukcje są podawane, gdy treść wymaga wprowadzania danych od użytkownika.

---

## C.11.3.3.3 C.11.3.3.3 Sugestie korekty błędów

### Procedure
['1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu [WCAG 2.1 – 3.3.3 Sugestie korekty błędów.](https://www.w3.org/Translations/WCAG21-pl/#sugestie-korekty-b-edow)']

### Evaluation
Inspekcja

### Checklist
- **Sugestie korekty błędów:** sprawdź, czy po wykryciu błędu wprowadzania użytkownik otrzymuje sugestie korekty; upewnij się, że sugestie nie zagrażają bezpieczeństwu ani celowi treści.
- **Test praktyczny:** Wprowadź błędne dane w formularzach; sprawdź, czy pojawiają się sugestie korekty; potwierdź dostępność sugestii poprzez technologie wspomagające.
- **Kryterium sukcesu (WCAG 2.1 – 3.3.3):** Jeśli błąd wprowadzania zostanie automatycznie wykryty i znane są sugestie korekty, wówczas sugestie te są użytkownikowi dostarczane, chyba że zagrażałoby to bezpieczeństwu lub celowi treści.

---

## C.11.3.3.4 C.11.3.3.4 Zapobieganie błędom (prawnym, finansowym, w danych)

### Procedure
['1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu zawarte w\xa0Tabeli 11.11.']

### Evaluation
Inspekcja

### Checklist
- **Zapobieganie błędom (prawnym, finansowym, w danych):** sprawdź, czy dla działań powodujących zobowiązania prawne, transakcje finansowe, modyfikację/dostęp danych lub przesyłanie odpowiedzi testowych, przynajmniej jedno z poniższych jest prawdziwe: wysyłki są odwracalne; dane są sprawdzane pod kątem błędów z możliwością korekty; dostępny jest mechanizm przeglądu, potwierdzenia i korekty przed finalizacją.
- **Test praktyczny:** Zidentyfikuj funkcje powodujące zobowiązania prawne lub transakcje; przetestuj mechanizmy zapobiegania błędom; sprawdź dostępność opcji cofania, sprawdzania lub potwierdzania poprzez technologie wspomagające.
- **Kryterium sukcesu (Tabela 11.11):** Dla oprogramowania powodującego zobowiązania prawne lub transakcje finansowe, modyfikację danych lub przesyłanie odpowiedzi testowych, przynajmniej jedno z następujących jest prawdziwe:
- Reversible: Wysyłki są odwracalne.
- Checked: Dane wprowadzone przez użytkownika są sprawdzane pod kątem błędów wprowadzania i użytkownik ma możliwość ich korekty.
- Confirmed: Dostępny jest mechanizm przeglądu, potwierdzenia i korekty informacji przed finalizacją wysyłki.

---

## C.11.4.1.1.1 C.11.4.1.1.1 Poprawność kodu (funkcjonalność otwarta)

### Procedure
['1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu zawarte w\xa0Tabeli 11.12.']

### Evaluation
Inspekcja

### Checklist
- **Poprawność kodu:** sprawdź, czy dla oprogramowania używającego języków znaczników, które są dostępne dla technologii wspomagających, elementy mają kompletne tagi startowe i końcowe, są zagnieżdżone zgodnie ze specyfikacjami, nie zawierają duplikatów atrybutów i ID są unikalne, chyba że specyfikacje pozwalają na te cechy.
- **Test praktyczny:** Przeanalizuj kod znaczników używany przez oprogramowanie; sprawdź kompletność tagów, zagnieżdżenie, atrybuty i ID; użyj narzędzi do walidacji kodu; potwierdź dostępność znaczników dla technologii wspomagających.
- **Kryterium sukcesu (Tabela 11.12):** Dla oprogramowania używającego języków znaczników w sposób, że znaczniki są oddzielnie ujawniane i dostępne dla technologii wspomagających oraz funkcji dostępności oprogramowania lub dla agenta użytkownika wybieralnego przez użytkownika, elementy mają kompletne tagi startowe i końcowe, elementy są zagnieżdżone zgodnie z ich specyfikacjami, elementy nie zawierają duplikatów atrybutów i wszelkie ID są unikalne, z wyjątkiem przypadków, gdy specyfikacje pozwalają na te cechy.
- **Uwaga 1:** Tagi startowe i końcowe, którym brakuje krytycznego znaku w ich formowaniu, takiego jak zamykający nawias kątowy lub niedopasowany cudzysłów wartości atrybutu, nie są kompletne.
- **Uwaga 2:** Znaczniki nie zawsze są dostępne dla technologii wspomagających lub dla agentów użytkownika wybieralnych przez użytkownika, takich jak przeglądarki. W takich przypadkach zgodność z tym wymaganiem nie miałaby wpływu na dostępność, tak jak ma dla treści internetowych, gdzie jest ujawniana.
- **Uwaga 3:** Przykłady znaczników, które są oddzielnie ujawniane i dostępne dla technologii wspomagających oraz agentów użytkownika obejmują, ale nie ograniczają się do: dokumentów zakodowanych w HTML, ODF i OOXML. W tych przykładach znaczniki mogą być parsowane całkowicie na dwa sposoby: (a) przez technologie wspomagające, które mogą bezpośrednio otworzyć dokument, (b) przez technologie wspomagające używające API DOM agentów użytkownika dla tych formatów dokumentów.
- **Uwaga 4:** Przykłady znaczników używanych wewnętrznie do trwałości interfejsu użytkownika oprogramowania, które nigdy nie są ujawniane technologii wspomagającej obejmują, ale nie ograniczają się do: XUL i FXML. W tych przykładach technologia wspomagająca wchodzi w interakcję tylko z interfejsem użytkownika generowanego oprogramowania.

---

## C.11.4.1.2.1 C.11.4.1.2.1 Nazwa, rola, wartość (funkcjonalność otwarta)

### Procedure
['1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu zawarte w\xa0Tabeli 11.13.']

### Evaluation
Inspekcja

### Checklist
- **Nazwa, rola, wartość:** sprawdź, czy dla wszystkich komponentów interfejsu użytkownika (w tym elementów formularzy, linków i komponentów generowanych przez skrypty) nazwa i rola mogą być określone programowo; stany, właściwości i wartości, które mogą być ustawiane przez użytkownika, mogą być ustawiane programowo; oraz powiadomienia o zmianach tych elementów są dostępne dla agentów użytkownika, w tym technologii wspomagających.
- **Test praktyczny:** Użyj inspektora dostępności, aby sprawdzić nazwy, role i wartości komponentów; przetestuj ustawianie stanów i właściwości programowo; sprawdź powiadomienia o zmianach poprzez technologie wspomagające; potwierdź interoperacyjność z usługami dostępności platformy.
- **Kryterium sukcesu (Tabela 11.13):** Dla wszystkich komponentów interfejsu użytkownika (w tym, ale nie ograniczając się do: elementów formularzy, linków i komponentów generowanych przez skrypty), nazwa i rola mogą być określone programowo; stany, właściwości i wartości, które mogą być ustawiane przez użytkownika, mogą być ustawiane programowo; oraz powiadomienia o zmianach tych elementów są dostępne dla agentów użytkownika, w tym technologii wspomagających.
- **Uwaga 1:** To kryterium sukcesu jest przede wszystkim dla programistów oprogramowania, którzy rozwijają lub używają niestandardowych komponentów interfejsu użytkownika. Standardowe komponenty interfejsu użytkownika na większości platform obsługujących dostępność już spełniają to kryterium sukcesu, gdy są używane zgodnie ze specyfikacją.
- **Uwaga 2:** Dla zgodności z tym kryterium sukcesu, zwykle najlepszą praktyką dla interfejsów użytkownika oprogramowania jest używanie usług dostępności dostarczanych przez oprogramowanie platformy. Te usługi dostępności umożliwiają interoperacyjność między interfejsami użytkownika oprogramowania a zarówno technologiami wspomagającymi, jak i funkcjami dostępności oprogramowania w standaryzowanych sposób. Większość usług dostępności platformy wykracza poza programowe ujawnianie nazwy i roli oraz programowe ustawianie stanów, właściwości i wartości (oraz powiadamianie o tym samym), i określa dodatkowe informacje, które mogłyby lub powinny być ujawniane i/lub ustawiane (na przykład lista dostępnych działań dla danego komponentu interfejsu użytkownika oraz sposób programowego wykonania jednego z wymienionych działań).

---

## C.11.4.1.3.1 C.11.4.1.3.1 Komunikaty o stanie (funkcjonalność otwarta)

### Procedure
['1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu [WCAG 2.1 – 4.1.3 Komunikaty o\xa0stanie.](https://www.w3.org/Translations/WCAG21-pl/#komunikaty-o-stanie)']

### Evaluation
Inspekcja

### Checklist
- **Komunikaty o stanie:** sprawdź, czy komunikaty o stanie mogą być programowo określone poprzez rolę lub właściwości, tak aby mogły być prezentowane użytkownikowi przez technologie wspomagające bez otrzymywania fokusu.
- **Test praktyczny:** Wywołaj komunikaty o stanie w aplikacji (np. błędy, potwierdzenia); sprawdź, czy są dostępne dla technologii wspomagających bez fokusu; użyj inspektora dostępności, aby potwierdzić role i właściwości; przetestuj z czytnikami ekranu.
- **Kryterium sukcesu (WCAG 2.1 – 4.1.3):** W treści zaimplementowanej przy użyciu języków znaczników komunikaty o stanie mogą być programowo określone poprzez rolę lub właściwości, tak aby mogły być prezentowane użytkownikowi przez technologie wspomagające bez otrzymywania fokusu.

---

## C.11.5.1 C.11.5.1 Funkcjonalność zamknięta

### Procedure
['1. Sprawdź, czy funkcjonalność zamknięta jest zgodna z\xa0Rozdziałem 5.1.']

### Evaluation
Inspekcja

### Checklist
- **Funkcjonalność zamknięta:** sprawdź, czy zamknięte funkcje oprogramowania są zgodne z wymaganiami rozdziału 5.1.
- **Test praktyczny:** Przejrzyj funkcjonalności zamknięte; potwierdź zgodność z 5.1.
- **Uwaga:** Jeśli zgodne, nie jest wymagane sprawdzanie klauzul z 11.5.2.

---

## C.11.5.2.1 C.11.5.2.1 Platformowa usługa wsparcia dostępności dla oprogramowania, która udostępnia interfejs użytkownika

### Procedure
['1. Sprawdź, czy dokumentacja oprogramowania platformy zawiera informacje o usługach platformy, które mogą być używane przez oprogramowanie udostępniające interfejs użytkownika do współdziałania z technologią wspomagającą.']

### Evaluation
Inspekcja

### Checklist
- **Usługi platformy dla oprogramowania z interfejsem użytkownika:** sprawdź, czy dokumentacja platformy zawiera informacje o usługach umożliwiających współdziałanie oprogramowania z interfejsem użytkownika z technologią wspomagającą.
- **Test praktyczny:** Przejrzyj dokumentację platformy pod kątem opisów usług dostępności; potwierdź, że informacje są dostępne dla programistów.
- **Uwaga:** Dotyczy tylko oprogramowania platformy.

---

## C.11.5.2.2 C.11.5.2.2 Platformowa usługa wsparcia dostępności dla technologii wspomagających

### Procedure
['1. Sprawdź, czy dokumentacja oprogramowania platformy zawiera informacje o usługach dostępności platformy, które umożliwiają technologii wspomagającej współdziałanie z oprogramowaniem udostępniającym interfejs użytkownika działającym na oprogramowaniu platformy.']

### Evaluation
Inspekcja

### Checklist
- **Usługi platformy dla technologii asystujących:** sprawdź, czy dokumentacja platformy zawiera informacje o usługach dostępności umożliwiających technologii wspomagającej współdziałanie z oprogramowaniem z interfejsem użytkownika.
- **Test praktyczny:** Przejrzyj dokumentację platformy; potwierdź opis usług dla technologii wspomagających.
- **Uwaga:** Dotyczy tylko oprogramowania platformy.

---

## C.11.5.2.3 C.11.5.2.3 Korzystanie z usług dostępności

### Procedure
['1. Sprawdź, czy oprogramowanie używa odpowiednich udokumentowanych usług dostępności platformy.', '2. Sprawdź, czy oprogramowanie może spełnić odpowiednie wymagania 11.5.2.5 do 11.5.2.17, używając udokumentowanych usług dostępności platformy.', '3. Sprawdź, czy oprogramowanie może spełnić wymagania 11.5.2.5 do 11.5.2.17, używając udokumentowanych usług dostępności platformy i innych udokumentowanych usług.']

### Evaluation
Inspekcja

### Checklist
- **Korzystanie z usług dostępności:** sprawdź, czy oprogramowanie z interfejsem użytkownika używa usług dostępności platformy i może spełnić wymagania 11.5.2.5–11.5.2.17.
- **Test praktyczny:** Sprawdź kod oprogramowania pod kątem użycia API dostępności; przetestuj zgodność z wymaganiami przy użyciu usług platformy.
- **Uwaga:** Dotyczy oprogramowania z interfejsem użytkownika; wymaga sprawdzenia dokumentacji platformy.

---

## C.11.5.2.4 C.11.5.2.4 Technologia wspomagająca

### Procedure
['1. Sprawdź, czy technologia wspomagająca używa udokumentowanych usług dostępności platformy.']

### Evaluation
Inspekcja

### Checklist
- **Technologia wspomagająca:** sprawdź, czy technologia asystująca używa udokumentowanych usług dostępności platformy.
- **Test praktyczny:** Potwierdź współpracę technologii asystujących z platformą.
- **Uwaga:** Dotyczy tylko technologii wspomagających.

---

## C.11.5.2.5 C.11.5.2.5 Informacje o obiekcie

### Procedure
['1. Sprawdź, czy rola elementu interfejsu użytkownika jest możliwa do określenia programowo za pomocą technologii wspomagających.', '2. Sprawdź, czy stan elementu interfejsu użytkownika jest możliwy do określenia programowo za pomocą technologii wspomagających.', '3. Sprawdź, czy ograniczenie elementu interfejsu użytkownika jest możliwe do określenia programowo za pomocą technologii wspomagających.', '4. Sprawdź, czy nazwę elementu interfejsu użytkownika jest możliwe do określenia programowo za pomocą technologii wspomagających.', '5. Sprawdź, czy opis elementu interfejsu użytkownika jest możliwy do określenia programowo za pomocą technologii wspomagających.']

### Evaluation
Inspekcja

### Checklist
- **Informacje o obiekcie:** sprawdź, czy wszystkie kluczowe informacje o elementach interfejsu użytkownika (rola, stan, ograniczenia, nazwa, opis) są dostępne programowo dla technologii wspomagających.
- **Test praktyczny:** Użyj inspektora dostępności lub technologii wspomagających, aby sprawdzić każdą właściwość dla wszystkich interaktywnych elementów; potwierdź, że informacje są ujawniane zgodnie z API dostępności platformy; przetestuj z różnymi czytnikami ekranu.
- **Kryteria:** Rola, stan, ograniczenia, nazwa i opis elementów muszą być możliwe do określenia programowo.

---

## C.11.5.2.6 C.11.5.2.6 Wiersz, kolumna i nagłówki

### Procedure
['1. Wybrać tabelę danych, na której należy wykonać testy.', '2. Sprawdź, czy każdy wiersz komórek jest możliwy do określenia programowo za pomocą technologii wspomagających.', '3. Sprawdź, czy każda kolumna komórek, jest możliwa do określenia programowo za pomocą technologii wspomagających.', '4. Sprawdź, czy każdy nagłówek wiersza, jest możliwy do określenia programowo za pomocą technologii wspomagających.', '5. Sprawdź, czy każdy nagłówek kolumny, jest możliwy do określenia programowo za pomocą technologii wspomagających.']

### Evaluation
Inspekcja

---

## C.11.5.2.7 C.11.5.2.7 Wartości

### Procedure
['1. Wybierz element interfejsu użytkownika, który może mieć wartość.', '2. Sprawdź, czy bieżąca wartość jest programowo możliwa do określenia przez technologie wspomagające.', '3. Jeśli element interfejsu użytkownika przekazuje informacje o zakresie wartości, sprawdź, czy minimalna wartość jest programowo możliwa do określenia przez technologie wspomagające.', '4. Jeśli element interfejsu użytkownika przekazuje informacje o zakresie wartości, sprawdź, czy maksymalna wartość jest programowo możliwa do określenia przez technologie wspomagające.']

### Evaluation
Inspekcja

### Checklist
- **Wartości:** sprawdź, czy wartości elementów interfejsu użytkownika (bieżąca, min, max) są dostępne programowo dla technologii wspomagających.
- **Test praktyczny:** Wybierz elementy z wartościami; użyj inspektora dostępności, aby sprawdzić ujawnianie wartości.
- **Kryteria:** Bieżąca wartość oraz zakres (jeśli dotyczy) muszą być determinowalne.

---

## C.11.5.2.8 C.11.5.2.8 Relacje etykiet

### Procedure
['1. Uzyskaj informacje o każdym elemencie interfejsu użytkownika.', '2. Sprawdź, czy informacje elementu interfejsu użytkownika obejmują relację z elementem interfejsu użytkownika, który jest jego etykietą, jeśli bieżący element interfejsu użytkownika ma etykietę, i że ta relacja jest programowo możliwa do określenia przez technologie wspomagające.', '3. Sprawdź, czy informacje elementu interfejsu użytkownika obejmują relację z elementem interfejsu użytkownika, który etykietuje, jeśli bieżący element interfejsu użytkownika jest etykietą, i że ta relacja jest programowo możliwa do określenia przez technologie wspomagające.']

### Evaluation
Inspekcja

### Checklist
- **Relacje etykiet:** sprawdź, czy relacje między etykietami a elementami są dostępne programowo dla technologii wspomagających.
- **Test praktyczny:** Sprawdź pary etykieta-element; użyj narzędzi dostępności, aby potwierdzić relacje.
- **Kryteria:** Relacje muszą być determinowalne w obu kierunkach.

---

## C.11.5.2.9 C.11.5.2.9 Relacje rodzic-dziecko (nadrzędny-podrzędny)

### Procedure
['1. Dla elementów interfejsu użytkownika, które mają rodzica, sprawdź, czy informacje elementu interfejsu użytkownika obejmują relację z elementem interfejsu użytkownika, który jest jego rodzicem.', '2. Sprawdź, czy elementy interfejsu użytkownika, które są rodzicami elementu interfejsu użytkownika wybranego w kryterium 1, obejmują relację z elementami interfejsu użytkownika, które są jego dziećmi w swoich informacjach, i że ta relacja jest programowo możliwa do określenia przez technologie wspomagające.', '3. Dla elementów interfejsu użytkownika, które są rodzicami innych elementów interfejsu użytkownika, sprawdź, czy informacje elementu interfejsu użytkownika obejmują relację z elementami interfejsu użytkownika, które są jego dziećmi, i że ta relacja jest programowo możliwa do określenia przez technologie wspomagające.', '4. Sprawdź, czy elementy interfejsu użytkownika, które są dziećmi elementu interfejsu użytkownika wybranego w kryterium 3, obejmują relację z elementami interfejsu użytkownika, które są jego rodzicami w swoich informacjach, i że ta relacja jest programowo możliwa do określenia przez technologie wspomagające.']

### Evaluation
Inspekcja

### Checklist
- **Relacje rodzic-dziecko:** sprawdź, czy hierarchiczne relacje w interfejsie użytkownika są dostępne programowo dla technologii wspomagających.
- **Test praktyczny:** Sprawdź strukturę hierarchiczną; użyj inspektora, aby potwierdzić relacje rodzic-dziecko.
- **Kryteria:** Relacje muszą być determinowalne; wystarczy jeden kierunek.
- **Uwaga:** Wystarczy, że jeden z kierunków relacji jest programowo determinowalny.

### Notes
- Dla tego wymagania wystarczy, że jeden z dwóch kierunków relacji rodzic–dziecko będzie programowo determinowalny. Z tego powodu kontrole są wykonywane parami i wymaganie uznaje się za spełnione, jeśli jeden z członków każdej pary jest prawdziwy.

---

## C.11.5.2.10 C.11.5.2.10 Tekst

### Procedure
['1. Dla instancji tekstu renderowanego na ekranie, sprawdź, czy informacje tekstu obejmują jego zawartość tekstową, i że te informacje są programowo możliwe do określenia przez technologie wspomagające.', '2. Dla instancji tekstu renderowanego na ekranie, sprawdź, czy informacje tekstu obejmują jego atrybuty, i że te informacje są programowo możliwe do określenia przez technologie wspomagające.', '3. Dla instancji tekstu renderowanego na ekranie, sprawdź, czy informacje tekstu obejmują jego granicę, i że te informacje są programowo możliwe do określenia przez technologie wspomagające.']

### Evaluation
Inspekcja

### Checklist
- **Tekst:** sprawdź, czy zawartość, atrybuty i granice tekstu na ekranie są dostępne programowo dla technologii wspomagających.
- **Test praktyczny:** Sprawdź instancje tekstu; użyj narzędzi dostępności, aby potwierdzić ujawnianie treści, atrybutów i granic.
- **Kryteria:** Wszystkie aspekty tekstu muszą być determinowalne.

---

## C.11.5.2.11 C.11.5.2.11 Lista dostępnych działań

### Procedure
['1. Sprawdź, czy informacje elementu interfejsu użytkownika obejmują listę działań, które mogą być wykonywane.', '2. Sprawdź, czy ta lista jest programowo możliwa do określenia przez technologie wspomagające.']

### Evaluation
Inspekcja

### Checklist
- **Lista działań:** sprawdź, czy lista dostępnych działań dla elementów interfejsu użytkownika jest dostępna programowo dla technologii wspomagających.
- **Test praktyczny:** Wybierz elementy z działaniami; sprawdź ujawnianie listy działań.
- **Kryteria:** Lista musi być determinowalna.

---

## C.11.5.2.12 C.11.5.2.12 Wykonywanie dostępnych działań

### Procedure
['1. Sprawdź, czy informacje elementu interfejsu użytkownika obejmują listę działań, które mogą być wykonywane przez technologie wspomagające zgodnie z 11.5.2.11.', '2. Sprawdź, czy wszystkie działania na liście mogą być pomyślnie wykonywane przez technologie wspomagające.']

### Evaluation
Inspekcja i testowanie

### Checklist
- **Wykonywanie działań:** sprawdź, czy technologii wspomagających może programowo wykonywać działania z listy.
- **Test praktyczny:** Przetestuj wykonywanie działań przez technologii wspomagających; potwierdź sukces.
- **Kryteria:** Wszystkie działania muszą być wykonywalne; uwzględnij wymagania bezpieczeństwa.

---

## C.11.5.2.13 C.11.5.2.13 Śledzenie fokusu i atrybutów wyboru

### Procedure
['1. Sprawdź, czy informacje elementu interfejsu użytkownika obejmują mechanizmy śledzenia fokusu, punktu wstawiania tekstu i atrybutów wyboru.', '2. Sprawdź, czy te informacje są programowo możliwe do określenia przez technologie wspomagające.', '3. Aktywuj te mechanizmy śledzenia.', '4. Jako użytkownik, użyj funkcji edycję tekstu w ocenianym oprogramowaniu.', '5. Sprawdź, czy śledzenie fokusu, punktu wstawiania tekstu i atrybutów wyboru działa.']

### Evaluation
Inspekcja i testowanie

### Checklist
- **Śledzenie fokusu i wyboru:** sprawdź, czy mechanizmy śledzenia fokusu, punktu wstawiania i wyboru są dostępne i działają dla technologii wspomagających.
- **Test praktyczny:** Użyj edytora tekstu; aktywuj śledzenie; przetestuj z technologii wspomagających.
- **Kryteria:** Mechanizmy muszą być determinowalne i funkcjonalne.

---

## C.11.5.2.14 C.11.5.2.14 Modyfikacja fokusu i atrybutów wyboru

### Procedure
['1. Dla elementów interfejsu użytkownika, które mogą otrzymać fokus i gdzie fokus może być modyfikowany przez użytkownika bez użycia technologii wspomagającej, sprawdź, czy fokus może być programowo modyfikowany przez technologie wspomagające.', '2. Dla elementów interfejsu użytkownika, które umożliwiają edycję tekstu przez użytkownika bez użycia technologii wspomagającej, sprawdź, czy pozycja punktu wstawiania tekstu może być programowo modyfikowana przez technologie wspomagające.', '3. Dla elementów interfejsu użytkownika, które umożliwiają edycję tekstu, sprawdź, czy atrybuty wyboru mogą być programowo modyfikowane przez technologie wspomagające, gdzie mogą być modyfikowane przez użytkownika bez użycia technologii wspomagającej.']

### Evaluation
Testowanie

### Checklist
- **Modyfikacja fokusu i wyboru:** sprawdź, czy technologia wspomagająca może programowo modyfikować fokus, punkt wstawiania i wybór.
- **Test praktyczny:** Przetestuj modyfikacje przez technologię wspomagającą; potwierdź funkcjonalność.
- **Kryteria:** Wszystkie modyfikacje muszą być możliwe; uwzględnij wymagania bezpieczeństwa.

---

## C.11.5.2.15 C.11.5.2.15 Powiadomienia o zmianach

### Procedure
['1. Aktywuj powiadomienia o zmianach w elementach interfejsu użytkownika.', '2. Sprawdź, czy powiadomienia o zmianach w informacjach o obiekcie (rola, stan, granica, nazwa i opis) są wysyłane do technologii wspomagających, jeśli te informacje zmieniają się w interfejsie użytkownika oprogramowania.', '3. Sprawdź, czy powiadomienia o zmianach w wierszach, kolumnach i nagłówkach tabel danych są wysyłane do technologii wspomagających, jeśli te informacje zmieniają się w oprogramowaniu.', '4. Sprawdź, czy powiadomienia o zmianach w wartościach (bieżąca wartość, minimalna wartość i maksymalna wartość) są wysyłane, jeśli te informacje zmieniają się w oprogramowaniu.', '5. Sprawdź, czy powiadomienia o zmianach w relacjach etykiet są wysyłane do technologii wspomagających, jeśli te informacje zmieniają się w oprogramowaniu.', '6. Sprawdź, czy powiadomienia o zmianach w relacjach rodzic-dziecko są wysyłane do technologii wspomagających, jeśli te informacje zmieniają się w oprogramowaniu.', '7. Sprawdź, czy powiadomienia o zmianach w tekście (zawartość tekstowa, atrybuty tekstu i granica tekstu renderowanego na ekranie) są wysyłane do technologii wspomagających, jeśli te informacje zmieniają się w oprogramowaniu.', '8. Sprawdź, czy powiadomienia o zmianach w liście dostępnych działań są wysyłane do technologii wspomagających, jeśli te informacje zmieniają się w oprogramowaniu.', '9. Sprawdź, czy powiadomienia o zmianach w fokusie, punkcie wstawiania tekstu i atrybutach wyboru są wysyłane do technologii wspomagających, jeśli te informacje zmieniają się w oprogramowaniu.']

### Evaluation
Inspekcja i testowanie

### Checklist
- **Powiadomienia o zmianach:** sprawdź, czy zmiany w interfejsie użytkownika są przekazywane do technologii asystujących.
- **Test praktyczny:** Aktywuj powiadomienia; wprowadź zmiany; sprawdź wysyłanie powiadomień.
- **Kryteria:** Wszystkie typy zmian muszą być przekazywane.

---

## C.11.5.2.16 C.11.5.2.16 Modyfikacje stanów i właściwości

### Procedure
['1. Sprawdź, czy stan elementów interfejsu użytkownika, których stan może być modyfikowany przez użytkownika bez użycia technologii wspomagającej, może być programowo modyfikowany przez technologie wspomagające.', '2. Sprawdź, czy właściwości elementów interfejsu użytkownika, których właściwości mogą być modyfikowane przez użytkownika bez użycia technologii wspomagającej, mogą być programowo modyfikowane przez technologie wspomagające.']

### Evaluation
Testowanie

### Checklist
- **Modyfikacje stanów i właściwości:** sprawdź, czy technologie wspomagające mogą programowo modyfikować stany i właściwości interfejsu użytkownika.
- **Test praktyczny:** Przetestuj modyfikacje przez technologie wspomagające; potwierdź funkcjonalność.
- **Kryteria:** Wszystkie modyfikacje muszą być możliwe; uwzględnij wymagania bezpieczeństwa.

---

## C.11.5.2.17 C.11.5.2.17 Modyfikacje wartości i tekstu

### Procedure
['1. Sprawdź, czy wartości elementów interfejsu użytkownika, których wartości mogą być modyfikowane przez użytkownika bez użycia technologii wspomagającej, mogą być modyfikowane przez technologie wspomagające przy użyciu metod wprowadzania platformy.', '2. Sprawdź, czy tekst elementów interfejsu użytkownika, którego tekst może być modyfikowany przez użytkownika bez użycia technologii wspomagającej, może być modyfikowany przez technologie wspomagające przy użyciu metod wprowadzania platformy.']

### Evaluation
Testowanie

### Checklist
- **Modyfikacje wartości i tekstu:** sprawdź, czy technologie wspomagające mogą programowo modyfikować wartości i tekst interfejsu użytkownika przy użyciu metod platformy.
- **Test praktyczny:** Przetestuj modyfikacje przez technologie wspomagające; potwierdź funkcjonalność.
- **Kryteria:** Wszystkie modyfikacje muszą być możliwe; uwzględnij wymagania bezpieczeństwa.

---

## C.11.6.1 C.11.6.1 Kontrola funkcji dostępności przez użytkownika

### Procedure
['1. Sprawdź, czy istnieją odpowiednie tryby pracy, w\xa0których możliwa jest kontrola użytkowników nad funkcjami platformy zdefiniowanymi w\xa0dokumentacji platformy jako funkcje dostępności przeznaczone dla użytkowników.']

### Evaluation
Test

### Checklist
- **Kontrola użytkownika:** sprawdź, czy użytkownik ma kontrolę nad funkcjami dostępności platformy (np. włączanie/wyłączanie).
- **Test praktyczny:** Spróbuj włączyć/wyłączyć funkcje dostępności; sprawdź, czy oprogramowanie na to pozwala.
- **Kryteria:** Użytkownik musi mieć możliwość kontroli.

---

## C.11.6.2 C.11.6.2 Nieprzerwane działanie funkcji dostępności

### Procedure
['1. Sprawdź, czy oprogramowanie z\xa0interfejsem użytkownika przerywa normalne działanie funkcji dostępności platformy.', '2. Sprawdź, czy to przerwanie zostało wywołane lub zatwierdzone przez użytkownika.']

### Evaluation
Test

### Checklist
- **Brak zakłóceń:** sprawdź, czy oprogramowanie nie zakłóca działania funkcji dostępności platformy (np. czytnika ekranu, lupy).
- **Test praktyczny:** Uruchom funkcje dostępności; używaj oprogramowania; sprawdź, czy funkcje działają poprawnie.
- **Wyjątek:** Zakłócenie jest dozwolone tylko na wyraźne żądanie użytkownika.

---

## C.11.7 C.11.7 Preferencje użytkownika

### Procedure
['1. Sprawdź, czy oprogramowanie zapewnia tryb pracy zgodny z\xa0ustawieniami platformy.']

### Evaluation
Inspekcja i test

### Checklist
- **Preferencje platformy:** sprawdź, czy oprogramowanie respektuje ustawienia platformy (kolor, kontrast, czcionka, kursor).
- **Test praktyczny:** Zmień ustawienia systemowe (np. wysoki kontrast); sprawdź, czy oprogramowanie się dostosowało.
- **Kryteria:** Oprogramowanie musi dziedziczyć ustawienia systemowe.

---

## C.11.8.1 C.11.8.1 Technologia treści

### Procedure
['1. Sprawdź, czy narzędzie autorskie jest zgodne z 11.8.2 do 11.8.5 w zakresie, w jakim informacje wymagane dla dostępności są obsługiwane przez format używany na wyjściu narzędzia autorskiego.']

### Evaluation
Inspekcja i testowanie

### Checklist
- **Obsługa formatu:** sprawdź, czy format wyjściowy narzędzia pozwala na zapisanie informacji o dostępności.
- **Test praktyczny:** Wygeneruj treść; sprawdź, czy format pliku wspiera tagi, teksty alternatywne itp.

### Notes
- W przypadku gdy format wyjściowy narzędzia autorskiego nie obsługuje pewnych typów informacji wymaganych dla dostępności, zgodność z wymaganiami odnoszącymi się do tego typu informacji nie jest wymagana.

---

## C.11.8.2 C.11.8.2 Tworzenie dostępnej treści

### Procedure
['1. Sprawdź, czy narzędzie do tworzenia treści ma cechy, które umożliwiają i\xa0wspomagają produkcję treści zgodnych z\xa0Rozdziałami 9 (Internet) i\xa010 (Dokumenty nieinternetowe).']

### Evaluation
Inspekcja i test

### Checklist
- **Wsparcie tworzenia:** sprawdź, czy narzędzie umożliwia dodawanie informacji o dostępności (np. pola na tekst alternatywny).
- **Test praktyczny:** Spróbuj stworzyć dostępny dokument; sprawdź, czy narzędzie to ułatwia.

---

## C.11.8.3 C.11.8.3 Zachowanie informacji o dostępności podczas transformacji

### Procedure
['1. W\xa0przypadku transformacji restrukturyzacyjnej sprawdzić, czy w\xa0danych wyjściowych są zachowane informacje o\xa0dostępności.', '2. W\xa0przypadku transformacji restrukturyzacyjnej sprawdzić, czy technologia treści obsługuje informacje o\xa0dostępności dla restrukturyzowanej formy informacji.', '3. W\xa0przypadku transformacji ponownie kodujących sprawdzić, czy w\xa0danych wyjściowych są zachowane informacje o\xa0dostępności.', '4. W\xa0przypadku transformacji ponownie kodujących sprawdzić, czy informacje o\xa0dostępności są obsługiwane przez technologię ponownie zakodowanych danych wyjściowych.']

### Evaluation
Inspekcja i test

### Checklist
- **Zachowanie informacji:** sprawdź, czy podczas konwersji/zapisu (transformacji) informacje o dostępności nie są tracone.
- **Test praktyczny:** Przekonwertuj dokument dostępny; sprawdź wynik pod kątem utraty danych dostępności.

---

## C.11.8.4 C.11.8.4 Wspomaganie naprawy

### Procedure
['1. Narzędzie do tworzenia treści proponuje sposób naprawy, jeśli zawartość nie spełnia wymagań Rozdziałów 9 lub 10 (w zależności od przypadku).']

### Evaluation
Inspekcja

### Checklist
- **Sugestie naprawy:** sprawdź, czy narzędzie wykrywa błędy dostępności i sugeruje, jak je naprawić.
- **Test praktyczny:** Stwórz treść z błędem; uruchom sprawdzanie; zobacz czy jest sugestia naprawy.

---

## C.11.8.5 C.11.8.5 Szablony

### Procedure
['1. Sprawdź, czy narzędzie do tworzenia treści udostępnia co najmniej jeden szablon, który wspiera tworzenie treści zgodnych z\xa0wymaganiami Rozdziałów 9 (Internet) lub 10 (Dokumenty nieinternetowe), w\xa0zależności od przypadku.', '2. Sprawdź, czy dostępny jest co najmniej jeden szablon określony w\xa0kroku 1 i\xa0czy jest on zgodny z\xa0Rozdziałami 9 lub 10 (w zależności od przypadku).']

### Evaluation
Inspekcja

### Checklist
- **Dostępne szablony:** sprawdź, czy narzędzie oferuje szablony, które są dostępne (np. mają odpowiedni kontrast, strukturę nagłówków).
- **Wybór szablonu:** Spróbuj stworzyć nową treść używając szablonu; sprawdź czy wynikowa treść jest dostępna.

### Notes
- Identyfikacja zgodna z wymaganiami Rozdziałów 9 lub 10 (odpowiednio) opisanymi w kryterium 2 może być opisana słowami "Zgodna z WCAG 2.1" . Jeśli podczas identyfikacji nie można wyraźnie stwierdzić, że wszystkie wymagania określone w Rozdziałach 9 lub 10 (w zależności od przypadku) są spełnione, może być konieczne wykorzystanie szablonu do stworzenia strony internetowej lub dokumentu, a na- stępnie przetestowanie tej strony internetowej lub dokumentu zgodnie z wymaganiami Rozdziałów 9 lub 10 w celu uzyskania całkowitej pewności, że szablon zachowuje się tak, jak jest to wymagane. C.12 Dokumentacja i wsparcie techniczne

---

## C.12.1.1 C.12.1.1 Funkcje dostępności i zgodności

### Procedure
['1. Sprawdź, czy w\xa0dokumentacji produktu dostarczonej razem z\xa0TIK znajduje się wykaz funkcji dostępności i\xa0kompatybilności TIK oraz objaśnienia dotyczące sposobu korzystania z\xa0nich.']

### Evaluation
Inspekcja

### Checklist
- **Lista funkcji:** Sprawdź, czy w instrukcji lub pomocy jest rozdział poświęcony dostępności. Może to być np. 'Deklaracja Dostępności' lub strony pomocy.
- **Zakres informacji:** Upewnij się, że opisane są zarówno funkcje wbudowane (np. zmiana kontrastu), jak i zgodność z technologiami asystującymi (np. czytnikami ekranu).
- **Opis użycia:** Sprawdź, czy dokumentacja wyjaśnia, jak włączyć i korzystać z tych funkcji ułatwień.

---

## C.12.1.2 C.12.1.2 Dostępność dokumentacji

### Procedure
['1. Sprawdź, czy dokumentacja produktu w\xa0formacie elektronicznym dostarczona wraz z\xa0TIK jest odpowiednio zgodna z\xa0wymaganiami Rozdziałów 9 lub 10.']

### Evaluation
Inspekcja

### Checklist
- **Wersja dostępna:** Upewnij się, że istnieje przynajmniej jedna wersja dokumentacji, która jest dostępna cyfrowo (zgodna z WCAG). Inne wersje (np. drukowana) nie muszą być dostępne, o ile istnieje ta jedna poprawna.
- **Dokumentacja wbudowana:** Jeśli dokumentacja jest częścią programu (np. system pomocy w aplikacji), ona również musi być dostępna.
- **Formaty alternatywne:** Sprawdź, czy producent oferuje formaty dla specyficznych potrzeb (np. dokumenty w Braille'u lub w tekście łatwym do czytania) – jest to dobra praktyka.

---

## C.12.2.2 C.12.2.2 Informacje o funkcjach dostępności i zgodności

### Procedure
['1. Sprawdź, czy usługi wsparcia w\xa0zakresie TIK dostarczają informacje o\xa0funkcjach dostępności i\xa0zgodności dostarczanych razem z\xa0dokumentacją produktu.']

### Evaluation
Inspekcja

### Checklist
- **Wiedza wsparcia:** Skontaktuj się z pomocą techniczną i zapytaj o funkcje dostępności produktu (zarówno te wbudowane, jak i współpracę z czytnikami ekranu).
- **Udzielanie informacji:** Sprawdź, czy pracownicy wsparcia potrafią wskazać te funkcje w dokumentacji lub wyjaśnić ich działanie.

---

## C.12.2.3 C.12.2.3 Efektywna komunikacja

### Procedure
['1. Sprawdź, czy usługi wsparcia w\xa0zakresie TIK zaspokajają potrzeby komunikacyjne poszczególnych osób z\xa0niepełnosprawnościami w\xa0sposób bezpośredni lub poprzez punkt pośredni.']

### Evaluation
Inspekcja

### Checklist
- **Kanały kontaktu:** Sprawdź, czy z pomocą techniczną można się skontaktować na różne sposoby (np. telefon, e-mail, czat, formularz).
- **Dostosowanie:** Czy wsparcie jest w stanie obsłużyć osoby o różnych potrzebach (np. osoby niesłyszące, niewidome) bezpośrednio lub przekierowując do odpowiedniej usługi (np. tłumacza migowego).

### Notes
- Zapewnienie na dowolnym poziomie wsparcia dla potrzeb komunikacyjnych osób niepełnosprawnych stanowi podstawę tego wymagania. Dostawcy mogą chcieć dostarczyć dalsze informacje na temat pozio- mu wsparcia, który jest zapewniany, aby umożliwić ocenę adekwatności i jakości wsparcia.

---

## C.12.2.4 C.12.2.4 Dostępność dokumentacji

### Procedure
['1. Sprawdź, czy dokumentacja produktu w\xa0formie elektronicznej dostarczona przez serwis obsługi TIK jest zgodna z\xa0wymaganiami odpowiednio Rozdziałów 9 lub 10.']

### Evaluation
Inspekcja

### Checklist
- **Materiały od wsparcia:** Jeśli pomoc techniczna przesyła dodatkowe instrukcje lub dokumenty, sprawdź czy przynajmniej jedna ich wersja jest dostępna cyfrowo (zgodna z WCAG).
- **Dokumentacja wbudowana:** Jeśli wsparcie kieruje do pomocy wbudowanej w system, sprawdź czy ta pomoc jest dostępna.
- **Formaty alternatywne:** Zapytaj, czy w razie potrzeby wsparcie może dostarczyć dokumentację w formatach alternatywnych (np. Braille, tekst łatwy do czytania).
- **Konwersja:** Warto sprawdzić, czy dostarczane dokumenty pozwalają na łatwą konwersję (np. czytniki ekranu radzą sobie z ich strukturą).

---

## C.13.1.2 C.13.1.2 Usługi przekazu w trybie tekstowym

### Procedure
['1. Sprawdź, czy usługa umożliwia interakcję między użytkownikami tekstu']

### Evaluation
Inspekcja

### Checklist
- **Konwersja tekst-mowa:** Sprawdź, czy usługa umożliwia komunikację między osobą piszącą (tekst) a osobą mówiącą (głos), zamieniając tekst na mowę i odwrotnie.
- **Interakcja:** Upewnij się, że konwersja działa w obu kierunkach, umożliwiając płynną rozmowę.

---

## C.13.1.3 C.13.1.3 Usługi przekazu w trybie języka migowego

### Procedure
['1. Sprawdź, czy usługa umożliwia interakcję między użytkownikami języka migowego a\xa0użytkownikami mowy poprzez konwersję między tymi dwoma trybami komunikacji.']

### Evaluation
Inspekcja

### Checklist
- **Tłumacz migowy:** Sprawdź, czy usługa zapewnia udział tłumacza (wideo), który przekłada język migowy na mowę i odwrotnie.
- **Jakość wideo:** Upewnij się, że jakość połączenia wideo jest wystarczająca do czytelnego odbioru znaków migowych.

---

## C.13.1.4 C.13.1.4 Usługi odczytu z ruchu warg

### Procedure
['1. Sprawdź, czy usługa umożliwia interakcję między użytkownikami czytającymi z\xa0ruchu warg a\xa0użytkownikami telefonu głosowego poprzez konwersję między tymi dwoma trybami komunikacji.']

### Evaluation
Inspekcja

### Checklist
- **Wsparcie czytania z ruchu warg:** Sprawdź, czy usługa umożliwia osobie czytającej z ruchu warg komunikację z użytkownikiem telefonu głosowego.
- **Wideo:** Czy usługa zapewnia obraz wideo rozmówcy (lub tłumacza), który wyraźnie artykułuje słowa?

---

## C.13.1.5 C.13.1.5 Usługi telefonii z napisami

### Procedure
['1. Sprawdź, czy usługa zapewnia użytkownikom niesłyszącym i\xa0słabosłyszącym korzystającym z\xa0telefonu możliwość aktywnego uczestniczenia w\xa0rozmowie dzięki wyświetlaniu napisów tekstowych tłumaczących przychodzącą część rozmowy.']

### Evaluation
Inspekcja

### Checklist
- **Napisy na żywo:** Sprawdź, czy podczas rozmowy głosowej wyświetlane są napisy (transkrypcja) tego, co mówi druga osoba.
- **Synchronizacja:** Czy napisy pojawiają się z minimalnym opóźnieniem, pozwalając na płynną rozmowę?

---

## C.13.1.6 C.13.1.6 Usługi przekazu mowy na mowę

### Procedure
['1. Sprawdź, czy usługa umożliwia użytkownikom telefonów z\xa0niepełnosprawnościami mowy lub z\xa0niepełnosprawnościami poznawczymi, językowymi i\xa0trudnościami w\xa0nauce oraz każdemu innemu użytkownikowi komunikowanie się, zapewniając wsparcie.']

### Evaluation
Inspekcja

### Checklist
- **Asystent mowy:** Sprawdź, czy usługa zapewnia wsparcie operatora, który powtarza lub parafrazuje wypowiedzi osoby z zaburzeniami mowy, aby były zrozumiałe dla rozmówcy.
- **Dostępność:** Czy usługa jest dostępna dla osób z różnymi trudnościami w komunikacji werbalnej?

---

## C.13.2 C.13.2 Dostęp do usług przekazu informacji

### Procedure
['1. Sprawdź, czy system nie uniemożliwia dostępu do tych usług przekazywania w\xa0odniesieniu do połączeń przychodzących i\xa0wychodzących.']

### Evaluation
Inspekcja

### Checklist
- **Brak blokad:** Sprawdź, czy system telefoniczny/komunikacyjny nie blokuje połączeń z numerami usług przekazu (np. numerami specjalnymi dla osób niesłyszących).
- **Obsługa typów połączeń:** Czy można dzwonić i odbierać połączenia głosowe, wideo lub tekstowe (RTT) z usług przekazu?

---

## C.13.3 C.13.3 Dostęp do usług awaryjnego przekazu informacji

### Procedure
['1. Sprawdź, czy system nie uniemożliwia dostępu do tych usług ratowniczych w\xa0odniesieniu do połączeń przychodzących i\xa0wychodzących.']

### Evaluation
Inspekcja

### Checklist
- **Połączenia alarmowe:** Sprawdź, czy system pozwala na połączenie się ze służbami ratunkowymi (np. 112) przy użyciu dostępnych metod (głos, wideo, tekst/RTT).
- **Brak barier:** Upewnij się, że konfiguracja sieci lub urządzenia nie uniemożliwia wezwania pomocy przez osoby korzystające z technologii wspomagających.

---

## C.5.1.2.2 C.5.1.2.2 Technologia wspomagająca

### Procedure
['1. Określ w\xa0TIK funkcjonalności zamknięte.', '2. Sprawdź, czy testy od C.5.1.3 do C.5.1.6 można przeprowadzić bez mocowania lub instalowania jakiejkolwiek technologii wspomagającej z\xa0wyjątkiem osobistych zestawów słuchawkowych lub pętli indukcyjnych.']

### Evaluation
Test

### Checklist
- **Co to jest funkcjonalność zamknięta:** TIK ma funkcjonalność zamkniętą z powodu projektu, polityki lub praktyki. Produkt może być samodzielny – użytkownicy nie mogą dodawać sprzętu lub oprogramowania.
- **Przykłady zamkniętej funkcjonalności:** Komputery bez możliwości instalacji oprogramowania lub zmiany ustawień są funkcjonalnie zamknięte. TIK może być zamknięta w praktyce, nawet jeśli nie była tak zaprojektowana.
- **Uwaga 1:** TIK może zamykać tylko niektóre funkcjonalności. Tylko te zamknięte muszą spełniać wymagania klauzuli 5.1.
- **Uwaga 2:** Wymagania w klauzuli 5 zastępują te z klauzul 5.2–13 dla funkcjonalności zamkniętej. Dotyczy to kompatybilności z technologią wspomagającą lub ustawień dostępności (np. produkty blokujące dostęp do panelu ustawień).

---

## C.5.1.3.1 C.5.1.3.1 Wyjście audio informacji wizualnych

### Procedure
['1. Określ w\xa0TIK funkcjonalności zamknięte na odczyt z\xa0ekranu.', '2. Sprawdź, czy można je wykonać, korzystając z\xa0dostępu do wyjścia audio.']

### Evaluation
Test

### Checklist
- **Lista informacji wizualnych:** Wypisz wszystkie informacje wizualne wymagane dla funkcji zamkniętych (instrukcje, statusy, komunikaty o błędach, treści nietekstowe).
- **Tryby dostępu niewizualnego:** Sprawdź, że co najmniej jeden tryb dostępu niewizualnego (np. audio, brajl, dotyk) przekazuje tę samą informację.
- **Zachowanie struktury:** Upewnij się, że tryb niewizualny zachowuje strukturę, fokus i relacje, aby użytkownik mógł skorelować go z widocznym ekranem
- **Uruchamianie i zakres:** Opisz, w jaki sposób tryb niewizualny jest uruchamiany i czy obejmuje wszystkie zidentyfikowane elementy.
- **Braki odpowiedników:** Zanotuj wizualne wskazówki, które nadal nie mają odpowiednika w trybie niewizualnym.
- **Uwaga 1:** Dostęp niewizualny może mieć formę audio, w tym mowę, lub formę dotykową, taką jak brajl dla użytkowników głuchoniewidomych.
- **Uwaga 2:** Wizualne informacje potrzebne do umożliwienia korzystania z niektórych funkcji mogą obejmować instrukcje obsługi i orientację, komunikaty transakcyjne, weryfikację danych wejściowych użytkownika, komunikaty o błędach i treści nietekstowe.

---

## C.5.1.3.2 C.5.1.3.2 Wyjściowy sygnał dźwiękowy zawierający mowę

### Procedure
['1. Sprawdź, czy sygnał dźwiękowy jest dostarczany za pomocą mechanizmu zawartego w\xa0TIK lub dostarczanego wraz z\xa0nią.', '2. Sprawdź, czy sygnał dźwiękowy jest dostarczany za pomocą osobistego zestawu słuchawkowego, który można podłączyć poprzez gniazdo audio 3,5 mm lub standardowe połączenie branżowe, bez konieczności korzystania ze wzroku.']

### Evaluation
Inspekcja

### Checklist
- **Mechanizm wyjścia audio:** Sprawdź, czy wyjście audio dostarczane jest przez mechanizm wbudowany lub przez osobiste słuchawki/standardowe złącze, które można podłączyć bez użycia wzroku.
- **Sposób połączenia:** Opisz sposób połączenia (gniazdo 3,5 mm, standardowe złącze bezprzewodowe, dokowanie) i czy użytkownik może je wykonać samodzielnie.
- **Typ sprzężenia:** Zanotuj, czy mechanizm wykorzystuje głośnik, wbudowane słuchawki, zestaw stereo lub inny sposób dostarczania dźwięku.
- **Pętla indukcyjna:** Jeśli zapewniono pętlę indukcyjną, opisz sposób jej dostępu i dostosowania do użytkownika
- **Ograniczenia dostępu:** Zapisz wszelkie ograniczenia, które uniemożliwiają dostęp do wyjścia audio.
- **Uwaga 1:** Mechanizmy zawarte w TIK lub dostarczane wraz z nią mogą obejmować, ale nie ograniczają się do, głośnika, wbudowanej słuchawki/zestawu słuchawkowego lub innego standardowego urządzenia dźwiękowego.
- **Uwaga 2:** Standardowe połączenie branżowe może być połączeniem bezprzewodowym.
- **Uwaga 3:** Niektórzy użytkownicy mogą skorzystać z zapewnienia pętli indukcyjnej.

---

## C.5.1.3.4 C.5.1.3.4 Sterowanie przez użytkownika wyjściem mowy

### Procedure
['1. Sprawdź, czy wyjście mowy można przerwać na żądanie użytkownika.', '2. Sprawdź, czy wyjście mowy można powtórzyć na żądanie użytkownika.']

### Evaluation
Inspekcja

### Checklist
- **Kontrola wyjścia mowy:** Potwierdź, że wyjście mowy można przerwać i powtórzyć na żądanie, uwzględniając ograniczenia bezpieczeństwa.
- **Test wstrzymania:** Tam, gdzie to możliwe, przetestuj wstrzymanie odtwarzania bez restartu i powtórzenie ostatniego fragmentu.
- **Kontrolki:** Opisz fizyczne lub dotykowe kontrolki, które służą przerwaniu i powtórzeniu komunikatu.
- **Ograniczenia bezpieczeństwa:** Zanotuj polityki lub tryby, które mogą uniemożliwiać przerwanie/ powtórzenie ze względów bezpieczeństwa.
- **Zakres powtórzenia:** Sprawdź, czy powtórzenie obejmuje tylko ostatnią partię treści w zgodzie z najlepszymi praktykami.
- **Uwaga 1:** Najlepszą praktyką jest umożliwienie użytkownikowi wstrzymania wyjścia mowy, a nie tylko jego przerwania.
- **Uwaga 2:** Najlepszą praktyką jest umożliwienie użytkownikowi powtórzenia tylko ostatniej części, zamiast wymagania rozpoczęcia odtwarzania od początku.

---

## C.5.1.3.5 C.5.1.3.5 Automatyczne przerwanie wyjścia mowy

### Procedure
['1. Określ w\xa0TIK funkcjonalności zamknięte.', '2. Sprawdź, czy wyjście mowy dla każdej pojedynczej funkcji jest przerywany na skutek działania użytkownika.', '3. Sprawdź, czy wyjście ł mowy dla każdej pojedynczej funkcji jest przerywany, gdy rozpoczyna się nowe wyjście mowy.']

### Evaluation
Inspekcja

### Checklist
- **Automatyczne przerwanie:** Potwierdź, że bieżący komunikat mowy zostaje natychmiast przerwany, gdy użytkownik wykona akcję lub rozpocznie się nowy komunikat.
- **Komunikaty konieczne:** Jeśli istnieją komunikaty, których odsłuchanie jest konieczne (ostrzeżenia), opisz, w jaki sposób system blokuje akcje w zgodzie z klauzulą.
- **Konsystencja przerwania:** Sprawdź, czy przerwanie działa konsekwentnie niezależnie od długości komunikatu i czy nowe audio odtwarza się bez opóźnień.
- **Blokady przerwania:** Zanotuj stany, w których przerwanie jest zablokowane i jak system o tym informuje.
- **Odzyskiwanie kontroli:** Opisz, jak użytkownik odzyskuje kontrolę po przerwaniu.
- **Uwaga:** W przypadkach, gdy konieczne jest, aby użytkownik usłyszał całą wiadomość, np. instrukcję bezpieczeństwa lub ostrzeżenie, TIK może potrzebować zablokować wszystkie działania użytkownika, aby mowa nie została przerwana.

---

## C.5.1.3.6 C.5.1.3.6 Wyjście mowy dla treści nietekstowej

### Procedure
['1. Sprawdź, czy wyjście mowy jest zapewniane jako alternatywa dla treści nietekstowej.', '2. Sprawdź, czy treść nietekstowa jest rzeczywiście istotna i\xa0potrzebna.', '3. Sprawdź, czy treść nietekstowa nie jest wyłącznie używana do formatowania wizualnego.', '4. Sprawdź, czy wyjście mowy jest zgodne z\xa0wytycznymi dotyczącymi "tekstu alternatywnego" opisanymi w\xa0kryterium sukcesu [WCAG 2.1 dla wytycznej 1.1.1](https://www.w3.org/Translations/WCAG21-pl/#non-text-content).']

### Evaluation
Test

### Checklist
- **Potwierdzenie odpowiedników:** Dla każdej treści nietekstowej potwierdź, że mowa zapewnia odpowiednik zgodny z WCAG 2.1 wytyczna 1.1.1.
- **Format opisu:** Opisz, czy to audiodeskrypcja, transkrypt lub inny format i czy przekazuje równoważne znaczenie.
- **Różnicowanie treści:** Upewnij się, że komunikacja głosowa odróżnia elementy dekoracyjne od treści znaczących.
- **Dostęp do nagrania:** Zanotuj, jak użytkownik uruchamia i uzyskuje dostęp do takiego nagrania.
- **Braki i nieścisłości:** Zapisz braki lub nieścisłości w opisie treści nietekstowych.

---

## C.5.1.3.7 C.5.1.3.7 Wyjście mowy dla informacji wideo

### Procedure
['1. Sprawdź, czy wyjście mowy prezentuje informacje zgodne z\xa0napisami do nagranej treści wideo.']

### Evaluation
Test

### Checklist
- **Porównanie zawartości:** Porównaj zawartość materiałów wideo z wyjściem mowy, aby upewnić się, że przekazuje tę samą informację.
- **Format wyjścia:** Opisz, czy wyjście to audiodeskrypcja, transkrypt lub inna forma opowieści słownej.
- **Synchronizacja:** Zweryfikuj synchronizację i kolejność odtwarzania głosu w stosunku do zdarzeń wideo.
- **Dostęp do audio:** Zanotuj sposób uzyskania dostępu do audio (automatycznie, przycisk, menu).
- **Elementy pominięte:** Wymień elementy wideo pominięte w narracji.
- **Uwaga:** Wyjście mowy może mieć formę audiodeskrypcji lub transkryptu treści wideo.

---

## C.5.1.3.8 C.5.1.3.8 Wejście maskowane

### Procedure
['1. Sprawdź, czy sygnał dźwiękowy nie jest mówioną wersją wprowadzonych znaków.', '2. Sprawdź, czy sygnał dźwiękowy jest dostępny tylko do mechanizmu do indywidualnego słuchania.']

### Evaluation
Test

### Checklist
- **Potwierdzenie maskowania:** Gdy są wyświetlane znaki maskowane, potwierdź, że wyjście audio nie wypowiada wprowadzanych znaków chyba że dane jest prywatne środowisko lub użytkownik wyrazi zgodę.
- **Ostrzeżenie prywatności:** Jeśli system oferuje opcję odsłuchu nie maskowanego, sprawdź, czy pojawia się ostrzeżenie o konsekwencjach prywatności.
- **Mechanizm prywatny:** Opisz, jaki mechanizm prywatnego odsłuchu jest dostępny i jak można go podłączyć bez widu.
- **Utrzymanie maskowania:** Zanotuj, czy maskowanie jest utrzymywane również w innych trybach, by nie naruszać danych wrażliwych.
- **Przypadki naruszeń:** Zapisz przypadki, gdy dane prywatne były wypowiedziane bez wymaganych zabezpieczeń.
- **Uwaga 1:** Znaki maskujące są zwykle wyświetlane ze względów bezpieczeństwa i obejmują, ale nie ograniczają się do, gwiazdek reprezentujących numery identyfikacyjne osób.
- **Uwaga 2:** Wyjście znaków nie maskowanych może być preferowane, gdy używane są funkcje zamknięte, na przykład w prywatności domu użytkownika. Ostrzeżenie podkreślające obawy dotyczące prywatności może być odpowiednie, aby zapewnić, że użytkownik dokonał świadomego wyboru.

---

## C.5.1.3.9 C.5.1.3.9 Prywatny dostęp do danych osobowych

### Procedure
['1. Sprawdź, czy sygnał dźwiękowy jest dostępny tylko do mechanizmu do indywidulnego słuchania.', '2. Sprawdź, czy mechanizm do indywidualnego słuchania można podłączyć bez konieczności używania wzroku.', '3. Sprawdź, czy sygnał dźwiękowy jest dostarczany przez dowolny inny mechanizm, który użytkownik może wybrać.']

### Evaluation
Test

### Checklist
- **Wskazanie danych prywatnych:** Wskaż dane prywatne i upewnij się, że są przekazywane wyłącznie przez mechanizm prywatnego odsłuchu dostępny bez wzroku lub inną wybraną przez użytkownika ścieżkę.
- **Połączenie z kanałem prywatnym:** Opisz, jak użytkownik może połączyć się z kanałem prywatnym bez pomocy wzroku.
- **Wyjątki od prywatności:** Jeśli dane wykraczają poza definicję prywatności zgodnie z polityką, zapisz, że klauzula nie ma zastosowania.
- **Ostrzeżenia o ryzyku:** Jeśli użytkownik wybiera tryb nieprywatny (np. w domu), sprawdź, czy system ostrzega przed ryzykiem.
- **Mechanizmy granic prywatności:** Zanotuj mechanizmy wprowadzające granice prywatności, zgodnie z zapisami klauzuli.
- **Uwaga 1:** To wymaganie nie ma zastosowania w przypadkach, gdy dane nie są zdefiniowane jako prywatne zgodnie z obowiązującą polityką prywatności lub gdy nie ma obowiązującej polityki prywatności.
- **Uwaga 2:** Wyjście nieprywatne może być preferowane, gdy używane są funkcje zamknięte, na przykład w prywatności domu użytkownika. Ostrzeżenie podkreślające obawy dotyczące prywatności może być odpowiednie, aby zapewnić, że użytkownik dokonał świadomego wyboru.

---

## C.5.1.3.10 C.5.1.3.10 Wyjście audio bez zakłóceń

### Procedure
['1. Sprawdź, czy zakłócające wyjście dźwiękowe jest odtwarzane nie dłużej niż 3 sekundy.']

### Evaluation
Test

### Checklist
- **Obserwacja zakłóceń:** Obserwuj, czy żadne inne dźwięki odtwarzane automatycznie przez ponad 3 sekundy nie zakłócają głównego komunikatu.
- **Wyciszanie audio:** Potwierdź, że zakłócające audio można wyciszyć lub wstrzymać bez użycia wzroku.
- **Kluczowe alerty:** Sprawdź, czy kluczowe alerty nadal są słyszalne nawet przy równoległym audio.
- **Źródła dźwięków:** Wymień źródło i czas trwania zakłócających dźwięków.
- **Strategie oddzielania:** Opisz strategie oddzielania kanałów, by utrzymać priorytet głosu dla użytkownika.

---

## C.5.1.3.11 C.5.1.3.11 Głośność odsłuchiwania treści prywatnych

### Procedure
['1. Sprawdź, czy istnieje przynajmniej jeden niewizualny tryb działania do kontroli głosu.']

### Evaluation
Inspekcja

### Checklist
- **Kontrola głośności:** Dla prywatnego odsłuchu zidentyfikuj niewizualną kontrolę głośności i sprawdź, czy można nią operować bez użycia wzroku.
- **Informacje percepcyjne:** Potwierdź, że kontrolka daje percepcyjne informacje o aktualnym poziomie (np. kliknięcia, wibracje, dźwięki).
- **Mechanizmy regulacji:** Opisz gesty, przyciski lub inne mechanizmy regulacji.
- **Zastosowanie zmian:** Sprawdź, czy zmiana głośności jest stosowana od razu dla bieżącej sesji.
- **Problemy z regulacją:** Zanotuj wszelkie problemy uniemożliwiające podniesienie lub obniżenie poziomu dźwięku.

---

## C.5.1.3.12 C.5.1.3.12 Głośność głośnika

### Procedure
['1. Sprawdź, czy jest dostępna niewizualna kontrola zwiększania głośności.', '2. Sprawdź, czy jest możliwe wzmocnienie do poziomu przynajmniej 65 dBA (–29 dBPaA).']

### Evaluation
Inspekcja i pomiar

### Checklist
- **Regulacja głośności:** Jeśli audio jest dostarczane przez głośniki, potwierdź istnienie możliwej do obsługi bez użycia wzroku regulacji, która umożliwia wzmocnienie do co najmniej 65 dBA.
- **Wskazanie progu:** Opisz, w jaki sposób kontrola wskazuje osiągnięcie progu 65 dBA.
- **Hałas otoczenia:** Zaznacz, gdy hałas otoczenia wymaga większego wzmocnienia niż minimum (uwaga).
- **Metoda pomiaru:** Udokumentuj metodę pomiaru dBA oraz sposób raportowania wartości użytkownikowi.
- **Ograniczenia głośności:** Zanotuj sytuacje, w których nie można osiągnąć wymaganego poziomu głośności.
- **Uwaga:** W hałaśliwych środowiskach 65 dBA może nie być wystarczające.

---

## C.5.1.3.13 C.5.1.3.13 Przywracanie głośności

### Procedure
['1. Sprawdź, czy funkcja do automatycznego resetowania głośności do poziomu 65 dBA lub niższego jest wywoływana po każdym użyciu.']

### Evaluation
Inspekcja i pomiar

### Checklist
- **Funkcja resetu:** Potwierdź, że po każdym użyciu działa funkcja resetująca głośność do 65 dBA lub mniej, chyba że TIK jest dedykowane jednemu użytkownikowi.
- **Opcja wyłączenia:** Jeśli dostępna jest opcja wyłączenia resetu na potrzeby pojedynczego użytkownika, opisz sposób jej aktywacji.
- **Typ resetu:** Zapisz, czy reset jest automatyczny, czy wymaga aktywacji ręcznej.
- **Test resetu:** Przetestuj reset po ustawieniu maksymalnej głośności, aby upewnić się, że przywraca domyślny próg dźwięku.
- **Wyjątki resetu:** Zanotuj przypadki, gdy reset nie działa z powodu dedykowanego trybu.
- **Uwaga:** TIK może zapewniać funkcję wyłączenia funkcji resetowania głośności, aby umożliwić spełnienie wyjątku dla pojedynczego użytkownika.

---

## C.5.1.3.14 C.5.1.3.14 Języki mówione

### Procedure
['1. Sprawdź, czy wyjście mowy jest w\xa0tym samym języku co dostarczona wyświetlana treść.']

### Evaluation
Test

### Checklist
- **Zgodność języka:** Zweryfikuj, czy wyjście mowy występuje w tym samym języku co prezentowane treści, z wyjątkami wymienionymi w klauzuli.
- **Wyjątki językowe:** Udokumentuj wyjątki dla nazw własnych, terminów technicznych, niezdefiniowanych języków oraz elementów przejętych do otaczającego tekstu.
- **Obsługa zewnętrznych treści:** Jeśli treść pochodzi z zewnętrznego źródła nieobsługiwanego przez syntezator, zapisz obsługiwane języki i braki.
- **Wybór języka:** Potwierdź, że wybór języka jest dostępny przez kanały niewizualne lub że użytkownik może go ręcznie zmienić.
- **Niezgodności językowe:** Zanotuj przypadki, gdy mowa nie odpowiada językowi widocznego tekstu bez uzasadnionej podstawy.

---

## C.5.1.3.15 C.5.1.3.15 Niewizualna identyfikacja błędu

### Procedure
['1. Sprawdź, czy wyjście mowy wykrywa, że element jest błędny.', '2. Sprawdź, czy wyjście mowy opisuje element, który jest błędny.']

### Evaluation
Test

### Checklist
- **Identyfikacja błędu:** Podczas wykrycia błędu walidacji, mowa powinna jednoznacznie wskazać i opisać element z błędem.
- **Opis komunikatu:** Zapisz, jak komunikat identyfikuje pole lub kontrolkę bez odniesienia do koloru czy lokalizacji.
- **Czas pojawienia:** Potwierdź, że informacja pojawia się natychmiast po wykryciu błędu.
- **Wskazówki korekty:** Sprawdź, czy komunikat zawiera wskazówki dotyczące korekty lub nawigacji.
- **Braki opisów:** Zanotuj wszelkie stany błędów, które nie są opisane werbalnie.

---

## C.5.1.3.16 C.5.1.3.16 Pokwitowania, bilety i dane wyjściowe transakcji

### Procedure
['1. Sprawdź, czy dostarczane wyjście mowy zawiera wszystkie informacje niezbędne do zakończenia lub zweryfikowania transakcji.']

### Evaluation
Test

### Checklist
- **Zawartość mowy:** Dla pokwitowań, biletów i innych wyjść transakcyjnych upewnij się, że mowa zawiera wszystkie informacje niezbędne do dokończenia lub weryfikacji transakcji.
- **Niezależność od druku:** Potwierdź, że maszyny biletowe nie wymagają drukowanych rozkładów czy map, jeśli mowa jest dostępna.
- **Element systemu:** Zanotuj, który element systemu TIK udostępnia wyjście mowy (np. samo urządzenie, system zewnętrzny).
- **Uruchamianie mowy:** Opisz sposób uruchamiania mowy (automatycznie, przyciskiem, menu).
- **Brakujące dane:** Wskaż brakujące dane, które powinny być odczytane.
- **Uwaga:** Wyjście mowy może być zapewnione przez dowolny element TIK.

---

## C.5.1.4 C.5.1.4 Funkcjonalności uniemożliwiające powiększanie tekstu

### Procedure
['1. Zmierzyć wysokość wielkiej litery H.', '2. Sprawdź, czy odpowiada ona kątowi co najmniej 0,7 stopnia przy określonej odległości widzenia.']

### Evaluation
Inspekcja i pomiar

### Checklist
- **Opis klauzuli:** Jeśli jakakolwiek funkcjonalność TIK jest zamknięta dla funkcji powiększania tekstu platformy lub technologii wspomagającej, TIK musi zapewnić tryb działania, w którym tekst i obrazy tekstowe niezbędne dla całej funkcjonalności są wyświetlane w taki sposób, że nieakcentowana wielka litera "H" obejmuje kąt co najmniej 0,7 stopnia przy odległości widzenia określonej przez dostawcę.
- **Wzór obliczeniowy:** Kąt obejmowany w stopniach można obliczyć ze wzoru: Ψ = (180 × H) / (π × D), gdzie ψ to kąt obejmowany w stopniach, H to wysokość tekstu, D to odległość widzenia, a D i H są wyrażone w tych samych jednostkach.
- **Uwaga 1:** Celem jest zapewnienie trybu działania, w którym tekst jest wystarczająco duży, aby mógł być używany przez większość użytkowników z niskim wzrokiem.
- **Uwaga 2:** Tabela 5.1 i Rysunek 1 ilustrują związek między maksymalną odległością widzenia a minimalną wysokością znaków przy określonym minimalnym kącie obejmowanym.
- **Tabela** Tabela 5.1: Związek między maksymalną projektową odległością widzenia a minimalną wysokością znaków przy granicy kąta obejmowanegoMinimalny kąt obejmowanyMaksymalna projektowa odległość widzeniaMinimalna wysokość znaków0,7 stopni100 mm1,2 mm200 mm2,4 mm250 mm3,1 mm300 mm3,7 mm350 mm4,3 mm400 mm4,9 mm450 mm5,5 mm500 mm6,1 mm550 mm6,7 mm600 mm7,3 mm
- **Ilustracja:**
- **Pomiar i obliczenie:** Zmierz wysokość wielkiej litery H i obliczyć kąt Ψ=(180×H)/(π×D), by potwierdzić wartość co najmniej 0,7 stopnia.
- **Porównanie z tabelą:** Porównaj wynik z Tabelą 5.1 i Rysunkiem 1, by ustalić minimalny rozmiar przy deklarowanej odległości widzenia.
- **Odległość widzenia:** Zanotuj odległość widzenia określoną przez dostawcę i sposób jej zastosowania w obliczeniu.
- **Wyświetlanie w trybie:** Upewnić się, że tryb działania wyświetla cały wymagany tekst i obrazy tekstowe w obliczonym rozmiarze.
- **Przypadki niezgodności:** Zanotuj przypadki, gdy kąt jest mniejszy niż 0,7 stopnia.

---

## C.5.1.5 C.5.1.5 Wyjście wizualne dla informacji dźwiękowych

### Procedure
['1. Sprawdź, czy informacje wizualne odpowiadają nagraniom sygnału dźwiękowego.']

### Evaluation
Inspekcja

### Checklist
- **Potwierdzenie równoważności:** Dla każdej potrzebnej informacji dźwiękowej potwierdź istnienie równoważnej informacji wizualnej (napisy, transkrypcja).
- **Zawartość informacji:** Upewnij się, że informacja wizualna oddaje czas, tożsamość nadawcy i kontekst wydarzenia.
- **Synchronizacja:** Opisz synchronizację pomiędzy kanałem audio a wizualnym.
- **Aktywacja:** Zanotuj, czy wizualizacje pojawiają się automatycznie czy wymagają ręcznej aktywacji.
- **Braki:** Wymień elementy audio bez odpowiednika wizualnego lub wymagające uzupełnienia.
- **Uwaga:** Ta informacja wizualna może mieć formę napisów lub transkrypcji tekstowej.

---

## C.5.1.6.1 C.5.1.6.1 Funkcjonalność zamknięta

### Procedure
['1. Sprawdź, czy wszystkie funkcjonalności można obsługiwać bez użycia wzroku.']

### Evaluation
Inspekcja

### Checklist
- **Sprawdzenie obsługi:** Sprawdź, czy wszystkie funkcje zamknięte na klawiatury/interfejsy klawiaturowe da się obsługiwać metodą wspierającą konkretne potrzeby.
- **Wejścia niewizualne:** Udokumentuj wejścia niewizualne (np. dotyk, gesty, polecenia głosowe) umożliwiające korzystanie z funkcji.
- **Skróty klawiaturowe:** Potwierdź, że skróty klawiaturowe nie wymagają patrzenia na ekran.
- **Spójność sterowań:** Zapisz, czy te same sterowania działają spójnie w różnych trybach funkcjonalności.
- **Czynności wymagające wzroku:** Zanotuj czynności nadal wymagające wsparcia wzroku.

---

## C.5.1.6.2 C.5.1.6.2 Fokus

### Procedure
['1. Sprawdź, czy istnieje możliwość usunięcia fokusu z\xa0elementu za pomocą tego samego mechanizmu.']

### Evaluation
Inspekcja

### Checklist
- **Usuwanie fokusu:** Gdy fokus może być przeniesiony na element interfejsu, upewnij się, że ten sam mechanizm pozwala go stamtąd usunąć, zapobiegając pułapkom fokusu.
- **Test ruchu fokusu:** Przetestuj ruch fokusa w obu kierunkach i zanotuj użyty klawisz lub gest.
- **Opuszczenie elementu:** Sprawdź, czy opuszczenie elementu nie wymaga dodatkowego kroku zależnego od wzroku.
- **Pułapki fokusa:** Zanotuj występujące pułapki fokusa lub niespójne zachowanie.
- **Kontekst testowania:** Opisz kontekst testowania (np. modalne okno, formularz).

---

## C.5.1.7 C.5.1.7 Dostęp bez użycia mowy

### Procedure
['1. Sprawdź, czy zamknięte funkcje można aktywować za pomocą alternatywnego mechanizmu wprowadzania, który nie wymaga posługiwania się mową.']

### Evaluation
Inspekcja

### Checklist
- **Funkcje wymagające mowy:** Wymień funkcje wymagające mowy i potwierdź, że istnieje alternatywna metoda wprowadzania bez użycia głosu.
- **Uruchomienie alternatywy:** Udokumentuj sposób uruchomienia alternatywy oraz zakres jej działania.
- **Test ścieżki alternatywnej:** Przetestuj ścieżkę alternatywną od początku do końca, by potwierdzić zakończenie zadania.
- **Elementy dostępne tylko głosowo:** Zanotuj elementy nadal dostępne tylko głosowo.
- **Ustawienia domyślne:** Zapisz ustawienia, które domyślnie kierują użytkownika do kanału mówionego.

---

## C.5.2 C.5.2 Aktywacja funkcji dostępności

### Procedure
['1. Sprawdź, czy można aktywować te funkcje dostępności, nie korzystając z\xa0metody, która nie uwzględnia tych potrzeb.']

### Evaluation
Inspekcja

### Checklist
- **Lista funkcji dostępności:** Zidentyfikuj wszystkie dokumentowane funkcje dostępności i upewnij się, że da się je aktywować metodą wspierającą konkretne potrzeby.
- **Ścieżki aktywacji:** Opisz ścieżki aktywacji (menu, przycisk, skrót, głosowe).
- **Przepływ użytkownika:** Sprawdź, czy aktywacja funkcji dostępności nie przerywa normalnego przepływu pracy użytkownika ani nie wymusza niepożądanych zmian w interakcji.
- **Zależności:** Zapisz zależności od innych technologii lub urządzeń pomocniczych.
- **Informacje dla użytkownika:** Zanotuj, czy system informuje użytkownika, gdy dana funkcja jest potrzebna.

---

## C.5.3 C.5.3 Biometria (rozpoznawanie cech fizycznych)

### Procedure
['1. Sprawdź, czy rozpoznawanie użytkownika można przeprowadzić za pomocą więcej niż jednej metody (np. kod PIN zamiast odcisku palca).']

### Evaluation
Test

### Checklist
- **Wymaganie alternatywy:** Jeśli urządzenie używa cech fizycznych (biometrii) do rozpoznawania użytkownika, upewnij się, że nie jest to jedyny sposób dostępu.
- **Dokumentacja alternatywy:** Udokumentuj alternatywną metodę (inną cechę fizyczną lub np. kod/hasło).
- **Sprawdzenie wymagań:** Potwierdź, że alternatywna metoda pozwala na pełną obsługę bez tworzenia barier.
- **Zachowanie przy awarii:** Sprawdź, jak system się zachowuje, gdy rozpoznawanie cech fizycznych (biometria) nie zadziała (np. brudny palec).
- **Testowane cechy:** Zanotuj, które cechy fizyczne zostały przetestowane i jaka alternatywa jest dostępna.
- **Uwaga 1:** Alternatywne metody rozpoznawania użytkownika mogą polegać na innych cechach fizycznych lub na wpisaniu kodu.
- **Uwaga 2:** Zapewnienie różnych metod (np. odciski palców, skan oka, głos, twarz) zwiększa szansę, że osoby z różnymi potrzebami będą mogły skorzystać z urządzenia.

---

## C.5.4 C.5.4 Zachowanie informacji o dostępności podczas konwersji

### Procedure
['1. Sprawdź, czy niezastrzeżone informacje dotyczące dostępności są zachowane po konwersji w\xa0TIK informacji lub komunikacji.']

### Evaluation
Inspekcja

### Checklist
- **Zachowanie informacji:** Upewnij się, że niezastrzeżone informacje o dostępności są zachowywane podczas konwersji informacji lub komunikacji.
- **Formaty i dane:** Udokumentuj format źródłowy, format docelowy oraz przenoszone dane dostępnościowe.
- **Możliwości formatu:** Sprawdź, czy format docelowy może przechować odpowiedniki (tekst alternatywny, napisy, transkrypcje).
- **Weryfikacja wyniku:** Przejrzyj logi lub wynik konwersji, by potwierdzić brak utraty danych.
- **Problemy z formatami:** Zanotuj formaty niedające się udokumentować i sposób radzenia sobie z takimi sytuacjami.

---

## C.5.5.1 C.5.5.1 Środki obsługi

### Procedure
['1. Sprawdź, czy istnieje dostępny alternatywny sposób, który nie wymaga zastosowania takich działań.']

### Evaluation
Test

### Checklist
- **Alternatywy dla ruchów:** Jeśli TIK posiada części obsługiwane wymagające chwytu, ściskania lub skręcania nadgarstka, sprawdź, czy są dostępne alternatywy bez tych ruchów.
- **Dokumentacja alternatyw:** Dokumentuj alternatywne środki (np. większe przyciski, gesty, głos).
- **Test alternatywy:** Przetestuj, czy alternatywa rzeczywiście pozwala wykonać tę samą czynność.
- **Wymagania wzrokowe:** Zapisz, czy alternatywa wymaga uprzedniego przygotowania wzrokowego.
- **Cechy konstrukcyjne:** Zanotuj cechy konstrukcyjne redukujące obciążenie nadgarstka.

---

## C.5.5.2 C.5.5.2 Rozpoznawalność części obsługiwanych

### Procedure
['1. Określ, czy istnieje sposób na rozpoznanie każdej części, którą można obsługiwać w\xa0sposób niewizualny.', '2. Sprawdź, czy działanie związane z\xa0częścią obsługiwaną nie zostało wykonane z\xa0użyciem środków do rozpoznania każdej części obsługiwanej w\xa0kroku 1.']

### Evaluation
Test

### Checklist
- **Rozpoznawalność części:** Dla każdej części obsługiwanej sprawdź, czy użytkownik może ją rozpoznać bez względu na wzrok.
- **Wskazówki niewizualne:** Wymień wskazówki dotykowe, dźwiękowe lub inne, które pozwalają na identyfikację przed wykonaniem działania.
- **Rozpoznanie bez aktywacji:** Potwierdź, że rozpoznanie jest możliwe bez wykonywania funkcji.
- **Procedura obsługi:** Opisz procedurę odnalezienia danej części i jej aktywacji.
- **Części bez wskazówek:** Zanotuj części, które nie mają niewizualnych wskazówek.
- **Uwaga:** Jednym ze sposobów spełnienia tego wymagania jest uczynienie części operacyjnych rozpoznawalnymi dotykiem.

---

## C.5.6.1 C.5.6.1 Status dotyku lub dźwięku

### Procedure
['1. Sprawdź, czy istnieje przynajmniej jeden tryb działania, w\xa0którym stan wszystkich elementów sterujących blokujących lub przełączających można określić dotykowo, bez aktywowania elementu sterującego.', '2. Sprawdź, czy istnieje przynajmniej jeden tryb działania, w\xa0którym stan wszystkich elementów sterujących blokujących lub przełączających można określić dźwiękiem, bez aktywowania elementu sterującego.']

### Evaluation
Inspekcja

### Checklist
- **Stan elementów:** Gdy TIK ma elementy blokujące lub przełączające widoczne dla użytkownika, sprawdź, czy ich stan można określić dotykiem lub dźwiękiem bez aktywowania elementu sterującego.
- **Test w różnych trybach:** Testuj różne tryby działania, by potwierdzić obecność dotykowych oraz dźwiękowych wskazówek.
- **Dokumentacja stanów:** Udokumentuj, jak stan obejmuje kontrolki dwustopniowe lub trzystopniowe (np. Caps Lock, głośność).
- **Niezależność od wzroku:** Upewnij się, że wskazówki nie bazują na kolorze ani podświetleniu.
- **Brakujące wskaźniki:** Zanotuj wskaźniki lub elementy bez wymaganych informacji.
- **Uwaga 1:** Elementy blokujące lub przełączające to te kontrolki, które mogą mieć tylko dwa lub trzy stany i zachowują swój stan podczas użytkowania.
- **Uwaga 2:** Przykładem elementu blokującego lub przełączającego jest klawisz "Caps Lock" na większości klawiatur. Innym przykładem jest przycisk głośności w automacie telefonicznym, który można ustawić na normalną, głośną lub bardzo głośną głośność.

---

## C.5.6.2 C.5.6.2 Status wizualny

### Procedure
['1. Sprawdź, czy opóźnienie między ponownymi wciśnięciami klawisza można ustawić co najmniej na 2 sekundy.', '2. Sprawdź, czy częstotliwość ponownego wciśnięcia klawiszy może zostać ustawiona na poziomie 2 sekund na znak.']

### Evaluation
Inspekcja

### Checklist
- **Status wizualny:** Gdy status blokady lub przełącznika jest prezentowany w sposób niewizualny, sprawdź, czy ten status można także zobaczyć gdy kontrolka jest pokazana.
- **Opis wskaźnika:** Opisz wizualny wskaźnik (np. dioda) i jego sposób działania.
- **Dostępność wskaźnika:** Potwierdź, że wskaźnik jest zawsze dostępny, gdy kontrolka jest prezentowana.
- **Niezależność od aktywacji:** Sprawdź, czy wskaźnik nie wymaga uruchamiania kontrolki.
- **Brakujące informacje:** Zanotuj przypadki, gdy wizualna informacja jest nieobecna lub trudna do odczytania.
- **Uwaga 1:** Elementy blokujące lub przełączające to te kontrolki, które mogą mieć tylko dwa lub trzy stany i zachowują swój stan podczas użytkowania.
- **Uwaga 2:** Przykładem elementu blokującego lub przełączającego jest klawisz "Caps Lock" na większości klawiatur. Przykładem uczynienia statusu kontrolki rozpoznawalnym jest wizualny wskaźnik statusu na klawiaturze.

---

## C.5.7 C.5.7 Ponowne wciśnięcie klawisza

### Procedure
['1. Sprawdź, czy opóźnienie między ponownymi wciśnięciami klawisza można ustawić co najmniej na 2 sekundy.', '2. Sprawdź, czy częstotliwość ponownego wciśnięcia klawiszy może zostać ustawiona na poziomie 2 sekund na znak.']

### Evaluation
Test

### Checklist
- **Ustawienia opóźnienia:** Potwierdź, że opóźnienie przed ponownym wciśnięciem klawisza można ustawić na co najmniej 2 sekundy, a tempo powtarzania na 1 znak/2 sekundy.
- **Mechanizmy regulacji:** Udokumentuj mechanizmy lub menu, gdzie można regulować opóźnienie i tempo.
- **Test wartości:** Przetestuj kilka wartości, by zapewnić natychmiastowy efekt działania.
- **Weryfikacja ustawień:** Zapisz wybrane wartości i sposób ich weryfikacji.
- **Ograniczenia:** Zanotuj sytuacje, gdy nie można osiągnąć wymaganych minimalnych nastaw.

---

## C.5.8 C.5.8 Akceptacja dwukrotnego kliknięcia klawisza

### Procedure
['1. Sprawdź, czy istnieje mechanizm umożliwiający regulację opóźnienia po każdym naciśnięciu klawisza, podczas którego dodatkowe naciśnięcie klawisza nie zostanie zaakceptowane, jeśli jest ono identyczne z\xa0poprzednim naciśnięciem klawisza.', '2. Ustawić mechanizm na maksymalną wartość.', '3. Nacisnąć dowolny klawisz.', '4. Po 0,5 s nacisnąć ten sam klawisz co w\xa0kroku 3.', '5. Sprawdź, czy naciśnięcie w\xa0kroku 4 zostało zaakceptowane.']

### Evaluation
Test

### Checklist
- **Ustawienie opóźnienia:** Sprawdź, czy można ustawić opóźnienie po naciśnięciu klawisza tak, by identyczne powtórzenie w tym czasie nie było akceptowane.
- **Test maksymalnego opóźnienia:** Przy maksymalnym opóźnieniu naciśnij ten sam klawisz dwa razy (0,5 s) i potwierdź, że drugie naciśnięcie jest zaakceptowane dopiero po przekroczeniu opóźnienia.
- **Regulacja i sygnalizacja:** Opisz sposób regulacji opóźnienia i sygnalizacji jego osiągnięcia.
- **Test dla kilku klawiszy:** Przetestuj mechanizm dla kilku klawiszy.
- **Problemy z opóźnieniem:** Zanotuj przypadki, gdy opóźnienie nie działa lub nie można go ustawić.

---

## C.5.9 C.5.9 Jednoczesne czynności użytkownika

### Procedure
['1. Sprawdź, czy istnieje tryb pracy, który nie wymaga jednoczesnych czynności użytkownika.', '2. Określ w\xa0TIK wszystkie funkcje sterowane przez użytkowników.', '3. Sprawdź, czy każda funkcja, którą można sterować, może być obsługiwana za pomocą pojedynczego działania użytkownika.']

### Evaluation
Inspekcja

### Checklist
- **Tryby z jednoczesnymi czynnościami:** Wymień tryby wymagające jednoczesnych czynności i potwierdź, że istnieje alternatywny tryb bez takich wymagań.
- **Funkcje i odpowiedniki:** Dokumentuj funkcje obsługiwane przez jednoczesne działania i ich pojedyncze odpowiedniki.
- **Test trybów alternatywnych:** Przetestuj każdy tryb alternatywny, opisując kroki wykonania.
- **Opcje obsługi:** Sprawdź, czy każda funkcja ma opcję obsługi w pojedynczym działaniu lub sekwencji kroków.
- **Funkcje wymagające jednoczesnych działań:** Zanotuj funkcje, które nadal wymagają jednoczesnych działań.

---

## C.6.1 C.6.1 Szerokość pasma sygnału mowy

### Procedure
['1. Sprawdź, czy TIK może kodować i\xa0dekodować dźwięk w\xa0zakresie częstotliwości z\xa0górną granicą co najmniej 7 000 Hz.']

### Evaluation
Pomiar

### Checklist
- **Sprawdzenie zakresu częstotliwości:** Sprawdź, czy TIK może kodować i dekodować dźwięk w zakresie częstotliwości z górną granicą co najmniej 7 000 Hz.
- **Uwaga 1:** Dla celów interoperacyjności szeroko stosuje się obsługę zalecenia ITU-T G.722 (1988): "Kodowanie dźwięku 7 kHz w 64 kbit/s".
- **Uwaga 2:** W przypadku negocjacji kodeka czasami stosuje się inne standaryzowane kodeki, takie jak zalecenie ITU-T G.722.2, aby uniknąć transkodowania. Zalecenie ITU-T G.722.2 (2003): "Szerokopasmowe kodowanie mowy około 16 kbit/s przy użyciu adaptacyjnego szerokopasmowego AMR-WB".

---

## C.6.2.1.1 C.6.2.1.1 Komunikacja RTT

### Procedure
['1. Sprawdź, czy system TIK umożliwia użytkownikowi komunikację RTT z\xa0innym "referencyjnym" TIK.']

### Evaluation
Inspekcja

### Checklist
- **Sprawdzenie dostępności RTT:** Sprawdź, czy system TIK umożliwia użytkownikowi komunikację RTT z innym "referencyjnym" TIK.
- **Uwaga 1:** To wymaganie obejmuje produkty, które nie mają fizycznych możliwości wyświetlania lub wprowadzania tekstu, ale mają możliwość połączenia z urządzeniami, które takie możliwości posiadają. Obejmuje również pośrednie TIK między punktami końcowymi komunikacji.
- **Uwaga 2:** Nie ma wymagania dodawania: wyświetlacza sprzętowego, klawiatury sprzętowej lub sprzętu do obsługi możliwości połączenia z wyświetlaczem lub klawiaturą, przewodowo lub bezprzewodowo, jeśli taki sprzęt nie byłby normalnie dostarczany.
- **Uwaga 3:** Dla celów interoperacyjności szeroko stosuje się obsługę zalecenia ITU-T T.140 (1988): "Recommendation ITU-T T.140 (1988): "Protocol for multimedia application text conversation".

### Notes
- "Referencyjny terminal obsługujący komunikację RTT" to terminal specjalnie zaprojektowany do testowania urządzeń obsługujących komunikację RTT w sposób potwierdzający ich funkcjonalność i interoperacyjność. Takie terminale są zazwyczaj tworzone przez krajowe lub międzynarodowe instytucje normalizacyjne, tak aby wszystkie testy były przeprowadzane na spójnym "referencyjnym terminalu obsługującym komunikację RTT".

---

## C.6.2.1.2 C.6.2.1.2 Równoczesna komunikacja głosowa i tekstowa

### Procedure
['1. Sprawdź, czy TIK umożliwia jednoczesne korzystanie z\xa0połączeń głosowych i\xa0RTT przez połączenie jednego użytkownika.']

### Evaluation
Inspekcja

### Checklist
- **Sprawdzenie równoczesności:** Sprawdź, czy TIK umożliwia jednoczesne korzystanie z połączeń głosowych i RTT przez połączenie jednego użytkownika.
- **Uwaga 1:** W przypadku komunikacji wielostronnej, takiej jak system konferencyjny, dopuszcza się (ale nie wymaga ani niekoniecznie zaleca), aby RTT był obsługiwany w pojedynczym polu wyświetlania i aby konieczne było "przejmowanie głosu", aby uniknąć zamieszania (w taki sam sposób, jak przejście głosu jest wymagane dla tych, którzy prezentują/mówią głosem).
- **Uwaga 2:** W przypadku komunikacji wielostronnej najlepszą praktyką jest obsługa podnoszenia ręki dla użytkowników głosowych i RTT w taki sam sposób, aby użytkownicy głosowi i RTT znajdowali się w tej samej kolejce.
- **Uwaga 3:** W systemie konferencji wielostronnej, który ma czat jako jedną z funkcji - RTT (jak głos) byłby zwykle oddzielony od czatu, aby użycie RTT nie zakłócało czatu (tj. ludzie mogą wysyłać wiadomości w polu czatu, podczas gdy osoba prezentuje/mówi z RTT - w taki sam sposób, jak ludzie wysyłają wiadomości za pomocą funkcji czatu, podczas gdy inni mówią głosem). Użytkownicy RTT używają wtedy RTT do prezentowania i używają funkcji Czat do wysyłania wiadomości, podczas gdy inni prezentują (za pośrednictwem Głosu lub RTT).
- **Uwaga 4:** Dostępność głosu i RTT działających jednocześnie (i oddzielnie od czatu) może również pozwolić polu RTT na obsługę napisów tekstowych, gdy ktoś mówi (i dlatego nie jest używany do RTT, ponieważ nie jest to kolej użytkownika RTT do mówienia).
- **Uwaga 5:** Jeśli wymagane jest zarówno oprogramowanie po stronie serwera, jak i lokalne oprogramowanie sprzętowe i oprogramowanie do zapewnienia komunikacji głosowej, gdzie żadna część nie może obsługiwać komunikacji głosowej bez drugiej i są sprzedawane jako jednostka dla funkcji komunikacji głosowej, komponenty lokalne i po stronie serwera są uważane za pojedynczy produkt.

---

## C.6.2.2.1 C.6.2.2.1 Wyświetlacz umożliwiający rozróżnianie tekstu

### Procedure
['1. Testowana TIK jest podłączona do "referencyjnego terminala obsługującego RTT".', '2. Różne elementy TIK są w\xa0stanie działania (połączenie jest aktywne, a\xa0terminale we właściwym trybie RTT) i\xa0dwa terminale komunikują się ze sobą.', '3. Testowany system TIK wysyła krótki tekst.', '4. "Terminal referencyjny RTT" wysyła krótki tekst.', '5. Sprawdź na testowanej TIK , czy wyświetlany nadawany tekst wizualnie różni się od otrzymanego tekstu i\xa0jest od niego oddzielony.']

### Evaluation
Inspekcja

### Checklist
- **Rozróżnienie tekstu:** Sprawdź na testowanej TIK, czy wyświetlany nadawany tekst wizualnie różni się od otrzymanego tekstu i jest od niego oddzielony.
- **Uwaga:** Możliwość wyboru przez użytkownika wyświetlania tekstu wysyłanego i odbieranego w linii lub oddzielnie, z opcjami wyboru, pozwala użytkownikom wyświetlać RTT w formie, która najlepiej dla nich działa. Pozwoliłoby to użytkownikom Braille'a używać pojedynczego pola i przejmować głos oraz mieć tekst pojawiający się w sekwencyjny sposób, którego mogą potrzebować lub preferować.

### Notes
- "Referencyjny terminal obsługujący komunikację RTT" to terminal specjalnie zaprojektowany do testowania urządzeń obsługujących komunikację RTT w sposób potwierdzający ich funkcjonalność i interoperacyjność. Takie terminale są zazwyczaj tworzone przez krajowe lub międzynarodowe instytucje normalizacyjne, tak aby wszystkie testy były przeprowadzane na spójnym "referencyjnym terminalu obsługującym komunikację RTT".

---

## C.6.2.2.2 C.6.2.2.2 Możliwe do określenia programowo kierunku nadawania i odbioru

### Procedure
['1. Testowana TIK jest podłączona do "referencyjnego terminala obsługującego RTT".', '2. Różne elementy TIK są w\xa0stanie działania (połączenie jest aktywne, a\xa0terminale we właściwym trybie RTT) i\xa0dwa terminale komunikują się ze sobą.', '3. Testowany system TIK wysyła krótki tekst.', '4. "Terminal referencyjny RTT" wysyła krótki tekst.', '5. Sprawdź, czy kierunek nadawania/odbioru przesyłanego tekstu jest możliwy do określenia programowo.']

### Evaluation
Inspekcja

### Checklist
- **Określenie kierunku:** Sprawdź, czy kierunek nadawania/odbioru przesyłanego tekstu jest możliwy do określenia programowo.
- **Uwaga:** Umożliwia to czytnikom ekranu rozróżnienie między tekstem przychodzącym a wychodzącym podczas używania funkcjonalności RTT.

### Notes
- "Referencyjny terminal obsługujący komunikację RTT" to terminal specjalnie zaprojektowany do testowania urządzeń obsługujących komunikację RTT w sposób potwierdzający ich funkcjonalność i interoperacyjność. Takie terminale są zazwyczaj tworzone przez krajowe lub międzynarodowe instytucje normalizacyjne, tak aby wszystkie testy były przeprowadzane na spójnym "referencyjnym terminalu obsługującym komunikację RTT".

---

## C.6.2.2.3 C.6.2.2.3 Identyfikacja mówcy

### Procedure
['1. Testowana TIK jest podłączona do "referencyjnego terminala obsługującego RTT".', '2. RTT jest wysyłana z\xa0"referencyjnego terminala".', '3. Sprawdź na podstawie obserwacji, czy testowana TIK umożliwia identyfikację mówcy dla tekstu przychodzącego w\xa0trybie RTT.']

### Evaluation
Inspekcja

### Checklist
- **Identyfikacja mówcy dla RTT:** Sprawdź na podstawie obserwacji, czy testowana TIK umożliwia identyfikację mówcy dla tekstu przychodzącego w trybie RTT.
- **Uwaga:** Jest to konieczne, aby zarówno uczestnicy głosowi, jak i RTT wiedzieli, kto obecnie komunikuje się, czy to w RTT, czy głosem.

### Notes
- "Referencyjny terminal obsługujący komunikację RTT" to terminal specjalnie zaprojektowany do testowania urządzeń obsługujących komunikację RTT w sposób potwierdzający ich funkcjonalność i interoperacyjność. Takie terminale są zazwyczaj tworzone przez krajowe lub międzynarodowe instytucje normalizacyjne, tak aby wszystkie testy były przeprowadzane na spójnym "referencyjnym terminalu obsługującym komunikację RTT".

---

## C.6.2.2.4 C.6.2.2.4 Wizualny wskaźnik audio połączonego z RTT

### Procedure
['1. Testowana TIK jest połączona z\xa0inną TIK zapewniającą dwukierunkową komunikację głosową, która jest zgodna z\xa0komunikacją głosową w\xa0testowanej TIK.', '2. Osoba mówi do drugiej TIK.', '3. Sprawdź na podstawie obserwacji, czy istnieje wizualny wskaźnik aktywności audio w\xa0czasie rzeczywistym.']

### Evaluation
Inspekcja

### Checklist
- **Wizualny wskaźnik aktywności audio:** Sprawdź na podstawie obserwacji, czy istnieje wizualny wskaźnik aktywności audio w czasie rzeczywistym.
- **Uwaga 1:** Wizualny wskaźnik może być prostą pozycją znaku na wyświetlaczu, która miga włączona i wyłączona, aby odzwierciedlić aktywność audio, lub prezentacja informacji w inny sposób, który może być widoczny dla widzących użytkowników i przekazany użytkownikom głuchoniewidomym używającym wyświetlacza brajlowskiego.
- **Uwaga 2:** Bez tego wskazania osoba, która nie ma możliwości słyszenia, nie wie, kiedy ktoś mówi.

### Notes
- Zaleca się by wskaźnik migał w czasie rzeczywistym w sposób odzwierciedlający aktywność audio.

---

## C.6.2.3 C.6.2.3.d Interoperacyjność (d)

### Procedure
['1. Sprawdź, czy testowana TIK współdziała z\xa0"referencyjnym terminalem obsługującym komunikację RTT" dla nowego standardu RTT , który został wprowadzony do użytku.', '2. Sprawdź, czy nowy standard RTT jest obsługiwany przez wszystkie inne aktywne TIK , które obsługują komunikację głosową i\xa0RTT w\xa0tym samym środowisku.']

### Evaluation
Test

### Checklist
- **Wsparcie technologii RTT:** Sprawdź, czy testowana TIK współdziała z "referencyjnym terminalem obsługującym komunikację RTT" dla nowego standardu RTT , który został wprowadzony do użytku.
- **Uwaga 1:** W praktyce nowe standardy są wprowadzane jako alternatywny kodek/protokół, który jest obsługiwany obok istniejącego wspólnego standardu i używany, gdy wszystkie komponenty end-to-end go obsługują, podczas gdy rozwój technologii, w połączeniu z innymi przyczynami, w tym rozwojem społecznym i efektywnością kosztową, może sprawić, że inne staną się przestarzałe.
- **Uwaga 2:** Tam, gdzie do zapewnienia komunikacji głosowej używanych jest wiele technologii, może być potrzebnych wiele mechanizmów interoperacyjności, aby zapewnić, że wszyscy użytkownicy mogą korzystać z RTT.
- **Przykład:** System konferencyjny, który obsługuje komunikację głosową przez połączenie internetowe, może zapewniać RTT przez połączenie internetowe przy użyciu zastrzeżonej metody RTT (opcja c). Jednak niezależnie od tego, czy metoda RTT jest zastrzeżona czy nie zastrzeżona, jeśli system konferencyjny oferuje również komunikację telefoniczną, będzie również potrzebował obsługi opcji a lub b, aby zapewnić, że RTT jest obsługiwany przez połączenie telefoniczne.

---

## C.6.2.4 C.6.2.4 Czas reakcji RTT

### Procedure
['1. Wprowadź pojedyncze znaki na terminalu poddawanym testowi.', '2. Zanotuj moment, w którym wpis został zarejestrowany lokalnie na terminalu.', '3. Zanotuj moment, w którym ten tekst został przekazany do sieci lub platformy.', '4. Zmierz opóźnienie między czynnością wpisu a transmisją tekstu.']

### Evaluation
Pomiar

### Checklist
- **Czas reakcji RTT:** Oblicz opóźnienie między czynnością wpisu a transmisją tekstu i sprawdź, czy jest mniejsze lub równe 500 ms.
- **Uwaga 1:** Dla wprowadzania znak po znaku, "najmniejsza niezawodnie złożona jednostka wprowadzania tekstu" byłaby znakiem. Dla przewidywania słów byłaby słowem. Dla niektórych systemów rozpoznawania głosu - tekst może nie wyjść z oprogramowania rozpoznawania, dopóki nie zostanie wypowiedziane całe słowo (lub fraza). W tym przypadku najmniejsza niezawodnie złożona jednostka wprowadzania tekstu dostępna dla TIK byłaby słowem (lub frazą).
- **Uwaga 2:** Limit 500 ms pozwala na buforowanie znaków na ten okres przed transmisją, więc transmisja znak po znaku nie jest wymagana, chyba że znaki są generowane wolniej niż 1 na 500 ms.
- **Uwaga 3:** Opóźnienie 300 ms lub mniej daje użytkownikowi wrażenie działania w czasie rzeczywistym.

### Notes
- Identyfikowanie momentu wpisu może różnić się w zależności od rodzaju testowanej funkcjonalności RTT, dlatego należy przeanalizować odpowiedni sygnał lokalny lub status transmisji zgodnie z notatką do klauzuli.

---

## C.6.3 C.6.3 ID dzwoniącego

### Procedure
['1. Sprawdź, czy informacje dostarczane przez każdą funkcję są dostępne w\xa0formie tekstowej.', '2. Sprawdź, czy informacje dostarczane przez każdą funkcję są możliwe do określenia programowo']

### Evaluation
Test

### Checklist
- **ID dzwoniącego:** Sprawdź, czy informacje dostarczane przez każdą funkcję są dostępne w formie tekstowej i możliwe do określenia programowo.
- **Uwaga:** Ma to zapewnić, że informacje są dostępne dla technologii wspomagających.

---

## C.6.4 C.6.4 Alternatywy dla usług głosowych

### Procedure
['1. Sprawdź, czy TIK zapewnia użytkownikom środki dostępu do informacji bez używania słuchu czy mowy.', '2. Sprawdź, czy użytkownik może wykonać zadania dostępne w\xa0systemie bez używania słuchu czy mowy.']

### Evaluation
Inspekcja

### Checklist
- **Alternatywy dla usług głosowych:** Sprawdź, czy TIK zapewnia użytkownikom środki dostępu do informacji bez używania słuchu czy mowy i czy użytkownik może wykonać zadania dostępne w systemie bez używania słuchu czy mowy.
- **Uwaga 1:** Zadania, które obejmują zarówno obsługę interfejsu, jak i percepcję informacji, wymagałyby, aby zarówno interfejs, jak i informacje były dostępne bez użycia mowy lub słuchu.
- **Uwaga 2:** Rozwiązania zdolne do obsługi mediów audio, RTT i wideo mogłyby spełnić powyższe wymaganie.

---

## C.6.5.2 C.6.5.2 Rozdzielczość

### Procedure
['1. Sprawdź, czy rozdzielczość komunikacji wideo jest rozdzielczością QVGA lub lepszą.']

### Evaluation
Inspekcja

### Checklist
- **Rozdzielczość wideo:** Sprawdź, czy rozdzielczość komunikacji wideo jest rozdzielczością QVGA lub lepszą. Preferowana to co najmniej VGA.
- **Uwaga:** Ma to zapewnić, że komunikacja za pomocą języka migowego jest skuteczna.

---

## C.6.5.3 C.6.5.3 Częstotliwość wyświetlania klatek

### Procedure
['1. Sprawdź, czy częstotliwość odświeżania obrazu komunikacji wideo wynosi co najmniej 20 klatek na sekundę.']

### Evaluation
Inspekcja

### Checklist
- **Częstotliwość wyświetlania klatek:** Sprawdź, czy częstotliwość odświeżania obrazu komunikacji wideo wynosi co najmniej 20 klatek na sekundę (lub więcej - preferowana wartość to co najmniej 30 klatek na sekundę).
- **Uwaga:** Ma to zapewnić, że komunikacja za pomocą języka migowego jest skuteczna.

---

## C.6.5.4 C.6.5.4 Synchronizacja dźwięku i obrazu

### Procedure
['1. Sprawdź, czy różnica w\xa0czasie między prezentacją mowy i\xa0obrazu wideo dla użytkownika jest nie większa niż 100 ms.']

### Evaluation
Pomiar

### Checklist
- **Synchronizacja dźwięku i obrazu:** Sprawdź, czy różnica w czasie między prezentacją mowy i obrazu wideo dla użytkownika jest nie większa niż 100 ms.
- **Uwaga:** Badania pokazują, że jeśli dźwięk wyprzedza obraz, zrozumiałość cierpi znacznie bardziej niż w odwrotnej sytuacji.

---

## C.6.5.5 C.6.5.5 Wizualny wskaźnik audio połączonego z wideo

### Procedure
['1. Testowana TIK jest połączona z\xa0inną TIK zapewniającą dwukierunkową komunikację głosową, która jest zgodna z\xa0komunikacją głosową w\xa0testowanej TIK.', '2. Osoba mówi do drugiej TIK.', '3. Sprawdź na podstawie obserwacji, czy istnieje wizualny wskaźnik aktywności audio w\xa0czasie rzeczywistym.']

### Evaluation
Inspekcja

### Checklist
- **Wizualny wskaźnik aktywności audio:** Sprawdź na podstawie obserwacji, czy istnieje wizualny wskaźnik aktywności audio w czasie rzeczywistym.
- **Uwaga 1:** Wizualny wskaźnik może być prostą kropką wizualną lub diodą LED, lub innym typem wskaźnika włączony/wyłączony, który miga, aby odzwierciedlić aktywność audio.
- **Uwaga 2:** Bez tego wskazania osoba, która nie ma możliwości słyszenia, nie wie, kiedy ktoś mówi.

### Notes
- Zaleca się, by wskaźnik migał w czasie rzeczywistym w sposób odzwierciedlający aktywność audio.

---

## C.6.5.6 C.6.5.6 Identyfikacja mówcy podczas komunikacji za pomocą wideo (język migowy)

### Procedure
['1. Testowana TIK jest podłączona do kompatybilnej TIK obsługującej wideo, a\xa0osoba komunikuje się w\xa0języku migowym.', '2. Sprawdź na podstawie obserwacji, czy testowana TIK umożliwia użytkownikom języka migowego identyfikację mówcy.']

### Evaluation
Pomiar

### Checklist
- **Identyfikacja mówcy podczas wideo:** Sprawdź na podstawie obserwacji, czy testowana TIK umożliwia użytkownikom języka migowego identyfikację mówcy.
- **Uwaga 1:** Identyfikacja mówcy może być w tym samym miejscu co dla użytkowników głosowych w przypadku połączeń wielostronnych.
- **Uwaga 2:** Ten mechanizm może być wyzwalany ręcznie przez użytkownika lub automatycznie, gdzie jest to technicznie osiągalne.

---

## C.7.1.1 C.7.1.1 Odtwarzanie napisów

### Procedure
['1. Sprawdź, czy istnieje mechanizm wyświetlania napisów.']

### Evaluation
Inspekcja

### Checklist
- **Odtwarzanie napisów:** Sprawdź, czy istnieje mechanizm wyświetlania napisów.
- **Uwaga 1:** Napisy mogą zawierać informacje o czasie, kolorze i pozycji. Te dane napisów są niezbędne dla użytkowników napisów. Czas jest używany do synchronizacji napisów. Kolor może być używany do identyfikacji mówcy. Pozycja może być używana do unikania zasłaniania ważnych informacji.
- **Uwaga 2:** Jeśli urządzenie Braille'a jest podłączone, TIK powinna zapewnić opcję wyświetlania napisów na urządzeniu Braille'a.
- **Uwaga 3:** Klauzula 7.1.1 odnosi się do możliwości odtwarzacza wyświetlania napisów. Klauzule 9.1.2.2, 10.1.2.2 i 11.1.2.2 odnoszą się do dostarczania napisów w treści.

---

## C.7.1.2 C.7.1.2 Synchronizacja napisów

### Procedure
['1. Sprawdź, czy mechanizm wyświetlania napisów zachowuje synchronizację między dźwiękiem a\xa0odpowiednimi napisami w\xa0ciągu jednej dziesiątej sekundy od sygnatury czasowej napisu lub czy zapewnia dostępność napisu dla odtwarzacza w\xa0przypadku napisów na żywo.']

### Evaluation
Inspekcja

### Checklist
- **Synchronizacja napisów:** Sprawdź, czy mechanizm wyświetlania napisów zachowuje synchronizację między dźwiękiem a odpowiednimi napisami.
- **Uwaga:** Dla napisów w nagranym materiale: w ciągu 100 ms od znacznika czasu napisu. Dla napisów w materiale na żywo: w ciągu 100 ms od dostępności napisu dla odtwarzacza.

---

## C.7.1.3 C.7.1.3 Zachowanie zasad tworzenia napisów

### Procedure
['1. Sprawdź, czy TIK zachowuje dane dotyczące napisów w\xa0taki sposób, aby można je było wyświetlić zgodnie z\xa0Rozdziałami 7.1.1 i\xa07.1.2.']

### Evaluation
Inspekcja

### Checklist
- **Zachowanie zasad tworzenia napisów:** Sprawdź, czy TIK zachowuje dane dotyczące napisów w taki sposób, aby można je było wyświetlić zgodnie z Rozdziałami 7.1.1 i 7.1.2.
- **Uwaga:** Dodatkowe aspekty prezentacyjne tekstu, takie jak pozycja na ekranie, kolory tekstu, styl tekstu i czcionki tekstu, mogą przekazywać znaczenie, na podstawie konwencji regionalnych. Zmiana tych aspektów prezentacyjnych może zmienić znaczenie i powinna być unikana, gdzie to możliwe.

---

## C.7.1.4 C.7.1.4 Cechy napisów

### Procedure
['1. Sprawdź, czy TIK zapewnia użytkownikowi możliwość dostosowania wyświetlanych cech napisów do indywidualnych wymagań.']

### Evaluation
Inspekcja

### Checklist
- **Cechy napisów:** Sprawdź, czy TIK zapewnia sposób dla użytkownika na dostosowanie wyświetlanych cech napisów do indywidualnych wymagań, z wyjątkiem przypadków, gdy napisy są wyświetlane jako niemodyfikowalne znaki.
- **Uwaga 1:** Definiowanie koloru tła i pierwszego planu napisów, typu czcionki, rozmiaru, przezroczystości tła napisów oraz konturu lub obramowania czcionek może przyczynić się do spełnienia tego wymagania.
- **Uwaga 2:** Napisy, które są obrazami bitmapowymi, są przykładami niemodyfikowalnych znaków.

---

## C.7.1.5 C.7.1.5 Odczytywane napisy

### Procedure
['1. Sprawdź, czy istnieje tryb pracy zapewniający przedstawianie dostępnych napisów w\xa0formie mówionej.']

### Evaluation
Inspekcja

### Checklist
- **Odczytywane napisy:** Sprawdź, czy istnieje tryb pracy zapewniający przedstawianie dostępnych napisów w formie mówionej.
- **Uwaga 1:** Możliwość zarządzania zakresem wyjścia głosowego dla odczytywanych napisów niezależnie od ogólnego głosu TIK jest preferowana dla większości użytkowników. Jest to możliwe, gdy plik audio z odczytywanymi napisami jest dostarczany w oddzielnym torze audio i mieszany w urządzeniu użytkownika końcowego.
- **Uwaga 2:** Prezentacja oddzielnego toru audio z odczytywanymi napisami w synchronizacji z wyświetlanymi napisami/tytułami poprawia zrozumiałość napisów.
- **Uwaga 3:** Dostarczanie napisów/tytułów jako oddzielnych strumieni tekstowych ułatwia konwersję odpowiednich tekstów na audio.
- **Uwaga 4:** Napisy, które są obrazami bitmapowymi, są przykładami, gdzie zawartość wyświetlanych napisów nie będzie możliwa do określenia programowo.

---

## C.7.2.1 C.7.2.1 Odtwarzanie audiodeskrypcji

### Procedure
['1. Sprawdź, czy istnieje wyraźny i\xa0oddzielny mechanizm opisu dźwiękowego.', '2. Sprawdź, czy istnieje mechanizm wyboru i\xa0odtwarzania audiodeskrypcji na domyślnym kanale audio.', '3. Sprawdź, czy TIK umożliwia użytkownikowi wybór i\xa0odtwarzanie kilku ścieżek dźwiękowych.']

### Evaluation
Inspekcja

### Checklist
- **Odtwarzanie audiodeskrypcji:** Sprawdź, czy istnieje wyraźny i oddzielny mechanizm opisu dźwiękowego.
- **Wybór audiodeskrypcji:** Sprawdź, czy istnieje mechanizm wyboru i odtwarzania audiodeskrypcji na domyślnym kanale audio.
- **Wiele ścieżek dźwiękowych:** Sprawdź, czy TIK umożliwia użytkownikowi wybór i odtwarzanie kilku ścieżek dźwiękowych.
- **Uwaga 1:** W takich przypadkach zawartość wideo może zawierać audiodeskrypcję jako jedną z dostępnych ścieżek dźwiękowych.
- **Uwaga 2:** Audiodeskrypcje w mediach cyfrowych czasami zawierają informacje pozwalające na opisy dłuższe niż przerwy między dialogami. Wsparcie w odtwarzaczach mediów cyfrowych dla tej funkcji "rozszerzonej audiodeskrypcji" jest przydatne, szczególnie dla mediów cyfrowych oglądanych osobiście.

---

## C.7.2.2 C.7.2.2 Synchronizacja audiodeskrypcji

### Procedure
['1. Sprawdź, czy synchronizacja między treścią audio i\xa0wideo a\xa0odpowiadającą jej audiodeskrypcją jest zachowana.']

### Evaluation
Inspekcja

### Checklist
- **Synchronizacja audiodeskrypcji:** Sprawdź, czy synchronizacja między treścią audio i wideo a odpowiadającą jej audiodeskrypcją jest zachowana.

---

## C.7.2.3 C.7.2.3 Zachowywanie audiodeskrypcji

### Procedure
['1. Sprawdź, czy TIK zachowuje dane audiodeskrypcji w\xa0taki sposób, aby można je było odtwarzać zgodnie z\xa0Rozdziałami 7.2.1 i\xa07.2.2.']

### Evaluation
Inspekcja

### Checklist
- **Zachowywanie audiodeskrypcji:** Sprawdź, czy TIK zachowuje dane audiodeskrypcji w taki sposób, aby można je było odtwarzać zgodnie z Rozdziałami 7.2.1 i 7.2.2.

---

## C.7.3 C.7.3 Sterowanie napisami i audiodeskrypcją

### Procedure
['1. Sprawdź, czy elementy sterujące dla włączania napisów i\xa0audiodeskrypcji są udostępnione użytkownikowi na\xa0tym samym poziomie interakcji co\xa0podstawowe elementy sterujące multimediami.']

### Evaluation
Inspekcja

### Checklist
- **Sterowanie napisami i audiodeskrypcją:** Sprawdź, czy elementy sterujące dla włączania napisów i audiodeskrypcji są udostępnione użytkownikowi na tym samym poziomie interakcji co podstawowe elementy sterujące multimediami.
- **Uwaga 1:** Podstawowe elementy sterujące multimediami to zestaw elementów sterujących, które użytkownik najczęściej używa do kontrolowania mediów.
- **Uwaga 2:** Produkty, które mają ogólny sprzętowy regulator głośności, taki jak telefon, lub laptop, który może być skonfigurowany do wyświetlania wideo przez oprogramowanie, ale nie jest to jego głównym celem, nie potrzebują dedykowanych sprzętowych elementów sterujących dla napisów i opisów; jednak elementy sterujące oprogramowaniem lub sprzętowe elementy sterujące mapowane przez oprogramowanie muszą być na tym samym poziomie interakcji.
- **Uwaga 3:** Najlepszą praktyką dla TIK jest włączenie dodatkowych elementów sterujących umożliwiających użytkownikowi wybór, czy napisy i audiodeskrypcja są włączone domyślnie.

---

## C.8.1.2 C.8.1.2 Standardowe połączenia

### Procedure
['1. Sprawdź, czy jeden typ połączenia jest zgodny z\xa0niezastrzeżonym standardem branżowym.', '2. Sprawdź, czy jeden typ połączenia jest zgodny z\xa0niezastrzeżonym standardem branżowym po zastosowaniu adapterów dostępnych na rynku.']

### Evaluation
Inspekcja

### Checklist
- **Standardowe połączenia:** Sprawdź, czy jeden typ połączenia jest zgodny z niezastrzeżonym standardem branżowym.
- **Połączenia z adapterami:** Sprawdź, czy jeden typ połączenia jest zgodny z niezastrzeżonym standardem branżowym po zastosowaniu adapterów dostępnych na rynku.
- **Uwaga 1:** Celem tego wymagania jest zapewnienie kompatybilności z technologiami wspomagającymi poprzez wymaganie użycia standardowych połączeń w TIK.
- **Uwaga 2:** Słowo połączenie odnosi się zarówno do połączeń fizycznych, jak i bezprzewodowych.
- **Uwaga 3:** Aktualne przykłady niezastrzeżonych standardów branżowych to USB i Bluetooth.

### Notes
- Połączenia mogą być przewodowe lub bezprzewodowe.

---

## C.8.1.3 C.8.1.3 Kolor

### Procedure
['1. Sprawdź, czy jest dostępna alternatywna forma kodowania wizualnego.']

### Evaluation
Inspekcja

### Checklist
- **Kolor:** Sprawdź, czy jest dostępna alternatywna forma kodowania wizualnego.
- **Przykłady alternatyw:** Tekst, symbole, dźwięki lub inne formy wizualne, które nie polegają wyłącznie na kolorze.
- **Sprawdzenie:** Upewnij się, że informacje są dostępne dla użytkowników z zaburzeniami widzenia kolorów.

---

## C.8.2.1.1 C.8.2.1.1 Zakres głośności mowy

### Procedure
['1. Sprawdź, czy TIK ma certyfikat zgodności z\xa0ANSI/TIA-4965: "Receive volume control requirements for digital and analogue wireline terminals".', '2. Zmierzyć poziom głośności (w dB) sygnału mowy przy najniższym ustawieniu głośności.', '3. Zmierzyć poziom głośności (w dB) sygnału mowy przy najwyższym ustawieniu głośności.', '4. Sprawdź, czy zakres między wartościami 1 i\xa02 jest równy 18 dB lub większy.']

### Evaluation
Inspekcja na podstawie danych pomiarowych

### Checklist
- **Zakres głośności mowy:** Sprawdź, czy TIK zapewnia możliwość dostosowania poziomu wyjścia mowy w zakresie co najmniej 18 dB.
- **Uwaga:** Aparaty stacjonarne i zestawy słuchawkowe spełniające wymagania ANSI/TIA-4965 "Receive volume control requirements for digital and analogue wireline terminals" są uznawane za zgodne z tym wymaganiem.

---

## C.8.2.1.2 C.8.2.1.2 Stopniowa regulacja głośności

### Procedure
['1. Zmierz poziom głośności (w dB) sygnału mowy przy najniższym ustawieniu głośności.', '2. Sprawdź, czy jeden krok pośredni zapewnia poziom o\xa012 dB wyższy od najniższego poziomu głośności zmierzonego w\xa0kroku 1.']

### Evaluation
Inspekcja na podstawie danych pomiarowych

### Checklist
- **Stopniowa regulacja głośności:** Sprawdź, czy jeden krok pośredni zapewnia poziom o 12 dB wyższy od najniższego poziomu głośności.
- **Jak mierzyć:** Zmierz poziom głośności przy najniższym ustawieniu, następnie sprawdź poziom przy jednym kroku pośrednim.
- **Uwaga:** Zapewnia to stopniowe dostosowanie dla użytkowników z różnymi potrzebami słuchowymi.

---

## C.8.2.2.1 C.8.2.2.1 Urządzenia stacjonarne

### Procedure
['1. Sprawdź, czy TIK ma certyfikat zgodności z\xa0normą TIA-1083-A (2010): "Telecommunications; Telephone Terminal equipment; Handset magnetic measurement procedures and performance requirements".', '2. Sprawdź, czy wykonano pomiary zgodnie z ETSI ES 200 381‑1, które potwierdzają spełnienie wymagań tej normy.', '3. Sprawdź, czy TIK jest oznaczony symbolem "T" określonym w ETSI ETS 300 381.']

### Evaluation
Inspekcja na podstawie danych pomiarowych

### Checklist
- **Sprzężenie magnetyczne dla urządzeń stacjonarnych:** Sprawdź, czy TIK zapewnia sprzężenie magnetyczne spełniające wymagania ETSI ES 200 381-1 i nosi symbol "T" określony w ETSI ETS 300 381.
- **Uwaga 1:** TIK spełniający wymagania TIA-1083-A (2010): "Telecommunications; Telephone Terminal equipment; Handset magnetic measurement procedures and performance requirements" jest uznawany za zgodny z wymaganiami tej klauzuli.
- **Uwaga 2:** Sprzężenie magnetyczne jest również znane jako sprzężenie indukcyjne dla cewki T.

---

## C.8.2.2.2 C.8.2.2.2 Urządzenia do komunikacji bezprzewodowej

### Procedure
['1. Sprawdź, czy TIK ma certyfikat zgodności z\xa0ANSI/IEEE C63.19 (2011): "American National Standard Method of Measurement of Compatibility between Wireless Communication Devices and Hearing Aids".', '2. Sprawdź, czy TIK zapewniają środki sprzężenia magnetycznego z\xa0technologiami wspomagającymi słyszenie, zgodnymi z normą ETSI ES 200 381-2']

### Evaluation
Inspekcja na podstawie danych pomiarowych

### Checklist
- **Sprzężenie magnetyczne dla urządzeń bezprzewodowych:** Sprawdź, czy TIK zapewnia sprzężenie magnetyczne z technologiami wspomagającymi słyszenie, spełniające wymagania ETSI ES 200 381-2.
- **Uwaga:** TIK spełniający wymagania ANSI/IEEE C63.19 (2011): "American National Standard Method of Measurement of Compatibility between Wireless Communication Devices and Hearing Aids" jest uznawany za zgodny z wymaganiami tej klauzuli.

---

## C.8.3.1 C.8.3.1 Dostęp z przodu lub z boku

### Procedure
['1. Sprawdź, czy TIK spełnia wymagania Rozdziału 8.3.2.2.', '2. Sprawdź, czy TIK spełnia wymagania Rozdziału 8.3.2.3.']

### Evaluation
Inspekcja

### Checklist
- **Dostęp z przodu lub z boku:** Sprawdź, czy TIK spełnia wymagania Rozdziału 8.3.2 lub 8.3.3.
- **Uwaga 1:** Nie wyklucza to spełniania obu klauzul.
- **Uwaga 2:** Wymiary podane w klauzulach 407.8.3 i 407.8.2 Section 508 Rehabilitation Act, opublikowane w styczniu 2017 (Section 508 of the United States Rehabilitation Act of 1973, revised 2017), są identyczne z tymi podanymi w klauzulach 8.3.2 i 8.3.3 niniejszego dokumentu.
- **Uwaga 3:** Dostęp fizyczny do stacjonarnej TIK zależy od wymiarów zarówno TIK, jak i środowiska, w którym jest zainstalowana i obsługiwana. Klauzula 8.3 nie dotyczy dostępności środowiska fizycznego zewnętrznego wobec TIK.

---

## C.8.3.2.1 C.8.3.2.1 Nieograniczony dostęp z przodu, od góry

### Procedure
['1. Sprawdź, czy co najmniej jedna z\xa0każdego rodzaju części obsługiwanych jest umieszczona nie wyżej niż 1 200 mm (48 cali) nad podłogą w\xa0przestrzeni dostępu.']

### Evaluation
Inspekcja i pomiar

### Checklist
- **Nieograniczony dostęp z przodu, od góry:** Sprawdź, czy co najmniej jedna z każdego rodzaju części obsługiwanych jest umieszczona nie wyżej niż 1 220 mm (48 cali) nad podłogą w przestrzeni dostępu.
- **Wyjaśnienie:** Ten wymiar zapewnia dostępność dla użytkowników na wózkach inwalidzkich i osób stojących.
- **Jak mierzyć:** Zmierz od poziomu podłogi do najwyższego punktu części obsługiwanej.

---

## C.8.3.2.2 C.8.3.2.2 Nieograniczony dostęp z przodu, od dołu

### Procedure
['1. Sprawdź, czy co najmniej jedna z\xa0każdego rodzaju części obsługiwanych jest umieszczona nie niżej niż 380 mm (15 cali) nad podłogą w\xa0przestrzeni dostępu.']

### Evaluation
Inspekcja i pomiar

### Checklist
- **Nieograniczony dostęp z przodu, od dołu:** Sprawdź, czy co najmniej jedna z każdego rodzaju części obsługiwanych jest umieszczona nie niżej niż 380 mm (15 cali) nad podłogą w przestrzeni dostępu.
- 

---

## C.8.3.2.3.1 C.8.3.2.3.1 Wolna powierzchnia podłogi

### Procedure
['1. Sprawdź czy TIK zapewnia wolną powierzchnię podłogi, która rozciąga się pod elementem utrudniającym dostęp na odległość nie mniejszą niż wymagana głębokość zasięgu nad przeszkodą.']

### Evaluation
Inspekcja

### Checklist
- **Wolna powierzchnia podłogi:** Sprawdź czy TIK zapewnia wolną powierzchnię podłogi, która rozciąga się pod elementem utrudniającym dostęp na odległość nie mniejszą niż wymagana głębokość zasięgu nad przeszkodą.
- **Uwaga:** Zapewnienie, że będzie nieutrudniony "dostęp do dowolnego rodzaju części obsługiwanych" gwarantuje, że użytkownik będzie mógł uzyskać dostęp do co najmniej jednej z każdego rodzaju części obsługiwanych.

---

## C.8.3.2.3.2 C.8.3.2.3.2 Ograniczony (< 510 mm) dostęp z przodu

### Procedure
['1. Sprawdź, czy dostęp z przodu do wszystkich podstawowych części obsługiwanych nie znajduje się wyżej niż 1 220 mm (48 cali) nad powierzchnią kontaktu z TIK.']

### Evaluation
Inspekcja i pomiar

### Checklist
- **Ograniczony (< 510 mm) dostęp z przodu:** Sprawdź, czy dostęp z przodu do wszystkich podstawowych części obsługiwanych nie znajduje się wyżej niż 1 220 mm (48 cali) nad powierzchnią kontaktu z TIK.
- **Wyjaśnienie:** Dla przeszkód mniejszych niż 510 mm, części obsługiwane mogą być wyżej, ale nie przekraczając 1 220 mm.
- **Jak mierzyć:** Zmierz od powierzchni kontaktu (np. podłogi) do najwyższego punktu części obsługiwanej.

---

## C.8.3.2.3.3 C.8.3.2.3.3 Ograniczony (< 635 mm) dostęp z przodu

### Procedure
['1. Sprawdź, czy dostęp z przodu do wszystkich podstawowych części obsługiwanych nie znajduje się wyżej niż 1 120 mm (44 cali) nad powierzchnią kontaktu z TIK.']

### Evaluation
Inspekcja i pomiar

### Checklist
- **Ograniczony (< 635 mm) dostęp z przodu:** Sprawdź, czy dostęp z przodu do wszystkich podstawowych części obsługiwanych nie znajduje się wyżej niż 1 120 mm (44 cali) nad powierzchnią kontaktu z TIK.
- 

---

## C.8.3.2.4 C.8.3.2.4 Szerokość przestrzeni na kolana i stopy

### Procedure
['1. Sprawdź, czy szerokość przestrzeni na kolana jest większa niż 760 mm (30 cali).', '2. Sprawdź, czy szerokość przestrzeni na stopy jest większa niż 760 mm (30 cali).']

### Evaluation
Inspekcja i pomiar

### Checklist
- **Szerokość przestrzeni na kolana i stopy:** Sprawdź, czy szerokość przestrzeni na kolana i stopy jest większa niż 760 mm (30 cali).
- **Wyjaśnienie:** Zapewnia to wystarczającą przestrzeń dla użytkowników na wózkach inwalidzkich.
- **Jak mierzyć:** Zmierz szerokość dostępnej przestrzeni pod urządzeniem.

---

## C.8.3.2.5 C.8.3.2.5.c Przestrzeń na stopy (c)

### Procedure
['1. Sprawdź, czy przestrzeń na stopy nie wykracza więcej niż 150 mm (6 cali) poza wszelkie przeszkody znajdujące się na wysokości 230 mm (9 cali) nad podłogą.']

### Evaluation
Inspekcja i pomiar

### Checklist
- **Przestrzeń na stopy (c):** Sprawdź, czy przestrzeń na stopy nie wykracza więcej niż 150 mm (6 cali) poza wszelkie przeszkody na wysokości 230 mm (9 cali) nad podłogą.
- 

---

## C.8.3.2.6 C.8.3.2.6.d Przestrzeń na kolana (d)

### Procedure
['1. Sprawdź, czy redukcja głębokości przestrzeni jest nie większa niż 25 mm (1 cal) na każde 150 mm (6 cali) wysokości.']

### Evaluation
Inspekcja i pomiar

### Checklist
- **Przestrzeń na kolana (d):** Sprawdź, czy redukcja głębokości przestrzeni jest nie większa niż 25 mm (1 cal) na każde 150 mm (6 cali) wysokości.
- 

---

## C.8.3.3.1 C.8.3.3.1 Nieograniczony dostęp z boku, od góry

### Procedure
['1. Sprawdź, czy dostęp z\xa0boku, od góry do co najmniej jednego z\xa0każdego rodzaju części obsługiwanych nie znajduje się wyżej niż 1 220 mm (48 cali) nad podłogą w\xa0przestrzeni dostępu.']

### Evaluation
Inspekcja i pomiar

### Checklist
- **Nieograniczony dostęp z boku, od góry:** Sprawdź, czy dostęp z boku, od góry do co najmniej jednego z każdego rodzaju części obsługiwanych nie znajduje się wyżej niż 1 220 mm (48 cali) nad podłogą w przestrzeni dostępu.
- **Wyjaśnienie:** Dla dostępu z boku, części mogą być wyżej, ale nie przekraczając 1 220 mm.
- **Jak mierzyć:** Zmierz od poziomu podłogi do najwyższego punktu części obsługiwanej dostępnej z boku.

---

## C.8.3.3.2 C.8.3.3.2 Nieograniczony dostęp z boku, od dołu

### Procedure
['1. Sprawdź, czy dostęp z\xa0boku, od dołu do co najmniej jednego z\xa0każdego rodzaju części obsługiwanych nie znajduje się wyżej niż 380 mm (15 cali) nad podłogą w\xa0przestrzeni dostępu.']

### Evaluation
Inspekcja i pomiar

### Checklist
- **Nieograniczony dostęp z boku, od dołu:** Sprawdź, czy dostęp z boku, od dołu do co najmniej jednego z każdego rodzaju części obsługiwanych nie znajduje się niżej niż 380 mm (15 cali) nad podłogą w przestrzeni dostępu.
- 

---

## C.8.3.3.3.1 C.8.3.3.3.1 Ograniczony (< 255 mm) dostęp z boku

### Procedure
['1. Sprawdź, czy dostęp z\xa0boku, od góry do co najmniej jednego z\xa0każdego rodzaju części obsługiwanych nie znajduje się wyżej niż 1 220 mm (48 cali) nad podłogą w\xa0przestrzeni dostępu.']

### Evaluation
Inspekcja i pomiar

### Checklist
- **Ograniczony (< 255 mm) dostęp z boku:** Sprawdź, czy dostęp z boku, od góry do co najmniej jednego z każdego rodzaju części obsługiwanych nie znajduje się wyżej niż 1 220 mm (48 cali) nad podłogą w przestrzeni dostępu.
- **Wyjaśnienie:** Dla przeszkód mniejszych niż 255 mm, części mogą być wyżej, ale nie przekraczając 1 220 mm.
- **Jak mierzyć:** Zmierz od poziomu podłogi do najwyższego punktu części obsługiwanej dostępnej z boku.

---

## C.8.3.3.3.2 C.8.3.3.3.2 Ograniczony (< 610 mm) dostęp z boku

### Procedure
['1. Sprawdź, czy dostęp z\xa0boku, od góry do co najmniej jednego z\xa0każdego rodzaju części obsługiwanych nie znajduje się wyżej niż 1 170 mm (46 cali) nad podłogą w\xa0przestrzeni dostępu.']

### Evaluation
Inspekcja i pomiar

### Checklist
- **Ograniczony (< 610 mm) dostęp z boku:** Sprawdź, czy dostęp z boku, od góry do co najmniej jednego z każdego rodzaju części obsługiwanych nie znajduje się wyżej niż 1 170 mm (46 cali) nad podłogą w przestrzeni dostępu.
- 

---

## C.8.3.4.1 C.8.3.4.1 Zmiana poziomu

### Procedure
['1. Jeżeli zmiana poziomu jest spowodowana podjazdem, sprawdź, czy nachylenie jest mniejsze niż 1:48.', '2. Jeśli występuje pionowa zmiana poziomu podłogi, sprawdź, czy jest ona równa 6,4 mm lub mniejsza.', '3. Jeśli występuje pionowa lub nachylona zmiana poziomu podłogi, sprawdź, czy nachylenie nie jest większe niż 1:2.']

### Evaluation
Inspekcja i pomiar

### Checklist
- **Zmiana poziomu:** Sprawdź, czy zmiana poziomu podłogi jest nachylona z nachyleniem nie większym niż 1:48, lub pionowa ≤ 6,4 mm, lub ≤ 13 mm z nachyleniem ≤ 1:2.
- 
- Pionowa zmiana poziomu
- 
- Nachylona zmiana poziomu

---

## C.8.3.4.2 C.8.3.4.2 Pusta podłoga lub powierzchnia podłoża

### Procedure
['1. Sprawdź, czy powierzchnia podłogi ma wymiary wynoszące co najmniej 760 mm wzdłuż jednej krawędzi i\xa01 220 mm wzdłuż drugiej.']

### Evaluation
Inspekcja i pomiar

### Checklist
- **Pusta podłoga lub powierzchnia podłoża:** Sprawdź, czy powierzchnia podłogi ma wymiary wynoszące co najmniej 760 mm x 1 220 mm.
- 

---

## C.8.3.4.3.1 C.8.3.4.3.1 Postanowienia ogólne

### Procedure
['1. Sprawdź, czy jedna pełna strona przestrzeni jest wolna od przeszkód.']

### Evaluation
Inspekcja

### Checklist
- **Postanowienia ogólne:** Sprawdź, czy jedna pełna strona przestrzeni jest wolna od przeszkód.
- **Wyjaśnienie:** Zapewnia to dostępność dla użytkowników z różnych stron.
- **Jak sprawdzić:** Sprawdź wszystkie strony urządzenia pod kątem przeszkód.

---

## C.8.3.4.3.2 C.8.3.4.3.2 Podejście z przodu

### Procedure
['1. Sprawdź, czy szerokość niszy jest większa niż 915 mm.']

### Evaluation
Inspekcja i pomiar

### Checklist
- **Podejście z przodu:** Sprawdź, czy szerokość niszy jest większa niż 915 mm.
- 

---

## C.8.3.4.3.3 C.8.3.4.3.3 Dostęp równoległy

### Procedure
['1. Sprawdź, czy szerokość przestrzeni dostępu jest większa niż 1 525 mm.']

### Evaluation
Inspekcja i pomiar

### Checklist
- **Dostęp równoległy:** Sprawdź, czy szerokość przestrzeni dostępu jest większa niż 1 525 mm.
- 

---

## C.8.3.5 C.8.3.5 Widoczność

### Procedure
['1. Sprawdź, czy co najmniej jeden wyświetlacz każdego typu jest umieszczony w\xa0taki sposób, aby informacje na nim były czytelne z\xa0punktu znajdującego się 1 015 mm (40 cali) nad środkiem podłogi w\xa0obszarze roboczym.']

### Evaluation
Inspekcja i pomiar

### Checklist
- **Widoczność:** Sprawdź, czy co najmniej jeden wyświetlacz każdego typu jest umieszczony w taki sposób, aby informacje na nim były czytelne z punktu znajdującego się 1 015 mm (40 cali) nad środkiem podłogi w obszarze roboczym.
- **Uwaga:** Celem tego wymagania jest zapewnienie, że informacje na ekranie mogą być odczytane przez użytkowników z normalnym wzrokiem i odpowiednimi umiejętnościami językowymi, siedzących na wózku inwalidzkim.

---

## C.8.3.6 C.8.3.6 Instrukcja montażu

### Procedure
['1. Sprawdź, czy dostępna jest instrukcja montażu.', '2. Sprawdź, czy w\xa0instrukcji podano wskazówki dotyczące sposobu montażu TIK w\xa0sposób zapewniający zgodność wymiarów z\xa0wymaganiami zawartymi w\xa0Rozdziałach od 8.3.2 do 8.3.4.', '3. Sprawdź, czy w\xa0instrukcji podano, że zaleca się aby osoby zajmujące się montażem również brały pod uwagę obowiązujące wymagania dotyczące dostępności środowiska zbudowanego, które mają zastosowanie podczas montażu TIK .']

### Evaluation
Inspekcja i pomiar

### Checklist
- **Instrukcja montażu:** Sprawdź, czy dostępna jest instrukcja montażu z wskazówkami dotyczącymi zgodności wymiarów z Rozdziałami 8.3.2 do 8.3.5 oraz uwzględnieniem wymagań dostępności środowiska zbudowanego.
- **Uwaga:** Jeśli nie ma takich wymagań, instrukcje powinny wymagać, aby wymiary zainstalowanej TIK były zgodne z klauzulami 8.3.2 do 8.3.5 niniejszego dokumentu.

---

## C.8.4.1 C.8.4.1 Klawisze numeryczne

### Procedure
['1. Sprawdź, czy klawisz z\xa0cyfrą 5 różni się w\xa0dotyku od pozostałych klawiszy.']

### Evaluation
Inspekcja

### Checklist
- **Klawisze numeryczne:** Sprawdź, czy klawisz z cyfrą 5 różni się w dotyku od pozostałych klawiszy.
- **Jak sprawdzić:** Przesuń palcem po klawiszach, aby wyczuć różnicę w fakturze lub kształcie klawisza 5.
- **Znaczenie:** Ułatwia nawigację osobom niewidomym lub niedowidzącym.
- **Uwaga:** Rekomendacja ITU-T E.161 (2001): "Arrangement of digits, letters and symbols on telephones and other devices that can be used for gaining access to a telephone network". opisuje układ 12-przyciskowej klawiatury telefonicznej i zawiera dalsze szczegóły dotyczące formy znaczników dotykowych.

---

## C.8.4.2.1 C.8.4.2.1 Środki obsługi części mechanicznych

### Procedure
['1. Sprawdź, czy istnieje dostępny alternatywny sposób, który nie wymaga zastosowania takich działań.']

### Evaluation
Inspekcja

### Checklist
- **Środki obsługi części mechanicznych:** Sprawdź, czy istnieje dostępny alternatywny sposób, który nie wymaga zastosowania takich działań.
- **Przykłady alternatyw:** Przyciski naciskane płaską dłonią, ekrany dotykowe, kontrola głosowa lub inne metody nie wymagające chwytania, ściskania lub skręcania nadgarstka.
- **Sprawdzenie dostępności:** Upewnij się, że alternatywa jest równie wygodna i dostępna dla wszystkich użytkowników.

---

## C.8.4.2.2 C.8.4.2.2 Siła wymagana do obsługi części mechanicznych

### Procedure
['1. Sprawdź, czy istnieje alternatywny sposób sterowania wymagający użycia siły mniejszej niż 22,2 N.']

### Evaluation
Inspekcja i pomiar

### Checklist
- **Siła wymagana do obsługi części mechanicznych:** Sprawdź, czy istnieje alternatywny sposób sterowania wymagający użycia siły mniejszej niż 22,2 N.
- **Uwaga:** ISO 21542:2011 zaleca wartość między 2,5 a 5 niutonów.
- **Przykłady alternatyw:** Przyciski naciskane płaską dłonią, ekrany dotykowe, kontrola głosowa lub inne metody wymagające mniejszej siły.
- **Sprawdzenie dostępności:** Upewnij się, że alternatywa jest dostępna dla użytkowników z ograniczoną siłą mięśniową.

---

## C.8.4.3 C.8.4.3 Klucze, bilety i karty taryfowe

### Procedure
['1. Sprawdź, czy orientację kluczy, biletów lub kart taryfowych można wyczuć dotykiem.']

### Evaluation
Inspekcja i pomiar

### Checklist
- **Klucze, bilety i karty taryfowe:** Sprawdź, czy orientację kluczy, biletów lub kart taryfowych można wyczuć dotykiem.
- **Uwaga:** ETSI ETS 300 767 definiuje odpowiednie wskazania dotykowe dla kart plastikowych.

---

## C.8.5 C.8.5 Oznaczenia dotykowe w trybie mowy

### Procedure
['1. Sprawdź, czy jest dostępne wyczuwalne w\xa0dotyku wskazanie sposobu rozpoczęcia pracy w\xa0trybie mowy.']

### Evaluation
Inspekcja i pomiar

### Checklist
- **Oznaczenia dotykowe w trybie mowy:** Sprawdź, czy jest dostępne wyczuwalne w dotyku wskazanie sposobu rozpoczęcia pracy w trybie mowy.
- **Uwaga:** Wskazanie dotykowe może obejmować instrukcje Braille'a.
- **Przykłady oznaczeń:** Wypukłe symbole, tekst Braille'a, tekstury lub inne wyczuwalne wskazówki na urządzeniu.
- **Sprawdzenie dostępności:** Upewnij się, że oznaczenie jest łatwo wyczuwalne dla użytkowników niewidomych lub słabowidzących.

---

## C.9.1.1.1 C.9.1.1.1 Treść nietekstowa

### Procedure
['1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 1.1.1 Treść nietekstowa](https://www.w3.org/Translations/WCAG21-pl/#tresc-nietekstowa).']

### Evaluation
Inspekcja

### Checklist
- **Elementy graficzne (img):** Sprawdź, czy każdy element `<img>` przekazujący informację posiada atrybut `alt` z opisem tej informacji.
- **Grafiki dekoracyjne:** Sprawdź, czy elementy graficzne pełniące funkcję wyłącznie dekoracyjną mają pusty atrybut `alt=""` lub są ukryte przed czytnikami (np. `aria-hidden="true"`).
- **Linki graficzne:** Sprawdź, czy grafiki będące linkami mają tekst alternatywny opisujący cel linku lub funkcję przycisku, a nie wygląd obrazka.
- **CAPTCHA:** Jeśli występuje CAPTCHA, sprawdź, czy dostępna jest alternatywa dla osób niewidomych (np. CAPTCHA dźwiękowa) i czy cel zadania jest opisany.
- **Wykresy i diagramy:** Sprawdź, czy złożone grafiki (wykresy, schematy) mają krótki opis w `alt` oraz odesłanie do pełnego opisu tekstowego (np. w treści strony lub przez `aria-describedby`).
- **Multimedia:** Sprawdź, czy elementy audio i wideo mają tekstową alternatywę (np. tytuł, krótki opis) identyfikującą je dla użytkowników czytników ekranu.

---

## C.9.1.2.1 C.9.1.2.1 Tylko audio lub tylko wideo (nagranie)

### Procedure
['1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 1.2.1 Tylko audio lub tylko wideo (nagranie)](https://www.w3.org/Translations/WCAG21-pl/#tylko-audio-lub-tylko-wideo-nagranie).']

### Evaluation
Inspekcja

### Checklist
- **Tylko audio (nagranie):** Sprawdź, czy dla nagrań dźwiękowych (np. podcastów) dostępna jest transkrypcja tekstowa zawierająca wszystkie dialogi i istotne dźwięki.
- **Tylko wideo (nagranie):** Sprawdź, czy dla nagrań wideo bez dźwięku (np. animacji instruktażowych) dostępna jest alternatywa tekstowa lub ścieżka audio opisująca to, co dzieje się na ekranie.

---

## C.9.1.2.2 C.9.1.2.2 Napisy rozszerzone (nagranie)

### Procedure
['11. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 1.2.2 Napisy rozszerzone (nagranie)](https://www.w3.org/Translations/WCAG21-pl/#napisy-rozszerzone-nagranie).']

### Evaluation
Inspekcja

### Checklist
- **Napisy:** Sprawdź, czy wszystkie nagrania wideo z dźwiękiem (dialogi, istotne odgłosy) posiadają zsynchronizowane napisy dla niesłyszących.
- **Kompletność napisów:** Sprawdź, czy napisy zawierają nie tylko dialogi, ale także informacje o istotnych dźwiękach (np. [muzyka], [śmiech], [dzwonek do drzwi]).

---

## C.9.1.2.3 C.9.1.2.3 Audiodeskrypcja lub alternatywa tekstowa dla mediów (nagranie)

### Procedure
['1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 1.2.3 Audiodeskrypcja lub alternatywa tekstowa dla mediów (nagranie)](https://www.w3.org/Translations/WCAG21-pl/#audiodeskrypcja-lub-alternatywa-tekstowa-dla-mediow-nagranie).']

### Evaluation
Inspekcja

### Checklist
- **Audiodeskrypcja lub tekst:** Sprawdź, czy nagrania wideo posiadają audiodeskrypcję (dodatkową ścieżkę lektora opisującą obraz) LUB pełną alternatywę tekstową (transkrypcję opisową), która pozwala zrozumieć treść wizualną bez oglądania.

---

## C.9.1.2.4 C.9.1.2.4 Napisy rozszerzone (na żywo)

### Procedure
['1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 1.2.4 Napisy rozszerzone (na żywo)](https://www.w3.org/Translations/WCAG21-pl/#napisy-rozszerzone-na-zywo).']

### Evaluation
Inspekcja

### Checklist
- **Napisy na żywo:** Jeśli strona transmituje wideo na żywo z dźwiękiem, sprawdź, czy dostępne są napisy generowane w czasie rzeczywistym.

---

## C.9.1.2.5 C.9.1.2.5 Audiodeskrypcja (nagranie)

### Procedure
['1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 1.2.5 Audiodeskrypcja (nagranie)](https://www.w3.org/Translations/WCAG21-pl/#audiodeskrypcja-nagranie).']

### Evaluation
Inspekcja

### Checklist
- **Audiodeskrypcja:** Sprawdź, czy nagrania wideo posiadają audiodeskrypcję, jeśli informacje wizualne są kluczowe i nie wynikają ze ścieżki dźwiękowej (wymagane dla poziomu AA).

---

## C.9.1.3.1 C.9.1.3.1 Informacje i relacje

### Procedure
['1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 1.3.1 Informacje i\xa0relacje](https://www.w3.org/Translations/WCAG21-pl/#informacje-i-relacje).']

### Evaluation
Inspekcja

### Checklist
- **Nagłówki (h1-h6):** Sprawdź, czy nagłówki są oznaczone w kodzie (znaczniki `<h1>`-`<h6>`) i czy tworzą logiczną strukturę dokumentu (nie używaj nagłówków tylko do formatowania wyglądu).
- **Listy:** Sprawdź, czy listy (wypunktowane, numerowane) są oznaczone odpowiednimi znacznikami (`<ul>`, `<ol>`, `<dl>`), a nie są tylko wizualnie sformatowanym tekstem.
- **Tabele danych:** Sprawdź, czy tabele prezentujące dane mają poprawnie oznaczone nagłówki kolumn i wierszy (`<th>`) oraz czy są powiązane z komórkami danych.
- **Formularze:** Sprawdź, czy pola formularzy mają etykiety powiązane programowo (znacznik `<label>` z atrybutem `for` lub atrybuty ARIA), aby czytniki ekranu mogły je poprawnie zidentyfikować.
- **Znaczenie wizualne:** Sprawdź, czy relacje widoczne wizualnie (np. powiązanie opisu ze zdjęciem) są również odzwierciedlone w kodzie lub treści tekstowej.

---

## C.9.1.3.2 C.9.1.3.2 Zrozumiała kolejność

### Procedure
['1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 1.3.2 Zrozumiała kolejność](https://www.w3.org/Translations/WCAG21-pl/#zrozumia-a-kolejnosc).']

### Evaluation
Inspekcja

### Checklist
- **Kolejność odczytu:** Sprawdź, czy kolejność treści w kodzie HTML odpowiada logicznej kolejności wizualnej. Wyłącz style CSS i sprawdź, czy treść nadal ma sens.
- **Kolejność nawigacji:** Upewnij się, że nawigacja klawiaturą (Tab) podąża za logicznym układem strony.

---

## C.9.1.3.3 C.9.1.3.3 Właściwości zmysłowe

### Procedure
['1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 1.3.3 Właściwości zmysłowe](https://www.w3.org/Translations/WCAG21-pl/#w-asciwosci-zmys-owe).']

### Evaluation
Inspekcja

### Checklist
- **Instrukcje zmysłowe:** Sprawdź, czy instrukcje nie polegają wyłącznie na właściwościach zmysłowych, takich jak kształt, rozmiar, lokalizacja wizualna czy dźwięk (np. unikaj "kliknij zielony przycisk po prawej", użyj "kliknij zielony przycisk 'Zatwierdź' po prawej").

---

## C.9.1.3.4 C.9.1.3.4 Orientacja

### Procedure
['1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 1.3.4 Orientacja](https://www.w3.org/Translations/WCAG21-pl/#orientacja).']

### Evaluation
Inspekcja

### Checklist
- **Orientacja ekranu:** Sprawdź, czy strona nie wymusza jednej orientacji ekranu (poziomej lub pionowej), chyba że jest to niezbędne (np. pianino, czek bankowy). Treść powinna być dostępna w obu orientacjach.

---

## C.9.1.3.5 C.9.1.3.5 Określenie pożądanej wartości

### Procedure
['1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 1.3.5 Określenie pożądanej wartości](https://www.w3.org/Translations/WCAG21-pl/#okreslenie-pozadanej-wartosci).']

### Evaluation
Inspekcja

### Checklist
- **Autouzupełnianie (Autocomplete):** Sprawdź, czy pola formularzy zbierające dane o użytkowniku (np. imię, e-mail) mają poprawny atrybut `autocomplete`, pozwalający przeglądarce na automatyczne wypełnienie danych.

---

## C.9.1.4.1 C.9.1.4.1 Użycie koloru

### Procedure
['1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 1.4.1 Użycie koloru](https://www.w3.org/Translations/WCAG21-pl/#uzycie-koloru).']

### Evaluation
Inspekcja

### Checklist
- **Kolor jako jedyny wyróżnik:** Sprawdź, czy kolor nie jest jedynym sposobem przekazywania informacji (np. błędy w formularzu oznaczone tylko czerwoną ramką). Należy dodać ikonę lub tekst.
- **Linki w tekście:** Sprawdź, czy linki wewnątrz bloków tekstu są wyróżnione czymś więcej niż tylko kolorem (np. podkreśleniem) lub czy mają wystarczający kontrast względem otoczenia (3:1) i tła.

---

## C.9.1.4.2 C.9.1.4.2 Kontrola odtwarzania dźwięku

### Procedure
['1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 1.4.2 Kontrola odtwarzania dźwięku](https://www.w3.org/Translations/WCAG21-pl/#kontrola-odtwarzania-dzwieku).']

### Evaluation
Inspekcja

### Checklist
- **Automatyczne odtwarzanie:** Sprawdź, czy dźwięk odtwarzany automatycznie dłużej niż 3 sekundy ma mechanizm do jego zatrzymania lub wyciszenia.

---

## C.9.1.4.3 C.9.1.4.3 Kontrast (minimum)

### Procedure
['1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 1.4.3 Kontrast (minimum)](https://www.w3.org/Translations/WCAG21-pl/#kontrast-minimum).']

### Evaluation
Inspekcja

### Checklist
- **Kontrast tekstu:** Sprawdź, czy tekst zwykły ma kontrast do tła co najmniej 4.5:1.
- **Kontrast dużego tekstu:** Sprawdź, czy duży tekst (powyżej 18pt lub 14pt pogrubiony) ma kontrast co najmniej 3:1.
- **Tekst na obrazach:** Upewnij się, że tekst na grafikach również spełnia wymogi kontrastu.

---

## C.9.1.4.4 C.9.1.4.4 Zmiana rozmiaru tekstu

### Procedure
['1. TIK jest stroną internetową.', '1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu WCAG 2.1 – 1.4.4 Zmiana rozmiaru tekstu.']

### Evaluation
Inspekcja

### Checklist
- **Skalowanie tekstu:** Sprawdź, czy stronę można powiększyć do 200% (używając funkcji zoom przeglądarki) bez utraty treści i funkcjonalności.
- **Czytelność po powiększeniu:** Upewnij się, że po powiększeniu tekst nie nakłada się na siebie i nie jest ucinany.

---

## C.9.1.4.5 C.9.1.4.5 Obrazy tekstu

### Procedure
['1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 1.4.5 Obrazy tekstu](https://www.w3.org/Translations/WCAG21-pl/#obrazy-tekstu).']

### Evaluation
Inspekcja

### Checklist
- **Tekst jako grafika:** Sprawdź, czy tekst nie jest prezentowany w formie obrazka (chyba że jest to logo lub jest to niezbędne, np. wykres). Należy używać prawdziwego tekstu, aby był skalowalny i dostępny dla czytników.

---

## C.9.1.4.10 C.9.1.4.10 Dopasowanie do ekranu

### Procedure
['1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 1.4.10 Dopasowanie do ekranu](https://www.w3.org/Translations/WCAG21-pl/#dopasowanie-do-ekranu).']

### Evaluation
Inspekcja

### Checklist
- **Responsywność (Reflow):** Sprawdź, czy przy szerokości ekranu 320px (lub przy powiększeniu 400% na desktopie) strona nie wymaga przewijania w dwóch wymiarach (poziomym i pionowym). Treść powinna się "przelewac" do jednej kolumny.

---

## C.9.1.4.11 C.9.1.4.11 Kontrast elementów nietekstowych

### Procedure
['1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 1.4.11 Kontrast elementów nietekstowych](https://www.w3.org/Translations/WCAG21-pl/#kontrast-elementow-nietekstowych).']

### Evaluation
Inspekcja

### Checklist
- **Kontrast elementów nietekstowych:** Sprawdź, czy elementy interfejsu (przyciski, pola formularzy) oraz ważne elementy graficzne (wykresy) mają kontrast co najmniej 3:1 względem sąsiadujących kolorów.

---

## C.9.1.4.12 C.9.1.4.12 Odstępy w tekście

### Procedure
['1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 1.4.12 Odstępy w\xa0tekście](https://www.w3.org/Translations/WCAG21-pl/#odstepy-w-tekscie).']

### Evaluation
Inspekcja

### Checklist
- **Odstępy w tekście:** Sprawdź, czy użytkownik może zmienić odstępy w tekście (interlinia, odstępy między akapitami, słowami, literami) bez utraty treści lub funkcjonalności (np. używając skryptozakładki testowej).

---

## C.9.1.4.13 C.9.1.4.13 Treść spod kursora lub fokusu

### Procedure
['1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 1.4.13 Treść spod kursora lub fokusu](https://www.w3.org/Translations/WCAG21-pl/#tresc-spod-kursora-lub-fokusu).']

### Evaluation
Inspekcja

### Checklist
- **Treść spod kursora (Hover):** Sprawdź, czy treści pojawiające się po najechaniu myszą (tooltipy, menu) można odrzucić (klawiszem Esc), czy można na nie najechać kursorem bez ich znikania, i czy nie znikają same bez zmiany fokusu.

---

## C.9.2.1.1 C.9.2.1.1 Klawiatura

### Procedure
['1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 2.1.1 Klawiatura](https://www.w3.org/Translations/WCAG21-pl/#klawiatura).']

### Evaluation
Inspekcja

### Checklist
- **Dostępność klawiatury:** Sprawdź, czy wszystkie elementy interaktywne (linki, przyciski, formularze) są dostępne i obsługiwalne wyłącznie za pomocą klawiatury (Tab, Enter, Spacja, Strzałki).
- **Brak myszki:** Spróbuj obsłużyć całą stronę bez użycia myszki.

---

## C.9.2.1.2 C.9.2.1.2 Bez pułapki na klawiaturę

### Procedure
['1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 2.1.2 Bez pułapki na klawiaturę](https://www.w3.org/Translations/WCAG21-pl/#bez-pu-apki-na-klawiature).']

### Evaluation
Inspekcja

### Checklist
- **Pułapka na klawiaturę:** Sprawdź, czy fokus nie zostaje uwięziony w żadnym elemencie (np. w odtwarzaczu wideo, oknie modalnym) i czy można z niego wyjść standardowymi klawiszami (np. Tab, Esc).

---

## C.9.2.1.4 C.9.2.1.4 Jednoznakowe skróty klawiaturowe

### Procedure
['1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 2.1.4 Jednoznakowe skróty klawiaturowe](https://www.w3.org/Translations/WCAG21-pl/#jednoznakowe-skroty-klawiaturowe).']

### Evaluation
Inspekcja

### Checklist
- **Skróty jednoliterowe:** Jeśli strona obsługuje skróty klawiszowe oparte na pojedynczych literach, sprawdź, czy można je wyłączyć lub zmienić, aby uniknąć przypadkowego uruchomienia (np. podczas dyktowania tekstu).

---

## C.9.2.2.1 C.9.2.2.1 Dostosowanie czasu

### Procedure
['1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 2.2.1 Dostosowanie czasu](https://www.w3.org/Translations/WCAG21-pl/#dostosowanie-czasu).']

### Evaluation
Inspekcja

### Checklist
- **Limity czasowe:** Jeśli na stronie występują limity czasowe (np. sesja logowania), sprawdź, czy użytkownik może je wyłączyć, dostosować lub przedłużyć przed upływem czasu.

---

## C.9.2.2.2 C.9.2.2.2 Pauza, zatrzymanie, ukrycie

### Procedure
['1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 2.2.2 Pauza, zatrzymanie, ukrycie](https://www.w3.org/Translations/WCAG21-pl/#pauza-zatrzymanie-ukrycie).']

### Evaluation
Inspekcja

### Checklist
- **Pauza, zatrzymanie, ukrycie:** Sprawdź, czy ruszające się, migające lub przewijające się automatycznie treści (np. karuzele, tickery) można zatrzymać, zapauzować lub ukryć.

---

## C.9.2.3.1 C.9.2.3.1 Trzy błyski lub wartości poniżej progu

### Procedure
['1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 2.3.1 Trzy błyski lub wartości poniżej progu](https://www.w3.org/Translations/WCAG21-pl/#trzy-b-yski-lub-wartosci-ponizej-progu).']

### Evaluation
Inspekcja

### Checklist
- **Błyski:** Sprawdź, czy strona nie zawiera elementów błyskających częściej niż 3 razy na sekundę (może to wywołać atak padaczki).

---

## C.9.2.4.1 C.9.2.4.1 Możliwość pominięcia bloków

### Procedure
['1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 2.4.1 Możliwość pominięcia boków](https://www.w3.org/Translations/WCAG21-pl/#mozliwosc-pominiecia-blokow).']

### Evaluation
Inspekcja

### Checklist
- **Pomięcie bloków (Skip links):** Sprawdź, czy dostępny jest mechanizm (np. link "Przejdź do treści") pozwalający pominąć powtarzające się bloki nawigacyjne i przejść bezpośrednio do głównej treści.

---

## C.9.2.4.2 C.9.2.4.2 Tytuł strony

### Procedure
['1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 2.4.2 Tytuł strony](https://www.w3.org/Translations/WCAG21-pl/#tytu-strony).']

### Evaluation
Inspekcja

### Checklist
- **Tytuł strony:** Sprawdź, czy każda podstrona ma unikalny i opisowy tytuł (widoczny na karcie przeglądarki), który pozwala zidentyfikować jej treść i kontekst.

---

## C.9.2.4.3 C.9.2.4.3 Kolejność fokusu

### Procedure
['1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 2.4.3 Kolejność fokusu](https://www.w3.org/Translations/WCAG21-pl/#kolejnosc-fokusu).']

### Evaluation
Inspekcja

### Checklist
- **Kolejność fokusu:** Sprawdź, czy kolejność nawigacji klawiaturą (Tab) jest logiczna i przewidywalna (zazwyczaj od lewej do prawej, od góry do dołu).

---

## C.9.2.4.4 C.9.2.4.4 Cel łącza (w kontekście)

### Procedure
['1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 2.4.4 Cel łącza (w kontekście)](https://www.w3.org/Translations/WCAG21-pl/#cel-acza-w-kontekscie).']

### Evaluation
Inspekcja

### Checklist
- **Cel linku:** Sprawdź, czy treść każdego linku (lub linku wraz z kontekstem) jasno określa, dokąd on prowadzi. Unikaj linków typu "kliknij tutaj" bez kontekstu.

---

## C.9.2.4.5 C.9.2.4.5 Wiele dróg

### Procedure
['1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 2.4.5 Wiele dróg](https://www.w3.org/Translations/WCAG21-pl/#wiele-drog).']

### Evaluation
Inspekcja

### Checklist
- **Wiele dróg:** Sprawdź, czy istnieje więcej niż jeden sposób dotarcia do podstrony (np. menu nawigacyjne, wyszukiwarka, mapa strony, lista linków).

---

## C.9.2.4.6 C.9.2.4.6 Nagłówki i etykiety

### Procedure
['1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 2.4.6 Nagłówki i\xa0etykiety](https://www.w3.org/Translations/WCAG21-pl/#nag-owki-i-etykiety).']

### Evaluation
Inspekcja

### Checklist
- **Nagłówki i etykiety:** Sprawdź, czy nagłówki i etykiety jasno opisują temat lub cel sekcji/pola formularza.

---

## C.9.2.4.7 C.9.2.4.7 Widoczny fokus

### Procedure
['1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 2.4.7 Widoczny fokus](https://www.w3.org/Translations/WCAG21-pl/#widoczny-fokus).']

### Evaluation
Inspekcja

### Checklist
- **Widoczny fokus:** Sprawdź, czy każdy element interaktywny ma wyraźnie widoczne obramowanie (fokus) podczas nawigacji klawiaturą.

---

## C.9.2.5.1 C.9.2.5.1 Gesty dotykowe

### Procedure
['1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 2.5.1 Gesty dotykowe](https://www.w3.org/Translations/WCAG21-pl/#gesty-dotykowe).']

### Evaluation
Inspekcja

### Checklist
- **Gesty punktowe:** Sprawdź, czy funkcje wymagające gestów wielopunktowych (np. pinch-to-zoom) lub ścieżkowych można obsłużyć również za pomocą prostego kliknięcia/dotknięcia.

---

## C.9.2.5.2 C.9.2.5.2 Rezygnacja ze wskazania

### Procedure
['1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 2.5.2 Rezygnacja ze wskazania](https://www.w3.org/Translations/WCAG21-pl/#rezygnacja-ze-wskazania).']

### Evaluation
Inspekcja

### Checklist
- **Rezygnacja ze wskazania:** Sprawdź, czy funkcjonalność jest aktywowana przy zwolnieniu wskaźnika (up-event), co pozwala na anulowanie (np. przez przesunięcie kursora poza element). Jeśli aktywacja następuje przy naciśnięciu, upewnij się, że istnieje mechanizm cofnięcia lub zachowanie to jest niezbędne.

---

## C.9.2.5.3 C.9.2.5.3 Etykieta w nazwie

### Procedure
['1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 2.5.3 Etykieta w\xa0nazwie](https://www.w3.org/Translations/WCAG21-pl/#etykieta-w-nazwie).']

### Evaluation
Inspekcja

### Checklist
- **Etykieta w nazwie:** Sprawdź, czy widoczna etykieta tekstowa elementu (np. przycisku) jest zawarta w jego nazwie dostępnej (Accessible Name) dla czytników ekranu.

---

## C.9.2.5.4 C.9.2.5.4 Aktywowanie ruchem

### Procedure
['1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 2.5.4 Aktywowanie ruchem](https://www.w3.org/Translations/WCAG21-pl/#aktywowanie-ruchem).']

### Evaluation
Inspekcja

### Checklist
- **Aktywowanie ruchem:** Jeśli funkcja jest aktywowana ruchem urządzenia (np. potrząśnięcie), sprawdź, czy można ją wyłączyć lub obsłużyć interfejsem.

---

## C.9.3.1.1 C.9.3.1.1 Język strony

### Procedure
['1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 3.1.1 Język strony](https://www.w3.org/Translations/WCAG21-pl/#jezyk-strony).']

### Evaluation
Inspekcja

### Checklist
- **Język strony:** Sprawdź, czy w kodzie HTML zdefiniowany jest poprawny język strony (atrybut `lang` w znaczniku `<html>`).

---

## C.9.3.1.2 C.9.3.1.2 Język części

### Procedure
['1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 3.1.2 Język części](https://www.w3.org/Translations/WCAG21-pl/#jezyk-czesci).']

### Evaluation
Inspekcja

### Checklist
- **Język części:** Sprawdź, czy fragmenty tekstu w innym języku niż domyślny mają odpowiedni atrybut `lang`.

---

## C.9.3.2.1 C.9.3.2.1 Po otrzymaniu fokusu

### Procedure
['1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 3.2.1 Po otrzymaniu fokusu](https://www.w3.org/Translations/WCAG21-pl/#po-otrzymaniu-fokusu).']

### Evaluation
Inspekcja

### Checklist
- **Po otrzymaniu fokusu:** Sprawdź, czy otrzymanie fokusu przez element nie powoduje nieoczekiwanej zmiany kontekstu (np. automatycznego wysłania formularza, otwarcia nowego okna).

---

## C.9.3.2.2 C.9.3.2.2 Podczas wprowadzania danych

### Procedure
['1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 3.2.2 Podczas wprowadzania danych](https://www.w3.org/Translations/WCAG21-pl/#podczas-wprowadzania-danych).']

### Evaluation
Inspekcja

### Checklist
- **Podczas wprowadzania danych:** Sprawdź, czy zmiana ustawienia elementu interfejsu (np. wybór z listy) nie powoduje nieoczekiwanej zmiany kontekstu, chyba że użytkownik został o tym uprzedzony.

---

## C.9.3.2.3 C.9.3.2.3 Spójna nawigacja

### Procedure
['1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 3.2.3 Spójna nawigacja](https://www.w3.org/Translations/WCAG21-pl/#spojna-nawigacja).']

### Evaluation
Inspekcja

### Checklist
- **Spójna nawigacja:** Sprawdź, czy mechanizmy nawigacyjne (menu, wyszukiwarka) pojawiają się w tym samym względnym porządku na różnych podstronach.

---

## C.9.3.2.4 C.9.3.2.4 Spójna identyfikacja

### Procedure
['1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 3.2.4 Spójna identyfikacja](https://www.w3.org/Translations/WCAG21-pl/#spojna-identyfikacja).']

### Evaluation
Inspekcja

### Checklist
- **Spójna identyfikacja:** Sprawdź, czy elementy pełniące tę samą funkcję są konsekwentnie identyfikowane (mają te same etykiety i ikony) w całym serwisie.

---

## C.9.3.3.1 C.9.3.3.1 Identyfikacja błędu

### Procedure
['1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 3.3.1 Identyfikacja błędu](https://www.w3.org/Translations/WCAG21-pl/#identyfikacja-b-edu).']

### Evaluation
Inspekcja

### Checklist
- **Identyfikacja błędu:** Sprawdź, czy błędy w formularzu są automatycznie wykrywane, a użytkownik otrzymuje jasną informację tekstową, które pole zawiera błąd i na czym on polega.

---

## C.9.3.3.2 C.9.3.3.2 Etykiety lub instrukcje

### Procedure
['1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 3.3.2 Etykiety lub instrukcje](https://www.w3.org/Translations/WCAG21-pl/#etykiety-lub-instrukcje).']

### Evaluation
Inspekcja

### Checklist
- **Etykiety lub instrukcje:** Sprawdź, czy pola wymagające danych w określonym formacie posiadają odpowiednie instrukcje lub przykłady.

---

## C.9.3.3.3 C.9.3.3.3 Sugestie korekty błędów

### Procedure
['1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 3.3.3 Sugestie korekty błędów](https://www.w3.org/Translations/WCAG21-pl/#sugestie-korekty-b-edow).']

### Evaluation
Inspekcja

### Checklist
- **Sugestie korekty:** Sprawdź, czy w przypadku błędu system podpowiada poprawną wartość (jeśli jest to możliwe).

---

## C.9.3.3.4 C.9.3.3.4 Zapobieganie błędom (prawnym, finansowym, w danych)

### Procedure
['1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 3.3.4 Zapobieganie błędom (prawnym, finansowym, w\xa0danych)](https://www.w3.org/Translations/WCAG21-pl/#zapobieganie-b-edom-prawnym-finansowym-w-danych).']

### Evaluation
Inspekcja

### Checklist
- **Zapobieganie błędom:** Dla stron prawnych/finansowych: sprawdź, czy użytkownik może zweryfikować, potwierdzić lub cofnąć transakcję przed jej finalizacją.

---

## C.9.4.1.1 C.9.4.1.1 Poprawność kodu

### Procedure
['1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 4.1.1 Poprawność kodu](https://www.w3.org/Translations/WCAG21-pl/#poprawnosc-kodu).']

### Evaluation
Inspekcja

### Checklist
- **Poprawność kodu (Parsing):** *Uwaga: W WCAG 2.2 to kryterium zostało usunięte. W WCAG 2.1 (EN 301 549) uznaje się je za spełnione, chyba że błędy uniemożliwiają działanie technologii asystujących.*

Sprawdź kod wyłącznie pod kątem krytycznych błędów:
- zduplikowanych atrybutów `id`,
- zduplikowanych atrybutach w tym samym znaczniku,
- błędnym zagnieżdżeniu elementów.

---

## C.9.4.1.2 C.9.4.1.2 Nazwa, rola, wartość

### Procedure
['1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 4.1.2 Nazwa, rola, wartość](https://www.w3.org/Translations/WCAG21-pl/#nazwa-rola-wartosc).']

### Evaluation
Inspekcja

### Checklist
- **Nazwa, rola, wartość:** Sprawdź, czy niestandardowe elementy interfejsu (np. własne przyciski, zakładki) mają poprawnie zdefiniowaną nazwę, rolę i stan (np. przy użyciu ARIA), aby były dostępne dla czytników ekranu.

---

## C.9.4.1.3 C.9.4.1.3 Komunikaty o stanie

### Procedure
['1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 4.1.3 Komunikaty o\xa0stanie](https://www.w3.org/Translations/WCAG21-pl/#komunikaty-o-stanie).']

### Evaluation
Inspekcja

### Checklist
- **Komunikaty o stanie:** Sprawdź, czy komunikaty o statusie (np. "Wyszukiwanie...", "Dodano do koszyka") są ogłaszane przez czytnik ekranu bez konieczności przenoszenia fokusu (użycie ARIA live regions).

---

## C.9.6 C.9.6 Wymagania zgodności WCAG 2.1

### Procedure
['1. Sprawdź, czy strona internetowa spełnia wymaganie zgodności wg [WCAG 2.1 – 1: Poziom zgodności](https://www.w3.org/Translations/WCAG21-pl/#cc1) na poziomie AA.', '2. Sprawdź, czy strona internetowa spełnia wymaganie zgodności wg [WCAG 2.1 – 2: Całe strony](https://www.w3.org/Translations/WCAG21-pl/#cc2).', '3. Sprawdź, czy strona internetowa spełnia wymaganie zgodności wg [WCAG 2.1 – 3: Całe procesy](https://www.w3.org/Translations/WCAG21-pl/#cc3).', '4. Sprawdź, czy strona internetowa spełnia wymaganie zgodności wg [WCAG 2.1 – 4: Użycie technologii obsługujących dostępność](https://www.w3.org/Translations/WCAG21-pl/#cc4).', '5. Sprawdź, czy strona internetowa spełnia wymaganie zgodności wg [WCAG 2.1 – 5: Bez zakłóceń](https://www.w3.org/Translations/WCAG21-pl/#cc5).']

### Evaluation
Inspekcja

### Checklist
- **1. Poziom zgodności:** Sprawdź, czy strona spełnia wszystkie kryteria sukcesu poziomu A i AA (lub posiada wersję alternatywną).
- **2. Całe strony:** Sprawdź, czy ocena dostępności dotyczy całej strony internetowej, a nie tylko jej fragmentu. Nie można wykluczyć części strony (np. nagłówka czy stopki) z oceny.
- **3. Całe procesy:** Jeśli strona jest częścią procesu (np. zakupy, logowanie), sprawdź, czy wszystkie kroki tego procesu są dostępne. Dostępność tylko jednego kroku nie wystarcza, jeśli użytkownik nie może ukończyć całego zadania.
- **4. Użycie technologii obsługujących dostępność:** Sprawdź, czy informacje i funkcje są dostępne przy użyciu technologii, które są wspierane przez narzędzia użytkownika (przeglądarki, czytniki ekranu). Unikaj technologii, które blokują dostępność.
- **5. Bez zakłóceń:** Sprawdź, czy technologie, które nie są wspierane w zakresie dostępności, nie blokują dostępu do reszty strony (np. czy nie powodują pułapki na klawiaturę, migania, czy nie zasłaniają treści).

---

