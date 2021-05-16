import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies (props) {
  return (
    <main className="main page__main">
      <SearchForm />
      <MoviesCardList inSavedPage={true}/>
    </main>
  )
}

export default SavedMovies;