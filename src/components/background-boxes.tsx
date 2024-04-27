import React from 'react'

export function DotBackgroundDemo({ children }: { children: React.ReactNode }) {
  return (
    <div className="pb-8 h-full w-full dark:bg-black bg-slate-200 dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex flex-col items-center justify-center">
      {children}
    </div>
  )
}
