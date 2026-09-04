import BusinessCard from "@/components/ui/BusinessCard";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import type { Dictionary } from "@/i18n/types";
import type { Locale } from "@/i18n/config";

interface BusinessOverviewProps {
  dict: Dictionary;
  locale: Locale;
}

const businessImages = [
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
  "https://images.unsplash.com/photo-1601050690597-df0568fa7098?w=800&q=80",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
];

export default function BusinessOverview({ dict, locale }: BusinessOverviewProps) {
  const basePath = `/${locale}`;

  return (
    <section className="bg-ivory-dark py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label={dict.businesses.label}
          title={dict.businesses.title}
          subtitle={dict.businesses.subtitle}
          align="center"
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dict.businesses.items.map((item, index) => (
            <BusinessCard
              key={item.title}
              title={item.title}
              description={item.description}
              image={businessImages[index]}
              href={`${basePath}/business`}
              exploreLabel={dict.businesses.explore}
              index={index}
            />
          ))}
        </div>

        <ScrollReveal delay={0.3} className="mt-12 text-center">
          <div className="inline-block border border-charcoal/10 bg-ivory px-8 py-6">
            <h3 className="text-lg font-light text-charcoal">
              {dict.businesses.futureBusiness}
            </h3>
            <p className="mt-2 text-sm text-muted">
              {dict.businesses.futureDescription}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
