import React from 'react';
import cardImagePath from '../../images/image1.jpg';
import CONFIG from '../../config';
import './MoviesCard.css';

function MoviesCard (props) {
  const imageUrl = (imageData) => {
    if(!imageData) {
      return cardImagePath
    } else if (imageData.url) {
      return `${CONFIG.baseMovieImageUrl}${ props.card.image.url}`
    } else {
      return imageData
    }
  }

  const trailer = (data) => {
    if (data.trailerLink) {
      return data.trailerLink
    } else {
      return data.trailer
    }
  }

  function onClickCangeStatus () {
    if (props.card.isSaved) {
      props.onDelete(props.card)
    } else {
      props.onSave(props.card)
    }
  };

  function onDelete () {
    props.onDelete(props.card)
  }

  const convertDuration = (duration) => {
    if (duration === 60 && (duration % 60) === 0)  {
      return `1 час`
    } else if ((duration % 60) === 0) {
      return `${duration / 60} часа`
    } else if ((duration % 60) === 1 && duration > 60) {
      return `${(duration - duration % 60) / 60} час ${duration - 60} минута`
    } else if ((duration % 60) > 1 && (duration % 60) < 5 && duration > 60) {
      return `${(duration - duration % 60) / 60} час ${duration % 60} минуты`
    } else if (((duration % 60) > 4 && (duration % 60) < 10 && duration > 60) || ((duration % 60) > 10 && (duration % 60) < 15 && duration < 120 && duration > 60) || ((duration % 10) === 0 && duration < 120 && duration > 60)) {
      return `${(duration - duration % 60) / 60} час ${duration % 60} минут`
    } else if ((duration % 10) === 1 && (duration % 60) > 14 && duration > 60) {
      return `${(duration - duration % 60) / 60} час ${duration - 60} минута`
    } else if ((duration % 10) > 1 && (duration % 10) < 5 && (duration % 60) > 14 && duration > 60 && duration < 120) {
      return `${(duration - duration % 60) / 60} час ${duration - 60} минуты`
    } else if (((duration % 10) > 4 && duration < 120 && (duration % 60) > 14 && duration > 60) || ((duration % 60) > 10 && (duration % 60) < 15 && duration < 120 && duration > 60) || ((duration % 10) === 0 && duration < 120 && duration > 60)) {
      return `${(duration - duration % 60) / 60} час ${duration - 60} минут`
    } else if ((duration % 10) === 1 && (duration % 60) > 14 && duration > 60) {
      return `${(duration - duration % 60) / 60} часа ${duration % 60} минута`
    } else if ((duration % 10) > 1 && (duration % 10) < 5 && (duration % 60) > 14 && duration > 120) {
      return `${(duration - duration % 60) / 60} часа ${duration % 60} минуты`
    } else if (((duration % 10) > 4 && duration > 120 && (duration % 60) > 14) || ((duration % 60) > 10 && (duration % 60) < 15 && duration > 60) || ((duration % 10) === 0 && duration < 120 && duration > 60)) {
      return `${(duration - duration % 60) / 60} часа ${duration % 60} минут`
    } else {
      return `${duration} минут`
    }
  }

  return (
    props.inSavedPage 
    ? 
    <div className={props.isVisible ? "card" : "card card_unvisible"}>
          <div className="card__info">
            <h2 className="card__title">{props.card.nameRU}</h2>
          <p className="card__duration">{convertDuration(props.card.duration)}</p>
          </div>
          <a className="card__link" href={trailer(props.card)} target="_blank" rel="noreferrer">
            <img src={imageUrl(props.card.image)} alt="Кадр из фильма" className="card__image" />
          </a>
          <button onClick={onDelete} type="button" className="card__button">&#10006;</button>
    </div>
    :
    <div className={props.isVisible ? "card" : "card card_unvisible"}>
          <div className="card__info">
            <h2 className="card__title">{props.card.nameRU}</h2>
          <p className="card__duration">{convertDuration(props.card.duration)}</p>
          </div>
          <a className="card__link" href={trailer(props.card)} target="_blank" rel="noreferrer">
            <img src={imageUrl(props.card.image)} alt="Кадр из фильма" className="card__image" />
          </a>
          <button onClick={onClickCangeStatus} type="button" className={`card__button ${props.card.isSaved && 'card__button_type_saved'}`}>
            {props.card.isSaved 
            ? <p className="card__button-text">&#10003;</p> 
            : 'Сохранить'}
          </button>
    </div>
  )
}

export default MoviesCard;