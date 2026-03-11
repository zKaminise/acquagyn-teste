import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroPool from "@/assets/hero-pool.jpg";
import facilityPoolMain from "@/assets/facility-pool-main-new2.jpg";
import Bubbles from "@/components/home/Bubbles";
import WaveDivider from "@/components/home/WaveDivider";
import WaterGauge from "@/components/about/WaterGauge";
import {
  PoolLadderIcon,
  GogglesIcon,
  LifebuoyIcon,
  WaveRippleIcon,
  HeartWaterIcon,
  StarWaterIcon,
  HandsWaterIcon,
} from "@/components/about/AboutIcons";
import { ShieldWaveIcon } from "@/components/home/AquaticIcons";

const About = () => {
  const differentials = [
    {
      Icon: PoolLadderIcon,
      title: "Equipe Qualificada",
      description: "Instrutores experientes e especializados para garantir aprendizado seguro e eficiente.",
    },
    {
      Icon: GogglesIcon,
      title: "Piscinas Aquecidas",
      description: "Estrutura moderna e higienizada, com piscinas climatizadas para maior conforto.",
    },
    {
      Icon: LifebuoyIcon,
      title: "Ambiente Seguro",
      description: "Protocolos rigorosos de segurança aquática e supervisão constante.",
    },
    {
      Icon: WaveRippleIcon,
      title: "Todas as Idades",
      description: "Turmas para bebês, crianças, adultos e idosos, do iniciante ao avançado.",
    },
    {
      Icon: HeartWaterIcon,
      title: "Saúde e Bem-estar",
      description: "Fortalecimento cardiovascular, redução do estresse e melhora da disposição.",
    },
    {
      Icon: ShieldWaveIcon,
      title: "Horários Flexíveis",
      description: "Diferentes opções de horários que se ajustam à sua rotina diária.",
    },
  ];

  const values = [
    { Icon: StarWaterIcon, title: "Excelência", desc: "Compromisso inabalável com a qualidade no ensino e nos resultados." },
    { Icon: HeartWaterIcon, title: "Cuidado", desc: "Atenção individualizada e carinhosa a cada aluno que passa por nós." },
    { Icon: GogglesIcon, title: "Resultados", desc: "Foco no desenvolvimento real e na evolução contínua dos alunos." },
    { Icon: HandsWaterIcon, title: "Comunidade", desc: "Ambiente acolhedor e familiar que conecta pessoas pela paixão pela água." },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero — full image with gradient overlay */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroPool} alt="Aula de natação na Acquagyn" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(222,47%,11%)]/75 via-[hsl(199,89%,48%)]/20 to-[hsl(222,47%,11%)]/80" />
        </div>
        <Bubbles count={10} className="z-[1]" />

        <div className="container mx-auto px-4 relative z-10 py-32 text-center">
          <span className="inline-block text-sm font-semibold text-accent tracking-wider uppercase mb-4 animate-fade-in">
            Nossa História
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in leading-[1.1]">
            Sobre a{" "}
            <span className="text-accent">Acquagyn</span>
          </h1>
          <p className="text-lg sm:text-xl text-primary-foreground/70 max-w-2xl mx-auto animate-fade-in leading-relaxed" style={{ animationDelay: "0.2s" }}>
            Desde 1994, dedicados à educação e saúde por meio da natação e hidroginástica.
            Uma jornada de mais de 30 anos transformando vidas pela água.
          </p>
        </div>

        <WaveDivider />
      </section>

      {/* Nossa História — storytelling */}
      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-3">
                Tradição e Confiança
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Mais de 30 Anos de{" "}
                <span className="text-gradient-animated">História</span>
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
              <p>
                A <strong className="text-foreground">Acquagyn</strong> nasceu em 1994 com o objetivo de transformar vidas através da natação.
                Ao longo de três décadas, desenvolvemos uma metodologia única e original que já
                beneficiou milhares de alunos de todas as idades.
              </p>
              <p>
                Nossa experiência nos permitiu criar um sistema completo de ensino com <strong className="text-foreground">9 níveis
                estruturados</strong>, do bebê ao adulto avançado, sempre com foco em segurança, técnica
                e progressão individualizada.
              </p>
              <p>
                Hoje, somos referência em ensino de natação, reconhecidos pela qualidade dos
                nossos instrutores, estrutura moderna e resultados comprovados na cidade de <strong className="text-foreground">Uberlândia</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats with Water Gauges */}
      <section className="py-20 sm:py-28 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30 C10 20, 20 40, 30 30 C40 20, 50 40, 60 30' stroke='%230ea5e9' fill='none' stroke-width='1.5'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-3">
              Nossos Números
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
              Resultados que{" "}
              <span className="text-gradient-animated">Inspiram</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <WaterGauge value="30+" label="Anos de Tradição" percentage={95} delay={0} />
            <WaterGauge value="9" label="Níveis de Ensino" percentage={100} delay={200} />
            <WaterGauge value="1000+" label="Alunos Formados" percentage={85} delay={400} />
            <WaterGauge value="100%" label="Metodologia Original" percentage={100} delay={600} />
          </div>
        </div>
      </section>

      {/* Diferenciais — illustrated tiles */}
      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-3">
              O que nos torna únicos
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Nossos{" "}
              <span className="text-gradient-animated">Diferenciais</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cada detalhe pensado para proporcionar a melhor experiência na água
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {differentials.map(({ Icon, title, description }, i) => (
              <div
                key={i}
                className="glass-card rounded-3xl p-6 sm:p-8 hover:shadow-hover hover:-translate-y-3 transition-all duration-500 group cursor-default"
              >
                <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl gradient-ocean flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                  <Icon className="w-9 h-9 sm:w-10 sm:h-10 text-primary-foreground animate-wave" />
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores — glass cards with gradient */}
      <section className="py-20 sm:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-3">
              No que Acreditamos
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
              Nossos{" "}
              <span className="text-gradient-animated">Valores</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 max-w-6xl mx-auto">
            {values.map(({ Icon, title, desc }, i) => (
              <div
                key={i}
                className="relative rounded-3xl overflow-hidden group cursor-default"
              >
                {/* Gradient background */}
                <div className="absolute inset-0 gradient-ocean opacity-[0.07] group-hover:opacity-[0.12] transition-opacity duration-500" />
                <div className="glass-card rounded-3xl p-6 sm:p-8 text-center h-full hover:shadow-hover hover:scale-[1.03] transition-all duration-500">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-primary/15 transition-all duration-500">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary animate-wave" />
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-bold mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final — emotional CTA with background image */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={facilityPoolMain} alt="Ambiente da piscina Acquagyn" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[hsl(222,47%,11%)]/80 backdrop-blur-sm" />
        </div>
        <Bubbles count={8} className="z-[1]" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Faça Parte da Nossa
            <br />
            <span className="text-accent">História</span>
          </h2>
          <p className="text-lg sm:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10">
            Venha conhecer de perto a tradição, o cuidado e a experiência que fazem da Acquagyn referência em natação.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contato">
              <Button
                size="lg"
                className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 font-bold text-base sm:text-lg rounded-full px-10 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Fale Conosco
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/metodologia">
              <Button
                size="lg"
                variant="outline"
                className="border-accent/50 text-accent hover:bg-accent/10 hover:border-accent font-semibold text-base sm:text-lg rounded-full px-10"
              >
                Conheça a Metodologia
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
