import json

# Artykuły dotyczące wymagań dostępności (Art. 7-22)
accessibility_articles = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 22]

# Artykuły dotyczące obowiązków usługodawcy (Art. 23, 24, 26, 32, 33)
service_provider_articles = [23, 24, 26, 32, 33]

with open('clauses_json/clauses.json', 'r', encoding='utf-8') as f:
    clauses = json.load(f)

for clause_id, clause_data in clauses.items():
    # Ekstrahuj numer artykułu z ID (np. "U.7.1.1.a" -> 7)
    try:
        article_num = int(clause_id.split('.')[1])
        
        if article_num in accessibility_articles:
            clause_data['category'] = 'accessibility_requirements'
        elif article_num in service_provider_articles:
            clause_data['category'] = 'service_provider_obligations'
        else:
            clause_data['category'] = 'other'
    except:
        clause_data['category'] = 'other'

# Zapisz z Pretty Print
with open('clauses_json/clauses.json', 'w', encoding='utf-8') as f:
    json.dump(clauses, f, ensure_ascii=False, indent=2)

print("✅ Pole 'category' dodane do wszystkich artykułów")

# Weryfikacja
accessibility_count = sum(1 for c in clauses.values() if c.get('category') == 'accessibility_requirements')
obligations_count = sum(1 for c in clauses.values() if c.get('category') == 'service_provider_obligations')
other_count = sum(1 for c in clauses.values() if c.get('category') == 'other')

print(f"  • Wymagania dostępności (Art. 7-22): {accessibility_count}")
print(f"  • Obowiązki usługodawcy (Art. 23, 24, 26, 32, 33): {obligations_count}")
print(f"  • Inne: {other_count}")
