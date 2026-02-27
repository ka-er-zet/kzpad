# Klauzule - Dokumentacja

## C.5.1.2.2 - C.5.1.2.2 Technologia wspomagająca

### Warunki wstępne
1. 1. W TIK występują funkcjonalności zamknięte.

### Procedura
1. 1. Określ w TIK funkcjonalności zamknięte.
1. 2. Sprawdź, czy testy od C.5.1.3 do C.5.1.6 można przeprowadzić bez mocowania lub instalowania jakiejkolwiek technologii wspomagającej z wyjątkiem osobistych zestawów słuchawkowych lub pętli indukcyjnych.

### Typ oceny
Test

### Checklist
1. **Co to jest funkcjonalność zamknięta:** TIK ma funkcjonalność zamkniętą z powodu projektu, polityki lub praktyki. Produkt może być samodzielny – użytkownicy nie mogą dodawać sprzętu lub oprogramowania.
1. **Przykłady zamkniętej funkcjonalności:** Komputery bez możliwości instalacji oprogramowania lub zmiany ustawień są funkcjonalnie zamknięte. TIK może być zamknięta w praktyce, nawet jeśli nie była tak zaprojektowana.
1. **Uwaga 1:** TIK może zamykać tylko niektóre funkcjonalności. Tylko te zamknięte muszą spełniać wymagania klauzuli 5.1.
1. **Uwaga 2:** Wymagania w klauzuli 5 zastępują te z klauzul 5.2–13 dla funkcjonalności zamkniętej. Dotyczy to kompatybilności z technologią wspomagającą lub ustawień dostępności (np. produkty blokujące dostęp do panelu ustawień).

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 2: prawda |
| Niezaliczone | Kryterium 2: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.5.1.3.1 - C.5.1.3.1 Wyjście audio informacji wizualnych

### Warunki wstępne
1. 1. Informacje wizualne są wymagane, aby umożliwić korzystanie z tych funkcji TIK , które są zamknięte dla technologii wspomagających odczyt z ekranu.

### Procedura
1. 1. Określ w TIK funkcjonalności zamknięte na odczyt z ekranu.
1. 2. Sprawdź, czy można je wykonać, korzystając z dostępu do wyjścia audio.

### Typ oceny
Test

### Checklist
1. **Lista informacji wizualnych:** Wypisz wszystkie informacje wizualne wymagane dla funkcji zamkniętych (instrukcje, statusy, komunikaty o błędach, treści nietekstowe).
1. **Tryby dostępu niewizualnego:** Sprawdź, że co najmniej jeden tryb dostępu niewizualnego (np. audio, brajl, dotyk) przekazuje tę samą informację.
1. **Zachowanie struktury:** Upewnij się, że tryb niewizualny zachowuje strukturę, fokus i relacje, aby użytkownik mógł skorelować go z widocznym ekranem
1. **Uruchamianie i zakres:** Opisz, w jaki sposób tryb niewizualny jest uruchamiany i czy obejmuje wszystkie zidentyfikowane elementy.
1. **Braki odpowiedników:** Zanotuj wizualne wskazówki, które nadal nie mają odpowiednika w trybie niewizualnym.
1. **Uwaga 1:** Dostęp niewizualny może mieć formę audio, w tym mowę, lub formę dotykową, taką jak brajl dla użytkowników głuchoniewidomych.
1. **Uwaga 2:** Wizualne informacje potrzebne do umożliwienia korzystania z niektórych funkcji mogą obejmować instrukcje obsługi i orientację, komunikaty transakcyjne, weryfikację danych wejściowych użytkownika, komunikaty o błędach i treści nietekstowe.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 2: prawda |
| Niezaliczone | Kryterium 2: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.5.1.3.2 - C.5.1.3.2 Wyjściowy sygnał dźwiękowy zawierający mowę

### Warunki wstępne
1. 1. Sygnał dźwiękowy zapewnia niewizualny dostęp do funkcji zamkniętych.

### Procedura
1. 1. Sprawdź, czy sygnał dźwiękowy jest dostarczany za pomocą mechanizmu zawartego w TIK lub dostarczanego wraz z nią.
1. 2. Sprawdź, czy sygnał dźwiękowy jest dostarczany za pomocą osobistego zestawu słuchawkowego, który można podłączyć poprzez gniazdo audio 3,5 mm lub standardowe połączenie branżowe, bez konieczności korzystania ze wzroku.

### Typ oceny
Inspekcja

### Checklist
1. **Mechanizm wyjścia audio:** Sprawdź, czy wyjście audio dostarczane jest przez mechanizm wbudowany lub przez osobiste słuchawki/standardowe złącze, które można podłączyć bez użycia wzroku.
1. **Sposób połączenia:** Opisz sposób połączenia (gniazdo 3,5 mm, standardowe złącze bezprzewodowe, dokowanie) i czy użytkownik może je wykonać samodzielnie.
1. **Typ sprzężenia:** Zanotuj, czy mechanizm wykorzystuje głośnik, wbudowane słuchawki, zestaw stereo lub inny sposób dostarczania dźwięku.
1. **Pętla indukcyjna:** Jeśli zapewniono pętlę indukcyjną, opisz sposób jej dostępu i dostosowania do użytkownika
1. **Ograniczenia dostępu:** Zapisz wszelkie ograniczenia, które uniemożliwiają dostęp do wyjścia audio.
1. **Uwaga 1:** Mechanizmy zawarte w TIK lub dostarczane wraz z nią mogą obejmować, ale nie ograniczają się do, głośnika, wbudowanej słuchawki/zestawu słuchawkowego lub innego standardowego urządzenia dźwiękowego.
1. **Uwaga 2:** Standardowe połączenie branżowe może być połączeniem bezprzewodowym.
1. **Uwaga 3:** Niektórzy użytkownicy mogą skorzystać z zapewnienia pętli indukcyjnej.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1 lub 2: prawda |
| Niezaliczone | Kryteria 1 i 2: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.5.1.3.4 - C.5.1.3.4 Sterowanie przez użytkownika wyjściem mowy

### Warunki wstępne
1. 1. Wyjście mowy zapewnia niewizualny dostęp do funkcji zamkniętych.

### Procedura
1. 1. Sprawdź, czy wyjście mowy można przerwać na żądanie użytkownika.
1. 2. Sprawdź, czy wyjście mowy można powtórzyć na żądanie użytkownika.

### Typ oceny
Inspekcja

### Checklist
1. **Kontrola wyjścia mowy:** Potwierdź, że wyjście mowy można przerwać i powtórzyć na żądanie, uwzględniając ograniczenia bezpieczeństwa.
1. **Test wstrzymania:** Tam, gdzie to możliwe, przetestuj wstrzymanie odtwarzania bez restartu i powtórzenie ostatniego fragmentu.
1. **Kontrolki:** Opisz fizyczne lub dotykowe kontrolki, które służą przerwaniu i powtórzeniu komunikatu.
1. **Ograniczenia bezpieczeństwa:** Zanotuj polityki lub tryby, które mogą uniemożliwiać przerwanie/ powtórzenie ze względów bezpieczeństwa.
1. **Zakres powtórzenia:** Sprawdź, czy powtórzenie obejmuje tylko ostatnią partię treści w zgodzie z najlepszymi praktykami.
1. **Uwaga 1:** Najlepszą praktyką jest umożliwienie użytkownikowi wstrzymania wyjścia mowy, a nie tylko jego przerwania.
1. **Uwaga 2:** Najlepszą praktyką jest umożliwienie użytkownikowi powtórzenia tylko ostatniej części, zamiast wymagania rozpoczęcia odtwarzania od początku.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Wszystkie kryteria: prawda |
| Niezaliczone | Dowolne kryterium: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.5.1.3.5 - C.5.1.3.5 Automatyczne przerwanie wyjścia mowy

### Warunki wstępne
1. 1. Wyjście mowy zapewnia niewizualny dostęp do funkcji zamkniętych.

### Procedura
1. 1. Określ w TIK funkcjonalności zamknięte.
1. 2. Sprawdź, czy wyjście mowy dla każdej pojedynczej funkcji jest przerywany na skutek działania użytkownika.
1. 3. Sprawdź, czy wyjście ł mowy dla każdej pojedynczej funkcji jest przerywany, gdy rozpoczyna się nowe wyjście mowy.

### Typ oceny
Inspekcja

### Checklist
1. **Automatyczne przerwanie:** Potwierdź, że bieżący komunikat mowy zostaje natychmiast przerwany, gdy użytkownik wykona akcję lub rozpocznie się nowy komunikat.
1. **Komunikaty konieczne:** Jeśli istnieją komunikaty, których odsłuchanie jest konieczne (ostrzeżenia), opisz, w jaki sposób system blokuje akcje w zgodzie z klauzulą.
1. **Konsystencja przerwania:** Sprawdź, czy przerwanie działa konsekwentnie niezależnie od długości komunikatu i czy nowe audio odtwarza się bez opóźnień.
1. **Blokady przerwania:** Zanotuj stany, w których przerwanie jest zablokowane i jak system o tym informuje.
1. **Odzyskiwanie kontroli:** Opisz, jak użytkownik odzyskuje kontrolę po przerwaniu.
1. **Uwaga:** W przypadkach, gdy konieczne jest, aby użytkownik usłyszał całą wiadomość, np. instrukcję bezpieczeństwa lub ostrzeżenie, TIK może potrzebować zablokować wszystkie działania użytkownika, aby mowa nie została przerwana.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryteria 2 i 3: prawda |
| Niezaliczone | Kryterium 2 lub 3: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.5.1.3.6 - C.5.1.3.6 Wyjście mowy dla treści nietekstowej

### Warunki wstępne
1. 1. Treść nietekstowa jest prezentowana użytkownikom za pomocą sygnału mowy.

### Procedura
1. 1. Sprawdź, czy wyjście mowy jest zapewniane jako alternatywa dla treści nietekstowej.
1. 2. Sprawdź, czy treść nietekstowa jest rzeczywiście istotna i potrzebna.
1. 3. Sprawdź, czy treść nietekstowa nie jest wyłącznie używana do formatowania wizualnego.
1. 4. Sprawdź, czy wyjście mowy jest zgodne z wytycznymi dotyczącymi "tekstu alternatywnego" opisanymi w kryterium sukcesu [WCAG 2.1 dla wytycznej 1.1.1](https://www.w3.org/Translations/WCAG21-pl/#non-text-content).

### Typ oceny
Test

### Checklist
1. **Potwierdzenie odpowiedników:** Dla każdej treści nietekstowej potwierdź, że mowa zapewnia odpowiednik zgodny z WCAG 2.1 wytyczna 1.1.1.
1. **Format opisu:** Opisz, czy to audiodeskrypcja, transkrypt lub inny format i czy przekazuje równoważne znaczenie.
1. **Różnicowanie treści:** Upewnij się, że komunikacja głosowa odróżnia elementy dekoracyjne od treści znaczących.
1. **Dostęp do nagrania:** Zanotuj, jak użytkownik uruchamia i uzyskuje dostęp do takiego nagrania.
1. **Braki i nieścisłości:** Zapisz braki lub nieścisłości w opisie treści nietekstowych.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryteria 1, 2, 3 i 4: prawda; lub 1 i 2: fałsz; lub 1 i 3: fałsz |
| Niezaliczone | Kryteria 1: prawda i 2: fałsz; lub 1: prawda i 3: fałsz; lub 1, 2 i 3: prawda oraz 4: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.5.1.3.7 - C.5.1.3.7 Wyjście mowy dla informacji wideo

### Warunki wstępne
1. 1. Nagrane materiały wideo są niezbędne, aby umożliwić korzystanie z zamkniętych funkcji TIK .
1. 2. Wyjście mowy zapewnia niewizualny dostęp do treści nietekstowej w funkcjonalności zamkniętej.

### Procedura
1. 1. Sprawdź, czy wyjście mowy prezentuje informacje zgodne z napisami do nagranej treści wideo.

### Typ oceny
Test

### Checklist
1. **Porównanie zawartości:** Porównaj zawartość materiałów wideo z wyjściem mowy, aby upewnić się, że przekazuje tę samą informację.
1. **Format wyjścia:** Opisz, czy wyjście to audiodeskrypcja, transkrypt lub inna forma opowieści słownej.
1. **Synchronizacja:** Zweryfikuj synchronizację i kolejność odtwarzania głosu w stosunku do zdarzeń wideo.
1. **Dostęp do audio:** Zanotuj sposób uzyskania dostępu do audio (automatycznie, przycisk, menu).
1. **Elementy pominięte:** Wymień elementy wideo pominięte w narracji.
1. **Uwaga:** Wyjście mowy może mieć formę audiodeskrypcji lub transkryptu treści wideo.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2 |


## C.5.1.3.8 - C.5.1.3.8 Wejście maskowane

### Warunki wstępne
1. 1. Sygnał dźwiękowy zapewnia niewizualny dostęp do funkcji zamkniętych.
1. 2. Wyświetlane są znaki maskowane.
1. 3. Nie aktywowano żadnej opcji umożliwiającej korzystanie z nieprywatnego sygnału dźwiękowego.

### Procedura
1. 1. Sprawdź, czy sygnał dźwiękowy nie jest mówioną wersją wprowadzonych znaków.
1. 2. Sprawdź, czy sygnał dźwiękowy jest dostępny tylko do mechanizmu do indywidualnego słuchania.

### Typ oceny
Test

### Checklist
1. **Potwierdzenie maskowania:** Gdy są wyświetlane znaki maskowane, potwierdź, że wyjście audio nie wypowiada wprowadzanych znaków chyba że dane jest prywatne środowisko lub użytkownik wyrazi zgodę.
1. **Ostrzeżenie prywatności:** Jeśli system oferuje opcję odsłuchu nie maskowanego, sprawdź, czy pojawia się ostrzeżenie o konsekwencjach prywatności.
1. **Mechanizm prywatny:** Opisz, jaki mechanizm prywatnego odsłuchu jest dostępny i jak można go podłączyć bez widu.
1. **Utrzymanie maskowania:** Zanotuj, czy maskowanie jest utrzymywane również w innych trybach, by nie naruszać danych wrażliwych.
1. **Przypadki naruszeń:** Zapisz przypadki, gdy dane prywatne były wypowiedziane bez wymaganych zabezpieczeń.
1. **Uwaga 1:** Znaki maskujące są zwykle wyświetlane ze względów bezpieczeństwa i obejmują, ale nie ograniczają się do, gwiazdek reprezentujących numery identyfikacyjne osób.
1. **Uwaga 2:** Wyjście znaków nie maskowanych może być preferowane, gdy używane są funkcje zamknięte, na przykład w prywatności domu użytkownika. Ostrzeżenie podkreślające obawy dotyczące prywatności może być odpowiednie, aby zapewnić, że użytkownik dokonał świadomego wyboru.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Dowolne kryterium: prawda |
| Niezaliczone | Wszystkie kryteria: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2 |


## C.5.1.3.9 - C.5.1.3.9 Prywatny dostęp do danych osobowych

### Warunki wstępne
1. 1. Sygnał dźwiękowy zapewnia niewizualny dostęp do funkcji zamkniętych.
1. 2. Wyjście zawiera dane.
1. 3. Istnieje odpowiednia polityka prywatności, która uznaje te dane za prywatne.

### Procedura
1. 1. Sprawdź, czy sygnał dźwiękowy jest dostępny tylko do mechanizmu do indywidulnego słuchania.
1. 2. Sprawdź, czy mechanizm do indywidualnego słuchania można podłączyć bez konieczności używania wzroku.
1. 3. Sprawdź, czy sygnał dźwiękowy jest dostarczany przez dowolny inny mechanizm, który użytkownik może wybrać.

### Typ oceny
Test

### Checklist
1. **Wskazanie danych prywatnych:** Wskaż dane prywatne i upewnij się, że są przekazywane wyłącznie przez mechanizm prywatnego odsłuchu dostępny bez wzroku lub inną wybraną przez użytkownika ścieżkę.
1. **Połączenie z kanałem prywatnym:** Opisz, jak użytkownik może połączyć się z kanałem prywatnym bez pomocy wzroku.
1. **Wyjątki od prywatności:** Jeśli dane wykraczają poza definicję prywatności zgodnie z polityką, zapisz, że klauzula nie ma zastosowania.
1. **Ostrzeżenia o ryzyku:** Jeśli użytkownik wybiera tryb nieprywatny (np. w domu), sprawdź, czy system ostrzega przed ryzykiem.
1. **Mechanizmy granic prywatności:** Zanotuj mechanizmy wprowadzające granice prywatności, zgodnie z zapisami klauzuli.
1. **Uwaga 1:** To wymaganie nie ma zastosowania w przypadkach, gdy dane nie są zdefiniowane jako prywatne zgodnie z obowiązującą polityką prywatności lub gdy nie ma obowiązującej polityki prywatności.
1. **Uwaga 2:** Wyjście nieprywatne może być preferowane, gdy używane są funkcje zamknięte, na przykład w prywatności domu użytkownika. Ostrzeżenie podkreślające obawy dotyczące prywatności może być odpowiednie, aby zapewnić, że użytkownik dokonał świadomego wyboru.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryteria 1 i 2 lub 3: prawda |
| Niezaliczone | Kryteria 1 lub 2 i 3: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 3. |


## C.5.1.3.10 - C.5.1.3.10 Wyjście audio bez zakłóceń

### Warunki wstępne
1. 1. Sygnał dźwiękowy zapewnia niewizualny dostęp do funkcji zamkniętych.
1. 2. TIK automatycznie odtwarza zakłócające wyjście dźwiękowe.

### Procedura
1. 1. Sprawdź, czy zakłócające wyjście dźwiękowe jest odtwarzane nie dłużej niż 3 sekundy.

### Typ oceny
Test

### Checklist
1. **Obserwacja zakłóceń:** Obserwuj, czy żadne inne dźwięki odtwarzane automatycznie przez ponad 3 sekundy nie zakłócają głównego komunikatu.
1. **Wyciszanie audio:** Potwierdź, że zakłócające audio można wyciszyć lub wstrzymać bez użycia wzroku.
1. **Kluczowe alerty:** Sprawdź, czy kluczowe alerty nadal są słyszalne nawet przy równoległym audio.
1. **Źródła dźwięków:** Wymień źródło i czas trwania zakłócających dźwięków.
1. **Strategie oddzielania:** Opisz strategie oddzielania kanałów, by utrzymać priorytet głosu dla użytkownika.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2 |


## C.5.1.3.11 - C.5.1.3.11 Głośność odsłuchiwania treści prywatnych

### Warunki wstępne
1. 1. Sygnał dźwiękowy zapewnia niewizualny dostęp do funkcji zamkniętych.
1. 2. Sygnał dźwiękowy jest dostępny tylko do mechanizmu do indywidualnego słuchania.

### Procedura
1. 1. Sprawdź, czy istnieje przynajmniej jeden niewizualny tryb działania do kontroli głosu.

### Typ oceny
Inspekcja

### Checklist
1. **Kontrola głośności:** Dla prywatnego odsłuchu zidentyfikuj niewizualną kontrolę głośności i sprawdź, czy można nią operować bez użycia wzroku.
1. **Informacje percepcyjne:** Potwierdź, że kontrolka daje percepcyjne informacje o aktualnym poziomie (np. kliknięcia, wibracje, dźwięki).
1. **Mechanizmy regulacji:** Opisz gesty, przyciski lub inne mechanizmy regulacji.
1. **Zastosowanie zmian:** Sprawdź, czy zmiana głośności jest stosowana od razu dla bieżącej sesji.
1. **Problemy z regulacją:** Zanotuj wszelkie problemy uniemożliwiające podniesienie lub obniżenie poziomu dźwięku.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2 |


## C.5.1.3.12 - C.5.1.3.12 Głośność głośnika

### Warunki wstępne
1. 1. Sygnał dźwiękowy zapewnia niewizualny dostęp do funkcji zamkniętych.
1. 2. Sygnał dźwiękowy jest dostarczany przez głośniki.

### Procedura
1. 1. Sprawdź, czy jest dostępna niewizualna kontrola zwiększania głośności.
1. 2. Sprawdź, czy jest możliwe wzmocnienie do poziomu przynajmniej 65 dBA (–29 dBPaA).

### Typ oceny
Inspekcja i pomiar

### Checklist
1. **Regulacja głośności:** Jeśli audio jest dostarczane przez głośniki, potwierdź istnienie możliwej do obsługi bez użycia wzroku regulacji, która umożliwia wzmocnienie do co najmniej 65 dBA.
1. **Wskazanie progu:** Opisz, w jaki sposób kontrola wskazuje osiągnięcie progu 65 dBA.
1. **Hałas otoczenia:** Zaznacz, gdy hałas otoczenia wymaga większego wzmocnienia niż minimum (uwaga).
1. **Metoda pomiaru:** Udokumentuj metodę pomiaru dBA oraz sposób raportowania wartości użytkownikowi.
1. **Ograniczenia głośności:** Zanotuj sytuacje, w których nie można osiągnąć wymaganego poziomu głośności.
1. **Uwaga:** W hałaśliwych środowiskach 65 dBA może nie być wystarczające.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1 i 2: prawda |
| Niezaliczone | Kryterium 1 lub 2: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2 |


## C.5.1.3.13 - C.5.1.3.13 Przywracanie głośności

### Warunki wstępne
1. 1. Sygnał dźwiękowy zapewnia niewizualny dostęp do funkcji zamkniętych.
1. 2. TIK nie jest dedykowana dla pojedynczego użytkownika.

### Procedura
1. 1. Sprawdź, czy funkcja do automatycznego resetowania głośności do poziomu 65 dBA lub niższego jest wywoływana po każdym użyciu.

### Typ oceny
Inspekcja i pomiar

### Checklist
1. **Funkcja resetu:** Potwierdź, że po każdym użyciu działa funkcja resetująca głośność do 65 dBA lub mniej, chyba że TIK jest dedykowane jednemu użytkownikowi.
1. **Opcja wyłączenia:** Jeśli dostępna jest opcja wyłączenia resetu na potrzeby pojedynczego użytkownika, opisz sposób jej aktywacji.
1. **Typ resetu:** Zapisz, czy reset jest automatyczny, czy wymaga aktywacji ręcznej.
1. **Test resetu:** Przetestuj reset po ustawieniu maksymalnej głośności, aby upewnić się, że przywraca domyślny próg dźwięku.
1. **Wyjątki resetu:** Zanotuj przypadki, gdy reset nie działa z powodu dedykowanego trybu.
1. **Uwaga:** TIK może zapewniać funkcję wyłączenia funkcji resetowania głośności, aby umożliwić spełnienie wyjątku dla pojedynczego użytkownika.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2 |


## C.5.1.3.14 - C.5.1.3.14 Języki mówione

### Warunki wstępne
1. 1. Wyjście mowy zapewnia niewizualny dostęp do funkcji zamkniętych.
1. 2. Sygnałem mowy nie są nazwy własne, terminy techniczne, słowa w nieokreślonym języku ani słowa lub zwroty, które stały się częścią żargonu bezpośrednio otaczającego tekstu.
1. 3. Treść nie jest generowana zewnętrznie i jest kontrolowana przez dostawcę TIK .
1. 4. Wyświetlane języki można wybrać z zastosowaniem dostępu niewizualny.
1. 5. Gdy użytkownik nie wybrał języka mowy, który jest inny niż język wyświetlanej treści.

### Procedura
1. 1. Sprawdź, czy wyjście mowy jest w tym samym języku co dostarczona wyświetlana treść.

### Typ oceny
Test

### Checklist
1. **Zgodność języka:** Zweryfikuj, czy wyjście mowy występuje w tym samym języku co prezentowane treści, z wyjątkami wymienionymi w klauzuli.
1. **Wyjątki językowe:** Udokumentuj wyjątki dla nazw własnych, terminów technicznych, niezdefiniowanych języków oraz elementów przejętych do otaczającego tekstu.
1. **Obsługa zewnętrznych treści:** Jeśli treść pochodzi z zewnętrznego źródła nieobsługiwanego przez syntezator, zapisz obsługiwane języki i braki.
1. **Wybór języka:** Potwierdź, że wybór języka jest dostępny przez kanały niewizualne lub że użytkownik może go ręcznie zmienić.
1. **Niezgodności językowe:** Zanotuj przypadki, gdy mowa nie odpowiada językowi widocznego tekstu bez uzasadnionej podstawy.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 3 |


## C.5.1.3.15 - C.5.1.3.15 Niewizualna identyfikacja błędu

### Warunki wstępne
1. 1. Wyjście mowy zapewnia niewizualny dostęp do funkcji zamkniętych.
1. 2. Błąd na wejściu jest wykrywany automatycznie.

### Procedura
1. 1. Sprawdź, czy wyjście mowy wykrywa, że element jest błędny.
1. 2. Sprawdź, czy wyjście mowy opisuje element, który jest błędny.

### Typ oceny
Test

### Checklist
1. **Identyfikacja błędu:** Podczas wykrycia błędu walidacji, mowa powinna jednoznacznie wskazać i opisać element z błędem.
1. **Opis komunikatu:** Zapisz, jak komunikat identyfikuje pole lub kontrolkę bez odniesienia do koloru czy lokalizacji.
1. **Czas pojawienia:** Potwierdź, że informacja pojawia się natychmiast po wykryciu błędu.
1. **Wskazówki korekty:** Sprawdź, czy komunikat zawiera wskazówki dotyczące korekty lub nawigacji.
1. **Braki opisów:** Zanotuj wszelkie stany błędów, które nie są opisane werbalnie.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1 i 2: prawda |
| Niezaliczone | Kryterium 1 lub 2: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2 |


## C.5.1.3.16 - C.5.1.3.16 Pokwitowania, bilety i dane wyjściowe transakcji

### Warunki wstępne
1. 1. TIK jest zamknięta dla dostępu wizualnego.
1. 2. TIK dostarcza jako wynik transakcji samoobsługowej pokwitowania, bilet lub inne dane wyjściowe
1. 3. Sprawdzane informacje nie są drukowanymi kopiami tras i map.

### Procedura
1. 1. Sprawdź, czy dostarczane wyjście mowy zawiera wszystkie informacje niezbędne do zakończenia lub zweryfikowania transakcji.

### Typ oceny
Test

### Checklist
1. **Zawartość mowy:** Dla pokwitowań, biletów i innych wyjść transakcyjnych upewnij się, że mowa zawiera wszystkie informacje niezbędne do dokończenia lub weryfikacji transakcji.
1. **Niezależność od druku:** Potwierdź, że maszyny biletowe nie wymagają drukowanych rozkładów czy map, jeśli mowa jest dostępna.
1. **Element systemu:** Zanotuj, który element systemu TIK udostępnia wyjście mowy (np. samo urządzenie, system zewnętrzny).
1. **Uruchamianie mowy:** Opisz sposób uruchamiania mowy (automatycznie, przyciskiem, menu).
1. **Brakujące dane:** Wskaż brakujące dane, które powinny być odczytane.
1. **Uwaga:** Wyjście mowy może być zapewnione przez dowolny element TIK.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1, 2 lub 3 |


## C.5.1.4 - C.5.1.4 Funkcjonalności uniemożliwiające powiększanie tekstu

### Warunki wstępne
1. 1. Funkcjonalność TIK jest zamknięta dla funkcji powiększania dostępnych na platformie oraz dla technologii wspomagającej.
1. 2. Odległość widzenia jest określana przez dostawcę.

### Procedura
1. 1. Zmierzyć wysokość wielkiej litery H.
1. 2. Sprawdź, czy odpowiada ona kątowi co najmniej 0,7 stopnia przy określonej odległości widzenia.

### Typ oceny
Inspekcja i pomiar

### Checklist
1. **Opis klauzuli:** Jeśli jakakolwiek funkcjonalność TIK jest zamknięta dla funkcji powiększania tekstu platformy lub technologii wspomagającej, TIK musi zapewnić tryb działania, w którym tekst i obrazy tekstowe niezbędne dla całej funkcjonalności są wyświetlane w taki sposób, że nieakcentowana wielka litera "H" obejmuje kąt co najmniej 0,7 stopnia przy odległości widzenia określonej przez dostawcę.
1. **Wzór obliczeniowy:** Kąt obejmowany w stopniach można obliczyć ze wzoru: Ψ = (180 × H) / (π × D), gdzie ψ to kąt obejmowany w stopniach, H to wysokość tekstu, D to odległość widzenia, a D i H są wyrażone w tych samych jednostkach.
1. **Uwaga 1:** Celem jest zapewnienie trybu działania, w którym tekst jest wystarczająco duży, aby mógł być używany przez większość użytkowników z niskim wzrokiem.
1. **Uwaga 2:** Tabela 5.1 i Rysunek 1 ilustrują związek między maksymalną odległością widzenia a minimalną wysokością znaków przy określonym minimalnym kącie obejmowanym.
1. <table><caption>Tabela 5.1: Związek między maksymalną projektową odległością widzenia a minimalną wysokością znaków przy granicy kąta obejmowanego</caption><thead><tr><th scope="col">Minimalny kąt obejmowany</th><th scope="col">Maksymalna projektowa odległość widzenia</th><th scope="col">Minimalna wysokość znaków</th></tr></thead><tbody><tr><th scope="row" rowspan="10">0,7 stopni</th><td>100 mm</td><td>1,2 mm</td></tr><tr><td>200 mm</td><td>2,4 mm</td></tr><tr><td>250 mm</td><td>3,1 mm</td></tr><tr><td>300 mm</td><td>3,7 mm</td></tr><tr><td>350 mm</td><td>4,3 mm</td></tr><tr><td>400 mm</td><td>4,9 mm</td></tr><tr><td>450 mm</td><td>5,5 mm</td></tr><tr><td>500 mm</td><td>6,1 mm</td></tr><tr><td>550 mm</td><td>6,7 mm</td></tr><tr><td>600 mm</td><td>7,3 mm</td></tr></tbody></table>
1. **Ilustracja:** ![Wykres wizualizujący tabelę 5.1 - związek między maksymalną odległością widzenia a minimalną wysokością znaków przy kącie obejmowanym 0,7 stopnia](img/5_1_4.png)
1. **Pomiar i obliczenie:** Zmierz wysokość wielkiej litery H i obliczyć kąt Ψ=(180×H)/(π×D), by potwierdzić wartość co najmniej 0,7 stopnia.
1. **Porównanie z tabelą:** Porównaj wynik z Tabelą 5.1 i Rysunkiem 1, by ustalić minimalny rozmiar przy deklarowanej odległości widzenia.
1. **Odległość widzenia:** Zanotuj odległość widzenia określoną przez dostawcę i sposób jej zastosowania w obliczeniu.
1. **Wyświetlanie w trybie:** Upewnić się, że tryb działania wyświetla cały wymagany tekst i obrazy tekstowe w obliczonym rozmiarze.
1. **Przypadki niezgodności:** Zanotuj przypadki, gdy kąt jest mniejszy niż 0,7 stopnia.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 2: prawda |
| Niezaliczone | Kryterium 2: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2 |


## C.5.1.5 - C.5.1.5 Wyjście wizualne dla informacji dźwiękowych

### Warunki wstępne
1. 1. Aby umożliwić korzystanie z funkcjonalności zamkniętych TIK , konieczne jest wcześniejsze przygotowanie nagrań sygnału dźwiękowego.

### Procedura
1. 1. Sprawdź, czy informacje wizualne odpowiadają nagraniom sygnału dźwiękowego.

### Typ oceny
Inspekcja

### Checklist
1. **Potwierdzenie równoważności:** Dla każdej potrzebnej informacji dźwiękowej potwierdź istnienie równoważnej informacji wizualnej (napisy, transkrypcja).
1. **Zawartość informacji:** Upewnij się, że informacja wizualna oddaje czas, tożsamość nadawcy i kontekst wydarzenia.
1. **Synchronizacja:** Opisz synchronizację pomiędzy kanałem audio a wizualnym.
1. **Aktywacja:** Zanotuj, czy wizualizacje pojawiają się automatycznie czy wymagają ręcznej aktywacji.
1. **Braki:** Wymień elementy audio bez odpowiednika wizualnego lub wymagające uzupełnienia.
1. **Uwaga:** Ta informacja wizualna może mieć formę napisów lub transkrypcji tekstowej.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.5.1.6.1 - C.5.1.6.1 Działanie bez korzystania z klawiatury (funkcjonalność zamknięta)

### Warunki wstępne
1. 1. Funkcjonalność TIK jest zamknięta dla klawiatur i interfejsów klawiatury.

### Procedura
1. 1. Sprawdź, czy wszystkie funkcjonalności można obsługiwać bez użycia wzroku.

### Typ oceny
Inspekcja

### Checklist
1. **Sprawdzenie obsługi:** Sprawdź, czy wszystkie funkcje zamknięte na klawiatury/interfejsy klawiaturowe da się obsługiwać metodą wspierającą konkretne potrzeby.
1. **Wejścia niewizualne:** Udokumentuj wejścia niewizualne (np. dotyk, gesty, polecenia głosowe) umożliwiające korzystanie z funkcji.
1. **Skróty klawiaturowe:** Potwierdź, że skróty klawiaturowe nie wymagają patrzenia na ekran.
1. **Spójność sterowań:** Zapisz, czy te same sterowania działają spójnie w różnych trybach funkcjonalności.
1. **Czynności wymagające wzroku:** Zanotuj czynności nadal wymagające wsparcia wzroku.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.5.1.6.2 - C.5.1.6.2 Fokus

### Warunki wstępne
1. 1. Funkcjonalność TIK jest zamknięta dla klawiatur i interfejsów klawiatury.
1. 2. Fokus może być przeniesiony na element interfejsu użytkownika.

### Procedura
1. 1. Sprawdź, czy istnieje możliwość usunięcia fokusu z elementu za pomocą tego samego mechanizmu.

### Typ oceny
Inspekcja

### Checklist
1. **Usuwanie fokusu:** Gdy fokus może być przeniesiony na element interfejsu, upewnij się, że ten sam mechanizm pozwala go stamtąd usunąć, zapobiegając pułapkom fokusu.
1. **Test ruchu fokusu:** Przetestuj ruch fokusa w obu kierunkach i zanotuj użyty klawisz lub gest.
1. **Opuszczenie elementu:** Sprawdź, czy opuszczenie elementu nie wymaga dodatkowego kroku zależnego od wzroku.
1. **Pułapki fokusa:** Zanotuj występujące pułapki fokusa lub niespójne zachowanie.
1. **Kontekst testowania:** Opisz kontekst testowania (np. modalne okno, formularz).

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2 |


## C.5.1.7 - C.5.1.7 Dostęp bez użycia mowy

### Warunki wstępne
1. 1. Aby umożliwić korzystanie z funkcjonalności zamkniętych TIK , konieczna jest mowa.

### Procedura
1. 1. Sprawdź, czy zamknięte funkcje można aktywować za pomocą alternatywnego mechanizmu wprowadzania, który nie wymaga posługiwania się mową.

### Typ oceny
Inspekcja

### Checklist
1. **Funkcje wymagające mowy:** Wymień funkcje wymagające mowy i potwierdź, że istnieje alternatywna metoda wprowadzania bez użycia głosu.
1. **Uruchomienie alternatywy:** Udokumentuj sposób uruchomienia alternatywy oraz zakres jej działania.
1. **Test ścieżki alternatywnej:** Przetestuj ścieżkę alternatywną od początku do końca, by potwierdzić zakończenie zadania.
1. **Elementy dostępne tylko głosowo:** Zanotuj elementy nadal dostępne tylko głosowo.
1. **Ustawienia domyślne:** Zapisz ustawienia, które domyślnie kierują użytkownika do kanału mówionego.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.5.2 - C.5.2 Aktywacja funkcji dostępności

### Warunki wstępne
1. 1. TIK zapewnia udokumentowane funkcje dostępności uwzględniające konkretne potrzeby.

### Procedura
1. 1. Sprawdź, czy można aktywować te funkcje dostępności, nie korzystając z metody, która nie uwzględnia tych potrzeb.

### Typ oceny
Inspekcja

### Checklist
1. **Lista funkcji dostępności:** Zidentyfikuj wszystkie dokumentowane funkcje dostępności i upewnij się, że da się je aktywować metodą wspierającą konkretne potrzeby.
1. **Ścieżki aktywacji:** Opisz ścieżki aktywacji (menu, przycisk, skrót, głosowe).
1. **Przepływ użytkownika:** Sprawdź, czy aktywacja funkcji dostępności nie przerywa normalnego przepływu pracy użytkownika ani nie wymusza niepożądanych zmian w interakcji.
1. **Zależności:** Zapisz zależności od innych technologii lub urządzeń pomocniczych.
1. **Informacje dla użytkownika:** Zanotuj, czy system informuje użytkownika, gdy dana funkcja jest potrzebna.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.5.4 - C.5.4 Zachowanie informacji o dostępności podczas konwersji

### Warunki wstępne
1. 1. Niezastrzeżone informacje dotyczące dostępności są udokumentowane.
1. 2. TIK konwertuje informacje lub komunikację.
1. 3. Niezastrzeżone informacje dotyczące dostępności mogą być zawarte w formacie docelowym.
1. 4. Niezastrzeżone informacje dotyczące dostępności mogą być obsługiwane przez format docelowy.

### Procedura
1. 1. Sprawdź, czy niezastrzeżone informacje dotyczące dostępności są zachowane po konwersji w TIK informacji lub komunikacji.

### Typ oceny
Inspekcja

### Checklist
1. **Zachowanie informacji:** Upewnij się, że niezastrzeżone informacje o dostępności są zachowywane podczas konwersji informacji lub komunikacji.
1. **Formaty i dane:** Udokumentuj format źródłowy, format docelowy oraz przenoszone dane dostępnościowe.
1. **Możliwości formatu:** Sprawdź, czy format docelowy może przechować odpowiedniki (tekst alternatywny, napisy, transkrypcje).
1. **Weryfikacja wyniku:** Przejrzyj logi lub wynik konwersji, by potwierdzić brak utraty danych.
1. **Problemy z formatami:** Zanotuj formaty niedające się udokumentować i sposób radzenia sobie z takimi sytuacjami.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1, 2, 3 lub 4 |


## C.5.5.1 - C.5.5.1 Środki obsługi

### Warunki wstępne
1. 1. TIK zawiera części obsługiwane, które wymagają chwytania, ściskania lub skręcania nadgarstka.

### Procedura
1. 1. Sprawdź, czy istnieje dostępny alternatywny sposób, który nie wymaga zastosowania takich działań.

### Typ oceny
Test

### Checklist
1. **Alternatywy dla ruchów:** Jeśli TIK posiada części obsługiwane wymagające chwytu, ściskania lub skręcania nadgarstka, sprawdź, czy są dostępne alternatywy bez tych ruchów.
1. **Dokumentacja alternatyw:** Dokumentuj alternatywne środki (np. większe przyciski, gesty, głos).
1. **Test alternatywy:** Przetestuj, czy alternatywa rzeczywiście pozwala wykonać tę samą czynność.
1. **Wymagania wzrokowe:** Zapisz, czy alternatywa wymaga uprzedniego przygotowania wzrokowego.
1. **Cechy konstrukcyjne:** Zanotuj cechy konstrukcyjne redukujące obciążenie nadgarstka.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.5.5.2 - C.5.5.2 Rozpoznawalność części obsługiwanych

### Warunki wstępne
1. 1. TIK zawiera części obsługiwane.

### Procedura
1. 1. Określ, czy istnieje sposób na rozpoznanie każdej części, którą można obsługiwać w sposób niewizualny.
1. 2. Sprawdź, czy działanie związane z częścią obsługiwaną nie zostało wykonane z użyciem środków do rozpoznania każdej części obsługiwanej w kroku 1.

### Typ oceny
Test

### Checklist
1. **Rozpoznawalność części:** Dla każdej części obsługiwanej sprawdź, czy użytkownik może ją rozpoznać bez względu na wzrok.
1. **Wskazówki niewizualne:** Wymień wskazówki dotykowe, dźwiękowe lub inne, które pozwalają na identyfikację przed wykonaniem działania.
1. **Rozpoznanie bez aktywacji:** Potwierdź, że rozpoznanie jest możliwe bez wykonywania funkcji.
1. **Procedura obsługi:** Opisz procedurę odnalezienia danej części i jej aktywacji.
1. **Części bez wskazówek:** Zanotuj części, które nie mają niewizualnych wskazówek.
1. **Uwaga:** Jednym ze sposobów spełnienia tego wymagania jest uczynienie części operacyjnych rozpoznawalnymi dotykiem.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1 i 2: prawda |
| Niezaliczone | Kryteria 1 lub 2: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.5.6.1 - C.5.6.1 Status dotyku lub dźwięku

### Warunki wstępne
1. 1. TIK ma element sterujący blokujący lub przełączający.
1. 2. Elementy sterujące blokujące lub przełączające są widoczne dla użytkownika.

### Procedura
1. 1. Sprawdź, czy istnieje przynajmniej jeden tryb działania, w którym stan wszystkich elementów sterujących blokujących lub przełączających można określić dotykowo, bez aktywowania elementu sterującego.
1. 2. Sprawdź, czy istnieje przynajmniej jeden tryb działania, w którym stan wszystkich elementów sterujących blokujących lub przełączających można określić dźwiękiem, bez aktywowania elementu sterującego.

### Typ oceny
Inspekcja

### Checklist
1. **Stan elementów:** Gdy TIK ma elementy blokujące lub przełączające widoczne dla użytkownika, sprawdź, czy ich stan można określić dotykiem lub dźwiękiem bez aktywowania elementu sterującego.
1. **Test w różnych trybach:** Testuj różne tryby działania, by potwierdzić obecność dotykowych oraz dźwiękowych wskazówek.
1. **Dokumentacja stanów:** Udokumentuj, jak stan obejmuje kontrolki dwustopniowe lub trzystopniowe (np. Caps Lock, głośność).
1. **Niezależność od wzroku:** Upewnij się, że wskazówki nie bazują na kolorze ani podświetleniu.
1. **Brakujące wskaźniki:** Zanotuj wskaźniki lub elementy bez wymaganych informacji.
1. **Uwaga 1:** Elementy blokujące lub przełączające to te kontrolki, które mogą mieć tylko dwa lub trzy stany i zachowują swój stan podczas użytkowania.
1. **Uwaga 2:** Przykładem elementu blokującego lub przełączającego jest klawisz "Caps Lock" na większości klawiatur. Innym przykładem jest przycisk głośności w automacie telefonicznym, który można ustawić na normalną, głośną lub bardzo głośną głośność.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1 lub 2: prawda |
| Niezaliczone | Kryteria 1 i 2: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2 |


## C.5.6.2 - C.5.6.2 Status wizualny

### Warunki wstępne
1. 1. TIK ma element sterujący blokujący lub przełączający.
1. 2. Elementy sterujące blokujące lub przełączające są dostępne dla użytkownika.

### Procedura
1. 1. Sprawdź, czy opóźnienie między ponownymi wciśnięciami klawisza można ustawić co najmniej na 2 sekundy.
1. 2. Sprawdź, czy częstotliwość ponownego wciśnięcia klawiszy może zostać ustawiona na poziomie 2 sekund na znak.

### Typ oceny
Inspekcja

### Checklist
1. **Status wizualny:** Gdy status blokady lub przełącznika jest prezentowany w sposób niewizualny, sprawdź, czy ten status można także zobaczyć gdy kontrolka jest pokazana.
1. **Opis wskaźnika:** Opisz wizualny wskaźnik (np. dioda) i jego sposób działania.
1. **Dostępność wskaźnika:** Potwierdź, że wskaźnik jest zawsze dostępny, gdy kontrolka jest prezentowana.
1. **Niezależność od aktywacji:** Sprawdź, czy wskaźnik nie wymaga uruchamiania kontrolki.
1. **Brakujące informacje:** Zanotuj przypadki, gdy wizualna informacja jest nieobecna lub trudna do odczytania.
1. **Uwaga 1:** Elementy blokujące lub przełączające to te kontrolki, które mogą mieć tylko dwa lub trzy stany i zachowują swój stan podczas użytkowania.
1. **Uwaga 2:** Przykładem elementu blokującego lub przełączającego jest klawisz "Caps Lock" na większości klawiatur. Przykładem uczynienia statusu kontrolki rozpoznawalnym jest wizualny wskaźnik statusu na klawiaturze.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1 i 2: prawda |
| Niezaliczone | Kryterium 1 lub 2: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2 |


## C.5.7 - C.5.7 Ponowne wciśnięcie klawisza

### Warunki wstępne
1. 1. TIK obsługuje funkcję ponownego wciśnięcia klawisza oraz dostarcza klawiaturę, na której jest ona dostępna.
1. 2. Funkcji ponownego wciśnięcia klawisza nie można wyłączyć.

### Procedura
1. 1. Sprawdź, czy opóźnienie między ponownymi wciśnięciami klawisza można ustawić co najmniej na 2 sekundy.
1. 2. Sprawdź, czy częstotliwość ponownego wciśnięcia klawiszy może zostać ustawiona na poziomie 2 sekund na znak.

### Typ oceny
Test

### Checklist
1. **Ustawienia opóźnienia:** Potwierdź, że opóźnienie przed ponownym wciśnięciem klawisza można ustawić na co najmniej 2 sekundy, a tempo powtarzania na 1 znak/2 sekundy.
1. **Mechanizmy regulacji:** Udokumentuj mechanizmy lub menu, gdzie można regulować opóźnienie i tempo.
1. **Test wartości:** Przetestuj kilka wartości, by zapewnić natychmiastowy efekt działania.
1. **Weryfikacja ustawień:** Zapisz wybrane wartości i sposób ich weryfikacji.
1. **Ograniczenia:** Zanotuj sytuacje, gdy nie można osiągnąć wymaganych minimalnych nastaw.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1 i 2: prawda |
| Niezaliczone | Kryterium 1 lub 2: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2 |


## C.5.8 - C.5.8 Akceptacja dwukrotnego kliknięcia klawisza

### Warunki wstępne
1. 1. TIK jest wyposażona w klawiaturę lub klawiaturę pomocniczą.

### Procedura
1. 1. Sprawdź, czy istnieje mechanizm umożliwiający regulację opóźnienia po każdym naciśnięciu klawisza, podczas którego dodatkowe naciśnięcie klawisza nie zostanie zaakceptowane, jeśli jest ono identyczne z poprzednim naciśnięciem klawisza.
1. 2. Ustawić mechanizm na maksymalną wartość.
1. 3. Nacisnąć dowolny klawisz.
1. 4. Po 0,5 s nacisnąć ten sam klawisz co w kroku 3.
1. 5. Sprawdź, czy naciśnięcie w kroku 4 zostało zaakceptowane.

### Typ oceny
Test

### Checklist
1. **Ustawienie opóźnienia:** Sprawdź, czy można ustawić opóźnienie po naciśnięciu klawisza tak, by identyczne powtórzenie w tym czasie nie było akceptowane.
1. **Test maksymalnego opóźnienia:** Przy maksymalnym opóźnieniu naciśnij ten sam klawisz dwa razy (0,5 s) i potwierdź, że drugie naciśnięcie jest zaakceptowane dopiero po przekroczeniu opóźnienia.
1. **Regulacja i sygnalizacja:** Opisz sposób regulacji opóźnienia i sygnalizacji jego osiągnięcia.
1. **Test dla kilku klawiszy:** Przetestuj mechanizm dla kilku klawiszy.
1. **Problemy z opóźnieniem:** Zanotuj przypadki, gdy opóźnienie nie działa lub nie można go ustawić.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda oraz kryterium 5: fałsz |
| Niezaliczone | Kryterium 1: fałsz lub kryterium 5: prawda |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.5.9 - C.5.9 Jednoczesne czynności użytkownika

### Warunki wstępne
1. 1. TIK posiada tryb pracy wymagający jednoczesnych czynności użytkownika.

### Procedura
1. 1. Sprawdź, czy istnieje tryb pracy, który nie wymaga jednoczesnych czynności użytkownika.
1. 2. Określ w TIK wszystkie funkcje sterowane przez użytkowników.
1. 3. Sprawdź, czy każda funkcja, którą można sterować, może być obsługiwana za pomocą pojedynczego działania użytkownika.

### Typ oceny
Inspekcja

### Checklist
1. **Tryby z jednoczesnymi czynnościami:** Wymień tryby wymagające jednoczesnych czynności i potwierdź, że istnieje alternatywny tryb bez takich wymagań.
1. **Funkcje i odpowiedniki:** Dokumentuj funkcje obsługiwane przez jednoczesne działania i ich pojedyncze odpowiedniki.
1. **Test trybów alternatywnych:** Przetestuj każdy tryb alternatywny, opisując kroki wykonania.
1. **Opcje obsługi:** Sprawdź, czy każda funkcja ma opcję obsługi w pojedynczym działaniu lub sekwencji kroków.
1. **Funkcje wymagające jednoczesnych działań:** Zanotuj funkcje, które nadal wymagają jednoczesnych działań.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 3: prawda |
| Niezaliczone | Kryterium 3: fałsz dla wszystkich trybów pracy |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.5.3-1 - C.5.3-1 Biometria – Test 1: Identyfikacja

### Warunki wstępne
1. 1. Do identyfikacji użytkownika urządzenie lub system (TIK) wykorzystuje charakterystyki biologiczne.

### Procedura
1. 1. Sprawdź, czy identyfikację użytkownika można przeprowadzić za pomocą więcej niż jednej metody.

### Typ oceny
Test

### Checklist
1. **Wymaganie alternatywy:** Jeśli TIK używa cech biologicznych do identyfikacji użytkownika, upewnij się, że nie polega wyłącznie na jednej charakterystyce.
1. **Dokumentacja alternatywy:** Udokumentuj alternatywę (biometryczna lub niebiometryczna, np. kod PIN, hasło).
1. **Sprawdzenie wymagań:** Potwierdź, że alternatywna metoda spełnia te same wymagania bez wprowadzania barier.
1. **Zachowanie przy awarii:** Zanotuj zachowanie systemu, gdy podstawowa biometria zawodzi lub zostanie odrzucona (np. brudny palec).
1. **Testowane cechy:** Zanotuj, które cechy biometryczne zostały przetestowane i dlaczego wybrano daną alternatywę.
1. **Uwaga 1:** Alternatywne metody identyfikacji użytkownika mogą być niebiometryczne lub biometryczne.
1. **Uwaga 2:** Metody biometryczne oparte na różnych cechach biologicznych zwiększają prawdopodobieństwo, że osoby z niepełnosprawnościami posiadają co najmniej jedną z określonych cech. Przykłady: odciski palców, wzory siatkówki oka, głos, twarz.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.5.3-2 - C.5.3-2 Biometria – Test 2: Kontrola

### Warunki wstępne
1. 1. TIK wykorzystuje charakterystyki biologiczne do sterowania funkcjami TIK.

### Procedura
1. 1. Sprawdź, czy sterowanie funkcjami TIK można przeprowadzić za pomocą więcej niż jednej metody.

### Typ oceny
Test

### Checklist
1. **Potwierdzenie alternatyw:** Potwierdź, że test obejmuje te same alternatywy wymagane przez klauzulę 5.3 dla kontroli funkcji TIK.
1. **Funkcje kontrolowane biometrycznie:** Dokumentuj, które funkcje TIK są kontrolowane biometrycznie i w jaki sposób alternatywa je obejmuje.
1. **Brak dodatkowych barier:** Sprawdź, czy alternatywa nie narzuca dodatkowych barier dostępu.
1. **Zachowanie przy awarii:** Opisz zachowanie systemu w przypadku braku lub odrzucenia wejścia biometrycznego.
1. **Ograniczenia:** Zanotuj ograniczenia sprzętowe lub prywatnościowe wpływające na alternatywną metodę kontroli.
1. **Uwaga 1:** Alternatywne metody kontroli TIK mogą być niebiometryczne lub biometryczne.
1. **Uwaga 2:** Metody biometryczne oparte na różnych cechach biologicznych zwiększają prawdopodobieństwo, że osoby z niepełnosprawnościami posiadają co najmniej jedną z określonych cech. Przykłady: odciski palców, wzory siatkówki oka, głos, twarz.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.6.1 - C.6.1 Szerokość pasma sygnału mowy

### Warunki wstępne
1. 1. Testowana TIK udostępnia dwukierunkową komunikację głosową.

### Procedura
1. 1. Sprawdź, czy TIK może kodować i dekodować dźwięk w zakresie częstotliwości z górną granicą co najmniej 7 000 Hz.

### Typ oceny
Pomiar

### Checklist
1. **Sprawdzenie zakresu częstotliwości:** Sprawdź, czy TIK może kodować i dekodować dźwięk w zakresie częstotliwości z górną granicą co najmniej 7 000 Hz.
1. **Uwaga 1:** Dla celów interoperacyjności szeroko stosuje się obsługę zalecenia ITU-T G.722 (1988): "Kodowanie dźwięku 7 kHz w 64 kbit/s".
1. **Uwaga 2:** W przypadku negocjacji kodeka czasami stosuje się inne standaryzowane kodeki, takie jak zalecenie ITU-T G.722.2, aby uniknąć transkodowania. Zalecenie ITU-T G.722.2 (2003): "Szerokopasmowe kodowanie mowy około 16 kbit/s przy użyciu adaptacyjnego szerokopasmowego AMR-WB".

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.6.2.1.1 - C.6.2.1.1 Komunikacja RTT

### Warunki wstępne
1. 1. Testowany system TIK udostępnia dwukierunkową komunikację głosową.
1. 2. TIK pracuje w trybie umożliwiającym dwukierunkową komunikację głosową.
1. 3. Dostępny jest "referencyjny terminal obsługujący komunikację RTT".

### Procedura
1. 1. Sprawdź, czy system TIK umożliwia użytkownikowi komunikację RTT z innym "referencyjnym" TIK.

### Typ oceny
Inspekcja

### Checklist
1. **Sprawdzenie dostępności RTT:** Sprawdź, czy system TIK umożliwia użytkownikowi komunikację RTT z innym "referencyjnym" TIK.
1. **Uwaga 1:** To wymaganie obejmuje produkty, które nie mają fizycznych możliwości wyświetlania lub wprowadzania tekstu, ale mają możliwość połączenia z urządzeniami, które takie możliwości posiadają. Obejmuje również pośrednie TIK między punktami końcowymi komunikacji.
1. **Uwaga 2:** Nie ma wymagania dodawania: wyświetlacza sprzętowego, klawiatury sprzętowej lub sprzętu do obsługi możliwości połączenia z wyświetlaczem lub klawiaturą, przewodowo lub bezprzewodowo, jeśli taki sprzęt nie byłby normalnie dostarczany.
1. **Uwaga 3:** Dla celów interoperacyjności szeroko stosuje się obsługę zalecenia ITU-T T.140 (1988): "Recommendation ITU-T T.140 (1988): "Protocol for multimedia application text conversation".

### Notatki
1. "Referencyjny terminal obsługujący komunikację RTT" to terminal specjalnie zaprojektowany do testowania urządzeń obsługujących komunikację RTT w sposób potwierdzający ich funkcjonalność i interoperacyjność. Takie terminale są zazwyczaj tworzone przez krajowe lub międzynarodowe instytucje normalizacyjne, tak aby wszystkie testy były przeprowadzane na spójnym "referencyjnym terminalu obsługującym komunikację RTT".

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 |
| Nie do sprawdzenia | Nie spełniono warunku wstępnego 3 |


## C.6.2.1.2 - C.6.2.1.2 Równoczesna komunikacja głosowa i tekstowa

### Warunki wstępne
1. 1. TIK obsługuje dwukierunkową komunikację głosową.
1. 2. TIK obsługuje dwukierunkową komunikację za pomocą RTT.

### Procedura
1. 1. Sprawdź, czy TIK umożliwia jednoczesne korzystanie z połączeń głosowych i RTT przez połączenie jednego użytkownika.

### Typ oceny
Inspekcja

### Checklist
1. **Sprawdzenie równoczesności:** Sprawdź, czy TIK umożliwia jednoczesne korzystanie z połączeń głosowych i RTT przez połączenie jednego użytkownika.
1. **Uwaga 1:** W przypadku komunikacji wielostronnej, takiej jak system konferencyjny, dopuszcza się (ale nie wymaga ani niekoniecznie zaleca), aby RTT był obsługiwany w pojedynczym polu wyświetlania i aby konieczne było "przejmowanie głosu", aby uniknąć zamieszania (w taki sam sposób, jak przejście głosu jest wymagane dla tych, którzy prezentują/mówią głosem).
1. **Uwaga 2:** W przypadku komunikacji wielostronnej najlepszą praktyką jest obsługa podnoszenia ręki dla użytkowników głosowych i RTT w taki sam sposób, aby użytkownicy głosowi i RTT znajdowali się w tej samej kolejce.
1. **Uwaga 3:** W systemie konferencji wielostronnej, który ma czat jako jedną z funkcji - RTT (jak głos) byłby zwykle oddzielony od czatu, aby użycie RTT nie zakłócało czatu (tj. ludzie mogą wysyłać wiadomości w polu czatu, podczas gdy osoba prezentuje/mówi z RTT - w taki sam sposób, jak ludzie wysyłają wiadomości za pomocą funkcji czatu, podczas gdy inni mówią głosem). Użytkownicy RTT używają wtedy RTT do prezentowania i używają funkcji Czat do wysyłania wiadomości, podczas gdy inni prezentują (za pośrednictwem Głosu lub RTT).
1. **Uwaga 4:** Dostępność głosu i RTT działających jednocześnie (i oddzielnie od czatu) może również pozwolić polu RTT na obsługę napisów tekstowych, gdy ktoś mówi (i dlatego nie jest używany do RTT, ponieważ nie jest to kolej użytkownika RTT do mówienia).
1. **Uwaga 5:** Jeśli wymagane jest zarówno oprogramowanie po stronie serwera, jak i lokalne oprogramowanie sprzętowe i oprogramowanie do zapewnienia komunikacji głosowej, gdzie żadna część nie może obsługiwać komunikacji głosowej bez drugiej i są sprzedawane jako jednostka dla funkcji komunikacji głosowej, komponenty lokalne i po stronie serwera są uważane za pojedynczy produkt.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2. |


## C.6.2.2.1 - C.6.2.2.1 Wyświetlacz umożliwiający rozróżnianie tekstu

### Warunki wstępne
1. 1. Testowana TIK zapewnia możliwość wysyłania i odbierania komunikacji RTT.
1. 2. TIK obsługuje mechanizmy RTT.
1. 3. Dostępny jest "referencyjny terminal obsługujący komunikację RTT".

### Procedura
1. 1. Testowana TIK jest podłączona do "referencyjnego terminala obsługującego RTT".
1. 2. Różne elementy TIK są w stanie działania (połączenie jest aktywne, a terminale we właściwym trybie RTT) i dwa terminale komunikują się ze sobą.
1. 3. Testowany system TIK wysyła krótki tekst.
1. 4. "Terminal referencyjny RTT" wysyła krótki tekst.
1. 5. Sprawdź na testowanej TIK , czy wyświetlany nadawany tekst wizualnie różni się od otrzymanego tekstu i jest od niego oddzielony.

### Typ oceny
Inspekcja

### Checklist
1. **Rozróżnienie tekstu:** Sprawdź na testowanej TIK, czy wyświetlany nadawany tekst wizualnie różni się od otrzymanego tekstu i jest od niego oddzielony.
1. **Uwaga:** Możliwość wyboru przez użytkownika wyświetlania tekstu wysyłanego i odbieranego w linii lub oddzielnie, z opcjami wyboru, pozwala użytkownikom wyświetlać RTT w formie, która najlepiej dla nich działa. Pozwoliłoby to użytkownikom Braille'a używać pojedynczego pola i przejmować głos oraz mieć tekst pojawiający się w sekwencyjny sposób, którego mogą potrzebować lub preferować.

### Notatki
1. "Referencyjny terminal obsługujący komunikację RTT" to terminal specjalnie zaprojektowany do testowania urządzeń obsługujących komunikację RTT w sposób potwierdzający ich funkcjonalność i interoperacyjność. Takie terminale są zazwyczaj tworzone przez krajowe lub międzynarodowe instytucje normalizacyjne, tak aby wszystkie testy były przeprowadzane na spójnym "referencyjnym terminalu obsługującym komunikację RTT".

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 5: prawda |
| Niezaliczone | Kryterium 5: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2 |
| Nie do sprawdzenia | Nie spełniono warunku wstępnego 3 |


## C.6.2.2.2 - C.6.2.2.2 Możliwe do określenia programowo kierunku nadawania i odbioru

### Warunki wstępne
1. 1. TIK zapewnia możliwość wysyłania i odbierania komunikacji RTT.
1. 2. RTT jest funkcjonalnością otwartą.
1. 3. Dostępny jest "referencyjny terminal obsługujący komunikację RTT".

### Procedura
1. 1. Testowana TIK jest podłączona do "referencyjnego terminala obsługującego RTT".
1. 2. Różne elementy TIK są w stanie działania (połączenie jest aktywne, a terminale we właściwym trybie RTT) i dwa terminale komunikują się ze sobą.
1. 3. Testowany system TIK wysyła krótki tekst.
1. 4. "Terminal referencyjny RTT" wysyła krótki tekst.
1. 5. Sprawdź, czy kierunek nadawania/odbioru przesyłanego tekstu jest możliwy do określenia programowo.

### Typ oceny
Inspekcja

### Checklist
1. **Określenie kierunku:** Sprawdź, czy kierunek nadawania/odbioru przesyłanego tekstu jest możliwy do określenia programowo.
1. **Uwaga:** Umożliwia to czytnikom ekranu rozróżnienie między tekstem przychodzącym a wychodzącym podczas używania funkcjonalności RTT.

### Notatki
1. "Referencyjny terminal obsługujący komunikację RTT" to terminal specjalnie zaprojektowany do testowania urządzeń obsługujących komunikację RTT w sposób potwierdzający ich funkcjonalność i interoperacyjność. Takie terminale są zazwyczaj tworzone przez krajowe lub międzynarodowe instytucje normalizacyjne, tak aby wszystkie testy były przeprowadzane na spójnym "referencyjnym terminalu obsługującym komunikację RTT".

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 5: prawda |
| Niezaliczone | Kryterium 5: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2 |
| Nie do sprawdzenia | Nie spełniono warunku wstępnego 3 |


## C.6.2.2.3 - C.6.2.2.3 Identyfikacja mówcy

### Warunki wstępne
1. 1. TIK obsługuje RTT.
1. 2. TIK zapewnia identyfikację mówcy w przypadku komunikacji głosowej.
1. 3. Dostępny jest "referencyjny terminal obsługujący komunikację RTT".

### Procedura
1. 1. Testowana TIK jest podłączona do "referencyjnego terminala obsługującego RTT".
1. 2. RTT jest wysyłana z "referencyjnego terminala".
1. 3. Sprawdź na podstawie obserwacji, czy testowana TIK umożliwia identyfikację mówcy dla tekstu przychodzącego w trybie RTT.

### Typ oceny
Inspekcja

### Checklist
1. **Identyfikacja mówcy dla RTT:** Sprawdź na podstawie obserwacji, czy testowana TIK umożliwia identyfikację mówcy dla tekstu przychodzącego w trybie RTT.
1. **Uwaga:** Jest to konieczne, aby zarówno uczestnicy głosowi, jak i RTT wiedzieli, kto obecnie komunikuje się, czy to w RTT, czy głosem.

### Notatki
1. "Referencyjny terminal obsługujący komunikację RTT" to terminal specjalnie zaprojektowany do testowania urządzeń obsługujących komunikację RTT w sposób potwierdzający ich funkcjonalność i interoperacyjność. Takie terminale są zazwyczaj tworzone przez krajowe lub międzynarodowe instytucje normalizacyjne, tak aby wszystkie testy były przeprowadzane na spójnym "referencyjnym terminalu obsługującym komunikację RTT".

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 2: prawda |
| Niezaliczone | Kryterium 2: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2 |
| Nie do sprawdzenia | Nie spełniono warunku wstępnego 3 |


## C.6.2.2.4 - C.6.2.2.4 Wizualny wskaźnik audio połączonego z RTT

### Warunki wstępne
1. 1. TIK zapewnia dwukierunkową komunikację głosową.
1. 2. TIK obsługuje RTT.

### Procedura
1. 1. Testowana TIK jest połączona z inną TIK zapewniającą dwukierunkową komunikację głosową, która jest zgodna z komunikacją głosową w testowanej TIK.
1. 2. Osoba mówi do drugiej TIK.
1. 3. Sprawdź na podstawie obserwacji, czy istnieje wizualny wskaźnik aktywności audio w czasie rzeczywistym.

### Typ oceny
Inspekcja

### Checklist
1. **Wizualny wskaźnik aktywności audio:** Sprawdź na podstawie obserwacji, czy istnieje wizualny wskaźnik aktywności audio w czasie rzeczywistym.
1. **Uwaga 1:** Wizualny wskaźnik może być prostą pozycją znaku na wyświetlaczu, która miga włączona i wyłączona, aby odzwierciedlić aktywność audio, lub prezentacja informacji w inny sposób, który może być widoczny dla widzących użytkowników i przekazany użytkownikom głuchoniewidomym używającym wyświetlacza brajlowskiego.
1. **Uwaga 2:** Bez tego wskazania osoba, która nie ma możliwości słyszenia, nie wie, kiedy ktoś mówi.

### Notatki
1. Zaleca się by wskaźnik migał w czasie rzeczywistym w sposób odzwierciedlający aktywność audio.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 3: prawda |
| Niezaliczone | Kryterium 3: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2 |


## C.6.2.3.a - C.6.2.3.a Interoperacyjność (a)

### Warunki wstępne
1. 1. TIK obsługuje dwukierunkową komunikację głosową za pośrednictwem publicznej komutowanej sieci telefonicznej (PSTN).
1. 2. TIK obsługuje dwukierunkową komunikację za pomocą RTT.
1. 3. Dostępny jest „referencyjny terminal V.18”.

### Procedura
1. 1. Sprawdź, czy TIK współpracuje z&nbsp;publiczną komutowaną siecią telefoniczną (PSTN), z&nbsp;terminalem referencyjnym V.18 podłączonym do PSTN zgodnie z&nbsp;zaleceniem ITU-T V.18 lub którymkolwiek z&nbsp;jego załączników dla sygnałów telefonii tekstowej na interfejsie PSTN.

### Typ oceny
Test

### Checklist
1. **Wsparcie technologii RTT:**> Sprawdź, czy TIK współpracuje z&nbsp;publiczną komutowaną siecią telefoniczną (PSTN), z&nbsp;terminalem referencyjnym V.18 podłączonym do PSTN zgodnie z&nbsp;zaleceniem ITU-T V.18 (Zalecenie ITU-T V.18 (2000): "Wymagania operacyjne i współdziałania dla urządzeń DCE pracujących w trybie telefonu tekstowego") lub którymkolwiek z&nbsp;jego załączników dla sygnałów telefonii tekstowej na interfejsie PSTN.
1. **Uwaga 1:**> W praktyce nowe standardy są wprowadzane jako alternatywny kodek/protokół, który jest obsługiwany obok istniejącego wspólnego standardu i używany, gdy wszystkie komponenty end-to-end go obsługują, podczas gdy rozwój technologii, w połączeniu z innymi przyczynami, w tym rozwojem społecznym i efektywnością kosztową, może sprawić, że inne staną się przestarzałe.
1. **Uwaga 2:**> Tam, gdzie do zapewnienia komunikacji głosowej używanych jest wiele technologii, może być potrzebnych wiele mechanizmów interoperacyjności, aby zapewnić, że wszyscy użytkownicy mogą korzystać z RTT.
1. **Przykład:**> System konferencyjny, który obsługuje komunikację głosową przez połączenie internetowe, może zapewniać RTT przez połączenie internetowe przy użyciu zastrzeżonej metody RTT (opcja c). Jednak niezależnie od tego, czy metoda RTT jest zastrzeżona czy nie zastrzeżona, jeśli system konferencyjny oferuje również komunikację telefoniczną, będzie również potrzebował obsługi opcji a lub b, aby zapewnić, że RTT jest obsługiwany przez połączenie telefoniczne.

### Notatki
1. „Referencyjny terminal V.18” to terminal specjalnie zaprojektowany do testowania urządzeń obsługujących V.18 w&nbsp;sposób potwierdzający ich funkcjonalność i&nbsp;interoperacyjność. Takie terminale są zazwyczaj tworzone przez krajowe lub międzynarodowe instytucje normalizacyjne, tak aby wszystkie testy były przeprowadzane na spójnym referencyjnym terminalu.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2 |
| Nie do sprawdzenia | Nie spełniono warunku wstępnego 3 |


## C.6.2.3.b - C.6.2.3.b Interoperacyjność (b)

### Warunki wstępne
1. 1. TIK obsługuje dwukierunkową komunikację głosową z&nbsp;wykorzystaniem protokołu VOIP z&nbsp;protokołem inicjowania sesji (SIP).
1. 2. TIK obsługuje dwukierunkową komunikację za pomocą RTT.
1. 3. Dostępny jest „referencyjny terminal obsługujący komunikację RTT”.

### Procedura
1. 1. Sprawdź, czy TIK współdziała z&nbsp;„referencyjnym terminalem obsługującym komunikację RTT” z&nbsp;wykorzystaniem protokołu VOIP z&nbsp;protokołem inicjowania sesji (SIP) oraz z&nbsp;wykorzystaniem RTT zgodnej z&nbsp;dokumentem IETF RFC 4103.
1. 2. Jeśli TIK współpracuje z&nbsp;innymi TIK wykorzystującymi podsystem IP Multimedia (IMS) do wdrożenia VOIP , należy sprawdzić, czy przestrzega on

### Typ oceny
Test

### Checklist
1. **Wsparcie technologii RTT:** Sprawdź, czy TIK współdziała z&nbsp;„referencyjnym terminalem obsługującym komunikację RTT” z&nbsp;wykorzystaniem protokołu VOIP z&nbsp;protokołem inicjowania sesji (SIP) oraz z&nbsp;wykorzystaniem RTT zgodnej z&nbsp;dokumentem IETF RFC 4103 (2005): "RTP Payload for Text Conversation".
1. **Uwaga 1:** W praktyce nowe standardy są wprowadzane jako alternatywny kodek/protokół, który jest obsługiwany obok istniejącego wspólnego standardu i używany, gdy wszystkie komponenty end-to-end go obsługują, podczas gdy rozwój technologii, w połączeniu z innymi przyczynami, w tym rozwojem społecznym i efektywnością kosztową, może sprawić, że inne staną się przestarzałe.
1. **Uwaga 2:** Tam, gdzie do zapewnienia komunikacji głosowej używanych jest wiele technologii, może być potrzebnych wiele mechanizmów interoperacyjności, aby zapewnić, że wszyscy użytkownicy mogą korzystać z RTT.
1. **Przykład:** System konferencyjny, który obsługuje komunikację głosową przez połączenie internetowe, może zapewniać RTT przez połączenie internetowe przy użyciu zastrzeżonej metody RTT (opcja c). Jednak niezależnie od tego, czy metoda RTT jest zastrzeżona czy nie zastrzeżona, jeśli system konferencyjny oferuje również komunikację telefoniczną, będzie również potrzebował obsługi opcji a lub b, aby zapewnić, że RTT jest obsługiwany przez połączenie telefoniczne.

### Notatki
1. „Referencyjny terminal obsługujący komunikację RTT” to terminal specjalnie zaprojektowany do testowania urządzeń obsługujących komunikację RTT w&nbsp;sposób potwierdzający ich funkcjonalność i&nbsp;interoperacyjność. Takie terminale są zazwyczaj tworzone przez krajowe lub międzynarodowe instytucje normalizacyjne, tak aby wszystkie testy były przeprowadzane na spójnym „referencyjnym terminalu obsługującym komunikację RTT”.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda, a&nbsp;jeśli TIK współpracuje z&nbsp;innymi TIK wykorzystującymi podsystem IP Multimedia (IMS) do wdrożenia VOIP , kryterium 2: prawda. |
| Niezaliczone | Kryterium 1: fałsz lub, jeśli TIK współpracuje z&nbsp;innymi TIK wykorzystującymi podsystem IP Multimedia (IMS) do wdrożenia VOIP , kryterium 2: fałsz. |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2 |
| Nie do sprawdzenia | Nie spełniono warunku wstępnego 3 |


## C.6.2.3.c - C.6.2.3.c Interoperacyjność (c)

### Warunki wstępne
1. 1. TIK umożliwia dwukierunkową komunikację głosową z&nbsp;wykorzystaniem technologii innych niż PSTN lub protokół VOIP z&nbsp;protokołem inicjowania sesji (SIP).
1. 2. TIK obsługuje dwukierunkową komunikację za pomocą RTT.
1. 3. Dostępny jest „referencyjny terminal obsługujący komunikację RTT” dla danego sposobu komunikacji RTT.

### Procedura
1. 1. Sprawdź, czy TIK współdziała z&nbsp;„referencyjnym terminalem obsługującym komunikację RTT” z&nbsp;użyciem odpowiedniej i&nbsp;mającej zastosowanie wspólnej specyfikacji wymiany RTT , która została opublikowana i&nbsp;jest dostępna dla środowiska, w&nbsp;którym będzie działać TIK.
1. 2. Sprawdź, czy wspólna specyfikacja podana w&nbsp;kryterium 1 obejmuje metodę informowania o&nbsp;utracie lub uszkodzeniu znaków.

### Typ oceny
Test

### Checklist
1. **Wsparcie technologii RTT:** Sprawdź, czy TIK współdziała z&nbsp;„referencyjnym terminalem obsługującym komunikację RTT” z&nbsp;użyciem odpowiedniej i&nbsp;mającej zastosowanie wspólnej specyfikacji wymiany RTT , która została opublikowana i&nbsp;jest dostępna dla środowiska, w&nbsp;którym będzie działać TIK.
1. **Uwaga 1:** W praktyce nowe standardy są wprowadzane jako alternatywny kodek/protokół, który jest obsługiwany obok istniejącego wspólnego standardu i używany, gdy wszystkie komponenty end-to-end go obsługują, podczas gdy rozwój technologii, w połączeniu z innymi przyczynami, w tym rozwojem społecznym i efektywnością kosztową, może sprawić, że inne staną się przestarzałe.
1. **Uwaga 2:** Tam, gdzie do zapewnienia komunikacji głosowej używanych jest wiele technologii, może być potrzebnych wiele mechanizmów interoperacyjności, aby zapewnić, że wszyscy użytkownicy mogą korzystać z RTT.
1. **Przykład:** System konferencyjny, który obsługuje komunikację głosową przez połączenie internetowe, może zapewniać RTT przez połączenie internetowe przy użyciu zastrzeżonej metody RTT (opcja c). Jednak niezależnie od tego, czy metoda RTT jest zastrzeżona czy nie zastrzeżona, jeśli system konferencyjny oferuje również komunikację telefoniczną, będzie również potrzebował obsługi opcji a lub b, aby zapewnić, że RTT jest obsługiwany przez połączenie telefoniczne.

### Notatki
1. „Referencyjny terminal obsługujący komunikację RTT” to terminal specjalnie zaprojektowany do testowania urządzeń obsługujących komunikację RTT w&nbsp;sposób potwierdzający ich funkcjonalność i&nbsp;interoperacyjność. Takie terminale są zazwyczaj tworzone przez krajowe lub międzynarodowe instytucje normalizacyjne, tak aby wszystkie testy były przeprowadzane na spójnym „referencyjnym terminalu obsługującym komunikację RTT”.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1 i&nbsp;2: prawda |
| Niezaliczone | Kryteria 1 lub 2: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2 |
| Nie do sprawdzenia | Nie spełniono warunku wstępnego 3 |


## C.6.2.3.d - C.6.2.3.d Interoperacyjność (d)

### Warunki wstępne
1. 1. TIK obsługuje dwukierunkową komunikację głosową.
1. 2. TIK obsługuje dwukierunkową komunikację za pomocą RTT.
1. 3. Dostępny jest "referencyjny terminal obsługujący komunikację RTT" korzystający z nowego standardu RTT.

### Procedura
1. 1. Sprawdź, czy testowana TIK współdziała z "referencyjnym terminalem obsługującym komunikację RTT" dla nowego standardu RTT , który został wprowadzony do użytku.
1. 2. Sprawdź, czy nowy standard RTT jest obsługiwany przez wszystkie inne aktywne TIK , które obsługują komunikację głosową i RTT w tym samym środowisku.

### Typ oceny
Test

### Checklist
1. **Wsparcie technologii RTT:** Sprawdź, czy testowana TIK współdziała z "referencyjnym terminalem obsługującym komunikację RTT" dla nowego standardu RTT , który został wprowadzony do użytku.
1. **Uwaga 1:** W praktyce nowe standardy są wprowadzane jako alternatywny kodek/protokół, który jest obsługiwany obok istniejącego wspólnego standardu i używany, gdy wszystkie komponenty end-to-end go obsługują, podczas gdy rozwój technologii, w połączeniu z innymi przyczynami, w tym rozwojem społecznym i efektywnością kosztową, może sprawić, że inne staną się przestarzałe.
1. **Uwaga 2:** Tam, gdzie do zapewnienia komunikacji głosowej używanych jest wiele technologii, może być potrzebnych wiele mechanizmów interoperacyjności, aby zapewnić, że wszyscy użytkownicy mogą korzystać z RTT.
1. **Przykład:** System konferencyjny, który obsługuje komunikację głosową przez połączenie internetowe, może zapewniać RTT przez połączenie internetowe przy użyciu zastrzeżonej metody RTT (opcja c). Jednak niezależnie od tego, czy metoda RTT jest zastrzeżona czy nie zastrzeżona, jeśli system konferencyjny oferuje również komunikację telefoniczną, będzie również potrzebował obsługi opcji a lub b, aby zapewnić, że RTT jest obsługiwany przez połączenie telefoniczne.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1 i 2: prawda |
| Niezaliczone | Kryteria 1 lub 2: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2 |
| Nie do sprawdzenia | Nie spełniono warunku wstępnego 3. |


## C.6.2.4 - C.6.2.4 Reakcja RTT

### Warunki wstępne
1. 1. Testowana TIK wykorzystuje funkcjonalność wprowadzania danych RTT.
1. 2. Testowana TIK jest połączona z urządzeniem lub oprogramowaniem, które może określić moment, w którym testowana TIK przesyła znaki.

### Procedura
1. 1. Wprowadź pojedyncze znaki na terminalu poddawanym testowi.
1. 2. Zanotuj moment, w którym wpis został zarejestrowany lokalnie na terminalu.
1. 3. Zanotuj moment, w którym ten tekst został przekazany do sieci lub platformy.
1. 4. Zmierz opóźnienie między czynnością wpisu a transmisją tekstu.

### Typ oceny
Pomiar

### Checklist
1. **Reakcja RTT:** Oblicz opóźnienie między czynnością wpisu a transmisją tekstu i sprawdź, czy jest mniejsze lub równe 500 ms.
1. **Uwaga 1:** Dla wprowadzania znak po znaku, "najmniejsza niezawodnie złożona jednostka wprowadzania tekstu" byłaby znakiem. Dla przewidywania słów byłaby słowem. Dla niektórych systemów rozpoznawania głosu - tekst może nie wyjść z oprogramowania rozpoznawania, dopóki nie zostanie wypowiedziane całe słowo (lub fraza). W tym przypadku najmniejsza niezawodnie złożona jednostka wprowadzania tekstu dostępna dla TIK byłaby słowem (lub frazą).
1. **Uwaga 2:** Limit 500 ms pozwala na buforowanie znaków na ten okres przed transmisją, więc transmisja znak po znaku nie jest wymagana, chyba że znaki są generowane wolniej niż 1 na 500 ms.
1. **Uwaga 3:** Opóźnienie 300 ms lub mniej daje użytkownikowi wrażenie działania w czasie rzeczywistym.

### Notatki
1. Identyfikowanie momentu wpisu może różnić się w zależności od rodzaju testowanej funkcjonalności RTT, dlatego należy przeanalizować odpowiedni sygnał lokalny lub status transmisji zgodnie z notatką do klauzuli.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 3: opóźnienie mniejsze lub równe 500 ms |
| Niezaliczone | Kryterium 3: opóźnienie większe niż 500 ms |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 |
| Nie do sprawdzenia | Nie spełniono warunku wstępnego 2 |


## C.6.3 - C.6.3 ID dzwoniącego

### Warunki wstępne
1. 1. TIK udostępnia identyfikację dzwoniącego lub podobne funkcje.

### Procedura
1. 1. Sprawdź, czy informacje dostarczane przez każdą funkcję są dostępne w formie tekstowej.
1. 2. Sprawdź, czy informacje dostarczane przez każdą funkcję są możliwe do określenia programowo

### Typ oceny
Test

### Checklist
1. **ID dzwoniącego:** Sprawdź, czy informacje dostarczane przez każdą funkcję są dostępne w formie tekstowej i możliwe do określenia programowo.
1. **Uwaga:** Ma to zapewnić, że informacje są dostępne dla technologii wspomagających.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda i albo kryterium 2: prawda, albo funkcjonalność jest zamknięta |
| Niezaliczone | Kryterium 1: fałsz lub kryterium 2: fałsz, gdy funkcjonalność nie jest zamknięta |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.6.4 - C.6.4 Alternatywy dla usług głosowych

### Warunki wstępne
1. 1. TIK zapewnia komunikację głosową w czasie rzeczywistym.
1. 2. TIK udostępnia pocztę głosową, automatyczną sekretarkę lub urządzenie udzielające interaktywnych odpowiedzi głosowych.

### Procedura
1. 1. Sprawdź, czy TIK zapewnia użytkownikom środki dostępu do informacji bez używania słuchu czy mowy.
1. 2. Sprawdź, czy użytkownik może wykonać zadania dostępne w systemie bez używania słuchu czy mowy.

### Typ oceny
Inspekcja

### Checklist
1. **Alternatywy dla usług głosowych:** Sprawdź, czy TIK zapewnia użytkownikom środki dostępu do informacji bez używania słuchu czy mowy i czy użytkownik może wykonać zadania dostępne w systemie bez używania słuchu czy mowy.
1. **Uwaga 1:** Zadania, które obejmują zarówno obsługę interfejsu, jak i percepcję informacji, wymagałyby, aby zarówno interfejs, jak i informacje były dostępne bez użycia mowy lub słuchu.
1. **Uwaga 2:** Rozwiązania zdolne do obsługi mediów audio, RTT i wideo mogłyby spełnić powyższe wymaganie.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1 i 2: prawda |
| Niezaliczone | Kryterium 1 lub 2: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2. |


## C.6.5.2 - C.6.5.2 Rozdzielczość

### Warunki wstępne
1. 1. TIK udostępnia dwukierunkową komunikację głosową.
1. 2. TIK udostępnia funkcjonalność wideo w czasie rzeczywistym.

### Procedura
1. 1. Sprawdź, czy rozdzielczość komunikacji wideo jest rozdzielczością QVGA lub lepszą.

### Typ oceny
Inspekcja

### Checklist
1. **Rozdzielczość wideo:** Sprawdź, czy rozdzielczość komunikacji wideo jest rozdzielczością QVGA lub lepszą. Preferowana to co najmniej VGA.
1. **Uwaga:** Ma to zapewnić, że komunikacja za pomocą języka migowego jest skuteczna.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2 |


## C.6.5.3 - C.6.5.3 Częstotliwość wyświetlania klatek

### Warunki wstępne
1. 1. TIK udostępnia dwukierunkową komunikację głosową.
1. 2. TIK udostępnia funkcjonalność wideo w czasie rzeczywistym.

### Procedura
1. 1. Sprawdź, czy częstotliwość odświeżania obrazu komunikacji wideo wynosi co najmniej 20 klatek na sekundę.

### Typ oceny
Inspekcja

### Checklist
1. **Częstotliwość wyświetlania klatek:** Sprawdź, czy częstotliwość odświeżania obrazu komunikacji wideo wynosi co najmniej 20 klatek na sekundę (lub więcej - preferowana wartość to co najmniej 30 klatek na sekundę).
1. **Uwaga:** Ma to zapewnić, że komunikacja za pomocą języka migowego jest skuteczna.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2 |


## C.6.5.4 - C.6.5.4 Synchronizacja dźwięku i obrazu

### Warunki wstępne
1. 1. TIK udostępnia dwukierunkową komunikację głosową.
1. 2. TIK udostępnia funkcjonalność wideo w czasie rzeczywistym.

### Procedura
1. 1. Sprawdź, czy różnica w czasie między prezentacją mowy i obrazu wideo dla użytkownika jest nie większa niż 100 ms.

### Typ oceny
Pomiar

### Checklist
1. **Synchronizacja dźwięku i obrazu:** Sprawdź, czy różnica w czasie między prezentacją mowy i obrazu wideo dla użytkownika jest nie większa niż 100 ms.
1. **Uwaga:** Badania pokazują, że jeśli dźwięk wyprzedza obraz, zrozumiałość cierpi znacznie bardziej niż w odwrotnej sytuacji.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2. |


## C.6.5.5 - C.6.5.5 Wizualny wskaźnik audio połączonego z wideo

### Warunki wstępne
1. 1. TIK zapewnia dwukierunkową komunikację głosową.
1. 2. TIK udostępnia funkcjonalność wideo w czasie rzeczywistym.

### Procedura
1. 1. Testowana TIK jest połączona z inną TIK zapewniającą dwukierunkową komunikację głosową, która jest zgodna z komunikacją głosową w testowanej TIK.
1. 2. Osoba mówi do drugiej TIK.
1. 3. Sprawdź na podstawie obserwacji, czy istnieje wizualny wskaźnik aktywności audio w czasie rzeczywistym.

### Typ oceny
Inspekcja

### Checklist
1. **Wizualny wskaźnik aktywności audio:** Sprawdź na podstawie obserwacji, czy istnieje wizualny wskaźnik aktywności audio w czasie rzeczywistym.
1. **Uwaga 1:** Wizualny wskaźnik może być prostą kropką wizualną lub diodą LED, lub innym typem wskaźnika włączony/wyłączony, który miga, aby odzwierciedlić aktywność audio.
1. **Uwaga 2:** Bez tego wskazania osoba, która nie ma możliwości słyszenia, nie wie, kiedy ktoś mówi.

### Notatki
1. Zaleca się, by wskaźnik migał w czasie rzeczywistym w sposób odzwierciedlający aktywność audio.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 3: prawda |
| Niezaliczone | Kryterium 3: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2 |


## C.6.5.6 - C.6.5.6 Identyfikacja mówcy podczas komunikacji za pomocą wideo (języka migowego)

### Warunki wstępne
1. 1. TIK udostępnia dwukierunkową komunikację głosową.
1. 2. TIK obsługuje wideo w czasie rzeczywistym.

### Procedura
1. 1. Testowana TIK jest podłączona do kompatybilnej TIK obsługującej wideo, a osoba komunikuje się w języku migowym.
1. 2. Sprawdź na podstawie obserwacji, czy testowana TIK umożliwia użytkownikom języka migowego identyfikację mówcy.

### Typ oceny
Pomiar

### Checklist
1. **Identyfikacja mówcy podczas wideo:** Sprawdź na podstawie obserwacji, czy testowana TIK umożliwia użytkownikom języka migowego identyfikację mówcy.
1. **Uwaga 1:** Identyfikacja mówcy może być w tym samym miejscu co dla użytkowników głosowych w przypadku połączeń wielostronnych.
1. **Uwaga 2:** Ten mechanizm może być wyzwalany ręcznie przez użytkownika lub automatycznie, gdzie jest to technicznie osiągalne.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 2: prawda |
| Niezaliczone | Kryterium 2: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2 |


## C.7.1.1 - C.7.1.1 Odtwarzanie napisów

### Warunki wstępne
1. 1. TIK wyświetla lub przetwarza wideo z synchronizowanym dźwiękiem.
1. 2. Napisy są umieszczane na nagraniu wideo.

### Procedura
1. 1. Sprawdź, czy istnieje mechanizm wyświetlania napisów.

### Typ oceny
Inspekcja

### Checklist
1. **Odtwarzanie napisów:** Sprawdź, czy istnieje mechanizm wyświetlania napisów.
1. **Uwaga 1:** Napisy mogą zawierać informacje o czasie, kolorze i pozycji. Te dane napisów są niezbędne dla użytkowników napisów. Czas jest używany do synchronizacji napisów. Kolor może być używany do identyfikacji mówcy. Pozycja może być używana do unikania zasłaniania ważnych informacji.
1. **Uwaga 2:** Jeśli urządzenie Braille'a jest podłączone, TIK powinna zapewnić opcję wyświetlania napisów na urządzeniu Braille'a.
1. **Uwaga 3:** Klauzula 7.1.1 odnosi się do możliwości odtwarzacza wyświetlania napisów. Klauzule 9.1.2.2, 10.1.2.2 i 11.1.2.2 odnoszą się do dostarczania napisów w treści.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2 |


## C.7.1.2 - C.7.1.2 Synchronizacja napisów

### Warunki wstępne
1. 1. TIK udostępnia mechanizm wyświetlania napisów.

### Procedura
1. 1. Sprawdź, czy mechanizm wyświetlania napisów zachowuje synchronizację między dźwiękiem a odpowiednimi napisami w ciągu jednej dziesiątej sekundy od sygnatury czasowej napisu lub czy zapewnia dostępność napisu dla odtwarzacza w przypadku napisów na żywo.

### Typ oceny
Inspekcja

### Checklist
1. **Synchronizacja napisów:** Sprawdź, czy mechanizm wyświetlania napisów zachowuje synchronizację między dźwiękiem a odpowiednimi napisami.
1. **Uwaga:** Dla napisów w nagranym materiale: w ciągu 100 ms od znacznika czasu napisu. Dla napisów w materiale na żywo: w ciągu 100 ms od dostępności napisu dla odtwarzacza.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.7.1.3 - C.7.1.3 Zachowanie zasad tworzenia napisów

### Warunki wstępne
1. 1. TIK konwertuje lub rejestruje wideo z synchronizowanym obrazem.

### Procedura
1. 1. Sprawdź, czy TIK zachowuje dane dotyczące napisów w taki sposób, aby można je było wyświetlić zgodnie z Rozdziałami 7.1.1 i 7.1.2.

### Typ oceny
Inspekcja

### Checklist
1. **Zachowanie zasad tworzenia napisów:** Sprawdź, czy TIK zachowuje dane dotyczące napisów w taki sposób, aby można je było wyświetlić zgodnie z Rozdziałami 7.1.1 i 7.1.2.
1. **Uwaga:** Dodatkowe aspekty prezentacyjne tekstu, takie jak pozycja na ekranie, kolory tekstu, styl tekstu i czcionki tekstu, mogą przekazywać znaczenie, na podstawie konwencji regionalnych. Zmiana tych aspektów prezentacyjnych może zmienić znaczenie i powinna być unikana, gdzie to możliwe.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.7.1.4 - C.7.1.4 Cechy napisów

### Warunki wstępne
1. 1. TIK wyświetla napisy.
1. 2. Testowane napisy są wyświetlane w postaci modyfikowalnych znaków.

### Procedura
1. 1. Sprawdź, czy TIK zapewnia użytkownikowi możliwość dostosowania wyświetlanych cech napisów do indywidualnych wymagań.

### Typ oceny
Inspekcja

### Checklist
1. **Cechy napisów:** Sprawdź, czy TIK zapewnia sposób dla użytkownika na dostosowanie wyświetlanych cech napisów do indywidualnych wymagań, z wyjątkiem przypadków, gdy napisy są wyświetlane jako niemodyfikowalne znaki.
1. **Uwaga 1:** Definiowanie koloru tła i pierwszego planu napisów, typu czcionki, rozmiaru, przezroczystości tła napisów oraz konturu lub obramowania czcionek może przyczynić się do spełnienia tego wymagania.
1. **Uwaga 2:** Napisy, które są obrazami bitmapowymi, są przykładami niemodyfikowalnych znaków.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2 |


## C.7.1.5 - C.7.1.5 Odczytywane napisy

### Warunki wstępne
1. 1. TIK wyświetla obraz wideo zsynchronizowany z dźwiękiem.
1. 2. Treść testowanych napisów możliwa do określenia programowo.

### Procedura
1. 1. Sprawdź, czy istnieje tryb pracy zapewniający przedstawianie dostępnych napisów w formie mówionej.

### Typ oceny
Inspekcja

### Checklist
1. **Odczytywane napisy:** Sprawdź, czy istnieje tryb pracy zapewniający przedstawianie dostępnych napisów w formie mówionej.
1. **Uwaga 1:** Możliwość zarządzania zakresem wyjścia głosowego dla odczytywanych napisów niezależnie od ogólnego głosu TIK jest preferowana dla większości użytkowników. Jest to możliwe, gdy plik audio z odczytywanymi napisami jest dostarczany w oddzielnym torze audio i mieszany w urządzeniu użytkownika końcowego.
1. **Uwaga 2:** Prezentacja oddzielnego toru audio z odczytywanymi napisami w synchronizacji z wyświetlanymi napisami/tytułami poprawia zrozumiałość napisów.
1. **Uwaga 3:** Dostarczanie napisów/tytułów jako oddzielnych strumieni tekstowych ułatwia konwersję odpowiednich tekstów na audio.
1. **Uwaga 4:** Napisy, które są obrazami bitmapowymi, są przykładami, gdzie zawartość wyświetlanych napisów nie będzie możliwa do określenia programowo.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2 |


## C.7.2.1 - C.7.2.1 Odtwarzanie audiodeskrypcji

### Warunki wstępne
1. 1. TIK wyświetla obraz wideo zsynchronizowany z dźwiękiem.

### Procedura
1. 1. Sprawdź, czy istnieje wyraźny i oddzielny mechanizm opisu dźwiękowego.
1. 2. Sprawdź, czy istnieje mechanizm wyboru i odtwarzania audiodeskrypcji na domyślnym kanale audio.
1. 3. Sprawdź, czy TIK umożliwia użytkownikowi wybór i odtwarzanie kilku ścieżek dźwiękowych.

### Typ oceny
Inspekcja

### Checklist
1. **Odtwarzanie audiodeskrypcji:** Sprawdź, czy istnieje wyraźny i oddzielny mechanizm opisu dźwiękowego.
1. **Wybór audiodeskrypcji:** Sprawdź, czy istnieje mechanizm wyboru i odtwarzania audiodeskrypcji na domyślnym kanale audio.
1. **Wiele ścieżek dźwiękowych:** Sprawdź, czy TIK umożliwia użytkownikowi wybór i odtwarzanie kilku ścieżek dźwiękowych.
1. **Uwaga 1:** W takich przypadkach zawartość wideo może zawierać audiodeskrypcję jako jedną z dostępnych ścieżek dźwiękowych.
1. **Uwaga 2:** Audiodeskrypcje w mediach cyfrowych czasami zawierają informacje pozwalające na opisy dłuższe niż przerwy między dialogami. Wsparcie w odtwarzaczach mediów cyfrowych dla tej funkcji "rozszerzonej audiodeskrypcji" jest przydatne, szczególnie dla mediów cyfrowych oglądanych osobiście.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1 i 2: prawda lub 1: fałsz i 3: prawda |
| Niezaliczone | Kryterium 1: prawda i 2: fałsz lub 1: fałsz i 3: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.7.2.2 - C.7.2.2 Synchronizacja audiodeskrypcji

### Warunki wstępne
1. 1. Jeśli TIK zawiera mechanizm odtwarzania audiodeskrypcji.

### Procedura
1. 1. Sprawdź, czy synchronizacja między treścią audio i wideo a odpowiadającą jej audiodeskrypcją jest zachowana.

### Typ oceny
Inspekcja

### Checklist
1. **Synchronizacja audiodeskrypcji:** Sprawdź, czy synchronizacja między treścią audio i wideo a odpowiadającą jej audiodeskrypcją jest zachowana.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.7.2.3 - C.7.2.3 Zachowywanie audiodeskrypcji

### Warunki wstępne
1. 1. TIK przesyła, przetwarza lub zapisuje wideo zsynchronizowane z dźwiękiem.

### Procedura
1. 1. Sprawdź, czy TIK zachowuje dane audiodeskrypcji w taki sposób, aby można je było odtwarzać zgodnie z Rozdziałami 7.2.1 i 7.2.2.

### Typ oceny
Inspekcja

### Checklist
1. **Zachowywanie audiodeskrypcji:** Sprawdź, czy TIK zachowuje dane audiodeskrypcji w taki sposób, aby można je było odtwarzać zgodnie z Rozdziałami 7.2.1 i 7.2.2.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.7.3 - C.7.3 Sterowanie napisami i audiodeskrypcją

### Warunki wstępne
1. 1. TIK przede wszystkim wyświetla materiały zawierające wideo z towarzyszącą treścią audio

### Procedura
1. 1. Sprawdź, czy elementy sterujące dla włączania napisów i audiodeskrypcji są udostępnione użytkownikowi na tym samym poziomie interakcji co podstawowe elementy sterujące multimediami.

### Typ oceny
Inspekcja

### Checklist
1. **Sterowanie napisami i audiodeskrypcją:** Sprawdź, czy elementy sterujące dla włączania napisów i audiodeskrypcji są udostępnione użytkownikowi na tym samym poziomie interakcji co podstawowe elementy sterujące multimediami.
1. **Uwaga 1:** Podstawowe elementy sterujące multimediami to zestaw elementów sterujących, które użytkownik najczęściej używa do kontrolowania mediów.
1. **Uwaga 2:** Produkty, które mają ogólny sprzętowy regulator głośności, taki jak telefon, lub laptop, który może być skonfigurowany do wyświetlania wideo przez oprogramowanie, ale nie jest to jego głównym celem, nie potrzebują dedykowanych sprzętowych elementów sterujących dla napisów i opisów; jednak elementy sterujące oprogramowaniem lub sprzętowe elementy sterujące mapowane przez oprogramowanie muszą być na tym samym poziomie interakcji.
1. **Uwaga 3:** Najlepszą praktyką dla TIK jest włączenie dodatkowych elementów sterujących umożliwiających użytkownikowi wybór, czy napisy i audiodeskrypcja są włączone domyślnie.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.8.1.2 - C.8.1.2 Standardowe połączenia

### Warunki wstępne
1. 1. TIK zapewnia punkty podłączania urządzeń wejściowych i wyjściowych użytkownika.

### Procedura
1. 1. Sprawdź, czy jeden typ połączenia jest zgodny z niezastrzeżonym standardem branżowym.
1. 2. Sprawdź, czy jeden typ połączenia jest zgodny z niezastrzeżonym standardem branżowym po zastosowaniu adapterów dostępnych na rynku.

### Typ oceny
Inspekcja

### Checklist
1. **Standardowe połączenia:** Sprawdź, czy jeden typ połączenia jest zgodny z niezastrzeżonym standardem branżowym.
1. **Połączenia z adapterami:** Sprawdź, czy jeden typ połączenia jest zgodny z niezastrzeżonym standardem branżowym po zastosowaniu adapterów dostępnych na rynku.
1. **Uwaga 1:** Celem tego wymagania jest zapewnienie kompatybilności z technologiami wspomagającymi poprzez wymaganie użycia standardowych połączeń w TIK.
1. **Uwaga 2:** Słowo połączenie odnosi się zarówno do połączeń fizycznych, jak i bezprzewodowych.
1. **Uwaga 3:** Aktualne przykłady niezastrzeżonych standardów branżowych to USB i Bluetooth.

### Notatki
1. Połączenia mogą być przewodowe lub bezprzewodowe.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1 lub 2: prawda |
| Niezaliczone | Kryteria 1 i 2: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.8.1.3 - C.8.1.3 Kolor

### Warunki wstępne
1. 1. Elementy sprzętowe TIK przekazują informacje wizualne za pomocą kodowania kolorami jako środka do wskazania czynności, wywołania odpowiedzi lub wyróżnienia elementu wizualnego.

### Procedura
1. 1. Sprawdź, czy jest dostępna alternatywna forma kodowania wizualnego.

### Typ oceny
Inspekcja

### Checklist
1. **Kolor:** Sprawdź, czy jest dostępna alternatywna forma kodowania wizualnego.
1. **Przykłady alternatyw:** Tekst, symbole, dźwięki lub inne formy wizualne, które nie polegają wyłącznie na kolorze.
1. **Sprawdzenie:** Upewnij się, że informacje są dostępne dla użytkowników z zaburzeniami widzenia kolorów.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.8.2.1.1 - C.8.2.1.1 Zakres głośności mowy

### Warunki wstępne
1. 1. Sprzęt TIK ma wyjście mowy.

### Procedura
1. 1. Sprawdź, czy TIK ma certyfikat zgodności z ANSI/TIA-4965: "Receive volume control requirements for digital and analogue wireline terminals".
1. 2. Zmierzyć poziom głośności (w dB) sygnału mowy przy najniższym ustawieniu głośności.
1. 3. Zmierzyć poziom głośności (w dB) sygnału mowy przy najwyższym ustawieniu głośności.
1. 4. Sprawdź, czy zakres między wartościami 1 i 2 jest równy 18 dB lub większy.

### Typ oceny
Inspekcja na podstawie danych pomiarowych

### Checklist
1. **Zakres głośności mowy:** Sprawdź, czy TIK zapewnia możliwość dostosowania poziomu wyjścia mowy w zakresie co najmniej 18 dB.
1. **Uwaga:** Aparaty stacjonarne i zestawy słuchawkowe spełniające wymagania ANSI/TIA-4965 "Receive volume control requirements for digital and analogue wireline terminals" są uznawane za zgodne z tym wymaganiem.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1 lub 4: prawda |
| Niezaliczone | Kryteria 1 i 4: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.8.2.1.2 - C.8.2.1.2 Stopniowa regulacja głośności

### Warunki wstępne
1. 1. Sprzęt TIK ma wyjście mowy.
1. 2. Sterowanie głośnością jest stopniowe.

### Procedura
1. 1. Zmierz poziom głośności (w dB) sygnału mowy przy najniższym ustawieniu głośności.
1. 2. Sprawdź, czy jeden krok pośredni zapewnia poziom o 12 dB wyższy od najniższego poziomu głośności zmierzonego w kroku 1.

### Typ oceny
Inspekcja na podstawie danych pomiarowych

### Checklist
1. **Stopniowa regulacja głośności:** Sprawdź, czy jeden krok pośredni zapewnia poziom o 12 dB wyższy od najniższego poziomu głośności.
1. **Jak mierzyć:** Zmierz poziom głośności przy najniższym ustawieniu, następnie sprawdź poziom przy jednym kroku pośrednim.
1. **Uwaga:** Zapewnia to stopniowe dostosowanie dla użytkowników z różnymi potrzebami słuchowymi.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 2: prawda |
| Niezaliczone | Kryterium 2: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2 |


## C.8.2.2.1 - C.8.2.2.1 Urządzenia stacjonarne

### Warunki wstępne
1. 1. Sprzęt TIK to stacjonarne urządzenie komunikacyjne z wyjściem dźwięku, które zazwyczaj jest trzymane przy uchu.

### Procedura
1. 1. Sprawdź, czy TIK ma certyfikat zgodności z normą TIA-1083-A (2010): "Telecommunications; Telephone Terminal equipment; Handset magnetic measurement procedures and performance requirements".
1. 2. Sprawdź, czy wykonano pomiary zgodnie z ETSI ES 200 381‑1, które potwierdzają spełnienie wymagań tej normy.
1. 3. Sprawdź, czy TIK jest oznaczony symbolem "T" określonym w ETSI ETS 300 381.

### Typ oceny
Inspekcja na podstawie danych pomiarowych

### Checklist
1. **Sprzężenie magnetyczne dla urządzeń stacjonarnych:** Sprawdź, czy TIK zapewnia sprzężenie magnetyczne spełniające wymagania ETSI ES 200 381-1 i nosi symbol "T" określony w ETSI ETS 300 381.
1. **Uwaga 1:** TIK spełniający wymagania TIA-1083-A (2010): "Telecommunications; Telephone Terminal equipment; Handset magnetic measurement procedures and performance requirements" jest uznawany za zgodny z wymaganiami tej klauzuli.
1. **Uwaga 2:** Sprzężenie magnetyczne jest również znane jako sprzężenie indukcyjne dla cewki T.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1 lub 2: prawda i kryterium 3: prawda |
| Niezaliczone | Kryteria 1 i 2: fałsz lub kryterium 3: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.8.2.2.2 - C.8.2.2.2 Urządzenia do komunikacji bezprzewodowej

### Warunki wstępne
1. 1. Sprzęt TIK to bezprzewodowe urządzenie komunikacyjne, które zazwyczaj jest umieszczane w uchu.

### Procedura
1. 1. Sprawdź, czy TIK ma certyfikat zgodności z ANSI/IEEE C63.19 (2011): "American National Standard Method of Measurement of Compatibility between Wireless Communication Devices and Hearing Aids".
1. 2. Sprawdź, czy TIK zapewniają środki sprzężenia magnetycznego z technologiami wspomagającymi słyszenie, zgodnymi z normą ETSI ES 200 381-2

### Typ oceny
Inspekcja na podstawie danych pomiarowych

### Checklist
1. **Sprzężenie magnetyczne dla urządzeń bezprzewodowych:** Sprawdź, czy TIK zapewnia sprzężenie magnetyczne z technologiami wspomagającymi słyszenie, spełniające wymagania ETSI ES 200 381-2.
1. **Uwaga:** TIK spełniający wymagania ANSI/IEEE C63.19 (2011): "American National Standard Method of Measurement of Compatibility between Wireless Communication Devices and Hearing Aids" jest uznawany za zgodny z wymaganiami tej klauzuli.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1 lub 2: prawda |
| Niezaliczone | Kryteria 1 i 2: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.8.3.1 - C.8.3.1 Dostęp z przodu lub z boku

### Warunki wstępne
1. 1. TIK jest urządzeniem stacjonarnym.

### Procedura
1. 1. Sprawdź, czy TIK spełnia wymagania Rozdziału 8.3.2.2.
1. 2. Sprawdź, czy TIK spełnia wymagania Rozdziału 8.3.2.3.

### Typ oceny
Inspekcja

### Checklist
1. **Dostęp z przodu lub z boku:** Sprawdź, czy TIK spełnia wymagania Rozdziału 8.3.2 lub 8.3.3.
1. **Uwaga 1:** Nie wyklucza to spełniania obu klauzul.
1. **Uwaga 2:** Wymiary podane w klauzulach 407.8.3 i 407.8.2 Section 508 Rehabilitation Act, opublikowane w styczniu 2017 (Section 508 of the United States Rehabilitation Act of 1973, revised 2017), są identyczne z tymi podanymi w klauzulach 8.3.2 i 8.3.3 niniejszego dokumentu.
1. **Uwaga 3:** Dostęp fizyczny do stacjonarnej TIK zależy od wymiarów zarówno TIK, jak i środowiska, w którym jest zainstalowana i obsługiwana. Klauzula 8.3 nie dotyczy dostępności środowiska fizycznego zewnętrznego wobec TIK.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1 lub 2: prawda |
| Niezaliczone | Kryteria 1 i 2: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.8.3.2.1 - C.8.3.2.1 Nieograniczony dostęp z przodu, od góry

### Warunki wstępne
1. 1. TIK jest urządzeniem stacjonarnym.
1. 2. Żadna część stacjonarnej TIK nie utrudnia dostępu z przodu.

### Procedura
1. 1. Sprawdź, czy co najmniej jedna z każdego rodzaju części obsługiwanych jest umieszczona nie wyżej niż 1 200 mm (48 cali) nad podłogą w przestrzeni dostępu.

### Typ oceny
Inspekcja i pomiar

### Checklist
1. **Nieograniczony dostęp z przodu, od góry:** Sprawdź, czy co najmniej jedna z każdego rodzaju części obsługiwanych jest umieszczona nie wyżej niż 1 220 mm (48 cali) nad podłogą w przestrzeni dostępu.
1. **Wyjaśnienie:** Ten wymiar zapewnia dostępność dla użytkowników na wózkach inwalidzkich i osób stojących.
1. **Jak mierzyć:** Zmierz od poziomu podłogi do najwyższego punktu części obsługiwanej.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2 |


## C.8.3.2.2 - C.8.3.2.2 Nieograniczony dostęp z przodu, od dołu

### Warunki wstępne
1. 1. TIK jest urządzeniem stacjonarnym.
1. 2. Żadna część stacjonarnej TIK nie utrudnia dostępu z przodu.

### Procedura
1. 1. Sprawdź, czy co najmniej jedna z każdego rodzaju części obsługiwanych jest umieszczona nie niżej niż 380 mm (15 cali) nad podłogą w przestrzeni dostępu.

### Typ oceny
Inspekcja i pomiar

### Checklist
1. **Nieograniczony dostęp z przodu, od dołu:** Sprawdź, czy co najmniej jedna z każdego rodzaju części obsługiwanych jest umieszczona nie niżej niż 380 mm (15 cali) nad podłogą w przestrzeni dostępu.
1. ![Ilustracja nieograniczonego dostępu z przodu, pokazująca wymiary wysokości dla dostępu od góry i od dołu](img/8_3_2_2.png)

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2 |


## C.8.3.2.3.1 - C.8.3.2.3.1 Wolna powierzchnia podłogi

### Warunki wstępne
1. 1. TIK jest urządzeniem stacjonarnym.
1. 2. Dostęp do części obsługiwanych jest ograniczony przeszkodą zintegrowaną z urządzeniem.

### Procedura
1. 1. Sprawdź czy TIK zapewnia wolną powierzchnię podłogi, która rozciąga się pod elementem utrudniającym dostęp na odległość nie mniejszą niż wymagana głębokość zasięgu nad przeszkodą.

### Typ oceny
Inspekcja

### Checklist
1. **Wolna powierzchnia podłogi:** Sprawdź czy TIK zapewnia wolną powierzchnię podłogi, która rozciąga się pod elementem utrudniającym dostęp na odległość nie mniejszą niż wymagana głębokość zasięgu nad przeszkodą.
1. **Uwaga:** Zapewnienie, że będzie nieutrudniony "dostęp do dowolnego rodzaju części obsługiwanych" gwarantuje, że użytkownik będzie mógł uzyskać dostęp do co najmniej jednej z każdego rodzaju części obsługiwanych.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2 |


## C.8.3.2.3.2 - C.8.3.2.3.2 Ograniczony (< 510 mm) dostęp z przodu

### Warunki wstępne
1. 1. TIK jest urządzeniem stacjonarnym.
1. 2. Integralna część stacjonarnej TIK tworzy przeszkodę o głębokości mniejszej niż 510 mm (20 cali).

### Procedura
1. 1. Sprawdź, czy dostęp z przodu do wszystkich podstawowych części obsługiwanych nie znajduje się wyżej niż 1 220 mm (48 cali) nad powierzchnią kontaktu z TIK.

### Typ oceny
Inspekcja i pomiar

### Checklist
1. **Ograniczony (< 510 mm) dostęp z przodu:** Sprawdź, czy dostęp z przodu do wszystkich podstawowych części obsługiwanych nie znajduje się wyżej niż 1 220 mm (48 cali) nad powierzchnią kontaktu z TIK.
1. **Wyjaśnienie:** Dla przeszkód mniejszych niż 510 mm, części obsługiwane mogą być wyżej, ale nie przekraczając 1 220 mm.
1. **Jak mierzyć:** Zmierz od powierzchni kontaktu (np. podłogi) do najwyższego punktu części obsługiwanej.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2 |


## C.8.3.2.3.3 - C.8.3.2.3.3 Ograniczony (< 635 mm) dostęp z przodu

### Warunki wstępne
1. 1. TIK jest urządzeniem stacjonarnym.
1. 2. Integralna część stacjonarnej TIK tworzy przeszkodę o głębokości mniejszej niż 510 mm (20 cali), ale nie większej niż 635 mm (25 cali).

### Procedura
1. 1. Sprawdź, czy dostęp z przodu do wszystkich podstawowych części obsługiwanych nie znajduje się wyżej niż 1 120 mm (44 cali) nad powierzchnią kontaktu z TIK.

### Typ oceny
Inspekcja i pomiar

### Checklist
1. **Ograniczony (< 635 mm) dostęp z przodu:** Sprawdź, czy dostęp z przodu do wszystkich podstawowych części obsługiwanych nie znajduje się wyżej niż 1 120 mm (44 cali) nad powierzchnią kontaktu z TIK.
1. ![Ilustracja ograniczonego dostępu z przodu, pokazująca wymiary dla przeszkód o głębokości mniejszej niż 510 mm i między 510 a 635 mm](img/8_3_2_3_3.png)

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2 |


## C.8.3.2.4 - C.8.3.2.4 Szerokość przestrzeni na kolana i stopy

### Warunki wstępne
1. 1. TIK jest urządzeniem stacjonarnym.
1. 2. Przestrzeń pod przeszkodą zintegrowaną z TIK jest częścią przestrzeni dostępu.

### Procedura
1. 1. Sprawdź, czy szerokość przestrzeni na kolana jest większa niż 760 mm (30 cali).
1. 2. Sprawdź, czy szerokość przestrzeni na stopy jest większa niż 760 mm (30 cali).

### Typ oceny
Inspekcja i pomiar

### Checklist
1. **Szerokość przestrzeni na kolana i stopy:** Sprawdź, czy szerokość przestrzeni na kolana i stopy jest większa niż 760 mm (30 cali).
1. **Wyjaśnienie:** Zapewnia to wystarczającą przestrzeń dla użytkowników na wózkach inwalidzkich.
1. **Jak mierzyć:** Zmierz szerokość dostępnej przestrzeni pod urządzeniem.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1 i 2: prawda |
| Niezaliczone | Kryteria 1 lub 2: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2 |


## C.8.3.2.5.a - C.8.3.2.5.a Przestrzeń na stopy (a)

### Warunki wstępne
1. 1. TIK jest urządzeniem stacjonarnym.
1. 2. Występuje przeszkoda zintegrowana z urządzeniem TIK.
1. 3. Pod jakąkolwiek przeszkodą zintegrowaną z urządzeniem TIK znajduje się przestrzeń, która jest mniejsza niż 230 mm (9 cali) nad podłogą.

### Procedura
1. 1. Sprawdź, czy przestrzeń na stopy nie znajduje się niżej niż 635 mm (25 cali) pod przeszkodą.

### Typ oceny
Kontrola i pomiar

### Checklist
1. **Przestrzeń na stopy (a):** Sprawdź, czy przestrzeń na stopy rozciąga się maksymalnie 635 mm (25 cali) pod całą przeszkodą.
1. ![Ilustracja przestrzeni na stopy, pokazująca wymiary głębokości i wysokości](img/8_3_2_5.png)

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1, 2 lub 3 |


## C.8.3.2.5.b - C.8.3.2.5.b Przestrzeń na stopy (b)

### Warunki wstępne
1. 1. TIK jest urządzeniem stacjonarnym.
1. 2. Występuje przeszkoda zintegrowana z urządzeniem TIK.
1. 3. Pod jakąkolwiek przeszkodą zintegrowaną z urządzeniem TIK znajduje się przestrzeń, która jest mniejsza niż 230 mm (9 cali) nad podłogą.

### Procedura
1. 1. Sprawdź, czy przestrzeń na stopy znajduje się niżej niż 430 (17 cali) mm pod przeszkodą i 230 mm (9 cali) nad podłogą.

### Typ oceny
Inspekcja i pomiar

### Checklist
1. **Przestrzeń na stopy (b):** Sprawdź, czy przestrzeń na stopy zapewnia miejsce co najmniej 430 mm (17 cali) głębokie i 230 mm (9 cali) nad podłogą pod przeszkodą.
1. ![Ilustracja przestrzeni na stopy, pokazująca wymiary głębokości i wysokości](img/8_3_2_5.png)

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1, 2 lub 3 |


## C.8.3.2.5.c - C.8.3.2.5.c Przestrzeń na stopy (c)

### Warunki wstępne
1. 1. TIK jest urządzeniem stacjonarnym.
1. 2. Występuje przeszkoda zintegrowana z urządzeniem TIK.
1. 3. Pod jakąkolwiek przeszkodą zintegrowaną z urządzeniem TIK znajduje się przestrzeń, która jest mniejsza niż 230 mm (9 cali) nad podłogą.

### Procedura
1. 1. Sprawdź, czy przestrzeń na stopy nie wykracza więcej niż 150 mm (6 cali) poza wszelkie przeszkody znajdujące się na wysokości 230 mm (9 cali) nad podłogą.

### Typ oceny
Inspekcja i pomiar

### Checklist
1. **Przestrzeń na stopy (c):** Sprawdź, czy przestrzeń na stopy nie wykracza więcej niż 150 mm (6 cali) poza wszelkie przeszkody na wysokości 230 mm (9 cali) nad podłogą.
1. ![Ilustracja przestrzeni na stopy, pokazująca wymiary głębokości i wysokości](img/8_3_2_5.png)

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1, 2 lub 3 |


## C.8.3.2.6.a - C.8.3.2.6.a Przestrzeń na kolana (a)

### Warunki wstępne
1. 1. TIK jest urządzeniem stacjonarnym.
1. 2. Występuje przeszkoda zintegrowana z urządzeniem TIK.
1. 3. Przestrzeń na kolana pod przeszkodą znajduje się na wysokości od 230 mm (9 cali) do 685 mm (25 cali) nad podłogą.

### Procedura
1. 1. Sprawdź, czy zapewniona jest przestrzeń na kolana, która sięga co najmniej 635 mm (25 cali) pod przeszkodą na wysokości 230 mm (9 cali) nad podłogą.

### Typ oceny
Inspekcja i pomiar

### Checklist
1. **Przestrzeń na kolana (a):** Sprawdź, czy przestrzeń na kolana rozciąga się nie więcej niż 635 mm (25 cali) pod przeszkodą na wysokości 230 mm (9 cali) nad podłogą.
1. ![Ilustracja przestrzeni na kolana, pokazująca wymiary głębokości i wysokości](img/8_3_2_6.png)

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1, 2 lub 3 |


## C.8.3.2.6.b - C.8.3.2.6.b Przestrzeń na kolana (b)

### Warunki wstępne
1. 1. TIK jest urządzeniem stacjonarnym.
1. 2. Występuje przeszkoda zintegrowana z urządzeniem TIK.
1. 3. Przestrzeń na kolana pod przeszkodą znajduje się na wysokości od 230 mm (9 cali) do 685 mm (25 cali) nad podłogą.

### Procedura
1. 1. Sprawdź, czy zapewniona jest przestrzeń na kolana, która sięga co najmniej 280 mm (11 cali) pod przeszkodą na wysokości 230 mm (9 cali) nad podłogą.

### Typ oceny
Inspekcja i pomiar

### Checklist
1. **Przestrzeń na kolana (b):** Sprawdź, czy przestrzeń na kolana rozciąga się co najmniej 280 mm (11 cali) pod przeszkodą na wysokości 230 mm (9 cali) nad podłogą.
1. ![Ilustracja przestrzeni na kolana, pokazująca wymiary głębokości i wysokości](img/8_3_2_6.png)

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1, 2 lub 3 |


## C.8.3.2.6.c - C.8.3.2.6.c Przestrzeń na kolana (c)

### Warunki wstępne
1. 1. TIK jest urządzeniem stacjonarnym.
1. 2. Występuje przeszkoda zintegrowana z urządzeniem TIK.
1. 3. Przestrzeń na kolana pod przeszkodą znajduje się na wysokości od 230 mm (9 cali) do 685 mm (25 cali) nad podłogą.

### Procedura
1. 1. Sprawdź, czy zapewniona jest przestrzeń na kolana, która sięga co najmniej 205 mm (9 cali) pod przeszkodą na wysokości 685 mm (25 cali) nad podłogą.

### Typ oceny
Inspekcja i pomiar

### Checklist
1. **Przestrzeń na kolana (c):** Sprawdź, czy przestrzeń na kolana rozciąga się co najmniej 205 mm (8 cali) pod przeszkodą na wysokości 685 mm (27 cali) nad podłogą.
1. ![Ilustracja przestrzeni na kolana, pokazująca wymiary głębokości i wysokości](img/8_3_2_6.png)

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1, 2 lub 3 |


## C.8.3.2.6.d - C.8.3.2.6.d Przestrzeń na kolana (d)

### Warunki wstępne
1. 1. TIK jest urządzeniem stacjonarnym.
1. 2. Występuje przeszkoda zintegrowana z urządzeniem TIK.
1. 3. Przestrzeń na kolana pod przeszkodą znajduje się na wysokości od 230 mm (9 cali) do 685 mm (25 cali) nad podłogą.

### Procedura
1. 1. Sprawdź, czy redukcja głębokości przestrzeni jest nie większa niż 25 mm (1 cal) na każde 150 mm (6 cali) wysokości.

### Typ oceny
Inspekcja i pomiar

### Checklist
1. **Przestrzeń na kolana (d):** Sprawdź, czy redukcja głębokości przestrzeni jest nie większa niż 25 mm (1 cal) na każde 150 mm (6 cali) wysokości.
1. ![Ilustracja przestrzeni na kolana, pokazująca wymiary głębokości i wysokości](img/8_3_2_6.png)

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1, 2 lub 3 |


## C.8.3.3.1 - C.8.3.3.1 Nieograniczony dostęp z boku, od góry

### Warunki wstępne
1. 1. TIK jest urządzeniem stacjonarnym.
1. 2. Dostęp z boku jest nieograniczony lub ograniczony przez element będący integralną częścią stacjonarnej TIK o szerokości mniejszej niż 510 mm (20 cali).

### Procedura
1. 1. Sprawdź, czy dostęp z boku, od góry do co najmniej jednego z każdego rodzaju części obsługiwanych nie znajduje się wyżej niż 1 220 mm (48 cali) nad podłogą w przestrzeni dostępu.

### Typ oceny
Inspekcja i pomiar

### Checklist
1. **Nieograniczony dostęp z boku, od góry:** Sprawdź, czy dostęp z boku, od góry do co najmniej jednego z każdego rodzaju części obsługiwanych nie znajduje się wyżej niż 1 220 mm (48 cali) nad podłogą w przestrzeni dostępu.
1. **Wyjaśnienie:** Dla dostępu z boku, części mogą być wyżej, ale nie przekraczając 1 220 mm.
1. **Jak mierzyć:** Zmierz od poziomu podłogi do najwyższego punktu części obsługiwanej dostępnej z boku.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2 |


## C.8.3.3.2 - C.8.3.3.2 Nieograniczony dostęp z boku, od dołu

### Warunki wstępne
1. 1. TIK jest urządzeniem stacjonarnym.
1. 2. Dostęp z boku jest nieograniczony lub ograniczony przez element będący integralną częścią stacjonarnej TIK o szerokości mniejszej niż 510 mm (20 cali).

### Procedura
1. 1. Sprawdź, czy dostęp z boku, od dołu do co najmniej jednego z każdego rodzaju części obsługiwanych nie znajduje się wyżej niż 380 mm (15 cali) nad podłogą w przestrzeni dostępu.

### Typ oceny
Inspekcja i pomiar

### Checklist
1. **Nieograniczony dostęp z boku, od dołu:** Sprawdź, czy dostęp z boku, od dołu do co najmniej jednego z każdego rodzaju części obsługiwanych nie znajduje się niżej niż 380 mm (15 cali) nad podłogą w przestrzeni dostępu.
1. ![Ilustracja nieograniczonego dostępu z boku, pokazująca wymiary wysokości dla dostępu od góry i od dołu](img/8_3_3_2.png)

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2 |


## C.8.3.3.3.1 - C.8.3.3.3.1 Ograniczony (< 255 mm) dostęp z boku

### Warunki wstępne
1. 1. TIK jest urządzeniem stacjonarnym.
1. 2. Występuje przeszkoda o głębokości mniejszej lub równej 255 mm (10 cali), która stanowi integralną część TIK.

### Procedura
1. 1. Sprawdź, czy dostęp z boku, od góry do co najmniej jednego z każdego rodzaju części obsługiwanych nie znajduje się wyżej niż 1 220 mm (48 cali) nad podłogą w przestrzeni dostępu.

### Typ oceny
Inspekcja i pomiar

### Checklist
1. **Ograniczony (< 255 mm) dostęp z boku:** Sprawdź, czy dostęp z boku, od góry do co najmniej jednego z każdego rodzaju części obsługiwanych nie znajduje się wyżej niż 1 220 mm (48 cali) nad podłogą w przestrzeni dostępu.
1. **Wyjaśnienie:** Dla przeszkód mniejszych niż 255 mm, części mogą być wyżej, ale nie przekraczając 1 220 mm.
1. **Jak mierzyć:** Zmierz od poziomu podłogi do najwyższego punktu części obsługiwanej dostępnej z boku.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2 |


## C.8.3.3.3.2 - C.8.3.3.3.2 Ograniczony (< 610 mm) dostęp z boku

### Warunki wstępne
1. 1. TIK jest urządzeniem stacjonarnym.
1. 2. Występuje przeszkoda większa niż 255 mm (10 cali) i o głębokości nie większej niż 610 mm (24 cale), stanowiąca integralną część TIK.

### Procedura
1. 1. Sprawdź, czy dostęp z boku, od góry do co najmniej jednego z każdego rodzaju części obsługiwanych nie znajduje się wyżej niż 1 170 mm (46 cali) nad podłogą w przestrzeni dostępu.

### Typ oceny
Inspekcja i pomiar

### Checklist
1. **Ograniczony (< 610 mm) dostęp z boku:** Sprawdź, czy dostęp z boku, od góry do co najmniej jednego z każdego rodzaju części obsługiwanych nie znajduje się wyżej niż 1 170 mm (46 cali) nad podłogą w przestrzeni dostępu.
1. ![Ilustracja ograniczonego dostępu z boku, pokazująca wymiary dla przeszkód o głębokości mniejszej niż 255 mm i między 255 a 610 mm](img/8_3_3_3_2.png)

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2 |


## C.8.3.4.1 - C.8.3.4.1 Zmiana poziomu

### Warunki wstępne
1. 1. TIK jest urządzeniem stacjonarnym.
1. 2. TIK obejmuje swoim obszarem podłogę.
1. 3. Poziom podłogi się zmienia.

### Procedura
1. 1. Jeżeli zmiana poziomu jest spowodowana podjazdem, sprawdź, czy nachylenie jest mniejsze niż 1:48.
1. 2. Jeśli występuje pionowa zmiana poziomu podłogi, sprawdź, czy jest ona równa 6,4 mm lub mniejsza.
1. 3. Jeśli występuje pionowa lub nachylona zmiana poziomu podłogi, sprawdź, czy nachylenie nie jest większe niż 1:2.

### Typ oceny
Inspekcja i pomiar

### Checklist
1. **Zmiana poziomu:** Sprawdź, czy zmiana poziomu podłogi jest nachylona z nachyleniem nie większym niż 1:48, lub pionowa ≤ 6,4 mm, lub ≤ 13 mm z nachyleniem ≤ 1:2.
1. ![Ilustracja pionowej zmiany poziomu](img/8_3_4_1a.png)
1. Pionowa zmiana poziomu
1. ![Ilustracja nachylonej zmiany poziomu](img/8_3_4_1b.png)
1. Nachylona zmiana poziomu

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1 lub 2 lub 3: prawda |
| Niezaliczone | Kryteria 1 i 2 i 3: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2 lub 3 |


## C.8.3.4.2 - C.8.3.4.2 Pusta podłoga lub powierzchnia podłoża

### Warunki wstępne
1. 1. TIK jest urządzeniem stacjonarnym.
1. 2. Obszar działania jest integralną częścią TIK

### Procedura
1. 1. Sprawdź, czy powierzchnia podłogi ma wymiary wynoszące co najmniej 760 mm wzdłuż jednej krawędzi i 1 220 mm wzdłuż drugiej.

### Typ oceny
Inspekcja i pomiar

### Checklist
1. **Pusta podłoga lub powierzchnia podłoża:** Sprawdź, czy powierzchnia podłogi ma wymiary wynoszące co najmniej 760 mm x 1 220 mm.
1. ![Ilustracja pustej podłogi lub powierzchni podłoża, pokazująca minimalne wymiary 760 mm x 1220 mm](img/8_3_4_2.png)

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2 |


## C.8.3.4.3.1 - C.8.3.4.3.1 Podejście - postanowienia ogólne

### Warunki wstępne
1. 1. TIK jest urządzeniem stacjonarnym.
1. 2. Przestrzeń dostępu jest integralną częścią TIK.

### Procedura
1. 1. Sprawdź, czy jedna pełna strona przestrzeni jest wolna od przeszkód.

### Typ oceny
Inspekcja

### Checklist
1. **Postanowienia ogólne:** Sprawdź, czy jedna pełna strona przestrzeni jest wolna od przeszkód.
1. **Wyjaśnienie:** Zapewnia to dostępność dla użytkowników z różnych stron.
1. **Jak sprawdzić:** Sprawdź wszystkie strony urządzenia pod kątem przeszkód.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2 |


## C.8.3.4.3.2 - C.8.3.4.3.2 Podejście z przodu

### Warunki wstępne
1. 1. TIK jest urządzeniem stacjonarnym, którego integralną część stanowi nisza.
1. 2. Obszar działania znajduje się wewnątrz niszy.
1. 3. Głębokość niszy jest większa niż 610 mm.
1. 4. Dostęp z przodu jest niezbędny.

### Procedura
1. 1. Sprawdź, czy szerokość niszy jest większa niż 915 mm.

### Typ oceny
Inspekcja i pomiar

### Checklist
1. **Podejście z przodu:** Sprawdź, czy szerokość niszy jest większa niż 915 mm.
1. ![Ilustracja przestrzeni manewrowej w niszy dla podejścia z przodu](img/8_3_4_3_2.png)

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1, 2, 3 lub 4 |


## C.8.3.4.3.3 - C.8.3.4.3.3 Dostęp równoległy

### Warunki wstępne
1. 1. TIK jest urządzeniem stacjonarnym, którego integralną część stanowi nisza.
1. 2. Obszar działania znajduje się wewnątrz niszy.
1. 3. Głębokość niszy jest większa niż 380 mm.
1. 4. Dostęp równoległy jest możliwy.

### Procedura
1. 1. Sprawdź, czy szerokość przestrzeni dostępu jest większa niż 1 525 mm.

### Typ oceny
Inspekcja i pomiar

### Checklist
1. **Dostęp równoległy:** Sprawdź, czy szerokość przestrzeni dostępu jest większa niż 1 525 mm.
1. ![Ilustracja przestrzeni manewrowej w niszy dla dostępu równoległego](img/8_3_4_3_3.png)

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1, 2, 3 lub 4 |


## C.8.3.5 - C.8.3.5 Widoczność

### Warunki wstępne
1. 1. TIK jest urządzeniem stacjonarnym.
1. 2. Do dyspozycji jest co najmniej jeden wyświetlacz.

### Procedura
1. 1. Sprawdź, czy co najmniej jeden wyświetlacz każdego typu jest umieszczony w taki sposób, aby informacje na nim były czytelne z punktu znajdującego się 1 015 mm (40 cali) nad środkiem podłogi w obszarze roboczym.

### Typ oceny
Inspekcja i pomiar

### Checklist
1. **Widoczność:** Sprawdź, czy co najmniej jeden wyświetlacz każdego typu jest umieszczony w taki sposób, aby informacje na nim były czytelne z punktu znajdującego się 1 015 mm (40 cali) nad środkiem podłogi w obszarze roboczym.
1. **Uwaga:** Celem tego wymagania jest zapewnienie, że informacje na ekranie mogą być odczytane przez użytkowników z normalnym wzrokiem i odpowiednimi umiejętnościami językowymi, siedzących na wózku inwalidzkim.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2 |


## C.8.3.6 - C.8.3.6 Instrukcja montażu

### Warunki wstępne
1. 1. TIK jest urządzeniem stacjonarnym.

### Procedura
1. 1. Sprawdź, czy dostępna jest instrukcja montażu.
1. 2. Sprawdź, czy w instrukcji podano wskazówki dotyczące sposobu montażu TIK w sposób zapewniający zgodność wymiarów z wymaganiami zawartymi w Rozdziałach od 8.3.2 do 8.3.4.
1. 3. Sprawdź, czy w instrukcji podano, że zaleca się aby osoby zajmujące się montażem również brały pod uwagę obowiązujące wymagania dotyczące dostępności środowiska zbudowanego, które mają zastosowanie podczas montażu TIK .

### Typ oceny
Inspekcja i pomiar

### Checklist
1. **Instrukcja montażu:** Sprawdź, czy dostępna jest instrukcja montażu z wskazówkami dotyczącymi zgodności wymiarów z Rozdziałami 8.3.2 do 8.3.5 oraz uwzględnieniem wymagań dostępności środowiska zbudowanego.
1. **Uwaga:** Jeśli nie ma takich wymagań, instrukcje powinny wymagać, aby wymiary zainstalowanej TIK były zgodne z klauzulami 8.3.2 do 8.3.5 niniejszego dokumentu.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryteria 1, 2 i 3: prawda |
| Niezaliczone | Kryteria 1 lub 2 lub 3: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.8.4.1 - C.8.4.1 Klawisze numeryczne

### Warunki wstępne
1. 1. TIK ma fizyczne klawisze numeryczne rozmieszczone w 12-przyciskowym układzie klawiatury telefonicznej.

### Procedura
1. 1. Sprawdź, czy klawisz z cyfrą 5 różni się w dotyku od pozostałych klawiszy.

### Typ oceny
Inspekcja

### Checklist
1. **Klawisze numeryczne:** Sprawdź, czy klawisz z cyfrą 5 różni się w dotyku od pozostałych klawiszy.
1. **Jak sprawdzić:** Przesuń palcem po klawiszach, aby wyczuć różnicę w fakturze lub kształcie klawisza 5.
1. **Znaczenie:** Ułatwia nawigację osobom niewidomym lub niedowidzącym.
1. **Uwaga:** Rekomendacja ITU-T E.161 (2001): "Arrangement of digits, letters and symbols on telephones and other devices that can be used for gaining access to a telephone network". opisuje układ 12-przyciskowej klawiatury telefonicznej i zawiera dalsze szczegóły dotyczące formy znaczników dotykowych.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.8.4.2.1 - C.8.4.2.1 Środki obsługi części mechanicznych

### Warunki wstępne
1. 1. TIK zawiera części obsługiwane, które do działania wymagają chwytania, ściskania lub skręcania nadgarstka.

### Procedura
1. 1. Sprawdź, czy istnieje dostępny alternatywny sposób, który nie wymaga zastosowania takich działań.

### Typ oceny
Inspekcja

### Checklist
1. **Środki obsługi części mechanicznych:** Sprawdź, czy istnieje dostępny alternatywny sposób, który nie wymaga zastosowania takich działań.
1. **Przykłady alternatyw:** Przyciski naciskane płaską dłonią, ekrany dotykowe, kontrola głosowa lub inne metody nie wymagające chwytania, ściskania lub skręcania nadgarstka.
1. **Sprawdzenie dostępności:** Upewnij się, że alternatywa jest równie wygodna i dostępna dla wszystkich użytkowników.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.8.4.2.2 - C.8.4.2.2 Siła wymagana do obsługi części mechanicznych

### Warunki wstępne
1. 1. TIK zawiera części obsługiwane, które wymagają użycia siły większej niż 22,2 N.

### Procedura
1. 1. Sprawdź, czy istnieje alternatywny sposób sterowania wymagający użycia siły mniejszej niż 22,2 N.

### Typ oceny
Inspekcja i pomiar

### Checklist
1. **Siła wymagana do obsługi części mechanicznych:** Sprawdź, czy istnieje alternatywny sposób sterowania wymagający użycia siły mniejszej niż 22,2 N.
1. **Uwaga:** ISO 21542:2011 zaleca wartość między 2,5 a 5 niutonów.
1. **Przykłady alternatyw:** Przyciski naciskane płaską dłonią, ekrany dotykowe, kontrola głosowa lub inne metody wymagające mniejszej siły.
1. **Sprawdzenie dostępności:** Upewnij się, że alternatywa jest dostępna dla użytkowników z ograniczoną siłą mięśniową.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.8.4.3 - C.8.4.3 Klucze, bilety i karty taryfowe

### Warunki wstępne
1. 1. TIK dostarcza klucze, bilety lub karty taryfowe, a ich orientacja jest ważna dla dalszego wykorzystania.

### Procedura
1. 1. Sprawdź, czy orientację kluczy, biletów lub kart taryfowych można wyczuć dotykiem.

### Typ oceny
Inspekcja i pomiar

### Checklist
1. **Klucze, bilety i karty taryfowe:** Sprawdź, czy orientację kluczy, biletów lub kart taryfowych można wyczuć dotykiem.
1. **Uwaga:** ETSI ETS 300 767 definiuje odpowiednie wskazania dotykowe dla kart plastikowych.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.8.5 - C.8.5 Oznaczenia dotykowe w trybie mowy

### Warunki wstępne
1. 1. TIK została zaprojektowane do wspólnego użytkowania.
1. 2. Jest dostępne wyjście mowy.

### Procedura
1. 1. Sprawdź, czy jest dostępne wyczuwalne w dotyku wskazanie sposobu rozpoczęcia pracy w trybie mowy.

### Typ oceny
Inspekcja i pomiar

### Checklist
1. **Oznaczenia dotykowe w trybie mowy:** Sprawdź, czy jest dostępne wyczuwalne w dotyku wskazanie sposobu rozpoczęcia pracy w trybie mowy.
1. **Uwaga:** Wskazanie dotykowe może obejmować instrukcje Braille'a.
1. **Przykłady oznaczeń:** Wypukłe symbole, tekst Braille'a, tekstury lub inne wyczuwalne wskazówki na urządzeniu.
1. **Sprawdzenie dostępności:** Upewnij się, że oznaczenie jest łatwo wyczuwalne dla użytkowników niewidomych lub słabowidzących.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2. |


## C.9.1.1.1 - C.9.1.1.1 Treść nietekstowa

### Warunki wstępne
1. 1. TIK jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 1.1.1 Treść nietekstowa](https://www.w3.org/Translations/WCAG21-pl/#tresc-nietekstowa).

### Typ oceny
Inspekcja

### Checklist
1. **Elementy graficzne (img):** Sprawdź, czy każdy element `<img>` przekazujący informację posiada atrybut `alt` z opisem tej informacji.
1. **Grafiki dekoracyjne:** Sprawdź, czy elementy graficzne pełniące funkcję wyłącznie dekoracyjną mają pusty atrybut `alt=""` lub są ukryte przed czytnikami (np. `aria-hidden="true"`).
1. **Linki graficzne:** Sprawdź, czy grafiki będące linkami mają tekst alternatywny opisujący cel linku lub funkcję przycisku, a nie wygląd obrazka.
1. **CAPTCHA:** Jeśli występuje CAPTCHA, sprawdź, czy dostępna jest alternatywa dla osób niewidomych (np. CAPTCHA dźwiękowa) i czy cel zadania jest opisany.
1. **Wykresy i diagramy:** Sprawdź, czy złożone grafiki (wykresy, schematy) mają krótki opis w `alt` oraz odesłanie do pełnego opisu tekstowego (np. w treści strony lub przez `aria-describedby`).
1. **Multimedia:** Sprawdź, czy elementy audio i wideo mają tekstową alternatywę (np. tytuł, krótki opis) identyfikującą je dla użytkowników czytników ekranu.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub strona internetowa nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 1.1.1 Treść nietekstowa. |


## C.9.1.2.1 - C.9.1.2.1 Tylko audio lub tylko wideo (nagranie)

### Warunki wstępne
1. 1. TIK jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 1.2.1 Tylko audio lub tylko wideo (nagranie)](https://www.w3.org/Translations/WCAG21-pl/#tylko-audio-lub-tylko-wideo-nagranie).

### Typ oceny
Inspekcja

### Checklist
1. **Tylko audio (nagranie):** Sprawdź, czy dla nagrań dźwiękowych (np. podcastów) dostępna jest transkrypcja tekstowa zawierająca wszystkie dialogi i istotne dźwięki.
1. **Tylko wideo (nagranie):** Sprawdź, czy dla nagrań wideo bez dźwięku (np. animacji instruktażowych) dostępna jest alternatywa tekstowa lub ścieżka audio opisująca to, co dzieje się na ekranie.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub strona internetowa nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 1.2.1 Tylko audio lub tylko wideo (nagranie). |


## C.9.1.2.2 - C.9.1.2.2 Napisy rozszerzone (nagranie)

### Warunki wstępne
1. 1. TIK jest stroną internetową.

### Procedura
1. 11. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 1.2.2 Napisy rozszerzone (nagranie)](https://www.w3.org/Translations/WCAG21-pl/#napisy-rozszerzone-nagranie).

### Typ oceny
Inspekcja

### Checklist
1. **Napisy:** Sprawdź, czy wszystkie nagrania wideo z dźwiękiem (dialogi, istotne odgłosy) posiadają zsynchronizowane napisy dla niesłyszących.
1. **Kompletność napisów:** Sprawdź, czy napisy zawierają nie tylko dialogi, ale także informacje o istotnych dźwiękach (np. [muzyka], [śmiech], [dzwonek do drzwi]).

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub strona internetowa nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 1.2.2 Napisy rozszerzone (nagranie). |


## C.9.1.2.3 - C.9.1.2.3 Audiodeskrypcja lub alternatywa tekstowa dla mediów (nagranie)

### Warunki wstępne
1. 1. TIK jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 1.2.3 Audiodeskrypcja lub alternatywa tekstowa dla mediów (nagranie)](https://www.w3.org/Translations/WCAG21-pl/#audiodeskrypcja-lub-alternatywa-tekstowa-dla-mediow-nagranie).

### Typ oceny
Inspekcja

### Checklist
1. **Audiodeskrypcja lub tekst:** Sprawdź, czy nagrania wideo posiadają audiodeskrypcję (dodatkową ścieżkę lektora opisującą obraz) LUB pełną alternatywę tekstową (transkrypcję opisową), która pozwala zrozumieć treść wizualną bez oglądania.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub strona internetowa nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 1.2.3 Audiodeskrypcja lub alternatywa tekstowa dla mediów (nagranie). |


## C.9.1.2.4 - C.9.1.2.4 Napisy rozszerzone (na żywo)

### Warunki wstępne
1. 1. TIK jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 1.2.4 Napisy rozszerzone (na żywo)](https://www.w3.org/Translations/WCAG21-pl/#napisy-rozszerzone-na-zywo).

### Typ oceny
Inspekcja

### Checklist
1. **Napisy na żywo:** Jeśli strona transmituje wideo na żywo z dźwiękiem, sprawdź, czy dostępne są napisy generowane w czasie rzeczywistym.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub strona internetowa nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 1.2.4 Napisy rozszerzone (na żywo). |


## C.9.1.2.5 - C.9.1.2.5 Audiodeskrypcja (nagranie)

### Warunki wstępne
1. 1. TIK jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 1.2.5 Audiodeskrypcja (nagranie)](https://www.w3.org/Translations/WCAG21-pl/#audiodeskrypcja-nagranie).

### Typ oceny
Inspekcja

### Checklist
1. **Audiodeskrypcja:** Sprawdź, czy nagrania wideo posiadają audiodeskrypcję, jeśli informacje wizualne są kluczowe i nie wynikają ze ścieżki dźwiękowej (wymagane dla poziomu AA).

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub strona internetowa nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 1.2.5 Audiodeskrypcja (nagranie). |


## C.9.1.3.1 - C.9.1.3.1 Informacje i relacje

### Warunki wstępne
1. 1. TIK jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 1.3.1 Informacje i relacje](https://www.w3.org/Translations/WCAG21-pl/#informacje-i-relacje).

### Typ oceny
Inspekcja

### Checklist
1. **Nagłówki (h1-h6):** Sprawdź, czy nagłówki są oznaczone w kodzie (znaczniki `<h1>`-`<h6>`) i czy tworzą logiczną strukturę dokumentu (nie używaj nagłówków tylko do formatowania wyglądu).
1. **Listy:** Sprawdź, czy listy (wypunktowane, numerowane) są oznaczone odpowiednimi znacznikami (`<ul>`, `<ol>`, `<dl>`), a nie są tylko wizualnie sformatowanym tekstem.
1. **Tabele danych:** Sprawdź, czy tabele prezentujące dane mają poprawnie oznaczone nagłówki kolumn i wierszy (`<th>`) oraz czy są powiązane z komórkami danych.
1. **Formularze:** Sprawdź, czy pola formularzy mają etykiety powiązane programowo (znacznik `<label>` z atrybutem `for` lub atrybuty ARIA), aby czytniki ekranu mogły je poprawnie zidentyfikować.
1. **Znaczenie wizualne:** Sprawdź, czy relacje widoczne wizualnie (np. powiązanie opisu ze zdjęciem) są również odzwierciedlone w kodzie lub treści tekstowej.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub strona internetowa nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 1.3.1 Informacje i relacje. |


## C.9.1.3.2 - C.9.1.3.2 Zrozumiała kolejność

### Warunki wstępne
1. 1. TIK jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 1.3.2 Zrozumiała kolejność](https://www.w3.org/Translations/WCAG21-pl/#zrozumia-a-kolejnosc).

### Typ oceny
Inspekcja

### Checklist
1. **Kolejność odczytu:** Sprawdź, czy kolejność treści w kodzie HTML odpowiada logicznej kolejności wizualnej. Wyłącz style CSS i sprawdź, czy treść nadal ma sens.
1. **Kolejność nawigacji:** Upewnij się, że nawigacja klawiaturą (Tab) podąża za logicznym układem strony.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub strona internetowa nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 1.3.2 Zrozumiała kolejność. |


## C.9.1.3.3 - C.9.1.3.3 Właściwości zmysłowe

### Warunki wstępne
1. 1. TIK jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 1.3.3 Właściwości zmysłowe](https://www.w3.org/Translations/WCAG21-pl/#w-asciwosci-zmys-owe).

### Typ oceny
Inspekcja

### Checklist
1. **Instrukcje zmysłowe:** Sprawdź, czy instrukcje nie polegają wyłącznie na właściwościach zmysłowych, takich jak kształt, rozmiar, lokalizacja wizualna czy dźwięk (np. unikaj "kliknij zielony przycisk po prawej", użyj "kliknij zielony przycisk 'Zatwierdź' po prawej").

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub strona internetowa nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 1.3.3 Właściwości zmysłowe. |


## C.9.1.3.4 - C.9.1.3.4 Orientacja

### Warunki wstępne
1. 1. TIK jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 1.3.4 Orientacja](https://www.w3.org/Translations/WCAG21-pl/#orientacja).

### Typ oceny
Inspekcja

### Checklist
1. **Orientacja ekranu:** Sprawdź, czy strona nie wymusza jednej orientacji ekranu (poziomej lub pionowej), chyba że jest to niezbędne (np. pianino, czek bankowy). Treść powinna być dostępna w obu orientacjach.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub strona internetowa nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 1.3.4 Orientacja. |


## C.9.1.3.5 - C.9.1.3.5 Określenie pożądanej wartości

### Warunki wstępne
1. 1. TIK jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 1.3.5 Określenie pożądanej wartości](https://www.w3.org/Translations/WCAG21-pl/#okreslenie-pozadanej-wartosci).

### Typ oceny
Inspekcja

### Checklist
1. **Autouzupełnianie (Autocomplete):** Sprawdź, czy pola formularzy zbierające dane o użytkowniku (np. imię, e-mail) mają poprawny atrybut `autocomplete`, pozwalający przeglądarce na automatyczne wypełnienie danych.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub strona internetowa nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 1.3.5 Określenie pożądanej wartości. |


## C.9.1.4.1 - C.9.1.4.1 Użycie koloru

### Warunki wstępne
1. 1. TIK jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 1.4.1 Użycie koloru](https://www.w3.org/Translations/WCAG21-pl/#uzycie-koloru).

### Typ oceny
Inspekcja

### Checklist
1. **Kolor jako jedyny wyróżnik:** Sprawdź, czy kolor nie jest jedynym sposobem przekazywania informacji (np. błędy w formularzu oznaczone tylko czerwoną ramką). Należy dodać ikonę lub tekst.
1. **Linki w tekście:** Sprawdź, czy linki wewnątrz bloków tekstu są wyróżnione czymś więcej niż tylko kolorem (np. podkreśleniem) lub czy mają wystarczający kontrast względem otoczenia (3:1) i tła.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub strona internetowa nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 1.4.1 Użycie koloru. |


## C.9.1.4.2 - C.9.1.4.2 Kontrola odtwarzania dźwięku

### Warunki wstępne
1. 1. TIK jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 1.4.2 Kontrola odtwarzania dźwięku](https://www.w3.org/Translations/WCAG21-pl/#kontrola-odtwarzania-dzwieku).

### Typ oceny
Inspekcja

### Checklist
1. **Automatyczne odtwarzanie:** Sprawdź, czy dźwięk odtwarzany automatycznie dłużej niż 3 sekundy ma mechanizm do jego zatrzymania lub wyciszenia.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub strona internetowa nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 1.4.2 Kontrola odtwarzania dźwięku. |


## C.9.1.4.3 - C.9.1.4.3 Kontrast (minimum)

### Warunki wstępne
1. 1. TIK jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 1.4.3 Kontrast (minimum)](https://www.w3.org/Translations/WCAG21-pl/#kontrast-minimum).

### Typ oceny
Inspekcja

### Checklist
1. **Kontrast tekstu:** Sprawdź, czy tekst zwykły ma kontrast do tła co najmniej 4.5:1.
1. **Kontrast dużego tekstu:** Sprawdź, czy duży tekst (powyżej 18pt lub 14pt pogrubiony) ma kontrast co najmniej 3:1.
1. **Tekst na obrazach:** Upewnij się, że tekst na grafikach również spełnia wymogi kontrastu.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub strona internetowa nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 1.4.3 Kontrast (minimum). |


## C.9.1.4.4 - C.9.1.4.4 Zmiana rozmiaru tekstu

### Warunki wstępne
1. 1. TIK jest stroną internetową.

### Procedura
1. 1. TIK jest stroną internetową.
1. 1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu WCAG 2.1 – 1.4.4 Zmiana rozmiaru tekstu.

### Typ oceny
Inspekcja

### Checklist
1. **Skalowanie tekstu:** Sprawdź, czy stronę można powiększyć do 200% (używając funkcji zoom przeglądarki) bez utraty treści i funkcjonalności.
1. **Czytelność po powiększeniu:** Upewnij się, że po powiększeniu tekst nie nakłada się na siebie i nie jest ucinany.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub strona internetowa nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 1.4.4 Zmiana rozmiaru tekstu. |


## C.9.1.4.5 - C.9.1.4.5 Obrazy tekstu

### Warunki wstępne
1. 1. TIK jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 1.4.5 Obrazy tekstu](https://www.w3.org/Translations/WCAG21-pl/#obrazy-tekstu).

### Typ oceny
Inspekcja

### Checklist
1. **Tekst jako grafika:** Sprawdź, czy tekst nie jest prezentowany w formie obrazka (chyba że jest to logo lub jest to niezbędne, np. wykres). Należy używać prawdziwego tekstu, aby był skalowalny i dostępny dla czytników.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub strona internetowa nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 1.4.5 Obrazy tekstu. |


## C.9.1.4.10 - C.9.1.4.10 Dopasowanie do ekranu

### Warunki wstępne
1. 1. TIK jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 1.4.10 Dopasowanie do ekranu](https://www.w3.org/Translations/WCAG21-pl/#dopasowanie-do-ekranu).

### Typ oceny
Inspekcja

### Checklist
1. **Responsywność (Reflow):** Sprawdź, czy przy szerokości ekranu 320px (lub przy powiększeniu 400% na desktopie) strona nie wymaga przewijania w dwóch wymiarach (poziomym i pionowym). Treść powinna się "przelewac" do jednej kolumny.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub strona internetowa nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 1.4.10 Dopasowanie do ekranu. |


## C.9.1.4.11 - C.9.1.4.11 Kontrast elementów nietekstowych

### Warunki wstępne
1. 1. TIK jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 1.4.11 Kontrast elementów nietekstowych](https://www.w3.org/Translations/WCAG21-pl/#kontrast-elementow-nietekstowych).

### Typ oceny
Inspekcja

### Checklist
1. **Kontrast elementów nietekstowych:** Sprawdź, czy elementy interfejsu (przyciski, pola formularzy) oraz ważne elementy graficzne (wykresy) mają kontrast co najmniej 3:1 względem sąsiadujących kolorów.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub strona internetowa nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 1.4.11 Kontrast elementów nietekstowych. |


## C.9.1.4.12 - C.9.1.4.12 Odstępy w tekście

### Warunki wstępne
1. 1. TIK jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 1.4.12 Odstępy w tekście](https://www.w3.org/Translations/WCAG21-pl/#odstepy-w-tekscie).

### Typ oceny
Inspekcja

### Checklist
1. **Odstępy w tekście:** Sprawdź, czy użytkownik może zmienić odstępy w tekście (interlinia, odstępy między akapitami, słowami, literami) bez utraty treści lub funkcjonalności (np. używając skryptozakładki testowej).

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub strona internetowa nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 1.4.12 Odstępy w tekście. |


## C.9.1.4.13 - C.9.1.4.13 Treść spod kursora lub fokusu

### Warunki wstępne
1. 1. TIK jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 1.4.13 Treść spod kursora lub fokusu](https://www.w3.org/Translations/WCAG21-pl/#tresc-spod-kursora-lub-fokusu).

### Typ oceny
Inspekcja

### Checklist
1. **Treść spod kursora (Hover):** Sprawdź, czy treści pojawiające się po najechaniu myszą (tooltipy, menu) można odrzucić (klawiszem Esc), czy można na nie najechać kursorem bez ich znikania, i czy nie znikają same bez zmiany fokusu.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub strona internetowa nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 1.4.13 Treść spod kursora. |


## C.9.2.1.1 - C.9.2.1.1 Klawiatura

### Warunki wstępne
1. 1. TIK jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 2.1.1 Klawiatura](https://www.w3.org/Translations/WCAG21-pl/#klawiatura).

### Typ oceny
Inspekcja

### Checklist
1. **Dostępność klawiatury:** Sprawdź, czy wszystkie elementy interaktywne (linki, przyciski, formularze) są dostępne i obsługiwalne wyłącznie za pomocą klawiatury (Tab, Enter, Spacja, Strzałki).
1. **Brak myszki:** Spróbuj obsłużyć całą stronę bez użycia myszki.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub strona internetowa nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 2.1.1 Klawiatura. |


## C.9.2.1.2 - C.9.2.1.2 Bez pułapki na klawiaturę

### Warunki wstępne
1. 1. TIK jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 2.1.2 Bez pułapki na klawiaturę](https://www.w3.org/Translations/WCAG21-pl/#bez-pu-apki-na-klawiature).

### Typ oceny
Inspekcja

### Checklist
1. **Pułapka na klawiaturę:** Sprawdź, czy fokus nie zostaje uwięziony w żadnym elemencie (np. w odtwarzaczu wideo, oknie modalnym) i czy można z niego wyjść standardowymi klawiszami (np. Tab, Esc).

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub strona internetowa nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 2.1.2 Bez pułapki na klawiaturę. |


## C.9.2.1.4 - C.9.2.1.4 Jednoznakowe skróty klawiaturowe

### Warunki wstępne
1. 1. TIK jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 2.1.4 Jednoznakowe skróty klawiaturowe](https://www.w3.org/Translations/WCAG21-pl/#jednoznakowe-skroty-klawiaturowe).

### Typ oceny
Inspekcja

### Checklist
1. **Skróty jednoliterowe:** Jeśli strona obsługuje skróty klawiszowe oparte na pojedynczych literach, sprawdź, czy można je wyłączyć lub zmienić, aby uniknąć przypadkowego uruchomienia (np. podczas dyktowania tekstu).

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub strona internetowa nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 2.1.4 Jednoznakowe skróty klawiaturowe. |


## C.9.2.2.1 - C.9.2.2.1 Dostosowanie czasu

### Warunki wstępne
1. 1. TIK jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 2.2.1 Dostosowanie czasu](https://www.w3.org/Translations/WCAG21-pl/#dostosowanie-czasu).

### Typ oceny
Inspekcja

### Checklist
1. **Limity czasowe:** Jeśli na stronie występują limity czasowe (np. sesja logowania), sprawdź, czy użytkownik może je wyłączyć, dostosować lub przedłużyć przed upływem czasu.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub strona internetowa nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 2.2.1 Dostosowanie czasu. |


## C.9.2.2.2 - C.9.2.2.2 Pauza, zatrzymanie, ukrycie

### Warunki wstępne
1. 1. TIK jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 2.2.2 Pauza, zatrzymanie, ukrycie](https://www.w3.org/Translations/WCAG21-pl/#pauza-zatrzymanie-ukrycie).

### Typ oceny
Inspekcja

### Checklist
1. **Pauza, zatrzymanie, ukrycie:** Sprawdź, czy ruszające się, migające lub przewijające się automatycznie treści (np. karuzele, tickery) można zatrzymać, zapauzować lub ukryć.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub strona internetowa nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 2.2.2 Pauza, zatrzymanie, ukrycie. |


## C.9.2.3.1 - C.9.2.3.1 Trzy błyski lub wartości poniżej progu

### Warunki wstępne
1. 1. TIK jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 2.3.1 Trzy błyski lub wartości poniżej progu](https://www.w3.org/Translations/WCAG21-pl/#trzy-b-yski-lub-wartosci-ponizej-progu).

### Typ oceny
Inspekcja

### Checklist
1. **Błyski:** Sprawdź, czy strona nie zawiera elementów błyskających częściej niż 3 razy na sekundę (może to wywołać atak padaczki).

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub strona internetowa nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 2.3.1 Trzy błyski lub wartości poniżej progu. |


## C.9.2.4.1 - C.9.2.4.1 Możliwość pominięcia bloków

### Warunki wstępne
1. 1. TIK jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 2.4.1 Możliwość pominięcia bloków](https://www.w3.org/Translations/WCAG21-pl/#mozliwosc-pominiecia-blokow).

### Typ oceny
Inspekcja

### Checklist
1. **Pomięcie bloków (Skip links):** Sprawdź, czy dostępny jest mechanizm (np. link "Przejdź do treści") pozwalający pominąć powtarzające się bloki nawigacyjne i przejść bezpośrednio do głównej treści.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub strona internetowa nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 2.4.1 Możliwość pominięcia bloków. |


## C.9.2.4.2 - C.9.2.4.2 Tytuł strony

### Warunki wstępne
1. 1. TIK jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 2.4.2 Tytuł strony](https://www.w3.org/Translations/WCAG21-pl/#tytu-strony).

### Typ oceny
Inspekcja

### Checklist
1. **Tytuł strony:** Sprawdź, czy każda podstrona ma unikalny i opisowy tytuł (widoczny na karcie przeglądarki), który pozwala zidentyfikować jej treść i kontekst.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub strona internetowa nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 2.4.2 Tytuł strony. |


## C.9.2.4.3 - C.9.2.4.3 Kolejność fokusu

### Warunki wstępne
1. 1. TIK jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 2.4.3 Kolejność fokusu](https://www.w3.org/Translations/WCAG21-pl/#kolejnosc-fokusu).

### Typ oceny
Inspekcja

### Checklist
1. **Kolejność fokusu:** Sprawdź, czy kolejność nawigacji klawiaturą (Tab) jest logiczna i przewidywalna (zazwyczaj od lewej do prawej, od góry do dołu).

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub strona internetowa nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 2.4.3 Kolejność fokusu. |


## C.9.2.4.4 - C.9.2.4.4 Cel łącza (w kontekście)

### Warunki wstępne
1. 1. TIK jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 2.4.4 Cel łącza (w kontekście)](https://www.w3.org/Translations/WCAG21-pl/#cel-acza-w-kontekscie).

### Typ oceny
Inspekcja

### Checklist
1. **Cel linku:** Sprawdź, czy treść każdego linku (lub linku wraz z kontekstem) jasno określa, dokąd on prowadzi. Unikaj linków typu "kliknij tutaj" bez kontekstu.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub strona internetowa nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 2.4.4 Cel łącza (w kontekście). |


## C.9.2.4.5 - C.9.2.4.5 Wiele dróg

### Warunki wstępne
1. 1. TIK jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 2.4.5 Wiele dróg](https://www.w3.org/Translations/WCAG21-pl/#wiele-drog).

### Typ oceny
Inspekcja

### Checklist
1. **Wiele dróg:** Sprawdź, czy istnieje więcej niż jeden sposób dotarcia do podstrony (np. menu nawigacyjne, wyszukiwarka, mapa strony, lista linków).

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub strona internetowa nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 2.4.5 Wiele dróg. |


## C.9.2.4.6 - C.9.2.4.6 Nagłówki i etykiety

### Warunki wstępne
1. 1. TIK jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 2.4.6 Nagłówki i etykiety](https://www.w3.org/Translations/WCAG21-pl/#nag-owki-i-etykiety).

### Typ oceny
Inspekcja

### Checklist
1. **Nagłówki i etykiety:** Sprawdź, czy nagłówki i etykiety jasno opisują temat lub cel sekcji/pola formularza.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub strona internetowa nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 2.4.6 Nagłówki i etykiety. |


## C.9.2.4.7 - C.9.2.4.7 Widoczny fokus

### Warunki wstępne
1. 1. TIK jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 2.4.7 Widoczny fokus](https://www.w3.org/Translations/WCAG21-pl/#widoczny-fokus).

### Typ oceny
Inspekcja

### Checklist
1. **Widoczny fokus:** Sprawdź, czy każdy element interaktywny ma wyraźnie widoczne obramowanie (fokus) podczas nawigacji klawiaturą.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub strona internetowa nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 2.4.7 Widoczny fokus. |


## C.9.2.5.1 - C.9.2.5.1 Gesty dotykowe

### Warunki wstępne
1. 1. TIK jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 2.5.1 Gesty dotykowe](https://www.w3.org/Translations/WCAG21-pl/#gesty-dotykowe).

### Typ oceny
Inspekcja

### Checklist
1. **Gesty punktowe:** Sprawdź, czy funkcje wymagające gestów wielopunktowych (np. pinch-to-zoom) lub ścieżkowych można obsłużyć również za pomocą prostego kliknięcia/dotknięcia.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub strona internetowa nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 2.5.1 Gesty dotykowe. |


## C.9.2.5.2 - C.9.2.5.2 Rezygnacja ze wskazania

### Warunki wstępne
1. 1. TIK jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 2.5.2 Rezygnacja ze wskazania](https://www.w3.org/Translations/WCAG21-pl/#rezygnacja-ze-wskazania).

### Typ oceny
Inspekcja

### Checklist
1. **Rezygnacja ze wskazania:** Sprawdź, czy funkcjonalność jest aktywowana przy zwolnieniu wskaźnika (up-event), co pozwala na anulowanie (np. przez przesunięcie kursora poza element). Jeśli aktywacja następuje przy naciśnięciu, upewnij się, że istnieje mechanizm cofnięcia lub zachowanie to jest niezbędne.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub strona internetowa nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 2.5.2 Rezygnacja ze wskazania. |


## C.9.2.5.3 - C.9.2.5.3 Etykieta w nazwie

### Warunki wstępne
1. 1. TIK jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 2.5.3 Etykieta w nazwie](https://www.w3.org/Translations/WCAG21-pl/#etykieta-w-nazwie).

### Typ oceny
Inspekcja

### Checklist
1. **Etykieta w nazwie:** Sprawdź, czy widoczna etykieta tekstowa elementu (np. przycisku) jest zawarta w jego nazwie dostępnej (Accessible Name) dla czytników ekranu.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub strona internetowa nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 2.5.3 Etykieta w nazwie. |


## C.9.2.5.4 - C.9.2.5.4 Aktywowanie ruchem

### Warunki wstępne
1. 1. TIK jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 2.5.4 Aktywowanie ruchem](https://www.w3.org/Translations/WCAG21-pl/#aktywowanie-ruchem).

### Typ oceny
Inspekcja

### Checklist
1. **Aktywowanie ruchem:** Jeśli funkcja jest aktywowana ruchem urządzenia (np. potrząśnięcie), sprawdź, czy można ją wyłączyć lub obsłużyć interfejsem.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub strona internetowa nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 2.5.4 Aktywowanie ruchem. |


## C.9.3.1.1 - C.9.3.1.1 Język strony

### Warunki wstępne
1. 1. TIK jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 3.1.1 Język strony](https://www.w3.org/Translations/WCAG21-pl/#jezyk-strony).

### Typ oceny
Inspekcja

### Checklist
1. **Język strony:** Sprawdź, czy w kodzie HTML zdefiniowany jest poprawny język strony (atrybut `lang` w znaczniku `<html>`).

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub strona internetowa nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 3.1.1 Język strony. |


## C.9.3.1.2 - C.9.3.1.2 Język części

### Warunki wstępne
1. 1. TIK jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 3.1.2 Język części](https://www.w3.org/Translations/WCAG21-pl/#jezyk-czesci).

### Typ oceny
Inspekcja

### Checklist
1. **Język części:** Sprawdź, czy fragmenty tekstu w innym języku niż domyślny mają odpowiedni atrybut `lang`.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub strona internetowa nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 3.1.2 Język części. |


## C.9.3.2.1 - C.9.3.2.1 Po otrzymaniu fokusu

### Warunki wstępne
1. 1. TIK jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 3.2.1 Po otrzymaniu fokusu](https://www.w3.org/Translations/WCAG21-pl/#po-otrzymaniu-fokusu).

### Typ oceny
Inspekcja

### Checklist
1. **Po otrzymaniu fokusu:** Sprawdź, czy otrzymanie fokusu przez element nie powoduje nieoczekiwanej zmiany kontekstu (np. automatycznego wysłania formularza, otwarcia nowego okna).

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub strona internetowa nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 3.2.1 Po otrzymaniu fokusu. |


## C.9.3.2.2 - C.9.3.2.2 Podczas wprowadzania danych

### Warunki wstępne
1. 1. TIK jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 3.2.2 Podczas wprowadzania danych](https://www.w3.org/Translations/WCAG21-pl/#podczas-wprowadzania-danych).

### Typ oceny
Inspekcja

### Checklist
1. **Podczas wprowadzania danych:** Sprawdź, czy zmiana ustawienia elementu interfejsu (np. wybór z listy) nie powoduje nieoczekiwanej zmiany kontekstu, chyba że użytkownik został o tym uprzedzony.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub strona internetowa nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 3.2.2 Podczas wprowadzania danych. |


## C.9.3.2.3 - C.9.3.2.3 Spójna nawigacja

### Warunki wstępne
1. 1. TIK jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 3.2.3 Spójna nawigacja](https://www.w3.org/Translations/WCAG21-pl/#spojna-nawigacja).

### Typ oceny
Inspekcja

### Checklist
1. **Spójna nawigacja:** Sprawdź, czy mechanizmy nawigacyjne (menu, wyszukiwarka) pojawiają się w tym samym względnym porządku na różnych podstronach.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub strona internetowa nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 3.2.3 Spójna nawigacja. |


## C.9.3.2.4 - C.9.3.2.4 Spójna identyfikacja

### Warunki wstępne
1. 1. TIK jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 3.2.4 Spójna identyfikacja](https://www.w3.org/Translations/WCAG21-pl/#spojna-identyfikacja).

### Typ oceny
Inspekcja

### Checklist
1. **Spójna identyfikacja:** Sprawdź, czy elementy pełniące tę samą funkcję są konsekwentnie identyfikowane (mają te same etykiety i ikony) w całym serwisie.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub strona internetowa nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 3.2.4 Spójna identyfikacja. |


## C.9.3.3.1 - C.9.3.3.1 Identyfikacja błędu

### Warunki wstępne
1. 1. TIK jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 3.3.1 Identyfikacja błędu](https://www.w3.org/Translations/WCAG21-pl/#identyfikacja-b-edu).

### Typ oceny
Inspekcja

### Checklist
1. **Identyfikacja błędu:** Sprawdź, czy błędy w formularzu są automatycznie wykrywane, a użytkownik otrzymuje jasną informację tekstową, które pole zawiera błąd i na czym on polega.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub strona internetowa nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 3.3.1 Identyfikacja błędu. |


## C.9.3.3.2 - C.9.3.3.2 Etykiety lub instrukcje

### Warunki wstępne
1. 1. TIK jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 3.3.2 Etykiety lub instrukcje](https://www.w3.org/Translations/WCAG21-pl/#etykiety-lub-instrukcje).

### Typ oceny
Inspekcja

### Checklist
1. **Etykiety lub instrukcje:** Sprawdź, czy pola wymagające danych w określonym formacie posiadają odpowiednie instrukcje lub przykłady.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub strona internetowa nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 3.3.2 Etykiety lub instrukcje. |


## C.9.3.3.3 - C.9.3.3.3 Sugestie korekty błędów

### Warunki wstępne
1. 1. TIK jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 3.3.3 Sugestie korekty błędów](https://www.w3.org/Translations/WCAG21-pl/#sugestie-korekty-b-edow).

### Typ oceny
Inspekcja

### Checklist
1. **Sugestie korekty:** Sprawdź, czy w przypadku błędu system podpowiada poprawną wartość (jeśli jest to możliwe).

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub strona internetowa nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 3.3.3 Sugestie korekty błędów. |


## C.9.3.3.4 - C.9.3.3.4 Zapobieganie błędom (prawnym, finansowym, w danych)

### Warunki wstępne
1. 1. TIK jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 3.3.4 Zapobieganie błędom (prawnym, finansowym, w danych)](https://www.w3.org/Translations/WCAG21-pl/#zapobieganie-b-edom-prawnym-finansowym-w-danych).

### Typ oceny
Inspekcja

### Checklist
1. **Zapobieganie błędom:** Dla stron prawnych/finansowych: sprawdź, czy użytkownik może zweryfikować, potwierdzić lub cofnąć transakcję przed jej finalizacją.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub strona internetowa nie zawiera treści istotnych dla WCAG 2.1 Kryterium sukcesu 3.3.4 Zapobieganie błędom (prawnym, finansowym, w danych). |


## C.9.4.1.1 - C.9.4.1.1 Poprawność kodu

### Warunki wstępne
1. 1. TIK jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 4.1.1 Poprawność kodu](https://www.w3.org/Translations/WCAG21-pl/#poprawnosc-kodu).

### Typ oceny
Inspekcja

### Checklist
1. **Poprawność kodu (Parsing):** *Uwaga: W WCAG 2.2 to kryterium zostało usunięte. W WCAG 2.1 (EN 301 549) uznaje się je za spełnione, chyba że błędy uniemożliwiają działanie technologii asystujących.*

Sprawdź kod wyłącznie pod kątem krytycznych błędów:
- zduplikowanych atrybutów `id`,
- zduplikowanych atrybutach w tym samym znaczniku,
- błędnym zagnieżdżeniu elementów.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub strona internetowa nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 4.1.1 Poprawność kodu. |


## C.9.4.1.2 - C.9.4.1.2 Nazwa, rola, wartość

### Warunki wstępne
1. 1. TIK jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 4.1.2 Nazwa, rola, wartość](https://www.w3.org/Translations/WCAG21-pl/#nazwa-rola-wartosc).

### Typ oceny
Inspekcja

### Checklist
1. **Nazwa, rola, wartość:** Sprawdź, czy niestandardowe elementy interfejsu (np. własne przyciski, zakładki) mają poprawnie zdefiniowaną nazwę, rolę i stan (np. przy użyciu ARIA), aby były dostępne dla czytników ekranu.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub strona internetowa nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 4.1.2 Nazwa, rola, wartość. |


## C.9.4.1.3 - C.9.4.1.3 Komunikaty o stanie

### Warunki wstępne
1. 1. TIK jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy strona internetowa spełnia kryterium sukcesu [WCAG 2.1 – 4.1.3 Komunikaty o stanie](https://www.w3.org/Translations/WCAG21-pl/#komunikaty-o-stanie).

### Typ oceny
Inspekcja

### Checklist
1. **Komunikaty o stanie:** Sprawdź, czy komunikaty o statusie (np. "Wyszukiwanie...", "Dodano do koszyka") są ogłaszane przez czytnik ekranu bez konieczności przenoszenia fokusu (użycie ARIA live regions).

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub strona internetowa nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 4.1.3 Komunikaty o stanie. |


## C.9.6 - C.9.6 Wymagania zgodności WCAG 2.1

### Warunki wstępne
1. 1. TIK jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy strona internetowa spełnia wymaganie zgodności wg [WCAG 2.1 – 1: Poziom zgodności](https://www.w3.org/Translations/WCAG21-pl/#cc1) na poziomie AA.
1. 2. Sprawdź, czy strona internetowa spełnia wymaganie zgodności wg [WCAG 2.1 – 2: Całe strony](https://www.w3.org/Translations/WCAG21-pl/#cc2).
1. 3. Sprawdź, czy strona internetowa spełnia wymaganie zgodności wg [WCAG 2.1 – 3: Całe procesy](https://www.w3.org/Translations/WCAG21-pl/#cc3).
1. 4. Sprawdź, czy strona internetowa spełnia wymaganie zgodności wg [WCAG 2.1 – 4: Użycie technologii obsługujących dostępność](https://www.w3.org/Translations/WCAG21-pl/#cc4).
1. 5. Sprawdź, czy strona internetowa spełnia wymaganie zgodności wg [WCAG 2.1 – 5: Bez zakłóceń](https://www.w3.org/Translations/WCAG21-pl/#cc5).

### Typ oceny
Inspekcja

### Checklist
1. **1. Poziom zgodności:** Sprawdź, czy strona spełnia wszystkie kryteria sukcesu poziomu A i AA (lub posiada wersję alternatywną).
1. **2. Całe strony:** Sprawdź, czy ocena dostępności dotyczy całej strony internetowej, a nie tylko jej fragmentu. Nie można wykluczyć części strony (np. nagłówka czy stopki) z oceny.
1. **3. Całe procesy:** Jeśli strona jest częścią procesu (np. zakupy, logowanie), sprawdź, czy wszystkie kroki tego procesu są dostępne. Dostępność tylko jednego kroku nie wystarcza, jeśli użytkownik nie może ukończyć całego zadania.
1. **4. Użycie technologii obsługujących dostępność:** Sprawdź, czy informacje i funkcje są dostępne przy użyciu technologii, które są wspierane przez narzędzia użytkownika (przeglądarki, czytniki ekranu). Unikaj technologii, które blokują dostępność.
1. **5. Bez zakłóceń:** Sprawdź, czy technologie, które nie są wspierane w zakresie dostępności, nie blokują dostępu do reszty strony (np. czy nie powodują pułapki na klawiaturę, migania, czy nie zasłaniają treści).

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Wszystkie kryteria: prawda |
| Niezaliczone | Dowolne kryterium: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.10.1.1.1 - C.10.1.1.1 Treść nietekstowa

### Warunki wstępne
1. 1. TIK nie jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy dokument spełnia kryterium sukcesu [WCAG 2.1 – 1.1.1 Treść nietekstowa](https://www.w3.org/Translations/WCAG21-pl/#tresc-nietekstowa)

### Typ oceny
Inspekcja

### Checklist
1. **Tekst alternatywny:** Upewnij się, że każdy obraz i grafika ma odpowiedni tekst alternatywny zapisany w właściwościach obrazu lub atrybucie alt. Elementy dekoracyjne powinny mieć pusty alt; złożone grafiki (wykresy, diagramy) powinny też mieć skrócony opis alternatywny i odniesienie do pełnego opisu w treści dokumentu
1. **Elementy dekoracyjne:** Upewnij się, że elementy dekoracyjne są oznaczone jako artefakty (PDF) lub nie mają tekstu alternatywnego, jeśli nie wnoszą treści.
1. **Wykresy i diagramy:** Złożone grafiki powinny mieć krótki opis alternatywny oraz odniesienie do pełnego opisu w treści dokumentu.
1. **Uwaga:** Mechanizmy CAPTCHA rzadko występują w dokumentach offline, ale jeśli się pojawią, należy stosować do nich te same zasady.

### Notatki
1. **Uwaga 1:** Przykłady dokumentów to listy, arkusze kalkulacyjne, e-maile, książki, zdjęcia, prezentacje i filmy, które otwierasz w odpowiednich programach (np. czytnikach, edytorach, odtwarzaczach).
1. **Uwaga 2:** Jeden dokument może składać się z kilku plików, na przykład z materiału wideo i oddzielnego pliku z napisami. Dla użytkownika wygląda to zazwyczaj jak jedna całość.
1. **Uwaga 3:** Aby wyświetlić dokument, potrzebujesz programu (np. przeglądarki PDF, odtwarzacza). Wymagania dla tych programów są opisane w Klauzuli 11.
1. **Uwaga 4:** Jeśli treść jest częścią oprogramowania (np. ekran pomocy wbudowany w aplikację), stosuje się wymagania z Klauzuli 11.
1. **Uwaga 8:** Te wymagania dotyczą także dokumentów zabezpieczonych (hasłem, szyfrowaniem, podpisem cyfrowym), w momencie gdy są one wyświetlane użytkownikowi.
1. **Uwaga 9:** Zaleca się dołączanie informacji (metadanych) o dostępności dokumentu – wewnątrz niego lub w osobnym pliku (np. zgodnie ze standardem WebSchemas).

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub dokument nieinternetowy nie zawiera treści istotnych dla WCAG 2.1 Kryterium sukcesu 1.1.1 Treści nietekstowe. |


## C.10.1.2.1 - C.10.1.2.1 Tylko audio lub tylko wideo (nagranie)

### Warunki wstępne
1. 11. TIK nie jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy dokument spełnia kryterium sukcesu [WCAG 2.1 – 1.2.1 Tylko audio lub tylko wideo (nagranie)](https://www.w3.org/Translations/WCAG21-pl/#tylko-audio-lub-tylko-wideo-nagranie)

### Typ oceny
Inspekcja

### Checklist
1. **Tylko audio (nagranie):** Sprawdź, czy dla nagrań dźwiękowych (np. podcastów) dostępna jest transkrypcja tekstowa zawierająca wszystkie dialogi i istotne dźwięki.
1. **Tylko wideo (nagranie):** Sprawdź, czy dla nagrań wideo bez dźwięku (np. animacji instruktażowych) dostępna jest alternatywa tekstowa lub ścieżka audio opisująca to, co dzieje się na ekranie.
1. **Uwaga:** Alternatywę można zamieścić bezpośrednio w dokumencie lub udostępnić w osobnej wersji, która spełnia wymagania.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub dokument nieinternetowy nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 1.2.1 Tylko audio lub tylko wideo (nagranie). |


## C.10.1.2.2 - C.10.1.2.2 Napisy rozszerzone (nagranie)

### Warunki wstępne
1. 1. TIK nie jest stroną internetową.

### Procedura
1. 11. Sprawdź, czy dokument spełnia kryterium sukcesu [WCAG 2.1 – 1.2.2 Napisy rozszerzone (nagranie)](https://www.w3.org/Translations/WCAG21-pl/#napisy-rozszerzone-nagranie)

### Typ oceny
Inspekcja

### Checklist
1. **Napisy:** Sprawdź, czy wszystkie nagrania wideo z dźwiękiem (dialogi, istotne odgłosy) posiadają zsynchronizowane napisy dla niesłyszących.
1. **Kompletność napisów:** Sprawdź, czy napisy zawierają nie tylko dialogi, ale także informacje o istotnych dźwiękach (np. [muzyka], [śmiech], [dzwonek do drzwi]).
1. **Uwaga:** Definicja WCAG 2.1 zauważa, że napisy (captions) są czasem nazywane "napisami dla niesłyszących". Niezależnie od nazwy, muszą one zapewniać zsynchronizowaną alternatywę tekstową zarówno dla mowy, jak i innych dźwięków (efekty dźwiękowe, muzyka, śmiech, identyfikacja mówcy), które są kluczowe dla zrozumienia treści.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub dokument nieinternetowy nie zawiera treści istotnych dla WCAG 2.1 Kryterium sukcesu 1.2.2 Napisy rozszerzone (nagranie). |


## C.10.1.2.3 - C.10.1.2.3 Audiodeskrypcja lub alternatywa tekstowa dla mediów (nagranie)

### Warunki wstępne
1. 1. TIK nie jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy dokument spełnia kryterium sukcesu [WCAG 2.1 – 1.2.3 Audiodeskrypcja lub alternatywa tekstowa dla mediów (nagranie)](https://www.w3.org/Translations/WCAG21-pl/#audiodeskrypcja-lub-alternatywa-tekstowa-dla-mediow-nagranie)

### Typ oceny
Inspekcja

### Checklist
1. **Audiodeskrypcja lub tekst:** Sprawdź, czy nagrania wideo posiadają audiodeskrypcję (dodatkową ścieżkę lektora opisującą obraz) LUB pełną alternatywę tekstową (transkrypcję opisową), która pozwala zrozumieć treść wizualną bez oglądania.
1. **Uwaga 1:** Definicja WCAG 2.1 wskazuje, że audiodeskrypcja jest czasem nazywana "opisem wideo" lub "narracją opisową".
1. **Uwaga 2:** Często wykorzystuje się do tego celu dodatkowe lub alternatywne ścieżki dźwiękowe.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub dokument nieinternetowy nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 1.2.3 Audiodeskrypcja lub alternatywa tekstowa dla mediów (nagranie). |


## C.10.1.2.4 - C.10.1.2.4 Napisy rozszerzone (na żywo)

### Warunki wstępne
1. 1. TIK nie jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy dokument spełnia kryterium sukcesu [WCAG 2.1 – 1.2.4 Napisy rozszerzone (na żywo)](https://www.w3.org/Translations/WCAG21-pl/#napisy-rozszerzone-na-zywo)

### Typ oceny
Inspekcja

### Checklist
1. **Napisy na żywo:** Jeśli dokument transmituje wideo na żywo z dźwiękiem, sprawdź, czy dostępne są napisy generowane w czasie rzeczywistym.
1. **Uwaga:** Definicja WCAG 2.1 zauważa, że napisy (captions) są czasem nazywane "napisami dla niesłyszących". Niezależnie od nazwy, muszą one zapewniać zsynchronizowaną alternatywę tekstową zarówno dla mowy, jak i innych dźwięków (efekty dźwiękowe, muzyka, śmiech, identyfikacja mówcy), które są kluczowe dla zrozumienia treści.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub dokument nieinternetowy nie zawiera treści istotnych dla WCAG 2.1 Kryterium sukcesu 1.2.4 Napisy rozszerzone (na żywo). |


## C.10.1.2.5 - C.10.1.2.5 Audiodeskrypcja (nagranie)

### Warunki wstępne
1. 1. TIK nie jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy dokument spełnia kryterium sukcesu [WCAG 2.1 – 1.2.5 Audiodeskrypcja (nagranie)](https://www.w3.org/Translations/WCAG21-pl/#audiodeskrypcja-nagranie)

### Typ oceny
Inspekcja

### Checklist
1. **Audiodeskrypcja:** Sprawdź, czy nagrania wideo posiadają audiodeskrypcję, jeśli informacje wizualne są kluczowe i nie wynikają ze ścieżki dźwiękowej (wymagane dla poziomu AA).
1. **Uwaga 1:** Definicja WCAG 2.1 wskazuje, że audiodeskrypcja jest czasem nazywana "opisem wideo" lub "narracją opisową".
1. **Uwaga 2:** Często wykorzystuje się do tego celu dodatkowe lub alternatywne ścieżki dźwiękowe.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub dokument nieinternetowy nie zawiera treści istotnych dla WCAG 2.1 Kryterium sukcesu 1.2.5 Audiodeskrypcja (nagranie). |


## C.10.1.3.1 - C.10.1.3.1 Informacje i relacje

### Warunki wstępne
1. 1. TIK nie jest stroną internetową.

### Procedura
1. 11. Sprawdź, czy dokument spełnia kryterium sukcesu [WCAG 2.1 – 1.3.1 Informacje i relacje](https://www.w3.org/Translations/WCAG21-pl/#informacje-i-relacje)

### Typ oceny
Inspekcja

### Checklist
1. **Nagłówki:** Sprawdź, czy nagłówki są zdefiniowane semantycznie w strukturze dokumentu (np. H1–H6, style nagłówków, tagi), a nie tylko ustawione wizualnie; poprawna semantyka poprawia czytelność dla czytników ekranu i ułatwia nawigację.
1. **Listy:** Upewnij się, że listy (wypunktowane i numerowane) są tworzone za pomocą funkcji edytora lub stylów list, a nie przez ręczne wstawianie znaków — dzięki temu zachowana zostaje struktura semantyczna i ułatwiona obsługa przez technologie asystujące.
1. **Tabele:** Sprawdź, czy tabele mają wyraźnie oznaczone nagłówki wierszy i/lub kolumn (np. ustawiony nagłówek wiersza/kolumny) oraz logiczną strukturę tabeli, zamiast używania wizualnego układu bez oznaczeń strukturalnych.
1. **Uwaga:** W przypadku dokumentów zawierających niestandardowe typy ról strukturalnych, dobrą praktyką jest mapowanie ich na standardowe typy struktur jako rozwiązanie awaryjne dla czytnika.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub dokument nieinternetowy nie zawiera treści istotnych dla WCAG 2.1 Kryterium sukcesu 1.3.1 Informacje i relacje. |


## C.10.1.3.2 - C.10.1.3.2 Zrozumiała kolejność

### Warunki wstępne
1. 1. TIK nie jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy dokument spełnia kryterium sukcesu [WCAG 2.1 – 1.3.2 Zrozumiała kolejność](https://www.w3.org/Translations/WCAG21-pl/#zrozumia-a-kolejnosc)

### Typ oceny
Inspekcja

### Checklist
1. **Kolejność odczytu:** Sprawdź w panelu 'Tagi' (PDF) lub 'Kolejność' (Acrobat Pro), czy kolejność elementów w drzewie struktury odpowiada logicznej kolejności czytania dokumentu.
1. **Elementy wielokolumnowe:** Upewnij się, że tekst w układzie wielokolumnowym jest odczytywany w poprawnej kolejności (kolumna po kolumnie).

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub dokument nieinternetowy nie zawiera treści istotnych dla WCAG 2.1 Kryterium sukcesu 1.3.2 Zrozumiała kolejność. |


## C.10.1.3.3 - C.10.1.3.3 Właściwości zmysłowe

### Warunki wstępne
1. 1. TIK nie jest stroną internetową.

### Procedura
1. 11. Sprawdź, czy dokument spełnia kryterium sukcesu [WCAG 2.1 – 1.3.3 Właściwości zmysłowe](https://www.w3.org/Translations/WCAG21-pl/#w-asciwosci-zmys-owe)

### Typ oceny
Inspekcja

### Checklist
1. **Właściwości zmysłowe:** Sprawdź, czy instrukcje w dokumencie nie polegają wyłącznie na właściwościach zmysłowych, takich jak kształt, rozmiar, kolor czy lokalizacja (np. unikaj "zobacz tekst w czerwonej ramce", użyj "zobacz tekst w ramce 'Ważne'").

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub dokument nieinternetowy nie zawiera treści istotnych dla WCAG 2.1 Kryterium sukcesu 1.3.3 Właściwości zmysłowe. |


## C.10.1.3.4 - C.10.1.3.4 Orientacja

### Warunki wstępne
1. 1. TIK nie jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy dokument spełnia kryterium sukcesu [WCAG 2.1 – 1.3.4 Orientacja](https://www.w3.org/Translations/WCAG21-pl/#orientacja)

### Typ oceny
Inspekcja

### Checklist
1. **Orientacja ekranu:** Sprawdź, czy dokument nie wymusza jednej orientacji ekranu (poziomej lub pionowej), chyba że jest to niezbędne (np. pianino, czek bankowy). Treść powinna być dostępna w obu orientacjach.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub dokument nieinternetowy nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 1.3.4 Orientacja. |


## C.10.1.3.5 - C.10.1.3.5 Określenie pożądanej wartości

### Warunki wstępne
1. 1. TIK nie jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy dokument spełnia kryterium sukcesu [WCAG 2.1 – 1.3.5 Określenie pożądanej wartości](https://www.w3.org/Translations/WCAG21-pl/#okreslenie-pozadanej-wartosci)

### Typ oceny
Inspekcja

### Checklist
1. **Określenie celu pola:** W dokumentach zawierających formularze (np. PDF), sprawdź, czy pola zbierające dane o użytkowniku są jednoznacznie opisane (np. poprzez nazwę pola lub etykietę/tooltip), co pozwala technologiom asystującym na identyfikację ich celu.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub dokument nieinternetowy nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 1.3.5 Określenie pożądanej wartości. |


## C.10.1.4.1 - C.10.1.4.1 Użycie koloru

### Warunki wstępne
1. 1. TIK nie jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy dokument spełnia kryterium sukcesu [WCAG 2.1 – 1.4.1 Użycie koloru](https://www.w3.org/Translations/WCAG21-pl/#uzycie-koloru)

### Typ oceny
Inspekcja

### Checklist
1. **Kolor jako jedyny wyróżnik:** Sprawdź, czy kolor nie jest jedynym sposobem przekazywania informacji (np. błędy w formularzu oznaczone tylko czerwoną ramką). Należy dodać ikonę lub tekst.
1. **Linki w tekście:** Sprawdź, czy linki wewnątrz bloków tekstu są wyróżnione czymś więcej niż tylko kolorem (np. podkreśleniem) lub czy mają wystarczający kontrast względem otoczenia (3:1) i tła.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub dokument nieinternetowy nie zawiera treści istotnych dla WCAG 2.1 Kryterium sukcesu 1.4.1 Użycie koloru. |


## C.10.1.4.2 - C.10.1.4.2 Kontrola odtwarzania dźwięku

### Warunki wstępne
1. 1. TIK nie jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy dokument spełnia kryterium sukcesu zawarte w Tabeli 10.1.

### Typ oceny
Inspekcja

### Checklist
1. **Kontrola dźwięku:** Jeśli jakikolwiek dźwięk w dokumencie jest odtwarzany automatycznie przez więcej niż 3 sekundy, sprawdź, czy dostępny jest mechanizm pozwalający na wstrzymanie lub zatrzymanie odtwarzania, albo mechanizm kontroli głośności dźwięku niezależny od głośności systemu.
1. **Kryterium sukcesu (Tabela 10.1):** Jeśli jakikolwiek dźwięk w dokumencie odtwarza się automatycznie dłużej niż 3 sekundy, musi istnieć sposób, aby go zatrzymać, wstrzymać lub ściszyć (niezależnie od głośności całego urządzenia).
1. **Uwaga:** Ponieważ jakakolwiek część dokumentu niespełniająca tego kryterium sukcesu może zakłócać zdolność użytkownika do korzystania z całego dokumentu, cała zawartość dokumentu (niezależnie od tego, czy jest używana do spełnienia innych kryteriów sukcesu) musi spełniać to kryterium.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.10.1.4.3 - C.10.1.4.3 Kontrast (minimum)

### Warunki wstępne
1. 1. TIK nie jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy dokument spełnia kryterium sukcesu [WCAG 2.1 – 1.4.3 Kontrast (minimum)](https://www.w3.org/Translations/WCAG21-pl/#kontrast-minimum)

### Typ oceny
Inspekcja

### Checklist
1. **Kontrast tekstu:** Sprawdź, czy tekst dokumentu zachowuje minimalny kontrast 4.5:1 względem tła. Użyj narzędzia do pobierania kolorów (np. Colour Contrast Analyser), aby zmierzyć wartości w dokumencie.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub dokument nieinternetowy nie zawiera treści istotnych dla WCAG 2.1 Kryterium sukcesu 1.4.3 Kontrast (minimum). |


## C.10.1.4.4 - C.10.1.4.4 Zmiana rozmiaru tekstu

### Warunki wstępne
1. 1. TIK nie jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy dokument spełnia kryterium sukcesu [WCAG 2.1 – 1.4.4 Zmiana rozmiaru tekstu](https://www.w3.org/Translations/WCAG21-pl/#zmiana-rozmiaru-tekstu)

### Typ oceny
Inspekcja

### Checklist
1. **Powiększanie tekstu:** Sprawdź, czy tekst w dokumencie można powiększyć do 200% bez utraty treści i funkcjonalności (np. używając opcji powiększenia w przeglądarce PDF lub edytorze tekstu).
1. **Skalowanie:** Upewnij się, że przy powiększeniu tekst nie nakłada się na inne elementy i nie jest ucinany.
1. **Uwaga 1:** Treści, dla których istnieją odtwarzacze oprogramowania, przeglądarki lub edytory z funkcją powiększania do 200 procent, automatycznie spełniają to kryterium sukcesu, gdy są używane z takimi odtwarzaczami, chyba że treść nie będzie działać z powiększeniem.
1. **Uwaga 2:** To kryterium sukcesu dotyczy możliwości powiększenia tekstu na ekranie co najmniej do 200% bez konieczności używania technologii asystujących. Oznacza to, że aplikacja zapewnia pewne środki do powiększania tekstu o 200% (zoom lub inne) bez utraty treści lub funkcjonalności, albo że aplikacja współpracuje z funkcjami platformy, które spełniają to wymaganie.
1. **Uwaga 3:** Dobrą praktyką jest używanie tylko takich czcionek, które pozwalają na skalowanie bez utraty jakości (np. prezentacja pikselowa). Dotyczy to w szczególności czcionek wbudowanych.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub dokument nieinternetowy nie zawiera treści istotnych dla WCAG 2.1 Kryterium sukcesu 1.4.4 Zmiana rozmiaru tekstu. |


## C.10.1.4.5 - C.10.1.4.5 Obrazy tekstu

### Warunki wstępne
1. 1. TIK nie jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy dokument spełnia kryterium sukcesu [WCAG 2.1 – 1.4.5 Obrazy tekstu](https://www.w3.org/Translations/WCAG21-pl/#obrazy-tekstu)

### Typ oceny
Inspekcja

### Checklist
1. **Tekst jako grafika:** Sprawdź, czy tekst nie jest prezentowany w formie obrazka (chyba że jest to logo lub jest to niezbędne, np. wykres). Należy używać prawdziwego tekstu, aby był skalowalny i dostępny dla czytników.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub dokument nieinternetowy nie zawiera treści istotnych dla WCAG 2.1 Kryterium sukcesu 1.4.5 Obrazy tekstu. |


## C.10.1.4.10 - C.10.1.4.10 Dopasowanie do ekranu

### Warunki wstępne
1. 1. TIK nie jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy dokument spełnia kryterium sukcesu zawarte w Tabeli 10.2.

### Typ oceny
Inspekcja

### Checklist
1. **Dopasowanie do ekranu (Reflow):** Sprawdź, czy treść dokumentu może być prezentowana bez utraty informacji lub funkcjonalności i bez konieczności przewijania w dwóch wymiarach dla:
1. - Treści przewijanej pionowo przy szerokości równoważnej 320 pikseli CSS (odpowiada to szerokości 1280 px przy powiększeniu 400%).
1. - Treści przewijanej poziomo przy wysokości równoważnej 256 pikseli CSS.
1. **Kryterium sukcesu (Tabela 10.2):** Treść dokumentu powinna dać się przeglądać bez utraty informacji i funkcji oraz bez konieczności przewijania w dwóch kierunkach (poziomo i pionowo) jednocześnie. Dotyczy to sytuacji, gdy szerokość widoku wynosi 320 pikseli CSS (dla treści przewijanych pionowo) lub wysokość 256 pikseli CSS (dla treści przewijanych poziomo). Wyjątkiem są treści, które ze swojej natury wymagają układu dwuwymiarowego.
1. **Uwaga 1:** 320 pikseli CSS odpowiada szerokości ekranu 1280 pikseli przy powiększeniu 400%.
1. **Uwaga 2:** Przykłady treści wymagających układu dwuwymiarowego to: obrazy, mapy, diagramy, wideo, gry, prezentacje, tabele danych oraz interfejsy, gdzie paski narzędzi muszą być widoczne podczas pracy.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.10.1.4.11 - C.10.1.4.11 Kontrast elementów nietekstowych

### Warunki wstępne
1. 1. TIK jest dokumentem nieinternetowym, który nie ma stałego rozmiaru powierzchni układu treści, co jest niezbędne do przekazywania informacji.

### Procedura
1. 1. Sprawdź, czy dokument spełnia kryterium sukcesu [WCAG 2.1 – 1.4.11 Kontrast elementów nietekstowych](https://www.w3.org/Translations/WCAG21-pl/#kontrast-elementow-nietekstowych)

### Typ oceny
Inspekcja

### Checklist
1. **Kontrast elementów nietekstowych:** Sprawdź, czy elementy interfejsu (przyciski, pola formularzy) oraz ważne elementy graficzne (wykresy) mają kontrast co najmniej 3:1 względem sąsiadujących kolorów.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub dokument nieinternetowy nie zawiera treści istotnych dla WCAG 2.1 Kryterium sukcesu 1.4.11 Kontrast elementów nietekstowych. |


## C.10.1.4.12 - C.10.1.4.12 Odstępy w tekście

### Warunki wstępne
1. 1. TIK nie jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy dokument spełnia kryterium sukcesu [WCAG 2.1 – 1.4.12 Odstępy w tekście](https://www.w3.org/Translations/WCAG21-pl/#odstepy-w-tekscie)

### Typ oceny
Inspekcja

### Checklist
1. **Odstępy w tekście:** Sprawdź, czy użytkownik może zmienić odstępy w tekście (interlinia, odstępy między akapitami, słowami, literami) bez utraty treści lub funkcjonalności (np. używając skryptozakładki testowej).

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub dokument nieinternetowy nie zawiera treści istotnych dla WCAG 2.1 Kryterium sukcesu 1.4.12 Odstępy w tekście. |


## C.10.1.4.13 - C.10.1.4.13 Treść spod kursora lub fokusu

### Warunki wstępne
1. 1. TIK nie jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy dokument spełnia kryterium sukcesu [WCAG 2.1 – 1.4.13 Treść spod kursora lub fokusu](https://www.w3.org/Translations/WCAG21-pl/#tresc-spod-kursora-lub-fokusu)

### Typ oceny
Inspekcja

### Checklist
1. **Treść spod kursora (Hover):** Sprawdź, czy treści pojawiające się po najechaniu myszą (tooltipy, menu) można odrzucić (klawiszem Esc), czy można na nie najechać kursorem bez ich znikania, i czy nie znikają same bez zmiany fokusu.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub dokument nieinternetowy nie zawiera treści istotnych dla WCAG 2.1 Kryterium sukcesu 1.4.13 Treść spod kursora lub fokusu. |


## C.10.2.1.1 - C.10.2.1.1 Klawiatura

### Warunki wstępne
1. 1. TIK nie jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy dokument spełnia kryterium sukcesu [WCAG 2.1 – 2.1.1 Klawiatura](https://www.w3.org/Translations/WCAG21-pl/#klawiatura)

### Typ oceny
Inspekcja

### Checklist
1. **Obsługa klawiaturą:** Sprawdź, czy wszystkie elementy interaktywne w dokumencie (np. linki, pola formularzy, przyciski, multimedia) są dostępne i obsługiwalne wyłącznie za pomocą klawiatury.
1. **Nawigacja:** Upewnij się, że możesz dotrzeć do każdego elementu interaktywnego używając klawisza Tab i aktywować go (np. Enter lub Spacja), nie używając myszki.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub dokument nieinternetowy nie zawiera treści istotnych dla WCAG 2.1 Kryterium sukcesu 2.1.1 Klawiatura. |


## C.10.2.1.2 - C.10.2.1.2 Bez pułapki na klawiaturę

### Warunki wstępne
1. 1. TIK nie jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy dokument spełnia kryterium sukcesu zawarte w Tabeli 10.3.

### Typ oceny
Inspekcja

### Checklist
1. **Pułapka na klawiaturę:** Sprawdź, czy fokus nie zostaje uwięziony w żadnym elemencie (np. w odtwarzaczu wideo, oknie modalnym) i czy można z niego wyjść standardowymi klawiszami (np. Tab, Esc).
1. **Kryterium sukcesu (Tabela 10.3):** Jeśli można wejść na element za pomocą klawiatury, musi być też możliwe wyjście z niego za pomocą klawiatury. Jeśli wyjście wymaga użycia innych klawiszy niż standardowe (np. strzałki, Tab), użytkownik musi zostać o tym poinformowany.
1. **Uwaga 1:** Ponieważ "pułapka na klawiaturę" może uniemożliwić korzystanie z całego dokumentu, zasada ta dotyczy wszystkich treści w dokumencie.
1. **Uwaga 2:** Standardowe metody wyjścia zależą od systemu (np. na komputerach często jest to klawisz Esc).

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.10.2.1.4 - C.10.2.1.4 Jednoznakowe skróty klawiaturowe

### Warunki wstępne
1. 1. TIK nie jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy dokument spełnia kryterium sukcesu [WCAG 2.1 – 2.1.4 Jednoznakowe skróty klawiaturowe](https://www.w3.org/Translations/WCAG21-pl/#jednoznakowe-skroty-klawiaturowe)

### Typ oceny
Inspekcja

### Checklist
1. **Skróty jednoliterowe:** Jeśli dokument obsługuje skróty klawiszowe oparte na pojedynczych literach, sprawdź, czy można je wyłączyć lub zmienić, aby uniknąć przypadkowego uruchomienia (np. podczas dyktowania tekstu).

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub dokument nieinternetowy nie zawiera treści istotnych dla WCAG 2.1 Kryterium sukcesu 2.1.4 Jednoznakowe skróty klawiaturowe. |


## C.10.2.2.1 - C.10.2.2.1 Dostosowanie czasu

### Warunki wstępne
1. 1. TIK nie jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy dokument spełnia kryterium sukcesu zawarte w Tabeli 10.4.

### Typ oceny
Inspekcja

### Checklist
1. **Limity czasowe:** Jeśli w dokumencie występują limity czasowe (np. sesja logowania), sprawdź, czy użytkownik może je wyłączyć, dostosować lub przedłużyć przed upływem czasu.
1. **Kryterium sukcesu (Tabela 10.4):** Jeśli dokument narzuca limit czasu, musi zostać spełniony jeden z warunków:

- **Wyłączenie:** Użytkownik może wyłączyć limit.
- **Dostosowanie:** Użytkownik może wydłużyć limit co najmniej 10-krotnie.
- **Wydłużenie:** Użytkownik otrzymuje ostrzeżenie i ma co najmniej 20 sekund na wydłużenie czasu prostą czynnością (np. naciśnięciem spacji).

**Wyjątki:** Nie dotyczy to sytuacji, gdy limit czasu jest niezbędny (np. aukcje na żywo) lub trwa dłużej niż 20 godzin.
1. **Uwaga:** Celem jest zapewnienie użytkownikom wystarczającej ilości czasu na wykonanie zadania bez niespodzianek.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.10.2.2.2 - C.10.2.2.2 Pauza, zatrzymanie, ukrycie

### Warunki wstępne
1. 1. TIK nie jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy dokument spełnia kryterium sukcesu zawarte w Tabeli 10.5.

### Typ oceny
Inspekcja

### Checklist
1. **Pauza, zatrzymanie, ukrycie:** Sprawdź, czy ruszające się, migające lub przewijające się automatycznie treści (np. karuzele, tickery) można zatrzymać, zapauzować lub ukryć.
1. **Kryterium sukcesu (Tabela 10.5):** Dla informacji poruszających się, migających, przewijających się lub aktualizujących się automatycznie, spełnione są wszystkie poniższe warunki:

- **Ruch, miganie, przewijanie:** Dla każdej takiej treści, która (1) uruchamia się automatycznie, (2) trwa dłużej niż 5 sekund i (3) jest prezentowana równolegle z innymi treściami, istnieje mechanizm pozwalający użytkownikowi na jej wstrzymanie, zatrzymanie lub ukrycie, chyba że jest ona częścią aktywności, w której jest niezbędna.
- **Automatyczna aktualizacja:** Dla każdej automatycznie aktualizowanej treści, która (1) uruchamia się automatycznie i (2) jest prezentowana równolegle z innymi treściami, istnieje mechanizm pozwalający użytkownikowi na wstrzymanie, zatrzymanie, ukrycie lub kontrolę częstotliwości aktualizacji, chyba że aktualizacja jest niezbędna.
1. **Uwaga 1:** Wymagania dotyczące migotania lub błysków opisano w WCAG 2.1, wytyczna 2.3.
1. **Uwaga 2:** Ponieważ jakakolwiek część dokumentu niespełniająca tego kryterium może zakłócać zdolność użytkownika do korzystania z całego dokumentu, cała zawartość dokumentu (niezależnie od tego, czy jest używana do spełnienia innych kryteriów sukcesu) musi spełniać to kryterium.
1. **Uwaga 3:** Treści aktualizowane okresowo przez oprogramowanie lub przesyłane strumieniowo nie muszą zachowywać informacji wygenerowanych w trakcie pauzy, jeśli nie jest to technicznie możliwe lub mogłoby wprowadzać w błąd.
1. **Uwaga 4:** Animacja będąca częścią fazy ładowania (preload) może być uznana za niezbędną, jeśli w tym czasie nie jest możliwa interakcja, a brak wskaźnika postępu mógłby zmylić użytkownika (sugerując awarię).

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub dokument nieinternetowy nie zawiera treści istotnych dla WCAG. |


## C.10.2.3.1 - C.10.2.3.1 Trzy błyski lub wartości poniżej progu

### Warunki wstępne
1. 1. TIK nie jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy dokument spełnia kryterium sukcesu zawarte w Tabeli 10.6.

### Typ oceny
Inspekcja

### Checklist
1. **Błyski:** Sprawdź, czy dokument nie zawiera elementów błyskających częściej niż 3 razy na sekundę (może to wywołać atak padaczki).
1. **Kryterium sukcesu (Tabela 10.6):** Dokument nie może zawierać elementów, które błyskają częściej niż 3 razy na sekundę.
1. **Uwaga:** Błyskanie może wywołać atak padaczki, dlatego zasada ta jest bezwzględna dla całego dokumentu.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.10.2.4.2 - C.10.2.4.2 Tytuł dokumentu

### Warunki wstępne
1. 1. TIK nie jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy dokument spełnia kryterium sukcesu zawarte w Tabeli 10.7.

### Typ oceny
Inspekcja

### Checklist
1. **Tytuł dokumentu:** Sprawdź we właściwościach pliku, czy pole 'Tytuł' jest wypełnione i opisuje zawartość.
1. **Wyświetlanie tytułu (PDF):** W plikach PDF sprawdź w ustawieniach, czy opcja 'Pokaż' jest ustawiona na 'Tytuł dokumentu', a nie 'Nazwa pliku'.
1. **Kryterium sukcesu (Tabela 10.7):** Dokumenty muszą mieć tytuły, które opisują ich temat lub cel.
1. **Uwaga:** Nazwa pliku może być uznana za wystarczający tytuł, jeśli trafnie opisuje temat lub cel dokumentu.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.10.2.4.3 - C.10.2.4.3 Kolejność fokusu

### Warunki wstępne
1. 1. TIK nie jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy dokument spełnia kryterium sukcesu zawarte w Tabeli 10.8.

### Typ oceny
Inspekcja

### Checklist
1. **Kolejność fokusu:** Sprawdź, czy kolejność nawigacji klawiaturą (Tab) jest logiczna i przewidywalna (zazwyczaj od lewej do prawej, od góry do dołu).
1. **Kryterium sukcesu (Tabela 10.8):** Jeśli po dokumencie można nawigować sekwencyjnie, a kolejność ta ma znaczenie dla zrozumienia treści lub obsługi, to elementy interaktywne muszą otrzymywać fokus w logicznej kolejności, która zachowuje sens i funkcjonalność.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.10.2.4.4 - C.10.2.4.4 Cel łącza (w kontekście)

### Warunki wstępne
1. 1. TIK nie jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy dokument spełnia kryterium sukcesu [WCAG 2.1 – 2.4.4 Cel łącza (w kontekście)](https://www.w3.org/Translations/WCAG21-pl/#cel-acza-w-kontekscie)

### Typ oceny
Inspekcja

### Checklist
1. **Cel linku:** Sprawdź, czy treść każdego linku (lub linku wraz z kontekstem) jasno określa, dokąd on prowadzi. Unikaj linków typu "kliknij tutaj" bez kontekstu.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub dokument nieinternetowy nie zawiera treści istotnych dla WCAG 2.1 Kryterium sukcesu 2.4.4 Cel łącza (w kontekście). |


## C.10.2.4.6 - C.10.2.4.6 Nagłówki i etykiety

### Warunki wstępne
1. 1. TIK nie jest stroną internetową.

### Procedura
1. 11. Sprawdź, czy dokument spełnia kryterium sukcesu [WCAG 2.1 – 2.4.6 Nagłówki i etykiety](https://www.w3.org/Translations/WCAG21-pl/#nag-owki-i-etykiety)

### Typ oceny
Inspekcja

### Checklist
1. **Nagłówki i etykiety:** Sprawdź, czy nagłówki i etykiety jasno opisują temat lub cel sekcji/pola formularza.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub dokument nieinternetowy nie zawiera treści istotnych dla WCAG 2.1 Kryterium sukcesu 2.4.6 Nagłówki i etykiety. |


## C.10.2.4.7 - C.10.2.4.7 Widoczny fokus

### Warunki wstępne
1. 1. TIK nie jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy dokument spełnia kryterium sukcesu [WCAG 2.1 – 2.4.7 Widoczny fokus](https://www.w3.org/Translations/WCAG21-pl/#widoczny-fokus)

### Typ oceny
Inspekcja

### Checklist
1. **Widoczny fokus:** Sprawdź, czy każdy element interaktywny ma wyraźnie widoczne obramowanie (fokus) podczas nawigacji klawiaturą.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub dokument nieinternetowy nie zawiera treści istotnych dla WCAG 2.1 Kryterium sukcesu 2.4.7 Widoczny fokus. |


## C.10.2.5.1 - C.10.2.5.1 Gesty dotykowe

### Warunki wstępne
1. 1. TIK nie jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy dokument spełnia kryterium sukcesu zawarte w Tabeli 10.9.

### Typ oceny
Inspekcja

### Checklist
1. **Gesty punktowe:** Sprawdź, czy funkcje wymagające gestów wielopunktowych (np. pinch-to-zoom) lub ścieżkowych można obsłużyć również za pomocą prostego kliknięcia/dotknięcia.
1. **Kryterium sukcesu (Tabela 10.9):** Wszystkie funkcje, które używają gestów wielopunktowych (np. szczypanie) lub gestów opartych na ścieżce (np. przeciąganie), muszą być możliwe do obsłużenia za pomocą pojedynczego wskaźnika bez gestu opartego na ścieżce, chyba że gest wielopunktowy lub oparty na ścieżce jest niezbędny.
1. **Uwaga:** Wymóg ten dotyczy dokumentów, które interpretują działania wskaźnika (nie dotyczy działań wymaganych do obsługi przeglądarki lub technologii wspomagającej).

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.10.2.5.2 - C.10.2.5.2 Rezygnacja ze wskazania

### Warunki wstępne
1. 1. TIK nie jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy dokument spełnia kryterium sukcesu zawarte w Tabeli 10.10.

### Typ oceny
Inspekcja

### Checklist
1. **Rezygnacja ze wskazania:** Sprawdź, czy funkcjonalność jest aktywowana przy zwolnieniu wskaźnika (up-event), co pozwala na anulowanie (np. przez przesunięcie kursora poza element). Jeśli aktywacja następuje przy naciśnięciu, upewnij się, że istnieje mechanizm cofnięcia lub zachowanie to jest niezbędne.
1. **Kryterium sukcesu (Tabela 10.10):** Dla funkcji obsługiwanych jednym wskaźnikiem (np. myszką, palcem) musi być spełniony jeden z warunków:

- **Brak reakcji na wciśnięcie:** Samo wciśnięcie (down-event) nie uruchamia funkcji.
- **Anulowanie lub cofnięcie:** Funkcja działa dopiero po puszczeniu (up-event) i można ją anulować (np. odsuwając kursor) lub cofnąć po wykonaniu.
- **Odwrócenie:** Puszczenie przycisku cofa to, co zrobiło wciśnięcie.
- **Niezbędność:** Reakcja na wciśnięcie jest konieczna (np. emulacja klawiatury, pianino).
1. **Uwaga:** Dotyczy to dokumentów interpretujących działania wskaźnika.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.10.2.5.3 - C.10.2.5.3 Etykieta w nazwie

### Warunki wstępne
1. 1. TIK nie jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy dokument spełnia kryterium sukcesu [WCAG 2.1 – 2.5.3 Etykieta w nazwie](https://www.w3.org/Translations/WCAG21-pl/#etykieta-w-nazwie)

### Typ oceny
Inspekcja

### Checklist
1. **Etykieta w nazwie:** Sprawdź, czy widoczna etykieta tekstowa elementu (np. przycisku) jest zawarta w jego nazwie dostępnej (Accessible Name) dla czytników ekranu.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub dokument nieinternetowy nie zawiera treści istotnych dla WCAG 2.1 Kryterium sukcesu 2.5.3 Etykieta w nazwie. |


## C.10.2.5.4 - C.10.2.5.4 Aktywowanie ruchem

### Warunki wstępne
1. 1. TIK nie jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy dokument spełnia kryterium sukcesu [WCAG 2.1 – 2.5.4 Aktywowanie ruchem](https://www.w3.org/Translations/WCAG21-pl/#aktywowanie-ruchem)

### Typ oceny
Inspekcja

### Checklist
1. **Aktywowanie ruchem:** Jeśli funkcja jest aktywowana ruchem urządzenia (np. potrząśnięcie), sprawdź, czy można ją wyłączyć lub obsłużyć interfejsem.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub dokument nieinternetowy nie zawiera treści istotnych dla WCAG 2.1 Kryterium sukcesu 2.5.4 Aktywowanie ruchem. |


## C.10.3.1.1 - C.10.3.1.1 Język dokumentu

### Warunki wstępne
1. 1. TIK nie jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy dokument spełnia kryterium sukcesu zawarte w Tabeli 10.11.

### Typ oceny
Inspekcja

### Checklist
1. **Język dokumentu:** Sprawdź we właściwościach pliku, czy główny język dokumentu jest poprawnie ustawiony (np. Polski).
1. **Kryterium sukcesu (Tabela 10.11):** Domyślny język każdego dokumentu musi być możliwy do programowego określenia (czyli ustawiony w metadanych pliku).

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.10.3.1.2 - C.10.3.1.2 Język części

### Warunki wstępne
1. 1. TIK nie jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy dokument spełnia kryterium sukcesu zawarte w Tabeli 10.12.

### Typ oceny
Inspekcja

### Checklist
1. **Język części:** Jeśli w dokumencie występują fragmenty w innym języku, sprawdź w drzewie tagów (PDF), czy odpowiednie elementy (np. Span) mają ustawiony atrybut języka (Lang).
1. **Kryterium sukcesu (Tabela 10.12):** Język każdego fragmentu tekstu w dokumencie musi być możliwy do programowego określenia. Wyjątkiem są nazwy własne, terminy techniczne, słowa o nieokreślonym języku oraz zwroty, które weszły do języka potocznego otaczającego tekstu.
1. **Uwaga 1:** Niektóre formaty dokumentów mogą nie wspierać oznaczania języka dla fragmentów tekstu – w takim przypadku spełnienie tego kryterium może być niemożliwe.
1. **Uwaga 2:** Zazwyczaj zakłada się, że cały tekst jest w głównym języku dokumentu, chyba że zaznaczono inaczej (dziedziczenie).

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.10.3.2.1 - C.10.3.2.1 Po otrzymaniu fokusu

### Warunki wstępne
1. 1. TIK nie jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy dokument spełnia kryterium sukcesu [WCAG 2.1 – 3.2.1 Po otrzymaniu fokusu](https://www.w3.org/Translations/WCAG21-pl/#po-otrzymaniu-fokusu)

### Typ oceny
Inspekcja

### Checklist
1. **Po otrzymaniu fokusu:** Sprawdź, czy otrzymanie fokusu przez element nie powoduje nieoczekiwanej zmiany kontekstu (np. automatycznego wysłania formularza, otwarcia nowego okna).
1. **Uwaga:** Niektóre dokumenty złożone i ich programy obsługujące są zaprojektowane tak, aby zapewniać znacznie różniące się funkcje przeglądania i edycji w zależności od tego, z którą częścią dokumentu złożonego użytkownik wchodzi w interakcję (np. prezentacja zawierająca osadzony arkusz kalkulacyjny, gdzie menu i paski narzędzi zmieniają się w zależności od tego, czy użytkownik pracuje z treścią prezentacji, czy arkusza). Jeśli użytkownik korzysta z mechanizmu innego niż umieszczenie fokusu na tej części dokumentu (np. poprzez wybór z menu lub specjalny gest klawiaturowy), wynikająca z tego zmiana kontekstu nie podlega temu kryterium sukcesu, ponieważ nie została spowodowana zmianą fokusu.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub dokument nieinternetowy nie zawiera treści istotnych dla WCAG 2.1 Kryterium sukcesu 3.2.1 Po otrzymaniu fokusu. |


## C.10.3.2.2 - C.10.3.2.2 Podczas wprowadzania danych

### Warunki wstępne
1. 1. TIK nie jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy dokument spełnia kryterium sukcesu [WCAG 2.1 – 3.2.2 Podczas wprowadzania danych](https://www.w3.org/Translations/WCAG21-pl/#podczas-wprowadzania-danych)

### Typ oceny
Inspekcja

### Checklist
1. **Podczas wprowadzania danych:** Sprawdź, czy zmiana ustawienia elementu interfejsu (np. wybór z listy) nie powoduje nieoczekiwanej zmiany kontekstu, chyba że użytkownik został o tym uprzedzony.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub dokument nieinternetowy nie zawiera treści istotnych dla WCAG 2.1 Kryterium sukcesu 3.2.2 Podczas wprowadzania danych. |


## C.10.3.3.1 - C.10.3.3.1 Identyfikacja błędu

### Warunki wstępne
1. 1. TIK nie jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy dokument spełnia kryterium sukcesu [WCAG 2.1 – 3.3.1 Identyfikacja błędu](https://www.w3.org/Translations/WCAG21-pl/#identyfikacja-b-edu)

### Typ oceny
Inspekcja

### Checklist
1. **Identyfikacja błędu:** Sprawdź, czy błędy w formularzu są automatycznie wykrywane, a użytkownik otrzymuje jasną informację tekstową, które pole zawiera błąd i na czym on polega.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub dokument nieinternetowy nie zawiera treści istotnych dla WCAG 2.1 Kryterium sukcesu 3.3.1 Identyfikacja błędu. |


## C.10.3.3.2 - C.10.3.3.2 Etykiety lub instrukcje

### Warunki wstępne
1. 1. TIK nie jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy dokument spełnia kryterium sukcesu [WCAG 2.1 – 3.3.2 Etykiety lub instrukcje](https://www.w3.org/Translations/WCAG21-pl/#etykiety-lub-instrukcje)

### Typ oceny
Inspekcja

### Checklist
1. **Etykiety lub instrukcje:** Sprawdź, czy pola wymagające danych w określonym formacie posiadają odpowiednie instrukcje lub przykłady.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub dokument nieinternetowy nie zawiera treści istotnych dla WCAG 2.1 Kryterium sukcesu 3.3.2 Etykiety lub instrukcje. |


## C.10.3.3.3 - C.10.3.3.3 Sugestie korekty błędów

### Warunki wstępne
1. 1. TIK nie jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy dokument spełnia kryterium sukcesu [WCAG 2.1 – 3.3.3 Sugestie korekty błędów](https://www.w3.org/Translations/WCAG21-pl/#sugestie-korekty-b-edow)

### Typ oceny
Inspekcja

### Checklist
1. **Sugestie korekty:** Sprawdź, czy w przypadku błędu system podpowiada poprawną wartość (jeśli jest to możliwe).

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub dokument nieinternetowy nie zawiera treści istotnych dla WCAG 2.1 Kryterium sukcesu 3.3.3 Sugestie korekty błędów. |


## C.10.3.3.4 - C.10.3.3.4 Zapobieganie błędom (prawnym, finansowym, w danych)

### Warunki wstępne
1. 1. TIK nie jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy dokument spełnia kryterium sukcesu zawarte w Tabeli 10.13.

### Typ oceny
Inspekcja

### Checklist
1. **Zapobieganie błędom:** Dla dokumentów prawnych/finansowych: sprawdź, czy użytkownik może zweryfikować, potwierdzić lub cofnąć transakcję przed jej finalizacją.
1. **Kryterium sukcesu (Tabela 10.13):** W przypadku dokumentów, które powodują zobowiązania prawne, transakcje finansowe, modyfikację danych lub przesyłanie odpowiedzi testowych, musi być spełniony jeden z warunków:

- **Odwracalność:** Przesłanie można cofnąć.
- **Sprawdzanie:** Dane są sprawdzane pod kątem błędów, a użytkownik może je poprawić.
- **Potwierdzanie:** Dostępny jest mechanizm przeglądania, potwierdzania i poprawiania informacji przed ich ostatecznym wysłaniem.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.10.4.1.1 - C.10.4.1.1 Poprawność kodu

### Warunki wstępne
1. 1. TIK nie jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy dokument spełnia kryterium sukcesu zawarte w Tabeli 10.14.

### Typ oceny
Inspekcja

### Checklist
1. **Poprawność kodu (Parsing):** Sprawdź kod pod kątem błędów składniowych.
1. **Kryterium sukcesu (Tabela 10.14):** W przypadku dokumentów używających języków znaczników, w taki sposób, że znaczniki są oddzielnie udostępniane i dostępne dla technologii wspomagających oraz funkcji dostępności oprogramowania lub dla wybranego przez użytkownika klienta użytkownika (chyba że specyfikacje zezwalają na te cechy):

- elementy mają kompletne znaczniki początkowe i końcowe,
- elementy są zagnieżdżone zgodnie z ich specyfikacjami,
- elementy nie zawierają zduplikowanych atrybutów,
- wszystkie identyfikatory (ID) są unikalne.
1. **Uwaga 1:** Znaczniki początkowe i końcowe, w których brakuje znaku krytycznego w ich tworzeniu, takiego jak zamykający nawias ostry lub niedopasowany cudzysłów wartości atrybutu, nie są kompletne.
1. **Uwaga 2:** Znaczniki nie zawsze są dostępne dla technologii wspomagających lub dla wybranych przez użytkownika klientów użytkownika, takich jak przeglądarki. W takich przypadkach zgodność z tym wymogiem nie miałaby wpływu na dostępność, tak jak ma to miejsce w przypadku treści internetowych, gdzie są one udostępniane.
1. **Uwaga 3:** Przykłady znaczników, które są oddzielnie udostępniane i dostępne dla technologii wspomagających i klientów użytkownika, obejmują między innymi: dokumenty zakodowane w HTML, ODF i OOXML.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.10.4.1.2 - C.10.4.1.2 Nazwa, rola, wartość

### Warunki wstępne
1. 1. TIK nie jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy dokument spełnia kryterium sukcesu zawarte w Tabeli 10.15.

### Typ oceny
Inspekcja

### Checklist
1. **Formularze:** Sprawdź, czy pola formularzy w PDF mają zdefiniowane etykiety (Tooltips) i czy są dostępne dla czytników ekranu.
1. **Poprawność tagowania:** Upewnij się, że wszystkie istotne treści są objęte odpowiednimi tagami (P, H1, Figure itp.), a elementy nieistotne są oznaczone jako artefakty.
1. **Kryterium sukcesu (Tabela 10.15):** Dla wszystkich elementów interfejsu (np. formularze, linki, skrypty) musi być możliwe programowe określenie ich nazwy, roli i wartości. Zmiany tych wartości muszą być zgłaszane technologiom asystującym.
1. **Uwaga 1:** To kryterium jest skierowane głównie do programistów tworzących własne komponenty. Standardowe elementy interfejsu zazwyczaj spełniają te wymagania automatycznie.
1. **Uwaga 2:** W dokumentach wspierających dostępność, standardowe elementy zazwyczaj działają poprawnie, jeśli są używane zgodnie z zasadami projektowania dla danego formatu.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.10.4.1.3 - C.10.4.1.3 Komunikaty o stanie

### Warunki wstępne
1. 1. TIK nie jest stroną internetową.

### Procedura
1. 1. Sprawdź, czy dokument spełnia kryterium sukcesu [WCAG 2.1 – 4.1.3 Komunikaty o stanie](https://www.w3.org/Translations/WCAG21-pl/#komunikaty-o-stanie).

### Typ oceny
Inspekcja

### Checklist
1. **Komunikaty o stanie:** Sprawdź, czy ważne komunikaty pojawiające się na ekranie (np. błędy walidacji formularza, potwierdzenie wysłania) są odczytywane przez czytnik ekranu, nawet jeśli kursor nie jest na nich ustawiony.
1. **Wymaganie:** W dokumentach używających języków znaczników, komunikaty o stanie muszą być możliwe do programowego odczytania, tak aby technologie asystujące mogły je przedstawić użytkownikowi bez konieczności przenoszenia na nie fokusu.
1. **Uwaga:** Dotyczy to np. sytuacji, gdy po wypełnieniu formularza w PDF pojawia się komunikat o błędzie lub sukcesie.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub dokument nieinternetowy nie zawiera treści istotnych dla WCAG 2.1 Kryterium sukcesu 4.1.3 Komunikaty o stanie. |


## C.11.1.1.1.1 - C.11.1.1.1.1 Treść nietekstowa (funkcjonalność otwarta)

### Warunki wstępne
1. 1. TIK jest oprogramowaniem nieinternetowym, które udostępnia interfejs użytkownika.
1. 2. Oprogramowanie zapewnia wsparcie dla technologii wspomagających odczyt ekranu.

### Procedura
1. 1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu [WCAG 2.1 – 1.1.1 Treść nietekstowa](https://www.w3.org/Translations/WCAG21-pl/#tresc-nietekstowa).

### Typ oceny
Inspekcja

### Checklist
1. **Treść nietekstowa:** sprawdź, czy obrazy, ikony i inne elementy nietekstowe mają odpowiednie alternatywy tekstowe lub są oznaczone jako dekoracyjne (przegląd kodu, inspektor dostępności).
1. **Test praktyczny:** Przełącz się na technologię wspomagającą (np. NVDA, JAWS, VoiceOver) i przejrzyj elementy nietekstowe; sprawdź, czy odczytane alternatywy są znaczące i przydatne. Upewnij się, że treści dekoracyjne są oznaczone jako dekoracyjne programowo.
1. **Kryterium sukcesu (WCAG 2.1 – 1.1.1):** Treść nietekstowa ma alternatywny tekst lub inną formę zastępczą, chyba że jest wyłącznie dekoracyjna lub konieczna ze względów funkcjonalnych.
1. **Uwaga:** CAPTCHAs aktualnie rzadko występują poza stronami WWW. Jeśli pojawiają się w oprogramowaniu, sprawdź, czy dostępna jest alternatywa (np. audio CAPTCHA, inne metody weryfikacji).

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2. |


## C.11.1.1.1.2 - C.11.1.1.1.2 Treść nietekstowa (funkcjonalność zamknięta)

### Warunki wstępne
1. 1. TIK jest oprogramowaniem nieinternetowym, które udostępnia interfejs użytkownika.
1. 2. Interfejs użytkownika jest zamknięty na technologie wspomagające odczyt ekranu.
1. 3. Treść nietekstowa jest prezentowana użytkownikom za pomocą sygnału mowy.

### Procedura
1. 1. Sprawdź, czy wyjście mowy jest zapewniane jako alternatywa dla treści nietekstowej.
1. 2. Sprawdź, czy treść nietekstowa jest rzeczywiście istotna i potrzebna.
1. 3. Sprawdź, czy treść nietekstowa nie jest wyłącznie używana do formatowania wizualnego.
1. 4. Sprawdź, czy wyjście mowy jest zgodne z wytycznymi dotyczącymi "tekstu alternatywnego" opisanego w kryterium sukcesu WCAG 2.1 dla wytycznej [WCAG 2.1 – 1.1.1 Treść nietekstowa](https://www.w3.org/Translations/WCAG21-pl/#tresc-nietekstowa).

### Typ oceny
Test

### Checklist
1. **Treść nietekstowa (funkcjonalność zamknięta):** sprawdź, czy każda treść nietekstowa ma odpowiednią alternatywę (wyjście mowy lub inna możliwość dostępu niewizualnego).
1. **Kryterium sukcesu (WCAG 2.1 – 1.1.1):** Treść nietekstowa ma alternatywne przedstawienie, chyba że spełnia definicję treści dekoracyjnej lub jest niezbędna ze względów funkcjonalnych.
1. **Uwaga:** Dotyczy treści w funkcjonalności zamkniętej; pamiętaj, że wybory realizacji (m.in. mowa) muszą być zrozumiałe i wierne treści.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryteria (1, 2, 3 i 4: prawda); lub (1 i 2: fałsz); lub (1 i 3: fałsz) |
| Niezaliczone | Kryteria (1: prawda i 2: fałsz); lub (1: prawda i 3: fałsz); lub (1, 2 i 3: prawda oraz 4: fałsz) |
| Nie dotyczy | Nie spełniono warunku wstępnego 1, 2 lub 3. |


## C.11.1.2.1.1 - C.11.1.2.1.1 Tylko audio lub tylko wideo (nagranie – funkcjonalność otwarta)

### Warunki wstępne
1. 1. TIK jest oprogramowaniem nieinternetowym, który udostępnia interfejs użytkownika.
1. 2. Oprogramowanie zapewnia wsparcie dla technologii wspomagających odczyt ekranu.
1. 3. Aby umożliwić korzystanie z funkcjonalności zamkniętych TIK , nie jest konieczne wcześniejsze przygotowanie nagrań informacji dźwiękowej.

### Procedura
1. 1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu [WCAG 2.1 – 1.2.1 Tylko audio lub tylko wideo (nagranie)](https://www.w3.org/Translations/WCAG21-pl/#tylko-audio-lub-tylko-wideo-nagranie).

### Typ oceny
Inspekcja

### Checklist
1. **Tylko audio/wideo (nagranie):** sprawdź, czy nagrane materiały audio lub wideo mają odpowiednie alternatywy (np. transkrypcje dla audio, napisy/wersje z audiodeskrypcją dla wideo).
1. **Kryterium sukcesu (WCAG 2.1 – 1):** Zgodnie z rodzajem treści, nagrania audio i wideo mają odpowiednio transkrypcje, napisy lub audiodeskrypcję, aby zapewnić równoważną alternatywę dla osób korzystających z technologii wspomagających.
1. **Uwaga:** Sprawdź metadane, opcje wyłączenia dźwięku i dostęp do napisów/audiodeskrypcji.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1, 2 lub 3. |


## C.11.1.2.1.2.1 - C.11.1.2.1.2.1 Nagrane tylko audio (funkcjonalność zamknięta)

### Warunki wstępne
1. 1. TIK jest oprogramowaniem nieinternetowym, które udostępnia interfejs użytkownika.
1. 2. Interfejs użytkownika jest zamknięty na technologie wspomagające odczyt ekranu.
1. 3. Aby umożliwić korzystanie z funkcjonalności zamkniętych TIK , konieczne jest wcześniejsze przygotowanie nagrań informacji dźwiękowej.

### Procedura
1. 1. Sprawdź, czy informacje wizualne odpowiadają nagraniom sygnału dźwiękowego.

### Typ oceny
Inspekcja

### Checklist
1. **Nagrane tylko audio:** sprawdź, czy istnieje tekstowy odpowiednik (transkrypcja) dla nagrań audio oraz czy metody odsłuchu są poprawnie udostępnione.
1. **Uwaga:** Upewnij się, że dokumentacja i metadane wskazują na dostępność transkrypcji i napisów, jeśli mają zastosowanie.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1, 2 lub 3. |


## C.11.1.2.1.2.2 - C.11.1.2.1.2.2 Nagrane tylko wideo (funkcjonalność zamknięta)

### Warunki wstępne
1. 1. TIK jest oprogramowaniem nieinternetowym, które udostępnia interfejs użytkownika.
1. 2. Interfejs użytkownika jest zamknięty na technologie wspomagające odczyt ekranu.
1. 3. Nagrane materiały wideo są niezbędne, aby umożliwić korzystanie z zamkniętych funkcji TIK .
1. 4. Jako dostęp niewizualny do treści nietekstowej w funkcjonalności zamkniętej jest zapewniane wyjście mowy.

### Procedura
1. 1. Sprawdź, czy wyjście mowy zawiera informacje zgodne z napisami do nagranej treści wideo.

### Typ oceny
Inspekcja

### Checklist
1. **Nagrane tylko wideo:** sprawdź, czy istnieją napisy, napisy dla niesłyszących lub alternatywne transkrypcje oraz, jeśli to konieczne, audiodeskrypcje.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1, 2, 3 lub 4. |


## C.11.1.2.2 - C.11.1.2.2 Napisy rozszerzone (nagranie)

### Warunki wstępne
1. 1. TIK jest oprogramowaniem nieinternetowym, które udostępnia interfejs użytkownika.

### Procedura
1. 1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu [WCAG 2.1 – 1.2.2 Napisy rozszerzone (nagranie)](https://www.w3.org/Translations/WCAG21-pl/#napisy-rozszerzone-nagranie).

### Typ oceny
Inspekcja

### Checklist
1. **Napisy rozszerzone (nagranie):** sprawdź, czy napisy są zgodne z nagranym dźwiękiem, synchronizowane i poprawnie pokazywane w czasie odtwarzania.
1. **Kryterium sukcesu (WCAG 2.1 – 1.2.2):** Napisy powinny być poprawne i zsynchronizowane; dla nagrań live stosować napisy na żywo, dla nagrań dołączone napisy/closed captions.
1. **Uwaga:** Sprawdź format i dostępność napisów w odtwarzaczu i w różnych trybach odtwarzania.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub oprogramowanie nieinternetowe nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 1.2.2 Napisy rozszerzone (nagranie). |


## C.11.1.2.3.1 - C.11.1.2.3.1 Audiodeskrypcja lub alternatywa tekstowa dla mediów (nagranie – funkcjonalność otwarta)

### Warunki wstępne
1. 1. TIK jest oprogramowaniem nieinternetowym, które udostępnia interfejs użytkownika.
1. 2. Oprogramowanie zapewnia wsparcie dla technologii wspomagających odczyt ekranu.

### Procedura
1. 1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu [WCAG 2.1 – 1.2.3 Audiodeskrypcja lub alternatywa tekstowa dla mediów (nagranie)](https://www.w3.org/Translations/WCAG21-pl/#audiodeskrypcja-lub-alternatywa-tekstowa-dla-mediow-nagranie).

### Typ oceny
Inspekcja

### Checklist
1. **Audiodeskrypcja lub alternatywa tekstowa dla mediów:** sprawdź, czy materiały wideo lub multimedia nagrane, które zawierają istotne treści wizualne, mają oferowaną ścieżkę audiodeskrypcji (AD) lub dokument/tekstowy opis wizualny zapewniający równoważną informację.
1. **Test praktyczny:** Odtwórz przykładowe wideo z istotnymi informacjami wizualnymi i sprawdź w ustawieniach odtwarzacza, czy dostępna jest ścieżka AD; jeśli AD nie jest dostępne, sprawdź, czy dostępna jest alternatywna transkrypcja zawierająca opisy wizualne. Potwierdź, że AD/transkrypcja opisuje istotne obrazy, gesty i działania niewerbalne.
1. **Kryterium sukcesu (WCAG 2.1 – 1.2.3):** Dla nagranych materiałów wizualnych udostępniono ścieżkę audiodeskrypcji lub alternatywny zapis tekstowy, który opisuje kluczowe informacje wizualne; opis jest synchronizowany adekwatnie do treści wideo.
1. **Uwaga:** Jeśli materiał nie zawiera istotnych informacji wizualnych, audiodeskrypcja może nie być wymagana; sprawdź dokumentację i przypadki brzegowe.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2 lub oprogramowanie nieinternetowe nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 1.2.3 Audiodeskrypcja lub alternatywa tekstowa dla mediów (nagranie). |


## C.11.1.2.3.2 - C.11.1.2.3.2 Audiodeskrypcja lub alternatywa tekstowa dla mediów (nagranie – funkcjonalność zamknięta)

### Warunki wstępne
1. 1. TIK jest oprogramowaniem nieinternetowym, które udostępnia interfejs użytkownika.
1. 2. Interfejs użytkownika jest zamknięty na technologie wspomagające odczyt ekranu.
1. 3. Jako dostęp niewizualny do treści nietekstowej w funkcjonalności zamkniętej jest zapewniane wyjście mowy.

### Procedura
1. 1. Sprawdź, czy wyjście mowy zawiera informacje zgodne z napisami do nagranej treści wideo.

### Typ oceny
Inspekcja

### Checklist
1. **Audiodeskrypcja (funkcjonalność zamknięta):** jeśli funkcjonalność jest zamknięta i wyjście mowy jest jedyną metodą niewizualnego dostępu, sprawdź, czy wyjście mowy zawiera opisy wizualne i informacje równoważne audiodeskrypcji lub transkrypcji.
1. **Test praktyczny:** Odtwórz przykładowe wideo, upewnij się, że wyjście mowy odtwarza informacje opisowe (np. z syntezatora lub wbudowanego odczytu) i porównaj z tekstową transkrypcją lub napisami rozszerzonymi; potwierdź, że brak wizualnego opisu jest kompensowany przez wyjście mowy.
1. **Uwaga:** Przetestuj, czy wyjście mowy można wybrać/aktywować i czy jest zsynchronizowane z treścią; w razie potrzeby sprawdź dostępność w ustawieniach i dokumentacji platformy.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1, 2 lub 3. |


## C.11.1.2.4 - C.11.1.2.4 Napisy rozszerzone (na żywo)

### Warunki wstępne
1. 1. TIK jest oprogramowaniem nieinternetowym, które udostępnia interfejs użytkownika.

### Procedura
1. 1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu [WCAG 2.1 – 1.2.4 Napisy rozszerzone (na żywo)](https://www.w3.org/Translations/WCAG21-pl/#napisy-rozszerzone-na-zywo).

### Typ oceny
Inspekcja

### Checklist
1. **Napisy na żywo:** sprawdź dostępność napisów na żywo dla treści transmitowanej na żywo, ich synchronizację oraz czy można je włączyć lub wyłączyć; ocenić czy są czytelne i właściwie zsynchronizowane z dźwiękiem.
1. **Kryterium sukcesu (WCAG 2.1 – 1.2.4):** Treści transmitowane na żywo mają dostępne napisy na żywo, które przekazują dialog i istotne informacje dźwiękowe.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub oprogramowanie nieinternetowe nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 1.2.4 Napisy rozszerzone (na żywo). |


## C.11.1.2.5 - C.11.1.2.5 Audiodeskrypcja (nagranie)

### Warunki wstępne
1. 1. TIK jest oprogramowaniem nieinternetowym, które udostępnia interfejs użytkownika.

### Procedura
1. 1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu [WCAG 2.1 – 1.2.5 Audiodeskrypcja (nagranie)](https://www.w3.org/Translations/WCAG21-pl/#audiodeskrypcja-nagranie).

### Typ oceny
Inspekcja

### Checklist
1. **Audiodeskrypcja (nagranie):** sprawdź, czy w materiałach wideo dostępna jest audiodeskrypcja lub alternatywnie tekstowa transkrypcja opisu wizualnego; potwierdź, że audiodeskrypcja opisuje istotne treści wizualne.
1. **Kryterium sukcesu (WCAG 2.1 – 1.2.5):** Nagrania wideo mają audiodeskrypcję lub odpowiednią alternatywę pomagającą użytkownikom niewidzącym zrozumieć treści wizualne.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub oprogramowanie nieinternetowe nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 1.2.5 Audiodeskrypcja (nagranie). |


## C.11.1.3.1.1 - C.11.1.3.1.1 Informacje i relacje (funkcjonalność otwarta)

### Warunki wstępne
1. 1. TIK jest oprogramowaniem nieinternetowym, które udostępnia interfejs użytkownika.
1. 2. Oprogramowanie zapewnia wsparcie dla technologii wspomagających odczyt ekranu.

### Procedura
1. 1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu [WCAG 2.1 – 1.3.1 Informacje i relacje](https://www.w3.org/Translations/WCAG21-pl/#informacje-i-relacje).

### Typ oceny
Inspekcja

### Checklist
1. **Informacje i relacje:** sprawdź, czy znaczenie i relacje między elementami (np. etykiety, nagłówki, tabele, pola formularzy) są jawne i udostępnione programowo; użyj technologii wspomagających, aby upewnić się, że relacje są przekazywane poprawnie.
1. **Kryterium sukcesu (WCAG 2.1 – 1.3.1):** Informacje i relacje są dostępne programowo, tak aby technologie wspomagające mogły je poprawnie odczytać i przejawić.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2. |


## C.11.1.3.2.1 - C.11.1.3.2.1 Zrozumiała kolejność (funkcjonalność otwarta)

### Warunki wstępne
1. 1. TIK jest oprogramowaniem nieinternetowym, które udostępnia interfejs użytkownika.
1. 2. Oprogramowanie zapewnia wsparcie dla technologii wspomagających odczyt ekranu.

### Procedura
1. 1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu [WCAG 2.1 – 1.3.2 Zrozumiała kolejność](https://www.w3.org/Translations/WCAG21-pl/#zrozumiala-kolejnosc).

### Typ oceny
Inspekcja

### Checklist
1. **Zrozumiała kolejność:** Przejrzyj interfejs i porównaj wizualną kolejność elementów z kolejnością odczytywaną programowo przez technologię wspomagającą; przeprowadź testy z użyciem screen readera (odczyt struktury) i inspektora dostępności.
1. **Test praktyczny:** Użyj narzędzia inspektora (Inspect/UIA, AX Inspector, AT-SPI) aby potwierdzić, że programowa kolejność odzwierciedla układ wizualny, oraz sprawdź, czy fokus porusza się w logicznej kolejności; sprawdź skomplikowane układy (np. kolumny, modalne elm.) oraz czy sekwencja nie zmienia znaczenia.
1. **Kryterium sukcesu (WCAG 2.1 – 1.3.2):** Informacje przedstawione w sekwencji, odtwarzane programowo lub podczas nawigacji, zachowują logiczne znaczenie i działanie.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2. |


## C.11.1.3.3 - C.11.1.3.3 Właściwości zmysłowe

### Warunki wstępne
1. 1. TIK jest oprogramowaniem nieinternetowym, które udostępnia interfejs użytkownika.

### Procedura
1. 1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu [WCAG 2.1 – 1.3.3 Właściwości zmysłowe](https://www.w3.org/Translations/WCAG21-pl/#w-asciwosci-zmys-owe).

### Typ oceny
Inspekcja

### Checklist
1. **Właściwości zmysłowe:** sprawdź, czy instrukcje i informacje nie polegają wyłącznie na cechach zmysłowych (np. kolor, kształt, położenie, dźwięk).
1. **Test praktyczny:** Wyłącz elementy sensoryczne (np. wyłącz dźwięk, użyj symulatora daltonizmu i przeglądu bez kolorów, zastosuj odczyt przez screen reader i sprawdź, czy treści są jednoznaczne), upewnij się, że wszystkie informacje przekazywane w sposób sensoryczny mają alternatywy tekstowe lub programowe.
1. **Kryterium sukcesu (WCAG 2.1 – 1.3.3):** Informacje nie są przekazywane wyłącznie za pomocą charakterystyk zmysłowych lub, jeśli tak się dzieje, dostępne są alternatywne możliwości odczytu.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub oprogramowanie nieinternetowe nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 1.3.3 Właściwości zmysłowe. |


## C.11.1.3.4 - C.11.1.3.4 Orientacja

### Warunki wstępne
1. 1. TIK jest oprogramowaniem nieinternetowym, które udostępnia interfejs użytkownika.

### Procedura
1. 1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu [WCAG 2.1 – 1.3.4 Orientacja](https://www.w3.org/Translations/WCAG21-pl/#orientacja).

### Typ oceny
Inspekcja

### Checklist
1. **Orientacja:** sprawdź, czy zawartość i funkcjonalność są dostępne i użyteczne zarówno w orientacji pionowej jak i poziomej (gdy to ma zastosowanie), oraz czy nie ma utraty krytycznych informacji przy zmianie orientacji czy proporcji okna.
1. **Test praktyczny:** Obróć urządzenie lub zmień rozmiar okna, testuj w różnych rozdzielczościach i sprawdź zachowanie wszystkich kontrolek, czy są widoczne i funkcjonalne; dla aplikacji skomplikowanych sprawdź przystosowanie widżetów i toolbarów, czy nic nie zakrywa istotnych elementów.
1. **Kryterium sukcesu (WCAG 2.1 – 1.3.4):** Zawartość i funkcjonalność zachowują sens i dostępność przy zmianie orientacji lub proporcji ekranu, chyba że dwu-wymiarowy układ jest niezbędny.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub oprogramowanie nieinternetowe nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 1.3.4 Orientacja. |


## C.11.1.3.5.1 - C.11.1.3.5.1 Określenie pożądanej wartości (funkcjonalność otwarta)

### Warunki wstępne
1. 1. TIK jest oprogramowaniem nieinternetowym, które udostępnia interfejs użytkownika.
1. 2. Oprogramowanie zapewnia wsparcie dla technologii wspomagających odczyt ekranu.

### Procedura
1. 1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu [WCAG 2.1 – 1.3.5 Określenie pożądanej wartości](https://www.w3.org/Translations/WCAG21-pl/#okreslenie-pozadanej-wartosci).

### Typ oceny
Inspekcja

### Checklist
1. **Określenie pożądanej wartości:** sprawdź, czy pola formularzy (np. pola adresu, numeru telefonu, e-mail) mają dodatkowe atrybuty określające przeznaczenie pola (np. HTML autocomplete, platformowe inputPurpose), oraz czy te informacje są udostępniane programowo do technologii wspomagających.
1. **Test praktyczny:** Użyj inspektora dostępności, aby potwierdzić, że wartości przeznaczenia pól są dostępne oraz sprawdź, czy funkcje autouzupełniania/przechowywania danych są powiązane z odpowiednimi atrybutami semantycznymi; przetestuj z ekranowym odczytem czy dane są odczytywane i interpretowane prawidłowo.
1. **Kryterium sukcesu (WCAG 2.1 – 1.3.5):** Najważniejsze cele wejściowe są określone i są dostępne programowo, aby ułatwić wypełnianie formularzy i precyzyjne dopasowanie danych przez technologie wspomagające.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2, lub oprogramowanie nieinternetowe nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 1.3.5 Określenie pożądanej wartości. |


## C.11.1.3.5.2 - C.11.1.3.5.2 Określenie pożądanej wartości (funkcjonalność zamknięta)

### Warunki wstępne
1. 1. TIK jest oprogramowaniem nieinternetowym, które udostępnia interfejs użytkownika.
1. 2. Oprogramowanie nie zapewnia wsparcia dla technologii wspomagających odczyt ekranu.
1. 3. Sygnał dźwiękowy zapewnia niewizualny dostęp do funkcji zamkniętych.

### Procedura
1. 1. Sprawdź, czy sygnał dźwiękowy jest dostarczany za pomocą mechanizmu zawartego w TIK lub dostarczanego wraz z nią.
1. 2. Sprawdź, czy sygnał dźwiękowy jest dostarczany za pomocą osobistego zestawu słuchawkowego, który można podłączyć poprzez gniazdo audio 3,5 mm lub standardowe połączenie branżowe, bez konieczności korzystania ze wzroku.
1. 3. Sprawdź, czy sygnał dźwiękowy obejmuje elementy z sekcji Przeznaczenie pól danych w komponentach interfejsu użytkowników.

### Typ oceny
Inspekcja

### Checklist
1. **Sygnał dźwiękowy dla funkcjonalności zamkniętej:** sprawdź, czy dźwięk jest dostarczany przez mechanizm wbudowany w TIK lub dostarczany wraz z nią, oraz czy obejmuje informacje o przeznaczeniu pól danych w komponentach interfejsu.
1. **Test praktyczny:** Podłącz osobisty zestaw słuchawkowy przez gniazdo audio 3,5 mm lub standardowe połączenie branżowe, bez korzystania ze wzroku, i potwierdź, że sygnał dźwiękowy zawiera elementy określające przeznaczenie pól danych (np. adres, telefon, e-mail).
1. **Uwaga:** Upewnij się, że dźwięk jest dostępny bez konieczności wizualnego interfejsu, zapewniając alternatywny dostęp dla użytkowników niewidomych.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium (1 lub 2): prawda i kryterium 3: prawda |
| Niezaliczone | Kryteria (1 i 2): fałsz lub kryterium 3: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1, 2 lub 3. |


## C.11.1.4.1 - C.11.1.4.1 Użycie koloru

### Warunki wstępne
1. 1. TIK jest oprogramowaniem nieinternetowym, które udostępnia interfejs użytkownika.

### Procedura
1. 1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu [WCAG 2.1 – 1.4.1 Użycie koloru](https://www.w3.org/Translations/WCAG21-pl/#uzycie-koloru).

### Typ oceny
Inspekcja

### Checklist
1. **Użycie koloru:** sprawdź, czy kolor nie jest jedynym sposobem przekazywania informacji (np. błędy formularza oznaczone tylko kolorem).
1. **Test praktyczny:** Wyłącz kolory (tryb kontrastu lub symulacja odcieni szarości) i potwierdź, że wszystkie informacje i instrukcje pozostają dostępne (za pomocą tekstu, etykiet, ikon lub kształtów).
1. **Kryterium sukcesu (WCAG 2.1 – 1.4.1):** Informacje przekazywane za pomocą koloru mają również dodatkowe, niekolorystyczne metody identyfikacji (tekst, ikony, wzór).
1. **Uwaga:** Dla dekoracji i elementów logo stosuje się wyjątki; zwróć szczególną uwagę na elementy formularzy i powiadomienia błędów.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub oprogramowanie nieinternetowe nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 1.4.1 Użycie koloru. |


## C.11.1.4.2 - C.11.1.4.2 Kontrola odtwarzania dźwięku

### Warunki wstępne
1. 1. TIK jest oprogramowaniem nieinternetowym, które udostępnia interfejs użytkownika.

### Procedura
1. 1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu zawarte w Tabeli 11.1

### Typ oceny
Inspekcja

### Checklist
1. **Kontrola odtwarzania dźwięku:** sprawdź, czy odtwarzane dźwięki z materiałów multimedialnych lub z tła mają możliwość wstrzymania, pauzy, regulacji głośności i są dostępne poprzez interfejs użytkownika; upewnij się, że automatyczne odtwarzanie dźwięku można wyłączyć lub jest wyłączone.
1. **Test praktyczny:** Odtwórz przykładowe treści z dźwiękiem, spróbuj zmienić głośność, wyciszyć ścieżkę audio, zatrzymać i wznowić odtwarzanie; sprawdź, czy sterowanie jest programowo dostępne (np. kontrolki w aplikacji i przez technologię wspomagającą).
1. **Kryterium sukcesu (Tabela 11.1):** Użytkownik ma dostęp do kontroli dźwięku i może wyłączyć lub zatrzymać odtwarzanie dźwięku, w przypadku gdy jest on rozpraszający lub zbędny dla zrozumienia treści.
1. **Uwaga:** W niektórych aplikacjach dźwięk systemowy może wymagać uprawnień lub ustawień systemowych; sprawdź także, czy istnieje możliwość wyłączenia globalnej ścieżki audio.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.11.1.4.3 - C.11.1.4.3 Kontrast (minimum)

### Warunki wstępne
1. 1. TIK jest oprogramowaniem nieinternetowym, które udostępnia interfejs użytkownika

### Procedura
1. 1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu [WCAG 2.1 – 1.4.3 Kontrast (minimum)](https://www.w3.org/Translations/WCAG21-pl/#kontrast-minimum).

### Typ oceny
Inspekcja

### Checklist
1. **Kontrast (minimum):** Użyj specjalistycznych narzędzi do pomiaru współczynnika kontrastu między tekstem a tłem. Wymagany współczynnik to 4.5:1 dla zwykłego tekstu i 3:1 dla dużego tekstu. Narzędzia: Dla Windows: Accessibility Insights lub Inspect.exe (część Windows SDK). Dla macOS: Accessibility Inspector w Xcode. Dla Android/iOS: Narzędzia deweloperskie w Android Studio/Xcode z wtyczkami do kontrastu. Sprawdź kontrast dla wszystkich elementów interfejsu, w tym ikon i przycisków, oraz w różnych stanach (normalny, disabled, hover, focus).
1. **Test praktyczny:** Wybierz próbkę tekstu i tła w aplikacji, uruchom wybrane narzędzie, zmierz współczynnik kontrastu i porównaj z wymaganiami. Dla elementów nietekstowych (np. ikony) sprawdź, czy mają znaczenie dla użytkowników i czy spełniają analogiczne wymagania kontrastu lub mają alternatywy.
1. **Kryterium sukcesu (WCAG 2.1 – 1.4.3):** Kontrast tekstu i tła spełnia minimalne wymagania; dla elementów niestandardowych stosuj analogiczne zasady lub zapewnij alternatywy.
1. **Uwaga:** Sprawdź różne stany elementów (disabled, hover, focus), bo kontrast podczas stanu może różnić się od stanu normalnego.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub oprogramowanie nieinternetowe nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 1.4.3 Kontrast (minimum). |


## C.11.1.4.4.1 - C.11.1.4.4.1 Zmiana rozmiaru tekstu (funkcjonalność otwarta)

### Warunki wstępne
1. 1. TIK jest oprogramowaniem nieinternetowym, które udostępnia interfejs użytkownika.
1. 2. Oprogramowanie zapewnia obsługę funkcji powiększania dostępnych na platformie lub technologii wspomagającej.

### Procedura
1. 1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu [WCAG 2.1 – 1.4.4 Zmiana rozmiaru tekstu](https://www.w3.org/Translations/WCAG21-pl/#zmiana-rozmiaru-tekstu).

### Typ oceny
Inspekcja

### Checklist
1. **Zmiana rozmiaru tekstu:** sprawdź, czy można powiększyć tekst do 200% bez utraty treści lub funkcjonalności; użyj opcji powiększania platformy, powiększenia w aplikacji i testów z powiększeniem przez technologie wspomagające.
1. **Test praktyczny:** Powiększ interfejs do 200% i powyżej, sprawdź, czy tekst jest czytelny, przyciski oraz kontrolki pozostają dostępne i funkcjonalne, oraz czy nie występuje konieczność przewijania w dwóch wymiarach w standardowych scenariuszach.
1. **Kryterium sukcesu (WCAG 2.1 – 1.4.4):** Interfejs umożliwia powiększenie tekstu do co najmniej 200% bez utraty funkcjonalności i informacji.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub oprogramowanie nieinternetowe nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 1.4.4 Zmiana rozmiaru tekstu. |


## C.11.1.4.4.2 - C.11.1.4.4.2 Zmiana rozmiaru tekstu (funkcjonalność zamknięta)

### Warunki wstępne
1. 1. TIK jest oprogramowaniem nieinternetowym, które udostępnia interfejs użytkownika.
1. 2. Interfejs użytkownika jest zamknięty dla funkcji powiększania dostępnych na platformie lub technologii wspomagającej.
1. 3. Odległość widzenia jest określana przez dostawcę.

### Procedura
1. 1. Zmierzyć wysokość wielkiej litery H.
1. 2. Sprawdź, czy odpowiada ona kątowi co najmniej 0,7 stopnia przy określonej odległości widzenia.

### Typ oceny
Inspekcja i pomiar

### Checklist
1. **Zmiana rozmiaru tekstu (funkcjonalność zamknięta):** Zmierzyć wysokość wielkiej litery H i sprawdzić, czy odpowiada ona kątowi co najmniej 0,7 stopnia przy określonej odległości widzenia.
1. **Uwaga:** Ponieważ obsługa renderowania tekstu w środowisku zamkniętym może być bardziej ograniczona niż obsługa dostępna w agentach użytkownika dla sieci Web, spełnienie niniejszej klauzuli w środowisku zamkniętym może nałożyć znacznie większy ciężar na autora treści.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 2: prawda |
| Niezaliczone | Kryterium 2: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1, 2 lub 3. |


## C.11.1.4.5.1 - C.11.1.4.5.1 Obrazy tekstu (funkcjonalność otwarta)

### Warunki wstępne
1. 1. TIK jest oprogramowaniem nieinternetowym, które udostępnia interfejs użytkownika.
1. 2. Oprogramowanie zapewnia wsparcie dla technologii wspomagających odczyt ekranu.

### Procedura
1. 1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu [WCAG 2.1 – 1.4.5 Obrazy tekstu](https://www.w3.org/Translations/WCAG21-pl/#obrazy-tekstu).

### Typ oceny
Inspekcja

### Checklist
1. **Obrazy tekstu (funkcjonalność otwarta):** sprawdź, czy elementy zawierające tekst używają rzeczywistego tekstu, a nie obrazu tekstu; jeśli użyto obrazu tekstu, sprawdź, czy istnieje równoważna alternatywa tekstowa lub, w przypadku potrzeby, możliwość jego zamiany na tekst.
1. **Test praktyczny:** Użyj inspektora interfejsu i narzędzi programowych, aby zidentyfikować miejsca, gdzie tekst jest renderowany jako obraz (np. raster), a następnie potwierdź, że zapewniono alternatywę (tekst w treści lub opis). Sprawdź kontrolki, nagłówki, i fragmenty tekstu krytyczne dla zrozumienia, czy są dostępne w formie tekstowej.
1. **Kryterium sukcesu (WCAG 2.1 – 1.4.5):** Tekst funkcjonalny nie jest przedstawiony jako obraz tekstu, chyba że jest to konieczne (logotypy, ozdobne czcionki); jeżeli użyto obrazu tekstu, zapewniono jego alternatywny odpowiednik.
1. **Uwaga:** Logo i dekoracyjne grafiki z tekstem są wyjątkiem; w przypadku zamkniętych środowisk sprawdź, czy wyjście mowy dostarcza równoważny opis tekstu, jeśli obraz tekstu zawiera informacje istotne dla użytkownika.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2, lub oprogramowanie nieinternetowe nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 1.4.5 Obrazy tekstu. |


## C.11.1.4.5.2 - C.11.1.4.5.2 Obrazy tekstu (funkcjonalność zamknięta)

### Warunki wstępne
1. 1. TIK jest oprogramowaniem nieinternetowym, które udostępnia interfejs użytkownika.
1. 2. Interfejs użytkownika jest zamknięty na technologie wspomagające odczyt ekranu.
1. 3. Treść nietekstowa jest prezentowana użytkownikom za pomocą sygnału mowy.

### Procedura
1. 1. Sprawdź, czy wyjście mowy jest zapewniane jako alternatywa dla treści nietekstowej.
1. 2. Sprawdź, czy treść nietekstowa jest rzeczywiście istotna i potrzebna.
1. 3. Sprawdź, czy treść nietekstowa nie jest wyłącznie używana do formatowania wizualnego.
1. 4. Sprawdź, czy wyjście mowy jest zgodne z wytycznymi dotyczącymi "tekstu alternatywnego" opisanego w kryterium sukcesu WCAG 2.1 dla wytycznej [WCAG 2.1 – 1.1.1 Treść nietekstowa](https://www.w3.org/Translations/WCAG21-pl/#tres-nietekstowa).

### Typ oceny
Test

### Checklist
1. **Obrazy tekstu (funkcjonalność zamknięta):** sprawdź, czy w miejscach, gdzie zastosowano obrazy z tekstem, istnieje równoważna alternatywa dostarczana użytkownikom niewizualnym (np. wyjście mowy lub tekstowa transkrypcja).
1. **Test praktyczny:** Identyfikuj obrazy zawierające tekst oraz potwierdź przy użyciu dostępnych funkcji platformy lub narzędzi inspektora, że brakujące treści są dostępne poprzez wyjście mowy lub tekst alternatywny; dla zamkniętej funkcjonalności sprawdź, czy wyjście mowy przekazuje tekst z obrazu.
1. **Kryterium sukcesu (WCAG 2.1 – 1.4.5):** Obrazy tekstu nie zastępują tekstu funkcjonalnego bez zapewnienia jego alternatywy; w aplikacjach zamkniętych wyjście mowy jest równoważne tekstowi w obrazie.
1. **Uwaga:** Wyjątki dotyczą logotypów i elementów dekoracyjnych; w sytuacjach, gdzie obraz tekstu jest jedyną opcją, upewnij się, że istnieje alternatywa dostępna programowo.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryteria (1, 2, 3 i 4: prawda); lub (1 i 2: fałsz); lub (1 i 3: fałsz) |
| Niezaliczone | Kryteria (1: prawda i 2: fałsz); lub (1: prawda i 3: fałsz); lub (1, 2 i 3: prawda oraz 4: fałsz) |
| Nie dotyczy | Nie spełniono warunku wstępnego 1, 2 lub 3. |


## C.11.1.4.10 - C.11.1.4.10 Dopasowanie do ekranu

### Warunki wstępne
1. 1. TIK jest oprogramowaniem nieinternetowym, które udostępnia interfejs użytkownika.

### Procedura
1. 1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu zawarte w Tabeli 11.2.

### Typ oceny
Inspekcja

### Checklist
1. **Dopasowanie do ekranu (reflow):** Sprawdź, czy treść może być prezentowana bez utraty informacji lub funkcjonalności oraz bez konieczności przewijania w dwóch wymiarach dla: treści przewijanej pionowo przy szerokości równoważnej 320 pikselom CSS; treści przewijanej poziomo przy wysokości równoważnej 256 pikselom CSS; z wyjątkiem części treści, które wymagają układu dwuwymiarowego ze względu na użycie lub znaczenie.
1. **Test praktyczny:** Przetestuj interfejs w różnych rozmiarach okna i przy różnych poziomach powiększenia (np. 200% i 400%); zweryfikuj, czy elementy i funkcje interfejsu pozostają dostępne oraz czy nie występuje poziome i pionowe przewijanie wymuszające utratę funkcjonalności.
1. **Kryterium sukcesu (Tabela 11.2):** Treść i funkcjonalność są dostępne i nie wymagają dwuwymiarowego przewijania podczas standardowych scenariuszy dostępu.
1. **Uwaga 1:** 320 pikseli CSS jest równoważne początkowej szerokości viewportu 1280 pikseli CSS przy powiększeniu 400%. Dla oprogramowania nieinternetowego zaprojektowanego do przewijania poziomego (np. z tekstem pionowym), 256 pikseli CSS jest równoważne początkowej wysokości viewportu 1024 px przy powiększeniu 400%.
1. **Uwaga 2:** Przykłady treści wymagających układu dwuwymiarowego to obrazy, mapy, diagramy, wideo, gry, prezentacje, tabele danych oraz interfejsy, gdzie konieczne jest utrzymanie pasków narzędzi w widoku podczas manipulacji treścią.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.11.1.4.11 - C.11.1.4.11 Kontrast elementów nietekstowych

### Warunki wstępne
1. 1. TIK jest oprogramowaniem nieinternetowym, które udostępnia interfejs użytkownika.

### Procedura
1. 1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu [WCAG 2.1 – 1.4.11 Kontrast elementów nietekstowych](https://www.w3.org/Translations/WCAG21-pl/#kontrast-elementow-nietekstowych).

### Typ oceny
Inspekcja

### Checklist
1. **Kontrast elementów nietekstowych:** sprawdź kontrast pomiędzy elementami interfejsu użytkownika (ramki, ikony, obramowania, separatory) i tłem oraz ich kontrast między sobą; użyj narzędzi do mierzenia kontrastu (np. Color Contrast Analyser) i sprawdź stany focus/hover/disabled.
1. **Test praktyczny:** Zmierz kontrast kolorów elementów funkcjonalnych, takich jak ikony i obramowania, oraz kontrast pomiędzy elementami istotnymi a ich tłem; sprawdź w różnych motywach (jasny/ciemny) i stanach elementów.
1. **Kryterium sukcesu (WCAG 2.1 – 1.4.11):** Elementy nietekstowe i ich części mają wystarczający kontrast (min. 3:1) w stosunku do tła lub w odniesieniu do funkcji elementu interfejsu użytkownika.
1. **Uwaga:** Dla elementów niewizualnych lub dekoracyjnych, jeśli nie mają znaczenia funkcjonalnego, stosowanie tej zasady nie jest wymagane.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub oprogramowanie nieinternetowe nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 1.4.11 Kontrast elementów nietekstowych. |


## C.11.1.4.12 - C.11.1.4.12 Odstępy w tekście

### Warunki wstępne
1. 1. TIK jest oprogramowaniem nieinternetowym , które udostępnia interfejs użytkownika.

### Procedura
1. 1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu [WCAG 2.1 – 1.4.12 Odstępy w tekście](https://www.w3.org/Translations/WCAG21-pl/#odstepy-w-tekscie).

### Typ oceny
Inspekcja

### Checklist
1. **Odstępy w tekście:** sprawdź odstępy pomiędzy znakami, wyrazami i akapitami oraz wysokość linii; upewnij się, że użytkownik może czytać treści nawet po zwiększeniu odstępów ustawionych przez użytkownika lub system.
1. **Test praktyczny:** Zwiększ odstępy/przestrzenie/wysokości między liniami (line-height), pojedynczymi znakami i wyrazami (np. 1.5–2x) oraz między akapitami i potwierdź, że tekst pozostaje czytelny, nie nakłada się na siebie i zachowuje strukturę logiczną.
1. **Kryterium sukcesu (WCAG 2.1 – 1.4.12):** Tekst poprawnie reaguje na zmiany odstępów i nie traci znaczenia lub struktury przy zwiększonych odstępach zgodnych z wymaganiami (line-height, letter-spacing, word-spacing).
1. **Uwaga:** Sprawdź różne elementy dokumentu (nagłówki, listy, tabele) oraz wpływ na skomplikowane układy (np. przyciski w liniach).

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub oprogramowanie nieinternetowe nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 1.4.12 Odstępy w tekście. |


## C.11.1.4.13 - C.11.1.4.13 Treść spod kursora lub fokusu

### Warunki wstępne
1. 1. TIK jest oprogramowaniem nieinternetowym, które udostępnia interfejs użytkownika.

### Procedura
1. 1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu [WCAG 2.1 – 1.4.13 Treść spod kursora lub fokusu](https://www.w3.org/Translations/WCAG21-pl/#tresc-spod-kursora-lub-fokusu).

### Typ oceny
Inspekcja

### Checklist
1. **Treść spod kursora lub fokusu:** sprawdź, czy zawartość pojawiająca się w wyniku najechania kursorem lub uzyskania fokusu jest dostępna także dla użytkowników klawiaturowych oraz czy nie blokuje możliwości interakcji z innymi elementami interfejsu.
1. **Test praktyczny:** Użyj klawiatury i kursora, aby wyzwolić tekst odsłaniany na hover/focus; sprawdź, czy jest możliwy do odczytania przez technologię wspomagającą i czy można zamknąć/opuścić treść bez utraty kontekstu.
1. **Kryterium sukcesu (WCAG 2.1 – 1.4.13):** Informacje wyłącznie pojawiające się na hover/focus są dostępne i nie blokują dostępu do innych funkcji; są też dostępne z użyciem klawiatury i narzędzi wspomagających.
1. **Uwaga:** Zweryfikuj także dostępność tych treści w usługach asystujących (np. screen reader), sprawdź synchronizację i wywołania dynamiczne.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub oprogramowanie nieinternetowe nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 1.4.13 Treść spod kursora lub fokusu. |


## C.11.2.1.1.1 - C.11.2.1.1.1 Klawiatura (funkcjonalność otwarta)

### Warunki wstępne
1. 1. TIK jest oprogramowaniem nieinternetowym, które udostępnia interfejs użytkownika.
1. 2. Oprogramowanie zapewnia obsługę klawiatur lub interfejs klawiatury.

### Procedura
1. 1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu [WCAG 2.1 – 2.1.1 Klawiatura](https://www.w3.org/Translations/WCAG21-pl/#klawiatura).

### Typ oceny
Inspekcja

### Checklist
1. **Klawiatura:** sprawdź, czy wszystkie elementy interfejsu i funkcje można obsłużyć przy pomocy samej klawiatury (Tab, Shift+Tab, strzałki, klawisze skrótów).
1. **Test praktyczny:** Prowadź kompletne scenariusze użytkownika tylko przy użyciu klawiatury: nawiguj, wypełnij formularz, obsłuż elementy dynamiczne, modalne okna i widgety; upewnij się, że wszystkie funkcje są dostępne i aktywne.
1. **Kryterium sukcesu (WCAG 2.1 – 2.1.1):** Wszystkie funkcje są możliwe do wykonania przy pomocy klawiatury, bez konieczności używania myszy lub wskaźników.
1. **Uwaga:** Weź pod uwagę niestandardowe skróty i skróty systemowe; sprawdź też konflikty między skrótami a technologiami pomocniczymi.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2, lub oprogramowanie nieinternetowe nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 2.1.1 Klawiatura. |


## C.11.2.1.1.2 - C.11.2.1.1.2 Klawiatura (funkcjonalność zamknięta)

### Warunki wstępne
1. 1. TIK jest oprogramowaniem nieinternetowym. Które udostępnia interfejs użytkownika.
1. 2. Interfejs użytkownika jest zamknięty dla klawiatur i interfejsów klawiatury.

### Procedura
1. 1. Sprawdź, czy wszystkie funkcjonalności interfejsu użytkownika można obsługiwać bez użycia wzroku.

### Typ oceny
Inspekcja

### Checklist
1. **Klawiatura (funkcjonalność zamknięta):** sprawdź, czy funkcje, które są zamknięte dla technologii wspomagających lub platformy, mają alternatywne metody dostępu (np. wyjście mowy, dedykowane przyciski lub komendy), oraz czy oprogramowanie udostępnia odpowiednią dokumentację i możliwości konfiguracji.
1. **Test praktyczny:** Sprawdź funkcje zamknięte z użyciem metod dostępnych na platformie (np. wyjście mowy, przyciski sprzętowe); upewnij się, że użytkownik może wykonywać istotne operacje poprzez alternatywne metody, oraz że funkcje są poprawnie opisane w dokumentacji.
1. **Uwaga:** Zwróć uwagę, że w zamkniętych systemach może być potrzebna współpraca z dostawcą platformy w celu oceny dostępności.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2. |


## C.11.2.1.2 - C.11.2.1.2 Bez pułapki na klawiaturę

### Warunki wstępne
1. 1. TIK jest oprogramowaniem nieinternetowym, które udostępnia interfejs użytkownika.

### Procedura
1. 1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu zawarte w Tabeli 11.3.

### Typ oceny
Inspekcja

### Checklist
1. **Bez pułapki na klawiaturę:** Sprawdź, czy jeśli fokus klawiatury może wejść na komponent oprogramowania przy użyciu interfejsu klawiatury, wówczas fokus można przesunąć z tego komponentu przy użyciu tylko interfejsu klawiatury, oraz jeśli wymaga to więcej niż niezmodyfikowane klawisze strzałek lub tab lub inne standardowe metody wyjścia, użytkownik jest informowany o metodzie przesunięcia fokusa.
1. **Test praktyczny:** Przetestuj formularze, modalne okna dialogowe, niestandardowe kontrolki (np. panele, elementy drag-and-drop) oraz zewnętrzne biblioteki UI; zweryfikuj instrukcje, które informują użytkownika, jak opuścić komponent, jeżeli to nie jest naturalne; upewnij się, że istnieje sposoby alternatywne jeśli domyślne nie działają.
1. **Kryterium sukcesu (Tabela 11.3):** Jeżeli fokus klawiatury może wejść na komponent oprogramowania przy użyciu interfejsu klawiatury, wówczas fokus można przesunąć z tego komponentu przy użyciu tylko interfejsu klawiatury, oraz jeśli wymaga to więcej niż niezmodyfikowane klawisze strzałek lub tab lub inne standardowe metody wyjścia, użytkownik jest informowany o metodzie przesunięcia fokusa.
1. **Uwaga 1:** Ponieważ każda część oprogramowania, która nie spełnia tego kryterium sukcesu, może zakłócić zdolność użytkownika do korzystania z całego oprogramowania, konieczne jest, aby cała treść w oprogramowaniu (niezależnie od tego, czy jest używana do spełniania innych kryteriów sukcesu) spełniała to kryterium sukcesu.
1. **Uwaga 2:** Standardowe metody wyjścia mogą się różnić w zależności od platformy. Na przykład, na wielu platformach desktopowych klawisz Escape jest standardową metodą wyjścia.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2. |


## C.11.2.1.4.1 - C.11.2.1.4.1 Jednoznakowe skróty klawiaturowe (funkcjonalność otwarta)

### Warunki wstępne
1. 1. TIK jest oprogramowaniem nieinternetowym, które udostępnia interfejs użytkownika.
1. 2. Oprogramowanie zapewnia obsługę przynajmniej jednej technologii wspomagającej.

### Procedura
1. 1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu [WCAG 2.1 – 2.1.4](https://www.w3.org/Translations/WCAG21-pl/#character-key-shortcuts) Jednoznakowe skróty klawiszowe.

### Typ oceny
Inspekcja

### Checklist
1. **Jednoznakowe skróty (funkcjonalność otwarta):** sprawdź dokumentację skrótów oraz przetestuj skróty przy użyciu klawiatury; sprawdź, czy skróty składające się z jednego klawisza można wyłączyć lub zmienić, oraz czy użytkownik jest informowany o ich istnieniu i sposobie wyłączenia.
1. **Test praktyczny:** Wypróbuj istniejące skróty przy pomocy klawiatury i aplikacji pomocniczych; zmień/włącz/wyłącz skrót (jeżeli to możliwe) i sprawdź, czy funkcje pozostają dostępne; upewnij się, że skróty nie kolidują z systemowymi i diagnostycznymi skrótami technologicznymi.
1. **Kryterium sukcesu (WCAG 2.1 – 2.1.4):** Jednoznakowe skróty można wyłączyć lub zmienić, albo są one absolutnie konieczne i opisane w dokumentacji.
1. **Uwaga:** Na platformach wbudowanych skróty zależne od systemu operacyjnego mogą wymagać specjalnych rozwiązań; zwróć uwagę na zgodność z technologiami wspomagającymi.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2, lub oprogramowanie nieinternetowe nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 2.1.4 Jednoznakowe skróty klawiaturowe. |


## C.11.2.1.4.2 - C.11.2.1.4.2 Jednoznakowe skróty klawiaturowe (funkcjonalność zamknięta)

### Warunki wstępne
1. 1. TIK jest oprogramowaniem nieinternetowym, które udostępnia interfejs użytkownika.
1. 2. Funkcjonalność TIK jest zamknięta dla klawiatur i interfejsów klawiatury.

### Procedura
1. 1. Sprawdź, czy wszystkie funkcjonalności można obsługiwać bez użycia wzroku.

### Typ oceny
Inspekcja

### Checklist
1. **Jednoznakowe skróty (funkcjonalność zamknięta):** sprawdź, czy w środowisku zamkniętym dla technologii wspomagających, jednoznakowe skróty mają alternatywne metody dostępu lub są opisane w dokumentacji, aby uniknąć przypadkowych aktywacji.
1. **Test praktyczny:** W środowisku zamkniętym, przetestuj skróty przy użyciu dostępnych metod (np. mowa, przyciski sprzętowe); upewnij się, że skróty nie powodują niezamierzonych działań i są dostępne poprzez alternatywy.
1. **Uwaga:** W zamkniętych systemach, współpraca z dostawcą platformy może być konieczna dla zapewnienia dostępności skrótów.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2. |


## C.11.2.2.1 - C.11.2.2.1 Dostosowanie czasu

### Warunki wstępne
1. 1. TIK jest oprogramowaniem nieinternetowym, które udostępnia interfejs użytkownika.

### Procedura
1. 1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu zawarte w Tabeli 11.4.

### Typ oceny
Inspekcja

### Checklist
1. **Limity czasowe:** sprawdź wszystkie miejsce w oprogramowaniu gdzie narzucone są limity czasowe (np. sesje, formularze, edycja); upewnij się, że użytkownik może wyłączyć limit, dostosować czas (co najmniej 10x dłuższy) lub przedłużyć po ostrzeżeniu (min. 20 s).
1. **Test praktyczny:** Potwierdź, że dla każdego limitu czasowego użytkownik ma kontrolę: wyłącz limit, dostosuj czas lub przedłuż po ostrzeżeniu; sprawdź wyjątki dla zdarzeń czasu rzeczywistego lub działań istotnych.
1. **Kryterium sukcesu (Tabela 11.4):** Dla każdego limitu czasowego użytkownik może wyłączyć go, dostosować (co najmniej 10x) lub przedłużyć po ostrzeżeniu (min. 20 s), chyba że jest to niepraktyczne (np. realtime).
1. **Uwaga:** Zwróć uwagę na wyjątki: zdarzenia czasu rzeczywistego (np. aukcje), gdzie limit jest niezbędny; działania istotne, gdzie przedłużenie unieważnia aktywność; lub limity dłuższe niż 20 godzin. Dokumentuj sytuacje, gdzie limity są wprowadzone przez zewnętrzne polityki.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.11.2.2.2 - C.11.2.2.2 Pauza, zatrzymanie, ukrycie

### Warunki wstępne
1. 1. TIK jest oprogramowaniem nieinternetowym, które udostępnia interfejs użytkownika.

### Procedura
1. 1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu zawarte w Tabeli 11.5.

### Typ oceny
Inspekcja

### Checklist
1. **Pauza, zatrzymanie, ukrycie:** sprawdź, czy poruszające się, migające, przewijające lub automatycznie aktualizowane treści da się wstrzymać, zatrzymać lub ukryć; dla treści automatycznie aktualizowanych sprawdź mechanizm kontroli częstotliwości.
1. **Test praktyczny:** Sprawdź elementy animowane, przewijające treści oraz automatyczne aktualizacje; potwierdź, że istnieje funkcja pauzy/stop/ukrywania lub ustawienia częstotliwości; dokumentuj wyjątki, gdzie ruch jest niezbędny (np. ładowanie).
1. **Kryterium sukcesu (Tabela 11.5):** Dla ruchomych/migających/przewijanych elementów (trwających >5s, równolegle z inną treścią) oraz automatycznie aktualizowanych treści istnieje mechanizm zatrzymania/ukrycia lub kontroli częstotliwości, chyba że ruch/aktualizacja jest niezbędna.
1. **Uwaga 1:** Dotyczy całej treści w oprogramowaniu (informacyjnej lub dekoracyjnej), która się porusza, miga, przewija lub aktualizuje automatycznie – każdy element niespełniający może zakłócić użytkowanie całego oprogramowania.
1. **Uwaga 2:** Wyjątki dla treści niezbędnych (np. animacje ładowania, gdzie interakcja nie jest możliwa i wskazanie postępu jest ważne).
1. **Uwaga 3:** Dla migotania/odblasków patrz [WCAG 2.1 – 2.3.1 Trzy błyski lub wartości poniżej progu](https://www.w3.org/Translations/WCAG21-pl/#trzy-b-yski-lub-wartosci-ponizej-progu).
1. **Uwaga 4:** Treści strumieniowane lub okresowo aktualizowane nie muszą zachowywać danych między pauzą a wznowieniem.
1. **Uwaga 5:** Dotyczy wszystkich treści, nawet dekoracyjnych, jeśli się aktualizują, migają lub poruszają.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.11.2.3.1 - C.11.2.3.1 Trzy błyski lub wartości poniżej progu

### Warunki wstępne
1. 1. TIK jest oprogramowaniem nieinternetowym, które udostępnia interfejs użytkownika.

### Procedura
1. 1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu zawarte w Tabeli 11.6.

### Typ oceny
Inspekcja

### Checklist
1. **Błyski:** sprawdź całą aplikację pod kątem elementów migających/zmieniających jasność; użyj testów obrazu lub narzędzi mierzących częstotliwość błysku.
1. **Kryterium sukcesu (Tabela 11.6):** Oprogramowanie nie powinno zawierać treści, które błyskają więcej niż trzy razy w ciągu jednego sekundy lub przekraczają progi ostrzegawcze migotania.
1. **Uwaga:** Kryterium dotyczy całego oprogramowania (fragmenty migające mogą wpływać na użyteczność). Zobacz także [WCAG 2.1 – 2.3.1 Trzy błyski lub wartości poniżej progu](https://www.w3.org/Translations/WCAG21-pl/#trzy-b-yski-lub-wartosci-ponizej-progu).

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.11.2.4.3 - C.11.2.4.3 Kolejność fokusu

### Warunki wstępne
1. 1. TIK jest oprogramowaniem nieinternetowym, które udostępnia interfejs użytkownika.

### Procedura
1. 1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu zawarte w Tabeli 11.7.

### Typ oceny
Inspekcja

### Checklist
1. **Kolejność fokusu:** użyj nawigacji klawiaturowej (Tab/Shift+Tab) i sprawdź, czy kolejność fokusu jest logiczna i zachowuje znaczenie oraz pełną funkcjonalność interfejsu; potwierdź, że programowa kolejność odpowiada wizualnej kolejności, jeśli ma znaczenie.
1. **Kryterium sukcesu (Tabela 11.7):** Jeśli oprogramowanie obsługuje sekwencyjną nawigację i ta kolejność ma wpływ na znaczenie lub działanie, kolejność fokusu powinna zachowywać znaczenie i funkcjonalność.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.11.2.4.4 - C.11.2.4.4 Cel łącza (w kontekście)

### Warunki wstępne
1. 1. TIK jest oprogramowaniem nieinternetowym, które udostępnia interfejs użytkownika.

### Procedura
1. 1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu [WCAG 2.1 – 2.4.4 Cel łącza (w kontekście)](https://www.w3.org/Translations/WCAG21-pl/#cel-acza-w-kontekscie).

### Typ oceny
Inspekcja

### Checklist
1. **Cel łącza (w kontekście):** sprawdź, czy cel łącza (np. przycisku, linku) jest zrozumiały z samego tekstu łącza lub z kontekstu programowego (aria-label, title) oraz kontekstu wizualnego.
1. **Test praktyczny:** Przejrzyj łącza bez kontekstu (np. lista linków); upewnij się, że tekst łącza sam w sobie lub z kontekstem wyjaśnia cel; sprawdź z technologią wspomagającą.
1. **Kryterium sukcesu (WCAG 2.1 – 2.4.4):** Cel łącza jest zrozumiały z tekstu łącza lub kontekstu (programowego lub wizualnego).
1. **Uwaga:** Jeśli łącze jest niejednoznaczne samo w sobie, kontekst musi wyjaśniać cel.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub oprogramowanie nieinternetowe nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 2.4.4 Cel łącza (w kontekście). |


## C.11.2.4.6 - C.11.2.4.6 Nagłówki i etykiety

### Warunki wstępne
1. 1. TIK jest oprogramowaniem nieinternetowym, które udostępnia interfejs użytkownika.

### Procedura
1. 1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu [WCAG 2.1 – 2.4.6 Nagłówki i etykiety.](https://www.w3.org/Translations/WCAG21-pl/#nag-owki-i-etykiety)

### Typ oceny
Inspekcja

### Checklist
1. **Nagłówki i etykiety:** sprawdź, czy nagłówki opisują temat sekcji, a etykiety pól formularzy są opisowe i jednoznaczne; upewnij się, że etykiety są programowo powiązane z kontrolkami.
1. **Test praktyczny:** Przejrzyj nagłówki i etykiety z technologią wspomagającą; sprawdź, czy opisują odpowiednio sekcje/formularze; potwierdź powiązania programowe.
1. **Kryterium sukcesu (WCAG 2.1 – 2.4.6):** Nagłówki i etykiety opisują temat lub cel.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub oprogramowanie nieinternetowe nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 2.4.6 Nagłówki i etykiety. |


## C.11.2.4.7 - C.11.2.4.7 Widoczny fokus

### Warunki wstępne
1. 1. TIK jest oprogramowaniem nieinternetowym, które udostępnia interfejs użytkownika.

### Procedura
1. 1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu [WCAG 2.1 – 2.4.7 Widoczny fokus.](https://www.w3.org/Translations/WCAG21-pl/#widoczny-fokus)

### Typ oceny
Inspekcja

### Checklist
1. **Wskaźnik fokusu:** Przejdź po elementach interaktywnych używając klawiatury (Tab/Shift+Tab, strzałki) i sprawdź, czy aktywny element ma wyraźny wskaźnik fokusu; sprawdź wszystkie stany (focus, hover, active) oraz różne motywy (jasny/ciemny) i skalowanie interfejsu użytkownika.
1. **Test praktyczny:** Użyj klawiatury do nawigacji po interfejsie i potwierdź, że wskaźnik fokusu jest zawsze widoczny dla każdego elementu interaktywnego; sprawdź, czy style CSS nie ukrywają fokusu (np. outline: none), oraz czy wskaźnik ma wystarczający kontrast i rozmiar.
1. **Kryterium sukcesu (WCAG 2.1 – 2.4.7):** Elementy interaktywne mają widoczny, łatwo wykrywalny wskaźnik fokusu podczas nawigacji klawiaturą.
1. **Uwaga:** W przypadku platform, które nadpisują domyślny fokus, upewnij się, że dostawca platformy zapewnia zamienny mechanizm widocznego fokusu; testuj także przy zwiększonym skalowaniu ekranu.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub oprogramowanie nieinternetowe nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 2.4.7 Widoczny fokus. |


## C.11.2.5.1 - C.11.2.5.1 Gesty dotykowe

### Warunki wstępne
1. 1. TIK jest oprogramowaniem nieinternetowym, które udostępnia interfejs użytkownika.
1. 2. Oprogramowanie zapewnia obsługę co najmniej jednej technologii wspomagającej.

### Procedura
1. 1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu zawarte w Tabeli 11.8.

### Typ oceny
Inspekcja

### Checklist
1. **Gesty dotykowe:** sprawdź, czy wszystkie funkcje wykonywane gestami wielopunktowymi lub ścieżkowymi mają alternatywy ulepszające lub są dostępne przy użyciu jednego wskaźnika bez ścieżkowego gestu, chyba że gest jest niezbędny.
1. **Kryterium sukcesu (Tabela 11.8):** Funkcje wykorzystujące gesty wielopunktowe i ścieżkowe muszą mieć możliwość ich uruchamiania także przy użyciu pojedynczego wskaźnika, chyba że gest jest zasadniczym elementem funkcjonalności.
1. **Uwaga 1:** To wymaganie dotyczy oprogramowania nieinternetowego, które interpretuje działania wskaźnika (tj. nie dotyczy działań wymaganych do obsługi agenta użytkownika lub technologii wspomagającej).

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2. |


## C.11.2.5.2 - C.11.2.5.2 Rezygnacja ze wskazania

### Warunki wstępne
1. 1. TIK jest oprogramowaniem nieinternetowym. Które udostępnia interfejs użytkownika.
1. 2. Oprogramowanie zapewnia obsługę co najmniej jednej technologii wspomagającej.

### Procedura
1. 1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu zawarte w Tabeli 11.9.

### Typ oceny
Inspekcja

### Checklist
1. **Rezygnacja ze wskazania:** sprawdź, czy funkcje uruchamiane przez naciśnięcie wskaźnika można anulować lub cofnąć przed zwolnieniem, oraz czy przypadkowe aktywacje są minimalizowane.
1. **Test praktyczny:** Testuj przyciski i kontrolki wskaźnikiem; sprawdź, czy można anulować akcję przed zwolnieniem (np. przeciągnięcie poza element); potwierdź, że nie ma niezamierzonych aktywacji.
1. **Kryterium sukcesu (Tabela 11.9):** Funkcje wskaźnika można anulować lub cofnąć, chyba że anulowanie jest niemożliwe (np. zakończenie przeciągania).
1. **Dla funkcjonalności obsługiwanej pojedynczym wskaźnikiem, przynajmniej jedno z poniższych jest prawdziwe:**
- Brak zdarzenia naciśnięcia: Zdarzenie naciśnięcia wskaźnika nie jest używane do wykonania żadnej części funkcji.
- Przerwanie lub cofnięcie: Ukończenie funkcji następuje przy zdarzeniu zwolnienia, oraz dostępny jest mechanizm do przerwania funkcji przed ukończeniem lub cofnięcia funkcji po ukończeniu.
- Odwrócenie zwolnienia: Zdarzenie zwolnienia odwraca każdy wynik poprzedzającego zdarzenia naciśnięcia.
- Istotne: Ukończenie funkcji przy zdarzeniu naciśnięcia jest istotne.
1. **Uwaga 1:** Funkcje, które emulują naciśnięcie klawisza klawiatury lub klawiatury numerycznej, są uważane za istotne.
1. **Uwaga 2:** To wymaganie dotyczy oprogramowania nieinternetowego, które interpretuje działania wskaźnika (tj. nie dotyczy działań wymaganych do obsługi agenta użytkownika lub technologii wspomagającej).

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2. |


## C.11.2.5.3.1 - C.11.2.5.3.1 Etykieta w nazwie (funkcjonalność otwarta)

### Warunki wstępne
1. 1. TIK jest oprogramowaniem nieinternetowym, które udostępnia interfejs użytkownika.
1. 2. Oprogramowanie zapewnia obsługę co najmniej jednej technologii wspomagającej.

### Procedura
1. 1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu [WCAG 2.1 – 2.5.3 Etykieta w nazwie.](https://www.w3.org/Translations/WCAG21-pl/#etykieta-w-nazwie)

### Typ oceny
Inspekcja

### Checklist
1. **Etykieta w nazwie:** sprawdź, czy widoczny tekst etykiety jest zawarty na początku dostępnej nazwy kontrolki; upewnij się, że dodatkowe informacje (np. ikony) nie zmieniają znaczenia.
1. **Test praktyczny:** Użyj inspektora dostępności, aby sprawdzić dostępną nazwę vs. widoczny tekst; potwierdź, że etykieta jest na początku nazwy; testuj z technologią wspomagającą.
1. **Kryterium sukcesu (WCAG 2.1 – 2.5.3):** Widoczny tekst etykiety jest zawarty na początku dostępnej nazwy kontrolki.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2, lub oprogramowanie nieinternetowe nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 2.5.3 Etykieta w nazwie. |


## C.11.2.5.4 - C.11.2.5.4 Aktywowanie ruchem

### Warunki wstępne
1. 1. TIK jest oprogramowaniem nieinternetowy, które udostępnia interfejs użytkownika.
1. 2. Oprogramowanie zapewnia obsługę co najmniej jednej technologii wspomagającej.

### Procedura
1. 1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu [WCAG 2.1 – 2.5.4 Aktywowanie ruchem.](https://www.w3.org/Translations/WCAG21-pl/#aktywowanie-ruchem)

### Typ oceny
Inspekcja

### Checklist
1. **Aktywowanie ruchem:** sprawdź, czy funkcje uruchamiane ruchem urządzenia mają alternatywne metody aktywacji; upewnij się, że ruch można wyłączyć lub zmienić w ustawieniach.
1. **Test praktyczny:** Testuj na urządzeniu mobilnym; wykonaj ruch (np. przechylenie); sprawdź alternatywy i kontrolę użytkownika; potwierdź brak niezamierzonych aktywacji.
1. **Kryterium sukcesu (WCAG 2.1 – 2.5.4):** Funkcje wykorzystujące aktywację ruchem mają alternatywną metodę lub możliwość wyłączenia.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2, lub oprogramowanie nieinternetowe nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 2.5.4 Aktywowanie ruchem. |


## C.11.3.1.1.1 - C.11.3.1.1.1 Język oprogramowania (funkcjonalność otwarta)

### Warunki wstępne
1. 1. TIK jest oprogramowaniem nieinternetowym, które udostępnia interfejs użytkownika.
1. 2. Oprogramowanie zapewnia wsparcie dla technologii wspomagających odczyt ekranu.

### Procedura
1. 1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu zawarte w Tabeli 11.10.

### Typ oceny
Inspekcja

### Checklist
1. **Język oprogramowania:** sprawdź, czy język interfejsu użytkownika jest poprawnie określony programowo (np. język systemu lub ustawienia aplikacji); upewnij się, że tekst jest w języku użytkownika.
1. **Test praktyczny:** Sprawdź ustawienia języka w aplikacji i systemie; użyj technologii wspomagającej, aby potwierdzić język; przetestuj z różnymi językami.
1. **Kryterium sukcesu (Tabela 11.10):** Domyślny język ludzki oprogramowania można określić programowo.
1. **Uwaga 1:** W przypadku gdy platformy oprogramowania zapewniają ustawienie "locale / language", aplikacje, które używają tego ustawienia i renderują swój interfejs w tym "locale / language", spełniałyby to kryterium sukcesu. Aplikacje, które nie używają ustawienia "locale / language" platformy, ale zamiast tego używają metody wspomaganej dostępnością do ujawniania ludzkiego języka oprogramowania, również spełniałyby to kryterium sukcesu. Aplikacje zaimplementowane w technologiach, gdzie technologie wspomagające nie mogą określić ludzkiego języka i które nie obsługują ustawienia "locale / language" platformy, mogą nie być w stanie spełnić tego kryterium sukcesu w tym locale / language.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2. |


## C.11.3.1.1.2 - C.11.3.1.1.2 Język oprogramowania (funkcjonalność zamknięta)

### Warunki wstępne
1. 1. TIK jest oprogramowaniem nieinternetowym z interfejsem użytkownika.
1. 2. Interfejs użytkownika jest zamknięty na technologie wspomagające odczyt ekranu.
1. 3. Wyjście mowy zapewnia niewizualny dostęp do funkcji zamkniętych.
1. 4. Sygnałem mowy nie są nazwy własne, terminy techniczne, słowa w nieokreślonym języku ani słowa lub zwroty, które stały się częścią żargonu bezpośrednio otaczającego tekstu.
1. 5. Treść nie jest generowana zewnętrznie i jest kontrolowana przez dostawcę TIK .
1. 6. Wyświetlane języki można wybrać z zastosowaniem dostępu niewizualny.
1. 7. Użytkownik nie wybrał języka mowy, który jest inny niż język wyświetlanej treści.

### Procedura
1. 1. Sprawdź, czy wyjście mowy występuje w tym samym języku co dostarczona wyświetlana treść.

### Typ oceny
Test

### Checklist
1. **Język oprogramowania:** Sprawdź, czy wyjście mowy występuje w tym samym języku co wyświetlana treść; sprawdź także, czy wybór języka mowy jest wykonywalny z poziomu interfejsu niewizualnego (jeżeli dotyczy).

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1, 2, 3, 4, 5, 6, lub 7. |


## C.11.3.2.1 - C.11.3.2.1 Po otrzymaniu fokusu

### Warunki wstępne
1. 1. TIK jest oprogramowaniem nieinternetowym, które udostępnia interfejs użytkownika.

### Procedura
1. 1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu [WCAG 2.1 – 3.2.1 Po otrzymaniu fokusu.](https://www.w3.org/Translations/WCAG21-pl/#po-otrzymaniu-fokusu)

### Typ oceny
Inspekcja

### Checklist
1. **Po otrzymaniu fokusu:** sprawdź, czy po otrzymaniu fokusu przez komponent interfejsu użytkownika (np. przycisk, pole tekstowe) nie następuje automatyczna zmiana kontekstu, taka jak otwarcie nowego okna, zmiana fokusu na inny element, znaczna zmiana treści lub nawigacja do innej strony.
1. **Test praktyczny:** Przejdź przez wszystkie interaktywne elementy aplikacji używając klawiatury (Tab); sprawdź, czy fokus nie powoduje nieoczekiwanych zmian; przetestuj z różnymi urządzeniami wejściowymi.
1. **Kryterium sukcesu (WCAG 2.1 – 3.2.1):** Po otrzymaniu fokusu przez dowolny komponent interfejsu użytkownika nie następuje zmiana kontekstu.
1. **Uwaga:**
- Niektóre złożone dokumenty i programy do ich obsługi są zaprojektowane tak, aby oferować różne funkcje przeglądania i edycji w zależności od części dokumentu, z którą użytkownik wchodzi w interakcję.
- Przykład: prezentacja zawierająca wbudowany arkusz kalkulacyjny, gdzie menu i paski narzędzi programu zmieniają się w zależności od tego, czy użytkownik pracuje z treścią prezentacji, czy z arkuszem.
- Jeśli użytkownik używa sposobu innego niż ustawienie fokusu na tej części dokumentu (np. przez wybór z menu lub specjalny gest klawiaturowy), to zmiana kontekstu nie podlega temu kryterium sukcesu, ponieważ nie została wywołana przez zmianę fokusu.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub oprogramowanie nieinternetowe nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 3.2.1 Po otrzymaniu fokusu. |


## C.11.3.2.2 - C.11.3.2.2 Podczas wprowadzania danych

### Warunki wstępne
1. 1. TIK jest oprogramowaniem nieinternetowym, które udostępnia interfejs użytkownika.

### Procedura
1. 1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu [WCAG 2.1 – 3.2.2 Podczas wprowadzania danych.](https://www.w3.org/Translations/WCAG21-pl/#podczas-wprowadzania-danych)

### Typ oceny
Inspekcja

### Checklist
1. **Podczas wprowadzania danych:** sprawdź, czy zmiana ustawienia komponentu interfejsu użytkownika (np. wybór z listy, wprowadzenie tekstu) nie powoduje automatycznej zmiany kontekstu, takiej jak otwarcie nowego okna lub nawigacja, chyba że użytkownik został wcześniej poinformowany o tym zachowaniu.
1. **Test praktyczny:** Wprowadź dane w formularzach i kontrolkach; sprawdź, czy nie następuje nieoczekiwana zmiana kontekstu; upewnij się, że wszelkie ostrzeżenia są obecne przed akcją.
1. **Kryterium sukcesu (WCAG 2.1 – 3.2.2):** Zmiana ustawienia dowolnego komponentu interfejsu użytkownika nie powoduje automatycznie zmiany kontekstu, chyba że użytkownik został wcześniej poinformowany o tym zachowaniu przed użyciem komponentu.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub oprogramowanie nieinternetowe nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 3.2.2 Podczas wprowadzania danych. |


## C.11.3.3.1.1 - C.11.3.3.1.1 Identyfikacja błędu (funkcjonalność otwarta)

### Warunki wstępne
1. 1. TIK jest oprogramowaniem nieinternetowym, które udostępnia interfejs użytkownika.
1. 2. Oprogramowanie zapewnia wsparcie dla technologii wspomagających odczyt ekranu.

### Procedura
1. 1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu [WCAG 2.1 – 3.3.1 Identyfikacja błędu.](https://www.w3.org/Translations/WCAG21-pl/#identyfikacja-b-edu)

### Typ oceny
Inspekcja

### Checklist
1. **Identyfikacja błędu:** sprawdź, czy w przypadku automatycznego wykrycia błędu wprowadzania (np. nieprawidłowy format daty, wymagane pole puste) błąd jest jasno zidentyfikowany, a użytkownik otrzymuje tekstowy opis błędu.
1. **Test praktyczny:** Wprowadź błędne dane w formularzach; sprawdź, czy błędy są wykrywane i opisane tekstowo; upewnij się, że identyfikacja błędu jest dostępna dla technologii wspomagających.
1. **Kryterium sukcesu (WCAG 2.1 – 3.3.1):** Jeśli błąd wprowadzania zostanie automatycznie wykryty, element, który zawiera błąd, zostaje zidentyfikowany, a błąd zostaje opisany użytkownikowi w tekście.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2 lub oprogramowanie nieinternetowe nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 3.3.1 Identyfikacja błędu. |


## C.11.3.3.1.2 - C.11.3.3.1.2 Identyfikacja błędu (funkcjonalność zamknięta)

### Warunki wstępne
1. 1. TIK jest oprogramowaniem nieinternetowym, które udostępnia interfejs użytkownika.
1. 2. Interfejs użytkownika jest zamknięty na technologie wspomagające odczyt ekranu.
1. 3. Wyjście mowy zapewnia niewizualny dostęp do funkcji zamkniętych.
1. 4. Błąd na wejściu jest wykrywany automatycznie.

### Procedura
1. 1. Sprawdź, czy wyjście mowy wykrywa, że element jest błędny.
1. 2. Sprawdź, czy wyjście mowy opisuje element, który jest błędny.

### Typ oceny
Test

### Checklist
1. **Identyfikacja błędu (funkcjonalność zamknięta):** sprawdź, czy w środowisku zamkniętym wyjście mowy wykrywa błędy wprowadzania i opisuje błędne elementy; upewnij się, że komunikaty są zrozumiałe i dostępne poprzez niewizualne metody.
1. **Test praktyczny:** Wprowadź błędne dane w zamkniętym interfejsie; sprawdź wyjście mowy pod kątem wykrywania błędów i opisu błędnych elementów; potwierdź zgodność z warunkami wstępnymi.
1. **Uwaga:** Dotyczy tylko środowisk zamkniętych z wyjściem mowy; błędy muszą być wykrywane automatycznie.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1 i 2: prawda |
| Niezaliczone | Kryterium 1 lub 2: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1, 2, 3 lub 4. |


## C.11.3.3.2 - C.11.3.3.2 Etykiety lub instrukcje

### Warunki wstępne
1. 1. TIK jest oprogramowaniem nieinternetowym, które udostępnia interfejs użytkownika.

### Procedura
1. 1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu [WCAG 2.1 – 3.3.2 Etykiety lub instrukcje.](https://www.w3.org/Translations/WCAG21-pl/#etykiety-lub-instrukcje)

### Typ oceny
Inspekcja

### Checklist
1. **Etykiety lub instrukcje:** sprawdź, czy wszystkie pola wprowadzania danych mają etykiety opisujące ich cel; upewnij się, że instrukcje są dostępne dla wymaganych formatów wprowadzania.
1. **Test praktyczny:** Przejrzyj wszystkie formularze i pola wprowadzania; sprawdź dostępność etykiet poprzez technologie wspomagające; potwierdź, że instrukcje są jasne i dostępne.
1. **Kryterium sukcesu (WCAG 2.1 – 3.3.2):** Etykiety lub instrukcje są podawane, gdy treść wymaga wprowadzania danych od użytkownika.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub oprogramowanie nieinternetowe nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 3.3.2 Etykiety lub instrukcje. |


## C.11.3.3.3 - C.11.3.3.3 Sugestie korekty błędów

### Warunki wstępne
1. 1. TIK jest oprogramowaniem nieinternetowym, które udostępnia interfejs użytkownika.

### Procedura
1. 1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu [WCAG 2.1 – 3.3.3 Sugestie korekty błędów.](https://www.w3.org/Translations/WCAG21-pl/#sugestie-korekty-b-edow)

### Typ oceny
Inspekcja

### Checklist
1. **Sugestie korekty błędów:** sprawdź, czy po wykryciu błędu wprowadzania użytkownik otrzymuje sugestie korekty; upewnij się, że sugestie nie zagrażają bezpieczeństwu ani celowi treści.
1. **Test praktyczny:** Wprowadź błędne dane w formularzach; sprawdź, czy pojawiają się sugestie korekty; potwierdź dostępność sugestii poprzez technologie wspomagające.
1. **Kryterium sukcesu (WCAG 2.1 – 3.3.3):** Jeśli błąd wprowadzania zostanie automatycznie wykryty i znane są sugestie korekty, wówczas sugestie te są użytkownikowi dostarczane, chyba że zagrażałoby to bezpieczeństwu lub celowi treści.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub oprogramowanie nieinternetowe nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 3.3.3 Sugestie korekty błędów. |


## C.11.3.3.4 - C.11.3.3.4 Zapobieganie błędom (prawnym, finansowym, w danych)

### Warunki wstępne
1. 1. TIK jest oprogramowaniem nieinternetowym, które udostępnia interfejs użytkownika.

### Procedura
1. 1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu zawarte w Tabeli 11.11.

### Typ oceny
Inspekcja

### Checklist
1. **Zapobieganie błędom (prawnym, finansowym, w danych):** sprawdź, czy dla działań powodujących zobowiązania prawne, transakcje finansowe, modyfikację/dostęp danych lub przesyłanie odpowiedzi testowych, przynajmniej jedno z poniższych jest prawdziwe: wysyłki są odwracalne; dane są sprawdzane pod kątem błędów z możliwością korekty; dostępny jest mechanizm przeglądu, potwierdzenia i korekty przed finalizacją.
1. **Test praktyczny:** Zidentyfikuj funkcje powodujące zobowiązania prawne lub transakcje; przetestuj mechanizmy zapobiegania błędom; sprawdź dostępność opcji cofania, sprawdzania lub potwierdzania poprzez technologie wspomagające.
1. **Kryterium sukcesu (Tabela 11.11):** Dla oprogramowania powodującego zobowiązania prawne lub transakcje finansowe, modyfikację danych lub przesyłanie odpowiedzi testowych, przynajmniej jedno z następujących jest prawdziwe:
- Reversible: Wysyłki są odwracalne.
- Checked: Dane wprowadzone przez użytkownika są sprawdzane pod kątem błędów wprowadzania i użytkownik ma możliwość ich korekty.
- Confirmed: Dostępny jest mechanizm przeglądu, potwierdzenia i korekty informacji przed finalizacją wysyłki.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.11.4.1.1.1 - C.11.4.1.1.1 Poprawność kodu (funkcjonalność otwarta)

### Warunki wstępne
1. 1. TIK jest oprogramowaniem nieinternetowym, które udostępnia interfejs użytkownika.
1. 2. Oprogramowanie zapewnia obsługę co najmniej jednej technologii wspomagającej.

### Procedura
1. 1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu zawarte w Tabeli 11.12.

### Typ oceny
Inspekcja

### Checklist
1. **Poprawność kodu:** sprawdź, czy dla oprogramowania używającego języków znaczników, które są dostępne dla technologii wspomagających, elementy mają kompletne tagi startowe i końcowe, są zagnieżdżone zgodnie ze specyfikacjami, nie zawierają duplikatów atrybutów i ID są unikalne, chyba że specyfikacje pozwalają na te cechy.
1. **Test praktyczny:** Przeanalizuj kod znaczników używany przez oprogramowanie; sprawdź kompletność tagów, zagnieżdżenie, atrybuty i ID; użyj narzędzi do walidacji kodu; potwierdź dostępność znaczników dla technologii wspomagających.
1. **Kryterium sukcesu (Tabela 11.12):** Dla oprogramowania używającego języków znaczników w sposób, że znaczniki są oddzielnie ujawniane i dostępne dla technologii wspomagających oraz funkcji dostępności oprogramowania lub dla agenta użytkownika wybieralnego przez użytkownika, elementy mają kompletne tagi startowe i końcowe, elementy są zagnieżdżone zgodnie z ich specyfikacjami, elementy nie zawierają duplikatów atrybutów i wszelkie ID są unikalne, z wyjątkiem przypadków, gdy specyfikacje pozwalają na te cechy.
1. **Uwaga 1:** Tagi startowe i końcowe, którym brakuje krytycznego znaku w ich formowaniu, takiego jak zamykający nawias kątowy lub niedopasowany cudzysłów wartości atrybutu, nie są kompletne.
1. **Uwaga 2:** Znaczniki nie zawsze są dostępne dla technologii wspomagających lub dla agentów użytkownika wybieralnych przez użytkownika, takich jak przeglądarki. W takich przypadkach zgodność z tym wymaganiem nie miałaby wpływu na dostępność, tak jak ma dla treści internetowych, gdzie jest ujawniana.
1. **Uwaga 3:** Przykłady znaczników, które są oddzielnie ujawniane i dostępne dla technologii wspomagających oraz agentów użytkownika obejmują, ale nie ograniczają się do: dokumentów zakodowanych w HTML, ODF i OOXML. W tych przykładach znaczniki mogą być parsowane całkowicie na dwa sposoby: (a) przez technologie wspomagające, które mogą bezpośrednio otworzyć dokument, (b) przez technologie wspomagające używające API DOM agentów użytkownika dla tych formatów dokumentów.
1. **Uwaga 4:** Przykłady znaczników używanych wewnętrznie do trwałości interfejsu użytkownika oprogramowania, które nigdy nie są ujawniane technologii wspomagającej obejmują, ale nie ograniczają się do: XUL i FXML. W tych przykładach technologia wspomagająca wchodzi w interakcję tylko z interfejsem użytkownika generowanego oprogramowania.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2. |


## C.11.4.1.2.1 - C.11.4.1.2.1 Nazwa, rola, wartość (funkcjonalność otwarta)

### Warunki wstępne
1. 1. TIK jest oprogramowaniem nieinternetowym, które udostępnia interfejs użytkownika.
1. 2. Oprogramowanie zapewnia obsługę co najmniej jednej technologii wspomagającej.

### Procedura
1. 1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu zawarte w Tabeli 11.13.

### Typ oceny
Inspekcja

### Checklist
1. **Nazwa, rola, wartość:** sprawdź, czy dla wszystkich komponentów interfejsu użytkownika (w tym elementów formularzy, linków i komponentów generowanych przez skrypty) nazwa i rola mogą być określone programowo; stany, właściwości i wartości, które mogą być ustawiane przez użytkownika, mogą być ustawiane programowo; oraz powiadomienia o zmianach tych elementów są dostępne dla agentów użytkownika, w tym technologii wspomagających.
1. **Test praktyczny:** Użyj inspektora dostępności, aby sprawdzić nazwy, role i wartości komponentów; przetestuj ustawianie stanów i właściwości programowo; sprawdź powiadomienia o zmianach poprzez technologie wspomagające; potwierdź interoperacyjność z usługami dostępności platformy.
1. **Kryterium sukcesu (Tabela 11.13):** Dla wszystkich komponentów interfejsu użytkownika (w tym, ale nie ograniczając się do: elementów formularzy, linków i komponentów generowanych przez skrypty), nazwa i rola mogą być określone programowo; stany, właściwości i wartości, które mogą być ustawiane przez użytkownika, mogą być ustawiane programowo; oraz powiadomienia o zmianach tych elementów są dostępne dla agentów użytkownika, w tym technologii wspomagających.
1. **Uwaga 1:** To kryterium sukcesu jest przede wszystkim dla programistów oprogramowania, którzy rozwijają lub używają niestandardowych komponentów interfejsu użytkownika. Standardowe komponenty interfejsu użytkownika na większości platform obsługujących dostępność już spełniają to kryterium sukcesu, gdy są używane zgodnie ze specyfikacją.
1. **Uwaga 2:** Dla zgodności z tym kryterium sukcesu, zwykle najlepszą praktyką dla interfejsów użytkownika oprogramowania jest używanie usług dostępności dostarczanych przez oprogramowanie platformy. Te usługi dostępności umożliwiają interoperacyjność między interfejsami użytkownika oprogramowania a zarówno technologiami wspomagającymi, jak i funkcjami dostępności oprogramowania w standaryzowanych sposób. Większość usług dostępności platformy wykracza poza programowe ujawnianie nazwy i roli oraz programowe ustawianie stanów, właściwości i wartości (oraz powiadamianie o tym samym), i określa dodatkowe informacje, które mogłyby lub powinny być ujawniane i/lub ustawiane (na przykład lista dostępnych działań dla danego komponentu interfejsu użytkownika oraz sposób programowego wykonania jednego z wymienionych działań).

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2. |


## C.11.4.1.3.1 - C.11.4.1.3.1 Komunikaty o stanie (funkcjonalność otwarta)

### Warunki wstępne
1. 1. TIK jest oprogramowaniem nieinternetowym, które udostępnia interfejs użytkownika.
1. 2. Oprogramowanie zapewnia wsparcie dla technologii wspomagających odczyt ekranu.

### Procedura
1. 1. Sprawdź, czy oprogramowanie spełnia kryterium sukcesu [WCAG 2.1 – 4.1.3 Komunikaty o stanie.](https://www.w3.org/Translations/WCAG21-pl/#komunikaty-o-stanie)

### Typ oceny
Inspekcja

### Checklist
1. **Komunikaty o stanie:** sprawdź, czy komunikaty o stanie mogą być programowo określone poprzez rolę lub właściwości, tak aby mogły być prezentowane użytkownikowi przez technologie wspomagające bez otrzymywania fokusu.
1. **Test praktyczny:** Wywołaj komunikaty o stanie w aplikacji (np. błędy, potwierdzenia); sprawdź, czy są dostępne dla technologii wspomagających bez fokusu; użyj inspektora dostępności, aby potwierdzić role i właściwości; przetestuj z czytnikami ekranu.
1. **Kryterium sukcesu (WCAG 2.1 – 4.1.3):** W treści zaimplementowanej przy użyciu języków znaczników komunikaty o stanie mogą być programowo określone poprzez rolę lub właściwości, tak aby mogły być prezentowane użytkownikowi przez technologie wspomagające bez otrzymywania fokusu.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2, lub oprogramowanie nieinternetowe nie zawiera treści odpowiadającej kryterium sukcesu WCAG 2.1 – 4.1.3 Komunikaty o stanie |


## C.11.5.1 - C.11.5.1 Funkcjonalność zamknięta

### Warunki wstępne
1. 1. W oprogramowaniu występuje funkcjonalność zamknięta.

### Procedura
1. 1. Sprawdź, czy funkcjonalność zamknięta jest zgodna z Rozdziałem 5.1.

### Typ oceny
Inspekcja

### Checklist
1. **Funkcjonalność zamknięta:** sprawdź, czy zamknięte funkcje oprogramowania są zgodne z wymaganiami rozdziału 5.1.
1. **Test praktyczny:** Przejrzyj funkcjonalności zamknięte; potwierdź zgodność z 5.1.
1. **Uwaga:** Jeśli zgodne, nie jest wymagane sprawdzanie klauzul z 11.5.2.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda (nie jest wymagana zgodność oprogramowania z klauzulą 11.5.2) |
| Niezaliczone | Kryterium 1: fałsz (jest wymagana zgodność oprogramowania z klauzulą 11.5.2) |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.11.5.2.1 - C.11.5.2.1 Platformowa usługa wsparcia dostępności dla oprogramowania, która udostępnia interfejs użytkownika

### Warunki wstępne
1. 1. Oceniane oprogramowanie jest oprogramowaniem platformy.

### Procedura
1. 1. Sprawdź, czy dokumentacja oprogramowania platformy zawiera informacje o usługach platformy, które mogą być używane przez oprogramowanie udostępniające interfejs użytkownika do współdziałania z technologią wspomagającą.

### Typ oceny
Inspekcja

### Checklist
1. **Usługi platformy dla oprogramowania z interfejsem użytkownika:** sprawdź, czy dokumentacja platformy zawiera informacje o usługach umożliwiających współdziałanie oprogramowania z interfejsem użytkownika z technologią wspomagającą.
1. **Test praktyczny:** Przejrzyj dokumentację platformy pod kątem opisów usług dostępności; potwierdź, że informacje są dostępne dla programistów.
1. **Uwaga:** Dotyczy tylko oprogramowania platformy.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryteria 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.11.5.2.2 - C.11.5.2.2 Obsługa usług dostępności platformy dla technologii wspomagających

### Warunki wstępne
1. 1. Oceniane oprogramowanie jest oprogramowaniem platformy.

### Procedura
1. 1. Sprawdź, czy dokumentacja oprogramowania platformy zawiera informacje o usługach dostępności platformy, które umożliwiają technologii wspomagającej współdziałanie z oprogramowaniem udostępniającym interfejs użytkownika działającym na oprogramowaniu platformy.

### Typ oceny
Inspekcja

### Checklist
1. **Obsługa usług dostępności platformy dla technologii wspomagających:** sprawdź, czy dokumentacja platformy zawiera informacje o usługach dostępności umożliwiających technologii wspomagającej współdziałanie z oprogramowaniem z interfejsem użytkownika.
1. **Test praktyczny:** Przejrzyj dokumentację platformy; potwierdź opis usług dla technologii wspomagających.
1. **Uwaga:** Dotyczy tylko oprogramowania platformy.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.11.5.2.3 - C.11.5.2.3 Stosowanie usług dostępności

### Warunki wstępne
1. 1. Oceniane oprogramowanie udostępnia interfejs użytkownika.

### Procedura
1. 1. Sprawdź, czy oprogramowanie używa odpowiednich udokumentowanych usług dostępności platformy.
1. 2. Sprawdź, czy oprogramowanie może spełnić odpowiednie wymagania 11.5.2.5 do 11.5.2.17, używając udokumentowanych usług dostępności platformy.
1. 3. Sprawdź, czy oprogramowanie może spełnić wymagania 11.5.2.5 do 11.5.2.17, używając udokumentowanych usług dostępności platformy i innych udokumentowanych usług.

### Typ oceny
Inspekcja

### Checklist
1. **Korzystanie z usług dostępności:** sprawdź, czy oprogramowanie z interfejsem użytkownika używa usług dostępności platformy i może spełnić wymagania 11.5.2.5–11.5.2.17.
1. **Test praktyczny:** Sprawdź kod oprogramowania pod kątem użycia API dostępności; przetestuj zgodność z wymaganiami przy użyciu usług platformy.
1. **Uwaga:** Dotyczy oprogramowania z interfejsem użytkownika; wymaga sprawdzenia dokumentacji platformy.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda oraz kryterium 2 lub 3: prawda |
| Niezaliczone | Kryterium 1 lub 3: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.11.5.2.4 - C.11.5.2.4 Technologia wspomagająca

### Warunki wstępne
1. 1. TIK jest technologią wspomagającą.

### Procedura
1. 1. Sprawdź, czy technologia wspomagająca używa udokumentowanych usług dostępności platformy.

### Typ oceny
Inspekcja

### Checklist
1. **Technologia wspomagająca:** sprawdź, czy technologia asystująca używa udokumentowanych usług dostępności platformy.
1. **Test praktyczny:** Potwierdź współpracę technologii asystujących z platformą.
1. **Uwaga:** Dotyczy tylko technologii wspomagających.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryteria 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.11.5.2.5 - C.11.5.2.5 Informacje o obiekcie

### Warunki wstępne
1. 1. Oceniane jest oprogramowanie z interfejsem użytkownika.

### Procedura
1. 1. Sprawdź, czy rola elementu interfejsu użytkownika jest możliwa do określenia programowo za pomocą technologii wspomagających.
1. 2. Sprawdź, czy stan elementu interfejsu użytkownika jest możliwy do określenia programowo za pomocą technologii wspomagających.
1. 3. Sprawdź, czy ograniczenie elementu interfejsu użytkownika jest możliwe do określenia programowo za pomocą technologii wspomagających.
1. 4. Sprawdź, czy nazwę elementu interfejsu użytkownika jest możliwe do określenia programowo za pomocą technologii wspomagających.
1. 5. Sprawdź, czy opis elementu interfejsu użytkownika jest możliwy do określenia programowo za pomocą technologii wspomagających.

### Typ oceny
Inspekcja

### Checklist
1. **Informacje o obiekcie:** sprawdź, czy wszystkie kluczowe informacje o elementach interfejsu użytkownika (rola, stan, ograniczenia, nazwa, opis) są dostępne programowo dla technologii wspomagających.
1. **Test praktyczny:** Użyj inspektora dostępności lub technologii wspomagających, aby sprawdzić każdą właściwość dla wszystkich interaktywnych elementów; potwierdź, że informacje są ujawniane zgodnie z API dostępności platformy; przetestuj z różnymi czytnikami ekranu.
1. **Kryteria:** Rola, stan, ograniczenia, nazwa i opis elementów muszą być możliwe do określenia programowo.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryteria 1, 2, 3, 4 i 5: prawda |
| Niezaliczone | Kryterium 1 lub 2 lub 3 lub 4 lub 5: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.11.5.2.6 - C.11.5.2.6 Wiersz, kolumna i nagłówki

### Warunki wstępne
1. 1. Oceniane jest oprogramowanie z interfejsem użytkownika.
1. 2. W interfejsie użytkownika znajdują się tabele danych.

### Procedura
1. 1. Wybrać tabelę danych, na której należy wykonać testy.
1. 2. Sprawdź, czy każdy wiersz komórek jest możliwy do określenia programowo za pomocą technologii wspomagających.
1. 3. Sprawdź, czy każda kolumna komórek, jest możliwa do określenia programowo za pomocą technologii wspomagających.
1. 4. Sprawdź, czy każdy nagłówek wiersza, jest możliwy do określenia programowo za pomocą technologii wspomagających.
1. 5. Sprawdź, czy każdy nagłówek kolumny, jest możliwy do określenia programowo za pomocą technologii wspomagających.

### Typ oceny
Inspekcja

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryteria 2, 3, 4 i 5: prawda |
| Niezaliczone | Kryterium 2 lub 3 lub 4 lub 5: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2. |


## C.11.5.2.7 - C.11.5.2.7 Wartości

### Warunki wstępne
1. 1. Oceniane oprogramowanie udostępnia interfejs użytkownika.
1. 2. Istnieją elementy interfejsu użytkownika, które mogą mieć wartości.

### Procedura
1. 1. Wybierz element interfejsu użytkownika, który może mieć wartość.
1. 2. Sprawdź, czy bieżąca wartość jest programowo możliwa do określenia przez technologie wspomagające.
1. 3. Jeśli element interfejsu użytkownika przekazuje informacje o zakresie wartości, sprawdź, czy minimalna wartość jest programowo możliwa do określenia przez technologie wspomagające.
1. 4. Jeśli element interfejsu użytkownika przekazuje informacje o zakresie wartości, sprawdź, czy maksymalna wartość jest programowo możliwa do określenia przez technologie wspomagające.

### Typ oceny
Inspekcja

### Checklist
1. **Wartości:** sprawdź, czy wartości elementów interfejsu użytkownika (bieżąca, min, max) są dostępne programowo dla technologii wspomagających.
1. **Test praktyczny:** Wybierz elementy z wartościami; użyj inspektora dostępności, aby sprawdzić ujawnianie wartości.
1. **Kryteria:** Bieżąca wartość oraz zakres (jeśli dotyczy) muszą być determinowalne.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryteria 2, 3 i 4: prawda |
| Niezaliczone | Kryterium 2 lub 3 lub 4: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2. |


## C.11.5.2.8 - C.11.5.2.8 Zależności między etykietami

### Warunki wstępne
1. 1. Oceniane oprogramowanie udostępnia interfejs użytkownika.
1. 2. Istnieją elementy interfejsu użytkownika, które są etykietami innych elementów interfejsu użytkownika.

### Procedura
1. 1. Uzyskaj informacje o każdym elemencie interfejsu użytkownika.
1. 2. Sprawdź, czy informacje elementu interfejsu użytkownika obejmują relację z elementem interfejsu użytkownika, który jest jego etykietą, jeśli bieżący element interfejsu użytkownika ma etykietę, i że ta relacja jest programowo możliwa do określenia przez technologie wspomagające.
1. 3. Sprawdź, czy informacje elementu interfejsu użytkownika obejmują relację z elementem interfejsu użytkownika, który etykietuje, jeśli bieżący element interfejsu użytkownika jest etykietą, i że ta relacja jest programowo możliwa do określenia przez technologie wspomagające.

### Typ oceny
Inspekcja

### Checklist
1. **Relacje etykiet:** sprawdź, czy relacje między etykietami a elementami są dostępne programowo dla technologii wspomagających.
1. **Test praktyczny:** Sprawdź pary etykieta-element; użyj narzędzi dostępności, aby potwierdzić relacje.
1. **Kryteria:** Relacje muszą być determinowalne w obu kierunkach.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 2 lub 3: prawda |
| Niezaliczone | Kryteria 2 i 3: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2. |


## C.11.5.2.9 - C.11.5.2.9 Relacje nadrzędny-podrzędny

### Warunki wstępne
1. 1. Oceniane oprogramowanie udostępnia interfejs użytkownika.
1. 2. Istnieją elementy interfejsu użytkownika, które są rodzicami (są nadrzędne) innych elementów interfejsu użytkownika w strukturze hierarchicznej.

### Procedura
1. 1. Dla elementów interfejsu użytkownika, które mają rodzica, sprawdź, czy informacje elementu interfejsu użytkownika obejmują relację z elementem interfejsu użytkownika, który jest jego rodzicem.
1. 2. Sprawdź, czy elementy interfejsu użytkownika, które są rodzicami elementu interfejsu użytkownika wybranego w kryterium 1, obejmują relację z elementami interfejsu użytkownika, które są jego dziećmi w swoich informacjach, i że ta relacja jest programowo możliwa do określenia przez technologie wspomagające.
1. 3. Dla elementów interfejsu użytkownika, które są rodzicami innych elementów interfejsu użytkownika, sprawdź, czy informacje elementu interfejsu użytkownika obejmują relację z elementami interfejsu użytkownika, które są jego dziećmi, i że ta relacja jest programowo możliwa do określenia przez technologie wspomagające.
1. 4. Sprawdź, czy elementy interfejsu użytkownika, które są dziećmi elementu interfejsu użytkownika wybranego w kryterium 3, obejmują relację z elementami interfejsu użytkownika, które są jego rodzicami w swoich informacjach, i że ta relacja jest programowo możliwa do określenia przez technologie wspomagające.

### Typ oceny
Inspekcja

### Checklist
1. **Relacje nadrzędny-podrzędny:** sprawdź, czy hierarchiczne relacje w interfejsie użytkownika są dostępne programowo dla technologii wspomagających.
1. **Test praktyczny:** Sprawdź strukturę hierarchiczną; użyj inspektora, aby potwierdzić relacje nadrzędny-podrzędny.
1. **Kryteria:** Relacje muszą być determinowalne; wystarczy jeden kierunek.
1. **Uwaga:** Wystarczy, że jeden z kierunków relacji jest programowo determinowalny.

### Notatki
1. Dla tego wymagania wystarczy, że jeden z dwóch kierunków relacji rodzic–dziecko będzie programowo determinowalny. Z tego powodu kontrole są wykonywane parami i wymaganie uznaje się za spełnione, jeśli jeden z członków każdej pary jest prawdziwy.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1 lub 2: prawda oraz kryterium 3 lub 4: prawda |
| Niezaliczone | Kryteria 1 i 2: fałsz lub kryteria 3 i 4: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2. |


## C.11.5.2.10 - C.11.5.2.10 Tekst

### Warunki wstępne
1. 1. Oceniane oprogramowanie udostępnia interfejs użytkownika.
1. 2. Istnieje tekst renderowany na ekranie.

### Procedura
1. 1. Dla instancji tekstu renderowanego na ekranie, sprawdź, czy informacje tekstu obejmują jego zawartość tekstową, i że te informacje są programowo możliwe do określenia przez technologie wspomagające.
1. 2. Dla instancji tekstu renderowanego na ekranie, sprawdź, czy informacje tekstu obejmują jego atrybuty, i że te informacje są programowo możliwe do określenia przez technologie wspomagające.
1. 3. Dla instancji tekstu renderowanego na ekranie, sprawdź, czy informacje tekstu obejmują jego granicę, i że te informacje są programowo możliwe do określenia przez technologie wspomagające.

### Typ oceny
Inspekcja

### Checklist
1. **Tekst:** sprawdź, czy zawartość, atrybuty i granice tekstu na ekranie są dostępne programowo dla technologii wspomagających.
1. **Test praktyczny:** Sprawdź instancje tekstu; użyj narzędzi dostępności, aby potwierdzić ujawnianie treści, atrybutów i granic.
1. **Kryteria:** Wszystkie aspekty tekstu muszą być determinowalne.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryteria 1, 2 i 3: prawda |
| Niezaliczone | Kryterium 1 lub 2 lub 3: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2. |


## C.11.5.2.11 - C.11.5.2.11 Lista dostępnych działań

### Warunki wstępne
1. 1. Oceniane oprogramowanie udostępnia interfejs użytkownika.
1. 2. Istnieją elementy interfejsu użytkownika, które mają działania, które mogą być wykonywane przez użytkownika.

### Procedura
1. 1. Sprawdź, czy informacje elementu interfejsu użytkownika obejmują listę działań, które mogą być wykonywane.
1. 2. Sprawdź, czy ta lista jest programowo możliwa do określenia przez technologie wspomagające.

### Typ oceny
Inspekcja

### Checklist
1. **Lista działań:** sprawdź, czy lista dostępnych działań dla elementów interfejsu użytkownika jest dostępna programowo dla technologii wspomagających.
1. **Test praktyczny:** Wybierz elementy z działaniami; sprawdź ujawnianie listy działań.
1. **Kryteria:** Lista musi być determinowalna.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryteria 1 i 2: prawda |
| Niezaliczone | Kryterium 1 lub 2: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2. |


## C.11.5.2.12 - C.11.5.2.12 Wykonywanie dostępnych działań

### Warunki wstępne
1. 1. Oceniane oprogramowanie udostępnia interfejs użytkownika.
1. 2. Istnieją elementy interfejsu użytkownika, które mają działania, które mogą być wykonywane przez użytkownika.
1. 3. Wymagania bezpieczeństwa zezwalają technologii wspomagającej na programowe wykonywanie działań użytkownika.

### Procedura
1. 1. Sprawdź, czy informacje elementu interfejsu użytkownika obejmują listę działań, które mogą być wykonywane przez technologie wspomagające zgodnie z 11.5.2.11.
1. 2. Sprawdź, czy wszystkie działania na liście mogą być pomyślnie wykonywane przez technologie wspomagające.

### Typ oceny
Inspekcja i testowanie

### Checklist
1. **Wykonywanie działań:** sprawdź, czy technologii wspomagających może programowo wykonywać działania z listy.
1. **Test praktyczny:** Przetestuj wykonywanie działań przez technologii wspomagających; potwierdź sukces.
1. **Kryteria:** Wszystkie działania muszą być wykonywalne; uwzględnij wymagania bezpieczeństwa.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryteria 1 i 2: prawda |
| Niezaliczone | Kryterium 1 lub 2: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1, 2 lub 3. |


## C.11.5.2.13 - C.11.5.2.13 Śledzenie elementów aktywnych i atrybutów wyboru

### Warunki wstępne
1. 1. Oceniane oprogramowanie udostępnia interfejs użytkownika.
1. 2. Istnieją elementy interfejsu użytkownika, które umożliwiają edycję tekstu.

### Procedura
1. 1. Sprawdź, czy informacje elementu interfejsu użytkownika obejmują mechanizmy śledzenia fokusu, punktu wstawiania tekstu i atrybutów wyboru.
1. 2. Sprawdź, czy te informacje są programowo możliwe do określenia przez technologie wspomagające.
1. 3. Aktywuj te mechanizmy śledzenia.
1. 4. Jako użytkownik, użyj funkcji edycję tekstu w ocenianym oprogramowaniu.
1. 5. Sprawdź, czy śledzenie fokusu, punktu wstawiania tekstu i atrybutów wyboru działa.

### Typ oceny
Inspekcja i testowanie

### Checklist
1. **Śledzenie fokusu i wyboru:** sprawdź, czy mechanizmy śledzenia fokusu, punktu wstawiania i wyboru są dostępne i działają dla technologii wspomagających.
1. **Test praktyczny:** Użyj edytora tekstu; aktywuj śledzenie; przetestuj z technologii wspomagających.
1. **Kryteria:** Mechanizmy muszą być determinowalne i funkcjonalne.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryteria 2 i 5: prawda |
| Niezaliczone | Kryterium 1 lub 5: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2. |


## C.11.5.2.14 - C.11.5.2.14 Modyfikacja elementów aktywnych i atrybutów wyboru

### Warunki wstępne
1. 1. Oceniane oprogramowanie udostępnia interfejs użytkownika.
1. 2. Istnieją elementy interfejsu użytkownika, które mogą otrzymać fokus lub które umożliwiają edycję tekstu.
1. 3. Wymagania bezpieczeństwa zezwalają oprogramowaniu platformy na programową modyfikację fokusu, punktu wstawiania tekstu i atrybutów wyboru elementów interfejsu użytkownika.

### Procedura
1. 1. Dla elementów interfejsu użytkownika, które mogą otrzymać fokus i gdzie fokus może być modyfikowany przez użytkownika bez użycia technologii wspomagającej, sprawdź, czy fokus może być programowo modyfikowany przez technologie wspomagające.
1. 2. Dla elementów interfejsu użytkownika, które umożliwiają edycję tekstu przez użytkownika bez użycia technologii wspomagającej, sprawdź, czy pozycja punktu wstawiania tekstu może być programowo modyfikowana przez technologie wspomagające.
1. 3. Dla elementów interfejsu użytkownika, które umożliwiają edycję tekstu, sprawdź, czy atrybuty wyboru mogą być programowo modyfikowane przez technologie wspomagające, gdzie mogą być modyfikowane przez użytkownika bez użycia technologii wspomagającej.

### Typ oceny
Testowanie

### Checklist
1. **Modyfikacja fokusu i wyboru:** sprawdź, czy technologia wspomagająca może programowo modyfikować fokus, punkt wstawiania i wybór.
1. **Test praktyczny:** Przetestuj modyfikacje przez technologię wspomagającą; potwierdź funkcjonalność.
1. **Kryteria:** Wszystkie modyfikacje muszą być możliwe; uwzględnij wymagania bezpieczeństwa.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Wszystkie kryteria: prawda |
| Niezaliczone | Jakiekolwiek kryterium: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1, 2 lub 3. |


## C.11.5.2.15 - C.11.5.2.15 Powiadamianie o zmianach

### Warunki wstępne
1. 1. Oceniane oprogramowanie udostępnia interfejs użytkownika.

### Procedura
1. 1. Aktywuj powiadomienia o zmianach w elementach interfejsu użytkownika.
1. 2. Sprawdź, czy powiadomienia o zmianach w informacjach o obiekcie (rola, stan, granica, nazwa i opis) są wysyłane do technologii wspomagających, jeśli te informacje zmieniają się w interfejsie użytkownika oprogramowania.
1. 3. Sprawdź, czy powiadomienia o zmianach w wierszach, kolumnach i nagłówkach tabel danych są wysyłane do technologii wspomagających, jeśli te informacje zmieniają się w oprogramowaniu.
1. 4. Sprawdź, czy powiadomienia o zmianach w wartościach (bieżąca wartość, minimalna wartość i maksymalna wartość) są wysyłane, jeśli te informacje zmieniają się w oprogramowaniu.
1. 5. Sprawdź, czy powiadomienia o zmianach w relacjach etykiet są wysyłane do technologii wspomagających, jeśli te informacje zmieniają się w oprogramowaniu.
1. 6. Sprawdź, czy powiadomienia o zmianach w relacjach rodzic-dziecko są wysyłane do technologii wspomagających, jeśli te informacje zmieniają się w oprogramowaniu.
1. 7. Sprawdź, czy powiadomienia o zmianach w tekście (zawartość tekstowa, atrybuty tekstu i granica tekstu renderowanego na ekranie) są wysyłane do technologii wspomagających, jeśli te informacje zmieniają się w oprogramowaniu.
1. 8. Sprawdź, czy powiadomienia o zmianach w liście dostępnych działań są wysyłane do technologii wspomagających, jeśli te informacje zmieniają się w oprogramowaniu.
1. 9. Sprawdź, czy powiadomienia o zmianach w fokusie, punkcie wstawiania tekstu i atrybutach wyboru są wysyłane do technologii wspomagających, jeśli te informacje zmieniają się w oprogramowaniu.

### Typ oceny
Inspekcja i testowanie

### Checklist
1. **Powiadomienia o zmianach:** sprawdź, czy zmiany w interfejsie użytkownika są przekazywane do technologii asystujących.
1. **Test praktyczny:** Aktywuj powiadomienia; wprowadź zmiany; sprawdź wysyłanie powiadomień.
1. **Kryteria:** Wszystkie typy zmian muszą być przekazywane.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryteria 2, 3, 4, 5, 6, 7, 8 i 9: prawda |
| Niezaliczone | Kryterium 2, 3, 4, 5, 6, 7, 8 lub 9: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.11.5.2.16 - C.11.5.2.16 Modyfikacje stanów i właściwości

### Warunki wstępne
1. 1. Oceniane oprogramowanie udostępnia interfejs użytkownika.
1. 2. Istnieją elementy interfejsu użytkownika, których stan lub właściwości mogą być modyfikowane przez użytkownika bez użycia technologii wspomagającej.
1. 3. Wymagania bezpieczeństwa zezwalają technologii wspomagającej na programową modyfikację stanów i właściwości elementów interfejsu użytkownika.

### Procedura
1. 1. Sprawdź, czy stan elementów interfejsu użytkownika, których stan może być modyfikowany przez użytkownika bez użycia technologii wspomagającej, może być programowo modyfikowany przez technologie wspomagające.
1. 2. Sprawdź, czy właściwości elementów interfejsu użytkownika, których właściwości mogą być modyfikowane przez użytkownika bez użycia technologii wspomagającej, mogą być programowo modyfikowane przez technologie wspomagające.

### Typ oceny
Testowanie

### Checklist
1. **Modyfikacje stanów i właściwości:** sprawdź, czy technologie wspomagające mogą programowo modyfikować stany i właściwości interfejsu użytkownika.
1. **Test praktyczny:** Przetestuj modyfikacje przez technologie wspomagające; potwierdź funkcjonalność.
1. **Kryteria:** Wszystkie modyfikacje muszą być możliwe; uwzględnij wymagania bezpieczeństwa.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Wszystkie kryteria: prawda |
| Niezaliczone | Jakiekolwiek kryterium: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1, 2 lub 3. |


## C.11.5.2.17 - C.11.5.2.17 Modyfikacje wartości i tekstu

### Warunki wstępne
1. 1. Oceniane oprogramowanie udostępnia interfejs użytkownika.
1. 2. Istnieją elementy interfejsu użytkownika, których wartości lub tekst mogą być modyfikowane przez użytkownika bez użycia technologii wspomagającej.
1. 3. Wymagania bezpieczeństwa zezwalają technologii wspomagającej na programową modyfikację wartości i tekstu elementów interfejsu użytkownika.

### Procedura
1. 1. Sprawdź, czy wartości elementów interfejsu użytkownika, których wartości mogą być modyfikowane przez użytkownika bez użycia technologii wspomagającej, mogą być modyfikowane przez technologie wspomagające przy użyciu metod wprowadzania platformy.
1. 2. Sprawdź, czy tekst elementów interfejsu użytkownika, którego tekst może być modyfikowany przez użytkownika bez użycia technologii wspomagającej, może być modyfikowany przez technologie wspomagające przy użyciu metod wprowadzania platformy.

### Typ oceny
Testowanie

### Checklist
1. **Modyfikacje wartości i tekstu:** sprawdź, czy technologie wspomagające mogą programowo modyfikować wartości i tekst interfejsu użytkownika przy użyciu metod platformy.
1. **Test praktyczny:** Przetestuj modyfikacje przez technologie wspomagające; potwierdź funkcjonalność.
1. **Kryteria:** Wszystkie modyfikacje muszą być możliwe; uwzględnij wymagania bezpieczeństwa.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Wszystkie kryteria: prawda |
| Niezaliczone | Jakiekolwiek kryterium: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1, 2 lub 3. |


## C.11.6.1 - C.11.6.1 Kontrola funkcji dostępności przez użytkownika

### Warunki wstępne
1. 1. Istnieją funkcje platformy, które są zdefiniowane w dokumentacji platformy jako funkcje dostępności przeznaczone dla użytkowników.

### Procedura
1. 1. Sprawdź, czy istnieją odpowiednie tryby pracy, w których możliwa jest kontrola użytkowników nad funkcjami platformy zdefiniowanymi w dokumentacji platformy jako funkcje dostępności przeznaczone dla użytkowników.

### Typ oceny
Test

### Checklist
1. **Kontrola użytkownika:** sprawdź, czy użytkownik ma kontrolę nad funkcjami dostępności platformy (np. włączanie/wyłączanie).
1. **Test praktyczny:** Spróbuj włączyć/wyłączyć funkcje dostępności; sprawdź, czy oprogramowanie na to pozwala.
1. **Kryteria:** Użytkownik musi mieć możliwość kontroli.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.11.6.2 - C.11.6.2 Nieprzerwane działanie funkcji dostępności

### Warunki wstępne
1. 1. Istnieją funkcje platformy, które są zdefiniowane w dokumentacji platformy jako funkcje dostępności.

### Procedura
1. 1. Sprawdź, czy oprogramowanie z interfejsem użytkownika przerywa normalne działanie funkcji dostępności platformy.
1. 2. Sprawdź, czy to przerwanie zostało wywołane lub zatwierdzone przez użytkownika.

### Typ oceny
Test

### Checklist
1. **Brak zakłóceń:** sprawdź, czy oprogramowanie nie zakłóca działania funkcji dostępności platformy (np. czytnika ekranu, lupy).
1. **Test praktyczny:** Uruchom funkcje dostępności; używaj oprogramowania; sprawdź, czy funkcje działają poprawnie.
1. **Wyjątek:** Zakłócenie jest dozwolone tylko na wyraźne żądanie użytkownika.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: fałsz lub obydwa kryteria: prawda |
| Niezaliczone | Kryterium 1: prawda oraz kryterium 2: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.11.7 - C.11.7 Preferencje użytkownika

### Warunki wstępne
1. 1. Oprogramowanie posiada interfejs użytkownika.
1. 2. Oprogramowanie zapewnia ustawienia języka, koloru, kontrastu, typu i rozmiaru czcionki oraz kursora fokusu, które odpowiadają ustawieniom platformy.
1. 3. Oprogramowanie nie jest przeznaczone do odizolowania od platform, na których jest oparte.

### Procedura
1. 1. Sprawdź, czy oprogramowanie zapewnia tryb pracy zgodny z ustawieniami platformy.

### Typ oceny
Inspekcja i test

### Checklist
1. **Preferencje platformy:** sprawdź, czy oprogramowanie respektuje ustawienia platformy (kolor, kontrast, czcionka, kursor).
1. **Test praktyczny:** Zmień ustawienia systemowe (np. wysoki kontrast); sprawdź, czy oprogramowanie się dostosowało.
1. **Kryteria:** Oprogramowanie musi dziedziczyć ustawienia systemowe.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1, 2 lub 3. |


## C.11.8.1 - C.11.8.1 Technologia treści

### Warunki wstępne
1. 1. Oprogramowanie jest narzędziem autorskim.
1. 2. Format wyjściowy narzędzia autorskiego obsługuje informacje wymagane dla dostępności.

### Procedura
1. 1. Sprawdź, czy narzędzie autorskie jest zgodne z 11.8.2 do 11.8.5 w zakresie, w jakim informacje wymagane dla dostępności są obsługiwane przez format używany na wyjściu narzędzia autorskiego.

### Typ oceny
Inspekcja i testowanie

### Checklist
1. **Obsługa formatu:** sprawdź, czy format wyjściowy narzędzia pozwala na zapisanie informacji o dostępności.
1. **Test praktyczny:** Wygeneruj treść; sprawdź, czy format pliku wspiera tagi, teksty alternatywne itp.

### Notatki
1. W przypadku gdy format wyjściowy narzędzia autorskiego nie obsługuje pewnych typów informacji wymaganych dla dostępności, zgodność z wymaganiami odnoszącymi się do tego typu informacji nie jest wymagana.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2. |


## C.11.8.2 - C.11.8.2 Tworzenie dostępnej treści

### Warunki wstępne
1. 1. Oprogramowanie jest narzędziem do tworzenia treści.

### Procedura
1. 1. Sprawdź, czy narzędzie do tworzenia treści ma cechy, które umożliwiają i wspomagają produkcję treści zgodnych z Rozdziałami 9 (Internet) i 10 (Dokumenty nieinternetowe).

### Typ oceny
Inspekcja i test

### Checklist
1. **Wsparcie tworzenia:** sprawdź, czy narzędzie umożliwia dodawanie informacji o dostępności (np. pola na tekst alternatywny).
1. **Test praktyczny:** Spróbuj stworzyć dostępny dokument; sprawdź, czy narzędzie to ułatwia.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.11.8.3 - C.11.8.3 Zachowanie informacji o dostępności podczas transformacji

### Warunki wstępne
1. 1. Oprogramowanie jest narzędziem do tworzenia treści.
1. 2. Narzędzie do tworzenia treści zapewnia transformacje restrukturyzacyjne lub ponownie kodujące.

### Procedura
1. 1. W przypadku transformacji restrukturyzacyjnej sprawdzić, czy w danych wyjściowych są zachowane informacje o dostępności.
1. 2. W przypadku transformacji restrukturyzacyjnej sprawdzić, czy technologia treści obsługuje informacje o dostępności dla restrukturyzowanej formy informacji.
1. 3. W przypadku transformacji ponownie kodujących sprawdzić, czy w danych wyjściowych są zachowane informacje o dostępności.
1. 4. W przypadku transformacji ponownie kodujących sprawdzić, czy informacje o dostępności są obsługiwane przez technologię ponownie zakodowanych danych wyjściowych.

### Typ oceny
Inspekcja i test

### Checklist
1. **Zachowanie informacji:** sprawdź, czy podczas konwersji/zapisu (transformacji) informacje o dostępności nie są tracone.
1. **Test praktyczny:** Przekonwertuj dokument dostępny; sprawdź wynik pod kątem utraty danych dostępności.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda lub kryteria 1 i 2: fałsz lub kryterium 3: prawda lub kryteria 3 i 4: fałsz |
| Niezaliczone | Kryterium 1: fałsz oraz kryterium 2: prawda |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2. |


## C.11.8.4 - C.11.8.4 Wspomaganie naprawy

### Warunki wstępne
1. 1. Oprogramowanie jest narzędziem do tworzenia treści.
1. 2. Funkcjonalność sprawdzania dostępności narzędzia do tworzenia treści może wykryć, że zawartość nie spełnia wymagań określonych w Rozdziałach 9 (Internet) lub 10 (Dokumenty nieinternetowe), w zależności od przypadku.

### Procedura
1. 1. Narzędzie do tworzenia treści proponuje sposób naprawy, jeśli zawartość nie spełnia wymagań Rozdziałów 9 lub 10 (w zależności od przypadku).

### Typ oceny
Inspekcja

### Checklist
1. **Sugestie naprawy:** sprawdź, czy narzędzie wykrywa błędy dostępności i sugeruje, jak je naprawić.
1. **Test praktyczny:** Stwórz treść z błędem; uruchom sprawdzanie; zobacz czy jest sugestia naprawy.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2. |


## C.11.8.5 - C.11.8.5 Szablony

### Warunki wstępne
1. 1. Oprogramowanie jest narzędziem do tworzenia treści.
1. 2. Narzędzie do tworzenia treści udostępnia szablony.

### Procedura
1. 1. Sprawdź, czy narzędzie do tworzenia treści udostępnia co najmniej jeden szablon, który wspiera tworzenie treści zgodnych z wymaganiami Rozdziałów 9 (Internet) lub 10 (Dokumenty nieinternetowe), w zależności od przypadku.
1. 2. Sprawdź, czy dostępny jest co najmniej jeden szablon określony w kroku 1 i czy jest on zgodny z Rozdziałami 9 lub 10 (w zależności od przypadku).

### Typ oceny
Inspekcja

### Checklist
1. **Dostępne szablony:** sprawdź, czy narzędzie oferuje szablony, które są dostępne (np. mają odpowiedni kontrast, strukturę nagłówków).
1. **Wybór szablonu:** Spróbuj stworzyć nową treść używając szablonu; sprawdź czy wynikowa treść jest dostępna.

### Notatki
1. Identyfikacja zgodna z wymaganiami Rozdziałów 9 lub 10 (odpowiednio) opisanymi w kryterium 2 może być opisana słowami "Zgodna z WCAG 2.1" . Jeśli podczas identyfikacji nie można wyraźnie stwierdzić, że wszystkie wymagania określone w Rozdziałach 9 lub 10 (w zależności od przypadku) są spełnione, może być konieczne wykorzystanie szablonu do stworzenia strony internetowej lub dokumentu, a na- stępnie przetestowanie tej strony internetowej lub dokumentu zgodnie z wymaganiami Rozdziałów 9 lub 10 w celu uzyskania całkowitej pewności, że szablon zachowuje się tak, jak jest to wymagane. C.12 Dokumentacja i wsparcie techniczne

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1 i 2: prawda |
| Niezaliczone | Kryterium 1 lub 2: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2. |


## C.12.1.1 - C.12.1.1 Funkcje dostępności i zgodności

### Warunki wstępne
1. 1. Dokumentacja produktu jest dostarczana razem z TIK .

### Procedura
1. 1. Sprawdź, czy w dokumentacji produktu dostarczonej razem z TIK znajduje się wykaz funkcji dostępności i kompatybilności TIK oraz objaśnienia dotyczące sposobu korzystania z nich.

### Typ oceny
Inspekcja

### Checklist
1. **Lista funkcji:** Sprawdź, czy w instrukcji lub pomocy jest rozdział poświęcony dostępności. Może to być np. 'Deklaracja Dostępności' lub strony pomocy.
1. **Zakres informacji:** Upewnij się, że opisane są zarówno funkcje wbudowane (np. zmiana kontrastu), jak i zgodność z technologiami asystującymi (np. czytnikami ekranu).
1. **Opis użycia:** Sprawdź, czy dokumentacja wyjaśnia, jak włączyć i korzystać z tych funkcji ułatwień.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.12.1.2 - C.12.1.2 Dostępność dokumentacji

### Warunki wstępne
1. 1. Dokumentacja produktu w formacie elektronicznym jest dostarczana razem z TIK .

### Procedura
1. 1. Sprawdź, czy dokumentacja produktu w formacie elektronicznym dostarczona wraz z TIK jest odpowiednio zgodna z wymaganiami Rozdziałów 9 lub 10.

### Typ oceny
Inspekcja

### Checklist
1. **Wersja dostępna:** Upewnij się, że istnieje przynajmniej jedna wersja dokumentacji, która jest dostępna cyfrowo (zgodna z WCAG). Inne wersje (np. drukowana) nie muszą być dostępne, o ile istnieje ta jedna poprawna.
1. **Dokumentacja wbudowana:** Jeśli dokumentacja jest częścią programu (np. system pomocy w aplikacji), ona również musi być dostępna.
1. **Formaty alternatywne:** Sprawdź, czy producent oferuje formaty dla specyficznych potrzeb (np. dokumenty w Braille'u lub w tekście łatwym do czytania) – jest to dobra praktyka.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.12.2.2 - C.12.2.2 Informacje o funkcjach dostępności i zgodności

### Warunki wstępne
1. 1. Świadczone są usługi wsparcia w zakresie TIK .

### Procedura
1. 1. Sprawdź, czy usługi wsparcia w zakresie TIK dostarczają informacje o funkcjach dostępności i zgodności dostarczanych razem z dokumentacją produktu.

### Typ oceny
Inspekcja

### Checklist
1. **Wiedza wsparcia:** Skontaktuj się z pomocą techniczną i zapytaj o funkcje dostępności produktu (zarówno te wbudowane, jak i współpracę z czytnikami ekranu).
1. **Udzielanie informacji:** Sprawdź, czy pracownicy wsparcia potrafią wskazać te funkcje w dokumentacji lub wyjaśnić ich działanie.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.12.2.3 - C.12.2.3 Efektywna komunikacja

### Warunki wstępne
1. 1. Świadczone są usługi wsparcia w zakresie TIK .

### Procedura
1. 1. Sprawdź, czy usługi wsparcia w zakresie TIK zaspokajają potrzeby komunikacyjne poszczególnych osób z niepełnosprawnościami w sposób bezpośredni lub poprzez punkt pośredni.

### Typ oceny
Inspekcja

### Checklist
1. **Kanały kontaktu:** Sprawdź, czy z pomocą techniczną można się skontaktować na różne sposoby (np. telefon, e-mail, czat, formularz).
1. **Dostosowanie:** Czy wsparcie jest w stanie obsłużyć osoby o różnych potrzebach (np. osoby niesłyszące, niewidome) bezpośrednio lub przekierowując do odpowiedniej usługi (np. tłumacza migowego).

### Notatki
1. Zapewnienie na dowolnym poziomie wsparcia dla potrzeb komunikacyjnych osób niepełnosprawnych stanowi podstawę tego wymagania. Dostawcy mogą chcieć dostarczyć dalsze informacje na temat pozio- mu wsparcia, który jest zapewniany, aby umożliwić ocenę adekwatności i jakości wsparcia.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.12.2.4 - C.12.2.4 Dostępność dokumentacji

### Warunki wstępne
1. 1. Dokumentacja jest dostarczana przez serwis obsługi TIK .

### Procedura
1. 1. Sprawdź, czy dokumentacja produktu w formie elektronicznej dostarczona przez serwis obsługi TIK jest zgodna z wymaganiami odpowiednio Rozdziałów 9 lub 10.

### Typ oceny
Inspekcja

### Checklist
1. **Materiały od wsparcia:** Jeśli pomoc techniczna przesyła dodatkowe instrukcje lub dokumenty, sprawdź czy przynajmniej jedna ich wersja jest dostępna cyfrowo (zgodna z WCAG).
1. **Dokumentacja wbudowana:** Jeśli wsparcie kieruje do pomocy wbudowanej w system, sprawdź czy ta pomoc jest dostępna.
1. **Formaty alternatywne:** Zapytaj, czy w razie potrzeby wsparcie może dostarczyć dokumentację w formatach alternatywnych (np. Braille, tekst łatwy do czytania).
1. **Konwersja:** Warto sprawdzić, czy dostarczane dokumenty pozwalają na łatwą konwersję (np. czytniki ekranu radzą sobie z ich strukturą).

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.13.1.2 - C.13.1.2 Usługi przekazu w trybie tekstowym

### Warunki wstępne
1. 1. Usługa polega na przekazywaniu tekstu.

### Procedura
1. 1. Sprawdź, czy usługa umożliwia interakcję między użytkownikami tekstu

### Typ oceny
Inspekcja

### Checklist
1. **Konwersja tekst-mowa:** Sprawdź, czy usługa umożliwia komunikację między osobą piszącą (tekst) a osobą mówiącą (głos), zamieniając tekst na mowę i odwrotnie.
1. **Interakcja:** Upewnij się, że konwersja działa w obu kierunkach, umożliwiając płynną rozmowę.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.13.1.3 - C.13.1.3 Usługi przekazu w trybie języka migowego

### Warunki wstępne
1. 1. Usługa polega na przekazywaniu znaków migowych.

### Procedura
1. 1. Sprawdź, czy usługa umożliwia interakcję między użytkownikami języka migowego a użytkownikami mowy poprzez konwersję między tymi dwoma trybami komunikacji.

### Typ oceny
Inspekcja

### Checklist
1. **Tłumacz migowy:** Sprawdź, czy usługa zapewnia udział tłumacza (wideo), który przekłada język migowy na mowę i odwrotnie.
1. **Jakość wideo:** Upewnij się, że jakość połączenia wideo jest wystarczająca do czytelnego odbioru znaków migowych.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.13.1.4 - C.13.1.4 Usługi odczytu z ruchu warg

### Warunki wstępne
1. 1. Usługa polega na czytaniu z ruchu warg.

### Procedura
1. 1. Sprawdź, czy usługa umożliwia interakcję między użytkownikami czytającymi z ruchu warg a użytkownikami telefonu głosowego poprzez konwersję między tymi dwoma trybami komunikacji.

### Typ oceny
Inspekcja

### Checklist
1. **Wsparcie czytania z ruchu warg:** Sprawdź, czy usługa umożliwia osobie czytającej z ruchu warg komunikację z użytkownikiem telefonu głosowego.
1. **Wideo:** Czy usługa zapewnia obraz wideo rozmówcy (lub tłumacza), który wyraźnie artykułuje słowa?

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.13.1.5 - C.13.1.5 Usługi telefonii z napisami

### Warunki wstępne
1. 1. Usługa jest usługą telefonii z napisami.

### Procedura
1. 1. Sprawdź, czy usługa zapewnia użytkownikom niesłyszącym i słabosłyszącym korzystającym z telefonu możliwość aktywnego uczestniczenia w rozmowie dzięki wyświetlaniu napisów tekstowych tłumaczących przychodzącą część rozmowy.

### Typ oceny
Inspekcja

### Checklist
1. **Napisy na żywo:** Sprawdź, czy podczas rozmowy głosowej wyświetlane są napisy (transkrypcja) tego, co mówi druga osoba.
1. **Synchronizacja:** Czy napisy pojawiają się z minimalnym opóźnieniem, pozwalając na płynną rozmowę?

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.13.1.6 - C.13.1.6 Usługi przekazu mowy na mowę

### Warunki wstępne
1. 1. Usługa jest usługą przekazywania mowy na mowę.

### Procedura
1. 1. Sprawdź, czy usługa umożliwia użytkownikom telefonów z niepełnosprawnościami mowy lub z niepełnosprawnościami poznawczymi, językowymi i trudnościami w nauce oraz każdemu innemu użytkownikowi komunikowanie się, zapewniając wsparcie.

### Typ oceny
Inspekcja

### Checklist
1. **Asystent mowy:** Sprawdź, czy usługa zapewnia wsparcie operatora, który powtarza lub parafrazuje wypowiedzi osoby z zaburzeniami mowy, aby były zrozumiałe dla rozmówcy.
1. **Dostępność:** Czy usługa jest dostępna dla osób z różnymi trudnościami w komunikacji werbalnej?

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1. |


## C.13.2 - C.13.2 Dostęp do usług przekazu informacji

### Warunki wstępne
1. 1. System TIK obsługuje komunikację dwukierunkową.
1. 2. Został określony zestaw usług przekazywania do obsługi komunikacji dwukierunkowej.

### Procedura
1. 1. Sprawdź, czy system nie uniemożliwia dostępu do tych usług przekazywania w odniesieniu do połączeń przychodzących i wychodzących.

### Typ oceny
Inspekcja

### Checklist
1. **Brak blokad:** Sprawdź, czy system telefoniczny/komunikacyjny nie blokuje połączeń z numerami usług przekazu (np. numerami specjalnymi dla osób niesłyszących).
1. **Obsługa typów połączeń:** Czy można dzwonić i odbierać połączenia głosowe, wideo lub tekstowe (RTT) z usług przekazu?

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2. |


## C.13.3 - C.13.3 Dostęp do usług awaryjnego przekazu informacji

### Warunki wstępne
1. 1. System TIK obsługuje komunikację dwukierunkową.
1. 2. Został określony zestaw usług ratowniczych do obsługi komunikacji.

### Procedura
1. 1. Sprawdź, czy system nie uniemożliwia dostępu do tych usług ratowniczych w odniesieniu do połączeń przychodzących i wychodzących.

### Typ oceny
Inspekcja

### Checklist
1. **Połączenia alarmowe:** Sprawdź, czy system pozwala na połączenie się ze służbami ratunkowymi (np. 112) przy użyciu dostępnych metod (głos, wideo, tekst/RTT).
1. **Brak barier:** Upewnij się, że konfiguracja sieci lub urządzenia nie uniemożliwia wezwania pomocy przez osoby korzystające z technologii wspomagających.

### Opcje testowe
| Wartość | Opis |
|---------|------|
| Zaliczone | Kryterium 1: prawda |
| Niezaliczone | Kryterium 1: fałsz |
| Nie dotyczy | Nie spełniono warunku wstępnego 1 lub 2. |


## U.7.1.1.a - U.7.1.1.a Więcej niż jeden zmysł (kanał sensoryczny) (Art. 7 ust. 1 pkt 1 lit. a)

### Procedura
1. Przepis ten wprowadza wymóg wielozmysłowego dostępu do informacji. Oznacza to, że żadna informacja dotycząca obsługi produktu, etykieta ani ostrzeżenie nie mogą być przekazywane wyłącznie za pomocą jednego zmysłu (np. tylko wzroku lub tylko słuchu).
Należy przyjąć dwie kluczowe zasady interpretacyjne:
- Informacje wizualne (tekst, ikony, diody, komunikaty na ekranie) muszą posiadać alternatywę dostępną dla słuchu (np. odczyt przez lektora) lub dotyku (np. wypukłe oznaczenia).
- Informacje dźwiękowe (sygnały ostrzegawcze, dźwięki błędów) muszą posiadać alternatywę wizualną (np. komunikat tekstowy, miganie elementu) lub dotykową (wibracje).
Celem regulacji jest zapewnienie możliwości obsługi urządzenia oraz odczytania ostrzeżeń niezależnie od tego, czy osoba korzystająca widzi, czy słyszy.

### Typ oceny
Inspekcja i testy technologii asystujących

### Checklist
1. **Sprawdzenie dotykowe**: Należy zweryfikować, czy przyciski i kluczowe elementy sterujące są możliwe do zidentyfikowania bez użycia wzroku (np. czy posiadają wypukłe symbole, grawerowanie lub oznaczenia w alfabecie Braille'a).
1. **Klawiatura numeryczna**: Jeśli urządzenie posiada klawiaturę fizyczną, należy sprawdzić, czy na klawiszu z cyfrą „5” znajduje się wyczuwalny dotykiem punkt lub kreska (punkt orientacyjny).
1. **Etykiety i tabliczki**: Należy sprawdzić, czy informacje na tabliczce znamionowej są dostępne w alternatywnej formie, np. poprzez kod QR lub tag NFC, który po zeskanowaniu telefonem umożliwia odczytanie treści głosem.
1. **Test wyjścia audio**: Jeżeli produkt ma wyjście audio, należy podłączyć słuchawki do gniazda audio (minijack) lub poprzez innych typowy interfejs (np. bluetooth). Należy zweryfikować, czy po podłączeniu urządzenie uruchamia tryb głosowy i czy wszystkie informacje wyświetlane na ekranie (np. ceny, opcje wyboru) są odczytywane przez syntezator mowy.
1. **Test komunikatów błędu**: Należy spróbować wywołać błąd w obsłudze. Należy sprawdzić, czy informacja o błędzie jest przekazywana zarówno wizualnie (komunikat), jak i dźwiękowo.
1. **Weryfikacja wizualna dźwięków**: W przypadku urządzeń emitujących dźwięki (np. sygnał zatwierdzenia), należy sprawdzić (przy wyciszonym dźwięku lub w stoperach), czy każdemu sygnałowi towarzyszy wyraźna reakcja wizualna na ekranie lub obudowie (np. mignięcie ramki, podświetlenie diody).
1. **Ważne**: Urządzenie posiadające ekran dotykowy, które nie jest wyposażone w fizyczne wyjście audio (gniazdo słuchawkowe) ani wbudowany głośnik z funkcją lektora, należy uznać za niezgodne z tym wymaganiem (brak alternatywnego kanału sensorycznego dla wzroku).


## U.7.1.1.b-01 - U.7.1.1.b-01 Zrozumiałość i zauważalność informacji (Art. 7 ust. 1 pkt 1 lit. b tiret 1)

### Procedura
1. Wymóg ten dotyczy sposobu prezentacji informacji tak, aby były one logiczne i możliwe do zinterpretowania przez każdego użytkownika. „Zrozumiałość i postrzegalność” w kontekście dostępności oznacza dwie rzeczy:
1. Lokalizacja i relacje: Informacja (np. etykieta) musi znajdować się w miejscu, które jednoznacznie wskazuje, czego dotyczy (np. napis „Start” musi być wyraźnie przypisany do konkretnego przycisku, zarówno wizualnie, jak i cyfrowo dla czytników ekranu).
2. Język i forma: Treść musi być przedstawiona w sposób umożliwiający jej poprawne odczytanie (np. odpowiednie kodowanie języka w menu cyfrowym, aby syntezator mowy użył właściwego akcentu, lub użycie powszechnie znanych symboli na obudowie).
Chodzi o to, aby użytkownik nie musiał zgadywać, który opis pasuje do którego elementu, oraz aby technologia asystująca mogła poprawnie przetworzyć treść etykiety.

### Typ oceny
Inspekcja

### Checklist
1. Weryfikacja fizyczna (Obudowa i przyciski):
- **Test bliskości**: Sprawdź, czy etykiety i symbole są umieszczone w bezpośrednim sąsiedztwie elementów sterujących (przycisków, pokręteł), których dotyczą. Czy jest jasne, że dany napis opisuje ten konkretny przycisk, a nie sąsiedni?
- **Test symboli**: Zweryfikuj, czy użyte ikony są standardowe i intuicyjne (np. standardowy symbol włącznika, a nie autorska grafika producenta).
1. Weryfikacja interfejsu cyfrowego (Menu na ekranie):
- **Test relacji (dla czytnika ekranu)**: Uruchom czytnik ekranu i nawiguj po menu. Sprawdź, czy po najechaniu na pole formularza lub przycisk, czytnik odczytuje jego etykietę (nazwę). Jeśli czytnik mówi tylko „przycisk” lub „pole edycji” bez nazwy, relacja nie jest zachowana.
- **Test języka**: Sprawdź, czy syntezator mowy czyta komunikaty poprawnie w języku polskim. Jeśli czyta polski tekst z angielskim akcentem (lub literuje), oznacza to, że język interfejsu nie został określony programowo i jest to błąd.
- **Test spójności**: Sprawdź, czy ta sama funkcja (np. „Pomoc” lub „Wstecz”) jest zawsze oznaczona tą samą ikoną i tym samym tekstem na każdym ekranie urządzenia.


## U.7.1.1.b-02 - U.7.1.1.b-02 Postrzegalność wizualna: Kontrast i Typografia (Art. 7 ust. 1 pkt 1 lit. b tiret 2)

### Procedura
1. Ten wymóg dotyczy czytelności napisów. Informacja jest bezużyteczna, jeśli użytkownik nie jest w stanie jej odczytać z powodu zbyt małych liter, bladego druku lub „zlewania się” tekstu.
Jako osoba sprawdzająca musisz zwrócić uwagę na trzy parametry:
1. Kontrast: Czy tekst wyraźnie „odcina się” od tła? (np. czarny tekst na białym tle jest czytelny, ale szary tekst na srebrnej obudowie – nie).
2. Rozmiar i krój: Czy litery są odpowiednio duże i mają prosty kształt? Wymóg ten uwzględnia „przewidywalne warunki użytkowania” – czyli np. to, że na ekran bankomatu patrzymy z większej odległości niż na telefon.
3. Odstępy: Czy litery i wiersze nie są upakowane zbyt ciasno? Odpowiednie światło między liniami ułatwia czytanie osobom słabowidzącym i osobom z dysleksją.
Wymóg dotyczy zarówno napisów nadrukowanych na obudowie (np. „Włóż kartę”), jak i treści wyświetlanych na ekranie urządzenia.

### Typ oceny
Inspekcja / Pomiary kontrastu

### Checklist
1. Jeśli sprawdzasz nadruki na obudowie (etykiety fizyczne):
- **Test widoczności**: Spójrz na urządzenie w typowym oświetleniu dla miejsca jego instalacji. Czy napisy są czytelne, czy może powierzchnia odbija światło (powoduje odblaski), co uniemożliwia odczyt?
- **Test kroju pisma**: Sprawdź, czy czcionka jest prosta (np. typu Arial, a nie ozdobna). Czy kształty liter są wyraźne i nie zlewają się ze sobą?
1. Jeśli sprawdzasz ekran urządzenia (np. bankomat, biletomat):
- **Pomiary kontrastu**: Jeśli masz możliwość wykonania zdjęcia lub zrzutu ekranu, użyj analizatora kontrastu (np. darmowej aplikacji mobilnej). Sprawdź, czy stosunek jasności tekstu do tła wynosi co najmniej 4,5:1 (dla małego tekstu).
- **Test powiększania (dla systemów otwartych)**: Sprawdź w ustawieniach, czy możesz powiększyć tekst (do 200%) bez utraty treści (tzn. tekst nie powinien „ucinać się” ani znikać poza ekranem).
- **Test wielkości „H” (dla systemów zamkniętych)**: Jeśli urządzenie nie pozwala na powiększanie tekstu (np. prosty wyświetlacz w automacie), musisz zmierzyć wielkość liter. Zmierz wysokość wielkiej litery „H”.
  - Zasada: Przy typowej odległości, z jakiej klient obsługuje urządzenie, litera musi być na tyle duża, by była widoczna pod kątem 0,7 stopnia.
  - Uproszczenie: Jeśli stoisz 50 cm od ekranu, litera „H” powinna mieć co najmniej 6,1 mm wysokości. Jeśli stoisz 40 cm – min. 4,9 mm.
1. **Ważne**: Jeśli tekst na ekranie jest blady, ma niski kontrast lub jest bardzo drobny i nie da się go powiększyć – oznacz wynik jako NEGATYWNY.


## U.7.1.2 - U.7.1.2 Dostępność instrukcji zewnętrznych (Art. 7 ust. 1 pkt 2)

### Procedura
1. Przepis ten reguluje sytuację, w której pełna instrukcja obsługi nie znajduje się bezpośrednio na produkcie (np. w menu urządzenia) ani nie została dołączona w formie drukowanej. W takim przypadku podmiot gospodarczy ma obowiązek udostępnić te informacje publicznie (np. na stronie internetowej).
Kluczowe są tutaj dwa powiązane wymagania:
1. Informacja o lokalizacji: Na samym produkcie lub jego opakowaniu musi znajdować się fizyczna informacja wskazująca, gdzie znaleźć instrukcję (np. adres strony www, kod QR). Informacja ta musi być trwała i czytelna.
2. Dostępność samej instrukcji: Dokument cyfrowy (np. plik PDF lub strona www), do którego odsyła informacja na opakowaniu, musi spełniać wymogi dostępności cyfrowej (być czytelny dla czytników ekranu, posiadać odpowiedni kontrast itp.).

### Typ oceny
Inspekcja

### Checklist
1. Inspekcja wizualna opakowania lub produktu:
- **Weryfikacja obecności informacji**: Należy sprawdzić, czy na obudowie urządzenia lub na jego opakowaniu znajduje się wyraźna informacja o miejscu pobrania instrukcji (np. „Instrukcja dostępna pod adresem: ...” lub kod QR).
- **Weryfikacja trwałości i czytelności**: Należy ocenić, czy nadruk jest trwały (nie ściera się pod wpływem dotyku) oraz czy zastosowano czcionkę o odpowiednim kontraście i wielkości, umożliwiającą odczytanie adresu osobom słabowidzącym (zgodnie z ogólną zasadą postrzegalności).
1. Weryfikacja cyfrowa (wskazanego źródła):
- **Dostępność adresu**: Należy wpisać adres URL z opakowania lub zeskanować kod QR i sprawdzić, czy prowadzi bezpośrednio do instrukcji (lub strony, gdzie łatwo ją znaleźć).
- **Dostępność dokumentu**: Należy pobrać instrukcję i sprawdzić, czy jest ona dostępna cyfrowo.
  - Czy tekst w dokumencie można zaznaczyć (nie jest skanem/obrazkiem)?
  - Czy grafiki i schematy w instrukcji posiadają opisy alternatywne (tekstowe wyjaśnienie co przedstawiają)
  - Czy dokument posiada logiczną strukturę nagłówków (Tytuł, Rozdziały), która ułatwia nawigację?
1. **Ważne**: Jeśli adres na opakowaniu prowadzi do instrukcji w formie skanu (obrazu) bez warstwy tekstowej, wymóg nie jest spełniony, ponieważ taka instrukcja jest nieczytelna dla osób niewidomych korzystających z syntezatorów mowy.


## U.7.1.2.a - U.7.1.2.a Spełnienie wymogów pkt 1 przez instrukcje (Art. 7 ust. 1 pkt 2 lit. a)

### Warunki wstępne
1. Instrukcja obsługi nie znajduje się na samym produkcie, lecz została udostępniona publicznie w inny sposób (np. jako plik PDF do pobrania lub treść na stronie internetowej).
1. Udało się zlokalizować tę instrukcję na podstawie informacji umieszczonej na opakowaniu lub produkcie (zgodnie z poprzednim krokiem kontroli).

### Procedura
1. Przepis ten przenosi wymagania dostępności z fizycznego urządzenia na jego cyfrową instrukcję obsługi (np. plik PDF, e-book lub stronę www). Oznacza to, że dokumentacja pobrana z internetu musi spełniać te same standardy czytelności i dostępności, co informacje na produkcie.
Kluczowe jest zapewnienie, aby dokument cyfrowy był uniwersalny:
- Dla osób niewidomych: Instrukcja nie może być „płaskim” skanem lub zdjęciem tekstu. Musi zawierać warstwę tekstową, którą oprogramowanie (czytnik ekranu) zamieni na mowę.
- Dla osób słabowidzących: Tekst w instrukcji musi być wyraźny (wysoki kontrast) i możliwy do powiększenia bez utraty jakości i konieczności przewijania ekranu w dwóch kierunkach (prawo-lewo).
- Zrozumiałość: Dokument musi posiadać logiczną strukturę (tytuły, nagłówki rozdziałów), która pozwala na nawigację bez konieczności czytania całości.

### Typ oceny
Inspekcja i Kontrola

### Checklist
1. **Test „zaznaczania” (Weryfikacja czytnika ekranu)**:
- Należy otworzyć instrukcję (np. PDF) i spróbować zaznaczyć myszką pojedyncze zdanie lub słowo.
- Jeśli tekstu nie da się zaznaczyć (zaznacza się cała strona jako obrazek) – dokument jest skanem i nie spełnia wymagań (jest niewidoczny dla technologii asystujących).
1. **Test obrazków (Alternatywa tekstowa)**:
- Należy sprawdzić, czy kluczowe ilustracje (np. schemat podłączenia kabli, rysunek przycisków) posiadają opis alternatywny (ukryty tekst wyjaśniający, co jest na obrazku). W programach biurowych/przeglądarkach PDF często widać to po najechaniu kursorem lub w właściwościach obrazu.
1. **Test powiększania**:
- Należy powiększyć dokument do 200%. Należy zweryfikować, czy tekst pozostaje ostry (nie „pikseluje się”) i czy w przypadku stron WWW tekst układa się w kolumnie, tak aby nie trzeba było przewijać ekranu w poziomie.
1. **Ważne**: Sama obecność instrukcji w internecie nie wystarcza. Jeśli plik jest technicznie niedostępny (np. nieotagowany PDF, skan), podmiot nie spełnia tego wymogu.


## U.7.1.2.b-01 - U.7.1.2.b-01 Alternatywna prezentacja treści nietekstowych w instrukcjach (Art. 7 ust. 1 pkt 2 lit. b tiret 1)

### Warunki wstępne
1. Instrukcje użytkowania są dostępne w formie cyfrowej (np. strona internetowa, plik PDF do pobrania), do której odsyła informacja na produkcie
1. Instrukcja zawiera elementy nietekstowe przekazujące informacje (np. zdjęcia produktu, schematy montażu, wykresy działania, ikony ostrzegawcze).

### Procedura
1. Wymóg ten zobowiązuje do zapewnienia tekstowego odpowiednika dla każdego elementu wizualnego znajdującego się w instrukcji. Chodzi o to, aby osoba niewidoma, korzystająca z czytnika ekranu, otrzymała te same informacje, co osoba widząca grafikę.
Kluczowe zasady interpretacji:
- Równoważność: Tekst alternatywny musi przekazywać sens i funkcję grafiki, a nie tylko jej opis wizualny (np. zamiast „czerwony trójkąt”, należy napisać „Uwaga: ryzyko oparzenia”).
- Dekoracje: Elementy czysto ozdobne (np. linie oddzielające, zdjęcia tła bez znaczenia merytorycznego) powinny być technicznie oznaczone jako ignorowane przez technologie asystujące (tzw. artefakty).
- Złożone grafiki: W przypadku skomplikowanych schematów lub wykresów, krótki tekst alternatywny powinien odsyłać do pełnego opisu znajdującego się w treści dokumentu.

### Typ oceny
Inspekcja i Kontrola

### Checklist
1. Weryfikacja obecności tekstu alternatywnego (Inspekcja techniczna)
- **Działanie**: W przypadku strony WWW – należy sprawdzić kod elementu graficznego (np. klikając prawym przyciskiem myszy „Zbadaj” i szukając atrybutu alt="..."). W przypadku dokumentu PDF – należy użyć narzędzia do sprawdzania dostępności (np. w programie Adobe Acrobat Pro lub darmowym czytniku z funkcją inspekcji tagów) i sprawdzić właściwości obrazka.
- **Kryterium sukcesu**: Każda grafika niosąca treść posiada przypisany tekst alternatywny. Grafiki dekoracyjne mają pusty atrybut alt (alt="") lub są oznaczone jako artefakty.
1. Weryfikacja jakości opisu (Ocena merytoryczna)
- **Działanie**: Należy porównać treść widoczną na obrazku z treścią ukrytego tekstu alternatywnego.
- **Pytania pomocnicze**:
  - Czy opis wyjaśnia, co przedstawia obrazek w kontekście instrukcji (np. „Schemat podłączenia kabla zasilającego do gniazda A”)?
  - Czy w przypadku wykresu, tekst alternatywny zawiera dane lub wnioski z tego wykresu, czy tylko informację „Wykres wydajności”? (Opis „Wykres” jest niewystarczający).
- **Kryterium sukcesu**: Tekst alternatywny pozwala zrozumieć sens grafiki bez jej oglądania.
1. Weryfikacja grafik złożonych
- **Działanie**: Jeśli instrukcja zawiera skomplikowane schematy blokowe lub infografiki.
- **Sprawdzenie**: Należy zweryfikować, czy w pobliżu grafiki znajduje się jej pełny opis tekstowy lub czy tekst alternatywny odsyła do miejsca w dokumencie, gdzie taki opis się znajduje. Sama krótka etykieta dla złożonego schematu jest niewystarczająca.


## U.7.1.2.b-02 - U.7.1.2.b-02 Opis sposobu obsługi (interfejsu) produktu w instrukcjach (Art. 7 ust. 1 pkt 2 lit. b tiret 2)

### Warunki wstępne
1. Instrukcje użytkowania są dostępne w formie cyfrowej (np. strona internetowa, plik PDF), do której odsyła informacja na opakowaniu lub produkcie.
1. Produkt posiada interfejs użytkownika (elementy sterujące, wyświetlacz, menu, sygnały dźwiękowe/świetlne).

### Procedura
1. Wymóg ten zobowiązuje podmiot gospodarczy do zapewnienia w dokumentacji cyfrowej kompletnego opisu sposobu obsługi urządzenia. Użytkownik, który nie ma fizycznego dostępu do urządzenia w momencie czytania instrukcji (lub nie może go zobaczyć), musi być w stanie zbudować sobie „mentalną mapę” interfejsu na podstawie samego tekstu.
Opis ten nie może ograniczać się tylko do listy przycisków. Musi wyjaśniać:
- Anatomię produktu: Gdzie znajdują się poszczególne elementy sterujące i jak je rozpoznać (np. „okrągły przycisk po prawej stronie”).
- Funkcjonalność: Do czego służy dany element i jak wywołuje się funkcje (np. krótkie vs długie naciśnięcie).
- Informację zwrotną: Co oznaczają konkretne sygnały wysyłane przez urządzenie (np. dioda migająca na czerwono, potrójny sygnał dźwiękowy).
Jest to kluczowe dla osób niewidomych, które muszą poznać układ urządzenia przed rozpoczęciem jego obsługi.

### Typ oceny
Inspekcja

### Checklist
1. Weryfikacja opisu elementów sterujących:
- **Działanie**: Należy odszukać sekcję „Opis urządzenia”, „Budowa” lub „Rozmieszczenie przycisków”.
- **Sprawdzenie**: Czy instrukcja zawiera opis lokalizacji i funkcji wszystkich fizycznych przycisków, pokręteł, portów i złącz?
- **Kryterium jakości**: Czy opis pozwala zidentyfikować przycisk bez patrzenia na niego (np. czy wspomina o wypukłościach, kształcie lub pozycji względem innych elementów)?
1. Weryfikacja opisu interfejsu cyfrowego (Menu)
- **Działanie**: Jeśli produkt posiada ekran, należy sprawdzić opis menu.
- **Sprawdzenie**: Czy struktura menu (kolejność opcji, sposób nawigacji, sposób zatwierdzania i cofania) jest opisana w sposób logiczny?
- **Kryterium sukcesu**: Instrukcja wyjaśnia strukturę menu w sposób umożliwiający nawigację osobie, która nie widzi ekranu i korzysta z czytnika (np. „Użyj strzałek góra/dół, aby wybrać opcję, naciśnij OK, aby wejść”).
1. Weryfikacja opisu sygnałów zwrotnych
- **Działanie**: Należy odszukać opis diod LED, sygnałów dźwiękowych lub wibracji.
- **Sprawdzenie**: Czy instrukcja wyjaśnia znaczenie każdego sygnału, który urządzenie może wyemitować (np. „Ciągły sygnał oznacza błąd krytyczny”)?
1. **Ważne**: Opis ten jest niezbędny dla osób niesłyszących (aby wiedziały, co oznacza migająca dioda) i niewidomych (aby wiedziały, co oznacza dźwięk).


## U.7.1.2.b-03 - U.7.1.2.b-03 Informacje o dostępności i wdrożonych rozwiązaniach w instrukcjach (Art. 7 ust. 1 pkt 2 lit. b tiret 3)

### Warunki wstępne
1. Instrukcje użytkowania są dostępne w formie cyfrowej (np. strona internetowa, plik PDF), do której odsyła informacja na opakowaniu lub produkcie.
1. Produkt posiada funkcje lub cechy wspierające dostępność (co wynika z wymogów Art. 8–11, np. obsługę bez wzroku, obsługę bez użycia rąk).

### Procedura
1. Wymóg ten nakłada na producenta obowiązek stworzenia w instrukcji sekcji poświęconej dostępności. Dokumentacja nie może ograniczać się do stwierdzenia „produkt jest dostępny”. Musi ona precyzyjnie wyjaśniać użytkownikowi:
1. Które potrzeby są zaspokojone: Czy produkt jest dostosowany do osób niewidomych? Czy ma rozwiązania dla osób słabosłyszących? (Odwołanie do Art. 8–11).
2. Jakie konkretne rozwiązania zastosowano: Np. „Urządzenie posiada gniazdo słuchawkowe do obsługi głosowej” albo „Klawiatura posiada wypustkę na klawiszu 5”.
3. Jak z nich korzystać: Instrukcja musi pełnić rolę przewodnika po funkcjach dostępności, wyjaśniając krok po kroku, jak uruchomić i obsługiwać tryby asystujące.
Celem jest zapewnienie, aby użytkownik ze szczególnymi potrzebami wiedział, że produkt jest dla niego odpowiedni i potrafił uruchomić niezbędne mu funkcje bez metody prób i błędów.

### Typ oceny
Inspekcja

### Checklist
1. Identyfikacja sekcji dostępności:
- **Działanie**: Należy przeszukać spis treści lub dokument pod kątem słów kluczowych, np.: „Dostępność”, „Ułatwienia dostępu”, „Accessibility”, „Dla osób niepełnosprawnych”.
- **Sprawdzenie**: Czy dokumentacja zawiera wyodrębnioną część lub wyraźne fragmenty opisujące funkcje dostępności?
1. Weryfikacja opisu rozwiązań (Powiązanie z Art. 8–11):
- **Działanie**: Należy sprawdzić, czy instrukcja wymienia konkretne cechy produktu odpowiadające na wymogi ustawowe.
- **Przykłady weryfikacji**:
  - Jeśli produkt obsługuje mowę (Art. 8 pkt 1 lit. b) – czy instrukcja opisuje komendy głosowe?
  - Jeśli produkt ma tryb wysokiego kontrastu (Art. 8 pkt 1 lit. c) – czy jest informacja o jego istnieniu?
  - Jeśli produkt ma gniazdo słuchawkowe (Art. 9) – czy instrukcja informuje, że służy ono do prywatnego odsłuchu menu?
1. Weryfikacja instrukcji obsługi funkcji:
- **Działanie**: Należy sprawdzić, czy opis nie jest tylko listą funkcji, ale zawiera instrukcję ich użycia.
- **Sprawdzenie**: Czy instrukcja wyjaśnia, jak aktywować daną funkcję?
  - Błędny opis: „Produkt posiada funkcję czytnika ekranu.”
  - Poprawny opis: „Aby włączyć czytnik ekranu, naciśnij i przytrzymaj przycisk Menu przez 3 sekundy.”
1. Informacje o kompatybilności
- Działanie: Jeśli produkt współpracuje z zewnętrznymi technologiami asystującymi (np. aparaty słuchowe, zewnętrzne czytniki ekranu), należy sprawdzić, czy instrukcja o tym informuje.
- Sprawdzenie: Czy wymieniono standardy lub nazwy oprogramowania, z którymi produkt został przetestowany?


## U.7.1.2.c - U.7.1.2.c Formaty tekstowe instrukcji umożliwiające wspomaganą komunikację (Art. 7 ust. 1 pkt 2 lit. c)

### Warunki wstępne
1. Instrukcje użytkowania są dostępne w formie cyfrowej (np. plik do pobrania, strona www).
1. Format pliku umożliwia przechowywanie danych tekstowych (np. PDF, HTML, DOCX, EPUB), a nie tylko graficznych (jak np. JPG, TIFF).

### Procedura
1. Wymóg ten wykracza poza standardową obsługę czytników ekranu dla osób niewidomych. Dotyczy on zapewnienia interoperacyjności treści instrukcji z oprogramowaniem AAC (Alternative and Augmentative Communication). Oprogramowanie to jest używane przez osoby, które mają trudności z mówieniem lub rozumieniem języka pisanego (np. po udarze, osoby z afazją).
Aby oprogramowanie AAC mogło przetworzyć instrukcję (np. zamienić tekst na sekwencję symboli graficznych lub piktogramów, uprościć składnię lub odczytać treść specyficznym głosem syntezatora), dokument musi spełniać dwa techniczne warunki (zgodnie z mapowaniem w Arkuszu Kontrolnym):
1. Musi być tekstem, a nie obrazem: Komputer musi „widzieć” znaki, aby móc je przetłumaczyć na symbole.
2. Musi mieć zdefiniowany język: Program musi wiedzieć, czy przetwarza język polski, czy angielski, aby dobrać odpowiedni zestaw symboli i reguł gramatycznych.
3. Musi być solidny technicznie: Struktura dokumentu musi być poprawna kodowo, aby zewnętrzne oprogramowanie mogło pobrać treść bez błędów.

### Typ oceny
Inspekcja i Kontrola Dostępności Cyfrowej

### Checklist
1. Weryfikacja warstwy tekstowej (Selekcja)
- **Działanie**: Należy otworzyć instrukcję i spróbować zaznaczyć myszką dowolny fragment tekstu, a następnie skopiować go i wkleić do notatnika.
- **Sprawdzenie**: Czy wklejony tekst jest czytelny i poprawny (zawiera polskie znaki, spacje)?
- **Interpretacja**: Jeśli tekstu nie da się zaznaczyć lub po wklejeniu pojawiają się „krzaki” (błędy kodowania), format nie jest tekstowy lub jest uszkodzony. Uniemożliwia to pracę oprogramowania AAC.
1. Weryfikacja określenia języka
- **Działanie**: Należy sprawdzić właściwości dokumentu (np. w PDF: Plik -> Właściwości -> Zaawansowane -> Opcje czytania; w HTML: atrybut lang w kodzie strony).
- **Sprawdzenie**: Czy język dokumentu jest zdefiniowany programowo i zgodny z treścią (np. „pl” lub „Polish” dla instrukcji po polsku)?
- **Interpretacja**: Brak zdefiniowanego języka jest błędem krytycznym dla narzędzi AAC, które mogą próbować czytać polski tekst przy użyciu angielskich reguł wymowy lub słowników symboli.
1. Weryfikacja dostępności formatu dla zewnętrznych narzędzi
- **Działanie**: Należy sprawdzić, czy plik nie posiada zabezpieczeń DRM lub haseł blokujących „kopiowanie treści dla dostępności” (ang. content copying for accessibility).
- **Sprawdzenie**: W ustawieniach zabezpieczeń pliku (np. PDF) należy zweryfikować, czy opcja kopiowania zawartości jest dozwolona.
- **Interpretacja**: Zablokowanie możliwości kopiowania tekstu uniemożliwia oprogramowaniu wspomagającemu pobranie treści w celu jej przetworzenia (np. zamiany na symbole).


## U.7.1.2.d - U.7.1.2.d Współpraca (interoperacyjność) instrukcji z narzędziami wspomagającymi (Art. 7 ust. 1 pkt 2 lit. d)

### Warunki wstępne
1. Instrukcje użytkowania są dostępne w formie cyfrowej (np. strona internetowa, plik PDF), do której odsyła informacja na opakowaniu lub produkcie.
1. Produkt posiada interfejsy (fizyczne lub programowe) umożliwiające podłączenie zewnętrznych urządzeń lub oprogramowania (np. port USB, Bluetooth, system operacyjny obsługujący zewnętrzne czytniki ekranu).

### Procedura
1. Wymóg ten nakłada na podmiot gospodarczy obowiązek zapewnienia precyzyjnej informacji o kompatybilności. Użytkownik korzystający z technologii asystującej (AT – np. linijka brajlowska, specyficzny czytnik ekranu, sterowanie wzrokiem) musi wiedzieć przed zakupem lub użyciem, czy jego sprzęt zadziała z danym produktem.
Dokumentacja musi zawierać dwa konkretne elementy (zgodnie z klauzulą C.12.1.1):
1. Opis techniczny połączenia: Wyjaśnienie, w jaki sposób produkt łączy się z AT. Może to być opis fizycznych portów (np. "Gniazdo minijack obsługuje pętlę indukcyjną") lub opis interfejsów programowych (np. "Aplikacja wykorzystuje standardowe API dostępności systemu Android").
2. Wykaz przetestowanych rozwiązań: Producent nie może poprzestać na ogólnym stwierdzeniu "współpracuje z czytnikami ekranu". Musi wymienić konkretne nazwy i wersje oprogramowania lub sprzętu, które zostały zweryfikowane w toku testów (np. "Przetestowano z NVDA wersja 2023.1 oraz JAWS wersja 2023").
Brak tych informacji zmusza użytkownika do zgadywania lub testowania produktu metodą prób i błędów, co jest niezgodne z ustawą.

### Typ oceny
Inspekcja i Test Funkcjonalny

### Checklist
1. Weryfikacja opisu interfejsów (Sprzęt i Software)
- **Działanie**: Należy odszukać w instrukcji sekcje "Dane techniczne", "Łączność", "Dostępność" lub "Wymagania systemowe".
- **Sprawdzenie**: Czy znajduje się tam opis standardów wykorzystywanych do łączności z AT?
  - Przykład dla sprzętu: Czy wskazano, że gniazdo audio 3,5 mm obsługuje standardowe zestawy słuchawkowe lub pętle indukcyjne?
  - Przykład dla oprogramowania: Czy wskazano, że aplikacja korzysta z usług dostępności (Accessibility Services) danego systemu operacyjnego?
1. Weryfikacja wykazu przetestowanych narzędzi
- **Działanie**: Należy sprawdzić, czy dokumentacja zawiera listę konkretnych produktów wspomagających.
- **Sprawdzenie**:
  - Czy wymieniono nazwy własne narzędzi (np. "NVDA", "VoiceOver", "TalkBack")?
  - Czy podano wersje tych narzędzi? (Informacja o wersji jest kluczowa, ponieważ kompatybilność może zmieniać się wraz z aktualizacjami).
  - Czy lista jest przedstawiona jako zamknięty katalog ("Przetestowano z...")?
1. **Ważne**: Ogólne stwierdzenia typu "Produkt jest zgodny z popularnymi czytnikami ekranu" bez podania konkretnych nazw i wersji nie spełniają wymogu dostarczenia wykazu narzędzi, które były testowane razem z produktem.


## U.7.1.3 - U.7.1.3 Instrukcje instalacji, konserwacji, przechowywania i pozbywania się (Art. 7 ust. 1 pkt 3)

### Warunki wstępne
1. Produkt nie jest terminalem (np. bankomatem, wpłatomatem, automatem biletowym) – zgodnie z Art. 7 ust. 2 ustawy, terminale są zwolnione z tego konkretnego wymogu.
1. Instrukcje dotyczące cyklu życia produktu (instalacja, serwis, utylizacja) nie zostały dołączone do produktu w formie fizycznej, lecz są udostępnione cyfrowo (np. na stronie www).

### Procedura
1. Przepis ten dotyczy dokumentacji technicznej towarzyszącej produktowi, która obejmuje instalację, konserwację, przechowywanie i utylizację. Jeśli producent decyduje się nie drukować tych instrukcji, lecz udostępnić je w internecie (np. jako PDF do pobrania), musi zapewnić ich pełną dostępność cyfrową.
Ustawodawca precyzuje, że te konkretne dokumenty muszą spełniać wybrane wymogi dostępności:
1. Dostępność sensoryczna (Pkt 1): Dokument musi być czytelny dla różnych zmysłów (np. wzrok i słuch poprzez czytnik ekranu). Tekst musi mieć odpowiedni kontrast, krój czcionki i odstępy.
2. Alternatywa dla grafik (Pkt 2 lit. b tiret pierwsze): Wszystkie schematy montażowe, rysunki konserwacyjne czy ikony ostrzegawcze dotyczące utylizacji muszą posiadać opis tekstowy (tekst alternatywny).
1. 3. Format tekstowy dla AAC (Pkt 2 lit. c): Plik musi być technicznie przygotowany tak, aby oprogramowanie do komunikacji alternatywnej mogło przetworzyć jego treść (nie może to być skan, musi mieć zdefiniowany język).
1. Uwaga: W przeciwieństwie do głównej instrukcji obsługi, te dokumenty nie muszą zawierać opisu interfejsu użytkownika ani deklaracji zgodności z Art. 8–11 (chyba że wynika to z innych przepisów).

### Typ oceny
Inspekcja i Kontrola Dostępności

### Checklist
1. Weryfikacja informacji o dostępie (Inspekcja fizyczna)
- **Działanie**: Należy obejrzeć produkt i jego opakowanie.
- **Sprawdzenie**: Czy znajduje się tam trwała informacja (np. adres URL, kod QR) wskazująca, gdzie można pobrać instrukcję instalacji/konserwacji?
- **Wymóg**: Informacja ta musi być czytelna (odpowiedni kontrast, wielkość czcionki).
1. Weryfikacja dostępności pliku.
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


## U.7.1.4 - U.7.1.4 Dostępność informacji na opakowaniu produktu (Art. 7 ust. 1 pkt 4)

### Warunki wstępne
1. Produkt nie jest terminalem (np. bankomatem, wpłatomatem, automatem biletowym) – zgodnie z Art. 7 ust. 2 ustawy, terminale są zwolnione z wymogów dotyczących opakowania.
1. Produkt posiada opakowanie, na którym umieszczono informacje tekstowe (etykiety, instrukcje skrócone, ostrzeżenia).

### Procedura
1. Wymóg ten rozszerza zasady dostępności informacji o produkcie (opisane w Art. 7 ust. 1 pkt 1) na jego fizyczne opakowanie. Oznacza to, że informacje nadrukowane na pudełku, folii lub etykiecie zewnętrznej nie mogą dyskryminować użytkowników ze względu na ich możliwości sensoryczne.
Ponieważ norma EN 301 549 dotyczy technologii cyfrowych (ICT), a nie druku na kartonie, weryfikacja tego punktu opiera się na Kryteriach Funkcjonalnych oraz analogii do dokumentacji:
1. Wielozmysłowość: Jeśli na opakowaniu jest ważna informacja (np. ostrzeżenie o alergenach, wymagania systemowe), musi być ona dostępna nie tylko wzrokowo. W praktyce realizuje się to często poprzez kod QR lub tag NFC prowadzący do dostępnej wersji cyfrowej, rzadziej przez napisy w alfabecie Braille'a.
2. Czytelność (Postrzegalność): Tekst na opakowaniu musi mieć wysoki kontrast i odpowiednią wielkość, aby był czytelny dla osób słabowidzących i starszych.
3. Zrozumiałość: Informacje muszą być sformułowane w sposób prosty, a układ graficzny nie może wprowadzać w błąd co do zawartości.

### Typ oceny
Inspekcja

### Checklist
1. Inspekcja wizualna czytelności (Kontrast i Czcionka)
- **Działanie**: Należy ocenić tekst nadrukowany na opakowaniu w warunkach oświetleniowych typowych dla sklepu lub domu.
- **Sprawdzenie**:
  - Czy tekst posiada wysoki kontrast względem tła (np. unikanie jasnoszarego druku na białym kartonie)?
  - Czy powierzchnia opakowania nie jest zbyt błyszcząca (laminowana), co powodowałoby odblaski uniemożliwiające odczytanie treści pod pewnym kątem?
  - Czy zastosowano czcionkę bezszeryfową o wielkości umożliwiającej odczyt bez lupy?
1. Weryfikacja kanału alternatywnego (mechanizmu przekierowania do dostępnej wersji cyfrowej):
- **Uzasadnienie**: Ponieważ opakowanie fizyczne rzadko „mówi”, kluczowe jest sprawdzenie, czy odsyła ono do dostępnej wersji cyfrowej (zgodnie z ideą wielokanałowości).
- **Działanie**: Należy poszukać na opakowaniu kodu QR, tagu NFC lub wyraźnego adresu strony internetowej oznaczonego jako źródło informacji o produkcie.
- **Sprawdzenie**:
  - Czy kod/adres jest łatwy do znalezienia i zeskanowania?
  - Czy po zeskanowaniu kodu użytkownik trafia bezpośrednio do treści, która jest dostępna cyfrowo (np. strony HTML spełniającej WCAG lub dostępnego PDF)?
  - **Uwaga**: Jeśli opakowanie nie posiada żadnego elementu umożliwiającego szybkie dotarcie do treści w formie cyfrowej (dostępnej dla czytników ekranu) i nie zawiera napisów w Braille'u, wymóg wielokanałowości (Art. 7 ust. 1 pkt 1 lit. a) może zostać uznany za niespełniony.
1. Weryfikacja informacji o dostępności
- **Działanie**: Należy sprawdzić, czy na opakowaniu znajduje się informacja o cechach dostępności produktu (jeśli dotyczy).
- **Sprawdzenie**: Czy zastosowano standardowe ikony lub proste komunikaty (np. „Produkt zgodny z aparatami słuchowymi”, „Menu głosowe”)?


## U.8.0.1.a - U.8.0.1.a Rozwiązania alternatywne dla komunikacji (Art. 8 pkt 1 lit. a)

### Warunki wstępne
1. Produkt posiada funkcję dwukierunkowej komunikacji (np. jest telefonem, wideofonem, systemem domofonowym, aplikacją do rozmów głosowych/wideo lub kioskiem z funkcją „połącz z konsultantem”).

### Procedura
1. Wymóg ten nakazuje, aby kluczowa funkcja produktu, jaką jest komunikacja, nie wykluczała użytkowników ze względu na brak jednego ze zmysłów (wzroku, słuchu, dotyku) lub zdolności mowy. Produkt musi oferować zamienniki (alternatywy) dla każdego kanału komunikacji:
1. Dla wzroku: Jeśli interfejs pokazuje status połączenia lub wideo, musi to być również ogłaszane głosowo (dla niewidomych).
2. Dla słuchu: Jeśli produkt przekazuje głos rozmówcy lub sygnały dźwiękowe, musi oferować tekst (np. napisy, czat w czasie rzeczywistym) lub sygnały wizualne (dla niesłyszących).
3. Dla mowy: Jeśli produkt wymaga mówienia do mikrofonu, musi pozwalać na pisanie tekstu, który zostanie przesłany w czasie rzeczywistym (dla osób niemówiących).
4. Dla dotyku: Jeśli obsługa wymaga precyzyjnych gestów dotykowych, musi istnieć alternatywa głosowa lub uproszczona obsługa mechaniczna.

### Typ oceny
Inspekcja i Testy funkcjonalne

### Checklist
1. Weryfikacja alternatywy dla wzroku (Dla osób niewidomych):
- **Test wyjścia audio**: Należy sprawdzić, czy informacje wizualne związane z połączeniem (np. „Dzwoni numer X”, „Połączenie zakończone”, „Wideo włączone”) są odczytywane przez technologię mowy (syntezator) lub dostępne w inny sposób bez użycia wzroku.
- **Test rozpoznawania dotykowego**: Należy zweryfikować, czy fizyczne elementy służące do odbierania/kończenia rozmowy są rozpoznawalne dotykiem (np. mają inny kształt lub wypukłe oznaczenia).
1. Weryfikacja alternatywy dla słuchu (Dla osób niesłyszących):
- **Test wskaźnika aktywności audio**: Podczas połączenia należy sprawdzić, czy na ekranie znajduje się wizualny wskaźnik informujący, że ktoś właśnie mówi (np. migająca ikona mikrofonu lub podświetlenie awatara). Jest to kluczowe, aby osoba niesłysząca wiedziała, że druga strona nadaje komunikat.
- **Test wizualizacji sygnałów**: Należy sprawdzić, czy dźwięki informacyjne (np. sygnał zajętości, dzwonek przychodzący) mają swój odpowiednik wizualny (np. komunikat na ekranie, miganie diody).
1. Weryfikacja alternatywy dla mowy (Dla osób niemówiących):
- **Test Tekstu w Czasie Rzeczywistym - RTT**: Należy sprawdzić, czy podczas połączenia głosowego istnieje możliwość pisania tekstu, który jest przesyłany i wyświetlany u odbiorcy na bieżąco (znak po znaku lub natychmiastowo), co pozwala na płynną „rozmowę” tekstową zamiast głosowej.
- **Test obsługi bez mowy**: Należy zweryfikować, czy nawiązanie i odebranie połączenia jest możliwe bez wydawania komend głosowych.
1. Weryfikacja alternatywy dla dotyku:
- **Test statusu**: Jeśli produkt posiada przyciski, których stan zmienia się pod wpływem dotyku (np. wciśnięty przycisk „Mute”), należy sprawdzić, czy informacja o tym stanie (Włączony/Wyłączony) jest dostępna nie tylko przez dotyk, ale także wizualnie lub dźwiękowo.


## U.8.0.1.b - U.8.0.1.b Rozwiązania alternatywne dla mowy (Art. 8 pkt 1 lit. b)

### Warunki wstępne
1. Produkt posiada funkcje wymagające od użytkownika użycia głosu (np. sterowanie komendami głosowymi, autoryzacja głosowa, konieczność mówienia podczas połączenia, interakcja z asystentem głosowym).

### Procedura
1. Wymóg ten dotyczy zapewnienia obsługi urządzenia osobom, które nie mogą mówić, mają niewyraźną mowę lub znajdują się w sytuacji uniemożliwiającej wydawanie komend głosowych (np. w bibliotece lub w hałasie).

Należy zweryfikować, czy produkt nie wymusza użycia aparatu mowy jako jedynego kanału interakcji:
1.  **Sterowanie i obsługa:** Jeśli urządzenie reaguje na komendy głosowe (np. "Włącz światło"), musi istnieć alternatywny sposób wywołania tej samej funkcji (np. przycisk fizyczny, panel dotykowy, klawiatura).
2.  **Komunikacja:** Jeśli produkt służy do komunikacji (np. telefon, domofon), musi umożliwiać przekazanie informacji bez użycia głosu (np. poprzez tekst, wybór opcji z menu).
3.  **Orientacja i nawigacja:** Jeśli system prosi o podanie celu podróży głosowo, musi umożliwiać również jego wpisanie.

Kluczowe jest, aby interfejs "Voice First" (najpierw głos) nie był interfejsem "Voice Only" (tylko głos).

### Typ oceny
Inspekcja i Testy funkcjonalne

### Checklist
1. Weryfikacja sterowania bez użycia mowy (Funkcjonalność zamknięta)
- **Warunek:** Produkt posiada funkcję sterowania głosowego (np. kiosk informacyjny z asystentem głosowym).
- **Działanie:** Należy spróbować obsłużyć urządzenie bez wydawania żadnych dźwięków.
- **Sprawdzenie:** Czy każdą funkcję, którą można uruchomić głosem, da się również uruchomić alternatywnym mechanizmem (np. dotykiem, klawiaturą, gestem)?
- **Kryterium sukcesu:** Istnieje tryb pracy niewymagający mowy.
1. Weryfikacja alternatyw dla usług głosowych (Komunikacja)
- **Warunek:** Produkt oferuje dwukierunkową komunikację głosową, pocztę głosową lub system IVR (automatyczne menu głosowe).
- **Działanie:** Należy nawiązać połączenie lub wejść w interakcję z systemem.
- **Sprawdzenie:**
  - Czy w systemie IVR można wybierać opcje za pomocą klawiatury (tonowo), zamiast wypowiadać hasła?
  - Czy produkt umożliwia komunikację tekstową (np. czat, SMS, RTT) jako zamiennik rozmowy głosowej?
- **Kryterium sukcesu:** Użytkownik może uzyskać dostęp do informacji i wykonać zadania bez użycia mowy.
1. Weryfikacja wprowadzania danych (Klawiatura)**
- **Warunek:** Aplikacja zachęca do dyktowania treści (np. wyszukiwanie głosowe).
- **Działanie:** Należy sprawdzić, czy zawsze dostępna jest opcja przełączenia na klawiaturę ekranową lub fizyczną.
- **Ważne:** Jeśli jedynym sposobem wprowadzenia danych jest mikrofon (brak pola tekstowego), produkt **nie spełnia** wymagań.


## U.8.0.1.c - U.8.0.1.c Rozwiązania dla elementów wizualnych (Art. 8 pkt 1 lit. c)

### Warunki wstępne
1. Produkt posiada interfejs wizualny (ekran, wyświetlacz, diody) przekazujący informacje niezbędne do jego obsługi.

### Procedura
1. Wymóg ten koncentruje się na potrzebach osób słabowidzących (które potrzebują powiększenia i kontrastu) oraz osób niewidomych (które potrzebują nawigacji bezwzrokowej). Przepis łączy w sobie cechy interfejsu graficznego z techniczną kompatybilnością.

Należy zweryfikować produkt w trzech obszarach:
1.  **Dostosowanie wyglądu (Wyrazistość):** Użytkownik musi mieć możliwość zmiany parametrów obrazu tak, aby był on dla niego czytelny. Obejmuje to powiększanie tekstu, zmianę kontrastu oraz dostosowanie jasności (często poprzez respektowanie ustawień systemowych urządzenia).
2.  **Interoperacyjność (Współpraca):** Produkt nie może być "czarną skrzynką" dla technologii asystujących. Musi udostępniać informacje o swoim interfejsie (nazwy przycisków, ich stan) zewnętrznym programom, takim jak czytniki ekranu.
3.  **Nawigacja:** Interfejs musi pozwalać na poruszanie się po nim w sposób logiczny i widoczny, co jest kluczowe dla osób korzystających z klawiatury lub programów sterujących.

### Typ oceny
Inspekcja i Testy funkcjonalne

### Checklist
1. Powiększanie i Wyrazistość (Dla osób słabowidzących)
- **Dla oprogramowania/stron WWW:** Należy sprawdzić, czy tekst można powiększyć do **200%** bez utraty treści i funkcjonalności. Przy powiększeniu tekst nie powinien nakładać się na siebie, a użytkownik nie powinien być zmuszony do przewijania ekranu w dwóch wymiarach (poziomo i pionowo), aby przeczytać jedną linię.
- **Dla systemów zamkniętych (np. biletomat bez zoomu):** Należy zmierzyć wysokość wielkiej litery „H”. Musi ona być na tyle duża, aby przy typowej odległości obsługi była widoczna pod kątem co najmniej 0,7 stopnia (rekompensata braku funkcji zoom).
1. Kontrast i Jasność
- **Pomiary kontrastu:** Należy sprawdzić, czy stosunek jasności tekstu do tła wynosi co najmniej **4,5:1** (dla małego tekstu).
- **Test preferencji systemowych:** Należy zmienić ustawienia urządzenia (systemu operacyjnego) na „Wysoki kontrast” lub „Tryb ciemny” oraz zmienić jasność ekranu. Należy zweryfikować, czy aplikacja/produkt reaguje na te zmiany i dostosowuje swój wygląd, czy też ignoruje ustawienia użytkownika (co jest błędem).
1. Interoperacyjność (Dla czytników ekranu)
- **Działanie:** Należy uruchomić popularny czytnik ekranu (np. NVDA, TalkBack, VoiceOver).
- **Sprawdzenie:** Czy czytnik rozpoznaje wszystkie elementy interfejsu? Czy odczytuje ich:
    - **Nazwę** (np. "Przycisk Szukaj"),
    - **Rolę** (np. "Przycisk"),
    - **Wartość/Stan** (np. "Wciśnięty" lub wpisany tekst).
- **Interpretacja:** Jeśli czytnik mówi tylko "przycisk" lub milczy przy najechaniu na element, wymóg interoperacyjności **nie jest spełniony**.
1. Nawigacja i Fokus
- **Widoczny fokus:** Należy nawigować po interfejsie za pomocą klawiatury (Tab/Strzałki). Czy widać ramkę lub podświetlenie wskazujące, który element jest aktualnie wybrany?
- **Logiczna kolejność:** Czy fokus przeskakuje po elementach w kolejności, która ma sens (np. od lewej do prawej, z góry na dół), czy skacze chaotycznie?


## U.8.0.1.d - U.8.0.1.d Rozwiązania alternatywne dla kolorów (Art. 8 pkt 1 lit. d)

### Warunki wstępne
1. Produkt posiada elementy (fizyczne lub cyfrowe), które zmieniają barwę lub wykorzystują konkretny kolor do zakodowania znaczenia (np. czerwona dioda oznaczająca błąd, zielony przycisk oznaczający "Start", wykres kołowy z różnokolorowymi sekcjami).

### Procedura
1. Wymóg ten wynika z potrzeby zapewnienia dostępności dla osób z zaburzeniami rozpoznawania barw (daltonizm) oraz osób korzystających z urządzeń z wyświetlaczami monochromatycznymi lub w trybie wysokiego kontrastu.

Należy interpretować ten przepis przez pryzmat zasady **podwójnego kodowania informacji**:
1.  **Nie tylko kolor:** Barwa nigdy nie może być jedynym wyróżnikiem informacji wizualnej. Jeśli usuniemy kolor (zmienimy obraz na czarno-biały), informacja nadal musi być zrozumiała.
2.  **Alternatywy:** Informacja przekazywana kolorem musi być równolegle przekazywana za pomocą:
    -   **Tekstu** (np. etykieta "Błąd" obok czerwonego pola),
    -   **Kształtu lub wzoru** (np. linia przerywana na wykresie zamiast tylko czerwonej linii),
    -   **Symbolu** (np. ikona wykrzyknika).

### Typ oceny
Inspekcja i Testy funkcjonalne

### Checklist
1. Weryfikacja w skali szarości (Dla oprogramowania i ekranów)
- **Działanie:** Należy zmienić ustawienia wyświetlacza lub systemu operacyjnego na "Skalę szarości" (Grayscale) lub wydrukować zrzut ekranu na drukarce czarno-białej.
- **Sprawdzenie:**
    -   Czy nadal widać, które pole formularza zawiera błąd? (Sama czerwona ramka to za mało; wymagana jest ikona lub tekst).
    -   Czy legendy wykresów są czytelne? (Czy da się przyporządkować opis do słupka/wycinka bez koloru?).
    -   Czy odnośniki w tekście (linki) różnią się od zwykłego tekstu czymś więcej niż kolorem (np. podkreśleniem, pogrubieniem lub ikoną)?
1. Weryfikacja elementów fizycznych (Dla sprzętu)
- **Działanie:** Należy zidentyfikować wskaźniki świetlne (diody LED) lub przyciski oznaczone kolorami.
- **Sprawdzenie:**
    -   Czy dioda oznaczająca "Włączony" i "Błąd" różni się tylko kolorem (np. zielona vs czerwona w tym samym miejscu)? Jeśli tak – jest to błąd. Dioda powinna dodatkowo mieć inny opis, inną pozycję lub inny tryb świecenia (np. ciągły vs migający).
    -   Czy przyciski o różnych funkcjach są rozróżnialne tylko po kolorze (np. "Naciśnij zielony, aby zatwierdzić")? Jeśli przycisk nie ma opisu tekstowego lub symbolu (np. "OK", "X"), wymóg **nie jest spełniony**.
1. Wyróżnianie elementów (Fokus i Zaznaczenie)
- **Sprawdzenie:** Należy nawigować po elementach interfejsu (np. lista opcji). Czy element wybrany różni się od niewybranego tylko kolorem tła? Należy zweryfikować, czy zastosowano dodatkowy wskaźnik (np. obramowanie, pogrubienie tekstu, "ptaszek" zaznaczenia).


## U.8.0.1.e - U.8.0.1.e Rozwiązania alternatywne dla dźwięków (Art. 8 pkt 1 lit. e)

### Warunki wstępne
1. Produkt emituje dźwięki, które niosą ze sobą konkretną informację (np. sygnał błędu, dzwonek połączenia, komunikat "proszę wyjąć kartę").
1. Nie dotyczy to dźwięków będących treścią samą w sobie (np. piosenka w odtwarzaczu), lecz dźwięków interfejsu (sygnałów statusu).

### Procedura
1. Wymóg ten jest kluczowy dla osób niesłyszących i słabosłyszących. Każda informacja przekazywana przez produkt drogą słuchową musi być jednocześnie dostępna drogą wzrokową (lub dotykową).
Zasada podwójnego kanału informacyjnego oznacza, że:
1. **Ekwiwalentność**: Jeśli urządzenie piszczy, musi też "mrugać" lub wyświetlać komunikat. Informacja wizualna musi pojawiać się w tym samym czasie co dźwięk.
2. **Komunikatywność**: Sygnał wizualny musi być zrozumiały. Jeśli dźwięk oznacza "błąd", to mrugająca dioda też musi być jednoznacznie kojarzona z błędem (np. poprzez etykietę lub kolor, pamiętając o wymogach z lit. d).
Weryfikacja opiera się na sprawdzeniu, czy po wyciszeniu urządzenia (lub przez osobę niesłyszącą) nadal można odebrać wszystkie komunikaty systemowe.

### Typ oceny
Inspekcja i Testy funkcjonalne

### Checklist
1. Weryfikacja wizualizacji sygnałów statusu (Funkcjonalność zamknięta)
- **Działanie**: Należy doprowadzić do sytuacji, w której urządzenie emituje dźwięk ostrzegawczy lub informacyjny (np. zostawić otwarte drzwiczki, wpisać błędny PIN, nie odebrać gotówki przez chwilę).
- **Sprawdzenie**: Czy w momencie pojawienia się dźwięku:
  - Pojawia się komunikat tekstowy na ekranie?
  - Miga dioda LED lub podświetlenie ekranu?
- Interpretacja: Jeśli urządzenie tylko wydaje dźwięk (np. "bip-bip"), a na ekranie nic się nie zmienia – wynik jest NEGATYWNY.
1. Wskaźnik aktywności audio (Komunikacja)
- **Warunek**: Produkt służy do rozmów głosowych/wideo.
- **Działanie**: Należy nawiązać połączenie i poprosić rozmówcę o mówienie.
- **Sprawdzenie**: Czy na ekranie widać, że dźwięk jest odbierany? (np. animacja fal głosowych, podświetlenie awatara osoby mówiącej, ikona głośnika).
- **Cel**: Osoba niesłysząca musi wiedzieć, że ktoś do niej mówi, aby np. spojrzeć na tłumacza języka migowego lub napisy.
1. Alternatywy dla usług głosowych
- **Sprawdzenie**: Jeśli produkt posiada automatyczne menu głosowe (np. "Aby połączyć się z serwisem, powiedz SERWIS"), czy istnieje opcja wybrania tego samego na ekranie lub klawiaturze numerycznej, bez konieczności słuchania poleceń?


## U.8.0.1.f - U.8.0.1.f Sterowanie elementami dźwiękowymi (Art. 8 pkt 1 lit. f)

### Warunki wstępne
1. Produkt emituje dźwięk (mowę, sygnały audio) i posiada funkcje sterowania tym dźwiękiem.

### Procedura
1. Wymóg ten koncentruje się na jakości i sterowalności sygnału audio, co jest kluczowe dla osób słabosłyszących oraz osób z zaburzeniami przetwarzania słuchowego. Użytkownik musi mieć kontrolę nad tym, co słyszy, a sam dźwięk musi być wysokiej jakości.

Ustawodawca wskazuje na cztery aspekty:
1.  **Głośność:** Użytkownik musi mieć możliwość znacznego podgłośnienia dźwięku (aby skompensować ubytek słuchu).
2.  **Szybkość:** Choć norma EN 301 549 nie zawiera bezpośredniego testu dla "szybkości odtwarzania" w ogólnym TIK (poza odtwarzaczami multimediów), wymóg ten należy rozumieć jako konieczność zapewnienia, by komunikaty nie były odtwarzane zbyt szybko lub by istniała możliwość ich powtórzenia/spowolnienia.
3.  **Redukcja zakłóceń:** Produkt nie powinien "dokładać" własnych szumów ani zbierać zakłóceń z otoczenia, które utrudniałyby zrozumienie mowy (np. przez słuchawkę).
4.  **Wyrazistość:** Dźwięk mowy musi obejmować szerokie pasmo częstotliwości, aby głoski były rozróżnialne.

### Typ oceny
Inspekcja i Testy funkcjonalne

### Checklist
1. Weryfikacja zakresu głośności (Dla sprzętu i systemów zamkniętych)
- **Działanie:** Należy sprawdzić zakres regulacji głośności mowy.
- **Sprawdzenie:**
    - Czy urządzenie umożliwia wzmocnienie dźwięku do poziomu co najmniej **65 dBA** (dla systemów zamkniętych)?
    - Czy zakres regulacji wynosi co najmniej **18 dB** (dla sprzętu telekomunikacyjnego)?
    - Czy po zakończeniu sesji głośność wraca do poziomu bezpiecznego (domyślnego), aby nie ogłuszyć kolejnego użytkownika?
1. Weryfikacja wyrazistości dźwięku (Jakość pasma)
- **Warunek:** Produkt służy do dwukierunkowej komunikacji głosowej.
- **Sprawdzenie:** Czy produkt koduje i dekoduje dźwięk w paśmie częstotliwości co najmniej do **7 000 Hz** (standard HD Voice)? Jest to niezbędne dla rozróżnialności spółgłosek (np. "s" vs "f"), co jest kluczowe dla osób słabosłyszących.
1. Niezależna kontrola dźwięku (Dla oprogramowania)
- **Sprawdzenie:** Jeśli aplikacja odtwarza dźwięk automatycznie przez ponad 3 sekundy, czy użytkownik ma mechanizm do jego zatrzymania lub niezależnej regulacji głośności (niezależnie od głośności systemu), aby nie zagłuszał on np. czytnika ekranu?


## U.8.0.1.g - U.8.0.1.g Sterowanie ręczne i precyzyjne ruchy (motoryka mała) (Art. 8 pkt 1 lit. g)

### Warunki wstępne
1. Produkt posiada elementy sterujące wymagające fizycznej interakcji (przyciski, ekrany dotykowe, dźwignie).

### Procedura
1. Wymóg ten dotyczy dostępności dla osób z niepełnosprawnością ruchową (motoryczną). Obsługa urządzenia nie może wymagać dużej precyzji, siły ani koordynacji obu rąk.

Kluczowe zasady:
1.  **Sterowanie sekwencyjne:** Każdą czynność musi dać się wykonać "krok po kroku", a nie "wszystko naraz" (unikanie wielodotyku).
2.  **Motoryka mała:** Nie wolno wymagać gestów precyzyjnych, takich jak szczypanie, skręcanie nadgarstka czy mocne chwytanie.
3.  **Jeden przełącznik:** Nie wolno wymagać jednoczesnego wciskania dwóch przycisków (np. "Ctrl+Alt+Del" musi mieć alternatywę).
4.  **Rozróżnialność dotykowa:** Przyciski muszą różnić się od siebie w dotyku, aby osoba niewidoma lub mająca problem z kontrolą wzrokową ręki mogła je zidentyfikować.

### Typ oceny
Inspekcja i Testy funkcjonalne

### Checklist
1. Weryfikacja gestów i chwytu (Środki obsługi)
- **Działanie:** Należy spróbować wykonać wszystkie zadania na urządzeniu używając tylko jednego palca (lub rysika) lub zaciśniętej pięści (bez użycia palców).
- **Sprawdzenie:**
    - Czy są wymagane gesty wielopunktowe (np. "uszczypnij, by powiększyć")? Jeśli tak, czy istnieje przycisk "+" robiący to samo jednym kliknięciem?
    - Czy obsługa wymaga mocnego chwytania i przekręcania (np. gałka obrotowa o dużym oporze)? Jeśli tak – wynik **NEGATYWNY**.
1. Weryfikacja jednoczesnych czynności
- **Sprawdzenie:** Czy istnieje jakakolwiek funkcja wymagająca wciśnięcia dwóch przycisków naraz (np. "Przytrzymaj A i naciśnij B")? Jeśli tak, czy istnieje tryb (np. Klawisze trwałe/Sticky Keys), który pozwala wcisnąć je po kolei?
1. Weryfikacja rozróżnialności dotykowej
- **Działanie:** Należy zamknąć oczy i dotknąć panelu sterowania.
- **Sprawdzenie:**
    - Czy przyciski są wyczuwalne pod palcem (wypukłe/wklęsłe), czy jest to płaski panel dotykowy? Płaski panel bez oznaczeń dotykowych **nie spełnia** tego wymogu (chyba że jest udźwiękowiony).
    - Czy na klawiaturze numerycznej (jeśli występuje) klawisz "5" ma wyczuwalną wypustkę?


## U.8.0.2 - U.8.0.2 Wymagania ogólne interfejsu - ruchy i siła (Art. 8 pkt 2)

### Warunki wstępne
1. Produkt jest urządzeniem stacjonarnym (np. bankomat, biletomat, kiosk informacyjny), do którego użytkownik musi fizycznie podejść.
1. Produkt posiada elementy mechaniczne wymagające obsługi (przyciski, dźwignie, sloty na karty).
1. Produkt jest oprogramowaniem działającym na urządzeniu mobilnym (w kontekście wymuszania orientacji ekranu).

### Procedura
1. Wymóg ten definiuje fizyczne granice interakcji z urządzeniem, mając na celu zapewnienie dostępności dla osób poruszających się na wózkach inwalidzkich, osób niskiego wzrostu oraz osób o osłabionej sile mięśniowej.

Pojęcia "duży zasięg" i "duża siła" są w normie EN 301 549 ściśle sparametryzowane:
1.  **Ograniczenie zasięgu (Wymiary):** Elementy sterujące muszą znajdować się w strefie dostępnej dla osoby siedzącej. Norma określa maksymalną wysokość (sięganie w górę) oraz minimalną wysokość (sięganie w dół), aby uniknąć konieczności wstawania, kucania lub nadmiernego wychylania się.
2.  **Ograniczenie siły (Dynamika):** Obsługa przycisków, ekranów dotykowych czy wkładanie karty nie może wymagać siły, która byłaby barierą dla osoby starszej lub osłabionej.
3.  **Orientacja (Oprogramowanie):** W przypadku aplikacji mobilnych, wymóg braku konieczności wykonywania "ruchów o dużym zasięgu" interpretuje się również jako brak wymuszania obracania urządzenia (zmiany orientacji), co może być trudne dla osób z urządzeniem zamontowanym na stałe, np. do wózka.

### Typ oceny
Inspekcja i Testy funkcjonalne

### Checklist
1. Pomiary zasięgu (Dla urządzeń stacjonarnych)
- **Działanie:** Należy zmierzyć wysokość umieszczenia najwyższego i najniższego elementu sterującego (przycisku, otworu na kartę, ekranu dotykowego) od poziomu podłoża.
- **Weryfikacja (Dostęp bez przeszkód):**
    - Czy najwyższy element znajduje się nie wyżej niż **1220 mm** nad podłożem?
    - Czy najniższy element znajduje się nie niżej niż **380 mm** nad podłożem?
- **Interpretacja:** Przekroczenie tych wartości oznacza, że tryb pracy wymaga ruchów o "dużym zasięgu", co jest niezgodne z ustawą (chyba że urządzenie posiada tryb alternatywny sterowany np. głosem lub smartfonem, który nie wymaga sięgania).
1. Pomiar siły nacisku (Dla elementów mechanicznych)
- **Działanie:** Należy użyć siłomierza lub wykonać test organoleptyczny na przyciskach, klawiszach i elementach ruchomych.
- **Weryfikacja:** Czy siła potrzebna do aktywacji elementu (np. wciśnięcia przycisku) nie przekracza **22,2 N**?
- **Interpretacja:** Jeśli przycisk stawia duży opór lub wymaga mocnego uderzenia, produkt nie spełnia wymagania.
1. Weryfikacja orientacji ekranu (Dla oprogramowania)
- **Działanie:** Należy uruchomić aplikację na tablecie lub smartfonie zamontowanym w uchwycie (symulacja montażu na wózku).
- **Sprawdzenie:** Czy treść aplikacji dostosowuje się zarówno do orientacji pionowej, jak i poziomej?
- **Błąd:** Jeśli aplikacja wymusza obrócenie urządzenia o 90 stopni, aby uzyskać dostęp do funkcji, narusza to wymóg unikania zbędnych ruchów fizycznych.


## U.8.0.3 - U.8.0.3 Ograniczenie ataków padaczki wywołanych światłem (fotogennej) (Art. 8 pkt 3)

### Warunki wstępne
1. Produkt posiada wyświetlacz lub elementy świetlne, które mogą migać, pulsować lub wyświetlać dynamiczne treści (wideo, animacje, reklamy).

### Procedura
1. Wymóg ten jest krytyczny dla bezpieczeństwa zdrowotnego użytkowników. Treści wizualne, które migają z określoną częstotliwością, mogą wywołać napad drgawkowy u osób cierpiących na padaczkę fotogenną.

Zgodnie z normą **EN 301 549**, wymóg ten mapuje się na klauzule:
- **C.9.2.3.1** (dla stron WWW),
- **C.10.2.3.1** (dla dokumentów),
- **C.11.2.3.1** (dla oprogramowania).

Wszystkie te klauzule odsyłają do kryterium sukcesu **WCAG 2.1 – 2.3.1 (Trzy błyski lub wartości poniżej progu)**. Oznacza to, że żaden element nie może błyskać częściej niż 3 razy na sekundę, chyba że błysk jest bardzo mały (poniżej określonego progu powierzchni) lub ma niski kontrast/nasycenie czerwieni.

### Typ oceny
Inspekcja i Testy funkcjonalne

### Checklist
1. Weryfikacja częstotliwości błysków:
- **Działanie:** Należy zidentyfikować wszystkie elementy, które migają, pulsują lub zmieniają jasność w sposób gwałtowny (np. reklamy, powiadomienia o błędach, animacje ładowania, filmy).
- **Sprawdzenie:** Czy element błyska częściej niż **3 razy w ciągu jednej sekundy**?
- **Analiza szczegółowa:**
    - Jeśli element błyska rzadziej (np. raz na 2 sekundy) – wynik **POZYTYWNY**.
    - Jeśli element błyska szybko (efekt stroboskopowy) – wynik **NEGATYWNY**, chyba że spełnia wyjątki dotyczące małej powierzchni określone w WCAG (np. jest mniejszy niż 25% 10-stopniowego pola widzenia centralnego).
- **Uwaga:** Szczególną uwagę należy zwrócić na błyski w kolorze czerwonym, które są najbardziej niebezpieczne dla układu nerwowego.


## U.8.0.4 - U.8.0.4 Ochrona prywatności przy funkcjach dostępności (Art. 8 pkt 4)

### Warunki wstępne
1. Produkt przetwarza dane, które są uznawane za prywatne (np. PIN, hasła, saldo konta, dane osobowe, treść korespondencji).
1. Produkt posiada funkcje dostępności (np. wyjście głosowe dla osób niewidomych).

### Procedura
1. Wymóg ten ma na celu zapobieżenie sytuacji, w której osoba ze szczególnymi potrzebami jest zmuszona do ujawnienia swoich danych osobom postronnym, aby móc skorzystać z urządzenia (np. bankomat głośno odczytujący PIN).

Zgodnie z normą **EN 301 549** (rozdział 5.1.3), ochrona prywatności w kontekście dostępności realizowana jest poprzez trzy mechanizmy:
1.  **Maskowanie danych wejściowych:** Jeśli na ekranie hasło jest ukryte (gwiazdki), to syntezator mowy nie może go głośno wypowiadać przez głośnik główny.
2.  **Prywatny odsłuch:** Dane wrażliwe mogą być odczytywane głosowo tylko wtedy, gdy użytkownik korzysta z mechanizmu indywidualnego słuchania (np. słuchawek).
3.  **Kontrola głośności:** Użytkownik musi mieć możliwość przyciszenia słuchawki, aby dźwięk nie był słyszalny dla osób postronnych.

### Typ oceny
Inspekcja i Testy funkcjonalne

### Checklist
1. Weryfikacja wejścia maskowanego (Hasła i PIN)
- **Działanie:** Należy uruchomić tryb głosowy (np. czytnik ekranu) i wprowadzić dane w pole, które wizualnie maskuje znaki (wyświetla kropki/gwiazdki).
- **Sprawdzenie:**
    - Czy urządzenie wypowiada wpisywane znaki (np. "jeden, dwa, trzy") przez głośnik główny? – Jeśli tak, wynik **NEGATYWNY**.
    - Czy urządzenie wypowiada słowo "gwiazdka" lub wydaje sygnał dźwiękowy (bip) zamiast cyfry? – Jeśli tak, wynik **POZYTYWNY**.
    - *Wyjątek:* Urządzenie może wypowiadać znaki, jeśli podłączono słuchawki (mechanizm indywidualnego słuchania).
1. Prywatny dostęp do danych osobowych
- **Działanie:** Należy wywołać funkcję prezentującą dane prywatne (np. stan konta, PESEL).
- **Sprawdzenie:** Czy te informacje są słyszalne przez głośnik zewnętrzny urządzenia?
- **Kryterium sukcesu:** Dane prywatne powinny być przekazywane głosowo wyłącznie przez słuchawki (lub słuchawkę telefoniczną). Jeśli nie podłączono słuchawek, urządzenie powinno milczeć lub prosić o ich podłączenie.
1. Głośność odsłuchu prywatnego
- **Działanie:** Podłączyć słuchawki.
- **Sprawdzenie:** Czy istnieje możliwość regulacji głośności w słuchawkach? Jest to konieczne, aby zapobiec wyciekowi dźwięku.


## U.8.0.5.a - U.8.0.5.a Rozwiązania alternatywne dla identyfikacji biometrycznej (Art. 8 pkt 5 lit. a)

### Warunki wstępne
1. Produkt wykorzystuje cechy biologiczne użytkownika (np. odcisk palca, skan twarzy, głos, tęczówkę oka) do identyfikacji (logowania) lub sterowania urządzeniem.

### Procedura
1. Wymóg ten wynika z faktu, że niektórzy użytkownicy mogą nie posiadać określonych cech biologicznych (np. brak palców, brak gałek ocznych) lub cechy te mogą być zniekształcone (np. zatarte linie papilarne, zmiany głosu).

Zgodnie z klauzulą **C.5.3-1** normy EN 301 549, nie wolno wykorzystywać tylko jednej cechy biologicznej jako jedynego sposobu identyfikacji lub kontroli. Należy zapewnić alternatywę.

Alternatywą tą może być:
1.  **Metoda niebiometryczna:** Np. kod PIN, hasło, klucz fizyczny, karta RFID. Jest to rozwiązanie zalecane, gdyż uniezależnia obsługę od cech fizycznych użytkownika.
2.  **Inna metoda biometryczna:** Np. jeśli podstawową metodą jest odcisk palca, alternatywą może być skan twarzy lub rozpoznawanie głosu. Norma wskazuje, że zastosowanie odmiennych cech biologicznych zwiększa prawdopodobieństwo, że osoba z niepełnosprawnością będzie mogła skorzystać z przynajmniej jednej z nich.

### Typ oceny
Inspekcja i Testy funkcjonalne

### Checklist
1. Weryfikacja alternatyw dla biometrii
- **Działanie:** Należy zidentyfikować funkcję wymagającą biometrii (np. odblokowanie ekranu odciskiem palca).
- **Sprawdzenie:** Czy istnieje sposób na wykonanie tej samej czynności bez użycia tej konkretnej cechy biologicznej?
    - Czy system pozwala wpisać kod PIN lub hasło zamiast przykładać palec?
    - Czy system pozwala użyć innej cechy (np. twarzy zamiast palca)?
- **Interpretacja:** Jeśli jedynym sposobem dostępu jest konkretna cecha biometryczna (brak alternatywy), wynik testu jest **NEGATYWNY**.


## U.8.0.5.b - U.8.0.5.b Spójność funkcji (Art. 8 pkt 5 lit. b)

### Procedura
1. Wymóg spójności funkcji w kontekście dostępności należy interpretować jako obowiązek zapewnienia **ciągłości działania** narzędzi i ustawień, z których korzysta użytkownik. Produkt nie działa w próżni – funkcjonuje w ramach systemu operacyjnego lub platformy (np. Windows, Android, iOS, terminal płatniczy).

Spójność oznacza tu brak konfliktu między produktem a środowiskiem użytkownika:
1.  **Ciągłość narzędzi asystujących:** Jeżeli użytkownik uruchomił systemowe narzędzie dostępności (np. lupę, czytnik ekranu, sterowanie głosem) przed włączeniem produktu, narzędzie to musi kontynuować działanie po uruchomieniu produktu. Produkt nie może wymuszać wyłączenia tych narzędzi ani przerywać ich pracy.
2.  **Spójność z platformą:** Produkt powinien zachowywać się w sposób przewidywalny dla danego środowiska, nie blokując funkcji systemowych, na których polega użytkownik (np. systemowych gestów powiększania).

Naruszeniem spójności jest sytuacja, w której uruchomienie aplikacji powoduje "wyrzucenie" lub zablokowanie działających w tle usług dostępności, zmuszając użytkownika do ich ponownej konfiguracji lub uniemożliwiając mu obsługę.

### Typ oceny
Inspekcja i Testy funkcjonalne

### Checklist
1. Weryfikacja ciągłości działania funkcji dostępności
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


## U.8.0.5.c - U.8.0.5.c Czas na reakcję (Art. 8 pkt 5 lit. c)

### Warunki wstępne
1. Produkt posiada funkcje ograniczone czasowo (np. automatyczne wylogowanie po okresie bezczynności, komunikat znikający po kilku sekundach, limit czasu na wprowadzenie danych).

### Procedura
1. Wymóg ten wynika z faktu, że użytkownicy z niepełnosprawnością ruchową, wzrokową lub poznawczą potrzebują więcej czasu na przeczytanie treści, zrozumienie jej i wykonanie interakcji (np. odnalezienie kursora, wpisanie tekstu). Pojęcie "wystarczająco długi czas" nie jest subiektywne – norma techniczna precyzuje, że użytkownik musi mieć kontrolę nad tym czasem.

Zgodnie z normą EN 301 549 (klauzule dotyczące „Dostosowania czasu”), produkt spełnia ten wymóg, jeśli oferuje **przynajmniej jedną** z poniższych możliwości:
1.  **Wyłączenie:** Użytkownik może całkowicie wyłączyć limit czasowy przed jego rozpoczęciem.
2.  **Dostosowanie:** Użytkownik może samodzielnie zmienić długość limitu czasowego w ustawieniach (musi istnieć możliwość wydłużenia go co najmniej **10-krotnie** względem wartości domyślnej).
3.  **Wydłużenie (Ostrzeżenie):** System ostrzega użytkownika przed upływem czasu i daje mu co najmniej **20 sekund** na wykonanie prostej czynności (np. naciśnięcie spacji), która wydłuży czas sesji (również co najmniej 10-krotnie).

**Wyjątki:** Wymóg nie dotyczy sytuacji, w których limit czasu jest istotą działania (np. aukcje w czasie rzeczywistym) lub gdy limit jest bardzo długi (powyżej 20 godzin).

### Typ oceny
Inspekcja i Testy funkcjonalne

### Checklist
1. Weryfikacja ustawień (Dostosowanie/Wyłączenie)
- **Działanie:** Należy przejść do ustawień produktu (sekcja "Dostępność", "Bezpieczeństwo" lub "Ogólne").
- **Sprawdzenie:**
    - Czy istnieje opcja wyłączenia limitów czasowych (np. "Nigdy nie wylogowuj")?
    - Czy istnieje suwak lub pole pozwalające wydłużyć czas sesji? Jeśli domyślny czas to 1 minuta, czy można go ustawić na 10 minut lub więcej?
1. Weryfikacja ostrzeżenia o upływie czasu (Wydłużenie)
- **Działanie:** Należy pozostawić produkt w stanie bezczynności i poczekać na moment, w którym ma nastąpić wygaszenie sesji lub anulowanie operacji.
- **Sprawdzenie:**
    - Czy przed upływem czasu pojawia się komunikat ostrzegawczy?
    - Czy komunikat daje użytkownikowi co najmniej **20 sekund** na reakcję?
    - Czy wykonanie prostej akcji (np. kliknięcie "Przedłuż") powoduje zresetowanie licznika i przyznanie dodatkowego czasu?
- **Interpretacja:** Jeśli sesja wygasa nagle, bez ostrzeżenia, a użytkownik traci wprowadzone dane – wynik testu jest **NEGATYWNY**.
1. Weryfikacja komunikatów znikających
- **Działanie:** Należy wywołać komunikat systemowy (np. "Zapisano zmiany", "Błąd połączenia"), który znika automatycznie.
- **Sprawdzenie:** Czy użytkownik ma czas na przeczytanie komunikatu? Czy istnieje sposób na zatrzymanie jego znikania lub przywołanie go w historii powiadomień? Zbyt szybkie znikanie treści narusza ten wymóg.


## U.8.0.5.d - U.8.0.5.d Łączenie z narzędziami wspomagającymi (Art. 8 pkt 5 lit. d)

### Warunki wstępne
1. Produkt jest urządzeniem cyfrowym (sprzętem) lub oprogramowaniem, które może być używane z zewnętrznymi technologiami asystującymi (AT), takimi jak czytniki ekranu, linijki brajlowskie, przełączniki (switche) czy klawiatury alternatywne.

### Procedura
1. Wymóg ten dotyczy interoperacyjności (współdziałania). Produkt nie musi mieć wbudowanych wszystkich możliwych funkcji dostępności, ale musi pozwalać na podłączenie i poprawne działanie specjalistycznego sprzętu i oprogramowania, którego używa osoba z niepełnosprawnością.
Analizę należy podzielić na dwa obszary:
1. Sprzęt (Hardware): Produkt musi posiadać standardowe porty i złącza (np. USB, gniazdo audio minijack, Bluetooth), które nie są blokowane dla urządzeń asystujących. Nie może wymagać stosowania niestandardowych, autorskich adapterów, które są niedostępne na rynku.
2. Oprogramowanie (Software): Aplikacja musi udostępniać informacje o swoim interfejsie (nazwy przycisków, rolę elementów, ich stan) poprzez standardowe API dostępności systemu operacyjnego (np. Accessibility API w Androidzie, UI Automation w Windows). Dzięki temu zewnętrzny czytnik ekranu "wie", co znajduje się na ekranie.

### Typ oceny
Inspekcja i Testy funkcjonalne

### Checklist
1. Weryfikacja złącz fizycznych (Sprzęt)
- **Działanie**: Należy obejrzeć obudowę urządzenia.
- **Sprawdzenie**:
  - Czy urządzenie posiada standardowe gniazdo słuchawkowe (np. 3.5 mm) lub obsługuje standard audio Bluetooth/USB? Jest to niezbędne dla osób niewidomych (prywatny odsłuch) i słabosłyszących (pętle indukcyjne).
  - Czy porty USB (jeśli służą do obsługi) akceptują standardowe klawiatury zewnętrzne?
1. Weryfikacja API Dostępności (Oprogramowanie)
- **Działanie**: Należy uruchomić na urządzeniu popularne narzędzie wspomagające (np. czytnik ekranu NVDA na Windows, TalkBack na Androidzie, VoiceOver na iOS).
- **Sprawdzenie**:
  - Czy po uruchomieniu aplikacji produktu, czytnik ekranu potrafi odczytać nazwy przycisków i pól edycyjnych?
  - Czy fokus (ramka zaznaczenia) podąża za elementami interfejsu?
- **Interpretacja**: Jeśli czytnik ekranu milczy lub mówi tylko "nieznany element", oznacza to, że oprogramowanie nie udostępnia danych do API dostępności i nie spełnia wymogu łączenia się z narzędziami wspomagającymi.


## U.9.01.01 - U.9.01.01 Synteza mowy w terminalu (Art. 9 ust. 1 pkt 1)

### Warunki wstępne
1. Produkt jest **terminalem** w rozumieniu Art. 3 ust. 1 pkt 2 ustawy (np. bankomat, wpłatomat, automat biletowy, urządzenie do odprawy, kiosk informacyjny).
1. Terminal posiada interfejs użytkownika (wyświetla treści, które wymagają odczytania).

### Procedura
1. Terminal samoobsługowy jest traktowany jako urządzenie o **funkcjonalności zamkniętej** (Closed Functionality). Użytkownik nie może zainstalować na nim własnego oprogramowania asystującego (np. czytnika ekranu w smartfonie). Dlatego ustawodawca nakłada na producenta terminala obowiązek "wbudowania" czytnika ekranu w urządzenie.

Kluczowe aspekty tego przepisu to:
1.  **Obecność technologii TTS (Text-to-Speech):** Terminal nie może polegać wyłącznie na nagranych wcześniej plikach audio (choć mogą one być używane uzupełniająco). Musi posiadać silnik syntezy mowy, który potrafi odczytać zmienne treści (np. nazwisko pasażera, saldo konta, dynamiczny rozkład jazdy).
2.  **Zgodność językowa (Synchronizacja języka):** Zgodnie z klauzulą **C.5.1.3.14** normy EN 301 549, synteza mowy musi działać w tym samym języku, co wyświetlany interfejs. Jeśli użytkownik zmieni język na ekranie (np. z polskiego na angielski), język syntezatora mowy musi zmienić się automatycznie.

Brak syntezy mowy w wybranym języku interfejsu oznacza, że terminal staje się bezużyteczny dla osoby niewidomej, która nie zna domyślnego języka urządzenia.

### Typ oceny
Inspekcja i Testy funkcjonalne

### Checklist
1. Weryfikacja obecności syntezy mowy
- **Działanie:** Uruchom tryb dostępności/tryb głosowy terminala (zazwyczaj poprzez podłączenie słuchawek lub naciśnięcie dedykowanego przycisku/strefy dotykowej).
- **Sprawdzenie:** Czy terminal odczytuje na głos zawartość ekranu?
    - Należy zweryfikować, czy odczytywane są nie tylko statyczne etykiety (np. "Włóż kartę"), ale także dane dynamiczne (np. kwota transakcji, data).
1. Weryfikacja zgodności języka
- **Działanie:**
    1. Zmień język interfejsu wizualnego terminala (np. wybierz język angielski lub niemiecki).
    2. Nasłuchuj komunikatów głosowych.
- **Sprawdzenie:** Czy syntezator mowy również zmienił język?
    - **Błąd:** Terminal wyświetla tekst po angielsku, ale lektor czyta go z polskim akcentem/wymową lub nadal mówi po polsku.
    - **Wymóg:** Jeśli treść jest wyświetlana w danym języku, musi być w tym samym języku odczytywana (z wyjątkiem nazw własnych i terminów technicznych nieprzetłumaczalnych).
1. Zakres "Mowy" (Pokrycie interfejsu)
- **Sprawdzenie:** Czy synteza mowy obejmuje cały interfejs niezbędny do obsługi? Jeśli terminal posiada ekran dotykowy, czy dotknięcie elementu powoduje jego odczytanie? (Brak odczytu dla któregokolwiek elementu sterującego narusza ten wymóg).


## U.9.01.02.a - U.9.01.02.a Podłączenie przewodowego stereofonicznego zestawu słuchawkowego (Art. 9 ust. 1 pkt 2 lit. a)

### Warunki wstępne
1. Produkt jest **terminalem** w rozumieniu Art. 3 ust. 1 pkt 2 ustawy (np. bankomat, wpłatomat, automat biletowy, kiosk informacyjny).
1. Terminal generuje sygnały dźwiękowe lub mowę (jest to warunek konieczny, aby gniazdo słuchawkowe miało zastosowanie funkcjonalne).

### Procedura
1. Przepis ten nakłada na producenta terminala obowiązek zapewnienia fizycznego interfejsu audio. Jest to kluczowe dla zapewnienia **prywatności** (np. odsłuch salda konta) oraz **słyszalności** w głośnym otoczeniu miejskim.

Analiza wymogu w oparciu o normę EN 301 549:
1.  **Przewodowość:** Ustawa wprost wymaga połączenia **przewodowego**. Obsługa słuchawek Bluetooth jest dodatkowym atutem, ale nie zwalnia z obowiązku posiadania fizycznego gniazda (gniazda jack). Jest to zawężenie wymagań normy EN 301 549, która traktuje zgodne ze standardami połączenia bezprzewodowe (jak np. Bluetooth) jako wystarczające.
2.  **Standard przemysłowy:** Zgodnie z klauzulą **8.1.2** normy EN 301 549, połączenie musi być zgodne z niezastrzeżonym standardem przemysłowym. W kontekście terminali publicznych i klauzuli **5.1.3.2**, standardem tym jest gniazdo **3,5 mm (minijack)**. Użycie nietypowego złącza (np. tylko USB-C bez adaptera lub gniazda 2,5 mm) może być uznane za błąd, jeśli utrudnia podłączenie standardowych słuchawek posiadanych przez użytkownika.
3.  **Stereofonia:** Wyjście musi obsługiwać dwa kanały dźwiękowe. Jest to istotne dla przestrzennego odwzorowania dźwięku, co może wspomagać orientację w interfejsie.
4.  **Mechanizm indywidualnego słuchania:** Podłączenie słuchawek powinno automatycznie aktywować tryb prywatny, wyciszając głośniki zewnętrzne.

### Typ oceny
Inspekcja i Testy funkcjonalne

### Checklist
1. Inspekcja fizyczna złącza
- **Działanie:** Obejrzyj front terminala (strefę operacyjną).
- **Sprawdzenie:**
    - Czy terminal posiada fizyczne gniazdo słuchawkowe?
    - Czy jest to standardowe gniazdo 3,5 mm?
    - Czy gniazdo jest łatwe do zlokalizowania dotykiem (np. posiada wypukły symbol słuchawek lub charakterystyczne wgłębienie, zgodnie z wymogiem dotykowym)?
1. Weryfikacja sygnału i prywatności
- **Działanie:**
    1. Uruchom terminal w trybie generującym dźwięk (np. syntezę mowy).
    2. Podłącz słuchawki.
- **Sprawdzenie:**
    - Czy dźwięk pojawił się w słuchawkach?
    - Czy dźwięk w słuchawkach jest słyszalny w obu kanałach (lewy/prawy)?
    - Czy w momencie podłączenia słuchawek dźwięk z głośników zewnętrznych został **całkowicie wyciszony**? (Brak wyciszenia głośników narusza wymóg prywatności).
1. Regulacja głośności w słuchawkach
- **Działanie:** Przy podłączonych słuchawkach spróbuj zmienić głośność za pomocą interfejsu (przycisków fizycznych lub ekranowych).
- **Sprawdzenie:** Czy zmiana głośności wpływa na poziom dźwięku w słuchawkach?
- **Wymóg:** Użytkownik musi mieć możliwość niezależnej regulacji głośności w trybie prywatnym.


## U.9.01.02.b - U.9.01.02.b Dostęp do funkcji dostępności bez aktywacji (Art. 9 ust. 1 pkt 2 lit. b)

### Warunki wstępne
1. Produkt jest **terminalem** w rozumieniu Art. 3 ust. 1 pkt 2 ustawy (np. bankomat, wpłatomat, automat biletowy, kiosk informacyjny).
1. Terminal posiada funkcje dostępności (np. tryb głosowy, powiększenie, wysoki kontrast), które nie są domyślnie włączone dla każdego użytkownika (np. terminal nie „mówi” do każdego przechodnia).

### Procedura
1. Wymóg ten zapobiega sytuacjom, w których osoba z niepełnosprawnością podchodzi do urządzenia i nie może z niego skorzystać, ponieważ funkcja dostępności jest wyłączona w ustawieniach systemowych lub ukryta głęboko w menu.

Interpretacja w oparciu o normę EN 301 549:
1.  **Dostępność metody aktywacji:** Jeśli funkcja wymaga uruchomienia (np. włączenia trybu głosowego), metoda ta musi być dostępna dla osoby, która tej funkcji potrzebuje. Nie można wymagać od osoby niewidomej, aby odnalazła na ekranie dotykowym wizualne menu „Ustawienia -> Dostępność -> Włącz mowę”.
2.  **Inicjacja sprzętowa:** W przypadku terminali publicznych (sprzętu) wyposażonych w wyjście mowy, norma wymaga istnienia **dotykowego oznaczenia** sposobu rozpoczęcia trybu mowy. Oznacza to, że uruchomienie funkcji dostępności musi odbywać się poprzez fizyczny, wyczuwalny element (np. przycisk z wypukłym symbolem, gniazdo słuchawkowe) lub w sposób niewymagający wzroku.
3.  **Gotowość do pracy:** Funkcje muszą być dostępne natychmiast dla użytkownika końcowego. Podłączenie słuchawek powinno automatycznie uruchomić syntezę mowy (zgodnie z praktyką dla funkcjonalności zamkniętej), bez konieczności dodatkowej konfiguracji.

### Typ oceny
Inspekcja i Testy funkcjonalne

### Checklist
1. Weryfikacja metody aktywacji
- **Działanie:** Podejdź do terminala w stanie spoczynku (ekran powitalny).
- **Sprawdzenie:** Czy istnieje sposób na uruchomienie funkcji dostępności (np. czytnika ekranu, powiększenia) bez konieczności korzystania ze standardowego interfejsu wizualnego?
    - Czy podłączenie słuchawek automatycznie uruchamia instrukcje głosowe?
    - Czy naciśnięcie dedykowanego przycisku fizycznego (np. na klawiaturze PIN padu lub obudowie) uruchamia tryb dostępny?
- **Błąd:** Jeśli uruchomienie trybu dla niewidomych wymaga poproszenia obsługi o „włączenie” terminala lub naciśnięcia ikony na ekranie dotykowym, której nie można odnaleźć bezwzrokowo – wymóg **nie jest spełniony**.
1. Weryfikacja oznaczeń inicjujących (Dla mowy)
- **Działanie:** Zamknij oczy i zbadaj dotykiem front urządzenia.
- **Sprawdzenie:** Czy potrafisz znaleźć element służący do uruchomienia mowy?
    - Czy gniazdo słuchawkowe jest łatwo wyczuwalne?
    - Czy przycisk wywołujący pomoc/mowę ma wypukły symbol lub oznaczenie w Braille'u?
1. Weryfikacja dostępności bez logowania
- **Sprawdzenie:** Czy funkcje dostępności działają **przed** włożeniem karty płatniczej lub zalogowaniem się? Użytkownik musi mieć wsparcie (np. głosowe) już na etapie ekranu powitalnego, aby wiedzieć, gdzie włożyć kartę lub jak rozpocząć transakcję.


## U.9.02.00 - U.9.02.00 Oznaczenie klawiszy i przełączników (Art. 9 ust. 2)

### Warunki wstępne
1. Produkt jest **terminalem** w rozumieniu Art. 3 ust. 1 pkt 2 ustawy (np. bankomat, wpłatomat, automat biletowy).
1. Terminal posiada fizyczne elementy sterujące (klawisze, przyciski, przełączniki).

### Procedura
1. Wymóg ten odnosi się do dwóch kluczowych cech fizycznych elementów sterujących, niezbędnych dla osób słabowidzących (kontrast) i niewidomych (dotyk).

1.  **Wystarczający kontrast:** Oznaczenia na przyciskach (litery, cyfry, symbole) muszą być wyraźnie widoczne na tle przycisku. Norma EN 301 549 w klauzuli **9.1.4.3** (odwołanie do WCAG 1.4.3) definiuje minimalny kontrast dla tekstu jako **4,5:1** (dla małego tekstu) lub **3:1** (dla dużego tekstu). Choć ten wymóg wprost dotyczy oprogramowania, w przypadku terminali należy stosować go analogicznie do oznaczeń fizycznych, aby zapewnić ich czytelność.
2.  **Rozróżnialność dotykowa:** Zgodnie z klauzulą **C.5.5.2** normy, użytkownik musi być w stanie zidentyfikować przycisk i odróżnić go od innych bez patrzenia. Oznacza to, że przyciski muszą być wypukłe, wklęsłe, mieć różną fakturę lub być rozdzielone wyczuwalnymi odstępami. Płaski panel dotykowy (ekran dotykowy) bez nakładki fizycznej nie spełnia tego wymogu (chyba że posiada specjalne punkty orientacyjne).
3.  **Klawiatura numeryczna (PIN Pad):** Zgodnie z klauzulą **C.8.4.1**, w standardowym układzie 12-klawiszowym (ITU), klawisz z cyfrą **„5”** musi posiadać wyczuwalny punkt orientacyjny (wypustkę), odróżniający go od pozostałych.

### Typ oceny
Inspekcja i Testy funkcjonalne

### Checklist
1. Weryfikacja kontrastu
- **Działanie:** Obejrzyj klawiaturę i przyciski funkcyjne.
- **Sprawdzenie:** Czy znaki na klawiszach są wyraźne?
    - Należy ocenić, czy kolor znaku (np. biały) wyraźnie odcina się od tła przycisku (np. czarnego/szarego).
    - Przyciski metalowe z wygrawerowanymi znakami często mają niski kontrast (szary na szarym) – jeśli grawer nie jest wypełniony farbą, wymóg może **nie być spełniony**.
1. Weryfikacja rozróżnialności dotykowej
- **Działanie:** Zamknij oczy i przesuń palcami po panelu sterowania.
- **Sprawdzenie:**
    - Czy jesteś w stanie wyczuć granice poszczególnych przycisków?
    - Czy przyciski funkcyjne (np. "Zatwierdź", "Anuluj") różnią się od siebie kształtem, położeniem lub fakturą? (Samo oznaczenie kolorem nie wystarczy dla osoby niewidomej).
    - Czy przyciski wystają ponad obudowę lub są wyraźnie wgłębione? Płaska naklejka membranowa bez tłoczenia jest błędem.
1. Weryfikacja klawisza "5"
- **Działanie:** Znajdź dotykiem klawiaturę numeryczną.
- **Sprawdzenie:** Czy na klawiszu z cyfrą "5" znajduje się wyraźna, wypukła kropka lub kreska? Brak tego znacznika na standardowej klawiaturze numerycznej (np. PIN padzie) jest niezgodnością z normą.


## U.9.03.00 - U.9.03.00 Informowanie o konieczności reakcji i możliwość wydłużenia czasu (Art. 9 ust. 3)

### Warunki wstępne
1. Produkt jest **terminalem** w rozumieniu Art. 3 ust. 1 pkt 2 ustawy (np. bankomat, biletomat).
1. Terminal posiada funkcje ograniczone czasowo (tzw. *timeout*), np. automatyczne wylogowanie, cofnięcie karty, anulowanie transakcji po okresie bezczynności.

### Procedura
1. Przepis ten nakłada na terminale dwa odrębne, ale powiązane obowiązki:

1.  **Informowanie wielokanałowe:** Ostrzeżenie o upływającym czasie nie może być dostępne tylko dla jednego zmysłu.
    -   Jeśli na ekranie pojawia się licznik ("Zostało 10 sekund"), informacja ta musi być równolegle przekazana dźwiękowo (komunikat głosowy lub charakterystyczny sygnał dźwiękowy) dla osób niewidomych.
    -   Jeśli ostrzeżenie jest dźwiękowe, musi być równolegle widoczne na ekranie dla osób niesłyszących.
2.  **Możliwość wydłużenia czasu:** Użytkownik, który potrzebuje więcej czasu (ze względu na ograniczenia motoryczne lub poznawcze), musi mieć możliwość zatrzymania licznika lub dodania czasu.
    -   Zgodnie z klauzulą **11.2.2.1** normy EN 301 549 (Dostosowanie czasu), terminal powinien ostrzec użytkownika przed upływem czasu i dać mu co najmniej **20 sekund** na wykonanie prostej czynności (np. naciśnięcie dowolnego klawisza), która wydłuży limit (zazwyczaj co najmniej dziesięciokrotnie).

### Typ oceny
Inspekcja i Testy funkcjonalne

### Checklist
1. Weryfikacja wielokanałowości powiadomienia
-   **Działanie:** Rozpocznij transakcję i przestań wykonywać jakiekolwiek akcje. Czekaj na moment, w którym terminal ma zamiar przerwać sesję.
-   **Sprawdzenie:** Czy w momencie pojawienia się ostrzeżenia (np. "Czy chcesz więcej czasu?"):
    -   Pojawił się komunikat wizualny na ekranie?
    -   Wygenerowany został sygnał dźwiękowy lub komunikat głosowy słyszalny przez głośnik lub słuchawki?
-   **Interpretacja:** Jeśli terminal tylko wyświetla odliczanie, ale milczy – wynik jest **NEGATYWNY**. Jeśli tylko piszczy, ale nie wyświetla komunikatu – wynik jest **NEGATYWNY**.
1. Weryfikacja mechanizmu wydłużania czasu
-   **Działanie:** Gdy pojawi się ostrzeżenie o upływie czasu, spróbuj je zatrzymać.
-   **Sprawdzenie:**
    -   Czy interfejs jasno wskazuje, co należy zrobić, aby przedłużyć czas (np. "Naciśnij TAK, aby kontynuować")?
    -   Czy wykonanie tej akcji faktycznie resetuje licznik i pozwala dokończyć transakcję bez ponownego logowania?
    -   Czy czas na reakcję (od momentu pojawienia się ostrzeżenia do wylogowania) wynosi co najmniej **20 sekund**? Krótszy czas może uniemożliwić reakcję osobie z niepełnosprawnością ruchową.
1. Metoda interakcji**
-   **Sprawdzenie:** Czy wydłużenie czasu wymaga skomplikowanych gestów? Powinno być możliwe za pomocą prostego naciśnięcia fizycznego klawisza lub dotknięcia wyraźnego pola na ekranie (zgodnie z wymogami motorycznymi).


## U.9.04.00 - U.9.04.00 Kompatybilność elementów dźwiękowych z narzędziami wspomagającymi (Art. 9 ust. 4)

### Warunki wstępne
1. Produkt jest **terminalem** w rozumieniu Art. 3 ust. 1 pkt 2 ustawy (np. bankomat, biletomat, kiosk informacyjny, urządzenie do odprawy).
1. Terminal generuje sygnały dźwiękowe lub mowę (elementy audio).

### Procedura
1. Wymóg ten koncentruje się na **interoperacyjności** terminala z aparatami słuchowymi (zarówno tymi z cewką indukcyjną, jak i procesorami implantów ślimakowych) oraz innymi osobistymi wzmacniaczami dźwięku. Nie chodzi tu tylko o głośność (uregulowaną w art. 8), ale o fizyczną i elektromagnetyczną zdolność terminala do przekazania czystego sygnału do urządzenia użytkownika.

Kluczowe aspekty techniczne:
1.  **Sprzężenie magnetyczne (Pętla indukcyjna):** Zgodnie z klauzulą **8.2.2.1** normy EN 301 549, terminale stacjonarne posiadające słuchawkę (np. domofony, kioski z telefonem) lub generujące mowę powinny zapewniać sprzężenie magnetyczne (tzw. cewkę T). Pozwala to na bezpośrednie przesyłanie dźwięku do aparatu słuchowego, eliminując hałas otoczenia.
2.  **Standardowe złącza:** Aby zapewnić kompatybilność z zewnętrznymi narzędziami wzmacniającymi (np. osobistymi wzmacniaczami dźwięku podłączanymi kablem), terminal musi wykorzystywać standardowe, niezastrzeżone formaty połączeń (np. gniazdo minijack, USB, Bluetooth), zgodnie z klauzulą **8.1.2**.
3.  **Brak zakłóceń:** Terminal nie może emitować pola elektromagnetycznego, które powodowałoby "buczenie" lub zakłócenia w aparatach słuchowych, uniemożliwiając zrozumienie komunikatu.

### Typ oceny
Inspekcja i Testy funkcjonalne

### Checklist
1. Weryfikacja sprzężenia magnetycznego (Dla aparatów słuchowych)
- **Działanie:**
    1. Sprawdź, czy terminal jest oznaczony symbolem "T" (oznaczającym obecność pętli indukcyjnej/cewki telefonicznej).
    2. Użyj testera pętli indukcyjnej (odbiornika pola magnetycznego). Zbliż go do źródła dźwięku (głośnika lub słuchawki).
- **Sprawdzenie:** Czy tester wykrywa silny i wyraźny sygnał magnetyczny zsynchronizowany z dźwiękiem?
- **Wymóg:** Sygnał musi spełniać parametry techniczne określone w normie ETSI ES 200 381-1 (siła pola, pasmo przenoszenia).
1. Weryfikacja standardowych połączeń (Interoperacyjność)
- **Działanie:** Dokonaj inspekcji dostępnych portów audio.
- **Sprawdzenie:**
    - Czy porty służące do podłączenia audio (np. słuchawek) są w standardzie powszechnym (np. Jack 3.5mm, USB)?
    - Czy wymagają stosowania niestandardowych, producenckich przejściówek, które nie są powszechnie dostępne na rynku? (Wymaganie standardu niezastrzeżonego).
1. Weryfikacja zakłóceń**
- **Działanie:** Przeprowadź próbę odsłuchową za pomocą aparatu słuchowego ustawionego w tryb "T" lub testera.
- **Sprawdzenie:** Czy oprócz pożądanego sygnału audio słychać głośne buczenie, trzaski lub pisk pochodzący z elektroniki terminala (np. ekranu)? Czystość sygnału jest kluczowa dla kompatybilności.


## U.10.01.00 - U.10.01.00 Synteza mowy w czytniku książek elektronicznych (Art. 10)

### Warunki wstępne
1. Produkt jest **czytnikiem książek elektronicznych** w rozumieniu Art. 3 ust. 1 pkt 4 ustawy.
1. Zgodnie z definicją w Art. 5 pkt 3, jest to urządzenie obejmujące zarówno sprzęt, jak i oprogramowanie, przeznaczone do uzyskiwania dostępu do plików książek i korzystania z nich.

### Procedura
1. Art. 10 nakłada na czytniki e-booków specyficzny wymóg dodatkowy, wykraczający poza ogólne zasady dostępności z Art. 8.

Kluczowe aspekty interpretacyjne:
1.  **Technologia Syntezy Mowy (TTS):** Czytnik nie może polegać wyłącznie na odtwarzaniu gotowych audiobooków. Musi posiadać wbudowany silnik TTS (Text-to-Speech), który potrafi przetworzyć tekst na mowę w czasie rzeczywistym.
2.  **Język interfejsu:** Jest to kluczowy parametr zgodności (odwołanie do klauzuli **5.1.3.14** normy EN 301 549). Jeśli użytkownik ustawi język menu na polski, czytnik musi „mówić” po polsku. Jeśli zmieni język na angielski, synteza mowy musi automatycznie przełączyć się na język angielski.
3.  **Zakres działania:** Przepis mówi o wyposażeniu czytnika w technologię syntezy mowy. W powiązaniu z Art. 8 (dostępność interfejsu), TTS musi obsługiwać nie tylko treść książki, ale także **menu urządzenia, ustawienia i nawigację**. Czytnik, który czyta książkę, ale nie pozwala osobie niewidomej samodzielnie tej książki wybrać z listy, nie spełnia wymogów ustawy.

### Typ oceny
Inspekcja i Testy funkcjonalne

### Checklist
1. Weryfikacja obecności i języka TTS
- **Działanie:**
    1. Uruchom czytnik i wejdź w ustawienia.
    2. Ustaw język interfejsu na polski.
    3. Uruchom funkcję czytania na głos (VoiceOver, TalkBack lub dedykowany TTS).
- **Sprawdzenie:** Czy komunikaty systemowe i treść przykładowej książki są odczytywane poprawnie po polsku?
- **Działanie (Kontrola krzyżowa):** Zmień język interfejsu na inny (np. angielski).
- **Sprawdzenie:** Czy język syntezatora mowy zmienił się adekwatnie do języka interfejsu? (Brak zmiany języka mowy przy zmianie języka menu jest błędem).
1. Weryfikacja zakresu obsługi (Menu i Treść)
- **Działanie:** Spróbuj obsłużyć urządzenie bez patrzenia na ekran (lub z zasłoniętym ekranem), korzystając wyłącznie z syntezy mowy.
- **Sprawdzenie:**
    - Czy słyszysz nazwy pozycji w menu głównym?
    - Czy słyszysz tytuły książek w bibliotece?
    - Czy słyszysz stan baterii i ustawienia?
- **Interpretacja:** Jeśli TTS działa tylko wewnątrz otwartej książki, a milczy w menu głównym – produkt **nie spełnia** wymagań dostępności (brak samodzielności obsługi).
1. Prywatność i Głośność
- **Działanie:** Podłącz słuchawki (przewodowe lub Bluetooth).
- **Sprawdzenie:**
    - Czy dźwięk syntezatora został przekierowany do słuchawek?
    - Czy głośnik zewnętrzny został wyciszony? (Ochrona prywatności czytanej treści).
    - Czy można regulować głośność i szybkość czytania?


## U.11.00.01.a-01 - U.11.00.01.a-01 Komunikacja tekstowa w czasie rzeczywistym i dźwięk Hi‑Fi (Art. 11 pkt 1 lit. a tiret pierwsze)

### Warunki wstępne
1. Produkt jest **konsumenckim urządzeniem końcowym z interaktywnymi zdolnościami obliczeniowymi** (np. smartfon, tablet, nowoczesny telefon stacjonarny z systemem operacyjnym).
1. Urządzenie służy do świadczenia usług telekomunikacyjnych i oferuje zarówno komunikację głosową, jak i tekstową.

### Procedura
1. Przepis ten nakłada dwa konkretne wymogi technologiczne na urządzenia służące do komunikacji:

1.  **Komunikacja tekstowa w czasie rzeczywistym (RTT - Real-Time Text):**
    -   RTT różni się od standardowego czatu czy SMS-ów. W RTT tekst jest przesyłany i wyświetlany **znak po znaku** w trakcie pisania, a nie dopiero po naciśnięciu "Wyślij".
    -   Zgodnie z klauzulą **6.2.1.2** normy EN 301 549, urządzenie musi umożliwiać jednoczesne przesyłanie głosu i tekstu RTT w ramach jednego połączenia. Pozwala to osobom niesłyszącym lub słabosłyszącym na płynną interakcję, przerwanie rozmówcy i natychmiastową reakcję, co jest kluczowe np. w połączeniach alarmowych 112.
    -   Opóźnienie transmisji nie może przekraczać **500 ms** (pół sekundy) od momentu wprowadzenia znaku.

2.  **Dźwięk jakości Hi-Fi:**
    -   W kontekście usług telekomunikacyjnych i normy EN 301 549 (klauzula **6.1**), termin ten odnosi się do **dźwięku szerokopasmowego** (często nazywanego *HD Voice*).
    -   Urządzenie musi być zdolne do kodowania i dekodowania dźwięku w paśmie częstotliwości z górną granicą co najmniej **7 000 Hz**. Jest to niezbędne dla rozróżnialności głosek syczących i szumiących (np. odróżnienie "s" od "f"), co jest krytyczne dla osób słabosłyszących.

### Typ oceny
Inspekcja i Testy funkcjonalne

### Checklist
1. Weryfikacja RTT (Funkcjonalność i Opóźnienie)
- **Działanie:**
    1. Nawiąż połączenie głosowe z innym urządzeniem obsługującym RTT (urządzeniem referencyjnym).
    2. W trakcie trwania połączenia głosowego zacznij wprowadzać tekst w oknie rozmowy.
- **Sprawdzenie:**
    -   Czy tekst pojawia się na urządzeniu odbiorczym niemal natychmiast (znak po znaku), w czasie krótszym niż 0,5 sekundy?
    -   Czy wysyłanie tekstu nie przerywa połączenia głosowego? (Muszą działać jednocześnie).
    -   Czy tekst wysyłany i odbierany jest wizualnie rozróżnialny (np. po różnych stronach ekranu)?.
-   **Uwaga:** Standardowy czat (Instant Messaging), w którym tekst pojawia się dopiero po zatwierdzeniu całej wiadomości, **nie spełnia** definicji RTT.
1. Weryfikacja jakości dźwięku (Hi-Fi / Wideband Audio)
- **Działanie:** Sprawdź specyfikację techniczną urządzenia oraz ustawienia połączeń.
- **Sprawdzenie:**
    -   Czy urządzenie obsługuje kodeki szerokopasmowe (np. G.722, AMR-WB)?.
    -   Czy urządzenie jest w stanie przetwarzać pasmo częstotliwości do 7000 Hz?
-   **Interpretacja:** Jeśli urządzenie obsługuje tylko standardowe pasmo telefoniczne (300–3400 Hz), wymóg **nie jest spełniony**.
1. Interoperacyjność
- **Sprawdzenie:** Czy RTT działa nie tylko wewnątrz własnego ekosystemu producenta (np. tylko między dwoma telefonami tej samej marki), ale korzysta ze standardów umożliwiających połączenie z innymi sieciami (np. po protokole SIP/IMS)?.


## U.11.00.01.a-02 - U.11.00.01.a-02 Transmisja wideo — pełna konwersacja (Art. 11 pkt 1 lit. a tiret drugie)

### Warunki wstępne
1. Produkt jest **konsumenckim urządzeniem końcowym z interaktywnymi zdolnościami obliczeniowymi** (np. smartfon, tablet, wideotelefon) wykorzystywanym do usług telekomunikacyjnych [1].
1. Urządzenie oferuje transmisję wideo (np. wideorozmowy)

### Procedura
1. Wymóg ten obliguje do zapewnienia standardu **Pełnej Konwersacji (Total Conversation).

Zgodnie z definicją ustawową (**Art. 5 pkt 19**) oraz normą EN 301 549, pełna konwersacja to nie tylko wideorozmowa. To jednoczesny przesył trzech strumieni danych:
1.  **Wideo:** O rozdzielczości wystarczającej do komunikacji w polskim języku migowym (PJM).
2.  **Głos:** Dźwięk w czasie rzeczywistym.
3.  **Tekst w czasie rzeczywistym (RTT):** Przesyłanie znak po znaku.

Wszystkie trzy strumienie muszą być zsynchronizowane. Jest to kluczowe dla osób niesłyszących (używających PJM lub czytających z ruchu warg) oraz słabosłyszących (wspierających się tekstem RTT).

Wymogi techniczne wg normy EN 301 549 (Rozdział 6.5):
-   **Rozdzielczość (Klauzula 6.5.2):** Minimum QCIF (rzadko używane), ale dla użyteczności w języku migowym wymagane jest co najmniej **QVGA (320x240)**, a zalecane **VGA (640x480)** lub wyższe.
-   **Płynność (Klauzula 6.5.3):** Częstotliwość odświeżania musi wynosić co najmniej **20 klatek na sekundę (FPS)**. Niższa wartość powoduje rozmycie ruchu rąk, uniemożliwiając zrozumienie języka migowego.
-   **Synchronizacja (Klauzula 6.5.4):** Opóźnienie między dźwiękiem a obrazem (ruchem warg) nie może przekraczać **100 ms**. Desynchronizacja uniemożliwia czytanie z ruchu warg.

### Typ oceny
Inspekcja i Testy funkcjonalne

### Checklist
1. Weryfikacja trójmodalności (Pełna konwersacja)
- **Działanie:** Nawiąż połączenie wideo.
- **Sprawdzenie:** Czy w trakcie trwania połączenia wideo i audio możliwe jest jednoczesne wysyłanie tekstu (RTT)?
- **Wynik:** Jeśli uruchomienie czatu/tekstu powoduje zatrzymanie wideo lub wyciszenie audio, urządzenie **nie umożliwia** pełnej konwersacji. Wszystkie trzy kanały muszą działać symultanicznie.
1. Weryfikacja jakości dla języka migowego
- **Działanie:** Przeprowadź testową rozmowę w języku migowym (lub wykonuj szybkie ruchy dłońmi przed kamerą).
- **Sprawdzenie:**
    - Czy obraz jest płynny (brak klatkowania)? Wymagane min. 20 FPS.
    - Czy rozdzielczość pozwala rozróżnić kształt palców i mimikę twarzy? Wymagane min. QVGA.
- **Interpretacja:** Jeśli obraz jest "rozpikselowany" lub zacina się przy szybkich ruchach rąk, urządzenie nie spełnia wymogu obsługi PJM.
1. Weryfikacja synchronizacji (Czytanie z ruchu warg)
- **Działanie:** Obserwuj ruch warg rozmówcy i słuchaj dźwięku.
- **Sprawdzenie:** Czy dźwięk słychać dokładnie w momencie poruszania wargami? Opóźnienie powyżej 0,1 sekundy jest zauważalne i dyskwalifikujące dla czytania z ruchu warg.
1. Identyfikacja mówcy w wideo
- **Sprawdzenie:** Czy w przypadku konferencji wieloosobowej urządzenie wskazuje wizualnie, która osoba (okno wideo) aktualnie nadaje dźwięk lub "miga"? Jest to niezbędne dla orientacji osoby niesłyszącej w dyskusji.


## U.11.00.01.b-01 - U.11.00.01.b-01 Połączenia z narzędziami wspomagającymi wzmacniającymi dźwięk (Art. 11 pkt 1 lit. b)

### Warunki wstępne
1. Produkt jest **konsumenckim urządzeniem końcowym z interaktywnymi zdolnościami obliczeniowymi** (np. smartfon, tablet).
1. Urządzenie jest wykorzystywane do usług telekomunikacyjnych (np. połączenia głosowe, VoIP)

### Procedura
1. Wymóg ten dotyczy zapewnienia interoperacyjności urządzenia z osobistymi urządzeniami audio używanymi przez osoby słabosłyszące (np. aparaty słuchowe, implanty ślimakowe, słuchawki wzmacniające, pętle indukcyjne na szyję).

W kontekście normy EN 301 549 należy to interpretować dwutorowo:
1.  **Standardowe połączenia bezprzewodowe:** Zgodnie z klauzulą **8.1.2**, urządzenie musi udostępniać co najmniej jedno połączenie zgodne z niezastrzeżonym standardem przemysłowym. W przypadku technologii bezprzewodowych standardem tym jest obecnie najczęściej **Bluetooth**. Umożliwia to podłączenie zewnętrznych wzmacniaczy dźwięku lub streamerów audio.
2.  **Kompatybilność z aparatami słuchowymi (HAC):** Zgodnie z klauzulą **8.2.2.2**, urządzenia bezprzewodowe przykładane do ucha muszą zapewniać sprzężenie magnetyczne z aparatami słuchowymi (spełniając wymagania normy ETSI ES 200 381-2 lub ANSI/IEEE C63.19) [5]. Oznacza to, że smartfon powinien być w stanie przesłać dźwięk bezpośrednio do aparatu słuchowego (np. przez cewkę T lub protokoły typu ASHA/MFi) bez zakłóceń.

Termin „narzędzia wspomagające wzmacniające dźwięk” obejmuje szeroką gamę rozwiązań, od prostych słuchawek Bluetooth po zaawansowane systemy transmisji bezpośredniej do implantu.

### Typ oceny
Inspekcja i Testy funkcjonalne

### Checklist
1. Weryfikacja łączności Bluetooth (Standard przemysłowy)
- **Działanie:**
    1. Uruchom tryb parowania w urządzeniu (np. Bluetooth).
    2. Spróbuj połączyć urządzenie z zewnętrznym systemem audio (np. bezprzewodowym zestawem słuchawkowym, pętlą indukcyjną Bluetooth, streamerem do aparatu słuchowego).
- **Sprawdzenie:**
    - Czy urządzenie wykrywa akcesorium?
    - Czy parowanie przebiega pomyślnie bez konieczności instalowania niestandardowych sterowników?
    - Czy dźwięk połączenia telefonicznego jest automatycznie przekierowywany do połączonego urządzenia?
1. Weryfikacja jakości dźwięku i braku zakłóceń
- **Działanie:** Nawiąż połączenie głosowe przy użyciu podłączonego bezprzewodowo zestawu.
- **Sprawdzenie:**
    - Czy dźwięk w narzędziu wspomagającym jest czysty i zrozumiały?
    - Czy występują istotne opóźnienia (latencja), które utrudniałyby prowadzenie rozmowy (desynchronizacja ruchu warg z dźwiękiem)?
    - Czy występują zakłócenia elektromagnetyczne (buczenie, piski) wynikające z pracy anteny urządzenia? (Wymóg ten jest ściśle powiązany z *lit. c* tego samego artykułu ustawy, mówiącym o unikaniu zakłóceń).


## U.11.00.01.c-01 - U.11.00.01.c-01 Unikanie zakłóceń podczas współpracy z narzędziami wspomagającymi (Art. 11 pkt 1 lit. c)

### Warunki wstępne
1. Produkt jest konsumenckim urządzeniem końcowym z interaktywnymi zdolnościami obliczeniowymi (np. smartfon, tablet).
1. Urządzenie jest wykorzystywane do usług telekomunikacyjnych (połączenia głosowe/wideo).
1. Urządzenie emituje fale radiowe (jest urządzeniem bezprzewodowym).

### Procedura
1. Wymóg ten dotyczy **Kompatybilności Elektromagnetycznej (EMC)** pomiędzy urządzeniem nadawczym (smartfonem) a urządzeniem wspomagającym (np. aparatem słuchowym lub implantem ślimakowym).

Zgodnie z normą **EN 301 549**, klauzula **8.2.2.2** (Urządzenia do komunikacji bezprzewodowej), urządzenie musi zapewniać współpracę z technologiami wspomagającymi słyszenie bez wprowadzania uciążliwych zakłóceń.
1.  **Zakłócenia RF (Radio Frequency):** Transmisja komórkowa generuje pole elektromagnetyczne. Jeśli nie jest ono odpowiednio kontrolowane, indukuje w obwodach aparatu słuchowego słyszalne „buczenie”, trzaski lub pisk, uniemożliwiając rozmowę. Unikanie zakłóceń oznacza, że poziom emisji RF w pobliżu głośnika słuchawki jest na tyle niski, by nie zakłócać pracy aparatu.
2.  **Standardy HAC (Hearing Aid Compatibility):** Norma odsyła do standardu **ANSI/IEEE C63.19**, lub równoważnych, które klasyfikują urządzenia pod kątem poziomu generowanych zakłóceń (klasyfikacja M – Microphone) oraz siły sygnału magnetycznego (klasyfikacja T – Telecoil).

Wymóg „unikania zakłóceń” należy zatem rozumieć jako spełnienie parametrów technicznych minimalizujących interferencję RF (ocena M3 lub M4 według standardu ANSI).

### Typ oceny
Inspekcja i Testy funkcjonalne

### Checklist
1. Weryfikacja klasyfikacji HAC (Dokumentacja)
- **Działanie:** Sprawdź specyfikację techniczną urządzenia lub instrukcję użytkownika pod kątem sekcji „Dostępność” lub „Hearing Aid Compatibility”.
- **Sprawdzenie:**
    - Czy urządzenie posiada deklarację zgodności z normą ANSI C63.19?
    - Czy urządzenie posiada ocenę odporności na zakłócenia RF na poziomie co najmniej **M3** (lub wyższym: M4)?
    - *Interpretacja:* Brak oceny M3/M4 oznacza wysokie ryzyko, że urządzenie będzie generować zakłócenia słyszalne w aparacie słuchowym.
1. Test interferencji audio (Fizyczny)
- **Warunki:** Test należy przeprowadzić w miejscu o niskim poziomie tła elektromagnetycznego.
- **Działanie:**
    1. Ustaw aparat słuchowy (lub tester pętli indukcyjnej) w tryb mikrofonowy (M) i zbliż go do urządzenia nawiązującego połączenie głosowe (LTE/GSM).
    2. Nasłuchuj charakterystycznych dźwięków transmisji danych (rytmiczne „terkotanie”, buczenie).
- **Sprawdzenie:** Czy zakłócenia są na tyle głośne, że zagłuszają mowę rozmówcy?
- **Wymóg:** Urządzenie powinno minimalizować te zakłócenia poprzez odpowiednie ekranowanie anten i komponentów audio.
1. Mechanizmy redukcji zakłóceń (Oprogramowanie)**
- **Działanie:** Sprawdź ustawienia dostępności w menu urządzenia.
- **Sprawdzenie:** Czy istnieje opcja „Tryb aparatu słuchowego” (Hearing Aid Mode)?
    - Włączenie tej opcji często zmienia parametry pracy nadajnika radiowego lub charakterystykę audio, aby zminimalizować interferencje. Obecność i skuteczność tej funkcji potwierdza spełnienie wymogu unikania zakłóceń.


## U.11.00.02 - U.11.00.02 Udogodnienia audiowizualne: audiodeskrypcja, napisy i tłumaczenie na język migowy (Art. 11 pkt 2)

### Warunki wstępne
1. Produkt jest **konsumenckim urządzeniem końcowym z interaktywnymi zdolnościami obliczeniowymi** (np. telewizor Smart TV, dekoder STB, przystawka streamingowa, tablet, smartfon).
1. Urządzenie służy do odbioru **audiowizualnych usług medialnych** (telewizji linearnej, VOD).
1. Dostawca usługi medialnej dostarcza sygnał zawierający udogodnienia (napisy, audiodeskrypcję, ewentualnie język migowy).

### Procedura
1. Wymóg ten obliguje producenta sprzętu do zapewnienia warstwy technicznej umożliwiającej odbiór **udogodnień dla osób z niepełnosprawnościami**. Kluczowe dla interpretacji tego przepisu jest odwołanie do **Art. 4 pkt 28 ustawy o radiofonii i telewizji**, który definiuje te udogodnienia jako:

> *„Element dźwiękowy lub graficzny zawarty w audycji lub rozpowszechniany równocześnie z nią, którego celem jest zapewnienie osobom z niepełnosprawnościami wzroku oraz osobom z niepełnosprawnościami słuchu możliwości zapoznania się z audycją w szczególności w formie napisów dla niesłyszących lub audiodeskrypcji, a także tłumaczenia na język migowy.”*

W oparciu o tę definicję oraz normę **EN 301 549** (Rozdział 7), urządzenie końcowe musi obsługiwać technicznie trzy rodzaje strumieni danych towarzyszących audycji:

1.  **Element graficzny – Napisy dla niesłyszących (Captions):**
    -   Urządzenie musi potrafić zdekodować i wyświetlić napisy (klauzula 7.1.1).
    -   Zgodnie z definicją, są one rozpowszechniane równocześnie, co wymusza na urządzeniu zapewnienie **synchronizacji** z dźwiękiem (klauzula 7.1.2).
    -   Urządzenie musi umożliwiać **personalizację** elementu graficznego (zmiana wielkości, koloru czcionki – klauzula 7.1.4), aby zapewnić czytelność dla osób słabowidzących.

2.  **Element dźwiękowy – Audiodeskrypcja (Audio Description):**
    -   Urządzenie musi umożliwiać wybór dodatkowej ścieżki dźwiękowej lub strumienia audio zawierającego narrację opisową (klauzula 7.2.1).
    -   Urządzenie musi pozwalać na sterowanie tym elementem (włączanie/wyłączanie, głośność) niezależnie od głównej ścieżki dźwiękowej, o ile standard nadawania na to pozwala.

3.  **Element graficzny – Tłumaczenie na język migowy:**
    -   Choć norma EN 301 549 w rozdziale 7 nie wydziela osobnej klauzuli technicznej dla "odbioru" języka migowego w TV (traktując go jako część wideo), definicja ustawowa wprost wskazuje go jako udogodnienie.
    -   Urządzenie musi być zdolne do wyświetlenia tego elementu, jeśli jest on nadawany jako oddzielny strumień wideo lub element nakładany (np. w standardzie HbbTV), bez obcinania obrazu (overscan) w miejscu, gdzie znajduje się tłumacz.

4.  **Sterowanie (User Controls):**
    -   Dostęp do wyboru tych elementów (napisów, audiodeskrypcji) musi być prosty. Zgodnie z klauzulą **7.3**, aktywacja udogodnień powinna odbywać się na tym samym poziomie interakcji co sterowanie głośnością lub zmianą kanału.

### Typ oceny
Inspekcja i Testy funkcjonalne

### Checklist
1. Weryfikacja obsługi napisów (Element graficzny)
- **Działanie:** Uruchom materiał wideo zawierający ścieżkę napisów dla niesłyszących.
- **Sprawdzenie:**
    - Czy istnieje mechanizm włączenia napisów?
    - Czy napisy są zsynchronizowane z dźwiękiem?
    - **Personalizacja:** Czy użytkownik może zmienić wygląd elementu graficznego (rozmiar czcionki, kontrast), aby dostosować go do swoich potrzeb wzrokowych?
1. Weryfikacja obsługi audiodeskrypcji (Element dźwiękowy)
- **Działanie:** Uruchom materiał posiadający dedykowaną ścieżkę audiodeskrypcji.
- **Sprawdzenie:**
    - Czy urządzenie wykrywa ten element dźwiękowy i pozwala go wybrać?
    - Czy audiodeskrypcja jest odtwarzana równocześnie z audycją?
    - Czy sterowanie tym elementem (wybór) jest dostępne dla użytkownika?
1. Weryfikacja dostępności sterowania
- **Działanie:** Sprawdź, jak głęboko w menu znajduje się opcja włączenia napisów lub audiodeskrypcji.
- **Wymóg:** Dostęp do "elementów dźwiękowych lub graficznych" wspierających osoby z niepełnosprawnościami nie może być trudniejszy niż dostęp do podstawowych funkcji (głośność, kanał). Jeśli pilot posiada dedykowany przycisk do Netflixa, a włączenie audiodeskrypcji wymaga 5 kliknięć w menu – jest to potencjalna niezgodność w zakresie "łatwego dostępu i sterowania".
1. Współpraca z narzędziami wspomagającymi
- **Sprawdzenie:** Czy menu wyboru udogodnień (napisów/języka) jest odczytywane przez wbudowany w urządzenie czytnik ekranu (Voice Guide/TalkBack itp.)? Jest to niezbędne, aby osoba niewidoma mogła samodzielnie uruchomić audiodeskrypcję.


## U.12.01 - U.12.01 Dostępność produktów wykorzystywanych do świadczenia usług (Art. 12 ust. 1)

### Procedura
1. Przepis ten przenosi odpowiedzialność za dostępność sprzętu i oprogramowania na podmiot świadczący usługę. Usługodawca nie może powoływać się na to, że „kupił gotowy produkt”. Ma prawny obowiązek wykorzystywać wyłącznie takie produkty, które spełniają wymogi z Art. 7–11.

Interpretacja w kontekście normy EN 301 549 i ustawy:
1.  **Zgodność produktowa:** Usługodawca nie może wykorzystywać w nowej usłudze terminala lub urządzenia, które nie spełnia wymogów z **art. 7** (informacja o produkcie), **art. 8** (interfejs użytkownika/funkcjonalność), oraz odpowiednio **art. 9, 10 lub 11** (wymogi specyficzne dla typu urządzenia) lub ewentualnie wymogów funkcjonalnych opisanych w **art. 19**.
2.  **Odpowiedzialność za konfigurację:** Nawet jeśli produkt (np. kiosk informacyjny) jest fabrycznie zdolny do bycia dostępnym (posiada gniazdo słuchawkowe, syntezator mowy), ale usługodawca wdroży na nim oprogramowanie, które blokuje te funkcje lub nie obsługuje ich poprawnie (naruszenie **art. 8 pkt 5 lit. d** – łączenie z narzędziami wspomagającymi), dochodzi do naruszenia Art. 12 ust. 1.
3.  **Zakres podmiotowy:** Obowiązek dotyczy produktu "wykorzystywanego". Oznacza to np., że jeśli bank (usługodawca) udostępnia klientowi aplikację na tablecie w oddziale, tablet ten musi spełniać wymogi dostępności. Jeśli klient korzysta z własnego tabletu w domu – przepis Art. 12 ust. 1 nie nakłada na bank obowiązku wymiany tabletu klienta, lecz zapewnia dostępność samej usługi cyfrowej (bankowości).

Analiza powinna przebiegać w dwóch krokach:
1.  **Identyfikacja ogniw usługi:** Należy ustalić, jakie urządzenia lub oprogramowanie są niezbędne użytkownikowi do skorzystania z usługi (np. aby wypłacić gotówkę [usługa], klient musi użyć bankomatu [produkt]; aby przeczytać e-booka [usługa], musi użyć aplikacji lub czytnika [produkt]).
2.  **Weryfikacja kaskadowa:**
    -   Jeśli produktem jest **Terminal** (bankomat, biletomat, terminal płatniczy) – musi spełniać wymogi **Art. 9**.
    -   Jeśli produktem jest **Czytnik e-booków** – musi spełniać wymogi **Art. 10**.
    -   Jeśli produktem jest **Urządzenie konsumenckie** (np. router, modem, dekoder) – musi spełniać wymogi **Art. 11**.
    -   Każdy z powyższych musi dodatkowo spełniać ogólne wymogi dla produktów z **Art. 7** (informacja) i **Art. 8** (interfejs użytkownika, funkcjonalność).

### Typ oceny
Analiza i inspekcja

### Checklist
1. Inwentaryzacja produktów w procesie usługi
- **Działanie:** Sporządź listę wszystkich punktów styku (touchpoints) klienta z usługą, które są urządzeniami technicznymi lub oprogramowaniem.
- **Sprawdzenie:** Czy zidentyfikowane produkty znajdują się w wykazie z Art. 3 ust. 1 ustawy?
    - *Przykład:* Bankomat – TAK (jest terminalem samoobsługowym).
    - *Przykład:* Ekspres do kawy w oddziale banku – NIE (nie jest terminalem w rozumieniu ustawy, mimo że służy klientom).
1. Weryfikacja certyfikacji i zgodności (Art. 7-11)
- **Działanie:** Dla każdego zidentyfikowanego produktu sprawdź posiadanie Deklaracji Zgodności z wymaganiami dostępności (zgodnie z Art. 23 i 24 ustawy).
- **Sprawdzenie:** Czy usługodawca posiada dokumentację potwierdzającą, że wykorzystywane terminale/urządzenia spełniają normę EN 301 549 (odpowiednie rozdziały, np. Rozdział 8 dla sprzętu, Rozdział 11 dla oprogramowania)?.
- **Przykład niespełnienia wymagań:** Wykorzystywanie w nowej usłudze terminali starszego typu, które nie posiadają np. gniazda słuchawkowego (naruszenie Art. 9 ust. 1 pkt 2) lub syntezy mowy (naruszenie Art. 9 ust. 1 pkt 1), jest bezpośrednim naruszeniem Art. 12 ust. 1.
1. Weryfikacja kompletności łańcucha dostępności
- **Działanie:** Sprawdź, czy produkt umożliwia realizację głównego celu usługi osobie z niepełnosprawnością.
- **Analiza:** Czy bariery w produkcie (np. brak obsługi bezwzrokowej w terminalu płatniczym) uniemożliwiają skuteczne skorzystanie z usługi (dokonanie płatności)? Zgodnie z ustawą, produkt musi zapewniać samodzielność obsługi (chyba że zastosowano Art. 21 dotyczący nieproporcjonalnego obciążenia).
1. Analiza wyjątków (Data wdrożenia)
Jeśli produkt nie spełnia wymagań, sprawdź datę jego instalacji/uruchomienia.
*   Jeśli terminal zainstalowano przed 28.06.2025 – sprawdź, czy mieści się w okresie ochronnym (do 20 lat użyteczności) zgodnie z art. 85 ust. 3.


## U.12.02.01.a - U.12.02.01.a Informacje o produktach wykorzystywanych w świadczeniu usługi — dostępność i interoperacyjność (Art. 12 ust. 2 pkt 1 lit. a)

### Warunki wstępne
1. Usługodawca udostępnia klientom informacje o usłudze (regulaminy, instrukcje, opisy oferty) w formie papierowej lub elektronicznej.
1. Usługodawca udostępnia klientom informacje o produktach wykorzystywanych przy świadczeniu usługi — o ich związku z usługą, funkcjach zapewniających dostępność, interoperacyjności z narzędziami wspomagającymi oraz instrukcjach użytkowania.

### Procedura
1. Wymóg ten obliguje usługodawcę do zapewnienia **redundancji sensorycznej** w przekazywaniu informacji. Informacja nie może być dostępna wyłącznie dla jednego zmysłu (np. tylko wzroku lub tylko słuchu).

Analiza prawno-techniczna:
1.  **Zakres informacji:** Zgodnie z ustawą, informacja musi obejmować nie tylko opis samej usługi, ale także:
    *   Wskazanie, jak produkt (np. bankomat) łączy się z usługą (wypłata gotówki).
    *   Opis funkcji dostępności produktu (np. "Bankomat posiada tryb głosowy").
    *   Opis interoperacyjności (np. "Urządzenie współpracuje ze słuchawkami minijack").
2.  **Więcej niż jeden kanał sensoryczny:**
    *   **Dla informacji elektronicznej:** Dokument cyfrowy (PDF, HTML) spełnia ten wymóg, jeśli jest zgodny ze standardem dostępności (WCAG/EN 301 549 Rozdział 9 lub 10). Tekst cyfrowy jest postrzegalny wzrokiem, a dzięki czytnikom ekranu (technologii asystującej) staje się postrzegalny słuchem (Text-to-Speech) lub dotykiem (monitor brajlowski).
    *   **Dla informacji papierowej:** Tradycyjny druk jest jednokanałowy (tylko wzrok). Aby spełnić wymóg ustawy, usługodawca musi zapewnić alternatywę, np. kod QR prowadzący do dostępnej wersji cyfrowej, wersję w Braille'u (dotyk) lub zapewnić odczytanie informacji przez personel (słuch).
3.  **Cel:** Użytkownik niewidomy, niesłyszący lub głuchoniewidomy musi mieć możliwość samodzielnego zapoznania się z instrukcją obsługi terminala lub regulaminem usługi przed skorzystaniem z niej.

### Typ oceny
Inspekcja i weryfikacja dokumentacji

### Checklist
1. Weryfikacja dostępności dokumentacji elektronicznej
- **Działanie:** Pobierz regulamin usługi lub instrukcję korzystania z terminala ze strony www usługodawcy.
- **Sprawdzenie:**
    - Czy dokument jest dostępny dla czytników ekranu (nie jest skanem obrazkowym)?
    - Czy struktura dokumentu (nagłówki) pozwala na nawigację bezwzrokową?
    - *Interpretacja:* Prawidłowo przygotowany dokument cyfrowy automatycznie zapewnia "drugi kanał sensoryczny" poprzez technologie asystujące.
1. Weryfikacja informacji w miejscu świadczenia usługi (Papier/Fizycznie)
- **Działanie:** Udaj się do placówki lub punktu samoobsługowego.
- **Sprawdzenie:**
    - Czy obok instrukcji wizualnej (np. naklejki na bankomacie) znajduje się alternatywa?
    - Czy dostępne są kody QR lub tagi NFC, które po zeskanowaniu telefonem odczytają treść instrukcji (przekształcenie wzroku na słuch)?
    - Czy w placówce dostępna jest informacja w formacie dostępnym dla osób niewidomych (np. e-dokument do wysłania na e-mail) lub czy personel jest przeszkolony do udzielenia tej informacji głosowo?
1. Weryfikacja kompletności treści
- **Sprawdzenie:** Czy w udostępnianych materiałach (niezależnie od formatu) znajdują się wyraźne informacje o:
    - Funkcjach dostępności sprzętu (np. "To urządzenie wspiera technologię zamiany treści tekstowych na głos")?
    - Interoperacyjności (np. "Możesz podłączyć własne słuchawki")?
    - *Błąd:* Brak informacji o tym, że urządzenie jest dostępne, jest naruszeniem tego przepisu, nawet jeśli samo urządzenie jest technicznie doskonałe. Użytkownik musi wiedzieć o dostępności, aby z niej skorzystać.


## U.12.02.01.b - U.12.02.01.b Informacje o produktach wykorzystywanych w świadczeniu usługi — zrozumiałość informacji (Art. 12 ust. 2 pkt 1 lit. b)

### Warunki wstępne
1. Usługodawca udostępnia informacje o usłudze lub produktach wykorzystywanych do jej świadczenia (instrukcje, regulaminy, opisy) w formie papierowej lub elektronicznej.

### Procedura
1. Wymóg ten nakłada na usługodawcę obowiązek dbałości o **dostępność poznawczą (kognitywną)** przekazywanych treści. Informacja jest bezużyteczna, jeśli jest dostępna zmysłowo (np. widoczna), ale niezrozumiała dla odbiorcy.

Interpretacja w oparciu o normę EN 301 549 (Rozdział 9.3 i 10.3 – Zrozumiałość):
1.  **Zrozumiałość techniczna (Dla formy elektronicznej):** Aby treść była zrozumiała dla technologii asystujących (np. syntezatora mowy), dokument musi mieć poprawnie zdefiniowany język (klauzule **9.3.1** i **10.3.1**). Syntezator musi „wiedzieć”, czy czytać tekst po polsku, czy po angielsku, aby wymowa była zrozumiała dla użytkownika.
2.  **Zrozumiałość treściowa (Prosty Język):** Choć norma EN 301 549 w poziomie zgodności AA nie narzuca ścisłego wymogu „prostego języka” dla wszystkich treści (jest to wymóg poziomu AAA – klauzula 9.5), to ustawa w Art. 12 ust. 2 pkt 1 lit. b nakazuje zapewnienie zrozumiałości *w ogóle*. Oznacza to konieczność unikania żargonu technicznego i prawnego tam, gdzie to możliwe, lub jego wyjaśnianie (zgodnie z definicją "Zrozumiałości" w art. 5 pkt 38 ustawy: *właściwość [...] umożliwiającą zrozumienie treści i informacji związanych z korzystaniem z produktu albo usługi*).
3.  **Spójność i Przewidywalność:** Informacje powinny być zorganizowane w sposób logiczny i przewidywalny (klauzule **9.3.2** i **10.3.2**). Elementy nawigacyjne i instrukcje nie mogą zmieniać swojego działania w sposób zaskakujący dla użytkownika.

### Typ oceny
Testy użyteczności i przegląd ekspercki

### Checklist
1. Weryfikacja określenia języka (Dokumenty elektroniczne/WWW)
- **Działanie:** Sprawdź kod strony internetowej (`<html lang="pl">`) lub właściwości pliku PDF/e-booka.
- **Sprawdzenie:**
    - Czy domyślny język dokumentu jest zdefiniowany programowo?
    - Czy fragmenty w języku obcym (np. cytaty, nazwy własne w innym języku) są odpowiednio oznaczone w kodzie?
- **Uzasadnienie:** Brak definicji języka powoduje, że czytnik ekranu może czytać polski tekst z angielską wymową, co czyni go całkowicie niezrozumiałym.
1. Analiza prostoty i struktury (Inspekcja ekspercka)
- **Działanie:** Przeanalizuj instrukcję obsługi terminala lub opis usługi.
- **Sprawdzenie:**
    - Czy zdania są krótkie i niezłożone wielokrotnie?
    - Czy terminy specjalistyczne (np. „autoryzacja”, „uwierzytelnianie dwuskładnikowe”) są wyjaśnione w tekście lub słowniczku?
    - Czy zastosowano podział na akapity, listy punktowane i nagłówki ułatwiające skanowanie tekstu?
    - Czy instrukcje są sformułowane w trybie rozkazującym lub bezosobowym w sposób jednoznaczny (np. „Włóż kartę”, a nie „Zaleca się umieszczenie instrumentu płatniczego w odpowiednim slotcie”)?


## U.12.02.01.c - U.12.02.01.c Informacje o produktach wykorzystywanych w świadczeniu usługi — formaty tekstowe dla komunikacji alternatywnej (Art. 12 ust. 2 pkt 1 lit. c)

### Warunki wstępne
1. Usługodawca udostępnia informacje o usłudze lub produktach (instrukcje, regulaminy, opisy) w formie elektronicznej lub papierowej (która musi mieć cyfrowy odpowiednik).

### Procedura
1. Przepis ten łączy wymóg techniczny (format tekstowy) z celem funkcjonalnym (wsparcie AAC).

1.  **Definicja AAC (Art. 5 pkt 1):** „Alternatywna i wspomagająca komunikacja” to korzystanie z pomocy komunikacyjnych wspierających lub zastępujących mowę. Użytkownicy AAC często korzystają ze specjalistycznego oprogramowania, które konwertuje tekst na mowę syntetyczną lub na sekwencję symboli/piktogramów.
2.  **Format tekstowy (Text-based formats):** Aby oprogramowanie AAC mogło zadziałać, informacja dostarczona przez usługodawcę musi być **tekstem cyfrowym**, a nie obrazem tekstu (skanem). Zgodnie z normą EN 301 549 (klauzule **10.1.1.1**, **11.1.1.1.1**), treść musi być możliwa do odczytania programowego. Tylko wtedy urządzenie użytkownika może „przeczytać” instrukcję na głos lub „przetłumaczyć” ją na symbole.
3.  **Więcej niż jeden kanał sensoryczny:** Jeśli informacja jest poprawnym formatem tekstowym, to z definicji (dzięki technologii asystującej) może być przedstawiona:
    -   **Wzrokowo:** Jako tekst na ekranie (możliwy do powiększenia).
    -   **Słuchowo:** Przez syntezę mowy w urządzeniu AAC.
    -   **Dotykowo:** Przez monitor brajlowski podłączony do urządzenia.

Wymóg ten nie oznacza konieczności tworzenia przez usługodawcę gotowych materiałów piktograficznych (chyba że wynika to z innych przepisów), lecz dostarczenie materiałów w formacie (np. dostępny PDF, HTML, EPUB), który jest **interoperacyjny** z narzędziami użytkownika.

### Typ oceny
Inspekcja, testy użyteczności z udziałem użytkowników korzystających z AAC oraz przegląd ekspercki

### Checklist
1. Weryfikacja formatu tekstowego (Interoperacyjność z AAC)
- **Działanie:** Otwórz dokument elektroniczny z informacją o usłudze.
- **Sprawdzenie:**
    - Czy tekst można zaznaczyć, skopiować i wkleić do innego programu (np. notatnika)? Jeśli nie (jest to skan/obraz), oprogramowanie AAC nie będzie w stanie go przetworzyć.
    - Czy dokument ma poprawnie zdefiniowany język w metadanych? (Urządzenia AAC muszą wiedzieć, jakiego syntezatora lub biblioteki symboli użyć).
1. Weryfikacja struktury (Dla logicznego przetwarzania)
- **Działanie:** Sprawdź strukturę dokumentu.
- **Sprawdzenie:** Czy dokument posiada tagi nagłówków, list i tabel?
- **Uzasadnienie:** Użytkownicy AAC często nawigują skokowo. Brak struktury powoduje, że urządzenie czyta tekst jako nieprzerwany ciąg, co uniemożliwia zrozumienie skomplikowanych instrukcji.
1. Test praktyczny z narzędziem (Symulacja AAC)**
- **Działanie:** Użyj prostego narzędzia typu "Text-to-Speech" lub czytnika ekranu na udostępnionym pliku.
- **Sprawdzenie:** Czy narzędzie poprawnie odczytuje treść w logicznej kolejności?
    - Jeśli syntezator zacina się, czyta śmieciowe znaki lub milczy – plik nie spełnia wymogu "umożliwienia wykorzystania w alternatywnej komunikacji".
1. Dostępność wielokanałowa**
- **Sprawdzenie:** Czy ten sam plik tekstowy, bez modyfikacji dokonanych przez użytkownika, może być jednocześnie wyświetlony na ekranie i odczytany głosowo? (Wymóg ten jest spełniony domyślnie przez poprawny dokument cyfrowy).


## U.12.02.01.d - U.12.02.01.d Informacje o produktach wykorzystywanych w świadczeniu usługi — czytelność, rozmiar czcionki, kontrast i odstępy (Art. 12 ust. 2 pkt 1 lit. d)

### Warunki wstępne
1. Usługodawca udostępnia informacje o usłudze lub produktach (instrukcje, regulaminy, opisy) w formie **papierowej** (ulotki, plakaty, etykiety na urządzeniach) lub **elektronicznej** (PDF, e-book, strona www, interfejs kiosku).

### Procedura
1. Przepis ten precyzuje wymóg „postrzegalności” informacji wizualnej poprzez narzucenie konkretnych parametrów typograficznych. Należy go interpretować w zależności od nośnika informacji:

1.  **Rozmiar i krój czcionki ("Przewidywalne warunki użytkowania"):**
    -   **Dla formy elektronicznej:** Zgodnie z normą EN 301 549 (klauzula **9.1.4.4** i **10.1.4.4**), tekst musi być skalowalny do **200%** bez użycia technologii wspomagających i bez utraty treści lub funkcjonalności.
    -   **Dla formy papierowej lub zamkniętych interfejsów (np. wyświetlacz na terminalu):** Jeśli tekstu nie da się powiększyć, należy zastosować klauzulę **5.1.4** normy. Wymaga ona, aby wielka litera „H” przyjmowała rozmiar kątowy co najmniej **0,7 stopnia** w przewidywanej odległości widzenia. Oznacza to, że instrukcja wisząca na ścianie (czytana z daleka) musi mieć znacznie większą czcionkę niż ulotka trzymana w ręku.
2.  **Wystarczający kontrast:**
    -   Zgodnie z klauzulą **9.1.4.3** i **10.1.4.3**, minimalny współczynnik kontrastu między tekstem a tłem wynosi **4,5:1** dla zwykłego tekstu oraz **3:1** dla tekstu dużego (powyżej 18 pt lub 14 pt pogrubionego). Wymóg ten dotyczy zarówno ekranów, jak i wydruków.
3.  **Odstępy (Światło tekstu):**
    -   Zgodnie z klauzulą **9.1.4.12** i **10.1.4.12**, aby zapewnić czytelność (szczególnie dla osób z dysleksją lub słabowidzących), użytkownik musi mieć możliwość zmiany odstępów (w wersji cyfrowej) lub odstępy te muszą być „sztywne” ale wystarczające (w druku) wg parametrów: wysokość linii min. 1,5 wielkości czcionki; odstęp po akapicie min. 2 wielkości czcionki.

### Typ oceny
Inspekcja i testy z udziałem użytkowników (osoby z ograniczeniami wzroku)

### Checklist
1. Weryfikacja dokumentów elektronicznych (WWW/PDF)
-   **Działanie (Skalowalność):** Użyj funkcji zoom w przeglądarce lub czytniku PDF, powiększając widok do 200%.
    -   *Sprawdzenie:* Czy tekst nie „rozjeżdża się”, nie nakłada na inne elementy i nie znika poza krawędzią ekranu (wymuszając przewijanie w dwóch wymiarach)? [8]
-   **Działanie (Kontrast):** Użyj narzędzia typu *Colour Contrast Analyser*.
    -   *Sprawdzenie:* Czy stosunek jasności tekstu do tła wynosi min. 4,5:1? (Dla tekstów istotnych, nie dekoracyjnych).
-   **Działanie (Odstępy):** Wstrzyknij style CSS wymuszające zwiększone odstępy (zgodnie z WCAG 1.4.12).
    -   *Sprawdzenie:* Czy tekst pozostaje czytelny i nie jest ucięty?
1. Weryfikacja informacji fizycznej (Papier/Etykiety)
*Dotyczy Art. 7 ust. 1 oraz klauzuli 5.1.4 (analogia dla czytelności).*
-   **Działanie:** Określ typową odległość, z jakiej klient czyta informację (np. 50 cm dla ulotki, 100 cm dla plakatu).
-   **Sprawdzenie (Rozmiar):** Czy czcionka jest wystarczająco duża?
    -   Dla odległości 50 cm, litera „H” powinna mieć min. 6,1 mm wysokości.
    -   Dla odległości 100 cm, litera „H” powinna mieć min. 12,2 mm wysokości.
-   **Sprawdzenie (Powierzchnia):** Czy papier lub laminat nie jest błyszczący? (Odblaski zmniejszają efektywny kontrast i czytelność).
1. Krój czcionki (Inspekcja ekspercka)**
-   **Sprawdzenie:** Czy zastosowano czcionkę bezszeryfową (np. Arial, Verdana, Tahoma) lub inną o prostym kroju? Unikanie czcionek ozdobnych, kursywy i pisania całych zdań wielkimi literami (all-caps) jest kluczowe dla „odpowiedniego kroju” wymaganego ustawą.


## U.12.02.01.e - U.12.02.01.e Informacje o produktach wykorzystywanych w świadczeniu usługi — alternatywna prezentacja treści nietekstowych (Art. 12 ust. 2 pkt 1 lit. e)

### Warunki wstępne
1. Usługodawca udostępnia informacje o usłudze lub produktach w formie papierowej lub elektronicznej.
1. W przekazywanych informacjach występują **treści nietekstowe**, takie jak: zdjęcia, grafiki, wykresy, schematy, pliki audio, materiały wideo, przyciski graficzne.

### Procedura
1. Wymóg ten obliguje usługodawcę do zapewnienia, aby każda informacja wizualna lub dźwiękowa, która nie jest tekstem, posiadała swój odpowiednik (alternatywę), który może być przetworzony przez zmysły użytkownika lub narzędzia wspomagające.

Interpretacja w oparciu o normę EN 301 549:
1.  **Definicja treści nietekstowej:** Zgodnie z definicją w normie (Rozdział 3.1) oraz WCAG 2.1, jest to treść, która nie jest ciągiem znaków możliwym do określenia programistycznie (np. obraz mapy, nagranie dźwiękowe sygnału błędu).
2.  **Alternatywa dla grafiki (Dokumenty i WWW):**
    -   Zgodnie z klauzulami **9.1.1.1** (dla stron www) i **10.1.1.1** (dla dokumentów), wszystkie treści nietekstowe muszą posiadać alternatywę tekstową (np. atrybut`alt`, opis w treści dokumentu), która pełni tę samą funkcję lub przekazuje tę samą informację.
    -   Jeśli grafika jest tylko dekoracją, powinna być oznaczona w sposób, który pozwala technologiom asystującym ją zignorować (np. pusty`alt=""` w HTML lub oznaczenie jako „artefakt” w PDF).
3.  **Alternatywa dla multimediów:**
    -   Dla materiałów wideo z dźwiękiem wymagane są **napisy rozszerzone** (dla niesłyszących) zgodnie z klauzulami **9.1.2.2** i **10.1.2.2**.
    -   Jeśli obraz wideo przekazuje kluczowe informacje, których nie ma w ścieżce dźwiękowej, wymagana jest **audiodeskrypcja** lub alternatywa tekstowa (transkrypcja) zgodnie z klauzulami **9.1.2.3** i **10.1.2.3**.
4.  **Dla informacji papierowej:** W przypadku druku „alternatywna prezentacja” oznacza fizyczne umieszczenie opisu wyjaśniającego obok elementu graficznego (np. opis wykresu w tekście głównym) lub zapewnienie dostępu do wersji cyfrowej spełniającej powyższe wymogi (np. poprzez kod QR prowadzący do dostępnego dokumentu).

### Typ oceny
Inspekcja i testy z udziałem użytkowników (osoby niewidome, niesłyszące lub korzystające z AAC)

### Checklist
1. Weryfikacja grafik w dokumentach elektronicznych (Inspekcja techniczna)
- **Działanie:** Użyj narzędzia inspekcyjnego (np. weryfikator dostępności w edytorze tekstu, czytnik ekranu) na pliku PDF, DOCX lub stronie www.
- **Sprawdzenie:**
    - Czy każdy obraz, wykres i ikona posiada opis alternatywny (tekst zastępczy)?
    - Czy opis ten jest adekwatny? (Błędem jest opis typu "obrazek1.jpg" lub "wykres"). Opis musi przekazywać merytoryczną treść elementu (np. "Wykres słupkowy pokazujący wzrost oprocentowania z 5% do 7%").
    - Czy elementy dekoracyjne są pomijane przez czytnik ekranu?
1. Weryfikacja materiałów wideo (Multimedia)
- **Działanie:** Odtwórz materiał wideo promujący usługę lub instruktażowy.
- **Sprawdzenie (Napisy):** Czy dostępne są napisy? Czy zawierają nie tylko dialogi, ale też istotne dźwięki tła (np. [dźwięk alarmu], [muzyka])?
- **Sprawdzenie (Audiodeskrypcja/Transkrypcja):** Czy jeśli zamkniesz oczy, jesteś w stanie zrozumieć cały przekaz? Jeśli wideo pokazuje informacje tylko wizualnie (np. napisy na ekranie bez lektora), czy dostępna jest dodatkowa ścieżka dźwiękowa (audiodeskrypcja) lub pełna transkrypcja tekstowa opisująca te elementy?
1. Weryfikacja materiałów audio (Tylko dźwięk)
- **Działanie:** Jeśli usługa udostępnia podcasty lub nagrania audio z informacjami.
- **Sprawdzenie:** Czy do nagrania dołączona jest transkrypcja tekstowa (zapis treści)?
1. Testy z użytkownikami (Weryfikacja funkcjonalna)
- **Działanie:** Przeprowadź test z osobą niewidomą (korzystającą z czytnika ekranu).
- **Cel:** Potwierdzenie, czy alternatywy tekstowe dla skomplikowanych wykresów lub schematów (np. schemat procesu reklamacji) są zrozumiałe i pozwalają na zbudowanie w wyobraźni poprawnego modelu informacji.


## U.12.02.02 - U.12.02.02 Informacje elektroniczne — postrzegalność, funkcjonalność, zrozumiałość i kompatybilność (Art. 12 ust. 2 pkt 2)

### Warunki wstępne
1. Usługodawca udostępnia informacje o usłudze lub produktach z nią związanych w formie **elektronicznej** (strona www, dokument PDF, aplikacja mobilna, e-mail).

### Procedura
1. Przepis ten przenosi cztery fundamentalne wymagania WCAG (postrzegalność, funkcjonalność, zrozumiałość, kompatybilność) na grunt informacji udzielanych przez usługodawcę. Oznacza to, że każda informacja cyfrowa (regulamin, cennik, opis oferty, instrukcja obsługi terminala) musi być zgodna z normą EN 301 549 (a tym samym z WCAG 2.1 na poziomie AA).

1.  **Postrzegalność (Perceivability):** Informacja nie może być "niewidzialna" dla zmysłów użytkownika. Musi być dostępna w formie możliwej do odebrania (np. tekst alternatywny dla grafik dla osób niewidomych, napisy dla wideo dla osób niesłyszących, odpowiedni kontrast dla osób słabowidzących).
2.  **Funkcjonalność (Operability):** Użytkownik musi być w stanie nawigować po informacji i korzystać z niej. Wymaga to pełnej dostępności z poziomu klawiatury (bez myszy), braku pułapek na klawiaturę oraz wystarczającego czasu na przeczytanie treści.
3.  **Zrozumiałość (Understandability):** Informacja i interfejs muszą być zrozumiałe. Oznacza to czytelność tekstu, przewidywalne działanie interfejsu (np. nawigacji na stronie) oraz mechanizmy pomocy przy wprowadzaniu danych (jeśli informacja wymaga interakcji).
4.  **Kompatybilność (Robustness / Solidność):** Treść musi być interpretowana poprawnie przez szeroką gamę programów użytkownika, w tym technologie asystujące (czytniki ekranu). Wymaga to poprawnego kodu, użycia standardowych znaczników i właściwego stosowania atrybutów (np. ARIA).

### Typ oceny
Zestaw testów: automatyczne narzędzia, ręczna inspekcja oraz testy z użytkownikami korzystającymi z narzędzi wspomagających

### Checklist
1. Postrzegalność (Alternatywy i Struktura)
- **Działanie:** Sprawdź elementy nietekstowe (grafiki, wideo).
- **Sprawdzenie:**
    - Czy każda grafika niosąca treść posiada tekst alternatywny (`alt`)?
    - Czy materiały wideo posiadają napisy dla niesłyszących?
    - Czy struktura nagłówków (H1-H6) odzwierciedla logiczny układ treści, umożliwiając nawigację skokową osobom niewidomym?
1. Funkcjonalność (Klawiatura)
- **Działanie:** Odłącz mysz lub nie używaj ekranu dotykowego. Spróbuj dotrzeć do każdej informacji i linku używając tylko klawisza`Tab`,`Enter`,`Spacja` i strzałek.
- **Sprawdzenie:**
    - Czy wskaźnik fokusu jest widoczny na każdym elemencie aktywnym?
    - Czy można obsłużyć wszystkie elementy (np. rozwinąć menu, zamknąć pop-up) z klawiatury?
1. Zrozumiałość (Język i Błędy)
- **Działanie:** Sprawdź kod strony/dokumentu.
- **Sprawdzenie:**
    - Czy język dokumentu jest zdefiniowany programowo (np.`<html lang="pl">`)?
    - Jeśli informacja jest formularzem – czy etykiety pól są jednoznacznie powiązane z polami (programowo)?
1. Kompatybilność (Kod i Parsowanie)
- **Działanie:** Użyj walidatora kodu (np. W3C Validator) oraz czytnika ekranu (NVDA/VoiceOver).
- **Sprawdzenie:**
    - Czy kod nie zawiera błędów składniowych (np. niezamknięte tagi, zduplikowane ID), które mogą zmylić technologię asystującą?
    - Czy nazwy, role i wartości elementów interfejsu (np. przycisków, zakładek) są poprawnie komunikowane przez czytnik ekranu?


## U.12.02.03 - U.12.02.03 Kontrola dostępności (WCAG/EN) — postrzegalność, funkcjonalność, zrozumiałość i kompatybilność (Art. 12 ust. 2 pkt 3)

### Warunki wstępne
1. Usługa jest realizowana lub wspierana przez **stronę internetową** lub **aplikację mobilną** (zgodnie z definicjami w normie EN 301 549).

### Procedura
1. Przepis ten nakłada obowiązek pełnej zgodności cyfrowej z normą EN 301 549 (która inkorporuje WCAG 2.1 na poziomie AA). Ustawodawca wymienia cztery podstawowe wymagania:

1.  **Postrzegalność (Perceivable):** Informacje i elementy interfejsu muszą być przedstawione w sposób, który użytkownicy mogą odebrać za pomocą zmysłów (wzroku, słuchu, dotyku). Obejmuje to m.in. alternatywy tekstowe dla grafik (klauzule 9.1.1/11.1.1), napisy dla multimediów (9.1.2/11.1.2) oraz możliwość adaptacji treści (np. tryb wysokiego kontrastu, powiększanie).
2.  **Funkcjonalność (Operable):** Komponenty interfejsu i nawigacja muszą być możliwe do obsłużenia. Kluczowa jest obsługa wyłącznie za pomocą klawiatury (9.2.1/11.2.1), brak pułapek na klawiaturę, wystarczający czas na reakcję oraz nawigacja, która nie wywołuje ataków padaczki.
3.  **Zrozumiałość (Understandable) – Aspekt Jednolitości:** Termin „jednolitość” w ustawie koresponduje z zasadą zrozumiałości, a konkretnie ze spójnością działania.
    -   **Spójna nawigacja (Klauzula 9.3.2.3):** Mechanizmy nawigacyjne powtarzające się na wielu stronach (np. menu, wyszukiwarka) muszą występować w tej samej względnej kolejności.
    -   **Spójna identyfikacja (Klauzula 9.3.2.4):** Komponenty pełniące tę samą funkcję (np. ikona koszyka, strzałka „dalej”) muszą być konsekwentnie identyfikowane (wyglądać i nazywać się tak samo) w całym serwisie.
4.  **Kompatybilność (Robust):** Treść musi być solidna, aby mogła być interpretowana przez różnorodne oprogramowanie, w tym technologie asystujące. Wymaga to poprawnego kodu (parsowanie) oraz właściwego określenia nazw, ról i wartości elementów (ARIA).

### Typ oceny
Pełny raport Kontrolny zgodny z WCAG/EN, w tym lista niezgodności, priorytetów i rekomendacji oraz dowody testów (zrzuty, logi, transkrypcje testów użytkowników).

### Checklist
1. Weryfikacja wymaga pełnego audytu zgodności (metoda ekspercka), łączącego trzy techniki: automatyczną, manualną oraz testy z użytkownikami (technologiami asystującymi).
1. Weryfikacja stron internetowych (Zgodność z Rozdziałem 9 normy EN 301 549)
- **Metoda:** Audyt WCAG 2.1 AA.
- **Krytyczne punkty kontrolne:**
    - Czy kod strony przechodzi walidację bez błędów wpływających na technologie asystujące (np. zduplikowane ID)? (Klauzula 9.4.1.1).
    - Czy cała funkcjonalność jest dostępna z klawiatury (bez myszy)? (Klauzula 9.2.1.1).
    - Czy nawigacja jest spójna na wszystkich podstronach serwisu (warunek „jednolitości”)?
1. Weryfikacja aplikacji mobilnych (Zgodność z Rozdziałem 11 normy EN)
- **Metoda:** Audyt aplikacji pod kątem specyfiki dotykowej i integracji z systemem operacyjnym (iOS/Android).
- **Krytyczne punkty kontrolne:**
    - Czy aplikacja wspiera systemowe funkcje dostępności (np. powiększanie czcionki, TalkBack/VoiceOver)? (Klauzula 11.5.2).
    - Czy orientacja ekranu (pozioma/pionowa) nie jest zablokowana bez uzasadnienia? (Klauzula 11.1.3.4).
    - Czy elementy dotykowe mają odpowiedni rozmiar i odstępy? (Zalecenie z sekcji AAA, ale kluczowe dla funkcjonalności mobilnej).
1. Testy z technologiami asystującymi (Weryfikacja praktyczna)
- **Działanie:** Przeprowadź ścieżki krytyczne usługi (np. logowanie, zakup biletu, przelew) używając czytnika ekranu (NVDA/JAWS/VoiceOver itp.)
- **Sprawdzenie:**
    - Czy użytkownik jest informowany o zmianach stanu (np. błędnie wypełniony formularz, pojawienie się modala)?
    - Czy kolejność fokusu jest logiczna?
1. Wynik końcowy (Raport):
Dokumentacja musi wskazywać konkretne niezgodności z kryteriami sukcesu WCAG (np. "Niezgodność z 1.4.3 - Kontrast"), określać ich priorytet (krytyczny/wysoki/średni) oraz zawierać rekomendacje naprawcze dla programistów.


## U.13 - U.13 Przekazywanie komunikacji głosowej i tekstowej w czasie rzeczywistym — przekazywanie i pełna konwersacja (Art. 13)

### Warunki wstępne
1. Podmiot jest **dostawcą usług telekomunikacyjnych** (oferuje usługi głosowe, np. telefonię komórkową, VoIP).
1. Usługa jest świadczona na rzecz konsumentów (zgodnie z Art. 3 ust. 2 pkt 1).

### Procedura
1. Art. 13 nakłada na operatorów telekomunikacyjnych obowiązek zapewnienia infrastruktury sieciowej obsługującej specyficzne protokoły transmisji danych dla osób z niepełnosprawnościami. Nie chodzi tu o dostarczenie urządzenia (to reguluje Art. 11), lecz o zapewnienie, że **sieć** przepuści odpowiednie sygnały.

1.  **Komunikacja tekstowa w czasie rzeczywistym (RTT):**
    -   Zgodnie z definicją w **Art. 5 pkt 13** ustawy oraz normą EN 301 549 (klauzula 6.2), RTT to przesyłanie tekstu w trybie **znak po znaku** (character-by-character).
    -   Usługa musi gwarantować, że znak wprowadzony przez nadawcę pojawi się u odbiorcy w czasie nie dłuższym niż **500 ms** (klauzula 6.2.4).
    -   **Różnica względem czatu:** Standardowe komunikatory (Instant Messaging) przesyłają tekst blokowo (po naciśnięciu Enter). Taka usługa **nie spełnia** wymogu Art. 13, ponieważ nie pozwala na dynamiczną interakcję (np. przerwanie wypowiedzi) w sposób równoważny rozmowie głosowej.

2.  **Pełna konwersacja (Total Conversation):**
    -   Wymagana tylko wtedy, gdy usługa oferuje transmisję wideo.
    -   Zgodnie z **Art. 5 pkt 19**, jest to jednoczesny przesył trzech strumieni: **wideo + głos + tekst RTT**.
    -   Usługa telekomunikacyjna musi zapewniać odpowiedni QoS (Quality of Service), aby te trzy strumienie były zsynchronizowane. Desynchronizacja ruchu warg (wideo) z głosem powyżej **100 ms** (klauzula 6.5.4 uniemożliwia czytanie z ruchu warg.

3.  **Interoperacyjność:**
    -   Usługa musi umożliwiać połączenia RTT/Total Conversation nie tylko wewnątrz własnej sieci, ale także z innymi operatorami (np. poprzez protokół SIP/IMS zgodnie z normą IETF RFC 4103 lub standardami 3GPP – klauzula 6.2.3).

### Typ oceny
Testy jakości usług (latencja, synchronizacja, kompletność tekstu), inspekcja funkcji oraz testy z udziałem przedstawicieli użytkowników

### Checklist
1. Weryfikacja RTT (Płynność i Opóźnienie)
- **Działanie:** Zestaw połączenie między dwoma terminalami obsługującymi RTT w danej sieci.
- **Sprawdzenie:** Wpisuj tekst na jednym urządzeniu.
    - Czy litery pojawiają się na drugim urządzeniu pojedynczo, w trakcie pisania (zanim naciśniesz "Wyślij")?
    - Czy opóźnienie jest zauważalne (powyżej 0,5 sekundy)? Duże opóźnienia dyskwalifikują usługę jako RTT.
    - Czy RTT działa równocześnie z rozmową głosową (nie rozłącza jej ani nie zawiesza)?
1. Weryfikacja Pełnej Konwersacji (Synchronizacja)
- **Działanie:** Zestaw wideorozmowę.
- **Sprawdzenie:**
    - Czy można jednocześnie przesyłać wideo, rozmawiać głosowo i wysyłać tekst RTT? (Brak obsługi któregokolwiek kanału jednocześnie oznacza brak "pełnej konwersacji").
    - Czy dźwięk jest zsynchronizowany z obrazem? (Test "klapsa" lub obserwacja ruchu warg).
1. Jakość wideo dla języka migowego
- **Sprawdzenie:** Czy usługa zapewnia przepustowość wystarczającą do utrzymania rozdzielczości min. QVGA (320x240) i płynności min. 20 klatek na sekundę?
- **Interpretacja:** Jeśli usługa agresywnie kompresuje obraz przy słabszym zasięgu, czyniąc język migowy nieczytelnym (rozmycie dłoni), usługa nie spełnia wymogu obsługi "pełnej konwersacji" w rozumieniu ustawy.


## U.14.00.01 - U.14.00.01 Dostępność przewodników po programach i informacji o udogodnieniach (Art. 14 pkt 1)

### Warunki wstępne
1. Podmiot jest dostawcą **usług dostępu do audiowizualnych usług medialnych** (np. dostawcą telewizji kablowej, satelitarnej, platformy VOD, aplikacji streamingowej).
1. Usługa udostępnia **Elektroniczny Przewodnik po Programach (EPG)** lub inne mechanizmy informowania o treści (np. katalog filmów).
1. Usługa udostępnia informacje o **udogodnieniach** (napisach, audiodeskrypcji, tłumaczeniu migowym).

### Procedura
1. Wymóg ten nakłada obowiązek pełnej dostępności cyfrowej interfejsu służącego do wyboru treści (EPG). EPG jest kluczową bramą do konsumpcji mediów – jeśli przewodnik jest niedostępny, sama treść (nawet dostępna) staje się nieosiągalna.

Analiza w oparciu o cztery zasady dostępności cyfrowej zdefiniowane w ustawie i uszczegółowione w normie EN 301 549 (Rozdziały 9, 10, 11 w zależności od technologii EPG – www, dokument, aplikacja):

1.  **Postrzegalność (Perceivable):** Informacje w EPG (tytuły, godziny emisji, opisy) muszą być dostępne dla różnych zmysłów.
    -   Użytkownik niewidomy musi móc usłyszeć treść EPG (współpraca z czytnikiem ekranu lub wbudowana funkcja Text-to-Speech – TTS).
    -   Użytkownik słabowidzący musi mieć możliwość zmiany kontrastu i powiększenia tekstu (klauzule 9.1.4/11.1.4).
    -   Informacja o udogodnieniach (np. ikona „AD” dla audiodeskrypcji, „CC” dla napisów) musi być dostępna programowo, a nie tylko graficznie (tekst alternatywny).

2.  **Funkcjonalność (Operable):** Nawigacja po EPG musi być możliwa bez użycia wzroku i precyzyjnych ruchów.
    -   Obsługa wyłącznie pilotem/klawiaturą (bez myszki/ekranu dotykowego) jest kluczowa (klauzule 9.2.1/11.2.1).
    -   Brak pułapek na fokus – użytkownik musi móc wejść i wyjść z każdego menu.
    -   Odpowiedni czas na reakcję – informacje o programie nie mogą znikać zbyt szybko (klauzule 9.2.2/11.2.2).

3.  **Zrozumiałość (Understandable):** Język i działanie interfejsu muszą być jasne.
    -   Informacje o udogodnieniach muszą być jednoznaczne (np. jasne rozróżnienie między napisami dla niesłyszących a napisami obcojęzycznymi).
    -   Spójna nawigacja i identyfikacja elementów (klauzule 9.3.2/11.3.2).

4.  **Kompatybilność (Robust):** EPG musi współpracować z technologiami asystującymi systemu operacyjnego (np. TalkBack na Android TV, VoiceOver na Apple TV) lub posiadać własne wbudowane mechanizmy (np. „Voice Guide” w systemach zamkniętych TV). Zgodność ze standardami (np. HTML, ARIA) jest tu kluczowa.

### Typ oceny
Inspekcja i testy z użytkownikami

### Checklist
1. Weryfikacja dostępności informacji o udogodnieniach
- **Działanie:** Przeszukaj EPG w poszukiwaniu programu oznaczonego jako posiadający audiodeskrypcję lub napisy.
- **Sprawdzenie:**
    -   Czy informacja ta jest odczytywana przez czytnik ekranu (TTS)? (Częsty błąd: ikona jest widoczna, ale syntezator milczy lub czyta „obrazek123”).
    -   Czy można filtrować/wyszukiwać programy po kryterium dostępności (np. „pokaż tylko filmy z audiodeskrypcją”)?
1. Weryfikacja funkcjonalności (Nawigacja)
- **Działanie:** Spróbuj obsłużyć EPG wyłącznie za pomocą strzałek na pilocie lub klawiaturze (Tab/Strzałki).
- **Sprawdzenie:**
    -   Czy wskaźnik fokusu jest zawsze widoczny?
    -   Czy kolejność nawigacji jest logiczna (np. chronologiczna)?
    -   Czy można dotrzeć do każdego elementu (w tym przycisków „Więcej informacji” lub „Nagraj”)?
1. Weryfikacja postrzegalności (Kontrast i Skalowanie)
- **Działanie:** Sprawdź czytelność interfejsu.
- **Sprawdzenie:**
    -   Czy tekst w EPG ma wystarczający kontrast względem tła (min. 4.5:1)?
    -   Czy interfejs oferuje tryb wysokiego kontrastu lub dużej czcionki (dla osób starszych i słabowidzących)?
1. Test z technologią asystującą (TTS)
- **Działanie:** Włącz funkcję lektora (Screen Reader) w urządzeniu (dekoderze/TV).
- **Sprawdzenie:** Przejdź przez siatkę programów. Czy syntezator odczytuje poprawnie: Tytuł, Godzinę rozpoczęcia, Kanał? Czy zapowiedzi głosowe nie nakładają się na dźwięk bieżącego programu w sposób uniemożliwiający zrozumienie (audio ducking)?


## U.14.00.02 - U.14.00.02 Udogodnienia audiowizualne — jakość, synchronizacja i sterowanie (Art. 14 pkt 2)

### Warunki wstępne
1. Podmiot jest dostawcą **usług dostępu do audiowizualnych usług medialnych** (np. operatorem telewizji kablowej, satelitarnej, platformy streamingowej).
1. Dostawca treści (nadawca kanału TV, właściciel filmu w VOD) dostarcza sygnał zawierający udogodnienia: napisy dla niesłyszących, audiodeskrypcję lub tłumaczenie na język migowy.

### Procedura
1. Przepis ten nakłada na dostawcę usługi „transportowej” (przekazującej sygnał) obowiązek zachowania integralności technicznej udogodnień. Usługa musi być „przezroczysta” dla funkcji dostępności.

Analiza w oparciu o normę EN 301 549 (Rozdział 7):
1.  **Przekazywanie i jakość (Preservation):**
    -   Zgodnie z klauzulami **7.1.3** (Zachowanie napisów) i **7.2.3** (Zachowanie audiodeskrypcji), usługa nie może usuwać ani degradować danych o napisach czy dodatkowych ścieżkach audio podczas transmisji, konwersji formatów czy nagrywania (np. funkcja PVR/nagrywarki w dekoderze).
    -   W przypadku języka migowego (będącego częścią obrazu wideo), kompresja sygnału w usłudze nie może być na tyle wysoka, by rozmyć obraz tłumacza (wymagania jakości wideo dla PJM – analogia do klauzuli 6.5.2).
2.  **Synchronizacja:**
    -   Usługa musi gwarantować, że w procesie przesyłu nie nastąpi desynchronizacja („rozjechanie się”) dźwięku i obrazu.
    -   Norma EN 301 549 (klauzule **7.1.2** i **7.2.2**) określa precyzyjny limit: opóźnienie napisów lub audiodeskrypcji względem dźwięku/obrazu nie może przekraczać **100 ms**.
3.  **Sterowanie przez użytkownika:**
    -   Zgodnie z klauzulą **7.3**, mechanizmy włączania napisów i audiodeskrypcji muszą być dostępne na tym samym poziomie interakcji co główne sterowanie multimediami (np. głośność, pauza). Użytkownik musi mieć możliwość łatwego wyboru tych funkcji [i.210].
    -   Zgodnie z klauzulą **7.1.4**, w przypadku napisów przesyłanych jako tekst (a nie „wypalonych” w obrazie), usługa powinna umożliwiać użytkownikowi dostosowanie ich wyglądu (kolor, rozmiar).

### Typ oceny
Inspekcja i testy jakości (jakość wyświetlania, synchronizacja, dostępność sterowania)

### Checklist
1. Weryfikacja integralności przekazu (Zachowanie danych)
- **Działanie:** Uruchom materiał wideo, o którym wiadomo, że nadawca dołączył do niego napisy i audiodeskrypcję.
- **Sprawdzenie:**
    - Czy w menu usługi (dekodera/aplikacji) widoczne są opcje wyboru napisów i dodatkowej ścieżki dźwiękowej?
    - Czy po włączeniu funkcji nagrywania (jeśli dostępna), nagrany materiał nadal zawiera te opcje przy odtwarzaniu? (Utrata napisów w nagraniach jest częstym błędem naruszającym ten przepis).
1. Weryfikacja synchronizacji (Jakość techniczna)
- **Działanie:** Obserwuj moment pojawienia się napisu względem dźwięku mowy.
- **Sprawdzenie:** Czy napisy pojawiają się równo z wypowiadanymi słowami? Opóźnienie zauważalne gołym okiem (powyżej 0,1 sekundy) oznacza brak spełnienia wymogu synchronizacji.
1. Weryfikacja sterowania (Dostępność interfejsu)
- **Działanie:** Spróbuj włączyć audiodeskrypcję w trakcie oglądania programu.
- **Sprawdzenie:**
    - Czy wymaga to zagłębiania się w zaawansowane ustawienia systemowe, czy jest dostępne z poziomu podręcznego menu odtwarzacza (OSD)?
    - Czy sterowanie to jest dostępne za pomocą klawiatury/pilota (bez użycia myszy/ekranu dotykowego)?
1. Weryfikacja personalizacji (Jakość wyświetlania)
- **Działanie:** Sprawdź ustawienia wyświetlania.
- **Sprawdzenie:** Czy usługa umożliwia zmianę wielkości czcionki napisów? Jest to kluczowe dla „właściwego wyświetlania” dla osób słabowidzących. Brak możliwości powiększenia napisów w usłudze VOD/TV jest niezgodnością z normą.


## U.15.01.01.a - U.15.01.01.a Udostępnienie informacji o stanie i warunkach świadczenia usług transportowych (Art. 15 ust. 1 pkt 1 lit. a)

### Warunki wstępne
1. Podmiot jest **usługodawcą** świadczącym usługi towarzyszące transportowi pasażerskiemu (autobusowemu, autokarowemu, wodnemu, lotniczemu lub kolejowemu), np. przewoźnikiem, zarządcą dworca, agentem sprzedaży biletów.
1. Usługodawca udostępnia informacje o taborze (pojazdach) wykorzystywanym do realizacji połączeń.

### Procedura
1. Warto zauważyć, że przepis ten nie dotyczy fizycznej dostępności pojazdów (co regulują inne przepisy techniczne), lecz rzetelności informacji o tym, czy dany pojazd jest dostępny, oraz o bieżącym stanie tej dostępności (np. czy winda w autobusie działa).
1. Wymóg ten nakłada na przewoźników obowiązek dostarczania **dynamicznej i rzetelnej informacji** o dostępności konkretnych pojazdów realizujących kurs. Nie wystarczy ogólna deklaracja "nasza flota jest nowoczesna".

1.  **Szczegółowość informacji:** Zgodnie z przepisem, informacja musi dotyczyć **zapewnienia warunków niezbędnych**, co oznacza konieczność wskazania konkretnych udogodnień w pojeździe (np. obecność rampy, dedykowanego miejsca na wózek, pętli indukcyjnej, toalety dostępnej dla osób z niepełnosprawnością).
2.  **Bieżący stan (Real-time status):** Kluczowym elementem przepisu jest fraza **"w tym o bieżącym stanie"**. Oznacza to, że jeśli przewoźnik wie, iż w danym autobusie/pociągu winda uległa awarii lub podstawiono tabor zastępczy niedostosowany do potrzeb osób na wózkach, ma obowiązek o tym poinformować **przed** podróżą (np. w systemie sprzedaży biletów lub aplikacji mobilnej).
3.  **Dostępność kanału informacyjnego:** Sama informacja o dostępności pojazdu musi być przekazana w sposób dostępny cyfrowo (zgodnie z Art. 12 ust. 2 i normą EN 301 549), aby osoba niewidoma mogła ją samodzielnie odczytać.

### Typ oceny
Przegląd materiałów informacyjnych i dokumentacji dostępności; sprawdzenie obecności alternatywnych formatów i kontaktów do wsparcia.

### Checklist
1. Weryfikacja informacji o flocie (Statyczna) - Dotyczy kompletności danych o taborze.
- **Działanie:** Sprawdź opis połączenia w systemie rozkładowym.
- **Sprawdzenie:** Czy przy konkretnym kursie znajduje się oznaczenie dostępności (np. piktogram wózka inwalidzkiego)?
- **Weryfikacja szczegółowa:** Czy po rozwinięciu szczegółów dostępne są informacje o specyficznych udogodnieniach (np. "pojazd niskopodłogowy", "toaleta przystosowana", "miejsce dla psa asystującego")?
1. Weryfikacja informacji o awariach (Dynamiczna - "Bieżący stan") - Dotyczy kluczowej frazy ustawy "o bieżącym stanie".*
- **Działanie:** Zweryfikuj procedury przewoźnika lub regulamin.
- **Sprawdzenie:** Czy istnieje mechanizm informowania pasażera o zmianie taboru na niedostępny lub o awarii urządzenia wspomagającego (windy/rampy) w konkretnym pojeździe?
    - *Przykład:* Czy aplikacja mobilna wysyła powiadomienie push lub oznacza kurs na czerwono, jeśli winda w pociągu jest nieczynna? Brak takiej informacji w czasie rzeczywistym (o ile przewoźnik o niej wie) jest naruszeniem tego punktu.
1. Dostępność cyfrowa informacji (Format)
- **Działanie:** Użyj czytnika ekranu na stronie z rozkładem jazdy.
- **Sprawdzenie:** Czy informacje o dostępności pojazdu (np. ikony) posiadają tekst alternatywny (np.`alt="Pojazd niskopodłogowy"`)? Jeśli ikona jest "niema" dla czytnika, informacja nie została skutecznie udzielona osobie niewidomej.
1. Alternatywne kanały kontaktu**
*Dotyczy procedur asysty.*
- **Sprawdzenie:** Czy w przypadku braku pewności co do stanu pojazdu, usługodawca podaje bezpośredni kontakt (telefon/czat) w celu weryfikacji dostępności konkretnego kursu dla osoby ze szczególnymi potrzebami?


## U.15.01.01.b - U.15.01.01.b Udostępnienie informacji o obiektach i infrastrukturze (Art. 15 ust. 1 pkt 1 lit. b)

### Warunki wstępne
1. Podmiot jest **usługodawcą** w sektorze transportu pasażerskiego (autobusowy, autokarowy, kolejowy, lotniczy, wodny) lub usług towarzyszących (np. zarządca dworca).
1. Usługa jest realizowana z wykorzystaniem fizycznej infrastruktury (dworce, poczekalnie, punkty obsługi klienta, perony, przystanki).

### Procedura
1. Wymóg ten nakłada na usługodawcę obowiązek publikowania szczegółowych informacji o dostępności architektonicznej i informacyjnej miejsc, w których pasażer przebywa.

Kluczowe aspekty prawne i techniczne:
1.  **Zakres treści (Art. 15 ust. 2):** Informacja nie może być ogólnikowa (np. "Dworzec jest dostępny"). Ustawa wymaga, aby informacja odnosiła się do spełniania wymagań określonych w:
    -   **Art. 6 pkt 1 i 3 ustawy z 2019 r. o zapewnianiu dostępności:** Czyli informacja o wolnych od barier poziomych i pionowych przestrzeniach komunikacyjnych, instalacji urządzeń (windy, pochylnie), informacji o rozkładzie pomieszczeń, zapewnieniu informacji wizualnej i dotykowej (Braille) oraz możliwości wstępu z psem asystującym.
    -   **Art. 5 ust. 1 Prawo budowlane:** Dostępność dla osób niepełnosprawnych w projektowaniu obiektu.
2.  **Otaczająca infrastruktura:** Obowiązek informacyjny wykracza poza budynek. Należy poinformować o dojściach do budynku, parkingach (miejsca dla osób z niepełnosprawnością), czy drodze z przystanku komunikacji miejskiej do wejścia głównego.
3.  **Bieżący stan (Dynamic status):** Podobnie jak w przypadku taboru, kluczowa jest aktualność. Jeśli winda na peron 3 jest w remoncie, informacja o tym musi być dostępna dla pasażera *zanim* ten dotrze na dworzec.
4.  **Alternatywa (Certyfikat):** Zgodnie z **Art. 33**, usługodawca może zastąpić szczegółowy opis informacją o posiadanym ważnym **Certyfikacie Dostępności**, jeśli taki uzyskał.

### Typ oceny
Przegląd publikowanych opisów obiektów i infrastruktury pod kątem kompletności i dostępności formatów.

### Checklist
1. Kompletność opisu (Zgodność z Art. 15 ust. 2)
- **Działanie:** Przeanalizuj zakładkę "Dostępność" lub "Informacje dla pasażera" na stronie www.
- **Sprawdzenie:** Czy opis zawiera informacje o:
    -   Dostępności wejść do budynku (schody/rampy)?
    -   Dostępności ciągów komunikacyjnych (windy/podnośniki)?
    -   Dostępności toalet (czy są, gdzie są, czy posiadają system wzywania pomocy)?
    -   Urządzeniach dla osób niesłyszących (pętle indukcyjne w kasach)?
    -   Oznakowaniu dla osób niewidomych (ścieżki naprowadzające, plany tyflograficzne)?
1. Weryfikacja "Bieżącego stanu"
- **Działanie:** Sprawdź, czy serwis posiada mechanizm informowania o awariach infrastruktury dworcowej (np. "Komunikaty o utrudnieniach").
- **Analiza:** Brak informacji o długotrwałej awarii windy w kluczowym punkcie przesiadkowym jest naruszeniem wymogu informowania o "bieżącym stanie".
1. Lokalizacja informacji (Art. 32 i 33)**
- **Sprawdzenie:** Czy informacje te są zawarte w **regulaminie świadczenia usług** lub innym równoważnym dokumencie podanym do publicznej wiadomości?. Informacja schowana w aktualnościach sprzed roku jest niewystarczająca.
1. Dostępność cyfrowa opisu
- **Sprawdzenie:** Czy mapa dworca lub schemat otoczenia (otaczająca infrastruktura) są dostępne cyfrowo?
    -   Jeśli jest to grafika (mapa), czy posiada opis alternatywny lub wersję tekstową opisującą drogę dojścia? (Zgodnie z Art. 12 ust. 2 pkt 1 lit. e).


## U.15.01.02 - U.15.01.02 Udostępnienie informacji o pomocy świadczonej osobom ze szczególnymi potrzebami (Art. 15 ust. 1 pkt 2)

### Warunki wstępne
1. Podmiot jest **usługodawcą** w sektorze transportu pasażerskiego (autobusowy, autokarowy, kolejowy, lotniczy, wodny).
1. Usługodawca jest zobowiązany do świadczenia pomocy (asysty) na podstawie odpowiednich rozporządzeń unijnych (wymienionych w Art. 5 i Art. 20 ustawy, np. Rozporządzenie 1300/2014 dla kolei, 1107/2006 dla lotnictwa).

### Procedura
1. Należy zwrócić uwagę, że przepis ten dotyczy informacji o pomocy, a nie samej fizycznej realizacji pomocy (którą regulują odrębne rozporządzenia unijne wymienione w Art. 20 ust. 2 ustawy). Kluczowym i często pomijanym aspektem jest wymóg informowania o bieżącym stanie dostępu do tej pomocy (np. chwilowym braku personelu asystującego).
1. Wymóg ten obliguje przewoźników i zarządców infrastruktury do zapewnienia przejrzystości w zakresie procedur wsparcia (asysty). Informacja ta musi być nie tylko dostępna, ale i dynamiczna.

Analiza prawno-techniczna:
1.  **Zakres informacji:** Usługodawca musi precyzyjnie opisać:
    *   **Rodzaj pomocy:** Czego pasażer może oczekiwać? (np. pomoc przy wsiadaniu/wysiadaniu, transport bagażu, pomoc w poruszaniu się po dworcu, asysta psa przewodnika).
    *   **Procedura zgłaszania:** Jak zamówić pomoc? (formularz, telefon, e-mail, czas wyprzedzenia – np. 24h lub 48h przed podróżą).
    *   **Punkty styku:** Gdzie pasażer ma się zgłosić po przybyciu na miejsce (Meeting Points).
2.  **Bieżący stan (Real-time status):** To krytyczny element przepisu. Usługodawca musi informować o **dostępności usługi pomocy w danym momencie**.
    *   *Przykład:* Jeśli na małym dworcu kolejowym usługa asysty jest dostępna tylko w godzinach 8:00–16:00, a pasażer kupuje bilet na pociąg o 20:00, system musi go poinformować o braku możliwości skorzystania z pomocy w tym czasie.
    *   *Awaria:* Jeśli system zgłaszania asysty (np. infolinia) uległ awarii, informacja o alternatywnym kanale kontaktu musi być natychmiast udostępniona.
3.  **Dostępność kanału informacyjnego:** Zgodnie z Art. 12, informacja o pomocy musi być dostępna cyfrowo. Formularz zgłoszeniowy na stronie www musi być możliwy do obsłużenia przy pomocy klawiatury i czytnikiem ekranu (zgodność z EN 301 549 Rozdział 9).

### Typ oceny
Przegląd materiałów informacyjnych i potwierdzenie, że zgłoszenie wsparcia jest możliwe i opisane wraz z kontaktem oraz przewidywanym czasem realizacji.

### Checklist
1. Kompletność procedury (Inspekcja)
- **Działanie:** Przeanalizuj regulamin przewozów lub zakładkę "Dla osób z niepełnosprawnością".
- **Sprawdzenie:** Czy jasno określono:
    - Kanały zgłoszeń (czy jest alternatywa dla telefonu, np. e-mail/SMS dla osób niesłyszących)?
    - Wymagany czas wyprzedzenia (zgodny z przepisami UE)?
    - Godziny dostępności asysty na poszczególnych stacjach/terminalach?
1. Weryfikacja "Bieżącego stanu"
- **Działanie:** Sprawdź opis konkretnego dworca/przystanku w systemie informacyjnym przewoźnika.
- **Sprawdzenie:** Czy widnieje tam informacja o ograniczeniach w świadczeniu pomocy (np. "Brak personelu asystującego w weekendy")? Brak takiej informacji przy jednoczesnym braku możliwości realizacji usługi jest naruszeniem ustawy.
1. Weryfikacja "Bieżącego stanu"
- **Działanie:** Sprawdź opis konkretnego dworca/przystanku w systemie informacyjnym przewoźnika.
- **Sprawdzenie:** Czy widnieje tam informacja o ograniczeniach w świadczeniu pomocy (np. "Brak personelu asystującego w weekendy")? Brak takiej informacji przy jednoczesnym braku możliwości realizacji usługi jest naruszeniem ustawy.
1. Dostępność usług wsparcia (Zgodność z Art. 22 i EN 301 549 Rozdz. 12.2)
- **Sprawdzenie:** Jeśli przewoźnik udostępnia infolinię do zamawiania asysty, czy zapewnia ona alternatywne metody komunikacji dla osób, które nie mogą mówić lub słyszeć (np. czat tekstowy, obsługa SMS, wideo z tłumaczem PJM)?


## U.15.01.03 - U.15.01.03 Udostępnienie informacji o elektronicznych systemach sprzedaży biletów i dostępnych opcjach zakupu (Art. 15 ust. 1 pkt 3)

### Warunki wstępne
1. Podmiot jest **usługodawcą** w sektorze transportu pasażerskiego (autobusowy, autokarowy, kolejowy, lotniczy, wodny).
1. Usługodawca oferuje sprzedaż biletów za pośrednictwem **elektronicznych systemów**, takich jak:
- Terminale samoobsługowe (biletomaty stacjonarne i mobilne).
- Strony internetowe i aplikacje mobilne.
- Systemy biletów elektronicznych.

### Procedura
1. Należy wyraźnie rozróżnić ten wymóg od Art. 12. Podczas gdy Art. 12 nakazuje, aby systemy były dostępne, Art. 15 ust. 1 pkt 3 nakazuje informować o tych systemach. Jest to kluczowe dla pasażera, który musi wiedzieć, czy na danej stacji kupi bilet samodzielnie (czy biletomat jest dostępny), czy musi skorzystać z kanału alternatywnego.
1. Wymóg ten obliguje przewoźnika do zapewnienia pełnej przejrzystości co do kanałów dystrybucji biletów. Pasażer ze szczególnymi potrzebami musi otrzymać informację nie tylko o cenie biletu, ale o **technicznej możliwości jego zakupu**.

Analiza w kontekście ustawy i normy EN 301 549:
1.  **Opis funkcjonalności urządzeń (Terminale):** Jeśli przewoźnik korzysta z biletomatów (zgodnie z Art. 3 ust. 1 pkt 2 lit. b), musi poinformować, czy urządzenia te posiadają funkcje dostępności (zgodnie z Art. 9 ustawy i Rozdziałem 8 normy EN 301 549), np. wyjście słuchawkowe, obsługę bezwzrokową, regulację wysokości.
2.  **Opis kanałów cyfrowych:** Informacja musi wskazywać, które aplikacje lub serwisy www umożliwiają zakup biletu w sposób dostępny (zgodny z WCAG).
3.  **Procedury awaryjne (Alternatywy):** Jest to kluczowy aspekt informacyjny. Co w sytuacji, gdy biletomat na peronie nie działa lub jest niedostępny dla osoby na wózku? Usługodawca musi jasno poinformować o alternatywnym sposobie zakupu (np. "zakup u kierowcy bez opłaty dodatkowej", "zakup przez infolinię").

### Typ oceny
Przegląd materiałów informacyjnych oraz potwierdzenie, że użytkownicy mają jasne instrukcje dotyczące zakupu i uzyskania pomocy.

### Checklist
1. Weryfikacja informacji o biletomatach
- **Działanie:** Sprawdź stronę internetową lub regulamin przewozu w sekcji "Bilety".
- **Sprawdzenie:** Czy znajduje się tam informacja o dostępności biletomatów?
    - *Przykład dobrej praktyki:* "Biletomaty serii X na stacjach A i B posiadają interfejs głosowy (minijack) i klawiaturę brajlowską".
    - *Błąd:* Brak informacji, czy biletomat jest możliwy do obsłużenia przez osobę niewidomą, zmusza ją do fizycznego sprawdzenia urządzenia na miejscu, co jest barierą.
1. Weryfikacja informacji o aplikacjach mobilnych
- **Sprawdzenie:** Czy usługodawca informuje, która z rekomendowanych aplikacji do zakupu biletów jest certyfikowana lub przetestowana pod kątem współpracy z czytnikami ekranu (VoiceOver/TalkBack)?
1. Procedura zakupu alternatywnego
- **Działanie:** Przeanalizuj instrukcje dla pasażera.
- **Sprawdzenie:** Czy istnieje jasna informacja, co zrobić, gdy elektroniczny system zawiedzie lub jest niedostępny dla osoby z niepełnosprawnością?
    - Czy podano kontakt do wsparcia technicznego lub kasjera?
    - Czy informacja ta jest dostępna w formacie dostępnym cyfrowo (zgodnie z Art. 12 ust. 2)?
1. Dostępność samej informacji**
- **Sprawdzenie:** Czy instrukcja obsługi biletomatu (np. umieszczona w sieci jako PDF lub na obudowie urządzenia) spełnia wymogi Art. 12 ust. 2 pkt 1 (wielokanałowość, zrozumiałość, kontrast)? Informacja o systemie sprzedaży musi być dostępna dla osoby, która nie może jej zobaczyć.


## U.15.01.04 - U.15.01.04 Udostępnienie informacji o podróży w czasie rzeczywistym — treść i sposoby powiadamiania (Art. 15 ust. 1 pkt 4)

### Warunki wstępne
1. Podmiot jest **usługodawcą** w sektorze transportu pasażerskiego (autobusowy, autokarowy, kolejowy, lotniczy, wodny).
1. Usługodawca posiada systemy dynamicznej informacji pasażerskiej (aplikacje, strony www, tablice elektroniczne, terminale).

### Procedura
1. Wymóg ten nakłada obowiązek dostarczania dynamicznych danych o przebiegu podróży. Należy go interpretować ściśle według definicji zawartej w **Art. 5 pkt 8 ustawy**, która określa zakres przedmiotowy i czasowy tej informacji.

1.  **Zakres informacji:** Zgodnie z ustawą, informacja o podróży w czasie rzeczywistym **musi** obejmować:
    *   a) rozkłady jazdy, lotów lub rejsów,
    *   b) dalsze połączenia tym samym środkiem transportu,
    *   c) podstawowe możliwości przesiadek,
    *   d) **odwołania** danej podróży,
    *   e) **opóźnienia** w rozpoczęciu podróży,
    *   f) **zakłócenia** ruchu.
2.  **Czas reakcji ("Niezwłocznie"):** Ustawa precyzuje, że informacje o odwołaniach, opóźnieniach i zakłóceniach (lit. d–f) muszą być udzielane **niezwłocznie po ich otrzymaniu** przez usługodawcę.
3.  **Kanały dystrybucji:** Informacja ta ma być przekazywana przez systemy dynamicznej informacji pasażerskiej: strony internetowe, aplikacje mobilne, interaktywne ekrany informacyjne lub terminale samoobsługowe.
4.  **Dostępność cyfrowa komunikatu:** Zgodnie z Art. 12 ust. 2 i normą EN 301 549, dynamiczna zmiana treści (np. pojawienie się komunikatu o opóźnieniu na ekranie lub w aplikacji) musi być zakomunikowana technologiom asystującym. Wymaga to zgodności z kryterium **Status Messages (Komunikaty o stanie)** – klauzula **9.4.1.3 / 11.4.1.3** normy EN 301 549 [5, 6]. Użytkownik niewidomy musi usłyszeć o zmianie statusu (opóźnieniu) bez konieczności ponownego przesuwania fokusu po całej stronie.

### Typ oceny
Przegląd materiałów informacyjnych i kanałów powiadamiania; weryfikacja dostępności alternatywnych formatów i kontaktu do wsparcia.

### Checklist
1. Kompletność danych (Zgodność z Art. 5 pkt 8)
- **Działanie:** Sprawdź aplikację mobilną lub tablicę odjazdów w momencie wystąpienia zakłóceń (lub symulacji).
- **Sprawdzenie:** Czy system wyświetla informacje o czasie opóźnienia i odwołaniach?
    - *Błąd:* Wyświetlanie tylko statycznego rozkładu jazdy bez uwzględnienia bieżących opóźnień jest naruszeniem wymogu informowania o "podróży w czasie rzeczywistym".
1. Dostępność komunikatów dynamicznych (Software/Web)
- **Działanie:** Uruchom czytnik ekranu (np. TalkBack/VoiceOver) na stronie/aplikacji śledzącej pojazd.
- **Sprawdzenie:** Czy w momencie aktualizacji czasu przyjazdu lub pojawienia się komunikatu o awarii, czytnik ekranu automatycznie ogłasza tę informację (np. "Uwaga: pociąg opóźniony 10 minut")?
    - Jeśli informacja wizualna się zmienia, a czytnik milczy – usługa nie spełnia wymogu dostępności informacji w czasie rzeczywistym.
1. Ekrany i terminale (Hardware/Interfejs)
- **Działanie:** Podejdź do interaktywnego kiosku informacyjnego na dworcu.
- **Sprawdzenie:** Czy informacje o opóźnieniach prezentowane na ekranie są dostępne w trybie bezwzrokowym (przez gniazdo słuchawkowe i syntezę mowy - zgodnie z Art. 9 ust. 1)? Czy osoby słabosłyszące mają dostęp do tych informacji wizualnie (tekst), jeśli są one ogłaszane głosowo przez system nagłośnienia (wymóg dwukanałowości - Art. 12 ust. 2 pkt 1 lit. a)?
1. Alternatywne kanały wsparcia
- **Sprawdzenie:** Czy w przypadku awarii systemów cyfrowych wskazano kontakt (np. numer infolinii lub punkt obsługi), gdzie pasażer ze szczególnymi potrzebami może uzyskać te informacje werbalnie?


## U.15.02.01 - U.15.02.01 Udostępnienie informacji o dostępności obiektów i wsparciu dla osób ze szczególnymi potrzebami (Art. 15 ust. 2 pkt 1)

### Warunki wstępne
1. Podmiot jest **usługodawcą** (transportowym lub usług towarzyszących) udostępniającym klientom fizyczną infrastrukturę (np. dworzec, terminal, biuro obsługi).
1. Podmiot realizuje obowiązek informacyjny z Art. 15 ust. 1 pkt 1 lit. b (informowanie o budynkach).

### Procedura
1. Warto podkreślić, że ten przepis nie nakłada nowych wymogów architektonicznych na sam budynek, lecz nakazuje szczegółowe informowanie o stanie faktycznym w odniesieniu do konkretnych kryteriów z ustawy z 2019 r.
1. Przepis ten precyzuje, co dokładnie musi znaleźć się w opisie dostępności budynku. Nie wystarczy ogólne stwierdzenie "dworzec dostępny". Ustawa wymaga odniesienia się do konkretnych punktów ustawy z 2019 r.:

1.  **Przestrzenie komunikacyjne (Art. 6 pkt 1 ustawy z 2019 r.):** Informacja musi opisywać stan:
    *   Ciągów komunikacyjnych (korytarzy, schodów, wind).
    *   Wolność od barier poziomych (progów) i pionowych (schodów bez wind).
    *   Dostęp do wszystkich pomieszczeń (z wyłączeniem technicznych).
2.  **Informacja o rozkładzie pomieszczeń (Art. 6 pkt 3 lit. a ustawy z 2019 r.):** Usługodawca musi poinformować, czy i w jaki sposób zapewnia informację o rozkładzie pomieszczeń (np. "W holu głównym znajduje się plan dotykowy", "Tablice informacyjne posiadają duży kontrast").
    *   **Wymóg wielokanałowości:** Informacja o rozkładzie pomieszczeń musi być dostępna w sposób **wizualny i dotykowy lub głosowy**.
3.  **Pies asystujący (Art. 6 pkt 3 lit. b ustawy z 2019 r.):** Informacja musi wyraźnie potwierdzać (lub opisywać warunki) wstępu do budynku z psem asystującym.
4.  **Dostępność cyfrowa opisu:** Sama informacja o tych udogodnieniach (opublikowana na www lub w aplikacji) musi być dostępna cyfrowo zgodnie z Art. 12 ust. 2 (np. tekst alternatywny dla mapy dworca).

### Typ oceny
Przegląd i Kontrola materiałów informacyjnych, weryfikacja obecności alternatywnych formatów oraz potwierdzenie możliwości zamówienia wsparcia (kontakt, system rezerwacji).

### Checklist
1. Weryfikacja opisu architektonicznego (Zgodność z Art. 6 pkt 1 ustawy z 2019 r.)
- **Działanie:** Przeczytaj opis dworca/terminala na stronie www.
- **Sprawdzenie:** Czy tekst zawiera informacje o:
    -   Wejściach bezbarierowych (lub lokalizacji podjazdów)?
    -   Dostępności wind/platform na poszczególne poziomy/perony?
    -   Dostępności toalet (jeśli są częścią infrastruktury obsługi pasażera)?
1. Weryfikacja informacji o nawigacji (Zgodność z Art. 6 pkt 3 lit. a ustawy z 2019 r.)
- **Działanie:** Szukaj informacji o systemach orientacji przestrzennej.
- **Sprawdzenie:** Czy usługodawca informuje o obecności:
    -   Planów tyflograficznych (map dotykowych)?
    -   Oznaczeń w alfabecie Braille'a (np. na poręczach, przyciskach wind)?
    -   Systemów głosowych (np. beacony, komunikaty głosowe w windach)?
    -   *Błąd:* Brak wzmianki o systemach dla osób niewidomych sugeruje niespełnienie wymogu informacyjnego, nawet jeśli systemy te fizycznie istnieją.
1. Weryfikacja informacji o psach asystujących
- **Działanie:** Sprawdź regulamin lub zakładkę "Dostępność".
- **Sprawdzenie:** Czy znajduje się tam wyraźna informacja o prawie wstępu z psem asystującym? (Jest to kluczowe dla upewnienia pasażera, że nie zostanie wyproszony przez ochronę).
1. Weryfikacja informacji o psach asystujących
- **Działanie:** Sprawdź regulamin lub zakładkę "Dostępność".
- **Sprawdzenie:** Czy znajduje się tam wyraźna informacja o prawie wstępu z psem asystującym? (Jest to kluczowe dla upewnienia pasażera, że nie zostanie wyproszony przez ochronę).


## U.15.02.02 - U.15.02.02 Informacja o spełnieniu podstawowych wymagań bezpieczeństwa i dostępności obiektów (Art. 15 ust. 2 pkt 2)

### Warunki wstępne
1. Podmiot jest **usługodawcą** (transportowym lub usług towarzyszących) udostępniającym klientom fizyczną infrastrukturę (np. dworzec, poczekalnia, punkt sprzedaży biletów).
1. Podmiot realizuje obowiązek informacyjny dotyczący opisu budynków i infrastruktury (zgodnie z Art. 15 ust. 1 pkt 1 lit. b).

### Procedura
1. Przepis ten doprecyzuje zakres merytoryczny informacji o budynku. Usługodawca musi odnieść się do dwóch konkretnych aspektów zdefiniowanych w Prawie budowlanym:

1.  **Bezpieczeństwo użytkowania (Art. 5 ust. 1 pkt 1 lit. d Prawa budowlanego):**
    -   Informacja nie może ograniczać się do wygody, musi dotyczyć bezpieczeństwa.
    -   Należy poinformować o elementach takich jak: nawierzchnie antypoślizgowe, odpowiednie oświetlenie ciągów komunikacyjnych, zabezpieczenie przeszkleń (oznaczenia kontrastowe na szklanych drzwiach/witrynach), stabilność poręczy i balustrad.
    -   W kontekście osób ze szczególnymi potrzebami, bezpieczeństwo użytkowania obejmuje również **procedury ewakuacyjne** (np. informacja o strefach oczekiwania na ewakuację dla osób na wózkach).

2.  **Niezbędne warunki do korzystania z obiektów (Art. 5 ust. 1 pkt 4 Prawa budowlanego):**
    -   Przepis ten nakazuje zapewnienie warunków dla osób niepełnosprawnych i starszych.
    -   W informacji pasażerskiej/klienckiej musi znaleźć się opis rozwiązań niwelujących bariery, takich jak: pochylnie (rampy) o odpowiednim kącie nachylenia, windy, odpowiednia szerokość drzwi i przejść, dostępność toalet (przestrzeń manewrowa, pochwyty).

**Interpretacja praktyczna:**
Usługodawca nie może napisać jedynie „Obiekt spełnia wymogi prawa”. Musi dostarczyć konkretnych danych, które pozwolą osobie z niepełnosprawnością ocenić, czy będzie w stanie bezpiecznie skorzystać z usługi (np. „Wejście posiada drzwi obrotowe nieprzystosowane dla wózków, wejście boczne z domofonem znajduje się 10 m dalej”).

### Typ oceny
Przegląd publikowanych oświadczeń i dokumentów informacyjnych oraz potwierdzenie, że zawierają one wymienione elementy i wskazania kontaktowe.

### Checklist
1. Weryfikacja informacji o bezpieczeństwie (Safety)
- **Sprawdzenie:** Czy w opisie obiektu znajdują się informacje dotyczące bezpieczeństwa poruszania się?
    - Czy wskazano, że powierzchnie są antypoślizgowe (istotne dla osób o ograniczonej mobilności)?
    - Czy opisano sposób oznaczenia powierzchni szklanych (istotne dla osób słabowidzących)?
    - Czy podano informacje o procedurach ewakuacyjnych dla osób, które nie mogą korzystać ze schodów (np. czy są krzesła ewakuacyjne, czy windy są pożarowe)?
1. Weryfikacja informacji o dostępności architektonicznej
- **Sprawdzenie:** Czy opis zawiera szczegóły dotyczące:
    - **Dojścia:** Czy jest bezbarierowe, czy wymaga pokonania schodów?
    - **Toalet:** Czy w strefie obsługi klienta znajduje się toaleta dostępna?
    - **Obsługi:** Czy stanowiska obsługi są obniżone lub dostępne dla osób na wózkach?
1. Aktualność i kontakt („Bieżący stan”)
- **Działanie:** Zweryfikuj, czy podano kontakt do zarządcy obiektu lub punktu informacyjnego.
- **Uzasadnienie:** Zgodnie z Art. 15 ust. 1, informacja musi dotyczyć „bieżącego stanu”. Jeśli winda ulegnie awarii, opis statyczny staje się nieprawdziwy w kontekście bezpieczeństwa i dostępności. Musi istnieć kanał zgłaszania usterek lub uzyskania informacji o awariach.
1. Dostępność cyfrowa informacji
- **Sprawdzenie:** Czy dokument zawierający te informacje (np. Plan Ewakuacji, Opis Dworca) jest dostępny cyfrowo? (zgodnie z Art. 12 ust. 2 i Art. 15 ust. 1). Częstym błędem jest publikowanie planów ewakuacyjnych jako skanów (obrazków) bez opisu tekstowego, co czyni informację o bezpieczeństwie niedostępną dla osób niewidomych.


## U.16.00.01 - U.16.00.01 Zapewnienie dostępności usług bankowości detalicznej — identyfikacja, podpisy elektroniczne, bezpieczeństwo i usługi płatnicze (Art. 16 pkt 1)

### Warunki wstępne
1. Podmiot świadczy usługi **bankowości detalicznej** (zgodnie z definicją w Art. 5 pkt 30 ustawy: kredyty konsumenckie, hipoteczne, usługi płatnicze, pieniądz elektroniczny) [1-3].
1. Usługa wymaga od klienta uwierzytelnienia (logowania), autoryzacji transakcji (podpisu/zatwierdzenia) lub przejścia procedur bezpieczeństwa.

### Procedura
1. Wymóg ten nakłada na banki obowiązek zapewnienia, aby krytyczne ścieżki procesowe (logowanie, przelew, podpisanie umowy) były dostępne cyfrowo zgodnie z zasadami postrzegalności, funkcjonalności, zrozumiałości, kompatybilności (fundamentalne zasady WCAG).

Kluczowe aspekty techniczne wg normy EN 301 549:
1.  **Metody identyfikacji (Biometria):** Zgodnie z klauzulą **5.3 (Biometria)**, jeśli bank stosuje biometrię (odcisk palca, FaceID) do logowania lub autoryzacji, nie może to być jedyna metoda. Musi istnieć alternatywa dla osób, które nie mogą użyć danej cechy biologicznej (np. PIN, hasło).
2.  **Bezpieczeństwo (Limity czasu):** Sesje bankowe wygasają ze względów bezpieczeństwa. Zgodnie z klauzulą **9.2.2.1 / 11.2.2.1 (Dostosowanie czasu)**, użytkownik musi zostać ostrzeżony przed wylogowaniem i mieć możliwość przedłużenia sesji (np. przez naciśnięcie spacji), chyba że jest to wyjątek czasu rzeczywistego (np. aukcja walutowa).
3.  **Składanie podpisów elektronicznych:** Proces ten musi być:
    *   **Postrzegalny:** Dokument do podpisania musi być dostępny dla czytnika ekranu (nie skan obrazkowy), aby osoba niewidoma wiedziała, co podpisuje (zgodność z Rozdziałem 10 normy).
    *   **Funkcjonalny:** Mechanizm złożenia podpisu (np. wpisanie kodu SMS, kliknięcie przycisku w aplikacji) musi być obsługiwalny bez użycia myszy (klawiatura/przełączniki).
4.  **Zapobieganie błędom (Usługi płatnicze):** Zgodnie z klauzulą **9.3.3.4 / 11.3.3.4 (Zapobieganie błędom w sprawach finansowych)**, system musi umożliwiać sprawdzenie, potwierdzenie i korektę danych przelewu przed jego ostatecznym wysłaniem lub transakcja musi być odwracalna.

### Typ oceny
Przegląd dokumentacji i materiałów informacyjnych; weryfikacja zgodności interfejsów z technologiami wspomagającymi; potwierdzenie dostępności alternatywnych metod identyfikacji i podpisu oraz procedur kontaktowych.

### Checklist
1. Weryfikacja metod identyfikacji (Biometria i Alternatywy)
- **Działanie:** Spróbuj zalogować się lub autoryzować transakcję.
- **Sprawdzenie:** Czy system wymusza użycie biometrii (np. "konieczność mrugnięcia do kamery") bez żadnej innej opcji?
    - *Wynik:* Jeśli nie ma alternatywy (np. hasła/PINu) dostępnej dla osoby, która nie może wykonać gestu lub nie posiada danej cechy fizycznej, wymóg nie jest spełniony.
1. Weryfikacja procesu płatności (Zapobieganie błędom)
- **Działanie:** Wypełnij formularz przelewu.
- **Sprawdzenie:** Czy przed ostatecznym obciążeniem rachunku system wyświetla ekran podsumowania, na którym można zweryfikować kwotę i numer konta oraz cofnąć się do edycji? Brak takiego kroku (natychmiastowe wysłanie po wpisaniu danych) jest naruszeniem standardu dla transakcji finansowych.
1. Weryfikacja dokumentów do podpisu (Podpis elektroniczny)
*Dotyczy Art. 16 pkt 1 (składanie podpisów) i Rozdziału 10 normy.*
- **Działanie:** Otwórz dokument, który wymaga "podpisania" (zaakceptowania) w systemie bankowym.
- **Sprawdzenie:** Czy treść umowy/regulaminu jest czytana przez czytnik ekranu? Czy nawigacja po dokumencie jest logiczna? Podpisanie dokumentu, którego treści użytkownik nie może poznać (bo jest np. obrazkiem tekstu), narusza zasadę postrzegalności i zrozumiałości.
1. Weryfikacja tokenów sprzętowych/mobilnych (Kompatybilność)**
*Dotyczy klauzul 11.5.2 (Współpraca z technologią wspomagającą).*
- **Sprawdzenie:** Jeśli do autoryzacji wymagane jest przepisanie kodu z aplikacji mobilnej (tokena), czy ten kod jest odczytywany przez czytnik ekranu (TalkBack/VoiceOver) w telefonie? Jeśli aplikacja tokena jest "niema", usługa płatnicza jest niedostępna.


## U.16.00.02 - U.16.00.02 Udostępnienie informacji w języku polskim i na żądanie w języku obcym (poziom B2) (Art. 16 pkt 2)

### Warunki wstępne
1. Podmiot świadczy usługi **bankowości detalicznej** (kredyty, rachunki, usługi płatnicze, pieniądz elektroniczny – zgodnie z definicją w Art. 5 pkt 30).
1. Usługodawca komunikuje się z konsumentem (udziela informacji, przedstawia umowy).

### Procedura
1. Wymóg ten ma dwa kluczowe aspekty: prawny (zgoda) i lingwistyczny (poziom B2).

1.  **Zasada języka polskiego:** Domyślnym językiem komunikacji i dokumentów jest język polski. Każda informacja (regulamin, umowa, komunikat w aplikacji) musi być dostępna po polsku.
2.  **Tryb konsensualny dla języka obcego:** Bank może przekazywać informacje w innym języku (np. angielskim, ukraińskim) tylko wtedy, gdy uzyska na to **zgodę** konsumenta. Oznacza to, że bank nie może jednostronnie narzucić obsługi w języku obcym, nawet jeśli jest to bank zagraniczny działający w Polsce.
3.  **Standard jakości (Poziom B2):** Ustawodawca narzuca konkretny poziom skomplikowania języka obcego – **B2 (średniozaawansowany wyższy)** wg ESOKJ (CEFR).
    -   Język nie może być zbyt prymitywny (uniemożliwiający precyzyjne opisanie warunków finansowych).
    -   Język nie może być zbyt hermetyczny/akademicki (poziom C2), jeśli utrudniałoby to zrozumienie przeciętnemu użytkownikowi posługującemu się tym językiem jako obcym.
    -   Wymóg ten chroni konsumenta przed sytuacją, w której otrzymuje dokumenty w „niezrozumiałym” żargonie lub w „łamanym” języku (np. słabe tłumaczenie maszynowe).
4.  **Relacja z Art. 12 (Zrozumiałość):** Nawet jeśli informacja jest w języku obcym (za zgodą), nadal musi spełniać wymogi Art. 12, czyli być **postrzegalna** (np. odpowiedni kontrast, dostępna dla czytnika ekranu) i **zrozumiała** (logiczna struktura).

### Typ oceny
Przegląd polityki językowej, weryfikacja dostępności kanałów zgłoszeń preferencji językowej oraz losowa kontrola jakości tłumaczeń/wersji obcojęzycznych.

### Checklist
1. Weryfikacja dostępności języka polskiego (Fundamentalny)
- **Działanie:** Sprawdź kluczowe dokumenty (TOiP, Regulamin) oraz interfejs bankowości elektronicznej.
- **Sprawdzenie:** Czy wszystkie elementy są dostępne w języku polskim?
    - *Błąd krytyczny:* Sytuacja, w której część interfejsu (np. komunikaty błędów, opisy nowych funkcji) wyświetla się w języku obcym bez uprzedniej zmiany ustawień przez użytkownika.
1. Weryfikacja mechanizmu zgody (Procedura)
- **Działanie:** Spróbuj zmienić język komunikacji na inny niż polski (np. w aplikacji lub u doradcy).
- **Sprawdzenie:**
    - Czy system/pracownik pyta o zgodę na zmianę języka?
    - Czy zgoda ta jest dobrowolna i odwracalna (można wrócić do języka polskiego)?
    - Czy po zmianie języka **cała** ścieżka krytyczna (np. zawarcie umowy lokaty) jest dostępna w wybranym języku, czy też następuje mieszanie języków (co narusza wymóg zrozumiałości z Art. 12)?
1. Weryfikacja poziomu B2 (Audyt treści)
- **Działanie:** Pobierz dokument w języku obcym (np. Information Sheet) oferowany przez bank.
- **Analiza:** Czy tekst odpowiada poziomowi B2?
    - *Wskaźniki B2:* Tekst powinien pozwalać na zrozumienie głównych wątków w złożonych tekstach na tematy konkretne i abstrakcyjne, łącznie z dyskusjami technicznymi w zakresie specjalności (tu: finanse).
    - *Weryfikacja:* Jeśli tekst jest naszpikowany archaicznym słownictwem prawniczym (poziom C2+) lub zawiera błędy gramatyczne utrudniające zrozumienie (poniżej B1), wymóg nie jest spełniony. W przypadku wątpliwości wymagana jest opinia tłumacza przysięgłego lub filologa.
1. Dostępność cyfrowa wersji obcojęzycznych
*Dotyczy Art. 12 ust. 2 pkt 1 lit. c (formaty tekstowe).*
- **Sprawdzenie:** Czy dokumenty w języku obcym (np. PDF w j. angielskim) są dostępne cyfrowo (otagowane, z warstwą tekstową), tak jak ich polskie odpowiedniki? Częstym błędem jest dbanie o dostępność wersji polskich, a udostępnianie wersji obcojęzycznych jako niedostępnych skanów.


## U.17.00.01 - U.17.00.01 Synchronizacja tekstu i dźwięku w książkach elektronicznych (Art. 17 pkt 1)

### Warunki wstępne
1. Podmiot świadczy **usługę rozpowszechniania książek elektronicznych** (zgodnie z definicją w Art. 5 pkt 33: dostarcza pliki e-booków wraz z oprogramowaniem do ich odczytu).
1. W ofercie znajdują się książki elektroniczne zawierające jednocześnie warstwę tekstową i warstwę audio (np. audiobooki z tekstem, e-booki z funkcją *Media Overlays*, publikacje multimedialne).
1. Przepis nie dotyczy standardowych audiobooków (bez tekstu) ani standardowych e-booków (bez nagranej ścieżki lektorskiej, polegających tylko na syntezie mowy urządzenia).

### Procedura
1. Wymóg ten obliguje dostawcę usługi do zapewnienia, aby format pliku oraz udostępniane oprogramowanie (czytnik/aplikacja) obsługiwały mechanizm śledzenia tekstu równolegle z odtwarzanym dźwiękiem.

Analiza techniczna i prawna:
1.  **Synchronizacja (Media Overlays):** W kontekście standardów e-booków (np. EPUB 3), synchronizacja oznacza techniczne powiązanie fragmentu tekstu (np. zdania lub akapitu) z konkretnym znacznikiem czasowym w pliku audio. Pozwala to na:
    *   Wizualne wyróżnienie czytanego fragmentu (pomocne dla osób z dysleksją lub słabowidzących).
    *   Nawigację po audio poprzez kliknięcie w tekst.
2.  **Oprogramowanie odczytujące:** Zgodnie z definicją usługi (Art. 5 pkt 33), jeśli dystrybutor dostarcza własną aplikację do czytania, musi ona technicznie obsługiwać tę synchronizację (nie może ignorować metadanych SMIL zawartych w pliku EPUB).
3.  **Multimedia wewnątrz książki:** Jeśli książka zawiera osadzone klipy wideo lub audio (niebędące narracją całej książki), zastosowanie mają ogólne wymogi dla multimediów z normy EN 301 549 (Rozdział 10.1.2 dla dokumentów), wymagające synchronizacji napisów lub audiodeskrypcji z materiałem głównym.

### Typ oceny
Przegląd metadanych i plików publikacji; test w czytniku z dostępnością; kontrola jakości napisów/transkrypcji i poprawności synchronizacji.

### Checklist
1. Weryfikacja mechanizmu synchronizacji (Media Overlays / SMIL)
- **Działanie:** Otwórz e-booka zawierającego narrację w dedykowanej aplikacji usługodawcy. Uruchom odtwarzanie dźwięku.
- **Sprawdzenie:**
    - Czy tekst na ekranie zmienia swój wygląd (np. podświetlenie, zmiana koloru) w miarę czytania przez lektora?
    - Czy tekst przesuwa się automatycznie (auto-scroll), aby czytany fragment był zawsze widoczny?
    - *Błąd:* Odtwarzanie dźwięku działa jak w zwykłym odtwarzaczu muzyki, bez żadnego związku z wyświetlanym tekstem.
1. Weryfikacja interakcji (Nawigacja)
- **Działanie:** Kliknij/dotknij w losowy akapit tekstu na dalszych stronach książki.
- **Sprawdzenie:** Czy odtwarzanie dźwięku przeskoczyło do wskazanego momentu? (Brak tej funkcji oznacza brak funkcjonalnej synchronizacji dla użytkownika).
1. Weryfikacja wideo (Jeśli dotyczy)
- **Działanie:** Jeśli e-book zawiera osadzone filmy z wypowiedziami.
- **Sprawdzenie:** Czy napisy (jeśli są dostępne) pojawiają się w tym samym czasie, co wypowiadane słowa? (Tolerancja błędu wynosi 100 ms zgodnie z normą EN 301 549 klauzula 10.1.2.2).
1. Dostępność kontrolek synchronizacji
- **Sprawdzenie:** Czy funkcje sterujące synchronizacją (włącz/wyłącz podświetlenie, pauza, prędkość czytania) są dostępne dla technologii asystujących (np. czy przyciski mają etykiety tekstowe dla czytnika ekranu)?


## U.17.00.02 - U.17.00.02 Interoperacyjność i kompatybilność plików książek elektronicznych (Art. 17 pkt 2)

### Warunki wstępne
1. Podmiot świadczy **usługę rozpowszechniania książek elektronicznych** (dostarcza pliki e-booków, np. EPUB, PDF, MOBI).
1. Usługa polega na dostarczaniu samej treści (pliku), która ma być odtwarzana na urządzeniu użytkownika (zgodnie z definicją w Art. 5 pkt 33).

### Procedura
1. Wymóg ten koncentruje się na **technicznej jakości kodu pliku**. Książka elektroniczna (traktowana w normie EN 301 549 jako „Dokument” – definicja w rozdz. 3.1) musi być zbudowana w taki sposób, aby technologia wspomagająca (np. czytnik ekranu NVDA, linijka brajlowska) mogła ją poprawnie zinterpretować.

Kluczowe aspekty techniczne wg normy EN 301 549 (Rozdział 10 – Dokumenty nieinternetowe):

1.  **Interoperacyjność (Definicja):** Zgodnie z Art. 5 pkt 11 ustawy, jest to właściwość umożliwiająca efektywne współdziałanie z narzędziami wspomagającymi. W kontekście pliku oznacza to zastosowanie standardów, które są otwarte i obsługiwane przez AT (Assistive Technology).
2.  **Poprawność kodu (Parsowanie):** Zgodnie z klauzulą **10.4.1.1**, znaczniki w pliku (np. tagi w EPUB/HTML lub struktura w PDF) muszą być kompletne, poprawnie zagnieżdżone i nie zawierać duplikatów atrybutów. Błędy składniowe mogą spowodować, że czytnik ekranu pominie treść lub się zawiesi.
3.  **Programowe określenie nazwy, roli i wartości:** Zgodnie z klauzulą **10.4.1.2**, wszelkie elementy interaktywne w książce (np. formularze ćwiczeń, linki, przypisy) muszą programowo zgłaszać swoją funkcję. Użytkownik niewidomy musi wiedzieć, że dany element to „przycisk” lub „pole edycji”, a nie tylko tekst.
4.  **Struktura (Informacje i relacje):** Zgodnie z klauzulą **10.1.3.1**, struktura wizualna książki (nagłówki rozdziałów, listy wypunktowane, tabele) musi być odwzorowana w kodzie. Jeśli nagłówek jest tylko pogrubionym tekstem (bez tagu`<h1>`), plik nie jest interoperacyjny, ponieważ narzędzie wspomagające nie pozwoli na nawigację po strukturze.

### Typ oceny
Inspekcja plików i metadanych; walidacja standardów; testy z czytnikami ekranu i narzędziami do odczytu DAISY/EPUB.

### Checklist
1. Walidacja standardu formatu (Inspekcja techniczna)**
- **Działanie:** Użyj narzędzia do walidacji formatu (np. *EPUBCheck* dla plików .epub, *PAC - PDF Accessibility Checker* dla plików .pdf).
- **Sprawdzenie:** Czy raport walidacji wykazuje błędy strukturalne lub błędy parsowania? Plik z błędami krytycznymi (np. niezamknięte tagi XML) nie spełnia wymogu interoperacyjności.
1. Weryfikacja struktury semantycznej (Zgodność z Art. 12 i 10.1.3.1 EN)
- **Działanie:** Sprawdź strukturę dokumentu (np. drzewo tagów w PDF lub spis treści w EPUB).
- **Sprawdzenie:**
    - Czy tytuły rozdziałów są oznaczone jako nagłówki (H1-H6)?
    - Czy listy są oznaczone jako listy (a nie myślniki wpisane ręcznie)?
    - Czy tabele mają oznaczone nagłówki wierszy/kolumn?
    - *Błąd:* Brak struktury semantycznej uniemożliwia narzędziom wspomagającym "skakanie" po treści (nawigację), co narusza wymóg funkcjonalności narzędzi wspomagających.
1. Weryfikacja elementów interaktywnych (Interakcja)
*Dotyczy klauzuli 10.4.1.2.*
- **Działanie:** Jeśli e-book zawiera testy, formularze lub aktywne przypisy.
- **Sprawdzenie:** Użyj czytnika ekranu. Czy po najechaniu na element interaktywny słyszysz jego etykietę i rolę (np. "Przycisk Sprawdź odpowiedź")?
1. Weryfikacja elementów interaktywnych (Interakcja)**
*Dotyczy klauzuli 10.4.1.2.*
- **Działanie:** Jeśli e-book zawiera testy, formularze lub aktywne przypisy.
- **Sprawdzenie:** Użyj czytnika ekranu. Czy po najechaniu na element interaktywny słyszysz jego etykietę i rolę (np. "Przycisk Sprawdź odpowiedź")?


## U.17.00.03 - U.17.00.03 Dostęp do treści i struktury książki elektronicznej (Art. 17 pkt 3)

### Warunki wstępne
1. Podmiot świadczy usługę rozpowszechniania e-booków (dostarcza pliki i/lub oprogramowanie).
1. Książka elektroniczna zawiera sformatowaną treść (tekst, tabele, grafiki, podział na rozdziały).

### Procedura
1. Wymóg ten nakazuje, aby logiczna struktura książki (wizualnie reprezentowana przez style, wielkość czcionki, układ) była odwzorowana w kodzie pliku (programowo określona). Tylko wtedy „treść i struktura” są dostępne dla technologii asystujących.

Analiza w oparciu o normę EN 301 549 (Rozdział 10 – Dokumenty):

1.  **Informacje i relacje (Semantyka):** Zgodnie z klauzulą **10.1.3.1**, informacje prezentowane wizualnie muszą być dostępne programowo. Oznacza to, że:
    -   Tytuły rozdziałów muszą być oznaczone tagami nagłówków (np.`<h1>`-`<h6>` w EPUB/HTML lub tagami`H` w PDF), a nie tylko pogrubieniem.
    -   Listy muszą być oznaczone jako listy (tagi`<ul>`/`<ol>`/`<li>`), a nie jako akapity ze znakami specjalnymi.
    -   Tabele muszą mieć zdefiniowane nagłówki wierszy i kolumn, aby czytnik ekranu mógł połączyć komórkę z jej nagłówkiem.
2.  **Sensowna kolejność (Reading Order):** Zgodnie z klauzulą **10.1.3.2**, kolejność, w jakiej treść jest prezentowana technologii asystującej (np. czytnikowi ekranu), musi być logiczna i zgodna z wizualnym układem dokumentu. Jest to krytyczne w przypadku wielokolumnowych układów lub wstawek (ramek) z tekstem pobocznym.
3.  **Tytuł dokumentu:** Zgodnie z klauzulą **10.2.4.2**, dokument musi posiadać zdefiniowany w metadanych tytuł (niezależny od nazwy pliku), który opisuje jego treść.
4.  **Treść nietekstowa:** Zgodnie z klauzulą **10.1.1.1**, dostęp do "treści" obejmuje również dostęp do informacji zawartej w obrazach, co wymaga stosowania tekstów alternatywnych.

### Typ oceny
Inspekcja struktury dokumentu, walidacja semantyki i metadanych; testy z czytnikami ekranu i narzędziami do odczytu e-booków.

### Checklist
1. Weryfikacja nagłówków i list (Semantyka)
- **Działanie:** Otwórz e-booka i użyj narzędzia do nawigacji po nagłówkach (np. klawisz`H` w NVDA/JAWS lub menu spisu treści generowanego z nagłówków).
- **Sprawdzenie:**
    - Czy wszystkie wizualne tytuły rozdziałów i podrozdziałów są wykrywane jako nagłówki?
    - Czy hierarchia jest zachowana (po H1 następuje H2, a nie H4)?
    - Czy listy są odczytywane jako "Lista, X elementów", czy jako osobne akapity?
1. Weryfikacja tabel (Relacje danych)
- **Działanie:** Jeśli w książce występują tabele z danymi (nie layoutowe).
- **Sprawdzenie:** Czy przemieszczając się po komórkach, czytnik ekranu odczytuje przypisane im nagłówki kolumn i wierszy? Jeśli czyta tylko zawartość komórki (np. "15%"), struktura tabeli jest niedostępna.
1. Weryfikacja kolejności czytania (Logic flow)
- **Działanie:** Włącz czytanie ciągłe (Say All) na stronie z układem wielokolumnowym lub z ramkami bocznymi (sidebar).
- **Sprawdzenie:**
    - Czy tekst jest czytany w poprawnej kolejności (np. najpierw cała lewa kolumna, potem prawa)?
    - Błąd: Czytnik czyta pierwszy wiersz lewej kolumny, potem pierwszy wiersz prawej kolumny (czytanie w poprzek szpalt).
1. Język dokumentu (Struktura językowa)**
*Dotyczy klauzuli 10.3.1.1 [5].*
- **Sprawdzenie:** Czy w kodzie pliku zdefiniowano główny język publikacji (np.`xml:lang="pl"` w EPUB lub we właściwościach PDF)? Jest to element struktury niezbędny do poprawnego odczytania treści przez syntezator mowy.
1. **Uwaga dotycząca metadanych:** Choć weryfikacja metadanych o dostępności (np.`schema:accessMode`) jest technicznie możliwa na tym etapie, formalnie jest ona przedmiotem **Art. 17 ust. 6**. W ramach ust. 3 weryfikujemy metadane strukturalne (Tytuł, Język).


## U.17.00.04 - U.17.00.04 Nawigacja po treści i układzie graficznym (w tym dynamicznym) książki elektronicznej (Art. 17 pkt 4)

### Warunki wstępne
1. Podmiot świadczy usługę rozpowszechniania książek elektronicznych (dostarcza pliki e-booków lub oprogramowanie do ich odczytu).
1. Udostępniane publikacje posiadają strukturę (rozdziały, sekcje) lub złożony układ graficzny.

### Procedura
1. Wymóg ten obliguje dostawcę do zapewnienia, aby użytkownik mógł efektywnie poruszać się po książce niezależnie od tego, jak ją wyświetla (np. na małym ekranie telefonu lub w dużym powiększeniu).

Analiza w oparciu o normę EN 301 549:
1.  **Nawigacja strukturalna (Navigation):**
    -   Zgodnie z klauzulami **10.2.4** (Dokumenty) i **11.2.4** (Oprogramowanie), użytkownik musi mieć możliwość przemieszczania się po treści nie tylko linearnie (strona po stronie), ale także skokowo.
    -   Wymaga to poprawnego spisu treści (TOC), który jest interaktywny i dostępny dla technologii asystujących, oraz logicznej kolejności fokusu (Reading Order).
2.  **Dynamiczny układ graficzny (Reflow):**
    -   Jest to kluczowy wymóg techniczny, powiązany z klauzulą **10.1.4.10** (Dopasowanie do ekranu). Tekst książki nie może być „sztywny” (jak w typowym PDF). Musi się „przelewać” (*reflow*), dopasowując się do szerokości ekranu.
    -   Przy powiększeniu do **400%**, użytkownik nie może być zmuszony do przewijania treści w dwóch wymiarach (poziomo i pionowo), aby przeczytać pojedynczą linię tekstu. Wyjątkiem są elementy, których sens zależy od układu dwuwymiarowego (np. mapy, złożone tabele).
3.  **Elementy interaktywne:**
    -   Jeśli książka zawiera elementy interaktywne (linki, przypisy, multimedia), muszą one być osiągalne z poziomu nawigacji klawiaturowej (bez użycia myszy/dotyku) i poprawnie opisane.

### Typ oceny
Inspekcja i testy z czytnikami ekranu; testy klawiaturowe; testy użyteczności z reprezentantami użytkowników; walidacja wersji alternatywnych.

### Checklist
1. Weryfikacja dynamicznego układu (Reflow / 400% Zoom)
- **Działanie:** Otwórz e-booka w aplikacji czytającej. Zmniejsz szerokość okna lub użyj funkcji powiększenia tekstu.
- **Sprawdzenie:** Czy tekst automatycznie zawija się do nowej linii, mieszcząc się w widocznym obszarze?
    - *Błąd:* Konieczność przesuwania suwaka poziomego, aby przeczytać koniec każdego zdania przy dużym powiększeniu. Oznacza to brak obsługi dynamicznego układu.
1. Weryfikacja nawigacji logicznej (Spis treści i Struktura)
- **Działanie:** Użyj spisu treści (NCX/NAV) w czytniku.
- **Sprawdzenie:**
    - Czy można przeskoczyć bezpośrednio do wybranego rozdziału?
    - Czy po kliknięciu w przypis (link wewnętrzny) można łatwo wrócić do miejsca czytania (np. mechanizm "wstecz" lub link powrotny)?
    - Czy czytnik ekranu (np. NVDA) poprawnie rozpoznaje i nawiguje po nagłówkach (skrót`H`)?
1. Skalowanie i czytelność
- **Działanie:** Powiększ tekst do 200%.
- **Sprawdzenie:** Czy elementy nawigacyjne (np. przyciski "następna strona", menu spisu treści) pozostają dostępne i nie zasłaniają treści właściwej książki? Czy powiększenie nie "rozbija" układu w sposób uniemożliwiający czytanie?
1. Metadane i dokumentacja (Wsparcie informacyjne)**
*Dotyczy Art. 17 ust. 6 oraz dobrej praktyki.*
- **Sprawdzenie:** Czy metadane pliku lub opis produktu informują o dostępnych trybach prezentacji (np. "Layout: reflowable" vs "fixed-layout")? Użytkownik powinien wiedzieć przed zakupem, czy książka obsługuje dynamiczny układ.


## U.17.00.05 - U.17.00.05 Alternatywne sposoby prezentacji treści książki elektronicznej (Art. 17 pkt 5)

### Warunki wstępne
1. Podmiot świadczy usługę rozpowszechniania książek elektronicznych.
1. Usługa obejmuje dostarczanie plików e-booków oraz/lub oprogramowania do ich odczytu (czytniki, aplikacje).

### Procedura
1. Wymóg ten obliguje dostawcę do zapewnienia użytkownikowi kontroli nad sposobem prezentacji treści. E-book nie może być „statyczny” graficznie (jak np. skan strony). Treść musi być elastyczna, aby użytkownik mógł ją dostosować do swoich potrzeb sensorycznych bez utraty informacji.

Analiza w oparciu o normę EN 301 549:
1.  **Preferencje użytkownika (Klauzula 11.7):** Oprogramowanie służące do odczytu (dostarczane w ramach usługi) nie może być odizolowane od ustawień platformy lub musi oferować własne mechanizmy zmiany wyglądu. Obejmuje to możliwość zmiany:
    -   Jednostek miary,
    -   Koloru i kontrastu (np. tryb wysokiego kontrastu, tryb nocny),
    -   Typu czcionki (np. zmiana na czcionkę bezszeryfową lub dla dyslektyków),
    -   Rozmiaru czcionki.
2.  **Możliwość adaptacji pliku:** Sam plik książki (np. EPUB) musi być przygotowany w sposób, który nie blokuje tych zmian (np. brak wymuszonych stylów CSS`!important`, które uniemożliwiają nadpisanie czcionki przez użytkownika).
3.  **Wersje alternatywne (Formaty):** Jeśli format podstawowy (np. PDF) nie pozwala na elastyczną zmianę prezentacji (np. reflow), usługodawca powinien zapewnić ten sam tytuł w formacie alternatywnym, który to umożliwia (np. EPUB 3), i umożliwić użytkownikowi łatwy wybór między nimi.
4.  **Zachowanie treści:** Zmiana sposobu prezentacji (np. zmiana kolorów na czarno-żółte) nie może powodować zniknięcia treści (np. zniknięcia ikon, które nie mają tekstowej alternatywy) ani utraty funkcjonalności (np. przyciski stają się nieaktywne).

### Typ oceny
Inspekcja i testy użyteczności; porównanie zawartości między wersjami; testy z narzędziami wspomagającymi i użytkownikami korzystającymi z alternatywnych sposobów prezentacji.

### Checklist
1. Weryfikacja personalizacji (User Preferences)
- **Działanie:** Otwórz książkę w aplikacji dostarczanej przez usługodawcę (lub rekomendowanej). Wejdź w ustawienia wyglądu.
- **Sprawdzenie:**
    - Zmień krój czcionki (np. na Arial lub OpenDyslexic). Czy tekst w książce faktycznie się zmienił?
    - Zmień kolory (np. na biały tekst na czarnym tle). Czy kontrast jest zachowany? Czy żadne elementy nie stały się niewidoczne?
    - Zmień interlinię lub odstępy między akapitami (zgodnie z WCAG 1.4.12 - Odstępy w tekście).
    - *Błąd:* Wydawca zablokował style w pliku, przez co zmiana ustawień w czytniku nie wpływa na tekst książki.
1. Weryfikacja Reflow (Dopasowanie do ekranu)
- **Działanie:** Powiększ tekst do 400% lub zmniejsz szerokość okna aplikacji do odpowiednika 320 pikseli CSS.
- **Sprawdzenie:** Czy treść "przelewa się" (reflow) do nowej linii?
    - *Wynik negatywny:* Pojawienie się dolnego paska przewijania (konieczność przesuwania prawo-lewo, by przeczytać zdanie) oznacza, że wybrany sposób przedstawienia treści nie zapewnia funkcjonalności i postrzegalności.
1. Weryfikacja dostępności wersji alternatywnych
- **Działanie:** Jeśli domyślny format to PDF (układ stały).
- **Sprawdzenie:** Czy w systemie sprzedaży/udostępniania, obok przycisku "Pobierz PDF", znajduje się opcja "Pobierz EPUB" lub "Pobierz wersję tekstową"?
- **Weryfikacja metadanych:** Czy opis produktu informuje, że dana wersja umożliwia zmianę wielkości tekstu ("reflowable")? (Zgodnie z Art. 17 ust. 6).
1. Brak utraty danych**
- **Sprawdzenie:** Czy po przełączeniu na „tryb nocny” lub powiększeniu tekstu, elementy nawigacyjne (spis treści, zakładki) nadal działają poprawnie i prowadzą do właściwych miejsc w książce?


## U.17.00.06 - U.17.00.06 Metadane dostępności dla książek elektronicznych (Art. 17 pkt 6)

### Warunki wstępne
1. Podmiot świadczy usługę rozpowszechniania książek elektronicznych.
1. Książki są udostępniane w formatach obsługujących metadane (np. EPUB, PDF, formaty oparte na HTML).

### Procedura
1. Wymóg ten nakłada obowiązek, aby informacje o dostępności nie były tylko zewnętrznym opisem na stronie sklepu, ale były **zaszyte w samym pliku** lub trwale z nim powiązane w systemie dystrybucji. Dzięki temu informacje te podróżują wraz z plikiem i mogą być odczytane przez urządzenia końcowe (np. czytnik informuje niewidomego użytkownika: "Ta książka posiada pełną nawigację i opisy obrazków").

Analiza w oparciu o normę EN 301 549:
1.  **Standard metadanych:** Zgodnie z Uwagą 2 do klauzuli **12.1.1 (Funkcje dostępności i zgodności)**, dobrą praktyką jest stosowanie słownika **WebSchemas/Accessibility 2.0** (opartego na Schema.org). Jest to standard rozpoznawany przez globalne systemy dystrybucji e-booków.
2.  **Kluczowe właściwości do opisania:** Metadane muszą precyzyjnie określać, jakie cechy dostępności posiada publikacja:
    *`schema:accessMode`: Określa tryb percepcji (np. *textual* - tekstowy, *visual* - wizualny, *auditory* - słuchowy).
    *`schema:accessibilityFeature`: Wskazuje konkretne funkcje (np. *alternativeText* - teksty alternatywne, *structuralNavigation* - nawigacja strukturalna, *displayTransformability* - możliwość zmiany wyglądu/reflow).
    *`schema:accessibilityHazard`: Ostrzega przed zagrożeniami (np. *flashing* - migające treści, *noFlashing* - brak migających treści). Jest to krytyczne dla bezpieczeństwa użytkowników z epilepsją (zgodność z Rozdziałem 10.2.3).
    *`schema:accessibilitySummary`: Zwięzły, zrozumiały dla człowieka opis stanu dostępności (np. "Publikacja dostępna, brak opisów dla wykresów w rozdziale 5").

### Typ oceny
Analiza metadanych (walidacja JSON-LD/RDFa/EPUB metadata), testy ekstrakcji (skrypty), sprawdzenie indeksacji i ręczna weryfikacja zawartości metadanych oraz porównanie z dokumentacją usługi.

### Checklist
1. Walidacja techniczna metadanych (EPUB/ONIX)
- **Działanie:** Użyj narzędzia walidacyjnego (np. Ace by DAISY dla formatu EPUB) lub otwórz plik metadanych (np.`.opf` w paczce EPUB) w edytorze tekstu.
- **Sprawdzenie:**
    - Czy w sekcji metadata występują znaczniki zaczynające się od`schema:accessMode`,`schema:accessibilityFeature`,`schema:accessibilitySummary`?
    - Czy zadeklarowano wystarczające tryby dostępu (np. dla książki tekstowej:`accessMode: textual` oraz`accessMode: visual`)?
1. Weryfikacja spójności (Prawdziwość danych)
- **Działanie:** Porównaj deklaracje w metadanych z faktyczną zawartością książki (zweryfikowaną w ramach Art. 17 ust. 3).
- **Sprawdzenie:**
    - Jeśli metadane zawierają`accessibilityFeature: alternativeText`, sprawdź losowo 3 obrazki. Czy faktycznie posiadają one tekst alternatywny?
    - Jeśli metadane zawierają`accessibilityFeature: displayTransformability` (reflow), sprawdź, czy powiększenie tekstu nie powoduje ucięcia treści (zgodnie z Art. 17 ust. 4).
    - *Błąd krytyczny:* Deklarowanie w metadanych pełnej dostępności (np. zgodności z WCAG 2.1 AA), gdy plik zawiera błędy blokujące (np. brak nawigacji), jest wprowadzeniem konsumenta w błąd.
1. Informacje o zagrożeniach (Safety)
- **Sprawdzenie:** Jeśli książka zawiera treści wideo lub animacje, czy metadane zawierają pole`accessibilityHazard`? Jeśli treści są bezpieczne, dobrą praktyką jest wpis`accessibilityHazard: none`, co daje użytkownikowi pewność bezpieczeństwa.
1. Czytelność dla człowieka (Podsumowanie)**
- **Sprawdzenie:** Czy pole`accessibilitySummary` (lub jego odpowiednik w opisie produktu na stronie sklepu) zawiera jasną informację o poziomie dostępności, zrozumiałą dla użytkownika nietechnicznego? (np. informacja o braku transkrypcji dla materiałów audio).


## U.18.00.01 - U.18.00.01 Informacje o zgodności produktów/usług z wymaganiami dostępności (Art. 18 pkt 1)

### Warunki wstępne
1. Podmiot świadczy **usługi handlu elektronicznego** (zgodnie z definicją w Art. 5 pkt 32: usługi świadczone na odległość, drogą elektroniczną, na żądanie konsumenta, w celu zawarcia umowy).
1. W ofercie sklepu znajdują się produkty lub usługi objęte zakresem ustawy (np. komputery, terminale, usługi bankowe).
1. Producent, importer lub dystrybutor dostarczył informacje o dostępności danego produktu (zgodnie z Art. 7, Art. 29 lub Art. 30).

### Procedura
1. Przepis ten nakłada na usługodawcę e-commerce rolę „przekaźnika” informacji o dostępności. Klient musi mieć dostęp do tych danych przed zakupem, na karcie produktu.

1.  **Ciągłość informacji:** Jeśli producent komputera dołączył do niego instrukcję opisującą funkcje ułatwień dostępu (np. opis skrótów klawiaturowych, zgodność z czytnikami ekranu – wymóg Art. 7 ust. 2), sklep internetowy musi te informacje udostępnić na stronie produktu.
2.  **Forma prezentacji (Art. 12):** Informacja o dostępności produktu jest częścią „informacji o oferowanych usługach” (w tym wypadku usłudze sprzedaży). Musi być ona zatem dostępna cyfrowo:
    -   Tekstowa (nie skan ulotki).
    -   Zrozumiała.
    -   Postrzegalna dla technologii asystujących (zgodnie z Art. 12 ust. 2).
3.  **Zakres danych:** Zgodnie z normą EN 301 549 (klauzula **12.1.1** – Funkcje dostępności i zgodności), dokumentacja produktu powinna zawierać listę funkcji dostępności (np. „złącze słuchawkowe”, „opis przycisków w Braille’u”) oraz opis sposobu ich wykorzystania. Sklep internetowy powinien te dane odwzorować w opisie oferty.

### Typ oceny
Przegląd oświadczeń i dokumentów dostępności, weryfikacja dostępnych dowodów i raportów, test czy informacje są czytelne i łatwo dostępne (w tym sprawdzenie metadanych i linków do raportów).

### Checklist
1. Weryfikacja obecności informacji (Inspekcja treści)
- **Działanie:** Wybierz produkt, który z mocy ustawy musi być dostępny (np. smartfon, telewizor z systemem operacyjnym).
- **Sprawdzenie:** Czy w sekcji „Specyfikacja”, „Opis” lub w załącznikach (np. „Instrukcja obsługi PDF”) znajdują się informacje o funkcjach dostępności?
    - *Przykład:* „Produkt posiada wbudowany czytnik ekranu TalkBack”, „Pilot posiada oznaczenia dotykowe”.
    - *Błąd:* Brak jakiejkolwiek wzmianki o dostępności, mimo że na stronie producenta takie informacje widnieją.
1. Weryfikacja dostępności cyfrowej informacji (Zgodność z Art. 12)
- **Działanie:** Jeśli informacje o dostępności są udostępnione jako plik do pobrania (np.`Specyfikacja_Dostepnosci.pdf`).
- **Sprawdzenie:** Czy ten plik jest dostępny (tagowany, z warstwą tekstową)?
- **Działanie:** Jeśli informacje są bezpośrednio na stronie.
- **Sprawdzenie:** Czy są poprawnie sformatowane (nagłówki, listy) i czytelne dla czytnika ekranu?
1. Weryfikacja rzetelności (Cross-check)
- **Działanie:** Sprawdź deklarację zgodności lub stronę producenta danego urządzenia.
- **Sprawdzenie:** Czy sklep internetowy pominął istotne ostrzeżenia dotyczące dostępności podane przez producenta (np. „Produkt nie obsługuje sterowania głosowego w języku polskim”)? Zatajenie takiej informacji narusza wymóg rzetelnego udzielania informacji.
1. Metadane (Opcjonalnie - Dobra praktyka)
- **Sprawdzenie:** Czy sklep wykorzystuje metadane (np. schema.org) do oznaczania produktów dostępnych, co pozwalałoby na filtrowanie wyników wyszukiwania (np. „Pokaż tylko telefony z dużą czcionką”)? Chociaż ustawa wprost tego nie nakazuje w Art. 18 (jak robi to w Art. 17 dla e-booków), norma wskazuje to jako metodę dostarczania informacji o produkcie.


## U.18.00.02 - U.18.00.02 Dostępność funkcji identyfikacji i uwierzytelniania w usługach handlu elektronicznego (Art. 18 pkt 2)

### Warunki wstępne
1. Podmiot świadczy **usługi handlu elektronicznego** (oferowane na odległość, drogą elektroniczną, w celu zawarcia umowy – zgodnie z Art. 5 pkt 32).
1. Usługa wymaga interakcji użytkownika w obszarach: logowania/rejestracji (identyfikacja), autoryzacji transakcji (bezpieczeństwo, płatności) lub podpisywania dokumentów (e-podpis).

### Procedura
1. Wymóg ten nakłada obowiązek zapewnienia dostępności cyfrowej dla procesów, które są często najbardziej skomplikowane technicznie i obwarowane wymogami bezpieczeństwa. Bezpieczeństwo nie może jednak wykluczać dostępności.

Analiza w oparciu o normę EN 301 549:

1.  **Identyfikacja i Biometria:**
    -   Jeśli aplikacja sklepu lub strona www wykorzystuje biometrię (np. odcisk palca, skan twarzy) do logowania lub zatwierdzania płatności, **nie może to być jedyna metoda**. Zgodnie z klauzulą **5.3 (Biometria)**, musi istnieć alternatywa dla osób, które nie posiadają danej cechy biologicznej lub nie mogą jej użyć (np. kod PIN, hasło).
    -   Formularze logowania muszą posiadać jednoznaczne etykiety (zgodnie z WCAG 3.3.2 – Etykiety lub instrukcje) oraz, w przypadku technologii wspomagających, poprawnie zdefiniowane atrybuty`autocomplete` (WCAG 1.3.5), aby ułatwić wypełnianie danych.

2.  **Zachowanie bezpieczeństwa (CAPTCHA i Sesje):**
    -   **CAPTCHA:** Jeśli system stosuje testy CAPTCHA w celu ochrony przed botami, muszą one posiadać alternatywę dla różnych zmysłów (zgodnie z klauzulą **9.1.1.1** i WCAG 1.1.1). CAPTCHA wizualna musi mieć alternatywę audio; CAPTCHA logiczna nie może wymagać zdolności poznawczych wykraczających poza standard.
    -   **Limity czasu (Timeouts):** Ze względów bezpieczeństwa sesje zakupowe wygasają. Zgodnie z klauzulą **9.2.2.1 (Dostosowanie czasu)**, użytkownik musi zostać ostrzeżony przed wylogowaniem i mieć możliwość przedłużenia sesji (np. przez naciśnięcie klawisza), chyba że jest to wyjątek czasu rzeczywistego (np. licytacja aukcyjna).

3.  **Dokonywanie płatności i Podpisy (Zapobieganie błędom):**
    -   Proces płatności jest transakcją finansową i prawną. Zgodnie z klauzulą **9.3.3.4 (Zapobieganie błędom w sprawach prawnych, finansowych)**, system musi umożliwiać użytkownikowi sprawdzenie, potwierdzenie i korektę danych (np. adresu dostawy, kwoty, liczby sztuk) przed ostatecznym złożeniem zamówienia.
    -   Mechanizmy podpisu (np. checkbox "Akceptuję regulamin" lub podpis kwalifikowany) muszą być obsługiwalne za pomocą klawiatury (bez myszy) i czytnika ekranu (zgodność z WCAG 2.1.1 i 4.1.2).

### Typ oceny
Inspekcja procedur rejestracji i logowania; testy funkcjonalne z użytkownikami i technologiami wspomagającymi; sprawdzenie alternatyw CAPTCHA i procedur odzyskiwania konta.

### Checklist
1. Weryfikacja metod uwierzytelniania (Biometria i Alternatywy)
- **Działanie:** Spróbuj zalogować się lub autoryzować płatność w aplikacji mobilnej sklepu.
- **Sprawdzenie:** Czy system wymusza użycie biometrii (np. "skan twarzy") bez widocznej opcji "Użyj kodu/hasła"? Brak alternatywy jest niezgodnością.
1. Weryfikacja CAPTCHA
- **Działanie:** Przejdź do formularza rejestracji lub odzyskiwania hasła.
- **Sprawdzenie:** Jeśli występuje CAPTCHA obrazkowa (np. "zaznacz pasy"), czy dostępna jest działająca opcja "Odtwórz kod dźwiękowy" lub inna metoda weryfikacji (np. link weryfikacyjny na e-mail)?
1. Zapobieganie błędom (Review Step)
- **Działanie:** Dodaj produkty do koszyka i przejdź do kasy.
- **Sprawdzenie:** Czy przed ostatecznym kliknięciem "Kupuję i płacę" (lub równoważnym) wyświetlane jest podsumowanie zamówienia, w którym można edytować dane (zmienić adres, usunąć produkt) bez konieczności cofania się przeglądarką i utraty wprowadzonych danych?
1. Dostępność bramek płatniczych (Kompatybilność)
- **Działanie:** Wybierz płatność online.
- **Sprawdzenie:** Czy po przekierowaniu do operatora płatności (będącego częścią procesu zakupowego) interfejs jest nadal dostępny (widoczny fokus klawiatury, etykiety pól dla czytnika ekranu)? Odpowiedzialność za dostępność całego procesu spoczywa na usługodawcy handlu elektronicznego.
1. Komunikaty błędów w formularzach
- **Działanie:** Wpisz błędne dane w formularzu płatności (np. niepoprawny format karty kredytowej).
- **Sprawdzenie:** Czy komunikat o błędzie jest dostępny tekstowo (a nie tylko przez zmianę koloru ramki na czerwony – zgodnie z 9.1.4.1) i czy system sugeruje, jak poprawić błąd? [4, 14].


## U.19.02.01.a-01 - U.19.02.01.a-01 Tryb obsługi bez zaangażowania wzroku (A19-02-01-a-01)

### Warunki wstępne
1. Produkt lub usługa posiada funkcje lub właściwości, które nie są objęte szczegółowymi wymaganiami z art. 7–18, LUB zastosowanie kryteriów funkcjonalnych prowadzi do równoważnej/większej dostępności (zgodnie z Art. 19 ust. 1 i 3).
1. Korzystanie z produktu lub usługi w domyślnym trybie wymaga percepcji wzrokowej (np. odczytania informacji z ekranu, zauważenia diody, trafienia palcem w przycisk dotykowy).

### Procedura
1. Przepis ten realizuje specyfikację funkcjonalną „Obsługa bezwzrokowa” (Usage without vision) zdefiniowaną w klauzuli **4.2.1** normy EN 301 549. Oznacza to, że użytkownik musi być w stanie wykonać wszystkie zadania (identyfikacja, nawigacja, obsługa funkcji) bez użycia wzroku.

Realizacja techniczna zależy od rodzaju produktu (otwarty vs. zamknięty):

1.  **Funkcjonalność zamknięta (np. bankomat, biletomat, czytnik e-booków):**
    -   Jeśli użytkownik nie może podłączyć własnego oprogramowania asystującego, urządzenie musi samo zapewnić **wyjście audio** dla wszystkich informacji wizualnych (zgodnie z klauzulą **5.1.3.1** normy) .
    -   Wszystkie etykiety, instrukcje, błędy i wyniki transakcji muszą być odczytywane (np. przez Text-to-Speech).
    -   Obsługa musi być możliwa bez użycia ekranu dotykowego (np. za pomocą klawiatury fizycznej) lub z użyciem trybu dotykowego przystosowanego dla osób niewidomych (gesty sterujące audio).

2.  **Funkcjonalność otwarta (np. strona WWW, aplikacja mobilna, oprogramowanie):**
    -   System musi być kompatybilny z zewnętrznymi **czytnikami ekranu** (Screen Readers). Oznacza to spełnienie wymogów WCAG dotyczących treści nietekstowych (tekst alternatywny), struktury nagłówków i dostępności z klawiatury.
    -   Informacje nie mogą być przekazywane wyłącznie kolorem lub kształtem.

3.  **Elementy dotykowe:**
    -   Klawisze fizyczne muszą być rozpoznawalne dotykiem (np. wypustka na klawiszu „5” w klawiaturach numerycznych – klauzula **8.4.1**).

### Typ oceny
Inspekcja i Testy funkcjonalne

### Checklist
1. Weryfikacja trybu audio (Dla systemów zamkniętych)
- **Działanie:** Podłącz słuchawki do urządzenia (jeśli dotyczy) i aktywuj tryb dla osób niewidomych. Zasłoń ekran lub zamknij oczy.
- **Sprawdzenie:**
    -   Czy wszystkie informacje wyświetlane na ekranie są odczytywane głosowo? (Klauzula 5.1.3.1).
    -   Czy można nawigować po menu i zatwierdzać opcje bez patrzenia (np. używając klawiatury wyczuwalnej dotykiem)?
    -   Czy dane prywatne (np. PIN) są maskowane w audio (nie są wymawiane głośno, ewentualnie tylko w słuchawkach)? (Klauzula 5.1.3.8).
1. Weryfikacja kompatybilności (Dla oprogramowania/WWW)
- **Działanie:** Uruchom czytnik ekranu (np. NVDA, VoiceOver, TalkBack).
- **Sprawdzenie:**
    -   Czy można obsłużyć produkt/usługę wyłączając monitor?
    -   Czy wszystkie elementy graficzne niosące treść mają tekst alternatywny? (WCAG 1.1.1).
    -   Czy kolejność fokusu (nawigacji) jest logiczna? (WCAG 2.4.3).
1. Weryfikacja obsługi bez myszy
- **Działanie:** Spróbuj obsłużyć interfejs wyłącznie za pomocą klawiatury (Tab, Enter, Strzałki).
- **Uzasadnienie:** Obsługa myszą wymaga koordynacji ręka-oko, co „angażuje wzrok”. Tryb niewizualny zazwyczaj opiera się na klawiaturze.
- **Sprawdzenie:** Czy wszystkie funkcje są dostępne i możliwe do uruchomienia z klawiatury?.
1. Dokumentacja i uruchomienie**
- **Sprawdzenie:** Czy sposób uruchomienia trybu niewizualnego (np. „wciśnij przycisk z wypukłą kropką”) jest możliwy do odnalezienia bez użycia wzroku? (Klauzula 8.5).


## U.19.02.01.a-02 - U.19.02.01.a-02 Tryb obsługi dla osób przy ograniczonej zdolności widzenia (A19-02-01-a-02)

### Warunki wstępne
1. Produkt lub usługa posiada interfejs, który domyślnie wymaga użycia wzroku (np. ekran dotykowy, wyświetlacz, diody informacyjne, etykiety).
1. Użytkownik posiada resztkowe widzenie (nie jest osobą niewidomą, lecz słabowidzącą), co oznacza, że korzysta ze wzroku, ale potrzebuje modyfikacji sposobu prezentacji informacji.

### Procedura
1. Przepis ten odnosi się do specyfikacji funkcjonalnej "Obsługa przy ograniczonej możliwości widzenia". Oznacza to, że produkt musi oferować mechanizmy kompensujące słabszy wzrok, takie jak powiększanie, wysoki kontrast lub zmiana układu treści.
Realizacja tego wymogu zależy od charakteru produktu:
1. **Systemy o funkcjonalności zamkniętej (np. bankomaty, biletomaty, terminale płatnicze)**:
    - Jeśli użytkownik nie może podłączyć własnego sprzętu powiększającego, urządzenie musi posiadać wbudowaną funkcję powiększania lub zapewniać odpowiednią wielkość znaków "na sztywno".
    - Wymagane jest, aby wielkość czcionki była dostosowana do przewidywanej odległości użytkownika od ekranu (zapewnienie odpowiedniego kąta widzenia dla znaku).
    - Informacje nie mogą polegać wyłącznie na rozróżnianiu barw.
2. **Systemy o funkcjonalności otwartej (Strony WWW, Aplikacje, Systemy operacyjne)**:
    - Skalowanie (Zoom): Interfejs musi pozwalać na powiększenie treści (zazwyczaj do 200% lub 400%) bez utraty informacji i funkcjonalności.
    - Dopasowanie (Reflow): Przy dużym powiększeniu treść powinna się przelać w jedną kolumnę (dopasować do szerokości ekranu), aby użytkownik nie musiał przewijać widoku w dwóch płaszczyznach (poziomo i pionowo), co jest krytyczne dla osób słabowidzących czytających z powiększeniem.
    - Kontrast: Elementy tekstowe i nietekstowe (ikony, obramowania formularzy) muszą mieć wysoki kontrast względem tła (standardowo min. 4,5:1 dla tekstu i 3:1 dla grafiki).
    - Ustawienia użytkownika: Aplikacja nie może blokować ustawień systemowych (np. trybu wysokiego kontrastu, dużej czcionki systemowej) i powinna się do nich dostosować.

### Typ oceny
Inspekcja i Testy funkcjonalne

### Checklist
1. Weryfikacja powiększania i skalowania (Zoom & Reflow) Dla stron WWW i aplikacji.
- **Działanie**: Użyj funkcji powiększania w przeglądarce lub systemie (np. do 200% i 400%).
- **Sprawdzenie**:
    - Czy wszystkie treści są nadal widoczne i dostępne? (Czy tekst nie jest ucięty, czy przyciski nie zniknęły?)
    - Czy przy powiększeniu (odpowiadającym szerokości 320 pikseli CSS) konieczne jest przewijanie poziome, aby przeczytać wiersz tekstu? (Jeśli tak – jest to błąd, z wyjątkiem map i diagramów).
1. Weryfikacja kontrastu
- **Działanie**: Użyj narzędzia do analizy kontrastu (np. Colour Contrast Analyser).
- **Sprawdzenie**:
    - Zmierz kontrast tekstu podstawowego względem tła. Czy wynosi min. 4,5:1?
    - Zmierz kontrast istotnych elementów graficznych (np. ikon nawigacyjnych, obrysów pól tekstowych). Czy wynosi min. 3:1?
1. Weryfikacja wielkości tekstu (Systemy zamknięte) Dla terminali samoobsługowych.
- **Działanie**: Jeśli urządzenie nie ma funkcji zoom, zmierz fizyczną wysokość wielkich liter na ekranie oraz typową odległość oczu użytkownika od ekranu.
- **Sprawdzenie**: Czy wielkość czcionki jest wystarczająco duża, aby być czytelna z tej odległości? (Dla typowej odległości obsługi terminala stojącego tekst powinien być znacząco większy niż standardowy druk gazetowy).
1. Respektowanie ustawień systemowych Dla aplikacji mobilnych i desktopowych.
- **Działanie**: Włącz w systemie operacyjnym (Windows/macOS/iOS/Android) tryb "Wysoki Kontrast" lub "Odwrócone kolory" oraz zwiększ systemową wielkość czcionki.
- **Sprawdzenie**: Czy aplikacja przejęła te ustawienia? Czy interfejs jest czytelny, czy też aplikacja "wymusza" swoje własne kolory, ignorując preferencje użytkownika?


## U.19.02.01.a-03 - U.19.02.01.a-03 Tryb obsługi niewymagający rozróżniania barw (A19-02-01-a-03)

### Warunki wstępne
1. Produkt lub usługa posiada wizualny interfejs użytkownika (wyświetlacz, diody, oznaczenia fizyczne).
1. W interfejsie wykorzystano kolor do przekazywania informacji, wskazywania działania, konieczności reakcji lub wyróżniania elementów.

### Procedura
1. Przepis ten realizuje specyfikację funkcjonalną „Obsługa bez możliwości rozpoznawania kolorów” (Klauzula 4.2.3 normy EN 301 549). Wymóg ten nie zabrania stosowania kolorów, lecz zabrania polegania wyłącznie na nich jako jedynym nośniku informacji.
Realizacja techniczna zależy od rodzaju elementu:
1. **Sprzęt (Hardware - Klauzula 8.1.3)**:
    - Jeżeli urządzenie wykorzystuje diody LED lub kolorowe przyciski do sygnalizacji stanu (np. zielona dioda = włączony, czerwona = błąd), informacja ta musi być przekazana również w inny sposób.
    - Rozwiązanie: Zastosowanie ikon, etykiet tekstowych, różnicowanie kształtem lub miganiem obok koloru.
2. **Oprogramowanie i Strony WWW (Klauzule 9.1.4.1 / 11.1.4.1)**:
    - Zgodnie z WCAG 1.4.1 (Użycie koloru), kolor nie może być jedynym wizualnym środkiem przekazywania informacji.
    - Błędy w formularzach: Nie wystarczy zaznaczyć błędnego pola czerwoną ramką. Należy dodać ikonę błędu i/lub komunikat tekstowy.
    - Linki: W tekście ciągłym linki nie mogą różnić się od zwykłego tekstu tylko kolorem (np. niebieskim), chyba że kontrast jest bardzo wysoki (3:1) i dodatkowo pojawia się inne wyróżnienie przy najechaniu kursorem (np. podkreślenie).
    - Wykresy: Linie na wykresie lub segmenty kołowe muszą różnić się nie tylko kolorem, ale też wzorem (kropki, kreski) lub posiadać bezpośrednie etykiety tekstowe.
3. **Ustawienia użytkownika**:
    - W systemach oprogramowania dopuszczalne jest zapewnienie trybu „wysokiego kontrastu” lub trybu czarno-białego, który zastępuje kodowanie barwne innymi wyróżnikami, o ile jest on łatwo dostępny dla użytkownika.

### Typ oceny
Inspekcja i Testy funkcjonalne

### Checklist
1. Test skali szarości (Dla ekranów)
- Działanie: Zmień ustawienia wyświetlania w systemie operacyjnym lub monitorze na „Skalę szarości” (Grayscale) lub wydrukuj zrzut ekranu na drukarce czarno-białej.
- Sprawdzenie:
    - Czy nadal wiesz, które pola formularza zawierają błędy?
    - Czy potrafisz odróżnić serie danych na wykresie?
    - Czy linki w tekście są widoczne?
    - Czy wiesz, który element menu jest aktualnie wybrany?
1. Weryfikacja sprzętowa (Diody i Przyciski)
- Działanie: Obejrzyj fizyczne wskaźniki urządzenia.
- Sprawdzenie:
    - Czy dioda sygnalizująca np. „ładowanie” (pomarańczowa) i „naładowanie” (zielona) różni się czymś jeszcze (np. ikoną, pozycją, częstotliwością migania)? Jeśli jest to ta sama dioda zmieniająca tylko kolor – jest to błąd (chyba że stan można odczytać programowo np. przez aplikację).
    - Czy przyciski funkcyjne (np. „Start” - zielony, „Stop” - czerwony) są opisane tekstem lub symbolami, czy polegają tylko na kolorze?
1. Instrukcje i opisy
- Działanie: Sprawdź komunikaty generowane przez system.
- Sprawdzenie: Czy system wydaje polecenia typu „Naciśnij zielony przycisk” lub „Wybierz elementy zaznaczone na czerwono”? Taki język instrukcji narusza wymóg, jeśli nie podano alternatywnego opisu (np. „Naciśnij zielony przycisk Start”).


## U.19.02.01.b - U.19.02.01.b Ograniczenie ryzyka padaczki fotogennej (A19-02-01-b)

### Warunki wstępne
1. Produkt lub usługa posiada wizualny interfejs użytkownika.
1. W interfejsie występują elementy zmieniające jasność, kolor lub wzór w czasie (wideo, animacje, migające komunikaty, dynamiczne wskaźniki)

### Procedura
1. Przepis ten realizuje specyfikację funkcjonalną „Minimalizacja czynników powodujących fotogenne napady padaczki” (Klauzula 4.2.9 normy EN 301 549). Celem jest zapewnienie, aby żaden element interfejsu nie migał w sposób, który jest neurologicznie niebezpieczny.

Analiza techniczna w oparciu o normę (zgodność z WCAG 2.1 Kryterium 2.3.1):
1. **Zasada trzech błysków (Three Flashes Rule)**: Produkt jest uznawany za bezpieczny, jeżeli jego elementy nie błyskają częściej niż trzy razy w ciągu jednej sekundy.
2. **Wartości graniczne (Thresholds)**: Jeśli miganie jest szybsze niż 3 Hz, jest ono dopuszczalne tylko wtedy, gdy błyski są "poniżej progu". Oznacza to, że muszą być:
    - Małe (zajmować niewielką część pola widzenia, zwykle poniżej 0,006 steradianów w promieniu 10 stopni pola widzenia).
    - Mało kontrastowe (zmiana jasności nie jest drastyczna).
    - Pozbawione nasyconej czerwieni (błyski w kolorze czerwonym są bardziej ryzykowne i mają surowsze limity).
3. **Tryb bezpieczny**: Zgodnie z Art. 19, produkt musi zapewniać „co najmniej jeden tryb”, który ogranicza to ryzyko. Oznacza to, że jeśli domyślna prezentacja zawiera ryzykowne miganie, użytkownik musi mieć możliwość przełączenia się na tryb bezpieczny (np. wyłączenie animacji) przed napotkaniem niebezpiecznej treści.

### Typ oceny
Inspekcja i Testy funkcjonalne

### Checklist
1. Identyfikacja migających sekwencji
- **Działanie**: Przejrzyj interfejs, szukając elementów migających, pulsujących lub szybko zmieniających się (np. reklamy typu strobe, intensywne intra wideo, migające ostrzeżenia o błędach).
- **Sprawdzenie**: Czy zidentyfikowano jakiekolwiek elementy, które błyskają lub zmieniają się gwałtownie częściej niż 3 razy na sekundę? Jeśli tak, element jest potencjalnie niebezpieczny i wymaga dalszej analizy.
1. Dostępność ustawień (Redukcja migotania)
- **Działanie**: Sprawdź ustawienia produktu/usługi oraz ustawienia systemu operacyjnego (np. opcja „Ograniczaj ruch” / „Reduce Motion”).
- **Sprawdzenie**: Czy dostępne są ustawienia pozwalające wyłączyć lub ograniczyć migotanie (np. zatrzymanie animacji, tryb statyczny)? Czy produkt respektuje ustawienia systemowe w tym zakresie?
    - **Uwaga**: Mechanizm wyłączania musi być dostępny zanim użytkownik zostanie narażony na atak.
1. Treści odtwarzane automatycznie
- **Działanie**: Otwórz stronę lub aplikację.
- **Sprawdzenie**: Czy filmy lub animacje uruchamiają się same (autoplay)? Czy użytkownik może je natychmiast zatrzymać (np. klawiszem Spacji lub widocznym przyciskiem Pauzy)?
    - **Zasada**: Automatycznie odtwarzane treści trwające dłużej niż 5 sekund muszą posiadać mechanizm wstrzymania lub ukrycia [i.830].
1. Weryfikacja negatywnego wpływu (Safety Check)
- **Analiza**: Czy wyłączenie migotania nie powoduje utraty kluczowych informacji?
    - **Przykład**: Jeśli alarm pożarowy w systemie wizualizowany jest tylko przez szybkie miganie ekranu na czerwono, a w trybie „bez migotania” nie ma żadnego innego komunikatu (np. stałego napisu „ALARM”), to wyłączenie migotania wpływa negatywnie na bezpieczeństwo. Należy zapewnić alternatywę (np. stały, wyraźny komunikat tekstowy).


## U.19.02.02.a - U.19.02.02.a Tryb obsługi niewymagający słuchu (A19-02-02-a)

### Warunki wstępne
1. Produkt lub usługa emituje dźwięki, które niosą informację (np. sygnał dźwiękowy po zakończeniu transakcji, polecenia głosowe, błędy sygnalizowane dźwiękiem)
1. Słuch jest domyślnie wymagany do obsługi lub pełnego zrozumienia stanu urządzenia/usługi.

### Procedura
1. Przepis ten realizuje specyfikację funkcjonalną „Obsługa bez zmysłu słuchu” (Usage without hearing) zdefiniowaną w klauzuli 4.2.4 normy EN 301 549. Oznacza to, że wszystkie funkcje muszą być dostępne dla użytkownika, który nie słyszy.

Realizacja techniczna zależy od rodzaju interakcji:
1. **Funkcjonalność zamknięta (np. biletomaty, kioski informacyjne)**:
    - Urządzenie musi zapewniać wyjście wizualne dla informacji dźwiękowych (zgodnie z klauzulą 5.1.5). Oznacza to, że każdy sygnał audio (np. „piknięcie” przy błędzie, instrukcja głosowa „wyjmij kartę”) musi mieć równoważny komunikat na ekranie (tekst lub ikona) lub sygnał świetlny/dotykowy.
2. **Komunikacja głosowa (np. domofony, systemy telekomunikacyjne)**:
    - Jeżeli system opiera się na głosie (np. infolinia, wideodomofon), musi zapewniać alternatywy dla usług głosowych (klauzula 6.4). Użytkownik musi mieć możliwość załatwienia sprawy np. poprzez czat tekstowy, SMS, RTT (Real-Time Text) lub interfejs dotykowy, bez konieczności mówienia i słuchania.
3. **Multimedia (Wideo)**:
    - Wszelkie treści wideo z dźwiękiem muszą posiadać napisy dla niesłyszących (Captions/Subtitles), które są zsynchronizowane z obrazem i zawierają nie tylko dialogi, ale też opis istotnych dźwięków tła (klauzula 7.1).
4. **Wskaźniki stanu**:
    - Jeśli urządzenie informuje o swoim stanie dźwiękiem (np. winda dojeżdżająca na piętro, terminal płatniczy akceptujący kartę), musi istnieć równoczesny sygnał wizualny (wyświetlacz piętra, dioda na terminalu).

### Typ oceny
Inspekcja i Testy funkcjonalne

### Checklist
1. Test „Mute” (Wyciszenie)
- **Działanie**: Wyłącz głośniki, wycisz urządzenie lub załóż słuchawki wygłuszające. Spróbuj wykonać kluczowy scenariusz użycia (np. zakup biletu, wypłata gotówki).
- **Sprawdzenie**:
    - Czy w którymkolwiek momencie napotkałeś barierę? (np. system czeka na reakcję na komendę głosową, której nie słyszysz?)
    - Czy wiesz, że transakcja zakończyła się sukcesem lub błędem, patrząc tylko na ekran?
    - **Błąd**: Terminal wydaje tylko dźwięk ostrzegawczy (bez komunikatu na ekranie), gdy użytkownik zapomni zabrać karty.
1. Weryfikacja alternatyw wizualnych (Systemy zamknięte) Dotyczy klauzuli 5.1.5 normy EN 301 549.
- **Działanie**: Zidentyfikuj sytuacje, w których urządzenie wydaje dźwięki (np. błąd, ostrzeżenie, koniec czasu).
- **Sprawdzenie**: Czy każdemu z tych dźwięków towarzyszy komunikat tekstowy lub zmiana na ekranie?
    - **Przykład**: Jeśli po błędnym PIN-ie słychać dźwięk, na ekranie musi pojawić się napis „Błędny PIN”.
1. Weryfikacja napisów (Multimedia) Dotyczy klauzuli 7.1.
- **Działanie**: Jeśli produkt wyświetla filmy instruktażowe lub reklamowe z dźwiękiem.
- **Sprawdzenie**: Czy filmy posiadają opcję włączenia napisów? Czy napisy te obejmują istotne informacje dźwiękowe?
1. Alternatywa dla komunikacji głosowej Dotyczy klauzuli 6.4.
- **Działanie**: Jeśli usługa wymaga kontaktu głosowego (np. przycisk „Pomoc” łączy z konsultantem głosowym).
- **Sprawdzenie**: Czy istnieje alternatywa tekstowa (np. czat, wyświetlanie komunikatów tekstowych na ekranie sterowanych przez konsultanta)? Brak alternatywy dla interkomu głosowego jest naruszeniem wymogu.


## U.19.02.02.b - U.19.02.02.b Zaawansowane funkcje dźwiękowe (A19-02-02-b)

### Warunki wstępne
1. Produkt lub usługa posiada funkcje audio (komunikacja głosowa, sygnały dźwiękowe, multimedia).
1. Użytkownik posiada resztkowy słuch (nie jest osobą całkowicie niesłyszącą), co oznacza, że może korzystać z kanału audio, o ile sygnał będzie odpowiednio przetworzony (wzmocniony, oczyszczony).

### Procedura
1. Przepis ten realizuje specyfikację funkcjonalną „Obsługa przy ograniczonej możliwości słyszenia” (Usage with limited hearing capabilities) zdefiniowaną w klauzuli **4.2.5** normy EN 301 549.

Wymagania techniczne koncentrują się na jakości i sterowalności sygnału audio:

1.  **Jakość i czystość dźwięku (Szerokość pasma):** Aby mowa była zrozumiała dla osób słabosłyszących, system musi obsługiwać szerokie pasmo przenoszenia. W przypadku dwukierunkowej komunikacji głosowej wymagane jest kodowanie i dekodowanie w zakresie częstotliwości z górną granicą co najmniej **7 000 Hz** (Klauzula 6.1).
2.  **Wzmocnienie (Głośność):**
    -   Sprzęt z wyjściem mowy musi posiadać regulację głośności o zakresie co najmniej **18 dB** (Klauzula 8.2.1.1).
    -   Jeśli regulacja jest skokowa, co najmniej jeden krok musi zapewniać wzmocnienie o 12 dB powyżej poziomu minimalnego.
3.  **Współpraca z aparatami słuchowymi (Sprzężenie):**
    -   Dla urządzeń przykładanych do ucha (słuchawki telefonów, domofony) wymagane jest **sprzężenie magnetyczne** (cewka T / pętla indukcyjna), aby przekazać dźwięk bezpośrednio do aparatu słuchowego bez zakłóceń z otoczenia (Klauzula 8.2.2).
    -   Należy unikać zakłóceń elektromagnetycznych, które mogłyby powodować buczenie w aparatach słuchowych.
4.  **Redukcja szumów i zakłóceń:** Zgodnie z Art. 8 pkt 1 lit. f oraz klauzulą 4.2.5 normy, produkt powinien oferować funkcje redukcji szumów tła oraz poprawy klarowności dźwięku.

### Typ oceny
Inspekcja i Testy funkcjonalne

### Checklist
1. Weryfikacja regulacji głośności (Inspekcja/Pomiar)
- **Działanie:** Sprawdź zakres regulacji głośności.
- **Sprawdzenie:**
    - Czy urządzenie pozwala na znaczące podgłośnienie dźwięku?
    - Czy zakres regulacji wynosi co najmniej 18 dB? (Wymaga miernika poziomu dźwięku przyłożonego do głośnika/słuchawki).
    - Czy po zakończeniu sesji głośność wraca do poziomu domyślnego (poniżej 65 dBA), aby nie ogłuszyć kolejnego użytkownika? (Klauzula 5.1.3.13).
1. Weryfikacja współpracy z aparatami słuchowymi (Sprzężenie magnetyczne)
- **Działanie:** Sprawdź, czy urządzenie (np. domofon, telefon, kiosk) posiada oznaczenie pętli indukcyjnej (symbol ucha z literą „T”).
- **Sprawdzenie:** Użyj testera pętli indukcyjnych (odbiornika pola magnetycznego). Czy po zbliżeniu do urządzenia słychać wyraźny sygnał audio w testerze? Brak sprzężenia magnetycznego w urządzeniach przykładanych do ucha jest naruszeniem tego wymogu.
1. Możliwość podłączenia słuchawek
- **Działanie:** Sprawdź, czy urządzenie posiada standardowe gniazdo (np. Jack 3.5mm) lub Bluetooth, umożliwiające podłączenie własnych słuchawek użytkownika (które mogą pełnić funkcję wzmacniacza).
- **Sprawdzenie:** Czy po podłączeniu słuchawek dźwięk jest automatycznie przekierowywany i czy działa regulacja głośności?.
1. Jakość dźwięku (Test subiektywny lub pomiar)
- **Sprawdzenie:** Czy w warunkach hałasu otoczenia (np. ulica) dźwięk z urządzenia jest słyszalny i czy nie jest zniekształcony? (Wymóg redukcji zakłóceń z Art. 8 pkt 1 lit. f).


## U.19.02.03 - U.19.02.03 Tryb obsługi niewymagający wydawania dźwięków głosowych (A19-02-03)

### Warunki wstępne
1. Produkt lub usługa wymaga od użytkownika wprowadzania danych lub sterowania za pomocą głosu (np. komendy głosowe, identyfikacja biometryczna głosem, domofon głosowy, infolinia).
1. Użytkownik nie może lub nie chce mówić (np. osoby nieme, z afazją, lub przebywające w bibliotece).

### Procedura
1. Przepis ten realizuje specyfikację funkcjonalną „Obsługa bez możliwości użycia mowy” (Usage without vocal capability) zdefiniowaną w klauzuli 4.2.6 normy EN 301 549. Kluczowe jest zapewnienie alternatywnego kanału wejścia (input).

1. **Alternatywa dla sterowania głosowego**: Jeśli urządzenie (np. Smart TV, kiosk) jest sterowane komendami głosowymi („Wyszukaj film”), musi istnieć alternatywa w postaci klawiatury, ekranu dotykowego lub fizycznych przycisków, pozwalająca wykonać to samo zadanie.
2. **Alternatywa dla komunikacji głosowej (Usługi)**: Jeśli usługa opiera się na rozmowie (np. domofon wideo, infolinia bankowa, system telekomunikacyjny), musi zapewniać alternatywne sposoby komunikacji dwukierunkowej, które nie wymagają mowy.
    - Zgodnie z klauzulą 6.4, systemy te powinny oferować np. czat tekstowy, SMS, lub RTT (Real-Time Text – tekst w czasie rzeczywistym).
3. **Funkcjonalność zamknięta (Klauzula 5.1.7)**: W przypadku urządzeń publicznych (np. kioski), jeśli autoryzacja lub obsługa wymaga mowy, musi istnieć tryb alternatywny (np. klawiatura ekranowa).

### Typ oceny
Inspekcja i Testy funkcjonalne

### Checklist
1. Test „Ciszy” (Obsługa bez mowy)
- **Działanie**: Spróbuj obsłużyć produkt nie wypowiadając ani słowa.
- **Sprawdzenie**:
    - Czy wszystkie funkcje dostępne głosowo (np. „zadzwoń do mamy”, „sprawdź saldo”) można wywołać inaczej (np. klikając w menu)?
    - Błąd: Jedynym sposobem na połączenie się z konsultantem jest wypowiedzenie tematu rozmowy do bota głosowego („Powiedz nam, w jakiej sprawie dzwonisz”), a system nie reaguje na wciskanie klawiszy numerycznych.
1. Alternatywa dla biometrii głosowej Zgodnie z Art. 8 pkt 5 lit. a.
- **Sprawdzenie**: Jeśli system wymaga autoryzacji głosowej (voice ID), czy istnieje alternatywa (np. PIN, hasło, odcisk palca)? Brak alternatywy jest naruszeniem.
1. Komunikacja tekstowa (Dla usług komunikacyjnych) Zgodnie z klauzulą 6.4.
- **Działanie**: Sprawdź kanały kontaktu w usłudze.
- **Sprawdzenie**: Czy zamiast dzwonić na infolinię (wymaga mowy), użytkownik może załatwić tę samą sprawę przez czat na żywo, e-mail lub interfejs tekstowy w aplikacji?
1. Dokumentacja i instrukcje
- Sprawdzenie: Czy instrukcja opisuje, jak korzystać z produktu bez użycia mowy? Często alternatywne tryby są ukryte w menu dostępności.


## U.19.02.04.a - U.19.02.04.a Tryb obsługi bez wymogu motoryki małej (A19-02-04-a)

### Warunki wstępne
1. Produkt lub usługa posiada fizyczny interfejs sterujący (przyciski, ekrany dotykowe, dźwignie, sloty na karty) lub interfejs programowy wymagający interakcji manualnej.
1. Domyślny sposób obsługi wymaga precyzji, siły lub koordynacji (np. chwycenie wtyczki, przesunięcie suwaka na ekranie, jednoczesne wciśnięcie dwóch przycisków).

### Procedura
1. Przepis ten realizuje specyfikację funkcjonalną „Obsługa przy ograniczonych możliwościach manualnych lub ograniczonej sile” (Klauzula 4.2.7 normy EN 301 549). Celem jest umożliwienie obsługi produktu osobie, która nie może chwytać, ściskać, skręcać nadgarstka ani wykonywać precyzyjnych ruchów palcami.

Analiza techniczna wymagań:
1. **Motoryka mała i chwytanie (Sprzęt)**:
    - Elementy sterujące muszą być możliwe do obsłużenia bez konieczności mocnego chwytania, szczypania (pinching) lub skręcania nadgarstka (Klauzula 5.5.1 / 8.4.2.1).
    - Zasada ogólna: Produkt powinien dać się obsłużyć jedną ręką, przy użyciu zaciśniętej pięści lub prostego nacisku, bez konieczności angażowania konkretnych palców.
2. **Siła fizyczna**:
    - Siła wymagana do aktywacji elementu sterującego (przycisku, dźwigni, otwarcia klapki) nie może przekraczać 22,2 N (niutonów), co odpowiada w przybliżeniu sile potrzebnej do naciśnięcia klawisza starej maszyny do pisania lub podniesienia ok. 2,2 kg (Klauzula 8.4.2.2).
3. **Jednoczesne czynności (Simultaneous Actions)**:
    - Produkt nie może wymagać jednoczesnego użycia dwóch rąk (np. trzymania pokrywy jedną ręką i wkładania karty drugą) ani jednoczesnego wciśnięcia dwóch przycisków (np. Ctrl+Alt+Del), chyba że dostępny jest tryb sekwencyjny (np. funkcja Klawisze Trwałe / Sticky Keys) (Klauzula 5.9).
4. **Gesty dotykowe (Oprogramowanie)**:
    - Jeżeli interfejs (np. na ekranie dotykowym) wykorzystuje gesty wielopunktowe (multipoint) lub oparte na ścieżce (np. „szczypanie” w celu powiększenia, suwak do odblokowania), musi istnieć alternatywa w postaci pojedynczego stuknięcia (single pointer) (Klauzula 11.2.5.1 / WCAG 2.5.1)

### Typ oceny
Inspekcja i Testy funkcjonalne

### Checklist
1. Test „Zaciśniętej pięści” (Brak motoryki małej)
- **Działanie**: Spróbuj obsłużyć wszystkie fizyczne elementy produktu (przyciski, ekrany dotykowe, czytniki kart) używając wyłącznie kłykci zaciśniętej dłoni lub łokcia.
- **Sprawdzenie**: Czy można wykonać wszystkie kluczowe zadania?
    - Błąd: Wymagane jest chwycenie gałki palcami i przekręcenie jej (skręcanie nadgarstka).
    - Błąd: Wymagane jest jednoczesne wciśnięcie małego przycisku zagłębionego w obudowie (wymaga precyzji opuszka palca).
1. Weryfikacja siły nacisku
- **Działanie**: Naciśnij element sterujący.
- **Sprawdzenie**: Czy wymaga to dużej siły? Jeśli element stawia wyraźny opór, należy zmierzyć siłę aktywacji siłomierzem (push/pull gauge). Wynik powyżej 22,2 N oznacza niezgodność
1. Test jednoczesności i sekwencyjności
- **Działanie**: Zidentyfikuj funkcje wymagające użycia dwóch punktów sterowania (np. przyciski Shift+Litera, dwa przyciski na obudowie).
- **Sprawdzenie**: Czy można je obsłużyć sekwencyjnie (jeden po drugim)?
    - Przykład: Czy w systemie operacyjnym terminala można włączyć funkcję „Sticky Keys”? Czy fizyczna pokrywa kiosku posiada siłownik/blokadę, dzięki czemu nie trzeba jej trzymać ręką podczas wymiany papieru?
1. Alternatywa dla gestów złożonych (Ekrany dotykowe) Dotyczy klauzuli 11.2.5.1.
- **Działanie**: Sprawdź mapę lub przeglądarkę zdjęć.
- **Sprawdzenie**: Czy przybliżanie (zoom) wymaga gestu „szczypania” (multitouch), czy są też dostępne przyciski „+” i „-” (single touch)? Brak przycisków jest błędem


## U.19.02.04.b - U.19.02.04.b Tryb obsługi przy ograniczonym zasięgu ruchów (A19-02-04-b)

### Warunki wstępne
1. Produkt jest urządzeniem stacjonarnym (np. bankomat, biletomat, kiosk informacyjny, terminal płatniczy zamontowany na stałe) lub posiada elementy sterujące, których położenie jest stałe względem użytkownika.
1. Obsługa wymaga fizycznego sięgnięcia do elementów interfejsu (ekranu, klawiatury, szczeliny na karty).

### Procedura
1. Przepis ten realizuje specyfikację funkcjonalną „Obsługa przy ograniczonym zasięgu rąk” (Klauzula 4.2.8 normy EN 301 549). Oznacza to, że wszystkie elementy niezbędne do obsługi muszą znajdować się w strefie dostępnej dla użytkownika siedzącego (np. na wózku) lub mającego ograniczoną możliwość wyciągnięcia ramion.

Analiza techniczna wymiarów (zgodnie z klauzulami 8.3.2 – 8.3.4 normy):
1. **Zasięg pionowy (Wysokość)**:
    - Elementy sterujące (najwyżej położony przycisk interaktywny) nie mogą znajdować się wyżej niż 1220 mm nad podłożem.
    - Elementy nie mogą znajdować się niżej niż 380 mm nad podłożem.
    - Uwaga: Dotyczy to co najmniej jednego elementu z każdego rodzaju (np. jeśli są dwa gniazda USB, przynajmniej jedno musi być w zasięgu).
2. **Zasięg poziomy (Głębokość/Przeszkody)**:
    - Jeśli urządzenie posiada półkę lub wystający element (przeszkodę), który utrudnia podjazd, maksymalna wysokość zasięgu ulega obniżeniu.
    - Dla przeszkody o głębokości do 510 mm, zasięg wynosi max 1220 mm.
    - Dla przeszkody głębszej (od 510 mm do 635 mm), zasięg wynosi max 1120 mm.
3. **Przestrzeń na kolana i stopy (Podjazd)**:
    - Urządzenie musi zapewniać pustą przestrzeń na podłodze (co najmniej 760 mm x 1220 mm) umożliwiającą podjazd wózkiem.
    - Wymagana jest odpowiednia przestrzeń pod urządzeniem na stopy i kolana, aby użytkownik mógł podjechać dostatecznie blisko ekranu/klawiatury.
4. **Aspekt programowy (Software)**:
    - Interfejs oprogramowania nie może wymuszać orientacji (np. tylko pionowej), jeśli fizyczny montaż urządzenia w tej orientacji spowodowałby umieszczenie przycisków nawigacyjnych (np. paska „Wstecz” na górze ekranu) poza zasięgiem ręki użytkownika.

### Typ oceny
Inspekcja i Testy funkcjonalne

### Checklist
1. Pomiary wysokości elementów sterujących (Dostęp z przodu)
- **Działanie**: Zmierz odległość od podłogi do środka najwyżej położonego elementu interaktywnego (np. najwyższy przycisk na ekranie dotykowym, szczelina na kartę).
- **Sprawdzenie**: Czy wysokość wynosi maksymalnie 1220 mm?
- **Działanie**: Zmierz odległość do najniżej położonego elementu.
- **Sprawdzenie**: Czy wysokość wynosi minimalnie 380 mm?
1. Weryfikacja przeszkód i zasięgu w głąb
- **Działanie**: Sprawdź, czy przed ekranem znajduje się półka lub obudowa wymuszająca odsunięcie użytkownika. Zmierz głębokość tej przeszkody.
- **Sprawdzenie**:
    - Jeśli głębokość > 510 mm, czy najwyższy element jest obniżony do max 1120 mm?
    - Jeśli głębokość > 635 mm (25 cali), jest to naruszenie (zbyt duża odległość do sięgnięcia)
1. Weryfikacja przestrzeni manewrowej
- **Sprawdzenie**: Czy przed urządzeniem jest płaska powierzchnia o wymiarach min. 760 x 1220 mm? Czy podjazd nie jest zbyt stromy (max nachylenie 1:48)?
1. Układ interfejsu (Software)
- **Działanie**: Sprawdź układ elementów na ekranie dotykowym.
- **Analiza**: Czy kluczowe przyciski nawigacyjne (Menu, Wstecz, Pomoc) nie są umieszczone wyłącznie w górnym pasie ekranu, który w przypadku dużych monitorów może znaleźć się powyżej 1220 mm od podłoża? Preferowane jest umieszczenie sterowania w dolnej części ekranu lub zapewnienie trybu „obniżonego interfejsu” (tzw. reachability mode).


## U.19.02.05.a - U.19.02.05.a Elementy w zasięgu wszystkich użytkowników (A19-02-05-a)

### Warunki wstępne
1. Produkt jest urządzeniem fizycznym (sprzęt, terminal, kiosk) lub usługa jest świadczona za pośrednictwem takiego urządzenia.
1. Urządzenie posiada interfejs fizyczny (ekran dotykowy, klawiaturę, czytnik kart, szczelinę na wydruki), który wymaga fizycznego sięgnięcia przez użytkownika.
1. Urządzenie jest stacjonarne (przytwierdzone do podłoża/ściany lub wolnostojące w miejscu publicznym).

### Procedura
1. Wymóg ten jest realizacją specyfikacji funkcjonalnej dotyczącej „dostępności elementów sterujących” dla osób o zróżnicowanych parametrach fizycznych. Kluczowe jest, aby interfejs był możliwy do obsłużenia zarówno przez osobę wysoką stojącą, jak i osobę niską lub siedzącą na wózku inwalidzkim.

Analiza techniczna w oparciu o normę EN 301 549 (Klauzula 8.3 - Stacjonarne ICT):
1. **Zasięg pionowy (Wysokość)**:
    - Wszystkie elementy niezbędne do obsługi (czytnik, klawiatura, najwyższy przycisk na ekranie dotykowym) muszą znajdować się w przedziale wysokości dostępnym dla osoby siedzącej.
    - Zgodnie z normą, elementy sterujące powinny znajdować się na wysokości nie większej niż 1220 mm i nie mniejszej niż 380 mm od podłoża.
    - Wyjątek: Jeśli dostęp jest utrudniony przez przeszkodę (np. ladę), maksymalna wysokość ulega obniżeniu (np. do 1120 mm).
2. **Widoczność (Kąt patrzenia)**:
    - „Znajdowanie się w zasięgu” dotyczy również wzroku. Informacje na ekranie muszą być czytelne dla osoby, której oczy znajdują się na niższym poziomie (typowa wysokość wzroku osoby na wózku to ok. 1015 mm - 1200 mm). Ekran nie może być zamontowany pod kątem, który powoduje, że osoba siedząca widzi tylko odbicie światła lub zniekształcony obraz (Klauzula 8.3.5).
3. **Przestrzeń manewrowa (Podejście)**:
    - Aby element był „w zasięgu”, użytkownik musi mieć możliwość podjechania do niego. Wymagane jest zapewnienie wolnej przestrzeni na podłodze (np. 760 mm x 1220 mm) oraz odpowiedniej przestrzeni na kolana i stopy pod urządzeniem, jeśli wymagany jest podjazd przodem (Klauzula 8.3.4).

### Typ oceny
Inspekcja i Testy funkcjonalne

### Checklist
1. Pomiary wysokości elementów sterujących (Góra/Dół)
- **Działanie**: Zmierz odległość od podłoża do środka najwyżej położonego elementu interaktywnego (np. najwyższego przycisku wyboru na ekranie).
- **Sprawdzenie**: Czy wysokość ta wynosi maksymalnie 1220 mm?
    - Uwaga: Jeśli element znajduje się wyżej, sprawdź, czy istnieje programowy tryb „obniżania interfejsu” (np. przycisk na dole ekranu, który przesuwa całe menu w dół).
- **Działanie**: Zmierz odległość do najniżej położonego elementu (np. szczeliny odbioru biletu).
- **Sprawdzenie**: Czy wysokość ta wynosi minimalnie 380 mm?
1. Weryfikacja zasięgu w głąb (Przeszkody)
- **Działanie**: Sprawdź, czy użytkownik musi sięgnąć „przez coś” (np. półkę, wystający blat), aby obsłużyć urządzenie.
- **Sprawdzenie**:
    - Jeśli głębokość przeszkody wynosi do 255 mm, dopuszczalna wysokość to nadal 1220 mm.
    - Jeśli głębokość przeszkody jest większa (np. do 510 mm), maksymalna wysokość elementów musi zostać zredukowana.
1. Weryfikacja widoczności (Kąty)
- **Działanie**: Usiądź na krześle lub wózku przed urządzeniem (poziom wzroku ok. 1015 mm - 1100 mm).
- **Sprawdzenie**: Czy treść na ekranie jest czytelna? Czy kąt nachylenia ekranu lub rodzaj matrycy nie powoduje, że obraz jest niewidoczny z dołu?
1. Przestrzeń pod urządzeniem (Podjazd)
- **Działanie**: Jeśli konstrukcja wymusza podjazd przodem (np. bankomat w ścianie), sprawdź, czy jest miejsce na kolana.
- **Sprawdzenie**: Czy pod blatem/ekranem jest wolna przestrzeń o wysokości co najmniej 685 mm i głębokości min. 200 mm (dla stóp) / 280 mm (dla kolan)? Brak miejsca na nogi zmusza użytkownika wózka do podjazdu bokiem, co może znacznie utrudnić dosięgnięcie elementów (wymaga skrętu tułowia).


## U.19.02.05.b - U.19.02.05.b Funkcje upraszczające obsługę (A19-02-05-b)

### Warunki wstępne
1. Produkt lub usługa posiada interfejs użytkownika, który wymaga przetwarzania informacji, podejmowania decyzji lub nawigacji.
1. Standardowa obsługa może stanowić barierę dla osób z niepełnosprawnością intelektualną, zaburzeniami pamięci, koncentracji, czytania (dysleksja) lub uczenia się.

### Procedura
1. Przepis ten realizuje specyfikację funkcjonalną „Obsługa przy ograniczonych możliwościach poznawczych, językowych lub związanych z procesem nauki” (Klauzula 4.2.10 normy EN 301 549). „Upraszczanie i ułatwianie” w kontekście technicznym nie musi oznaczać stworzenia osobnego „trybu uproszczonego” (choć jest to dobre rozwiązanie), ale może polegać na wdrożeniu konkretnych mechanizmów w głównym interfejsie, które redukują obciążenie poznawcze.

Zgodnie z mapowaniem wymagań w normie (Tabela B.2 oraz analiza Art. 19 w źródłach), kluczowe cechy upraszczające to:
1. **Pomoc przy wprowadzaniu informacji (Identyfikacja i korekta błędów)**:
    - System musi w prosty sposób wskazywać błędy (np. w formularzu) i opisywać je tekstem, a nie tylko kolorem.
    - System powinien podpowiadać, jak błąd naprawić (Sugestie korekty).
    - Jest to kluczowe dla osób, które mają trudności z precyzyjnym wprowadzaniem danych lub rozumieniem skomplikowanych formatów.
2. **Uproszczona nawigacja (Kolejność i pomijanie)**:
    - Możliwość pominięcia bloków (Bypass blocks): Użytkownik nie powinien być zmuszany do przechodzenia przez te same, powtarzalne elementy menu na każdej podstronie. Musi istnieć mechanizm (np. link „Przejdź do treści”), który upraszcza dotarcie do celu.
    - Logiczna kolejność (Focus order): Nawigacja musi podążać za sensem i logiką, a nie skakać chaotycznie po elementach ekranu.
3. **Wsparcie językowe**:
    - Oprogramowanie musi pozwalać na programowe określenie języka treści. Dzięki temu zewnętrzne narzędzia asystujące (np. wtyczki upraszczające tekst, translatory, syntezatory mowy) mogą poprawnie przetworzyć treść i przedstawić ją użytkownikowi w zrozumiałej formie.

### Typ oceny
Inspekcja i Testy funkcjonalne

### Checklist
1. Weryfikacja obsługi błędów (Input Assistance)
- **Działanie**: Celowo popełnij błąd w formularzu (np. wpisz błędny format daty, zostaw puste pole wymagane).
- **Sprawdzenie**:
    - Czy system jasno identyfikuje błąd (tekstem, nie tylko czerwonym kolorem)?
    - Czy system podpowiada, jak błąd naprawić (np. „Wpisz datę w formacie RR-MM-DD”)? Brak podpowiedzi utrudnia obsługę osobom z ograniczeniami poznawczymi.
1. Weryfikacja nawigacji i sekwencyjności
- **Działanie**: Przejdź przez proces (np. zakup biletu) używając klawisza Tab (lub gestów nawigacyjnych).
- **Sprawdzenie**: Czy kolejność przemieszczania się po elementach jest logiczna i przewidywalna? Czy nie ma momentów, w których fokus „gubi się” lub skacze w niespodziewane miejsce, dezorientując użytkownika?
1. Weryfikacja pomijania powtarzalnych treści
- **Działanie**: Sprawdź, czy na początku strony/ekranu znajduje się mechanizm pozwalający ominąć obszerne menu nawigacyjne i przejść bezpośrednio do treści głównej.
- **Uzasadnienie**: Konieczność wielokrotnego „przeklikiwania się” przez te same elementy (np. 20 pozycji menu) przy każdej zmianie ekranu jest barierą dla osób z problemami z koncentracją i pamięcią krótkotrwałą.
1. Dostępność trybu uproszczonego (Opcjonalne, ale zalecane)
- **Działanie**: Sprawdź w ustawieniach, czy istnieje opcja „Tryb prosty”, „Widok uproszczony” lub „Tryb czytania” (w przeglądarkach).
- **Sprawdzenie**: Czy aktywacja tego trybu usuwa zbędne „rozpraszacze” (reklamy, ozdobniki, skomplikowane tła) i pozostawia samą treść w czytelnej formie?


## U.19.02.05.c - U.19.02.05.c Tryb obsługi zapewniający prywatność (A19-02-05-c)

### Warunki wstępne
1. Produkt lub usługa przetwarza dane, które są uznawane za prywatne lub poufne (np. PIN, hasło, saldo konta, dane medyczne).
1. Produkt lub usługa oferuje funkcje dostępności (np. interfejs głosowy, powiększenie), których użycie w przestrzeni publicznej mogłoby ujawnić te dane osobom postronnym.

### Procedura
1. Przepis ten realizuje specyfikację funkcjonalną „Prywatność” (Klauzula 4.2.11 normy EN 301 549). Zasada jest prosta: użytkownik korzystający z udogodnień (np. osoba niewidoma) musi mieć zagwarantowany taki sam poziom prywatności jak użytkownik standardowy.

Analiza techniczna kluczowych zagrożeń i rozwiązań:
1. **Maskowanie danych wejściowych (Input Masking)**:
    - Jeśli na ekranie hasło lub PIN wyświetlane są jako gwiazdki (****), to w trybie głosowym (Text-to-Speech) system nie może odczytywać wprowadzanych cyfr na głos przez głośnik główny.
    - Odczyt znaków maskowanych jest dopuszczalny tylko wtedy, gdy użytkownik podłączył słuchawki (mechanizm indywidualnego słuchania).
2. Prywatny dostęp do danych (Private Data Output):
    - Dane wrażliwe (np. „Saldo wynosi 10 000 zł”) nie mogą być odczytywane przez głośnik zewnętrzny urządzenia publicznego (np. bankomatu).
    - System musi wykryć podłączenie słuchawek i dopiero wtedy przekierować tam poufne komunikaty audio (Klauzula 5.1.3.9).
3. Widoczność ekranu:
    - Dla osób korzystających z powiększenia lub wysokiego kontrastu, dane na ekranie są łatwiej widoczne dla osób postronnych. W terminalach samoobsługowych zaleca się rozwiązania ograniczające kąt widzenia (filtry prywatyzujące) lub opcję „wygaszenia ekranu” (screen curtain) przy zachowaniu obsługi głosowej/klawiaturowej.

### Typ oceny
Inspekcja i Testy funkcjonalne

### Checklist
1. Weryfikacja maskowania PIN/Hasła (Audio)
- **Działanie**: Uruchom tryb głosowy w urządzeniu. Przejdź do pola wpisywania PIN-u lub hasła. Wpisz znaki.
- **Sprawdzenie**: Czy urządzenie wypowiada na głos wpisywane cyfry/znaki przez głośnik?
    - **Prawidłowo**: Słychać tylko sygnał „bip” lub ciszę (chyba że podłączono słuchawki).
    - **Błąd**: Urządzenie głośno dyktuje wpisywane cyfry („Jeden, Pięć, Osiem...”), ujawniając PIN otoczeniu.
1. Weryfikacja prywatnego odsłuchu (Gniazdo słuchawkowe)
- **Działanie**: Znajdź w urządzeniu głośnomówiącym (np. biletomat, kiosk informacyjny) gniazdo słuchawkowe (Jack 3.5mm). Podłącz własne słuchawki.
- **Sprawdzenie**:
    - Czy dźwięk automatycznie przełącza się z głośnika na słuchawki?
    - Czy po odłączeniu słuchawek dźwięk prywatny nie jest emitowany przez głośniki?
1. Regulacja głośności w trybie prywatnym
- **Działanie**: Podłącz słuchawki.
- **Sprawdzenie**: Czy dostępna jest regulacja głośności dla słuchawek? Jest to kluczowe, aby dźwięk nie był słyszalny „na zewnątrz” (zbyt głośno) lub niesłyszalny dla użytkownika (zbyt cicho), co mogłoby zmusić go do odłączenia słuchawek i naruszenia prywatności
1. Opcje alternatywne dla głosu (Input)
- **Sprawdzenie**: Jeśli autoryzacja wymaga podania danych głosowo (np. w aplikacji bankowej na smartfonie), czy istnieje opcja wpisania ich tekstem? Wypowiadanie danych w miejscu publicznym narusza prywatność.


## U.22.00.1-4 - Art 22 pkt 1-4 Usługi towarzyszące (Art. 22)

### Warunki wstępne
1. Podmiot gospodarczy oferuje **usługi wsparcia** towarzyszące produktowi lub usłudze głównej.
1. Ustawa wymienia katalog otwarty tych usług:
    1.  Pomoc techniczna (Help Desk / Service Desk).
    2.  Centra obsługi telefonicznej (Call Center).
    3.  Usługi przekazu (tłumacze PJM, konwersja mowy na tekst/tekstu na mowę).
    4.  Usługi szkoleniowe.

### Procedura
1. Przepis ten wiąże jakość obsługi klienta z wymogami dostępności. Nie wystarczy, że produkt jest dostępny – użytkownik musi mieć możliwość uzyskania pomocy w jego obsłudze w sposób dostępny.

Analiza w oparciu o ustawę i normę EN 301 549 (Rozdział 12.2):

1.  **Informacja o funkcjach dostępności (Klauzula 12.2.2):** Usługi wsparcia muszą posiadać wiedzę i udzielać informacji o tym, jak produkt spełnia wymogi dostępności.
    -   *Przykład:* Konsultant infolinii bankowej powinien móc udzielić informacji czy aplikacja mobilna banku wspiera osoby niewidome.
2.  **Efektywna komunikacja (Klauzula 12.2.3):** Usługi wsparcia muszą zaspokajać potrzeby komunikacyjne osób z niepełnosprawnościami, bezpośrednio lub przez punkt pośredni (np. tłumacz online). Oznacza to, że kanał wsparcia nie może być wyłącznie głosowy (tylko telefon) – musi istnieć alternatywa (czat, e-mail, wideo z PJM).
3.  **Usługi przekazu (Art. 22 pkt 3 i Art. 13):** Jeśli usługa wsparcia polega na zapewnieniu łączności (np. usługa tłumacza migowego online dla klienta urzędu/banku), musi ona spełniać techniczne wymogi **Art. 13** ustawy (przekazywanie komunikacji głosowej, tekstowej w czasie rzeczywistym i wideo) oraz normy EN 301 549 (Rozdział 13). Kluczowa jest tu jakość i synchronizacja przekazu, aby konwersja (np. mowy na tekst) była zrozumiała.
4.  **Dostępność dokumentacji (Klauzula 12.2.4):** Dokumentacja przekazywana przez wsparcie techniczne (np. instrukcje wysyłane mailem przez serwisanta, materiały szkoleniowe na kursie) musi być dostępna cyfrowo zgodnie z **Art. 12** (czyli spełniać WCAG/PDF UA).

### Typ oceny
Inspekcja i testy

### Checklist
1. Weryfikacja wiedzy (Zgodność z 12.2.2 EN 301 549)
- **Działanie:** Skontaktuj się z pomocą techniczną lub infolinią.
- **Pytanie:** Zadaj pytanie specyficzne dla dostępności, np. "Jak włączyć napisy w państwa materiale wideo?" lub "Które bankomaty w mojej okolicy mają gniazdo słuchawkowe dla niewidomych?".
- **Sprawdzenie:** Czy pracownik posiada dostęp do bazy wiedzy o dostępności produktu i potrafi udzielić informacji, czy też twierdzi, że "nie posiada takich danych"?
1. Weryfikacja kanałów komunikacji (Zgodność z 12.2.3 EN 301 549)
- **Działanie:** Sprawdź stronę "Kontakt" lub "Pomoc".
- **Sprawdzenie:** Czy dla osoby głuchej (niekorzystającej z telefonu głosowego) dostępna jest alternatywna, dwukierunkowa metoda kontaktu w czasie rzeczywistym (np. czat, dedykowany numer SMS, wideoczat)?
    - *Uwaga:* Formularz kontaktowy (e-mail) często nie jest wystarczający w sytuacjach awaryjnych (np. zastrzeżenie karty), gdzie wymagana jest "efektywna komunikacja" tu i teraz.
1. Weryfikacja usług szkoleniowych (Jeśli dotyczy)
- **Działanie:** Jeśli firma oferuje szkolenia z obsługi produktu (stacjonarne lub online).
- **Sprawdzenie:**
    - Czy materiały szkoleniowe (prezentacje, PDF) są dostępne cyfrowo?
    - Czy filmy instruktażowe posiadają napisy/audiodeskrypcję?
    - Czy trenerzy są przygotowani do obsługi osoby z niepełnosprawnością (np. czy wiedzą, jak udostępnić ekran osobie słabowidzącej)?
1. Usługi przekazu (Zgodność z Art. 13)
*Dotyczy tylko podmiotów świadczących usługi konwersji (np. tłumacze online).*
- **Sprawdzenie:** Czy usługa zapewnia synchronizację obrazu i dźwięku (w przypadku tłumacza PJM) oraz czy tekst w czasie rzeczywistym (jeśli jest oferowany) pojawia się płynnie, umożliwiając swobodną rozmowę? (Zgodnie z wymaganiami technicznymi dla RTT i Total Conversation).


## U.23.6.1 - U.23.6.1 Deklaracja zgodności (Art. 23 ust. 6 pkt 1)

### Warunki wstępne
1. Produkt przeszedł procedurę wewnętrznej kontroli produkcji (Art. 23 ust. 2) i wynik tej oceny jest pozytywny.
1. Produkt nie został jeszcze wprowadzony do obrotu (udostępniony po raz pierwszy na rynku).

### Procedura
1. Wymóg ten jest formalnym przejęciem odpowiedzialności przez producenta. Deklaracja zgodności UE jest jedynym dokumentem, w którym producent prawnie zaświadcza, że produkt spełnia wymogi ustawy.

Analiza prawna wymogów dla dokumentu (na podstawie Art. 24 ustawy):
1.  **Forma:** Ustawa dopuszcza formę pisemną w postaci papierowej lub **elektronicznej**. Oznacza to, że plik PDF podpisany kwalifikowanym podpisem elektronicznym jest równoważny wersji papierowej.
2.  **Moment sporządzenia:** Deklaracja musi powstać **przed** wprowadzeniem produktu do obrotu. Data na deklaracji nie może być późniejsza niż data pierwszej sprzedaży/dystrybucji.
3.  **Treść merytoryczna:** Deklaracja nie jest ogólnikowym stwierdzeniem "produkt jest dostępny". Zgodnie z Art. 24 ust. 2, producent musi w niej "wykazać spełnianie odpowiednich wymagań dostępności". Oznacza to konieczność powołania się na konkretne normy zharmonizowane (np. EN 301 549) lub specyfikacje techniczne.
4.  **Zasada jednej deklaracji:** Jeśli produkt podlega pod kilka aktów prawnych (np. Dyrektywę Radiową RED i Ustawę o dostępności), sporządza się **jedną** deklarację wymieniającą wszystkie te akty.
5.  **Odpowiedzialność:** Poprzez sporządzenie i podpisanie deklaracji producent przyjmuje pełną odpowiedzialność za zgodność produktu.

**Kluczowy wyjątek (Nieproporcjonalne obciążenie):**
Jeśli producent skorzystał z Art. 21 (ocena nieproporcjonalnego obciążenia) i na tej podstawie nie spełnia niektórych wymagań, ma obowiązek **wskazać w deklaracji zgodności, które wymagania dostępności nie są spełnione**. Zatajenie tego faktu w deklaracji jest naruszeniem prawa.

### Typ oceny
Inspekcja

### Checklist
1. Weryfikacja istnienia i formy
- **Działanie:** Zażądaj deklaracji zgodności lub znajdź ją na stronie producenta (często w sekcji "Wsparcie" lub "Certyfikaty").
- **Sprawdzenie:** Czy dokument istnieje w formie pisemnej (papier/plik)? Czy został sporządzony w języku polskim (lub przetłumaczony, zgodnie z wymogami dla produktów na rynku polskim)?
1. 


## U.23.6.2 - U.23.6.2 Oznakowanie CE (Art. 23 ust. 6 pkt 2)

### Warunki wstępne
1. Produkt został poddany ocenie zgodności (zgodnie z Art. 23 ust. 2) i wynik tej oceny jest pozytywny.
1. Produkt jest przygotowywany do wprowadzenia do obrotu (pierwszego udostępnienia na rynku).

### Procedura
1. Wymóg ten dotyczy fizycznego oznaczenia produktu, potwierdzającego zgodność z ustawą o dostępności (oraz innymi dyrektywami).

1.  **Lokalizacja podstawowa:** Znak CE musi znajdować się **bezpośrednio na produkcie** lub na jego tabliczce znamionowej.
    *   *Wyjątek (Art. 23 ust. 7):* Tylko jeśli umieszczenie znaku na produkcie jest niemożliwe (np. produkt jest zbyt mały) lub nieuzasadnione ze względu na charakter produktu (np. delikatna powierzchnia), znak CE można umieścić na opakowaniu **oraz** w dokumentach towarzyszących. Nie jest to wybór dowolny, lecz ostateczność.
2.  **Cechy oznakowania:**
    *   **Widoczne:** Znak musi być łatwy do znalezienia przez użytkownika lub organ nadzoru (nie może być ukryty wewnątrz obudowy, chyba że dostęp do niego nie wymaga narzędzi).
    *   **Czytelne:** Musi zachować odpowiednie proporcje (zgodnie z wzorem ustawowym) i wielkość (zazwyczaj min. 5 mm, chyba że przepisy szczegółowe stanowią inaczej).
    *   **Trwałe:** Nie może dać się łatwo usunąć (np. zmyć wodą, zdrapać paznokciem) w przewidywanych warunkach użytkowania.
3.  **Definicja znaku:** Oznakowanie CE musi być zgodne z wzorem określonym w rozporządzeniu (WE) nr 765/2008 (Art. 5 pkt 18 ustawy).

### Typ oceny
Inspekcja

### Checklist
1. Test A: Obecność i lokalizacja
- **Działanie:** Obejrzyj obudowę produktu i tabliczkę znamionową.
- **Sprawdzenie:** Czy znajduje się tam znak CE?
    - Jeśli **TAK**: Przejdź do Testu B.
    - Jeśli **NIE**: Sprawdź, czy charakter produktu uzasadnia skorzystanie z wyjątku (Art. 23 ust. 7). Jeśli tak, sprawdź opakowanie i dokumenty. Jeśli nie (np. na laptopie jest miejsce), brak znaku na obudowie jest naruszeniem.
1. Test B: Widoczność i czytelność
- **Działanie:** Spójrz na znak z normalnej odległości czytania.
- **Sprawdzenie:**
    - Czy litery "C" i "E" są wyraźne?
    - Czy zachowane są proporcje (siatka modułowa)? Częstym błędem jest stosowanie znaku "China Export" (litery blisko siebie) zamiast "Conformité Européenne" (okręgi liter nakładają się na siebie).
    - Czy znak nie jest zasłonięty przez inne elementy?
1. Test C: Trwałość (Test pocierania)
- **Działanie:** Spróbuj potrzeć znak palcem lub wilgotną szmatką (w zależności od specyfiki materiału).
- **Sprawdzenie:** Czy znak nie rozmazuje się, nie odkleja i nie blaknie? Tabliczka znamionowa nie powinna odpaść od produktu.
1. Test D: Dostępność dla osób niedowidzących (Dobra praktyka)
- **Sprawdzenie:** Chociaż ustawa wprost tego nie nakazuje w Art. 23 ust. 6, dobrą praktyką zgodną z duchem ustawy o dostępności jest zapewnienie, aby znak CE był kontrastowy w stosunku do tła lub (idealnie) wyczuwalny dotykiem (grawer/tłoczenie), co ułatwia weryfikację osobom słabowidzącym.


## U.23.7.0 - U.23.7.0 Oznakowanie CE na opakowaniu lub dokumentach (Art. 23 ust. 7)

### Warunki wstępne
1. Występuje obiektywna przesłanka uniemożliwiająca znakowanie bezpośrednie:
    - **Niemożliwość:** Np. produkt jest zbyt mały (mikro-czujnik), nie posiada ścianek (specyficzny kształt).
    - **Nieuzasadnienie ze względu na charakter:** Np. oznakowanie mogłoby uszkodzić produkt (delikatna matryca), wpłynąć na jego funkcjonalność lub sterylność.

### Procedura
1. Przepis ten jest **wyjątkiem**, a nie alternatywą do wyboru przez producenta. Domyślnie znak CE musi być na produkcie (Art. 23 ust. 6). Dopiero gdy jest to technicznie niewykonalne, stosuje się ust. 7.

Kluczowe aspekty prawne:
1.  **Zasada kumulacji (Opakowanie + Dokumenty):** Przepis stanowi jasno: „na opakowaniu **i** w dołączonych do produktu dokumentach”. Oznacza to obowiązek podwójnego oznaczenia w trybie awaryjnym. Umieszczenie znaku tylko na opakowaniu (które użytkownik może wyrzucić) jest niewystarczające.
2.  **Jakość oznakowania:** Mimo przeniesienia lokalizacji znaku, nadal obowiązują wymogi z ust. 6 – znak musi być **widoczny, czytelny i trwały**. Wymiar znaku (zazwyczaj min. 5 mm) musi zostać zachowany, chyba że uniemożliwiają to rozmiary samego produktu (co w przypadku przeniesienia na dokumenty/opakowanie zazwyczaj nie ma miejsca).
3.  **Definicja oznakowania:** Oznakowanie musi być zgodne z wzorem określonym w rozporządzeniu (WE) nr 765/2008 (zgodnie z definicją w Art. 5 pkt 18 ustawy).

### Typ oceny
Inspekcja

### Checklist
1. Test A: Weryfikacja zasadności (Czy można było oznakować produkt?)
- **Działanie:** Obejrzyj produkt.
- **Analiza:** Czy na obudowie jest fizyczne miejsce na znak CE?
    - Jeśli produkt to np. duży terminal płatniczy lub kiosk informacyjny, a znaku CE nie ma na obudowie (lecz jest tylko w instrukcji) – jest to **naruszenie Art. 23 ust. 6**, ponieważ nie zachodzi przesłanka „niemożliwości”.
    - Jeśli produkt to np. douszna słuchawka bezprzewodowa (zbyt mała powierzchnia), przejście do Testu B jest uzasadnione.
1. Test B: Weryfikacja kumulatywna (Opakowanie + Dokumenty)
- **Działanie:** Sprawdź opakowanie jednostkowe oraz instrukcję/kartę gwarancyjną.
- **Sprawdzenie:** Czy znak CE znajduje się **w obu** tych miejscach?
    - *Błąd:* Znak CE jest tylko na pudełku, ale brakuje go w dokumentacji. Jest to naruszenie wymogu ustawowego („na opakowaniu **i** w (...) dokumentach”).
1. Test C: Jakość graficzna
- **Sprawdzenie:** Czy znak CE na opakowaniu i w dokumentach jest czytelny? Czy nie został zniekształcony (zachowane proporcje okręgów)? Czy jest trwały (nie jest naklejką, która łatwo odpada z opakowania)?


## U.24.1.0 - U.24.1.0 Sporządzenie deklaracji zgodności zgodnie z przepisami (Art. 24 ust.1)

### Warunki wstępne
1. Produkt przeszedł pozytywnie procedurę oceny zgodności (np. wewnętrzną kontrolę produkcji).
1. Deklaracja jest sporządzona w formie pisemnej (papierowej lub elektronicznej).

### Procedura
1. Przepis ten narzuca sztywną strukturę dokumentu. Deklaracja zgodności UE nie jest dowolnym oświadczeniem woli, lecz sformalizowanym dokumentem prawnym, który musi zawierać elementy określone w **Załączniku III do Decyzji 768/2008/WE**.

Zgodnie z wzorem (Załącznik III), deklaracja musi zawierać następujące punkty:

1.  **Identyfikator produktu:** „Nr ... (niepowtarzalny identyfikator produktu)”. Może to być numer partii, serii lub typu.
2.  **Podmiot odpowiedzialny:** Nazwa i adres producenta lub jego upoważnionego przedstawiciela.
3.  **Klauzula odpowiedzialności:** Oświadczenie o treści: „Niniejsza deklaracja zgodności wydana zostaje na **wyłączną odpowiedzialność** producenta” (jest to element krytyczny prawnie).
4.  **Przedmiot deklaracji:** Opis pozwalający na identyfikowalność (np. nazwa, model). Może zawierać zdjęcie, jeśli jest to stosowne.
5.  **Deklaracja zgodności z prawem:** Oświadczenie: „Wymieniony powyżej przedmiot niniejszej deklaracji jest zgodny z odnośnymi wymaganiami unijnego prawodawstwa harmonizacyjnego”. W tym miejscu należy przywołać **Ustawę z dnia 26 kwietnia 2024 r.** (lub Dyrektywę 2019/882).
6.  **Odniesienia do norm:** Wyszczególnienie zastosowanych **norm zharmonizowanych** (np. „PN-EN 301 549 V3.2.1”) lub innych specyfikacji technicznych, w odniesieniu do których deklarowana jest zgodność. Należy podać datę/wersję normy.
7.  **Jednostka notyfikowana (opcjonalnie):** Jeśli w procedurze brała udział jednostka notyfikowana (np. przy ocenie systemu jakości), należy podać jej nazwę, numer i numer certyfikatu.
8.  **Informacje dodatkowe:** Miejsce na wpisanie np. wyłączeń wynikających z art. 21 ustawy (nieproporcjonalne obciążenie).
9.  **Podpis:** Miejsce i data wydania, imię, nazwisko, stanowisko oraz podpis osoby upoważnionej.

### Typ oceny
Inspekcja

### Checklist
1. Weryfikacja struktury (Zgodność z Załącznikiem III Decyzji 768/2008/WE)
- **Działanie:** Pobierz deklarację zgodności i porównaj ją punkt po punkcie z listą wymogów.
- **Sprawdzenie:**
    - Czy dokument zawiera frazę „na wyłączną odpowiedzialność producenta”?.
    - Czy produkt jest jednoznacznie zidentyfikowany (numer/model)?.
    - Czy dokument jest podpisany (data, nazwisko)?.
1. Weryfikacja podstawy prawnej
- **Sprawdzenie:** Czy w sekcji dotyczącej przepisów harmonizacyjnych wymieniono właściwą ustawę/dyrektywę o dostępności?
    - *Błąd:* Powołanie się wyłącznie na dyrektywę niskonapięciową (LVD) lub kompatybilność elektromagnetyczną (EMC), z pominięciem przepisów o dostępności, oznacza, że produkt formalnie nie posiada deklaracji zgodności w rozumieniu Art. 24.
1. Weryfikacja norm (Standardy techniczne)
- **Sprawdzenie:** Czy wymieniono konkretne normy (np. EN 301 549) wraz z ich wersjami?
    - *Zasada:* Odniesienia muszą być „precyzyjne, kompletne i jasno zdefiniowane”. Ogólne stwierdzenie „zgodny z normami” jest niewystarczające.
1. Spójność (Pojedyncza deklaracja)
- **Sprawdzenie:** Czy producent dostarczył jedną deklarację obejmującą wszystkie wymagania (np. RED + Dostępność + RoHS), czy też osobne dokumenty? Przepisy wymagają sporządzenia **pojedynczej deklaracji** (która może mieć formę dossier), odnoszącej się do wszystkich aktów prawnych.


## U.24.2.0 - U.24.2.0 Wykazanie spełniania wymagań dostępności w deklaracji zgodności (Art. 24 ust.2)

### Warunki wstępne
1. Podmiot sporządził deklarację zgodności UE dla produktu objętego ustawą (zgodnie z Art. 23 ust. 6 pkt 1).
1. Produkt podlega konkretnym wymaganiom dostępności określonym w Art. 7–11 ustawy (lub kryteriom funkcjonalnym z Art. 19).

### Procedura
1. Przepis ten obliguje producenta do wskazania w dokumencie prawnym konkretnych podstaw technicznych, które posłużyły do oceny produktu. Nie wystarczy ogólne oświadczenie "produkt jest dostępny". „Wykazanie spełniania wymagań” realizuje się poprzez powołanie na konkretne dokumenty odniesienia.

1.  **Odniesienie do norm (Zasada domniemania zgodności):** Zgodnie z Art. 20 ust. 1 ustawy, zgodność z normami zharmonizowanymi (np. EN 301 549) daje prawne domniemanie zgodności z wymaganiami ustawy. Dlatego w deklaracji zgodności, w sekcji dotyczącej norm, producent musi wymienić konkretne normy dostępności, z których skorzystał.
2.  **Specyfikacje techniczne:** Jeśli producent nie zastosował norm zharmonizowanych (lub zastosował je tylko częściowo), musi w deklaracji wskazać inne **specyfikacje techniczne**, w odniesieniu do których deklarowana jest zgodność (zgodnie z pkt 6 Załącznika III do Decyzji 768/2008/WE).
3.  **Precyzja:** Odniesienia muszą być precyzyjne – zawierać numer normy oraz jej wersję/datę wydania (np. "V3.2.1 (2021-03)"), aby jednoznacznie określić, według jakich kryteriów produkt był oceniany.

### Typ oceny
Inspekcja

### Checklist
1. Weryfikacja obecności norm dostępności**
*Dotyczy pkt 6 wzoru z Załącznika III Decyzji 768/2008/WE.*
- **Działanie:** Sprawdź listę norm wymienionych w deklaracji.
- **Sprawdzenie:** Czy na liście znajduje się norma **EN 301 549** (lub jej krajowy odpowiednik PN-EN 301 549)?
    - *Sytuacja prawidłowa:* Deklaracja wymienia np. normy bezpieczeństwa (LVD), kompatybilności (EMC) oraz normę dostępności (EN 301 549).
    - *Błąd:* Deklaracja powołuje się na Ustawę o dostępności w nagłówku, ale w liście norm wymienia tylko normy elektryczne/radiowe. W takim przypadku producent **nie wykazał** spełniania wymagań dostępności w sposób techniczny.
1. Weryfikacja aktualności norm
- **Sprawdzenie:** Czy powołana wersja normy jest aktualna (np. V3.2.1, która jest zharmonizowana z dyrektywą UE), czy jest to wersja przestarzała (np. V1.1.2)? Użycie nieaktualnej normy może oznaczać, że wykazanie zgodności jest nieskuteczne.
1. Weryfikacja innych specyfikacji (gdy brak norm)
- **Działanie:** Jeśli na liście nie ma normy EN 301 549.
- **Sprawdzenie:** Czy wskazano inną specyfikację techniczną, która pokrywa wymagania dostępności z Art. 7-11 ustawy? Jeśli pole jest puste lub zawiera tylko normy niezwiązane z dostępnością, wymóg z Art. 24 ust. 2 nie jest spełniony.


## U.24.3.0 - U.24.3.0 Informacje o niespełnionych wymaganiach dostępności w przypadku wyłączeń (Art. 24 ust.3)

### Warunki wstępne
1. Producent przeprowadził formalną ocenę zgodnie z **Art. 21 ust. 2** ustawy.
1. Wynik oceny wykazał, że spełnienie konkretnych wymagań dostępności stanowiłoby **nieproporcjonalne obciążenie** lub wymagałoby **zasadniczej zmiany** podstawowych właściwości produktu.
1. Producent skorzystał z prawa do niespełnienia tych wymagań.

### Procedura
1. Przepis ten nakłada obowiązek transparentności. Producent nie może zadeklarować ogólnej „zgodności z ustawą”, jeśli produkt posiada braki w dostępności, nawet jeśli te braki są prawnie usprawiedliwione.

1.  **Jawność wyłączeń:** Deklaracja zgodności jest dokumentem publicznym. Jeśli producent skorzystał z wyjątku (np. nie zamontował funkcji głosowych w terminalu, bo uznał to za nieproporcjonalny koszt), musi to wyraźnie napisać w deklaracji.
2.  **Precyzja:** Przepis wymaga podania informacji, **które** wymagania nie są spełnione. Nie wystarczy ogólna fraza „zastosowano art. 21”. Należy wskazać konkretne punkty normy (np. „Nie spełniono wymogu 5.1.3.1 – Wyjście audio, ze względu na nieproporcjonalne obciążenie”).
3.  **Miejsce w dokumencie:** Zgodnie z wzorem deklaracji (Załącznik III do Decyzji 768/2008/WE), właściwym miejscem na te dane jest punkt 8: **„Informacje dodatkowe”**.

### Typ oceny
Inspekcja

### Checklist
1. Inspekcja treści deklaracji (Sekcja „Informacje dodatkowe”)
- **Działanie:** Przeczytaj dokładnie deklarację zgodności.
- **Sprawdzenie:** Czy znajduje się tam lista wyłączonych wymagań?
    - *Scenariusz 1:* Produkt jest w pełni dostępny. Deklaracja nie musi zawierać uwag o wyłączeniach.
    - *Scenariusz 2:* Produkt ma ewidentne braki (np. kiosk bez wejścia słuchawkowego), a deklaracja **nie zawiera** informacji o niespełnieniu wymagań z Art. 24 ust. 3.
        - *Wniosek:* Jest to błąd formalny (nieprawidłowo sporządzona deklaracja) lub merytoryczny (producent nie przeprowadził oceny z Art. 21 i bezprawnie wprowadził produkt na rynek).
1. Spójność z oceną (Weryfikacja krzyżowa - ocena pogłębiona)
*Dotyczy sytuacji, gdy mamy dostęp do dokumentacji wewnętrznej (Art. 21 ust. 5).*
- **Działanie:** Porównaj „Dokumentację przebiegu oceny nieproporcjonalnego obciążenia” z Deklaracją Zgodności.
- **Sprawdzenie:** Czy wszystkie wymagania, które w ocenie wewnętrznej uznano za „zbyt obciążające”, zostały przepisane do Deklaracji Zgodności jako niespełnione? Zatajenie tych informacji w deklaracji publicznej jest naruszeniem Art. 24 ust. 3.


## U.26.1.0 - U.26.1.0 Identyfikacja produktu (Art. 26 ust.1)

### Warunki wstępne
1. Produkt jest wprowadzany do obrotu.

### Procedura
1. Przepis ten dotyczy **identyfikowalności (traceability)** produktu. Jest to fundament nadzoru rynku, umożliwiający powiązanie konkretnego egzemplarza urządzenia z jego dokumentacją techniczną i deklaracją zgodności.

Analiza prawna w oparciu o Ustawę i "Blue Guide" (Wskazówki dotyczące wdrażania przepisów UE):

1.  **Swoboda wyboru identyfikatora:** Producent ma swobodę wyboru elementu identyfikującego (może to być nazwa typu, numer partii, numer serii, model, SKU). Kluczowym warunkiem jest to, aby wybrany element zapewniał **jednoznaczne powiązanie** z Deklaracją Zgodności UE.
2.  **Hierarchia lokalizacji (Zasada i Wyjątek):**
    -   **Zasada:** Identyfikator musi znajdować się **na produkcie**.
    -   **Wyjątek:** Przeniesienie identyfikatora na opakowanie lub do dokumentu jest dopuszczalne **tylko** wtedy, gdy umieszczenie go na produkcie jest niemożliwe ze względu na:
        -   **Wielkość:** Produkt jest zbyt mały, by zmieścić czytelny tekst (np. czujniki, małe akcesoria).
        -   **Charakter produktu:** Np. powierzchnia nie pozwala na trwałe znakowanie (jest chropowata, sferyczna) lub znakowanie mogłoby uszkodzić produkt.
    -  **Niedopuszczalne uzasadnienia:** Producent **nie może** przenieść oznakowania na opakowanie ze względów estetycznych (design) lub ekonomicznych (koszt nadruku).
3.  **Spójność:** Ten sam identyfikator (np. numer modelu "XYZ-123") musi znajdować się na produkcie i w Deklaracji Zgodności.

### Typ oceny
Inspekcja

### Checklist
1. Obecność identyfikatora (Inspekcja wizualna)
- **Działanie:** Obejrzyj obudowę produktu.
- **Sprawdzenie:** Czy znajduje się na niej ciąg znaków (np. "Model: A123", "S/N: 99999")?
    - *Uwaga:* Jeśli produkt składa się z kilku części (zestaw), a nie jest możliwe oznakowanie każdej z nich, dopuszcza się oznakowanie głównego opakowania.
1. Weryfikacja zasadności wyjątku (Jeśli brak na produkcie)
- **Działanie:** Jeśli identyfikatora nie ma na obudowie, ale jest na pudełku/w instrukcji.
- **Analiza:** Czy produkt jest fizycznie zdolny do pomieszczenia tego napisu?
    - *Błąd:* Smartfon lub terminal płatniczy nie posiada numeru modelu na obudowie (tylko na pudełku). Jest to naruszenie Art. 26 ust. 1, ponieważ urządzenie ma wystarczającą wielkość i powierzchnię techniczną, aby umieścić tam grawer lub naklejkę. Argumenty estetyczne są prawnie nieważne.
1. Weryfikacja spójności (Linkowanie dokumentacji)
- **Działanie:** Porównaj identyfikator z produktu z Deklaracją Zgodności.
- **Sprawdzenie:** Czy identyfikator na produkcie (np. "Type: X") jest tożsamy z identyfikatorem w pkt 1 lub 4 Deklaracji Zgodności? Jeśli na produkcie jest "Model A", a w deklaracji "Seria B", identyfikowalność nie jest zapewniona.


## U.26.2.0 - U.26.2.0 Dane producenta (Art. 26 ust.2)

### Warunki wstępne
1. Produkt jest wprowadzany do obrotu na terytorium Rzeczypospolitej Polskiej.

### Procedura
1. Wymóg ten służy zapewnieniu skutecznego nadzoru rynku i możliwości kontaktu konsumenta z podmiotem odpowiedzialnym. Składa się z trzech kluczowych elementów: zakresu danych, ich lokalizacji oraz języka.

Analiza prawna w oparciu o Ustawę i "Blue Guide":

1.  **Zakres danych (Tożsamość):** Producent musi podać:
    -   Nazwę (firmę) lub imię i nazwisko.
    -   Zarejestrowaną nazwę handlową lub znak towarowy (jeśli posiada). Znak towarowy jest elementem wyróżniającym (logo, słowo), ale nie zastępuje adresu.
    -   **Jeden punkt kontaktowy (Adres):** Adres musi wskazywać „pojedynczy punkt”, w którym można skontaktować się z producentem. Nie musi to być adres fabryki, może to być adres biura lub upoważnionego przedstawiciela, ale musi to być adres fizyczny (pocztowy) – sama strona internetowa nie jest wystarczająca.
2.  **Lokalizacja (Zasada i Wyjątek):**
    -   Domyślnie dane muszą znajdować się **na produkcie**.
    -   Przeniesienie na opakowanie lub do dokumentu jest możliwe **wyłącznie** w przypadku niemożliwości technicznej (zbyt mały produkt) lub ze względu na charakter produktu (np. produkt sterylny, sypki). Względy estetyczne nie są uzasadnieniem dla pominięcia danych na produkcie.
3.  **Wymóg językowy:** Ustawa wprost stanowi, że dane kontaktowe są podawane **w języku polskim**. Jest to wymóg surowszy niż w ogólnych przepisach unijnych (które mówią o języku zrozumiałym dla użytkowników). Oznacza to, że np. opis pola ("Adres:", "Producent:") powinien być zrozumiały dla polskiego odbiorcy.

### Typ oceny
Inspekcja

### Checklist
1. Obecność danych i „Pojedynczy Punkt Kontaktowy”
- **Działanie:** Sprawdź tabliczkę znamionową lub nadruk na produkcie.
- **Sprawdzenie:**
    - Czy podano pełną nazwę producenta?
    - Czy podano adres fizyczny (ulica, numer, kod, miasto)?
    - *Błąd:* Podanie tylko adresu strony internetowej (`www.producent.com`) bez adresu fizycznego jest naruszeniem wymagań.
    - *Błąd:* Podanie kilku adresów bez wskazania, który z nich jest „głównym” punktem kontaktowym dla organów nadzoru.
1. Weryfikacja językowa
- **Sprawdzenie:** Czy dane kontaktowe są podane w języku polskim?
    - W przypadku producentów zagranicznych, kluczowe jest, aby polski konsument i organ nadzoru mógł zidentyfikować te dane. Użycie alfabetu łacińskiego jest tu podstawą, ale zgodnie z literalnym brzmieniem ustawy, opisy pól (np. słowo "Manufacturer" vs "Producent") powinny uwzględniać wymóg języka polskiego lub być powszechnie zrozumiałe (np. powszechnie znane skróty). Wątpliwości należy rozstrzygać na korzyść bezpieczeństwa i zrozumiałości dla polskiego konsumenta.
1. Lokalizacja (Uzasadnienie wyjątku)
- **Działanie:** Jeśli danych nie ma na produkcie, lecz są na opakowaniu.
- **Analiza:** Czy na produkcie faktycznie brakuje miejsca?
    - Jeśli produktem jest np. duży telewizor lub laptop, a dane producenta są tylko na kartonie – jest to **naruszenie**. Producent ma obowiązek umieścić dane trwale na urządzeniu, ponieważ opakowanie jest często wyrzucane przez użytkownika.


## U.32.02.01.a - U.32.02.01.a Informacje o oferowanej usłudze (Art. 32)

### Warunki wstępne
1. Usługodawca posiada regulamin lub inny dokument opisujący zasady świadczenia usługi.

### Procedura
1. Przepis ten nakłada na usługodawcę obowiązek zapewnienia dostępności formy dokumentów regulujących świadczenie usługi. Kluczowym aspektem jest to, że regulamin (lub dokument równoważny) nie może być dostępny tylko dla wybranych klientów – musi być dostępny dla osób ze szczególnymi potrzebami.
Analiza prawna w oparciu o Art. 12 ust. 2:
1. **Forma publikacji**: Informacja o usłudze musi być podana do publicznej wiadomości. Usługodawca ma wybór między formą papierową a elektroniczną, jednak wybrana forma musi spełniać rygory dostępności określone w Art. 12 ust. 2.
2. **Dostępność cyfrowa (Forma elektroniczna)**: Jeśli regulamin jest udostępniany elektronicznie (np. jako PDF na stronie www, treść w aplikacji mobilnej), musi spełniać zasady postrzegalności, funkcjonalności, zrozumiałości i kompatybilności (Art. 12 ust. 2 pkt 2). Oznacza to konieczność zgodności z normą EN 301 549:
    - Dla dokumentów (PDF, DOCX): Zgodność z Rozdziałem 10 normy (Dokumenty nieinternetowe) [i.795].
    - Dla treści na stronach WWW: Zgodność z Rozdziałem 9 normy (Internet/WCAG 2.1 AA) [i.770, i.793].
3. **Dostępność sensoryczna (Forma papierowa/elektroniczna)**: Niezależnie od nośnika, informacja musi być prezentowana:
    - Za pomocą więcej niż jednego kanału sensorycznego (np. tekst wizualny, który może być odczytany głosowo przez technologię asystującą).
    - Przy użyciu odpowiedniej czcionki i kontrastu (Art. 12 ust. 2 pkt 1 lit. d).
    - W sposób zrozumiały (jasny język).
1. **Uwaga dotycząca treści (Art. 33)**: Niniejszy punkt (Art. 32 ust. 2 pkt 1 lit. a) weryfikuje sam fakt publikacji informacji o usłudze w dostępnej formie. Szczegółowa weryfikacja czy w tej informacji zawarto dane o dostępności architektonicznej lub certyfikatach jest przedmiotem weryfikacji dla Art. 33.

### Typ oceny
Inspekcja techniczna dokumentu

### Checklist
1. Lokalizacja i forma (Dostępność publiczna)
- **Działanie**: Wejdź na stronę internetową usługi lub do aplikacji mobilnej. Znajdź „Regulamin”, „Zasady świadczenia usług” lub „Informacje o usłudze”.
- **Sprawdzenie**: Czy dokument jest łatwo dostępny (nie wymaga logowania, jeśli jest to informacja o oferowanej usłudze)? Czy jest dostępny w formie tekstowej (HTML/PDF), a nie jako skan (obraz)?
1. Weryfikacja techniczna dokumentu elektronicznego (WCAG/PDF UA). Jeśli regulamin jest plikiem do pobrania (np. PDF):
- **Sprawdzenie**:
  - Semantyka (Tagi): Czy plik posiada strukturę tagów (nagłówki, akapity, listy)? (Klauzula 10.1.3.1).
  - Kolejność czytania: Czy tekst jest odczytywany w logicznej kolejności przez czytnik ekranu? (Klauzula 10.1.3.2).
  - Tytuł: Czy dokument ma zdefiniowany tytuł w metadanych? (Klauzula 10.2.4.2).
  - Kontrast: Czy tekst regulaminu zachowuje minimalny kontrast 4,5:1? (Klauzula 10.1.4.3).
1. Weryfikacja treści na stronie WWW Dotyczy Art. 12 ust. 2 pkt 3 oraz EN 301 549 Klauzula 9 (Web). Jeśli regulamin jest treścią strony (HTML):
- **Sprawdzenie**:
  - Skalowanie: Czy tekst regulaminu można powiększyć do 200% bez utraty czytelności i konieczności przewijania poziomego (z wyjątkami)? (Klauzula 9.1.4.4).
  - Dostępność z klawiatury: Czy można przewijać i nawigować po treści regulaminu używając wyłącznie klawiatury? (Klauzula 9.2.1.1).
1. Zrozumiałość (Art. 12 ust. 2 pkt 1 lit. b)
- **Sprawdzenie**: Czy regulamin jest napisany w sposób możliwie prosty i zrozumiały, czy też sformatowanie (np. ściana tekstu, brak akapitów, mała czcionka) utrudnia jego percepcję?


## U.32.02.01.b - U.32.02.01.b Informacje o sposobie korzystania z usługi (Art. 32)

### Warunki wstępne
1. Istnieje proces lub procedura, którą użytkownik musi przejść, aby skorzystać z usługi (np. rejestracja, autoryzacja, zakup biletu).

### Procedura
1. Wymóg ten obliguje usługodawcę do dostarczenia „instrukcji obsługi” samej usługi. Informacje te, zawarte w regulaminie lub dokumencie pomocniczym (np. „Przewodnik użytkownika”, sekcja „Pomoc”), muszą być dostępne cyfrowo i percepcyjnie.

Analiza w oparciu o Art. 12 ust. 2 oraz normę EN 301 549:

1.  **Zakres treści („Informacje niezbędne”):** Chodzi o opis czynności, które klient musi wykonać, aby usługa została zrealizowana. Obejmuje to np.:
    -   Zasady logowania i uwierzytelniania (zgodność z Art. 16 dla bankowości lub Art. 18 dla e-commerce).
    -   Opis metod płatności.
    -   Procedury bezpieczeństwa (np. limity czasu sesji).
    -   Sposób składania reklamacji.
2.  **Dostępność formy (Art. 12):** Instrukcje te nie mogą być blokiem trudnego tekstu prawnego. Muszą być:
    -   **Zrozumiałe (Art. 12 ust. 2 pkt 1 lit. b):** Napisane prostym językiem, logicznie ustrukturyzowane [i.74].
    -   **Dostępne cyfrowo (Art. 12 ust. 2 pkt 2):** Jeśli są publikowane online, muszą spełniać WCAG 2.1 AA (Rozdział 9 EN 301 549) lub PDF/UA (Rozdział 10 EN 301 549).
    -   **Multimodalne (Art. 12 ust. 2 pkt 1 lit. a):** Informacje wizualne (np. zrzuty ekranu w instrukcji) muszą posiadać tekst alternatywny.
3.  **Formaty tekstowe dla AAC (Art. 12 ust. 2 pkt 1 lit. c):** Informacje te muszą być przygotowane w formatach tekstowych, które umożliwiają ich przetworzenie przez oprogramowanie do komunikacji alternatywnej i wspomagającej (np. czytniki, syntezatory).

### Typ oceny
Analiza dokumentów

### Checklist
1. Weryfikacja kompletności i zrozumiałości (Human Readable)
- **Działanie:** Przeanalizuj sekcję "Jak korzystać z usługi" lub odpowiednie paragrafy regulaminu.
- **Sprawdzenie:** Czy opis procedury (np. "Jak odzyskać hasło") jest jasny i zrozumiały? Czy unika się żargonu prawnego tam, gdzie opisuje się czynności techniczne?
    - *Błąd:* Instrukcja korzystania z usługi jest ukryta wewnątrz długiego, niesformatowanego bloku tekstu prawnego, co utrudnia jej znalezienie i zrozumienie (naruszenie wymogu zrozumiałości z Art. 12).
1. Weryfikacja techniczna (WCAG / EN 301 549)
*Dla instrukcji w formie strony WWW (HTML) lub pliku (PDF).*
- **Sprawdzenie:**
    -   **Struktura:** Czy instrukcja używa nagłówków i list do porządkowania kroków (np. Krok 1, Krok 2)? (Klauzula 9.1.3.1 / 10.1.3.1).
    -   **Grafika:** Jeśli instrukcja zawiera zrzuty ekranu (screenshoty) pokazujące, gdzie kliknąć – czy posiadają one tekst alternatywny opisujący akcję? (Klauzula 9.1.1.1 / 10.1.1.1).
    -   **Linki:** Czy linki do formularzy lub podstron mają zrozumiałe etykiety (np. "Przejdź do logowania" zamiast "Kliknij tutaj")? (Klauzula 9.2.4.4 / 10.2.4.4).
1. Weryfikacja dostępności instrukcji wideo (Jeśli dotyczy)
- **Działanie:** Jeśli usługodawca udostępnia wideoporadniki (np. "Jak kupić bilet w aplikacji").
- **Sprawdzenie:** Czy filmy te posiadają napisy dla niesłyszących (Art. 12 ust. 2 pkt 1 lit. a w zw. z EN 301 549 9.1.2.2)? Czy posiadają audiodeskrypcję lub transkrypcję dla niewidomych?.


## U.32.02.01.c - U.32.02.01.c Informacje o dostępności usług (Art. 32)

### Warunki wstępne
1. Usługodawca publikuje regulamin lub inny dokument opisujący warunki świadczenia usługi.

### Procedura
1. Przepis ten nakłada na usługodawcę obowiązek „autodeklaracji” wewnątrz dokumentów regulujących usługę. Nie wystarczy spełniać wymagań – trzeba o tym napisać w sposób dostępny dla klienta.

Analiza prawna i techniczna:
1.  **Opis rozwiązań („W jaki sposób”):** Ustawa wymaga podania informacji o sposobie spełniania wymagań. Oznacza to konieczność opisania konkretnych funkcjonalności lub udogodnień.
    -   *Zgodność z normą EN 301 549 (Klauzula 12.1.1):* Dokumentacja produktu/usługi powinna zawierać listę funkcji dostępności oraz opisy sposobów ich wykorzystania.
    -   *Przykłady:* Informacja, że aplikacja bankowa obsługuje logowanie biometryczne (alternatywa dla hasła), że infolinia obsługuje SMS, lub że strona internetowa jest zgodna z WCAG 2.1 na poziomie AA.
2.  **Lokalizacja:** Informacja ta musi znaleźć się w **regulaminie** lub dokumencie równoważnym (np. Ogólne Warunki Umowy, Karta Produktu). Nie może być ukryta wyłącznie w FAQ na stronie internetowej, jeśli nie stanowi ono integralnej części warunków świadczenia usługi.
3.  **Dostępność formy (Art. 12):** Sam opis (tekst w regulaminie) musi być dostępny cyfrowo (zgodnie z Art. 12 ust. 2). Oznacza to, że plik regulaminu (np. PDF) musi być tagowany, posiadać strukturę nagłówków i odpowiedni kontrast, aby osoba korzystająca z czytnika ekranu mogła do tej informacji dotrzeć.

### Typ oceny
Sprawdzenie zawartości merytorycznej oraz technicznej

### Checklist
1. Weryfikacja merytoryczna (Obecność informacji)**
- **Działanie:** Przeszukaj tekst regulaminu lub dokumentu „O usłudze” pod kątem słów kluczowych: „dostępność”, „niepełnosprawność”, „udogodnienia”, „WCAG”.
- **Sprawdzenie:** Czy dokument zawiera sekcję opisującą, jakie cechy dostępności posiada usługa?
    - *Przykład pozytywny:* „Serwis bankowości elektronicznej jest dostosowany do obsługi przez czytniki ekranu (NVDA, JAWS) i umożliwia nawigację wyłącznie klawiaturą”.
    - *Błąd:* Regulamin zawiera jedynie ogólne zdanie „Usługodawca dokłada starań, aby usługa była dostępna”, bez wskazania konkretnych rozwiązań (naruszenie wymogu informowania „w jaki sposób” usługa spełnia wymagania).
1. Weryfikacja merytoryczna (Obecność informacji)**
- **Działanie:** Przeszukaj tekst regulaminu lub dokumentu „O usłudze” pod kątem słów kluczowych: „dostępność”, „niepełnosprawność”, „udogodnienia”, „WCAG”.
- **Sprawdzenie:** Czy dokument zawiera sekcję opisującą, jakie cechy dostępności posiada usługa?
    - *Przykład pozytywny:* „Serwis bankowości elektronicznej jest dostosowany do obsługi przez czytniki ekranu (NVDA, JAWS) i umożliwia nawigację wyłącznie klawiaturą”.
    - *Błąd:* Regulamin zawiera jedynie ogólne zdanie „Usługodawca dokłada starań, aby usługa była dostępna”, bez wskazania konkretnych rozwiązań (naruszenie wymogu informowania „w jaki sposób” usługa spełnia wymagania).
1. Spójność z deklaracją (Cross-check)**
*Jeśli dotyczy.*
- **Sprawdzenie:** Czy informacje w regulaminie są spójne z informacjami w Deklaracji Dostępności (publikowanej na podstawie innej ustawy, jeśli dotyczy podmiotu publicznego) lub z informacjami w sklepach z aplikacjami (App Store/Google Play)? Rozbieżności mogą sugerować nierzetelność informacji.


## U.32.02.02 - U.32.02.02 Informacja o procesie oferowania i monitorowania usług (Art. 32)

### Procedura
1. Przepis ten nakłada obowiązek opisania „cyklu życia” usługi. Użytkownik ma prawo wiedzieć, jak wygląda proces jej dostarczania oraz w jaki sposób usługodawca dba o jej jakość (monitorowanie).

Analiza prawna i techniczna:
1.  **Opis procesu:** Usługodawca musi wyjaśnić, na czym polega proces oferowania/świadczenia.
    -   *Przykłady:* Opis ścieżki zakupowej, procedury otwierania konta, harmonogramu aktualizacji aplikacji.
2.  **Informacja o monitorowaniu:** Jest to kluczowy element tego punktu. Usługodawca musi poinformować, czy i jak monitoruje zgodność usługi z wymaganiami.
    -   Zgodnie z **Art. 32 ust. 1**, usługodawca ma obowiązek przeprowadzać ocenę zgodności. W punkcie 2 nakazuje się poinformowanie o tym procesie.
    -   *Przykładowa treść:* „Nasza usługa jest poddawana cyklicznym audytom dostępności co 12 miesięcy” lub „Monitorujemy działanie serwisu w trybie ciągłym pod kątem błędów zgłaszanych przez użytkowników czytników ekranu”.
3.  **Dostępność formy (Art. 12):** Informacja ta, będąc dokumentem (papierowym lub elektronicznym), musi spełniać rygory dostępności:
    -   **Postać elektroniczna:** Musi być zgodna z WCAG 2.1 AA (dla stron WWW – EN 301 549 Rozdział 9) lub PDF/UA (dla dokumentów – EN 301 549 Rozdział 10).
    -   **Multimodalność:** Informacja musi być dostępna dla więcej niż jednego zmysłu (np. tekst wizualny z możliwością odczytu głosowego).

### Typ oceny
Ocena treści oraz formy dokumentacji

### Checklist
1. Weryfikacja zawartości (Obecność informacji o monitorowaniu)
- **Działanie:** Przejrzyj regulamin, politykę jakości, zakładkę „Dostępność” lub „O nas”.
- **Sprawdzenie:** Czy znajduje się tam opis, w jaki sposób usługodawca weryfikuje poprawność działania usługi?
    - *Przykład pozytywny:* Dokument zawiera zapis: „W celu zapewnienia najwyższej jakości, proces świadczenia usługi bankowości elektronicznej jest stale monitorowany, a zmiany w interfejsie są testowane z użytkownikami niewidomymi”.
    - *Błąd:* Brak jakiejkolwiek wzmianki o procedurach kontrolnych lub monitorowaniu jakości/dostępności.
1. Weryfikacja dostępności cyfrowej dokumentu
- **Działanie:** Jeśli informacja jest plikiem PDF lub stroną HTML.
- **Sprawdzenie:**
    - Czy dokument ma zdefiniowany język (Lang attribute)? (Test C.9.3.1.1 / C.10.3.1.1).
    - Czy tekst jest skalowalny i czytelny przy powiększeniu? (Test C.9.1.4.4 / C.10.1.4.4).
    - Czy treść jest sformatowana w sposób logiczny (nagłówki), co ułatwia zrozumienie procesu? (Art. 12 ust. 2 pkt 1 lit. b – zrozumiałość).
1. Weryfikacja spójności (Dobra praktyka)
- **Sprawdzenie:** Czy opis procesu (np. „Usługa dostępna 24/7”) jest zgodny z informacjami o ewentualnych przerwach technicznych (monitorowanie dostępności)? Informacja powinna być rzetelna.


## U.33.01.01 - U.33.01.01 Informacja o dostępności usługi (Art. 33)

### Warunki wstępne
1. Usługodawca posiada regulamin lub inny dokument opisujący usługę (zgodnie z Art. 32 ust. 2 pkt 1 lit. a).

### Procedura
1. Ten przepis precyzuje, co dokładnie musi znaleźć się w "informacji o oferowanej usłudze" w kontekście fizycznej dostępności miejsc obsługi klienta. Jest to kluczowe dla osób z niepełnosprawnością ruchową lub sensoryczną, które muszą wiedzieć, czy dostaną się do placówki, zanim się do niej udadzą.

Analiza prawna:
1.  **Lokalizacja informacji:** Zgodnie z odesłaniem do Art. 32 ust. 2 pkt 1 lit. a, dane te muszą znaleźć się w **regulaminie** lub dokumencie równoważnym (np. "Karta informacyjna usługi", podstrona "Dostępność" linkowana z regulaminu).
2.  **Alternatywa (Opis lub Certyfikat):** Ustawodawca dopuszcza dwie ścieżki spełnienia obowiązku:
    *   **Ścieżka 1 (Opisowa):** Usługodawca opisuje "aktualny stan". Musi to obejmować nie tylko wnętrze (pomieszczenia), ale też **budynek** i **otaczającą infrastrukturę** (np. czy jest miejsce parkingowe dla niepełnosprawnych, czy chodnik ma obniżony krawężnik). Ważne jest zastrzeżenie: "w zakresie, w jakim te warunki umożliwiają korzystanie z usługi" – nie trzeba opisywać pomieszczeń technicznych niedostępnych dla klientów.
    *   **Ścieżka 2 (Certyfikacyjna):** Jeśli usługodawca uzyskał **certyfikat dostępności** (wydawany na podstawie art. 19 ust. 1 ustawy z 2019 r. o zapewnianiu dostępności), informacja o posiadaniu tego certyfikatu (ważnego) jest wystarczająca, gdyż potwierdza on spełnienie norm.
3.  **Dostępność cyfrowa:** Ponieważ informacja ta jest częścią opisu usługi z Art. 12, sam tekst opisu (na stronie www lub w PDF) musi być dostępny cyfrowo (WCAG 2.1 AA / EN 301 549), aby np. osoba niewidoma mogła przeczytać, czy budynek posiada windę.

### Typ oceny
Analiza treści

### Checklist
1. Weryfikacja zawartości (Obecność informacji)
- **Działanie:** Przejrzyj regulamin lub dedykowaną sekcję o dostępności.
- **Pytanie 1:** Czy podano informację o certyfikacie dostępności (data wydania, podmiot certyfikujący)?
    - Jeśli **TAK**: Wymóg spełniony (ścieżka 2).
- **Pytanie 2:** Jeśli nie ma certyfikatu, czy znajduje się opis dostępności architektonicznej placówek?
    - *Sprawdź obecność informacji o:* wejściu do budynku (schody/pochylnia), dostępności wewnątrz (windy, szerokość przejść), infrastrukturze (parking).
    - *Błąd:* Brak jakiejkolwiek informacji o barierach lub udogodnieniach architektonicznych w dokumencie opisującym usługę jest naruszeniem Art. 33.
1. Rzetelność opisu (Zgodność ze stanem faktycznym - Opcjonalne)
*Wymaga wizji lokalnej lub weryfikacji zdjęciowej.*
- **Sprawdzenie:** Czy deklaracja "placówka dostępna dla wózków" jest prawdziwa? (np. czy pochylnia nie jest zbyt stroma, czy wejście nie ma progu > 2 cm). Podanie nieprawdziwych informacji narusza wymóg "aktualnego stanu".
1. Dostępność cyfrowa informacji (Art. 12)
*Zgodnie z EN 301 549 Rozdział 9 (Web) lub 10 (Dokumenty).*
- **Działanie:** Sprawdź technicznie tekst opisu (np. na stronie www).
- **Sprawdzenie:**
    - Czy opis jest czytelny dla czytnika ekranu (nie jest skanem ulotki)?
    - Czy zastosowano odpowiedni kontrast tekstu?
    - Czy język opisu jest zrozumiały (np. unikanie technicznego żargonu budowlanego typu "przylga drzwiowa", jeśli nie jest to konieczne)?


## U.33.02 - U.33.02 Informacja o dostępności usługi (Art. 33)

### Warunki wstępne
1. Usługodawca nie posiada certyfikatu dostępności (gdyż w takim przypadku skorzystałby z Art. 33 ust. 1 pkt 2) i realizuje obowiązek informacyjny poprzez **opis stanu dostępności** (Art. 33 ust. 1 pkt 1).

### Procedura
1. Przepis ten narzuca strukturę i szczegółowość opisu dostępności. Poprzez odesłanie do **Art. 15 ust. 2**, ustawa obliguje każdego usługodawcę (nie tylko z branży transportowej) do uwzględnienia w informacji o usłudze następujących obszarów:

1.  **Dostępność architektoniczna (Ustawa o dostępności 2019, art. 6 pkt 1):** Opis musi wyjaśniać, czy i jak zapewniono:
    -   Wolne od barier przestrzenie komunikacyjne (poziome i pionowe) – np. czy są schody, windy, pochylnie.
    -   Dostęp do wszystkich pomieszczeń (z wyłączeniem technicznych).
    -   Informację o rozkładzie pomieszczeń (wizualną, dotykową lub głosową).
    -   Możliwość wstępu z psem asystującym.
    -   Możliwość ewakuacji osób ze szczególnymi potrzebami.
2.  **Dostępność informacyjno-komunikacyjna (Ustawa o dostępności 2019, art. 6 pkt 3 lit. a i b):** Opis musi zawierać informacje o:
    -   Obsłudze z wykorzystaniem środków wspierających komunikowanie się (np. tłumacz polskiego języka migowego PJM – online lub na miejscu).
    -   Instalacji urządzeń wspomagających słyszenie (np. pętle indukcyjne, systemy FM).
3.  **Zgodność z Prawem budowlanym:** Informacja powinna potwierdzać spełnienie podstawowych warunków bezpieczeństwa i dostępności obiektów użyteczności publicznej (zgodnie z art. 5 ust. 1 pkt 1 lit. d oraz pkt 4 Prawa budowlanego).
1. **Interpretacja:** Usługodawca nie może napisać jedynie „Lokal jest dostępny”. Musi napisać konkretnie: „Lokal posiada wejście z poziomu chodnika (brak barier), toaletę dla osób niepełnosprawnych, pętlę indukcyjną przy stanowisku nr 2 oraz zapewnia dostęp do tłumacza PJM online”.

### Typ oceny
Szczegółowa analiza

### Checklist
1. Kompletność opisu architektonicznego (Bariery i Przestrzeń)
- **Działanie:** Przeczytaj opis dostępności placówki/budynku.
- **Sprawdzenie:** Czy dokument zawiera informacje o:
    -   Wejściu (schody/winda/pochylnia)?
    -   Toaletach (dostępność/brak)?
    -   Możliwości wejścia z psem asystującym (jest to wymóg ustawowy)?
    -   *Błąd:* Opis pomija kwestię barier pionowych (np. brak informacji o windzie, gdy lokal jest na piętrze).
1. Kompletność opisu komunikacyjnego (Zmysły)
- **Działanie:** Sprawdź sekcję dotyczącą obsługi klienta.
- **Sprawdzenie:** Czy dokument informuje o:
    -   Dostępności pętli indukcyjnej (lub innego systemu wspomagania słuchu)?
    -   Dostępności tłumacza języka migowego (PJM)?
    -   *Uwaga:* Jeśli usługa nie zapewnia tych rozwiązań, rzetelna informacja powinna o tym wspominać (np. „Brak pętli indukcyjnej”), aby nie wprowadzać klienta w błąd co do „aktualnego stanu”. Jednakże Art. 33 ust. 2 w zw. z Art. 15 ust. 2 sugeruje, że opis ma dotyczyć „spełniania wymagań”, co wywiera presję na faktyczne zapewnienie tych udogodnień.
1. Precyzja i aktualność
- **Sprawdzenie:** Czy informacja odnosi się do *konkretnych* lokalizacji świadczenia usługi (np. lista placówek z opisem), czy jest tylko ogólną deklaracją polityki firmy? Ustawa wymaga podania informacji o stanie pomieszczeń i budynków „wykorzystywanych do oferowania lub świadczenia usług”, co implikuje konkretność.

