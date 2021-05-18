import './SearchForm.css';

function SearchForm () {
  return (
    <section className="search main__search">
        <form className="search__form" name="search">
          <div className="search__field">
            <div className="search__icon"></div>
            <input type="search" className="search__input" placeholder="Фильм" />
            <button type="submit" className="search__button">
              <div className="search__button-icon"></div>
            </button>
          </div>
          <label className="search__label" htmlFor="short-film">
            <input type="checkbox" name="short-film" id="short-film" className="search__checkbox" value="short-film" required/>
            <span className="search__pseudo-check"></span>
            <span className="search__pseudo-checkbox"></span>
            <span className="form__label-text">Короткометражки</span>
          </label>
        </form>
      </section>
  )
}

export default SearchForm;