import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aadi Huria — Data Science @ Michigan",
  description:
    "Personal site of Aadi Huria — Data Science undergrad at University of Michigan, Amazon Ads SDE Intern, and builder of full-stack + ML projects.",
  keywords: ["Aadi Huria", "Data Science", "University of Michigan", "Amazon", "Software Engineer", "Portfolio"],
  authors: [{ name: "Aadi Huria" }],
  openGraph: {
    title: "Aadi Huria — Data Science @ Michigan",
    description:
      "I build things that work — at the intersection of data, software, and systems.",
    url: "https://aadihuria.vercel.app",
    siteName: "Aadi Huria",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aadi Huria — Data Science @ Michigan",
    description: "I build things that work — at the intersection of data, software, and systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${plexSans.variable} ${plexMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
