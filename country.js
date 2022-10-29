class Country {
  async getCountry(country) {
    const countryResponse = await fetch(
      `https://restcountries.com/v3.1/name/${country}`
    );
    const countryData = await countryResponse.json();
    return { country: countryData };
  }
}
