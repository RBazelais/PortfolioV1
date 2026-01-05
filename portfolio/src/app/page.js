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
				<div className="mt-8 flex gap-5">
					<a
						href="https://github.com/RBazelais"
						target="_blank"
						rel="noopener noreferrer"
						className="text-[var(--muted)] hover:text-[var(--foreground)]"
						aria-label="GitHub"
						title="GitHub"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-6 h-6"
						>
							<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
						</svg>
					</a>
					<a
						href="https://linkedin.com/in/rbazelais"
						target="_blank"
						rel="noopener noreferrer"
						className="text-[var(--muted)] hover:text-[var(--foreground)]"
						aria-label="LinkedIn"
						title="LinkedIn"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-6 h-6"
						>
							<path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
						</svg>
					</a>
					<a
						href="https://rbazelais.itch.io/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-[var(--muted)] hover:text-[var(--foreground)]"
						aria-label="itch.io"
						title="itch.io"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512"
							fill="currentColor"
							className="w-6 h-6"
						>
							<path d="M71.92 34.77C50.2 47.67 7.4 96.84 7 109.73v21.34c0 27.06 25.29 50.84 48.25 50.84 27.57 0 50.54-22.85 50.54-50 0 27.12 22.18 50 49.76 50s49-22.85 49-50c0 27.12 23.59 50 51.16 50h.5c27.57 0 51.16-22.85 51.16-50 0 27.12 21.47 50 49 50s49.76-22.85 49.76-50c0 27.12 23 50 50.54 50 23 0 48.25-23.78 48.25-50.84v-21.34c-.4-12.9-43.2-62.07-64.92-75C372.56 32.4 325.76 32 256 32S91.14 33.1 71.92 34.77zm132.32 134.39c-22 38.4-77.9 38.71-99.85.25-13.17 23.14-43.17 32.07-56 27.66-3.87 40.15-13.67 237.13 17.73 269.15 80 18.67 302.08 18.12 379.76 0 31.65-32.27 21.32-232 17.75-269.15-12.92 4.44-42.88-4.6-56-27.66-22 38.52-77.85 38.1-99.85-.24-7.1 12.49-23.05 28.94-51.76 28.94a57.54 57.54 0 0 1-51.75-28.94zm-41.58 53.77c16.47 0 31.09 0 49.22 19.78a436.91 436.91 0 0 1 88.18 0C318.22 223 332.85 223 349.31 223c52.33 0 65.22 77.53 83.87 144.45 17.26 62.15-5.52 63.67-33.95 63.73-42.15-1.57-65.49-32.18-65.49-62.79-39.25 6.43-101.93 8.79-155.55 0 0 30.61-23.34 61.22-65.49 62.79-28.42-.06-51.2-1.58-33.94-63.73 18.67-67 31.56-144.45 83.88-144.45zM256 270.79s-44.38 40.77-52.35 55.21l29-1.17v25.32c0 1.55 21.34.16 23.33.16 11.65.54 23.31 1 23.31-.16v-25.28l29 1.17c-8-14.48-52.35-55.24-52.35-55.24z" />
						</svg>
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
							I'm a software engineer who builds digital
							experiences that feel intuitive. I love the space
							where thoughtful design meets clean, intentional
							code. My path into tech has been hands-on and
							self-driven, taking me from frontend roles all the
							way to building UI for AAA games at a Microsoft
							studio.
						</p>
						<p>
							Most recently, I was a UI Engineer at Undead Labs (a
							Microsoft studio), where I built accessible
							component libraries and shipped game UI across PC,
							Xbox, and cloud. Before that, I worked at Yebo
							Technologies on a 3D simulation tool, and earlier in
							my career I taught game development workshops,
							produced content for the Game Devs of Color Expo,
							and interned at places like AOL and Games for
							Change. I also make small games. I&apos;ve designed
							and built VR experiences, rhythm games, and puzzle
							games that have been shown at PAX West, GDC, Games
							for Change, and BabyCastles. One of my VR projects
							won at Games for Change Brain Jam and was submitted
							to Oculus LaunchPad Program.
						</p>
						<p>
							When I&apos;m not coding, I&apos;m practicing bass
							guitar, bouldering, or kayaking in the warmer
							months.
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
								Software Engineer · Yebo Technologies Inc.
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

				{/* Projects Section */}
				<section id="projects" className="mb-16">
					<h3 className="text-lg font-semibold text-[var(--foreground)] mb-8 lg:hidden">
						Projects
					</h3>
					<div className="space-y-12">
						{/* Project 1 */}
						<div>
							<h4 className="text-[var(--foreground)] font-medium">
								<a
									href="https://github.com/Web103QPRBKA/CPWeb103FinalProject2025"
									target="_blank"
									rel="noopener noreferrer"
									className="hover:text-[var(--primary)]"
								>
									Logic Puzzle App
								</a>
							</h4>
							<p className="text-[var(--muted)] mt-2">
								Full-stack puzzle game built with a team.
							</p>
							<div className="flex flex-wrap gap-2 mt-3">
								<span className="text-xs px-2 py-1 rounded bg-[var(--card)] text-[var(--primary)]">
									React
								</span>
								<span className="text-xs px-2 py-1 rounded bg-[var(--card)] text-[var(--primary)]">
									JavaScript
								</span>
								<span className="text-xs px-2 py-1 rounded bg-[var(--card)] text-[var(--primary)]">
									Node.js
								</span>
								<span className="text-xs px-2 py-1 rounded bg-[var(--card)] text-[var(--primary)]">
									PostgreSQL
								</span>
							</div>
						</div>

						{/* Project 2 */}
						<div>
							<h4 className="text-[var(--foreground)] font-medium">
								<a
									href="https://github.com/RBazelais/The-Hype-Check"
									target="_blank"
									rel="noopener noreferrer"
									className="hover:text-[var(--primary)]"
								>
									The Hype Check
								</a>
							</h4>
							<p className="text-[var(--muted)] mt-2">
								Movie trailer discussion platform with real-time
								updates.
							</p>
							<div className="flex flex-wrap gap-2 mt-3">
								<span className="text-xs px-2 py-1 rounded bg-[var(--card)] text-[var(--primary)]">
									React
								</span>
								<span className="text-xs px-2 py-1 rounded bg-[var(--card)] text-[var(--primary)]">
									PostgreSQL
								</span>
								<span className="text-xs px-2 py-1 rounded bg-[var(--card)] text-[var(--primary)]">
									Tailwind
								</span>
							</div>
						</div>

						{/* Project 3 */}
						<div>
							<h4 className="text-[var(--foreground)] font-medium">
								<a
									href="https://github.com/RBazelais/LuckySlotMachine"
									target="_blank"
									rel="noopener noreferrer"
									className="hover:text-[var(--primary)]"
								>
									Lucky Slots
								</a>
							</h4>
							<p className="text-[var(--muted)] mt-2">
								Slot machine with animations and probability
								engine.
							</p>
							<div className="flex flex-wrap gap-2 mt-3">
								<span className="text-xs px-2 py-1 rounded bg-[var(--card)] text-[var(--primary)]">
									React
								</span>
								<span className="text-xs px-2 py-1 rounded bg-[var(--card)] text-[var(--primary)]">
									TypeScript
								</span>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
