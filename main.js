// Elemnts
let menu = document.querySelector(".menu"),
    burgerIcon = document.querySelector(".menu-control .burger");
//Variables
let duration = 1000;
// Functions
// 1 - menu show and hiding  
let burgerSpans = Array.from(document.querySelectorAll(".burger span"));
let menuLi = Array.from(document.querySelectorAll(".menu li"));
//
burgerIcon.onclick = () => {
    burgerSpans.forEach((span) => {
        span.classList.toggle("close");
    });
    //
    menu.classList.toggle("show-ul");
    //
    menuLi.forEach((li, index) => {
        setTimeout(() => {
            li.classList.toggle("show-li");
        }, index * 100)
    })
}
// call All circles
let controlCircles = Array.from(document.querySelectorAll(".control li i"));
// [[[[login circle]]]]
controlCircles[0].onclick = () => {
    document.querySelector(".login").classList.toggle("show-login");
    controlCircles[0].classList.toggle("pressed");
}
// [[[[search circle]]]]
let searchDiv = document.querySelector(".search-div"),
    searchInput = document.querySelector(".search-div .search-input"),
    searchResult = document.querySelector(".search-result"),
    searchBtn = document.querySelector(".search-div button");
//
controlCircles[1].onclick = () => {
    controlCircles[1].classList.toggle("pressed")
    searchDiv.classList.toggle("show-search");
    searchInput.focus();
}
document.querySelector(".xmark").onclick = () => {
    searchDiv.classList.remove("show-search");
    searchResult.classList.remove("show-result");
    controlCircles[1].classList.remove("pressed");
}
// [[[[dayNight circle]]]]
let sections = Array.from(document.querySelectorAll("body section")),
    triangles = Array.from(document.querySelectorAll(".triangle"));
//
controlCircles[2].onclick = () => {
    controlCircles[2].classList.toggle("pressed");
    if (controlCircles[2].classList.contains("fa-sun")) {
        controlCircles[2].classList.replace("fa-sun", "fa-moon");
        //
        sections.forEach((section, index) => {
            index % 2 != 0
                ? section.style.backgroundColor = "#fff"
                : section.style.backgroundColor = "#ddd";
        });
        //
        triangles.forEach((triangle, index) => {
            index % 2 != 0
                ? triangle.style.cssText = `border-color: #ddd transparent transparent;`
                : triangle.style.cssText = `border-color: #fff transparent transparent;`;
        });
        //
        allCards.forEach(card => card.style.backgroundColor = "#f1f1f1");
        allH3.forEach(h3 => h3.style.color = "#029dbc");

    } else {
        controlCircles[2].classList.replace("fa-moon", "fa-sun");
        //
        sections.forEach((section, index) => {
            index % 2 != 0
                ? section.style.backgroundColor = "#1f263a"
                : section.style.backgroundColor = "#131722";
        });
        //
        triangles.forEach((triangle, index) => {
            index % 2 != 0
                ? triangle.style.cssText = `border-color: #131722 transparent transparent;`
                : triangle.style.cssText = `border-color: #1f263a transparent transparent;`;
        });
        //
        allCards.forEach(card => card.style.backgroundColor = "#181f31");
        allH3.forEach(h3 => h3.style.color = "#fff");
    }
}

// [[[[main single slider]]]]
let singleImgs = Array.from(document.querySelectorAll(".slider img"));
let singlebullets = Array.from(document.querySelectorAll(".bullets li"));

let singleCurrent = 0;
//
singleSliderImgs()
//
function singleSliderImgs() {
    singleImgs.forEach(img => img.classList.remove("active"))
    singlebullets.forEach(bullet => bullet.classList.remove("active"))
    //
    singleImgs[singleCurrent].classList.add("active");
    singlebullets[singleCurrent].classList.add("active");
    //
    document.querySelector('.title').innerHTML = singleImgs[singleCurrent].dataset.name;
}
singlebullets.forEach((bullet, index) => {
    bullet.onclick = () => {
        singleCurrent = index;
        singleSliderImgs();
    }
});
//
let singleInterval = setInterval(() => {
    if ((singleCurrent + 1) === singleImgs.length) {
        singleCurrent = 0;
    } else {
        singleCurrent++;
    }
    singleSliderImgs();
}, 5000);

// ((((((DATA))))))
// fixed Anime Data
let cradFA = Array.from(document.querySelectorAll(".slider-FA .card")),
    rightFA = document.querySelector(".fixed-anime .control-arrow .right"),
    leftFA = document.querySelector(".fixed-anime .control-arrow .left"),
    currentFA = 2;
// Most Viewed Data
let cradMV = Array.from(document.querySelectorAll(".slider-MV .card")),
    rightMV = document.querySelector(".most-viewed .control-arrow .right"),
    leftMV = document.querySelector(".most-viewed .control-arrow .left"),
    currentMV = 0;
// Last Animes Data
let cardLA = Array.from(document.querySelectorAll(".slider-LA .card")),
    rightLA = document.querySelector(".last-animes .control-arrow .right"),
    leftLA = document.querySelector(".last-animes .control-arrow .left"),
    currentLA = 0;

// [[[[Fixed Anime Slider Functio]]]]
function slideFA() {
    removeClassSlide(cradFA)
    cradFA[currentFA].classList.add("slide");
    cradFA[currentFA + 1].classList.add("slide");
    //
    currentFA === 0
        ? rightFA.classList.add("disabled")
        : rightFA.classList.remove("disabled");
    //
    currentFA === (cradFA.length - 2)
        ? leftFA.classList.add("disabled")
        : leftFA.classList.remove("disabled");
}
// right arrow function => previous
rightFA.onclick = () => {
    if (rightFA.classList.contains("disabled")) {
        false;
    } else {
        currentFA--;
    }
    slideFA();
}
// left arrow function => next
leftFA.onclick = () => {
    if (leftFA.classList.contains("disabled")) {
        false;
    } else {
        currentFA++;
    }
    slideFA();
}

// ((((((GENRAL FUNCTION))))))
// remove class slide from all card before sort
function removeClassSlide(cardX) {
    cardX.forEach((card) => {
        card.classList.remove("slide");
    });
}
// Add First Two Crads In Array
function firstTwoCard(cradX, current) {
    cradX[current].classList.add("slide");
    cradX[current + 1].classList.add("slide");
}
// Slider All Function
function sliderAll(cardX, current, left, right) {
    removeClassSlide(cardX);
    firstTwoCard(cardX, current);
    let maxLength = (cardX.length - 2);
    //
    if (window.innerWidth > 768 && window.innerWidth < 991) {
        cardX[current + 2].classList.add("slide");
        cardX[current + 3].classList.add("slide");
        maxLength = (cardX.length - 4);
    } else if (window.innerWidth > 992 && window.innerWidth < 1199) {
        cardX[current + 2].classList.add("slide");
        cardX[current + 3].classList.add("slide");
        cardX[current + 4].classList.add("slide");
        maxLength = (cardX.length - 5);
    } else if (window.innerWidth > 1200) {
        cardX[current + 2].classList.add("slide");
        cardX[current + 3].classList.add("slide");
        cardX[current + 4].classList.add("slide");
        cardX[current + 5].classList.add("slide");
        maxLength = (cardX.length - 6);
    }
    //
    current === 0
        ? right.classList.add("disabled")
        : right.classList.remove("disabled");
    current === maxLength
        ? left.classList.add("disabled")
        : left.classList.remove("disabled");
}
// Set Interval For All Functio
setInterval(() => {
    if (window.innerWidth < 767) {
        slideFA();
    } else {
        cradFA.forEach((card) => { card.classList.add("slide") });
    }
    //
    sliderAll(cradMV, currentMV, leftMV, rightMV);
    //
    sliderAll(cardLA, currentLA, leftLA, rightLA);
}, 100);

// [[[[ Most Viewed slider ]]]]
rightMV.onclick = () => {
    if (rightMV.classList.contains("disabled")) {
        false;
    } else {
        currentMV--;
        sliderAll(cradMV, currentMV, leftMV, rightMV);
    }
}
// left MV => next
leftMV.onclick = () => {
    if (leftMV.classList.contains("disabled")) {
        false;
    } else {
        currentMV++;
        sliderAll(cradMV, currentMV, leftMV, rightMV);
    }
}

// [[[[Last Anime Slide]]]]
rightLA.onclick = () => {
    if (rightLA.classList.contains("disabled")) {
        false;
    } else {
        currentLA--;
        sliderAll(cardLA, currentLA, leftLA, rightLA);
    }
}
// left LA => next
leftLA.onclick = () => {
    if (leftLA.classList.contains("disabled")) {
        false;
    } else {
        currentLA++;
        sliderAll(cardLA, currentLA, leftLA, rightLA);
    }
}

// ((((((ALL CARDS))))))
let cardFE = Array.from(document.querySelectorAll(".fixed-episodes .cardF"))
let cardLE = Array.from(document.querySelectorAll(".last-episodes .cardF"))
let allCards = [...cradFA, ...cardFE, ...cradMV, ...cardLE, ...cardLA];
let allH3 = Array.from(document.querySelectorAll("h3"));
allH3.forEach((h3, index) => h3.innerHTML = `${index + 1}-Anime`);

// ((((((search for card))))))
searchBtn.onclick = () => {
    if (searchInput.value !== "") {
        searchResult.innerHTML = "";
        searchResult.classList.add("show-result");
        allH3.forEach((h3, index) => {
            if (h3.innerHTML.includes(searchInput.value)) {
                searchResult.appendChild(allCards[index]);
            }
        });
        if (!searchResult.innerHTML.includes("div")) {
            searchResult.innerHTML = "NOT FOUND";
        }
    }
    searchInput.value = ``;
    searchInput.focus();
}