import React from "react";
import { Container } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import Particle from "../Particle";
import { Slide } from "react-awesome-reveal";
import "../../styles/slide.css";

const agendaItems = [
  "Panorama del servicio",
  "Componentes actuales",
  "Arquitectura actual",
  "Flujo operativo actual",
  "Limitaciones & oportunidades",
  "Arquitectura futura (n8n + IA)",
  "Flujo automatizado propuesto",
  "Impacto en personal y costos",
  "KPIs & métricas",
  "Roadmap de implementación",
  "Preguntas"
];

function Slide2() {
  // Dividir la agenda en dos columnas
  const half = Math.ceil(agendaItems.length / 2);
  const col1 = agendaItems.slice(0, half);
  const col2 = agendaItems.slice(half);

  return (
    <Container fluid className="home-about-section d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <Particle />
      <Container className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "100vh", maxWidth: 900 }}>
        {/* Línea decorativa neón */}
        <div style={{ width: 180, height: 6, background: "linear-gradient(90deg, #42c8ee 0%, #fff 100%)", borderRadius: 8, marginBottom: 18, boxShadow: "0 0 18px #42c8ee" }} />
        {/* Título con efecto typewriter */}
        <div style={{ marginBottom: "1.2rem" }}>
          <span style={{ fontSize: "1.5em", fontWeight: 700, color: "#42c8ee", textShadow: "0 0 18px #42c8ee, 0 0 2px #fff", letterSpacing: 2, textTransform: "uppercase" }}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("AGENDA")
                  .start();
              }}
            />
          </span>
        </div>
        {/* Lista futurista animada en dos columnas */}
        <Slide direction="up" triggerOnce>
          <div style={{
            background: "rgba(11, 10, 20, 0.85)",
            borderRadius: 18,
            boxShadow: "0 0 32px #42c8ee99, 0 0 8px #0b0a14",
            border: "2px solid #42c8ee",
            padding: "2rem 2.5rem",
            width: "100%",
            maxWidth: 700,
            margin: "0 auto"
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 40 }}>
              <ol style={{ listStyle: "decimal", paddingLeft: 24, margin: 0, flex: 1, color: "#fff", fontSize: "1.15em", fontWeight: 500, textShadow: "0 2px 8px #0b0a15", textAlign: "left" }}>
                {col1.map((item, idx) => (
                  <li key={idx} style={{ margin: "1.1em 0", textAlign: "left", position: "relative" }}>
                    <span style={{ color: "#42c8ee", position: "absolute", left: -32, minWidth: 28, textAlign: "right", fontWeight: 700 }}>{idx + 1}.</span>
                    <span style={{ marginLeft: 12 }}>{item}</span>
                  </li>
                ))}
              </ol>
              <ol start={col1.length + 1} style={{ listStyle: "decimal", paddingLeft: 24, margin: 0, flex: 1, color: "#fff", fontSize: "1.15em", fontWeight: 500, textShadow: "0 2px 8px #0b0a15", textAlign: "left" }}>
                {col2.map((item, idx) => (
                  <li key={idx} style={{ margin: "1.1em 0", textAlign: "left", position: "relative" }}>
                    <span style={{ color: "#42c8ee", position: "absolute", left: -32, minWidth: 28, textAlign: "right", fontWeight: 700 }}>{col1.length + idx + 1}.</span>
                    <span style={{ marginLeft: 12 }}>{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Slide>
        {/* Línea decorativa neón */}
        <div style={{ width: 180, height: 6, background: "linear-gradient(90deg, #fff 0%, #42c8ee 100%)", borderRadius: 8, marginTop: 18, boxShadow: "0 0 18px #42c8ee" }} />
      </Container>
    </Container>
  );
}

export default Slide2;
