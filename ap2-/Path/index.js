const path = require('node:path')

console.log(path.sep) // separacion de carpetas segun sitema operativo

const filePath = path.join('content','subfolder','text.txt')
console.log(filePath)

const nombre = path.basename('secret-files','.txt') //Nombre de archivo 
console.log(nombre)

const ext = path.extname('img.jpg') //Extencion del archivo
console.log(ext)