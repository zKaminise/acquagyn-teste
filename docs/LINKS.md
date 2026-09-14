# Revisão dos destinos

Os destinos comerciais foram recuperados do HTML e do bundle público da escola. O teste do WhatsApp confirma o clique e a URL com interceptação da navegação: nenhuma mensagem foi enviada e nenhuma conversa foi iniciada em nome do usuário.

| Item | Destino na nova LP | Preservação / mudança |
| --- | --- | --- |
| Aula experimental / WhatsApp | `https://wa.me/553432171207?text=…` | Mesmo número original; acrescenta mensagem editável e modalidade quando aplicável. |
| Telefone | `tel:+553432171207` | Mesmo telefone original. |
| Instagram | `https://www.instagram.com/acquagyn.natacao/` | Mesmo perfil; parâmetros de rastreio retirados. |
| Facebook | `https://www.facebook.com/enacquagyn` | Mesmo destino original. |
| E-mail | `mailto:michelampk31@gmail.com` | Mesmo endereço original. |
| Localização | Google Maps com busca por Acquagyn, Rua Itabira 783, Uberlândia | Mesmo endereço. O iframe anterior tinha parâmetros aparentemente exemplificativos; a busca usa o endereço publicado, sem inventar coordenadas. |
| SESI Roosevelt | Mesmo WhatsApp original, mensagem sobre SESI | Não inventa endereço nem grade da parceria. |
| Vídeo novo | `/videos/acquagyn-film.mp4` | Arquivo local, carregado apenas ao abrir o player. |

## Páginas antigas

| Caminho antigo | Nova seção |
| --- | --- |
| `/sobre` | `/#acquagyn` |
| `/servicos` | `/#modalidades` |
| `/metodologia` | `/#metodologia` |
| `/niveis` | `/#metodologia` |
| `/mascotes` | `/#metodologia` |
| `/contato` | `/#contato` |

As seis URLs foram testadas contra o build. Mantêm HTML de encaminhamento como fallback; o servidor de produção deverá aplicar as regras 301 da sua plataforma. As rotas do site antigo retornavam 404 em acesso direto.

## PDFs preservados

Todos mantêm o prefixo `/boletins/`, respondem HTTP 200 localmente e foram copiados dos arquivos públicos originais:

- `BabySplash.pdf`
- `Peixinhos.pdf`
- `Ondas.pdf`
- `Mares.pdf`
- `Correnteza.pdf`
- `RitmoTecnica.pdf`
- `Adulto.pdf`

A associação duplicada do PDF adulto foi retirada. Seu link está disponível abaixo da jornada, para consulta independente. O conteúdo interno dos boletins não foi reescrito; recomenda-se revisão pedagógica da escola.

Disponibilidade operacional de telefone, rede social ou atendimento não pode ser garantida por um teste de URL. Os destinos correspondem aos dados publicados pela Acquagyn na auditoria.
