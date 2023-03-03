class Animal{
    static category = 'Dog'
    location = 'Rangpur'
    constructor(name, speed ) {
        this.name = name,
        this.speed = speed
    }
    compare(animal1, animal2){
        if(animal1.speed > animal2.speed){
            return `${animal1.speed} is Faster`
        }
        return `${animal2.speed} is Faster`
    }
}

const myRat = new Animal("Rat", 12)
console.log(Animal.category);