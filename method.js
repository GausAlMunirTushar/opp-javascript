class Coder {
    constructor(name){
        this.name = name
    }
    getWork(work){
        this.work = work
    }
}
let pyCoder = new Coder('Py Coder');
console.log(pyCoder.getWork('Programmer'))