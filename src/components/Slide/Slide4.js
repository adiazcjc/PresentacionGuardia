import React from "react";
import { Container } from "react-bootstrap";
import { MdSensors, MdDashboard } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import "../../styles/slide.css";
import { Slide } from "react-awesome-reveal";

function Slide4({ onNavigate }) {
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

export default Slide4;
