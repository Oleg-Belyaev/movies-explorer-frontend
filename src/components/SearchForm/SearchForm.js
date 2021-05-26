import React from 'react';
import { useForm } from '../../hooks/useForm';
import './SearchForm.css';

function SearchForm (props) {
  const { values, isValid, handleChange, resetForm } = useForm();
  const [error, setError] = React.useState(false);

  function handleSubmit (e) {
    e.preventDefault();
    if (!isValid) {
      setError(true)
    } else {
      setError(false)
      props.onSearch(values.search);
      resetForm();
    }
  }

  function handleClickCheckBox () {
    props.onClickShort()
  }

  return (
    <section className="search main__search">
        <form className="search__form" name="search" onSubmit={handleSubmit}>
          <div className="search__field">
            <div className="search__icon"></div>
            <input type="search" className={`${(!isValid && error) ? "search__input search__input_error" : "search__input"}`} 
            name="search" id="search-input" placeholder="Фильм" value={values.search || ''} onChange={handleChange}/>
            
            <button type="submit" className="search__button">
              <div className="search__button-icon"></div>
            </button>
          </div>
          <label className="search__label" htmlFor="short-film">
            <input type="checkbox" name="short-film" id="short-film" className="search__checkbox" value="short-film" onClick={handleClickCheckBox}/>
            <span className="search__pseudo-check"></span>
            <span className="search__pseudo-checkbox"></span>
            <span className="form__label-text">Короткометражки</span>
          </label>
        </form>
        <span className="search__input-error">{(!isValid && error) ? 'Нужно ввести ключевое слово' : ''}</span>
      </section>
  )
}

export default SearchForm;