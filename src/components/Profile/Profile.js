import React from 'react';
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useForm } from '../../hooks/useForm';

function Profile (props) {
  const currentUser = React.useContext(CurrentUserContext);
  const { values, errors, isValid, handleChange, resetForm } = useForm();

  const onClick = () => {
    props.onChange();
  }

  React.useEffect(() => {
    if (currentUser) {
      resetForm(currentUser, {}, true)
    }
  }, [currentUser, resetForm]);

  function handleSubmit (e) {
    e.preventDefault();
    props.onUpdateUser({
      name: values.name,
      email: values.email
    })
  }
  
  return (
    props.change 
    ?
    <main className="main page__main">
      <section className="profile main__profile">
        <h1 className="profile__title">{currentUser ? `Привет, ${currentUser.name}!` : null}</h1>
        <form className="profile__form" name="profileChange" onSubmit={handleSubmit}>
          <div className="profile__field">
            <label className="profile__label" htmlFor="name">Имя</label>
            <input type="text" className="profile__input" 
            name="name" placeholder="Name" id="name-input" required pattern="^[А-Яа-яЁёa-zA-Z\s/-]{3,}$" value={values.name || ''} onChange={handleChange}/>  
          </div>
          <span className="registr__input-error">{`${errors.name ? 'Имя должно содержать только латиницу, кириллицу, пробел или дефис. Длина не менее 3 символов' : ''}`}</span>
          <div className="profile__field">
            <label className="profile__label" htmlFor="email">E-mail</label>
            <input type="email" className="profile__input" 
            name="email" placeholder="E-mail" id="email-input" required value={values.email || ''} onChange={handleChange}/>
          </div>
          <span className="login__input-error">{errors.email}</span>
          <div className="profile__container">
            <span className="profile__input-error">{props.error ? 'При обновлении профиля произошла ошибка.' : ''}</span>
            <button type="submit" className={`${(isValid && (values.name !== currentUser.name || values.email !== currentUser.email)) ? "prolife__button prolife__button_type_save" 
            : "prolife__button prolife__button_type_save prolife__button_inactive"}`}>Сохранить</button>
          </div>
        </form>
      </section>
    </main>
    :
    <main className="main page__main">
      <section className="profile main__profile">
        <h1 className="profile__title">{currentUser ? `Привет, ${currentUser.name}!` : null}</h1>
        <div className="profile__info">
          <div className="profile__item">
            <p className="profile__text">Имя</p>
            <p className="profile__text">{currentUser ? currentUser.name : null}</p>
          </div>
          <div className="profile__item">
            <p className="profile__text">E-mail</p>
            <p className="profile__text">{currentUser ? currentUser.email : null}</p>
          </div>
          <button onClick={onClick} className="prolife__button">Редактировать</button>
          <button onClick={props.logout} className="prolife__button prolife__button_type_logout">Выйти из аккаунта</button>
        </div>
      </section>
    </main>
  )
}

export default Profile;