// Simple cn utility for className merging
export function cn(...args) {
  return args.filter(Boolean).join(' ')
}
