import { ImageResponse } from "next/og";

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
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 80px",
          backgroundColor: "#0a0a0c",
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(242, 78, 30, 0.25) 0%, transparent 60%)",
          color: "white",
        }}
      >
        {/* Top Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "8px",
                backgroundColor: "#f24e1e",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "24px",
                fontWeight: "900",
              }}
            >
              OT
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "24px", fontWeight: "900", letterSpacing: "-0.5px" }}>
                ORIENT TECH<span style={{ color: "#f24e1e" }}>.</span>
              </span>
              <span style={{ fontSize: "12px", color: "#a1a1aa", letterSpacing: "2px", textTransform: "uppercase" }}>
                Automotive Solutions
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 18px",
              borderRadius: "20px",
              border: "1px solid rgba(255,255,255,0.15)",
              backgroundColor: "rgba(255,255,255,0.05)",
              fontSize: "14px",
              color: "#e4e4e7",
              fontWeight: "600",
            }}
          >
            <span>US EXPANSION • 2026</span>
          </div>
        </div>

        {/* Main Title Area */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "950px" }}>
          <div
            style={{
              display: "flex",
              fontSize: "14px",
              color: "#f24e1e",
              fontWeight: "800",
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            Automotive Spare Parts &amp; Aftermarket Solutions
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: "56px",
              fontWeight: "900",
              lineHeight: "1.05",
              letterSpacing: "-1.5px",
              color: "#ffffff",
              textTransform: "uppercase",
            }}
          >
            <span>YOUR TRUSTED PARTNER FOR&nbsp;</span>
            <span style={{ color: "#f24e1e" }}>ALL YOUR VEHICLE NEEDS.</span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "20px",
              color: "#a1a1aa",
              lineHeight: "1.4",
              maxWidth: "850px",
            }}
          >
            High-grade OEM replacement parts, commercial fleet solutions, and intercontinental supply
            chain networks across North America and global markets.
          </div>
        </div>

        {/* Footer Metrics */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            paddingTop: "24px",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            fontSize: "14px",
            color: "#71717a",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ color: "#ffffff", fontWeight: "800", fontSize: "18px" }}>100K+</span>
              <span>SKU Catalog</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ color: "#ffffff", fontWeight: "800", fontSize: "18px" }}>4+</span>
              <span>Continents</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ color: "#f24e1e", fontWeight: "800", fontSize: "18px" }}>DFW, Texas</span>
              <span>Operations Hub</span>
            </div>
          </div>
          <div style={{ display: "flex", color: "#a1a1aa", fontWeight: "600" }}>orienttechusa.com</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
