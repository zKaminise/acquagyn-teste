import { Waves, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Waves className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold">Acquagyn</span>
            </div>
            <p className="text-background/80 mb-4 leading-relaxed">
              Educação e Saúde por meio da Natação e Hidroginástica desde 1994. 
              Metodologia original com 9 níveis estruturados para todas as idades.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-smooth"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-primary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-smooth"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-smooth"
                aria-label="Youtube"
              >
                <Youtube className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("sobre")}
                  className="text-background/80 hover:text-primary transition-smooth"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("metodologia")}
                  className="text-background/80 hover:text-primary transition-smooth"
                >
                  Metodologia
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("niveis")}
                  className="text-background/80 hover:text-primary transition-smooth"
                >
                  Níveis de Ensino
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("diferenciais")}
                  className="text-background/80 hover:text-primary transition-smooth"
                >
                  Diferenciais
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-2 text-background/80">
              <li>
                <a
                  href="#contato"
                  className="hover:text-primary transition-smooth"
                >
                  Fale Conosco
                </a>
              </li>
              <li>
                <a
                  href="https://avaliacoes.acquagyn.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-smooth"
                >
                  Sistema de Avaliações
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 text-center text-background/60 text-sm">
          <p>
            © {new Date().getFullYear()} Acquagyn. Todos os direitos reservados. 
            Desenvolvido com{" "}
            <span className="text-primary">❤️</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
