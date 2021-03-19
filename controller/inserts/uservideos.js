const { users_videos } = require('../../models')
module.exports = {
  post: async (req, res) => {
    if (!(req.body.userId && req.body.videoId && req.body.currentTime)) {
      res.status(422).send('Required parameters are insufficient')
    };
    const users_videosInfo = await users_videos.findOne({
      where: { userId: req.body.userId, videoId: req.body.videoId }
    });
    if (users_videosInfo) {
      res.status(409).send('Data already exists.')
    } else {
      await users_videos.create({
        currenttime: req.body.currentTime,
        userId: req.body.userId,
        videoId: req.body.videoId
      })
        .then(res.status(201).send('successfully created!'))
        .catch(err => console.log(err))
    }
  },
};