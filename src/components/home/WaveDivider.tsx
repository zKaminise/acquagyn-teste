const WaveDivider = ({ flip = false, className = "" }: { flip?: boolean; className?: string }) => (
  <div className={`absolute left-0 right-0 z-10 ${flip ? "top-0 rotate-180" : "bottom-0"} ${className}`}>
    <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-16 sm:h-20 md:h-24" preserveAspectRatio="none">
      <path
        d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V100H0V40Z"
        fill="hsl(var(--background))"
      />
      <path
        d="M0 60C200 30 400 80 600 50C800 20 1000 70 1200 40C1300 25 1380 55 1440 50V100H0V60Z"
        fill="hsl(var(--background))"
        opacity="0.5"
      />
    </svg>
  </div>
);

export default WaveDivider;
