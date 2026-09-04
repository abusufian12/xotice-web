"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import type { Dictionary } from "@/i18n/types";
import type { Locale } from "@/i18n/config";

interface ContactCTAProps {
  dict: Dictionary;
  locale: Locale;
}

export default function ContactCTA({ dict, locale }: ContactCTAProps) {
  const basePath = `/${locale}`;

  return (
    <section className="relative overflow-hidden py-24 md:py-32 lg:py-40">
      <Image
        src="https://images.unsplash.com/photo-1528164344705-475426870197?w=1920&q=80"
        alt="Japanese architecture and business"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="hero-overlay absolute inset-0" />

      <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
        <ScrollReveal>
          <h2 className="text-3xl font-light leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
            {dict.contactCta.title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            {dict.contactCta.description}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href={`${basePath}/contact`} variant="primary">
            {dict.contactCta.primary}
          </Button>
          <Button href={`${basePath}/business`} variant="outline-light">
            {dict.contactCta.secondary}
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
