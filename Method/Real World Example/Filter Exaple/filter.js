const data = [{firstName:"akshay",lastName:"neje",age:22},
              {firstName:"elon",lastName:"musk",age:50},
              {firstName:"jeff",lastName:"bezos",age:48},
              {firstName:"gautam",lastName:"adani",age:50}
            ]


//  Find the first name of the given data who's age less than 50

//  Expected Output:

//           ["akshay","jeff"]


const output = data.filter(x =>x.age < 50).map((x)=>x.firstName)
console.log(output)