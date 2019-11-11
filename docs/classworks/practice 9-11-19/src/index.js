import './styles.css';

import datepicker from 'js-datepicker';
import 'js-datepicker/dist/datepicker.min.css';

const date = document.querySelector('.date');

date.addEventListener('click', picker);

const picker = datepicker(date);
