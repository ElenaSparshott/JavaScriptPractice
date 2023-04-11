//String Methods
// All string methods return a new string. They don't modify the original string.

// Formally said:

// Strings are immutable: Strings cannot be changed, only replaced.


//length
let a = "JavaScript"

console.log(a.length)

//slice
console.log(a.slice(4))
console.log(a.slice(-6))

//replace
console.log(a.replace("JavaScript", "Ruby"))

//replaceAll
console.log(a.replaceAll(/JavaScript/g,"cats"))

//upperCase
console.log(a.toUpperCase())

//lowerCase
console.log(a.toLowerCase())

//trim 
let b = "      JavaScript that has been trimed      "
console.log(b.trim())

//trim start and trim end
console.log(b.trimStart())
console.log(b.trimEnd())

//chararcter find 
console.log(a.charAt(0))

//unicode 
console.log(a.charCodeAt(0))

//properity access
console.log(a[0])

//split
console.log(a.split())
console.log(b.split(""))

