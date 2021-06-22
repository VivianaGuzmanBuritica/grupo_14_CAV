const userController = {
    login:(req,res) => res.render('login'),

    registro:(req,res) => res.render('register'),

    userLogin:function (req,res) {
        let login = {
            user: req.body.user,
            password: req.body.password,
        }
        console.log(req.body);
        
        res.redirect('/productCart')
    },

    userRegister: function (req,res) {
        let register = {
            name: req.body.name,
            username: req.body.username,
            domicilio: req.body.domicilio,
            tipo: req.body.tipo,
            interes: req.body.interes,
            fechaNacimiento: req.body.fechaNacimiento,
            password: req.body.password,
            confirmPassword: req.body.confirmPassword
        }
        console.log(req.body);

        res.redirect('/login')
    }

}; 

module.exports = userController;