import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-b from-primary/5 to-background overflow-hidden pt-20 sm:pt-24 md:pt-28">
        <div className="absolute inset-0 opacity-5 pointer-events-none -z-10">
          <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary rounded-full blur-3xl animate-ripple" />
          <div className="absolute bottom-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-secondary rounded-full blur-3xl animate-ripple" style={{ animationDelay: "1s" }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 animate-fade-in">
              Entre em{" "}
              <span className="text-gradient-animated">
                Contato
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-in px-2">
              Estamos prontos para atendê-lo e começar sua jornada na natação. 
              Agende uma aula experimental e conheça nossa metodologia na prática!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {/* Contact Info */}
            <Card className="p-5 sm:p-6 md:p-8 space-y-4 sm:space-y-5 md:space-y-6 shadow-card hover:shadow-hover transition-smooth animate-fade-in">
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-foreground">
                  Informações de Contato
                </h2>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-smooth">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Telefone / WhatsApp</h3>
                  <a
                    href="https://wa.me/553432171207"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-sm sm:text-base font-medium"
                  >
                    (34) 3217-1207
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-smooth">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">E-mail</h3>
                  <p className="text-muted-foreground text-sm sm:text-base break-all">
                    michelampk31@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-smooth">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Localização</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Rua Itabira 783, Daniel Fonseca, Uberlândia MG
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-smooth">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Horário de Atendimento</h3>
                  <div className="text-muted-foreground text-sm sm:text-base">
                    <p>Segunda a Quinta: 06h30 às 20h00</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* CTA Card */}
            <Card className="p-5 sm:p-6 md:p-8 flex flex-col justify-center items-center text-center space-y-4 sm:space-y-5 md:space-y-6 bg-gradient-to-br from-card to-primary/5 shadow-card hover:shadow-hover transition-smooth animate-fade-in">
              <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full gradient-ocean flex items-center justify-center animate-ripple">
                <MessageCircle className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-white" />
              </div>
              
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-foreground">
                  Aula Experimental Gratuita
                </h2>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  Conheça nossa metodologia na prática! Agende uma aula experimental 
                  e descubra por que somos referência em natação há mais de 30 anos.
                </p>
              </div>

              <Button variant="hero" size="lg" className="w-full text-sm sm:text-base md:text-lg group">
                <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:translate-x-1 transition-smooth" />
                Agendar Aula Experimental
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-6xl mx-auto p-4 sm:p-6 md:p-8 lg:p-12 shadow-hover animate-fade-in">
            <div className="text-center mb-6 sm:mb-8">
              <MapPin className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-primary mx-auto mb-4 sm:mb-6" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">Venha nos Visitar</h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
                Nossa unidade está preparada para recebê-lo. Agende uma visita e conheça 
                nossa estrutura completa com piscinas aquecidas e ambiente seguro.
              </p>
            </div>
            <div className="rounded-lg sm:rounded-xl overflow-hidden h-64 sm:h-80 md:h-96">
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
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;
