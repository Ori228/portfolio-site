import { Show, SignInButton, UserButton } from "@clerk/nextjs";

export function Header() {
  return (
    <header className="flex w-full items-center justify-end py-6">
      {/* Renders when the user is signed out */}
      <Show when="signed-out">
        <SignInButton mode="modal">
          <button className="rounded-xl bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:scale-105 active:scale-95">
            Sign In
          </button>
        </SignInButton>
      </Show>

      {/* Renders when the user is signed in */}
      <Show when="signed-in">
        <UserButton />
      </Show>
    </header>
  );
}
