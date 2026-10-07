"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, Menu, X, ChevronDown, Sparkles, GraduationCap, ShieldCheck } from "lucide-react";
import { NAV_ITEMS } from "@/data/tis-data";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";

interface NavbarProps {
  onOpenEnquiry?: () => void;
}

export function Navbar({ onOpenEnquiry }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
      {/* Top Notification & Quick Contact Strip */}
      <div
        className={`bg-tis-red text-white text-xs font-medium transition-all duration-300 ${isScrolled ? "h-0 opacity-0 overflow-hidden py-0" : "py-2 px-4 sm:px-8 border-b border-tis-red-700/50"
          }`}
      >
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Left: Admissions Announcement */}
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/20 text-white font-semibold text-[11px] uppercase tracking-wider">
              <Sparkles className="w-3 h-3 text-tis-gold-light animate-pulse" /> Admissions Open 2026–27
            </span>
            <span className="hidden sm:inline-block text-white/80 text-[11px]">
              CBSE Co-Ed Boarding School | Class IV to XII
            </span>
          </div>

          {/* Right: Helpline & Email */}
          <div className="flex items-center gap-4 text-xs font-normal">
            <a
              href="tel:+919837983791"
              className="flex items-center gap-1.5 hover:text-tis-gold-light transition-colors"
              aria-label="Call Admissions Helpline +91 98379 83791"
            >
              <Phone className="w-3.5 h-3.5 text-tis-gold-light" />
              <span>+91-9837983791</span>
            </a>
            <span className="hidden md:inline text-white/40">|</span>
            <a
              href="mailto:info@tis.edu.in"
              className="hidden md:flex items-center gap-1.5 hover:text-tis-gold-light transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-tis-gold-light" />
              <span>info@tis.edu.in</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        aria-label="Main Navigation"
        className={`transition-all duration-300 px-4 sm:px-8 ${isScrolled
            ? "glass-nav-scrolled py-3 border-b border-neutral-200/50 dark:border-white/10"
            : "bg-[#F8F1E8]/95 dark:bg-[#0C0F14] backdrop-blur-md py-4 border-b border-[#eadcc7] dark:border-white/5"
          }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* School Brand & Logo */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-tis-red rounded-lg p-1">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-tis-red to-tis-red-700 flex items-center justify-center text-white shadow-md shadow-tis-red/20 border border-white/20 group-hover:scale-105 transition-transform duration-300">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-tis-charcoal dark:text-white leading-none">
                TULA&apos;S
              </span>
              <span className="text-[11px] font-semibold text-tis-red dark:text-tis-gold tracking-widest uppercase leading-tight mt-0.5">
                International School
              </span>
              <span className="text-[9px] text-neutral-500 dark:text-neutral-400 font-medium tracking-tight">
                The Modern Gurukul • Dehradun
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-[#1f2937] dark:text-neutral-200 hover:text-tis-red dark:hover:text-tis-gold hover:bg-neutral-100/60 dark:hover:bg-white/5 transition-colors flex items-center gap-1"
                >
                  <span>{item.title}</span>
                  {item.badge && (
                    <span className="ml-1 px-1.5 py-0.5 text-[10px] font-bold rounded-full bg-tis-red/10 text-tis-red dark:bg-white/10 dark:text-neutral-200">
                      {item.badge}
                    </span>
                  )}
                  {item.children && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === item.title ? "rotate-180 text-tis-red" : "opacity-60"
                        }`}
                    />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.children && activeDropdown === item.title && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute top-full left-0 w-72 pt-2 z-50"
                  >
                    <div className="rounded-2xl p-2 bg-white dark:bg-tis-surface-cardDark shadow-xl border border-neutral-100 dark:border-white/10 backdrop-blur-xl">
                      {item.children.map((subItem) => (
                        <Link
                          key={subItem.title}
                          href={subItem.href}
                          className="block p-2.5 rounded-xl hover:bg-neutral-50 dark:hover:bg-white/5 transition-colors group"
                        >
                          <div className="text-sm font-semibold text-neutral-800 dark:text-white group-hover:text-tis-red dark:group-hover:text-tis-gold transition-colors">
                            {subItem.title}
                          </div>
                          <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5 leading-snug line-clamp-2">
                            {subItem.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <ThemeToggle />

            <Button
              variant="secondary"
              size="sm"
              onClick={onOpenEnquiry}
              className="hidden md:inline-flex border-tis-teal/40 text-tis-teal-dark dark:text-tis-teal-light hover:bg-tis-teal/10"
            >
              Enquire Now
            </Button>

            <Button
              variant="primary"
              size="sm"
              onClick={onOpenEnquiry}
              leftIcon={<ShieldCheck className="w-4 h-4" />}
            >
              Apply Online
            </Button>
          </div>

          {/* Mobile Actions & Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              className="p-2.5 rounded-xl text-neutral-700 dark:text-white hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-tis-red"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100vh - 70px)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-white dark:bg-tis-surface-dark border-b border-neutral-200 dark:border-white/10 shadow-2xl overflow-y-auto px-6 py-6 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="pb-3 border-b border-neutral-100 dark:border-white/10">
                <span className="text-xs font-semibold text-tis-red dark:text-tis-gold tracking-widest uppercase">
                  Menu Navigation
                </span>
              </div>

              <div className="space-y-1">
                {NAV_ITEMS.map((item) => (
                  <div key={item.title} className="py-1">
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between text-base font-semibold text-neutral-800 dark:text-neutral-100 hover:text-tis-red py-2"
                    >
                      <span>{item.title}</span>
                      {item.badge && (
                        <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-tis-red/10 text-tis-red dark:bg-white/10 dark:text-neutral-200">
                          {item.badge}
                        </span>
                      )}
                    </Link>

                    {item.children && (
                      <div className="pl-4 mt-1 space-y-1 border-l-2 border-neutral-100 dark:border-white/10">
                        {item.children.map((sub) => (
                          <Link
                            key={sub.title}
                            href={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-1.5 text-xs text-neutral-500 dark:text-neutral-400 hover:text-tis-red"
                          >
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Footer CTAs */}
            <div className="pt-6 border-t border-neutral-100 dark:border-white/10 space-y-3">
              <Button
                variant="primary"
                size="lg"
                className="w-full justify-center"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry?.();
                }}
              >
                Apply for Admissions 2026–27
              </Button>

              <div className="flex items-center justify-center gap-4 text-xs text-neutral-500 dark:text-neutral-400 pt-2">
                <a href="tel:+919837983791" className="flex items-center gap-1.5 hover:text-tis-red">
                  <Phone className="w-3.5 h-3.5 text-tis-red" /> +91-9837983791
                </a>
                <span>•</span>
                <a href="mailto:info@tis.edu.in" className="flex items-center gap-1.5 hover:text-tis-red">
                  <Mail className="w-3.5 h-3.5 text-tis-red" /> info@tis.edu.in
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
