/* 26.MAR.2019 ************************************************************* */

/* GLOBAL VARIABLES ******************************************************** */

const countriesWrapper = document.querySelector('.countries-wrapper');

const subtitle = document.querySelector('.subtitle');

const searchInput = document.querySelector('.search-input');

const buttons = document.querySelector('.buttons');

let alphaByName = true;
let alphaByCapital = false;
let descendingByPopulation = false;



/* FUNCTIONS *************************************************************** */
const showCountries = (array) => {
    countryDivInnerHtml = '';
    countriesWrapper.innerHTML = '';

    array.forEach((country, i) => {
        countryDivInnerHtml += createCountryDivInnerHtml(country);
    });

    countriesWrapper.innerHTML = countryDivInnerHtml;

};



buttons.addEventListener('click', e => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.className);
});



const createCountryDivInnerHtml = object => {
    const {name, capital, languages, population, flag} = object;
    countryDivInnerHtml =
    `<div>
        <img src="${flag}" />
        <p>${name}</p>
        <p>${capital}</p>
        <p>${languages.join(', ')}</p>
        <p>${population.toLocaleString()}</p>
    </div>`
    return countryDivInnerHtml;
};



searchInput.addEventListener('input', e => {
    countriesWrapper.innerHTML = '';
    let searchTerm = e.target.value.toLowerCase();
    showCountries(filterCountries(countries, searchTerm));
});



const filterCountries = (array, search) => {
    const filteredCountries = array.filter(country => {
        let {name, capital, languages} = country;
        let isName = name.toLowerCase().includes(search);
        let isCapital = capital.toLowerCase().includes(search);
        let isLanguages = languages.join(', ').toLowerCase().includes(search);

        return isName || isCapital || isLanguages;
    });

    return filteredCountries;
};



/* EXECUTION *************************************************************** */

subtitle.textContent = `Showing ${countries.length} countries.`;
showCountries(countries);