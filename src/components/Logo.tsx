import Image from "next/image";

interface LogoProps {
  variant?: "dark-bg" | "light-bg";
  height?: number;
  className?: string;
}

export default function Logo({ variant = "dark-bg", height = 36, className = "" }: LogoProps) {
  const isDarkBg = variant === "dark-bg";

  return (
    <div
      className={`flex items-center gap-2 rounded-xl transition-all duration-200 ${
        isDarkBg
          ? "bg-white/95 hover:bg-white px-3 py-1.5 shadow-sm border border-slate-700/30"
          : "p-0"
      } ${className}`}
    >
      <Image
        src="/logo-light-bg.png"
        alt="HaniQ Labs Logo"
        width={height * 3}
        height={height}
        className="h-8 w-auto object-contain"
        priority
      />
    </div>
  );
}
