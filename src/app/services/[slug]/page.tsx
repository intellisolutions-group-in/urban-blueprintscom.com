import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services";
import { showcaseProjects } from "@/data/projects";
import { ServiceDetailsContent } from "@/components/sections/ServiceDetailsContent";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const service = servicesData[resolvedParams.slug];
  
  if (!service) {
    return {
      title: "Service Not Found | Urban Blueprints",
      description: "The requested engineering discipline was not found.",
    };
  }

  return {
    title: `${service.title} | Modern Engineering | Urban Blueprints`,
    description: service.description,
    alternates: {
      canonical: `https://urban-blueprints.com/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | Urban Blueprints`,
      description: service.description,
      url: `https://urban-blueprints.com/services/${service.slug}`,
      siteName: "Urban Blueprints",
      images: [
        {
          url: service.image,
          alt: service.title,
        }
      ],
      type: "website",
    }
  };
}

export default async function ServiceDetailsPage({ params }: PageProps) {
  const resolvedParams = await params;
  const service = servicesData[resolvedParams.slug];

  if (!service) {
    notFound();
  }

  // Get related services (excluding current one, up to 3 items)
  const relatedServices = Object.values(servicesData)
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  // Get specific case studies for this service
  const serviceCases = showcaseProjects[service.slug] || [];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `https://urban-blueprints.com/services/${service.slug}/#webpage`,
        "url": `https://urban-blueprints.com/services/${service.slug}`,
        "name": `${service.title} | Urban Blueprints`,
        "description": service.description,
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
              "name": "Services",
              "item": "https://urban-blueprints.com/services"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": service.title,
              "item": `https://urban-blueprints.com/services/${service.slug}`
            }
          ]
        }
      },
      {
        "@type": "Service",
        "name": service.title,
        "description": service.description,
        "provider": {
          "@type": "Organization",
          "name": "Urban Blueprints",
          "url": "https://urban-blueprints.com"
        },
        "areaServed": "Global"
      }
    ]
  };

  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <ServiceDetailsContent
        service={service}
        relatedServices={relatedServices}
        serviceCases={serviceCases}
      />
    </>
  );
}
