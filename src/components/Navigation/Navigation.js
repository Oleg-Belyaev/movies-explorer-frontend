import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation(props) {
  return (
    props.auth 
    ? 
    <> 
      <label className="menu" htmlFor="menu">
        <div className="menu__psevdo-input"></div>
        <input type="checkbox" name="menu" id="menu" className="menu__checkbox" value="" />
        <div className="menu__icon"></div>
        <nav className="menu__navigation">
          <div className="menu__cover"></div>
          <ul className="menu__list">
            <li className="menu__item menu__item_type_column">
              <Link to="/" className="menu__link">Главная</Link>
              <Link to="/movies" className="menu__link">Фильмы</Link>
              <Link to="/saved-movies" className="menu__link">Сохранённые фильмы</Link>
            </li>
            <li className="menu__item">
              <Link to="/profile" className="menu__link menu__link_type_account">Аккаунт</Link>
              <div className="menu__foto"></div>
            </li>
          </ul>
        </nav>
      </label>
      <nav className="navigation navigation_type_auth">
      <ul className="navigation__list">
        <li className="navigation__item">
          <Link to="/movies" className="navigation__link">Фильмы</Link>
          <Link to="/saved-movies" className="navigation__link">Сохранённые фильмы</Link>
        </li>
        <li className="navigation__item">
          <Link to="/profile" className="navigation__link">Аккаунт</Link>
          <div className="navigation__foto"></div>
        </li>
      </ul>
      </nav>
    </>
    :
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <Link to="/signup" className="navigation__link">Регистрация</Link>
          <Link to="/signin" className="navigation__link navigation__link_view_button">Войти</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;
