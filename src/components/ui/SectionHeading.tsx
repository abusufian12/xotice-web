import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  return (
    <ScrollReveal className={`${align === "center" ? "text-center" : ""}`}>
      {label && (
        <p
          className={`mb-4 text-xs font-medium uppercase tracking-[0.25em] ${
            light ? "text-gold-light" : "text-gold"
          }`}
        >
          {label}
        </p>
      )}
      <h2
        className={`text-3xl font-light leading-tight tracking-tight md:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed md:text-lg ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-white/60" : "text-muted"}`}
        >
          {subtitle}
        </p>
      )}
      <div className={`mt-6 line-accent ${align === "center" ? "mx-auto" : ""}`} />
    </ScrollReveal>
  );
}
