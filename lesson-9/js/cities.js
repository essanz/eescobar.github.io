const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {
        let card = document.createElement('section');
        let div = document.createElement('div');
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let yf = document.createElement('p');
        let pop = document.createElement('p');
        let arf = document.createElement('p');
        let img = document.createElement('img');

        if (towns[i].name == 'Fish Haven' || towns[i].name == 'Preston' || towns[i].name == 'Soda Springs') { 
          h2.textContent = towns[i].name;
          h3.textContent = towns[i].motto;
          yf.textContent = 'Year Founded: ' + towns[i].yearFounded;
          pop.textContent = 'Population: ' + towns[i].currentPopulation;
          arf.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
          img.setAttribute('src', 'images/' + towns[i].photo);
          img.setAttribute('alt', towns[i].name);

          div.appendChild(h2);
          div.appendChild(h3);
          div.appendChild(yf);
          div.appendChild(pop);
          div.appendChild(arf);
          card.appendChild(div);
          card.appendChild(img); 

          document.querySelector('div.towns').appendChild(card);
        
        }
    } 
  }) ;


