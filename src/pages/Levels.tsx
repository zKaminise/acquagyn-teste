import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroPool from "@/assets/hero-pool.jpg";
import facilityPoolMain from "@/assets/facility-pool-main-new2.jpg";
import mascotAcqua from "@/assets/mascot-acqua.jpg";
import mascotTuca from "@/assets/mascot-tuca.jpg";
import mascotLuma from "@/assets/mascot-luma.jpg";
import mascotBibi from "@/assets/mascot-bibi.jpg";
import mascotDelfim from "@/assets/mascot-delfim.jpg";
import mascotEstrelinha from "@/assets/mascot-estrelinha.jpg";
import mascotCavalo from "@/assets/mascot-cavalo.jpg";
import mascotCaranguejo from "@/assets/mascot-caranguejo.jpg";
import Bubbles from "@/components/home/Bubbles";
import WaveDivider from "@/components/home/WaveDivider";
import { WaveIcon } from "@/components/home/AquaticIcons";

const levels = [
  {
    mascot: mascotEstrelinha, mascotName: "Stellinha", name: "Baby 1", age: "6-12 meses",
    gradient: "from-pink-400 to-rose-500", dot: "bg-pink-400",
    description: "Primeiro contato com o ambiente aquático através de estímulos sensoriais",
    skills: ["Familiarização com água", "Estímulos sensoriais", "Brincadeiras aquáticas", "Vínculo pais-bebê"],
  },
  {
    mascot: mascotBibi, mascotName: "Bibi", name: "Baby 2", age: "1-2 anos",
    gradient: "from-orange-400 to-amber-500", dot: "bg-orange-400",
    description: "Desenvolvimento da confiança aquática com atividades lúdicas",
    skills: ["Imersão básica", "Coordenação inicial", "Movimentos exploratórios", "Autonomia crescente"],
  },
  {
    mascot: mascotAcqua, mascotName: "Acquinha", name: "Baby 3", age: "2-3 anos",
    gradient: "from-amber-400 to-yellow-500", dot: "bg-amber-400",
    description: "Preparação para independência aquática através de jogos e desafios",
    skills: ["Flutuação assistida", "Propulsão inicial", "Mergulhos simples", "Primeiros deslocamentos"],
  },
  {
    mascot: mascotTuca, mascotName: "Tuquinha", name: "Adaptação", age: "3-5 anos",
    gradient: "from-emerald-400 to-green-500", dot: "bg-emerald-400",
    description: "Adaptação ao meio aquático com foco em segurança e confiança",
    skills: ["Flutuação independente", "Respiração básica", "Propulsão de pernas", "Deslocamentos curtos"],
  },
  {
    mascot: mascotDelfim, mascotName: "Delfi", name: "Iniciação", age: "5-7 anos",
    gradient: "from-sky-400 to-blue-500", dot: "bg-sky-400",
    description: "Início do aprendizado técnico dos movimentos básicos da natação",
    skills: ["Crawl básico", "Costas inicial", "Coordenação pernas/braços", "Respiração lateral"],
  },
  {
    mascot: mascotLuma, mascotName: "Luminha", name: "Aperfeiçoamento 1", age: "7-9 anos",
    gradient: "from-blue-400 to-indigo-500", dot: "bg-blue-400",
    description: "Desenvolvimento técnico com refinamento dos estilos crawl e costas",
    skills: ["Crawl refinado", "Costas técnico", "Distâncias médias", "Viradas básicas"],
  },
  {
    mascot: mascotCaranguejo, mascotName: "Pitoco", name: "Aperfeiçoamento 2", age: "9-12 anos",
    gradient: "from-indigo-400 to-purple-500", dot: "bg-indigo-400",
    description: "Aprimoramento técnico com introdução aos estilos peito e borboleta",
    skills: ["Peito completo", "Borboleta inicial", "Resistência aumentada", "Técnica apurada"],
  },
  {
    mascot: mascotCavalo, mascotName: "Hipinho", name: "Aperfeiçoamento 3", age: "12+ anos",
    gradient: "from-purple-500 to-violet-600", dot: "bg-purple-500",
    description: "Domínio dos quatro estilos com foco em performance e condicionamento",
    skills: ["4 estilos completos", "Viradas e saídas", "Velocidade e resistência", "Treino específico"],
  },
];

const Levels = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set(prev).add(idx));
          }
        });
      },
      { threshold: 0.2 }
    );
    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroPool} alt="Níveis de ensino" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(222,47%,11%)]/80 via-[hsl(199,89%,48%)]/15 to-[hsl(222,47%,11%)]/85" />
        </div>
        <Bubbles count={10} className="z-[1]" />

        <div className="container mx-auto px-4 relative z-10 py-28 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-primary-foreground/90 text-sm font-medium mb-6 animate-fade-in">
            <WaveIcon className="w-5 h-5" />
            Jornada de Aprendizado
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in leading-[1.1]">
            Níveis de{" "}
            <span className="text-accent">Ensino</span>
          </h1>
          <p className="text-lg sm:text-xl text-primary-foreground/70 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            8 níveis estruturados do bebê ao adolescente, cada um com objetivos claros
            e competências mensuráveis
          </p>
        </div>

        <WaveDivider />
      </section>

      {/* Levels Journey */}
      <section className="py-20 sm:py-28 relative overflow-hidden">
        {/* Pool tile pattern background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='40' height='40' fill='none' stroke='%230ea5e9' stroke-width='0.5'/%3E%3Crect x='1' y='1' width='18' height='18' rx='2' fill='none' stroke='%230ea5e9' stroke-width='0.5'/%3E%3Crect x='21' y='1' width='18' height='18' rx='2' fill='none' stroke='%230ea5e9' stroke-width='0.5'/%3E%3Crect x='1' y='21' width='18' height='18' rx='2' fill='none' stroke='%230ea5e9' stroke-width='0.5'/%3E%3Crect x='21' y='21' width='18' height='18' rx='2' fill='none' stroke='%230ea5e9' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: "40px 40px",
        }} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto relative">
            {/* Vertical water lane line */}
            <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-1 sm:-translate-x-1/2 z-0">
              <div className="w-full h-full bg-gradient-to-b from-pink-300 via-blue-400 to-purple-500 rounded-full opacity-20" />
              {/* Animated water flow */}
              <div className="absolute inset-0 w-full overflow-hidden rounded-full">
                <div
                  className="w-full bg-gradient-to-b from-transparent via-accent/40 to-transparent"
                  style={{
                    height: "30%",
                    animation: "float 4s ease-in-out infinite",
                  }}
                />
              </div>
            </div>

            {/* Level cards */}
            <div className="space-y-8 sm:space-y-12 relative z-10">
              {levels.map((level, i) => {
                const isLeft = i % 2 === 0;

                return (
                  <div
                    key={i}
                    ref={(el) => { itemRefs.current[i] = el; }}
                    data-index={i}
                    className={`relative flex items-start gap-4 sm:gap-0 transition-all duration-700 ${
                      visibleItems.has(i) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                    }`}
                    style={{ transitionDelay: `${i * 80}ms` }}
                  >
                    {/* Timeline dot — mobile */}
                    <div className="sm:hidden flex-shrink-0 relative z-20">
                      <div className={`w-16 h-16 rounded-full overflow-hidden ring-4 ring-background shadow-lg`}>
                        <img src={level.mascot} alt={level.mascotName} className="w-full h-full object-cover" />
                      </div>
                    </div>

                    {/* Desktop layout */}
                    <div className={`hidden sm:grid sm:grid-cols-[1fr_auto_1fr] gap-6 w-full items-center`}>
                      {/* Left content / spacer */}
                      <div className={isLeft ? "" : "order-3"}>
                        <div className={`glass-card rounded-3xl p-6 hover:shadow-hover hover:-translate-y-2 transition-all duration-500 group cursor-default ${isLeft ? "text-right" : "text-left"}`}>
                          {/* Gradient accent */}
                          <div className={`h-1 rounded-full bg-gradient-to-r ${level.gradient} mb-4 ${isLeft ? "ml-auto w-20" : "w-20"}`} />

                          <div className={`flex items-center gap-3 mb-3 ${isLeft ? "justify-end" : ""}`}>
                            <div className={`${isLeft ? "order-2" : ""}`}>
                              <h3 className="font-display text-xl sm:text-2xl font-bold">{level.name}</h3>
                              <span className="text-xs text-primary font-semibold">{level.age} • {level.mascotName}</span>
                            </div>
                          </div>

                          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{level.description}</p>

                          <div className={`grid grid-cols-2 gap-2 ${isLeft ? "text-left" : ""}`}>
                            {level.skills.map((skill, j) => (
                              <div key={j} className="flex items-center gap-2 p-2 bg-muted/50 rounded-xl text-xs group-hover:bg-muted/80 transition-colors">
                                <div className={`w-1.5 h-1.5 rounded-full ${level.dot} flex-shrink-0`} />
                                <span>{skill}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Center: mascot on timeline */}
                      <div className="flex flex-col items-center relative z-20 order-2">
                        <div className="w-20 h-20 rounded-full overflow-hidden ring-4 ring-background shadow-lg group cursor-pointer hover:scale-110 hover:rotate-6 transition-all duration-500">
                          <img src={level.mascot} alt={level.mascotName} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <span className="text-[10px] font-bold text-primary mt-1">{level.mascotName}</span>
                      </div>

                      {/* Right spacer / content */}
                      <div className={isLeft ? "order-3" : ""} />
                    </div>

                    {/* Mobile card */}
                    <div className="sm:hidden flex-1">
                      <div className="glass-card rounded-2xl p-4 hover:shadow-hover transition-all duration-300">
                        <div className={`h-1 rounded-full bg-gradient-to-r ${level.gradient} mb-3 w-16`} />
                        <h3 className="font-display text-lg font-bold">{level.name}</h3>
                        <span className="text-xs text-primary font-semibold">{level.age} • {level.mascotName}</span>
                        <p className="text-xs text-muted-foreground mt-2 mb-3 leading-relaxed">{level.description}</p>
                        <div className="grid grid-cols-2 gap-1.5">
                          {level.skills.map((skill, j) => (
                            <div key={j} className="flex items-center gap-1.5 p-1.5 bg-muted/50 rounded-lg text-[11px]">
                              <div className={`w-1.5 h-1.5 rounded-full ${level.dot} flex-shrink-0`} />
                              <span>{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Journey end marker */}
            <div className="flex justify-center mt-12">
              <div className="glass-card rounded-2xl px-6 py-3 text-center">
                <span className="text-2xl">🏆</span>
                <p className="font-display font-bold text-sm text-primary mt-1">Jornada Completa!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={facilityPoolMain} alt="Piscina Acquagyn" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[hsl(222,47%,11%)]/80 backdrop-blur-sm" />
        </div>
        <Bubbles count={8} className="z-[1]" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Encontre o Nível{" "}
            <span className="text-accent">Ideal</span>
          </h2>
          <p className="text-lg sm:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10">
            Nossa equipe especializada irá avaliar seu perfil e indicar o nível mais adequado
            para iniciar sua jornada na natação
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/553432171207" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 font-bold text-lg rounded-full px-10 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                Agende Sua Avaliação
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
            <Link to="/mascotes">
              <Button size="lg" variant="outline" className="border-accent/50 text-accent hover:bg-accent/10 hover:border-accent font-semibold text-lg rounded-full px-10">
                Conheça os Mascotes
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Levels;
