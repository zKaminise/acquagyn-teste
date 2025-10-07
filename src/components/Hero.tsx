import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Waves, Award, Users } from "lucide-react";
import heroPool from "@/assets/hero-pool.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroPool}
          alt="Piscina moderna da Acquagyn"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl">
          <Badge className="mb-4 text-sm px-4 py-2 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
            <Waves className="w-4 h-4 mr-2 inline" />
            Desde 1994
          </Badge>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in">
            <span className="gradient-ocean bg-clip-text text-transparent">
              Acquagyn
            </span>
            <br />
            <span className="text-foreground">
              Educação e Saúde
            </span>
            <br />
            <span className="text-foreground/80 text-4xl md:text-5xl lg:text-6xl">
              por meio da Natação
            </span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in">
            Sistema completo e original de ensino de natação, do infantil ao adulto, 
            com foco em <span className="text-primary font-semibold">segurança</span>, 
            <span className="text-primary font-semibold"> técnica</span> e 
            <span className="text-primary font-semibold"> progressão individualizada</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in">
            <Button
              variant="hero"
              size="lg"
              onClick={() => scrollToSection("metodologia")}
              className="text-lg"
            >
              Conheça a Metodologia
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contato")}
              className="text-lg border-2"
            >
              Fale Conosco
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fade-in">
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-4 shadow-card">
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 text-primary" />
                <div>
                  <div className="text-3xl font-bold text-primary">30+</div>
                  <div className="text-sm text-muted-foreground">Anos de Experiência</div>
                </div>
              </div>
            </div>
            
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-4 shadow-card">
              <div className="flex items-center gap-3">
                <Waves className="w-8 h-8 text-primary" />
                <div>
                  <div className="text-3xl font-bold text-primary">9</div>
                  <div className="text-sm text-muted-foreground">Níveis de Ensino</div>
                </div>
              </div>
            </div>
            
            <div className="bg-card/80 backdrop-blur-sm rounded-lg p-4 shadow-card">
              <div className="flex items-center gap-3">
                <Users className="w-8 h-8 text-primary" />
                <div>
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Original e Segura</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-20 text-background"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
