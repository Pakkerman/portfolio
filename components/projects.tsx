'use client'

import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useActiveSectionContext } from '@/context/activeSectionContext'

import SectionHeading from './section-heading'
import { Project } from './project'
import { projectsData } from '@/lib/data'

export default function Projects() {
  const { setActiveSection } = useActiveSectionContext()
  const { ref, inView } = useInView({
    threshold: 0.5,
  })

  useEffect(() => {
    if (inView) setActiveSection('Projects')
  }, [inView, setActiveSection])

  return (
    <section id="projects" ref={ref} className="scroll-mt-28">
      <SectionHeading>My projects</SectionHeading>
      <div className="">
        {projectsData.map((item, idx) => (
          <React.Fragment key={item.title}>
            <Project {...item} />
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}
