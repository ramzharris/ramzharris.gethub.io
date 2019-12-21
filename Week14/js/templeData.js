const requestURL = 'https://ramzharris.github.io/ramzharris.gethub.io/Week14/js/temple.json'

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject); // temporary checking for valid response and town parsing
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
                let ul2 = document.createElement('ul');
                
                let wS = document.createElement('section');
                let wh2 = document.createElement('h2');
                let wp1 = document.createElement('p');
                let wp2 = document.createElement('p');
                let wp3 = document.createElement('p');
                let wp4 = document.createElement('p');
                let wp5 = document.createElement('p');
                let wa1 = document.createElement('a');
                let wa2 = document.createElement('a');
                let wa3 = document.createElement('a');
                let wa4 = document.createElement('a');
                let wa5 = document.createElement('a');
                
                // had an idea to get my local weather working
                // but ran out of time trying to figure it out
                /*let id1 = "5780993";
                let id2 = "5850027";
                let id3 = "4381072";
                let id4 = "5771960";

                if (town[i].name == "Salt Lake") {
                    h2.setAttribute('id', "5780993");
                } else if ( town[i].name == "Laie, Hawaii") {
                    h2.setAttribute('id', "5850027")
                }*/

                wS.setAttribute('class', "weathersummary")
                wp1.textContent = "Currently: ";
                wp2.textContent = "Temperature: ";
                wp3.textContent = "Wind Chill: ";
                wp4.textContent = "Humidity: ";
                wp5.textContent = "Wind Speed: ";
                wa1.setAttribute('id',"currently");
                wa2.setAttribute('id',"temp");
                wa3.setAttribute('id',"windchill");
                wa4.setAttribute('id',"humidity");
                wa5.setAttribute('id',"windspd");
                wp1.appendChild(wa1);
                wp2.appendChild(wa2);
                wp3.appendChild(wa3);
                wp4.appendChild(wa4);
                wp5.appendChild(wa5);

                wS.appendChild(wp1);
                wS.appendChild(wp2);
                wS.appendChild(wp3);
                wS.appendChild(wp4);
                wS.appendChild(wp5);


                let service = town[i].services;
                let close = town[i].closure;
                
                
                h2.textContent = town[i].name;
                h2.setAttribute('id', "town" + i);
                p1.textContent = town[i].street;
                p2.textContent = town[i].city + " " + town[i].zip;
                p3.textContent = town[i].phone;
                p4.textContent = "Services Available:";
               
                for (let j = 0; j < service.length; j++) {
                    let li = document.createElement('li');
                    li.textContent = service;
                    ul.appendChild(li);
                }
                p4.appendChild(ul);
                p5.textContent = "Temple Closures:"
                if (town[i].name == "Salt Lake") {
                    let li = document.createElement('li');
                    li.textContent = close;
                    ul2.appendChild(li);
                } else {
                    for (let j = 0; j < close.length; j++) {
                        let li = document.createElement('li');
                        li.textContent = close;
                        ul2.appendChild(li);
                    }
                }
                p5.appendChild(ul2);

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
                card.appendChild(wS);

                document.querySelector('div.templeInfo').appendChild(card);

            }
        }
    });

    