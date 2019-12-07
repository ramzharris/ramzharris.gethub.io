const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json'

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject); // temporary checking for valid response and towns parsing
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == "Preston" || towns[i].name == "Soda Springs" || towns[i].name == "Fish Haven") {
                let card = document.createElement('section');
                let txtCard = document.createElement('article');
                let h2 = document.createElement('h2');
                let p1 = document.createElement('p');
                let p2 = document.createElement('p');
                let p3 = document.createElement('p');
                let p4 = document.createElement('p');
                let image = document.createElement('img');
                let a = document.createElement('a');

                h2.textContent = towns[i].name;
                p1.textContent = towns[i].motto;
                p1.setAttribute('class', "motto");
                p2.textContent = "Year Founded: " + towns[i].yearFounded;
                p3.textContent = "Population: " + towns[i].currentPopulation;
                p4.textContent = "Average Rain Fall: " + towns[i].averageRainfall;

                image.setAttribute('src', "images/towns/" + towns[i].photo);
                image.setAttribute('alt', towns[i].name);
                a.appendChild(h2);

                txtCard.appendChild(a);
                txtCard.appendChild(p1);
                txtCard.appendChild(p2);
                txtCard.appendChild(p3);
                txtCard.appendChild(p4);
                card.appendChild(txtCard);
                card.appendChild(image);

                document.querySelector('div.townInfo').appendChild(card);
            }
        }
    });