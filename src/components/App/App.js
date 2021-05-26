import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Register from '../Register/Register';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import PageNotFound from '../PageNotFound/PageNotFound';
import { mainApi } from '../../utils/MainApi';
import { movieApi } from '../../utils/MoviesApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import CONFIG from '../../config';
import './App.css';

function App() {

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [serserError, setSerserError] = React.useState('');
  const [currentUser, setCurrentUser] = React.useState();
  const [isChange, setIsChange] = React.useState(false);
  const [cards, setCards] = React.useState([]);
  const [cardsSeved, setCardsSeved] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isShort, setIsShort] = React.useState(false);
  const [isShortSave, setIsShortSave] = React.useState(false);
  const [isMore, setIsMore] = React.useState(false);
  const [defaultCount, setDefaultCount] = React.useState(null);
  const [countCards, setcountCards] = React.useState(null);
  const [isEmpty, setIsEmpty] = React.useState(false);
  const [isErrorSearch, setIsErrorSearch] = React.useState(false);
  const [isEmptySaved, setIsEmptySaved] = React.useState(false);
  const [isErrorSearchSaved, setIsErrorSearchSaved] = React.useState(false);
  const history = useHistory();

  function handleRegister(newUserData) {
    mainApi.signUp(newUserData)
    .then(() => {
      mainApi.singIn(newUserData)
      .then((userData) => {
      localStorage.setItem('token', userData.token);
      setLoggedIn(true);
      history.push('/movies');
      })
      .catch((err) => {
        setSerserError(err);
      })
    })
    .catch((err) => {
      setSerserError(err);
    })
  }

  function handleLogin(newUserData) {
    mainApi.singIn(newUserData)
    .then((userData) => {
    localStorage.setItem('token', userData.token);
    setLoggedIn(true);
    history.push('/movies');
    })
    .catch((err) => {
      setSerserError(err);
    })
  }

  function handleUpdateUser(userData) {
    const token = localStorage.getItem('token')
    mainApi.editUserInfo(userData, token)
    .then((data) => {
      setCurrentUser(data);
      setIsChange(false);
    })
    .catch((err) => {
      setSerserError(err);
    })
  }

  function handleChangeUserData() {
    setIsChange(true);
  }

  function handleSearch(word) {
    setIsErrorSearch(false)
    setcountCards(defaultCount);
    setIsLoading(true);
    movieApi.getMovie()
    .then((data) => {
      if (isShort) {
        const cardsFound = data.filter((card) => {
          return (card.nameRU.toLowerCase().includes(word.toLowerCase()) 
          && card.duration < CONFIG.maxDuration)
        })
        for (let i = 0; i < cardsSeved.length; i++) {
          for (let j = 0; j < cardsFound.length; j++) {
            if (cardsFound[j].id === cardsSeved[i].movieId) {
              cardsFound[j].isSaved = true
            }
          }
        }
        setCards(cardsFound);
        (cardsFound.length === 0) ? setIsEmpty(true) : setIsEmpty(false)
      } else {
        const cardsFound = data.filter((card) => {
          return card.nameRU.toLowerCase().includes(word.toLowerCase())
        })
        for (let i = 0; i < cardsSeved.length; i++) {
          for (let j = 0; j < cardsFound.length; j++) {
            if (cardsFound[j].id === cardsSeved[i].movieId) {
              cardsFound[j].isSaved = true
            }
          }
        }
        setCards(cardsFound);
        (cardsFound.length === 0) ? setIsEmpty(true) : setIsEmpty(false)
      }
    })
    .catch((err) => {
      setIsErrorSearch(true)
      setIsEmpty(false)
    })
    .finally(() => {
      setIsLoading(false)
    })
  }

  function handleSearchSeved(word) {
    const token = localStorage.getItem('token');
    mainApi.getSevedMovie(token)
    .then((cards) => {
      if (isShortSave) {
        const cardsFound = cards.filter((card) => {
          return (card.nameRU.toLowerCase().includes(word.toLowerCase()) 
          && card.duration < CONFIG.maxDuration)
        })
        setCardsSeved(cardsFound);
        (cardsFound.length === 0) ? setIsEmptySaved(true) : setIsEmptySaved(false)
      } else {
        const cardsFound = cards.filter((card) => {
          return card.nameRU.toLowerCase().includes(word.toLowerCase())
        })
        setCardsSeved(cardsFound);
        (cardsFound.length === 0) ? setIsEmptySaved(true) : setIsEmptySaved(false)
      }
    })
    .catch(() => {
      setIsErrorSearchSaved(true)
      setIsEmptySaved(false)
    })
  }

  function handleClickShort () {
    const short = isShort;
    short ? setIsShort(false) : setIsShort(true)
    if(cards.length !== 0) {
      const newCards = cards.filter((card) => card.duration < CONFIG.maxDuration)
      setCards(newCards)
    } 
  }

  function handleClickShortSave () {
    const token = localStorage.getItem('token');
    const short = isShortSave;
    short ? setIsShortSave(false) : setIsShortSave(true)
    if(cardsSeved.length !== 0 && !short) {
      const newCards = cardsSeved.filter((card) => card.duration < CONFIG.maxDuration)
      setCardsSeved(newCards)
    } else if(short) {
      mainApi.getSevedMovie(token)
      .then((cards) => {
        setCardsSeved(cards)
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }

  function handleLogOut () {
    localStorage.removeItem('token');
    setLoggedIn(false);
    history.push('/');
  }

  function handleClickMore () {
    const width = window.innerWidth;
    if (width >= CONFIG.tabletWidth) {
      const count = countCards + 3;
      setcountCards(count)
    } else if (width >= CONFIG.mobileWidth && width < CONFIG.tabletWidth) {
      const count = countCards + 2;
      setcountCards(count)
    } else {
      const count = countCards + 1;
      setcountCards(count)
    }
  }

  function handleSaveCard (card) {
    const token = localStorage.getItem('token');
    mainApi.saveCard(card, token)
    .then((card) => {
      card.isSaved = true;
      const newCards = cards.filter((item) => {
        if(item.movieId) {
          return item.movieId !== card.movieId
        } else {
          return item.id !== card.movieId
        }
      })
      setCards([card,  ...newCards])
      setCardsSeved([card,  ...cardsSeved])
    })
    .catch((err) => {
      console.log(err);
    })
  }

  function handleDeleteCard (card) {
    const token = localStorage.getItem('token');
    mainApi.deleteCard(card, token)
    .then((card) => {
      card.isSaved = false;
      const newCards = cards.filter((item) => {
        if(item.movieId) {
          return item.movieId !== card.movieId
        } else {
          return item.id !== card.movieId
        }
      })
      const newCradsSaved = cardsSeved.filter((item => item.movieId !== card.movieId))
      setCards([card,  ...newCards])
      setCardsSeved([...newCradsSaved])
    })
    .catch((err) => {
      console.log(err);
    })
  }

  React.useEffect(() => {
    if(countCards >= cards.length) {
      setIsMore(false)
    } else {
      setIsMore(true)
    }
  }, [cards.length, countCards])

  React.useEffect(() => {
    if(localStorage.getItem('token')) {
      const token = localStorage.getItem('token')
      mainApi.checkToken(token)
      .then((res) => {
        if(res) {
          setLoggedIn(true);
          history.push('/')
        }
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }, [history])

  React.useEffect(() => {
    if (loggedIn) {
      const token = localStorage.getItem('token');
      Promise.all([
        mainApi.getUserInfo(token),
        movieApi.getMovie(),
        mainApi.getSevedMovie(token)
      ]).then(([userData, cards, cardsSaved]) => { 
        setCurrentUser(userData);
        localStorage.setItem('movie', JSON.stringify(cards))
        setCardsSeved(cardsSaved)
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }, [loggedIn])

  React.useEffect(() => {
    const width = window.innerWidth;
    if (width >= CONFIG.tabletWidth) {
      setDefaultCount(CONFIG.descCount)
      setcountCards(CONFIG.descCount)
    } else if (width >= CONFIG.mobileWidth && width < CONFIG.tabletWidth) {
      setDefaultCount(CONFIG.tabletCount)
      setcountCards(CONFIG.tabletCount)
    } else {
      setDefaultCount(CONFIG.mobileCount)
      setcountCards(CONFIG.mobileCount)
    }
  }, [])
  
  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route exact path="/">
            <Header auth={loggedIn}/>
            <Main />
            <Footer />
          </Route>
          <Route exact path="/movies">
            <Header auth={loggedIn}/>
            <ProtectedRoute component={Movies} loggedIn={loggedIn} onSearch={handleSearch} cards={cards} 
            isLoading={isLoading} onClickShort={handleClickShort} more={isMore} countCards={countCards}
            onClickMore={handleClickMore} onSave={handleSaveCard} onDelete={handleDeleteCard}
            emptySearch={isEmpty} errorSearch={isErrorSearch}/>
            <Footer />
          </Route>
          <Route exact path="/saved-movies">
            <Header auth={loggedIn}/>
            <ProtectedRoute component={SavedMovies} loggedIn={loggedIn} cards={cardsSeved} 
            countCards={countCards} onDelete={handleDeleteCard} onSearch={handleSearchSeved} 
            onClickShort={handleClickShortSave} emptySearch={isEmptySaved} errorSearch={isErrorSearchSaved}/>
            <Footer />
          </Route>
          <Route exact path="/profile">
            <Header auth={loggedIn}/>
            <ProtectedRoute component={Profile} loggedIn={loggedIn} logout={handleLogOut} onUpdateUser={handleUpdateUser} error={serserError}
            onChange={handleChangeUserData} change={isChange}/>
            <Footer />
          </Route>
          <Route exact path="/signin">
            <Login onLogin={handleLogin} errorLogin={serserError}/>
          </Route>
          <Route exact path="/signup">
            <Register onRegister={handleRegister} errorRegistr={serserError}/>
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
