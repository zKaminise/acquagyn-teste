import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Printer, Star, CheckCircle } from "lucide-react";
import { useState } from "react";
import mascotLuma from "@/assets/mascot-luma.jpg";
import mascotAcqua from "@/assets/mascot-acqua.jpg";
import mascotTuca from "@/assets/mascot-tuca.jpg";
import mascotBibi from "@/assets/mascot-bibi.jpg";

const ReportCardSection = () => {
  const [selectedLevel, setSelectedLevel] = useState("Peixinhos");

  const levels = [
    "Baby Splash",
    "Peixinhos",
    "Ondas",
    "Mares",
    "Correnteza",
    "Ritmo & Técnica",
    "Adulto",
  ];

  const competencies = [
    "Entra na água com confiança",
    "Sopra bolhas na superfície",
    "Flutuação com apoio",
    "Pernada básica com prancha",
    "Imersão completa do rosto",
    "Deslocamento básico (cachorrinho)",
  ];

  const badges = [
    "Soprador de Bolhas",
    "Flutuador Estrela",
    "Peixinho Corajoso",
    "Amigo da Água",
  ];

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
            Boletins coloridos por nível para enviar aos pais. Selecione o nível e imprima ou baixe o modelo!
          </p>
        </div>

        {/* Report Card Preview */}
        <Card className="max-w-3xl mx-auto overflow-hidden">
          {/* Level Selector */}
          <div className="p-4 border-b flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-primary" />
              <span className="font-medium">Selecione o Nível</span>
            </div>
            <Button variant="hero" size="sm" className="gap-2">
              <Printer className="w-4 h-4" />
              Imprimir Boletim
            </Button>
          </div>

          {/* Level Tabs */}
          <div className="flex flex-wrap gap-1 p-2 bg-muted/50 overflow-x-auto">
            {levels.map((level) => (
              <button
                key={level}
                onClick={() => setSelectedLevel(level)}
                className={`px-3 py-1.5 rounded-full text-sm whitespace-nowrap transition-smooth ${
                  selectedLevel === level
                    ? "bg-primary text-white"
                    : "bg-background hover:bg-primary/10"
                }`}
              >
                {level}
              </button>
            ))}
          </div>

          {/* Report Card Content */}
          <div className="p-4 space-y-4">
            {/* Header with mascot */}
            <div className="bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-xl p-4 text-white relative overflow-hidden">
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
                    <div className="text-lg font-bold">Peixinhos - Adaptação ao Meio Aquático</div>
                    <div className="text-sm opacity-80">Faixa etária: 3 a 4 anos</div>
                  </div>
                </div>
                <div className="text-center">
                  <img src={mascotLuma} alt="Luma" className="w-16 h-16 rounded-full bg-white/20 p-1" />
                  <div className="text-xs mt-1">Luma</div>
                </div>
              </div>
            </div>

            {/* Student Data */}
            <Card className="p-4 bg-cyan-50 border-cyan-200">
              <div className="flex items-center gap-2 mb-4 text-cyan-600">
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
              <img src={mascotLuma} alt="Luma" className="w-10 h-10 rounded-full" />
              <p className="text-sm italic text-muted-foreground">
                "Olá! Eu sou Luma! A estrelinha criativa que ensina respiração com brincadeiras!"
              </p>
            </div>

            {/* Competencies */}
            <Card className="p-4 bg-cyan-50 border-cyan-200">
              <div className="flex items-center gap-2 mb-2 text-cyan-600">
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
                {competencies.map((comp, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-white rounded">
                    <span className="text-sm text-cyan-700">{comp}</span>
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
            <Card className="p-4 bg-cyan-50 border-cyan-200">
              <div className="flex items-center gap-2 mb-4 text-cyan-600">
                <Star className="w-5 h-5" />
                <span className="font-bold">Conquistas do Bimestre 🏆</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {badges.map((badge, index) => (
                  <div key={index} className="flex items-center gap-2 p-2 bg-white rounded">
                    <input type="checkbox" className="w-4 h-4" readOnly />
                    <span className="text-sm">{badge}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Footer tip */}
          <div className="p-4 bg-muted/50 text-center text-sm text-muted-foreground">
            💡 Dica: Use "Ctrl + P" ou o botão acima para imprimir. Configure para "Cor" e "Retrato" para melhor resultado.
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
