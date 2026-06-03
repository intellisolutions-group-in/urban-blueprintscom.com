// Trigger HMR Rebuild
import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { SmoothScroll } from "@/components/shared/SmoothScroll";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: {
    default: "Urban Blueprints | Modern Civil Engineering",
    template: "%s | Urban Blueprints",
  },
  description: "A team of experienced and qualified civil engineers committed to providing high-quality services in structural, transportation, water resources, environmental, and geotechnical engineering.",
  metadataBase: new URL("https://urban-blueprints.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Urban Blueprints | Modern Civil Engineering",
    description: "A team of experienced and qualified civil engineers committed to providing high-quality services in structural, transportation, water resources, environmental, and geotechnical engineering.",
    url: "https://urban-blueprints.com",
    siteName: "Urban Blueprints",
    images: [
      {
        url: "/images/home/home-hero-banner.webp",
        width: 1200,
        height: 630,
        alt: "Urban Blueprints Civil Engineering",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Urban Blueprints | Modern Civil Engineering",
    description: "A team of experienced and qualified civil engineers committed to providing high-quality services in structural, transportation, water resources, environmental, and geotechnical engineering.",
    images: ["/images/home/home-hero-banner.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} font-sans bg-background text-foreground flex flex-col min-h-screen antialiased overflow-x-clip`}>
        <SmoothScroll />
        <Navbar />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
