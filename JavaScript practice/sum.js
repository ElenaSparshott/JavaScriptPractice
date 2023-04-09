function sum(a,b) {
    let answer = a + b;
    console.log(answer)
    return answer;
}

sum(8,4)

//construct object
const myDictionary = {Surname: "Boden", Name: "David"};

//retrieve from object
console.log(myDictionary["Surname"])

//store in object
myDictionary["Age"] = 33

console.log(myDictionary)

//pull values from object
console.log(Object.values(myDictionary))

//pull keys from object
console.log(Object.keys(myDictionary))

//retrieve object
console.log(Object(myDictionary)) 



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

for(let prop in myDictionary) {
    console.log(prop)
    console.log(myDictionary[prop])
}