import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ShieldWaveIcon, TargetWaveIcon, TrophyIcon, SparkleWaveIcon } from "./AquaticIcons";

const features = [
  {
    Icon: ShieldWaveIcon,
    title: "Segurança Total",
    desc: "Protocolos rigorosos de segurança em todas as aulas, garantindo tranquilidade para alunos e famílias.",
  },
  {
    Icon: TargetWaveIcon,
    title: "Progressão Clara",
    desc: "9 níveis estruturados do bebê ao adulto, com evolução contínua e acompanhamento individual.",
  },
  {
    Icon: TrophyIcon,
    title: "Técnica Premium",
    desc: "Domínio dos 4 estilos de natação com precisão técnica e correções personalizadas.",
  },
  {
    Icon: SparkleWaveIcon,
    title: "Motivação",
    desc: "Sistema de mascotes e conquistas que mantém os alunos engajados e felizes na piscina.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden">
      {/* Subtle water texture background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30 C10 20, 20 40, 30 30 C40 20, 50 40, 60 30' stroke='%230ea5e9' fill='none' stroke-width='1.5'/%3E%3Cpath d='M0 45 C10 35, 20 55, 30 45 C40 35, 50 55, 60 45' stroke='%230ea5e9' fill='none' stroke-width='1'/%3E%3C/svg%3E")`,
        backgroundSize: "60px 60px",
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-3">
            Nossos Diferenciais
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Por que escolher a{" "}
            <span className="text-gradient-animated">Acquagyn?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expertise de mais de 30 anos levando qualidade de vida através da natação
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ Icon, title, desc }, i) => (
            <div
              key={i}
              className="group glass-card rounded-3xl p-6 sm:p-8 hover:shadow-hover hover:-translate-y-3 transition-all duration-500 cursor-default"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl gradient-ocean flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                <Icon className="w-9 h-9 sm:w-11 sm:h-11 text-primary-foreground animate-wave" />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold mb-2 text-center">{title}</h3>
              <p className="text-sm text-muted-foreground text-center leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/sobre">
            <Button size="lg" className="rounded-full px-8 group text-base font-semibold">
              Saiba Mais Sobre Nós
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
