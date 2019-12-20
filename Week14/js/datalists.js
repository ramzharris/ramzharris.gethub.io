//const datas = 'temple.json'

fetch("temple.json")
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
    })