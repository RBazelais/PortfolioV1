export default function Home() {
    return (
        <div className="min-h-screen flex flex-col lg:flex-row lg:gap-8 max-w-6xl mx-auto px-6 py-12 lg:py-24">
            {/* Left Sidebar */}
            <header className="lg:w-1/3 lg:sticky lg:top-24 lg:h-fit mb-12 lg:mb-0 flex flex-col">
                <h1 className="text-4xl font-bold text-[var(--foreground)]">
                    Rachel Bazelais
                </h1>
                <h2 className="text-xl text-[var(--primary)] mt-2">
                    Frontend Engineer
                </h2>
                <p className="text-[var(--muted)] mt-4">
                    I build UI that feels right.
                </p>

                {/* Navigation */}
                <nav className="mt-8 hidden lg:block">
                    <ul className="flex flex-col gap-3">
                        <li>
                            <a
                                href="#about"
                                className="text-[var(--muted)] hover:text-[var(--foreground)]"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#experience"
                                className="text-[var(--muted)] hover:text-[var(--foreground)]"
                            >
                                Experience
                            </a>
                        </li>
                        <li>
                            <a
                                href="#projects"
                                className="text-[var(--muted)] hover:text-[var(--foreground)]"
                            >
                                Projects
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Social Links */}
                <div className="mt-8 flex gap-4">
                    <a
                        href="https://github.com/RBazelais"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--muted)] hover:text-[var(--foreground)]"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://linkedin.com/in/rbazelais"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--muted)] hover:text-[var(--foreground)]"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://rbazelais.itch.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--muted)] hover:text-[var(--foreground)]"
                    >
                        itch.io
                    </a>
                </div>
            </header>

            {/* Right Content */}
            <main className="lg:w-2/3">
                {/* About Section */}
                <section id="about" className="mb-16">
                    <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4 lg:hidden">
                        About
                    </h3>
                    <div className="text-[var(--muted)] space-y-4">
                        <p>
                            I'm a frontend engineer who cares about
                            accessibility, clean architecture, and interfaces
                            that feel good to use. I've spent the last few years
                            building game UI at Undead Labs (Microsoft), working
                            on component libraries, state management, and
                            shipping UI across PC, Xbox, and cloud.
                        </p>
                        <p>
                            I also make games on the side. VR experiences,
                            rhythm games, and puzzle games that have been shown
                            at PAX West, GDC, and Games for Change.
                        </p>
                        <p>
                            When I'm not coding, I'm playing bass guitar,
                            camping, rock climbing, or kayaking.
                        </p>
                    </div>
                </section>

                {/* Experience Section */}
                <section id="experience" className="mb-16">
                    <h3 className="text-lg font-semibold text-[var(--foreground)] mb-8 lg:hidden">
                        Experience
                    </h3>
                    <div className="space-y-12">
                        {/* Job 1 */}
                        <div>
                            <p className="text-sm text-[var(--muted)] mb-1">
                                2021 — 2023
                            </p>
                            <h4 className="text-[var(--foreground)] font-medium">
                                UI Engineer · Undead Labs (Microsoft)
                            </h4>
                            <p className="text-[var(--muted)] mt-2">
                                Built component patterns for an accessible UI
                                library. Migrated frontend from React to Svelte
                                (30% memory reduction). Used XState for state
                                management. Built automated testing with
                                Playwright.
                            </p>
                            <div className="flex flex-wrap gap-2 mt-3">
                                <span className="text-xs px-2 py-1 rounded bg-[var(--card)] text-[var(--primary)]">
                                    React
                                </span>
                                <span className="text-xs px-2 py-1 rounded bg-[var(--card)] text-[var(--primary)]">
                                    Svelte
                                </span>
                                <span className="text-xs px-2 py-1 rounded bg-[var(--card)] text-[var(--primary)]">
                                    XState
                                </span>
                                <span className="text-xs px-2 py-1 rounded bg-[var(--card)] text-[var(--primary)]">
                                    Playwright
                                </span>
                            </div>
                        </div>

                        {/* Job 2 */}
                        <div>
                            <p className="text-sm text-[var(--muted)] mb-1">
                                2019 — 2021
                            </p>
                            <h4 className="text-[var(--foreground)] font-medium">
                                Software Engineer · Yebo Technologies
                            </h4>
                            <p className="text-[var(--muted)] mt-2">
                                Built frontend for a simulation authoring tool.
                                Owned cross-browser compatibility. Improved
                                accessibility (WCAG).
                            </p>
                            <div className="flex flex-wrap gap-2 mt-3">
                                <span className="text-xs px-2 py-1 rounded bg-[var(--card)] text-[var(--primary)]">
                                    JavaScript
                                </span>
                                <span className="text-xs px-2 py-1 rounded bg-[var(--card)] text-[var(--primary)]">
                                    Web Components
                                </span>
                                <span className="text-xs px-2 py-1 rounded bg-[var(--card)] text-[var(--primary)]">
                                    WCAG
                                </span>
                            </div>
                        </div>

                        {/* Job 3 */}
                        <div>
                            <p className="text-sm text-[var(--muted)] mb-1">
                                2024 — Present
                            </p>
                            <h4 className="text-[var(--foreground)] font-medium">
                                Freelance
                            </h4>
                            <p className="text-[var(--muted)] mt-2">
                                Web apps for startups. React, TypeScript,
                                Node.js.
                            </p>
                            <div className="flex flex-wrap gap-2 mt-3">
                                <span className="text-xs px-2 py-1 rounded bg-[var(--card)] text-[var(--primary)]">
                                    React
                                </span>
                                <span className="text-xs px-2 py-1 rounded bg-[var(--card)] text-[var(--primary)]">
                                    TypeScript
                                </span>
                                <span className="text-xs px-2 py-1 rounded bg-[var(--card)] text-[var(--primary)]">
                                    Node.js
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
