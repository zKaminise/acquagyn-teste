import { Card } from "@/components/ui/card";
import { Shield, TrendingUp, Heart, Users, Clock, Droplet } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Users,
      title: "Equipe Qualificada",
      description: "Instrutores experientes e especializados para garantir aprendizado seguro e eficiente",
    },
    {
      icon: Droplet,
      title: "Piscinas Aquecidas",
      description: "Estrutura moderna e higienizada, com piscinas climatizadas para maior conforto",
    },
    {
      icon: TrendingUp,
      title: "Todas as Idades",
      description: "Turmas para bebês, crianças, adultos e idosos, do iniciante ao avançado",
    },
    {
      icon: Heart,
      title: "Saúde e Bem-estar",
      description: "Fortalecimento cardiovascular, redução do estresse e melhora da disposição",
    },
    {
      icon: Clock,
      title: "Horários Flexíveis",
      description: "Diferentes opções de horários que se ajustam à sua rotina",
    },
    {
      icon: Shield,
      title: "Ambiente Seguro",
      description: "Protocolos rigorosos de segurança aquática e supervisão constante",
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Não faltam motivos para{" "}
            <span className="gradient-ocean bg-clip-text text-transparent">
              você fazer parte
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expertise de mais de 30 anos em condicionamento físico para levar sua qualidade de vida a outro nível
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-hover transition-smooth border-border/50 animate-fade-in bg-card/50 backdrop-blur-sm"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 rounded-full gradient-ocean flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
