var canudo, lata, garrafa;
var background;

function preload(){
    canudo = loadImage("./assets/Canudo.png");
    lata = loadImage("./assets/Lata.png");
    garrafa = loadImage("./assets/Garrafa.png");
    background = loadImage("./assets/Fundo do Jogo.jpg");
}

function setup(){
    createCanvas(1600, 800);


}

function draw(){
    background(background);
}