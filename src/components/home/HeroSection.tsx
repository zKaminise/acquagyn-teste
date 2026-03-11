import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroPool from "@/assets/hero-pool.jpg";
import Bubbles from "./Bubbles";
import WaveDivider from "./WaveDivider";
import { WaveIcon, SwimmerIcon, DropletIcon } from "./AquaticIcons";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img src={heroPool} alt="Piscina Acquagyn" className="w-full h-full object-cover scale-105" />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(222,47%,11%)]/80 via-[hsl(222,47%,11%)]/60 to-[hsl(199,89%,48%)]/30" />
      </div>

      {/* Water shimmer effect */}
      <div className="absolute inset-0 z-[1] animate-water-shimmer opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[hsl(199,95%,74%)]/20 to-transparent" />
      </div>

      {/* Bubbles */}
      <Bubbles count={15} className="z-[2]" />

      {/* Floating aquatic icons */}
      <div className="absolute inset-0 z-[2] pointer-events-none hidden md:block">
        <WaveIcon className="absolute top-[20%] right-[10%] w-16 h-16 text-primary-foreground/10 animate-float" />
        <DropletIcon className="absolute top-[35%] left-[8%] w-12 h-12 text-primary-foreground/10 animate-float" style={{ animationDelay: "4s" }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-24 pb-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-primary-foreground/90 text-sm font-medium mb-6 animate-fade-in">
            <WaveIcon className="w-5 h-5" />
            <span>Desde 1994 • Uberlândia, MG</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] animate-fade-in text-primary-foreground">
            <span className="block">Acquagyn</span>
            <span className="block text-accent text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mt-2">
              Educação e Saúde
            </span>
            <span className="block text-primary-foreground/70 text-2xl sm:text-3xl md:text-4xl font-normal mt-2">
              por meio da Natação
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-primary-foreground/70 mb-8 leading-relaxed max-w-xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Sistema completo e original de ensino de natação, do infantil ao adulto,
            com foco em segurança, técnica e progressão individualizada.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Link to="/metodologia">
              <Button
                size="lg"
                className="relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90 text-base sm:text-lg font-semibold rounded-full px-8 group shadow-glow animate-pulse-glow"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Conheça a Metodologia
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-shift" />
              </Button>
            </Link>
            <Link to="/contato">
              <Button
                size="lg"
                variant="outline"
                className="text-base sm:text-lg font-semibold rounded-full px-8 border-accent/50 text-accent hover:bg-accent/10 hover:border-accent"
              >
                Fale Conosco
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {[
              { value: "30+", label: "Anos de Experiência" },
              { value: "9", label: "Níveis de Ensino" },
              { value: "100%", label: "Original e Segura" },
            ].map((stat, i) => (
              <div
                key={i}
                className="glass rounded-2xl p-4 text-center hover:bg-[hsla(0,0%,100%,0.12)] transition-all duration-300 group"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-primary-foreground/60 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <WaveDivider />
    </section>
  );
};

export default HeroSection;
