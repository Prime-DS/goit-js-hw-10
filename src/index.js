import './css/styles.css';
import Notiflix from 'notiflix';
import { fetchCountries } from './fetchCountries';
const inputEL = document.querySelector('[id="search-box"]');
const listEl = document.querySelector('.country-list');
const countryInfoEl = document.querySelector('.country-info');
const DEBOUNCE_DELAY = 300;

const url = `https://restcountries.com/v3.1/name/`;

inputEL.addEventListener('input', debounce(fetchCountries, DEBOUNCE_DELAY));

const onSearchCountry = eve => {
  const nameCountry = eve.terget.value.trim().toLowerCase();

  if (nameCountry === '') {
    return;
  }
    fetchCountries(nameCountry)=>
};
// const handleSubmit = e => {
//   e.preventDefault();
//   const category = categoryEl.value;
//   const pageSize = pageSizeEl.value;
//   const url = `${BASE_URL}/top-headlines?apiKey=${KEY}&category=${category}&country=ua&pageSize=${pageSize}&page=${currentPage}`;

//   fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       if (e.type === 'submit') {
//         updateUi(data, pageSize);
//       }
//       isertContent(data.articles);
//       if (currentPage > Math.ceil(data?.totalResults / pageSize)) {
//         loadMoreBtn.classList.add('hide');
//       }
//       // console.log('data', data);
//     })
//     .catch(error => {
//       console.log('error', error);
//     })
//     .finally(() => {
//       currentPage += 1;
//     });
// };
