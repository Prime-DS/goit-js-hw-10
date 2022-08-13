import './css/styles.css';
import { debounce } from 'lodash';
import Notiflix from 'notiflix';
import { fetchCountries } from './fetchCountries';

const inputEL = document.querySelector('#search-box');
const listEl = document.querySelector('.country-list');
const countryInfoEl = document.querySelector('.country-info');
const DEBOUNCE_DELAY = 300;

const onSearchCountry = eve => {
  cleanMarkup();
  const nameCountry = eve.target.value.trim().toLowerCase();

  if (nameCountry === '') {
    cleanMarkup();
    return;
  }
  fetchCountries(nameCountry)
    .then(countries => {
      insertMarkup(countries);
    })
    .catch(error => {
      if (error === 'Error 404') {
        Notiflix.Notify.failure('Oops, there is no country with that name');
      }
    });
};

inputEL.addEventListener('input', debounce(onSearchCountry, DEBOUNCE_DELAY));

const addMinMarkup = item => `<li> 
    <img src="${item.flags.svg}" width="50">
    <h2>${item.name.official}</h2>
  </li>`;

const addMaxMarkup = item => `
<li>
<img src="${item.flags.svg}" width=70px>
<p> ${item.name.official}</p>
<p>Capital: ${item.capital}</p>
<p>Population: ${item.population}</p>
<p>Languages: ${Object.values(item.languages)}</p>
</li>
`;

const isertContent = array => {
  if (array.length > 10) {
    Notiflix.Notify.warning(
      'Too many matches found. Please enter a more specific name.'
    );
  } else if (array.length >= 2 && array.length <= 10) {
    return array.reduce((acc, item) => acc + addMinMarkup(item), '');
  } else if (array.length === 1) {
    return array.reduce((acc, item) => acc + addMaxMarkup(item), '');
  }
};

function insertMarkup(array) {
  const result = isertContent(array);
  listEl.insertAdjacentHTML('beforeend', result);
}

function cleanMarkup() {
  listEl.innerHTML = '';
  countryInfoEl.innerHTML = '';
}
