import { profile, projects } from '@/lib/projects'

const link =
  'font-semibold underline decoration-ink/40 decoration-2 underline-offset-4 hover:decoration-margin'

export default function Home() {
  return (
    <main className="relative mx-auto max-w-3xl px-6 pb-24 pt-24 sm:pl-14 sm:pt-32">
      {/* notebook margin line */}
      <div aria-hidden="true" className="absolute inset-y-0 left-0 w-px bg-margin/70" />

      <h1 className="write text-[clamp(3.5rem,12vw,7rem)] font-extrabold leading-[0.9] tracking-tighter">
        {profile.name}
      </h1>
      <p className="mt-8 max-w-md text-xl leading-snug">{profile.intro}</p>

      <nav aria-label="Contact" className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
        <a className={link} href={profile.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a className={link} href={profile.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a className={link} href={`mailto:${profile.email}`}>
          Email
        </a>
      </nav>

      <section aria-labelledby="projects" className="mt-28">
        <h2 id="projects" className="text-2xl font-bold tracking-tight">
          Projects
        </h2>
        <ul className="mt-6 border-t-2 border-ink">
          {projects.map((p) => (
            <li key={p.title} className="border-b border-ink/30 py-8">
              <h3 className="text-2xl font-bold tracking-tight">{p.title}</h3>
              <p className="mt-2 max-w-xl text-pencil">{p.description}</p>
              <p className="mt-3 text-sm text-pencil">{p.tags.join(', ')}</p>

              {p.assignments && (
                <details className="mt-4">
                  <summary className="cursor-pointer font-semibold">
                    Assignments ({p.assignments.length})
                  </summary>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-pencil">
                    {p.assignments.map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>
                </details>
              )}

              <a
                className={`${link} mt-5 inline-block`}
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source code on GitHub
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
