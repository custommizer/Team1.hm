import React from "react";
import "./summer.css";
import { Link } from "react-router-dom";

function Summer() {
  return (
    <div className="summer__section">
          <div className="summer__section__text">
            <h1>Summer is in full bloom</h1>
            <p>
              Enjoy warmer days with a romantic collection of dresses and sets
              in florals and ruffles. <br /> Add a pair of sandals for a lazy
              picnic or mules for chasing sunsets with friends.
            </p>
          </div>
          <div className="summer__section__btn">
            <Link>
              <button>перейти в магазин</button>
            </Link>
        </div>
    </div>
  );
}

export default Summer;
