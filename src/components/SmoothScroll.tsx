'use client'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode
}) {
  const { scrollYProgress } = useScroll()
  const smoothProgress = useSpring(scrollYProgress, { mass: 0.1 })
  const [contentHeight, setContentHeight] = useState(0)

  const y = useTransform(
    smoothProgress,

    (v) => {
      if (typeof window !== 'undefined') {
        return v * -(contentHeight - window.innerHeight)
      }
      return 0 // Return a default value or handle the case when window is not available
    },
  )

  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleResize = () => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.scrollHeight)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <div style={{ height: contentHeight }} />
      <motion.div className="scrollBody" style={{ y }} ref={contentRef}>
        {children}
      </motion.div>
    </>
  )
}
