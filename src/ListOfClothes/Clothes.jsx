import React from "react";
import "./clothes.css";
import { Link } from "react-router-dom";
import ReactFancyBox from "react-fancybox";
import "react-fancybox/lib/fancybox.css";

function Clothes() {
  return (
    <div className="clothes">
      <div className="container">
        <div className="clothes__inner">
          <div className="clothes__title">
            <h1>Популярные товары</h1>
          </div>
          <div className="clothes__list">
            <div className="clothes__item">
              <div className="clothes__img">
                <ReactFancyBox
                  thumbnail="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fe9%2Fa8%2Fe9a8712fb9624dfd3ec32a91b83fe1cfd87be31a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]/330/450"
                  image="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fe9%2Fa8%2Fe9a8712fb9624dfd3ec32a91b83fe1cfd87be31a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
                />
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
              <div className="clothes__img">
                <ReactFancyBox
                  thumbnail="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F4c%2F89%2F4c896a43b795536dc4289b2a425579628502caea.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]/320/240"
                  image="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F4c%2F89%2F4c896a43b795536dc4289b2a425579628502caea.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
                />
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
              <div className="clothes__img">
                <ReactFancyBox
                  thumbnail="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ffe%2F80%2Ffe803f3b125cdb4fee0617734f6560f0ac4f9580.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]/320/240"
                  image="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ffe%2F80%2Ffe803f3b125cdb4fee0617734f6560f0ac4f9580.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]"
                />
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
