import React from "react";
import { Container } from "react-bootstrap";
import logo from "../../assets/logonavbar.png";
import { MdMemory } from "react-icons/md";

function Slide1() {
  return (
    <section style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
     
      {/* Hexágonos decorativos SVG */}
      <svg className="hex-svg hex-svg-1" width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="60,20 90,35 90,65 60,80 30,65 30,35" stroke="#42c8ee" strokeWidth="3" fill="none"/>
        <polygon points="200,60 230,75 230,105 200,120 170,105 170,75" stroke="#42c8ee" strokeWidth="3" fill="none"/>
      </svg>
      <svg className="hex-svg hex-svg-2" width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="60,10 90,25 90,55 60,70 30,55 30,25" stroke="#42c8ee" strokeWidth="2" fill="none"/>
      </svg>
      <svg className="hex-svg hex-svg-3" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,10 80,25 80,55 50,70 20,55 20,25" stroke="#42c8ee" strokeWidth="2" fill="none"/>
      </svg>
      <Container fluid className="d-flex flex-column align-items-center justify-content-center slide1-content" style={{ minHeight: "100vh", position: "relative", zIndex: 2 }}>
        <h1 className="slide1-title">
          Guardia Activa
        </h1>
        <h3 className="slide1-subtitle">
          Monitoreo & Gestión de Incidentes 24x7
        </h3>
        <div className="slide1-iconbox">
          <MdMemory className="slide1-icon" />
          <span className="slide1-desc">
            Arquitectura actual y evolución a n8n + IA
          </span>
        </div>
        <div className="slide1-down-arrow" style={{marginTop: "-50%"}}>
        <svg width="56" height="32" viewBox="0 0 56 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polyline points="8,8 28,28 48,8" stroke="#42c8ee" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" filter="url(#glow)" />
          <defs>
            <filter id="glow" x="0" y="0" width="56" height="32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feDropShadow dx="0" dy="0" stdDeviation="3" flood-color="#42c8ee"/>
            </filter>
          </defs>
        </svg>
      </div>
      </Container>
      {/* Logo Groovit en la esquina inferior derecha */}
      <div className="slide1-logo-box">
        <img src={logo} className="slide1-logo" alt="brand" />
      </div>
      {/* Flecha animada para deslizar */}
     
      <style>{`
        .hex-svg-1 { position: absolute; top: 0; left: 0; z-index: 1; }
        .hex-svg-2 { position: absolute; bottom: 60px; left: 40px; z-index: 1; }
        .hex-svg-3 { position: absolute; top: 40px; right: 120px; z-index: 1; }
        .slide1-content { min-height: 100vh; position: relative; z-index: 2; }
        .slide1-title {
          color: #42c8ee;
          font-weight: 800;
          font-size: 4vw;
          text-align: center;
          margin-bottom: 0;
          text-shadow: 0 0 18px #42c8ee, 0 0 2px #fff;
        }
        .slide1-subtitle {
          color: #fff;
          font-weight: 400;
          font-size: 2vw;
          text-align: center;
          margin-top: 1vw;
          margin-bottom: 0;
          text-shadow: 0 0 8px #42c8ee55;
        }
        .slide1-iconbox {
          margin: 2vw 0 0.5vw 0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .slide1-icon {
          color: #42c8ee;
          filter: drop-shadow(0 0 16px #42c8ee);
          font-size: 4vw;
          animation: neon-pulse 1.5s infinite alternate;
        }
        .slide1-desc {
          color: #42c8ee;
          font-size: 1.1vw;
          margin-top: 8px;
          text-shadow: 0 0 8px #42c8ee;
        }
        .slide1-logo-box {
          position: fixed;
          right: 40px;
          bottom: 30px;
          z-index: 10;
          display: flex;
          align-items: center;
        }
        .slide1-logo {
          width: 100px;
          max-width: 22vw;
        }
        .slide1-down-arrow {
          position: absolute;
          left: 50%;
          bottom: 60px;
          transform: translateX(-50%);
          z-index: 12;
          animation: arrow-bounce 1.5s infinite;
          filter: drop-shadow(0 0 12px #42c8ee);
        }
        @keyframes arrow-bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(16px); }
        }
        @media (max-width: 900px) {
          .slide1-title { font-size: 7vw; }
          .slide1-subtitle { font-size: 3.5vw; }
          .slide1-icon { font-size: 7vw; }
          .slide1-desc { font-size: 2.2vw; }
          .slide1-logo { width: 70px; }
          .hex-svg-1 { width: 160px; height: 160px; }
          .hex-svg-2 { width: 70px; height: 70px; bottom: 20px; left: 10px; }
          .hex-svg-3 { width: 60px; height: 60px; top: 10px; right: 20px; }
        }
        @media (max-width: 600px) {
          .slide1-title { font-size: 9vw; }
          .slide1-subtitle { font-size: 5vw; }
          .slide1-icon { font-size: 10vw; }
          .slide1-desc { font-size: 3vw; }
          .slide1-logo { width: 48px; }
          .slide1-logo-box { right: 10px; bottom: 10px; }
          .hex-svg-1 { width: 80px; height: 80px; }
          .hex-svg-2 { width: 40px; height: 40px; bottom: 5px; left: 2px; }
          .hex-svg-3 { width: 30px; height: 30px; top: 2px; right: 2px; }
        }
      `}</style>
    </section>
  );
}

export default Slide1;
