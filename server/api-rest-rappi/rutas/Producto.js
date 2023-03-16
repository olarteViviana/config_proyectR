const { model , Schema } = require("mongoose");

const EsquemaProducto = new Schema({
    nombre: { type: String, require: true, unique: true},
    img: {type: String, require: true},
    precio: {type: Number, require: true},
    vendedor: {type: String, require: true}
})

module.exports = model("Producto", EsquemaProducto);