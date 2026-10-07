import Image from "next/image";
import { BookOpen, Heart, Sparkles, Compass, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/animation/reveal";

export function About() {
  const pillars = [
    {
      icon: <BookOpen className="w-5 h-5 text-tis-red" />,
      title: "Mind • Academic Rigor",
      description:
        "CBSE-affiliated experiential pedagogy designed to foster independent thinking, conceptual mastery, and intellectual courage.",
    },
    {
      icon: <Sparkles className="w-5 h-5 text-tis-gold" />,
      title: "Body • Athletic Prowess",
      description:
        "Olympic-standard sports facilities spanning 16+ disciplines, nurturing physical vitality, grit, and team camaraderie.",
    },
    {
      icon: <Heart className="w-5 h-5 text-tis-teal" />,
      title: "Soul • Modern Gurukul",
      description:
        "Revered teacher-student mentorship grounded in traditional values of empathy, humility, and global leadership.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white dark:bg-tis-surface-dark transition-colors relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <Reveal direction="down">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-tis-red dark:text-tis-gold uppercase">
              The Modern Gurukul Legacy
            </span>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-tis-charcoal dark:text-white tracking-tight">
              Where Tradition Meets Tomorrow
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400">
              Established in 2012 under the aegis of <strong>Rishabh Educational Trust</strong>,
              Tula&apos;s International School was founded to impart education through seamless opportunities.
            </p>
          </Reveal>
        </div>

        {/* Narrative & Image Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          {/* Left: Inspiring Imagery */}
          <div className="lg:col-span-6 relative">
            <Reveal direction="right">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-neutral-100 dark:border-white/10 aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1000&auto=format&fit=crop"
                  alt="Tula's Modern Gurukul Learning Atmosphere"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="font-serif italic text-lg sm:text-xl font-medium">
                    &ldquo;We feel supported in what we do and nudged further to do more.&rdquo;
                  </p>
                  <p className="text-xs text-white/80 mt-1 uppercase tracking-wider font-sans">
                    — Tula&apos;s Scholar Voice
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: Modern Gurukul Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <Reveal direction="left" delay={0.1}>
              <h3 className="text-2xl sm:text-3xl font-bold text-tis-charcoal dark:text-white leading-snug">
                “At Tulas, school isn’t just about lessons — it’s about endless opportunities waiting to be explored.”
              </h3>
            </Reveal>

            <Reveal direction="left" delay={0.2}>
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-base">
                When you choose a school that chooses you, it becomes more than just a place to study—it becomes a place to belong, grow, and shine. Under the aegis of Rishabh Educational Trust, we blend the reverence of the ancient Gurukul system with modern progressive pedagogy, empowering students from Class IV through XII to discover their innate genius.
              </p>
            </Reveal>

            <Reveal direction="left" delay={0.3}>
              <div className="space-y-3 pt-2">
                {[
                  "Co-educational residential environment promoting gender equality and mutual respect",
                  "22-acre pollution-free campus enveloped in the serene Shivalik foothills",
                  "Holistic pastoral care ensuring emotional safety, healthy nourishment, and physical vitality",
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-tis-teal-dark dark:text-tis-teal shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-700 dark:text-neutral-300">{point}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* 3 Core Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} direction="up" delay={0.15 * (i + 1)}>
              <div className="h-full p-6 sm:p-8 rounded-2xl bg-neutral-50 dark:bg-tis-surface-cardDark border border-neutral-200/80 dark:border-white/5 hover:border-tis-red/30 dark:hover:border-tis-gold/30 hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-white/10 shadow-sm flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {pillar.icon}
                </div>
                <h4 className="text-lg font-bold text-tis-charcoal dark:text-white mb-2">
                  {pillar.title}
                </h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
