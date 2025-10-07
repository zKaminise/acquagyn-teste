import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Baby, Fish, Waves as WavesIcon, Wind, Zap, Activity, User } from "lucide-react";

const Levels = () => {
  const levels = [
    {
      icon: Baby,
      name: "Baby Splash 1/2/3",
      age: "6-36 meses",
      color: "bg-pink-500",
      description: "Adaptação aquática através de estímulos sensoriais e vínculo com os pais",
    },
    {
      icon: Fish,
      name: "Peixinhos 1/2",
      age: "3-5 anos",
      color: "bg-orange-500",
      description: "Familiarização com o meio aquático através de brincadeiras e atividades lúdicas",
    },
    {
      icon: WavesIcon,
      name: "Ondas 1/2",
      age: "6-8 anos",
      color: "bg-yellow-500",
      description: "Desenvolvimento de movimentos básicos e início do aprendizado técnico",
    },
    {
      icon: Wind,
      name: "Marés 1/2/3",
      age: "9-11 anos",
      color: "bg-green-500",
      description: "Aprimoramento técnico dos quatro estilos de natação",
    },
    {
      icon: Zap,
      name: "Correnteza",
      age: "12-14 anos",
      color: "bg-blue-500",
      description: "Refinamento técnico e desenvolvimento de resistência",
    },
    {
      icon: Activity,
      name: "Ritmo & Técnica",
      age: "15-17 anos",
      color: "bg-indigo-500",
      description: "Técnica avançada com foco em performance e condicionamento",
    },
    {
      icon: User,
      name: "Adulto Iniciante",
      age: "18+ anos",
      color: "bg-purple-500",
      description: "Adaptação ao meio líquido e aprendizado dos fundamentos básicos",
    },
    {
      icon: User,
      name: "Adulto Intermediário",
      age: "18+ anos",
      color: "bg-purple-600",
      description: "Desenvolvimento técnico e aumento da resistência física",
    },
    {
      icon: User,
      name: "Adulto Avançado",
      age: "18+ anos",
      color: "bg-purple-700",
      description: "Aperfeiçoamento técnico dos quatro estilos e treinamento específico",
    },
  ];

  return (
    <section id="niveis" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Estrutura de{" "}
            <span className="gradient-ocean bg-clip-text text-transparent">
              Níveis
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Do bebê ao adulto, cada nível possui objetivos claros, competências mensuráveis e critérios de progressão bem definidos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {levels.map((level, index) => {
            const Icon = level.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-hover transition-smooth hover:scale-105 animate-fade-in border-l-4"
                style={{
                  animationDelay: `${index * 50}ms`,
                  borderLeftColor: `var(--${level.color})`,
                }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-lg ${level.color} flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      {level.name}
                    </h3>
                    <Badge variant="secondary" className="text-xs">
                      {level.age}
                    </Badge>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {level.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Levels;
