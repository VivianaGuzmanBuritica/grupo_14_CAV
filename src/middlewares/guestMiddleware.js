function guestMiddleware(req, res, next) {
  if (req.session.userLogged) {
    return res.send("GuestMidd");
  }
  next();
}

module.exports = guestMiddleware;
