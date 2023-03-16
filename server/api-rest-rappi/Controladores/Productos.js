const Product = require("../rutas/Producto");

const getProducts = (req, res) => {
  model.find({}, (err, docs) => {
    res.send({
      docs
    })
  })

}

module.exports = getProducts;