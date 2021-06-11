const productController = {
    productDetail:(req, res) => res.render('productDetail'),
    newProduct:(req, res) => res.render('newProduct')
};

module.exports = productController;