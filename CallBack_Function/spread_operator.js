//USE IN ARRAY
var a = ["Akshay", "Varun", "Nitin", "Arun"]

var b = [...a]
    // b.push("Jindal")
b.push("Jindal")

var c = [...a, ...b]
console.log(c)

//WE CAN USE IN OBJECT