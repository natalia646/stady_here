const container = document.querySelector(".container");
fetch(`https://restcountries.com/v3.1/name/ukraine`)
    .then(response => response.json())
    .then(data => console.log(data[0]));



function getCountri(nameCountri) {
  fetch(`https://restcountries.com/v3.1/name/${nameCountri}`)
    .then((response) => response.json())
    .then((dataArr) => {
      const [data] = dataArr;

      const currenciName = Object.values(data.currencies)[0].name;
      const currenciSymbol = Object.values(data.currencies)[0].symbol;
      const language = Object.values(data.languages)[0];

      const article = `
<article>
    <img src="${data.flags.png}" alt="${data.flags.alt}" />
    <div>
      <h3>${nameCountri}</h3>
      <h4>${data.region}</h4>
      <p>${(data.population / 1000000).toFixed(1)} million</p>
      <p>${language}</p>
      <p>${currenciSymbol} ${currenciName}</p>
    </div>
</article>.`;

      container.insertAdjacentHTML("beforeend", article);

    });
}
getCountri("Ukraine");
getCountri("USA");
// getCountri("Italy");