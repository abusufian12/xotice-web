import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import Hero from "@/components/sections/Hero";
import IntroSection from "@/components/sections/IntroSection";
import CoreValues from "@/components/sections/CoreValues";
import JapanWorldSection from "@/components/sections/JapanWorldSection";
import BusinessOverview from "@/components/sections/BusinessOverview";
import SisterConcerns from "@/components/sections/SisterConcerns";
import PhilosophySection from "@/components/sections/PhilosophySection";
import VisionSection from "@/components/sections/VisionSection";
import WhySection from "@/components/sections/WhySection";
import ContactCTA from "@/components/sections/ContactCTA";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const alternateLocale = locale === "en" ? "ja" : "en";

  return {
    title: dict.metadata.home.title,
    description: dict.metadata.home.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        ja: "/ja",
      },
    },
    openGraph: {
      title: dict.metadata.home.title,
      description: dict.metadata.home.description,
      locale: locale === "ja" ? "ja_JP" : "en_US",
      alternateLocale: alternateLocale === "ja" ? "ja_JP" : "en_US",
      type: "website",
      siteName: "EXOTIC JAPAN LLC",
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: locale === "ja" ? "EXOTIC JAPAN 合同会社" : "EXOTIC JAPAN LLC",
    url: "https://exoticjapan.co.jp",
    logo: "https://exoticjapan.co.jp/logo.png",
    description: dict.metadata.home.description,
    address: {
      "@type": "PostalAddress",
      addressCountry: "JP",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@exoticjapan.co.jp",
      contactType: "customer service",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero dict={dict} locale={locale} />
      <IntroSection dict={dict} />
      <CoreValues dict={dict} />
      <JapanWorldSection dict={dict} />
      <BusinessOverview dict={dict} locale={locale} />
      <SisterConcerns dict={dict} />
      <PhilosophySection dict={dict} />
      <VisionSection dict={dict} />
      <WhySection dict={dict} />
      <ContactCTA dict={dict} locale={locale} />
    </>
  );
}
