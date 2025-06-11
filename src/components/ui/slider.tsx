// @ts-nocheck
import React from "react"
const Slider = ({ value, onValueChange, max, step, className = "", children }: React.PropsWithChildren<{ value: [number, number]; onValueChange: (val: [number, number]) => void; max: number; step: number; className?: string }>) => (
  <input
    type="range"
    min={0}
    max={max}
    step={step}
    value={value[1]}
    onChange={e => onValueChange([value[0], Number(e.target.value)])}
    className={className}
  />
);
export { Slider };
