const CalendarSection = () => {
  const months = [
    { name: "Jan", events: [{ title: "Início do Ano Letivo", type: "inicio" }, { title: "Semana de Integração", type: "evento" }] },
    { name: "Fev", events: [{ title: "Avaliação Diagnóstica", type: "avaliacao" }, { title: "Desafio aos Pais", type: "desafio" }] },
    { name: "Mar", events: [{ title: "Desafio: Respiração", type: "desafio" }] },
    { name: "Abr", events: [{ title: "Desafio: Flutuação", type: "desafio" }] },
    { name: "Mai", events: [{ title: "Festival Aquático", type: "festival" }, { title: "Desafio: Propulsão", type: "desafio" }] },
    { name: "Jun", events: [{ title: "Avaliação Semestral", type: "avaliacao" }, { title: "Desafio: Braçadas", type: "desafio" }] },
    { name: "Jul", events: [{ title: "Recesso Escolar", type: "ferias" }] },
    { name: "Ago", events: [{ title: "Desafio: Pernadas", type: "desafio" }] },
    { name: "Set", events: [{ title: "Desafio: Estilos", type: "desafio" }] },
    { name: "Out", events: [{ title: "Festival Aquático", type: "festival" }, { title: "Desafio: Viradas", type: "desafio" }] },
    { name: "Nov", events: [{ title: "Segurança Aquática", type: "seguranca" }, { title: "Desafio: Resistência", type: "desafio" }] },
    { name: "Dez", events: [{ title: "Avaliação Final", type: "avaliacao" }, { title: "Confraternização", type: "evento" }] },
  ];

  const typeColors: Record<string, string> = {
    inicio: "bg-[hsl(199,89%,48%)]/10 text-primary",
    evento: "bg-purple-100 text-purple-700",
    avaliacao: "bg-[hsl(188,78%,41%)]/10 text-secondary",
    desafio: "bg-emerald-100 text-emerald-700",
    festival: "bg-amber-100 text-amber-700",
    ferias: "bg-muted text-muted-foreground",
    seguranca: "bg-orange-100 text-orange-700",
  };

  const stats = [
    { number: "3", label: "Avaliações" },
    { number: "2", label: "Festivais" },
    { number: "10", label: "Desafios" },
    { number: "3", label: "Eventos" },
  ];

  return (
    <section className="py-20 sm:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-3">
            Programação Anual
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Calendário{" "}
            <span className="text-gradient-animated">2026</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Eventos, avaliações e festivais ao longo do ano letivo
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
          {stats.map((s, i) => (
            <div key={i} className="glass-card rounded-2xl p-4 text-center hover:shadow-hover hover:scale-105 transition-all duration-300">
              <div className="text-2xl sm:text-3xl font-bold text-primary">{s.number}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 max-w-6xl mx-auto mb-12">
          {months.map((month, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-3 hover:shadow-hover transition-all duration-300 group"
            >
              <div className="font-display font-bold text-sm text-primary mb-2 text-center">{month.name}</div>
              <div className="space-y-1.5">
                {month.events.map((event, j) => (
                  <div key={j} className={`text-xs px-2 py-1.5 rounded-lg ${typeColors[event.type] || "bg-muted text-muted-foreground"}`}>
                    {event.title}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Info cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-6">
            <h3 className="font-display font-bold text-lg mb-4 flex items-center gap-2">
              📋 Avaliações
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <strong className="text-foreground">Fevereiro:</strong> Avaliação Diagnóstica</li>
              <li>• <strong className="text-foreground">Junho:</strong> Avaliação Semestral</li>
              <li>• <strong className="text-foreground">Dezembro:</strong> Avaliação Final + Mostra de Habilidades</li>
              <li>• Boletim enviado em até 7 dias após avaliação</li>
            </ul>
          </div>
          <div className="glass-card rounded-3xl p-6">
            <h3 className="font-display font-bold text-lg mb-4 flex items-center gap-2">
              🏆 Festivais & Eventos
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• <strong className="text-foreground">2 Festivais:</strong> Maio e Outubro com participação das famílias</li>
              <li>• <strong className="text-foreground">Desafios:</strong> Competições com premiação de selos e badges</li>
              <li>• <strong className="text-foreground">Segurança:</strong> Novembro - prevenção de afogamentos</li>
              <li>• <strong className="text-foreground">Confraternização:</strong> Encerramento em dezembro</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendarSection;
