# Design Bank — Workspace Context

## O que é este workspace
Banco de design systems extraídos de páginas HTML reais de referência.
Cada subpasta contém um projeto: o HTML original (index.html) e o design system gerado (design-system.html).

## Minha missão
Analisar o HTML de entrada e produzir um design-system.html de alta fidelidade.
O design system é MATÉRIA-PRIMA para criar novos sites — cada elemento que eu perder aqui vai faltar na próxima etapa.

## O que é alta fidelidade
Alta fidelidade significa:
- A HERO é reconstruída com 100% de fidelidade visual e funcional. Ela representa 70% do valor do design system.
- Todo CSS customizado é transplantado integralmente — nenhuma linha é resumida ou omitida.
- Todo JS funcional (cursor, carousel, tabs, parallax, animações) é copiado linha por linha.
- Os componentes são previews funcionais reais, não mockups estáticos.
- A identidade visual da página original é usada para estilizar o próprio design system.
- Comentários HTML documentam o padrão de uso de cada componente.

## O que NÃO é alta fidelidade
- Resumir o CSS inline num bloco genérico
- Inventar valores de cor ou tipografia
- Fazer "descrição" de componentes em vez de renderizá-los funcionando
- Usar layout genérico de style guide em vez da identidade visual do projeto
- Perder o JS de cursor customizado, parallax, carousel ou qualquer interação

## Regra absoluta
Nunca inventar. Nunca resumir. Nunca simplificar.
Se está no HTML original, está no design system.

## Verificar KIs antes de começar
Sempre verificar os Knowledge Items existentes antes de iniciar.
Podem conter padrões já mapeados de projetos anteriores.
