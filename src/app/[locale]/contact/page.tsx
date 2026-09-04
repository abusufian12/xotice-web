import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import PageHero from "@/components/ui/PageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ContactForm, { ContactInfo } from "@/components/sections/ContactForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return {
    title: dict.metadata.contact.title,
    description: dict.metadata.contact.description,
    alternates: {
      canonical: `/${locale}/contact`,
      languages: { en: "/en/contact", ja: "/ja/contact" },
    },
    openGraph: {
      title: dict.metadata.contact.title,
      description: dict.metadata.contact.description,
      locale: locale === "ja" ? "ja_JP" : "en_US",
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <>
      <PageHero
        label={dict.contact.label}
        title={dict.contact.title}
        subtitle={dict.contact.subtitle}
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80"
      />

      <section className="bg-ivory py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <p className="mx-auto mb-16 max-w-2xl text-center text-base leading-[1.9] text-charcoal/75 md:text-lg">
              {dict.contact.description}
            </p>
          </ScrollReveal>

          <div className="grid gap-16 lg:grid-cols-5">
            <ScrollReveal className="lg:col-span-3">
              <ContactForm dict={dict} />
            </ScrollReveal>
            <ScrollReveal delay={0.2} className="lg:col-span-2">
              <ContactInfo dict={dict} />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
