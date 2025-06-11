// @ts-nocheck
import React from "react"
const Dialog = ({ children }: React.PropsWithChildren<{}>) => <div>{children}</div>;
const DialogTrigger = ({ asChild, children }: React.PropsWithChildren<{ asChild?: boolean }>) => <>{children}</>;
const DialogContent = ({ className = "", children }: React.PropsWithChildren<{ className?: string }>) => (
  <div className={`fixed inset-0 flex items-center justify-center z-50 ${className}`}>{children}</div>
);
const DialogHeader = ({ children }: React.PropsWithChildren<{}>) => <div className="mb-4">{children}</div>;
const DialogTitle = ({ className = "", children }: React.PropsWithChildren<{ className?: string }>) => <h2 className={`text-xl font-bold ${className}`}>{children}</h2>;
export { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle }
