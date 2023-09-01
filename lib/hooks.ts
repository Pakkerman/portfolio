import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useActiveSectionContext } from '@/context/activeSectionContext'
import type { SectionName } from './types'

export function useSectionInView(
  sectionName: SectionName,
  threshold: number = 0.75
) {
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext()
  const { ref, inView } = useInView({ threshold })

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000)
      setActiveSection(sectionName)
  }, [sectionName, inView, setActiveSection, timeOfLastClick])

  return { ref }
}
