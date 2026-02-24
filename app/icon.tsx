import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 6,
          background: "#1c3220",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Simple bird silhouette — two wing arcs */}
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          {/* Left wing */}
          <path
            d="M10 11 Q6 7 2 9 Q5 6 10 9"
            fill="white"
            opacity="0.92"
          />
          {/* Right wing */}
          <path
            d="M10 11 Q14 7 18 9 Q15 6 10 9"
            fill="white"
            opacity="0.92"
          />
          {/* Body dot */}
          <circle cx="10" cy="10" r="1.2" fill="white" opacity="0.7" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
