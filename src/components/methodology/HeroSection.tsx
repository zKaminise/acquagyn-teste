import { Button } from "@/components/ui/button";
import { Waves } from "lucide-react";
import mascotTuca from "@/assets/mascot-tuca.jpg";

const HeroSection = () => {
  return (
    <section className="relative py-12 md:py-20 bg-gradient-to-b from-primary/5 to-background overflow-hidden min-h-[80vh] flex items-center">
      {/* Decorative mascots */}
      <img 
        src={mascotTuca} 
        alt="" 
        className="absolute top-10 left-4 w-12 h-12 md:w-16 md:h-16 rounded-full opacity-30 animate-float"
      />
      <img 
        src={mascotTuca} 
        alt="" 
        className="absolute top-20 right-8 w-10 h-10 md:w-14 md:h-14 rounded-full opacity-30 animate-float"
        style={{ animationDelay: "1s" }}
      />
      <img 
        src={mascotTuca} 
        alt="" 
        className="absolute bottom-32 right-12 w-12 h-12 md:w-16 md:h-16 rounded-full opacity-30 animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Mascot */}
          <div className="w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 flex-shrink-0 animate-fade-in">
            <img
              src={mascotTuca}
              alt="Mascote Tuca - Tartaruga"
              className="w-full h-full object-contain rounded-full shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="text-center lg:text-left flex-1">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 animate-fade-in">
              <Waves className="w-4 h-4" />
              <span className="text-sm font-medium">Desde 1994</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in text-foreground">
              Metodologia Acquagyn{" "}
              <span className="text-primary">de Natação</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl animate-fade-in">
              Sistema completo e original de ensino de natação, do infantil ao adulto, com foco em{" "}
              <span className="font-semibold text-foreground">segurança, técnica e progressão</span>{" "}
              individualizada.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-fade-in">
              <a href="#metodologia">
                <Button variant="hero" size="lg">
                  Conheça a Metodologia
                </Button>
              </a>
              <Button variant="outline" size="lg">
                Baixar Materiais
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 md:gap-12 animate-fade-in">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">30+</div>
                <div className="text-sm text-muted-foreground">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">9</div>
                <div className="text-sm text-muted-foreground">Níveis de Ensino</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Original e Segura</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 text-primary/10">
          <path d="M0,60 C300,120 600,0 900,60 C1050,90 1150,60 1200,60 L1200,120 L0,120 Z" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
