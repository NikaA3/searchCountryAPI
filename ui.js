class UI {
  constructor() {
    this.country = document.getElementById("country");
  }
  showCountry(country) {
    const CountryInfo = `
            <img  src="${country[0].flags.svg}" />
            <h3 >${country[0].name.common}</h3>
            <h4 > ${country[0].capital[0]}</h4>
            <p ><span>👫</span>${(+country[0].population / 1000000).toFixed(
              1
            )}</p>
            <p ><span>🗣️</span>${Object.entries(country[0].languages)[0][1]}</p>
            <p ><span>💰</span>${
              Object.entries(Object.entries(country[0].currencies)[0][1])[0][1]
            }</p>
    `;
    this.country.innerHTML = CountryInfo;
  }

  clearInput() {
    this.country.innerHTML = "";
  }
}
