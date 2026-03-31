import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ahmed San | Web & App Developer | E-Commerce Entrepreneur",
    template: "%s | Ahmed San",
  },
  description:
    "Ahmed San - E-Commerce Entrepreneur & Web/App Developer. Building modern web applications with React, Next.js, Node.js, and more.",
  keywords: [
    "Ahmed San",
    "Web Developer",
    "App Developer",
    "E-Commerce",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Fullstack Developer",
    "Frontend Developer",
    "Portfolio",
  ],
  authors: [{ name: "Ahmed San" }],
  creator: "Ahmed San",
  metadataBase: new URL("https://ahmedsan.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ahmedsan.com",
    siteName: "Ahmed San",
    title: "Ahmed San | Web & App Developer | E-Commerce Entrepreneur",
    description:
      "E-Commerce Entrepreneur & Web/App Developer. Building modern web applications with React, Next.js, Node.js, and more.",
    images: [
      {
        url: "/ahmed.jpg",
        width: 1200,
        height: 630,
        alt: "Ahmed San",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed San | Web & App Developer | E-Commerce Entrepreneur",
    description:
      "E-Commerce Entrepreneur & Web/App Developer. Building modern web applications with React, Next.js, Node.js, and more.",
    images: ["/ahmed.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
