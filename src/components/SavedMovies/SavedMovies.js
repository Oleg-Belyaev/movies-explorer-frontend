import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies (props) {
  return (
    <main className="main page__main">
      <SearchForm onSearch={props.onSearch} onClickShort={props.onClickShort}/>
      <MoviesCardList inSavedPage={true} cards={props.cards} countCards={props.countCards} 
      onDelete={props.onDelete} emptySearch={props.emptySearch} errorSearch={props.errorSearch}/>
    </main>
  )
}

export default SavedMovies;