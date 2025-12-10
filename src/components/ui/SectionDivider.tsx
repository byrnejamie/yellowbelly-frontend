interface SectionDividerProps {
  variant?: "dark-to-light" | "light-to-dark";
  className?: string;
}

export function SectionDivider({
  variant = "dark-to-light",
  className = ""
}: SectionDividerProps) {
  const colors = {
    "dark-to-light": {
      top: "#0D0D0D", // brand dark
      bottom: "#FAFAFA", // brand light
    },
    "light-to-dark": {
      top: "#FAFAFA", // brand light
      bottom: "#0D0D0D", // brand dark
    },
  };

  const { top, bottom } = colors[variant];

  return (
    <div className={`relative -mt-px ${className}`}>
      <svg
        viewBox="0 0 1440 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto block"
        preserveAspectRatio="none"
      >
        {/* Background fill */}
        <rect width="1440" height="80" fill={bottom} />
        {/* Curved section */}
        <path
          d="M0 0H1440V40C1440 40 1200 80 720 80C240 80 0 40 0 40V0Z"
          fill={top}
        />
      </svg>
    </div>
  );
}
