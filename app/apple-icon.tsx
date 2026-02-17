import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "36px",
          background: "linear-gradient(135deg, #2B5F83, #2B7F7D)",
          color: "white",
          fontSize: "100px",
          fontWeight: "bold",
        }}
      >
        L
      </div>
    ),
    { ...size }
  );
}
