// @ts-nocheck
import React from "react"
const Badge = React.forwardRef<
  HTMLSpanElement,
  React.PropsWithChildren<{ className?: string; [key: string]: any }>
>(({ className = "", children, ...props }, ref) => {
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-xs font-semibold bg-yellow-100 text-yellow-800 ${className}`}
      ref={ref}
      {...props}
    >
      {children}
    </span>
  )
})
Badge.displayName = "Badge"
export { Badge }
