// Proceso asincrono paralelo 
const { readFile } = require('node:fs/promises');

Promise.all([
    readFile('./arch.txt','utf-8'),
    readFile('./arch2.txt','utf-8')
]).then(([text,text2])=> {
    console.log("Texto-1:",text)
    console.log("Texto-2:",text2)   
})
