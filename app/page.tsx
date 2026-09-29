import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Show, SignInButton, SignUpButton } from "@clerk/nextjs";
import { GradientBackground } from "@/components/gradient-background";

export default async function LandingPage() {
  // check if the user is signed in
  const { userId } = await auth();

  // if so, redirect them to the dashboard! without any intermediate screens
  if (userId) {
    redirect("/dashboard");
  }

  return (
    <>
      <GradientBackground />
      <main className="relative z-10 mx-auto min-h-screen w-full max-w-5xl px-6 flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center text-center space-y-8 mb-32">
          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl text-foreground">
            Developer Portfolio
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Create, manage, and showcase your personal coding projects. Your
            complete portfolio management system, all in one secure place.
          </p>

          <div className="flex items-center justify-center pt-6">
            <Show when="signed-out">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <SignUpButton mode="modal">
                  <button className="rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-sm hover:scale-105 transition-transform">
                    Sign Up for Free
                  </button>
                </SignUpButton>
                <SignInButton mode="modal">
                  <button className="rounded-xl border border-border bg-transparent px-8 py-4 text-base font-semibold text-foreground shadow-sm hover:bg-muted hover:scale-105 transition-all">
                    Log In
                  </button>
                </SignInButton>
              </div>
            </Show>
          </div>
        </div>
      </main>
    </>
  );
}

