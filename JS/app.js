// Recall items.
let bike = document.getElementById("bike");
let red_btn = document.getElementById("red");
let blue_btn = document.getElementById("blue");
let black_btn = document.getElementById("black");

// Set the event on each element separately.
red_btn.onclick = function () {
    bike.style.backgroundImage = "url(IMAGES/BMW1.png)"
};
blue_btn.onclick = function () {
    bike.style.backgroundImage = "url(IMAGES/BMW2.png)"
};
black_btn.onclick = function () {
    bike.style.backgroundImage = "url(IMAGES/BMW3.png)"
};

