import React, { useState, useRef } from "react";
import Slide1 from "../Slide/Slide1";
import Slide2 from "../Slide/Slide2";
import Slide3 from "../Slide/Slide3";
import Slide4 from "../Slide/Slide4";
import Slide5 from "../Slide/Slide5";
import Slide6 from "../Slide/Slide6";
import Slide7 from "../Slide/Slide7";
import Slide8 from "../Slide/Slide8";
import Slide9 from "../Slide/Slide9";
import Slide10 from "../Slide/Slide10";
import Slide11 from "../Slide/Slide11";
import Slide12 from "../Slide/Slide12";
import { Slide } from "react-awesome-reveal";

function Home() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const containerRef = useRef(null);

  const handleNavigate = (slideNumber) => {
    setCurrentSlide(slideNumber);
    if (containerRef.current) {
      const slideElement = document.getElementById(`slide${slideNumber}`);
      if (slideElement) {
        slideElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section ref={containerRef} style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      <Slide1 onNavigate={handleNavigate} />
      <Slide direction="up" triggerOnce>
        <Slide2 onNavigate={handleNavigate} />
      </Slide>
      <Slide direction="up" triggerOnce>
        <div id="slide3"><Slide3 /></div>
      </Slide>
      <Slide direction="up" triggerOnce>
        <div id="slide4"><Slide4 /></div>
      </Slide>
      <Slide direction="up" triggerOnce>
        <div id="slide5"><Slide5 /></div>
      </Slide>
      <Slide direction="up" triggerOnce>
        <div id="slide6"><Slide6 /></div>
      </Slide>
      <Slide direction="up" triggerOnce>
        <div id="slide7"><Slide7 /></div>
      </Slide>
      <Slide direction="up" triggerOnce>
        <div id="slide8"><Slide8 /></div>
      </Slide>
      <Slide direction="up" triggerOnce>
        <div id="slide9"><Slide9 /></div>
      </Slide>
      <Slide direction="up" triggerOnce>
        <div id="slide10"><Slide10 /></div>
      </Slide>
      <Slide direction="up" triggerOnce>
        <div id="slide11"><Slide11 /></div>
      </Slide>
      <Slide direction="up" triggerOnce>
        <div id="slide12"><Slide12 /></div>
      </Slide>
    </section>
  );
}

export default Home;
