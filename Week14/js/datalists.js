//const datas = 'temple.json'

fetch("./js/temple.json")
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
    })