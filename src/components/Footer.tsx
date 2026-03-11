import { Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import logoAcquagyn from "@/assets/logo-acquagyn.png";

const Footer = () => {
  return (
    <footer className="relative bg-foreground text-background overflow-hidden">
      {/* Wave shape top */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-8 sm:h-12">
          <path d="M0 60C240 20 480 50 720 30C960 10 1200 50 1440 20V0H0V60Z" fill="hsl(var(--background))" />
        </svg>
      </div>

      {/* Aquatic pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='40' viewBox='0 0 80 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20C10 10 20 30 30 20C40 10 50 30 60 20C70 10 80 20 80 20' stroke='%2390cdf4' fill='none' stroke-width='1.5'/%3E%3C/svg%3E")`,
        backgroundSize: "80px 40px",
      }} />

      <div className="container mx-auto px-4 pt-14 sm:pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
          {/* Logo & Description */}
          <div className="col-span-1 sm:col-span-2">
            <div className="flex items-center mb-4">
              <img src={logoAcquagyn} alt="Acquagyn Logo" className="h-10 sm:h-12 w-auto brightness-0 invert" />
            </div>
            <p className="text-background/80 mb-4 leading-relaxed text-sm sm:text-base">
              Educação e Saúde por meio da Natação e Hidroginástica desde 1994. Metodologia original com 9 níveis
              estruturados para todas as idades.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/enacquagyn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center hover:bg-primary/25 transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-primary" />
              </a>
              <a
                href="https://www.instagram.com/acquagyn.natacao?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center hover:bg-primary/25 transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 font-display">Links Rápidos</h3>
            <ul className="space-y-2">
              {[
                { to: "/sobre", label: "Sobre" },
                { to: "/metodologia", label: "Metodologia" },
                { to: "/niveis", label: "Níveis de Ensino" },
                { to: "/mascotes", label: "Mascotes" },
                { to: "/contato", label: "Contato" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-background/70 hover:text-primary transition-colors duration-300 text-sm sm:text-base">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 font-display">Contato</h3>
            <ul className="space-y-3 sm:space-y-4 text-background/70">
              <li>
                <Link to="/contato" className="hover:text-primary transition-colors duration-300 text-sm sm:text-base">
                  Fale Conosco
                </Link>
              </li>
              <li>
                <span className="font-semibold text-background block mb-1 text-sm sm:text-base">Localização</span>
                <span className="text-xs sm:text-sm">Rua Itabira 783, Daniel Fonseca, Uberlândia MG</span>
              </li>
              <li>
                <span className="font-semibold text-background block mb-1 text-sm sm:text-base">Horário</span>
                <span className="text-xs sm:text-sm">Segunda a Quinta: 06h30 às 20h00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-6 text-center text-background/50 text-xs sm:text-sm">
          <p>© {new Date().getFullYear()} Acquagyn. Todos os direitos reservados. Desenvolvido por @Gabrielmisao.dev</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
