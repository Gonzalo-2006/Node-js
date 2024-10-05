/*
const validationUser = ({name, age, email}={})=>{
    if(!name) throw new ValidationError('Name is required')
    if(!age)  throw new ValidationError('Age is required')
    if(!email)throw new ValidationError('Email is required')
    //Llamar a la base de datos para guardar el usuario
    throw new ConectionError('ValidationError')
}



class ValidationError extends Error{
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


const name = "Andrey"
const age  = 18
const email = 'andrey@gmail.com'


try{ 
    validationUser({name, age, email})
}catch(e){
    
    console.log(e.name)
    if(e.name === 'ConectionError'){
        setTimeout(()=>{
            console.log(validationUser({name, age, email}))
        },1000)
    }

    if(e.name === 'ValidationError'){
        
    }
}*/

const validationUser = ({name, age, email}={})=>{
    if(!name) throw new ValidationError('Name is required')
    if(!age)  throw new ValidationError('Age is required')
    if(!email) throw new ValidationError('Email is required')
    // Llamar a la base de datos para guardar el usuario
    throw new ConnectionError('Database is not available')
}

class ValidationError extends Error{
    constructor(message){
        super(message)
        this.name = 'ValidationError'
    }
}

class ConnectionError extends Error{
    constructor(message){
        super(message)
        this.name = 'ConnectionError' 
    }
}

const name = "Andrey"
const age  = 18
const email = 'andrey@gmail.com'

try{ 
    validationUser({name, age, email})
}catch(e){
    console.log(e.name)
    if(e.name === 'ConnectionError'){
        setTimeout(()=>{
            try {
                validationUser({name, age, email})
            } catch(e) {
                console.log('Failed to reconnect:', e.message)
            }
        },1000)
    }

    if(e.name === 'ValidationError'){
        console.log('Validation failed:', e.message)
    }
}

