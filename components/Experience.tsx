'use client'

import React from 'react'
import SectionHeading from './SectionHeading'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

import { experiencesData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import { useThemeContext } from '@/context/ThemeContext'

export default function Experience() {
  const { ref } = useSectionInView('Skills')
  const { theme } = useThemeContext()

  return (
    <section ref={ref} id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Experiences</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, idx) => (
          <React.Fragment key={idx}>
            <VerticalTimelineElement
              contentStyle={{
                background: theme === 'light' ? '#f3f4f6' : 'rgb(30, 41, 59)',
                boxShadow: 'none',
                border: `1px solid ${
                  theme === 'light'
                    ? 'rgba(0,0,0,0.05)'
                    : 'rgba(255, 255, 255, 0.1)'
                }`,
                textAlign: 'left',
                padding: '1.3rem 2rem',
              }}
              contentArrowStyle={{
                borderRight:
                  theme === 'light'
                    ? '0.4rem solid #9ca3af'
                    : '0.4rem solid rgb(30, 41, 59)',
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                boxShadow: '0 0 0 3px rgb(100, 116, 139)', // The border of the icon is actually a boxShandow
                background: theme === 'light' ? 'white' : 'rgb(30, 41, 59)',
                fontSize: '1.5rem',
              }}>
              <h3 className="font-semibold capitalize ">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  )
}
