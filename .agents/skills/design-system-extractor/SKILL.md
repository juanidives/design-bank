---
name: design-system-extractor
description: Ative esta skill quando o usuário pedir para extrair, analisar ou criar um design system a partir de um arquivo HTML. Também ativa com: "analisar página", "extrair design system", "criar style guide", "processar projeto".
---

# Skill: Design System Extractor

## Princípio fundamental
O design system não é documentação — é um site vivo que usa a identidade visual do projeto original para se apresentar. A HERO tem 70% do peso total. CSS e JS são transplantados, nunca resumidos.

---

## FASE 1 — LEITURA COMPLETA (não escreva nada ainda)

Leia o HTML inteiro antes de qualquer ação. Procure CSS em todos os lugares:
- Blocos `<style>` inline
- Atributos `style=""` em cada elemento  
- Classes Tailwind (extraia os valores reais, não apenas os nomes)
- CSS variables em `:root {}`
- `@property` declarations (para animações avançadas como border-spin)
- Arquivos externos linkados via `<link>`

Monte internamente estas listas:
1. **Cores** — todo hex, rgba, hsl, gradiente encontrado
2. **Tipografia** — todas as font-family, tamanhos, pesos, line-heights
3. **Animações** — todo `@keyframes`, `animation`, `transition` com valores exatos
4. **Componentes JS** — cursor custom, carousel, tabs, parallax, Three.js, GSAP, stack cards
5. **Efeitos especiais** — glass panels, glow, blobs, noise overlay, gradient-blur, dot-grid, border-spin
6. **Estrutura da Hero** — layout exato, colunas, elementos flutuantes, badges, botões

**Após a leitura, confirme ao usuário:**
"Li o HTML completo. Encontrei: [X cores] / [X fontes] / [lista de animações] / [lista de componentes JS] / [descrição da Hero em 2 linhas]. Posso prosseguir?"

**Espere confirmação antes de escrever qualquer arquivo.**

---

## FASE 2 — ESTRUTURA DO design-system.html

O design system usa a identidade visual do projeto original. Não crie um layout genérico neutro.

### `<head>` — transplante exato
Copie todos os assets do `<head>` original:
- Fontes (Google Fonts, CDN)
- CSS externos (arquivos `assets/css2_*.css`)
- Scripts de runtime (Tailwind, Lucide, Iconify, GSAP, Three.js, etc.)
- Todo o bloco `<style>` original — palavra por palavra, sem resumir

Acrescente ao `<style>` apenas as classes estruturais do design system:
```css
/* DS-specific — não alterar o visual do projeto */
.ds-nav { position: sticky; top: 0; z-index: 100; /* estilizado com a identidade do projeto */ }
.ds-section { padding: 6rem 0; }
.ds-type-row { display: flex; align-items: baseline; gap: 2rem; padding: 1.5rem 0; border-bottom: 1px solid [cor de borda do projeto]; }
.ds-type-name { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: [cor muted do projeto]; width: 180px; flex-shrink: 0; }
.ds-type-spec { font-size: 0.75rem; color: [cor muted do projeto]; text-align: right; flex-shrink: 0; font-family: monospace; }
.ds-swatch { width: 100%; height: 80px; border-radius: [radius do projeto]; }
```

### Navegação do design system
Use a navbar original do projeto como base.
Mude apenas os links para apontar para as seções do design system:
`#hero` `#typography` `#colors` `#components` `#layout` `#motion` `#icons`
Mantenha todos os efeitos visuais da navbar original (glass, blur, border-gradient, etc.).

---

## FASE 3 — SEÇÃO HERO (70% do trabalho — máxima fidelidade)

**Esta é a seção mais importante. Trate com prioridade absoluta.**

### O que fazer
Reconstrua a Hero do zero com texto adaptado para o design system.
Não é cópia — é reinterpretação com a mesma linguagem visual.

Exemplos de adaptação de texto:
- "Web3 Finance Mastery Lab" → "Design System Pattern Library"  
- "42 Projects Shipped" → "14 Components" / "05 Color Tokens"
- "Start free trial" → "Explore Components" / "View Tokens"
- Badge "UI/UX · Interaction" → "v1.0 · 2024"

### O que preservar intacto (sem modificar)
- Layout exato: grid, colunas, proporções (ex: `lg:col-span-7` + `lg:col-span-5`)
- Todos os elementos flutuantes e decorativos (floating cards, badges, tickets, portrait cards)
- Imagens originais com os mesmos caminhos `src="assets/..."`
- Efeitos de fundo (parallax, canvas Three.js, blobs, noise overlay, UnicornStudio)
- Animações de entrada com delays exatos (`fadeSlideIn`, `columnReveal`, `text-reveal-content`)
- Cursor customizado — transplante o JS completo linha por linha
- Stats dinâmicos adaptados para métricas do design system
- Todos os hover states e transições

### Elementos flutuantes do hero — regra especial
Cards flutuantes, tickets, portrait cards, badges sobrepostos:
→ Adapte o conteúdo para refletir o design system (tokens de cor, componentes, tipografia)
→ Mantenha rotação, posição, z-index, animações exatos

---

## FASE 4 — TIPOGRAFIA

Use sempre o formato de tabela/grid de 3 colunas:
- Coluna esquerda: nome do estilo (mono, muted) — ex: "Heading 1", "Body Large", "Micro"
- Coluna central: exemplo visual REAL com as classes originais exatas
- Coluna direita: spec técnica — ex: "96px / 0.85 · Manrope 500 · tracking-tighter"

Documente TODOS os estilos encontrados — mínimo 8, sem limite máximo.
Inclua: gradient text, mono labels, micro text, stat values, italic quotes — tudo.

Use o texto original da página como exemplo (não invente texto genérico).

---

## FASE 5 — CORES & SUPERFÍCIES

Para cada cor/superfície, mostre:
- Swatch visual real (div com a cor/gradiente/glass exato)
- Nome semântico: "Page Background", "Glass Panel", "Primary Blue", "Accent Red"
- Valor técnico exato: `#050a14`, `rgba(255,255,255,0.03) + blur(16px)`, `#007bff → #00bfff`

Categorias obrigatórias:
- Backgrounds e superfícies
- Cores primárias e de acento
- Cores de texto (com opacidades: white/100, white/70, white/40)
- Bordas e divisores
- Gradientes usados
- Efeitos especiais (glass, glow, blob colors)

**Os próprios swatches devem usar `.glass-panel`, `.glow-card` ou o estilo de container do projeto.**

---

## FASE 6 — COMPONENTES UI

Para cada componente, mostre o preview FUNCIONANDO — não uma descrição.
Use o HTML e CSS exatos do componente original.

Lista mínima a documentar:
- Todos os botões com seus estados (hover, active) — incluindo os complexos com glow, spin border, conic-gradient
- Cards (com hover states funcionais: 3D transform, glow, scale)
- Navbar com blur e border-gradient
- Badges, pills, tags com animações
- Formulários e inputs com estados focus
- Ícones (Lucide + Iconify) com tamanhos e cores
- Componentes especiais do projeto (stack carousel, accordion, tabs interativas)

**Adapte o conteúdo mas preserve o HTML/CSS/JS exatos de cada componente.**

---

## FASE 7 — LAYOUT & GRID

Mostre os padrões de grid usados na página com wireframes visuais:
- Container principal (max-width, padding)
- Grids principais (proporções exatas: `flex-1` + `flex-[1.6]`, `col-span-7` + `col-span-5`)
- Espaçamentos recorrentes
- Breakpoints e comportamento responsivo

---

## FASE 8 — MOTION & INTERAÇÃO

Documente e demonstre TODAS as animações encontradas:

**Para CSS animations:** mostre cards ao vivo com a animação rodando
```html
<div class="animate-glow">Glow Pulse — 2s ease-in-out infinite</div>
```

**Para JS complexo (cursor snake, parallax, Three.js, GSAP):**
Transplante o script COMPLETO. Não resuma. Não descreva. Copie.
Ajuste apenas o que for necessário para funcionar no contexto do design system
(ex: canvas z-index para ficar atrás do conteúdo).

Inclua um bloco `<pre>` com o código das animações CSS para referência.

---

## FASE 9 — ÍCONES

- Sistema(s) de ícones identificados (Lucide, Iconify/Solar, Simple Icons, SVG inline)
- Variantes de tamanho com preview (12px, 16px, 20px, 24px)
- Variantes de cor (white, accent, muted) com preview
- Os ícones mais usados no projeto com nome

---

## FASE 10 — STACK.md

Após salvar o design-system.html, crie um `STACK.md` na mesma pasta:
Lista de todas as tecnologias encontradas, uma por linha:
- **Tailwind CSS** — utility-first CSS usado em todo layout e estilização
- **Lucide** — ícones stroke usados em botões e cards

---

## QUALITY BAR — verificação antes de salvar

- [ ] Hero reconstruída com fidelidade total — layout, efeitos, animações, textos adaptados
- [ ] CSS original transplantado inteiro — sem resumir nenhuma linha
- [ ] JS de cursor/parallax/carousel copiado palavra por palavra
- [ ] Componentes mostram preview funcionando, não descrição
- [ ] Tipografia em tabela 3 colunas com specs reais
- [ ] Swatches de cor usam os valores exatos (hex, rgba, gradiente)
- [ ] Navegação do design system usa a identidade visual do projeto
- [ ] Comentários HTML documentam padrão de uso de cada seção
- [ ] Arquivo menor e mais limpo que o INPUT (sem scripts de firewall, sem scroll-fix styles)

---

## Ao finalizar

Confirme:
✅ Seções documentadas: [lista]
✅ Componentes com preview: [quantidade]
✅ Scripts JS transplantados: [lista]
⚠️ Limitações: [o que não foi possível capturar e por quê]

Depois pergunte: "Quer que eu crie um Knowledge Item com os padrões deste projeto?"
