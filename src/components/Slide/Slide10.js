import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import Typewriter from "typewriter-effect";
import { Slide } from "react-awesome-reveal";

const data = [
  ["Operadores", "8", "4", "-50 %"],
  ["Escalados\nmanuales/mes", "320", "80", "-75 %"],
  ["MTTR\npromedio", "18 min", "12 min", "-33 %"],
];

function Slide10() {
  return (
    <Container fluid className="home-about-section d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <Particle />
      <Container className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "100vh", maxWidth: 900 }}>
        <div style={{ marginBottom: "1.2rem" }}>
          <span style={{ fontSize: "1.5em", fontWeight: 700, color: "#42c8ee", textShadow: "0 0 18px #42c8ee, 0 0 2px #fff", letterSpacing: 2 }}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Impacto en personal & costos")
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
                    textAlign: "left"
                  }}>Métrica</th>
                  <th style={{
                    borderBottom: "3px solid #42c8ee",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "1.18em",
                    padding: "0.7em 0.5em",
                    background: "rgba(11, 10, 20, 0.7)",
                    letterSpacing: 1
                  }}>Actual</th>
                  <th style={{
                    borderBottom: "3px solid #42c8ee",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "1.18em",
                    padding: "0.7em 0.5em",
                    background: "rgba(11, 10, 20, 0.7)",
                    letterSpacing: 1
                  }}>Con flujos n8n<br/>+ IA</th>
                  <th style={{
                    borderBottom: "3px solid #42c8ee",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "1.18em",
                    padding: "0.7em 0.5em",
                    background: "rgba(11, 10, 20, 0.7)",
                    letterSpacing: 1
                  }}>Variación</th>
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
                          textAlign: j === 0 ? "left" : "center",
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
                {/* Fila ahorro anual */}
                <tr>
                  <td style={{
                    borderTop: "3px solid #42c8ee",
                    color: "#42c8ee",
                    fontWeight: 700,
                    fontSize: "1.13em",
                    padding: "0.7em 0.5em",
                    background: "rgba(11, 10, 20, 0.7)",
                    textAlign: "left"
                  }}>Ahorro anual</td>
                  <td style={{
                    borderTop: "3px solid #42c8ee",
                    background: "rgba(11, 10, 20, 0.7)",
                    fontWeight: 700,
                    fontSize: "1.13em",
                    textAlign: "center"
                  }}>-</td>
                  <td style={{
                    borderTop: "3px solid #42c8ee",
                    background: "rgba(11, 10, 20, 0.7)",
                    fontWeight: 700,
                    fontSize: "1.13em",
                    color: "#42c8ee",
                    textAlign: "center"
                  }}>≈ US$ 48 k</td>
                  <td style={{
                    borderTop: "3px solid #42c8ee",
                    background: "rgba(11, 10, 20, 0.7)",
                    fontWeight: 700,
                    fontSize: "1.13em",
                    textAlign: "center"
                  }}></td>
                </tr>
              </tbody>
            </table>
          </div>
        </Slide>
      </Container>
    </Container>
  );
}

export default Slide10;
