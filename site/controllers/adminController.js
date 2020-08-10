const controller = {
    createProduct: (req, res)=>{
        res.render('admin/createProduct');
    },
    editProduct: (req, res) => {
        res.render('admin/createProduct');
    }
}

module.exports = controller;