class Form{
   constructor(){}
display(){
 var tittle=createElement("h2");
 tittle.html("welcome to car racing game");
 tittle.position(130,0); 
 var input=createInput("name");
 input.position(130,160);
 var button=createButton("play");
 button.position(250,200);
 var greeting=createElement("h3");
 button.mousePressed(function(){
 input.hide();
 button.hide();
 var name=input.value();
 playerCount+=1;
 player.updateCount(playerCount);
 player.update(name);
 greeting.html("hello "+name);
 greeting.position(130,160)    
 })

}
}