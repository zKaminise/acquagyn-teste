import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Waves } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-card"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 hover:opacity-80 transition-smooth"
          >
            <Waves className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold gradient-ocean bg-clip-text text-transparent">
              Acquagyn
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("metodologia")}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Metodologia
            </button>
            <button
              onClick={() => scrollToSection("niveis")}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Níveis
            </button>
            <button
              onClick={() => scrollToSection("diferenciais")}
              className="text-foreground hover:text-primary transition-smooth font-medium"
            >
              Diferenciais
            </button>
            <Button
              variant="hero"
              size="lg"
              onClick={() => scrollToSection("contato")}
            >
              Fale Conosco
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground hover:text-primary transition-smooth"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-fade-in">
            <button
              onClick={() => scrollToSection("sobre")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-smooth font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("metodologia")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-smooth font-medium"
            >
              Metodologia
            </button>
            <button
              onClick={() => scrollToSection("niveis")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-smooth font-medium"
            >
              Níveis
            </button>
            <button
              onClick={() => scrollToSection("diferenciais")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-smooth font-medium"
            >
              Diferenciais
            </button>
            <Button
              variant="hero"
              size="lg"
              className="w-full"
              onClick={() => scrollToSection("contato")}
            >
              Fale Conosco
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
