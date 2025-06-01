import React from "react";
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

import { Slide } from "react-awesome-reveal";

function Home() {
  return (
    <section style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
     <Slide1 />
      <Slide direction="up" triggerOnce><Slide2 /></Slide>
      <Slide direction="up" triggerOnce><Slide3 /></Slide>
      <Slide direction="up" triggerOnce><Slide4 /></Slide>
      <Slide direction="up" triggerOnce><Slide5 /></Slide>
      <Slide direction="up" triggerOnce><Slide6 /></Slide>
      <Slide direction="up" triggerOnce><Slide7 /></Slide>
      <Slide direction="up" triggerOnce><Slide8 /></Slide>
    </section>
  );
}

export default Home;
