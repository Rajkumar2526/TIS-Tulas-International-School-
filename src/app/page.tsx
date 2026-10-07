"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { WhyTis } from "@/components/sections/why-tis";
import { Academics } from "@/components/sections/academics";
import { Campus } from "@/components/sections/campus";
import { Activities } from "@/components/sections/activities";
import { Testimonials } from "@/components/sections/testimonials";
import { Gallery } from "@/components/sections/gallery";
import { AdmissionsCta } from "@/components/sections/admissions-cta";
import { Modal } from "@/components/ui/modal";
import { Phone, MessageCircle, Compass, ShieldCheck } from "lucide-react";

export default function HomePage() {
  const [virtualTourOpen, setVirtualTourOpen] = useState(false);
  const [activeTourTab, setActiveTourTab] = useState<"aerial" | "hostel" | "sports">("aerial");

  const scrollToAdmissions = () => {
    const el = document.getElementById("admissions");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Navigation */}
      <Navbar onOpenEnquiry={scrollToAdmissions} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onOpenEnquiry={scrollToAdmissions}
          onOpenVirtualTour={() => setVirtualTourOpen(true)}
        />
        <About />
        <WhyTis />
        <Academics />
        <Campus
          onOpenVirtualTour={() => setVirtualTourOpen(true)}
          onOpenEnquiry={scrollToAdmissions}
        />
        <Activities />
        <Testimonials />
        <Gallery />
        <AdmissionsCta />
      </main>

      {/* Footer */}
      <Footer
        onOpenEnquiry={scrollToAdmissions}
        onOpenVirtualTour={() => setVirtualTourOpen(true)}
      />

      {/* Floating Quick Action Buttons */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-3 pointer-events-auto">
        {/* WhatsApp Direct */}
        <a
          href="https://wa.me/919837983791?text=Hello%20Tula's%20International%20School,%20I%20would%20like%20to%20enquire%20about%20admissions."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform"
        >
          <MessageCircle className="w-6 h-6 fill-white" />
        </a>

        {/* Quick Phone Call Helpline */}
        <a
          href="tel:+919837983791"
          aria-label="Call Admissions Helpline"
          className="w-12 h-12 rounded-full bg-tis-red text-white flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* Floating Apply Now Pill (Visible on Desktop) */}
        <button
          type="button"
          onClick={scrollToAdmissions}
          className="hidden md:inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-tis-gold text-tis-charcoal font-bold text-xs shadow-xl hover:bg-tis-gold-light hover:shadow-2xl transition-all"
        >
          <ShieldCheck className="w-4 h-4 text-tis-charcoal" />
          <span>Apply Online 2026–27</span>
        </button>
      </div>

      {/* Interactive 360° Virtual Tour Modal */}
      <Modal
        isOpen={virtualTourOpen}
        onClose={() => setVirtualTourOpen(false)}
        title="Tula's International School • 360° Virtual Tour"
        description="Experience our 22-acre Dehradun campus in high definition"
        maxWidth="max-w-4xl"
      >
        <div className="space-y-4">
          {/* Virtual Tour Mode Tabs */}
          <div className="flex gap-2 border-b border-neutral-100 dark:border-white/10 pb-3">
            <button
              type="button"
              onClick={() => setActiveTourTab("aerial")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                activeTourTab === "aerial"
                  ? "bg-tis-red text-white"
                  : "bg-neutral-100 dark:bg-white/10 text-neutral-600 dark:text-neutral-300"
              }`}
            >
              Aerial Campus View
            </button>
            <button
              type="button"
              onClick={() => setActiveTourTab("hostel")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                activeTourTab === "hostel"
                  ? "bg-tis-red text-white"
                  : "bg-neutral-100 dark:bg-white/10 text-neutral-600 dark:text-neutral-300"
              }`}
            >
              Residential Wings
            </button>
            <button
              type="button"
              onClick={() => setActiveTourTab("sports")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                activeTourTab === "sports"
                  ? "bg-tis-red text-white"
                  : "bg-neutral-100 dark:bg-white/10 text-neutral-600 dark:text-neutral-300"
              }`}
            >
              16+ Olympic Arena
            </button>
          </div>

          {/* Interactive Player or Video Frame */}
          <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black flex items-center justify-center border border-neutral-800">
            {activeTourTab === "aerial" && (
              <iframe
                title="TIS Aerial Campus Walkthrough"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
            {activeTourTab === "hostel" && (
              <div className="w-full h-full relative">
                <img
                  src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1200&auto=format&fit=crop"
                  alt="Modern Air-Conditioned Dormitories"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6 text-center text-white">
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-tis-gold">
                      Pastoral Care &amp; Safety
                    </span>
                    <h4 className="text-xl font-bold">Climate-Controlled Hostels</h4>
                    <p className="text-xs text-white/80 max-w-md">
                      Comfortable air-conditioned rooms, reading suites, and resident house masters ensuring a safe home away from home.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {activeTourTab === "sports" && (
              <div className="w-full h-full relative">
                <img
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop"
                  alt="Olympic Standard Sports Arena"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6 text-center text-white">
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-tis-gold">
                      Athletic Training
                    </span>
                    <h4 className="text-xl font-bold">World-Class Olympic Sports Infrastructure</h4>
                    <p className="text-xs text-white/80 max-w-md">
                      Archery ranges, 10m/50m electronic shooting gallery, equestrian dressage arena, heated pool &amp; squash courts.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <span className="text-xs text-neutral-500 dark:text-neutral-400">
              For an in-person guided tour, visit our campus at Dhoolkot, Chakrata Road, Dehradun.
            </span>
            <button
              type="button"
              onClick={() => {
                setVirtualTourOpen(false);
                scrollToAdmissions();
              }}
              className="px-4 py-2 rounded-xl bg-tis-red text-white text-xs font-bold hover:bg-tis-red-600 transition-colors"
            >
              Book In-Person Campus Visit
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
