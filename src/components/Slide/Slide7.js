import React from "react";
import { Container } from "react-bootstrap";  
import { Slide } from "react-awesome-reveal";

const data = [
  ["Escalamiento", "Manual", "Workflows n8n"],
  ["Mensajería", "Teléfono / Teams", "WhatsApp / Telegram\nc/ Evolution API"],
  ["Contexto", "Sin histórico\nen mensaje", "RAG + IA"],
  ["Costes", "8 operadores", "Reducción 40-50 %"],
  ["Modularidad", "App monolítica", "Sensores como flujos\nn8n separados"],
];

function Slide7() {
  return (
    <Container fluid className="home-about-section d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}
    id="slide7">

      <Container className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "100vh", maxWidth: 900 }}>
      <Slide direction="up" triggerOnce>
        <h1 className="slide1-title">Limitaciones & Oportunidades</h1>
      </Slide>
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
            alignItems: "center",
            marginTop: "2rem"
          }} >
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
                    border: "2px solid #42c8ee",
                    color: "#42c8ee",
                    fontWeight: 700,
                    fontSize: "1.18em",
                    padding: "0.7em 0.5em",
                    background: "rgba(11, 10, 20, 0.7)",
                    letterSpacing: 1
                  }}>Área</th>
                  <th style={{
                    border: "2px solid #42c8ee",
                    color: "#42c8ee",
                    fontWeight: 700,
                    fontSize: "1.18em",
                    padding: "0.7em 0.5em",
                    background: "rgba(11, 10, 20, 0.7)",
                    letterSpacing: 1
                  }}>Situación actual</th>
                  <th style={{
                    border: "2px solid #42c8ee",
                    color: "#42c8ee",
                    fontWeight: 700,
                    fontSize: "1.18em",
                    padding: "0.7em 0.5em",
                    background: "rgba(11, 10, 20, 0.7)",
                    letterSpacing: 1
                  }}>Oportunidad</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        style={{
                          border: "2px solid #42c8ee",
                          padding: "0.7em 0.5em",
                          textAlign: j === 0 ? "left" : "center",
                          fontWeight: 500,
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
        <div className="slide2-line slide2-line-bottom" /> 
      </Container>
    </Container>
  );
}

export default Slide7;
