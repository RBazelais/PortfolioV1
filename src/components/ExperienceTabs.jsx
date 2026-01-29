"use client";

import { useState, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { experience } from "@/data/experience";
import { education } from "@/data/education";
import { FadeInSection } from "./ScrollAnimations";
import { getSkillTagClass } from "@/utils/skillColors";

// Tab content animation variants - slide in from right
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

export default function ExperienceTabs() {
	const [activeTab, setActiveTab] = useState("experience");
	const tabRefs = useRef({});
	const prefersReducedMotion = useReducedMotion();

	const tabs = ["experience", "education"];

	// Keyboard navigation for tabs
	const handleKeyDown = (e) => {
		const currentIndex = tabs.indexOf(activeTab);
		let newIndex;

		switch (e.key) {
			case "ArrowRight":
			case "ArrowDown":
				e.preventDefault();
				newIndex = (currentIndex + 1) % tabs.length;
				setActiveTab(tabs[newIndex]);
				tabRefs.current[tabs[newIndex]]?.focus();
				break;
			case "ArrowLeft":
			case "ArrowUp":
				e.preventDefault();
				newIndex = (currentIndex - 1 + tabs.length) % tabs.length;
				setActiveTab(tabs[newIndex]);
				tabRefs.current[tabs[newIndex]]?.focus();
				break;
			case "Home":
				e.preventDefault();
				setActiveTab(tabs[0]);
				tabRefs.current[tabs[0]]?.focus();
				break;
			case "End":
				e.preventDefault();
				setActiveTab(tabs[tabs.length - 1]);
				tabRefs.current[tabs[tabs.length - 1]]?.focus();
				break;
			default:
				break;
		}
	};

	// Wrapper for list - animated or static based on motion preference
	const ListContainer = prefersReducedMotion ? "ol" : motion.ol;
	const ListItem = prefersReducedMotion ? "li" : motion.li;

	const listContainerProps = prefersReducedMotion 
		? {} 
		: {
			initial: "hidden",
			animate: "visible",
			variants: staggerContainer,
		};

	const listItemProps = prefersReducedMotion 
		? {} 
		: { variants: staggerItem };

	return (
		<FadeInSection
			id="experience"
			className="mb-24 scroll-mt-24"
			aria-label="Work experience and education"
		>
			{/* Heading - visible on mobile, screen-reader only on desktop */}
			<h3 id="background-heading" className="section-header mb-8 block lg:sr-only">
				Experience
			</h3>

			{/* Tab list */}
			<div
				role="tablist"
				aria-label="Background information"
				className="flex gap-1 mb-8 p-1 bg-[var(--bg-editor)]/50 rounded-lg w-fit border border-[var(--ui-divider)]/20"
			>
				<button
					ref={(el) => (tabRefs.current["experience"] = el)}
					role="tab"
					id="experience-tab"
					aria-selected={activeTab === "experience"}
					aria-controls="experience-panel"
					tabIndex={activeTab === "experience" ? 0 : -1}
					onClick={() => setActiveTab("experience")}
					onKeyDown={handleKeyDown}
					className={`px-4 py-2 text-sm font-medium rounded-md transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)] ${
						activeTab === "experience"
							? "bg-[var(--accent)] text-[var(--bg-base)]"
							: "text-[var(--ui-muted)] hover:text-[var(--ui-active)]"
					}`}
				>
					Experience
				</button>
				<button
					ref={(el) => (tabRefs.current["education"] = el)}
					role="tab"
					id="education-tab"
					aria-selected={activeTab === "education"}
					aria-controls="education-panel"
					tabIndex={activeTab === "education" ? 0 : -1}
					onClick={() => setActiveTab("education")}
					onKeyDown={handleKeyDown}
					className={`px-4 py-2 text-sm font-medium rounded-md transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)] ${
						activeTab === "education"
							? "bg-[var(--accent)] text-[var(--bg-base)]"
							: "text-[var(--ui-muted)] hover:text-[var(--ui-active)]"
					}`}
				>
					Education
				</button>
			</div>

			{/* Experience Panel */}
			<div
				role="tabpanel"
				id="experience-panel"
				aria-labelledby="experience-tab"
				hidden={activeTab !== "experience"}
			>
				{activeTab === "experience" && (
					<ListContainer 
						key="experience"
						aria-label="Work experience" 
						className="group/list list-none p-0 m-0"
						{...listContainerProps}
					>
						{experience.map((item, index) => (
							<ListItem key={index} className="mb-12" {...listItemProps}>
								<article className="group relative grid grid-cols-1 gap-2 p-4 lg:p-6 lg:grid-cols-[120px_1fr] rounded-xl border border-transparent transition-all duration-150 motion-reduce:transition-none lg:hover:!opacity-100 lg:group-hover/list:opacity-50 lg:hover:border-[var(--primary)]/30 lg:hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] card-bg card-bg--accent">
									<header className="z-10 text-sm text-[var(--ui-divider)] font-mono">
										<time dateTime={item.date.includes("Present") ? undefined : item.date.replace(" — ", "/")}>
											{item.date}
										</time>
									</header>
									<div className="z-10">
										<h4 className="text-[var(--ui-active)] font-medium leading-snug">
											{item.title.split(" · ")[0]}
											{item.title.includes(" · ") && (
												<span className="text-[var(--accent-secondary)]"> · {item.title.split(" · ")[1]}</span>
											)}
										</h4>
										<p className="text-[var(--ui-muted)] mt-2 text-sm leading-normal">
											{item.description}
										</p>
										{item.skills && item.skills.length > 0 && (
											<ul 
												aria-label={`Technologies used at ${item.title.split(" · ")[1] || "this role"}`} 
												className="mt-3 flex flex-wrap gap-1.5 list-none p-0"
											>
												{item.skills.map((skill, i) => (
													<li 
														key={i} 
														className={getSkillTagClass(skill)}
													>
														{skill}
													</li>
												))}
											</ul>
										)}
									</div>
								</article>
							</ListItem>
						))}
					</ListContainer>
				)}
			</div>

			{/* Education Panel */}
			<div
				role="tabpanel"
				id="education-panel"
				aria-labelledby="education-tab"
				hidden={activeTab !== "education"}
			>
				{activeTab === "education" && (
					<ListContainer 
						key="education"
						aria-label="Education history" 
						className="group/list list-none p-0 m-0"
						{...listContainerProps}
					>
						{education.map((item, index) => (
							<ListItem key={index} className="mb-12" {...listItemProps}>
								<article className="group relative grid grid-cols-1 gap-2 p-4 lg:p-6 lg:grid-cols-[120px_1fr] rounded-xl border border-transparent transition-all duration-150 motion-reduce:transition-none lg:hover:!opacity-100 lg:group-hover/list:opacity-50 lg:hover:border-[var(--primary)]/30 lg:hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] card-bg card-bg--accent">
									<header className="z-10 text-sm text-[var(--ui-divider)] font-mono">
										<time dateTime={item.date.includes("—") ? item.date.replace(" — ", "/") : item.date}>
											{item.date}
										</time>
									</header>
									<div className="z-10">
										<h4 className="text-[var(--ui-active)] font-medium leading-snug">
											{item.title}
										</h4>

										{/* Subtitle (degree/certificate) */}
										{item.subtitle && (
											<p className="text-[var(--accent)] text-sm mt-1">
												{item.subtitle}
											</p>
										)}

										{/* Description */}
										{item.description && (
											<p className="text-[var(--ui-muted)] mt-2 text-sm leading-normal">
												{item.description}
											</p>
										)}

										{/* Highlight/Award */}
										{item.highlight && (
											<p className="text-[var(--accent-secondary)] mt-2 text-sm leading-normal flex items-center gap-1.5">
												<span role="img" aria-label="Award">🏆</span>
												{item.highlight}
											</p>
										)}

										{/* Course list */}
										{item.courses && (
											<ul aria-label="Completed courses" className="mt-2 list-none p-0">
												{item.courses.map((course, i) => (
													<li
														key={i}
														className="text-[var(--ui-muted)] text-sm leading-relaxed flex items-center gap-2 py-0.5"
													>
														<span aria-hidden="true" className="text-[var(--accent)]">→</span>
														<span>{course.name}</span>
														{course.note && (
															<span className="text-xs px-2 py-0.5 bg-[var(--accent-secondary)]/15 text-[var(--accent-secondary)] rounded font-medium">
																{course.note}
															</span>
														)}
													</li>
												))}
											</ul>
										)}
									</div>
								</article>
							</ListItem>
						))}
					</ListContainer>
				)}
			</div>

			{/* Resume Link */}
			<div className="mt-12">
				<a
					href="/RBazelais_Resume.pdf"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center font-medium text-[var(--ui-active)] hover:text-[var(--accent)] focus-visible:text-[var(--accent)] transition-colors group"
					aria-label="View Full Résumé (opens a pdf in a new tab)"
				>
					<span className="border-b border-transparent group-hover:border-[var(--accent)] group-focus-visible:border-[var(--accent)] transition-colors">
						View Full Résumé
					</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						className="inline-block h-4 w-4 shrink-0 ml-1 translate-y-px text-[var(--accent)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-focus-visible:-translate-y-0.5 group-focus-visible:translate-x-0.5"
						aria-hidden="true"
					>
						<path
							fillRule="evenodd"
							d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
							clipRule="evenodd"
						/>
					</svg>
				</a>
			</div>
		</FadeInSection>
	);
}