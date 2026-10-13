// lib/projects.ts

export const profile = {
  name: 'Ori Hermos',
  intro:
    'Computer science student at Bar-Ilan University. I build practical software and automation tools.',
  github: 'https://github.com/Ori228',
  linkedin: 'https://www.linkedin.com/in/ori-hermos-aa1677441/',
  email: 'ori424555@gmail.com',
}

export type Project = {
  title: string
  description: string
  tags: string[]
  github: string
  assignments?: string[]
}

export const projects: Project[] = [
  {
    title: 'Object-Oriented Programming (OOP)',
    description: '4 academic software projects in Java and Python. Focus on Object-Oriented Design, GUI development, polymorphism, Design Patterns (Observer), and Test-Driven Development (TDD).',
    tags: ['Java', 'Python', 'OOP', 'TDD', 'JUnit', 'Tkinter', 'Design Patterns'],
    github: 'https://github.com/Ori228/OOP-B-Projects',
    assignments: [
      'Project 1: Arkanoid Game (Java biuoop)',
      'Project 2: Logical Expressions Engine',
      'Project 3: Tic-Tac-Toe (TDD & JUnit)',
      'Project 4: Minesweeper (Python Tkinter)'
    ],
  },
  {
    title: 'Introduction to Computer Science',
    description: '7 academic assignments in C and Python. Focus on memory management, pointers, generic data structures (Linked Lists, BST), and algorithms.',
    tags: ['C', 'Python', 'Memory Management', 'Valgrind', 'Data Structures', 'Linux'],
    github: 'https://github.com/Ori228/Intro-to-CS-Projects',
    assignments: [
      'Exercise 1: Bitwise Operations',
      'Exercise 2: Control Flow & State Machine',
      'Exercise 3: Arrays & Connect-4 Logic',
      'Exercise 4: Recursion & Backtracking',
      'Exercise 5: Dynamic Memory Allocation',
      'Exercise 6: Generic Data Structures (BST)',
      'Exercise 7: Python Scripting'
    ],
  },
  {
    title: 'Inbar Grades Bot',
    description:
      'Checks the university portal for new grades and sends a Telegram message the moment one appears.',
    tags: ['Python', 'Playwright', 'Telegram API'],
    github: 'https://github.com/Ori228/', // TODO: עדכן את הקישור לריפו של הבוט
  },
  {
    title: 'This Portfolio Website',
    description: 'A static personal portfolio built with Next.js and Tailwind CSS, hosted on Vercel.',
    tags: ['Next.js', 'Tailwind CSS', 'Vercel', 'TypeScript'],
    github: 'https://github.com/Ori228/portfolio-site',
  },
]