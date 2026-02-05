import { Card } from "@/components/ui/card";
import { Shield, Waves, Award, Heart } from "lucide-react";
import mascotAcqua from "@/assets/mascot-acqua.jpg";
import mascotDelfim from "@/assets/mascot-delfim.jpg";
import mascotBibi from "@/assets/mascot-bibi.jpg";
import mascotLuma from "@/assets/mascot-luma.jpg";
import mascotTuca from "@/assets/mascot-tuca.jpg";

const PillarsSection = () => {
  const pillars = [
    {
      icon: Shield,
      mascot: mascotTuca,
      title: "Segurança em Primeiro Lugar",
      description: "Protocolos rigorosos de segurança aquática e supervisão constante em todas as aulas.",
    },
    {
      icon: Waves,
      mascot: mascotDelfim,
      title: "Progressão Estruturada",
      description: "Metodologia com 9 níveis, do bebê ao adulto, com competências mensuráveis.",
    },
    {
      icon: Award,
      mascot: mascotBibi,
      title: "Técnica de Excelência",
      description: "Ensino dos 4 estilos (crawl, costas, peito, borboleta) com precisão técnica.",
    },
    {
      icon: Heart,
      mascot: mascotLuma,
      title: "Ludicidade e Motivação",
      description: "Gamificação, conquistas e abordagem lúdica para engajar alunos de todas as idades.",
      highlighted: true,
    },
  ];

  return (
    <section id="metodologia" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Wave divider */}
        <div className="flex justify-center mb-8">
          <Waves className="w-16 h-8 text-primary/30" />
        </div>

        {/* Mascot icons row */}
        <div className="flex justify-center gap-4 mb-8">
          <img src={mascotAcqua} alt="" className="w-12 h-12 md:w-16 md:h-16 rounded-full" />
          <img src={mascotDelfim} alt="" className="w-12 h-12 md:w-16 md:h-16 rounded-full" />
          <img src={mascotLuma} alt="" className="w-12 h-12 md:w-16 md:h-16 rounded-full" />
        </div>

        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Nossa Metodologia
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Um sistema completo e original, desenvolvido ao longo de 30 anos de experiência no ensino de natação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Card
                key={index}
                className={`p-6 hover:shadow-hover transition-smooth hover:-translate-y-2 animate-fade-in relative overflow-hidden ${
                  pillar.highlighted ? "border-primary/30 bg-primary/5" : ""
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                  <img src={pillar.mascot} alt="" className="w-8 h-8 rounded-full" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-foreground">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
                <img 
                  src={pillar.mascot} 
                  alt="" 
                  className="absolute bottom-2 right-2 w-12 h-12 rounded-full opacity-20"
                />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
