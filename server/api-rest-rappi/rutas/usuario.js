const express= require('express')
const router= express.Router()
const bycrypt= require('bcrypt')

const mongoose= require('mongoose')
const eschema= mongoose.Schema
const saltRounds=10

/// Esquema de base de datos 

const eschemausuario= new eschema({
    nombre: {type: String, requiere: true, unique: true},
    correo: {type: String, unique: true},
    contraseña: {type: String, requiere: true},
    celular: {type: Number, requiere: true}

});

///Funcion para encriptar la constraseña
eschemausuario.pre('save', function(next){
    if(this.isNew || this.isModified('contraseña')){

        const document= this;

        bycrypt.hash(document.contraseña, saltRounds,(err,hashedPassword)=>{

            if (err){
                next(err);
            }else{
                document.contraseña=hashedPassword;
                next()
            }
        })

    }else{
        next();
    }
})


/// Funcion para verificar si la contraseña es correcta
eschemausuario.methods.IsCorrectPassword= function(contraseña, callback){
    bycrypt.compare(contraseña, this.contraseña, function(err,same){
        if (err){
            callback(err);
        }else{
            callback(err, same)
        }
    })
}



/// Modelo de base de datos con nombre de cocumento usuarios y esquema de la base de datos 'eschemausuario'
const ModeloUsuario= mongoose.model('usuarios', eschemausuario)

module.exports= router


/// Ejemplo para validar que el servidor este corriendo
router.get('/ejemplo', (req, res)=>{
    res.end('Saludo carga desde ruta ejemplo')
})

/// Peticion post para registrar un nuevo usuario
router.post('/registrar', (req, res )=>{

    const{nombre, correo, contraseña, direccion, celular}=req.body;

    const nuevousuario=ModeloUsuario({
        nombre: nombre,
        correo: correo,
        contraseña:contraseña,
        direccion:direccion,
        celular:celular

    })
    ModeloUsuario.findOne({correo}, (err, user)=>{
        if (err){
            res.status(500).send('Error al autenticar al usuario')

        }else if(!user){
            nuevousuario.save(function(err){
                if (!err){
                    res.send('Usuario registrado correctamente')
        
                }else{
                    res.send(err)
                }
            })
        }else{
            res.send('El usuario ya existe')
        }
    })
} )


/// Peticion post para validar que el correo y la contraseña sean correctas
router.post('/autenticacion',(req, res )=>{
    const{correo, contraseña}=req.body;
    

    ModeloUsuario.findOne({correo}, (err, user)=>{
        if (err){
            res.status(500).send('Error al autenticar al usuario')

        }else if(!user){
            res.send('El usuario no existe')
        }else{
            user.IsCorrectPassword(contraseña,(err, result)=>{
                if(err){
                    res.send('Error al autenticar al usuario')
                }else if(result){
                    res.send('Usuario autenticado correctamente')

                }else{
                    res.send('Usuario y/o contraselña incorrecta')
                }
                
            })
        }
    })


})