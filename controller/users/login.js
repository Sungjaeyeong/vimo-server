const { users } = require('../../models');
const JWT = require('jsonwebtoken');
module.exports = {
  post: async (req, res) => {
    const userInfo = await users.findOne({
      where: { email: req.body.email, password: req.body.password }
    })
    if (userInfo) {
      let { id, username, email, profilePic, isSocialLogin } = userInfo
      const accessToken = JWT.sign({
        id,
        username,
        email,
        profilePic,
        isSocialLogin,
        iat: Math.floor(Date.now() / 1000) - 30,
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
      },
        process.env.ACCESS_SECRET,
      )
      const refreshToken = JWT.sign({
        id,
        username,
        email,
        profilePic,
        isSocialLogin,
        iat: Math.floor(Date.now() / 1000) - 30,
        exp: Math.floor(Date.now() / 1000) + (60 * 60 * 3),
      },
        process.env.REFRESH_SECRET,
      )
      res.cookie('refreshToken', refreshToken, {
        domain: 'vimo.link',
        path: '/',
        httpOnly: true,
        secure: true,
        sameSite: 'none'
      })
      res.status(200).send({
        data: { accessToken },
        message: 'Ok'
      })
    } else {
      res.status(401).send("Invalid user or Wrong password")
    }
  },
};