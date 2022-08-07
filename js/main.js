// html elements
let glass = document.getElementById("glass");
let search = document.getElementById("search");
let menu = document.getElementById("menu");
let burger = document.getElementById("burger");
let user = document.getElementById("user");
let login = document.getElementById("login");
let dayNight = document.getElementById("day-Night");
let mainBackground = document.getElementById("top");
let one = document.getElementById("one");
let three = document.getElementById("three");
let five = document.getElementById("five");
console.log(one);
// created variables
let searchMood = "on";
let loginMood = "on";
let timeMood = "night";
let activation = "active";
glass.onclick = function () {
    if (searchMood === "on") {
        search.style.display = "flex";
        searchMood = "off";
    } else {
        search.style.display = "none";
        searchMood = "on";
    }
}

user.onclick = function () {
    if (loginMood === "on") {
        login.style.display = "block";
        loginMood = "off";
    } else {
        login.style.display = "none";
        loginMood = "on";
    }
}

dayNight.onclick = function () {
    if (timeMood === "night") {
        mainBackground.style.backgroundColor = "#ddd"
        one.style.backgroundColor = "#fff";
        three.style.backgroundColor = "#fff";
        five.style.backgroundColor = "#fff";
        timeMood = "day";
    } else {
        mainBackground.style.backgroundColor = "#131722"
        one.style.backgroundColor = "#1f263a";
        three.style.backgroundColor = "#1f263a";
        five.style.backgroundColor = "#1f263a";
        timeMood = "night";
    }
}
console.log(timeMood);
burger.onclick = function () {
    if (activation === "active") {
        menu.style.display = "flex";
        activation = "not active";
    } else {
        menu.style.display = "none";
        activation = "active";
    }
}