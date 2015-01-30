game.PaddleEntity = me.ObjectEntity.extend ({
   init: function(x, y, settings) {
       settings.image = "paddle";
       settings.spritewidth = "48";
       settings.spriteheight = "16";

       this.parent(x, y, settings);
       
       this.setVelocity(4, 3);
       
       this.type = "paddle";
       this.collidable = true;
   },
   
   update: function() {
       if(me.input.isKeyPressed("left")) {
           this.vel.x -= this.accel.x * me.timer.tick;
       }
       if(me.input.isKeyPressed("right")) {
           this.vel.x += this.accel.x * me.timer.tick;
       }
       this.updateMovement();
       
       if(this.vel.x !== 0) {
           return true;
       }
   }
});

game.BallEntity = me.ObjectEntity.extend ({
   init: function(x, y, settings) {
       settings.image = "ball";
       settings.spritewidth = "16";
       settings.spriteheight = "16";
       this.parent(x, y, settings);
       
       this.setVelocity(4, 2);
       this.vel.x += this.accel.x * me.timer.tick;
       this.vel.y += this.accel.y * me.timer.tick;
       
       this.collidable = true;
   },
   
   update: function () {
     var collision = this.collide();
     
     if(collision) {
         if(collision.type === "paddle") {
             this.vel.y *= -1;
             me.audio.play("paddle-sfx");
         }
     }
     
     collision = this.updateMovement();
     
     if(collision) {
         if(this.vel.x === 0) {
             this.vel.x = -this.previousVelocity.x;
         }
         if(this.vel.y === 0){
             this.vel.y = -this.previousVelocity.y;
         }
     }
     
     this.previousVelocity = this.vel.clone();
     return true;
   }
});

game.BrickEntity = me.ObjectEntity.extend ({
   init: function(x, y, settings) {
       settings.image = "brick";
       settings.spritewidth = "32";
       settings.spriteheight = "16";
       this.parent(x, y, settings);
       
       this.setVelocity(2, 2);
       this.vel.x += this.accel.x * me.timer.tick;

   },
   
   update: function () {}
});