var array = ["101","1","11","110"]


function getBin(x){
    return x.toString(2)
}


let doubleOfBinary = array.map(getBin);

console.log(doubleOfBinary)