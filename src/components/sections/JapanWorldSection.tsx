"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import type { Dictionary } from "@/i18n/types";

interface JapanWorldSectionProps {
  dict: Dictionary;
}

const connectionPoints = [
  { x: 680, y: 280, label: "Asia" },
  { x: 520, y: 220, label: "Europe" },
  { x: 200, y: 260, label: "Americas" },
  { x: 580, y: 380, label: "Middle East" },
  { x: 750, y: 420, label: "Oceania" },
];

export default function JapanWorldSection({ dict }: JapanWorldSectionProps) {
  const japanX = 820;
  const japanY = 260;

  return (
    <section className="relative overflow-hidden bg-ivory py-24 md:py-32 lg:py-40">
      <div className="grid-pattern absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            label={dict.japanWorld.label}
            title={dict.japanWorld.title}
          />

          <ScrollReveal delay={0.3} direction="left">
            <p className="text-base leading-[1.9] text-charcoal/75 md:text-lg">
              {dict.japanWorld.description}
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.4} className="mt-16">
          <div className="relative mx-auto aspect-[2/1] max-w-4xl">
            <svg
              viewBox="0 0 1000 500"
              className="h-full w-full"
              aria-hidden="true"
            >
              {/* Subtle world outline */}
              <ellipse
                cx="500"
                cy="250"
                rx="450"
                ry="200"
                fill="none"
                stroke="rgba(166, 124, 82, 0.15)"
                strokeWidth="1"
              />
              <ellipse
                cx="500"
                cy="250"
                rx="350"
                ry="155"
                fill="none"
                stroke="rgba(166, 124, 82, 0.08)"
                strokeWidth="1"
              />
              <ellipse
                cx="500"
                cy="250"
                rx="250"
                ry="110"
                fill="none"
                stroke="rgba(166, 124, 82, 0.05)"
                strokeWidth="1"
              />

              {/* Connection lines */}
              {connectionPoints.map((point, i) => (
                <motion.line
                  key={point.label}
                  x1={japanX}
                  y1={japanY}
                  x2={point.x}
                  y2={point.y}
                  stroke="rgba(185, 28, 28, 0.3)"
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="pulse-line"
                />
              ))}

              {/* Connection points */}
              {connectionPoints.map((point, i) => (
                <motion.circle
                  key={`dot-${point.label}`}
                  cx={point.x}
                  cy={point.y}
                  r="4"
                  fill="rgba(166, 124, 82, 0.6)"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
                  viewport={{ once: true }}
                />
              ))}

              {/* Japan marker */}
              <motion.circle
                cx={japanX}
                cy={japanY}
                r="8"
                fill="#b91c1c"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              />
              <motion.circle
                cx={japanX}
                cy={japanY}
                r="16"
                fill="none"
                stroke="rgba(185, 28, 28, 0.3)"
                strokeWidth="1"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              />
              <text
                x={japanX}
                y={japanY - 24}
                textAnchor="middle"
                className="fill-charcoal text-[14px] font-medium"
                style={{ fontFamily: "inherit" }}
              >
                Japan
              </text>
            </svg>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
