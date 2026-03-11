import { Button } from "@/components/ui/button";
import { Download, Star, CheckCircle } from "lucide-react";
import { useState } from "react";
import mascotEstrelinha from "@/assets/mascot-estrelinha.jpg";
import mascotBibi from "@/assets/mascot-bibi.jpg";
import mascotAcqua from "@/assets/mascot-acqua.jpg";
import mascotTuca from "@/assets/mascot-tuca.jpg";
import mascotDelfim from "@/assets/mascot-delfim.jpg";
import mascotLuma from "@/assets/mascot-luma.jpg";
import mascotCaranguejo from "@/assets/mascot-caranguejo.jpg";
import mascotCavalo from "@/assets/mascot-cavalo.jpg";

interface LevelData {
  name: string;
  subtitle: string;
  ageRange: string;
  mascot: string;
  mascotImage: string;
  color: string;
  competencies: string[];
  badges: string[];
  pdfPath: string;
}

const levelsData: LevelData[] = [
  {
    name: "Baby 1", subtitle: "Primeiro Contato", ageRange: "6 a 12 meses", mascot: "Stellinha", mascotImage: mascotEstrelinha,
    color: "from-yellow-400 to-amber-500",
    competencies: ["Adaptação à água com os pais", "Confiança no ambiente aquático", "Movimentos básicos de perninha", "Imersão do rosto (com apoio)", "Cantigas e brincadeiras aquáticas", "Vínculo afetivo na água"],
    badges: ["Primeiro Mergulho", "Bolhas Felizes", "Perninha Alegre", "Estrelinha d'Água"],
    pdfPath: "/boletins/BabySplash.pdf",
  },
  {
    name: "Baby 2", subtitle: "Exploração Aquática", ageRange: "1 a 2 anos", mascot: "Bibi", mascotImage: mascotBibi,
    color: "from-orange-400 to-amber-500",
    competencies: ["Entra na água com confiança", "Sopra bolhas na superfície", "Flutuação com apoio", "Pernada básica com prancha", "Imersão completa do rosto", "Deslocamento básico (cachorrinho)"],
    badges: ["Soprador de Bolhas", "Flutuador Estrela", "Peixinho Corajoso", "Amigo da Água"],
    pdfPath: "/boletins/Peixinhos.pdf",
  },
  {
    name: "Baby 3", subtitle: "Autonomia na Água", ageRange: "2 a 3 anos", mascot: "Acquinha", mascotImage: mascotAcqua,
    color: "from-cyan-400 to-teal-500",
    competencies: ["Flutuação ventral e dorsal", "Respiração lateral básica", "Crawl com prancha (braço/perna)", "Costas elementar", "Mergulho até o fundo (raso)", "Regras de segurança na borda"],
    badges: ["Tartaruga Segura", "Respiração Campeã", "Flutuador Mestre", "Guardião da Borda"],
    pdfPath: "/boletins/Ondas.pdf",
  },
  {
    name: "Adaptação", subtitle: "Adaptação ao Meio Aquático", ageRange: "3 a 5 anos", mascot: "Tuquinha", mascotImage: mascotTuca,
    color: "from-emerald-400 to-green-600",
    competencies: ["Crawl completo com respiração", "Costas com braçada alternada", "Introdução ao nado peito", "Virada simples (cambalhota)", "Resistência: 25m sem parar", "Flutuação de sobrevivência"],
    badges: ["Golfinho Veloz", "Virada Turbo", "Resistência Bronze", "Técnica Afiada"],
    pdfPath: "/boletins/Mares.pdf",
  },
  {
    name: "Iniciação", subtitle: "Desenvolvimento de Habilidades", ageRange: "5 a 7 anos", mascot: "Delfi", mascotImage: mascotDelfim,
    color: "from-indigo-400 to-indigo-600",
    competencies: ["4 estilos olímpicos básicos", "Viradas olímpicas (crawl/costas)", "Saídas do bloco", "Resistência: 100m crawl", "Introdução ao treinamento", "Noções de pace e tempo"],
    badges: ["Borboleta Iniciante", "4 Estilos", "Virada Olímpica", "Resistência Prata"],
    pdfPath: "/boletins/Correnteza.pdf",
  },
  {
    name: "Aperfeiçoamento 1", subtitle: "Refinamento Técnico", ageRange: "7 a 9 anos", mascot: "Luminha", mascotImage: mascotLuma,
    color: "from-purple-400 to-violet-600",
    competencies: ["Técnica refinada nos 4 estilos", "Medley completo", "Resistência: 400m contínuos", "Treinamento intervalado", "Análise técnica de vídeo", "Preparação para competições"],
    badges: ["Medley Master", "Técnica Ouro", "Resistência Ouro", "Pronto para Competir"],
    pdfPath: "/boletins/RitmoTecnica.pdf",
  },
  {
    name: "Aperfeiçoamento 2", subtitle: "Alta Performance", ageRange: "9 a 12 anos", mascot: "Pitoco", mascotImage: mascotCaranguejo,
    color: "from-red-400 to-rose-600",
    competencies: ["Adaptação/superação de medos", "Crawl funcional avançado", "Costas para relaxamento", "Resistência cardiovascular", "Técnicas de sobrevivência", "Condicionamento físico"],
    badges: ["Superação Aquática", "Condicionamento Top", "Crawl Fluente", "Natação Master"],
    pdfPath: "/boletins/Adulto.pdf",
  },
  {
    name: "Aperfeiçoamento 3", subtitle: "Excelência Aquática", ageRange: "12+ anos", mascot: "Hipinho", mascotImage: mascotCavalo,
    color: "from-blue-400 to-blue-600",
    competencies: ["Domínio total dos 4 estilos", "Treinamento de resistência avançado", "Técnica de viradas e saídas", "Preparação competitiva", "Condicionamento avançado", "Liderança na água"],
    badges: ["Mestre Aquático", "Resistência Diamante", "Técnica Platina", "Campeão Completo"],
    pdfPath: "/boletins/Adulto.pdf",
  },
];

const ReportCardSection = () => {
  const [selectedLevelIndex, setSelectedLevelIndex] = useState(0);
  const selectedLevel = levelsData[selectedLevelIndex];

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = selectedLevel.pdfPath;
    link.download = `Boletim-${selectedLevel.name.replace(/\s+/g, "-")}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-20 sm:py-28 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-3">
            Acompanhamento Detalhado
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Boletins de{" "}
            <span className="text-gradient-animated">Progressão</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Boletins coloridos por nível para enviar aos pais. Selecione o nível para visualizar e baixar o modelo!
          </p>
        </div>

        {/* Floating report card mockup */}
        <div className="max-w-3xl mx-auto">
          <div className="glass-card rounded-3xl overflow-hidden shadow-hover hover:shadow-[0_30px_60px_-12px_hsl(199,89%,48%,0.2)] transition-all duration-500"
               style={{ transform: "perspective(1000px) rotateX(1deg)" }}>
            {/* Level Selector Header */}
            <div className="p-4 border-b border-border/50 flex items-center justify-between flex-wrap gap-4 bg-card/50">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-primary" />
                <span className="font-display font-bold">Selecione o Nível</span>
              </div>
              <Button size="sm" className="gap-2 rounded-full" onClick={handleDownload}>
                <Download className="w-4 h-4" />
                Baixar PDF
              </Button>
            </div>

            {/* Level Tabs */}
            <div className="flex flex-wrap gap-1.5 p-3 bg-muted/30">
              {levelsData.map((level, index) => (
                <button
                  key={level.name}
                  onClick={() => setSelectedLevelIndex(index)}
                  className={`px-3 py-1.5 rounded-full text-sm whitespace-nowrap transition-all duration-300 font-medium ${
                    selectedLevelIndex === index
                      ? "bg-primary text-primary-foreground shadow-lg scale-105"
                      : "bg-card hover:bg-primary/10 text-muted-foreground"
                  }`}
                >
                  {level.name}
                </button>
              ))}
            </div>

            {/* Report Card Content */}
            <div className="p-5 space-y-4">
              {/* Header with mascot */}
              <div className={`bg-gradient-to-r ${selectedLevel.color} rounded-2xl p-5 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/4" />
                <div className="flex items-start justify-between relative z-10">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <img src={selectedLevel.mascotImage} alt="" className="w-8 h-8 rounded-full ring-2 ring-white/30" />
                      <div>
                        <div className="font-display font-bold">ACQUAGYN</div>
                        <div className="text-xs opacity-80">Desde 1994 - Metodologia que Transforma</div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="text-lg font-display font-bold">{selectedLevel.name} - {selectedLevel.subtitle}</div>
                      <div className="text-sm opacity-80">Faixa etária: {selectedLevel.ageRange}</div>
                    </div>
                  </div>
                  <img src={selectedLevel.mascotImage} alt={selectedLevel.mascot} className="w-16 h-16 rounded-full ring-2 ring-white/30" />
                </div>
              </div>

              {/* Student Data */}
              <div className="rounded-2xl p-4 bg-primary/5 border border-primary/10">
                <div className="flex items-center gap-2 mb-4 text-primary">
                  <Star className="w-5 h-5" />
                  <span className="font-display font-bold">Dados do Aluno</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  {["Nome:", "Turma:", "Professor(a):", "Bimestre/Ano:"].map((label) => (
                    <div key={label}>
                      <div className="text-muted-foreground text-xs mb-1">{label}</div>
                      <div className="border-b border-dashed border-muted-foreground/30 h-5" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Mascot Quote */}
              <div className="flex items-center gap-3 p-3 glass-card rounded-2xl">
                <img src={selectedLevel.mascotImage} alt={selectedLevel.mascot} className="w-10 h-10 rounded-full" />
                <p className="text-sm italic text-muted-foreground">
                  "Olá! Eu sou {selectedLevel.mascot}! Acompanho você na fase {selectedLevel.name}!"
                </p>
              </div>

              {/* Competencies */}
              <div className="rounded-2xl p-4 bg-primary/5 border border-primary/10">
                <div className="flex items-center gap-2 mb-2 text-primary">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-display font-bold">Competências Avaliadas</span>
                </div>
                <div className="flex gap-4 text-xs mb-4">
                  <div className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-red-400" /> Iniciante</div>
                  <div className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-yellow-400" /> Em Desenvolvimento</div>
                  <div className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-green-400" /> Consolidado</div>
                </div>
                <div className="space-y-2">
                  {selectedLevel.competencies.map((comp, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-card rounded-xl">
                      <span className="text-sm">{comp}</span>
                      <div className="flex gap-1">
                        <span className="w-6 h-6 rounded-full border-2 border-red-300 flex items-center justify-center text-[10px]">I</span>
                        <span className="w-6 h-6 rounded-full border-2 border-yellow-300 flex items-center justify-center text-[10px]">ED</span>
                        <span className="w-6 h-6 rounded-full border-2 border-green-300 flex items-center justify-center text-[10px]">C</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Badges */}
              <div className="rounded-2xl p-4 bg-primary/5 border border-primary/10">
                <div className="flex items-center gap-2 mb-4 text-primary">
                  <Star className="w-5 h-5" />
                  <span className="font-display font-bold">Conquistas do Bimestre 🏆</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {selectedLevel.badges.map((badge, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 bg-card rounded-xl">
                      <input type="checkbox" className="w-4 h-4 accent-primary pointer-events-none" readOnly />
                      <span className="text-sm">{badge}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Frequência & Participação */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl p-4 bg-primary/5 border border-primary/10">
                  <div className="font-display font-bold text-sm mb-3 text-primary">📊 Frequência</div>
                  <div className="space-y-2 text-sm">
                    {["Total de aulas:", "Presenças:", "Percentual:"].map((l) => (
                      <div key={l} className="flex justify-between">
                        <span className="text-muted-foreground text-xs">{l}</span>
                        <span className="border-b border-dashed border-muted-foreground/30 w-14" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl p-4 bg-primary/5 border border-primary/10">
                  <div className="font-display font-bold text-sm mb-3 text-primary">⭐ Participação</div>
                  <div className="space-y-2 text-sm">
                    {["Excelente 🌟", "Boa 👍", "Precisa melhorar 💪"].map((l) => (
                      <div key={l} className="flex items-center gap-2">
                        <input type="checkbox" className="w-4 h-4 accent-primary pointer-events-none" readOnly />
                        <span className="text-xs">{l}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Teacher notes */}
              <div className="rounded-2xl p-4 bg-primary/5 border border-primary/10">
                <div className="font-display font-bold text-sm mb-3 text-primary">♡ Palavras do Professor(a)</div>
                <div className="space-y-3">
                  {["⭐ Pontos Fortes:", "🌱 Podemos melhorar:", "✨ Destaque do bimestre:"].map((l) => (
                    <div key={l}>
                      <div className="text-xs text-muted-foreground mb-1">{l}</div>
                      <div className="h-10 border border-dashed border-muted-foreground/20 rounded-xl bg-card" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Goals */}
              <div className="rounded-2xl p-4 bg-primary/5 border border-primary/10">
                <div className="font-display font-bold text-sm mb-3 text-primary">🎯 Objetivos para o Próximo Bimestre</div>
                <div className="space-y-2">
                  {["🥇", "🥈", "🥉"].map((emoji) => (
                    <div key={emoji} className="flex items-center gap-2">
                      <span>{emoji}</span>
                      <div className="flex-1 border-b border-dashed border-muted-foreground/30" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Home tips */}
              <div className="rounded-2xl p-4 bg-primary/5 border border-primary/10">
                <div className="font-display font-bold text-sm mb-3 text-primary">🏠 Dicas para Praticar em Casa</div>
                <div className="grid grid-cols-2 gap-4">
                  {["🛁 Na hora do banho:", "🏃 Exercícios em terra:"].map((l) => (
                    <div key={l}>
                      <div className="text-xs text-muted-foreground mb-1">{l}</div>
                      <div className="h-8 border-b border-dashed border-muted-foreground/30" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Progression */}
              <div className={`rounded-2xl p-4 bg-gradient-to-r ${selectedLevel.color} text-white`}>
                <div className="font-display font-bold text-sm mb-3">🏊 Progressão de Nível</div>
                <div className="space-y-2 text-sm">
                  {["Permanece no nível atual (consolidando)", "Pronto para avançar! → Próximo nível: ________________", "Aula de reforço recomendada"].map((l) => (
                    <div key={l} className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" readOnly />
                      <span className="text-xs sm:text-sm">{l}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Family space */}
              <div className="rounded-2xl p-4 bg-primary/5 border border-primary/10">
                <div className="font-display font-bold text-sm mb-3 text-primary">💬 Espaço da Família</div>
                <div className="text-xs text-muted-foreground mb-2">Comentários, dúvidas ou sugestões:</div>
                <div className="h-14 border border-dashed border-muted-foreground/20 rounded-xl bg-card mb-4" />
                <div className="flex justify-between text-xs">
                  <div>
                    <span className="text-muted-foreground">Assinatura do Responsável:</span>
                    <div className="w-36 border-b border-muted-foreground/30 mt-1" />
                  </div>
                  <div className="text-right">
                    <span className="text-muted-foreground">Data:</span>
                    <div className="w-20 border-b border-muted-foreground/30 mt-1" />
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className={`p-4 bg-gradient-to-r ${selectedLevel.color} text-white text-center`}>
              <div className="flex items-center justify-center gap-2 mb-1">
                <img src={selectedLevel.mascotImage} alt="" className="w-7 h-7 rounded-full ring-1 ring-white/30" />
                <span className="font-display font-bold text-sm">Obrigado por confiar na Acquagyn! 🌊</span>
              </div>
              <p className="text-xs opacity-80">📷 @acquagyn_oficial | 🌐 www.acquagyn.com.br | ✉ contato@acquagyn.com.br</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportCardSection;
