"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import type { Dictionary } from "@/i18n/types";

interface VisionSectionProps {
  dict: Dictionary;
}

export default function VisionSection({ dict }: VisionSectionProps) {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 lg:py-40">
      <Image
        src="https://images.unsplash.com/photo-1493976040374-85c8e322f984?w=1920&q=80"
        alt="Japanese landscape at sunrise"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-charcoal/80" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <ScrollReveal>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-gold-light">
              {dict.vision.label}
            </p>
            <h2 className="text-3xl font-light leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
              {dict.vision.title}
            </h2>
            <div className="mt-6 line-accent-gold" />
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="mt-8 text-base leading-[1.9] text-white/70 md:text-lg">
              {dict.vision.description}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4} className="mt-16">
            <div className="flex items-center gap-6">
              <span className="text-2xl font-light tracking-wide text-white/40 md:text-3xl">
                {dict.vision.concept}
              </span>
              <span className="text-accent text-xl md:text-2xl">×</span>
              <span className="text-2xl font-light tracking-wide text-white md:text-3xl">
                {dict.vision.conceptSub}
              </span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
