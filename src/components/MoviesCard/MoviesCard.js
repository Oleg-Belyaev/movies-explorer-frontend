import React from 'react';
import cardImagePath from '../../images/image1.jpg';
import './MoviesCard.css';

function MoviesCard (props) {
  const [isSaved, setIsSaved] = React.useState(false);

  const onClick = () => {
    isSaved ? setIsSaved(false) : setIsSaved(true)
  };

  return (
    props.inSavedPage 
    ? 
    <div className="card">
          <div className="card__info">
            <h2 className="card__title">В погоне за Бенкси</h2>
          <p className="card__duration">27 минут</p>
          </div>
          <img src={cardImagePath} alt="Кадр из фильма" className="card__image" />
          <button type="button" className="card__button">&#10006;</button>
    </div>
    :
    <div className="card">
          <div className="card__info">
            <h2 className="card__title">В погоне за Бенкси</h2>
          <p className="card__duration">27 минут</p>
          </div>
          <img src={cardImagePath} alt="Кадр из фильма" className="card__image" />
          <button onClick={onClick} type="button" className={`card__button ${isSaved && 'card__button_type_saved'}`}>
            {isSaved 
            ? <p className="card__button-text">&#10003;</p> 
            : 'Сохранить'}
          </button>
    </div>
  )
}

export default MoviesCard;