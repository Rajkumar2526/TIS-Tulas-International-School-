import { Trophy, Award, Users, Trees, HeartPulse, Globe, GraduationCap, Check } from "lucide-react";
import { SCHOOL_STATS, RANKINGS_DATA } from "@/data/tis-data";
import { Reveal } from "@/components/animation/reveal";
import { StaggerContainer, StaggerItem } from "@/components/animation/stagger";

export function WhyTis() {
  const iconMap: Record<string, React.ReactNode> = {
    Trees: <Trees className="w-6 h-6 text-tis-teal-dark dark:text-tis-teal" />,
    Users: <Users className="w-6 h-6 text-tis-red dark:text-tis-red-400" />,
    Trophy: <Trophy className="w-6 h-6 text-tis-gold-dark dark:text-tis-gold" />,
    HeartPulse: <HeartPulse className="w-6 h-6 text-rose-500" />,
    Globe: <Globe className="w-6 h-6 text-blue-500" />,
    GraduationCap: <GraduationCap className="w-6 h-6 text-emerald-500" />,
  };

  return (
    <section id="why-tis" className="py-20 md:py-28 bg-tis-cream/60 dark:bg-tis-dark transition-colors relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <Reveal direction="down">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-tis-red dark:text-tis-gold uppercase">
              Hallmark of Excellence
            </span>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-tis-charcoal dark:text-white tracking-tight">
              Why Discerning Parents Choose TIS
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400">
              Ranked among India&apos;s most prestigious residential institutions, delivering unmatched pastoral care, athletic training, and academic outcomes.
            </p>
          </Reveal>
        </div>

        {/* National Rankings Spotlight */}
        <Reveal direction="up" delay={0.25}>
          <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-tis-red text-white shadow-2xl relative overflow-hidden">
            {/* Background Texture Accents */}
            <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute top-0 right-1/4 w-32 h-32 bg-tis-gold/20 rounded-full blur-xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/20">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white/20 text-white">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                      Accredited National Rankings
                    </h3>
                    <p className="text-xs sm:text-sm text-white/80">
                      Validated by leading national education rating bodies
                    </p>
                  </div>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white text-tis-red uppercase tracking-wider self-start md:self-auto">
                  Premier Boarding School
                </span>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {RANKINGS_DATA.map((rank, index) => (
                  <div
                    key={index}
                    className="p-4 sm:p-5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 flex flex-col justify-between"
                  >
                    <div className="text-3xl sm:text-4xl font-extrabold font-serif text-tis-gold-light mb-1">
                      {rank.rank}
                    </div>
                    <div className="text-sm sm:text-base font-bold text-white mb-1">
                      {rank.scope}
                    </div>
                    <div className="text-xs text-white/80 leading-snug">
                      {rank.category}
                      <span className="block text-[11px] text-white/60 mt-1 italic font-medium">
                        by {rank.publisher}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* 6 Key Highlights Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SCHOOL_STATS.map((stat, idx) => (
            <StaggerItem key={idx}>
              <div className="h-full p-6 sm:p-8 rounded-2xl bg-white dark:bg-tis-surface-cardDark border border-neutral-200/80 dark:border-white/10 shadow-sm hover:shadow-xl hover:border-tis-red/30 dark:hover:border-tis-gold/30 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-neutral-100 dark:bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {iconMap[stat.icon]}
                  </div>

                  <div className="text-3xl sm:text-4xl font-extrabold text-tis-charcoal dark:text-white tracking-tight mb-1">
                    {stat.value}
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-tis-charcoal dark:text-white mb-2">
                    {stat.label}
                  </h4>

                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {stat.sublabel}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-neutral-100 dark:border-white/5 flex items-center gap-2 text-xs font-semibold text-tis-red dark:text-tis-gold">
                  <Check className="w-4 h-4" />
                  <span>Verified TIS Standard</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
