import json

# Wczytaj oba pliki
with open(r'c:\Users\marci\OneDrive\Pulpit\mapping.txt', 'r', encoding='utf-8') as f:
    mapping_txt = json.load(f)

with open(r'clauses_json\mapping.json', 'r', encoding='utf-8') as f:
    mapping_json = json.load(f)

differences = []

# Porównaj sekcję matrix
if mapping_txt['matrix'] != mapping_json['matrix']:
    txt_matrix = {item['id']: item for item in mapping_txt['matrix']}
    json_matrix = {item['id']: item for item in mapping_json['matrix']}
    
    # Znajdź różne ID
    all_ids = set(txt_matrix.keys()) | set(json_matrix.keys())
    
    for item_id in sorted(all_ids):
        if item_id not in txt_matrix:
            differences.append(f"[BRAK W TXT] {item_id}")
        elif item_id not in json_matrix:
            differences.append(f"[BRAK W JSON] {item_id}")
        else:
            txt_item = txt_matrix[item_id]
            json_item = json_matrix[item_id]
            
            if txt_item != json_item:
                differences.append(f"\n[RÓŻNY] {item_id}")
                # Porównaj mapowania
                txt_mappings = txt_item.get('product_mappings', {})
                json_mappings = json_item.get('product_mappings', {})
                
                for product_id in sorted(set(txt_mappings.keys()) | set(json_mappings.keys())):
                    txt_val = txt_mappings.get(product_id)
                    json_val = json_mappings.get(product_id)
                    
                    if txt_val != json_val:
                        differences.append(f"  {product_id}:")
                        differences.append(f"    mapping.txt:  {txt_val}")
                        differences.append(f"    mapping.json: {json_val}")

print("SPIS WSZYSTKICH RÓŻNIC:")
print("=" * 100)
for diff in differences:
    print(diff)

print("\n" + "=" * 100)
print(f"Razem zmian w mapowaniach: {len([d for d in differences if d.startswith('  ')])}")
print(f"Razem zmian w ID: {len([d for d in differences if d.startswith('[RÓŻNY]')])}")
