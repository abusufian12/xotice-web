"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import LanguageSwitcher from "./LanguageSwitcher";

interface HeaderProps {
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

export default function Header({ locale, dict }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const basePath = `/${locale}`;
  const isHome = pathname === basePath || pathname === `${basePath}/`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? "bg-charcoal/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <Link
          href={basePath}
          className="group flex flex-col"
        >
          <span className="text-lg font-semibold tracking-[0.15em] text-white transition-colors group-hover:text-gold-light">
            EXOTIC JAPAN
          </span>
          {locale === "ja" && (
            <span className="text-[10px] tracking-wider text-white/50">合同会社</span>
          )}
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => {
            const href = `${basePath}${item.href}`;
            const isActive =
              item.href === ""
                ? isHome
                : pathname.startsWith(href);
            return (
              <Link
                key={item.key}
                href={href}
                className={`text-sm tracking-wide transition-colors duration-300 ${
                  isActive
                    ? "text-gold-light"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {dict.nav[item.key]}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <LanguageSwitcher locale={locale} />
          <Link
            href={`${basePath}/contact`}
            className="border border-white/30 px-5 py-2.5 text-sm tracking-wide text-white transition-all duration-300 hover:border-accent hover:bg-accent hover:text-white"
          >
            {dict.nav.contactUs}
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-charcoal lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 pb-6">
              {navItems.map((item) => {
                const href = `${basePath}${item.href}`;
                return (
                  <Link
                    key={item.key}
                    href={href}
                    className="border-b border-white/10 py-4 text-sm tracking-wide text-white/80 transition-colors hover:text-white"
                  >
                    {dict.nav[item.key]}
                  </Link>
                );
              })}
              <div className="mt-4 flex items-center justify-between">
                <LanguageSwitcher locale={locale} />
                <Link
                  href={`${basePath}/contact`}
                  className="border border-white/30 px-5 py-2.5 text-sm text-white"
                >
                  {dict.nav.contactUs}
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
