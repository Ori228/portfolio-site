// TODO: replace the placeholder values below with your real links.
export const profile = {
  name: 'Ori Hermos',
  intro:
    'Computer science student at Bar-Ilan University. I build practical software and automation tools.',
  github: 'https://github.com/YOUR-USERNAME',
  linkedin: 'https://www.linkedin.com/in/YOUR-PROFILE',
  email: 'your@email.com',
}

export type Project = {
  title: string
  description: string
  tags: string[]
  github: string
  /** When present, the project shows an expandable list of assignments. */
  assignments?: string[]
}

// TODO: replace with the real assignment names, e.g. 'Bitwise operations'
const makeAssignments = (n: number) =>
  Array.from({ length: n }, (_, i) => `Assignment ${i + 1}`)

export const projects: Project[] = [
  {
    title: 'Inbar Grades Bot',
    description:
      'Checks the university portal for new grades and sends a Telegram message the moment one appears.',
    tags: ['Python', 'Playwright', 'Telegram API'],
    github: 'https://github.com/YOUR-USERNAME/YOUR-REPO',
  },
  {
    title: 'Introduction to CS',
    description: 'Course exercises in C and Python, including recursion.',
    tags: ['C', 'Python', 'Recursion'],
    github: 'https://github.com/YOUR-USERNAME/YOUR-REPO',
    assignments: makeAssignments(8),
  },
  {
    title: 'Object-Oriented Programming',
    description: 'Course exercises in Java, built around object-oriented design.',
    tags: ['Java', 'OOP'],
    github: 'https://github.com/YOUR-USERNAME/YOUR-REPO',
    assignments: makeAssignments(8),
  },
  {
    title: 'Project Manager',
    description:
      'An earlier version of this site: sign in, then add, edit and delete projects stored in a database.',
    tags: ['Next.js', 'Clerk', 'Prisma', 'Supabase'],
    github:
      'https://github.com/YOUR-USERNAME/YOUR-REPO/tree/archive/project-manager',
  },
  {
    title: 'This website',
    description: 'A portfolio built with Next.js and Tailwind, hosted on Vercel.',
    tags: ['Next.js', 'Tailwind CSS', 'Vercel'],
    github: 'https://github.com/YOUR-USERNAME/YOUR-REPO',
  },
]
