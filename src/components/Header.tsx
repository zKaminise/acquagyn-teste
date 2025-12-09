import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoAcquagyn from "@/assets/logo-acquagyn.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

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
          <Link
            to="/"
            className="flex items-center hover:opacity-80 transition-smooth"
          >
            <img 
              src={logoAcquagyn} 
              alt="Acquagyn Logo" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/sobre"
              className={`text-foreground hover:text-primary transition-smooth font-medium relative ${
                isActive("/sobre") ? "text-primary font-semibold" : ""
              }`}
            >
              Sobre
              {isActive("/sobre") && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary" />
              )}
            </Link>
            <Link
              to="/metodologia"
              className={`text-foreground hover:text-primary transition-smooth font-medium relative ${
                isActive("/metodologia") ? "text-primary font-semibold" : ""
              }`}
            >
              Metodologia
              {isActive("/metodologia") && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary" />
              )}
            </Link>
            <Link
              to="/servicos"
              className={`text-foreground hover:text-primary transition-smooth font-medium relative ${
                isActive("/servicos") ? "text-primary font-semibold" : ""
              }`}
            >
              Serviços
              {isActive("/servicos") && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary" />
              )}
            </Link>
            <Link
              to="/niveis"
              className={`text-foreground hover:text-primary transition-smooth font-medium relative ${
                isActive("/niveis") ? "text-primary font-semibold" : ""
              }`}
            >
              Níveis
              {isActive("/niveis") && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary" />
              )}
            </Link>
            <Link
              to="/mascotes"
              className={`text-foreground hover:text-primary transition-smooth font-medium relative ${
                isActive("/mascotes") ? "text-primary font-semibold" : ""
              }`}
            >
              Mascotes
              {isActive("/mascotes") && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary" />
              )}
            </Link>
            <Link to="/contato">
              <Button variant="hero" size="lg">
                Fale Conosco
              </Button>
            </Link>
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
            <Link
              to="/sobre"
              className={`block w-full text-left py-2 transition-smooth font-medium ${
                isActive("/sobre") ? "text-primary font-semibold" : "text-foreground hover:text-primary"
              }`}
            >
              Sobre
            </Link>
            <Link
              to="/metodologia"
              className={`block w-full text-left py-2 transition-smooth font-medium ${
                isActive("/metodologia") ? "text-primary font-semibold" : "text-foreground hover:text-primary"
              }`}
            >
              Metodologia
            </Link>
            <Link
              to="/servicos"
              className={`block w-full text-left py-2 transition-smooth font-medium ${
                isActive("/servicos") ? "text-primary font-semibold" : "text-foreground hover:text-primary"
              }`}
            >
              Serviços
            </Link>
            <Link
              to="/niveis"
              className={`block w-full text-left py-2 transition-smooth font-medium ${
                isActive("/niveis") ? "text-primary font-semibold" : "text-foreground hover:text-primary"
              }`}
            >
              Níveis
            </Link>
            <Link
              to="/mascotes"
              className={`block w-full text-left py-2 transition-smooth font-medium ${
                isActive("/mascotes") ? "text-primary font-semibold" : "text-foreground hover:text-primary"
              }`}
            >
              Mascotes
            </Link>
            <Link to="/contato" className="block">
              <Button variant="hero" size="lg" className="w-full">
                Fale Conosco
              </Button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
