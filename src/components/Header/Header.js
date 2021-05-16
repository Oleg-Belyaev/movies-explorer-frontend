import { Link } from 'react-router-dom';
import headerLogoPath from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header(props) {
  return (
    <header className="header page__header">
      <Link to="/" className="registr__link">
        <img src={headerLogoPath} alt="логотип" className="header__logo" />
      </Link>
      <Navigation auth={props.auth}/>
    </header>
  )
}

export default Header;
