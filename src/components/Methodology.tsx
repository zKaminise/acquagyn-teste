import { Card } from "@/components/ui/card";
import { Shield, Target, Award, Sparkles } from "lucide-react";
import methodologyDiagram from "@/assets/methodology-diagram.jpg";

const Methodology = () => {
  const pillars = [
    {
      icon: Shield,
      title: "Segurança em Primeiro Lugar",
      description: "Protocolos rigorosos de segurança aquática e supervisão constante em todas as aulas.",
    },
    {
      icon: Target,
      title: "Progressão Estruturada",
      description: "Metodologia com 9 níveis, do bebê ao adulto, com competências mensuráveis.",
    },
    {
      icon: Award,
      title: "Técnica de Excelência",
      description: "Ensino dos 4 estilos (crawl, costas, peito, borboleta) com precisão técnica.",
    },
    {
      icon: Sparkles,
      title: "Ludicidade e Motivação",
      description: "Gamificação, conquistas e abordagem lúdica para engajar alunos de todas as idades.",
    },
  ];

  return (
    <section id="metodologia" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nossa{" "}
            <span className="gradient-ocean bg-clip-text text-transparent">
              Metodologia
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Um sistema completo e original, desenvolvido ao longo de 30 anos de experiência no ensino de natação
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-hover transition-smooth animate-fade-in text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-foreground">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Methodology Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-hover animate-fade-in">
          <img
            src={methodologyDiagram}
            alt="Diagrama da metodologia Acquagyn"
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent pointer-events-none" />
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-primary/5 rounded-2xl p-8 max-w-3xl">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Desenvolvimento Global do Aluno
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Nossa metodologia vai além do ensino de técnicas de natação. Focamos no desenvolvimento de{" "}
              <span className="text-primary font-semibold">habilidades motoras</span>,{" "}
              <span className="text-primary font-semibold">valores sociais</span> e{" "}
              <span className="text-primary font-semibold">atitudes positivas</span>,
              proporcionando uma formação completa para nossos alunos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
