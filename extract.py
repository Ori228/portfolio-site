import os

# התיקיות שבהן יושב הקוד שלנו
folders = ["app", "components", "lib"]
# סוגי הקבצים שאנחנו רוצים לחלץ
extensions = (".tsx", ".ts", ".css")

with open("all_code.txt", "w", encoding="utf-8") as outfile:
    for folder in folders:
        if not os.path.exists(folder):
            continue
        for root, _, files in os.walk(folder):
            for file in files:
                if file.endswith(extensions):
                    filepath = os.path.join(root, file)

                    # כותרת ברורה לכל קובץ כדי שאדע להפריד ביניהם
                    outfile.write(f"\n\n{'='*40}\n")
                    outfile.write(f"FILE: {filepath}\n")
                    outfile.write(f"{'='*40}\n\n")

                    with open(filepath, "r", encoding="utf-8") as infile:
                        outfile.write(infile.read())

print("Done! Check all_code.txt")
