import React from "react";
import {Link} from 'react-router-dom'
import "./contacts.css";

function Contacts() {
  return (
    <div className="wrapper">
      <div className="parallax">
        <div className="parallax__body">
          <div className="container parallax__container">
            <h1 className="parallax__title__cont">контакты</h1>
          </div>
          <div className="parallax__image__cont"></div>
        </div>
      </div>
      <div className="contact">
        <div className="container">
          <div className="contact-inner">
            <div className="contact-info">
              <div className="contact-num">
                <h3>Номер:</h3>
                <p>8 800 500 78 00</p>
                <p className="contact-num-link">
                  <Link to="/">
                    Узнать больше <i class="fas fa-arrow-right"></i>
                  </Link>
                </p>
              </div>
              <div className="contact-email">
                <h3>Почта:</h3>
                <p>customerservice.ru@hm.com</p>
              </div>
            </div>
            <hr />
            <div className="contact-media">
              <a href="https://www.facebook.com/hmrussia">
                <span>
                  <i class="fab fa-facebook"></i>
                </span>
              </a>

              <a href="https://twitter.com/hmrussia">
                <span>
                  <i class="fab fa-twitter"></i>
                </span>
              </a>
              <a href="https://www.instagram.com/hm/">
                <span>
                  <i class="fab fa-instagram"></i>
                </span>
              </a>
              <a href="https://www.youtube.com/user/hennesandmauritz">
                <span>
                  <i class="fab fa-youtube"></i>
                </span>
              </a>
              <a href="https://www.pinterest.com/hm">
                <span>
                  <i class="fab fa-pinterest"></i>
                </span>
              </a>
            </div>
          </div>

          <h2>Наши Адреса:</h2>

          <iframe
            src="https://yandex.com/map-widget/v1/?um=constructor%3A678d104df2512a2cbfc01ec30e6472d16e0488aa6d7d9f9a8d81906edb71668c&amp;source=constructor"
            width="100%"
            height="400"
            frameborder="0"
          ></iframe>
        </div>
        <div className="contact-map">
          <div className="container">
            <div className="contact-map-inner">
              <h3>Наши торговые точки в Алматы:</h3>
            </div>
          </div>
          <iframe
            src="https://yandex.com/map-widget/v1/?um=constructor%3A678d104df2512a2cbfc01ec30e6472d16e0488aa6d7d9f9a8d81906edb71668c&amp;source=constructor"
            width="100%"
            height="400"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
