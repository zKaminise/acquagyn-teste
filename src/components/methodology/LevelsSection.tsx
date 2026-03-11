import { useEffect, useRef, useState } from "react";
import methodologyDiagram from "@/assets/methodology-diagram-new.jpg";
import mascotEstrelinha from "@/assets/mascot-estrelinha.jpg";
import mascotBibi from "@/assets/mascot-bibi.jpg";
import mascotAcqua from "@/assets/mascot-acqua.jpg";
import mascotTuca from "@/assets/mascot-tuca.jpg";
import mascotDelfim from "@/assets/mascot-delfim.jpg";
import mascotLuma from "@/assets/mascot-luma.jpg";
import mascotCaranguejo from "@/assets/mascot-caranguejo.jpg";
import mascotCavalo from "@/assets/mascot-cavalo.jpg";

const levels = [
  { name: "Baby 1", age: "6-12 meses", mascot: mascotEstrelinha, mascotName: "Stellinha", hue: "340" },
  { name: "Baby 2", age: "1-2 anos", mascot: mascotBibi, mascotName: "Bibi", hue: "30" },
  { name: "Baby 3", age: "2-3 anos", mascot: mascotAcqua, mascotName: "Acquinha", hue: "188" },
  { name: "Adaptação", age: "3-5 anos", mascot: mascotTuca, mascotName: "Tuquinha", hue: "210" },
  { name: "Iniciação", age: "5-7 anos", mascot: mascotDelfim, mascotName: "Delfi", hue: "220" },
  { name: "Aperfeiçoamento 1", age: "7-9 anos", mascot: mascotLuma, mascotName: "Luminha", hue: "280" },
  { name: "Aperfeiçoamento 2", age: "9-12 anos", mascot: mascotCaranguejo, mascotName: "Pitoco", hue: "0" },
  { name: "Aperfeiçoamento 3", age: "12+ anos", mascot: mascotCavalo, mascotName: "Hipinho", hue: "150" },
];

const LevelsSection = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set(prev).add(idx));
          }
        });
      },
      { threshold: 0.3 }
    );
    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 sm:py-28 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-3">
            Do Bebê ao Adulto
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Estrutura de{" "}
            <span className="text-gradient-animated">Níveis</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Cada nível possui objetivos claros, competências mensuráveis e critérios de progressão bem definidos.
          </p>
        </div>

        {/* Methodology diagram */}
        <div className="relative rounded-3xl overflow-hidden shadow-hover mb-16 max-w-4xl mx-auto group">
          <img
            src={methodologyDiagram}
            alt="Diagrama da metodologia de natação"
            className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[hsl(222,47%,11%)]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Horizontal Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10" />

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 lg:gap-3">
            {levels.map((level, i) => (
              <div
                key={i}
                ref={(el) => { itemRefs.current[i] = el; }}
                data-index={i}
                className={`flex flex-col items-center transition-all duration-700 ${
                  visibleItems.has(i) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Timeline dot */}
                <div
                  className="hidden lg:flex w-4 h-4 rounded-full border-2 border-primary bg-background mb-4 relative z-10 shadow-glow"
                  style={{
                    borderColor: `hsl(${level.hue}, 70%, 50%)`,
                    boxShadow: `0 0 12px -2px hsl(${level.hue}, 70%, 50%, 0.4)`,
                  }}
                />

                {/* Card */}
                <div className="glass-card rounded-2xl p-4 text-center w-full h-full min-h-[180px] flex flex-col items-center justify-start hover:shadow-hover hover:-translate-y-2 transition-all duration-500 group/card cursor-default">
                  <div className="relative mx-auto w-14 h-14 sm:w-16 sm:h-16 mb-3 flex-shrink-0">
                    <img
                      src={level.mascot}
                      alt={level.mascotName}
                      className="w-full h-full rounded-full object-cover ring-2 ring-primary/30 ring-offset-2 transition-all duration-300 group-hover/card:scale-110 group-hover/card:ring-4 group-hover/card:ring-primary/50 group-hover/card:rotate-3"
                    />
                  </div>
                  <h3 className="font-display text-sm sm:text-base font-bold mb-1 leading-tight">{level.name}</h3>
                  <p className="text-xs text-muted-foreground">{level.age}</p>
                  <p className="text-xs text-primary font-medium mt-1">{level.mascotName}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LevelsSection;
