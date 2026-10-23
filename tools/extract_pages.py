"""Render pages of the scanned books to .cache/pages/<book>-<page>.jpg.

Usage: python tools/extract_pages.py sb|wb FROM [TO]
Page numbers are the printed page numbers of the book.
Needs pypdf (pip) and ffmpeg (decodes the JPEG2000 scans).
"""
import glob
import os
import re
import subprocess
import sys
import tempfile

import pypdf

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "sources")
OUT = os.path.join(ROOT, ".cache", "pages")

# Student's Book: split into files named by full-PDF page range; printed page = PDF page - 2.
SB_OFFSET = 2
# Workbook: one file; printed page = PDF page number.
WB_OFFSET = 0


def locate(book, page):
    """Return (pdf path, 0-based page index) for a printed page."""
    if book == "wb":
        return glob.glob(os.path.join(SRC, "*Workbook*.pdf"))[0], page - 1 + WB_OFFSET
    pdf_page = page + SB_OFFSET
    for f in glob.glob(os.path.join(SRC, "SB *.pdf")):
        a, b = map(int, re.search(r"_(\d+)_(\d+)\.pdf$", f).groups())
        if a <= pdf_page <= b:
            return f, pdf_page - a
    raise SystemExit("no SB file for page %d" % page)


def extract(book, page):
    out = os.path.join(OUT, "%s-%03d.jpg" % (book, page))
    if os.path.exists(out):
        return out
    path, idx = locate(book, page)
    xo = pypdf.PdfReader(path).pages[idx]["/Resources"].get("/XObject")
    if not xo:
        print("no image on", book, page)
        return None
    imgs = [o.get_object() for o in xo.get_object().values()]
    imgs = [o for o in imgs if o.get("/Subtype") == "/Image"]
    raws = []
    with tempfile.TemporaryDirectory() as tmp:
        for n, o in enumerate(imgs):
            raw = os.path.join(tmp, "%d.img" % n)
            with open(raw, "wb") as fh:
                fh.write(o._data)
            raws.append(raw)
        # Workbook pages are stored as two stacked halves; join them vertically.
        inputs = sum([["-i", r] for r in raws], [])
        vf = ("vstack=inputs=%d," % len(raws) if len(raws) > 1 else "") + "scale=1400:-1"
        subprocess.run(["ffmpeg", "-loglevel", "error", "-y"] + inputs + ["-filter_complex", vf, out], check=True)
    return out


def main():
    book, a = sys.argv[1], int(sys.argv[2])
    b = int(sys.argv[3]) if len(sys.argv) > 3 else a
    os.makedirs(OUT, exist_ok=True)
    for p in range(a, b + 1):
        print(extract(book, p))


if __name__ == "__main__":
    main()
