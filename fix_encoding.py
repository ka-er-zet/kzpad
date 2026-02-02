#!/usr/bin/env python3
"""
Fix Polish character encoding in JSON files.

This script fixes Mojibake (double-encoded UTF-8) where Polish characters
were incorrectly interpreted as Windows-1252 and re-encoded as UTF-8.
"""

import json
import sys
import ftfy
from pathlib import Path

def fix_polish_mojibake(text):
    """Fix Polish character mojibake that ftfy doesn't catch."""
    if not isinstance(text, str):
        return text
    
    # First apply ftfy to catch most patterns
    text = ftfy.fix_text(text)
    
    # Then manual replacements for patterns ftfy doesn't catch
    # Order matters - do multi-character replacements first
    text = text.replace('Ăł', 'ó')    # ogólnego
    text = text.replace('ĹĽ', 'ż')    # książek, sprzedaży
    text = text.replace('Ä…', 'ą')    # urządzenia
    text = text.replace('Ĺş', 'ź')    # przewoźników
    
    return text

def fix_value(value):
    """Recursively fix all strings in a data structure."""
    if isinstance(value, str):
        return fix_polish_mojibake(value)
    elif isinstance(value, dict):
        return {k: fix_value(v) for k, v in value.items()}
    elif isinstance(value, list):
        return [fix_value(item) for item in value]
    else:
        return value

def fix_json_file(filepath):
    """Fix encoding in a JSON file."""
    filepath = Path(filepath)
    
    print(f"Processing {filepath.name}...")
    
    # Read the file
    with open(filepath, 'r', encoding='utf-8-sig') as f:
        data = json.load(f)
    
    # Fix all strings in the data
    fixed_data = fix_value(data)
    
    # Write back without BOM, with proper UTF-8 encoding
    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(fixed_data, f, ensure_ascii=False, indent=2)
    
    print(f"✓ Fixed {filepath.name}")

def main():
    """Fix all JSON files in clauses_json directory."""
    files_to_fix = [
        'clauses_json/mapping.json',
        'clauses_json/clauses.json',
        'clauses_json/summaries.json',
    ]
    
    for filepath in files_to_fix:
        try:
            fix_json_file(filepath)
        except Exception as e:
            print(f"✗ Error processing {filepath}: {e}", file=sys.stderr)
            return 1
    
    print("\n✓ All files fixed successfully!")
    return 0

if __name__ == '__main__':
    sys.exit(main())
