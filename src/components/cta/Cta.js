import React from "react";
import "./cta.css";
const Cta = () => {
  return (
    <section id="cta">
      <div className="container cta__container">
        <div>
          <h4>Let’s try our service now!</h4>
          <p className="text-light">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        <div>
          <a href="/" className="btn btn-primary">
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cta;
