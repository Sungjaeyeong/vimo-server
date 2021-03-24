const { users } = require('../../models')
module.exports = {
  post: async (req, res) => {
    if (!(req.body.isSocialLogin && req.body.password && req.body.email && req.body.username)) {
      return res.status(422).send('required parameters are insufficient')
    }
    const userInfo = await users.findAll({
      where: { email: req.body.email }
    });
    if (userInfo.length > 0) {
      res.status(409).send('This email already exist.')
    } else {
      const insertUser = await users.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        profilePic: 'https://vimo.link/images/default/profilepic.png',
        isSocialLogin: req.body.isSocialLogin
      })
      res.status(201).send('created!')
    }
  },
};