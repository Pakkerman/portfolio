import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import { FaReact } from 'react-icons/fa'
import { LuGraduationCap } from 'react-icons/lu'
import {
  SiCss3,
  SiFramer,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTrpc,
  SiTypescript,
} from 'react-icons/si'
import corpcommentImg from '@/public/corpcomment.png'
import rmtdevImg from '@/public/rmtdev.png'
import wordanalyticsImg from '@/public/wordanalytics.png'

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const

export const experiencesData = [
  {
    title: 'Completed Harvard CS50 Course',
    location: '',
    description:
      'I graduated after 6 months of studying. I immediately found a job as a front-end developer.',
    icon: React.createElement(LuGraduationCap),
    date: '2023',
  },
  {
    title: 'Complete FreeCodeCamp Frontend Course',
    location: '',
    description:
      'I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.',
    icon: React.createElement(CgWorkAlt),
    date: '2019 - 2021',
  },
  {
    title: 'Full-Stack Developer',
    location: 'Houston, TX',
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: '2021 - present',
  },
] as const

export const projectsData = [
  {
    title: 'CorpComment',
    description:
      'I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.',
    tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
    imageUrl: corpcommentImg,
  },
  {
    title: 'rmtDev',
    description:
      'Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
    imageUrl: rmtdevImg,
  },
  {
    title: 'Word Analytics',
    description:
      'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
    tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
    imageUrl: wordanalyticsImg,
  },
] as const

export const skillsData = [
  { name: 'HTML', icon: React.createElement(SiHtml5) },
  { name: 'CSS', icon: React.createElement(SiCss3) },
  { name: 'JavaScript', icon: React.createElement(SiJavascript) },
  { name: 'TypeScript', icon: React.createElement(SiTypescript) },
  { name: 'React', icon: React.createElement(SiReact) },
  { name: 'Next.js', icon: React.createElement(SiNextdotjs) },
  { name: 'Node.js', icon: React.createElement(SiNodedotjs) },
  { name: 'Git', icon: React.createElement(SiGit) },
  { name: 'Tailwind', icon: React.createElement(SiTailwindcss) },
  { name: 'Prisma', icon: React.createElement(SiPrisma) },
  { name: 'MySQL', icon: React.createElement(SiMysql) },
  { name: 'tRPC', icon: React.createElement(SiTrpc) },
  { name: 'Framer Motion', icon: React.createElement(SiFramer) },
] as const
