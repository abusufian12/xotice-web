import Link from "next/link";

interface ButtonProps {
  href: string;
  variant?: "primary" | "secondary" | "outline" | "outline-light";
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
}: ButtonProps) {
  const variants = {
    primary:
      "bg-accent text-white hover:bg-accent-muted border border-accent",
    secondary:
      "bg-charcoal text-white hover:bg-charcoal-light border border-charcoal",
    outline:
      "bg-transparent text-charcoal border border-charcoal/30 hover:border-charcoal hover:bg-charcoal hover:text-white",
    "outline-light":
      "bg-transparent text-white border border-white/40 hover:border-white hover:bg-white/10",
  };

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center px-8 py-3.5 text-sm tracking-wide transition-all duration-300 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
