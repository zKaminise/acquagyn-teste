import { Badge } from "@/components/ui/badge";
import { Waves, Heart, Star, Sparkles, Zap, Target, Award, Smile } from "lucide-react";
import Bubbles from "@/components/home/Bubbles";
import WaveDivider from "@/components/home/WaveDivider";
import MascotCard from "@/components/mascots/MascotCard";

import mascotAcqua from "@/assets/mascot-acqua.jpg";
import mascotTuca from "@/assets/mascot-tuca.jpg";
import mascotLuma from "@/assets/mascot-luma.jpg";
import mascotBibi from "@/assets/mascot-bibi.jpg";
import mascotDelfim from "@/assets/mascot-delfim.jpg";
import mascotEstrelinha from "@/assets/mascot-estrelinha.jpg";
import mascotCavalo from "@/assets/mascot-cavalo.jpg";
import mascotCaranguejo from "@/assets/mascot-caranguejo.jpg";

const mascots = [
  {
    name: "Stellinha",
    image: mascotEstrelinha,
    gradient: "from-pink-400 via-rose-400 to-orange-300",
    hoverAnimation: "group-hover:rotate-12 group-hover:scale-110",
    icon: Star,
    personality: "Carinhosa e Acolhedora",
    description: "Stellinha é a mascote mais carinhosa da turma! Ela acolhe os bebês e crianças pequenas com muito amor e ternura.",
    characteristics: ["Acolhedora", "Doce", "Protetora"],
    favoriteThing: "Brincar com os bebês na água",
  },
  {
    name: "Bibi",
    image: mascotBibi,
    gradient: "from-orange-400 via-amber-400 to-yellow-300",
    hoverAnimation: "group-hover:translate-x-2 group-hover:-translate-y-1 group-hover:scale-105 group-hover:rotate-[-5deg]",
    icon: Sparkles,
    personality: "Rápido e Corajoso",
    description: "Bibi, o peixinho rápido, mostra que com coragem e prática, qualquer desafio na água pode ser superado!",
    characteristics: ["Ágil", "Corajoso", "Motivador"],
    favoriteThing: "Nadar borboleta em alta velocidade",
  },
  {
    name: "Acquinha",
    image: mascotAcqua,
    gradient: "from-sky-400 via-blue-400 to-cyan-400",
    hoverAnimation: "group-hover:scale-115 group-hover:-translate-y-2",
    icon: Waves,
    personality: "Líder e Animado",
    description: "Acquinha é a gotinha d'água mais animada da piscina! Sempre pronto para ensinar e motivar todos os alunos.",
    characteristics: ["Entusiasta", "Encorajador", "Líder Natural"],
    favoriteThing: "Ensinar novos estilos de natação",
  },
  {
    name: "Tuquinha",
    image: mascotTuca,
    gradient: "from-emerald-400 via-green-400 to-teal-300",
    hoverAnimation: "group-hover:scale-105 group-hover:translate-y-1",
    icon: Heart,
    personality: "Paciente e Sábio",
    description: "Tuquinha, a tartaruguinha tranquila, ensina que na natação a paciência e técnica são fundamentais.",
    characteristics: ["Calmo", "Sábio", "Persistente"],
    favoriteThing: "Nadar crawl com perfeição",
  },
  {
    name: "Delfi",
    image: mascotDelfim,
    gradient: "from-blue-500 via-indigo-400 to-cyan-400",
    hoverAnimation: "group-hover:-translate-y-3 group-hover:scale-110 group-hover:rotate-3",
    icon: Zap,
    personality: "Veloz e Inteligente",
    description: "Delfi é o golfinho mais rápido e inteligente! Ele inspira os alunos a nadarem com velocidade e técnica apurada.",
    characteristics: ["Veloz", "Inteligente", "Atlético"],
    favoriteThing: "Fazer viradas rápidas na piscina",
  },
  {
    name: "Luminha",
    image: mascotLuma,
    gradient: "from-purple-400 via-violet-400 to-pink-400",
    hoverAnimation: "group-hover:scale-110 group-hover:rotate-[-8deg]",
    icon: Target,
    personality: "Criativa e Divertida",
    description: "Luminha, o polvinho criativo, usa seus oito tentáculos para demonstrar diferentes movimentos e tornar tudo mais divertido!",
    characteristics: ["Criativa", "Multitask", "Alegre"],
    favoriteThing: "Fazer movimentos sincronizados",
  },
  {
    name: "Pitoco",
    image: mascotCaranguejo,
    gradient: "from-red-400 via-rose-500 to-orange-400",
    hoverAnimation: "group-hover:translate-x-1 group-hover:-translate-x-1 group-hover:scale-108",
    icon: Smile,
    personality: "Determinado e Forte",
    description: "Pitoco é o mascote mais determinado! Com suas garras fortes, ele mostra que perseverança leva ao sucesso.",
    characteristics: ["Determinado", "Forte", "Resistente"],
    favoriteThing: "Treinos de resistência",
  },
  {
    name: "Hipinho",
    image: mascotCavalo,
    gradient: "from-teal-400 via-emerald-400 to-cyan-400",
    hoverAnimation: "group-hover:-translate-y-2 group-hover:scale-110 group-hover:rotate-6",
    icon: Award,
    personality: "Elegante e Técnico",
    description: "Hipinho, o cavalinho marinho, é o mascote mais elegante da turma! Ele demonstra movimentos com graça e perfeição técnica.",
    characteristics: ["Elegante", "Técnico", "Gracioso"],
    favoriteThing: "Movimentos técnicos refinados",
  },
];

const funFacts = [
  {
    title: "Trabalho em Equipe",
    description: "Cada mascote representa um valor importante na natação: liderança, paciência, criatividade e coragem!",
    icon: Heart,
  },
  {
    title: "Acompanhamento",
    description: "Os mascotes aparecem em certificados, materiais didáticos e na decoração da academia!",
    icon: Star,
  },
  {
    title: "Inspiração",
    description: "Cada aluno pode se identificar com um mascote e ser motivado por suas características!",
    icon: Sparkles,
  },
  {
    title: "Evolução",
    description: "Conforme você avança nos níveis, os mascotes celebram suas conquistas junto com você!",
    icon: Waves,
  },
];

const Mascots = () => {
  return (
    <div className="min-h-screen">
      {/* Hero with underwater background */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden gradient-deep">
        <Bubbles count={20} className="z-10" />

        {/* Underwater SVG illustration */}
        <div className="absolute inset-0 z-0 opacity-10">
          <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path d="M0,224 C240,100 480,280 720,180 C960,80 1200,260 1440,160 L1440,320 L0,320 Z" fill="hsla(199,89%,48%,0.3)" />
            <path d="M0,260 C300,180 600,300 900,220 C1100,160 1300,280 1440,200 L1440,320 L0,320 Z" fill="hsla(188,78%,41%,0.2)" />
          </svg>
          {/* Seaweed shapes */}
          <svg className="absolute bottom-0 left-[10%] w-12 h-40 animate-wave" viewBox="0 0 48 160">
            <path d="M24,160 Q10,120 24,80 Q38,40 24,0" stroke="hsla(120,50%,40%,0.3)" strokeWidth="6" fill="none" />
          </svg>
          <svg className="absolute bottom-0 left-[80%] w-12 h-32 animate-wave" style={{ animationDelay: "1.5s" }} viewBox="0 0 48 128">
            <path d="M24,128 Q38,96 24,64 Q10,32 24,0" stroke="hsla(120,50%,40%,0.25)" strokeWidth="5" fill="none" />
          </svg>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 text-sm px-4 py-2 bg-white/10 text-white border-white/20 hover:bg-white/20 animate-fade-in backdrop-blur-sm">
              <Waves className="w-4 h-4 mr-2 inline animate-wave" />
              Conheça Nossa Turma
            </Badge>

            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 text-white animate-fade-in">
              Nossos{" "}
              <span className="text-gradient-animated">Mascotes</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto animate-fade-in">
              8 amigos especiais que tornam a jornada na natação mais divertida, lúdica e inesquecível!
            </p>
          </div>
        </div>

        <WaveDivider position="bottom" />
      </section>

      {/* Mascots Grid */}
      <section className="py-20 relative overflow-hidden">
        {/* Subtle underwater background pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="underwater-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1.5" fill="hsl(199,89%,48%)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#underwater-dots)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {mascots.map((mascot, index) => (
              <MascotCard key={index} index={index} {...mascot} />
            ))}
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-deep opacity-95" />
        <Bubbles count={10} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-12 text-white animate-fade-in">
              Curiosidades sobre os{" "}
              <span className="text-gradient-animated">Mascotes</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {funFacts.map((fact, index) => (
                <div
                  key={index}
                  className="glass rounded-2xl p-6 hover:bg-white/12 transition-all duration-300 hover:-translate-y-1 animate-fade-in group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full gradient-ocean flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-smooth">
                      <fact.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-white mb-2">{fact.title}</h3>
                      <p className="text-sm text-white/70 leading-relaxed">
                        {fact.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mascots;
