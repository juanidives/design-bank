# Design Bank

Banco pessoal de sites capturados para estudo de design, UI e interfaces web.  
Cada pasta é um site ou componente que chamou atenção — seja pela estética, pelo layout ou pela técnica.

---

## 📁 Organização

A nomenclatura é livre. Sites do mesmo domínio tendem a ter o prefixo da origem:

```
design-bank/
├── aura.build-nome/       ← sites capturados de aura.build
├── nome-livre/            ← qualquer site que valeu a pena guardar
└── ...
```

---

## ➕ Como adicionar um novo site

1. Captura o site com a ferramenta abaixo
2. Extrai o ZIP gerado
3. Cria uma pasta com um nome descritivo dentro de `design-bank/`
4. Cola os arquivos lá dentro
5. Sobe pro GitHub:

```powershell
git add .
git commit -m "feat: nome-do-site"
git push
```

---

## 🪞 Ferramenta de captura

**[Website Downloader — asimov-academy](https://github.com/asimov-academy/Website-Downloader)**  
Webapp em Flask + Playwright que captura réplicas completas de sites, incluindo conteúdo renderizado por JavaScript. Suporta sites modernos (Next.js, Gatsby, Nuxt), imagens lazy-loaded e iframes. Exporta tudo em ZIP pronto para uso offline.

---

## ⚙️ Observações

- Vídeos e arquivos pesados são ignorados via `.gitignore` — ficam só local
- Este banco é para estudo e referência pessoal
