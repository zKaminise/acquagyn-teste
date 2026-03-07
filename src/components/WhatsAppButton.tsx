import whatsappIcon from "@/assets/whatsapp-icon.png";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/553432171207"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-fade-in"
      aria-label="Contato via WhatsApp"
    >
      <img src={whatsappIcon} alt="WhatsApp" className="w-full h-full" />
    </a>
  );
};

export default WhatsAppButton;
