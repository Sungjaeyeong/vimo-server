const { users_videos, users, videos } = require('../../models')
module.exports = {
  post: async (req, res) => {
    if (!(req.body.userId && req.body.videoId && req.body.currentTime)) {
      return res.status(422).send('Required parameters are insufficient')
    };
    const users_videosInfo = await users_videos.findOne({
      where: { userId: req.body.userId, videoId: req.body.videoId }
    });
    if (users_videosInfo) {
      res.status(409).send('Data already exists.')
    } else {
      const userInfo = await users.findOne({
        where: { id: req.body.userId }
      })
      const videoInfo = await videos.findOne({
        where: { id: req.body.videoId }
      })
      if (!(userInfo && videoInfo)) {
        res.status(400).send('Bad request')
      } else {
        await users_videos.create({
          currenttime: req.body.currentTime,
          userId: req.body.userId,
          videoId: req.body.videoId
        })
        res.status(201).send('Successfully created!')
      }
    }
  },
};