import type { Metadata } from "next";
import { Space_Grotesk, Modak } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

const modak = Modak({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-modak",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MySponsor – Trouve des sponsors prêts à te payer",
  description:
    "Trouvez des sponsors et multipliez vos revenus grâce à votre métier de créateur de contenu sans perdre du temps.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${spaceGrotesk.variable} ${modak.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
