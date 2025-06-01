import React from "react";
import { Container } from "react-bootstrap";
import { Slide } from "react-awesome-reveal";

const steps = [
  {
    icon: (
      // Monitor con alerta
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect
          x="6"
          y="10"
          width="36"
          height="22"
          rx="4"
          stroke="#42c8ee"
          strokeWidth="2.5"
        />
        <rect x="18" y="36" width="12" height="3" rx="1.5" fill="#42c8ee" />
        <polygon
          points="24,16 30,28 18,28"
          stroke="#42c8ee"
          strokeWidth="2"
          fill="none"
        />
        <line
          x1="24"
          y1="20"
          x2="24"
          y2="24"
          stroke="#42c8ee"
          strokeWidth="2"
        />
        <circle cx="24" cy="26" r="1.2" fill="#42c8ee" />
      </svg>
    ),
    text: "Sonda (p.ej. ping SRV-WEB01) falla.",
  },
  {
    icon: (
      // Alerta
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect
          x="12"
          y="12"
          width="24"
          height="24"
          rx="6"
          stroke="#42c8ee"
          strokeWidth="2.5"
        />
        <polygon
          points="24,18 30,32 18,32"
          stroke="#42c8ee"
          strokeWidth="2"
          fill="none"
        />
        <line
          x1="24"
          y1="22"
          x2="24"
          y2="28"
          stroke="#42c8ee"
          strokeWidth="2"
        />
        <circle cx="24" cy="30" r="1.2" fill="#42c8ee" />
      </svg>
    ),
    text: "App registra evento y muestra alerta.",
  },
  {
    icon: (
      // Operador (headset)
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="16" stroke="#42c8ee" strokeWidth="2.5" />
        <path
          d="M16 32c0-4 8-4 8 0"
          stroke="#42c8ee"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M32 32v-2a4 4 0 0 0-4-4h-8a4 4 0 0 0-4 4v2"
          stroke="#42c8ee"
          strokeWidth="2"
          fill="none"
        />
        <circle
          cx="24"
          cy="20"
          r="4"
          stroke="#42c8ee"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    ),
    text: "Operador verifica y escala.",
  },
  {
    icon: (
      // Checklist
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect
          x="12"
          y="8"
          width="24"
          height="32"
          rx="6"
          stroke="#42c8ee"
          strokeWidth="2.5"
        />
        <polyline
          points="18,22 22,26 30,18"
          stroke="#42c8ee"
          strokeWidth="2.5"
          fill="none"
        />
        <rect x="18" y="30" width="12" height="2.5" rx="1.2" fill="#42c8ee" />
      </svg>
    ),
    text: "Seguimiento manual hasta cierre.",
  },
];

function Slide6() {
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
          <div className="slide6-steps-box mt-3">
            {steps.map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="slide6-step-row">
                  <div className="slide6-step-iconblock">
                    <div className="slide6-step-num">{idx + 1}</div>
                    <div className="slide6-step-icon">{step.icon}</div>
                  </div>
                  <div className="slide6-step-text">{step.text}</div>
                </div>
                {idx < steps.length - 1 && (
                  <div className="slide6-arrow-container">
                    <svg width="24" height="48" viewBox="0 0 24 48" fill="none">
                      <line
                        x1="12"
                        y1="0"
                        x2="12"
                        y2="38"
                        stroke="#42c8ee"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <polygon points="12,48 4,36 20,36" fill="#42c8ee" />
                    </svg>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </Slide>
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
            text-shadow: 0 0 6px #42c8ee, 0 0 1px #fff;
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
            padding: 2.5rem 2.5rem 2rem 2.5rem;
            width: 100%;
            max-width: 440px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
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
            color: #fff;
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
