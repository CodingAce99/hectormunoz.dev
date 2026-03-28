// page.tsx — Dynamic project detail page (Server Component)

import { PROJECTS } from "@/lib/constants";
import { ProjectDetailContent } from "./ProjectDetailContent";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// Pre-generate static routes
export function generateStaticParams() {
  return PROJECTS.en.items.map((item) => ({ slug: item.slug }));
}

// Dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.en.items.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Héctor Muñoz Palacios`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Validate slug exists
  const exists = PROJECTS.en.items.some((p) => p.slug === slug);
  if (!exists) notFound();

  return <ProjectDetailContent slug={slug} />;
}
