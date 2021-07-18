class paper
 {
    constructor(x,y,w,h){
        var options={
			isStatic:false,
            restitution:0.3,
            density:1.2,
            friction:0 
			}
		this.x=20;
		this.y=100;
		this.w=25;
		this.h=25;
        this.image=loadImage("paper.png")
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);
    }
    display()









}