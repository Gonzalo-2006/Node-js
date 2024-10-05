const { readFile } = require('node:fs/promises');

// Proceso asincrono secuencial
( //IIFE
    async()=>{

        console.log("Leemos el primer archivo: ")
        const text = await readFile('./arch.txt','utf-8')
        console.log("Texto-1: " + text)

        function mult(a,b){
            return a * b; 
        }console.log(mult(4,5))

        console.log("Leemos el segundo archivo: ")
        const text2 = await readFile('./arch2.txt','utf-8')
        console.log("Texto-2: " + text2)

    }
)()

