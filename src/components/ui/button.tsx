import * as React from "react"
import { cn } from "@/lib/utils"

const buttonVariants = {
  base: "inline-flex items-center justify-center whitespace-nowrap rounded-[var(--radius-sm)] text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  variants: {
    default: "bg-primary text-primary-foreground hover:bg-primary-light shadow-soft hover:shadow-float",
    destructive: "bg-red-500 text-white hover:bg-red-600 shadow-soft hover:shadow-float",
    outline: "border-2 border-border text-foreground hover:border-primary hover:text-primary bg-transparent",
    secondary: "bg-secondary text-secondary-foreground hover:bg-gray-200",
    ghost: "hover:bg-secondary hover:text-secondary-foreground",
    link: "text-accent underline-offset-4 hover:underline",
  },
  sizes: {
    default: "h-12 px-6 py-3",
    sm: "h-9 px-4 text-xs",
    lg: "h-14 px-10 text-base",
    icon: "h-12 w-12",
  }
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonVariants.variants;
  size?: keyof typeof buttonVariants.sizes;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          buttonVariants.base,
          buttonVariants.variants[variant],
          buttonVariants.sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
