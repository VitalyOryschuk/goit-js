'use strict'

const API_KEY = '76ed63f80dba3e42bfe198c0806fa9ba';
const IMG_SRC = 'https://image.tmdb.org/t/p/w500_and_h282_face/';
const movieListContainer = document.querySelector('.movie-list');
let currentPage = 1;
const fetchMovieList = (page = 1) => {
  currentPage += 1;
  return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`)
    .then(result => result.json())
}
const createMovieItem = ({
  title,
  vote_average,
  vote_count,
  poster_path
}) => {
  return ` <div class="movie-item">
  <img src="${IMG_SRC + poster_path}" alt="${title}" class="movie-item__img">
  <h2 class="movie-item__title">${title}</h2>
  <span class="movie-item__rating">Rating(${vote_count}): ${vote_average}</span>
</div>`
}
const createMovieLIst = (movieList) => {
  return movieList.reduce((acc, movie) => {
    return acc + createMovieItem(movie)
  }, '')
}

const renderMovieList = (movieList) => {
  movieListContainer.insertAdjacentHTML('beforeend', createMovieLIst(movieList))
}

const getMovies = (page) => {
  fetchMovieList().then(data => {
      console.log(data)
      renderMovieList(data.results)
    })
    .catch(error => {
      throw error
    })
}
const addInfinityScroll = () => {
  window.addEventListener('scroll', () => {
    const movieListBottom = movieListContainer.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;
    // console.log(window.pageYOffset, window.innerHeight)
    if (movieListBottom / 2 <= windowHeight) {
      console.log('rich bottom');
      getMovies(currentPage);
    }
  })
}


(function () {
  getMovies();
  addInfinityScroll();
})()