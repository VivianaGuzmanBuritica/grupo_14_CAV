const productController = {
    productDetail:(req, res) => res.render('productDetail'),
    newProduct:(req, res) => res.render('newProduct'),
    createProduct: function(req,res){
        let producto= {
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            price: req.body.price,
        }
        console.log(req.body);
        
        res.redirect("login")
    },

    edit:(req, res) => res.render('editProduct'),
    editProduct: function(req,res){
        let producto= {
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            price: req.body.price,
        }
        console.log(req.body);
        
        res.redirect("login")
    }

};

module.exports = productController;