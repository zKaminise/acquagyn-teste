import { Card } from "@/components/ui/card";
import mascotAcqua from "@/assets/mascot-acqua.jpg";
import mascotTuca from "@/assets/mascot-tuca.jpg";
import mascotLuma from "@/assets/mascot-luma.jpg";
import mascotBibi from "@/assets/mascot-bibi.jpg";
import mascotDelfim from "@/assets/mascot-delfim.jpg";
import mascotEstrelinha from "@/assets/mascot-estrelinha.jpg";
import mascotCavalo from "@/assets/mascot-cavalo.jpg";
import mascotCaranguejo from "@/assets/mascot-caranguejo.jpg";

const MascotsSection = () => {
  const mascots = [
    {
      name: "Stellinha",
      type: "Carinhosa e Acolhedora",
      image: mascotEstrelinha,
      description: "Stellinha é a mascote mais carinhosa da turma! Ela acolhe os bebês e crianças pequenas com muito amor e ternura.",
    },
    {
      name: "Bibi",
      type: "Rápido e Corajoso",
      image: mascotBibi,
      description: "Bibi, o peixinho rápido, mostra que com coragem e prática, qualquer desafio na água pode ser superado!",
    },
    {
      name: "Acquinha",
      type: "Líder e Animado",
      image: mascotAcqua,
      description: "Acquinha é a gotinha d'água mais animada da piscina! Sempre pronto para ensinar e motivar todos os alunos.",
    },
    {
      name: "Tuquinha",
      type: "Paciente e Sábio",
      image: mascotTuca,
      description: "Tuquinha, a tartaruguinha tranquila, ensina que na natação a paciência e técnica são fundamentais.",
    },
    {
      name: "Delfi",
      type: "Veloz e Inteligente",
      image: mascotDelfim,
      description: "Delfi é o golfinho mais rápido e inteligente! Ele inspira os alunos a nadarem com velocidade e técnica apurada.",
    },
    {
      name: "Luminha",
      type: "Criativa e Divertida",
      image: mascotLuma,
      description: "Luminha, o polvinho criativo, usa seus oito tentáculos para demonstrar diferentes movimentos e tornar tudo mais divertido!",
    },
    {
      name: "Pitoco",
      type: "Determinado e Forte",
      image: mascotCaranguejo,
      description: "Pitoco é o mascote mais determinado! Com suas garras fortes, ele mostra que perseverança leva ao sucesso.",
    },
    {
      name: "Hipinho",
      type: "Elegante e Técnico",
      image: mascotCavalo,
      description: "Hipinho, o cavalinho marinho, é o mascote mais elegante da turma! Ele demonstra movimentos com graça e perfeição técnica.",
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
            8 personagens amigos que tornam o aprendizado lúdico e memorável em cada nível
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {mascots.map((mascot, index) => (
            <Card
              key={index}
              className="p-4 md:p-6 text-center hover:shadow-hover transition-smooth hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-20 h-20 md:w-28 md:h-28 mx-auto mb-3 md:mb-4 rounded-full overflow-hidden bg-muted/30 p-1">
                <img 
                  src={mascot.image} 
                  alt={mascot.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-1">{mascot.name}</h3>
              <p className="text-xs md:text-sm text-primary font-medium mb-2 md:mb-3">{mascot.type}</p>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed line-clamp-3">
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
