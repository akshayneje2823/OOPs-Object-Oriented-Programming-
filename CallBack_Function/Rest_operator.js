function addtion(name, name2, ...args) {
    // console.log(a + b)
    console.log((`hello ${name} :`))
    let sum = 0
    for (x in args)
        sum += args[x]
    console.log(sum)

}

Sum = addtion("Akshay", 44, 65, 88, 90, 67)
Sum2 = addtion("Tejas", 44, 65, 88, 90, 67, 98, 445, 34, )