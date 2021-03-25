const { users, memos, videos } = require('../../models')
const JWT = require('jsonwebtoken');
module.exports = {
  get: async (req, res) => {


    let data;
    let stateData;
    const authorization = req.headers['authorization'];
    if (!authorization) {
      res.json({ data: null, message: "invalid access token" })
    } else {
      const token = authorization.split(' ')[1];
      if (token !== '' && !token) {
        stateData = JWT.verify(token, process.env.ACCESS_SECRET);
      }
      data = stateData
    }
    console.log(data)

    let expire = false;
    let cookieData;
    const accessToken = req.cookies.accessToken;
    if (accessToken) {
      cookieData = JWT.verify(accessToken, process.env.ACCESS_SECRET);
    }
    if (expire === true) {
      if (!req.cookies.refreshToken) {
        res.json({ message: "refresh token not provided" })
      } else {

      }
    }

    if (!stateData) {
      data = cookieData;
    }

    if (!data) data = { id: 0 }

    const userInfo = await users.findOne({
      where: { id: data.id }
    });
    if (!userInfo) {
      return res.status(404).send('Not Found')
    }
    const memoInfo = await memos.findAll({
      where: { userId: data.id },
      include: [{
        model: videos
      }],
    });
    let { id, username, email, profilePic, isSocialLogin } = userInfo
    res.status(200).send({
      data: {
        userInfo: {
          id,
          username,
          email,
          profilePic,
          isSocialLogin
        },
        memoInfo
      }
    })

  },
};