import React from 'react'

import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import { Project } from './project'

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28">
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
