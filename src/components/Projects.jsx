"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { projects } from "@/data/projects";
import { FadeInSection } from "./ScrollAnimations";

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
		<FadeInSection id="projects" className="mb-24 scroll-mt-0" aria-label="Selected projects">
			<h3 className="text-lg font-semibold text-[var(--foreground)] mb-8 lg:hidden">
				Projects
			</h3>
			<ListContainer className="group/list" {...listContainerProps}>
				{projects.map((project) => (
					<ListItem key={project.slug} className="mb-12" {...listItemProps}>
						<div className="group relative grid grid-cols-1 gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
							<div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl border border-transparent transition-all duration-200 motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:border-[var(--primary)]/30 lg:group-hover:bg-white/[0.02] lg:group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)]"></div>
							<Image
								src={project.image}
								alt={`${project.title} screenshot`}
								className="aspect-video object-cover rounded border-2 border-[var(--card)] transition group-hover:border-[var(--muted)]/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
								width={200}
								height={48}
								unoptimized={project.image.endsWith('.gif')}
							/>
							<div className="z-10 sm:order-2 sm:col-span-6">
								<h4 className="text-[var(--foreground)] font-medium leading-snug">
									<Link
										href={`/projects/${project.slug}`}
										className="hover:text-[var(--primary)] inline-flex items-baseline"
									>
										<span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
										<span>
											{project.title}
											<span className="inline-block ml-1.5 text-[var(--primary)] transition-transform group-hover:rotate-12 group-hover:scale-130">✦</span>
										</span>
									</Link>
								</h4>
								<p className="text-[var(--muted)] mt-2 text-sm leading-normal">
									{project.description}
								</p>
								<ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
									{project.skills.map((skill, index) => (
										<li key={index} className="mr-1.5 mt-2">
											<div className="flex items-center rounded-full bg-[var(--primary)]/10 px-3 py-1 text-xs font-medium leading-5 text-[var(--primary)]">
												{skill}
											</div>
										</li>
									))}
								</ul>
							</div>
						</div>
					</ListItem>
				))}
			</ListContainer>
		</FadeInSection>
	);
}