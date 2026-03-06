import json

with open('clauses_json/clauses.json', 'r', encoding='utf-8') as f:
    clauses = json.load(f)

missing_category = []
with_category = []

for clause_id, clause_data in clauses.items():
    if 'category' in clause_data:
        with_category.append(clause_id)
    else:
        missing_category.append(clause_id)

print(f"✅ Z kategorią: {len(with_category)}")
print(f"❌ BEZ kategorii: {len(missing_category)}")

if missing_category:
    print(f"\nArtykuły bez kategorii:")
    for cid in sorted(missing_category):
        print(f"  - {cid}")
