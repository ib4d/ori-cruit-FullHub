import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "../../lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: "primary" | "secondary" | "outline" | "ghost"
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center min-h-[44px] px-6 py-2 whitespace-nowrap",
          "text-[16px] leading-[1.4] font-medium transition-colors duration-fast ease-out",
          "disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-ink-primary text-ink-inverse hover:bg-surface-black hover:text-accent-blush": variant === "primary",
            "bg-accent-blush text-ink-primary hover:bg-ink-primary hover:text-bg-base": variant === "secondary",
            "border border-ink-primary hover:bg-bg-soft text-ink-primary": variant === "outline",
            "hover:bg-bg-soft text-ink-primary": variant === "ghost",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"
