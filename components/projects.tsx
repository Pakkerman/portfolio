'use client'

import React from 'react'

import SectionHeading from './section-heading'
import { Project } from './project'
import { projectsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'

export default function Projects() {
  const { ref } = useSectionInView('Projects', 0.5)

  return (
    <section id="projects" ref={ref} className="scroll-mt-28 mb-28">
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
