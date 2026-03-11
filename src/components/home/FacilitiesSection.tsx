import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import facilityPoolMain from "@/assets/facility-pool-main-new2.jpg";
import facilityReception from "@/assets/facility-reception-new2.jpg";
import facilityPoolHidro from "@/assets/facility-hidro-class.jpg";
import facilityMaterials from "@/assets/facility-materials-new.jpg";
import facilityAccessibility from "@/assets/facility-accessibility.jpg";

const facilities = [
  { image: facilityPoolMain, title: "Piscina Principal", desc: "Piscina aquecida com raias profissionais e iluminação ideal" },
  { image: facilityReception, title: "Recepção", desc: "Ambiente acolhedor com equipe pronta para atendê-lo" },
  { image: facilityPoolHidro, title: "Aula de Hidroginástica", desc: "Turmas de hidroginástica com instrutores qualificados" },
  { image: facilityMaterials, title: "Materiais de Qualidade", desc: "Equipamentos modernos e materiais para todas as aulas" },
  { image: facilityAccessibility, title: "Acessibilidade", desc: "Escada de acesso com corrimão para entrada segura na piscina" },
];

const FacilitiesSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  const autoplayPlugin = Autoplay({ delay: 4000, stopOnInteraction: true });

  return (
    <section className="py-20 sm:py-28 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-3">
            Nosso Espaço
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Nossas{" "}
            <span className="text-gradient-animated">Instalações</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça nosso espaço moderno e seguro, projetado para sua melhor experiência
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel setApi={setApi} plugins={[autoplayPlugin]} opts={{ loop: true }} className="w-full">
            <CarouselContent>
              {facilities.map((f, i) => (
                <CarouselItem key={i}>
                  <div className="rounded-3xl overflow-hidden group relative shadow-hover">
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={f.image}
                        alt={f.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(222,47%,11%)] via-[hsl(222,47%,11%)]/40 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-center">
                        <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-primary-foreground mb-1">
                          {f.title}
                        </h3>
                        <p className="text-primary-foreground/70 text-sm sm:text-base">{f.desc}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-3 sm:left-5 h-10 w-10 sm:h-12 sm:w-12 rounded-full glass border-0 text-primary-foreground hover:bg-[hsla(0,0%,100%,0.2)]" />
            <CarouselNext className="right-3 sm:right-5 h-10 w-10 sm:h-12 sm:w-12 rounded-full glass border-0 text-primary-foreground hover:bg-[hsla(0,0%,100%,0.2)]" />
          </Carousel>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8 h-2.5 bg-primary shadow-glow"
                    : "w-2.5 h-2.5 bg-muted-foreground/25 hover:bg-muted-foreground/40"
                }`}
                aria-label={`Ir para imagem ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link to="/contato">
            <Button size="lg" className="rounded-full px-8 group text-base font-semibold">
              Agende uma Visita
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
