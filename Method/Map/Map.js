var array = [1,2,3,4]

// Double - [2,4,6,8]

// Trippe - [3,6,9,12]

// Binary - ["101","1","11","110"]


function double(x){
    return x*2
}



let getCopy = array.map(double);
console.log(getCopy)