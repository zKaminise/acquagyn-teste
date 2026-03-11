import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, Send, Waves, MessageCircle } from "lucide-react";
import Bubbles from "@/components/home/Bubbles";
import WaveDivider from "@/components/home/WaveDivider";
import facilityReception from "@/assets/facility-reception-new2.jpg";
import nadadorImg from "@/assets/nadador.png";
import whatsappIcon from "@/assets/whatsapp-icon.png";

const contactInfo = [
  {
    icon: Phone,
    title: "Telefone / WhatsApp",
    content: "(34) 3217-1207",
    href: "https://wa.me/553432171207",
    isLink: true,
  },
  {
    icon: Mail,
    title: "E-mail",
    content: "michelampk31@gmail.com",
    href: "mailto:michelampk31@gmail.com",
    isLink: true,
  },
  {
    icon: MapPin,
    title: "Localização",
    content: "Rua Itabira 783, Daniel Fonseca, Uberlândia MG",
    isLink: false,
  },
  {
    icon: Clock,
    title: "Horário de Atendimento",
    content: "Segunda a Quinta: 06h30 às 20h00",
    isLink: false,
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero with background image */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={facilityReception}
            alt="Recepção Acquagyn"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>

        <Bubbles count={15} className="z-10" />

        <div className="container mx-auto px-4 py-20 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 text-sm px-4 py-2 bg-white/10 text-white border-white/20 hover:bg-white/20 animate-fade-in backdrop-blur-sm">
              <MessageCircle className="w-4 h-4 mr-2 inline animate-wave" />
              Fale Conosco
            </Badge>

            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 text-white animate-fade-in">
              Entre em{" "}
              <span className="text-gradient-animated">Contato</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto animate-fade-in">
              Estamos prontos para atendê-lo e começar sua jornada na natação.
              Agende uma aula experimental!
            </p>
          </div>
        </div>

        <WaveDivider />
      </section>

      {/* Contact Info Glassmorphism Blocks */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 text-center hover:shadow-hover hover:-translate-y-2 transition-all duration-500 animate-fade-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-full gradient-ocean flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:shadow-glow transition-all duration-500">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display font-bold text-sm mb-2">{item.title}</h3>
                {item.isLink ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-sm font-medium"
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="text-sm text-muted-foreground">{item.content}</p>
                )}
              </div>
            ))}
          </div>

          {/* CTA + WhatsApp */}
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden gradient-deep p-10 md:p-16 text-center animate-fade-in">
              {/* Animated wave background */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <svg className="absolute bottom-0 w-full opacity-10" viewBox="0 0 1440 200" preserveAspectRatio="none">
                  <path className="animate-water-shimmer" d="M0,120 C360,180 720,60 1080,120 C1260,150 1380,100 1440,80 L1440,200 L0,200 Z" fill="hsla(199,89%,48%,0.5)" />
                  <path className="animate-water-shimmer" style={{ animationDelay: "2s" }} d="M0,140 C240,80 600,180 960,100 C1200,50 1380,140 1440,120 L1440,200 L0,200 Z" fill="hsla(188,78%,41%,0.3)" />
                </svg>
              </div>

              <Bubbles count={8} />

              <div className="relative z-10">
                <div className="w-20 h-20 rounded-full overflow-hidden shadow-glow mx-auto mb-6 ring-4 ring-white/20 animate-pulse-glow">
                  <img src={nadadorImg} alt="Nadador" className="w-full h-full object-cover" />
                </div>

                <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
                  Aula Experimental Gratuita
                </h2>
                <p className="text-white/70 leading-relaxed max-w-xl mx-auto mb-8">
                  Conheça nossa metodologia na prática! Agende uma aula experimental
                  e descubra por que somos referência em natação há mais de 30 anos.
                </p>

                <a href="https://wa.me/553432171207" target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="lg" className="text-lg group relative overflow-hidden">
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-smooth" />
                    Agendar Aula Experimental
                    {/* Ripple shine */}
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                  </Button>
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-deep opacity-95" />
        <Bubbles count={8} />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <MapPin className="w-14 h-14 text-primary mx-auto mb-4 animate-float" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
                Venha nos <span className="text-gradient-animated">Visitar</span>
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                Nossa unidade está preparada para recebê-lo. Agende uma visita e conheça
                nossa estrutura completa com piscinas aquecidas e ambiente seguro.
              </p>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-glow ring-1 ring-white/10 h-80 md:h-[28rem]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.123456789!2d-48.2767!3d-18.9234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRua%20Itabira%2C%20783%20-%20Daniel%20Fonseca%2C%20Uberl%C3%A2ndia%20-%20MG!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Acquagyn"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
