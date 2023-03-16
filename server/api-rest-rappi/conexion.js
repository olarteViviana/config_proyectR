const mongoose = require('mongoose');

/// Ip donde se va a conectar con la base de datos, y nombre de la base de datos al final
mongoose.connect('mongodb://127.0.0.1:27017/rappi');

const objetobd= mongoose.connection

///Conexion con la base de datos encendida
objetobd.on('connected', ()=>{
    console.log('Conexion correcta a MongoBB')
})

///Por si hay un error por consola se va a informar 
objetobd.on('error', ()=>{
    console.log('Error en la conexion a MongoBB')
})

module.exports= mongoose