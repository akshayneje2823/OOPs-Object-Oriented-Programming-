const data = [{firstName:"akshay",lastName:"neje",age:22},
              {firstName:"elon",lastName:"musk",age:50},
              {firstName:"jeff",lastName:"bezos",age:58},
              {firstName:"gautam",lastName:"adani",age:53}
            ]

// list of full name

const outout = data.map((x => x.firstName +" " + x.lastName))
console.log(outout)