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
          background: "#161826",
          border: "2px solid #9184d9",
          borderRadius: 6,
          color: "#9184d9",
          fontFamily: "monospace",
          fontSize: 18,
          fontWeight: 600,
        }}
      >
        M
      </div>
    ),
    { ...size },
  );
}
