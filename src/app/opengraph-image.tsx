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
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #07111f 0%, #0f172a 50%, #0b2a3d 100%)",
          color: "white",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 24,
            color: "#22d3ee",
            fontWeight: 700,
            letterSpacing: 4,
          }}
        >
          CYBERSCOREHUB
        </div>

        <div
          style={{
            marginTop: 20,
            fontSize: 72,
            fontWeight: 800,
            lineHeight: 1.1,
          }}
        >
          Cyber Security
          <br />
          Assessment &
          <br />
          Risk Insights
        </div>

        <div
          style={{
            marginTop: 30,
            fontSize: 28,
            color: "#cbd5e1",
            maxWidth: 900,
          }}
        >
          Assess cyber maturity, identify security gaps, benchmark performance
          and prioritise remediation with evidence-based insights.
        </div>

        <div
          style={{
            marginTop: 40,
            display: "flex",
            gap: 16,
          }}
        >
          <div
            style={{
              border: "1px solid #22d3ee",
              borderRadius: 999,
              padding: "10px 20px",
              color: "#22d3ee",
              fontSize: 20,
            }}
          >
            Risk Assessment
          </div>

          <div
            style={{
              border: "1px solid #22d3ee",
              borderRadius: 999,
              padding: "10px 20px",
              color: "#22d3ee",
              fontSize: 20,
            }}
          >
            Security Maturity
          </div>

          <div
            style={{
              border: "1px solid #22d3ee",
              borderRadius: 999,
              padding: "10px 20px",
              color: "#22d3ee",
              fontSize: 20,
            }}
          >
            Cyber Resilience
          </div>
        </div>
      </div>
    ),
    size
  );
}
``