const { memos, videos } = require('../../models');
module.exports = {
  post: async (req, res) => {
    if (!(req.body.userId && req.body.videoId && req.body.content && req.body.videoTime)) {
      return res.status(400).send('Write a memo and set the time.')
    }
    const memoInfo = await memos.findOne({
      where: { userId: req.body.userId, videoId: req.body.videoId, videoTime: req.body.videoTime }
    })
    if (memoInfo) {
      res.status(409).send('memo already exists!')
    } else {
      const videoInfo = await videos.findOne({
        where: { id: req.body.videoId }
      });
      if (!videoInfo) {
        res.status(404).send('No video')
      }
      await videos.update({ memoNum: videoInfo.memoNum + 1 }, {
        where: {
          id: req.body.videoId,
        }
      })
      await memos.create({
        userId: req.body.userId,
        videoId: req.body.videoId,
        content: req.body.content,
        videoTime: req.body.videoTime
      }).then((data) => {
        res.status(201).send('successfully created!')
      }).catch(() => {
        res.status(400).send('Write a memo and set the time.')
      })
    }
  },
};