import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import More from '../More/More';
import Preloader from '../Preloader/Preloader';

function Movies (props) {
  return (
    <main className="main page__main">
      <SearchForm onSearch={props.onSearch} onClickShort={props.onClickShort}/>
      <Preloader isLoading={props.isLoading}/>
      <MoviesCardList inSavedPage={false} cards={props.cards} 
      countCards={props.countCards} onSave={props.onSave} onDelete={props.onDelete}
      emptySearch={props.emptySearch} errorSearch={props.errorSearch}/>
      <More more={props.more} onClickMore={props.onClickMore}/>
    </main>
  )
}

export default Movies;
