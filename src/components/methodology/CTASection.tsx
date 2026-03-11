import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Bubbles from "@/components/home/Bubbles";
import facilityPoolMain from "@/assets/facility-pool-main-new2.jpg";

const CTASection = () => {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={facilityPoolMain} alt="Piscina Acquagyn" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[hsl(222,47%,11%)]/80 backdrop-blur-sm" />
      </div>
      <Bubbles count={8} className="z-[1]" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
          Pronto para{" "}
          <span className="text-accent">Começar?</span>
        </h2>
        <p className="text-lg sm:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10">
          Agende sua aula experimental e descubra como a metodologia Acquagyn pode transformar seu aprendizado na natação.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://wa.me/553432171207" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 font-bold text-base sm:text-lg rounded-full px-10 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Agende sua aula experimental
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </a>
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
