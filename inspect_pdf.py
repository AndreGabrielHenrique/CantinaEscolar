from pathlib import Path
from pypdf import PdfReader

pdf_path = Path('📊 ROTEIRO DE ATIVIDADE – ANALISTA DE DADOS (PASSO A PASSO).pdf')
reader = PdfReader(pdf_path)
print('PAGES', len(reader.pages))
for i, page in enumerate(reader.pages, 1):
    text = page.extract_text() or ''
    print('PAGE', i)
    print(repr(text))
    print('LENGTH', len(text))
    print('---')
