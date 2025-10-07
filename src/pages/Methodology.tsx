import { Card } from "@/components/ui/card";
import { Shield, Target, Award, Sparkles, BookOpen, ClipboardCheck, Trophy, Flame, CheckCircle2 } from "lucide-react";
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

  const differentials = [
    {
      icon: BookOpen,
      title: "Metodologia Exclusiva",
      description: "Sistema original desenvolvido ao longo de 30 anos, testado e aprovado por milhares de alunos",
    },
    {
      icon: ClipboardCheck,
      title: "Avaliações Contínuas",
      description: "Sistema estruturado de avaliações para acompanhar o progresso individual de cada aluno",
    },
    {
      icon: Trophy,
      title: "Conquistas e Certificados",
      description: "Reconhecimento do progresso através de certificados e conquistas a cada nível completado",
    },
    {
      icon: Target,
      title: "Objetivos Claros",
      description: "Cada nível possui metas bem definidas e critérios objetivos de progressão",
    },
    {
      icon: Flame,
      title: "Abordagem Motivacional",
      description: "Metodologia com gamificação e estímulos positivos para manter os alunos engajados",
    },
    {
      icon: CheckCircle2,
      title: "Resultados Comprovados",
      description: "Mais de 30 anos formando nadadores seguros e técnicos em todas as faixas etárias",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-b from-primary/5 to-background overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-ripple" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl animate-ripple" style={{ animationDelay: "1s" }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Metodologia{" "}
              <span className="gradient-ocean bg-clip-text text-transparent">
                Acquagyn
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in">
              Sistema completo e original de ensino de natação, desenvolvido ao longo de 30 anos 
              de experiência, com foco em segurança, técnica e progressão individualizada
            </p>
          </div>
        </div>
      </section>

      {/* Pilares da Metodologia */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              Os 4 Pilares da{" "}
              <span className="gradient-ocean bg-clip-text text-transparent">
                Nossa Metodologia
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-hover transition-smooth hover:-translate-y-2 animate-fade-in text-center group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth">
                    <Icon className="w-8 h-8 text-primary" />
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
        </div>
      </section>

      {/* Estrutura Visual */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              Estrutura de{" "}
              <span className="gradient-ocean bg-clip-text text-transparent">
                Progressão
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
              Do bebê ao adulto avançado, cada nível foi cuidadosamente desenvolvido 
              para garantir progressão segura e eficiente
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-hover animate-fade-in hover:scale-[1.02] transition-smooth">
            <img
              src={methodologyDiagram}
              alt="Diagrama da metodologia Acquagyn com 9 níveis de progressão"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Desenvolvimento Global */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto p-12 text-center shadow-hover animate-fade-in bg-gradient-to-br from-card to-primary/5">
            <Award className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Desenvolvimento Global do Aluno
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Nossa metodologia vai além do ensino de técnicas de natação. Focamos no desenvolvimento de{" "}
              <span className="text-primary font-semibold">habilidades motoras</span>,{" "}
              <span className="text-primary font-semibold">valores sociais</span> e{" "}
              <span className="text-primary font-semibold">atitudes positivas</span>,
              proporcionando uma formação completa para nossos alunos.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[
                { title: "Habilidades", desc: "Coordenação motora e capacidade física" },
                { title: "Valores", desc: "Disciplina, respeito e trabalho em equipe" },
                { title: "Atitudes", desc: "Confiança, autonomia e superação" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <h3 className="font-bold text-primary text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              Diferenciais da{" "}
              <span className="gradient-ocean bg-clip-text text-transparent">
                Metodologia
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentials.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-hover transition-smooth hover:-translate-y-2 animate-fade-in bg-gradient-to-br from-card to-primary/5 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-smooth">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Methodology;
