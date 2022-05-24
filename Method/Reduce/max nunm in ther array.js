const number = [12, 34, 56, 9, 43, 54, 78, 4, 43,]


function maxNum(num) {
    let max = 0;
    for (let i = 0; i < num.length; i++) {
        if (num[i] > max) {
            max = num[i]
        }

    }
    return max
}

console.log(maxNum(number))



let mN = number.reduce(function (max, curr) {
    if (curr > max) {
        max = curr;
    }
    return max
}, 0)
console.log(mN)