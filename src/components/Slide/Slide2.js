import React from "react";
import { Container } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import Particle from "../Particle";
import { Slide } from "react-awesome-reveal";
import "../../styles/slide.css";

const agendaItems = [
  "Panorama del servicio",
  "Componentes actuales",
  "Arquitectura actual",
  "Flujo operativo actual",
  "Limitaciones & oportunidades",
  "Arquitectura futura (n8n + IA)",
  "Flujo automatizado propuesto",
  "Impacto en personal y costos",
  "KPIs & métricas",
  "Roadmap de implementación",
  "Preguntas"
];

function Slide2() {
  // Dividir la agenda en dos columnas
  const half = Math.ceil(agendaItems.length / 2);
  const col1 = agendaItems.slice(0, half);
  const col2 = agendaItems.slice(half);

  return (
    <Container fluid className="home-about-section d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <Particle />
      <Container className="d-flex flex-column align-items-center justify-content-center slide2-content" style={{ minHeight: "100vh", maxWidth: 900 }}>
        {/* Contenedor alineado al cuadro para línea y título */}
        <div className="slide2-header-center slide2-padding-x">
          <div className="slide2-header-inner">
            <div className="slide2-line slide2-line-top" />
            <div className="slide2-title-box">
              <span className="slide2-title">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Agenda")
                      .start();
                  }}
                />
              </span>
            </div>
          </div>
        </div>
        {/* Lista futurista animada en dos columnas */}
        <Slide direction="up" triggerOnce>
          <div className="slide2-agenda-box slide2-padding-x">
            <div className="slide2-agenda-cols">
              <ol className="slide2-agenda-list">
                {col1.map((item, idx) => (
                  <li key={idx} className="slide2-agenda-item">
                    <span className="slide2-agenda-num">{idx + 1}.</span>
                    <span className="slide2-agenda-text">{item}</span>
                  </li>
                ))}
              </ol>
              <ol start={col1.length + 1} className="slide2-agenda-list">
                {col2.map((item, idx) => (
                  <li key={idx} className="slide2-agenda-item">
                    <span className="slide2-agenda-num">{col1.length + idx + 1}.</span>
                    <span className="slide2-agenda-text">{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Slide>
        {/* Línea decorativa neón */}
        <div className="slide2-line slide2-line-bottom" />
        <style>{`
          .slide2-padding-x {
            padding-left: 2.5rem;
            padding-right: 2.5rem;
          }
          .slide2-header-center {
            width: 100%;
            max-width: 700px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .slide2-header-inner {
            width: 100%;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .slide2-content { min-height: 100vh; max-width: 900px; }
          .slide2-title-box {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 1.5em;
            margin-top: 0.7em;
            z-index: 3;
            position: relative;
          }
          .slide2-title {
            font-size: 2.1em;
            font-weight: 700;
            color: #42c8ee;
            text-shadow: 0 0 8px #42c8ee, 0 0 2px #fff;
            letter-spacing: 2px;
            text-transform: uppercase;
            background: transparent;
            padding: 0 0.5em;
          }
          .slide2-line {
            width: 180px;
            height: 6px;
            border-radius: 8px;
            box-shadow: 0 0 18px #42c8ee;
            margin-bottom: 10px;
            background: linear-gradient(90deg, #42c8ee 0%, #fff 100%);
            z-index: 4;
            position: relative;
          }
          .slide2-line-bottom {
            margin-top: 18px;
            margin-bottom: 0;
            background: linear-gradient(90deg, #fff 0%, #42c8ee 100%);
          }
          .slide2-agenda-box {
            background: rgba(11, 10, 20, 0.85);
            border-radius: 18px;
            box-shadow: 0 0 32px #42c8ee99, 0 0 8px #0b0a14;
            border: 2px solid #42c8ee;
            padding: 2rem 2.5rem;
            width: 100%;
            max-width: 700px;
            margin: 0 auto;
            margin-top: 1.2em;
          }
          .slide2-agenda-cols {
            display: flex;
            justify-content: space-between;
            gap: 40px;
          }
          .slide2-agenda-list {
            list-style: decimal;
            padding-left: 24px;
            margin: 0;
            flex: 1;
            color: #fff;
            font-size: 1.15em;
            font-weight: 500;
            text-shadow: 0 2px 8px #0b0a15;
            text-align: left;
          }
          .slide2-agenda-item {
            margin: 1.1em 0;
            text-align: left;
            position: relative;
            display: flex;
            align-items: flex-start;
          }
          .slide2-agenda-num {
            color: #42c8ee;
            min-width: 28px;
            text-align: right;
            font-weight: 700;
            margin-right: 12px;
            flex-shrink: 0;
          }
          .slide2-agenda-text {
            margin-left: 0;
          }
          @media (max-width: 700px) {
            .slide2-header-center { max-width: 98vw; }
            .slide2-padding-x {
              padding-left: 0.7rem;
              padding-right: 0.7rem;
            }
            .slide2-agenda-box {
              padding-top: 1.2rem;
              padding-bottom: 1.2rem;
              max-width: 98vw;
              margin-top: 1.5em;
            }
            .slide2-agenda-cols {
              flex-direction: column;
              gap: 0;
            }
            .slide2-agenda-list {
              font-size: 1em;
              padding-left: 20px;
            }
            .slide2-title { font-size: 1.1em; text-shadow: 0 0 4px #42c8ee, 0 0 1px #fff; }
            .slide2-line { width: 110px; height: 4px; }
          }
        `}</style>
      </Container>
    </Container>
  );
}

export default Slide2;
