# Resultados finais de testes

Revisão de publicação de 30/09/2026: 25 verificações aprovadas em Chromium e WebKit.

Os quatro cenários suplementares de Firefox não puderam executar: o navegador local retornou `spawn UNKNOWN` ao iniciar, inclusive após reinstalação oficial, antes de abrir a página. Essa limitação não foi contabilizada como aprovação. `npm run test:firefox` permite repetir em outro ambiente.

Build: aprovado. Astro/TypeScript: 0 erros, 0 avisos, 0 hints.

## Métricas locais

Servidor de build local, Chromium, sem simulação de rede móvel. LCP representa a medição de laboratório desta execução; não é uma garantia de produção. CLS é a soma das mudanças observadas sem interação recente durante o percurso da página.

| Largura | CLS | LCP local |
| --- | --- | --- |
| 360 px | 0.0077 | 0.084 s |
| 390 px | 0.0066 | 0.072 s |
| 430 px | 0.0057 | 0.072 s |
| 768 px | 0.0037 | 1.016 s |
| 1024 px | 0.0069 | 1.808 s |
| 1440 px | 0.0060 | 1.384 s |
| 1920 px | 0.0056 | 0.800 s |

## Cobertura

- Sete larguras: 360, 390, 430, 768, 1024, 1440 e 1920 px.
- Sem erros JavaScript de página/console, imagens quebradas, requisições locais 4xx ou overflow horizontal no percurso testado.
- Menu mobile, Escape, retorno de foco, links internos, detalhes expansíveis e navegação por teclado.
- CTAs de WhatsApp com destino original e mensagens por modalidade; clique validado sem envio de mensagem.
- Sete PDFs acessíveis e seis rotas antigas encaminhadas.
- HTML inicial, title, description, canonical, Open Graph e JSON-LD LocalBusiness.
- Sistema com movimento reduzido e alteração da preferência durante o uso; conteúdo disponível sem JavaScript.
- Galeria responde ao scroll; controle manual restaura conteúdo estático.
- Vídeo não solicitado antes do clique, reprodução real iniciada, duração 18s e pausa ao fechar.
- Fotos, galeria e cenas inspecionadas visualmente nas capturas.
- Texto principal responde à fonte raiz ampliada a 200%, sem overflow no cenário testado.

## Acessibilidade automática

| Largura | Violações axe WCAG A/AA |
| --- | --- |
| 360 px | 0 |
| 1440 px | 0 |

## Tamanho dos assets

JavaScript sem compressão e gzip calculado localmente (a hospedagem precisa servir compressão para obter o valor gzip):

- `index.astro_astro_type_script_index_0_lang.B2Vy4ZFo.js`: 4.0 KiB; gzip 1.7 KiB.
- `scroll.DO3lqaaM.js`: 133.0 KiB; gzip 48.9 KiB.

- Hero WebP: 21,5 KB (640px), 54,8 KB (1280px), 76,1 KB (1672px).
- Filme: 1.481.408 bytes, 18s, 1280×720, 24fps, H.264, yuv420p, sem áudio; carregado somente por ação.
- A fonte é local; não há WebGL, analytics, vídeo de fundo automático nem bibliotecas de interface React.

O relatório bruto atualizado é `docs/qa/results.json`; screenshots e dados por viewport estão na mesma pasta. As checagens atuais cobrem Chromium e WebKit em larguras simuladas, incluindo 320px e paisagem 844×390. Safari/iOS físico e métricas reais dos visitantes não foram medidos. A tabela de métricas acima registra o laboratório da primeira entrega; os JSONs por largura contêm os valores da revisão atual.

## Revisão visual e de produção

- Logo enviada pelo usuário preservada byte a byte e apresentada nas cores originais, sem filtro de recoloração.
- Marca e metadados sociais conferidos, página 404 com status correto e sem indexação.
- Perguntas frequentes operáveis por teclado; menu testado em retrato e paisagem.
- Texto ampliado a 200% sem rolagem horizontal após correção da quebra das legendas dos números.
- Preservados PDFs e destinos comerciais. Redirecionamentos permanentes preparados em `vercel.json` para a hospedagem.
- Build e Astro/TypeScript aprovados; auditoria npm sem vulnerabilidades conhecidas na revisão.
