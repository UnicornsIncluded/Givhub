const requireAuth = (req, res, next) =>
<<<<<<< HEAD
  !req.user ? res.status(401).send({ message: 'User not authenticated' }) : next();

module.exports = {
  requireAuth,
};
=======
  !req.user ? res.status(401).send({message: 'User not authenticated'}) : next()

module.exports = {
  requireAuth
}
>>>>>>> bc27a0cabf6a1cbda6c1457c76f8bb6f240197b6
