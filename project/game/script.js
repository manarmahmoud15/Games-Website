var turtle = document.getElementById("turtle");
var rain = document.getElementById("rain");
var scoreGame = document.getElementById("score");


var turtlePosition = 0;
var score = 0;

function playaudio() {

    var audioElement = document.getElementById("my_audio");
    audioElement.play();

    document.addEventListener('animationiteration', randomDrop);
    document.addEventListener("keydown", checkMove)
    setInterval(collision, 100);

    var element = document.getElementById("rain");
    element.classList.add("classAnimate");
    element.addEventListener("click", playaudio);

}


function moveLeft() {
    if (turtlePosition <= 0) {
        return;
    }
    turtlePosition -= 100;

    turtle.style.left = turtlePosition + "px";

}

function moveRight() {
    if (turtlePosition >= 300) {
        return
    }
    turtlePosition += 100;
    turtle.style.left = turtlePosition + "px";

}

function checkMove(event) {
    if (event.key == "ArrowLeft") {
        moveLeft();
    }
    if (event.key == "ArrowRight") {
        moveRight();
    }
}



function randomDrop() {
    var rainPosition = Math.floor((Math.random() * 4)) * 100;
    rain.style.left = rainPosition + "px";
    score++;
    scoreGame.innerHTML = `Score: ${score}`;
}



function collision() {
    var turtleLeft = parseInt(window.getComputedStyle(turtle).getPropertyValue('left'));
    var rainLeft = parseInt(window.getComputedStyle(rain).getPropertyValue('left'));
    var rainTop = parseInt(window.getComputedStyle(rain).getPropertyValue('top'));

    //(turtleLeft == rainLeft) ==> this mean same direction (same line)
    if (turtleLeft == rainLeft && (rainTop < 400 && rainTop > 360)) {
        alert("Game Over!!");
        rain.style.top = -100 + "px";
        score = 0;

    }
}



