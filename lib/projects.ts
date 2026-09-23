export type Project = {
  title: string
  description?: string
  tags: string[]
  github?: string
  /** When present, the card is expandable and reveals this list. */
  assignments?: string[]
}

const makeAssignments = (n: number) =>
  Array.from({ length: n }, (_, i) => `Assignment ${i + 1}`)

export const projects: Project[] = [
  {
    title: 'Inbar Grades Bot',
    description:
      'Automation tool for scraping university portal grades and sending real-time Telegram alerts.',
    tags: ['Python', 'Playwright', 'Telegram API'],
    github: 'https://github.com',
  },
  {
    title: 'Introduction to CS Assignments',
    tags: ['C', 'Python', 'Recursion'],
    github: 'https://github.com',
    assignments: makeAssignments(8),
  },
  {
    title: 'OOP Assignments',
    tags: ['Java', 'OOP'],
    github: 'https://github.com',
    assignments: makeAssignments(8),
  },
  {
    title: 'Portfolio Website',
    description:
      'This very website! A recursive project showcasing a modern, interactive web application.',
    tags: ['React', 'Tailwind CSS', 'Vercel'],
    github: 'https://github.com',
  },
]
