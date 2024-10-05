const fs = require('node:fs/promises')


console.log("Lectura del primer texto:")
fs.readFile('./arch.txt','utf-8')
.then(text =>{
    console.log("Texto-1: "+ text)
})

function res(a,b){
    return a - b
}console.log(res(4,6))

console.log("Lectura del segundo texto: ")
fs.readFile('./arch2.txt','utf-8')
.then(text =>{
    console.log("Texto-2: "+ text)
})