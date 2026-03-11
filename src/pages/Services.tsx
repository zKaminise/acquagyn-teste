import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import heroPool from "@/assets/hero-pool.jpg";
import facilityPoolKids from "@/assets/facility-pool-kids.jpg";
import facilityPoolHidro from "@/assets/facility-hidro-class.jpg";
import facilityPoolMain from "@/assets/facility-pool-main-new2.jpg";
import Bubbles from "@/components/home/Bubbles";
import WaveDivider from "@/components/home/WaveDivider";
import { GogglesIcon, WaveRippleIcon, LifebuoyIcon } from "@/components/about/AboutIcons";
import { WaveIcon } from "@/components/home/AquaticIcons";

const Services = () => {
  const faqItems = [
    { q: "As Piscinas são aquecidas?", a: "Sim! Nossas piscinas possuem temperatura controlada para garantir conforto e segurança durante as aulas." },
    { q: "O que preciso levar para as aulas?", a: "Os alunos devem trazer maiô/sunga, touca, óculos de natação, toalha e chinelo. No caso da hidroginástica, recomendamos também roupas confortáveis para a prática aquática." },
    { q: "Posso fazer uma aula experimental antes de me matricular?", a: "Sim! Oferecemos uma aula experimental gratuita para que você possa conhecer nosso método e estrutura." },
    { q: "É necessário saber nadar para praticar Hidroginástica?", a: "Não. A hidroginástica é realizada em piscinas com profundidade segura e sempre com acompanhamento de um profissional qualificado." },
    { q: "Vocês fornecem materiais como pranchas e flutuadores?", a: "Sim! Todo o material necessário para as aulas é fornecido pela escola." },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroPool} alt="Serviços Acquagyn" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(222,47%,11%)]/80 via-[hsl(199,89%,48%)]/15 to-[hsl(222,47%,11%)]/85" />
        </div>
        <Bubbles count={10} className="z-[1]" />

        <div className="container mx-auto px-4 relative z-10 py-28 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-primary-foreground/90 text-sm font-medium mb-6 animate-fade-in">
            <WaveIcon className="w-5 h-5" />
            Nossos Serviços
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in leading-[1.1]">
            Serviços da{" "}
            <span className="text-accent">Acquagyn</span>
          </h1>
          <p className="text-lg sm:text-xl text-primary-foreground/70 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Descubra nossas modalidades e escolha a melhor opção para você e sua família
          </p>
        </div>

        <WaveDivider />
      </section>

      {/* Natação Infantil — Full-width feature block */}
      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4">
          <div className="relative rounded-3xl overflow-hidden min-h-[500px] flex items-center group">
            {/* Background image */}
            <div className="absolute inset-0 z-0">
              <img src={facilityPoolKids} alt="Natação infantil" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(222,47%,11%)]/90 via-[hsl(222,47%,11%)]/70 to-transparent" />
            </div>

            {/* Floating icon */}
            <div className="absolute top-8 right-8 hidden md:block z-[2]">
              <GogglesIcon className="w-20 h-20 text-accent/20 animate-float" />
            </div>

            <div className="relative z-10 p-8 sm:p-12 md:p-16 max-w-xl">
              <span className="inline-block text-sm font-semibold text-accent tracking-wider uppercase mb-4">
                Natação
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
                Natação Infantil
              </h2>
              <p className="text-primary-foreground/60 text-sm mb-2">Dos 6 meses aos 13 anos</p>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Aulas de natação para bebês, crianças e adolescentes.
                Nossa metodologia personalizada garante o desenvolvimento progressivo
                e seguro de cada aluno, com 8 níveis estruturados.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  "Turmas dos 6 meses aos 13 anos",
                  "Aulas 2x na semana",
                  "Planos mensais acessíveis",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                    <span className="text-sm text-primary-foreground/80">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a href="https://wa.me/553432171207" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 font-bold rounded-full px-8 hover:scale-105 transition-all duration-300">
                    Agendar Aula Experimental
                  </Button>
                </a>
                <Link to="/niveis">
                  <Button size="lg" variant="outline" className="border-accent/50 text-accent hover:bg-accent/10 hover:border-accent font-semibold rounded-full px-8">
                    Ver Níveis
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hidroginástica — Full-width feature block */}
      <section className="pb-20 sm:pb-28">
        <div className="container mx-auto px-4">
          <div className="relative rounded-3xl overflow-hidden min-h-[500px] flex items-center justify-end group">
            {/* Background image */}
            <div className="absolute inset-0 z-0">
              <img src={facilityPoolHidro} alt="Hidroginástica" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-l from-[hsl(222,47%,11%)]/90 via-[hsl(222,47%,11%)]/70 to-transparent" />
            </div>

            {/* Floating icon */}
            <div className="absolute top-8 left-8 hidden md:block z-[2]">
              <WaveRippleIcon className="w-20 h-20 text-accent/20 animate-float-slow" />
            </div>

            {/* Ripple hover effect */}
            <div className="absolute bottom-0 left-0 right-0 h-32 z-[1] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <svg viewBox="0 0 1440 100" fill="none" preserveAspectRatio="none" className="w-full h-full">
                <path d="M0 60C240 20 480 80 720 40C960 0 1200 60 1440 30V100H0Z" fill="hsl(199,89%,48%)" fillOpacity="0.08" />
              </svg>
            </div>

            <div className="relative z-10 p-8 sm:p-12 md:p-16 max-w-xl text-right ml-auto">
              <span className="inline-block text-sm font-semibold text-accent tracking-wider uppercase mb-4">
                Hidroginástica
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
                Hidroginástica
              </h2>
              <p className="text-primary-foreground/60 text-sm mb-2">Exercícios aquáticos para bem-estar</p>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Atividade física completa na água, ideal para todas as idades.
                Melhora o condicionamento físico, fortalece a musculatura e
                proporciona qualidade de vida.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  "Turmas para adultos e melhor idade",
                  "Aulas até 4x por semana",
                  "Baixo impacto, alto benefício",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 justify-end">
                    <span className="text-sm text-primary-foreground/80">{item}</span>
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                  </div>
                ))}
              </div>

              <a href="https://wa.me/553432171207" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 font-bold rounded-full px-8 hover:scale-105 transition-all duration-300">
                  Agendar Aula Experimental
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SESI Partnership — Highlight card with wave borders */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        {/* Wave top */}
        <div className="absolute top-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" className="w-full h-12 sm:h-16">
            <path d="M0 80C360 20 720 60 1080 30C1260 15 1380 50 1440 40V0H0V80Z" fill="hsl(var(--background))" />
          </svg>
        </div>

        <div className="absolute inset-0 gradient-deep" />
        <Bubbles count={8} className="z-[1]" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-primary-foreground/90 text-sm font-medium mb-6">
              <LifebuoyIcon className="w-5 h-5" />
              Parceria Especial
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Parceria com{" "}
              <span className="text-accent">SESI Roosevelt</span>
            </h2>
            <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
              Natação e Hidroginástica para toda a comunidade SESI
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-10">
            {/* Natação SESI */}
            <div className="glass rounded-3xl p-6 sm:p-8 hover:bg-[hsla(0,0%,100%,0.12)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl gradient-ocean flex items-center justify-center">
                  <WaveIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold text-primary-foreground">Natação no SESI</h3>
              </div>
              <p className="text-primary-foreground/70 text-sm mb-4 leading-relaxed">
                Aulas de natação para crianças e adultos nas instalações do SESI Roosevelt,
                com toda a qualidade e metodologia Acquagyn.
              </p>
              <div className="space-y-2">
                {["A partir de 2 anos", "Metodologia Acquagyn", "Professores qualificados"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-primary-foreground/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Hidro SESI */}
            <div className="glass rounded-3xl p-6 sm:p-8 hover:bg-[hsla(0,0%,100%,0.12)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl gradient-ocean flex items-center justify-center">
                  <WaveRippleIcon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold text-primary-foreground">Hidroginástica no SESI</h3>
              </div>
              <p className="text-primary-foreground/70 text-sm mb-4 leading-relaxed">
                Aulas de hidroginástica a partir de 15 anos, promovendo saúde
                e qualidade de vida.
              </p>
              <div className="space-y-2">
                {["Exercícios de baixo impacto", "Melhora do condicionamento físico", "Ambiente acolhedor"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-primary-foreground/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Location card */}
          <div className="max-w-5xl mx-auto">
            <div className="glass rounded-2xl p-5 flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="font-display font-bold text-primary-foreground text-sm">Localização SESI Roosevelt</h4>
                <p className="text-xs text-primary-foreground/60">
                  Aulas nas instalações do SESI Roosevelt com comodidade e facilidade de acesso.
                </p>
              </div>
            </div>

            <div className="text-center">
              <a href="https://wa.me/553432171207" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 font-bold rounded-full px-10 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  Agendar Aula no SESI
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" className="w-full h-12 sm:h-16">
            <path d="M0 0C240 60 480 20 720 50C960 80 1200 30 1440 60V80H0V0Z" fill="hsl(var(--background))" />
          </svg>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-3">
                Perguntas Frequentes
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Tire suas{" "}
                <span className="text-gradient-animated">Dúvidas</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Respostas para as perguntas mais comuns sobre nossos serviços
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-3">
              {faqItems.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="glass-card rounded-2xl px-6 border-0 data-[state=open]:shadow-hover transition-all duration-300"
                >
                  <AccordionTrigger className="text-left font-display font-bold hover:no-underline py-5 text-base">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
            Quer saber mais sobre{" "}
            <span className="text-accent">horários e valores?</span>
          </h2>
          <p className="text-lg sm:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10">
            Entre em contato e nossa equipe terá prazer em atendê-lo com todas as informações.
          </p>
          <Link to="/contato">
            <Button size="lg" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 font-bold text-lg rounded-full px-10 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Fale Conosco
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
