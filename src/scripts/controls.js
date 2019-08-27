console.log("controls.js loaded");

document.onkeydown = function(e) {
    console.log(e.keyCode);
    if(e.keyCode === 38) {
        // go up
        position.y -= 50;
    } else if(e.keyCode === 40) {
        //go down
        position.y += 50;
    } else if(e.keyCode === 37) {
        // go left
        position.x -= 50;
    } else if(e.keyCode === 39) {
        // go right
        position.x += 50;
    } else if(e.keyCode === 32) {
        if(!active) {
            window.location.reload();
        }
    }
    movePlayer();
}