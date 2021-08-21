import './contacts.css'

function Contacts(){
    return (
      <div className="contact">
        <div className="contact-intro">
          <h1>Контакты</h1>
        </div>

        <div className="contact-main">
          <div className="container">
            <h2>Свяжитесь с нами, и мы с радостью поможем Вам.</h2>

            <div className="all-contacts">

              <div className="item">
                <h3>Наши номера:</h3>
                <h4>8 (727) 232 1434</h4>
                <h4>8 (727) 321 0534</h4>
              </div>

              <div className="item">
                  <h3>Наша почта и график:</h3>
                  <h4>customerservice.ru@hm.com</h4>
                  <h4>график: 10:00-22:00/7</h4>
              </div>

              <div className="item">
                  <h3>Наши соц-сети:</h3>
                  <a href="https://www.instagram.com/hm/?hl=ru"><h4>instagram: hm</h4></a>
                  <a href="https://www.facebook.com/hm/"><h4>facebook: H&M</h4></a>
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

export default Contacts 