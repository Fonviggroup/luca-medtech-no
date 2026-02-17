import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Luca MedTech — Diabetesdata som bare flyter",
  description:
    "Vi kobler blodsukkersensorer direkte til sykehusjournal — så klinikere slipper å kopiere, og familier alltid har oversikt.",
  openGraph: {
    title: "Luca MedTech — Diabetesdata som bare flyter",
    description: "Norges første CGM-til-journal-plattform",
    url: "https://lucamedtech.no",
    siteName: "Luca MedTech",
    locale: "nb_NO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nb">
      <body className={`${dmSerif.variable} ${dmSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
