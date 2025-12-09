import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel";
import { Waves, Award, Users, ArrowRight, Shield, Target, Sparkles, TrendingUp, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import heroPool from "@/assets/hero-pool.jpg";
import facilityPoolMain from "@/assets/facility-pool-main-new2.jpg";
import facilityReception from "@/assets/facility-reception-new2.jpg";
import facilityPoolHidro from "@/assets/facility-hidro-class.jpg";
import facilityMaterials from "@/assets/facility-materials-new.jpg";
import facilityAccessibility from "@/assets/facility-accessibility.jpg";

const Home = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const autoplayPlugin = Autoplay({
    delay: 4000,
    stopOnInteraction: true,
  });
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] sm:min-h-[90vh] flex items-center overflow-hidden pt-16 sm:pt-0">
        <div className="absolute inset-0 z-0">
          <img
            src={heroPool}
            alt="Piscina moderna da Acquagyn"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
        </div>

        <div className="container mx-auto px-4 py-12 sm:py-20 relative z-10">
          <div className="max-w-3xl">
            <Badge className="mb-3 sm:mb-4 text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 animate-fade-in">
              <Waves className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 inline animate-wave" />
              Desde 1994
            </Badge>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight animate-fade-in">
              <span className="text-gradient-animated">
                Acquagyn
              </span>
              <br />
              <span className="text-foreground">
                Educação e Saúde
              </span>
              <br />
              <span className="text-foreground/80 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                por meio da Natação
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed animate-fade-in">
              Sistema completo e original de ensino de natação, do infantil ao adulto, 
              com foco em <span className="text-primary font-semibold">segurança</span>, 
              <span className="text-primary font-semibold"> técnica</span> e 
              <span className="text-primary font-semibold"> progressão individualizada</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 animate-fade-in">
              <Link to="/metodologia" className="w-full sm:w-auto">
                <Button variant="hero" size="lg" className="text-sm sm:text-lg group w-full sm:w-auto">
                  Conheça a Metodologia
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-smooth" />
                </Button>
              </Link>
              <Link to="/contato" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="text-sm sm:text-lg border-2 w-full sm:w-auto">
                  Fale Conosco
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 animate-fade-in">
              <div className="bg-card/80 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-card hover:shadow-hover transition-smooth hover:scale-105">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Award className="w-6 h-6 sm:w-8 sm:h-8 text-primary animate-wave" />
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-primary">30+</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Anos de Experiência</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-card/80 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-card hover:shadow-hover transition-smooth hover:scale-105">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Waves className="w-6 h-6 sm:w-8 sm:h-8 text-primary animate-wave" style={{ animationDelay: "0.5s" }} />
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-primary">9</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Níveis de Ensino</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-card/80 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-card hover:shadow-hover transition-smooth hover:scale-105">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-primary animate-wave" style={{ animationDelay: "1s" }} />
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-primary">100%</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Original e Segura</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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

      {/* Quick Overview */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 animate-fade-in">
              Por que escolher a{" "}
              <span className="text-gradient-animated">
                Acquagyn?
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in px-4">
              Expertise de mais de 30 anos levando qualidade de vida através da natação
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {[
              { icon: Shield, title: "Segurança Total", desc: "Protocolos rigorosos em todas as aulas" },
              { icon: Target, title: "Progressão Clara", desc: "9 níveis estruturados do bebê ao adulto" },
              { icon: Award, title: "Técnica Premium", desc: "4 estilos com precisão técnica" },
              { icon: Sparkles, title: "Motivação", desc: "Gamificação e conquistas" },
            ].map((item, index) => (
              <Card
                key={index}
                className="p-4 sm:p-5 md:p-6 hover:shadow-hover transition-smooth hover:-translate-y-2 animate-fade-in text-center group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full gradient-ocean flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-smooth">
                  <item.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1 sm:mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{item.desc}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-10 md:mt-12 animate-fade-in">
            <Link to="/sobre">
              <Button variant="default" size="lg" className="group text-sm sm:text-base">
                Saiba Mais Sobre Nós
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-smooth" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Facilities Gallery Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 animate-fade-in">
              Nossas{" "}
              <span className="text-gradient-animated">
                Instalações
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in px-4">
              Conheça nosso espaço moderno e seguro, projetado para sua melhor experiência
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Carousel 
              setApi={setApi} 
              className="w-full"
              plugins={[autoplayPlugin]}
              opts={{
                loop: true,
              }}
            >
              <CarouselContent>
                {[
                  { image: facilityPoolMain, title: "Piscina Principal", desc: "Piscina aquecida com raias profissionais e iluminação ideal" },
                  { image: facilityReception, title: "Recepção", desc: "Ambiente acolhedor com equipe pronta para atendê-lo" },
                  { image: facilityPoolHidro, title: "Aula de Hidroginástica", desc: "Turmas de hidroginástica com instrutores qualificados" },
                  { image: facilityMaterials, title: "Materiais de Qualidade", desc: "Equipamentos modernos e materiais para todas as aulas" },
                  { image: facilityAccessibility, title: "Acessibilidade", desc: "Escada de acesso com corrimão para entrada segura na piscina" },
                ].map((facility, index) => (
                  <CarouselItem key={index}>
                    <Card className="overflow-hidden border-0 shadow-hover">
                      <div className="relative aspect-video">
                        <img
                          src={facility.image}
                          alt={facility.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-center">
                          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2 text-foreground">
                            {facility.title}
                          </h3>
                          <p className="text-muted-foreground text-sm sm:text-base md:text-lg line-clamp-2">
                            {facility.desc}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 sm:left-4 h-8 w-8 sm:h-10 sm:w-10" />
              <CarouselNext className="right-2 sm:right-4 h-8 w-8 sm:h-10 sm:w-10" />
            </Carousel>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`h-1.5 sm:h-2 rounded-full transition-all ${
                    index === current
                      ? "w-6 sm:w-8 bg-primary"
                      : "w-1.5 sm:w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Ir para imagem ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-8 sm:mt-10 md:mt-12 animate-fade-in">
            <Link to="/contato">
              <Button variant="default" size="lg" className="group text-sm sm:text-base">
                <Building2 className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Agende uma Visita
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-smooth" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="relative rounded-xl sm:rounded-2xl gradient-ocean p-6 sm:p-10 md:p-12 lg:p-16 text-center text-white overflow-hidden shadow-hover">
            <div className="absolute top-0 right-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-white/10 rounded-full blur-3xl animate-ripple pointer-events-none -z-0" />
            <div className="absolute bottom-0 left-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-white/10 rounded-full blur-3xl animate-ripple pointer-events-none -z-0" style={{ animationDelay: "1s" }} />
            
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 animate-fade-in">
                Comece Sua Jornada na Natação Hoje!
              </h2>
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-white/90 max-w-2xl mx-auto animate-fade-in">
                Agende uma aula experimental gratuita e descubra nossa metodologia exclusiva
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in">
                <Link to="/contato" className="w-full sm:w-auto">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold text-sm sm:text-base md:text-lg w-full sm:w-auto">
                    Agendar Aula Experimental
                  </Button>
                </Link>
                <Link to="/niveis" className="w-full sm:w-auto">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold text-sm sm:text-base md:text-lg w-full sm:w-auto">
                    Ver Níveis de Ensino
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
