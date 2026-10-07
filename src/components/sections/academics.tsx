"use client";

import { useState } from "react";
import { ACADEMIC_PROGRAMS, GLOBAL_COLLABORATIONS } from "@/data/tis-data";
import { Reveal } from "@/components/animation/reveal";
import { Badge } from "@/components/ui/badge";
import { BookOpen, CheckCircle, Globe2, Sparkles, GraduationCap } from "lucide-react";

export function Academics() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="academics" className="py-20 md:py-28 bg-white dark:bg-tis-surface-dark transition-colors relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <Reveal direction="down">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-tis-red dark:text-tis-gold uppercase">
              Curriculum &amp; Streams
            </span>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-tis-charcoal dark:text-white tracking-tight">
              Academic Excellence from Class IV to XII
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400">
              Affiliated with the Central Board of Secondary Education (CBSE), New Delhi, our pedagogy emphasizes conceptual clarity, scientific inquiry, and global competitiveness.
            </p>
          </Reveal>
        </div>

        {/* Academic Stages Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {ACADEMIC_PROGRAMS.map((program, index) => (
            <button
              key={program.grade}
              type="button"
              onClick={() => setActiveTab(index)}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${activeTab === index
                  ? "bg-tis-red text-white shadow-md shadow-tis-red/25 dark:bg-tis-gold dark:text-tis-charcoal"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-white/10 dark:text-neutral-300 dark:hover:bg-white/15"
                }`}
            >
              <span>{program.grade}</span>
              <span className="hidden sm:inline text-[11px] opacity-80 ml-1.5 font-normal">
                ({program.level})
              </span>
            </button>
          ))}
        </div>

        {/* Selected Program Showcase */}
        <Reveal direction="up" delay={0.15}>
          <div className="p-6 sm:p-10 rounded-3xl bg-neutral-50 dark:bg-tis-surface-cardDark border border-neutral-200 dark:border-white/10 shadow-sm mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Program Overview */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center gap-2">
                  <Badge variant="red">{ACADEMIC_PROGRAMS[activeTab].badge}</Badge>
                  <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                    {ACADEMIC_PROGRAMS[activeTab].grade}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-tis-charcoal dark:text-white leading-tight">
                  {ACADEMIC_PROGRAMS[activeTab].title}
                </h3>

                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {ACADEMIC_PROGRAMS[activeTab].description}
                </p>

                <div className="p-4 rounded-2xl bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-tis-red dark:text-tis-gold uppercase">
                    <Sparkles className="w-4 h-4" /> Academic Focus Highlights
                  </div>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-normal">
                    Regular Olympiad training, inter-school debates, Model United Nations, robotics exhibitions, and personalized remedial clinics for all scholars.
                  </p>
                </div>
              </div>

              {/* Subjects & Core Disciplines */}
              <div className="lg:col-span-7 space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-tis-red" />
                  Key Subjects &amp; Practical Modules
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {ACADEMIC_PROGRAMS[activeTab].subjects.map((sub, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white dark:bg-tis-surface-dark border border-neutral-200/80 dark:border-white/10 flex items-start gap-2.5 shadow-sm"
                    >
                      <CheckCircle className="w-4 h-4 text-tis-teal-dark dark:text-tis-teal shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-medium text-neutral-800 dark:text-neutral-200">
                        {sub}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-tis-teal/10 border border-tis-teal/20 text-tis-charcoal dark:text-white flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-6 h-6 text-tis-teal-dark dark:text-tis-teal" />
                    <div>
                      <div className="text-xs font-bold uppercase">Competitive Exam Mentoring</div>
                      <div className="text-xs text-neutral-600 dark:text-neutral-300">
                        Integrated coaching for JEE, NEET, CUET, SAT &amp; CLAT
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-tis-teal-dark dark:text-tis-teal uppercase tracking-wider shrink-0">
                    6:1 Mentorship
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Global Collaborations Strip */}
        <Reveal direction="up" delay={0.25}>
          <div className="p-6 sm:p-8 rounded-3xl bg-tis-cream/60 dark:bg-tis-dark border border-neutral-200 dark:border-white/10">
            <div className="text-center max-w-xl mx-auto mb-6 space-y-1">
              <span className="text-xs font-bold uppercase tracking-widest text-tis-red dark:text-tis-gold flex items-center justify-center gap-1.5">
                <Globe2 className="w-3.5 h-3.5" /> 12+ Global Collaborations
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-tis-charcoal dark:text-white">
                International Pathways &amp; Global Certifications
              </h4>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {GLOBAL_COLLABORATIONS.map((collab, index) => (
                <div
                  key={index}
                  className="p-3 sm:p-4 rounded-xl bg-white dark:bg-tis-surface-cardDark border border-neutral-200/80 dark:border-white/10 text-center flex flex-col items-center justify-center shadow-sm hover:scale-105 transition-transform"
                >
                  <span className="text-2xl mb-1.5">{collab.logo}</span>
                  <div className="text-xs font-bold text-tis-charcoal dark:text-white leading-tight">
                    {collab.name}
                  </div>
                  <div className="text-[10px] text-neutral-500 dark:text-neutral-400 mt-0.5">
                    {collab.country}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
