import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Waves, Activity, Users, Clock, DollarSign, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <Badge variant="default" className="mb-4">
              Nossos Serviços
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Serviços da <span className="text-gradient-animated">Acquagyn</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Descubra nossas modalidades e escolha a melhor opção para você e sua família
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Natação */}
            <Card className="shadow-card hover:shadow-hover transition-smooth animate-fade-in">
              <CardHeader>
                <div className="w-16 h-16 rounded-full gradient-ocean flex items-center justify-center mb-4">
                  <Waves className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-3xl">Natação Infantil</CardTitle>
                <CardDescription className="text-base">
                  Dos 6 meses aos 13 anos
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Aulas de natação para bebês, crianças, adolescentes e adultos. 
                  Nossa metodologia personalizada garante o desenvolvimento progressivo 
                  e seguro de cada aluno.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="text-sm">Turmas dos 6 meses aos 13 anos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-sm">Aulas 2x na semana</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <DollarSign className="w-5 h-5 text-primary" />
                    <span className="text-sm">Planos mensais acessíveis</span>
                  </div>
                </div>
                <div className="pt-4 space-y-3">
                  <Link to="/contato">
                    <Button variant="hero" className="w-full">
                      Agende sua Aula Experimental
                    </Button>
                  </Link>
                  <Link to="/niveis">
                    <Button variant="outline" className="w-full">
                      Ver Níveis de Natação
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Hidroginástica */}
            <Card className="shadow-card hover:shadow-hover transition-smooth animate-fade-in">
              <CardHeader>
                <div className="w-16 h-16 rounded-full gradient-ocean flex items-center justify-center mb-4">
                  <Activity className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-3xl">Hidroginástica</CardTitle>
                <CardDescription className="text-base">
                  Exercícios aquáticos para bem-estar
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Atividade física completa na água, ideal para todas as idades. 
                  Melhora o condicionamento físico, fortalece a musculatura e 
                  proporciona qualidade de vida.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="text-sm">Turmas para adultos e melhor idade</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-sm">Aulas até 4x por semana</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Activity className="w-5 h-5 text-primary" />
                    <span className="text-sm">Baixo impacto, alto benefício</span>
                  </div>
                </div>
                <div className="pt-4">
                  <Link to="/contato">
                    <Button variant="hero" className="w-full">
                      Agende sua Aula Experimental
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Parceria SESI */}
          <div className="max-w-6xl mx-auto mt-12">
            <Card className="shadow-hover border-2 border-primary/20 animate-fade-in">
              <CardHeader className="text-center pb-8">
                <Badge variant="default" className="mx-auto mb-4">
                  Parceria Especial
                </Badge>
                <CardTitle className="text-4xl mb-4">
                  Parceria com SESI Roosevelt
                </CardTitle>
                <CardDescription className="text-lg">
                  Natação e Hidroginástica para toda a comunidade SESI
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      <Waves className="w-6 h-6 text-primary" />
                      Natação no SESI
                    </h3>
                    <p className="text-muted-foreground">
                      Aulas de natação para crianças e adultos nas instalações do SESI Roosevelt, 
                      com toda a qualidade e metodologia Acquagyn.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span>A partir de 2 anos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span>Metodologia Acquagyn</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span>Professores qualificados</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      <Activity className="w-6 h-6 text-primary" />
                      Hidroginástica no SESI
                    </h3>
                    <p className="text-muted-foreground">
                      Aulas de hidroginástica a partir de 15 anos, promovendo saúde 
                      e qualidade de vida.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span>Exercícios de baixo impacto</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span>Melhora do condicionamento físico</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span>Ambiente acolhedor</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-accent/50 rounded-lg p-6 mt-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">Localização SESI Roosevelt</h4>
                      <p className="text-sm text-muted-foreground">
                        As aulas acontecem nas instalações do SESI Roosevelt, 
                        proporcionando comodidade e facilidade de acesso para a comunidade.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <Link to="/contato">
                    <Button variant="hero" size="lg" className="w-full">
                      Quero Agendar uma Aula Experimental no SESI
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <Badge variant="default" className="mb-4">
                Perguntas Frequentes
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Tire suas <span className="text-gradient-animated">Dúvidas</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Respostas para as perguntas mais comuns sobre nossos serviços
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4 animate-fade-in">
              <AccordionItem value="item-1" className="bg-background rounded-lg px-6 border shadow-card">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  As Piscinas são aquecidas?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Sim! Nossas piscinas possuem temperatura controlada para garantir conforto e segurança durante as aulas.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-background rounded-lg px-6 border shadow-card">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  O que preciso levar para as aulas?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Os alunos devem trazer maiô/sunga, touca, óculos de natação, toalha e chinelo. No caso da hidroginástica, recomendamos também roupas confortáveis para a prática aquática.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-background rounded-lg px-6 border shadow-card">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Posso fazer uma aula experimental antes de me matricular?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Sim! Oferecemos uma aula experimental gratuita para que você possa conhecer nosso método e estrutura.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-background rounded-lg px-6 border shadow-card">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  É necessário saber nadar para praticar Hidroginástica?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Não. A hidroginástica é realizada em piscinas com profundidade segura e sempre com acompanhamento de um profissional qualificado.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-background rounded-lg px-6 border shadow-card">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Vocês fornecem materiais como pranchas e flutuadores?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Sim! Todo o material necessário para as aulas é fornecido pela escola.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-ocean text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <Phone className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Quer saber mais sobre horários e valores?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Entre em contato conosco e nossa equipe terá prazer em atendê-lo 
              com todas as informações sobre nossos serviços.
            </p>
            <Link to="/contato">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold shadow-hover">
                Fale Conosco
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
