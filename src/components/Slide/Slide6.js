import React from "react";
import { Container } from "react-bootstrap";
import { Slide } from "react-awesome-reveal";
import flujo from "../../assets/flujos.png";
import Flujo from "../Diagramas/Flujo";
function Slide6({ onNavigate }) {
  return (
    <Container
      fluid
      className="home-about-section d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <Container
        id="slide6"
        className="d-flex flex-column align-items-center justify-content-center slide6-container"
        style={{ minHeight: "100vh", maxWidth: 600 }}
      >
        <Slide direction="up" triggerOnce>
          <h1 className="slide1-title">Flujo operativo (hoy)</h1>
        </Slide>

        <Slide direction="up" triggerOnce>
          <div className="slide6-steps-box mt-3" style={{ padding: 0, maxWidth: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {/* <img src={flujo} alt="Flujo" className="slide6-flujo" style={{ width: '90%', height: 'auto', display: 'block', maxWidth: '90%' }} /> */}
            <Flujo />
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
          .slide6-container {
            padding: 1rem;
          }
          .slide6-title-container {
            margin-bottom: 2.2rem;
            width: 100%;
            text-align: center;
          }
          .slide6-title {
            font-size: 1.3em;
            font-weight: 600;
            color: #42c8ee;
            text-shadow: 0 0 6px #42c8ee, 0 0 1px #d1d1d1;
            letter-spacing: 1px;
            text-transform: none;
            background: transparent;
            padding: 0 0.5em;
            display: inline-block;
          }
          .slide6-steps-box {
            background: rgba(11, 10, 20, 0.85);
            border-radius: 18px;
            box-shadow: 0 0 32px #42c8ee99, 0 0 8px #0b0a14;
            border: 2px solid #42c8ee;
            padding: 0;
            width: 100%;
            max-width: 100%;
            margin: 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .slide6-step-row {
            display: flex;
            align-items: center;
            margin-bottom: 0.5em;
            width: 100%;
          }
          .slide6-step-iconblock {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-right: 18px;
            min-width: 56px;
          }
          .slide6-step-num {
            width: 38px;
            height: 38px;
            border-radius: 50%;
            border: 2.5px solid #42c8ee;
            color: #42c8ee;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 22px;
            margin-bottom: 8px;
            background: rgba(11, 10, 20, 0.7);
            box-shadow: 0 0 10px #42c8ee55;
          }
          .slide6-step-icon {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .slide6-step-text {
            color: #d1d1d1;
            font-size: 1.18em;
            font-weight: 500;
            text-align: left;
            text-shadow: 0 2px 8px #0b0a15;
            max-width: 290px;
          }
          .slide6-arrow-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 48px;
            margin-bottom: 0.5em;
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
          .slide6-flujo {
            width: 100%;
            height: auto;
            display: block;
            max-width: 100%;
          }
          @media (max-width: 600px) {
            .slide6-steps-box {
              padding: 1.2rem 0.5rem 1rem 0.5rem;
              max-width: 98vw;
            }
            .slide6-title {
              font-size: 1em;
            }
            .slide6-step-text {
              font-size: 1em;
              max-width: 180px;
            }
            .slide6-step-iconblock {
              min-width: 48px;
              margin-right: 10px;
            }
          }
        `}</style>
      </Container>
    </Container>
  );
}

export default Slide6;
