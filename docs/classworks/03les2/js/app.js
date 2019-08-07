'use strict';
const hotels = {
  peris: 5,
  joni: 4,
  hayat: 5,
  redison: 1,
};
function calculateTotalStars(hotels) {
  let sum = 0;
  for (let hotel in hotels) {
    sum += hotels[hotel];
  }
  return sum;
}
function logAllObjectKeys(obj) {
  const arrOfKeys = Object.keys(obj);
  for (let key of arrOfKeys) {
    console.log(`Key is: ${key}`);
  }
}
function logAllObjectValues(obj) {
  const arrOfValues = Object.values(obj);
  for (let value of arrOfValues) {
    console.log(`Value is: ${value}`);
  }
}
// logAllObjectKeys(hotels);
// logAllObjectValues(hotels);
// console.log(calculateTotalStars(hotels));

// console.log(Object.entries(hotels));
const fruits = ['mango', 'banana', 'apple', 'peanapple'];
const newFruits = [...fruits, 'kiwi'];
console.log(newFruits, fruits === newFruits);

const arr = [1, 2, 3];
// max
console.log(Math.max(...arr));

function foo(arr) {
  const res = [...arr];
  for (let i = 0; i < res.length; i++) {
    res[i] = res[i] * 2;
  }
  return res;
}
console.log(foo(arr));
console.log(arr, 'real arr');

const films = [
  {
    rating: 9.8,
    title: 'MIB',
  },
  {
    rating: 8.8,
    title: 'Terminator',
  },
  {
    rating: 0.8,
    title: 'Zashitniki',
  },
  {
    rating: 10,
    title: 'Avatar',
  },
];
function findFilmWithMaxRating(films) {
  let filmWithMaxRating = films.length && films[0];

  for (let film of films) {
    if (filmWithMaxRating.rating < film.rating) {
      filmWithMaxRating = film;
    }
  }
  return filmWithMaxRating;
}
console.log(findFilmWithMaxRating(films));
// spred
const film = {
  rating: 9.8,
  title: 'MIB',
  comments: ['sss', 'bbb'],
};
const newFilm = { ...film };
newFilm.comments[0] = 'hello';
console.log(film.comments[0]);
console.log(film, 'old film');
console.log(newFilm, 'new film');

// rest
const findMax = (...rest) => {
  return Math.max(...rest);
};
console.log(findMax(5, 10, 13, 200));
