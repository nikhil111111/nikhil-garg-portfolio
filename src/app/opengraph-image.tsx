import { ImageResponse } from "next/og";

export const alt = "Nikhil Garg — Full-Stack Developer and Backend Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b0a08",
          color: "#efede8",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: 3,
            color: "#d2ba97",
          }}
        >
          NIKHIL GARG
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 58,
              lineHeight: 1.08,
              letterSpacing: -1.5,
              maxWidth: 920,
            }}
          >
            Full-Stack Developer & Backend Engineer
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 16,
              fontSize: 34,
              color: "#cfcabe",
            }}
          >
            building AI-powered systems.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 22, color: "#cfcabe" }}>
          Production APIs · AI integrations · Node.js · PostgreSQL
        </div>
      </div>
    ),
    { ...size },
  );
}
