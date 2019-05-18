# JavascriptGame
Créée en javascript et l'API CANVAS

## Fonctionnement
Elle génère des barrières aléatoirement, descendant du haut, en différentes couleur.
Il s'agit de faire passer la balle du bas jusqu'au haut sans toucher les barrières. 

![1](https://user-images.githubusercontent.com/36522492/57964428-e6d4cc80-7924-11e9-872a-218a0228ad50.PNG)

On fait lancer la balle avec la touche 'ESPACE' et les touches 'Right' , 'Left'.

## Code:

* Génération de barrières: 
```
rect = rect.fill({
         xx: Math.random() * 550,
         yy: 0,
         clr: getColor()
     },size,rect.length);
```

* Dessiner les barrières:

```
rect.forEach(r =>{
         ctx.fillStyle=r.clr;
         ctx.beginPath();
         ctx.fillRect(r.xx,r.yy,60,10);
    });
```

* Dessiner le tireur (Shooter) 
```
ctx.beginPath();
     ctx.fillStyle="black";
     ctx.arc(shooterX,shooterY,12,0,2*Math.PI);//cercle1
     ctx.fill();
```

* Détection de chocs entre la balle et les barrières
* NOTE: * la détection ne se fait pas toujours, puisque javascript ne permet pas de bien gérer les collisions sans un framework.
````
rect.forEach(e=>{
        if((e.xx - 10 <= shooterX <= e.xx + 10)  && (e.yy - 5 <= shooterY <= e.yy + 5)) {
              gowDown==true;
             console.log("crash");
             window.alert("LOOSER");
         }
````

* Lancer la balle: si la balle arrive à x=0 (le top du canvas), il va retourner à sa position initiale (au dessus du tireur)
````
  if(isShooting==true && goDown==false && shooterY>10){
         shooterY-=20;
         if(shooterY<=10) {
             isShooting=false; 
             shooterY=458; 
            crashWith();
         }
     }else if(isShooting==false && shooterY<458 && goDown==true){
         shooterY+=20;
         crashWith();
     }
````

* Mettre à jour le cordonnées Y des barrières
````
for(i=0;i<size;i++)
         rect[i].yy +=speed;
````

* Contrôler les évènements 'ESPACE', 'Right', 'Left'
````
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
````

* Faire bouger la balle à droit
````
 x+=10;
     ctx.fillStyle="black";
     ctx.fillRect(x,470,150,30); 
     ctx.beginPath();
     shooterX+=10;
     ctx.arc(shooterX,shooterY,12,0,2*Math.PI);
````
