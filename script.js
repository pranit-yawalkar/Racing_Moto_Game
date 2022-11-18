let blueCar = document.getElementById('blueCar');
let raceCar = document.getElementById('raceCar');
let result = document.getElementById('result');
let score = document.getElementById('score');
let game = document.getElementById('game');
let counter = 0;

// blueCar move 
blueCar.addEventListener("animationiteration", () => {
    let random = (Math.floor(Math.random() * 4)) * 60;
    blueCar.style.left = random + 80 + "px";
    counter++;
})

window.addEventListener("keydown", function (e) {

    if (e.keyCode == '39') {
        let raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"));
        if (raceCarLeft < 260) {
            raceCar.style.left = (raceCarLeft + 60) + "px";
        }

    }

    if (e.keyCode == '37') {
        let raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"));
        console.log(raceCarLeft);
        if (raceCarLeft > 80) {
            raceCar.style.left = (raceCarLeft - 60) + "px";
        }
    }
})

setInterval(
    function gameOver() {
        let blueCarLeft = parseInt(window.getComputedStyle(blueCar).getPropertyValue('left'));
        let blueCarTop = parseInt(window.getComputedStyle(blueCar).getPropertyValue('top'));
        let raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue('left'));

        if ((blueCarLeft === raceCarLeft) && (blueCarTop > 250) && (blueCarTop < 450)) {
            result.style.display = 'block';
            game.style.display = 'none';
            score.innerHTML = `Score: ${counter}`;

            counter = 0;
        }
    }, 10);