import Bubbles from "@/components/home/Bubbles";
import WaveDivider from "@/components/home/WaveDivider";
import heroPool from "@/assets/hero-pool.jpg";
import { WaveIcon } from "@/components/home/AquaticIcons";

const HeroSection = () => {
  return (
    <section className="relative min-h-[75vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={heroPool} alt="Aula de natação" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(222,47%,11%)]/75 via-[hsl(199,89%,48%)]/15 to-[hsl(222,47%,11%)]/85" />
      </div>

      <Bubbles count={12} className="z-[1]" />

      {/* Floating icons */}
      <div className="absolute inset-0 z-[2] pointer-events-none hidden md:block">
        <WaveIcon className="absolute top-[25%] right-[8%] w-14 h-14 text-primary-foreground/10 animate-float" />
        <WaveIcon className="absolute bottom-[35%] left-[6%] w-10 h-10 text-primary-foreground/8 animate-float-slow" style={{ animationDelay: "3s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-28 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-primary-foreground/90 text-sm font-medium mb-6 animate-fade-in">
          <WaveIcon className="w-5 h-5" />
          <span>Metodologia exclusiva desde 1994</span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in leading-[1.1]">
          Metodologia{" "}
          <span className="text-accent">Acquagyn</span>
          <br />
          <span className="text-primary-foreground/70 text-2xl sm:text-3xl md:text-4xl font-normal">
            de Natação
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10 animate-fade-in leading-relaxed" style={{ animationDelay: "0.2s" }}>
          Sistema completo e original de ensino, do infantil ao adulto, com foco em{" "}
          <strong className="text-accent">segurança</strong>,{" "}
          <strong className="text-accent">técnica</strong> e{" "}
          <strong className="text-accent">progressão individualizada</strong>.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          {[
            { value: "30+", label: "Anos de Experiência" },
            { value: "9", label: "Níveis de Ensino" },
            { value: "100%", label: "Original e Segura" },
          ].map((stat, i) => (
            <div key={i} className="glass rounded-2xl px-6 py-4 text-center min-w-[120px] hover:bg-[hsla(0,0%,100%,0.12)] transition-all duration-300 group">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-primary-foreground/60 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <WaveDivider />
    </section>
  );
};

export default HeroSection;
