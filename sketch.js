var  database;
var gameState=0,playerCount,form,game,player;
var canvas;

function setup(){
  database = firebase.database();
  console.log(database);
  canvas=createCanvas(400,400);
game=new Game();
game.getState();
game.start();
}

function draw(){
  





}
