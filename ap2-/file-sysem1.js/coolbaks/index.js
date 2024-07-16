const { error } = require('node:console')
const fs = require('node:fs')

const stats = fs.statSync('./arch.txt')

console.log(
    stats.isFile(), // si es un fichero
    stats.isDirectory(), // si es un directorio 
    stats.isSymbolicLink(), // si es un enlace simbolico
    stats.size, // El tamaño en bites
)

//Proceso asincrono con Coolbacks 
console.log("Lectura del primer texto:")
fs.readFile('./arch.txt','utf-8',(_err, text2)=> 
    console.log("Texto-1 " + text2)
)
function sum(a,b){
    return a + b
}console.log(sum(4,6))

console.log("Lectura del segundo texto: ")
fs.readFile('./arch2.txt','utf-8',(_err, text3) =>
  console.log("Texto-2 " + text3)  
)
