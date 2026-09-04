import ScrollReveal from "@/components/ui/ScrollReveal";
import type { Dictionary } from "@/i18n/types";

interface IntroSectionProps {
  dict: Dictionary;
}

export default function IntroSection({ dict }: IntroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-ivory py-24 md:py-32 lg:py-40">
      <div className="seigaiha-pattern absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <ScrollReveal>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-gold">
              {dict.intro.label}
            </p>
            <h2 className="text-3xl font-light leading-tight tracking-tight text-charcoal md:text-4xl lg:text-5xl">
              {dict.intro.title}
              <br />
              <span className="text-charcoal/80">{dict.intro.titleLine2}</span>
            </h2>
            <div className="mt-6 line-accent" />
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="space-y-6">
              <p className="text-base leading-[1.9] text-charcoal/80 md:text-lg">
                {dict.intro.paragraph1}
              </p>
              <p className="text-base leading-[1.9] text-charcoal/70 md:text-lg">
                {dict.intro.paragraph2}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
