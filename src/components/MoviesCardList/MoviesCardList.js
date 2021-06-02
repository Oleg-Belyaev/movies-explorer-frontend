import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
function MoviesCardList (props) {
  
  const setKey = (card) => {
    if(card.movieId) {
      return card.movieId
    } else {
      return card.id
    }
  }

  return (
    <section className="cards main__cards">
      {
        props.emptySearch
        ? <p className="cards__text">Ничего не найдено</p>
        : ''
      }
      {
        props.errorSearch
        ? <p className="cards__text cards__text_error">
          Во время запроса произошла ошибка. Возможно, 
          проблема с соединением или сервер недоступен. 
          Подождите немного и попробуйте ещё раз</p>
        : ''
      }
      { 
        props.cards
        ? props.cards.map((card, index) => {
          if (index < props.countCards) {
            return <MoviesCard inSavedPage={props.inSavedPage} card={card} key={setKey(card)} index={index} isVisible={true}
            onSave={props.onSave} onDelete={props.onDelete}/>
          } else {
            return <MoviesCard inSavedPage={props.inSavedPage} card={card} key={setKey(card)} index={index} isVisible={false}
            onDelete={props.onDelete}/>
          }
        })
        : ''
      } 
    </section>
  )
}

export default MoviesCardList;