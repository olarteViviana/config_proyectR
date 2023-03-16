const express= require('express')
const app = express()
const controllers = require("./Controladores")

//Importar conexion MongoDB
const archiboBD= require('./conexion')

//Importacion del archivo de rutas y modelo usuario

const rutausuario= require('./rutas/usuario')


//Importar body parser
const bodyParser= require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))
app.use('/api/usuario', rutausuario)


app.get("/products", controllers.Productos);

//Configurar server basico

app.listen(5000, function(){
    console.log('El servidor esta corriendo correctamente')

})