import { Facebook, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import logoAcquagyn from "@/assets/logo-acquagyn.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img src={logoAcquagyn} alt="Acquagyn Logo" className="h-12 w-auto brightness-0 invert" />
            </div>
            <p className="text-background/80 mb-4 leading-relaxed">
              Educação e Saúde por meio da Natação e Hidroginástica desde 1994. Metodologia original com 9 níveis
              estruturados para todas as idades.
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
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/sobre" className="text-background/80 hover:text-primary transition-smooth">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/metodologia" className="text-background/80 hover:text-primary transition-smooth">
                  Metodologia
                </Link>
              </li>
              <li>
                <Link to="/niveis" className="text-background/80 hover:text-primary transition-smooth">
                  Níveis de Ensino
                </Link>
              </li>
              <li>
                <Link to="/mascotes" className="text-background/80 hover:text-primary transition-smooth">
                  Mascotes
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-background/80 hover:text-primary transition-smooth">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-2 text-background/80">
              <li>
                <Link to="/contato" className="hover:text-primary transition-smooth">
                  Fale Conosco
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 text-center text-background/60 text-sm">
          <p>
            © {new Date().getFullYear()} Acquagyn. Todos os direitos reservados. Desenvolvido por @Gabrielmisao.dev
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
