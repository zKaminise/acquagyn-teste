# Acquagyn — landing page cinematográfica

Nova implementação local em Astro, criada do zero a pedido do usuário. Conteúdo institucional e fotos recuperados do site público da Acquagyn. Nenhum deploy foi feito.

## Executar

Requer Node.js 22.12 ou superior e npm.

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
npx playwright install chromium
npm test
```

Os testes iniciam a prévia compilada automaticamente. Rode o build antes dos testes quando alterar o código. Resultados e capturas ficam em `docs/qa/`.

## Organização

- `src/sections/`: hero, história, modalidades, metodologia, diferenciais, estrutura, confiança e contato.
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

1. Definição institucional do nono nível. O site anterior anuncia nove, mas descreve oito. A LP mostra essa pendência.
2. Fotos reais de natação infantil e de adulto em aula, preferencialmente em alta resolução. Atualmente essas cenas usam materiais e piscina da escola, com legendas fiéis.
3. Depoimentos reais, com fonte e autorização de uso. O array `testimonials` está vazio; nenhum relato foi inventado.
4. Revisão pedagógica dos PDFs: o site anterior associava `Adulto.pdf` a dois níveis diferentes. O arquivo foi mantido como recurso independente.
5. Horários dos demais dias, grade de turmas e endereço completo da parceria SESI, se desejado. Nada foi inferido.

O vídeo usa fotos com movimento de câmera e dissolvências; não é filmagem da unidade. Não carrega antes de uma ação do visitante.

## Publicação futura

Depende de autorização do usuário. Publicar somente `dist/`, nunca a raiz com os originais e a auditoria. As antigas URLs têm páginas de encaminhamento estáticas; `public/_redirects` fornece regras 301 para hospedagens compatíveis. Configurar regras equivalentes na hospedagem escolhida antes da migração.

O domínio canônico já está definido como `https://www.acquagyn.com.br/`. Conferir domínio, HTTPS, encaminhamentos e disponibilidade dos contatos no ambiente publicado. Não há formulário, CRM, analytics ou cookies de marketing na implementação.

## Referências

[Site original](https://www.acquagyn.com.br/) · [Astro](https://docs.astro.build/) · [GSAP matchMedia](https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/) · [Lenis](https://github.com/darkroomengineering/lenis)

Detalhes em `docs/AUDIT.md`, `docs/LINKS.md`, `IMAGE_ASSETS.md` e `docs/DELIVERY.md`.
