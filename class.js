class PenDrive{
    constructor(capacity, color, price){
        this.capacity = capacity;
        this.color = color;
        this.price = price;
    }
}

const hp = new PenDrive('32 GB', 'grey', "700 Taka")
console.log(hp)