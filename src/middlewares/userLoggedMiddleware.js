const user = require("../controllers/user");

const db = require("../database/models");

async function userLoggedMiddleware(req, res, next) {
  res.locals.isLogged = false;

  let emailInCookie = req.session.userLogged;
  console.log("sessionLogged");
  console.log(emailInCookie);

  let userFromCookie = emailInCookie;

  console.log("FindOne");
  console.log(userFromCookie);
  if (userFromCookie) {
    req.session.userLogged = userFromCookie;
  }

  if (req.session.userLogged) {
    res.locals.isLogged = true;
    res.locals.userLogged = req.session.userLogged;
    console.log("Cmn Locals");
    console.log(res.locals.userLogged.name);
  }

  next();
}

module.exports = userLoggedMiddleware;
