# Stack & Tecnologias - Oasis Tibasosa

## Core
- **HTML5**: Estruturação semântica, recriando o layout previamente gerado em React.
- **Vanilla JS**: Substituição completa dos hooks React (`useEffect`, `useState`, `useRef`) por lógicas baseadas em Event Listeners (`scroll`, `DOMContentLoaded`) nativos.
- **CSS3 Custom**: Animações de entrada (`@keyframes`), transições de opacidade e comportamentos globais de mix-blend-mode.

## Styling
- **Tailwind CSS (via CDN)**: Mantido para classes utilitárias, tipografia flexível (`text-[12vw]`), grids, layout flexbox responsivo e hover states avançados (`group-hover`).
- **CSS Variables**: Gestão de tokens de cor (Base `#E3E1DC`, Dark `#121212`, Accent `#374336`) e de família de fontes.

## Assets e Ícones
- **Lucide Icons**: Substituição da biblioteca `lucide-react` pelo script `unpkg.com/lucide@latest` (CDN), utilizando atributos `<i data-lucide="icon-name"></i>` injetados dinamicamente no cliente.
- **Google Fonts**: `Syncopate` (Display ultra-largo) e `Manrope` (Corpo de texto moderno e legível).

## Lógicas Javascript (Vanilla Port)
- **Preloader Progressivo**: Sistema de progressão temporal com timeouts (1.8s) para animações `fading-text` e `sliding-up`, sincronizado com a liberação de opacidade da página principal.
- **Observer de Textos (SplitText)**: Lógica reescrita com `IntersectionObserver` iterando sobre `nodeList`. Particiona strings em tags `<span>` (`split(' ')`) para revelar cada pedaço em cascata (Stagger effect) baseado num delay incremental de índice.
- **Scroll Parallax (Hero)**: Efeito de deslocamento (`translateY(scrollY * 0.3)`) ligado nativamente ao `window.scrollY`.
- **Card Stacking**: Leitura de posições globais (`getBoundingClientRect().top`) no DOM, injetando valores computados (progressivos 0.0 a 1.0) de escala (`scale(0.9 a 1.0)`) e `opacity` no cartão pai, emulando um "Cards Deck".
- **Footer Sticky/Reveal**: Cálculo dinâmico do `bottom point` da section principal (`.wrapper`) vs `window.innerHeight`. Dá o efeito cinematográfico de que o rodapé está fixo por trás da página e emerge aumentando escala e opacidade.

## Efeitos CSS Notáveis
- **`mix-blend-difference`**: Utilizado proeminentemente para leitura de tipografia maciça (`12vw`) sobre um fundo de imagem (Hero), adaptando as letras perfeitamente aos contrastes.
- **`noise-overlay`**: Gerado via SVG filter (`<feTurbulence>`) carregado inline via base64, configurando uma textura granulada global com `opacity: 0.05` e `pointer-events: none`.
- **Hover Magnético de Ícones**: Botões circulares (Link interativo) com over-scaling interno (`scale-150`) restrito a `overflow-hidden`, orquestrando rotações conjuntas de eixo 3D (`rotate-[360deg]`).
- **Reveal Botões Inferiores (Sweep Y)**: Pseudo-blocos ocultos que ganham `scale-y-100` alterando invertidamente a cor do hover no texto via composições CSS puras com `group-hover:text-black`.
