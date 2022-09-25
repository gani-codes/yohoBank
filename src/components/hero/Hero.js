import React from "react";
import "./Hero.css";
import { discount, robot } from "../../assets";
import { stats } from "../../constants";

const Hero = () => {
    return (
        <header id="home">
            <div className="container hero__container">
                <div className="hero__left">
                    <div className="discount__content">
                        <img src={discount} alt="discount" id="discount-image" />
                        <p>
                            <span className="discount__span">20%</span> DISCOUNT FOR{" "}
                            <span className="discount__span">1 MONTH</span> ACCOUNT
                        </p>
                    </div>
                    <div className="tagline__content">
                        <h1 >The Next<br /><span id="tagline" className="gradient-text">Generation</span><br />Payment Method.</h1>
                    </div>
                    <div className="hero__left-content">
                        <p>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.
                            We examine annual percentage rates, annual fees.</p>
                    </div>
                </div>
                <div className="hero__right">
                    <div className="hero__right-image">
                        <img src={robot} alt="" />
                    </div>
                </div>
            </div>
            <div className="container hero__bottom">
                {stats.map((stat) =>
                (<div key={stat.id} className="hero__bottom-content">
                    <h2>{stat.value}</h2>
                    <h5 className="gradient-text">{stat.title}</h5>
                </div>)
                )}
            </div>
        </header>
    );
};

export default Hero;
