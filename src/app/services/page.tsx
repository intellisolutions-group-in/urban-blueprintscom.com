import React from "react";
import { PageHero } from "@/components/shared/PageHero";
import { Services as ServicesGrid } from "@/components/sections/Services";
import { CtaBlock } from "@/components/shared/CtaBlock";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering Services | Urban Blueprints",
  description: "Comprehensive civil, structural, and environmental engineering services designed for high-impact capital projects.",
  alternates: {
    canonical: "https://urban-blueprints.com/services",
  },
  openGraph: {
    title: "Engineering Services | Urban Blueprints",
    description: "Comprehensive civil, structural, and environmental engineering services designed for high-impact capital projects.",
    url: "https://urban-blueprints.com/services",
    siteName: "Urban Blueprints",
    type: "website",
  }
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHero 
        title="Our Engineering Disciplines"
        description="We deliver highly specialized, multidisciplinary engineering services covering the entire lifecycle of capital infrastructure projects, from geotechnical analysis to structural completion."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" }
        ]}
        backgroundImage="/images/services/services-hero-banner.jpg"
      />

      <div className="py-12">
        <ServicesGrid />
      </div>

      <CtaBlock 
        title="Ready to discuss your project parameters?"
        description="Connect with our principal engineers today to analyze structural coordinates, schedule feasibility, or calculate digital twin layouts."
        primaryButtonText="Request an Assessment"
        primaryButtonHref="/contact"
        secondaryButtonText="View Past Projects"
        secondaryButtonHref="/about"
      />
    </div>
  );
}
