const country = new Country();
const ui = new UI();
const searchCountry = document.getElementById("searchCountry");

searchCountry.addEventListener("keyup", (e) => {
  const typedText = e.target.value;
  if (typedText !== "") {
    country.getCountry(typedText).then((data) => {
      ui.showCountry(data.country);
    });
  } else {
    ui.clearInput();
  }
});
