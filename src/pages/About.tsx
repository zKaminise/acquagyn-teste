import { Card } from "@/components/ui/card";
import { Shield, TrendingUp, Heart, Users, Clock, Droplet, Award, Target, CheckCircle2 } from "lucide-react";

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

  const values = [
    { icon: Award, title: "Excelência", desc: "Compromisso com a qualidade no ensino" },
    { icon: Heart, title: "Cuidado", desc: "Atenção individualizada a cada aluno" },
    { icon: Target, title: "Resultados", desc: "Foco no desenvolvimento real" },
    { icon: Users, title: "Comunidade", desc: "Ambiente acolhedor e familiar" },
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
              Sobre a{" "}
              <span className="text-gradient-animated">
                Acquagyn
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in">
              Desde 1994, dedicados à educação e saúde por meio da natação e hidroginástica. 
              Nossa missão é proporcionar qualidade de vida através de uma metodologia exclusiva 
              e ambiente seguro para todas as idades.
            </p>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Mais de 30 Anos de{" "}
                <span className="text-gradient-animated">História</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A Acquagyn nasceu em 1994 com o objetivo de transformar vidas através da natação. 
                  Ao longo de três décadas, desenvolvemos uma metodologia única e original que já 
                  beneficiou milhares de alunos de todas as idades.
                </p>
                <p>
                  Nossa experiência nos permitiu criar um sistema completo de ensino com 9 níveis 
                  estruturados, do bebê ao adulto avançado, sempre com foco em segurança, técnica 
                  e progressão individualizada.
                </p>
                <p>
                  Hoje, somos referência em ensino de natação, reconhecidos pela qualidade dos 
                  nossos instrutores, estrutura moderna e resultados comprovados.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 animate-fade-in">
              {[
                { number: "30+", label: "Anos de Tradição" },
                { number: "9", label: "Níveis de Ensino" },
                { number: "1000+", label: "Alunos Formados" },
                { number: "100%", label: "Metodologia Original" },
              ].map((stat, index) => (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-hover transition-smooth hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-4xl font-bold gradient-ocean bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Diferenciais */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              Nossos{" "}
              <span className="text-gradient-animated">
                Diferenciais
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
              O que nos torna únicos no ensino de natação
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-hover transition-smooth hover:-translate-y-2 animate-fade-in bg-card/50 backdrop-blur-sm group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-16 h-16 rounded-full gradient-ocean flex items-center justify-center group-hover:scale-110 transition-smooth">
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

      {/* Nossos Valores */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              Nossos{" "}
              <span className="text-gradient-animated">
                Valores
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-8 text-center hover:shadow-hover transition-smooth hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compromisso */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto p-12 text-center shadow-hover animate-fade-in bg-gradient-to-br from-card to-primary/5">
            <CheckCircle2 className="w-16 h-16 text-primary mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Nosso Compromisso</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Estamos comprometidos em proporcionar uma experiência única de aprendizado, 
              onde cada aluno é tratado de forma individual e recebe todo o suporte necessário 
              para alcançar seus objetivos. Segurança, técnica e bem-estar são nossos pilares 
              fundamentais, sempre com uma equipe altamente qualificada e estrutura de primeira linha.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;
