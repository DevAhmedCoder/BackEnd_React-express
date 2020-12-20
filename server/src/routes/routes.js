var express = require('express')
var router = express.Router()
// Import controller
const productController = require('../controllers/controller')

// create a product
router.post("/product", productController.create);

// get all product
router.get("/product", productController.findAll);

// find one product
router.get("/product/:ref", productController.findByRef);

// update a product
router.put("/product/:ref", productController.update);

// delete a product
router.delete("/Product/:ref", productController.delete);

// export 
module.exports = router;