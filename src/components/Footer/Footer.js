import './Footer.css';

function Footer (props) {
  const date = new Date();
  return (
    <footer className="footer page__footer">
      <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__links">
        <p className="footer__copyright">&copy; {date.getFullYear()}</p>
        <ul className="footer__list">
          <li className="footer__item">
            <a href="https://praktikum.yandex.ru" target="_blank" rel="noreferrer" className="footer__link">Яндекс.Практикум</a>
          </li>
          <li className="footer__item">
            <a href="https://github.com/Oleg-Belyaev" target="_blank" rel="noreferrer" className="footer__link">Github</a>
          </li>
          <li className="footer__item">
            <a href="https://www.linkedin.com/in/олег-беляев-63617b1b8/" target="_blank" rel="noreferrer" className="footer__link">Linkedin</a>
          </li>
        </ul>
      </div>
    </footer>
  )
};

export default Footer;