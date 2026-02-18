import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "32px",
          background: "linear-gradient(135deg, #2B5F83, #4EA8A6)",
          color: "white",
          fontSize: "120px",
          fontWeight: "bold",
        }}
      >
        L
      </div>
    ),
    { width: 192, height: 192 }
  );
}
