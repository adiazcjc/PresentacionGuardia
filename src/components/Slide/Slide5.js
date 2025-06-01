import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import Typewriter from "typewriter-effect";
import { Slide } from "react-awesome-reveal";
import "../../styles/slide.css";

function Slide5() {
  return (
    <Container fluid className="home-about-section d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <Particle />
      <Container className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "100vh", maxWidth: 900 }}>
        <div style={{ marginBottom: "1.2rem" }}>
          <span style={{ fontSize: "1.2em", fontWeight: 600, color: "#42c8ee", textShadow: "0 0 10px #42c8ee, 0 0 1px #fff", letterSpacing: 1 }}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Arquitectura actual")
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
            maxWidth: 700,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}>
            {/* Diagrama SVG puro */}
            <svg width="600" height="340" style={{ maxWidth: "100%" }}>
              {/* Bloque App Sensores */}
              <rect x="30" y="40" width="160" height="110" rx="16" fill="none" stroke="#42c8ee" strokeWidth="3" />
              <text x="110" y="75" textAnchor="middle" fill="#fff" fontSize="1.25em" fontWeight="bold">C# App</text>
              <text x="110" y="100" textAnchor="middle" fill="#fff" fontSize="1.25em" fontWeight="bold">Sensores</text>
              {/* Icono monitor */}
              <rect x="80" y="110" width="60" height="22" rx="4" fill="none" stroke="#42c8ee" strokeWidth="2" />
              <rect x="100" y="130" width="20" height="3" rx="1.5" fill="#42c8ee" />
              <text x="110" y="145" textAnchor="middle" fill="#fff" fontSize="1em">SQL Server</text>

              {/* Bloque Dashboard */}
              <rect x="410" y="40" width="160" height="110" rx="16" fill="none" stroke="#42c8ee" strokeWidth="3" />
              <text x="490" y="75" textAnchor="middle" fill="#fff" fontSize="1.25em" fontWeight="bold">React</text>
              <text x="490" y="100" textAnchor="middle" fill="#fff" fontSize="1.25em" fontWeight="bold">Dashboard</text>
              {/* Icono dashboard */}
              <rect x="460" y="110" width="60" height="22" rx="4" fill="none" stroke="#42c8ee" strokeWidth="2" />
              <rect x="470" y="120" width="10" height="8" fill="#42c8ee" />
              <rect x="485" y="115" width="10" height="13" fill="#42c8ee" />
              <rect x="500" y="125" width="10" height="3" fill="#42c8ee" />

              {/* Bloque SQL Server (cilindro) */}
              <ellipse cx="310" cy="150" rx="32" ry="18" fill="none" stroke="#42c8ee" strokeWidth="3" />
              <rect x="278" y="150" width="64" height="40" rx="16" fill="none" stroke="#42c8ee" strokeWidth="3" />
              <ellipse cx="310" cy="190" rx="32" ry="18" fill="none" stroke="#42c8ee" strokeWidth="3" />
              <text x="310" y="175" textAnchor="middle" fill="#fff" fontSize="1.1em" fontWeight="bold">SQL Server</text>

              {/* Flecha SELECT */}
              <line x1="190" y1="95" x2="278" y2="95" stroke="#42c8ee" strokeWidth="3" markerEnd="url(#arrowhead)" />
              <line x1="342" y1="95" x2="410" y2="95" stroke="#42c8ee" strokeWidth="3" markerEnd="url(#arrowhead)" />
              <text x="310" y="85" textAnchor="middle" fill="#fff" fontSize="1em" fontWeight="bold">SELECT</text>

              {/* Flecha App Sensores -> SQL Server */}
              <line x1="110" y1="150" x2="278" y2="150" stroke="#42c8ee" strokeWidth="3" markerEnd="url(#arrowhead)" />

              {/* Flecha SQL Server -> Dashboard */}
              <line x1="342" y1="150" x2="410" y2="150" stroke="#42c8ee" strokeWidth="3" markerEnd="url(#arrowhead)" />

              {/* Flecha Incidente */}
              <path d="M 310 190 Q 310 260 570 260" stroke="#42c8ee" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
              <text x="400" y="250" textAnchor="middle" fill="#fff" fontSize="1em" fontWeight="bold">Incidente</text>

              {/* Flecha Dashboard -> Operador */}
              <line x1="490" y1="150" x2="490" y2="250" stroke="#42c8ee" strokeWidth="3" markerEnd="url(#arrowhead)" />

              {/* Bloque Operador (icono persona) */}
              <circle cx="490" cy="280" r="18" fill="none" stroke="#42c8ee" strokeWidth="3" />
              <rect x="478" y="298" width="24" height="10" rx="5" fill="#42c8ee" />
              <text x="490" y="330" textAnchor="middle" fill="#fff" fontSize="1.1em" fontWeight="bold">Operador</text>

              {/* Definición de flecha */}
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#42c8ee" />
                </marker>
              </defs>
            </svg>
          </div>
        </Slide>
      </Container>
    </Container>
  );
}

export default Slide5;
