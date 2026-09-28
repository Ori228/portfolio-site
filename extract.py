import os

# התיקיות שבהן יושב הקוד שלנו
folders_to_scan = ["app", "components", "lib", "prisma"]
# סוגי הקבצים שאנחנו רוצים לחלץ
extensions = (".tsx", ".ts", ".css", ".prisma")

with open("all_code.txt", "w", encoding="utf-8") as outfile:

    # 1. סריקת קבצים שיושבים ישירות בתיקיית השורש
    for file in os.listdir("."):
        if os.path.isfile(file) and file.endswith(extensions):
            outfile.write(f"\n\n{'='*40}\n")
            outfile.write(f"FILE: {file}\n")
            outfile.write(f"{'='*40}\n\n")
            with open(file, "r", encoding="utf-8") as infile:
                outfile.write(infile.read())

    # 2. סריקת התיקיות הפנימיות
    for folder in folders_to_scan:
        if not os.path.exists(folder):
            continue
        for root, _, files in os.walk(folder):
            for file in files:
                if file.endswith(extensions):
                    filepath = os.path.join(root, file)
                    outfile.write(f"\n\n{'='*40}\n")
                    outfile.write(f"FILE: {filepath}\n")
                    outfile.write(f"{'='*40}\n\n")

                    with open(filepath, "r", encoding="utf-8") as infile:
                        outfile.write(infile.read())

print("Done! Check all_code.txt")
