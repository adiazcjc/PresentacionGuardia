import React from "react";
import { Container } from "react-bootstrap";
import "../../styles/slide.css";
import { Slide } from "react-awesome-reveal";

function Slide3({ onNavigate }) {
  return (
    <Container fluid className="home-about-section d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}
    id="slide3">
    
      <Container className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "100vh", maxWidth: 700 }}>
      <Slide direction="up" triggerOnce>
        <h1 className="slide1-title">Panorama del servicio </h1>
      </Slide>
      <Slide direction="up" triggerOnce>
        <div className="futuristic-table-wrapper futuristic-table-animated slide3-table-wrapper mt-3">
          <table className="futuristic-table slide3-table">
            <thead>
              <tr>
                <th>Dimensión</th>
                <th>Detalle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cobertura</td>
                <td>123 h/semana (L-V 17-08 h)<br/>+ fines de semana/feriados</td>
              </tr>
              <tr>
                <td>Activos</td>
                <td>≈ 230 (servidores, BD, sitios, APIs, enlaces)</td>
              </tr>
              <tr>
                <td>Objetivo</td>
                <td>↓ MTTD, ↓ MTTR, continuidad ≥ 99,9 %</td>
              </tr>
              <tr>
                <td>Equipo</td>
                <td>5 operadores + 2 relevos + 1 coordinador</td>
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
          .slide3-title-box {
            margin-bottom: 1.2rem;
            width: 100%;
            display: flex;
            justify-content: center;
          }
          .slide3-title {
            font-size: 1.2em;
            font-weight: 600;
            color: #42c8ee;
            text-shadow: 0 0 10px #42c8ee, 0 0 1px #d1d1d1;
            letter-spacing: 1px;
            text-align: center;
          }
          .slide3-table-wrapper {
            padding: 1.2rem 0.7rem;
            max-width: 600px;
            width: 100%;
            overflow-x: auto;
          }
          .slide3-table {
            width: 100%;
            min-width: 340px;
            font-size: 0.98em;
            border-collapse: collapse;
          }
          .slide3-table th, .slide3-table td {
            padding: 0.7em 0.5em;
            text-align: left;
            white-space: pre-line;
          }
          @media (max-width: 700px) {
            .slide3-title {
              font-size: 1em;
            }
            .slide3-table-wrapper {
              padding: 0.7rem 0.2rem;
              max-width: 99vw;
            }
            .slide3-table {
              font-size: 0.95em;
              min-width: 260px;
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

export default Slide3;
