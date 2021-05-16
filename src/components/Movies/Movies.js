import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import More from '../More/More';
import Preloader from '../Preloader/Preloader';

function Movies (props) {
  return (
    <main className="main page__main">
      <SearchForm />
      <Preloader />
      <MoviesCardList inSavedPage={false}/>
      <More />
    </main>
  )
}

export default Movies;
