import type { MetadataRoute } from 'next'
import { projectsData } from '@/data/projects'
import { navigation } from '@/data/navigation'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://urban-blueprints.com'

  // Base paths
  const baseRoutes = [
    { 
      url: `${baseUrl}`, 
      lastModified: new Date(), 
      changeFrequency: 'daily' as const, 
      priority: 1.0 
    },
    { 
      url: `${baseUrl}/about`, 
      lastModified: new Date(), 
      changeFrequency: 'monthly' as const, 
      priority: 0.8 
    },
    { 
      url: `${baseUrl}/services`, 
      lastModified: new Date(), 
      changeFrequency: 'monthly' as const, 
      priority: 0.8 
    },
    { 
      url: `${baseUrl}/projects`, 
      lastModified: new Date(), 
      changeFrequency: 'weekly' as const, 
      priority: 0.8 
    },
    { 
      url: `${baseUrl}/contact`, 
      lastModified: new Date(), 
      changeFrequency: 'monthly' as const, 
      priority: 0.7 
    },
  ]

  // Services dropdown dynamic paths from navigation data
  const serviceDropdown = navigation.find(item => item.name === 'Services')?.dropdown || []
  const serviceRoutes = serviceDropdown.map(service => ({
    url: `${baseUrl}${service.href}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Projects dynamic paths from projects catalog data
  const projectRoutes = projectsData.map(project => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  return [...baseRoutes, ...serviceRoutes, ...projectRoutes]
}
