// layout.tsx — Root layout: font setup, metadata, and language provider wrapper

import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { LanguageToggle } from "@/components/ui/LanguageToggle";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Héctor Muñoz Palacios — Backend Developer",
  description:
    "Backend Developer with a systems mindset. Java, Spring Boot, hexagonal architecture.",
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
          {children}
          {/* Temporary position — will move to header in Phase 5 */}
          <LanguageToggle />
        </LanguageProvider>
      </body>
    </html>
  );
}