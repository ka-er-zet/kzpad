import json

with open('clauses_json/clauses.json', 'r', encoding='utf-8') as f:
    clauses = json.load(f)

# Dodaj category do wszystkich artykułów
modified_count = 0

for clause_id, clause_data in clauses.items():
    if 'category' not in clause_data:
        # Artykuły C.* to wymagania dostępności techniczne
        if clause_id.startswith('C.'):
            clause_data['category'] = 'accessibility_requirements'
        # Artykuły U.7-22 to wymagania dostępności (już mają, ale na wszelki wypadek)
        elif clause_id.startswith('U.'):
            try:
                article_num = int(clause_id.split('.')[1])
                if article_num in [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 22]:
                    clause_data['category'] = 'accessibility_requirements'
                elif article_num in [23, 24, 26, 32, 33]:
                    clause_data['category'] = 'service_provider_obligations'
                else:
                    clause_data['category'] = 'other'
            except:
                clause_data['category'] = 'other'
        else:
            clause_data['category'] = 'other'
        modified_count += 1

# Zapisz
with open('clauses_json/clauses.json', 'w', encoding='utf-8') as f:
    json.dump(clauses, f, ensure_ascii=False, indent=2)

print(f"✅ Dodano kategorję do {modified_count} artykułów")

# Weryfikacja
with open('clauses_json/clauses.json', 'r', encoding='utf-8') as f:
    verify = json.load(f)

accessibility = sum(1 for c in verify.values() if c.get('category') == 'accessibility_requirements')
obligations = sum(1 for c in verify.values() if c.get('category') == 'service_provider_obligations')
other = sum(1 for c in verify.values() if c.get('category') == 'other')
missing = sum(1 for c in verify.values() if 'category' not in c)

print(f"\n📊 Podsumowanie:")
print(f"  • Wymagania dostępności: {accessibility}")
print(f"  • Obowiązki usługodawcy: {obligations}")
print(f"  • Inne: {other}")
print(f"  • BEZ kategorii: {missing}")
print(f"  • RAZEM: {len(verify)}")
