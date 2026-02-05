import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 bg-primary/10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Pronto para começar?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Agende sua aula experimental e descubra como a metodologia Acquagyn pode transformar seu aprendizado na natação.
        </p>
        <a
          href="https://wa.me/5562999999999"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="hero" size="lg" className="gap-2">
            <MessageCircle className="w-5 h-5" />
            Agende sua aula experimental
          </Button>
        </a>
      </div>
    </section>
  );
};

export default CTASection;
