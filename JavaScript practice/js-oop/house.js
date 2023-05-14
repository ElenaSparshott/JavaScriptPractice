class House {
    constructor (color) {
        this.color = color
    }

    toBuild() {
        console.log("The builders")
        return 7
    }

}

const houseNumberOne = new House("red brick")

console.log(houseNumberOne.color)

const houseTwo = new House("The stone house")

console.log(houseTwo.color)
console.log(houseTwo.toBuild())