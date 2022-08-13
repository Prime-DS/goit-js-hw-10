export default function fetchCountries(name) {
  fetch(
    `https://restcountries.com/v2/name/${name}?fields=name,capital,currency,flags,languages`
  ).then(response => {
    if (response === 200) {
      return response.jeson();
    }
    if (response === 404) {
      return Promise.reject('eror 404!');
    }
  });
}
