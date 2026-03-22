import * as React from "react"
import { cn } from "../../lib/utils"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "black" | "paper"
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "p-6 md:p-8 border-line-hair",
          {
            "bg-bg-panel border": variant === "default",
            "bg-surface-black text-ink-inverse": variant === "black",
            "bg-bg-paper border": variant === "paper",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Card.displayName = "Card"
