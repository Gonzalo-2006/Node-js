const { Console } = require('node:console');
const os = require('node:os'); 
console.log("informacion de sistema: ")
console.log("----------------------- ")
console.log("Nombre: " + os.platform())
console.log("version: " + os.release())
console.log("arquitectura: "+os.arch())
console.log("CPU: "+os.cpus())
console.log("Tiempo vivo: " + os.uptime() / 60 / 60)