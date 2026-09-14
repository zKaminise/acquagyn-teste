# Auditoria pública Acquagyn — 13/09/2026

Escopo: consulta somente leitura do HTML, JavaScript e arquivos públicos de https://www.acquagyn.com.br/. Os dados abaixo estão confirmados como publicados pela escola; isso não equivale a confirmação operacional externa. Nenhum arquivo do projeto foi alterado.

## Fontes principais

- Home e metadados: https://www.acquagyn.com.br/
- Bundle que contém todas as páginas e seus dados: https://www.acquagyn.com.br/assets/index-DQ581eC-.js
- Estilos: https://www.acquagyn.com.br/assets/index-DBTIDQvc.css
- Robots: https://www.acquagyn.com.br/robots.txt
- Cópias preservadas em `original-site/index.html`, `original-site/index-DQ581eC-.js` e `original-site/index-DBTIDQvc.css`.

## Dados institucionais publicados

- Nome: Acquagyn. Atuação comunicada: ensino de natação e hidroginástica em Uberlândia, desde 1994.
- Endereço publicado: Rua Itabira 783, Daniel Fonseca, Uberlândia MG. Não há CEP no site.
- Telefone e WhatsApp: (34) 3217-1207.
- URL exata de todos os CTAs de WhatsApp: https://wa.me/553432171207 (sem mensagem inicial).
- E-mail: michelampk31@gmail.com; link mailto:michelampk31@gmail.com.
- Instagram: https://www.instagram.com/acquagyn.natacao?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw== ; perfil correspondente @acquagyn.natacao.
- Facebook: https://www.facebook.com/enacquagyn .
- Atendimento divulgado: de segunda a quinta, das 06h30 às 20h00. Não há informação explícita sobre sexta, sábado, domingo ou feriados. Não inferir que a grade de aulas ocupa integralmente esse intervalo.
- A escola divulga aula experimental gratuita, piscina aquecida, materiais para as aulas e avaliação para indicação do nível.
- O site exibe métricas promocionais de 30+ anos, 1000+ alunos e metodologia 100% original; não foram encontradas bases verificáveis para as duas últimas. Preferir o dado temporal desde 1994.

## Modalidades e parceria

Página de serviços: natação infantil dos 6 meses aos 13 anos (2 aulas por semana) e hidroginástica para adultos e melhor idade (até 4 aulas por semana). A própria página apresenta parceria com SESI Roosevelt: natação a partir de 2 anos, para crianças e adultos; hidroginástica a partir de 15 anos. Não publica endereço completo do SESI, tabela de horários ou valores. O botão SESI usa o mesmo WhatsApp.

Não inventar natação adulta como oferta regular da unidade principal: embora a mensagem institucional mencione todas as idades, o bloco de serviço adulto que está detalhado é o do SESI.

## Níveis e mascotes: divergência de contagem

Home, sobre, metodologia e metadados anunciam NOVE níveis. A página de níveis e a descrição da natação infantil dizem OITO; os três arrays de dados que geram a jornada, os cards e os boletins contêm oito entradas. Não há nono nível definido no bundle.

| Nível existente | Idade publicada | Mascote | Personagem |
|---|---|---|---|
| Baby 1 | 6–12 meses | Stellinha | estrela-do-mar, pelo asset |
| Baby 2 | 1–2 anos | Bibi | peixe |
| Baby 3 | 2–3 anos | Acquinha | gota d’água |
| Adaptação | 3–5 anos | Tuquinha | tartaruga |
| Iniciação | 5–7 anos | Delfi | golfinho |
| Aperfeiçoamento 1 | 7–9 anos | Luminha | polvo |
| Aperfeiçoamento 2 | 9–12 anos | Pitoco | caranguejo, pelo asset |
| Aperfeiçoamento 3 | 12+ anos | Hipinho | cavalo-marinho |

A progressão dos cards de /niveis vai de familiarização e autonomia à aprendizagem/refinamento de crawl, costas, peito e borboleta. Porém os boletins visuais em /metodologia descrevem competências bem mais avançadas e, às vezes, deslocadas: por exemplo Adaptação já pede crawl completo, peito, virada e 25 m; o card de Adaptação descreve flutuação, respiração, pernas e curtas distâncias. Aperfeiçoamento 2 apresenta competências que parecem de adulto iniciante. Não consolidar os boletins como especificação pedagógica validada.

Há outro vestígio de nomes antigos em um card de diferenciais: Acqua, Tuca, Luma e Bibi, enquanto os cards de mascotes usam Acquinha, Tuquinha e Luminha. Preservar a nomenclatura principal acima.

O arquivo anunciado como diagrama metodológico, https://www.acquagyn.com.br/assets/methodology-diagram-new-B02_Srjk.jpg, mostra os QUATRO estilos de nado, sem explicar um nono nível. Foi inspecionado visualmente e está preservado em `../assets/original/methodology-diagram-new-B02_Srjk.jpg`.

## PDFs públicos e associações

Todos os sete caminhos abaixo responderam HTTP 200 com application/pdf em consulta HEAD. O conteúdo interno dos PDFs não foi auditado.

- Baby 1 → https://www.acquagyn.com.br/boletins/BabySplash.pdf
- Baby 2 → https://www.acquagyn.com.br/boletins/Peixinhos.pdf
- Baby 3 → https://www.acquagyn.com.br/boletins/Ondas.pdf
- Adaptação → https://www.acquagyn.com.br/boletins/Mares.pdf
- Iniciação → https://www.acquagyn.com.br/boletins/Correnteza.pdf
- Aperfeiçoamento 1 → https://www.acquagyn.com.br/boletins/RitmoTecnica.pdf
- Aperfeiçoamento 2 E Aperfeiçoamento 3 → https://www.acquagyn.com.br/boletins/Adulto.pdf

A associação duplicada do PDF Adulto a dois níveis infantis/adolescentes é uma lacuna de conteúdo para revisão, não uma indicação para duplicar o arquivo.

## Depoimentos

Não há seção de depoimentos nem textos atribuídos a alunos/pais no bundle público; buscas por depoimento/testimonial retornam zero ocorrências. A busca web não revelou depoimento primário atribuível que pudesse ser transcrito com nome e fonte. Não criar falas, avaliações, estrelas, fotos de clientes ou contagem de reviews.

Diretórios de terceiros exibem números de avaliações, endereços antigos e horários divergentes; não constituem base segura para substituir os dados publicados no site. Um resultado sobre Acquagyn Piscinas se refere a outra empresa e foi descartado.

## Rotas e integrações

Rotas configuradas no React Router: /, /sobre, /metodologia, /niveis, /mascotes, /servicos, /contato e fallback *. Os links internos usam essas rotas.

Problema confirmado: todas as seis rotas internas nominais retornaram HTTP 404 em acesso direto. A home retorna 200. A hospedagem não está servindo o shell da SPA nessas URLs, portanto compartilhamento, recarregamento e navegação por acesso direto ficam comprometidos.

Integrações existentes identificadas: links WhatsApp, Instagram, Facebook, mailto; iframe Google Maps; fontes do Google; downloads de PDF. Não foi identificado formulário de captação funcional ou integração com CRM, Supabase, Firebase, EmailJS ou Formspree. Não foram encontrados marcadores de GA/GTM, Meta Pixel ou Clarity. Isso descreve os arquivos servidos inspecionados, não exclui configurações externas de infraestrutura.

O iframe usa este URL literal:
https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.123456789!2d-48.2767!3d-18.9234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRua%20Itabira%2C%20783%20-%20Daniel%20Fonseca%2C%20Uberl%C3%A2ndia%20-%20MG!5e0!3m2!1spt-BR!2sbr!4v1234567890

Os valores 0x0:0x0 e sequências 123456789 sugerem parâmetros de exemplo. Não foi validada a renderização do mapa; recomenda-se na reformulação usar busca/endereço ou embed válido sem inventar place ID nem coordenadas.

## SEO encontrado

- HTML é um shell com root vazio e React carregado no navegador; o HTML inicial não contém os textos de negócio.
- lang está como en, embora todo o conteúdo seja português.
- Title institucional existe, descrição, keywords, author, tags OG e Twitter também.
- OG/Twitter usam imagem genérica https://lovable.dev/opengraph-image-p98pqg.png .
- Não há canonical, og:url ou JSON-LD no HTML inspecionado; não foi detectada alteração de document.title no bundle.
- robots.txt retorna 200 e permite rastreamento para todos os agentes listados, sem indicar sitemap.
- sitemap.xml retorna 404.
- O site tem favicon /favicon.png e fontes Inter via Google Fonts.

## Ativos visuais disponíveis no bundle

Fotos: /assets/hero-pool-H5NgUvEU.jpg, /assets/facility-pool-main-new2-Dyg5BGYK.jpg, /assets/facility-reception-new2-CBvvw2Xy.jpg, /assets/facility-hidro-class-DPGGbFoX.jpg, /assets/facility-materials-new-DaGtHzLM.jpg, /assets/facility-accessibility-UUfbC4lB.jpg, /assets/facility-pool-kids-EmgRyHts.jpg.

Mascotes: /assets/mascot-estrelinha-G_YDCWGu.jpg, /assets/mascot-bibi-C6Ry7bY5.jpg, /assets/mascot-acqua-DESH616f.jpg, /assets/mascot-tuca-DpcUz3iu.jpg, /assets/mascot-delfim-YkFetmXC.jpg, /assets/mascot-luma-CO71wKLj.jpg, /assets/mascot-caranguejo-CrP30Ype.jpg, /assets/mascot-cavalo-D1UbLkNO.jpg.

## Lacunas para não preencher por suposição

Definição do nono nível; harmonização de competências e PDFs; depoimentos reais autorizados; horários por turma/dia e funcionamento de sexta a domingo; valores; CEP confirmado; endereço exato do SESI; evidência para 1000+ alunos; credenciais nominais da equipe; temperatura e profundidade das piscinas; place ID válido do Google Maps.
