export function GradientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* base wash */}
      <div className="absolute inset-0 bg-background" />

      {/* drifting color fields */}
      <div className="absolute inset-0 blur-[80px] saturate-150">
        <div
          className="absolute left-[-10%] top-[-10%] h-[55vw] w-[55vw] rounded-full opacity-70 animate-drift-1"
          style={{
            background:
              "radial-gradient(circle at center, oklch(0.7 0.24 300 / 0.9), transparent 65%)",
          }}
        />
        <div
          className="absolute right-[-15%] top-[10%] h-[50vw] w-[50vw] rounded-full opacity-60 animate-drift-2"
          style={{
            background:
              "radial-gradient(circle at center, oklch(0.72 0.2 220 / 0.9), transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-[-20%] left-[20%] h-[55vw] w-[55vw] rounded-full opacity-55 animate-drift-3"
          style={{
            background:
              "radial-gradient(circle at center, oklch(0.75 0.2 160 / 0.85), transparent 65%)",
          }}
        />
        <div
          className="absolute bottom-[-10%] right-[5%] h-[45vw] w-[45vw] rounded-full opacity-50 animate-drift-1"
          style={{
            background:
              "radial-gradient(circle at center, oklch(0.78 0.2 40 / 0.85), transparent 65%)",
          }}
        />
      </div>

      {/* subtle grain / vignette to keep it minimal and legible */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/45 to-background/85" />
      <div
        className="absolute inset-0 opacity-[0.15] mix-blend-soft-light"
        style={{
          backgroundImage:
            "radial-gradient(oklch(1 0 0 / 0.6) 1px, transparent 1px)",
          backgroundSize: "4px 4px",
        }}
      />
    </div>
  );
}
