import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon } from "@/components/github-icon";

// אייקון נקי של לינקדאין
function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

export function Hero() {
  return (
    <header className="mx-auto flex max-w-3xl flex-col items-start pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-md animate-fade-up">
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-chart-3 opacity-75" />
          <span className="relative inline-flex size-2 rounded-full bg-chart-3" />
        </span>
        Available for new projects
      </div>

      <h1
        className="text-4xl font-semibold tracking-tight text-balance sm:text-6xl animate-fade-up"
        style={{ animationDelay: "80ms" }}
      >
        Ori Hermos
      </h1>

      <p
        className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty animate-fade-up"
        style={{ animationDelay: "160ms" }}
      >
        Computer Science Student @ Bar-Ilan University | Building fast,
        practical software and automation tools.
      </p>

      <div
        className="mt-8 flex flex-wrap items-center gap-3 animate-fade-up"
        style={{ animationDelay: "240ms" }}
      >
        <a
          href="#projects"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:opacity-90"
        >
          View projects
          <ArrowDown className="size-4" />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-border bg-card/40 px-5 text-sm font-semibold text-foreground backdrop-blur-md transition-colors hover:bg-card/70"
        >
          <GithubIcon className="size-4" />
          GitHub
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-border bg-card/40 px-5 text-sm font-semibold text-foreground backdrop-blur-md transition-colors hover:bg-card/70"
        >
          <LinkedinIcon className="size-4" />
          LinkedIn
        </a>
        <a
          href="mailto:your@email.com"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-border bg-card/40 px-5 text-sm font-semibold text-foreground backdrop-blur-md transition-colors hover:bg-card/70"
        >
          <Mail className="size-4" />
          Email
        </a>
      </div>
    </header>
  );
}
