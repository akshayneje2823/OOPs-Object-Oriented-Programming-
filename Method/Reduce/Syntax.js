
// Mostly Used in :

//          sum of all these elements in the given array
//          largest and samlest num of the array


let num = [74,45,78,23,78,21]

function finSum(num){
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum = sum + num[i];
        // sum += array[i];
        
    }
    return sum
}
console.log(finSum(num))



//  Using Reduce Method

const Sum = num.reduce(function(acc,curr){                 /*  It Takes Two arguments on is finction and the other one is initial value  */
    acc = acc + curr;
    return acc
},0)       
console.log(Sum)