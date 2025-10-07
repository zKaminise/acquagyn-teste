import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Entre em{" "}
            <span className="gradient-ocean bg-clip-text text-transparent">
              Contato
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para atendê-lo e começar sua jornada na natação
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <Card className="p-8 space-y-6 shadow-card">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Informações de Contato
              </h3>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Telefone</h4>
                <p className="text-muted-foreground">
                  Entre em contato para mais informações
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">E-mail</h4>
                <p className="text-muted-foreground">
                  Envie sua mensagem que retornaremos em breve
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Localização</h4>
                <p className="text-muted-foreground">
                  Visite nossa unidade e conheça nossa estrutura
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Horário de Atendimento</h4>
                <p className="text-muted-foreground">
                  Segunda a Sexta: 7h às 21h<br />
                  Sábado: 8h às 18h
                </p>
              </div>
            </div>
          </Card>

          {/* CTA Card */}
          <Card className="p-8 flex flex-col justify-center items-center text-center space-y-6 bg-gradient-to-br from-card to-primary/5 shadow-card">
            <div className="w-20 h-20 rounded-full gradient-ocean flex items-center justify-center">
              <ExternalLink className="w-10 h-10 text-white" />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">
                Faça uma Aula Experimental
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Conheça nossa metodologia na prática! Agende uma aula experimental gratuita 
                e descubra por que somos referência em natação há mais de 30 anos.
              </p>
            </div>

            <div className="space-y-3 w-full">
              <Button variant="hero" size="lg" className="w-full text-lg">
                Agendar Aula Experimental
              </Button>
              
              <Button variant="outline" size="lg" className="w-full text-lg">
                Ver Planos e Horários
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Ou acesse o{" "}
              <a
                href="https://avaliacoes.acquagyn.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                Sistema de Avaliações
              </a>
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
