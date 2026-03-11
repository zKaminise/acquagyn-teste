import { useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface MascotCardProps {
  name: string;
  image: string;
  gradient: string;
  hoverAnimation: string;
  icon: LucideIcon;
  personality: string;
  description: string;
  characteristics: string[];
  favoriteThing: string;
  index: number;
}

const MascotCard = ({
  name,
  image,
  gradient,
  hoverAnimation,
  icon: Icon,
  personality,
  description,
  characteristics,
  favoriteThing,
  index,
}: MascotCardProps) => {
  const bubbles = useMemo(
    () =>
      Array.from({ length: 5 }, (_, i) => ({
        id: i,
        size: Math.random() * 12 + 4,
        left: Math.random() * 80 + 10,
        delay: Math.random() * 4,
        duration: Math.random() * 4 + 6,
        opacity: Math.random() * 0.25 + 0.1,
      })),
    []
  );

  return (
    <div
      className="group relative rounded-3xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-500 hover:-translate-y-3 animate-fade-in"
      style={{ animationDelay: `${index * 120}ms` }}
    >
      {/* Gradient top area with mascot */}
      <div className={`relative h-72 bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden`}>
        {/* Floating bubbles */}
        {bubbles.map((b) => (
          <div
            key={b.id}
            className="absolute rounded-full animate-bubble pointer-events-none"
            style={{
              width: b.size,
              height: b.size,
              left: `${b.left}%`,
              bottom: "-10%",
              animationDuration: `${b.duration}s`,
              animationDelay: `${b.delay}s`,
              background: `radial-gradient(circle at 30% 30%, hsla(0,0%,100%,${b.opacity + 0.3}), hsla(0,0%,100%,${b.opacity}))`,
            }}
          />
        ))}

        {/* Shimmer overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/10" />

        {/* Mascot image with unique hover animation */}
        <img
          src={image}
          alt={`Mascote ${name}`}
          className={`relative z-10 w-44 h-44 object-contain drop-shadow-2xl transition-all duration-500 ${hoverAnimation}`}
        />

        {/* Icon badge */}
        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-smooth">
          <Icon className="w-5 h-5 text-white" />
        </div>
      </div>

      {/* Content area */}
      <div className="relative bg-card p-6">
        {/* Curved wave separator */}
        <svg
          className="absolute -top-6 left-0 w-full"
          viewBox="0 0 400 24"
          preserveAspectRatio="none"
        >
          <path
            d="M0,24 L0,12 Q50,0 100,12 Q150,24 200,12 Q250,0 300,12 Q350,24 400,12 L400,24 Z"
            fill="hsl(var(--card))"
          />
        </svg>

        <div className="relative z-10">
          <h3 className="font-display text-2xl font-bold mb-1">{name}</h3>
          <p className="text-sm text-primary font-semibold mb-3">{personality}</p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-3">
            {characteristics.map((char, i) => (
              <Badge
                key={i}
                variant="secondary"
                className="text-xs px-2 py-0.5"
              >
                {char}
              </Badge>
            ))}
          </div>

          <p className="text-xs text-muted-foreground italic">
            ⭐ {favoriteThing}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MascotCard;
