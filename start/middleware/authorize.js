const protectedRoutes = ['/api/payment', '/api/user']

module.exports = (req, res, next) => {
  if (protectedRoutes.includes(req.path)) {
    if (!req.user)
      return res
        .status(401)
        .send({ error: 'You are not authorized, Please Log in' })
    return next()
  }
  return next()
}
