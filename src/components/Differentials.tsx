import { Card } from "@/components/ui/card";
import { CheckCircle2, Book, ClipboardCheck, Trophy, Target, Flame } from "lucide-react";

const Differentials = () => {
  const differentials = [
    {
      icon: Book,
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
    <section id="diferenciais" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Diferenciais da{" "}
            <span className="gradient-ocean bg-clip-text text-transparent">
              Metodologia
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            O que torna a Acquagyn única no ensino de natação
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-hover transition-smooth animate-fade-in bg-gradient-to-br from-card to-primary/5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
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

        {/* CTA Section */}
        <div className="relative rounded-2xl gradient-ocean p-12 text-center text-white overflow-hidden shadow-hover">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-ripple" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-ripple" style={{ animationDelay: "1s" }} />
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Veja nossas opções de aulas e agende seu horário!
            </h3>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Fale com nosso atendente e se informe sobre nossos planos e horários disponíveis
            </p>
            <a
              href="#contato"
              className="inline-block bg-white text-primary font-bold px-8 py-4 rounded-lg hover:bg-white/90 transition-smooth shadow-lg hover:shadow-xl"
            >
              Fale Conosco Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
