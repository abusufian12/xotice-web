import ScrollReveal from "@/components/ui/ScrollReveal";
import type { Dictionary } from "@/i18n/types";

interface PhilosophySectionProps {
  dict: Dictionary;
}

export default function PhilosophySection({ dict }: PhilosophySectionProps) {
  return (
    <section className="relative overflow-hidden bg-ivory py-24 md:py-32 lg:py-40">
      <div className="seigaiha-pattern absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-gold">
            {dict.philosophy.label}
          </p>
        </ScrollReveal>

        <div className="grid gap-16 lg:grid-cols-12">
          <ScrollReveal className="lg:col-span-5">
            <h2 className="text-3xl font-light leading-tight tracking-tight text-charcoal md:text-4xl lg:text-5xl">
              {dict.philosophy.title}
            </h2>
            <div className="mt-6 line-accent" />
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="lg:col-span-7">
            <blockquote className="text-xl font-light leading-relaxed text-charcoal/90 md:text-2xl lg:text-3xl">
              {dict.philosophy.quote}
            </blockquote>
            <p className="mt-8 text-base leading-[1.9] text-charcoal/70 md:text-lg">
              {dict.philosophy.statement}
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.4} className="mt-20">
          <div className="flex flex-wrap gap-6 md:gap-12">
            {dict.philosophy.keywords.map((keyword) => (
              <span
                key={keyword}
                className="text-2xl font-light tracking-wide text-charcoal/20 md:text-4xl lg:text-5xl"
              >
                {keyword}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
