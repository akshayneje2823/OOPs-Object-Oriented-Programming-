const data = [{firstName:"akshay",lastName:"neje",age:22},
              {firstName:"elon",lastName:"musk",age:50},
              {firstName:"jeff",lastName:"bezos",age:58},
              {firstName:"gautam",lastName:"adani",age:50}
            ]

// find same age 

const output = data.reduce((acc,curr)=>{
  if(acc[curr.age]){
    acc[curr.age] = ++acc[curr.age]
  }
  else{
    acc[curr.age] = 1
  }
  return acc
},{})

console.log(output)