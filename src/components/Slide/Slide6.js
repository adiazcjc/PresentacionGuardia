import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import Typewriter from "typewriter-effect";
import { Slide } from "react-awesome-reveal";

const steps = [
  {
    icon: (
      // Monitor con alerta
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="6" y="10" width="36" height="22" rx="4" stroke="#42c8ee" strokeWidth="2.5" />
        <rect x="18" y="36" width="12" height="3" rx="1.5" fill="#42c8ee" />
        <polygon points="24,16 30,28 18,28" stroke="#42c8ee" strokeWidth="2" fill="none" />
        <line x1="24" y1="20" x2="24" y2="24" stroke="#42c8ee" strokeWidth="2" />
        <circle cx="24" cy="26" r="1.2" fill="#42c8ee" />
      </svg>
    ),
    text: "Sonda (p.ej. ping SRV-WEB01) falla."
  },
  {
    icon: (
      // Alerta
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="12" y="12" width="24" height="24" rx="6" stroke="#42c8ee" strokeWidth="2.5" />
        <polygon points="24,18 30,32 18,32" stroke="#42c8ee" strokeWidth="2" fill="none" />
        <line x1="24" y1="22" x2="24" y2="28" stroke="#42c8ee" strokeWidth="2" />
        <circle cx="24" cy="30" r="1.2" fill="#42c8ee" />
      </svg>
    ),
    text: "App registra evento y muestra alerta."
  },
  {
    icon: (
      // Operador (headset)
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="16" stroke="#42c8ee" strokeWidth="2.5" />
        <path d="M16 32c0-4 8-4 8 0" stroke="#42c8ee" strokeWidth="2" fill="none" />
        <path d="M32 32v-2a4 4 0 0 0-4-4h-8a4 4 0 0 0-4 4v2" stroke="#42c8ee" strokeWidth="2" fill="none" />
        <circle cx="24" cy="20" r="4" stroke="#42c8ee" strokeWidth="2" fill="none" />
      </svg>
    ),
    text: "Operador verifica y escala."
  },
  {
    icon: (
      // Checklist
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="12" y="8" width="24" height="32" rx="6" stroke="#42c8ee" strokeWidth="2.5" />
        <polyline points="18,22 22,26 30,18" stroke="#42c8ee" strokeWidth="2.5" fill="none" />
        <rect x="18" y="30" width="12" height="2.5" rx="1.2" fill="#42c8ee" />
      </svg>
    ),
    text: "Seguimiento manual hasta cierre."
  }
];

function Slide6() {
  return (
    <Container fluid className="home-about-section d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <Particle />
      <Container className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "100vh", maxWidth: 600 }}>
        <div style={{ marginBottom: "1.2rem" }}>
          <span style={{ fontSize: "1.5em", fontWeight: 700, color: "#42c8ee", textShadow: "0 0 18px #42c8ee, 0 0 2px #fff", letterSpacing: 2 }}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Flujo operativo (hoy)")
                  .start();
              }}
            />
          </span>
        </div>
        <Slide direction="up" triggerOnce>
          <div style={{
            background: "rgba(11, 10, 20, 0.85)",
            borderRadius: 18,
            boxShadow: "0 0 32px #42c8ee99, 0 0 8px #0b0a14",
            border: "2px solid #42c8ee",
            padding: "2.5rem 2.5rem 2rem 2.5rem",
            width: "100%",
            maxWidth: 420,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}>
            {steps.map((step, idx) => (
              <React.Fragment key={idx}>
                <div style={{ display: "flex", alignItems: "center", marginBottom: 18 }}>
                  <div style={{ marginRight: 18, display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{
                      width: 38,
                      height: 38,
                      borderRadius: "50%",
                      border: "2.5px solid #42c8ee",
                      color: "#42c8ee",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      fontSize: 22,
                      marginBottom: 8,
                      background: "rgba(11, 10, 20, 0.7)",
                      boxShadow: "0 0 10px #42c8ee55"
                    }}>{idx + 1}</div>
                    {step.icon}
                  </div>
                  <div style={{ color: "#fff", fontSize: "1.15em", fontWeight: 500, textAlign: "left", textShadow: "0 2px 8px #0b0a15", maxWidth: 260 }}>
                    {step.text}
                  </div>
                </div>
                {idx < steps.length - 1 && (
                  <div style={{ width: 2, height: 32, background: "linear-gradient(180deg, #42c8ee 0%, #fff 100%)", margin: "0 auto 12px auto", borderRadius: 2, boxShadow: "0 0 8px #42c8ee" }} />
                )}
              </React.Fragment>
            ))}
          </div>
        </Slide>
      </Container>
    </Container>
  );
}

export default Slide6;
