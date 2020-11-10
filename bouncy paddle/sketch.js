var ball,ball_img,paddle, paddle_img, edges;

function preload() {
  ball_img=loadImage("ball.png");
  paddle_img=loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
   
  ball=createSprite(200, 200, 20, 20);
  paddle=createSprite(380, 200, 20, 70);
  
  
  ball.addImage(ball_img);
  paddle.addImage(paddle_img);
  
  
  ball.velocityX=9;

}

function draw() {
  background(205,153,0);
  
  edges=createEdgeSprites();
  
  
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]); 
  

  
  ball.bounceOff(paddle, randomVelocity);
  
  
  
  
  
  
  
  paddle.collide(edges);
  
  
  if(keyDown(UP_ARROW))
  {
    paddle.y=paddle.y-20; 
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y=paddle.y +20; 
  }
  drawSprites();
  console.log(ball.velocityY);
}

function randomVelocity()
{
  
  
  ball.velocityY=random(-8, 8);
  
}

