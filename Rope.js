class Rope {
    constructor(bodyA, bodyB, offsetX, offsetY) {
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options ={
            bodyA: bodyA,
            bodyB: bodyB,
            pointB: {x: offsetX, y: offsetY},
            length: 300,
            stiffness: 1.0,
            angularStiffness: 1.0
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
    display() {
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        stroke(3)
        stroke("white")
        line(pointA.x, pointA.y, pointB.x + this.offsetX, pointB.y + this.offsetY)
    }
}