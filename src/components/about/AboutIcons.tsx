import { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export const PoolLadderIcon = ({ className = "", ...props }: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} {...props}>
    <path d="M16 8V56" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <path d="M36 8V56" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <path d="M16 20H36" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <path d="M16 32H36" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <path d="M16 44H36" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <path d="M6 52C12 46 20 54 26 48C32 42 40 52 46 46C52 40 58 48 58 48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
  </svg>
);

export const GogglesIcon = ({ className = "", ...props }: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} {...props}>
    <ellipse cx="20" cy="30" rx="12" ry="10" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.1" />
    <ellipse cx="44" cy="30" rx="12" ry="10" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.1" />
    <path d="M32 28C32 28 30 24 28 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M32 28C32 28 34 24 36 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M8 28C6 24 6 20 8 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M56 28C58 24 58 20 56 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="16" cy="28" r="2" fill="currentColor" opacity="0.3" />
    <circle cx="40" cy="28" r="2" fill="currentColor" opacity="0.3" />
  </svg>
);

export const LifebuoyIcon = ({ className = "", ...props }: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} {...props}>
    <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="2.5" />
    <circle cx="32" cy="32" r="12" stroke="currentColor" strokeWidth="2.5" />
    <path d="M32 8V20" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    <path d="M32 44V56" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    <path d="M8 32H20" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    <path d="M44 32H56" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.05" />
  </svg>
);

export const WaveRippleIcon = ({ className = "", ...props }: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} {...props}>
    <path d="M8 24C14 16 22 32 28 24C34 16 42 32 48 24C54 16 58 24 58 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <path d="M8 36C14 28 22 44 28 36C34 28 42 44 48 36C54 28 58 36 58 36" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
    <path d="M8 48C14 40 22 56 28 48C34 40 42 56 48 48C54 40 58 48 58 48" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
  </svg>
);

export const HeartWaterIcon = ({ className = "", ...props }: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} {...props}>
    <path d="M32 54C32 54 8 38 8 22C8 14 14 8 22 8C26 8 30 10 32 14C34 10 38 8 42 8C50 8 56 14 56 22C56 38 32 54 32 54Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M18 36C22 32 28 38 32 34C36 30 40 36 44 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
  </svg>
);

export const StarWaterIcon = ({ className = "", ...props }: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} {...props}>
    <path d="M32 6L38 24H56L42 36L48 54L32 44L16 54L22 36L8 24H26L32 6Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M20 46C24 42 30 48 34 44C38 40 42 46 46 42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
  </svg>
);

export const HandsWaterIcon = ({ className = "", ...props }: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} {...props}>
    <path d="M12 36C12 36 20 28 32 28C44 28 52 36 52 36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M16 32C16 32 22 24 32 24C42 24 48 32 48 32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
    <circle cx="32" cy="16" r="6" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2.5" />
    <path d="M8 48C14 42 22 52 28 46C34 40 42 52 48 46C54 40 58 46 58 46" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
  </svg>
);
