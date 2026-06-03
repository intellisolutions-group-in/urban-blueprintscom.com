"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  aspectRatio?: 'square' | 'video' | 'portrait' | 'wide' | 'auto' | string;
  sizes?: string;
  priority?: boolean;
  quality?: number;
}

export function OptimizedImage({
  src,
  alt,
  className = "",
  containerClassName = "",
  aspectRatio = "video",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  priority = false,
  quality = 75,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  // Set the aspect ratio classes
  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
    wide: "aspect-[21/9]",
    auto: "h-auto w-full",
  }[aspectRatio] || aspectRatio;

  if (!src) {
    return (
      <div
        className={cn(
          "relative overflow-hidden w-full bg-[#0c223a] rounded-[var(--radius-xl)] flex items-center justify-center border border-dashed border-accent/30 min-h-[120px]",
          aspectClasses,
          containerClassName
        )}
      >
        {/* CAD blueprint grid coordinate background */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none z-0" 
          style={{ 
            backgroundImage: `
              linear-gradient(to right, rgba(33, 150, 243, 0.25) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(33, 150, 243, 0.25) 1px, transparent 1px)
            `,
            backgroundSize: '16px 16px'
          }} 
        />
        {/* Subtle radial glow in the middle of the blueprint */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(33,150,243,0.12)_0%,transparent_70%)] pointer-events-none z-0" />
        
        <span className="relative z-10 text-accent/80 font-mono text-[10px] uppercase tracking-widest font-bold drop-shadow-sm px-4 text-center">
          Image Blueprint // Active
        </span>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden w-full bg-secondary/30 rounded-[var(--radius-xl)]",
        aspectClasses,
        containerClassName
      )}
    >
      {/* Shimmer Placeholder Effect */}
      {isLoading && (
        <div className="absolute inset-0 z-10 bg-secondary/50 flex items-center justify-center">
          <div className="w-full h-full bg-gradient-to-r from-secondary/40 via-secondary/70 to-secondary/40 bg-[length:200%_100%] animate-pulse" />
        </div>
      )}

      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        quality={quality}
        loading={priority ? undefined : "lazy"}
        className={cn(
          "object-cover transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
          isLoading ? "scale-105 blur-sm opacity-0" : "scale-100 blur-0 opacity-100",
          className
        )}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}
