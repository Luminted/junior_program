class Animal{
    constructor(name){
        this.name = name;
        this.thirst = 100;
        this.belly = [];
    }

    drink(){
        this.thirst -= 10;
        return this.thirst;
    }

    eat(food){
        this.belly.push(food);
        return this.belly
    }
}

class Dog extends Animal{
    constructor(name, breed){
        super(name);
        this.breed = breed;
    }
    bark(){
        console.log('Wuff Wuff! I am a dog!');
    }
}

const rhino = new Animal('Tusk');
const dog = new Dog('Schoe', 'Dachshound');