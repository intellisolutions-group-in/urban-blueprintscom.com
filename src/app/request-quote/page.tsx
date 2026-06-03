import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { RequestQuoteContent } from "@/components/sections/RequestQuoteContent";
import { CtaBlock } from "@/components/shared/CtaBlock";

export const metadata: Metadata = {
  title: "Request a Project Quote | Urban Blueprints",
  description: "Request a structural, civil, or environmental engineering quote. Submit your project requirements, location, budget, and design files for scoping.",
  alternates: {
    canonical: "https://urban-blueprints.com/request-quote",
  },
  openGraph: {
    title: "Request a Project Quote | Urban Blueprints",
    description: "Request a structural, civil, or environmental engineering quote. Submit your project requirements, location, budget, and design files for scoping.",
    url: "https://urban-blueprints.com/request-quote",
    siteName: "Urban Blueprints",
    type: "website",
  }
};

export default function RequestQuotePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://urban-blueprints.com/request-quote/#webpage",
        "url": "https://urban-blueprints.com/request-quote",
        "name": "Request a Project Quote | Urban Blueprints",
        "description": "Request a structural, civil, or environmental engineering quote. Submit project parameters and blueprints for feasibility analysis.",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://urban-blueprints.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Request Quote",
              "item": "https://urban-blueprints.com/request-quote"
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://urban-blueprints.com/request-quote/#faqpage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is your typical turnaround time for a structural quote?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Standard project quotes are processed within 1 to 2 business days. For complex municipal capital designs or large-scale transportation projects, detailed proposals may take up to 5 business days."
            }
          },
          {
            "@type": "Question",
            "name": "What file formats do you accept for engineering uploads?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We accept standard CAD files (.dwg, .dxf), BIM models (.rvt, .ifc), structural calculations (.pdf), and site layouts (.jpg, .png). If you have large datasets, our team will provide a secure upload portal."
            }
          },
          {
            "@type": "Question",
            "name": "Do you handle local municipal zoning and permitting?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Our environmental and structural engineers have extensive experience working with municipal boards and environmental agencies to secure building permits and zoning approval."
            }
          },
          {
            "@type": "Question",
            "name": "Can you provide structural feasibility assessments before final land acquisition?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. We perform detailed geotechnical site assessments and structural feasibility evaluations to help clients verify land stability and regulatory constraints before acquisition."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />

      <PageHero
        title="Request a Project Quote"
        description="Whether you require structural computations, traffic modeling, or environmental impact assessments, submit your project details below to receive a detailed engineering proposal."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Request Quote", href: "/request-quote" }
        ]}
        backgroundImage="/images/services/services-hero-banner.jpg"
      >
        <Link
          href="#quote-form"
          className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3.5 px-6 rounded-[var(--radius-md)] text-sm shadow-md transition-all focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary focus-visible:outline-none"
        >
          <span>Begin Quote Specification</span>
          <ArrowRight size={16} />
        </Link>
      </PageHero>

      <RequestQuoteContent />

      <CtaBlock
        title="Need immediate engineering consulting?"
        description="Connect with our principal infrastructure team directly or explore our full suite of services."
        primaryButtonText="Contact Our Team"
        primaryButtonHref="/contact"
        secondaryButtonText="Explore Our Services"
        secondaryButtonHref="/services"
      />
    </div>
  );
}
