"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Animation variants
const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
    }
};

const staggerContainer = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1 }
    }
};

const staggerItem = {
    hidden: { opacity: 0, x: 20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
    }
};

export default function ProjectContent({ project, otherProjects }) {
    const prefersReducedMotion = useReducedMotion();

    // Helper for motion wrapper
    const MotionSection = prefersReducedMotion ? "section" : motion.section;
    const MotionDiv = prefersReducedMotion ? "div" : motion.div;
    const MotionUl = prefersReducedMotion ? "ul" : motion.ul;
    const MotionLi = prefersReducedMotion ? "li" : motion.li;
    const MotionFooter = prefersReducedMotion ? "footer" : motion.footer;

    const sectionProps = prefersReducedMotion ? {} : {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-50px" },
        variants: fadeInUp
    };

    const staggerContainerProps = prefersReducedMotion ? {} : {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-50px" },
        variants: staggerContainer
    };

    const staggerItemProps = prefersReducedMotion ? {} : {
        variants: staggerItem
    };

    return (
        <div className="min-h-screen max-w-4xl mx-auto px-6 py-12 lg:py-24">
            {/* Back link */}
            <Link
                href="/#projects"
                className="inline-flex items-center text-[var(--muted)] hover:text-[var(--primary)] transition-colors mb-12 group"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1"
                    aria-hidden="true"
                >
                    <path
                        fillRule="evenodd"
                        d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
                        clipRule="evenodd"
                    />
                </svg>
                Back to projects
            </Link>

            {/* Header */}
            <MotionSection className="mb-12" {...sectionProps}>
                <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-4xl font-bold text-[var(--foreground)]">
                        {project.title}
                    </h1>
                    {project.status === "in-progress" && (
                        <span className="px-3 py-1 text-xs font-medium bg-yellow-500/15 text-yellow-400 rounded-full">
                            In Progress
                        </span>
                    )}
                </div>
                <p className="text-xl text-[var(--primary)] mb-4">
                    {project.subtitle}
                </p>
                <p className="text-[var(--muted)] text-lg leading-relaxed max-w-2xl">
                    {project.description}
                </p>
                
                {/* Links */}
                <div className="flex gap-4 mt-6">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--card)] hover:bg-[var(--primary)]/20 text-[var(--foreground)] rounded-lg transition-colors"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-5 h-5"
                            >
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                            View Code
                        </a>
                    )}
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--primary)] hover:bg-[var(--primary)]/80 text-[var(--primary-foreground)] rounded-lg transition-colors"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            Live Demo
                        </a>
                    )}
                </div>
            </MotionSection>

            {/* Hero Image */}
            {project.image && (
                <MotionDiv className="mb-16 rounded-lg overflow-hidden border border-[var(--border)]" {...sectionProps}>
                    <Image
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        width={1200}
                        height={675}
                        className="w-full h-auto"
                        unoptimized={project.image.endsWith('.gif')}
                    />
                </MotionDiv>
            )}

            {/* Problem & Solution */}
            <MotionSection className="mb-16" {...sectionProps}>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-sm font-semibold text-[var(--primary)] uppercase tracking-wider mb-3">
                            The Problem
                        </h2>
                        <p className="text-[var(--muted)] leading-relaxed">
                            {project.problem}
                        </p>
                    </div>
                    <div>
                        <h2 className="text-sm font-semibold text-[var(--primary)] uppercase tracking-wider mb-3">
                            The Solution
                        </h2>
                        <p className="text-[var(--muted)] leading-relaxed">
                            {project.solution}
                        </p>
                    </div>
                </div>
            </MotionSection>

            {/* Features */}
            {project.features && (
                <MotionSection className="mb-16" {...sectionProps}>
                    <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-6">
                        Key Features
                    </h2>
                    <MotionUl className="grid md:grid-cols-2 gap-3" {...staggerContainerProps}>
                        {project.features.map((feature, index) => (
                            <MotionLi
                                key={index}
                                className="flex items-start gap-3 text-[var(--muted)]"
                                {...staggerItemProps}
                            >
                                <span className="text-[var(--primary)] mt-1" aria-hidden="true">→</span>
                                <span>{feature}</span>
                            </MotionLi>
                        ))}
                    </MotionUl>
                </MotionSection>
            )}

            {/* Challenges */}
            {project.challenges && project.challenges.length > 0 && (
                <MotionSection className="mb-16" {...sectionProps}>
                    <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-6">
                        Challenges & Solutions
                    </h2>
                    <MotionDiv className="space-y-8" {...staggerContainerProps}>
                        {project.challenges.map((challenge, index) => (
                            <MotionDiv
                                key={index}
                                className="p-6 bg-[var(--card)] rounded-lg"
                                {...staggerItemProps}
                            >
                                <h3 className="text-lg font-medium text-[var(--foreground)] mb-2">
                                    {challenge.title}
                                </h3>
                                <p className="text-[var(--muted)] mb-4">
                                    {challenge.description}
                                </p>
                                <div className="pt-4 border-t border-[var(--border)]">
                                    <p className="text-sm font-medium text-[var(--primary)] mb-1">
                                        How I solved it:
                                    </p>
                                    <p className="text-[var(--muted)]">
                                        {challenge.solution}
                                    </p>
                                </div>
                            </MotionDiv>
                        ))}
                    </MotionDiv>
                </MotionSection>
            )}

            {/* Learnings */}
            {project.learnings && (
                <MotionSection className="mb-16" {...sectionProps}>
                    <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-6">
                        What I Learned
                    </h2>
                    <MotionUl className="space-y-2" {...staggerContainerProps}>
                        {project.learnings.map((learning, index) => (
                            <MotionLi
                                key={index}
                                className="flex items-start gap-3 text-[var(--muted)]"
                                {...staggerItemProps}
                            >
                                <span className="text-[var(--secondary)] mt-1" aria-hidden="true">✦</span>
                                <span>{learning}</span>
                            </MotionLi>
                        ))}
                    </MotionUl>
                </MotionSection>
            )}

            {/* Tech Stack */}
            <MotionSection className="mb-16" {...sectionProps}>
                <h2 className="text-2xl font-semibold text-[var(--foreground)] mb-6">
                    Tech Stack
                </h2>
                <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
                    {project.skills.map((skill, index) => (
                        <li
                            key={index}
                            className="px-4 py-2 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-sm font-medium"
                        >
                            {skill}
                        </li>
                    ))}
                </ul>
            </MotionSection>

            {/* Navigation to other projects */}
            <MotionFooter className="pt-12 border-t border-[var(--border)]" {...sectionProps}>
                <h2 className="text-sm font-semibold text-[var(--muted)] uppercase tracking-wider mb-6">
                    Other Projects
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {otherProjects.map((p) => (
                        <Link
                            key={p.slug}
                            href={`/projects/${p.slug}`}
                            className="group p-4 bg-[var(--card)] hover:bg-[var(--card)]/80 rounded-lg transition-colors"
                        >
                            <h3 className="font-medium text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors">
                                {p.title}
                            </h3>
                            <p className="text-sm text-[var(--muted)] mt-1 line-clamp-2">
                                {p.subtitle}
                            </p>
                        </Link>
                    ))}
                </div>
            </MotionFooter>
        </div>
    );
}