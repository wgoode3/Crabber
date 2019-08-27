console.log("player.js loaded");

var position = {
    x: 200,
    y: 500
};

var player = document.getElementById("player");

function movePlayer() {
    if(position.x > 450) {
        position.x = 450;
    } else if(position.x < 0) {
        position.x = 0;
    }
    if(position.y > 550) {
        position.y = 550;
    } else if(position.y < 0) {
        position.y = 0;
    }
    player.style.top = `${position.y}px`;
    player.style.left = `${position.x}px`;
}
movePlayer();