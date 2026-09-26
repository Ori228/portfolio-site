"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function createProject(formData: FormData) {
  // Fetch the user ID from Clerk to know who to associate the project with
  const { userId } = await auth();
  
  if (!userId) {
    throw new Error("You must be logged in to create a project");
  }

  // Extract the data typed by the user in the form fields
  const title = formData.get("title") as string;
  const projectType = formData.get("projectType") as string;
  const description = formData.get("description") as string;
  const tags = formData.get("tags") as string;
  const numberOfAssignments = formData.get("numberOfAssignments");

  // Write the data into the Supabase table using Prisma
  await prisma.project.create({
    data: {
      userId,
      title,
      projectType,
      description: description || null,
      tags: tags || null,
      numberOfAssignments: numberOfAssignments ? parseInt(numberOfAssignments as string) : null,
    },
  });

  // Refresh the Dashboard page so the new project appears immediately on the screen
  revalidatePath("/dashboard");
}
