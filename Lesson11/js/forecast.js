const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=a7d6c26556a1ef569698470329b2444f';

fetch(forecastURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        for (let i = 0, j = 1; i < jsObject.list.length; i++) {
            if (jsObject.list[i].dt_txt.includes('18:00:00')) {
                j++;
            }
            //for (let j = 1; j <= 5; j++) {
            var img = "https://openweathermap.org/img/wn/"
            var day = jsObject.list[i].dt_txt;
            var date = new Date(day);
            var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            if (j == 1) {
                document.getElementById("day1").innerHTML = jsObject.list[i].main.temp;
                document.getElementById("wet1").setAttribute('src', img + jsObject.list[i].weather[0].icon + ".png");
                document.getElementById("wet1").setAttribute('alt', jsObject.list[i].weather.description);
                document.getElementById("firstDay").innerHTML = weekday[date.getDay()];
            } else if (j == 2) {
                document.getElementById("day2").innerHTML = jsObject.list[i].main.temp;
                document.getElementById("wet2").setAttribute('src', img + jsObject.list[i].weather[0].icon + ".png");
                document.getElementById("wet2").setAttribute('alt', jsObject.list[i].weather.description);
                document.getElementById("secondDay").innerHTML = weekday[date.getDay()];
            } else if (j == 3) {
                document.getElementById("day3").innerHTML = jsObject.list[i].main.temp;
                document.getElementById("wet3").setAttribute('src', img + jsObject.list[i].weather[0].icon + ".png");
                document.getElementById("wet3").setAttribute('alt', jsObject.list[i].weather.description);
                document.getElementById("thirdDay").innerHTML = weekday[date.getDay()];
            } else if (j == 4) {
                document.getElementById("day4").innerHTML = jsObject.list[i].main.temp;
                document.getElementById("wet4").setAttribute('src', img + jsObject.list[i].weather[0].icon + ".png");
                document.getElementById("wet4").setAttribute('alt', jsObject.list[i].weather.description);
                document.getElementById("fourthDay").innerHTML = weekday[date.getDay()];
            } else {
                document.getElementById("day5").innerHTML = jsObject.list[i].main.temp;
                document.getElementById("wet5").setAttribute('src', img + jsObject.list[i].weather[0].icon + ".png");
                document.getElementById("wet5").setAttribute('alt', jsObject.list[i].weather.description);
                document.getElementById("fifthDay").innerHTML = weekday[date.getDay()];
            }

            //}
        }

    });