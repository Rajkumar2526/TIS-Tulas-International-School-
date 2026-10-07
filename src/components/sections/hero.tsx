"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Compass, ShieldCheck, Sparkles, Trophy, Users, Trees } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/animation/reveal";

interface HeroProps {
  onOpenEnquiry?: () => void;
  onOpenVirtualTour?: () => void;
}

export function Hero({ onOpenEnquiry, onOpenVirtualTour }: HeroProps) {
  return (
    <section className="relative pt-[136px] pb-20 md:pt-[168px] md:pb-28 overflow-hidden bg-gradient-to-b from-tis-cream/60 via-white to-tis-cream/40 dark:from-tis-dark dark:via-tis-surface-dark dark:to-tis-dark">
      {/* Background Decorative Gradient Orbs */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-tis-red/10 via-tis-gold/15 to-tis-teal/10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-40 -left-20 w-72 h-72 bg-tis-gold/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute top-60 -right-20 w-80 h-80 bg-tis-teal/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Admissions Badge */}
            <Reveal direction="down" delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tis-red/10 border border-tis-red/20 text-tis-red dark:bg-[#0C0F14] dark:border-tis-gold/30 dark:text-tis-gold text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
                <Sparkles className="w-4 h-4 text-tis-red dark:text-tis-gold animate-spin-slow" />
                <span>Admissions Open for Session 2026–27 • Classes IV to XII</span>
              </div>
            </Reveal>

            {/* Main Headline */}
            <Reveal direction="up" delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-tis-charcoal dark:text-white leading-[1.12]">
                LET&apos;S DO IT{" "}
                <span className="relative inline-block text-tis-red dark:text-tis-gold">
                  WITH TULA&apos;S
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-tis-gold dark:text-tis-gold"
                    viewBox="0 0 250 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 9C60 3 180 3 247 9"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>
            </Reveal>

            {/* Sub-headline */}
            <Reveal direction="up" delay={0.3}>
              <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Ranked <strong className="text-tis-charcoal dark:text-white font-semibold">#1 Co-Educational Boarding School</strong> in Dehradun.
                Where the timeless values of the <span className="text-tis-red dark:text-tis-gold font-medium">Modern Gurukul</span> unite with 21st-century global education across an inspiring 22-acre campus.
              </p>
            </Reveal>

            {/* Action Buttons */}
            <Reveal direction="up" delay={0.4}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={onOpenEnquiry}
                  className="w-full sm:w-auto text-base px-8 shadow-xl shadow-tis-red/25"
                  rightIcon={<ArrowRight className="w-5 h-5" />}
                >
                  Apply for Admission
                </Button>

                <Button
                  variant="secondary"
                  size="lg"
                  onClick={onOpenVirtualTour}
                  className="w-full sm:w-auto text-base px-7 border-neutral-300 dark:border-white/20"
                  leftIcon={<Compass className="w-5 h-5 text-tis-teal-dark dark:text-tis-teal-light" />}
                >
                  360° Virtual Tour
                </Button>
              </div>
            </Reveal>

            {/* Trust Highlights */}
            <Reveal direction="up" delay={0.5}>
              <div className="pt-6 border-t border-neutral-200 dark:border-white/10 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-left">
                <div className="space-y-1 rounded-xl border border-white/10 bg-tis-charcoal/90 p-3 shadow-md dark:bg-tis-surface-cardDark">
                  <div className="flex items-center gap-1.5 text-tis-red dark:text-tis-gold">
                    <Trophy className="w-4 h-4" />
                    <span className="font-bold text-lg sm:text-xl">#1</span>
                  </div>
                  <p className="text-xs text-neutral-300 dark:text-neutral-400">Boarding School in Dehradun</p>
                </div>

                <div className="space-y-1 rounded-xl border border-white/10 bg-tis-charcoal/90 p-3 shadow-md dark:bg-tis-surface-cardDark">
                  <div className="flex items-center gap-1.5 text-tis-teal-dark dark:text-tis-teal-light">
                    <Users className="w-4 h-4" />
                    <span className="font-bold text-lg sm:text-xl">6:1</span>
                  </div>
                  <p className="text-xs text-neutral-300 dark:text-neutral-400">Student-Teacher Ratio</p>
                </div>

                <div className="space-y-1 rounded-xl border border-white/10 bg-tis-charcoal/90 p-3 shadow-md dark:bg-tis-surface-cardDark">
                  <div className="flex items-center gap-1.5 text-tis-gold-dark dark:text-tis-gold">
                    <Trees className="w-4 h-4" />
                    <span className="font-bold text-lg sm:text-xl">22+</span>
                  </div>
                  <p className="text-xs text-neutral-300 dark:text-neutral-400">Acre Green Campus</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <Reveal direction="left" delay={0.3}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Image Card with subtle tilt and glow */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-white/10 bg-white aspect-[4/5]">
                  <Image
                    src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=1000&auto=format&fit=crop"
                    alt="Tula's International School Scholars on Campus"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Overlay Bottom Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white space-y-2">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-tis-red text-white uppercase tracking-wider">
                      Mind • Body • Soul
                    </span>
                    <h3 className="text-xl font-bold leading-tight">
                      Empowering Future Leaders Since 2012
                    </h3>
                    <p className="text-xs text-white/80 line-clamp-2">
                      CBSE affiliated co-educational residential sanctuary set against the Shivalik hills.
                    </p>
                  </div>
                </div>

                {/* Floating Badge 1: 16+ Olympic Sports */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="absolute -top-4 -left-4 sm:-left-6 bg-white dark:bg-tis-surface-cardDark p-3.5 sm:p-4 rounded-2xl shadow-xl border border-neutral-100 dark:border-white/10 flex items-center gap-3 z-20"
                >
                  <div className="w-10 h-10 rounded-xl bg-tis-teal/20 text-tis-teal-dark dark:text-tis-teal flex items-center justify-center">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">Olympic Sports</div>
                    <div className="text-sm font-bold text-tis-charcoal dark:text-white">16+ Disciplines</div>
                  </div>
                </motion.div>

                {/* Floating Badge 2: 100% CBSE Pass Record */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="absolute -bottom-6 -right-4 sm:-right-6 bg-white dark:bg-tis-surface-cardDark p-3.5 sm:p-4 rounded-2xl shadow-xl border border-neutral-100 dark:border-white/10 flex items-center gap-3 z-20"
                >
                  <div className="w-10 h-10 rounded-xl bg-tis-gold/20 text-tis-gold-dark dark:text-tis-gold flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">CBSE Results</div>
                    <div className="text-sm font-bold text-tis-charcoal dark:text-white">100% Excellence</div>
                  </div>
                </motion.div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
