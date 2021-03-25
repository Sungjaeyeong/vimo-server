const { users_videos } = require('../../models');
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
    const userVideosInfo = await users_videos.findOne({
      where: {
        userId: data.id,
        videoId: req.query.videoid
      }
    });

    if (!userVideosInfo) {
      res.send({ data: { currenttime: null } })
    } else {
      res.send({ data: userVideosInfo })
    }

  },
};