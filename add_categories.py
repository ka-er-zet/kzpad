#!/usr/bin/env python3
"""
Skrypt dodający pole 'category' do wszystkich artykułów w clauses.json
na podstawie numeru artykułu.

Art. 7-22: "accessibility_requirements" (wymagania dostępności)
Art. 23, 24, 26, 32, 33: "service_provider_obligations" (obowiązki usługodawcy)
"""

import json
import re

# Definicje kategorii na bazie numeru artykułu
ACCESSIBILITY_REQUIREMENTS = list(range(7, 23))  # Art. 7-22
SERVICE_PROVIDER_OBLIGATIONS = [23, 24, 26, 32, 33]

def extract_article_number(clause_id):
    """
    Ekstrahuje numer artykułu z ID klauzuli.
    Przykłady:
    - U.7.1.1.a -> 7
    - U.23.2.1 -> 23
    - U.32.1.1.b-01 -> 32
    """
    match = re.match(r'U\.(\d+)', clause_id)
    if match:
        return int(match.group(1))
    return None

def get_category(article_number):
    """Zwraca kategorię na bazie numeru artykułu."""
    if article_number in ACCESSIBILITY_REQUIREMENTS:
        return "accessibility_requirements"
    elif article_number in SERVICE_PROVIDER_OBLIGATIONS:
        return "service_provider_obligations"
    return "other"  # fallback dla artykułów spoza zakresu

def add_categories_to_json(input_file, output_file=None):
    """
    Dodaje pole 'category' do każdego artykułu w clauses.json
    """
    if output_file is None:
        output_file = input_file
    
    print(f"Wczytywanie {input_file}...")
    with open(input_file, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    modified_count = 0
    skipped_count = 0
    
    for clause_id, clause_data in data.items():
        # Sprawdzenie czy pole już istnieje
        if 'category' in clause_data:
            print(f"  ⊘ {clause_id}: pole 'category' już istnieje ({clause_data['category']})")
            skipped_count += 1
            continue
        
        # Ekstrahowanie numeru artykułu
        article_num = extract_article_number(clause_id)
        if article_num is None:
            print(f"  ✗ {clause_id}: nie można ekstrahować numeru artykułu")
            skipped_count += 1
            continue
        
        # Przypisanie kategorii
        category = get_category(article_num)
        clause_data['category'] = category
        modified_count += 1
        
        status = "✓" if category != "other" else "?"
        print(f"  {status} {clause_id} (Art. {article_num}): {category}")
    
    # Zapis do pliku
    print(f"\nZapisywanie do {output_file}...")
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    
    print(f"\n✅ Gotowe!")
    print(f"   Zmodyfikowanych: {modified_count}")
    print(f"   Pominięto: {skipped_count}")
    print(f"   Razem artykułów: {len(data)}")

if __name__ == '__main__':
    input_path = 'clauses_json/clauses.json'
    add_categories_to_json(input_path)
