import { auth } from "@clerk/nextjs/server"; // הוספנו ייבוא לבדיקת אימות בשרת
import { redirect } from "next/navigation"; // הוספנו ייבוא לכלי העברת העמודים של Next.js

import { GradientBackground } from "@/components/gradient-background";
import { Hero } from "@/components/hero";
import { Header } from "@/components/header";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";
import { AddProjectModal } from "@/components/add-project-modal";

export default async function DashboardPage() {
  const { userId } = await auth();
  if (!userId) {
    redirect("/");
  }
  
  return (
    <>
      <GradientBackground />
      <main className="relative z-10 mx-auto min-h-screen w-full max-w-5xl px-6">
        <Header />
        <Hero />
        <section id="projects" className="pb-28">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Selected projects
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                A handful of things I&apos;ve designed, built, and shipped.
              </p>
            </div>
            <span className="hidden font-mono text-sm text-muted-foreground sm:block">
              {String(projects.length).padStart(2, "0")}
            </span>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>
        </section>

        <footer className="border-t border-border py-10 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Ori Hermos. Built with Next.js.</p>
        </footer>
      </main>

      {/* כאן הוספנו את כפתור הפלוס והחלונית */}
      <AddProjectModal />
    </>
  );
}
