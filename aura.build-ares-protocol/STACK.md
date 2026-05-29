# STACK - ARES Protocol

## Arquitetura e Bibliotecas Base
- **Frontend Original:** HTML Estático com Tailwind CSS (via script CDN)
- **Animações e Interatividade:** GSAP (ScrollTrigger), CSS Customizado e WebGL para animações de partículas via UnicornStudio
- **Design System:** Extraído com 100% de fidelidade para Vanilla HTML/CSS/JS

## Tipografia e Cores
- **Tipografia:** 
  - Primária (Leitura): `Syne`, sans-serif
  - Secundária (Destaques/Títulos): `Abril Fatface`, serif
  - Mono (Labels/Dados): `Space Mono`, monospace
- **Cores Principais:**
  - Dark/Base: `#0f0f10` (Background principal), `#1a1a1c` (Cards e Componentes)
  - Light/Text: `#ffffff` e tons translúcidos (ex: `white/50`, `white/90`, `#f0f0f0`)
  - Accents: `#C2A878` (Dourado Escuro) e `#a0875d` (Gradientes)
  - Extras: `#888` (Texto secundário e labels)

## Componentes Extraídos e Padrões
- **Top Navigation:** Barra superior translúcida com glassmorphism (backdrop-blur-md) e botão de ação ("Reserve Seat").
- **Hero Section:** Hero full-screen dividida, com vídeo renderizado 3D (canvas / UnicornStudio) simulando superfície de Marte. Inclui sobreposição de UI simulando visor ("Visual Feed", "Lat/Lon", "TRANSMISSION OPEN") e um painel de "Atmosferic Sim" com sliders funcionais customizados (`input[type=range]`).
- **Feature Cards:** Grid de cartões informativos (#1a1a1c) com micro-interação `hover-lift` (transformação em Y e bordas ativadas em hover). Inclui labels tipográficos mono-espaçados ("01 / Propulsion").
- **Testimonial Cards:** Cards de citação com layout em coluna, incluindo foto do autor arredondada na base.
- **Journey Scroll (Storytelling):** Seção complexa com sticky scroll. A imagem / vídeo no painel esquerdo permanece fixa (`lg:sticky lg:top-24`) enquanto as fases rolam pelo lado direito, atualizando informações cruciais.
- **Equipe / Crew Cards:** Cartões com imagens em formato 4:5 e labels numéricos em fonte Mono absolutizados no canto superior esquerdo.
- **CTA Banner:** Banner largo com fundo escuro, glow radial em dourado (#C2A878/10 blur-3xl) e botões de alta fidelidade.
- **Marquee:** Letreiro infinito (animação CSS) com texto rolando de forma suave (Ad Astra ✦ Per Aspera).

## Estratégia de Transpilação Utilizada
1. Análise profunda da estrutura DOM, preservando 100% das classes utilitárias do Tailwind geradas.
2. Extração integral dos blocos de estilos CSS (incluindo filtros de ruído SVG `grain`, `hover-lift` e estilizações complexas de sliders).
3. Cópia exata dos scripts GSAP injetados, mantendo as lógicas de "SplitText" falsas (`data-aura-split="1"`) e revelações de texto (`data-aura-fade="1"`).
4. Tradução completa do conteúdo da interface original para Português (PT-BR).
5. Renderização dos componentes em um showcase auto-contido.
