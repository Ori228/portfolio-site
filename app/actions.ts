"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function createProject(formData: FormData) {
  // Fetch the user ID from Clerk to know who to associate the project with
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  // Extract the data typed by the user in the form fields
  const title = formData.get("title") as string;
  const projectType = formData.get("projectType") as string;
  const description = formData.get("description") as string;
  const tags = formData.get("tags") as string;
  const link = formData.get("link") as string;
  const numberOfAssignments = formData.get("numberOfAssignments");

  // Write the data into the Supabase table using Prisma
  await prisma.project.create({
    data: {
      userId,
      title,
      projectType,
      description: description || null,
      tags: tags || null,
      link: link || null,
      numberOfAssignments: numberOfAssignments ? parseInt(numberOfAssignments as string) : null,
    },
  });

  // Refresh the Dashboard page so the new project appears immediately on the screen
  revalidatePath("/dashboard");
}

export async function deleteProject(projectId: string) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  // Delete the project from the database using Prisma, ensuring that the user can only delete their own projects
  await prisma.project.delete({
    where: { id: projectId, userId: userId },
  });

  revalidatePath("/dashboard");
}

export async function updateProject(formData: FormData) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const id = formData.get("id") as string;
  const title = formData.get("title") as string;
  const projectType = formData.get("projectType") as string;
  const description = formData.get("description") as string;
  const tags = formData.get("tags") as string;
  const link = formData.get("link") as string;
  const numberOfAssignments = formData.get("numberOfAssignments");

  await prisma.project.update({
    where: { id, userId },
    data: {
      title,
      projectType,
      description: description || null,
      tags: tags || null,
      link: link || null,
      numberOfAssignments: numberOfAssignments ? parseInt(numberOfAssignments as string) : null,
    },
  });

  revalidatePath("/dashboard");
}