import React, { useEffect } from "react";
import "./clothes.css";
import { Link } from "react-router-dom";
import img1 from "./images/shirt-print.jpeg";
import img2 from './images/hoodie.jpeg';
import img3 from './images/men-shirt.jpeg';
import Aos from "aos";
import "aos/dist/aos.css";

function Clothes() {
  useEffect(() => {
    Aos.init({
      duration: 700,
      once: true,
    });
  }, []);
  return (
    <div className="clothes">
      <div className="container">
        <div className="clothes__inner">
          <div className="clothes__title">
            <h1>Популярные товары</h1>
          </div>
          <div className="clothes__list">
            <div data-aos="fade-right" className="clothes__item">
              <span className="desc"><Link>подробнее</Link></span>
              <img src={img1} alt="loadaing..." />
              <div className="clothes__text">
                <div className="clothes__link">
                  <Link>
                    <p>Джинсы Relaxed</p>
                  </Link>
                </div>
                <div className="clothes__cost">9999 KTZ</div>
              </div>
            </div>
            <div data-aos="fade-down" className="clothes__item">
              <span className="desc"><Link>подробнее</Link></span>
              <img src={img2} alt="loadaing..." />
              <div className="clothes__text">
                <div className="clothes__link">
                  <Link>
                    <p>Джинсы Relaxed</p>
                  </Link>
                </div>
                <div className="clothes__cost">9999 KTZ</div>
              </div>
            </div>
            <div data-aos="fade-left" className="clothes__item">
              <span className="desc"><Link>подробнее</Link></span>
              <img src={img3} alt="loadaing..." />
              <div className="clothes__text">
                <div className="clothes__link">
                  <Link>
                    <p>Джинсы Relaxed</p>
                  </Link>
                </div>
                <div className="clothes__cost">9999 KTZ</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clothes;
