import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import PageHero from "@/components/ui/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CoreValues from "@/components/sections/CoreValues";
import ContactCTA from "@/components/sections/ContactCTA";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return {
    title: dict.metadata.about.title,
    description: dict.metadata.about.description,
    alternates: {
      canonical: `/${locale}/about`,
      languages: { en: "/en/about", ja: "/ja/about" },
    },
    openGraph: {
      title: dict.metadata.about.title,
      description: dict.metadata.about.description,
      locale: locale === "ja" ? "ja_JP" : "en_US",
    },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  const sections = [
    dict.about.mission,
    dict.about.approach,
    dict.about.global,
  ];

  return (
    <>
      <PageHero
        label={dict.about.label}
        title={dict.about.title}
        subtitle={dict.about.subtitle}
        image="https://images.unsplash.com/photo-1528164344705-475426870197?w=1920&q=80"
      />

      <section className="bg-ivory py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-3">
            {sections.map((section, index) => (
              <ScrollReveal key={section.title} delay={index * 0.15}>
                <div>
                  <span className="text-xs font-medium tracking-[0.2em] text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-3 text-xl font-light text-charcoal md:text-2xl">
                    {section.title}
                  </h2>
                  <div className="mt-4 line-accent" />
                  <p className="mt-6 text-base leading-[1.9] text-charcoal/75">
                    {section.content}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CoreValues dict={dict} />
      <ContactCTA dict={dict} locale={locale} />
    </>
  );
}
