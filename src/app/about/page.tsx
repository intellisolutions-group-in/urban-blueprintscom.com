import React from "react";
import { PageHero } from "@/components/shared/PageHero";
import { About as AboutOverview } from "@/components/sections/About";
import { VisionValues } from "@/components/sections/VisionValues";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Stats } from "@/components/sections/Stats";
import { TeamSection } from "@/components/sections/TeamSection";
import { CtaBlock } from "@/components/shared/CtaBlock";

export const metadata = {
  title: "About Us | Urban Blueprints",
  description: "Learn about our engineering expertise, leadership team, and the core values that drive our civil infrastructure projects.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHero 
        title="Our Vision & Legacy"
        description="We are a collective of world-class engineers, architects, and technical specialists dedicated to pushing the boundaries of civil infrastructure and sustainable design."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about" }
        ]}
        backgroundImage="/images/about/about-hero-banner.webp"
      />

      {/* Reusing the homepage about overview but it fits perfectly as the main introduction */}
      <AboutOverview />

      {/* Futuristic sustainable planning split section */}
      <VisionValues />

      <WhyChooseUs />

      <Stats />

      {/* Leadership team and studio layout */}
      <TeamSection />

      <CtaBlock 
        title="Join us in building the future."
        description="Whether you're looking for engineering partners for a massive capital project or seeking a career in civil infrastructure, we'd love to hear from you."
        primaryButtonText="Contact Our Team"
        primaryButtonHref="/contact"
        secondaryButtonText="Explore Our Services"
        secondaryButtonHref="/services"
      />
    </div>
  );
}
