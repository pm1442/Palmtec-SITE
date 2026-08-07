import { ImageResponse } from "next/og";

export const alt = "PalmTec — Google Ads management for small businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ background: "#16241c", color: "#f8f5ee", display: "flex", height: "100%", width: "100%", padding: "72px", flexDirection: "column", justifyContent: "space-between" }}>
      <div style={{ color: "#d1a733", display: "flex", fontSize: 32, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase" }}>PalmTec</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={{ color: "#d1a733", display: "flex", fontSize: 24, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" }}>Paid ads, without the agency fog</div>
        <div style={{ display: "flex", fontFamily: "serif", fontSize: 66, lineHeight: 1.08, maxWidth: 980 }}>Google Ads management for small businesses.</div>
      </div>
      <div style={{ color: "#d7ddd2", display: "flex", fontSize: 27 }}>Clear reporting. Practical optimization. One accountable person.</div>
    </div>,
    size,
  );
}
