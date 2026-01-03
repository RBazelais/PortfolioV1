export default function Home() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row lg:gap-8 max-w-6xl mx-auto px-6 py-12 lg:py-24">
      {/* Left Sidebar */}
      <header className="lg:w-1/3 lg:sticky lg:top-24 lg:h-fit mb-12 lg:mb-0">
        <h1 className="text-4xl font-bold text-[var(--foreground)]">Rachel Bazelais</h1>
        <h2 className="text-xl text-[var(--primary)] mt-2">Frontend Engineer</h2>
        <p className="text-[var(--muted)] mt-4">I build UI that feels right.</p>
      </header>

      {/* Right Content */}
      <main className="lg:w-2/3">
        <p className="text-[var(--foreground)]">Content will go here.</p>
      </main>
    </div>
  );
}