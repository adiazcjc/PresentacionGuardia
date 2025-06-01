import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import Typewriter from "typewriter-effect";
import { Slide } from "react-awesome-reveal";

const data = [
  ["Q2 ‘25", "Diseñar flujos n8n básicos (Ping, DB, HTTP).\nPlantilla SQL \"Eventos\"."],
  ["Q3 ‘25", "IA Nivel 1 (clasificación) · Canal WhatsApp\nDashboard Grafana"],
  ["Q4 ‘25", "IA Nivel 2 (respuesta contextual + RAG)\nRedis vector store"],
  ["Q1 ‘26", "IA Nivel 3 (acciones remotas) · Reducción\noperadores"],
];

function Slide11() {
  return (
    <Container fluid className="home-about-section d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <Particle />
      <Container className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "100vh", maxWidth: 900 }}>
        <div style={{ marginBottom: "1.2rem" }}>
          <span style={{ fontSize: "1.5em", fontWeight: 700, color: "#42c8ee", textShadow: "0 0 18px #42c8ee, 0 0 2px #fff", letterSpacing: 2 }}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("ROADMAP DE IMPLEMENTACIÓN")
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
            maxWidth: 800,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}>
            <table style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "1.18em",
              color: "#fff",
              boxShadow: "0 0 12px #42c8ee55"
            }}>
              <thead>
                <tr>
                  <th style={{
                    borderBottom: "3px solid #42c8ee",
                    color: "#42c8ee",
                    fontWeight: 700,
                    fontSize: "1.18em",
                    padding: "0.7em 0.5em",
                    background: "rgba(11, 10, 20, 0.7)",
                    letterSpacing: 1,
                    textAlign: "left",
                    width: "22%"
                  }}>TRIMESTRE</th>
                  <th style={{
                    borderBottom: "3px solid #42c8ee",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "1.18em",
                    padding: "0.7em 0.5em",
                    background: "rgba(11, 10, 20, 0.7)",
                    letterSpacing: 1,
                    textAlign: "left"
                  }}>ENTREGABLE</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        style={{
                          borderBottom: i < data.length - 1 ? "2px solid #42c8ee55" : "2px solid #42c8ee",
                          padding: "0.7em 0.5em",
                          textAlign: "left",
                          fontWeight: j === 0 ? 700 : 500,
                          whiteSpace: "pre-line",
                          background: i % 2 === 0 ? "rgba(66,200,238,0.04)" : "rgba(11,10,20,0.2)",
                          fontSize: "1.08em"
                        }}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Slide>
      </Container>
    </Container>
  );
}

export default Slide11;
