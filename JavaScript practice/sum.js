function sum(a,b) {
    let answer = a + b;
    console.log(answer)
    return answer;
}

sum(8,4)

//construct object
const myDictionary = {Surname: "Boden", Name: "David"};
const newDictionary = {Spaniel: "Williow", Terrier: "Teddy"};


//retrieve from object
console.log(myDictionary["Surname"])

console.log(newDictionary["Spaniel"])

//store in object
myDictionary["Age"] = 33
newDictionary["Jack Russel"] = "Timmy"

console.log(myDictionary)
console.log(newDictionary)

//pull values from object
console.log(Object.values(myDictionary))
console.log(Object.values(newDictionary))

//pull keys from object
console.log(Object.keys(myDictionary))
console.log(Object.keys(newDictionary))

//retrieve object
console.log(Object(myDictionary))
console.log(Object(newDictionary)) 



let user = {
  firstName: "Lady",
  lastName: "Gaga",
  gender: "female",
};

console.log(user.firstName); // Lady
console.log(user.lastName); // Gaga

// or

console.log(user["firstName"]); // Lady
console.log(user["lastName"]); // Gaga


// In JavaScript both of these are the same.
// user.anotherName = "sparkle"
// user["anotherName"] = "sparkle"

console.log(user)
console.log(Object(user))

//for(let prop in Object){

//}
// Use a in for loop for an object.

for(let prop in newDictionary) {
    console.log(prop)
    console.log(newDictionary[prop])
}