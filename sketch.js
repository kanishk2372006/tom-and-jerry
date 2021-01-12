
function preload() {
 back=loadImage("garden.png");
    
}

function setup(){
    createCanvas(400,400);
  forground=createSprite(200,200);
  forground.addImage(back);

}
function draw() {

    background("black");
    drawSprites();
}

