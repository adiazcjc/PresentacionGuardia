import React from "react";
import { Container } from "react-bootstrap";
import { MdSensors, MdDashboard } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import "../../styles/slide.css";
import { Slide } from "react-awesome-reveal";

function Slide4() {
  return (
    <Container fluid className="home-about-section d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}
    id="slide4">
    
      <Container className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "100vh", maxWidth: 700 }}>
      <Slide direction="up" triggerOnce>
        <h1 className="slide1-title">Componentes actuales </h1>
      </Slide>
      <Slide direction="up" triggerOnce>
        <div className="futuristic-table-wrapper futuristic-table-animated mt-3 slide4-table-wrapper" style={{ padding: "1.2rem 0.7rem", maxWidth: 600 }}>
          <table className="futuristic-table slide4-table" style={{ fontSize: "0.98em" }}>
            <thead>
              <tr>
                <th style={{ fontSize: "1em" }}>#</th>
                <th style={{ fontSize: "1em" }}>Componente</th>
                <th style={{ fontSize: "1em" }}>Tecnologías</th>
                <th style={{ fontSize: "1em" }}>Rol</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td style={{ display: "flex", alignItems: "center", gap: 7 }}>
                  <MdSensors className="icon-neon" size={18} /> App Sensores
                </td>
                <td>C# (.NET) · SQL Server</td>
                <td>Ejecuta controles (ping, DB, web, APIs, enlaces), valora criticidad y graba eventos.</td>
              </tr>
              <tr>
                <td>2</td>
                <td style={{ display: "flex", alignItems: "center", gap: 7 }}>
                  <MdDashboard className="icon-neon" size={18} /> Dashboard
                </td>
                <td>React.js · C# API</td>
                <td>Muestra estados en tiempo real, históricos, KPIs.</td>
              </tr>
              <tr>
                <td>3</td>
                <td style={{ display: "flex", alignItems: "center", gap: 7 }}>
                  <FaUserFriends className="icon-neon" size={18} /> Operador
                </td>
                <td>8 personas</td>
                <td>Vigila dashboard, escala, abre reclamos y hace seguimiento</td>
              </tr>
            </tbody>
          </table>
        </div>
        </Slide>
        <div className="slide2-line slide2-line-bottom" /> 
        <style>{`
          .slide4-table-wrapper {
            width: 100%;
            overflow-x: auto;
            max-width: 600px;
          }
          .slide4-table {
            width: 100%;
            min-width: 340px;
            font-size: 0.98em;
            border-collapse: collapse;
          }
          .slide4-table th, .slide4-table td {
            padding: 0.7em 0.5em;
            text-align: left;
            white-space: pre-line;
          }
          @media (max-width: 700px) {
            .slide4-table-wrapper {
              padding: 0.7rem 0.2rem;
              max-width: 99vw;
            }
            .slide4-table {
              font-size: 0.95em;
              min-width: 260px;
            }
            .slide4-table th, .slide4-table td {
              padding: 0.5em 0.3em;
            }
          }
        `}</style>
      </Container>
    </Container>
  );
}

export default Slide4;
