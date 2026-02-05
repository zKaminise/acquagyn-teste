import { Card } from "@/components/ui/card";
import methodologyDiagram from "@/assets/methodology-diagram-new.jpg";
import mascotLuma from "@/assets/mascot-luma.jpg";
import mascotTuca from "@/assets/mascot-tuca.jpg";
import mascotAcqua from "@/assets/mascot-acqua.jpg";
import mascotBibi from "@/assets/mascot-bibi.jpg";
import mascotDelfim from "@/assets/mascot-delfim.jpg";

const LevelsSection = () => {
  const levels = [
    { name: "Baby Splash 1/2/3", age: "6-36 meses", mascot: mascotLuma, mascotName: "Luma", color: "bg-pink-100 border-pink-300" },
    { name: "Peixinhos 1/2", age: "3-5 anos", mascot: mascotLuma, mascotName: "Luma", color: "bg-pink-100 border-pink-300" },
    { name: "Ondas 1/2", age: "6-8 anos", mascot: mascotTuca, mascotName: "Tuca", color: "bg-blue-100 border-blue-300" },
    { name: "Marés 1/2/3", age: "9-11 anos", mascot: mascotAcqua, mascotName: "Acqua", color: "bg-cyan-100 border-cyan-300" },
    { name: "Correnteza", age: "12-14 anos", mascot: mascotBibi, mascotName: "Bibi", color: "bg-yellow-100 border-yellow-300" },
    { name: "Ritmo & Técnica", age: "15-17 anos", mascot: mascotAcqua, mascotName: "Acqua", color: "bg-cyan-100 border-cyan-300" },
    { name: "Adulto", age: "18+ anos", mascot: mascotDelfim, mascotName: "Acqua", color: "bg-green-100 border-green-300" },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Mascot icon */}
        <div className="flex justify-center mb-6">
          <img src={mascotBibi} alt="" className="w-12 h-12 md:w-16 md:h-16 rounded-full" />
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Estrutura de Níveis
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Do bebê ao adulto, cada nível possui objetivos claros, competências mensuráveis e critérios de progressão bem definidos.
          </p>
        </div>

        {/* Methodology diagram */}
        <div className="relative rounded-2xl overflow-hidden shadow-hover mb-12 hover:scale-[1.01] transition-smooth max-w-4xl mx-auto">
          <img
            src={methodologyDiagram}
            alt="Diagrama da metodologia de natação"
            className="w-full h-auto"
          />
        </div>

        {/* Levels grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {levels.map((level, index) => (
            <Card
              key={index}
              className={`p-4 flex items-center gap-4 hover:shadow-hover transition-smooth hover:-translate-y-1 animate-fade-in border-2 ${level.color}`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <img 
                src={level.mascot} 
                alt={level.mascotName}
                className="w-12 h-12 rounded-full flex-shrink-0"
              />
              <div>
                <h3 className="font-bold text-foreground">{level.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {level.age} • <span className="text-primary">{level.mascotName}</span>
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LevelsSection;
