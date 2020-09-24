const destroyProduct = require("./adminController/delete");
const listProduct = require("./adminController/index");
const editProduct = require("./adminController/edit");
const createProducts= require("./adminController/create");

const controller = {
    listProduct: listProduct,
    
    createProduct: (req, res)=>{ res.render('admin/createProduct'); },
    addProduct: createProducts.addProduct,
    
    editProduct: editProduct.edit,
    update: editProduct.update,
    
    destroyProduct: destroyProduct
}

module.exports = controller;