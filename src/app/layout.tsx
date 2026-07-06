// Trigger HMR Rebuild
import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { SmoothScroll } from "@/components/shared/SmoothScroll";
import { ContactDrawer } from "@/components/shared/ContactDrawer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: {
    default: "Urban Blueprints | Modern Civil Engineering",
    template: "%s | Urban Blueprints",
  },
  description: "A team of experienced and qualified civil engineers committed to providing high-quality services in structural, transportation, water resources, environmental, and geotechnical engineering.",
  metadataBase: new URL("https://urban-blueprintscom.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Urban Blueprints | Modern Civil Engineering",
    description: "A team of experienced and qualified civil engineers committed to providing high-quality services in structural, transportation, water resources, environmental, and geotechnical engineering.",
    url: "https://urban-blueprintscom.com",
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
  icons: {
    icon: [
      { url: '/images/logo/favicon.ico' },
      { url: '/images/logo/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/logo/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/images/logo/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Urban Blueprints",
    "url": "https://urban-blueprintscom.com",
    "logo": "https://urban-blueprintscom.com/images/logo/Urban_Logo_Final-02.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "info@urban-blueprintscom.com"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${outfit.variable} font-sans bg-background text-foreground flex flex-col min-h-screen antialiased overflow-x-clip`}>
        <SmoothScroll />
        <Navbar />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
        <ContactDrawer />
      </body>
    </html>
  );
}
