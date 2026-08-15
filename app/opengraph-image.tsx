import { ImageResponse } from "next/og";

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
          background: "#f6f2ea",
          color: "#1b1916",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 20,
            letterSpacing: 2,
            color: "#756d60",
            marginBottom: 24,
          }}
        >
          AI GTM · EX-PE &amp; RESTRUCTURING · FORMER NATIONAL ATHLETE · ICF-CERTIFIED COACH
        </div>
        <div style={{ display: "flex", fontSize: 96, fontWeight: 600, lineHeight: 1 }}>
          Benjamin Oh
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 30,
            color: "#46413a",
            marginTop: 28,
            fontStyle: "italic",
          }}
        >
          National record holder. Never strikes out twice.
        </div>
      </div>
    ),
    { ...size }
  );
}
