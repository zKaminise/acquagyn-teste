export const business = {
  name: 'Acquagyn',
  since: 1994,
  phone: '(34) 3217-1207',
  phoneHref: 'tel:+553432171207',
  whatsapp: 'https://wa.me/553432171207',
  address: 'Rua Itabira, 783 · Daniel Fonseca',
  city: 'Uberlândia · Minas Gerais',
  instagram: 'https://www.instagram.com/acquagyn.natacao/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Acquagyn+Rua+Itabira+783+Uberlandia',
  hours: 'Segunda a quinta · 06h30 às 20h',
};

export const bookingUrl = (modality?: string) =>
  `${business.whatsapp}?text=${encodeURIComponent(modality ? `Olá! Gostaria de agendar uma aula experimental de ${modality} na Acquagyn.` : 'Olá! Gostaria de agendar uma aula experimental na Acquagyn.')}`;

export const navigation = [
  ['Acquagyn', '#acquagyn'],
  ['Modalidades', '#modalidades'],
  ['Metodologia', '#metodologia'],
  ['Estrutura', '#estrutura'],
  ['Contato', '#contato'],
];
