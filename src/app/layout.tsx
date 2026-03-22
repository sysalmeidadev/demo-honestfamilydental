import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const pjs = Plus_Jakarta_Sans({
  variable: "--font-pjs",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Honest Family Dental | Family Airway Dentist in Austin, TX",
  description: "Advanced holistic dentistry and airway health. We address the root cause of Sleep Disordered Breathing in Austin, TX.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${pjs.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
