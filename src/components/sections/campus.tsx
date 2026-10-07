"use client";

import { useState } from "react";
import Image from "next/image";
import { CAMPUS_FACILITIES } from "@/data/tis-data";
import { Reveal } from "@/components/animation/reveal";
import { Button } from "@/components/ui/button";
import { Compass, CheckCircle2, Building, Utensils, Laptop, FlaskConical, Stethoscope } from "lucide-react";

interface CampusProps {
  onOpenVirtualTour?: () => void;
  onOpenEnquiry?: () => void;
}

export function Campus({ onOpenVirtualTour, onOpenEnquiry }: CampusProps) {
  const [selectedId, setSelectedId] = useState(CAMPUS_FACILITIES[0].id);

  const activeFacility =
    CAMPUS_FACILITIES.find((f) => f.id === selectedId) || CAMPUS_FACILITIES[0];

  const facilityIcons: Record<string, React.ReactNode> = {
    dormitories: <Building className="w-4 h-4" />,
    dining: <Utensils className="w-4 h-4" />,
    "smart-classes": <Laptop className="w-4 h-4" />,
    laboratories: <FlaskConical className="w-4 h-4" />,
    infirmary: <Stethoscope className="w-4 h-4" />,
  };

  return (
    <section id="campus" className="py-20 md:py-28 bg-tis-cream/50 dark:bg-tis-dark transition-colors relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <Reveal direction="down">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-tis-red dark:text-tis-gold uppercase">
              22-Acre Residential Sanctuary
            </span>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-tis-charcoal dark:text-white tracking-tight">
              World-Class Campus &amp; Boarding Life
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400">
              A serene, pollution-free haven nestled in Dehradun with top-tier residential infrastructure, organic nourishment, and round-the-clock safety.
            </p>
          </Reveal>
        </div>

        {/* 360° Virtual Tour Banner Card */}
        <Reveal direction="up" delay={0.15}>
          <div className="mb-14 rounded-3xl overflow-hidden relative shadow-xl border border-neutral-200 dark:border-white/10 group cursor-pointer" onClick={onOpenVirtualTour}>
            <div className="relative h-44 sm:h-52 md:h-60 w-full">
              <Image
                src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=1200&auto=format&fit=crop"
                alt="Tula's International School Campus Aerial View"
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.75]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-tis-red/80 via-black/50 to-tis-teal-dark/60 backdrop-blur-[1px]" />

              <div className="absolute inset-0 p-6 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-white text-center sm:text-left z-10">
                <div className="space-y-1">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
                    <Compass className="w-3.5 h-3.5 text-tis-gold-light animate-spin-slow" /> Interactive 360° Experience
                  </span>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                    Dive into our Virtual Campus Tour
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80 max-w-lg">
                    Experience our boarding houses, sports arena, smart labs, and organic farm from anywhere in the world.
                  </p>
                </div>

                <Button
                  variant="gold"
                  size="md"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenVirtualTour?.();
                  }}
                  leftIcon={<Compass className="w-4 h-4" />}
                  className="shrink-0 shadow-lg"
                >
                  Launch 360° Tour
                </Button>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Interactive Facility Showcase */}
        <div className="space-y-6">
          {/* Facility Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {CAMPUS_FACILITIES.map((facility) => (
              <button
                key={facility.id}
                type="button"
                onClick={() => setSelectedId(facility.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all duration-200 ${
                  selectedId === facility.id
                    ? "bg-tis-red text-white shadow-md shadow-tis-red/25 dark:bg-tis-gold dark:text-tis-charcoal"
                    : "bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200 dark:bg-tis-surface-cardDark dark:text-neutral-300 dark:border-white/10 dark:hover:bg-white/10"
                }`}
              >
                {facilityIcons[facility.id]}
                <span>{facility.title}</span>
              </button>
            ))}
          </div>

          {/* Active Facility Card */}
          <Reveal direction="up" delay={0.2}>
            <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-tis-surface-cardDark border border-neutral-200 dark:border-white/10 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Facility Details */}
                <div className="lg:col-span-6 space-y-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-tis-red dark:text-tis-gold">
                    {activeFacility.tagline}
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-tis-charcoal dark:text-white leading-tight">
                    {activeFacility.title}
                  </h3>

                  <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {activeFacility.desc}
                  </p>

                  <div className="space-y-2.5 pt-2">
                    {activeFacility.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-5 h-5 text-tis-teal-dark dark:text-tis-teal shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm font-medium text-neutral-700 dark:text-neutral-300">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Button variant="primary" size="sm" onClick={onOpenEnquiry}>
                      Schedule Campus Visit
                    </Button>
                  </div>
                </div>

                {/* Facility Image Showcase */}
                <div className="lg:col-span-6 relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[16/10] border border-neutral-100 dark:border-white/10">
                    <Image
                      src={activeFacility.image}
                      alt={activeFacility.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
