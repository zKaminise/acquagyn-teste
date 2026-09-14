export const modalities = [
  {
    id: 'infantil',
    name: 'Natação infantil',
    title: 'Segurança\ncomeça cedo.',
    description:
      'Os primeiros encontros com a água abrem espaço para novas descobertas. Da adaptação à autonomia, cada conquista tem seu tempo.',
    tags: ['Adaptação ao meio líquido', 'Segurança e confiança', 'Autonomia e desenvolvimento'],
    photo: 'materials',
    alt: 'Materiais e equipamentos utilizados nas aulas da Acquagyn',
    caption: 'MATERIAIS DAS NOSSAS AULAS',
    note: 'A partir de 6 meses · avaliação para indicação do nível',
    linkLabel: 'Uma nova descoberta começa aqui',
  },
  {
    id: 'adulto',
    name: 'Natação para adultos',
    title: 'Nunca é tarde\npara aprender.',
    description:
      'Para começar, retomar ou aperfeiçoar. Aprendizado, técnica e condicionamento em uma jornada que respeita sua evolução individual.',
    tags: ['Aprendizado e técnica', 'Condicionamento', 'Evolução individual'],
    photo: 'pool',
    alt: 'Vista da piscina coberta da unidade Acquagyn',
    caption: 'PISCINA DA UNIDADE ACQUAGYN',
    note: 'Consulte a oferta para adultos na parceria SESI Roosevelt.',
    linkLabel: 'Encontre seu ritmo',
  },
  {
    id: 'hidroginastica',
    name: 'Hidroginástica',
    title: 'Movimento com\nmenos impacto.',
    description:
      'A água convida o corpo a se movimentar. Uma atividade de baixo impacto para trabalhar mobilidade, fortalecimento e condicionamento.',
    tags: ['Mobilidade', 'Fortalecimento', 'Qualidade de vida'],
    photo: 'hidro',
    alt: 'Turma de hidroginástica em aula na piscina da Acquagyn',
    caption: 'UMA AULA REAL. MUITA ENERGIA.',
    note: 'Para adultos e melhor idade · consulte os horários',
    linkLabel: 'Mais movimento para os seus dias',
  },
];

export const levels = [
  {
    name: 'Baby 1',
    age: '6 a 12 meses',
    mascot: 'Stellinha',
    image: 'estrelinha',
    description: 'Primeiros contatos com a água e familiarização com o ambiente aquático.',
    pdf: 'BabySplash.pdf',
  },
  {
    name: 'Baby 2',
    age: '1 a 2 anos',
    mascot: 'Bibi',
    image: 'bibi',
    description: 'Novas descobertas na água e construção gradual de confiança.',
    pdf: 'Peixinhos.pdf',
  },
  {
    name: 'Baby 3',
    age: '2 a 3 anos',
    mascot: 'Acquinha',
    image: 'acqua',
    description: 'Uma etapa de adaptação e desenvolvimento da autonomia no meio líquido.',
    pdf: 'Ondas.pdf',
  },
  {
    name: 'Adaptação',
    age: '3 a 5 anos',
    mascot: 'Tuquinha',
    image: 'tuca',
    description:
      'Flutuação, respiração e deslocamentos. A base para se sentir mais seguro na água.',
    pdf: 'Mares.pdf',
  },
  {
    name: 'Iniciação',
    age: '5 a 7 anos',
    mascot: 'Delfi',
    image: 'delfim',
    description: 'Aprendizagem dos movimentos da natação com progressão individual.',
    pdf: 'Correnteza.pdf',
  },
  {
    name: 'Aperfeiçoamento 1',
    age: '7 a 9 anos',
    mascot: 'Luminha',
    image: 'luma',
    description: 'Refinamento dos movimentos e desenvolvimento da técnica.',
    pdf: 'RitmoTecnica.pdf',
  },
  {
    name: 'Aperfeiçoamento 2',
    age: '9 a 12 anos',
    mascot: 'Pitoco',
    image: 'caranguejo',
    description: 'Continuidade do desenvolvimento técnico e da evolução na natação.',
  },
  {
    name: 'Aperfeiçoamento 3',
    age: 'A partir de 12 anos',
    mascot: 'Hipinho',
    image: 'cavalo',
    description: 'Uma nova etapa de aperfeiçoamento dos estilos e dos movimentos na água.',
  },
  {
    name: '9º nível',
    age: 'Detalhes em atualização',
    description:
      'A definição deste nível está pendente de confirmação. Converse com a equipe para conhecer a jornada indicada para você.',
    pending: true,
  },
];

export const values = [
  {
    title: 'Segurança.',
    description:
      'A confiança se constrói desde os primeiros contatos com a água. Adaptação e segurança aquática fazem parte do aprendizado.',
    photo: 'accessibility',
    alt: 'Escada com corrimãos de acesso à piscina da Acquagyn',
  },
  {
    title: 'Progressão.',
    description:
      'Um caminho estruturado, com etapas e avaliação. Cada aluno avança a partir do seu próprio desenvolvimento.',
    photo: 'pool',
    alt: 'Piscina utilizada nas aulas da Acquagyn',
  },
  {
    title: 'Técnica.',
    description:
      'Aprender o movimento. Entender a respiração. Aperfeiçoar os estilos. Pequenas conquistas que se conectam a cada aula.',
    photo: 'materials',
    alt: 'Equipamentos de apoio às aulas de natação na Acquagyn',
  },
  {
    title: 'Motivação.',
    description:
      'Reconhecer cada conquista faz parte do percurso. Os mascotes acompanham as etapas e aproximam as crianças do aprendizado.',
    photo: 'hidro',
    alt: 'Alunos participando de uma aula de hidroginástica na Acquagyn',
  },
];

export interface Testimonial {
  quote: string;
  author: string;
  context: string;
  sourceUrl: string;
  approved: boolean;
}
// Inserir somente relatos reais, com fonte e autorização de uso.
export const testimonials: Testimonial[] = [];
