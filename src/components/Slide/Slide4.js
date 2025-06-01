import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import Typewriter from "typewriter-effect";
import { MdSensors, MdDashboard } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import "../../styles/slide.css";

function Slide4() {
  return (
    <Container fluid className="home-about-section d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <Particle />
      <Container className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "100vh", maxWidth: 700 }}>
        <div style={{ marginBottom: "1.2rem" }}>
          <span style={{ fontSize: "1.2em", fontWeight: 600, color: "#42c8ee", textShadow: "0 0 10px #42c8ee, 0 0 1px #fff", letterSpacing: 1 }}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Componentes actuales")
                  .start();
              }}
            />
          </span>
        </div>
        <div className="futuristic-table-wrapper futuristic-table-animated" style={{ padding: "1.2rem 0.7rem", maxWidth: 600 }}>
          <table className="futuristic-table" style={{ fontSize: "0.98em" }}>
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
      </Container>
    </Container>
  );
}

export default Slide4;
