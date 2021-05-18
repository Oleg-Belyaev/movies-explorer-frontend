import React from 'react';
import './Profile.css';

function Profile (props) {
  const [isChange, setIsChange] = React.useState(false);

  const onClick = () => {
    isChange ? setIsChange(false) : setIsChange(true);
  }

  const onChange = (event) => {
    console.log(event)
  }
  
  return (
    isChange 
    ?
    <main className="main page__main">
      <section className="profile main__profile">
        <h1 className="profile__title">Привет, Олег!</h1>
        <form className="profile__form" name="profileChange">
          <div className="profile__field">
            <label className="profile__label" htmlFor="name">Имя</label>
            <input type="text" className="profile__input" 
            name="name" placeholder="Name" id="name-input" required defaultValue="Олег" onChange={onChange}/>
          </div>
          <div className="profile__field">
            <label className="profile__label" htmlFor="email">E-mail</label>
            <input type="email" className="profile__input" 
            name="email" placeholder="E-mail" id="email-input" required defaultValue="pochta@yandex.ru" onChange={onChange}/>
          </div>
          <span className="profile__input-error">При обновлении профиля произошла ошибка.</span>
          <button onClick={onClick} type="submit" className="prolife__button prolife__button_type_save">Сохранить</button>
        </form>
      </section>
    </main>
    :
    <main className="main page__main">
      <section className="profile main__profile">
        <h1 className="profile__title">Привет, Олег!</h1>
        <div className="profile__info">
          <div className="profile__item">
            <p className="profile__text">Имя</p>
            <p className="profile__text">Олег</p>
          </div>
          <div className="profile__item">
            <p className="profile__text">E-mail</p>
            <p className="profile__text">pochta@yandex.ru</p>
          </div>
          <button onClick={onClick} className="prolife__button">Редактировать</button>
          <button onClick={props.logout} className="prolife__button prolife__button_type_logout">Выйти из аккаунта</button>
        </div>
      </section>
    </main>
  )
}

export default Profile;