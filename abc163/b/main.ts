import fs from 'fs'

const input = (fs.readFileSync('/dev/stdin', 'utf8') as string).split('\n')
const n = parseInt(input[0].split(' ')[0], 10)
const workDays = input[1]
  .split(' ')
  .map((x: string): number => +x)
  .reduce((acc, x) => (acc += x))

const result = n - workDays > -1 ? n - workDays : -1

console.log(result)

