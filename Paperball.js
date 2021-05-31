class Paperball{
    constructor(x,y,r){
        this.x=x;
		this.y=y;
        this.r=r;
        var options={
        isStatic:false,
        restitution:0.3,
        friction:0,
        density:0.3
        }
        this.body=Bodies.circle(x,y,r-30,options); 
        this.image=loadImage("paper.png");
        
        World.add(world, this.body);
    }
        display()
	{
			
			var ballPos=this.body.position;		

			push()
			translate(ballPos.x, ballPos.y);
			imageMode(CENTER)
			//strokeWeight(4);
			
			image(this.image,0,0,this.r);
			pop()
			
	}
    
}