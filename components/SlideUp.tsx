import React, { useEffect, useRef, ReactNode } from "react"

interface Props {
  offset?: string
  children?: ReactNode
}

export default function SlideUp({ children, offset = "0px" }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target;
            target.classList.remove("opacity-0")
            target.classList.add("animate-slideUpCubiBezier")
          }
        })
      },
      { rootMargin: offset }
    )
  
    const node = ref.current;
    if (node) {
      observer.observe(node);
    }
  
    return () => {
      if (node) {
        observer.unobserve(node);
      }
    }
  }, [ref, offset])
  
  return (
    <div ref={ref} className="relative opacity-0">
      {children}
    </div>
  )
}
