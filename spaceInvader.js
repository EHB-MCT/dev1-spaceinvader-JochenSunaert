"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');


function drawSpaceInvader() {
    //SPACE INVADER
    context.beginPath();
    context.rect(50, 50, 300, 300);
    context.lineWidth=3;
    context.fillStyle="white"
    context.fill();

    document.body.style.backgroundColor = "black";

    context.beginPath();
    context.rect(125, 75, 150, 50);
    context.rect(75, 175, 50, 50);
    context.rect(175, 175, 50, 50);
    context.rect(275, 175, 50, 50);
    context.rect(225, 225, 50, 50);
    context.rect(125, 225, 50, 50);
    context.rect(75, 275, 50, 50);
    context.rect(175, 275, 50, 50);
    context.rect(275, 275, 50, 50);
    context.fillStyle="purple"
    context.fill();


}

drawSpaceInvader();

