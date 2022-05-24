let array = [36,54,87,43,54,23,89,78,09,50];

function primeNum(x){
    return x%2!==0
}


const ans = array.filter(primeNum)
console.log(ans)