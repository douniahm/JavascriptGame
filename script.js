 //trouver les bons speed et  time de setInterval et 
 const canvas = document.querySelector('canvas');
 ctx = canvas.getContext('2d');
 var x=225;// de rect principal
 var shooterX=294 , shooterY=458;
 var rect = new Array(0);
// var size = -5;
 var size = -3;
 var speed = 3; //speed des rect
 var height = 0;
 var willGenerate = true;
 var isShooting = false;
 var goDown = false;
 window.onload = init;
 function init(){
     setInterval(loop,100);
 }
 function loop(){
     clear();
     willGenerate = Math.random()<0.2? willGenerate=true : false;
     if(willGenerate)
     generateRect();
     shoot();
     drawRectPrincipale();
     drawShooter();
     drawRect();
     updateHeight(); 
 }
 function drawShooter(){
     ctx.beginPath();
     ctx.fillStyle="black";
     ctx.arc(shooterX,shooterY,12,0,2*Math.PI);//cercle1
     ctx.fill();
 }
 function shoot(){
     if(isShooting==true && goDown==false && shooterY>10){
         shooterY-=20;
         if(shooterY<=10) {
             isShooting=false; 
             shooterY=458;
         }
         crashWith();
     }else if(isShooting==false && shooterY<458 && goDown==true){
         shooterY+=20;
         crashWith();
     }
 }

 function crashWith(shooterx, shootery){
     rect.forEach(e=>{
         if(e.xx == shooterx && e.yy == shooter.y) {
             gowDown==true;
             console.log("crash");
         }
     });

 }
 function drawRectPrincipale(){
     ctx.beginPath();
     ctx.fillStyle="black";
     ctx.fillRect(x,470,150,30); 
 }
 function generateRect(){
     let rand = Math.random();
     if( rand < 0.3){
     rect.length+=3;
     size+=1;
     rect = rect.fill({
         xx: Math.random() * 550,
         yy: 0,
         clr: getColor()
     },size,rect.length);
     }
 }
 function updateHeight(){

    for(i=0;i<size;i++)
         rect[i].yy +=speed;

 }
 function drawRect(){
     rect.forEach(r =>{
        // for(i=0;i<5;i++) {
         ctx.fillStyle=r.clr;
         ctx.beginPath();
         ctx.fillRect(r.xx,r.yy,60,10);
        // }
    });
    }
 function getColor(){
     var couleur = Math.random();
           if(couleur<0.3) couleur = "red";
           else if(couleur<0.6) couleur = "blue";
           else couleur = "green";
           return couleur;
 }
 function moveRight(){
     x+=10;
     ctx.fillStyle="black";
     ctx.fillRect(x,470,150,30); 
     ctx.beginPath();
     shooterX+=10;
     ctx.arc(shooterX,shooterY,12,0,2*Math.PI);//cercle1
 }

 function moveLeft(){
     x-=10;
     ctx.fillStyle="black";
     ctx.fillRect(x,470,150,30); 
     shooterX-=10;
     ctx.arc(shooterX,shooterY,12,0,2*Math.PI);//cercle1
    //ctx.fill();
 }
 function clear(){
     ctx.clearRect(0,0,canvas.width, canvas.height);
 }

 window.addEventListener("keydown", function (event) {
     if (event.keyCode !== undefined) {
         // Handle the event with KeyboardEvent.keyCode and set handled true.
         //Right
         if(event.keyCode==39){
             if(x<390)
             moveRight();
          //Left   
         }else if(event.keyCode==37){
             if(x>10)
             moveLeft();
             //Space
         }else if(event.keyCode==32){
             isShooting = true;
             //shoot();
         } 
     }

     }, true);