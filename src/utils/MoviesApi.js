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

class MovieApi {
  constructor(options) {
    this._headers = options.headers;
    this._url = options.url;
  }

  getMovie() {
    return fetch(`${this._url}`, {
      headers: this._headers
    })  
    .then(handleOriginalResponse)
  }
}

const movieApi = new MovieApi ({
  headers: {
    'Content-Type': 'application/json'
  },
  url: CONFIG.baseMovieUrl
});

export { movieApi };