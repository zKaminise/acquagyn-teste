import { SVGProps } from "react";
import { ShieldWaterIcon, StopwatchIcon, PoolLaneIcon } from "./MethodologyIcons";
import { SparkleWaveIcon, TrophyIcon } from "@/components/home/AquaticIcons";
import { LifebuoyIcon } from "@/components/about/AboutIcons";

type IconComponent = (props: SVGProps<SVGSVGElement>) => JSX.Element;

const differentials: { Icon: IconComponent; title: string; description: string }[] = [
  { Icon: TrophyIcon, title: "Gamificação & Conquistas", description: "Sistema de selos, passaporte do nadador e desafios mensais para engajar e motivar os alunos." },
  { Icon: LifebuoyIcon, title: "Inclusão & Acessibilidade", description: "Adaptações específicas para TEA, TDAH, mobilidade reduzida e fobias aquáticas." },
  { Icon: PoolLaneIcon, title: "Competências Mensuráveis", description: "Objetivos claros e critérios de progressão bem definidos para cada nível." },
  { Icon: StopwatchIcon, title: "Planos de Aula Prontos", description: "Templates completos com aquecimento, técnica, drills, jogos e feedback estruturado." },
  { Icon: ShieldWaterIcon, title: "Comunicação Efetiva", description: "Boletins, QR codes com vídeos e guias para engajamento de responsáveis e adultos." },
  { Icon: SparkleWaveIcon, title: "Mascotes & Identidade", description: "Acqua, Tuca, Luma e Bibi: personagens que tornam o aprendizado lúdico e memorável." },
];

const DifferentialsSection = () => {
  return (
    <section className="py-20 sm:py-28 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='40' viewBox='0 0 80 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20C10 10 20 30 30 20C40 10 50 30 60 20C70 10 80 20 80 20' stroke='%230ea5e9' fill='none' stroke-width='1.5'/%3E%3C/svg%3E")`,
        backgroundSize: "80px 40px",
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-3">
            O que nos torna únicos
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Diferenciais da{" "}
            <span className="text-gradient-animated">Metodologia</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Recursos exclusivos que tornam a Acquagyn única no mercado de ensino de natação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto">
          {differentials.map(({ Icon, title, description }, i) => (
            <div
              key={i}
              className="glass-card rounded-3xl p-6 sm:p-8 hover:shadow-hover hover:-translate-y-3 transition-all duration-500 group cursor-default"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl gradient-ocean flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                <Icon className="w-8 h-8 text-primary-foreground animate-wave" />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
