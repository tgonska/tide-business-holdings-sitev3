import React from "react";

const logoPath = "/tide-logo.png";

export default function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#f8fafc", minHeight: "100vh", color: "#0f172a" }}>
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        background: "white",
        borderBottom: "1px solid #e2e8f0"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <img
            src={logoPath}
            alt="Tide Business Holdings Logo"
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "16px",
              objectFit: "cover"
            }}
          />
          <div>
            <h2 style={{ margin: 0 }}>Tide Business Holdings LLC</h2>
            <p style={{ margin: 0, color: "#64748b" }}>
              Private Holdings & Real Estate Investment
            </p>
          </div>
        </div>

        <nav style={{ display: "flex", gap: "24px", color: "#475569" }}>
          <span>About</span>
          <span>Focus</span>
          <span>Values</span>
          <span>Contact</span>
        </nav>
      </header>

      <main style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "80px 40px"
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center"
        }}>
          <div>
            <p style={{
              letterSpacing: "4px",
              color: "#94a3b8",
              fontSize: "12px",
              marginBottom: "20px"
            }}>
              PRIVATE HOLDING COMPANY
            </p>

            <h1 style={{
              fontSize: "64px",
              lineHeight: 1,
              marginBottom: "30px"
            }}>
              Building durable assets with a long-term mindset.
            </h1>

            <p style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#475569",
              marginBottom: "30px"
            }}>
              Tide Business Holdings LLC is a private holding company focused on
              real estate ownership, disciplined investment, and long-term business value creation.
            </p>

            <div style={{ display: "flex", gap: "16px" }}>
              <button style={{
                background: "#0f172a",
                color: "white",
                border: "none",
                padding: "14px 24px",
                borderRadius: "12px",
                cursor: "pointer"
              }}>
                Contact Us
              </button>

              <button style={{
                background: "white",
                border: "1px solid #cbd5e1",
                padding: "14px 24px",
                borderRadius: "12px",
                cursor: "pointer"
              }}>
                Investment Focus
              </button>
            </div>
          </div>

          <div style={{
            background: "white",
            borderRadius: "32px",
            padding: "40px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
          }}>
            <img
              src={logoPath}
              alt="Logo"
              style={{
                width: "220px",
                display: "block",
                margin: "0 auto 30px auto",
                borderRadius: "28px"
              }}
            />

            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px"
            }}>
              {[
                "Holding Company",
                "Real Estate",
                "Stewardship",
                "Growth"
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    background: "#f1f5f9",
                    borderRadius: "20px",
                    padding: "24px",
                    fontWeight: "bold"
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
