class House {
    constructor(color) {
        this.color = color
    }

    getFurniture() {
        return "Sofa"
    }
}

// the instantated object of the house.

const houseObject = new House("red") 

 // another instanation of the class house.

const houseObject2 = new House("blue")


console.log(houseObject.color)
console.log(houseObject.getFurniture())

console.log(houseObject2.color)
console.log(houseObject2.getFurniture())

//The four pillers of object oriented programming
// 1. Encapsulation
// 2. Abstration
// 3. Inheritance
// 4. Polymorphism

console.log(5%3)

x = "hello"
y = x[1:4]
print(y)