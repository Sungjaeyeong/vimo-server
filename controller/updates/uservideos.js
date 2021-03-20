const { users_videos } = require('../../models')
module.exports = {
  patch: async (req, res) => {
    if (!(req.body.currentTime && req.body.videoId && req.body.userId)) {
      res.status(422).send('Required parameters are insufficient')
    };
    const userVideosInfo = await users_videos.findOne({
      where: { userId: req.body.userId, videoId: req.body.videoId }
    });
    if (!userVideosInfo) {
      res.status(400).send('Bad request');
    } else {
      await users_videos.update({ currenttime: req.body.currentTime }, {
        where: {
          userId: req.body.userId,
          videoId: req.body.videoId
        }
      });
      res.status(200).send('Successfully updated!');
    }
  },
};