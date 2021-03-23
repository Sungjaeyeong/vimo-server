const { users } = require('../../models')
module.exports = {
  post: async (req, res) => {
    const userInfo = await users.findOne({
      where: { email: req.body.email, password: req.body.password }
    })
    if (userInfo) {
      req.session.userId = userInfo.id;
      let { id, username, email, profilePic, isSocialLogin } = userInfo
      res.status(200).send({
        data: {
          id,
          username,
          email,
          profilePic,
          isSocialLogin
        }
      })
    } else {
      res.status(401).send("Invalid user or Wrong password")
    }
  },
};