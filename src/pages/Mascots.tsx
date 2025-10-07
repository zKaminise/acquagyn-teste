import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Waves, Heart, Star, Sparkles, Zap, Target, Award, Smile, Trophy } from "lucide-react";
import mascotAcqua from "@/assets/mascot-acqua.jpg";
import mascotTuca from "@/assets/mascot-tuca.jpg";
import mascotLuma from "@/assets/mascot-luma.jpg";
import mascotBibi from "@/assets/mascot-bibi.jpg";
import mascotDelfim from "@/assets/mascot-delfim.jpg";
import mascotEstrelinha from "@/assets/mascot-estrelinha.jpg";
import mascotCavalo from "@/assets/mascot-cavalo.jpg";
import mascotCaranguejo from "@/assets/mascot-caranguejo.jpg";
import mascotBaleia from "@/assets/mascot-baleia.jpg";

const mascots = [
  {
    name: "Estrelinha",
    image: mascotEstrelinha,
    color: "from-pink-400 to-orange-400",
    icon: Star,
    personality: "Carinhosa e Acolhedora",
    description: "Estrelinha é a mascote mais carinhosa da turma! Ela acolhe os bebês e crianças pequenas com muito amor e ternura.",
    characteristics: ["Acolhedora", "Doce", "Protetora"],
    favoriteThing: "Brincar com os bebês na água",
  },
  {
    name: "Bibi",
    image: mascotBibi,
    color: "from-orange-400 to-yellow-500",
    icon: Sparkles,
    personality: "Rápido e Corajoso",
    description: "Bibi, o peixinho rápido, mostra que com coragem e prática, qualquer desafio na água pode ser superado!",
    characteristics: ["Ágil", "Corajoso", "Motivador"],
    favoriteThing: "Nadar borboleta em alta velocidade",
  },
  {
    name: "Acqua",
    image: mascotAcqua,
    color: "from-blue-400 to-cyan-500",
    icon: Waves,
    personality: "Líder e Animado",
    description: "Acqua é a gotinha d'água mais animada da piscina! Sempre pronto para ensinar e motivar todos os alunos.",
    characteristics: ["Entusiasta", "Encorajador", "Líder Natural"],
    favoriteThing: "Ensinar novos estilos de natação",
  },
  {
    name: "Tuca",
    image: mascotTuca,
    color: "from-green-400 to-emerald-500",
    icon: Heart,
    personality: "Paciente e Sábio",
    description: "Tuca, a tartaruga tranquila, ensina que na natação a paciência e técnica são fundamentais. Devagar e sempre!",
    characteristics: ["Calmo", "Sábio", "Persistente"],
    favoriteThing: "Nadar crawl com perfeição",
  },
  {
    name: "Delfim",
    image: mascotDelfim,
    color: "from-blue-500 to-cyan-600",
    icon: Zap,
    personality: "Veloz e Inteligente",
    description: "Delfim é o golfinho mais rápido e inteligente! Ele inspira os alunos a nadarem com velocidade e técnica apurada.",
    characteristics: ["Veloz", "Inteligente", "Atlético"],
    favoriteThing: "Fazer viradas rápidas na piscina",
  },
  {
    name: "Luma",
    image: mascotLuma,
    color: "from-purple-400 to-pink-500",
    icon: Target,
    personality: "Criativa e Divertida",
    description: "Luma, o polvo criativo, usa seus oito tentáculos para demonstrar diferentes movimentos e tornar tudo mais divertido!",
    characteristics: ["Criativa", "Multitask", "Alegre"],
    favoriteThing: "Fazer movimentos sincronizados",
  },
  {
    name: "Caranguejo",
    image: mascotCaranguejo,
    color: "from-red-400 to-orange-500",
    icon: Smile,
    personality: "Determinado e Forte",
    description: "Caranguejo é o mascote mais determinado! Com suas garras fortes, ele mostra que perseverança leva ao sucesso.",
    characteristics: ["Determinado", "Forte", "Resistente"],
    favoriteThing: "Treinos de resistência",
  },
  {
    name: "Cavalo",
    image: mascotCavalo,
    color: "from-teal-400 to-cyan-500",
    icon: Award,
    personality: "Elegante e Técnico",
    description: "Cavalo Marinho é o mascote mais elegante da turma! Ele demonstra movimentos com graça e perfeição técnica.",
    characteristics: ["Elegante", "Técnico", "Gracioso"],
    favoriteThing: "Movimentos técnicos refinados",
  },
  {
    name: "Baleia",
    image: mascotBaleia,
    color: "from-blue-600 to-indigo-700",
    icon: Trophy,
    personality: "Poderosa e Experiente",
    description: "Baleia é a mascote mais experiente! Com sua força e sabedoria, ela guia os nadadores avançados rumo à excelência.",
    characteristics: ["Poderosa", "Experiente", "Sábia"],
    favoriteThing: "Treinos de alta performance",
  },
];

const Mascots = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-ripple pointer-events-none -z-10" />
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-ripple pointer-events-none -z-10" style={{ animationDelay: "1s" }} />
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 text-sm px-4 py-2 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 animate-fade-in">
              <Waves className="w-4 h-4 mr-2 inline animate-wave" />
              Conheça Nossa Turma
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Nossos{" "}
              <span className="text-primary">
                Mascotes
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in">
              Conheça os 9 amigos que acompanham todos os alunos durante sua jornada na natação!
            </p>
          </div>
        </div>
      </section>

      {/* Mascots Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {mascots.map((mascot, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-hover transition-smooth hover:-translate-y-2 animate-fade-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`h-64 bg-gradient-to-br ${mascot.color} flex items-center justify-center p-8 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
                  <img
                    src={mascot.image}
                    alt={`Mascote ${mascot.name}`}
                    className="w-48 h-48 object-contain relative z-10 group-hover:scale-110 transition-smooth drop-shadow-2xl"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${mascot.color} flex items-center justify-center`}>
                      <mascot.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{mascot.name}</h3>
                      <p className="text-sm text-muted-foreground">{mascot.personality}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {mascot.description}
                  </p>

                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Características:</h4>
                      <div className="flex flex-wrap gap-2">
                        {mascot.characteristics.map((char, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {char}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm mb-1">Favorito:</h4>
                      <p className="text-sm text-muted-foreground italic">
                        {mascot.favoriteThing}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">
              Curiosidades sobre os{" "}
              <span className="text-primary">Mascotes</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
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
              ].map((fact, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-hover transition-smooth hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full gradient-ocean flex items-center justify-center flex-shrink-0">
                      <fact.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">{fact.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {fact.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mascots;
