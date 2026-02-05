import { Card } from "@/components/ui/card";
import { Calendar, Play, Award, Target, Star, AlertCircle, Gift, BookOpen } from "lucide-react";

const CalendarSection = () => {
  const stats = [
    { number: "3", label: "Avaliações", color: "bg-blue-100" },
    { number: "2", label: "Festivais Aquáticos", color: "bg-green-100" },
    { number: "10", label: "Desafios Mensais", color: "bg-cyan-100" },
    { number: "3", label: "Eventos Especiais", color: "bg-purple-100" },
  ];

  const months = [
    {
      name: "Janeiro",
      events: [
        { title: "Início do Ano Letivo", type: "inicio", icon: Play },
        { title: "Semana de Integração", type: "evento", icon: Star },
      ],
    },
    {
      name: "Fevereiro",
      events: [
        { title: "Avaliação Diagnóstica", type: "avaliacao", icon: BookOpen },
        { title: "Desafio aos Pais", type: "desafio", icon: Target },
      ],
    },
    {
      name: "Março",
      events: [
        { title: "Desafio Mensal: Respiração", type: "desafio", icon: Target },
      ],
    },
    {
      name: "Abril",
      events: [
        { title: "Desafio Mensal: Flutuação", type: "desafio", icon: Target },
      ],
    },
    {
      name: "Maio",
      events: [
        { title: "Festival Aquático - 1º Semestre", type: "festival", icon: Award },
        { title: "Desafio Mensal: Propulsão", type: "desafio", icon: Target },
      ],
    },
    {
      name: "Junho",
      events: [
        { title: "Avaliação Semestral", type: "avaliacao", icon: BookOpen },
        { title: "Desafio Mensal: Braçadas", type: "desafio", icon: Target },
      ],
    },
    {
      name: "Julho",
      events: [
        { title: "Recesso Escolar", type: "ferias", icon: Gift },
      ],
    },
    {
      name: "Agosto",
      events: [
        { title: "Desafio Mensal: Pernadas", type: "desafio", icon: Target },
      ],
    },
    {
      name: "Setembro",
      events: [
        { title: "Desafio Mensal: Estilos", type: "desafio", icon: Target },
      ],
    },
    {
      name: "Outubro",
      events: [
        { title: "Festival Aquático - 2º Semestre", type: "festival", icon: Award },
        { title: "Desafio Mensal: Viradas", type: "desafio", icon: Target },
      ],
    },
    {
      name: "Novembro",
      events: [
        { title: "Semana de Segurança Aquática", type: "seguranca", icon: AlertCircle },
        { title: "Desafio Mensal: Resistência", type: "desafio", icon: Target },
      ],
    },
    {
      name: "Dezembro",
      events: [
        { title: "Avaliação Final + Mostra de Habilidades", type: "avaliacao", icon: BookOpen },
        { title: "Encerramento e Confraternização", type: "evento", icon: Star },
      ],
    },
  ];

  const getEventStyles = (type: string) => {
    switch (type) {
      case "inicio": return "bg-blue-50 text-blue-600";
      case "evento": return "bg-purple-50 text-purple-600";
      case "avaliacao": return "bg-cyan-50 text-cyan-600";
      case "desafio": return "bg-green-50 text-green-600";
      case "festival": return "bg-yellow-50 text-yellow-600";
      case "ferias": return "bg-gray-50 text-gray-600";
      case "seguranca": return "bg-orange-50 text-orange-600";
      default: return "bg-gray-50 text-gray-600";
    }
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Calendário Anual 2026
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Programação completa de eventos, avaliações e festivais ao longo do ano letivo
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className={`p-4 text-center ${stat.color} border-0`}>
              <div className="w-10 h-10 rounded-full bg-primary/20 mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">{stat.number}</div>
              <div className="text-sm text-primary">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto mb-12">
          {months.map((month, index) => (
            <Card
              key={index}
              className="p-4 hover:shadow-hover transition-smooth animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <h3 className="font-bold text-foreground">{month.name}</h3>
              </div>
              <div className="space-y-2">
                {month.events.map((event, eventIndex) => {
                  const Icon = event.icon;
                  return (
                    <div
                      key={eventIndex}
                      className={`flex items-center gap-3 p-2 rounded-lg ${getEventStyles(event.type)}`}
                    >
                      <Icon className="w-4 h-4 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-medium">{event.title}</div>
                        <div className="text-xs opacity-70">{event.type}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          ))}
        </div>

        {/* Important Info */}
        <Card className="max-w-4xl mx-auto p-6 border-2 border-primary/20">
          <h3 className="text-xl font-bold text-center mb-6">Informações Importantes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-5 h-5 text-primary" />
                <h4 className="font-bold">Avaliações (3 no ano)</h4>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• <strong>Fevereiro:</strong> Avaliação Diagnóstica - identificação do nível inicial</li>
                <li>• <strong>Junho:</strong> Avaliação Semestral - progressão intermediária</li>
                <li>• <strong>Dezembro:</strong> Avaliação Final + Mostra de Habilidades</li>
                <li>• Boletim enviado aos responsáveis em até 7 dias após avaliação</li>
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-primary" />
                <h4 className="font-bold">Festivais & Eventos</h4>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• <strong>2 Festivais Aquáticos:</strong> Maio e Outubro com participação das famílias</li>
                <li>• <strong>Desafios mensais:</strong> Competições com premiação de selos e badges</li>
                <li>• <strong>Semana de Segurança:</strong> Novembro - foco em prevenção de afogamentos</li>
                <li>• <strong>Confraternização:</strong> Encerramento especial em dezembro</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CalendarSection;
