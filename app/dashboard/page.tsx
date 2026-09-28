import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma"; // Imports the database connection
import { GradientBackground } from "@/components/gradient-background";
import { Header } from "@/components/header";
import { ProjectCard } from "@/components/project-card";
import { AddProjectModal } from "@/components/add-project-modal";

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/");
  }

  // Fetch all projects belonging to the logged-in user from the database, ordered from newest to oldest
  const rawProjects = await prisma.project.findMany({
    where: { userId: userId },
    orderBy: { createdAt: "desc" },
  });

  // Map the database records to the structure expected by our ProjectCard component
  const projects = rawProjects.map((p) => ({
    id: p.id,
    title: p.title,
    description: p.description || "",
    // Convert the comma-separated tags string (e.g., "React, CSS") into an array
    tags: p.tags ? p.tags.split(",").map((t) => t.trim()) : [],
    github: p.link || "https://github.com",
    // If it's a multi-assignment project, automatically generate the assignments array based on the given number
    assignments:
      p.projectType === "multi" && p.numberOfAssignments
        ? Array.from(
            { length: p.numberOfAssignments },
            (_, i) => `Assignment ${i + 1}`,
          )
        : undefined,
  }));

  return (
    <>
      <GradientBackground />
      <main className="relative z-10 mx-auto min-h-screen w-full max-w-5xl px-6">
        <Header />

        <section id="projects" className="pb-28 mt-10">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                My Projects
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                My personal projects, fetched directly from the database.
              </p>
            </div>
            <span className="hidden font-mono text-sm text-muted-foreground sm:block">
              {String(projects.length).padStart(2, "0")}
            </span>
          </div>

          {projects.length === 0 ? (
            <div className="text-center py-20 border border-dashed border-border rounded-2xl">
              <p className="text-muted-foreground">
                No projects yet. Click the + button to add one!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.title + index}
                  project={project as any}
                  index={index}
                />
              ))}
            </div>
          )}
        </section>

        <footer className="border-t border-border py-10 text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} My Portfolio. Built with Next.js &
            Prisma.
          </p>
        </footer>
      </main>

      <AddProjectModal />
    </>
  );
}
