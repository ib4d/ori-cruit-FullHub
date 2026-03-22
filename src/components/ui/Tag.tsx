import * as React from "react"
import { cn } from "../../lib/utils"

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "outline" | "filled" | "status"
  status?: "success" | "warning" | "error" | "info" | "neutral"
}

export const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  ({ className, variant = "outline", status = "neutral", ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center px-2 py-1 text-ui-meta uppercase font-tech tracking-wider",
          {
            "border border-line-strong text-ink-primary": variant === "outline",
            "bg-bg-soft text-ink-primary border border-line-hair": variant === "filled",
            "bg-state-success text-ink-primary border border-line-strong": variant === "status" && status === "success",
            "bg-state-warning text-ink-primary border border-line-strong": variant === "status" && status === "warning",
            "bg-state-error text-ink-primary border border-line-strong": variant === "status" && status === "error",
            "bg-state-info text-ink-primary border border-line-strong": variant === "status" && status === "info",
            "bg-bg-panel text-ink-muted border border-line-hair": variant === "status" && status === "neutral",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Tag.displayName = "Tag"
