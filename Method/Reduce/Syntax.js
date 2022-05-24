
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

const and = num.reduce(function(acc,curr){
    
})       /*accumulator,current                  */