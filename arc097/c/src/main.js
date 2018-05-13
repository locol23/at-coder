import fs from 'fs'

const checkDup = arr => {
  arr.filter((data, i, self) => self.indexOf(data) === i)
}

const Main = (input) => {  
  const str = input.split("\n")[0]
  const k = input.split("\n")[1]
  const arr = []

  for(let i = 1; i < str.length; i++){
    for(let j = 0; j + i <= str.length; j++){
      arr.push(str.substring(j, j + i))
    }
  }
  
  arr.push(str)
  console.log(arr)
  const result = checkDup(arr)
  console.log(result)
  // console.log(result.length)
//  console.log(result[result.length - k])
}

Main(fs.readFileSync("/dev/stdin", "utf8"));
