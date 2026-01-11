"use client";

import { useState, useRef } from "react";
import { experience } from "@/data/experience";
import { education } from "@/data/education";

export default function ExperienceTabs() {
    const [activeTab, setActiveTab] = useState("experience");
    const tabRefs = useRef({});

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

    return (
        <section
            id="experience"
            className="mb-24 scroll-mt-0"
            aria-label="Work experience"
        >
            <div id="experience" className="mb-24 scroll-mt-24" aria-labelledby="background-heading">
                {/* Heading - visible on mobile, screen-reader only on desktop */}
                <h3 id="background-heading" className="text-lg font-semibold text-[var(--foreground)] mb-8 lg:sr-only">
                    Background
                </h3>

                {/* Tab list */}
                <div
                    role="tablist"
                    aria-label="Background information"
                    className="flex gap-1 mb-8 p-1 bg-[var(--card)]/50 rounded-lg w-fit"
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
                        className={`px-4 py-2 text-sm font-medium rounded-md transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] ${
                            activeTab === "experience"
                                ? "bg-[var(--primary)] text-[var(--primary-foreground)]"
                                : "text-[var(--muted)] hover:text-[var(--foreground)]"
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
                        className={`px-4 py-2 text-sm font-medium rounded-md transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] ${
                            activeTab === "education"
                                ? "bg-[var(--primary)] text-[var(--primary-foreground)]"
                                : "text-[var(--muted)] hover:text-[var(--foreground)]"
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
                        <ol aria-label="Work experience" className="group/list list-none p-0 m-0">
                            {experience.map((item, index) => (
                                <li key={index} className="mb-12">
                                    <article className="group relative grid grid-cols-1 gap-4 pb-1 lg:grid-cols-[120px_1fr] transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-[var(--card)]"></div>
                                        <header className="z-10 text-sm text-[var(--muted)]">
                                            <time dateTime={item.date.includes("Present") ? undefined : item.date.replace(" — ", "/")}>
                                                {item.date}
                                            </time>
                                        </header>
                                        <div className="z-10">
                                            <h4 className="text-[var(--foreground)] font-medium leading-snug">
                                                {item.title}
                                            </h4>
                                            <p className="text-[var(--muted)] mt-2 text-sm leading-normal">
                                                {item.description}
                                            </p>
                                            <ul 
                                                aria-label={`Technologies used at ${item.title.split(" · ")[1] || "this role"}`} 
                                                className="mt-3 flex flex-wrap gap-1.5 list-none p-0"
                                            >
                                                {item.skills.map((skill, i) => (
                                                    <li 
                                                        key={i} 
                                                        className="rounded-full bg-[var(--primary)]/10 px-3 py-1 text-xs font-medium text-[var(--primary)]"
                                                    >
                                                        {skill}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </article>
                                </li>
                            ))}
                        </ol>
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
                        <ol aria-label="Education history" className="group/list list-none p-0 m-0">
                            {education.map((item, index) => (
                                <li key={index} className="mb-12">
                                    <article className="group relative grid grid-cols-1 gap-4 pb-1 lg:grid-cols-[120px_1fr] transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-[var(--card)]"></div>
                                        <header className="z-10 text-sm text-[var(--muted)]">
                                            <time dateTime={item.date.includes("—") ? item.date.replace(" — ", "/") : item.date}>
                                                {item.date}
                                            </time>
                                        </header>
                                        <div className="z-10">
                                            <h4 className="text-[var(--foreground)] font-medium leading-snug">
                                                {item.title}
                                            </h4>

                                            {/* Subtitle (degree/certificate) */}
                                            {item.subtitle && (
                                                <p className="text-[var(--primary)] text-sm mt-1">
                                                    {item.subtitle}
                                                </p>
                                            )}

                                            {/* Description */}
                                            {item.description && (
                                                <p className="text-[var(--muted)] mt-2 text-sm leading-normal">
                                                    {item.description}
                                                </p>
                                            )}

                                            {/* Highlight/Award */}
                                            {item.highlight && (
                                                <p className="text-[var(--secondary)] mt-2 text-sm leading-normal flex items-center gap-1.5">
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
                                                            className="text-[var(--muted)] text-sm leading-relaxed flex items-center gap-2 py-0.5"
                                                        >
                                                            <span aria-hidden="true" className="text-[var(--primary)]">→</span>
                                                            <span>{course.name}</span>
                                                            {course.note && (
                                                                <span className="text-xs px-2 py-0.5 bg-[var(--secondary)]/15 text-[var(--secondary)] rounded font-medium">
                                                                    {course.note}
                                                                </span>
                                                            )}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}

                                            {/* Skills */}
                                            <ul 
                                                aria-label={`Skills from ${item.title}`} 
                                                className="mt-3 flex flex-wrap gap-1.5 list-none p-0"
                                            >
                                                {item.skills.map((skill, i) => (
                                                    <li 
                                                        key={i} 
                                                        className="rounded-full bg-[var(--primary)]/10 px-3 py-1 text-xs font-medium text-[var(--primary)]"
                                                    >
                                                        {skill}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </article>
                                </li>
                            ))}
                        </ol>
                    )}
                </div>

                {/* Resume Link */}
                <div className="mt-12">
                    <a
                        href="/RBazelais_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center font-medium text-[var(--foreground)] hover:text-[var(--primary)] focus-visible:text-[var(--primary)] transition-colors group"
                        aria-label="View Full Résumé (opens a pdf in a new tab)"
                    >
                        <span className="border-b border-transparent group-hover:border-[var(--primary)] group-focus-visible:border-[var(--primary)] transition-colors">
                            View Full Résumé
                        </span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="inline-block h-4 w-4 shrink-0 ml-1 translate-y-px transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-focus-visible:-translate-y-0.5 group-focus-visible:translate-x-0.5"
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
            </div>
        </section>
    );
}