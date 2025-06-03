import React, { useState } from "react";
import { Container, Modal } from "react-bootstrap";
import { MdSensors, MdDashboard } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import "../../styles/slide.css";
import { Slide } from "react-awesome-reveal";
import dashboard from "../../assets/dashboard.jpeg";
import sga from "../../assets/sga.jpeg";

function Slide4({ onNavigate }) {
  const [showOperadoresModal, setShowOperadoresModal] = useState(false);
  const [showSensoresModal, setShowSensoresModal] = useState(false);
  const [showDashboardModal, setShowDashboardModal] = useState(false);

  const operadoresData = [
    {
      turno: "Días hábiles (17:00 – 08:00)",
      operadores: ["David Mahmoud", "Francisco Sandoval"]
    },
    {
      turno: "Fines de semana (24×7)",
      operadores: ["Ignacio Quiroz", "Fabrizio Diaz", "Kariel Targa"]
    },
    {
      turno: "Feriados (24×7)",
      operadores: ["Alejandro Diaz", "Estefania Vallejo"]
    }
  ];

  return (
    <Container fluid className="home-about-section d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}
    id="slide4">
    
      <Container className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "100vh", maxWidth: 700 }}>
      <Slide direction="up" triggerOnce>
        <h1 className="slide1-title">Componentes actuales </h1>
      </Slide>
      <Slide direction="up" triggerOnce>
        <div className="futuristic-table-wrapper futuristic-table-animated mt-3 slide4-table-wrapper" style={{ padding: "1.2rem 0.7rem", maxWidth: 600 }}>
          <table className="futuristic-table slide4-table" style={{ fontSize: "0.98em" }}>
            <thead>
              <tr>
                <th style={{ fontSize: "1em" }}>#</th>
                <th style={{ fontSize: "1em" }}>Componente</th>
                <th style={{ fontSize: "1em" }}>Tecnologías</th>
                <th style={{ fontSize: "1em" }}>Rol</th>
              </tr>
            </thead>
            <tbody>
              <tr onClick={() => setShowSensoresModal(true)} style={{ cursor: "pointer" }}>
                <td>1</td>
                <td style={{ padding: 0 }} >
                  <div style={{ display: "flex", alignItems: "center", gap: 7, height: "100%", padding: "0.7em 0.5em" }}>
                    <MdSensors className="icon-neon" size={18} /> 
                    App Sensores
                  </div>
                </td>
                <td>C# (.NET) · SQL Server</td>
                <td>Ejecuta controles (ping, DB, web, APIs, enlaces), valora criticidad y graba eventos.</td>
              </tr>
              <tr onClick={() => setShowDashboardModal(true)} style={{ cursor: "pointer" }}>
                <td>2</td>
                <td style={{ padding: 0 }} >
                  <div style={{ display: "flex", alignItems: "center", gap: 7, height: "100%", padding: "0.7em 0.5em" }}>
                    <MdDashboard className="icon-neon" size={18} /> Dashboard
                  </div>
                </td>
                <td>React.js · C# API</td>
                <td>Muestra estados en tiempo real, históricos, KPIs.</td>
              </tr>
              <tr onClick={() => setShowOperadoresModal(true)} style={{ cursor: "pointer" }}>
                <td>3</td>
                <td style={{ padding: 0 }} >
                  <div style={{ display: "flex", alignItems: "center", gap: 7, height: "100%", padding: "0.7em 0.5em" }}>
                    <FaUserFriends className="icon-neon" size={18} /> Operador
                  </div>
                </td>
                <td>Operador</td>
                <td>Controla la app de Guardia, escala, inicia reclamos y hace seguimiento.</td>
              </tr>
            </tbody>
          </table>
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

        {/* Modal de Operadores */}
        <Modal
          show={showOperadoresModal}
          onHide={() => setShowOperadoresModal(false)}
          centered
          dialogClassName="operadores-modal"
        >
          <Modal.Body className="operadores-modal-body">
            <div className="operadores-grid">
              {operadoresData.map((grupo, index) => (
                <div key={index} className="operadores-grupo">
                  <div className="operadores-turno">{grupo.turno}</div>
                  <div className="operadores-lista">
                    {grupo.operadores.map((operador, idx) => (
                      <div key={idx} className="operador-item">{operador}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Modal.Body>
        </Modal>

        {/* Modal de App Sensores */}
        <Modal
          show={showSensoresModal}
          onHide={() => setShowSensoresModal(false)}
          centered
          dialogClassName="image-modal"
        >
          <Modal.Body className="image-modal-body">
            <img src={sga} alt="App Sensores" className="modal-image" />
          </Modal.Body>
        </Modal>

        {/* Modal de Dashboard */}
        <Modal
          show={showDashboardModal}
          onHide={() => setShowDashboardModal(false)}
          centered
          dialogClassName="image-modal"
        >
          <Modal.Body className="image-modal-body">
            <img src={dashboard} alt="Dashboard" className="modal-image" />
          </Modal.Body>
        </Modal>

        <style>{`
          .slide4-table-wrapper {
            width: 100%;
            overflow-x: auto;
            max-width: 600px;
          }
          .slide4-table {
            width: 100%;
            min-width: 340px;
            font-size: 0.98em;
            border-collapse: collapse;
          }
          .slide4-table th, .slide4-table td {
            padding: 0.7em 0.5em;
            text-align: left;
            white-space: pre-line;
          }
          @media (max-width: 700px) {
            .slide4-table-wrapper {
              padding: 0.7rem 0.2rem;
              max-width: 99vw;
            }
            .slide4-table {
              font-size: 0.95em;
              min-width: 260px;
            }
            .slide4-table th, .slide4-table td {
              padding: 0.5em 0.3em;
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

          /* Estilos del Modal de Operadores */
          .operadores-modal .modal-content {
            background: rgba(11, 10, 20, 0.95);
            border: 2px solid #42c8ee;
            border-radius: 18px;
            box-shadow: 0 0 32px #42c8ee99;
            max-width: 500px;
            margin: 0 auto;
          }

          .operadores-modal-body {
            padding: 1.2rem;
          }

          .operadores-grid {
            display: flex;
            flex-direction: column;
            gap: 0.8rem;
          }

          .operadores-grupo {
            background: rgba(66, 200, 238, 0.1);
            border-radius: 12px;
            padding: 0.8rem;
            border: 1px solid #42c8ee55;
          }

          .operadores-turno {
            color: #42c8ee;
            font-weight: 600;
            font-size: 1em;
            margin-bottom: 0.4rem;
            text-shadow: 0 0 8px #42c8ee55;
          }

          .operadores-lista {
            display: flex;
            flex-direction: column;
            gap: 0.2rem;
          }

          .operador-item {
            color: #d1d1d1;
            font-size: 0.95em;
            padding: 0.2rem 0;
            border-bottom: 1px solid #42c8ee22;
          }

          .operador-item:last-child {
            border-bottom: none;
          }

          /* Estilos del Modal de Imágenes */
          .image-modal {
            max-width: 90vw !important;
            width: 90vw !important;
            margin: 0 auto !important;
          }

          .image-modal .modal-dialog {
            max-width: 90vw !important;
            width: 90vw !important;
            height: 90vh !important;
            margin: 5vh auto !important;
          }

          .image-modal .modal-content {
            background: rgba(11, 10, 20, 0.95);
            border: 2px solid #42c8ee;
            border-radius: 18px;
            box-shadow: 0 0 32px #42c8ee99;
            width: 100% !important;
            height: 100% !important;
            margin: 0 !important;
          }

          .image-modal-body {
            padding: 2rem;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .modal-image {
            width: auto;
            height: auto;
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
            border-radius: 8px;
            box-shadow: 0 0 16px #42c8ee55;
          }

          @media (max-width: 576px) {
            .operadores-modal-body {
              padding: 0.8rem;
            }
            .operadores-grupo {
              padding: 0.6rem;
            }
            .operadores-turno {
              font-size: 0.9em;
            }
            .operador-item {
              font-size: 0.85em;
            }
            .image-modal-body {
              padding: 1rem;
            }
            .image-modal,
            .image-modal .modal-dialog {
              width: 95vw !important;
              max-width: 95vw !important;
            }
          }
        `}</style>
      </Container>
    </Container>
  );
}

export default Slide4;
