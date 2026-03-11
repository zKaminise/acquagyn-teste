import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Bubbles from "./Bubbles";
import WaveDivider from "./WaveDivider";

const CTASection = () => {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 gradient-deep" />

      {/* Wave top */}
      <WaveDivider flip className="!z-20" />

      {/* Bubbles */}
      <Bubbles count={10} className="z-[1]" />

      {/* Animated wave shapes */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <svg className="absolute bottom-0 left-0 w-full opacity-10" viewBox="0 0 1440 200" preserveAspectRatio="none">
          <path d="M0 100C360 40 720 160 1080 80C1260 40 1380 100 1440 100V200H0V100Z" fill="hsl(199,89%,48%)" />
        </svg>
        <svg className="absolute bottom-0 left-0 w-full opacity-5" viewBox="0 0 1440 200" preserveAspectRatio="none">
          <path d="M0 140C240 80 480 180 720 120C960 60 1200 160 1440 100V200H0V140Z" fill="hsl(199,95%,74%)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary-foreground">
          Comece Sua Jornada na
          <br />
          <span className="text-accent">Natação Hoje!</span>
        </h2>
        <p className="text-lg sm:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10">
          Agende uma aula experimental gratuita e descubra nossa metodologia exclusiva
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contato">
            <Button
              size="lg"
              className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 font-bold text-base sm:text-lg rounded-full px-10 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Agendar Aula Experimental
            </Button>
          </Link>
          <Link to="/niveis">
            <Button
              size="lg"
              variant="outline"
              className="border-accent/50 text-accent hover:bg-accent/10 hover:border-accent font-semibold text-base sm:text-lg rounded-full px-10"
            >
              Ver Níveis de Ensino
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
