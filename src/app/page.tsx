import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Urban Blueprints | Modern Civil & Structural Engineering Solutions",
  description: "Urban Blueprints provides expert civil, structural, environmental, geotechnical, and transportation engineering services. Build the future with our BIM and advanced design technologies.",
  alternates: {
    canonical: "https://urban-blueprintscom.com",
  },
  openGraph: {
    title: "Urban Blueprints | Modern Civil & Structural Engineering Solutions",
    description: "Urban Blueprints provides expert civil, structural, environmental, geotechnical, and transportation engineering services. Build the future with our BIM and advanced design technologies.",
    url: "https://urban-blueprintscom.com",
    siteName: "Urban Blueprints",
    type: "website",
  }
};

import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBlock } from "@/components/shared/CtaBlock";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://urban-blueprintscom.com/#website",
        "url": "https://urban-blueprintscom.com",
        "name": "Urban Blueprints",
        "description": "Modern Civil Engineering Services",
        "publisher": {
          "@id": "https://urban-blueprintscom.com/#organization"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://urban-blueprintscom.com/#organization",
        "name": "Urban Blueprints",
        "url": "https://urban-blueprintscom.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://urban-blueprintscom.com/favicon.ico"
        },
        "sameAs": [
          "https://facebook.com/urbanblueprintscom",
          "https://twitter.com/urbanblueprints",
          "https://www.instagram.com/urban_blueprints_/"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "email": "info@urban-blueprintscom.com",
          "availableLanguage": "en"
        }
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://urban-blueprintscom.com/#localbusiness",
        "name": "Urban Blueprints",
        "image": "https://urban-blueprintscom.com/images/home/home-hero-banner.webp",
        "email": "info@urban-blueprintscom.com",
        "url": "https://urban-blueprintscom.com"
      },
      {
        "@type": "Service",
        "name": "Transportation Engineering",
        "provider": {
          "@id": "https://urban-blueprintscom.com/#organization"
        },
        "description": "Planning, geometric design, and structural analysis of high-volume expressways, interchanges, transit corridors, and highway infrastructure."
      },
      {
        "@type": "Service",
        "name": "Structural Engineering",
        "provider": {
          "@id": "https://urban-blueprintscom.com/#organization"
        },
        "description": "Detailed design and modeling of multi-story buildings, bridge configurations, retaining structures, and seismic retrofitting solutions."
      },
      {
        "@type": "Service",
        "name": "Water Resources Engineering",
        "provider": {
          "@id": "https://urban-blueprintscom.com/#organization"
        },
        "description": "Hydraulic calculations, stormwater retention networks, canal geometries, and flood mitigation barriers."
      },
      {
        "@type": "Service",
        "name": "Environmental Engineering",
        "provider": {
          "@id": "https://urban-blueprintscom.com/#organization"
        },
        "description": "Ecological site assessments, sustainable infrastructure modeling, brownfield phytoremediation, and bio-retention layouts."
      },
      {
        "@type": "Service",
        "name": "Geotechnical Engineering",
        "provider": {
          "@id": "https://urban-blueprintscom.com/#organization"
        },
        "description": "Subsurface boring calculations, slope stability retaining wall grids, deep pile anchors, and seismic soil telemetry."
      }
    ]
  };

  return (
    <div className="w-full flex flex-col">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      {/* 1. Immersive Hero Section */}
      <Hero />

      {/* 2. Core Disciplines Services Section */}
      <Services />

      {/* 3. Company About Narrative */}
      <About />

      {/* 5. Filterable Projects Gallery */}
      <Projects />

      {/* 6. Technical Engineering Advantages */}
      <WhyChooseUs />

      {/* 7. Client Reviews and Feedback */}
      <Testimonials />

      {/* 8. Call To Action (Feasibility Pitch) */}
      <CtaBlock 
        title="Ready to build your next capital project?"
        description="Connect with our principal engineers today to analyze structural coordinates, schedule feasibility, or calculate digital twin layouts."
        primaryButtonText="Get a Feasibility Assessment"
        primaryButtonHref="/contact"
        secondaryButtonText="Explore Technical Disciplines"
        secondaryButtonHref="/services"
      />
    </div>
  );
}
