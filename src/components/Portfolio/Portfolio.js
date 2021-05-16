import './Portfolio.css';

function Portfolio () {
  return (
    <section className="portfolio main__portfolio">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__list">
          <li className="portfolio__item">
            <p className="portfolio__text">Статичный сайт</p>
            <a href="https://oleg-belyaev.github.io/how-to-learn/" target="_blank" rel="noreferrer" className="portfolio__link">&#8599;</a>
          </li>
          <li className="portfolio__item">
            <p className="portfolio__text">Адаптивный сайт</p>
            <a href="https://oleg-belyaev.github.io/russian-travel/" target="_blank" rel="noreferrer" className="portfolio__link">&#8599;</a>
          </li>
          <li className="portfolio__item">
            <p className="portfolio__text">Одностраничное приложение</p>
            <a href="https://github.com/Oleg-Belyaev/react-mesto-api-full" target="_blank" rel="noreferrer" className="portfolio__link">&#8599;</a>
          </li>
        </ul>
      </section>
  )
};

export default Portfolio;