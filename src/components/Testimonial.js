import React from "react";
import "./Testimonial.css";
import Testimoniall from "./Testimonial.png";

const Testimonial = () => {
  return (
    <section className="testimonial" id="testimonial">
      <h4>Testmonial</h4>

      <h2>
        Provide our users with an exceptional <br /> experience
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur. Maecenas ac elementum lacus vel
        vitae sed nisi aliquam aliquet. Vel
        <br />
        adipiscing placerat tellus faucibus diam mauris ipsum vitae.{" "}
      </p>
      <br />
      <br />

      <img src={Testimoniall} alt={Testimoniall} />
    </section>
  );
};

export default Testimonial;
