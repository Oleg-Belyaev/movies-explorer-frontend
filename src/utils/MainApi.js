import CONFIG from "../config"

const handleOriginalResponse = (res) => {
  if (res.ok) {
    return res.json()
  } else {
    return res.json()
    .then((data) => {
      return Promise.reject(`ошибка: ${res.status} ${data.message}`)
    })
  }
};

class MainApi {
  constructor(options) {
    this._headers = options.headers;
    this._url = options.url;
  }

  getUserInfo(token) {
    this._headers.authorization = `Bearer ${token}`;
    return fetch(`${this._url}/users/me`, {
      headers: this._headers
    })  
    .then(handleOriginalResponse)
  }

  editUserInfo(data, token) {
    this._headers.authorization = `Bearer ${token}`;
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        email: data.email 
      })
    })  
    .then(handleOriginalResponse)
  }

  signUp(newUserData) {
    return fetch(`${this._url}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: newUserData.name,
        email: newUserData.email,
        password: newUserData.password,
      })
    })
    .then(handleOriginalResponse)
  }

  singIn(UserData) {
    return fetch(`${this._url}/signin`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        email: UserData.email,
        password: UserData.password,
      })
    })
    .then(handleOriginalResponse)
  }

  checkToken(token) {
    this._headers.authorization = `Bearer ${token}`;
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: this._headers
    })
    .then(handleOriginalResponse)
  }

  saveCard(card, token) {
    const redactImg = (card) => {
      if (card.image.url) {
        return `${CONFIG.baseMovieImageUrl}${card.image.url}`
      } else {
        return card.image
      }
    }
    const redactTrailer = (card) => {
      if (card.trailerLink) {
        return card.trailerLink
      } else {
        return card.trailer
      }
    }

    const redactThumbnail = (card) => {
      if (card.image.formats) {
        return `${CONFIG.baseMovieImageUrl}${card.image.formats.thumbnail.url}`
      } else {
        return card.thumbnail
      }
    }

    const redactId = (card) => {
      if (card.movieId) {
        return card.movieId
      } else {
        return card.id
      }
    }

    this._headers.authorization = `Bearer ${token}`;
    return fetch(`${this._url}/movies`, {
    method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        country: card.country, 
        director: card.director, 
        duration: card.duration, 
        year: card.year,
        description: card.description, 
        image: redactImg(card), 
        trailer: redactTrailer(card), 
        nameRU: card.nameRU, 
        nameEN: card.nameEN, 
        thumbnail:  redactThumbnail(card), 
        movieId: redactId(card),
      })
    })
    .then(handleOriginalResponse)
  }

  deleteCard(card, token) {
    this._headers.authorization = `Bearer ${token}`;
    return fetch(`${this._url}/movies/${card._id}`, {
    method: 'DELETE',
      headers: this._headers,
    })
    .then(handleOriginalResponse)
  }

  getSevedMovie(token) {
    this._headers.authorization = `Bearer ${token}`;
    return fetch(`${this._url}/movies`, {
      method: 'GET',
      headers: this._headers
    })
    .then(handleOriginalResponse)
  }
}

const mainApi = new MainApi ({
  headers: {
    'Content-Type': 'application/json'
  },
  url: CONFIG.baseUrl
});

export { mainApi };