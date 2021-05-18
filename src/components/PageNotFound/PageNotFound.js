import { Link } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound () {
  return (
    <main class="main page__main">
      <section class="not-found">
        <h1 class="not-found__title">404</h1>
      <p class="not-found__text">Страница не найдена</p>
      <Link to="/" class="not-found__link">Назад</Link>
      </section>
    </main>
  )
};

export default PageNotFound;