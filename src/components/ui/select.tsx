// @ts-nocheck
import React from "react"
const Select = ({ value, onValueChange, children }: React.PropsWithChildren<{ value?: any; onValueChange?: any }>) => (
  <div>{children}</div>
);
const SelectTrigger = ({ className = "", children }: React.PropsWithChildren<{ className?: string }>) => (
  <button className={className}>{children}</button>
);
const SelectValue = ({ placeholder }: { placeholder?: string }) => <span>{placeholder}</span>;
const SelectContent = ({ children }: React.PropsWithChildren<{}>) => <div>{children}</div>;
const SelectItem = ({ value, children }: React.PropsWithChildren<{ value?: any }>) => <div>{children}</div>;
export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem };
