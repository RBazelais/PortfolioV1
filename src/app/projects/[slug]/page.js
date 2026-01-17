import { notFound } from "next/navigation";
import { projects, getProjectBySlug, getAllProjectSlugs } from "@/data/projects";
import ProjectPageWrapper from "./ProjectPageWrapper";
import ProjectContent from "./ProjectContent";

// Generate static paths for all projects
export function generateStaticParams() {
	return getAllProjectSlugs().map((slug) => ({
		slug: slug,
	}));
}

// Generate metadata for each project page
export async function generateMetadata({ params }) {
	const { slug } = await params;
	const project = getProjectBySlug(slug);
	
	if (!project) {
		return {
			title: "Project Not Found",
		};
	}
	
	return {
		title: `${project.title} | Rachel Bazelais`,
		description: project.description,
	};
}

export default async function ProjectPage({ params }) {
	const { slug } = await params;
	const project = getProjectBySlug(slug);
	
	if (!project) {
		notFound();
	}

	// Get other projects for the footer
	const otherProjects = projects
		.filter((p) => p.slug !== project.slug)
		.slice(0, 3);
	
	return (
		<ProjectPageWrapper>
			<ProjectContent project={project} otherProjects={otherProjects} />
		</ProjectPageWrapper>
	);
}