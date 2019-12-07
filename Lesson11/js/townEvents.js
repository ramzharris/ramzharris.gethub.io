const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var town = document.getElementById('town').innerHTML;

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (eventObject) {
        console.table(eventObject); // temporary code to validate response
        const towns = eventObject['towns'];

        for (let i = 0; i < towns.length; i++) {
            let events = towns[i].events;
            let ecard = document.createElement('section');
            let list = document.createElement('ul');
            let h2 = document.createElement('h2');

            if (town == towns[i].name) {
                h2.textContent = "Upcoming Events for " + towns[i].name;
                for (let j = 0; j < events.length; j++) {
                    let ep = document.createElement('li');
                    ep.textContent = events[j];
                    list.appendChild(ep);
                }
            }

            ecard.appendChild(h2);
            ecard.appendChild(list);
            document.querySelector('div.upcoming').appendChild(ecard);



        }
    })