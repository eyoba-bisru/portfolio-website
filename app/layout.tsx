import Header from "@/components/header";
import "./globals.css";
import { Outfit } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";

import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import type { Metadata } from "next";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eyob Abebe Melese | Full-Stack Software Engineer — React, Next.js, Go",
  description:
    "Eyob Abebe Melese is a results-driven full-stack software engineer based in Addis Ababa, Ethiopia with 3+ years of experience building scalable web applications using React, Next.js, Go, Django, and Docker.",
  keywords: [
    "Eyob Abebe Melese",
    "Full-Stack Developer",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "Go Developer",
    "Django Developer",
    "Web Developer Ethiopia",
    "Addis Ababa",
    "Portfolio",
    "Docker",
    "Microservices",
  ],
  authors: [{ name: "Eyob Abebe Melese" }],
  creator: "Eyob Abebe Melese",
  openGraph: {
    title: "Eyob Abebe Melese | Full-Stack Software Engineer",
    description:
      "Results-driven full-stack developer with 3+ years of experience building scalable web apps with React, Next.js, Go, Django, and Docker.",
    type: "website",
    locale: "en_US",
    siteName: "Eyob Abebe Melese Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eyob Abebe Melese | Full-Stack Software Engineer",
    description:
      "Results-driven full-stack developer with 3+ years of experience building scalable web apps with React, Next.js, Go, Django, and Docker.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${outfit.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        {/* Animated background blobs */}
        <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
          <div className="absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full bg-violet-200 opacity-40 blur-[8rem] animate-blob dark:bg-violet-900/40"></div>
          <div className="absolute top-[20rem] left-[-10rem] h-[31.25rem] w-[50rem] rounded-full bg-cyan-200 opacity-30 blur-[8rem] animate-blob animation-delay-2000 dark:bg-cyan-900/30"></div>
          <div className="absolute bottom-[-10rem] right-[-5rem] h-[25rem] w-[25rem] rounded-full bg-fuchsia-200 opacity-30 blur-[8rem] animate-blob animation-delay-4000 dark:bg-fuchsia-900/30"></div>
        </div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
