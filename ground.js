class Ground
{   
    constructor(x,y,w,h)
    {
        let GroundOptions = {
            isStatic:true
        };

        this.body = Bodies.rectangle(x,y,w,h, GroundOptions);
        this.w = w;
        this.h = h;
        World.add(world,this.body);
    }
    show(){
        var position = this.body.position
        push()
        rectMode(CENTER);
        fill("green")
        rect(position.x,position.y,this.w,this.h);
        pop();
  } 
}

