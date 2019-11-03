var temperature = document.getElementById("temp").innerHTML;
var windspeed = document.getElementById("windspd").innerHTML;
var chill;

if (temperature <= 50 && windspeed >= 3) {
    chill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windspeed, 0.16)) + (0.4275 * temperature * Math.pow(windspeed, 0.16));
} else {
    chill = "N/A";
}

windChill = Math.round(chill);

document.getElementById("windchill").innerHTML = windChill;