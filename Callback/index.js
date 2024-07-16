function modificar(nombres, callback){
    nombres.push('ChaloJR')
    setTimeout(function(){
        callback(nombres)
    }, 3000)
    
}
const nombre = ["Andre", "Chalo","Gonzalo"]
console.log("Espacio del array: "+nombre.length)

modificar(nombre,function(nombres){
    console.log("Nuevo espacio del array: "+nombre.length)
})
