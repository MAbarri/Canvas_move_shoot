// TODO
// Add targets to shoot

var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = true;
    } else if (e.keyCode == 37) {
        leftPressed = true;
    } else if (e.keyCode == 38) {
        upPressed = true;
    } else if (e.keyCode == 40) {
        downPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = false;
    } else if (e.keyCode == 37) {
        leftPressed = false;
    } else if (e.keyCode == 38) {
        upPressed = false;
    } else if (e.keyCode == 40) {
        downPressed = false;
    }
}

var canvas = document.getElementById("myCanvas");
canvas.width = document.body.clientWidth; //document.width is obsolete
canvas.height = document.body.clientHeight; //document.height is obsolete
var ctx = canvas.getContext("2d");
var fullX = canvas.width - 40;
var fullY = canvas.height - 40;
var x = 10;
var y = 10;
var ldx = 10;
var rdx = ldx * 2;
var dy = 5;

var position = 0;

function draw() {
    if (upPressed) {
        moveUp();
    }
    // if (downPressed) {
    //     moveDown();
    // }
    if (leftPressed) {
        moveLeft();
    }
    if (rightPressed) {
        moveRight();
    }
    if (x < canvas.width / 2 && y < canvas.height / 2) {
        drawRoad();
        x += ldx;
        y += dy;
        fullX -= rdx;
        fullY -= dy * 2;
    }
}

function drawRoad() {
    ctx.beginPath();
    ctx.rect(x, y, fullX, fullY);
    var color = Math.floor(255 - fullY / canvas.height * 255);
    ctx.strokeStyle = 'rgb(' + color + ',' + color + ',' + color + ')';
    ctx.stroke();
    ctx.closePath();
}

function moveUp() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fullX = canvas.width - 40 + 2 * position;
    fullY = canvas.height - 40 + position;
    x = 10 - position;
    y = 10 - position / 2;
    position += 10;
}

function moveRight() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    rdx += 1;
    ldx -= 1;
    fullX = canvas.width - 40;
    fullY = canvas.height - 40;
    x = 10;
    y = 10;
}

function moveLeft() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    rdx -= 1;
    ldx += 1;
    fullX = canvas.width - 40;
    fullY = canvas.height - 40;
    x = 10;
    y = 10;
}

setInterval(draw, 10);
