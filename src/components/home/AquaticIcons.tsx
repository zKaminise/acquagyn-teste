import { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { className?: string };

export const WaveIcon = ({ className = "", ...props }: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" className={className}>
    <path d="M8 36C14 28 22 44 28 36C34 28 42 44 48 36C54 28 58 36 58 36" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <path d="M8 44C14 36 22 52 28 44C34 36 42 52 48 44C54 36 58 44 58 44" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
  </svg>
);

export const SwimmerIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className}>
    <circle cx="20" cy="20" r="6" fill="currentColor" />
    <path d="M14 32C14 32 18 28 24 28C30 28 32 34 38 34C44 34 48 30 52 28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <path d="M24 28L32 22L40 26" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 44C14 38 22 48 28 42C34 36 42 48 48 42C54 36 58 42 58 42" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />
  </svg>
);

export const DropletIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className}>
    <path d="M32 8C32 8 14 30 14 42C14 52 22 58 32 58C42 58 50 52 50 42C50 30 32 8 32 8Z" fill="currentColor" opacity="0.15" />
    <path d="M32 8C32 8 14 30 14 42C14 52 22 58 32 58C42 58 50 52 50 42C50 30 32 8 32 8Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <ellipse cx="26" cy="38" rx="4" ry="6" fill="currentColor" opacity="0.2" transform="rotate(-15 26 38)" />
  </svg>
);

export const ShieldWaveIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className}>
    <path d="M32 6L10 18V34C10 48 20 56 32 60C44 56 54 48 54 34V18L32 6Z" fill="currentColor" opacity="0.1" />
    <path d="M32 6L10 18V34C10 48 20 56 32 60C44 56 54 48 54 34V18L32 6Z" stroke="currentColor" strokeWidth="2.5" />
    <path d="M18 36C22 30 28 40 32 34C36 28 42 38 46 32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

export const TargetWaveIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className}>
    <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="2.5" opacity="0.3" />
    <circle cx="32" cy="32" r="16" stroke="currentColor" strokeWidth="2.5" opacity="0.5" />
    <circle cx="32" cy="32" r="8" fill="currentColor" opacity="0.2" />
    <circle cx="32" cy="32" r="4" fill="currentColor" />
    <path d="M16 48C22 42 28 52 34 46C40 40 46 48 50 44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
  </svg>
);

export const TrophyIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className}>
    <path d="M20 12H44V30C44 38 38 44 32 44C26 44 20 38 20 30V12Z" fill="currentColor" opacity="0.1" />
    <path d="M20 12H44V30C44 38 38 44 32 44C26 44 20 38 20 30V12Z" stroke="currentColor" strokeWidth="2.5" />
    <path d="M20 18H12C12 18 10 28 20 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M44 18H52C52 18 54 28 44 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M26 44V50H38V44" stroke="currentColor" strokeWidth="2.5" />
    <path d="M22 50H42" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M28 24C30 20 34 28 36 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
  </svg>
);

export const SparkleWaveIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className}>
    <path d="M32 8L36 24L52 20L40 32L52 44L36 40L32 56L28 40L12 44L24 32L12 20L28 24L32 8Z" fill="currentColor" opacity="0.1" />
    <path d="M32 8L36 24L52 20L40 32L52 44L36 40L32 56L28 40L12 44L24 32L12 20L28 24L32 8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <circle cx="32" cy="32" r="4" fill="currentColor" />
  </svg>
);
