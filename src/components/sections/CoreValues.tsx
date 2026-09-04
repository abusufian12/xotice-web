import { Shield, Award, Heart } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import type { Dictionary } from "@/i18n/types";

interface CoreValuesProps {
  dict: Dictionary;
}

const icons = [Shield, Award, Heart];

export default function CoreValues({ dict }: CoreValuesProps) {
  return (
    <section className="bg-charcoal py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label={dict.coreValues.label}
          title={dict.coreValues.title}
          light
          align="center"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3 md:gap-12">
          {dict.coreValues.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <ScrollReveal key={item.number} delay={index * 0.15}>
                <div className="group text-center md:text-left">
                  <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center border border-white/10 transition-colors duration-500 group-hover:border-accent/50 md:mx-0">
                    <Icon size={24} className="text-gold-light" strokeWidth={1.5} />
                  </div>
                  <span className="text-xs font-medium tracking-[0.2em] text-accent">
                    {item.number}
                  </span>
                  <h3 className="mt-3 text-xl font-light text-white md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/60 md:text-base">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
