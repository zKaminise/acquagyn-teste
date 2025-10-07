import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, ExternalLink, Send, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-b from-primary/5 to-background overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-ripple" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl animate-ripple" style={{ animationDelay: "1s" }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Entre em{" "}
              <span className="gradient-ocean bg-clip-text text-transparent">
                Contato
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in">
              Estamos prontos para atendê-lo e começar sua jornada na natação. 
              Agende uma aula experimental e conheça nossa metodologia na prática!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Info */}
            <Card className="p-8 space-y-6 shadow-card hover:shadow-hover transition-smooth animate-fade-in">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground">
                  Informações de Contato
                </h2>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-smooth">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Telefone</h3>
                  <p className="text-muted-foreground">
                    Entre em contato para mais informações sobre horários e planos
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-smooth">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">E-mail</h3>
                  <p className="text-muted-foreground">
                    Envie sua mensagem que retornaremos em breve
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-smooth">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Localização</h3>
                  <p className="text-muted-foreground">
                    Visite nossa unidade e conheça nossa estrutura de perto
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-smooth">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Horário de Atendimento</h3>
                  <div className="text-muted-foreground">
                    <p>Segunda a Sexta: 7h às 21h</p>
                    <p>Sábado: 8h às 18h</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* CTA Card */}
            <div className="space-y-6">
              <Card className="p-8 flex flex-col justify-center items-center text-center space-y-6 bg-gradient-to-br from-card to-primary/5 shadow-card hover:shadow-hover transition-smooth animate-fade-in">
                <div className="w-20 h-20 rounded-full gradient-ocean flex items-center justify-center animate-ripple">
                  <MessageCircle className="w-10 h-10 text-white" />
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-3 text-foreground">
                    Aula Experimental Gratuita
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Conheça nossa metodologia na prática! Agende uma aula experimental 
                    e descubra por que somos referência em natação há mais de 30 anos.
                  </p>
                </div>

                <div className="space-y-3 w-full">
                  <Button variant="hero" size="lg" className="w-full text-lg group">
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-smooth" />
                    Agendar Aula Experimental
                  </Button>
                  
                  <Button variant="outline" size="lg" className="w-full text-lg border-2">
                    Ver Planos e Horários
                  </Button>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-secondary/10 to-primary/5 shadow-card hover:shadow-hover transition-smooth animate-fade-in">
                <div className="flex items-center gap-4 mb-4">
                  <ExternalLink className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-bold">Sistema de Avaliações</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Acesse nosso sistema para consultar avaliações e acompanhar o progresso dos alunos
                </p>
                <a
                  href="https://avaliacoes.acquagyn.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                >
                  Acessar Sistema
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-6xl mx-auto p-12 text-center shadow-hover animate-fade-in">
            <MapPin className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Venha nos Visitar</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Nossa unidade está preparada para recebê-lo. Agende uma visita e conheça 
              nossa estrutura completa com piscinas aquecidas e ambiente seguro.
            </p>
            <div className="bg-muted/50 rounded-xl h-96 flex items-center justify-center">
              <p className="text-muted-foreground">Mapa da localização</p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;
