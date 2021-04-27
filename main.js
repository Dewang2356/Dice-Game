const btn = document.querySelector(".btn");
const com = document.querySelectorAll(".com");
const win = document.querySelector(".win");
var a;
var b;
btn.addEventListener('click', function() {
    a = Math.floor((Math.random() * 6) + 1);
    b = Math.floor((Math.random() * 6) + 1);
    com[0].style.animation = 'rot 1s linear infinite';
    com[1].style.animation = 'pot 1s linear infinite';
    win.style.opacity = '0';
    setTimeout(function() {
        com[0].style.animation = 'none';
        com[1].style.animation = 'none';
        win.style.opacity = '1';
    }, 100);
    com[0].src = a + ".png";
    com[1].src = b + ".png";
    if (a > b) {
        win.innerHTML = "Dice 1 is Winner";

    } else if (a == b) {
        win.innerHTML = "TIE";

    } else {
        win.innerHTML = "Dice 2 is Winner";

    }

});