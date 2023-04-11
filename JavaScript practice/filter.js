let Strings = ["Mike", "Mary", "Bob", "Clare", "Maddison", "Ellie", "Modzilla", "Poppy", "Isabelle", "Matthew"];


function findM(string, index, whole, another){
    console.log("Another is " + another)
    let firstLetter = string.charAt(0);
    if (index == 0) {
        return firstLetter == "M";
    }
    else {
        return firstLetter == "M" && index % 2 == 0 && whole[index - 1].charAt(0) == "C";
    }
}

// let newMList = []
// for(let i = 0; i<Strings.length; i++){        
//     if(findM(Strings[i], i, Strings)){
//         newMList.push(Strings[i])
//     }
// }
// console.log(newMList)
console.log(Strings.filter(findM))