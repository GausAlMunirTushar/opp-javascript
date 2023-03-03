class SmartDevice{
    constructor(name, price){
        this.name = name;
        this.price = price
    }
    charging(){
        console.log(`Device Charging`)
    }
}
class Phone extends SmartDevice{
    constructor(name, price, camera, ram){
       super(name, price)
       this.camera = camera,
       this.ram = ram
    }
}

const asus = new Phone("Asus", 90900, "32MB", "16GB")
// console.log(asus.charging())
asus.charging()