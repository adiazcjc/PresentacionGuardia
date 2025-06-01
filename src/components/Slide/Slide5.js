import React from "react";
import { Container } from "react-bootstrap";
import { Slide } from "react-awesome-reveal";
import "../../styles/slide.css";
import arquitectura from "../../assets/arquitectura.png";

function Slide5() {
  return (
    <Container
      fluid
      className="home-about-section d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
     
      <Container
        id="slide5"
        className="d-flex flex-column align-items-center justify-content-center slide5-container"
        style={{ minHeight: "100vh", maxWidth: 1400 }}
      >
        <Slide direction="up" triggerOnce>
          <h1 className="slide1-title">Arquitectura actual </h1>
        </Slide>
          
          <Slide direction="up" triggerOnce>
            <div className="slide5-svg-container mt-3">
              <img src={arquitectura} alt="Arquitectura" className="slide5-svg" />
            </div>
          </Slide>
          <div className="slide2-line slide2-line-bottom" /> 

        <style>{`
          .slide5-container {
            padding: 1rem;
          }

          .slide5-title-container {
            margin-bottom: 2rem;
            text-align: center;
            width: 100%;
          }

          .slide5-title {
            font-size: 2em;
            font-weight: 600;
            color: #42c8ee;
            text-shadow: 0 0 10px #42c8ee;
            letter-spacing: 2px;
            display: inline-block;
          }

          .slide5-svg-container {
            background: rgba(11, 10, 20, 0.85);
            border-radius: 20px;
            box-shadow: 0 0 24px #42c8ee99;
            border: 2px solid #42c8ee;
            padding: 2.5rem;
            width: 100%;
            max-width: 1000px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            overflow: hidden;
          }

          .slide5-svg {
            max-width: 100%;
            height: auto;
          }

          /* Media queries para diferentes tamaños de pantalla */
          @media (max-width: 1200px) {
            .slide5-svg-container {
              padding: 2rem;
            }
            .slide5-title {
              font-size: 1.8em;
            }
          }

          @media (max-width: 992px) {
            .slide5-svg-container {
              padding: 1.5rem;
            }
            .slide5-title {
              font-size: 1.6em;
            }
          }

          @media (max-width: 768px) {
            .slide5-svg-container {
              padding: 1rem;
              margin: 0 0.5rem;
            }
            .slide5-title {
              font-size: 1.4em;
            }
          }

          @media (max-width: 576px) {
            .slide5-container {
              padding: 0.5rem;
            }
            .slide5-svg-container {
              padding: 0.8rem;
              border-radius: 15px;
            }
            .slide5-title {
              font-size: 1.2em;
              letter-spacing: 1px;
            }
          }

          /* Ajustes para pantallas muy pequeñas */
          @media (max-width: 400px) {
            .slide5-svg-container {
              padding: 0.5rem;
            }
            .slide5-title {
              font-size: 1.1em;
            }
          }
        `}</style>
      </Container>
    </Container>
  );
}

export default Slide5;
