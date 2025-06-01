import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import Typewriter from "typewriter-effect";
import { Slide } from "react-awesome-reveal";

function Slide8() {
  return (
    <Container fluid className="home-about-section d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <Particle />
      <Container className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "100vh", maxWidth: 1200 }}>
        <div style={{ marginBottom: "1.2rem" }}>
          <span style={{ fontSize: "1.5em", fontWeight: 700, color: "#42c8ee", textShadow: "0 0 18px #42c8ee, 0 0 2px #fff", letterSpacing: 2 }}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Arquitectura Futura (Fase 1 – Sensores n8n)")
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
            maxWidth: 1100,
            margin: "0 auto",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            gap: 36
          }}>
            {/* Diagrama principal */}
            <div style={{ flex: 2, minWidth: 600, display: "flex", flexDirection: "column", alignItems: "center" }}>
              <svg width="600" height="410" style={{ maxWidth: "100%" }}>
                {/* Caja grande */}
                <rect x="10" y="10" width="580" height="390" rx="22" fill="none" stroke="#42c8ee" strokeWidth="2.5" />
                {/* Bloques sensores */}
                <rect x="40" y="50" width="180" height="60" rx="12" fill="none" stroke="#42c8ee" strokeWidth="2.5" />
                <text x="130" y="80" textAnchor="middle" fill="#fff" fontSize="1.15em" fontWeight="bold">Ping Flow</text>
                <text x="130" y="100" textAnchor="middle" fill="#fff" fontSize="0.98em">Ping Flow</text>

                <rect x="40" y="130" width="180" height="60" rx="12" fill="none" stroke="#42c8ee" strokeWidth="2.5" />
                <text x="130" y="160" textAnchor="middle" fill="#fff" fontSize="1.15em" fontWeight="bold">DB Health Flow</text>
                <text x="130" y="180" textAnchor="middle" fill="#fff" fontSize="0.98em">HTTP/API Flow</text>

                <rect x="40" y="210" width="180" height="60" rx="12" fill="none" stroke="#42c8ee" strokeWidth="2.5" />
                <text x="130" y="240" textAnchor="middle" fill="#fff" fontSize="1.15em" fontWeight="bold">Operador</text>
                <text x="130" y="260" textAnchor="middle" fill="#fff" fontSize="0.98em">8 personas</text>

                {/* Bloque Events */}
                <rect x="270" y="110" width="170" height="90" rx="14" fill="none" stroke="#42c8ee" strokeWidth="2.5" />
                <text x="355" y="145" textAnchor="middle" fill="#fff" fontSize="1.18em" fontWeight="bold">Events</text>
                <text x="355" y="170" textAnchor="middle" fill="#fff" fontSize="1.05em">(SQL Server)</text>

                {/* Bloque Webhook */}
                <rect x="320" y="220" width="120" height="48" rx="10" fill="none" stroke="#42c8ee" strokeWidth="2.5" />
                <text x="380" y="250" textAnchor="middle" fill="#fff" fontSize="1.05em">Webhook</text>
                <text x="380" y="265" textAnchor="middle" fill="#fff" fontSize="0.95em">"/nuevo-evento"</text>

                {/* Bloque Ollama/Deepsek */}
                <rect x="470" y="140" width="100" height="48" rx="10" fill="none" stroke="#42c8ee" strokeWidth="2.5" />
                <text x="520" y="170" textAnchor="middle" fill="#fff" fontSize="1.05em">Ollama /</text>
                <text x="520" y="185" textAnchor="middle" fill="#fff" fontSize="1.05em">Deepsek</text>

                {/* Flechas y textos */}
                {/* Ping Flow -> Events */}
                <line x1="220" y1="80" x2="270" y2="130" stroke="#42c8ee" strokeWidth="2.5" markerEnd="url(#arrowhead)" />
                <text x="245" y="100" fill="#42c8ee" fontSize="0.95em">SS</text>
                {/* DB Health Flow -> Events */}
                <line x1="220" y1="160" x2="270" y2="160" stroke="#42c8ee" strokeWidth="2.5" markerEnd="url(#arrowhead)" />
                <text x="245" y="150" fill="#42c8ee" fontSize="0.95em">SELECT</text>
                {/* Operador -> Events */}
                <line x1="220" y1="240" x2="270" y2="180" stroke="#42c8ee" strokeWidth="2.5" markerEnd="url(#arrowhead)" />
                {/* Events -> Webhook */}
                <line x1="355" y1="200" x2="380" y2="220" stroke="#42c8ee" strokeWidth="2.5" markerEnd="url(#arrowhead)" />
                {/* Events -> Ollama/Deepsek */}
                <line x1="440" y1="155" x2="470" y2="164" stroke="#42c8ee" strokeWidth="2.5" markerEnd="url(#arrowhead)" />
                {/* Definición de flecha */}
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#42c8ee" />
                  </marker>
                </defs>
                {/* Etiqueta n8n */}
                <text x="540" y="40" textAnchor="end" fill="#42c8ee" fontSize="1.25em" fontWeight="bold">n8n</text>
              </svg>
            </div>
            {/* Claves a la derecha */}
            <div style={{ flex: 1, minWidth: 260, marginLeft: 32 }}>
              <div style={{ color: "#42c8ee", fontWeight: 700, fontSize: "1.18em", marginBottom: 10 }}>Claves</div>
              <ul style={{ color: "#fff", fontSize: "1.05em", paddingLeft: 18, marginBottom: 0 }}>
                <li>Cada sensor = <span style={{ color: "#42c8ee", fontWeight: 600 }}>flujo n8n independiente</span></li>
                <li>Nodos <span style={{ color: "#42c8ee", fontWeight: 600 }}>Execute Command / HTTP / DB</span> en n8n hacen pruebas</li>
                <li>Resultado → tabla <span style={{ color: "#42c8ee", fontWeight: 600 }}>Eventos</span></li>
                <li>Sub-flujo <span style={{ color: "#42c8ee", fontWeight: 600 }}>&quot;Gestor de incidentes&quot;</span> reacciona<br/>via Webhook interno cuando un INSERT cambia Status.</li>
                <li>IA genera texto contextual a partir de Redis + últimos eventos y envía por</li>
              </ul>
            </div>
          </div>
          {/* Bullets abajo */}
          <div style={{ marginTop: 32, width: "100%", maxWidth: 900 }}>
            <ul style={{ color: "#42c8ee", fontSize: "1.08em", paddingLeft: 22, marginBottom: 0 }}>
              <li><span style={{ color: "#fff" }}>Cada sensor = flujo n8n independiente con Cron trigger.</span></li>
              <li><span style={{ color: "#fff" }}>Nodos <span style={{ color: "#42c8ee", fontWeight: 600 }}>Execute Command / HTTP / DB</span> en n8n hacen las pruebas.</span></li>
              <li><span style={{ color: "#fff" }}>Resultado → tabla <span style={{ color: "#42c8ee", fontWeight: 600 }}>Eventos</span>.</span></li>
            </ul>
          </div>
        </Slide>
      </Container>
    </Container>
  );
}

export default Slide8;
