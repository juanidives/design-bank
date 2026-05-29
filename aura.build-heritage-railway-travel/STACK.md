# STACK - Aura Heritage Railway Travel

## Arquitetura e Bibliotecas Base
- **Frontend Original:** React.js (via Vite Sandbox bundle)
- **Animações e Interatividade:** GSAP (ScrollTrigger) e Lenis Smooth Scroll
- **Estilização:** CSS Customizado + Tailwind CSS (via script CDN)
- **Design System:** Extraído com 100% de fidelidade para Vanilla HTML/CSS/JS

## Tipografia e Cores
- **Tipografia:** 
  - Primária (Leitura): `DM Sans`
  - Secundária (Destaques/Títulos): `DM Serif Display`
- **Cores Principais:**
  - Dark/Base: `#222`, `#1c2230`, `rgba(10,14,22, 0.82)`
  - Light/Base: `#fff`, `#f0ebe2`, `#e8e8e8`, `#f7f2e8`
  - Accents: `#c49b4a` (Dourado Heritage), `#8b3322` e `#a84830` (Tons Ferrugem/Terra)

## Componentes Extraídos e Padrões
- **Top Header:** Navegação full-screen via Toggle Menu Animado com máscara de fundo (translada em -100%).
- **Top Intro Mask:** Efeito "Blind Out" na inicialização, simulando o encolhimento de lâminas.
- **Hero Section:** Parallax complexo de múltiplas camadas baseado no scroll (via GSAP `matchMedia`) incluindo background cover com blending e `dep-pulse` de indicação de partida.
- **Lead Sections:** Alternância de colunas tipográficas com sobreposições absolutas de imagens flutuantes (arquitetura "Editorial"). Efeito glass com overlays gradientes escuros sobre imagens rústicas.
- **Top Service / Departures:** Uso pesado de Radial Gradients "Glow Blur" nos cards durante o hover.
- **Top Event / Reports:** Cards de notícias clássicos com grid responsivo e estilo editorial (`report-remix`).
- **Footer:** Simples e objetivo com tipografia clássica centralizada.

## Estratégia de Transpilação Utilizada
1. Desempacotamento de bundle bruto do CodeSandbox via Node.js local.
2. Renderização do React para Static HTML String via `ReactDOMServer`.
3. Tradução completa do conteúdo original e copy (English -> PT-BR).
4. Refatoração e adaptação de Hooks React (`useEffect` e instâncias do GSAP/Lenis) para scripts Vanilla integrados com eventos de DOM.
