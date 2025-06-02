import React from "react";
import { Container } from "react-bootstrap";
import { Slide } from "react-awesome-reveal";
import "../../styles/slide.css";

function Slide13({ onNavigate }) {
  return (
    <Container
      fluid
      className="home-about-section d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
     
      <Container
        id="slide13"
        className="d-flex flex-column align-items-center justify-content-center slide13-container"
        style={{ minHeight: "100vh", maxWidth: 1400 }}
      >
        <Slide direction="up" triggerOnce>
            <h1 className="slide1-title">KPIs & métricas </h1>
        </Slide>
          
          <Slide direction="up" triggerOnce>
            <div className="slide5-svg-container mt-3">
              <h4>Algo</h4>
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
          .slide13-container {
            padding: 1rem;
          }

          .slide13-title-container {
            margin-bottom: 2rem;
            text-align: center;
            width: 100%;
          }

          .slide13-title {
            font-size: 2em;
            font-weight: 600;
            color: #42c8ee;
            text-shadow: 0 0 10px #42c8ee;
            letter-spacing: 2px;
            display: inline-block;
          }

          .slide13-svg-container {
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

          .slide13-svg {
            max-width: 100%;
            height: auto;
          }

          /* Media queries para diferentes tamaños de pantalla */
          @media (max-width: 1200px) {
            .slide13-svg-container {
              padding: 2rem;
            }
            .slide13-title {
              font-size: 1.8em;
            }
          }

          @media (max-width: 992px) {
            .slide13-svg-container {
              padding: 1.5rem;
            }
            .slide13-title {
              font-size: 1.6em;
            }
          }

          @media (max-width: 768px) {
            .slide13-svg-container {
              padding: 1rem;
              margin: 0 0.5rem;
            }
            .slide13-title {
              font-size: 1.4em;
            }
          }

          @media (max-width: 576px) {
            .slide13-container {
              padding: 0.5rem;
            }
            .slide13-svg-container {
              padding: 0.8rem;
              border-radius: 15px;
            }
            .slide13-title {
              font-size: 1.2em;
              letter-spacing: 1px;
            }
          }

          /* Ajustes para pantallas muy pequeñas */
          @media (max-width: 400px) {
                .slide13-svg-container {
              padding: 0.5rem;
            }
            .slide13-title {
              font-size: 1.1em;
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

export default Slide13;
