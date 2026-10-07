import type { Metadata, Viewport } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "@/styles/globals.css";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { CustomCursor } from "@/components/animation/custom-cursor";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tula's International School | Best Boarding School in Dehradun",
  description:
    "Discover Tula's International School (TIS), the top-ranked CBSE co-ed boarding school in Dehradun, Uttarakhand. Offering a Modern Gurukul residential education with 16+ Olympic sports and 6:1 student-teacher ratio.",
  keywords: [
    "boarding school in dehradun india",
    "cbse co-ed boarding school in dehradun",
    "best residential school in uttarakhand",
    "tulas international school dehradun",
    "top boarding school in north india",
    "modern gurukul dehradun",
  ],
  authors: [{ name: "Tula's International School" }],
  creator: "Tula's International School",
  publisher: "Rishabh Educational Trust",
  metadataBase: new URL("https://tis.edu.in"),
  alternates: {
    canonical: "https://tis.edu.in",
  },
  openGraph: {
    title: "Tula's International School | Top Boarding School in Dehradun",
    description:
      "CBSE-affiliated co-ed residential boarding school from Class IV to XII with modern learning, 16+ Olympic sports and holistic Modern Gurukul approach.",
    url: "https://tis.edu.in",
    siteName: "Tula's International School",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://tis.edu.in/images/tis-campus-og.jpg",
        width: 1200,
        height: 630,
        alt: "Tula's International School 22-Acre Campus in Dehradun",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tula's International School | Best Boarding School in Dehradun",
    description:
      "CBSE-affiliated co-ed boarding school for boys and girls from Class 4 to 12 in Dehradun, Uttarakhand.",
    images: ["https://tis.edu.in/images/tis-campus-og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#B90124",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${playfair.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        {/* Inline script to prevent theme flashing on load */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('tis-theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (saved === 'dark' || (!saved && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased selection:bg-tis-red selection:text-white bg-white text-tis-charcoal dark:bg-tis-dark dark:text-neutral-100 transition-colors duration-300">
        <ScrollProgress />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
