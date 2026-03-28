// layout.tsx — Root layout: font setup, metadata, and language provider wrapper

import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { Header } from "@/components/layout/Header";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const SITE_URL = "https://hectormunoz.dev";

export const viewport: Viewport = {
  themeColor: "#0A0A0F",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Héctor Muñoz Palacios — Backend Developer",
    template: "%s — Héctor Muñoz Palacios",
  },
  description:
    "Backend Developer con mentalidad de sistemas. Java, Spring Boot, arquitectura hexagonal. De administrar infraestructura a construir el software que la gestiona.",
  keywords: [
    "Backend Developer",
    "Java Developer",
    "Spring Boot",
    "Hexagonal Architecture",
    "Portfolio",
    "Héctor Muñoz Palacios",
    "Junior Developer Spain",
    "Full Stack",
  ],
  authors: [{ name: "Héctor Muñoz Palacios" }],
  creator: "Héctor Muñoz Palacios",
  openGraph: {
    type: "website",
    locale: "es_ES",
    alternateLocale: "en_US",
    url: SITE_URL,
    siteName: "Héctor Muñoz Palacios",
    title: "Héctor Muñoz Palacios — Backend Developer",
    description:
      "Backend Developer con mentalidad de sistemas. Java, Spring Boot, arquitectura hexagonal.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Héctor Muñoz Palacios — Backend Developer",
    description:
      "Backend Developer con mentalidad de sistemas. Java, Spring Boot, arquitectura hexagonal.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // lang="es" is the SSR default — LanguageContext updates it on the client
    <html lang="es" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>
        <LanguageProvider>
          <Header />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}