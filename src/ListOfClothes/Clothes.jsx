import React, { useEffect } from "react";
import "./clothes.css";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css"; 

function Clothes() {
  useEffect(() => {
    Aos.init({
      duration: 500,
      once: true
    })
  }, [])
  return (
    <div className="clothes">
      <div className="container">
        <div className="clothes__inner">
          <div className="clothes__title">
            <h1>Популярные товары</h1>
          </div>
          <div className="clothes__list">
            <div data-aos="fade-right" className="clothes__item">
              <div className="clothes__img__1">
                <div className="box__info">
                  <Link>
                    <p>Узнать подробнее</p>
                  </Link>
                </div>
              </div>
              <div className="clothes__text">
                <div className="clothes__link">
                  <Link>
                    <p>Джинсы Relaxed</p>
                  </Link>
                </div>
                <div className="clothes__cost">9999 KTZ</div>
              </div>
            </div>
            <div className="clothes__item">
              <div className="clothes__img__2">
                <div className="box__info">
                  <Link>
                    <p>Узнать подробнее</p>
                  </Link>
                </div>
              </div>
              <div className="clothes__text">
                <div className="clothes__link">
                  <Link>
                    <p>Рубашка из хлопка премиум</p>
                  </Link>
                </div>
                <div className="clothes__cost">4999 KTZ</div>
              </div>
            </div>
            <div className="clothes__item">
              <div className="clothes__img__3">
                <div className="box__info">
                  <Link>
                    <p>Узнать подробнее</p>
                  </Link>
                </div>
              </div>
              <div className="clothes__text">
                <div className="clothes__link">
                  <Link>
                    <p>Свитшот Relaxed Fit</p>
                  </Link>
                </div>
                <div className="clothes__cost">6999 KTZ</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clothes;
