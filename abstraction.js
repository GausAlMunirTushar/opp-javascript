class Animal {
    constructor(){

    }
    talk(){
        throw new Error(`You must implement talk method`)
    }
}

class Cat extends Animal{
    constructor(){
        super()
    }
    talk(){
        console.log("Moo Moo")
    }
    talks(){
        this.talk();
    }
}

const myCat = new Cat();
myCat.talks();