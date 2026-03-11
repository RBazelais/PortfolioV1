"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { projects } from "@/data/projects";
import { FadeInSection } from "./ScrollAnimations";
import { getSkillTagClass } from "@/utils/skillColors";

// Stagger animation variants - slide in from right
const staggerContainer = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.1 }
	}
};

const staggerItem = {
	hidden: { opacity: 0, x: 30 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
	}
};

export default function Projects() {
	const prefersReducedMotion = useReducedMotion();

	const ListContainer = prefersReducedMotion ? "ul" : motion.ul;
	const ListItem = prefersReducedMotion ? "li" : motion.li;

	const listContainerProps = prefersReducedMotion
		? {}
		: {
			initial: "hidden",
			whileInView: "visible",
			viewport: { once: true, margin: "-50px" },
			variants: staggerContainer,
		};

	const listItemProps = prefersReducedMotion
		? {}
		: { variants: staggerItem };

	return (
		<FadeInSection id="projects" className="scroll-mt-20" aria-label="Selected projects">
			{/* Header - only visible on mobile */}
			<h3 className="section-header mb-6 block lg:hidden">
				Projects
			</h3>
			
			<ListContainer className="group/list list-none p-0 m-0 flex flex-col gap-6" {...listContainerProps}>
				{projects.map((project) => (
					<ListItem key={project.slug} {...listItemProps}>
						{project.featured ? (
							/* Featured Project - Large Layout */
							<article className="group relative flex flex-col gap-4 p-6 rounded-xl border border-transparent transition-all duration-150 motion-reduce:transition-none lg:hover:!opacity-100 lg:group-hover/list:opacity-50 lg:hover:border-[var(--primary)]/30 lg:hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] card-bg card-bg--accent">
								{/* Large Preview Image */}
								<div className="z-10 w-full">
									<Image
										src={project.image}
										alt={`${project.title} screenshot`}
										className="aspect-video object-cover rounded border-2 border-[var(--bg-highlight)] transition group-hover:border-[var(--ui-divider)]/50 w-full"
										width={800}
										height={450}
										unoptimized={project.image.endsWith('.gif')}
									/>
								</div>
								
								{/* Content Below */}
								<div className="z-10">
									<span className="featured-badge mb-3">Featured Project</span>
									
									<h4 className="text-[var(--ui-active)] font-semibold leading-snug text-xl">
										<Link
											href={`/projects/${project.slug}`}
											className="group/link inline-flex items-center gap-2"
										>
											<span className="absolute inset-0 hidden rounded-lg lg:block"></span>
											<span className="inline-block transition-colors group-hover/link:text-[var(--accent)] group-hover:text-[var(--accent)]">
												{project.title}
											</span>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												className="inline-block h-5 w-5 shrink-0 text-[var(--accent)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
												aria-hidden="true"
											>
												<path
													fillRule="evenodd"
													d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
													clipRule="evenodd"
												/>
											</svg>
										</Link>
									</h4>
									
									<p className="text-[var(--ui-muted)] mt-3 text-base leading-relaxed">
										{project.description}
									</p>
									
									<ul className="mt-4 flex flex-wrap gap-2 list-none p-0" aria-label="Technologies used">
										{project.skills.map((skill, index) => (
											<li key={index} className="skill-pill">
												<span className={getSkillTagClass(skill)}>
													<span className="sr-only">Skill: </span>{skill}
												</span>
											</li>
										))}
									</ul>
								</div>
							</article>
						) : (
							/* Regular Project - Compact Layout */
							<article className="group relative grid grid-cols-1 gap-4 p-4 sm:grid-cols-8 sm:gap-6 rounded-xl border border-transparent transition-all duration-150 motion-reduce:transition-none lg:hover:!opacity-100 lg:group-hover/list:opacity-50 lg:hover:border-[var(--primary)]/30 lg:hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] card-bg card-bg--accent">
								{/* Thumbnail */}
								<div className="z-10 sm:order-1 sm:col-span-2 pt-1">
									<Image
										src={project.image}
										alt={`${project.title} screenshot`}
										className="aspect-video object-cover rounded border-2 border-[var(--bg-highlight)] transition group-hover:border-[var(--ui-divider)]/50"
										width={200}
										height={100}
										unoptimized={project.image.endsWith('.gif')}
									/>
								</div>
								
								{/* Content */}
								<div className="z-10 sm:order-2 sm:col-span-6">
									{/* Title */}
									<h4 className="text-[var(--ui-active)] font-semibold leading-snug">
										<Link
											href={`/projects/${project.slug}`}
											className="group/link inline-flex items-center gap-1"
										>
											<span className="absolute inset-0 hidden rounded-lg lg:block"></span>
											<span className="inline-block transition-colors group-hover/link:text-[var(--accent)] group-hover:text-[var(--accent)]">
												{project.title}
											</span>
											<span className="inline-block ml-1.5 text-[var(--primary)] transition-transform group-hover:rotate-12 group-hover:scale-130">✦</span>
										</Link>
									</h4>
									
									{/* Description */}
									<p className="text-[var(--ui-muted)] mt-2 text-sm leading-relaxed">
										{project.description}
									</p>
									
									{/* Skills */}
									<ul className="mt-3 flex flex-wrap gap-2 list-none p-0" aria-label="Technologies used">
										{project.skills.map((skill, index) => (
											<li key={index} className="skill-pill">
												<span className={getSkillTagClass(skill)}>
													<span className="sr-only">Skill: </span>{skill}
												</span>
											</li>
										))}
									</ul>
								</div>
							</article>
						)}
					</ListItem>
				))}
			</ListContainer>
		</FadeInSection>
	);
}