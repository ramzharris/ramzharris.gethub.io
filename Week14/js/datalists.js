const dataURL = 'https://ramzharris.github.io/ramzharris.gethub.io/Week14/js/temple.json'

fetch(dataURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject); // temporary code to test if json file loads
        const town = jsObject['town'];

        var label = document.createElement('label');
        var datalist = document.createElement('datalist');
        var input = document.createElement('input');
        var ul = document.createElement('ul');
        var li = document.createElement('li');
        ul.setAttribute('class', "setLoc");
        label.textContent = "Select a Location*:";
        datalist.setAttribute('id', "datalist");
        input.setAttribute('list', "datalist");
        input.setAttribute('action', "thankyou.html");
        input.setAttribute('placeholder', "Select One");

        for (let i = 0; i < town.length; i++) {
            let options = document.createElement('option');
            options.text = town[i].name;
            options.value = town[i].name;
            datalist.appendChild(options);            
        }
        input.appendChild(datalist);
        li.appendChild(label);
        li.appendChild(input);
        ul.appendChild(li);
        document.querySelector('div.location').appendChild(ul);

    })