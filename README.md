# Acquagyn — landing page cinematográfica

Landing page em Astro, com publicação pela integração GitHub → Vercel. Conteúdo institucional e fotos recuperados da Acquagyn; logo oficial fornecida pelo responsável pela escola.

## Executar

Requer Node.js 22.x (22.12 ou superior) e npm.

```sh
npm ci
npm run dev
```

Prévia de desenvolvimento: http://127.0.0.1:4321/ . O Astro 7 mantém o servidor em segundo plano; `npx astro dev stop` encerra esse servidor.

```sh
npm run check
npm run build
npm run preview
```

A prévia da versão compilada fica em http://127.0.0.1:4322/ . Os arquivos publicáveis ficam em `dist/`.

```sh
npx playwright install chromium webkit firefox
npm test
```

Os testes iniciam a prévia compilada automaticamente. Rode o build antes dos testes quando alterar o código. Resultados e capturas ficam em `docs/qa/`.

`npm test` executa Chromium e WebKit. `npm run test:firefox` executa a verificação adicional em Firefox; neste computador, o executável do Firefox falhou ao iniciar mesmo após reinstalação oficial, antes de abrir a página. Essa limitação está registrada em `docs/TEST_RESULTS.md`.

## Organização

- `src/sections/`: hero, história, modalidades, metodologia, diferenciais, estrutura, confiança, dúvidas e contato.
- `src/components/`: navegação, footer, CTAs, imagens responsivas, player e ondas.
- `src/data/business.ts`: contatos, navegação e geração das mensagens de WhatsApp.
- `src/data/content.ts`: modalidades, níveis e estrutura para depoimentos reais.
- `src/animations/`: configuração, GSAP/ScrollTrigger, Lenis e cenas adicionais.
- `src/scripts/`: menu, controle de movimento e carregamento do vídeo sob demanda.
- `public/images/`: fotografias otimizadas, mascotes, marca e textura conceitual.
- `public/videos/`: filme de 18 segundos montado com fotos.
- `public/boletins/`: sete PDFs do site original, mantidos nos mesmos caminhos.
- `assets/original/`: materiais originais preservados, inclusive os que não foram selecionados.
- `scripts/optimize-images.mjs`: geração reproduzível das imagens, com `npm run images`.
- `docs/`: auditoria, inventário, decisões, links e evidências de testes.

## Conteúdo que ainda precisa ser fornecido

1. O repositório anterior descreve oito etapas do bebê ao adolescente, que são as etapas publicadas. A menção anterior a nove níveis, sem detalhamento do nono, fica registrada apenas na auditoria. Uma nova etapa pode ser adicionada após confirmação da escola.
2. Fotos reais de natação infantil e de adulto em aula, preferencialmente em alta resolução. Atualmente essas cenas usam materiais e piscina da escola, com legendas fiéis.
3. Depoimentos reais, com fonte e autorização de uso. O array `testimonials` está vazio; nenhum relato foi inventado.
4. Revisão pedagógica dos PDFs: o site anterior associava `Adulto.pdf` a dois níveis diferentes. O arquivo foi mantido como recurso independente.
5. Horários dos demais dias, grade de turmas e endereço completo da parceria SESI, se desejado. Nada foi inferido.

O vídeo usa fotos com movimento de câmera e dissolvências; não é filmagem da unidade. Não carrega antes de uma ação do visitante.

## Publicação e Google

Repositório: https://github.com/zKaminise/acquagyn-teste . A branch `main` aciona a integração existente da Vercel. `vercel.json` fixa Astro, `npm ci`, `npm run build` e a saída `dist`, além dos redirecionamentos permanentes das seis rotas antigas. Somente `dist/` é servido; originais e documentos internos não entram no site.

O domínio principal confirmado pelo usuário é `https://www.acquagyn.com.br/`. A página inclui título, descrição, canonical, dados LocalBusiness, imagem social própria, `robots.txt` e `sitemap.xml`. O conteúdo está no HTML inicial. Pré-visualizações da Vercel e a página 404 recebem `noindex`.

Para o Google Search Console, verificar a propriedade do domínio e enviar `https://www.acquagyn.com.br/sitemap.xml`. Se a verificação for por meta tag, configurar o token fornecido pelo Google em `PUBLIC_GOOGLE_SITE_VERIFICATION` e recompilar. Não há token inventado nem garantia de prazo de indexação. Não há formulário, CRM, analytics ou cookies de marketing na implementação.

## Trocar imagens e vídeo

- Preserve a logo oficial em `assets/original/logo-official.png`; execute `npm run images` e `node scripts/brand-assets.mjs` para regenerar suas aplicações.
- Substitua as fotos de origem e gere as versões WebP com `npm run images`. Atualize legendas e descrições se a cena mudar.
- O player está em `src/components/FilmPlayer.astro`; o vídeo fica em `public/videos/acquagyn-film.mp4`. Ao trocar uma montagem por filmagem real, atualize também a capa, a descrição e a indicação de áudio; inclua legendas se houver fala. Prefira um nome novo para evitar cache antigo e ajuste o link alternativo do player.
- Rode `npm run check`, `npm run build` e `npm test` antes de publicar alterações.

## Referências

[Site original](https://www.acquagyn.com.br/) · [Astro](https://docs.astro.build/) · [GSAP matchMedia](https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/) · [Lenis](https://github.com/darkroomengineering/lenis)

Detalhes em `docs/AUDIT.md`, `docs/LINKS.md`, `IMAGE_ASSETS.md` e `docs/DELIVERY.md`.
