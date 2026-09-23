"use client";
import { useState } from "react";
import { Plus, X } from "lucide-react";

export function AddProjectModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [projectType, setProjectType] = useState("single");

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
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground">
                  Project Type
                </label>
                <select
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
                    min="1"
                    placeholder="e.g. 8"
                    className="mt-1.5 w-full rounded-xl border border-border bg-background p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              )}

              <div>
                <label className="text-sm font-medium text-muted-foreground">
                  Tags (comma separated)
                </label>
                <input
                  type="text"
                  placeholder="React, Python, C..."
                  className="mt-1.5 w-full rounded-xl border border-border bg-background p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <button className="mt-4 w-full rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">
                Save Project
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
