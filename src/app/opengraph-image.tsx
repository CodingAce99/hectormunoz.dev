// opengraph-image.tsx — Dynamic OG image for the landing page

import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Héctor Muñoz Palacios — Backend Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
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
            fontSize: 24,
            color: "#6366F1",
            marginBottom: 16,
            fontWeight: 500,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
        >
          Backend Developer
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#FAFAFA",
            lineHeight: 1.1,
            marginBottom: 24,
          }}
        >
          Héctor Muñoz Palacios
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#A1A1AA",
            maxWidth: 700,
            lineHeight: 1.4,
          }}
        >
          From managing infrastructure to building the software that runs it.
          Java · Spring Boot · Hexagonal Architecture.
        </div>
      </div>
    ),
    { ...size }
  );
}
