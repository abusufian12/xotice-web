"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface SisterConcernCardProps {
  number: string;
  name: string;
  category: string;
  description: string;
  image: string;
  exploreLabel: string;
  index: number;
}

export default function SisterConcernCard({
  number,
  name,
  category,
  description,
  image,
  exploreLabel,
  index,
}: SisterConcernCardProps) {
  return (
    <ScrollReveal delay={index * 0.12}>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="group relative overflow-hidden bg-charcoal"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="image-overlay absolute inset-0" />
          <div className="absolute left-6 top-6">
            <span className="text-4xl font-light text-white/20 transition-colors duration-500 group-hover:text-accent/60">
              {number}
            </span>
          </div>
        </div>
        <div className="border-t border-white/10 p-6 md:p-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold-light">
            {category}
          </p>
          <h3 className="mt-2 text-lg font-medium tracking-wide text-white md:text-xl">
            {name}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-white/60">
            {description}
          </p>
          <div className="mt-5 flex items-center gap-2 text-sm text-white/70 transition-colors duration-300 group-hover:text-accent">
            <span>{exploreLabel}</span>
            <ArrowUpRight size={16} />
          </div>
        </div>
      </motion.div>
    </ScrollReveal>
  );
}
