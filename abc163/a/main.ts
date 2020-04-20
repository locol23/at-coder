import fs from 'fs'

const input = (fs.readFileSync('/dev/stdin', 'utf8') as string).split('\n')
const n = input[0]
const result = 2 * Math.PI * parseInt(n, 10)

console.log(result.toFixed(2))

