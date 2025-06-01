import React from "react";
import { Container } from "react-bootstrap";
import { Slide } from "react-awesome-reveal";
import { MdQuestionAnswer } from "react-icons/md";

function Slide12() {
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
        <div className="slide2-line slide2-line-bottom" />
      </Container>
    </Container>
  );
}

export default Slide12;
