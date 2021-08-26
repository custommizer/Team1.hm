import React from "react";
import "./sign-up.css";
import { Link } from "react-router-dom";
// import HMlogo from './img/HM-Emblem.jpeg'

function SignUp() {
  return (
    <div className="sign">
      <div className="container">
        <div className="sign__box">
            <h1>
              Начни с нами сегодня! Создайте учетную запись, заполнив информацию
              ниже.
            </h1>
            <div className="form-inputs">
              <label className="form-label">Никнейм</label>
              <input
                className="form-input"
                type="text"
                name="username"
                placeholder="Ввести никнейм"
              />
            </div>
            <div className="form-inputs">
              <label className="form-label">Почта</label>
              <input
                className="form-input"
                type="email"
                name="email"
                placeholder="Ввести почту"
              />
            </div>
            <div className="form-inputs">
              <label className="form-label">Пароль</label>
              <input
                className="form-input"
                type="password"
                name="password"
                placeholder="Ввести пароль"
              />
            </div>
            <div className="form-inputs">
              <label className="form-label">Подтвердить пароль</label>
              <input
                className="form-input"
                type="password"
                name="password2"
                placeholder="Подтвредить пароль"
              />
            </div>
            <div className="form__input__button">
              <button className="form-input-btn" type="submit">
                Зарегистрироваться
              </button>
            </div>
            <span className="form-input-login">
              Уже есть аккаунт? Войти <Link to="/client">тут</Link>
            </span>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
