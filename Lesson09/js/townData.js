const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json'

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject); // temporary checking for valid response and towns parsing
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) {
            if (i == 1 || i == 4 || i == 5) {
                let card = document.createElement('section');
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
                if (i == 1) {
                    image.setAttribute('src', "images/towns/farmhouse.jpeg");
                    image.setAttribute('alt', "Picture of a Farm House");
                    a.appendChild(h2);
                } else if (i == 4) {
                    image.setAttribute('src', "images/towns/woodenbarn.jpeg");
                    image.setAttribute('alt', "Picture of a Barn");
                    a.setAttribute('href', "preston-7.html");
                    a.appendChild(h2);
                } else {
                    image.setAttribute('src', "images/towns/woodenstructure.jpeg");
                    image.setAttribute('alt', "Picture of a Wooden Structure");
                    a.appendChild(h2);
                }
                
                card.append(a, p1, p2, p3, p4, image);

                document.querySelector('div.townInfo').appendChild(card);
            }
        }
    });