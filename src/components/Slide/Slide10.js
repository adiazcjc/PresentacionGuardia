import React from "react";
import { Container } from "react-bootstrap";
import { Slide } from "react-awesome-reveal";

const data = [
  ["Operadores", "8", "4", "-50 %"],
  ["Escalados\nmanuales/mes", "320", "80", "-75 %"],
  ["MTTR\npromedio", "18 min", "12 min", "-33 %"],
];

function Slide10() {
  return (
    <Container fluid className="home-about-section d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}
    id="slide10">
     
      <Container className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "100vh", maxWidth: 900 }}>
      <Slide direction="up" triggerOnce>
        <h1 className="slide1-title">Impacto en personal & costos</h1>
      </Slide>
        <Slide direction="up" triggerOnce>
          <div className="futuristic-table-wrapper futuristic-table-animated mt-3 slide10-table-wrapper" style={{ padding: "1.2rem 0.7rem", maxWidth: 800 }}>
            <table className="futuristic-table slide10-table" style={{ fontSize: "0.98em" }}>
              <thead>
                <tr>
                  <th style={{ fontSize: "1em", textAlign: "left" }}>Métrica</th>
                  <th style={{ fontSize: "1em" }}>Actual</th>
                  <th style={{ fontSize: "1em" }}>Con flujos n8n + IA</th>
                  <th style={{ fontSize: "1em" }}>Variación</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        style={{
                          textAlign: j === 0 ? "left" : "center",
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
                {/* Fila ahorro anual */}
                <tr>
                  <td style={{
                    color: "#42c8ee",
                    fontWeight: 700,
                    fontSize: "1.13em",
                    textAlign: "left"
                  }}>Ahorro anual</td>
                  <td style={{
                    fontWeight: 700,
                    fontSize: "1.13em",
                    textAlign: "center"
                  }}>-</td>
                  <td style={{
                    fontWeight: 700,
                    fontSize: "1.13em",
                    color: "#42c8ee",
                    textAlign: "center"
                  }}>≈ US$ 48 k</td>
                  <td style={{
                    fontWeight: 700,
                    fontSize: "1.13em",
                    textAlign: "center"
                  }}></td>
                </tr>
              </tbody>
            </table>
          </div>
        </Slide>
        <div className="slide2-line slide2-line-bottom" /> 
        <style>{`
          .slide10-table-wrapper {
            width: 100%;
            overflow-x: auto;
            max-width: 800px;
          }
          .slide10-table {
            width: 100%;
            min-width: 340px;
            font-size: 0.98em;
            border-collapse: collapse;
          }
          .slide10-table th, .slide10-table td {
            padding: 0.7em 0.5em;
            text-align: left;
            white-space: pre-line;
            border: none;
          }
          .slide10-table th {
            font-size: 1em;
            color: #42c8ee;
            font-weight: 700;
            background: rgba(11, 10, 20, 0.7);
            letter-spacing: 1px;
          }
          .slide10-table tr {
            transition: background 0.2s, box-shadow 0.2s, color 0.2s;
          }
          .slide10-table tbody tr:hover {
            background: rgba(66,200,238,0.13);
            box-shadow: 0 0 10px #42c8ee55;
            color: #42c8ee;
          }
          @media (max-width: 700px) {
            .slide10-table-wrapper {
              padding: 0.7rem 0.2rem;
              max-width: 99vw;
            }
            .slide10-table {
              font-size: 0.95em;
              min-width: 260px;
            }
            .slide10-table th, .slide10-table td {
              padding: 0.5em 0.3em;
            }
          }
        `}</style>
      </Container>
    </Container>
  );
}

export default Slide10;
