const requestURL = 'https://ramzharris.github.io/ramzharris.gethub.io/Week14/js/temple.json'

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and town parsing
        const town = jsonObject['town'];
        for (let i = 0; i < town.length; i++) {
            if (town[i].name == "Salt Lake" || town[i].name == "Laie, Hawaii" || town[i].name == "Brigham City, Utah" || town[i].name == "St. Louis, Missouri") {
                let card = document.createElement('section');
                let txtCard = document.createElement('article');
                let h2 = document.createElement('h2');
                let p1 = document.createElement('p');
                let p2 = document.createElement('p');
                let p3 = document.createElement('p');
                let p4 = document.createElement('p');
                let p5 = document.createElement('p');
                let image = document.createElement('img');
                let ul = document.createElement('ul');

                let service = town[i].services;
                
                
                h2.textContent = town[i].name;
                p1.textContent = town[i].street;
                p2.textContent = town[i].city + " " + town[i].zip;
                p3.textContent = town[i].phone;
                p4.textContent = "Services Available: " + town[i].services;
               
                /*for (let j = 0; j < service.length; j++) {
                    let li = document.createElement('li');
                    li.textContent = serv;
                    ul.appendChild(li);
                }*/
                p5.textContent = "Temple Closures: " + town[i].closure;

                image.setAttribute('src', "images/" + town[i].photo);
                image.setAttribute('alt', town[i].name);
                
                txtCard.appendChild(h2);
                txtCard.appendChild(p1);
                txtCard.appendChild(p2);
                txtCard.appendChild(p3);
                txtCard.appendChild(p4);
                txtCard.appendChild(p5);
                card.appendChild(txtCard);
                card.appendChild(image);

                document.querySelector('div.templeInfo').appendChild(card);
            }
        }
    });