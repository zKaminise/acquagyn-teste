import { Card } from "@/components/ui/card";
import { Trophy, Users, Target, FileText, MessageSquare, Sparkles } from "lucide-react";

const DifferentialsSection = () => {
  const differentials = [
    {
      icon: Trophy,
      title: "Gamificação & Conquistas",
      description: "Sistema de selos, passaporte do nadador e desafios mensais para engajar e motivar os alunos.",
    },
    {
      icon: Users,
      title: "Inclusão & Acessibilidade",
      description: "Adaptações específicas para TEA, TDAH, mobilidade reduzida e fobias aquáticas.",
    },
    {
      icon: Target,
      title: "Competências Mensuráveis",
      description: "Objetivos claros e critérios de progressão bem definidos para cada nível.",
    },
    {
      icon: FileText,
      title: "Planos de Aula Prontos",
      description: "Templates completos com aquecimento, técnica, drills, jogos e feedback estruturado.",
    },
    {
      icon: MessageSquare,
      title: "Comunicação Efetiva",
      description: "Boletins, QR codes com vídeos e guias para engajamento de responsáveis e adultos.",
    },
    {
      icon: Sparkles,
      title: "Mascotes & Identidade",
      description: "Acqua, Tuca, Luma e Bibi: personagens que tornam o aprendizado lúdico e memorável.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Diferenciais da Metodologia
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Recursos exclusivos que tornam a Acquagyn única no mercado de ensino de natação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-hover transition-smooth hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
