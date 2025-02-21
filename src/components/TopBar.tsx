'use client'

import { useTheme } from 'next-themes'
import { ThemeToggle } from './ThemeToggle'

export function TopBar() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'

  return (
    <div className="fixed top-0 left-0 right-0 h-12 flex items-center justify-between px-4 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#EC6A5F]" />
          <div className="w-3 h-3 rounded-full bg-[#F4BF50]" />
          <div className="w-3 h-3 rounded-full bg-[#61C454]" />
        </div>
        <span className="ml-4 text-sm text-muted">NS</span>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2">
        <span className="text-sm text-muted">localhost</span>
      </div>

      <ThemeToggle />
    </div>
  )
} 