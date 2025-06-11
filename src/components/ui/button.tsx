// @ts-nocheck
import React from "react"
import { cn } from "../../lib/utils"

const Button = React.forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<{
    className?: string
    variant?: string
    size?: string
    [key: string]: any
  }>
>(({ className = "", variant = "default", size = "md", children, ...props }, ref) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
        variant === "outline"
          ? "border border-yellow-500 bg-transparent text-yellow-500 hover:bg-yellow-50"
          : variant === "ghost"
          ? "bg-transparent hover:bg-yellow-50 text-yellow-600"
          : "bg-yellow-500 text-white hover:bg-yellow-600",
        size === "sm"
          ? "h-8 px-3 text-sm"
          : size === "lg"
          ? "h-12 px-6 text-lg"
          : "h-10 px-4 text-base",
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  )
})
Button.displayName = "Button"
export { Button }
