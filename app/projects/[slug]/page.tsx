import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetailPage } from "../ProjectDetailPage";
import { getProjectDetail, projectDetails } from "../project-details";

export function generateStaticParams() {
  return projectDetails.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectDetail(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.metadata?.title ?? project.title,
    description: project.metadata?.description ?? project.description,
  };
}

export default async function ProjectPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProjectDetail(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailPage project={project} />;
}
