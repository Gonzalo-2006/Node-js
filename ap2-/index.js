const fs = require('node:fs/promises');
const path = require('node:path')
const folder = process.argv[2] ?? '.';


async function recib(folder){
    let files
    try{
      files = await fs.readdir(folder)  
    }catch{
        console.log('No se puede leer el directorio'+folder)
        process.exit(1)
    }

    const filesPromises = files.map(async file =>{
        const filePath = path.join(folder,file)
        let fileStats
        try{
            fileStats = await fs.stat(filePath) //stat = informacion del archivo
        }catch{
            console.log('No se puede leer el directorio'+folder)
            process.exit(1)
        }

        const isDirectory = fileStats.isDirectory()
        const fileType = isDirectory ? 'd' :  'f'
        const fileSize = fileStats.size
        const fileModified = fileStats.mtime.toLocaleString()

        return `${fileType} ${file.padEnd(20)} ${fileSize.toString().padStart(10)} ${fileModified}`

    })
const filesInfo = await Promise.all(filesPromises)
filesInfo.forEach(filesInfo => console.log(filesInfo))

}recib(folder)