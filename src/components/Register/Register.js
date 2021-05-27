import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import headerLogoPath from '../../images/logo.svg';
import './Register.css';

function Register (props) {
  const { values, errors, isValid, handleChange } = useForm();

  function handleSubmit (e) {
    e.preventDefault();
    props.onRegister({
      name: values.name,
      email: values.email,
      password: values.password
    })
  }

  return (
    <main className="main page__main">
      <section className="registr main__registr">
        <div className="registr__header">
          <Link to="/" className="registr__link">
            <img src={headerLogoPath} alt="логотип" className="registr__logo" />
          </Link>
          <h1 className="registr__title">Добро пожаловать!</h1>
        </div>
        <form className="registr__form" name="register" onSubmit={handleSubmit}>
          <div className="registr__field">
            <label className="registr__label" htmlFor="name">Имя</label>
            <input disabled={props.disabled ? true : false} type="text" className={`${errors.name ? 'registr__input registr__input_error' : 'registr__input'}`} 
            name="name" placeholder="Введите имя" id="name-input" required pattern="^[А-Яа-яЁёa-zA-Z\s/-]{3,}$" value={values.name || ''} onChange={handleChange}/>
            <span className="registr__input-error">{`${errors.name ? 'Имя должно содержать только латиницу, кириллицу, пробел или дефис. Длина не менее 3 символов' : ''}`}</span>
          </div>
          <div className="registr__field">
            <label className="registr__label" htmlFor="email">Email</label>
            <input disabled={props.disabled ? true : false} type="email" className={`${errors.email ? 'registr__input registr__input_error' : 'registr__input'}`} 
            name="email" placeholder="Введите Email" id="email-input" required value={values.email || ''} onChange={handleChange}/>
            <span className="registr__input-error">{errors.email}</span>
          </div>
          <div className="registr__field">
            <label className="registr__label" htmlFor="email">Пароль</label>
            <input disabled={props.disabled ? true : false} type="password" className={`${errors.password ? 'registr__input registr__input_error' : 'registr__input'}`} 
            name="password" placeholder="Введите пароль" id="password-input" required minLength="8" value={values.password || ''} onChange={handleChange}/>
            <span className="registr__input-error">{errors.password}</span>
          </div>
            <span className="registr__submit-error">{props.errorRegistr}</span>
            <button disabled={props.disabled ? true : false} type="submit" className={`${isValid ? "registr__button" : "registr__button registr__button_inactive"}`}>Зарегистрироваться</button>
        </form>
        <p className="registr__text">
          Уже зарегистрированы? 
          <Link to="/signin" className="registr__link"> Войти</Link>
        </p>
      </section>
    </main>
  )
};

export default Register;