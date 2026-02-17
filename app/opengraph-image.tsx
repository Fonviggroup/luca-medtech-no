import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Luca MedTech — Diabetesdata som bare flyter";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #2B5F83 0%, #2B7F7D 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "12px",
              background: "rgba(255,255,255,0.15)",
              border: "3px solid rgba(255,255,255,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "28px",
              fontWeight: "bold",
            }}
          >
            L
          </div>
          <span
            style={{ fontSize: "42px", color: "white", fontWeight: "bold" }}
          >
            Luca MedTech
          </span>
        </div>
        <div
          style={{
            fontSize: "56px",
            color: "white",
            textAlign: "center",
            lineHeight: 1.2,
            marginBottom: "24px",
          }}
        >
          Diabetesdata som bare flyter
        </div>
        <div
          style={{
            fontSize: "24px",
            color: "rgba(255,255,255,0.8)",
            textAlign: "center",
          }}
        >
          Norges første CGM-til-journal-plattform
        </div>
      </div>
    ),
    { ...size }
  );
}
