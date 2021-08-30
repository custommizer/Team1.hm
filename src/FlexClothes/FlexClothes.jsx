import React, { useEffect } from "react";
import "./flexclothes.css";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

function FlexClothes() {
  useEffect(() => {
    Aos.init({
      duration: 500,
      once: true,
    });
  }, []);

  return (
    <div className="clothes__flex">
      <div className="container">
        <div className="clothes__inner">
          <div className="clothes__line">
            <div data-aos="fade-right" className="line__img">
              <img
                src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F20%2Fb2%2F20b21bc42f2ca35c14cf9217fbcd226c3ae8edfb.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
                alt="loading..."
              />
              <div className="img__name short__name">
                <i class="fas fa-tshirt"></i>Спортивные шорты из мембраны
              </div>
            </div>
            <div data-aos="fade-left" className="line__text">
              <h2>Спортивные шорты из мембраны</h2>
              <h3>4999 KTZ</h3>
              <div className="line__text__btn">
                <button>
                  <Link to="/">купить</Link>
                </button>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquam, asperiores.
              </p>
            </div>
          </div>
          <div className="clothes__line clothes__line__right">
            <div data-aos="fade-left" className="line__img">
              <img
                src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F7b%2Fec%2F7bece7c6e8abac757f2b046f84753463e09d93ad.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
                alt="loading..."
              />
              <div className="img__name right__shirt__name">
                <i class="fas fa-tshirt"></i>Футболка Relaxed Fit
              </div>
            </div>
            <div data-aos="fade-right" className="line__text right__line__text">
              <h2>Футболка Relaxed Fit</h2>
              <h3>7999 KTZ</h3>
              <div className="line__text__btn">
                <button>
                  <Link to="/">купить</Link>
                </button>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                perspiciatis quia, molestias voluptatibus officiis autem.
              </p>
            </div>
          </div>
          <div className="clothes__line">
            <div data-aos="fade-right" className="line__img">
              <img
                src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F63%2F1e%2F631e1749c06456c9aad4a33753b780b16d2d1f5d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
                alt="loading..."
              />
              <div className="img__name shirt__name">
                <i class="fas fa-tshirt"></i>Футболка Regular Fit
              </div>
            </div>
            <div data-aos="fade-left" className="line__text">
              <h2>Футболка Regular Fit</h2>
              <h3>5999 KTZ</h3>
              <div className="line__text__btn">
                <button>
                  <Link to="/">купить</Link>
                </button>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquam, asperiores.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlexClothes;
