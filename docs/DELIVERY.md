# Entrega — nova LP Acquagyn

Registro da entrega inicial de 13/09/2026, anterior à publicação. A revisão autorizada em 30/09/2026 e os detalhes atuais de publicação estão em `RELEASE-2026-09-30.md` e no README. As observações abaixo descrevem a primeira versão.

## Resultado implementado

- Página única com nove blocos narrativos e navegação direta por âncoras.
- Hero fullscreen com água conceitual, zoom controlado pelo scroll, transição de headlines e CTAs permanentes.
- História com revelação progressiva das palavras, contagem de anos e linha temporal.
- Cenas de natação infantil, adulto e hidroginástica, usando os materiais reais disponíveis.
- Jornada de níveis com linha progressiva, detalhes expansíveis, mascotes originais e boletins.
- Diferenciais com fotografias alternadas e palavras em movimento.
- Galeria com imagem que se expande, cena fixa no desktop e passagem da piscina à aula de hidroginástica.
- Filme original de 18 segundos, com fotos reais, movimento de câmera e dissolvências; 1,48 MB, 720p, H.264, sem áudio.
- Player acessível, carregamento do MP4 somente após clique, fechamento com Escape e restauração de foco.
- Menu mobile com diálogo nativo; WhatsApp flutuante discreto; opção de reduzir movimentos.
- Contatos, Instagram, Facebook, e-mail, parceria SESI e sete PDFs preservados.
- Estrutura de depoimentos preparada, sem depoimentos fictícios.
- HTML completo no primeiro carregamento, metadados locais, canonical, Open Graph, Twitter, LocalBusiness, sitemap, robots e favicon.
- URLs antigas encaminhadas para a seção equivalente na nova página.

## Decisões técnicas

**Astro estático:** escolhido para uma LP nova, após o usuário confirmar que queria começar do zero. O site anterior usa React/Vite, mas seu repositório não foi importado. O conteúdo já chega em HTML, sem depender de renderização React no navegador.

**GSAP + ScrollTrigger:** animações sincronizadas com a rolagem, organizadas em configuração e módulos de narrativa. O conteúdo continua utilizável quando JavaScript está desabilitado ou as bibliotecas de animação falham.

**Lenis somente no desktop:** celular usa rolagem natural e animações mais curtas. `prefers-reduced-motion`, economia de dados e o controle manual desativam as animações. Sem WebGL ou sequência de centenas de frames.

**Imagens:** cinco fotografias da unidade, marca e oito mascotes recuperados do site atual. Duas imagens de piscinas cuja autenticidade não foi estabelecida foram excluídas da página. A única imagem gerada é uma textura de água, sem pessoas ou instalações.

**Vídeo:** montagem a partir de fotos, explicitamente identificada como passeio visual. Sem filmagem fictícia. Carregamento e reprodução iniciados por ação do visitante.

**Conversão:** WhatsApp com o mesmo número original, mensagem editável e identificação da modalidade. Nenhuma mensagem foi enviada nos testes. Não há formulário ou CRM inventado.

**Fontes:** Manrope variável hospedada localmente e serifada do sistema nos destaques editoriais; sem requisição de fonte ao Google durante o uso.

## Dependências adicionadas

Produção: `astro`, `gsap`, `lenis`, `@fontsource-variable/manrope`.

Desenvolvimento: `@astrojs/check`, `@axe-core/playwright`, `@playwright/test`, `@types/node`, `prettier`, `prettier-plugin-astro`, `sharp`, `typescript`. Versões fixadas pelo `package-lock.json`.

## Arquivos criados e modificados

A pasta estava vazia. Nenhum arquivo de código preexistente foi sobrescrito, renomeado ou excluído. Todos os arquivos da nova LP foram criados neste trabalho.

Principais entradas:

- `src/pages/index.astro`, `[legacy].astro`, `404.astro`
- `src/layouts/Layout.astro`
- `src/sections/{Hero,Story,Modalities,Methodology,Values,Facilities,Trust,Contact}.astro`
- `src/components/{Header,Footer,BookingLink,Photo,Arrow,WaterLines,FilmPlayer}.astro`
- `src/data/{business,content}.ts`
- `src/animations/{config,scroll,narrative}.ts`
- `src/scripts/{main,film}.ts`
- `src/styles/global.css`
- `scripts/{optimize-images,serve-build}.mjs`
- `tests/landing.spec.ts`, `playwright.config.ts`
- `astro.config.mjs`, `tsconfig.json`, `package.json`, `package-lock.json`, `.prettierrc.json`, `.gitignore`
- `public/images/`, `public/videos/`, `public/boletins/`, `public/{favicon.png,robots.txt,sitemap.xml,_redirects}`
- `README.md`, `IMAGE_ASSETS.md`, `docs/AUDIT.md`, `docs/LINKS.md`, inventários e evidências em `docs/qa/`.

Lista completa, incluindo assets e relatórios: `docs/FILES_CREATED.md`.

## Git e backup

O commit `3b20021` preserva o HTML, JavaScript e CSS públicos usados como referência antes da implementação. Tag: `baseline-public-site-2026-09-13`. Esse material não é o repositório-fonte original, que não foi fornecido.

A implementação final está na branch `feat/cinematic-landing-page`. O histórico permite comparar e recuperar o ponto de partida. O site publicado não foi alterado.

## Verificação

- Build estático executado com sucesso.
- Verificação Astro/TypeScript: zero erros, avisos ou hints.
- 17 testes Playwright em Chromium cobrindo os sete tamanhos solicitados, imagens, console, CTAs, PDFs, SEO, menu, teclado, modo sem JavaScript, movimento reduzido, galeria e vídeo.
- Checagem axe WCAG 2 A/AA e 2.1 AA sem violações automáticas nos tamanhos avaliados (360 e 1440).
- Vídeo decodificado integralmente sem erro; duração, dimensões e codec conferidos.
- Capturas do hero em 360, 390, 430, 768, 1024, 1440 e 1920 px; página completa em 390 e 1440; cenas, galeria e player.

Resultados finais e métricas em `docs/qa/results.json` e `docs/TEST_RESULTS.md`. Métricas locais não são um Lighthouse de produção nem substituem medição em rede móvel real. Não foi feito teste em dispositivos iOS físicos ou Safari.

## Pendências reais de conteúdo

1. **Nono nível:** existe no briefing e na comunicação antiga, mas não foi localizado com nome, idade, mascote ou definição. Está sinalizado como pendente.
2. **Fotos de aulas infantil e adulto:** não existem fotos reais identificáveis desses públicos no material recuperado. As cenas atuais mostram materiais e piscina, com legendas corretas.
3. **Depoimentos:** aguardam relatos reais com fonte e aprovação; o componente não exibe informações inventadas.
4. **Boletins e disponibilidade:** confirmar a associação pedagógica de `Adulto.pdf`, horários dos demais dias, turmas e endereço da parceria SESI.

Briefs para fotografias reais e prompts da imagem conceitual estão em `IMAGE_ASSETS.md` e `docs/image-prompts/water-concept.md`. Nenhuma imagem adicional de IA é necessária para a versão atual.

## Publicação

Não realizada. Após autorização, publicar apenas `dist/` e validar HTTPS, domínio e regras 301 na hospedagem escolhida. Os links comerciais corretos não alteram automaticamente o site que já está em produção.
