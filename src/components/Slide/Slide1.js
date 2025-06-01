import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import logo from "../../assets/logonavbar.png";
import { MdMemory } from "react-icons/md";

function Slide1() {
  return (
    <section style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      <Particle />
      {/* Hexágonos decorativos SVG */}
      <svg style={{ position: "absolute", top: 0, left: 0, zIndex: 1 }} width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="60,20 90,35 90,65 60,80 30,65 30,35" stroke="#42c8ee" strokeWidth="3" fill="none"/>
        <polygon points="200,60 230,75 230,105 200,120 170,105 170,75" stroke="#42c8ee" strokeWidth="3" fill="none"/>
      </svg>
      <svg style={{ position: "absolute", bottom: 60, left: 40, zIndex: 1 }} width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="60,10 90,25 90,55 60,70 30,55 30,25" stroke="#42c8ee" strokeWidth="2" fill="none"/>
      </svg>
      <svg style={{ position: "absolute", top: 40, right: 120, zIndex: 1 }} width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,10 80,25 80,55 50,70 20,55 20,25" stroke="#42c8ee" strokeWidth="2" fill="none"/>
      </svg>
      <Container fluid className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "100vh", position: "relative", zIndex: 2 }}>
        <h1 style={{ color: "#42c8ee", fontWeight: 800, fontSize: "4vw", textAlign: "center", marginBottom: 0, textShadow: "0 0 18px #42c8ee, 0 0 2px #fff" }}>
          Guardia Activa
        </h1>
        <h3 style={{ color: "#fff", fontWeight: 400, fontSize: "2vw", textAlign: "center", marginTop: "1vw", marginBottom: 0, textShadow: "0 0 8px #42c8ee55" }}>
          Monitoreo & Gestión de Incidentes 24x7
        </h3>
        <div style={{ margin: "2vw 0 0.5vw 0", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <MdMemory style={{ color: "#42c8ee", filter: "drop-shadow(0 0 16px #42c8ee)", fontSize: "4vw", animation: "neon-pulse 1.5s infinite alternate" }} />
          <span style={{ color: "#42c8ee", fontSize: "1.1vw", marginTop: 8, textShadow: "0 0 8px #42c8ee" }}>
            Arquitectura actual y evolución a n8n + IA
          </span>
        </div>
      </Container>
      {/* Logo Groovit en la esquina inferior derecha */}
      <div style={{ position: "fixed", right: 40, bottom: 30, zIndex: 10, display: "flex", alignItems: "center" }}>
        {/* Si tienes el logo real, usa <img src={groovitLogo} ... /> */}
        <img src={logo} style={{ width: "100px" }} alt="brand" />
      </div>
    </section>
  );
}

export default Slide1;
