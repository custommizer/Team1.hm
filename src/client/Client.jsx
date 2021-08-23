import { Link } from "react-router-dom";
import "./client.css";

function Client() {
  return (
    <div className="client">
      <div className="container">
        <div className="client-inner">
          <div className="client-logo">
            <img src="https://logos-world.net/wp-content/uploads/2020/04/HM-Emblem.jpg" />
          </div>
          <div className="client-items">
            <div className="client-log">
              <h2>Войти в Кабинет</h2>
              <h4>Email</h4>
              <input type="email" placeholder="example@gmail.com" />
              <h4>Пароль</h4>
              <input type="password" placeholder="Password" />
              <Link>
                <button>Войти</button>
              </Link>
              <Link className="forgot">Забыли пароль?</Link>
            </div>

            <h1>Нету аккаунта?</h1>
            <h3>Так зарегестрируйте его</h3>
            <div className="new-account">
              <Link to="/sign-up">
                <button>Зарегестрироватся</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Client;
