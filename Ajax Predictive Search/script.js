const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];
fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));


function numberWithCommas (x)
{
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function predictSearch(e)
{
    const filteredList = cities.filter(item => item.city.includes(this.value) || item.state.includes(this.value));
    const html = filteredList.map(place => {
       const regex = new RegExp(this.value, 'gi');
       const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
       const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
       const commaNumber = numberWithCommas(place.population);
        return `
       <li>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="population">${commaNumber}</span>
        </li>
        `;
    }).join('');
    suggestions.innerHTML = html;

}

const search = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
search.addEventListener('keyup', predictSearch);
