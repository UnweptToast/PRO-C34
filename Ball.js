class Ball {
    constructor(x, y, radius) {
        var options ={
            density: 3.0,
            inertia: Infinity,
            slop: 1.0, 
            restitution: 1.0, 
            friction: 0, 
            frictionAir: 0
        };
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        fill(0)
        strokeWeight(2);
        stroke("white");
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, this.radius);
    }
}