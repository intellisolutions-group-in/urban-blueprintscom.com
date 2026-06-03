import React from "react";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Stats } from "@/components/sections/Stats";
import { Projects } from "@/components/sections/Projects";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBlock } from "@/components/shared/CtaBlock";
import { ContactPreview } from "@/components/sections/ContactPreview";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Immersive Hero Section */}
      <Hero />

      {/* 2. Core Disciplines Services Section */}
      <Services />

      {/* 3. Company About Narrative */}
      <About />

      {/* 4. Impact Performance Counters */}
      <Stats />

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

      {/* 9. Contact Preview Form & Location Coordinates */}
      <ContactPreview />
    </div>
  );
}
