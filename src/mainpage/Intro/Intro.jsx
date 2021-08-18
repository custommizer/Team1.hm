import React from "react";
import "./intro.css";
import { Link } from "react-router-dom";

function Intro() {
  return (
    <div className="intro__section">
      <div className="container">
        <div className="intro__content">
          <div className="intro__section__text">
            <h1>Summer is in full bloom</h1>
            <p>
              Enjoy warmer days with a romantic collection of dresses and sets
              in florals and ruffles. <br /> Add a pair of sandals for a lazy
              picnic or mules for chasing sunsets with friends.
            </p>
          </div>
          <div className="intro__section__btn">
            <button>
              <Link>перейти в магазин</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
