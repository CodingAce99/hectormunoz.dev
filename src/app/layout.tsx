import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets:  ["latin"],
  weight:   ["500", "700"],
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets:  ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title:       "Héctor Muñoz Palacios — Java Backend Developer",
  description:
    "Portfolio de Héctor Muñoz Palacios. Java Backend Developer especializado en arquitectura hexagonal, Spring Boot y CI/CD. Disponible en Valencia y Madrid.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="font-body bg-background text-primary antialiased">
        <main>{children}</main>
      </body>
    </html>
  );
}