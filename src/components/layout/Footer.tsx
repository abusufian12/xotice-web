import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

interface FooterProps {
  locale: Locale;
  dict: Dictionary;
}

const navItems = [
  { key: "home" as const, href: "" },
  { key: "about" as const, href: "/about" },
  { key: "business" as const, href: "/business" },
  { key: "sisterConcerns" as const, href: "/sister-concerns" },
  { key: "philosophy" as const, href: "/philosophy" },
  { key: "contact" as const, href: "/contact" },
];

export default function Footer({ locale, dict }: FooterProps) {
  const basePath = `/${locale}`;

  return (
    <footer className="bg-charcoal text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href={basePath} className="inline-block">
              <h2 className="text-xl font-semibold tracking-[0.15em]">
                EXOTIC JAPAN
              </h2>
              <p className="mt-1 text-sm text-white/50">
                {locale === "ja" ? dict.footer.company : dict.footer.companyEn}
              </p>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
              {dict.footer.tagline}
            </p>
            <div className="mt-6 line-accent" />
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-gold-light">
              Navigation
            </h3>
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={`${basePath}${item.href}`}
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  {dict.nav[item.key]}
                </Link>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-4">
            <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-gold-light">
              {dict.footer.companyInfo}
            </h3>
            <div className="space-y-3 text-sm text-white/60">
              <p>{dict.footer.address}</p>
              <p>
                <a href={`tel:${dict.footer.phone}`} className="transition-colors hover:text-white">
                  {dict.footer.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${dict.footer.email}`} className="transition-colors hover:text-white">
                  {dict.footer.email}
                </a>
              </p>
              <p>
                <span className="text-white/40">{dict.footer.hours}: </span>
                {dict.footer.hoursValue}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-white/40">{dict.footer.copyright}</p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-white/40 transition-colors hover:text-white/70">
              {dict.footer.privacy}
            </Link>
            <Link href={`${basePath}/contact`} className="text-xs text-white/40 transition-colors hover:text-white/70">
              {dict.footer.contact}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
