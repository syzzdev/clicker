let score = 0;

let scoreText = document.getElementById("score");
let button = document.querySelector("button");

button.addEventListener("click", function() {
    score++;
    scoreText.textContent = score;
});