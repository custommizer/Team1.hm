import React from "react";
import "./about.css";
import img1 from "../mainpage/images/about-img-1.jpg";
import img2 from "../mainpage/images/about-img-2.jpg";
import img3 from "../mainpage/images/about-img-3.jpg";
import img4 from "../mainpage/images/about-img-4.jpg";

function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="about__title">
          <h2>About us</h2>
        </div>
        <div className="about__inner">
          <div className="about__card__res">
            <img src={img3} alt="loading..." />
          </div>
          <div className="about__text">
            <p>
              <span>H&M</span> is a Swedish multinational clothing-retail
              company known for its fast-fashion clothing for men, women,
              teenagers, and children. As of November 2019, H&M operates in 74
              countries with over 5,000 stores under the various company brands,
              with 126,000 full-time equivalent positions. It is the
              second-largest global clothing retailer, behind Spain-based
              Inditex (parent company of Zara). Founded by Erling Persson and
              run by his son Stefan Persson and Helena Helmersson, the company
              makes its online shopping available in 33 countries.
            </p>
          </div>
          <div className="about__cards">
            <div className="about__card__line">
              <div className="about__card">
                <img src={img1} alt="loading..." />
              </div>
              <div className="about__card">
                <img src={img2} alt="loading..." />
              </div>
            </div>
            <div className="about__card__line">
              <div className="about__card">
                <img src={img3} alt="loading..." />
              </div>
              <div className="about__card">
                <img src={img4} alt="loading..." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
