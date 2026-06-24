import { ImageResponse } from "next/og";

export const alt = "Buildifyx software development, web, AI and data studio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#f7f7ff",
          color: "#111111",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 84px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            fontSize: 34,
            fontWeight: 700,
          }}
        >
          <div
            style={{
              width: 54,
              height: 54,
              borderRadius: 16,
              background: "#5552D9",
              display: "flex",
            }}
          />
          BUILDIFYX
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <div
            style={{
              display: "flex",
              maxWidth: 980,
              fontSize: 72,
              lineHeight: 1.05,
              letterSpacing: "-3px",
              fontWeight: 800,
            }}
          >
            Software built for real business impact.
          </div>
          <div
            style={{
              display: "flex",
              color: "#5552D9",
              fontSize: 31,
              fontWeight: 600,
            }}
          >
            Web Development · AI Systems · Data · UI/UX · SaaS
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#626262",
            fontSize: 24,
          }}
        >
          <span>Bangkok, Thailand</span>
          <span>buildifyx.com</span>
        </div>
      </div>
    ),
    size,
  );
}
