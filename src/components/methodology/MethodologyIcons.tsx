import { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export const ShieldWaterIcon = ({ className = "", ...props }: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} {...props}>
    <path d="M32 6L10 18V34C10 48 20 56 32 60C44 56 54 48 54 34V18L32 6Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2.5" />
    <path d="M18 38C22 32 28 42 32 36C36 30 42 40 46 34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M26 24L30 28L38 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ProgressionIcon = ({ className = "", ...props }: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} {...props}>
    <path d="M8 48L20 36L32 42L44 28L56 16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="20" cy="36" r="3" fill="currentColor" fillOpacity="0.3" />
    <circle cx="32" cy="42" r="3" fill="currentColor" fillOpacity="0.3" />
    <circle cx="44" cy="28" r="3" fill="currentColor" fillOpacity="0.3" />
    <circle cx="56" cy="16" r="4" fill="currentColor" />
    <path d="M8 54C14 48 22 56 28 50C34 44 42 54 48 48" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.3" />
  </svg>
);

export const StopwatchIcon = ({ className = "", ...props }: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} {...props}>
    <circle cx="32" cy="36" r="22" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.08" />
    <path d="M28 8H36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M32 8V14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M32 36L42 26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="32" cy="36" r="3" fill="currentColor" />
    <path d="M48 16L52 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

export const PoolLaneIcon = ({ className = "", ...props }: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} {...props}>
    <rect x="8" y="12" width="48" height="40" rx="4" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.05" />
    <path d="M8 22H56" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.5" />
    <path d="M8 32H56" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.5" />
    <path d="M8 42H56" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.5" />
    <circle cx="20" cy="27" r="4" fill="currentColor" fillOpacity="0.2" />
    <path d="M20 31L24 27" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M20 31L16 27" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M10 48C16 44 22 50 28 46C34 42 40 50 46 46C52 42 54 46 54 46" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
  </svg>
);

export const HeartPlayIcon = ({ className = "", ...props }: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} {...props}>
    <path d="M32 54C32 54 8 38 8 22C8 14 14 8 22 8C26 8 30 10 32 14C34 10 38 8 42 8C50 8 56 14 56 22C56 38 32 54 32 54Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M28 26L40 32L28 38V26Z" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
  </svg>
);
