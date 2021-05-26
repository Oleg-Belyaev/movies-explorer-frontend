import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import headerLogoPath from '../../images/logo.svg';
import './Login.css';

function Login (props) {
  const { values, errors, isValid, handleChange, resetForm } = useForm();

  function handleSubmit (e) {
    e.preventDefault();
    props.onLogin({
      email: values.email,
      password: values.password
    })
    resetForm();
  }

  return (
    <main className="main page__main">
      <section className="login main__login">
        <div className="login__header">
          <Link to="/" className="login__link">
            <img src={headerLogoPath} alt="логотип" className="login__logo" />
          </Link>
          <h1 className="login__title">Рады видеть!</h1>
        </div>
        <form className="login__form" name="login" onSubmit={handleSubmit}>
          <div className="login__field">
            <label className="login__label" htmlFor="email">Email</label>
            <input type="email" className={`${errors.email ? "login__input login__input_error" : "login__input"}`}
            name="email" placeholder="Введите Email" id="email-input" required value={values.email || ''} onChange={handleChange} />
            <span className="login__input-error">{errors.email}</span>
          </div>
          <div className="login__field">
            <label className="login__label" htmlFor="email">Пароль</label>
            <input type="password" className={`${errors.email ? "login__input login__input_error" : "login__input"}`} 
            name="password" placeholder="Введите пароль" id="password-input" required minLength="8" value={values.password || ''} onChange={handleChange} />
            <span className="login__input-error">{errors.password}</span>
          </div>
          <span className="login__submit-error">{props.errorLogin}</span>
          <button type="submit" className={`${isValid ? "login__button" : "login__button login__button_inactive"}`}>Войти</button>
        </form>
        <p className="login__text">
          Ещё не зарегистрированы? 
          <Link to="/signup" className="login__link"> Регистация</Link>
        </p>
      </section>
    </main>
  )
}

export default Login;