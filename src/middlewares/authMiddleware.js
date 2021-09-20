const user = require("../controllers/user");

function authMiddleware(req, res, next) {
  if (req.session.userLogged.id == req.params.id) {
    user.userDetail
  } else {
    return res.render('users/login')
  }

  next();
}

module.exports = authMiddleware;
