"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface PageHeroProps {
  label: string;
  title: string;
  subtitle?: string;
  image?: string;
}

export default function PageHero({
  label,
  title,
  subtitle,
  image = "https://images.unsplash.com/photo-1480796925606-2223a8db9bae?w=1920&q=80",
}: PageHeroProps) {
  return (
    <section className="relative flex min-h-[50vh] items-end overflow-hidden pt-24 md:min-h-[55vh]">
      <Image
        src={image}
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="hero-overlay absolute inset-0" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 lg:px-8 lg:pb-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-gold-light"
        >
          {label}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl font-light leading-tight tracking-tight text-white md:text-4xl lg:text-5xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 max-w-xl text-base text-white/70 md:text-lg"
          >
            {subtitle}
          </motion.p>
        )}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 40 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 h-px bg-accent"
        />
      </div>
    </section>
  );
}
