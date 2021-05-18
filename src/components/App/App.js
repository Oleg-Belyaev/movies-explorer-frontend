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
import PageNotFound from '../PageNotFound/PageNotFound';
import './App.css';

function App() {

  const [isAuthAccept, setIsAuthAccept] = React.useState(true);
  const history = useHistory();

  const handleLogOut = () => {
    setIsAuthAccept(false);
    history.push('/');
  }
  
  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Header auth={isAuthAccept}/>
          <Main />
          <Footer />
        </Route>
        <Route exact path="/movies">
          <Header auth={isAuthAccept}/>
          <Movies />
          <Footer />
        </Route>
        <Route exact path="/saved-movies">
          <Header auth={isAuthAccept}/>
          <SavedMovies />
          <Footer />
        </Route>
        <Route exact path="/profile">
          <Header auth={isAuthAccept}/>
          <Profile logout={handleLogOut}/>
          <Footer />
        </Route>
        <Route exact path="/signin">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Register />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
