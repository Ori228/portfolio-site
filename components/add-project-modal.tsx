"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";
import { useFormStatus } from "react-dom";
import { createProject } from "@/app/actions";

// Component for the submit button, which will show a loading state when the form is being submitted
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="mt-4 w-full rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? "Saving..." : "Save Project"}
    </button>
  );
}

export function AddProjectModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [projectType, setProjectType] = useState("single");
  const defaultGithub = "https://github.com";
  const [githubLink, setGithubLink] = useState(defaultGithub);

  const handleBlur = () => {
    try {
      const url = new URL(githubLink);
      if (!url.hostname.includes("github.com"))
        throw new Error("Not a GitHub link");
    } catch {
      setGithubLink(defaultGithub);
    }
  };

  async function handleAction(formData: FormData) {
    await createProject(formData);
    setIsOpen(false);
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105 active:scale-95"
      >
        <Plus className="size-6" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4">
          <div className="w-full max-w-lg rounded-2xl border border-border bg-card p-6 shadow-xl animate-fade-up">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Add New Project</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-2 hover:bg-muted"
                type="button"
              >
                <X className="size-5" />
              </button>
            </div>

            <form action={handleAction} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground">
                  Project Type
                </label>
                <select
                  name="projectType"
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-border bg-background p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="single">Single Project (Standard)</option>
                  <option value="multi">
                    Multi-Assignment Project (Courses)
                  </option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-muted-foreground">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  required
                  placeholder="Project Name"
                  className="mt-1.5 w-full rounded-xl border border-border bg-background p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {projectType === "single" ? (
                <div>
                  <label className="text-sm font-medium text-muted-foreground">
                    Description
                  </label>
                  <textarea
                    name="description"
                    placeholder="What does this project do?"
                    rows={3}
                    className="mt-1.5 w-full resize-none rounded-xl border border-border bg-background p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              ) : (
                <div>
                  <label className="text-sm font-medium text-muted-foreground">
                    Number of Assignments
                  </label>
                  <input
                    type="number"
                    name="numberOfAssignments"
                    min="1"
                    placeholder="e.g. 8"
                    className="mt-1.5 w-full rounded-xl border border-border bg-background p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              )}

              <div>
                <label className="text-sm font-medium text-muted-foreground">
                  GitHub Link
                </label>
                <input
                  type="url"
                  name="link"
                  value={githubLink}
                  onChange={(e) => setGithubLink(e.target.value)}
                  onBlur={handleBlur}
                  className="mt-1.5 w-full rounded-xl border border-border bg-background p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-muted-foreground">
                  Tags (comma separated)
                </label>
                <input
                  type="text"
                  name="tags"
                  placeholder="React, Python, C..."
                  className="mt-1.5 w-full rounded-xl border border-border bg-background p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <SubmitButton />
            </form>
          </div>
        </div>
      )}
    </>
  );
}
