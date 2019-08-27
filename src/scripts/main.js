console.log("main.js loaded");

var game = document.getElementById("game");

var playfield = [
    "0000000000", // goal zone
    "5656565656", // lane 8
    "3434343434", // lane 7
    "3434343434", // lane 6
    "1212121212", // lane 5
    "0000000000", // median
    "0000000000", // median
    "5656565656", // lane 4
    "3434343434", // lane 3
    "3434343434", // lane 2
    "1212121212", // lane 1
    "0000000000"  // start zone
];

var tiles = {
    "1": "road-lower-1",
    "2": "road-lower-2",
    "3": "road-middle-1",
    "4": "road-middle-2",
    "5": "road-upper-1",
    "6": "road-upper-2"
};

var res = "";

for(var i=0; i<playfield.length; i++) {
    res += "<div class='row'>";
    for(var j=0; j<playfield[i].length; j++) {
        if(playfield[i][j] === "0") {
            var n = Math.ceil(Math.random()*6);
            res += `<div class="grass-${n}"></div>`;
        } else {
            res += `<div class="${tiles[playfield[i][j]]}"></div>`;
        }
    }
    res += "</div>";
}

game.innerHTML = res;