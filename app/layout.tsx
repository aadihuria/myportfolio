import type { Metadata } from "next";
import { Space_Mono, DM_Sans } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aadi Huria — Data Science @ Michigan",
  description:
    "Personal site of Aadi Huria — Data Science undergrad at University of Michigan, incoming Amazon Ads SDE Intern, and builder of full-stack + ML projects.",
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
    <html lang="en" className={`${spaceMono.variable} ${dmSans.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
