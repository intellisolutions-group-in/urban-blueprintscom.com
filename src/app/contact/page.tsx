import React from "react";
import { PageHero } from "@/components/shared/PageHero";
import { ContactPreview } from "@/components/sections/ContactPreview";

export const metadata = {
  title: "Contact Us | Urban Blueprints",
  description: "Get in touch with our principal engineering team for feasibility requests, structural assessments, and consulting.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHero 
        title="Get In Touch"
        description="Whether you need a structural feasibility assessment, environmental permit consulting, or a complete project bid, our engineers are ready to assist."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact Us", href: "/contact" }
        ]}
        backgroundImage="/images/contact/contact-hero-banner.webp"
      />

      <ContactPreview />
    </div>
  );
}
