console.log("cars.js loaded");

var carsElement = document.getElementById("cars");
var cars = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
];
var carTimers = [
    [0, 500],
    [50, 700],
    [100, 400],
    [50, 600],
    [100, 400],
    [0, 800],
    [0, 400],
    [50, 500]
];
// var trucks = [];

var carSpawnLocations = [
    {x:500,y:50,v:-2,l:0},
    {x:500,y:100,v:-1,l:1},
    {x:500,y:150,v:-3,l:2},
    {x:500,y:200,v:-2,l:3},
    {x:-50,y:350,v:4,1:4},
    {x:-50,y:400,v:1,l:5},
    {x:-50,y:450,v:4,l:6},
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
        for(var j=0; j<cars[i].length; j++) {
            cars[i][j].position.x += cars[i][j].position.v;
            var car = cars[i][j];
            if(car.position.v > 0) {
                res += `<div class="car2" style="top:${car.position.y}px;left:${car.position.x}px"></div>`;
            } else {
                res += `<div class="car1" style="top:${car.position.y}px;left:${car.position.x}px"></div>`;
            }
        }
    }
    carsElement.innerHTML = res;
}

function removeCars() {
    for(var i=0; i<cars.length; i++) {
        for(var j=0; j<cars[i].length; j++) {
            if(cars[i][j].position.x < -50) {
                cars[i] = remove(cars[i], j);
            } else if(cars[i][j].position.x > 600) {
                cars[i] = remove(cars[i], j);
            }
        }
    }
}

function spawnCars() {
    console.log(carTimers, carSpawnLocations);
    for(var i=0; i<cars.length; i++) {
        carTimers[i][0] -= 5;
        if(carTimers[i][0] <= 0) {
            cars[i].push({class: "car", position: {...carSpawnLocations[i]}});
            carTimers[i][0] = carTimers[i][1];
        }
    }
}

var gameloop = setInterval(function() {
    spawnCars();
    moveCars();
    removeCars();
    checkForCollisions();
}, 10);

function checkForCollisions() {
    for(var i=0; i<cars.length; i++) {
        for(var j=0; j<cars[i].length; j++) {
            var size = 30;
            var obj1 = position;
            var obj2 = cars[i][j].position;
            var collideX = obj1.x < obj2.x + size && obj1.x + size > obj2.x;
            var collideY = obj1.y < obj2.y + size && obj1.y + size > obj2.y;
            if(collideX && collideY) {
                active = false;
                clearInterval(gameloop);
                document.getElementById("gameover").style.display = "block";
            }
        }
    }
}