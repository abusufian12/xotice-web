"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface BusinessCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  exploreLabel: string;
  index: number;
}

export default function BusinessCard({
  title,
  description,
  image,
  href,
  exploreLabel,
  index,
}: BusinessCardProps) {
  return (
    <ScrollReveal delay={index * 0.1}>
      <Link href={href} className="group block">
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative aspect-[4/5] overflow-hidden bg-charcoal"
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="image-overlay absolute inset-0" />
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-gold-light">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="text-xl font-light text-white md:text-2xl">{title}</h3>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              {description}
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm text-white/80 opacity-0 transition-all duration-500 group-hover:opacity-100">
              <span>{exploreLabel}</span>
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        </motion.div>
      </Link>
    </ScrollReveal>
  );
}
