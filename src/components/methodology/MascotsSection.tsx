import { Card } from "@/components/ui/card";
import mascotAcqua from "@/assets/mascot-acqua.jpg";
import mascotTuca from "@/assets/mascot-tuca.jpg";
import mascotLuma from "@/assets/mascot-luma.jpg";
import mascotBibi from "@/assets/mascot-bibi.jpg";

const MascotsSection = () => {
  const mascots = [
    {
      name: "Acqua",
      type: "O Golfinho",
      image: mascotAcqua,
      description: "Líder carismático e confiante. Acqua ensina coragem e confiança na água. Ele guia os alunos nas primeiras experiências aquáticas.",
    },
    {
      name: "Tuca",
      type: "A Tartaruga",
      image: mascotTuca,
      description: "Paciente e segura. Tuca é especialista em segurança aquática. Com calma, ensina os alunos a respeitar a água e nadar com segurança.",
    },
    {
      name: "Luma",
      type: "A Estrela-do-Mar",
      image: mascotLuma,
      description: "Criativa e lúdica. Luma traz diversão para as aulas. Ela incentiva a respiração correta e transforma exercícios em jogos divertidos.",
    },
    {
      name: "Bibi",
      type: "O Peixe-Borboleta",
      image: mascotBibi,
      description: "Técnico e detalhista. Bibi é mestre em postura e movimentos precisos. Ensina a técnica perfeita dos estilos de natação com atenção aos detalhes.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Conheça Nossos Mascotes
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Personagens amigos que tornam o aprendizado lúdico e memorável em cada nível
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {mascots.map((mascot, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-hover transition-smooth hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 rounded-full overflow-hidden bg-muted/30 p-2">
                <img 
                  src={mascot.image} 
                  alt={mascot.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">{mascot.name}</h3>
              <p className="text-sm text-primary font-medium mb-3">{mascot.type}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {mascot.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MascotsSection;
