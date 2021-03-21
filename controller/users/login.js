const { users } = require('../../models')
module.exports = {
  post: async (req, res) => {
    const userInfo = await users.findOne({
      where: { email: req.body.email, password: req.body.password }
    })
    if (userInfo) {
      req.session.userId = userInfo.id;
      res.status(200).send({data: userInfo})
    } else {
      res.status(404).send('no')
    }
  },
};