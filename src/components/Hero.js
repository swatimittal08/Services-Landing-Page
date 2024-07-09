import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <h4>------ Services ------</h4>
      <br />
      <br />
      <h1>
        WE CREATE <span className="heading">UNOQUE</span> DIGITAL <br />{" "}
        <span className="heading">PRODUCT</span>
      </h1>{" "}
      <br />
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur. Maecenas ac elementum lacus vel
        vitae sed nisi aliquam aliquet.
        <br />
        Vel adipiscing placerat tellus faucibus diam mauris ipsum vitae.{" "}
      </p>
      <br />
      <br />
      <button className="button">Get Started</button>
    </section>
  );
};

export default Hero;
