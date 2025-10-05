// parent class
class person{
    constructor(name) {
        this.name = name;
    }
    getInformation() {
        console.log(`This person is ${this.name}`);
    }
}

//child class
class Professor extends person{
    constructor(name,teaches) {
        super(name);
        this.teaches =teaches
    }

    introduceSelf() {
        console.log(
        `My Name is ${this.name}, and i will be your ${this.teaches} professor`
        );
    }   
}

const ema = new Professor("Ema", "Meth");
console.log(ema.getInformation());
console.log(ema.introduceSelf());

