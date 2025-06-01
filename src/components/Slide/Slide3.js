import React from "react";
import { Container } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import Particle from "../Particle";
import "../../styles/slide.css";

function Slide3() {
  return (
    <Container fluid className="home-about-section d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <Particle />
      <Container className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "100vh", maxWidth: 700 }}>
        <div style={{ marginBottom: "1.2rem" }}>
          <span style={{ fontSize: "1.2em", fontWeight: 600, color: "#42c8ee", textShadow: "0 0 10px #42c8ee, 0 0 1px #fff", letterSpacing: 1 }}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Panorama del servicio")
                  .start();
              }}
            />
          </span>
        </div>
        <div className="futuristic-table-wrapper futuristic-table-animated" style={{ padding: "1.2rem 0.7rem", maxWidth: 600 }}>
          <table className="futuristic-table" style={{ fontSize: "0.98em" }}>
            <thead>
              <tr>
                <th style={{ fontSize: "1em" }}>Dimensión</th>
                <th style={{ fontSize: "1em" }}>Detalle</th>
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
      </Container>
    </Container>
  );
}

export default Slide3;
