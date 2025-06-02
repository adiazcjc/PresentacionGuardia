import React from "react";
import { Container } from "react-bootstrap";
import { Slide } from "react-awesome-reveal";
import { MdQuestionAnswer } from "react-icons/md";

function Slide12({ onNavigate }) {
  return (
    <Container
      fluid
      className="home-about-section d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
      id="slide12"
    >
      <Container
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ minHeight: "100vh", maxWidth: 900 }}
      >
        <Slide direction="up" triggerOnce>
          <h1 className="slide1-title">Preguntas</h1>
        </Slide>
        <Slide direction="up" triggerOnce>
          <div className="slide1-iconbox">
          <MdQuestionAnswer className="slide1-icon" />
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
      </Container>
    </Container>
  );
}
<style>{`

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

` }
</style>
export default Slide12;

