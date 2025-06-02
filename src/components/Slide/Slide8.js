import React from "react";
import { Container } from "react-bootstrap";
import { Slide } from "react-awesome-reveal";
import arqfutura from "../../assets/arqfutura.png";

function Slide8({ onNavigate }) {
  return (
    <Container fluid className="home-about-section d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}
    id="slide8">
      
      <Container className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "100vh", maxWidth: 1200 }}>
      <Slide direction="up" triggerOnce>
        <h1 className="slide1-title">Arquitectura Futura (Fase 1 – Sensores n8n)</h1>
      </Slide>
        <Slide direction="up" triggerOnce>
          <div className="slide8-responsive-box" style={{
            background: "rgba(11, 10, 20, 0.85)",
            borderRadius: 18,
            boxShadow: "0 0 32px #42c8ee99, 0 0 8px #0b0a14",
            border: "2px solid #42c8ee",
            padding: "2.5rem 2.5rem 2rem 2.5rem",
            width: "100%",
            maxWidth: 1100,
            margin: "0 auto",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            gap: 36,
            marginTop: "2rem"
          }}>
            {/* Diagrama principal */}
            <div style={{ flex: 2, minWidth: 600, display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src={arqfutura} alt="Arquitectura Futura" className="slide8-arqfutura" />
            </div>
            {/* Claves a la derecha */}
            <div style={{ flex: 1, minWidth: 260, marginLeft: 32 }}>
              <div style={{ color: "#42c8ee", fontWeight: 700, fontSize: "1.18em", marginBottom: 10 }}>Claves</div>
              <ul style={{ color: "#fff", fontSize: "1.05em", marginBottom: 0, textAlign: "left", paddingleft: "0.5em" }}>
                <li>Cada sensor = <span style={{ color: "#42c8ee", fontWeight: 600 }}>flujo n8n independiente</span></li>
                <li>Nodos <span style={{ color: "#42c8ee", fontWeight: 600 }}>Execute Command / HTTP / DB</span> en n8n hacen pruebas</li>
                <li>Resultado → tabla <span style={{ color: "#42c8ee", fontWeight: 600 }}>Eventos</span></li>
                <li>Sub-flujo <span style={{ color: "#42c8ee", fontWeight: 600 }}>&quot;Gestor de incidentes&quot;</span> reacciona via Webhook interno cuando un INSERT cambia Status.</li>
                <li>IA genera texto contextual a partir de Redis + últimos eventos y envía por</li>
                <li><span style={{ color: "#fff" }}>Cada sensor = flujo n8n independiente con Cron trigger.</span></li>
                <li><span style={{ color: "#fff" }}>Nodos <span style={{ color: "#42c8ee", fontWeight: 600 }}>Execute Command / HTTP / DB</span> en n8n hacen las pruebas.</span></li>
                <li><span style={{ color: "#fff" }}>Resultado → tabla <span style={{ color: "#42c8ee", fontWeight: 600 }}>Eventos</span>.</span></li>
              </ul>
            </div>
          </div>
          {/* Bullets abajo */}
          <style>{`
            @media (max-width: 900px) {
              .slide8-responsive-box {
                flex-direction: column !important;
                align-items: center !important;
                gap: 18px !important;
                padding: 1.2rem 0.5rem 1rem 0.5rem !important;
              }
              .slide8-arqfutura {
                min-width: 0 !important;
                max-width: 98vw !important;
                width: 100% !important;
              }
              .slide8-responsive-box > div {
                min-width: 0 !important;
                margin-left: 0 !important;
              }
            }
          `}</style>
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
      </Container>
    </Container>
  );
}

export default Slide8;
