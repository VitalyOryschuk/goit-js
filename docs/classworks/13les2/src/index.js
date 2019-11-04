'use strict';
import './styles.css';
import search from './search';
import infiniteMovieList from './infiniteMovieList';

search();
infiniteMovieList();

const regExp = /(my) (name) (is)/g;
const str = 'my name is name';
console.log(str.match(regExp));
console.log(str.replace(regExp, '$3 $2 $1'));
