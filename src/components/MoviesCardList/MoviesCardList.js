import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList (props) {
  return (
    <section className="cards main__cards">
      <MoviesCard inSavedPage={props.inSavedPage}/>
      <MoviesCard inSavedPage={props.inSavedPage}/>
      <MoviesCard inSavedPage={props.inSavedPage}/>
      <MoviesCard inSavedPage={props.inSavedPage}/>
      <MoviesCard inSavedPage={props.inSavedPage}/>
      <MoviesCard inSavedPage={props.inSavedPage}/>
      <MoviesCard inSavedPage={props.inSavedPage}/>
      <MoviesCard inSavedPage={props.inSavedPage}/>
      <MoviesCard inSavedPage={props.inSavedPage}/>
      <MoviesCard inSavedPage={props.inSavedPage}/>
      <MoviesCard inSavedPage={props.inSavedPage}/>
      <MoviesCard inSavedPage={props.inSavedPage}/>
    </section>
  )
}

export default MoviesCardList;