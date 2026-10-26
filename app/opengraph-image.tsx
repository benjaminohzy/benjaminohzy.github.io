import { ImageResponse } from "next/og";
import { seo } from "./site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#FAF8F0",
          color: "#1B1F32",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 36,
            fontStyle: "italic",
            color: "#666E99",
            marginBottom: 16,
          }}
        >
          Here&apos;s my story.
        </div>
        <div style={{ display: "flex", fontSize: 92, fontWeight: 600, lineHeight: 1 }}>
          I&apos;m Ben.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: "#2D3353",
            marginTop: 36,
            maxWidth: 860,
            lineHeight: 1.35,
          }}
        >
          {seo.description}
        </div>
      </div>
    ),
    { ...size }
  );
}
