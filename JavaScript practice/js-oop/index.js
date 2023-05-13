console.log("hello world")

class GetRoundUp {
    constructor(amountList) {
        this.amountList = amountList;
    }
    calculateRoundUp() {
        let total = 0;
        for (let amount of this.amountList) {       
            let pence = amount % 100;
            
            if (pence === 0) {
                continue
            }
            let roundUpAmount = (100 - pence);  
            total += roundUpAmount;      
        }
        return total
    }
}



let arr = [597, 925, 900, 99999]
const a = new GetRoundUp(arr)
console.log(`the answer is ${a.calculateRoundUp()}`)

