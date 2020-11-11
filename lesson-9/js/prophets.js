const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const prophets = jsonObject['prophets'];
    for (let i = 0; i < prophets.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let bd = document.createElement('p');
        let bp = document.createElement('p');
        let img = document.createElement('img');

        h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
        bd.textContent = 'Date of Birth: ' + prophets[i].birthdate;
        bp.textContent = 'Place of Birth: ' + prophets[i].birthplace;
        img.setAttribute('src', prophets[i].imageurl);
        img.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + ' - ' + prophets[i].order);

        card.appendChild(h2);
        card.appendChild(bd);
        card.appendChild(bp);
        card.appendChild(img);

        document.querySelector('div.cards').appendChild(card);


    }
  });


