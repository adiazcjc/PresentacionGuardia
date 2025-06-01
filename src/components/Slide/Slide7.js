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
          <div className="futuristic-table-wrapper futuristic-table-animated mt-3 slide7-table-wrapper" style={{ padding: "1.2rem 0.7rem", maxWidth: 800 }}>
            <table className="futuristic-table slide7-table" style={{ fontSize: "0.98em" }}>
              <thead>
                <tr>
                  <th style={{ fontSize: "1em" }}>Área</th>
                  <th style={{ fontSize: "1em" }}>Situación actual</th>
                  <th style={{ fontSize: "1em" }}>Oportunidad</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        style={{
                          fontWeight: 500,
                          whiteSpace: "pre-line",
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
        <style>{`
          .slide7-table-wrapper {
            width: 100%;
            overflow-x: auto;
            max-width: 800px;
          }
          .slide7-table {
            width: 100%;
            min-width: 340px;
            font-size: 0.98em;
            border-collapse: collapse;
          }
          .slide7-table th, .slide7-table td {
            padding: 0.7em 0.5em;
            text-align: left;
            white-space: pre-line;
            border: none;
          }
          .slide7-table th {
            font-size: 1em;
            color: #42c8ee;
            font-weight: 700;
            background: rgba(11, 10, 20, 0.7);
            letter-spacing: 1px;
          }
          .slide7-table tr {
            transition: background 0.2s, box-shadow 0.2s, color 0.2s;
          }
          .slide7-table tbody tr:hover {
            background: rgba(66,200,238,0.13);
            box-shadow: 0 0 10px #42c8ee55;
            color: #42c8ee;
          }
          @media (max-width: 700px) {
            .slide7-table-wrapper {
              padding: 0.7rem 0.2rem;
              max-width: 99vw;
            }
            .slide7-table {
              font-size: 0.95em;
              min-width: 260px;
            }
            .slide7-table th, .slide7-table td {
              padding: 0.5em 0.3em;
            }
          }
        `}</style>
      </Container>
    </Container>
  );
}

export default Slide7;
