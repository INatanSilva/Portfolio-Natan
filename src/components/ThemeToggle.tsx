'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        className="relative flex items-center justify-between w-16 h-8 rounded-full bg-background/90 border border-border transition-colors"
        onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      >
        <span className="sr-only">Alternar tema</span>
        
        <span 
          className={`
            absolute w-6 h-6 rounded-full transition-all duration-200
            ${resolvedTheme === 'dark' 
              ? 'translate-x-9 bg-[#1c1c1c]' 
              : 'translate-x-1 bg-white'
            }
            shadow-sm
          `}
        />

        <span className="relative flex items-center justify-between w-full px-2">
          <svg 
            width="14" 
            height="14" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#666666] dark:text-[#999999]"
          >
            <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
            <path d="M12 5V3M12 21v-2M5 12H3m18 0h-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05" 
              stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>

          <svg 
            width="14" 
            height="14" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#666666] dark:text-[#999999]"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" 
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
    </div>
  )
} 