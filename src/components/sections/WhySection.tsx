import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import type { Dictionary } from "@/i18n/types";

interface WhySectionProps {
  dict: Dictionary;
}

export default function WhySection({ dict }: WhySectionProps) {
  return (
    <section className="bg-ivory py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label={dict.why.label}
          title={dict.why.title}
          align="center"
        />

        <div className="mt-16 grid gap-px bg-charcoal/10 md:grid-cols-2 lg:grid-cols-4">
          {dict.why.items.map((item, index) => (
            <ScrollReveal key={item.number} delay={index * 0.1}>
              <div className="group h-full bg-ivory p-8 transition-colors duration-500 hover:bg-ivory-dark md:p-10">
                <span className="text-4xl font-light text-charcoal/10 transition-colors duration-500 group-hover:text-accent/30 md:text-5xl">
                  {item.number}
                </span>
                <h3 className="mt-6 text-lg font-medium text-charcoal md:text-xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
