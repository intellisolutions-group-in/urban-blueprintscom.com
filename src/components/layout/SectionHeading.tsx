import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
}

export function SectionHeading({ title, subtitle, alignment = 'left', className, ...props }: SectionHeadingProps) {
  return (
    <div 
      className={cn(
        "mb-12",
        alignment === 'center' && "text-center",
        alignment === 'right' && "text-right",
        className
      )} 
      {...props}
    >
      <div className={cn(
        "w-16 h-1 bg-accent mb-6", 
        alignment === 'center' && "mx-auto",
        alignment === 'right' && "ml-auto"
      )} />
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4 tracking-tight text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "text-muted-foreground text-lg max-w-2xl",
          alignment === 'center' && "mx-auto",
          alignment === 'right' && "ml-auto"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
