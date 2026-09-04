"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/config";

interface LanguageSwitcherProps {
  locale: Locale;
}

export default function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname();

  const switchLocale = (newLocale: Locale) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    return segments.join("/") || `/${newLocale}`;
  };

  return (
    <div className="flex items-center gap-1 text-sm">
      <Link
        href={switchLocale("en")}
        className={`px-2 py-1 transition-colors duration-300 ${
          locale === "en"
            ? "font-medium text-gold-light"
            : "text-white/50 hover:text-white/80"
        }`}
      >
        EN
      </Link>
      <span className="text-white/30">|</span>
      <Link
        href={switchLocale("ja")}
        className={`px-2 py-1 transition-colors duration-300 ${
          locale === "ja"
            ? "font-medium text-gold-light"
            : "text-white/50 hover:text-white/80"
        }`}
      >
        JP
      </Link>
    </div>
  );
}
