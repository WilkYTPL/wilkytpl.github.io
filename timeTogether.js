var countDownUp2 = new Date("11.15.2024 11:00").getTime();

var timer2 = setInterval(function() {
    var now = new Date().getTime();
    var distance = now - countDownUp2;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timeTogether").innerHTML = 
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
}, 1000);
