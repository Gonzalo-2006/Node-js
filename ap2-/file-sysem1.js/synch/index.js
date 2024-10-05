const fs = require('node:fs')

//Proceso sincrono 
console.log("Lectura de texto-1: ")
const text = fs.readFileSync('./arch.txt','utf-8')// Leemos el fichero especificando la codificacion "utf-8". Si no la especificamos nos devuelve buffer de memoria 
// readFileSync: forma sincrona de leer el archivo
console.log(text)

console.log("Lectura de texto-2: ")
const text1 = fs.readFileSync('./arch2.txt','utf-8')
console.log(text1)
console.log("------------------------------")