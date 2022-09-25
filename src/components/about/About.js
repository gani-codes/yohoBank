import React from "react";
import "./about.css";
import { features } from "../../constants";
const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <h4>
            You do the business,
            <br />
            we’ll handle the money.
          </h4>
          <p className="text-light">
            With the right credit card, you can improve your financial life by
            building credit, earning rewards and saving money. But with hundreds
            of credit cards on the market.
          </p>
          <a href="/" className="btn btn-primary">
            Get Started
          </a>
        </div>
        <div className="about__right">
          {features.map((feature) => (
            <article key={feature.id} className="about__right-content">
              <div className="about__right-content-image">
                <img src={feature.icon} alt="" />
              </div>
              <div className="about__right-content-text">
                <h5>{feature.title}</h5>
                <p className="text-light"> {feature.content} </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
export default About;
