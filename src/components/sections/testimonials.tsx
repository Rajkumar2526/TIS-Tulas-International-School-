"use client";

import { useState } from "react";
import { TESTIMONIALS_DATA } from "@/data/tis-data";
import { Reveal } from "@/components/animation/reveal";
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) =>
      prevIdx === 0 ? TESTIMONIALS_DATA.length - 1 : prevIdx - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIdx) =>
      prevIdx === TESTIMONIALS_DATA.length - 1 ? 0 : prevIdx + 1
    );
  };

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-tis-cream/40 dark:bg-tis-dark transition-colors relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <Reveal direction="down">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-tis-red dark:text-tis-gold uppercase">
              Parent Perspectives
            </span>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-tis-charcoal dark:text-white tracking-tight">
              Words From Our School Community
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400">
              Verified reviews from parents whose children have blossomed into confident, compassionate global scholars at TIS.
            </p>
          </Reveal>
        </div>

        {/* Google Reviews Badge Header */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-tis-surface-cardDark border border-neutral-200 dark:border-white/10 shadow-sm">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xs font-bold text-tis-charcoal dark:text-white">
              4.9 / 5.0 Rating
            </span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400">
              • Google Verified Parent Reviews
            </span>
          </div>
        </div>

        {/* Carousel / Featured Testimonial Card */}
        <Reveal direction="up" delay={0.25}>
          <div className="max-w-4xl mx-auto relative">
            <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-tis-surface-cardDark border border-neutral-200/80 dark:border-white/10 shadow-xl relative overflow-hidden">
              <Quote className="absolute top-6 right-8 w-20 h-20 text-neutral-100 dark:text-white/5 pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(TESTIMONIALS_DATA[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-2 text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-tis-teal/15 text-tis-teal-dark dark:text-tis-teal">
                    {TESTIMONIALS_DATA[currentIndex].badge}
                  </span>
                </div>

                <blockquote className="text-lg sm:text-xl md:text-2xl font-medium text-tis-charcoal dark:text-white leading-relaxed font-sans">
                  &ldquo;{TESTIMONIALS_DATA[currentIndex].text}&rdquo;
                </blockquote>

                <div className="pt-4 border-t border-neutral-100 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-tis-red to-tis-red-800 text-white flex items-center justify-center font-bold text-lg shadow-md">
                      {TESTIMONIALS_DATA[currentIndex].author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-base text-tis-charcoal dark:text-white flex items-center gap-1.5">
                        {TESTIMONIALS_DATA[currentIndex].author}
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      </h4>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        {TESTIMONIALS_DATA[currentIndex].relation} • {TESTIMONIALS_DATA[currentIndex].location}
                      </p>
                    </div>
                  </div>

                  {/* Carousel Nav Controls */}
                  <div className="flex items-center gap-2 self-end sm:self-auto">
                    <button
                      type="button"
                      onClick={prev}
                      aria-label="Previous testimonial"
                      className="p-2.5 rounded-xl border border-neutral-200 dark:border-white/10 hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors text-tis-charcoal dark:text-white"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <span className="text-xs font-semibold text-neutral-400 px-2">
                      {currentIndex + 1} / {TESTIMONIALS_DATA.length}
                    </span>
                    <button
                      type="button"
                      onClick={next}
                      aria-label="Next testimonial"
                      className="p-2.5 rounded-xl border border-neutral-200 dark:border-white/10 hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors text-tis-charcoal dark:text-white"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Small Multi-Card Grid for quick preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
          {TESTIMONIALS_DATA.slice(0, 3).map((item, idx) => (
            <div
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${currentIndex === idx
                  ? "bg-white dark:bg-tis-surface-cardDark border-tis-red dark:border-tis-gold shadow-md"
                  : "bg-white/60 dark:bg-tis-surface-cardDark/50 border-neutral-200/60 dark:border-white/5 hover:border-neutral-300 opacity-80"
                }`}
            >
              <div className="flex items-center gap-1 text-amber-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs text-neutral-700 dark:text-neutral-300 line-clamp-3 leading-relaxed mb-3">
                &ldquo;{item.text}&rdquo;
              </p>
              <div className="font-bold text-xs text-tis-charcoal dark:text-white">
                {item.author}
              </div>
              <div className="text-[10px] text-neutral-500 dark:text-neutral-400">
                {item.relation}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
