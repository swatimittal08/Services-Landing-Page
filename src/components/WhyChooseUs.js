import React from "react";
import "./WhyChooseUs.css";

const whychooseus = [
  {
    title: "Fundraising",
    description:
      "Lorem Ipsum has been the industry standard dummy text ever since the 1500s,  when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: "Web Development",
    description:
      "Lorem Ipsum has been the industry standard dummy text ever since the 1500s,  when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: "Financials",
    description:
      "Lorem Ipsum has been the industry standard dummy text ever since the 1500s,  when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: "Pitch Deck",
    description:
      "Lorem Ipsum has been the industry standard dummy text ever since the 1500s,  when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: "Startup Consulting",
    description:
      "Lorem Ipsum has been the industry standard dummy text ever since the 1500s,  when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    title: "Compliance",
    description:
      "Lorem Ipsum has been the industry standard dummy text ever since the 1500s,  when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="whychooseus" id="whychooseus">
      <h2>WHY CHOOSE US</h2>
      <p>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book. It has survived not only five centuries, but
        also the leap into electronic typesetting, remaining essentially
        unchanged.
      </p>{" "}
      <br />
      <br />
      <div className="whychooseus-grid">
        {whychooseus.map((whychooseus, index) => (
          <div key={index} className="whychooseus-card">
            <h3>{whychooseus.title}</h3>
            <p>{whychooseus.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
