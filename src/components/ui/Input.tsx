import * as React from "react"
import { cn } from "./Button"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", label, error, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label className="text-ui-sm font-medium text-ink-secondary">
            {label}
          </label>
        )}
        <input
          type={type}
          className={cn(
            "flex h-[44px] w-full border border-line-hair bg-bg-base px-3 py-2",
            "text-ui-md text-ink-primary placeholder:text-ink-muted",
            "focus-visible:outline-none focus-visible:border-ink-primary",
            "disabled:cursor-not-allowed disabled:opacity-50",
            error && "border-state-error focus-visible:border-state-error",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <span className="text-ui-xs text-state-error">{error}</span>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"
