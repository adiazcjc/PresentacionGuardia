import React from "react";
import { Container } from "react-bootstrap";
import { Slide } from "react-awesome-reveal";
import "../../styles/slide.css";

function Slide5() {
  return (
    <Container
      fluid
      className="home-about-section d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
     
      <Container
        id="slide5"
        className="d-flex flex-column align-items-center justify-content-center slide5-container"
        style={{ minHeight: "100vh", maxWidth: 1400 }}
      >
        <Slide direction="up" triggerOnce>
          <h1 className="slide1-title">Arquitectura actual </h1>
        </Slide>
          
          <Slide direction="up" triggerOnce>
            <div className="slide5-svg-container mt-3">
              <svg viewBox="0 0 1200 600" width="100%" height="600" className="slide5-svg">
                {/* Caja Sensores */}
                <rect x="60" y="120" width="250" height="160" rx="18" fill="none" stroke="#42c8ee" strokeWidth="4" />
                <text x="185" y="170" textAnchor="middle" fill="#fff" fontSize="2.2em" fontWeight="bold">C# App</text>
                <text x="185" y="205" textAnchor="middle" fill="#fff" fontSize="2.2em" fontWeight="bold">Sensores</text>
                <rect x="110" y="230" width="150" height="30" rx="6" fill="none" stroke="#42c8ee" strokeWidth="2" />
                <rect x="160" y="260" width="50" height="6" rx="3" fill="#42c8ee" />
                <text x="185" y="285" textAnchor="middle" fill="#fff" fontSize="1.5em">SQL Server</text>

                {/* SQL Server (cilindro) */}
                <ellipse cx="460" cy="300" rx="60" ry="30" fill="none" stroke="#42c8ee" strokeWidth="4" />
                <rect x="400" y="300" width="120" height="90" rx="20" fill="none" stroke="#42c8ee" strokeWidth="4" />
                <ellipse cx="460" cy="390" rx="60" ry="30" fill="none" stroke="#42c8ee" strokeWidth="4" />
                <text x="460" y="350" textAnchor="middle" fill="#fff" fontSize="2em" fontWeight="bold">SQL Server</text>

                {/* Caja Dashboard */}
                <rect x="880" y="120" width="250" height="160" rx="18" fill="none" stroke="#42c8ee" strokeWidth="4" />
                <text x="1005" y="170" textAnchor="middle" fill="#fff" fontSize="2.2em" fontWeight="bold">React</text>
                <text x="1005" y="205" textAnchor="middle" fill="#fff" fontSize="2.2em" fontWeight="bold">Dashboard</text>
                <rect x="940" y="230" width="130" height="30" rx="6" fill="none" stroke="#42c8ee" strokeWidth="2" />
                <rect x="960" y="245" width="24" height="12" fill="#42c8ee" />
                <rect x="1000" y="240" width="24" height="24" fill="#42c8ee" />
                <rect x="1040" y="258" width="24" height="6" fill="#42c8ee" />

                {/* Flechas */}
                <line x1="310" y1="180" x2="880" y2="180" stroke="#42c8ee" strokeWidth="4" markerEnd="url(#arrowhead)" />
                <text x="600" y="160" textAnchor="middle" fill="#fff" fontSize="1.8em">SELECT</text>

                <line x1="185" y1="285" x2="400" y2="320" stroke="#42c8ee" strokeWidth="4" markerEnd="url(#arrowhead)" />
                <line x1="520" y1="320" x2="880" y2="250" stroke="#42c8ee" strokeWidth="4" markerEnd="url(#arrowhead)" />
                <path d="M 460 390 Q 460 500 1120 500" stroke="#42c8ee" strokeWidth="4" fill="none" markerEnd="url(#arrowhead)" />
                <text x="790" y="485" textAnchor="middle" fill="#fff" fontSize="1.8em">Incidente</text>
                <line x1="1005" y1="290" x2="1005" y2="440" stroke="#42c8ee" strokeWidth="4" markerEnd="url(#arrowhead)" />

                {/* Operador */}
                <circle cx="1005" cy="480" r="35" fill="none" stroke="#42c8ee" strokeWidth="4" />
                <rect x="975" y="520" width="60" height="16" rx="8" fill="#42c8ee" />
                <text x="1005" y="550" textAnchor="middle" fill="#fff" fontSize="2em" fontWeight="bold">Operador</text>

                {/* Flecha definiciones */}
                <defs>
                  <marker id="arrowhead" markerWidth="12" markerHeight="10" refX="12" refY="5" orient="auto">
                    <polygon points="0 0, 12 5, 0 10, 3 5" fill="#42c8ee" />
                  </marker>
                </defs>
              </svg>
            </div>
          </Slide>
          <div className="slide2-line slide2-line-bottom" /> 

        <style>{`
          .slide5-container {
            padding: 1rem;
          }

          .slide5-title-container {
            margin-bottom: 2rem;
            text-align: center;
            width: 100%;
          }

          .slide5-title {
            font-size: 2em;
            font-weight: 600;
            color: #42c8ee;
            text-shadow: 0 0 10px #42c8ee;
            letter-spacing: 2px;
            display: inline-block;
          }

          .slide5-svg-container {
            background: rgba(11, 10, 20, 0.85);
            border-radius: 20px;
            box-shadow: 0 0 24px #42c8ee99;
            border: 2px solid #42c8ee;
            padding: 2.5rem;
            width: 100%;
            max-width: 1000px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            overflow: hidden;
          }

          .slide5-svg {
            max-width: 100%;
            height: auto;
          }

          /* Media queries para diferentes tamaños de pantalla */
          @media (max-width: 1200px) {
            .slide5-svg-container {
              padding: 2rem;
            }
            .slide5-title {
              font-size: 1.8em;
            }
          }

          @media (max-width: 992px) {
            .slide5-svg-container {
              padding: 1.5rem;
            }
            .slide5-title {
              font-size: 1.6em;
            }
          }

          @media (max-width: 768px) {
            .slide5-svg-container {
              padding: 1rem;
              margin: 0 0.5rem;
            }
            .slide5-title {
              font-size: 1.4em;
            }
          }

          @media (max-width: 576px) {
            .slide5-container {
              padding: 0.5rem;
            }
            .slide5-svg-container {
              padding: 0.8rem;
              border-radius: 15px;
            }
            .slide5-title {
              font-size: 1.2em;
              letter-spacing: 1px;
            }
          }

          /* Ajustes para pantallas muy pequeñas */
          @media (max-width: 400px) {
            .slide5-svg-container {
              padding: 0.5rem;
            }
            .slide5-title {
              font-size: 1.1em;
            }
          }
        `}</style>
      </Container>
    </Container>
  );
}

export default Slide5;
