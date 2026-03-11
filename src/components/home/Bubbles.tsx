import { useMemo } from "react";

const Bubbles = ({ count = 12, className = "" }: { count?: number; className?: string }) => {
  const bubbles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        size: Math.random() * 20 + 6,
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: Math.random() * 10 + 12,
        opacity: Math.random() * 0.3 + 0.1,
      })),
    [count]
  );

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {bubbles.map((b) => (
        <div
          key={b.id}
          className="absolute rounded-full animate-bubble"
          style={{
            width: b.size,
            height: b.size,
            left: `${b.left}%`,
            bottom: "-10%",
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
            background: `radial-gradient(circle at 30% 30%, hsla(199, 89%, 80%, ${b.opacity + 0.2}), hsla(199, 89%, 48%, ${b.opacity}))`,
            boxShadow: `inset -2px -2px 4px hsla(199, 89%, 90%, 0.3), inset 2px 2px 4px hsla(0, 0%, 100%, 0.2)`,
          }}
        />
      ))}
    </div>
  );
};

export default Bubbles;
