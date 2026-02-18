import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "6px",
          background: "linear-gradient(135deg, #2B5F83, #4EA8A6)",
          color: "white",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        L
      </div>
    ),
    { ...size }
  );
}
