import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import mascotAcqua from "@/assets/mascot-acqua.jpg";
import mascotTuca from "@/assets/mascot-tuca.jpg";
import mascotLuma from "@/assets/mascot-luma.jpg";
import mascotBibi from "@/assets/mascot-bibi.jpg";
import mascotDelfim from "@/assets/mascot-delfim.jpg";
import mascotEstrelinha from "@/assets/mascot-estrelinha.jpg";
import mascotCavalo from "@/assets/mascot-cavalo.jpg";
import mascotCaranguejo from "@/assets/mascot-caranguejo.jpg";
import mascotBaleia from "@/assets/mascot-baleia.jpg";

const Levels = () => {
  const levels = [
    {
      mascot: mascotEstrelinha,
      mascotName: "Stellinha",
      name: "Baby Splash 1/2/3",
      age: "6-36 meses",
      color: "bg-pink-500",
      description: "Adaptação aquática através de estímulos sensoriais e vínculo com os pais",
      skills: ["Familiarização com água", "Estímulos sensoriais", "Brincadeiras aquáticas", "Vínculo pais-bebê"],
    },
    {
      mascot: mascotBibi,
      mascotName: "Bibi",
      name: "Peixinhos 1/2",
      age: "3-5 anos",
      color: "bg-orange-500",
      description: "Familiarização com o meio aquático através de brincadeiras e atividades lúdicas",
      skills: ["Flutuação básica", "Mergulho inicial", "Movimentos coordenados", "Respiração aquática"],
    },
    {
      mascot: mascotAcqua,
      mascotName: "Acquinha",
      name: "Ondas 1/2",
      age: "6-8 anos",
      color: "bg-yellow-500",
      description: "Desenvolvimento de movimentos básicos e início do aprendizado técnico",
      skills: ["Crawl inicial", "Costas básico", "Propulsão de pernas", "Independência aquática"],
    },
    {
      mascot: mascotTuca,
      mascotName: "Tuquinha",
      name: "Marés 1/2/3",
      age: "9-11 anos",
      color: "bg-green-500",
      description: "Aprimoramento técnico dos quatro estilos de natação",
      skills: ["Crawl refinado", "Costas técnico", "Peito completo", "Borboleta inicial"],
    },
    {
      mascot: mascotDelfim,
      mascotName: "Delfi",
      name: "Correnteza",
      age: "12-14 anos",
      color: "bg-blue-500",
      description: "Refinamento técnico e desenvolvimento de resistência",
      skills: ["4 estilos completos", "Viradas e saídas", "Resistência física", "Velocidade"],
    },
    {
      mascot: mascotLuma,
      mascotName: "Luminha",
      name: "Ritmo & Técnica",
      age: "15-17 anos",
      color: "bg-indigo-500",
      description: "Técnica avançada com foco em performance e condicionamento",
      skills: ["Técnica avançada", "Treino intervalado", "Performance", "Condicionamento"],
    },
    {
      mascot: mascotCaranguejo,
      mascotName: "Pitoco",
      name: "Adulto Iniciante",
      age: "18+ anos",
      color: "bg-purple-500",
      description: "Adaptação ao meio líquido e aprendizado dos fundamentos básicos",
      skills: ["Perda do medo", "Flutuação", "Respiração", "Movimentos básicos"],
    },
    {
      mascot: mascotCavalo,
      mascotName: "Hipinho",
      name: "Adulto Intermediário",
      age: "18+ anos",
      color: "bg-purple-600",
      description: "Desenvolvimento técnico e aumento da resistência física",
      skills: ["Crawl e costas", "Distância aumentada", "Resistência", "Técnica refinada"],
    },
    {
      mascot: mascotBaleia,
      mascotName: "Belinha",
      name: "Adulto Avançado",
      age: "18+ anos",
      color: "bg-purple-700",
      description: "Aperfeiçoamento técnico dos quatro estilos e treinamento específico",
      skills: ["4 estilos completos", "Alta performance", "Treino específico", "Competição"],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-b from-primary/5 to-background overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-ripple" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl animate-ripple" style={{ animationDelay: "1s" }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Níveis de{" "}
              <span className="text-gradient-animated">
                Ensino
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in">
              9 níveis estruturados do bebê ao adulto, cada um com objetivos claros, 
              competências mensuráveis e critérios de progressão bem definidos
            </p>
          </div>
        </div>
      </section>

      {/* Níveis */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {levels.map((level, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <Card
                  key={index}
                  className={`p-8 hover:shadow-hover transition-smooth hover:-translate-y-1 animate-fade-in border-l-4 group ${
                    isEven ? "lg:mr-12" : "lg:ml-12"
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    borderLeftColor: `var(--${level.color})`,
                  }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Header */}
                    <div className="lg:col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left">
                      <div className="relative w-24 h-24 mb-4 group-hover:scale-110 transition-smooth">
                        <img
                          src={level.mascot}
                          alt={`Mascote ${level.mascotName}`}
                          className="w-full h-full object-contain drop-shadow-lg"
                        />
                        <Badge 
                          variant="secondary" 
                          className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-xs px-2 py-0.5"
                        >
                          {level.mascotName}
                        </Badge>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2 mt-2">
                        {level.name}
                      </h3>
                      <Badge variant="secondary" className="text-sm mb-4">
                        {level.age}
                      </Badge>
                      <p className="text-muted-foreground leading-relaxed">
                        {level.description}
                      </p>
                    </div>

                    {/* Skills */}
                    <div className="lg:col-span-2">
                      <h4 className="font-semibold text-foreground mb-4 text-lg">
                        Competências Desenvolvidas:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {level.skills.map((skill, skillIndex) => (
                          <div
                            key={skillIndex}
                            className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg hover:bg-muted transition-smooth"
                          >
                            <div className={`w-2 h-2 rounded-full ${level.color}`} />
                            <span className="text-sm text-foreground">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto p-12 text-center shadow-hover animate-fade-in bg-gradient-to-br from-card to-primary/5">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Encontre o Nível Ideal Para Você
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nossa equipe especializada irá avaliar seu perfil e indicar o nível mais adequado 
              para iniciar sua jornada na natação com segurança e eficiência
            </p>
            <a
              href="/contato"
              className="inline-block bg-primary text-primary-foreground font-bold px-8 py-4 rounded-lg hover:bg-primary/90 transition-smooth shadow-card hover:shadow-hover"
            >
              Agende Sua Avaliação
            </a>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Levels;
