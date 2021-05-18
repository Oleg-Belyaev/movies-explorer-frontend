import { Link } from 'react-router-dom';
import headerLogoPath from '../../images/logo.svg';
import './Login.css';

function Login () {
  return (
    <main className="main page__main">
      <section className="registr main__login">
        <div className="registr__header">
          <Link to="/" className="registr__link">
            <img src={headerLogoPath} alt="логотип" className="registr__logo" />
          </Link>
          <h1 className="registr__title">Рады видеть!</h1>
        </div>
        <form className="registr__form" name="register">
          <div className="registr__field">
            <label className="registr__label" htmlFor="email">Email</label>
            <input type="email" className="registr__input" 
            name="email" placeholder="Email" id="email-input" required defaultValue="pochta@yandex.ru" />
            <span className="registr__input-error"></span>
          </div>
          <div className="registr__field">
            <label className="registr__label" htmlFor="email">Пароль</label>
            <input type="password" className="registr__input registr__input_error" 
            name="password" placeholder="Email" id="email-input" required defaultValue="123456" />
            <span className="registr__input-error">Что-то пошло не так...</span>
          </div>
          <button type="submit" className="registr__button">Войти</button>
        </form>
        <p className="registr__text">
          Ещё не зарегистрированы? 
          <Link to="/signup" className="registr__link"> Регистация</Link>
        </p>
      </section>
    </main>
  )
}

export default Login;