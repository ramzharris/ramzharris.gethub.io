
    var today = new Date();

    var weekday = new Array(7);
    weekday[0] = 0;
    weekday[1] = 1;
    weekday[2] = 2;
    weekday[3] = 3;
    weekday[4] = 4;
    weekday[5] = 5;
    weekday[6] = 6;


    var day = weekday[today.getDay()];

    var x = document.getElementById("hideornot");

    if (day == 5) {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
