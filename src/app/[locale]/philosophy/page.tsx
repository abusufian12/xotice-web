import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import PageHero from "@/components/ui/PageHero";
import PhilosophySection from "@/components/sections/PhilosophySection";
import VisionSection from "@/components/sections/VisionSection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ContactCTA from "@/components/sections/ContactCTA";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return {
    title: dict.metadata.philosophy.title,
    description: dict.metadata.philosophy.description,
    alternates: {
      canonical: `/${locale}/philosophy`,
      languages: { en: "/en/philosophy", ja: "/ja/philosophy" },
    },
    openGraph: {
      title: dict.metadata.philosophy.title,
      description: dict.metadata.philosophy.description,
      locale: locale === "ja" ? "ja_JP" : "en_US",
    },
  };
}

export default async function PhilosophyPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <>
      <PageHero
        label={dict.philosophyPage.label}
        title={dict.philosophyPage.title}
        image="https://images.unsplash.com/photo-1493976040374-85c8e322f984?w=1920&q=80"
      />

      <section className="bg-ivory py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <p className="mx-auto max-w-3xl text-center text-base leading-[1.9] text-charcoal/75 md:text-lg">
              {dict.philosophyPage.intro}
            </p>
          </ScrollReveal>

          <div className="mt-20 space-y-16">
            {dict.philosophyPage.principles.map((principle, index) => (
              <ScrollReveal key={principle.title} delay={index * 0.1}>
                <div className="grid gap-6 border-t border-charcoal/10 pt-12 md:grid-cols-12 md:gap-12">
                  <div className="md:col-span-4">
                    <span className="text-xs font-medium tracking-[0.2em] text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="mt-3 text-xl font-light text-charcoal md:text-2xl">
                      {principle.title}
                    </h2>
                  </div>
                  <div className="md:col-span-8">
                    <p className="text-base leading-[1.9] text-charcoal/75 md:text-lg">
                      {principle.content}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <PhilosophySection dict={dict} />
      <VisionSection dict={dict} />
      <ContactCTA dict={dict} locale={locale} />
    </>
  );
}
