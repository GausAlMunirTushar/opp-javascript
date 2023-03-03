class Circle {
    constructor(radius){
        this.radius = radius
    }
    area(){
        return Math.PI * Math.pow(this.radius, 2);
    }
}

class Reactangle{
    constructor(height, width){
        this.height = height,
        this.width = width
    }
    area(){
        return this.height * this.width;
    }
}

class Triangle{
    constructor(base, height){
        this.base = base,
        this.height = height
    }
    area(){
        this.base * this.height / 2;
    }
}

const shapes = [new Circle(20), new Reactangle(10, 5), new Triangle(10, 2)]

for (let i = 0; i < shapes.length; i++) {
    const shape = shapes[i];
    console.log(shape.area())
}