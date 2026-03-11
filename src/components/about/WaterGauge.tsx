import { useEffect, useRef, useState } from "react";

interface WaterGaugeProps {
  value: string;
  label: string;
  percentage: number;
  delay?: number;
}

const WaterGauge = ({ value, label, percentage, delay = 0 }: WaterGaugeProps) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const timer = setTimeout(() => {
      let current = 0;
      const step = percentage / 60;
      const interval = setInterval(() => {
        current += step;
        if (current >= percentage) {
          setProgress(percentage);
          clearInterval(interval);
        } else {
          setProgress(current);
        }
      }, 16);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timer);
  }, [isVisible, percentage, delay]);

  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div ref={ref} className="flex flex-col items-center group">
      <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40">
        {/* Background ring */}
        <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
          <circle
            cx="60" cy="60" r={radius}
            stroke="hsl(var(--muted))"
            strokeWidth="8"
            fill="none"
          />
          <circle
            cx="60" cy="60" r={radius}
            stroke="url(#gaugeGradient)"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-100"
          />
          <defs>
            <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(199, 89%, 48%)" />
              <stop offset="100%" stopColor="hsl(188, 78%, 41%)" />
            </linearGradient>
          </defs>
        </svg>

        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
            {value}
          </span>
        </div>

        {/* Glow effect */}
        <div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ boxShadow: "0 0 30px -5px hsl(199 89% 48% / 0.3)" }}
        />
      </div>
      <span className="mt-3 text-sm sm:text-base font-medium text-muted-foreground text-center">{label}</span>
    </div>
  );
};

export default WaterGauge;
