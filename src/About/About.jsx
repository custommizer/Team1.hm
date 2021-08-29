import React, { useEffect } from "react";
import "./about.css";
import img1 from "../mainpage/images/about-img-1.jpg";
import img2 from "../mainpage/images/about-img-2.jpg";
import img3 from "../mainpage/images/about-img-3.jpg";
import img4 from "../mainpage/images/about-img-4.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    Aos.init({
      duration: 500,
      once: true
    });
  }, []);
  
  return (
    <div className="wrapper">
      <div className="parallax">
        <div className="parallax__body">
          <div className="container parallax__container">
            <div className="parallax__label">О нас</div>
            <h1 className="parallax__title">
              Здесь вы сможете подробнее <br /> ознокомиться с историей <br />{" "}
              нашей комапании
            </h1>
          </div>
          <div className="parallax__image"></div>
        </div>
      </div>
      <div className="about">
        <div className="container">
          <div className="about__content">
            <div className="about__title">
              <h2 data-aos="fade-down">О нашей компании</h2>
            </div>
            <div className="about__inner">
              <div className="about__card__res">
                <img src={img3} alt="loading..." />
              </div>
              <div data-aos="fade-right" className="about__text">
                <p>
                  <span>H&M</span> - шведская международная компания по
                  розничной торговле одеждой, известная своей модной одеждой для
                  мужчин, женщин, подростков и детей. По состоянию на ноябрь
                  2019 года H&M работает в 74 странах, имея более 5000 магазинов
                  под различными брендами компании, что эквивалентно 126 000
                  должностей с полной занятостью. Это второй по величине
                  глобальный розничный торговец одеждой после испанской Inditex
                  (материнской компании Zara). Основанная Эрлингом Перссоном и
                  управляемая его сыном Стефаном Перссоном и Хеленой Хелмерссон,
                  компания делает покупки в Интернете доступными в 33 странах.
                </p>
              </div>
              <div data-aos="fade-left" className="about__cards">
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
            <div className="about__history">
              <div className="container">
                <div data-aos="fade-down" className="about__history__content">
                  <div className="about__history__title">
                    <h1>История</h1>
                  </div>
                  <div className="about__history__text">
                    <p className="about__history__parag">
                      Компания была основана Эрлингом Перссоном в 1947 году,
                      когда он открыл свой первый магазин в Вестеросе, Швеция.
                      Магазин, под названием Хеннес (по-шведски "ее"), продается
                      эксклюзивно Женская одежда. Магазин был открыт в Норвегии
                      в 1964 году. 1968: Persson приобретает розничную торговлю
                      охотничьей одеждой. Мауриц Видфорс в Стокгольме, что
                      привело к включению коллекции мужской одежды по
                      ассортименту и названию перейти на Hennes & Mauritz.
                    </p>
                    <p className="about__history__parag">
                      Компания была зарегистрирована на Стокгольмской фондовой
                      бирже в 1974. Вскоре, в 1976 году, первый магазин на улице
                      Скандинавия открылась в Лондоне. H&M продолжала
                      расширяться в Европе и начал продавать в Интернете в 1998
                      году, когда купил домен hm.com от компании A1 в
                      неопубликованном транзакции домена. Двухбуквенный домен
                      был зарегистрирован в начале 1990-х годов, но данные о
                      первых регистрация потеряна. Открытие первого магазина в
                      США. 31 марта 2000 г. на Пятой авеню в Нью-Йорке отмечен
                      начало экспансии за пределы Европы.
                    </p>
                    <p className="about__history__parag">
                      В 2008 году компания объявила в пресс-релизе, что начнет
                      продавать предметы домашнего обихода. Изначально
                      распространяется через онлайн-каталог компании, есть
                      теперь магазины H&M Home расположены по всему миру.
                      Следующий экспансия в Азии и на Ближнем Востоке и запуск
                      концептуальные магазины, включая COS, Weekday, Monki и
                      Cheap Понедельник, в 2009 и 2010 годах, консалтинговая
                      компания Interbrand. поставил компанию на двадцать первое
                      место в рейтинге самых ценных глобальных брендов, что
                      делает его лидером розничной торговли в опрос. Его
                      стоимость оценивалась в 12–16 миллиардов долларов.
                    </p>
                    <p className="about__history__parag">
                      На конец 2011 г. у H&M находилось 2325 магазинов, а на
                      конец 2011 г. - 2629 магазинов. магазинов в конце августа
                      2012 года. Открылся 3000-й магазин. в сентябре 2013 года в
                      Чэнду, Китай. В октябре 2020 года H&M объявили, что
                      планируют закрыть 5% своих магазинов по всему миру в 2021
                      году в результате COVID-19 пандемии.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
