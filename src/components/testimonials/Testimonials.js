import React from "react";
import "./testimonials.css";
import { symbol } from "../../assets";
import { feedback } from "../../constants";
import { clients } from "../../constants";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="container testimonials__container">
        <div className="testimonials__top">
          <div>
            <h4>What people are saying about us</h4>
          </div>
          <div>
            <p className="text-light">
              Everything you need to accept card payments and grow your business
              anywhere on the planet.
            </p>
          </div>
        </div>
        <div className="testimonials__bottom">
          {feedback.map((f) => (
            <div key={f.id} className="testimonial">
              <img src={symbol} alt="" />
              <p className="text-light">{f.content}</p>
              <div className="testimonial-people">
                <img src={f.img} alt="" />
                <div>
                  <p>{f.name}</p>
                  <p className="text-light">{f.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="clients-section" id="clients">
          {clients.map((c) => (
            <div key={c.id} className="client">
              <img className="client-logo" src={c.logo} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
