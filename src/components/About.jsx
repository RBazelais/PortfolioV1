import { FadeInSection } from "./ScrollAnimations";

export default function About() {
	return (
		<FadeInSection id="about" className="mb-24 scroll-mt-24" aria-label="About me">
			<h3 className="text-lg font-semibold text-[var(--foreground)] mb-4 lg:hidden">About</h3>
			<div className="text-[var(--muted)] space-y-4">
				<p>
					I&apos;m a front end engineer based in Seattle, WA who builds UI systems for web and games. I love the moment when code and design click together and something just feels right to use, whether that&apos;s a component library, a game interface, or a tool someone will interact with every day. 
				</p>
				<p>
					Most recently, I built UI at Undead Labs using Svelte and Unreal Engine 5. Before that, I made simulation tools and shipped games at PAX and GDC. Whether it&apos;s a game interface or a web app, I focus on building with accessibility from the start.
				</p>
				<p>
					When I&apos;m not coding, I&apos;m usually practicing bass, bouldering, kayaking, or trying to stay upright on a snowboard.
				</p>
			</div>
		</FadeInSection>
	);
}
