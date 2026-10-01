# Acervo da LP

As cinco fotos da unidade e os oito mascotes vêm do site original. A logo em uso foi enviada pelo usuário em 30/09/2026 e está preservada sem alteração em `assets/original/logo-official.png` e `public/images/logo.png`. Sua aplicação mantém as cores originais sobre fundo claro. O inventário das 19 imagens inicialmente encontradas está em `docs/IMAGE_INVENTORY.md` e `docs/image-inventory.json`.

**Classificação:** A = adequada para grande destaque; B = útil para seções, com limite de resolução; C = substituir ou não utilizar como evidência da unidade.

| Arquivo em `public/` | Uso | Proporção / resolução atual | Classe e natureza | Alt text / descrição |
| --- | --- | --- | --- | --- |
| `images/water-{640,1280,1672}.webp` | Hero, cena final e filme | 16:9; fonte 1672 × 941 | A complementar; textura gerada | Alt vazio: água decorativa, nenhuma instalação representada. |
| `images/pool-{640,960,1280}.webp` | Natação adulto, diferenciais, galeria, poster do filme | 4:3; fonte 1280 × 960 | B; foto da unidade | Piscina coberta da Acquagyn em Uberlândia. |
| `images/hidro-{640,960,1280}.webp` | Modalidade hidroginástica, transição da galeria e filme | 4:3; fonte 1280 × 960 | B; foto da unidade | Turma de hidroginástica em aula na piscina da Acquagyn. |
| `images/materials-{640,960,1280}.webp` | Natação infantil, técnica e filme | 4:3; fonte 1280 × 960 | B; foto da unidade | Materiais e equipamentos utilizados nas aulas da Acquagyn. |
| `images/reception-{640,960,1280}.webp` | Galeria e filme | 4:3; fonte 1280 × 960 | B; foto da unidade | Recepção da Acquagyn, com cadeiras e balcão. |
| `images/accessibility-{640,960,1280}.webp` | Segurança e galeria | 3:4; fonte 960 × 1280; sem ampliação artificial | B; foto da unidade | Escada com dois corrimãos de acesso à piscina. Não afirma acessibilidade universal. |
| `images/logo.png` | Navbar e footer | 528 × 263, transparente | B; marca original | Acquagyn. Versão branca obtida por filtro CSS. |
| `images/mascot-*.webp` | Jornada pedagógica | 128 × 128, derivados de 512 × 512 | B; mascotes do acervo | Stellinha, Bibi, Acquinha, Tuquinha, Delfi, Luminha, Pitoco, Hipinho. |
| `videos/acquagyn-film.mp4` | Player acionado pelo visitante | 1280 × 720; 18s; 24fps; 1,48 MB | Filme de fotos reais e água conceitual | Sem áudio; não apresentado como filmagem da escola. |

Somente o hero tem preload de imagem. Fotos secundárias usam lazy loading, dimensões reservadas e `srcset`. O MP4 não é solicitado antes do clique. O componente respeita a largura original da foto vertical e anuncia somente 640w e 960w no srcset. A cópia adicional 1280 do processo de otimização não é referenciada pela página. Não há ampliação artificial para fingir resolução.

## Imagens excluídas da página

- `hero-pool-H5NgUvEU.jpg`: instalação incompatível com o conjunto das fotos da unidade. Autenticidade não estabelecida.
- `facility-pool-kids-EmgRyHts.jpg`: imagem de piscina externa com aparência ilustrativa. Autenticidade não estabelecida.
- `methodology-diagram-new-B02_Srjk.jpg`: cartaz dos quatro estilos, sem definição do nono nível. Preservado, mas não reutilizado como foto de aluno.

## Novas fotos reais recomendadas

| Nome reservado (não referenciado pela LP) | Uso futuro | Entrega recomendada | Brief / prompt | Alt proposto |
| --- | --- | --- | --- | --- |
| `kids-swimming.webp` | Cena infantil | 2400 × 1800, 4:3 e corte vertical 3:4 | Fotografar uma aula real, instrutor próximo e interação segura, altura da borda, expressão natural e foco no aprendizado. Evitar poses publicitárias e não usar IA para simular alunos. | Criança acompanhada durante uma aula de natação na Acquagyn. |
| `adult-swimming.webp` | Cena adulto | 2400 × 1800 | Fotografar adulto em aula real, com orientação técnica. Confirmar unidade/local da atividade para identificar corretamente a foto. Não substituir por adulto gerado em piscina fictícia. | Aula de natação para adultos da Acquagyn, em local confirmado pela equipe. |
| `pool-real-highres.webp` | Galeria fullscreen | 3200 × 1800 ou maior | Fotografar a piscina real com lente que preserve proporções, composição ampla, iluminação equilibrada e água visível. | Piscina coberta da Acquagyn. |
| `class-real.mp4` | Substituição opcional do filme de fotos | 1080p, 24/30fps, clipes de 4–8s | Filmar detalhes da água, aula infantil, natação adulto e hidroginástica reais; movimentos lentos, sem zoom digital; manter identificação e autorizações da escola para as pessoas retratadas. | Descrição/transcrição conforme a filmagem final. |

## Geração complementar

Apenas uma imagem foi gerada: textura de água. Não há outros prompts de IA pendentes. Prompt integral e parâmetros em `docs/image-prompts/water-concept.md`. Para pessoas e instalações, os briefs acima são orientações de fotografia real.
