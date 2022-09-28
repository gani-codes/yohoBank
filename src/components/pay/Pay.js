import React from "react";
import { card } from "../../assets";
import "./pay.css";
const Pay = () => {
  return (
    <section id="pay">
      <div className="container pay__container">
        <div className="pay__container-left">
          <h4>Find a better card deal in few easy steps.</h4>
          <p className="text-light">
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
            aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
          </p>
          <a href="/" className="btn btn-primary">
            Get Started
          </a>
        </div>
        <div className="pay__container-right">
          <img src={card} alt="card" />
        </div>
      </div>
    </section>
  );
};

export default Pay;
