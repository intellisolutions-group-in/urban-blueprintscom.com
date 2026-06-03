import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";
import { ProjectDetailsContent } from "@/components/sections/ProjectDetailsContent";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projectsData.find((p) => p.slug === resolvedParams.slug);
  
  if (!project) {
    return {
      title: "Project Not Found | Urban Blueprints",
      description: "The requested case study was not found.",
    };
  }

  return {
    title: `${project.title} | Case Study | Urban Blueprints`,
    description: project.description,
    alternates: {
      canonical: `https://urban-blueprints.com/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | Urban Blueprints`,
      description: project.description,
      url: `https://urban-blueprints.com/projects/${project.slug}`,
      siteName: "Urban Blueprints",
      images: [
        {
          url: project.image,
          alt: project.title,
        }
      ],
      type: "website",
    }
  };
}

export default async function ProjectDetailsPage({ params }: PageProps) {
  const resolvedParams = await params;
  const project = projectsData.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  // Find other projects in the same discipline for related case studies (guaranteeing unique assets)
  const relatedProjects = projectsData
    .filter((p) => p.disciplineSlug === project.disciplineSlug && p.slug !== project.slug)
    .slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `https://urban-blueprints.com/projects/${project.slug}/#webpage`,
        "url": `https://urban-blueprints.com/projects/${project.slug}`,
        "name": `${project.title} | Case Study | Urban Blueprints`,
        "description": project.description,
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
              "name": "Portfolio",
              "item": "https://urban-blueprints.com/projects"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": project.title,
              "item": `https://urban-blueprints.com/projects/${project.slug}`
            }
          ]
        }
      },
      {
        "@type": "CreativeWork",
        "name": project.title,
        "description": project.description,
        "image": "https://urban-blueprints.com" + project.image,
        "author": {
          "@type": "Organization",
          "name": "Urban Blueprints",
          "url": "https://urban-blueprints.com"
        }
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
      <ProjectDetailsContent
        project={project}
        relatedProjects={relatedProjects}
      />
    </>
  );
}
