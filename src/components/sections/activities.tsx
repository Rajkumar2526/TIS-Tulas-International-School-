"use client";

import { useState } from "react";
import Image from "next/image";
import { SPORTS_LIST, INFLUENTIAL_VISITORS } from "@/data/tis-data";
import { Reveal } from "@/components/animation/reveal";
import { StaggerContainer, StaggerItem } from "@/components/animation/stagger";
import { Trophy, Target, ChevronLeft, ChevronRight, Quote, Medal, Sparkles } from "lucide-react";

export function Activities() {
  const [filterCategory, setFilterCategory] = useState<string>("All");

  const categories = ["All", "Target Sports", "Olympic Disciplines", "Equestrian", "Aquatics", "Court Sports", "Field Sports"];

  const filteredSports =
    filterCategory === "All"
      ? SPORTS_LIST
      : SPORTS_LIST.filter(
        (s) =>
          s.category.toLowerCase().includes(filterCategory.toLowerCase()) ||
          filterCategory.toLowerCase().includes(s.category.toLowerCase())
      );

  return (
    <section id="sports" className="py-20 md:py-28 bg-white dark:bg-tis-surface-dark transition-colors relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <Reveal direction="down">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-tis-red dark:text-tis-gold uppercase">
              Physical Mastery &amp; Olympic Training
            </span>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-tis-charcoal dark:text-white tracking-tight">
              Sports? It&apos;s Not Just a Facility.{" "}
              <span className="text-tis-teal-dark dark:text-tis-teal block sm:inline">
                At Tulas, It&apos;s The Foundation!
              </span>
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400">
              Over <strong>16+ Olympic &amp; Modern Sports</strong> curated to instill joy, grit, and discipline under NIS-certified national coaches.
            </p>
          </Reveal>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilterCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${filterCategory === cat
                  ? "bg-tis-red text-white shadow-sm dark:bg-tis-gold dark:text-tis-charcoal"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-white/10 dark:text-neutral-300"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sports Cards Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {filteredSports.map((sport) => (
            <StaggerItem key={sport.name}>
              <div className="group h-full rounded-2xl overflow-hidden bg-neutral-50 dark:bg-tis-surface-cardDark border border-neutral-200/80 dark:border-white/10 shadow-sm hover:shadow-xl hover:border-tis-red/30 dark:hover:border-tis-gold/30 transition-all duration-300 flex flex-col justify-between">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={sport.image}
                    alt={`${sport.name} training at Tula's International School`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/90 text-tis-charcoal backdrop-blur-sm">
                      {sport.category}
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-tis-charcoal dark:text-white group-hover:text-tis-red dark:group-hover:text-tis-gold transition-colors">
                      {sport.name}
                    </h3>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1 leading-relaxed">
                      {sport.desc}
                    </p>
                  </div>
                  <div className="pt-2 text-[11px] font-semibold text-tis-teal-dark dark:text-tis-teal uppercase tracking-wider flex items-center gap-1">
                    <Target className="w-3.5 h-3.5" /> Certified NIS Coaching
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Influential Personalities On Campus Showcase */}
        <div className="p-8 sm:p-12 rounded-3xl bg-tis-cream/60 dark:bg-tis-dark border border-neutral-200 dark:border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-tis-red dark:text-tis-gold flex items-center justify-center gap-1.5">
              <Medal className="w-4 h-4" /> Hall of Inspiring Visitors
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-tis-charcoal dark:text-white">
              Influential Personalities on Campus
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Olympic icons, statesmen, and cultural leaders regularly interact with and inspire our scholars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INFLUENTIAL_VISITORS.slice(0, 3).map((visitor, idx) => (
              <Reveal key={idx} direction="up" delay={idx * 0.1}>
                <div className="h-full p-6 rounded-2xl bg-white dark:bg-tis-surface-cardDark border border-neutral-200/80 dark:border-white/10 shadow-sm flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-tis-red">
                        <Image
                          src={visitor.image}
                          alt={visitor.name}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-bold text-sm text-tis-charcoal dark:text-white">
                          {visitor.name}
                        </div>
                        <span className="text-[10px] font-semibold text-tis-red dark:text-tis-gold uppercase">
                          {visitor.badge}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-neutral-500 dark:text-neutral-400 italic">
                      {visitor.title}
                    </p>

                    <div className="relative pt-2">
                      <Quote className="w-4 h-4 text-tis-gold/50 mb-1" />
                      <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed">
                        &ldquo;{visitor.quote}&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
