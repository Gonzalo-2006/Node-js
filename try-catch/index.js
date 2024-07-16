const validationUser = ({name, age, email}={})=>{
    if(!name) throw new validationError('Name is required')
    if(!age)  throw new validationError('Age is required')
    if(!email)throw new validationError('Email is required')
    //Llamar a la base de datos para guardar el usuario
    throw new ConectionError(`Data base is not available `)
}

class validationError extends Error{
    constructor(menssage){
        super(menssage)
        this.name = 'ValidationError'
    }
}

class ConectionError extends Error{
    constructor(menssage){
        super(menssage)
        this.name = 'ConnectionError'
    }
}

const name = 'Andrey'
const age  = 18
const email = 'andrey@gmail.com'



try{
    validationUser({name, age, email})
}catch(e){
    console.log(e.name)
    if(e.name === 'ConectionError'){
        setTimeout(()=>{
            validationUser({name, age, email})
        })
    }

    if(e.name === 'ValidationError'){
        
    }
}
