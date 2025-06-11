// @ts-nocheck
import React from "react"
const Card = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<{ className?: string; [key: string]: any }>
>(({ className = "", children, ...props }, ref) => (
  <div className={`rounded-xl shadow-lg bg-white ${className}`} ref={ref} {...props}>
    {children}
  </div>
))
const CardHeader = ({ className = "", children, ...props }: React.PropsWithChildren<{ className?: string }>) => (
  <div className={`p-6 border-b border-gray-200 ${className}`} {...props}>
    {children}
  </div>
)
const CardTitle = ({ className = "", children, ...props }: React.PropsWithChildren<{ className?: string }>) => (
  <h3 className={`text-lg font-semibold ${className}`} {...props}>
    {children}
  </h3>
)
const CardContent = ({ className = "", children, ...props }: React.PropsWithChildren<{ className?: string }>) => (
  <div className={`p-6 ${className}`} {...props}>
    {children}
  </div>
)
export { Card, CardHeader, CardTitle, CardContent }
