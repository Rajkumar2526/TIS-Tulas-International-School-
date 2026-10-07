import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tis: {
          red: {
            DEFAULT: "#B90124",
            50: "#FFF1F2",
            100: "#FFE4E6",
            200: "#FECDD3",
            300: "#FDA4AF",
            400: "#FB7185",
            500: "#B90124",
            600: "#9E011F",
            700: "#7F0118",
            800: "#5E0112",
            900: "#3D000B",
          },
          gold: {
            DEFAULT: "#C09D59",
            light: "#DBC79F",
            pale: "#F5EEDB",
            dark: "#8F7239",
          },
          teal: {
            DEFAULT: "#60BAB1",
            light: "#90CCD0",
            pale: "#BEE2E4",
            dark: "#007A83",
            darker: "#005E65",
          },
          cream: "#F8F5F0",
          charcoal: "#1C1C1C",
          surface: {
            light: "#FFFFFF",
            dark: "#14171F",
            cardDark: "#1C2230",
            cardLight: "#FFFFFF",
          }
        },
      },
      fontSize: {
        xs: ["0.9375rem", { lineHeight: "1.375rem" }],
        sm: ["1.0625rem", { lineHeight: "1.625rem" }],
        base: ["1.3125rem", { lineHeight: "1.875rem" }],
        lg: ["1.4375rem", { lineHeight: "2.125rem" }],
        xl: ["1.625rem", { lineHeight: "2.25rem" }],
        "2xl": ["1.875rem", { lineHeight: "2.5rem" }],
        "3xl": ["2.375rem", { lineHeight: "2.875rem" }],
        "4xl": ["2.8125rem", { lineHeight: "3.25rem" }],
        "5xl": ["3.625rem", { lineHeight: "1.15" }],
        "6xl": ["4.5rem", { lineHeight: "1.1" }],
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        display: ["var(--font-outfit)", "sans-serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
        "marquee": "marquee 35s linear infinite",
        "marquee-reverse": "marqueeReverse 35s linear infinite",
        "shimmer": "shimmer 2.5s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeReverse: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        }
      },
      boxShadow: {
        "tis": "0 10px 30px -10px rgba(185, 1, 36, 0.25)",
        "tis-gold": "0 10px 30px -10px rgba(192, 157, 89, 0.35)",
        "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.08)",
        "glass-dark": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
    },
  },
  plugins: [],
};

export default config;
