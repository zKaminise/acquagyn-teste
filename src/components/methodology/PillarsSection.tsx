import mascotDelfim from "@/assets/mascot-delfim.jpg";
import mascotBibi from "@/assets/mascot-bibi.jpg";
import mascotLuma from "@/assets/mascot-luma.jpg";
import {
  ShieldWaterIcon,
  ProgressionIcon,
  StopwatchIcon,
  HeartPlayIcon,
} from "./MethodologyIcons";

const pillars = [
  {
    Icon: ShieldWaterIcon,
    mascot: null,
    title: "Segurança em Primeiro Lugar",
    description: "Protocolos rigorosos de segurança aquática e supervisão constante em todas as aulas.",
    gradient: "from-[hsl(199,89%,48%)] to-[hsl(188,78%,41%)]",
  },
  {
    Icon: ProgressionIcon,
    mascot: mascotDelfim,
    title: "Progressão Estruturada",
    description: "Metodologia com 9 níveis, do bebê ao adulto, com competências mensuráveis e claras.",
    gradient: "from-[hsl(188,78%,41%)] to-[hsl(199,95%,48%)]",
  },
  {
    Icon: StopwatchIcon,
    mascot: mascotBibi,
    title: "Técnica de Excelência",
    description: "Ensino dos 4 estilos (crawl, costas, peito, borboleta) com precisão técnica.",
    gradient: "from-[hsl(199,89%,48%)] to-[hsl(215,50%,35%)]",
  },
  {
    Icon: HeartPlayIcon,
    mascot: mascotLuma,
    title: "Ludicidade e Motivação",
    description: "Gamificação, conquistas e abordagem lúdica para engajar alunos de todas as idades.",
    gradient: "from-[hsl(188,78%,41%)] to-[hsl(199,89%,48%)]",
  },
];

const PillarsSection = () => {
  return (
    <section id="metodologia" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Water texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30 C10 20, 20 40, 30 30 C40 20, 50 40, 60 30' stroke='%230ea5e9' fill='none' stroke-width='1.5'/%3E%3C/svg%3E")`,
        backgroundSize: "60px 60px",
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-3">
            4 Pilares Fundamentais
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Nossa{" "}
            <span className="text-gradient-animated">Metodologia</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Um sistema completo e original, desenvolvido ao longo de 30 anos de experiência no ensino de natação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {pillars.map(({ Icon, mascot, title, description, gradient }, i) => (
            <div
              key={i}
              className="glass-card rounded-3xl p-6 sm:p-8 hover:shadow-hover hover:-translate-y-3 transition-all duration-500 group cursor-default relative overflow-hidden"
            >
              {/* Gradient accent top */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient}`} />

              <div className="flex items-start gap-5">
                <div className={`w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                  <Icon className="w-9 h-9 text-primary-foreground animate-wave" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-display text-lg sm:text-xl font-bold">{title}</h3>
                    {mascot && (
                      <img src={mascot} alt="" className="w-8 h-8 rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
