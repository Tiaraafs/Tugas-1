class FruitBasket {
    constructor() {
        this.fruits = [];
    }

    addItem(item) {
       this.fruits.push(item);
       console.log(`Kamu baru saja menambahkan ${item}`);
    }

    getInformation() {
        console.log(`List buah di keranjang ${this.fruits}`);
    }
    
}

const fruits = new FruitBasket();
fruits.addItem("Jeruk");
fruits.addItem("Apel");
fruits.getInformation();