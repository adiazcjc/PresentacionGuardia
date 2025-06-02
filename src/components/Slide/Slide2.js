import React from "react";
import { Container } from "react-bootstrap";
import { Slide } from "react-awesome-reveal";
import "../../styles/slide.css";

const agendaItems = [
  { text: "Panorama del servicio", slide: 3 },
  { text: "Componentes actuales", slide: 4 },
  { text: "Arquitectura actual", slide: 5 },
  { text: "Flujo operativo actual", slide: 6 },
  { text: "Limitaciones & oportunidades", slide: 7 },
  { text: "Arquitectura futura (n8n + IA)", slide: 8 },
  { text: "Flujo automatizado propuesto", slide: 9 },
  { text: "Impacto en personal y costos", slide: 10 },
  { text: "KPIs & métricas", slide: 13 },
  { text: "Roadmap de implementación", slide: 11 },
  { text: "Preguntas", slide: 12 },
];

function Slide2({ onNavigate }) {
  // Dividir la agenda en dos columnas
  const half = Math.ceil(agendaItems.length / 2);
  const col1 = agendaItems.slice(0, half);
  const col2 = agendaItems.slice(half);

  const handleItemClick = (slideNumber) => {
    if (onNavigate) {
      onNavigate(slideNumber);
    }
  };

  return (
    <Container
      fluid
      className="home-about-section d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
      id="slide2"
    >
      <Container
        className="d-flex flex-column align-items-center justify-content-center slide2-content"
        style={{ minHeight: "100vh", maxWidth: 900 }}
      >
        <Slide direction="up" triggerOnce>
        <h1 className="slide1-title">Agenda </h1>
        </Slide>
        {/* Título de la agenda 
        
        <h1 className="slide2-title">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("Agenda").start();
            }}
          />
        </h1>
              */}

        {/* Lista futurista animada en dos columnas */}
        <Slide direction="up" triggerOnce>
          <div className="slide2-agenda-box slide2-padding-x">
            <div className="slide2-agenda-cols">
              <ol className="slide2-agenda-list">
                {col1.map((item, idx) => (
                  <li
                    key={idx}
                    className="slide2-agenda-item"
                    onClick={() => handleItemClick(item.slide)}
                  >
                    <span className="slide2-agenda-num">{idx + 1}.</span>
                    <span className="slide2-agenda-text">{item.text}</span>
                  </li>
                ))}
              </ol>
              <ol start={col1.length + 1} className="slide2-agenda-list">
                {col2.map((item, idx) => (
                  <li
                    key={idx}
                    className="slide2-agenda-item"
                    onClick={() => handleItemClick(item.slide)}
                  >
                    <span className="slide2-agenda-num">
                      {col1.length + idx + 1}.
                    </span>
                    <span className="slide2-agenda-text">{item.text}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Slide>
        {/* Línea decorativa neón*/}
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
  text-align: center;
}

          .slide2-header-inner {
  width: 100%;
  box-sizing: border-box;
}
  .slide2-title-wrapper {
  text-align: center;
  width: 100%;
 
}

.slide2-title {
  display: inline-block;
  font-size: 2.1em;
  font-weight: 700;
  color: #42c8ee;
  text-shadow: 0 0 8px #42c8ee, 0 0 2px #d1d1d1;
  letter-spacing: 2px;
  background: transparent;
  padding: 0 0.5em;
  margin: 0 auto;
}


          .slide2-content { 
            min-height: 100vh; 
            max-width: 900px;
            padding: 1rem;
          }
          .slide2-title-box {
            width: 100%;
            text-align: center;
            margin-bottom: 1.5em;
            margin-top: 0.7em;
            z-index: 3;
            position: relative;
          }
          .slide2-title {
            display: inline-block;
            font-size: 2.1em;
            font-weight: 700;
            color: #42c8ee;
            text-shadow: 0 0 8px #42c8ee, 0 0 2px #d1d1d1;
            letter-spacing: 2px;
            background: transparent;
            padding: 0 0.5em;
            margin: 0 auto;
          }
          .slide2-line {
            width: 180px;
            height: 6px;
            border-radius: 8px;
            box-shadow: 0 0 18px #42c8ee;
            margin-bottom: 10px;
            background: linear-gradient(90deg, #42c8ee 0%, #d1d1d1 100%);
            z-index: 4;
            position: relative;
          }
          .slide2-line-bottom {
            margin-top: 18px;
            margin-bottom: 0;
            background: linear-gradient(90deg, #d1d1d1 0%, #42c8ee 100%);
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
            color: #d1d1d1;
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
            cursor: pointer;
            transition: all 0.3s ease;
          }
          .slide2-agenda-item:hover {
            transform: translateX(10px);
            color: #42c8ee;
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

          /* Estilos responsive */
          @media (max-width: 1200px) {
            .slide2-content {
              max-width: 95%;
            }
            .slide2-agenda-box {
              max-width: 95%;
            }
          }

          @media (max-width: 992px) {
            .slide2-title {
              font-size: 1.8em;
            }
            .slide2-agenda-list {
              font-size: 1.1em;
            }
          }

          @media (max-width: 768px) {
            .slide2-padding-x {
              padding-left: 1.5rem;
              padding-right: 1.5rem;
            }
            .slide2-agenda-box {
              padding: 1.5rem;
            }
            .slide2-agenda-cols {
              gap: 20px;
            }
            .slide2-title {
              font-size: 1.5em;
            }
            .slide2-line {
              width: 140px;
            }
          }

          @media (max-width: 576px) {
            .slide2-padding-x {
              padding-left: 1rem;
              padding-right: 1rem;
            }
            .slide2-header-center { 
              max-width: 100%; 
            }
            .slide2-agenda-box {
              padding: 1.2rem;
              max-width: 100%;
            }
            .slide2-agenda-cols {
              flex-direction: column;
              gap: 0;
            }
            .slide2-agenda-list {
              font-size: 1em;
              padding-left: 20px;
            }
            .slide2-title { 
              font-size: 1.3em; 
              text-shadow: 0 0 4px #42c8ee, 0 0 1px #d1d1d1; 
            }
            .slide2-line { 
              width: 110px; 
              height: 4px; 
            }
            .slide2-agenda-item {
              margin: 0.8em 0;
            }
            .slide2-agenda-num {
              min-width: 24px;
              margin-right: 8px;
            }
          }

          @media (max-width: 400px) {
            .slide2-title {
              font-size: 1.2em;
            }
            .slide2-agenda-list {
              font-size: 0.9em;
            }
            .slide2-agenda-box {
              padding: 1rem;
            }
            .slide2-line {
              width: 90px;
            }
          }
        `}</style>
      </Container>
    </Container>
  );
}

export default Slide2;
