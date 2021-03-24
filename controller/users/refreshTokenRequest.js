const { users } = require('../../models');
const JWT = require('jsonwebtoken');

module.exports = {
  get: async (req, res) => {
    if (!req.cookies.refreshToken) {
      res.json({ data: null, message: "refresh token not provided" })
    } else {
      if (!req.cookies.refreshToken || req.cookies.refreshToken.includes('invalidtoken')) {
        res.json({ data: null, message: "invalid refresh token, please log in again" })
      } else {
        const data = JWT.verify(req.cookies.refreshToken, process.env.REFRESH_SECRET);
        const userInfo = await users.findOne({
          where: { id: data.id },
        });
        if (!userInfo) {
          res.json({ data: null, message: "refresh token has been tempered" })
        } else {
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
          res.cookie('accessToken', accessToken,
            {
              // domain: 'vimo.link',
              // path: '/',
              // httpOnly: true,
              // secure: true,
              // sameSite: 'none'
            })
          res.json({ message: "ok" })
        }
      }
    }
  }
};