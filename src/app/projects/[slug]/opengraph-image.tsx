// opengraph-image.tsx — Dynamic OG image for project detail pages

import { ImageResponse } from "next/og";
import { PROJECTS } from "@/lib/constants";

export const runtime = "edge";
export const alt = "Infratrack — Héctor Muñoz Palacios";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.en.items.find((p) => p.slug === slug);

  if (!project) {
    return new ImageResponse(
      (
        <div
          style={{
            background: "#000000",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#FAFAFA",
            fontSize: 48,
          }}
        >
          Project not found
        </div>
      ),
      { ...size }
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          background: "#000000",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 20,
            color: "#A1A1AA",
            marginBottom: 16,
          }}
        >
          Héctor Muñoz Palacios
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "#FAFAFA",
            marginBottom: 24,
          }}
        >
          {project.title}
        </div>
        <div
          style={{
            fontSize: 22,
            color: "#A1A1AA",
            maxWidth: 700,
            lineHeight: 1.4,
            marginBottom: 32,
          }}
        >
          {project.description}
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          {project.stack.slice(0, 6).map((tech) => (
            <div
              key={tech}
              style={{
                padding: "6px 16px",
                borderRadius: "9999px",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                color: "#A1A1AA",
                fontSize: 14,
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
