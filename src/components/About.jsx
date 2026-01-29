import { FadeInSection } from "./ScrollAnimations";

export default function About() {
	return (
		<FadeInSection id="about" className="mb-24 scroll-mt-24" aria-label="About me">
			<h3 className="section-header mb-4 block lg:hidden">About</h3>
			<div className="text-[var(--ui-muted)] space-y-4">
				<p>
					I&#39;m a front end engineer based in <span className="text-[var(--syntax-green)] font-medium">Seattle, WA</span> who builds UI systems for web and games. I care about the moment when everything clicks, and using something <span className="text-[var(--syntax-purple)] font-medium">feels effortless</span>. Accessibility isn&#39;t an afterthought for me. It&#39;s part of what makes something feel right.
				</p>
				<p>
					Most recently, I worked on <span className="text-[var(--accent)] font-medium">
						<a 
							href="https://www.youtube.com/watch?v=bpp20D8_zQE" target="_blank" 
							rel="noopener noreferrer" 
							aria-label="Link to youtube video of State of Decay 3 trailer"
							title="State of Decay 3 Trailer">
								State of Decay 3
						</a>
					</span> building the UI players interact with constantly. Menus, inventory, HUD. The kind of work where getting it wrong means frustration, and getting it right means no one notices at all. 
				</p>
				<p>
					When I&#39;m not coding, I&#39;m usually practicing bass guitar, bouldering, or kayaking.
				</p>
			</div>
		</FadeInSection>
	);
}