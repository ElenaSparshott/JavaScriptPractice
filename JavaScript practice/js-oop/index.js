console.log("hello world")

class GetRoundUp {
    constructor(amount) {
        this.amount = amount;
    }
    calculateRoundUp() {
        for (let i of arr) {
            let total;
            i = this.amount % 100;
            console.log(this.amount % 100)
            if (i === 0) {
                return
            }
            let roundUpAmount = (100 - i);
            return total += roundUpAmount;
        }
    }
}


const a = new GetRoundUp()
let arr = [88, 25, 99]
console.log(a.calculateRoundUp(arr))