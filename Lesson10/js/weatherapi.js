const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=a7d6c26556a1ef569698470329b2444f';

fetch(weatherURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        let temperature = jsObject.main.temp;
        let spd = jsObject.wind.speed;
        let chill;

        document.getElementById("temp").innerHTML = jsObject.main.temp.toFixed(0);
        document.getElementById("windspd").innerHTML = jsObject.wind.speed.toFixed(0);
        document.getElementById("humidity").innerHTML = jsObject.main.humidity;
        document.getElementById("currently").textContent = jsObject.weather[0].main;
        
        if (temperature <= 50 && spd >= 3) {
            chill = 35.74 + (0.6215 * temperature) - (35.76 * Math.pow(spd, 0.16)) + (0.4275 * temperature * Math.pow(spd, 0.16));
            document.getElementById("windchill").innerHTML = Math.round(chill);
        } else {
            chill = "N/A";
            document.getElementById("windchill").innerHTML = chill;
        }

        
        
    });