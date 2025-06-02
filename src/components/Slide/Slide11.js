import React from "react";
import { Container } from "react-bootstrap";
import { Slide } from "react-awesome-reveal";

const data = [
  ["Q2 ‘25", "Diseñar flujos n8n básicos (Ping, DB, HTTP).\nPlantilla SQL \"Eventos\"."],
  ["Q3 ‘25", "IA Nivel 1 (clasificación) · Canal WhatsApp\nDashboard Grafana"],
  ["Q4 ‘25", "IA Nivel 2 (respuesta contextual + RAG)\nRedis vector store"],
  ["Q1 ‘26", "IA Nivel 3 (acciones remotas) · Reducción\noperadores"],
];

function Slide11({ onNavigate }) {
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
        `}</style>
      </Container>
    </Container>
  );
}

export default Slide11;
