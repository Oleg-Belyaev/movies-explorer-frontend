import fotoPath from '../../images/foto.jpg';
import './AboutMe.css';

function AboutMe () {
  return (
    <section className="about-me main__about-me" id="about-me">
        <h2 className="about-me__title">Студент</h2>
        <div className="about-me__info">
          <div className="about-me__description">
            <div>
              <h3 className="about-me__name">Олег</h3>
              <p className="about-me__profession">Фронтэнд-разработчик, 34 года</p>
              <p className="about-me__text">
              Я родился в городе Новодвинск Архангельской области. 
              Недавно перехал в Калининград. Закончил химио-технологический факультет АГТУ. 
              Более 11 лет работал на Архангельском целлюлозно-бумажном комбинате. 
              Веб-разработку начал изучать в июне 2020 гоода. После окончания кураса 
              веб-разработчик устройился на работу фронтенд-разработчиком, 
              где и работю в настоящее время. 
              </p>
            </div>
            <ul className="about-me__social-links">
              <li className="about-me__social-link">
                <a href="https://www.linkedin.com/in/олег-беляев-63617b1b8/" target="_blank" rel="noreferrer" className="about-me__link">Linkedin</a>
              </li>
              <li className="about-me__social-link">
                <a href="https://github.com/Oleg-Belyaev" target="_blank" rel="noreferrer" className="about-me__link">Github</a>
              </li>
            </ul>
          </div>
          <img src={fotoPath} alt="Фото студента" className="about-me__foto" />
        </div>
      </section>
  )
}

export default AboutMe;