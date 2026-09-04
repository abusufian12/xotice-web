import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import PageHero from "@/components/ui/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SisterConcernCard from "@/components/ui/SisterConcernCard";
import ContactCTA from "@/components/sections/ContactCTA";

const sisterImages = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
  "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=800&q=80",
  "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
  "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return {
    title: dict.metadata.sisterConcerns.title,
    description: dict.metadata.sisterConcerns.description,
    alternates: {
      canonical: `/${locale}/sister-concerns`,
      languages: { en: "/en/sister-concerns", ja: "/ja/sister-concerns" },
    },
    openGraph: {
      title: dict.metadata.sisterConcerns.title,
      description: dict.metadata.sisterConcerns.description,
      locale: locale === "ja" ? "ja_JP" : "en_US",
    },
  };
}

export default async function SisterConcernsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <>
      <PageHero
        label={dict.sisterConcernsPage.label}
        title={dict.sisterConcernsPage.title}
        subtitle={dict.sisterConcernsPage.subtitle}
        image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80"
      />

      <section className="bg-charcoal py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <p className="mx-auto max-w-3xl text-center text-base leading-[1.9] text-white/70 md:text-lg">
              {dict.sisterConcernsPage.intro}
            </p>
          </ScrollReveal>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {dict.sisterConcerns.items.map((item, index) => (
              <SisterConcernCard
                key={item.name}
                number={item.number}
                name={item.name}
                category={item.category}
                description={item.description}
                image={sisterImages[index]}
                exploreLabel={dict.sisterConcerns.explore}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <ContactCTA dict={dict} locale={locale} />
    </>
  );
}
