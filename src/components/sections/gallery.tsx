"use client";

import { useState } from "react";
import Image from "next/image";
import { GALLERY_ITEMS } from "@/data/tis-data";
import { Reveal } from "@/components/animation/reveal";
import { StaggerContainer, StaggerItem } from "@/components/animation/stagger";
import { Modal } from "@/components/ui/modal";
import { Maximize2, Tag } from "lucide-react";

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeItem, setActiveItem] = useState<(typeof GALLERY_ITEMS)[0] | null>(null);

  const categories = ["All", "Campus", "Sports", "Academics", "Boarding", "Culture"];

  const filteredItems =
    selectedCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-white dark:bg-tis-surface-dark transition-colors relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <Reveal direction="down">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-tis-red dark:text-tis-gold uppercase">
              Visual Chronicle
            </span>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-tis-charcoal dark:text-white tracking-tight">
              Life at Tula&apos;s International School
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400">
              Moments of intellectual inquiry, athletic achievement, creative expression, and lifelong camaraderie on campus.
            </p>
          </Reveal>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${selectedCategory === category
                  ? "bg-tis-red text-white shadow-md shadow-tis-red/20 dark:bg-tis-gold dark:text-tis-charcoal"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 dark:bg-white/10 dark:text-neutral-300 dark:hover:bg-white/15"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <StaggerItem key={item.id}>
              <div
                onClick={() => setActiveItem(item)}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-100 dark:border-white/10"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Card Content Overlay */}
                <div className="absolute inset-0 p-5 flex flex-col justify-between text-white">
                  <div className="flex justify-between items-start">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/20 backdrop-blur-sm">
                      <Tag className="w-3 h-3" /> {item.category}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold leading-snug line-clamp-2 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-white/80 line-clamp-2 font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Lightbox Modal */}
      <Modal
        isOpen={!!activeItem}
        onClose={() => setActiveItem(null)}
        title={activeItem?.title}
        description={`${activeItem?.category} • Tula's International School`}
        maxWidth="max-w-4xl"
      >
        {activeItem && (
          <div className="space-y-4">
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-neutral-200 dark:border-white/10">
              <Image
                src={activeItem.image}
                alt={activeItem.title}
                fill
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-cover"
              />
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {activeItem.desc}
            </p>
          </div>
        )}
      </Modal>
    </section>
  );
}
