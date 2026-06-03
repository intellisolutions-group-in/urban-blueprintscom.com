import React from 'react';

// 1. Shimmer overlay utility (premium grey animated gradient pulse)
export function Shimmer() {
  return (
    <div className="absolute inset-0 bg-gradient-to-r from-secondary/40 via-secondary/70 to-secondary/40 bg-[length:200%_100%] animate-pulse" />
  );
}

// 2. Hero Banner Section Skeleton (matches the 450px PageHero exactly)
export function HeroSkeleton() {
  return (
    <div className="relative pt-40 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-primary/95 text-white h-[450px] w-full flex items-center">
      <Shimmer />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 w-full">
        {/* Breadcrumbs shimmer */}
        <div className="h-4 bg-secondary/20 rounded-full w-40 relative overflow-hidden">
          <Shimmer />
        </div>
        {/* Title shimmer */}
        <div className="h-14 md:h-16 bg-secondary/30 rounded-lg w-2/3 relative overflow-hidden">
          <Shimmer />
        </div>
        {/* Description shimmer */}
        <div className="h-6 bg-secondary/20 rounded-md w-1/2 relative overflow-hidden">
          <Shimmer />
        </div>
      </div>
    </div>
  );
}

// 3. Service Overview Skeleton
export function OverviewSkeleton() {
  return (
    <div className="space-y-6 mb-16 relative overflow-hidden w-full">
      <div className="h-8 bg-secondary/50 rounded-md w-1/4 relative overflow-hidden">
        <Shimmer />
      </div>
      <div className="p-6 bg-secondary/20 rounded-r-lg border-l-4 border-secondary/40 h-28 relative overflow-hidden">
        <Shimmer />
      </div>
    </div>
  );
}

// 4. Sidebar Widgets Skeleton
export function SidebarSkeleton() {
  return (
    <div className="space-y-8 w-full">
      {/* Square profile image card shimmer */}
      <div className="rounded-[var(--radius-xl)] aspect-square bg-secondary/30 relative overflow-hidden border-4 border-white shadow-soft">
        <Shimmer />
      </div>

      {/* Facts sheet profile details shimmer */}
      <div className="p-8 rounded-[var(--radius-xl)] bg-secondary/20 border border-border space-y-6 relative overflow-hidden">
        <div className="h-6 bg-secondary/50 rounded w-1/2 relative overflow-hidden"><Shimmer /></div>
        <div className="space-y-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="flex justify-between">
              <div className="h-4 bg-secondary/40 w-1/3 rounded relative overflow-hidden"><Shimmer /></div>
              <div className="h-4 bg-secondary/50 w-1/4 rounded relative overflow-hidden"><Shimmer /></div>
            </div>
          ))}
        </div>
      </div>

      {/* Senior Consultation Widget Shimmer */}
      <div className="p-8 rounded-[var(--radius-xl)] bg-primary/10 border border-border h-52 relative overflow-hidden flex flex-col justify-between">
        <div className="space-y-3">
          <div className="h-6 bg-secondary/40 w-2/3 rounded relative overflow-hidden"><Shimmer /></div>
          <div className="h-4 bg-secondary/35 w-full rounded relative overflow-hidden"><Shimmer /></div>
          <div className="h-4 bg-secondary/35 w-5/6 rounded relative overflow-hidden"><Shimmer /></div>
        </div>
        <div className="h-12 bg-secondary/40 w-full rounded relative overflow-hidden"><Shimmer /></div>
      </div>
    </div>
  );
}

// 5. Dynamic Layout Section Skeleton (matches SectionRenderer layout types for Zero CLS)
export function SectionSkeleton({ type }: { type: string }) {
  return (
    <div className="mb-16 space-y-6 relative overflow-hidden w-full">
      {/* Title block */}
      <div className="h-8 bg-secondary/50 rounded-md w-1/3 relative overflow-hidden">
        <Shimmer />
      </div>

      {/* Section main WebP banner shimmer */}
      {type === 'text-image-grid' && (
        <div className="aspect-[16/9] bg-secondary/30 rounded-[var(--radius-xl)] relative overflow-hidden w-full">
          <Shimmer />
        </div>
      )}

      {/* Text block body shimmer */}
      <div className="space-y-3">
        <div className="h-4 bg-secondary/35 w-full rounded relative overflow-hidden"><Shimmer /></div>
        <div className="h-4 bg-secondary/35 w-5/6 rounded relative overflow-hidden"><Shimmer /></div>
      </div>

      {/* Text image grids items shimmer */}
      {type === 'text-image-grid' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 w-full">
          <div className="aspect-[4/3] bg-secondary/20 rounded-[var(--radius-xl)] relative overflow-hidden"><Shimmer /></div>
          <div className="space-y-4 pt-2">
            <div className="h-6 bg-secondary/50 w-1/2 rounded relative overflow-hidden"><Shimmer /></div>
            <div className="h-4 bg-secondary/30 w-full rounded relative overflow-hidden"><Shimmer /></div>
            <div className="h-4 bg-secondary/30 w-5/6 rounded relative overflow-hidden"><Shimmer /></div>
          </div>
        </div>
      )}

      {/* Accordions shimmer */}
      {type === 'accordion' && (
        <div className="space-y-4 pt-2 w-full">
          {[1, 2, 3].map(i => (
            <div key={i} className="h-16 bg-secondary/20 border border-border rounded-[var(--radius-xl)] relative overflow-hidden">
              <Shimmer />
            </div>
          ))}
        </div>
      )}

      {/* Bulleted list items shimmer */}
      {type === 'list-block' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 w-full">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="h-16 bg-secondary/20 rounded-[var(--radius-xl)] border border-border relative overflow-hidden">
              <Shimmer />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// 6. Project Showcase Cards Skeleton (matches 2-column projects list)
export function ProjectsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative overflow-hidden w-full">
      {[1, 2].map(i => (
        <div key={i} className="rounded-[var(--radius-xl)] border border-border overflow-hidden bg-secondary/10 h-[380px] relative">
          <div className="aspect-video bg-secondary/30 relative overflow-hidden"><Shimmer /></div>
          <div className="p-6 space-y-4">
            <div className="h-6 bg-secondary/50 w-1/2 rounded relative overflow-hidden"><Shimmer /></div>
            <div className="h-4 bg-secondary/30 w-5/6 rounded relative overflow-hidden"><Shimmer /></div>
          </div>
        </div>
      ))}
    </div>
  );
}

// 7. Related Services Cards Skeleton (matches 3-column categories list)
export function RelatedServicesSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative overflow-hidden w-full">
      {[1, 2, 3].map(i => (
        <div key={i} className="rounded-[var(--radius-xl)] border border-border p-6 bg-secondary/10 h-[320px] relative flex flex-col justify-between">
          <div className="space-y-4">
            <div className="aspect-[16/10] bg-secondary/30 rounded-lg relative overflow-hidden"><Shimmer /></div>
            <div className="h-6 bg-secondary/50 w-2/3 rounded relative overflow-hidden"><Shimmer /></div>
            <div className="h-4 bg-secondary/30 w-full rounded relative overflow-hidden"><Shimmer /></div>
          </div>
          <div className="h-4 bg-secondary/40 w-1/3 rounded relative overflow-hidden"><Shimmer /></div>
        </div>
      ))}
    </div>
  );
}

// 8. Footer CTA Action Block Skeleton (matches 300px CTA block)
export function CtaSkeleton() {
  return (
    <div className="py-20 bg-primary/10 border-t border-border relative overflow-hidden h-[300px] flex items-center justify-center w-full">
      <Shimmer />
      <div className="max-w-4xl mx-auto text-center space-y-4 px-4 relative z-10 w-full">
        <div className="h-10 bg-secondary/30 rounded w-1/2 mx-auto relative overflow-hidden"><Shimmer /></div>
        <div className="h-6 bg-secondary/25 rounded w-2/3 mx-auto relative overflow-hidden"><Shimmer /></div>
      </div>
    </div>
  );
}

export default {};
