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
        iat: Math.floor(Date.now() / 1000) - 30,
        exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 4),
      },
        process.env.ACCESS_SECRET,
      )
      const refreshToken = JWT.sign({
        id,
        iat: Math.floor(Date.now() / 1000) - 30,
        exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 14),
      },
        process.env.REFRESH_SECRET,
      )
      res.cookie('accessToken', accessToken,
        {
          domain: 'vimo.link',
          path: '/',
          httpOnly: true,
          secure: true,
          sameSite: 'none'
        })
      res.cookie('refreshToken', refreshToken,
        {
          domain: 'vimo.link',
          path: '/',
          httpOnly: true,
          secure: true,
          sameSite: 'none'
        })
      res.status(200).send({
        data: {
          accessToken,
          id,
          username,
          email,
          profilePic,
          isSocialLogin,
        },
        message: 'Ok'
      })
    } else {
      res.status(401).send("Invalid user or Wrong password")
    }
  },
};