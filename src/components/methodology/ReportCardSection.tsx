import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Star, CheckCircle } from "lucide-react";
import { useState } from "react";
import mascotLuma from "@/assets/mascot-luma.jpg";
import mascotAcqua from "@/assets/mascot-acqua.jpg";
import mascotTuca from "@/assets/mascot-tuca.jpg";
import mascotBibi from "@/assets/mascot-bibi.jpg";

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
    name: "Baby Splash",
    subtitle: "Primeiro Contato",
    ageRange: "6 meses a 2 anos",
    mascot: "Luma",
    mascotImage: mascotLuma,
    color: "from-pink-400 to-pink-500",
    competencies: [
      "Adaptação à água com os pais",
      "Confiança no ambiente aquático",
      "Movimentos básicos de perninha",
      "Imersão do rosto (com apoio)",
      "Cantigas e brincadeiras aquáticas",
      "Vínculo afetivo na água",
    ],
    badges: ["Primeiro Mergulho", "Bolhas Felizes", "Perninha Alegre", "Estrelinha d'Água"],
    pdfPath: "/boletins/BabySplash.pdf",
  },
  {
    name: "Peixinhos",
    subtitle: "Adaptação ao Meio Aquático",
    ageRange: "3 a 4 anos",
    mascot: "Luma",
    mascotImage: mascotLuma,
    color: "from-cyan-400 to-cyan-500",
    competencies: [
      "Entra na água com confiança",
      "Sopra bolhas na superfície",
      "Flutuação com apoio",
      "Pernada básica com prancha",
      "Imersão completa do rosto",
      "Deslocamento básico (cachorrinho)",
    ],
    badges: ["Soprador de Bolhas", "Flutuador Estrela", "Peixinho Corajoso", "Amigo da Água"],
    pdfPath: "/boletins/Peixinhos.pdf",
  },
  {
    name: "Ondas",
    subtitle: "Desenvolvimento de Habilidades",
    ageRange: "5 a 6 anos",
    mascot: "Tuca",
    mascotImage: mascotTuca,
    color: "from-blue-400 to-blue-500",
    competencies: [
      "Flutuação ventral e dorsal",
      "Respiração lateral básica",
      "Crawl com prancha (braço/perna)",
      "Costas elementar",
      "Mergulho até o fundo (raso)",
      "Regras de segurança na borda",
    ],
    badges: ["Tartaruga Segura", "Respiração Campeã", "Flutuador Mestre", "Guardião da Borda"],
    pdfPath: "/boletins/Ondas.pdf",
  },
  {
    name: "Mares",
    subtitle: "Refinamento Técnico",
    ageRange: "7 a 9 anos",
    mascot: "Acqua",
    mascotImage: mascotAcqua,
    color: "from-teal-400 to-teal-500",
    competencies: [
      "Crawl completo com respiração",
      "Costas com braçada alternada",
      "Introdução ao nado peito",
      "Virada simples (cambalhota)",
      "Resistência: 25m sem parar",
      "Flutuação de sobrevivência",
    ],
    badges: ["Golfinho Veloz", "Virada Turbo", "Resistência Bronze", "Técnica Afiada"],
    pdfPath: "/boletins/Mares.pdf",
  },
  {
    name: "Correnteza",
    subtitle: "Aperfeiçoamento",
    ageRange: "10 a 12 anos",
    mascot: "Bibi",
    mascotImage: mascotBibi,
    color: "from-indigo-400 to-indigo-500",
    competencies: [
      "4 estilos olímpicos básicos",
      "Viradas olímpicas (crawl/costas)",
      "Saídas do bloco",
      "Resistência: 100m crawl",
      "Introdução ao treinamento",
      "Noções de pace e tempo",
    ],
    badges: ["Borboleta Iniciante", "4 Estilos", "Virada Olímpica", "Resistência Prata"],
    pdfPath: "/boletins/Correnteza.pdf",
  },
  {
    name: "Ritmo & Técnica",
    subtitle: "Jovem Técnico",
    ageRange: "13 a 17 anos",
    mascot: "Acqua",
    mascotImage: mascotAcqua,
    color: "from-purple-400 to-purple-500",
    competencies: [
      "Técnica refinada nos 4 estilos",
      "Medley completo",
      "Resistência: 400m contínuos",
      "Treinamento intervalado",
      "Análise técnica de vídeo",
      "Preparação para competições",
    ],
    badges: ["Medley Master", "Técnica Ouro", "Resistência Ouro", "Pronto para Competir"],
    pdfPath: "/boletins/RitmoTecnica.pdf",
  },
  {
    name: "Adulto",
    subtitle: "Natação Completa",
    ageRange: "18+ anos",
    mascot: "Acqua",
    mascotImage: mascotAcqua,
    color: "from-emerald-400 to-emerald-500",
    competencies: [
      "Adaptação/superação de medos",
      "Crawl funcional",
      "Costas para relaxamento",
      "Resistência cardiovascular",
      "Técnicas de sobrevivência",
      "Condicionamento físico",
    ],
    badges: ["Superação Aquática", "Condicionamento Top", "Crawl Fluente", "Natação Master"],
    pdfPath: "/boletins/Adulto.pdf",
  },
];

const ReportCardSection = () => {
  const [selectedLevelIndex, setSelectedLevelIndex] = useState(1);
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
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <FileText className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary">
            Boletins de Progressão
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Boletins coloridos por nível para enviar aos pais. Selecione o nível para visualizar e baixar o modelo!
          </p>
        </div>

        {/* Report Card Preview */}
        <Card className="max-w-3xl mx-auto overflow-hidden">
          {/* Level Selector Header */}
          <div className="p-4 border-b flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-primary" />
              <span className="font-medium">Selecione o Nível</span>
            </div>
            <Button variant="hero" size="sm" className="gap-2" onClick={handleDownload}>
              <Download className="w-4 h-4" />
              Baixar Boletim PDF
            </Button>
          </div>

          {/* Level Tabs */}
          <div className="flex flex-wrap gap-1 p-2 bg-muted/50 overflow-x-auto">
            {levelsData.map((level, index) => (
              <button
                key={level.name}
                onClick={() => setSelectedLevelIndex(index)}
                className={`px-3 py-1.5 rounded-full text-sm whitespace-nowrap transition-smooth ${
                  selectedLevelIndex === index
                    ? "bg-primary text-primary-foreground"
                    : "bg-background hover:bg-primary/10"
                }`}
              >
                {level.name}
              </button>
            ))}
          </div>

          {/* Report Card Content */}
          <div className="p-4 space-y-4">
            {/* Header with mascot */}
            <div className={`bg-gradient-to-r ${selectedLevel.color} rounded-xl p-4 text-white relative overflow-hidden`}>
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <img src={mascotAcqua} alt="" className="w-8 h-8 rounded-full" />
                    <div>
                      <div className="font-bold">ACQUAGYN</div>
                      <div className="text-xs opacity-80">Desde 1994 - Metodologia que Transforma</div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="text-lg font-bold">{selectedLevel.name} - {selectedLevel.subtitle}</div>
                    <div className="text-sm opacity-80">Faixa etária: {selectedLevel.ageRange}</div>
                  </div>
                </div>
                <div className="text-center">
                  <img src={selectedLevel.mascotImage} alt={selectedLevel.mascot} className="w-16 h-16 rounded-full bg-white/20 p-1" />
                  <div className="text-xs mt-1">{selectedLevel.mascot}</div>
                </div>
              </div>
            </div>

            {/* Student Data */}
            <Card className="p-4 bg-primary/5 border-primary/20">
              <div className="flex items-center gap-2 mb-4 text-primary">
                <Star className="w-5 h-5" />
                <span className="font-bold">Dados do Aluno</span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-muted-foreground">Nome:</div>
                  <div className="border-b border-dashed border-muted-foreground/30 h-6" />
                </div>
                <div>
                  <div className="text-muted-foreground">Turma:</div>
                  <div className="border-b border-dashed border-muted-foreground/30 h-6" />
                </div>
                <div>
                  <div className="text-muted-foreground">Professor(a):</div>
                  <div className="border-b border-dashed border-muted-foreground/30 h-6" />
                </div>
                <div>
                  <div className="text-muted-foreground">Bimestre/Ano:</div>
                  <div className="border-b border-dashed border-muted-foreground/30 h-6" />
                </div>
              </div>
            </Card>

            {/* Mascot Quote */}
            <div className="flex items-center gap-3 p-3 bg-background rounded-lg border">
              <img src={selectedLevel.mascotImage} alt={selectedLevel.mascot} className="w-10 h-10 rounded-full" />
              <p className="text-sm italic text-muted-foreground">
                "Olá! Eu sou {selectedLevel.mascot}! Acompanho você na fase {selectedLevel.name}!"
              </p>
            </div>

            {/* Competencies */}
            <Card className="p-4 bg-primary/5 border-primary/20">
              <div className="flex items-center gap-2 mb-2 text-primary">
                <CheckCircle className="w-5 h-5" />
                <span className="font-bold">Competências Avaliadas</span>
              </div>
              <div className="flex gap-4 text-xs mb-4">
                <div className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded-full bg-red-400" /> Iniciante
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded-full bg-yellow-400" /> Em Desenvolvimento
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded-full bg-green-400" /> Consolidado
                </div>
              </div>
              <div className="space-y-2">
                {selectedLevel.competencies.map((comp, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-background rounded">
                    <span className="text-sm text-foreground">{comp}</span>
                    <div className="flex gap-1">
                      <span className="w-6 h-6 rounded-full border-2 border-red-300 flex items-center justify-center text-xs">I</span>
                      <span className="w-6 h-6 rounded-full border-2 border-yellow-300 flex items-center justify-center text-xs">ED</span>
                      <span className="w-6 h-6 rounded-full border-2 border-green-300 flex items-center justify-center text-xs">C</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Badges */}
            <Card className="p-4 bg-primary/5 border-primary/20">
              <div className="flex items-center gap-2 mb-4 text-primary">
                <Star className="w-5 h-5" />
                <span className="font-bold">Conquistas do Bimestre 🏆</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {selectedLevel.badges.map((badge, index) => (
                  <div key={index} className="flex items-center gap-2 p-2 bg-background rounded">
                    <input type="checkbox" className="w-4 h-4" readOnly />
                    <span className="text-sm">{badge}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Frequência & Participação */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 bg-primary/5 border-primary/20">
                <div className="flex items-center gap-2 mb-3 text-primary">
                  <span>📊</span>
                  <span className="font-bold text-sm">Frequência</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total de aulas:</span>
                    <span className="border-b border-dashed border-muted-foreground/30 w-16" />
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Presenças:</span>
                    <span className="border-b border-dashed border-muted-foreground/30 w-16" />
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Percentual:</span>
                    <span className="border-b border-dashed border-muted-foreground/30 w-16" />
                  </div>
                </div>
              </Card>
              <Card className="p-4 bg-primary/5 border-primary/20">
                <div className="flex items-center gap-2 mb-3 text-primary">
                  <span>⭐</span>
                  <span className="font-bold text-sm">Participação</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4" readOnly />
                    <span>Excelente 🌟</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4" readOnly />
                    <span>Boa 👍</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4" readOnly />
                    <span>Precisa melhorar 💪</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Palavras do Professor */}
            <Card className="p-4 bg-primary/5 border-primary/20">
              <div className="flex items-center gap-2 mb-3 text-primary">
                <span>♡</span>
                <span className="font-bold">Palavras do Professor(a)</span>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">⭐ Pontos Fortes (o que faz muito bem):</div>
                  <div className="h-12 border border-dashed border-muted-foreground/30 rounded bg-background" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">🌱 Podemos melhorar em:</div>
                  <div className="h-12 border border-dashed border-muted-foreground/30 rounded bg-background" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">✨ Destaque do bimestre:</div>
                  <div className="h-12 border border-dashed border-muted-foreground/30 rounded bg-background" />
                </div>
              </div>
            </Card>

            {/* Objetivos para o Próximo Bimestre */}
            <Card className="p-4 bg-primary/5 border-primary/20">
              <div className="flex items-center gap-2 mb-3 text-primary">
                <span>🎯</span>
                <span className="font-bold">Objetivos para o Próximo Bimestre</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span>🥇</span>
                  <div className="flex-1 border-b border-dashed border-muted-foreground/30" />
                </div>
                <div className="flex items-center gap-2">
                  <span>🥈</span>
                  <div className="flex-1 border-b border-dashed border-muted-foreground/30" />
                </div>
                <div className="flex items-center gap-2">
                  <span>🥉</span>
                  <div className="flex-1 border-b border-dashed border-muted-foreground/30" />
                </div>
              </div>
            </Card>

            {/* Dicas para Praticar em Casa */}
            <Card className="p-4 bg-primary/5 border-primary/20">
              <div className="flex items-center gap-2 mb-3 text-primary">
                <span>🏠</span>
                <span className="font-bold">Dicas para Praticar em Casa</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">🛁 Na hora do banho:</div>
                  <div className="h-8 border-b border-dashed border-muted-foreground/30" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">🏃 Exercícios em terra:</div>
                  <div className="h-8 border-b border-dashed border-muted-foreground/30" />
                </div>
              </div>
            </Card>

            {/* Progressão de Nível */}
            <Card className={`p-4 bg-gradient-to-r ${selectedLevel.color} text-white`}>
              <div className="flex items-center gap-2 mb-3">
                <span>🏊</span>
                <span className="font-bold">Progressão de Nível</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" readOnly />
                  <span>Permanece no nível atual (consolidando)</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" readOnly />
                  <span>Pronto para avançar! → Próximo nível: ________________</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" readOnly />
                  <span>Aula de reforço recomendada</span>
                </div>
              </div>
            </Card>

            {/* Espaço da Família */}
            <Card className="p-4 bg-primary/5 border-primary/20">
              <div className="flex items-center gap-2 mb-3 text-primary">
                <span>💬</span>
                <span className="font-bold">Espaço da Família</span>
              </div>
              <div className="text-sm text-muted-foreground mb-2">Comentários, dúvidas ou sugestões:</div>
              <div className="h-16 border border-dashed border-muted-foreground/30 rounded bg-background mb-4" />
              <div className="flex justify-between text-sm">
                <div>
                  <span className="text-muted-foreground">Assinatura do Responsável:</span>
                  <div className="w-40 border-b border-muted-foreground/30 mt-1" />
                </div>
                <div className="text-right">
                  <span className="text-muted-foreground">Data:</span>
                  <div className="w-24 border-b border-muted-foreground/30 mt-1" />
                </div>
              </div>
            </Card>
          </div>

          {/* Footer with contact */}
          <div className={`p-4 bg-gradient-to-r ${selectedLevel.color} text-white text-center`}>
            <div className="flex items-center justify-center gap-2 mb-1">
              <img src={mascotAcqua} alt="" className="w-8 h-8 rounded-full" />
              <span className="font-bold">Obrigado por confiar na Acquagyn!</span>
              <span>🌊</span>
            </div>
            <p className="text-xs opacity-90">"Cada conquista é um grande passo na jornada aquática." 💙</p>
            <p className="text-xs opacity-80 mt-1">📷 @acquagyn_oficial | 🌐 www.acquagyn.com.br | ✉ contato@acquagyn.com.br</p>
          </div>
        </Card>

        {/* Mascot row */}
        <div className="flex justify-center gap-4 mt-12">
          <img src={mascotAcqua} alt="" className="w-12 h-12 md:w-16 md:h-16 rounded-full" />
          <img src={mascotTuca} alt="" className="w-12 h-12 md:w-16 md:h-16 rounded-full" />
          <img src={mascotLuma} alt="" className="w-12 h-12 md:w-16 md:h-16 rounded-full" />
          <img src={mascotBibi} alt="" className="w-12 h-12 md:w-16 md:h-16 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default ReportCardSection;
