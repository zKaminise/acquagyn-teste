import mascotAcqua from "@/assets/mascot-acqua.jpg";
import mascotTuca from "@/assets/mascot-tuca.jpg";
import mascotLuma from "@/assets/mascot-luma.jpg";
import mascotBibi from "@/assets/mascot-bibi.jpg";
import mascotDelfim from "@/assets/mascot-delfim.jpg";
import mascotEstrelinha from "@/assets/mascot-estrelinha.jpg";
import mascotCavalo from "@/assets/mascot-cavalo.jpg";
import mascotCaranguejo from "@/assets/mascot-caranguejo.jpg";

const mascots = [
  { name: "Stellinha", type: "Carinhosa e Acolhedora", image: mascotEstrelinha, description: "Stellinha é a mascote mais carinhosa da turma! Ela acolhe os bebês e crianças pequenas com muito amor e ternura." },
  { name: "Bibi", type: "Rápido e Corajoso", image: mascotBibi, description: "Bibi, o peixinho rápido, mostra que com coragem e prática, qualquer desafio na água pode ser superado!" },
  { name: "Acquinha", type: "Líder e Animado", image: mascotAcqua, description: "Acquinha é a gotinha d'água mais animada da piscina! Sempre pronto para ensinar e motivar todos os alunos." },
  { name: "Tuquinha", type: "Paciente e Sábio", image: mascotTuca, description: "Tuquinha, a tartaruguinha tranquila, ensina que na natação a paciência e técnica são fundamentais." },
  { name: "Delfi", type: "Veloz e Inteligente", image: mascotDelfim, description: "Delfi é o golfinho mais rápido e inteligente! Ele inspira os alunos a nadarem com velocidade e técnica apurada." },
  { name: "Luminha", type: "Criativa e Divertida", image: mascotLuma, description: "Luminha, o polvinho criativo, usa seus oito tentáculos para demonstrar diferentes movimentos e tornar tudo mais divertido!" },
  { name: "Pitoco", type: "Determinado e Forte", image: mascotCaranguejo, description: "Pitoco é o mascote mais determinado! Com suas garras fortes, ele mostra que perseverança leva ao sucesso." },
  { name: "Hipinho", type: "Elegante e Técnico", image: mascotCavalo, description: "Hipinho, o cavalinho marinho, é o mascote mais elegante da turma! Ele demonstra movimentos com graça e perfeição técnica." },
];

const MascotsSection = () => {
  return (
    <section className="py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-3">
            Aprendizado Lúdico
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Conheça Nossos{" "}
            <span className="text-gradient-animated">Mascotes</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            8 personagens amigos que tornam o aprendizado lúdico e memorável em cada nível
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {mascots.map((mascot, index) => (
            <div
              key={index}
              className="glass-card rounded-3xl p-4 md:p-6 text-center hover:shadow-hover hover:-translate-y-3 transition-all duration-500 group cursor-default"
            >
              <div className="relative w-20 h-20 md:w-24 md:h-24 mx-auto mb-3 md:mb-4">
                <img
                  src={mascot.image}
                  alt={mascot.name}
                  className="w-full h-full rounded-full object-cover ring-2 ring-primary/20 ring-offset-2 group-hover:ring-4 group-hover:ring-primary/40 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
                />
              </div>
              <h3 className="font-display text-base md:text-lg font-bold mb-1">{mascot.name}</h3>
              <p className="text-xs text-primary font-medium mb-2">{mascot.type}</p>
              <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">{mascot.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MascotsSection;
