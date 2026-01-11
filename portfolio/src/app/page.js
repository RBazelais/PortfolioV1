"use client";

import { useCallback } from "react";
import ExperienceTabs from "@/components/ExperienceTabs";
import Projects from "@/components/Projects";

export default function Home() {
	const replayAnimation = useCallback(() => {

		const nameRow = document.querySelector('.name-animated');
		const letters = nameRow?.querySelectorAll('.letter');
		const subtitles = document.querySelectorAll('.subtitle-animated');

		if (!nameRow) return;

		// Clone each letter node to force a fresh CSS animation instance
		const letterNodes = Array.from(letters);
		if (letterNodes.length === 0) return;

		letterNodes.forEach(letter => {
			const clone = letter.cloneNode(true);
			letter.replaceWith(clone);
		});

		// Clone subtitle and tagline nodes and update refs so future clicks still work
		subtitles.forEach(subtitleElement => {
			const subtitleClone = subtitleElement.cloneNode(true);
			subtitleElement.replaceWith(subtitleClone);
		});
	}, []);

	return (
		<>
			{/* Ambient glow orbs */}
			<div className="glow glow-1" />
			<div className="glow glow-2" />
			<div className="glow glow-3" />

			<div className="min-h-screen flex flex-col lg:flex-row lg:justify-between lg:gap-4 max-w-6xl mx-auto px-6 py-12 lg:py-24">
				{/* Left Sidebar */}
				<header className="lg:w-[48%] lg:sticky lg:top-24 lg:h-fit mb-12 lg:mb-0 flex flex-col">
					{/* Animated Name - Click to replay */}
					<h1 
						className="name-animated text-4xl font-bold cursor-pointer"
						onClick={replayAnimation}
					>
						<span className="letter">R</span>
						<span className="letter">a</span>
						<span className="letter">c</span>
						<span className="letter">h</span>
						<span className="letter">é</span>
						<span className="letter">l</span>
						<span className="letter space"></span>
						<span className="letter">B</span>
						<span className="letter">a</span>
						<span className="letter">z</span>
						<span className="letter">e</span>
						<span className="letter">l</span>
						<span className="letter">a</span>
						<span className="letter">i</span>
						<span className="letter">s</span>
					</h1>
					<h2 className="subtitle-animated text-xl text-[var(--primary)] mt-2">
						UI Engineer
					</h2>
					<p className="subtitle-animated text-[var(--muted)] mt-4" style={{ animationDelay: '1.2s' }}>
					A design-minded engineer focused on building intuitive interfaces and experiences for web and games. 
					</p>

					{/* Navigation */}
					<nav className="mt-8 hidden lg:block">
						<ul className="flex flex-col gap-3">
							<li>
								<a 
									href="#about"
									className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
								>
									ABOUT
								</a>
							</li>
							<li>
								<a
									href="#experience"
									className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
								>
									EXPERIENCE
								</a>
							</li>
							<li>
								<a
									href="#projects"
									className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
								>
									PROJECTS
								</a>
							</li>
						</ul>
					</nav>

					{/* Social Links */}
					<ul className="mt-8 flex gap-5" aria-label="Social media">
						<li>
							<a
								href="https://linkedin.com/in/rbazelais"
								target="_blank"
								rel="noopener noreferrer"
								className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
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
						</li>
						<li>
							<a
								href="https://github.com/RBazelais"
								target="_blank"
								rel="noopener noreferrer"
								className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
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
						</li>
						<li>
							<a
								href="https://rbazelais.itch.io/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
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
						</li>
					</ul>
				</header>

				{/* Right Content */}
				<main className="lg:w-[52%]">
					{/* About Section */}
					<section id="about" className="mb-24 scroll-mt-24" aria-label="About me">
						<h3 className="text-lg font-semibold text-[var(--foreground)] mb-4 lg:hidden">About</h3>
						<div className="text-[var(--muted)] space-y-4">
							<p>
								I&apos;m a software engineer who builds UI systems for web and games. I love the moment when code and design click together and something just feels right to use, whether that&apos;s a component library, a game interface, or a tool someone will interact with every day. I care about making those experiences accessible to everyone. 
							</p>
							<p>
								Most recently, I built UI at Undead Labs using Svelte, Coherent Gameface and Unreal Engine 5. Before that, I made in browser 3D simulation tools and demoed small games at PAX and GDC. I think a lot about how interfaces should get out of the way and let people do what they came to do.
							</p>
							<p>
								When I&apos;m not coding, I&apos;m usually
								practicing bass, bouldering, kayaking, or trying to stay upright on a snowboard.
							</p>
						</div>
					</section>

					{/* Experience Section */}
					<ExperienceTabs />

					{/* Projects Section */}
					<Projects />

					{/* Footer */}
					<footer className="max-w-md pb-16 text-sm text-[var(--muted)]">
						<p>
							Built with{" "}
							<a
								href="https://nextjs.org/"
								className="font-medium text-[var(--foreground)] hover:text-[var(--primary)]"
								target="_blank"
								rel="noopener noreferrer"
							>
								Next.js
							</a>{" "}
							and{" "}
							<a
								href="https://tailwindcss.com/"
								className="font-medium text-[var(--foreground)] hover:text-[var(--primary)]"
								target="_blank"
								rel="noopener noreferrer"
							>
								Tailwind CSS
							</a>
							, deployed with{" "}
							<a
								href="https://vercel.com/"
								className="font-medium text-[var(--foreground)] hover:text-[var(--primary)]"
								target="_blank"
								rel="noopener noreferrer"
							>
								Vercel
							</a>
							.
						</p>
					</footer>
				</main>
			</div>
		</>
	);
}