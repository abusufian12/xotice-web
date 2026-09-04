import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import PageHero from "@/components/ui/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import BusinessCard from "@/components/ui/BusinessCard";
import ContactCTA from "@/components/sections/ContactCTA";

const businessImages = [
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
  "https://images.unsplash.com/photo-1601050690597-df0568fa7098?w=800&q=80",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return {
    title: dict.metadata.business.title,
    description: dict.metadata.business.description,
    alternates: {
      canonical: `/${locale}/business`,
      languages: { en: "/en/business", ja: "/ja/business" },
    },
    openGraph: {
      title: dict.metadata.business.title,
      description: dict.metadata.business.description,
      locale: locale === "ja" ? "ja_JP" : "en_US",
    },
  };
}

export default async function BusinessPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const basePath = `/${locale}`;

  return (
    <>
      <PageHero
        label={dict.businessPage.label}
        title={dict.businessPage.title}
        subtitle={dict.businessPage.subtitle}
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
      />

      <section className="bg-ivory py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <p className="mx-auto max-w-3xl text-center text-base leading-[1.9] text-charcoal/75 md:text-lg">
              {dict.businessPage.intro}
            </p>
          </ScrollReveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {dict.businesses.items.map((item, index) => (
              <BusinessCard
                key={item.title}
                title={item.title}
                description={item.description}
                image={businessImages[index]}
                href={`${basePath}/contact`}
                exploreLabel={dict.businesses.explore}
                index={index}
              />
            ))}
          </div>

          <ScrollReveal delay={0.3} className="mt-12">
            <div className="border border-charcoal/10 bg-ivory-dark p-8 md:p-12">
              <h3 className="text-xl font-light text-charcoal md:text-2xl">
                {dict.businesses.futureBusiness}
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
                {dict.businesses.futureDescription}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ContactCTA dict={dict} locale={locale} />
    </>
  );
}
