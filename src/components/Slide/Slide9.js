import React from "react";
import { Container } from "react-bootstrap";
import { Slide } from "react-awesome-reveal";

const pasos = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="22" stroke="#42c8ee" strokeWidth="2.5" fill="none"/><path d="M24 13v11l8 5" stroke="#42c8ee" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="24" cy="24" r="18" stroke="#42c8ee55" strokeWidth="1.5" fill="none"/></svg>
    ),
    title: "Cron activa Ping-Flow",
    desc: "(cada 60 s)."
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect x="7" y="12" width="34" height="24" rx="4" stroke="#42c8ee" strokeWidth="2.5" fill="none"/><rect x="14" y="18" width="20" height="8" rx="2" fill="#42c8ee"/><text x="24" y="24.5" textAnchor="middle" fill="#0b0a14" fontSize="8" fontWeight="bold">EXECUTE</text></svg>
    ),
    title: "Nodo 'Execute Command'",
    desc: "corre ping -n 4 SRV-DB01."
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="22" stroke="#42c8ee" strokeWidth="2.5" fill="none"/><g stroke="#42c8ee" strokeWidth="2"><circle cx="24" cy="24" r="6" fill="none"/><line x1="24" y1="10" x2="24" y2="18"/><line x1="24" y1="30" x2="24" y2="38"/><line x1="10" y1="24" x2="18" y2="24"/><line x1="30" y1="24" x2="38" y2="24"/></g></svg>
    ),
    title: "Si KO y cambia estado",
    desc: "→ sub-flujo 'Gestor de Incidentes'"
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><ellipse cx="24" cy="24" rx="16" ry="10" stroke="#42c8ee" strokeWidth="2.5" fill="none"/><rect x="12" y="18" width="24" height="12" rx="4" stroke="#42c8ee" strokeWidth="2" fill="none"/><circle cx="24" cy="24" r="3" fill="#42c8ee"/></svg>
    ),
    title: "Gestor inserta evento, consulta 5 anteriores, llama a IA",
    desc: "(DeepSeek-Coder + RAG)"
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect x="10" y="10" width="28" height="28" rx="8" stroke="#42c8ee" strokeWidth="2.5" fill="none"/><path d="M18 24h12M24 18v12" stroke="#42c8ee" strokeWidth="2.5" strokeLinecap="round"/><circle cx="36" cy="36" r="4" fill="#42c8ee"/><text x="36" y="39" textAnchor="middle" fill="#0b0a14" fontSize="8" fontWeight="bold">WA</text></svg>
    ),
    title: "Envía WhatsApp al responsable",
    desc: "con descripción y sugerencia"
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="22" stroke="#42c8ee" strokeWidth="2.5" fill="none"/><rect x="14" y="18" width="20" height="12" rx="4" stroke="#42c8ee" strokeWidth="2" fill="none"/><text x="24" y="27" textAnchor="middle" fill="#42c8ee" fontSize="10" fontWeight="bold">ok</text><text x="24" y="35" textAnchor="middle" fill="#42c8ee" fontSize="8">INFO</text></svg>
    ),
    title: "Feedback ('OK', 'INFO') vuelve por Webhook",
    desc: "y actualiza evento."
  }
];

function Slide9({ onNavigate }) {
  return (
    <Container fluid className="home-about-section d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}
    id="slide9">
     
      <Container className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "100vh", maxWidth: 900 }}>
      <Slide direction="up" triggerOnce>
        <h1 className="slide1-title">Flujo Automatizado Propuesto</h1>
      </Slide>
        <Slide direction="up" triggerOnce>
          <div style={{
            background: "rgba(11, 10, 20, 0.85)",
            borderRadius: 18,
            boxShadow: "0 0 32px #42c8ee99, 0 0 8px #0b0a14",
            border: "2px solid #42c8ee",
            padding: "2.5rem 2.5rem 2rem 2.5rem",
            width: "100%",
            maxWidth: 700,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "2rem"
          }}>
            {pasos.map((paso, idx) => (
              <div key={idx} style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 22,
                marginBottom: idx !== pasos.length - 1 ? 32 : 0,
                width: "100%"
              }}>
                <div style={{
                  minWidth: 48,
                  height: 48,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative"
                }}>
                  <span style={{
                    position: "absolute",
                    left: -32,
                    top: 0,
                    fontSize: "2.1em",
                    fontWeight: 700,
                    color: "#42c8ee",
                    textShadow: "0 0 8px #42c8ee99"
                  }}>{idx + 1}</span>
                  {paso.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ color: "#42c8ee", fontWeight: 700, fontSize: "1.13em", marginBottom: 2 }}>{paso.title}</div>
                  <div style={{ color: "#fff", fontSize: "1.08em", whiteSpace: "pre-line" }}>{paso.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </Slide>
        <div className="slide3-back-agenda" onClick={() => onNavigate && onNavigate(2)} style={{ cursor: 'pointer', marginTop: 32 }}>
          <svg width="44" height="28" viewBox="0 0 44 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polyline points="8,20 22,8 36,20" stroke="#42c8ee" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" filter="url(#glow)" />
            <defs>
              <filter id="glow" x="0" y="0" width="44" height="28" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feDropShadow dx="0" dy="0" stdDeviation="2" flood-color="#42c8ee"/>
              </filter>
            </defs>
          </svg>
          <div style={{ color: '#42c8ee', fontWeight: 600, fontSize: '1em', marginTop: 2, textShadow: '0 0 8px #42c8ee' }}>
            Volver a Agenda
          </div>
        </div>
        <div className="slide2-line slide2-line-bottom" /> 
      </Container>
    </Container>
  );
}
<style>{` 
  .slide3-back-agenda {
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s;
}
.slide3-back-agenda:hover {
  transform: translateY(-6px) scale(1.08);
  filter: drop-shadow(0 0 12px #42c8ee);
}
`}
</style>
export default Slide9;

