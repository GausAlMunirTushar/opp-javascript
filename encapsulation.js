class Tiger{ 
    #speed = 100
    location = "Sundarbon"
    constructor(name){
        this.name = name
    }
    run(){
        console.log(`I am ${this.name}. I am Running at ${this.#speed} mph`)
    }
}
const royal = new Tiger("Royal Bengal")
royal.run()