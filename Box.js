class Box {
    constructor(x, y) {
      var options = {
        
          'isStatic':false,
          'restitution':1.0

      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 50;
      this.height = 50;
      this.Visiblity = 255;
      
      World.add(world, this.body);
      
    }
    
    display(){

      if(this.body.speed<3){
      var pos =this.body.position;
      var angle = this.body.angle;
      console.log(this.body.speed);
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("deeppink");
      fill("pink");
      rect(0, 0, this.width, this.height);
      pop();
      
      }else{

        World.remove(world,this.body);

        push();

        this.Visiblity = this.Visiblity-5;
        tint(255,this.Visiblity);
        
        pop();


      }
    }
  }