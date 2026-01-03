export default function Home() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row lg:gap-8 max-w-6xl mx-auto px-6 py-12 lg:py-24">
      {/* Left Sidebar */}
      <header className="lg:w-1/3 lg:sticky lg:top-24 lg:h-fit mb-12 lg:mb-0 flex flex-col">
        <h1 className="text-4xl font-bold text-[var(--foreground)]">Rachel Bazelais</h1>
        <h2 className="text-xl text-[var(--primary)] mt-2">Frontend Engineer</h2>
        <p className="text-[var(--muted)] mt-4">I build UI that feels right.</p>

        {/* Navigation */}
        <nav className="mt-8 hidden lg:block">
          <ul className="flex flex-col gap-3">
            <li><a href="#about" className="text-[var(--muted)] hover:text-[var(--foreground)]">About</a></li>
            <li><a href="#experience" className="text-[var(--muted)] hover:text-[var(--foreground)]">Experience</a></li>
            <li><a href="#projects" className="text-[var(--muted)] hover:text-[var(--foreground)]">Projects</a></li>
          </ul>
        </nav>

        {/* Social Links */}
        <div className="mt-8 flex gap-4">
          <a href="https://github.com/RBazelais" target="_blank" rel="noopener noreferrer" className="text-[var(--muted)] hover:text-[var(--foreground)]">GitHub</a>
          <a href="https://linkedin.com/in/rbazelais" target="_blank" rel="noopener noreferrer" className="text-[var(--muted)] hover:text-[var(--foreground)]">LinkedIn</a>
          <a href="https://rbazelais.itch.io/" target="_blank" rel="noopener noreferrer" className="text-[var(--muted)] hover:text-[var(--foreground)]">itch.io</a>
        </div>
      </header>

      {/* Right Content */}
      <main className="lg:w-2/3">
        <p className="text-[var(--foreground)]">Content will go here.</p>
      </main>
    </div>
  );
}