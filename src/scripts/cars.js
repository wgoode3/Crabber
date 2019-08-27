console.log("cars.js loaded");

var carsElement = document.getElementById("cars");
var cars = [];
// var trucks = [];

var carSpawnLocations = [
    {x:500,y:50,v:-2,l:0},
    {x:500,y:100,v:-2,l:1},
    {x:500,y:150,v:-2,l:2},
    {x:500,y:200,v:-2,l:3},
    {x:-50,y:350,v:2,1:4},
    {x:-50,y:400,v:2,l:5},
    {x:-50,y:450,v:2,l:6},
    {x:-50,y:500,v:2,l:7}
];

function remove(arr, idx) {
    var temp = [];
    for(var i=0; i<idx; i++) {
        temp.push(arr[i]);
    }
    for(var i=idx+1; i<arr.length; i++) {
        temp.push(arr[i]);
    }
    return temp;
}


function moveCars() {
    var res = "";
    for(var i=0; i<cars.length; i++) {
        cars[i].position.x += cars[i].position.v;
        if(cars[i].position.v > 0) {
            res += `<div class="car2" style="top:${cars[i].position.y}px;left:${cars[i].position.x}px"></div>`;
        } else {
            res += `<div class="car1" style="top:${cars[i].position.y}px;left:${cars[i].position.x}px"></div>`;
        }
        if(cars[i].position.x > 600) {
            cars = remove(cars, i);
        }
        else if(cars[i].position.x < -50) {
            cars = remove(cars, i);
        }
    }
    carsElement.innerHTML = res;
}

var maxCars = 8;

function spawnCars() {
    if(cars.length < maxCars) {
        var n = Math.floor(Math.random()*carSpawnLocations.length);
        cars.push({class: "car", position: carSpawnLocations[n]});
    }
}

var gameloop = setInterval(function() {
    spawnCars();
    moveCars();
}, 10);

function stop() {
    clearInterval(gameloop);
    console.log(cars);
    console.log(carSpawnLocations);
}
