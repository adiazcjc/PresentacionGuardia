import React from "react";
import { Container } from "react-bootstrap";
import { Slide } from "react-awesome-reveal";

const data = [
  ["Q2 ‘25", "Diseñar flujos n8n básicos (Ping, DB, HTTP).\nPlantilla SQL \"Eventos\"."],
  ["Q3 ‘25", "IA Nivel 1 (clasificación) · Canal WhatsApp\nDashboard Grafana"],
  ["Q4 ‘25", "IA Nivel 2 (respuesta contextual + RAG)\nRedis vector store"],
  ["Q1 ‘26", "IA Nivel 3 (acciones remotas) · Reducción\noperadores"],
];

function Slide11() {
  return (
    <Container fluid className="home-about-section d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}
    id="slide11">
   
      <Container className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "100vh", maxWidth: 900 }}>
      <Slide direction="up" triggerOnce>
        <h1 className="slide1-title">Roadmap de implementación</h1>
      </Slide>
      <Slide direction="up" triggerOnce>
          <div className="futuristic-table-wrapper futuristic-table-animated mt-3 slide11-table-wrapper" style={{ padding: "1.2rem 0.7rem", maxWidth: 800 }}>
            <table className="futuristic-table slide11-table" style={{ fontSize: "0.98em" }}>
              <thead>
                <tr>
                  <th style={{ fontSize: "1em", textAlign: "left", width: "22%" }}>TRIMESTRE</th>
                  <th style={{ fontSize: "1em", textAlign: "left" }}>ENTREGABLE</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        style={{
                          textAlign: "left",
                          fontWeight: j === 0 ? 700 : 500,
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
          .slide11-table-wrapper {
            width: 100%;
            overflow-x: auto;
            max-width: 800px;
          }
          .slide11-table {
            width: 100%;
            min-width: 340px;
            font-size: 0.98em;
            border-collapse: collapse;
          }
          .slide11-table th, .slide11-table td {
            padding: 0.7em 0.5em;
            text-align: left;
            white-space: pre-line;
            border: none;
          }
          .slide11-table th {
            font-size: 1em;
            color: #42c8ee;
            font-weight: 700;
            background: rgba(11, 10, 20, 0.7);
            letter-spacing: 1px;
          }
          .slide11-table tr {
            transition: background 0.2s, box-shadow 0.2s, color 0.2s;
          }
          .slide11-table tbody tr:hover {
            background: rgba(66,200,238,0.13);
            box-shadow: 0 0 10px #42c8ee55;
            color: #42c8ee;
          }
          @media (max-width: 700px) {
            .slide11-table-wrapper {
              padding: 0.7rem 0.2rem;
              max-width: 99vw;
            }
            .slide11-table {
              font-size: 0.95em;
              min-width: 260px;
            }
            .slide11-table th, .slide11-table td {
              padding: 0.5em 0.3em;
            }
          }
        `}</style>
      </Container>
    </Container>
  );
}

export default Slide11;
