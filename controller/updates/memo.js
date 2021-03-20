const { memos } = require('../../models')
module.exports = {
  patch: async (req, res) => {
    if (!(req.body.videoTime && req.body.memoId && req.body.content)) {
      res.status(422).send('Required parameters are insufficient')
    };
    const memoInfo = await memos.findOne({
      where: { id: req.body.memoId }
    });
    if (!memoInfo) {
      res.status(400).send('Bad request');
    } else {
      await memos.update({ content: req.body.content, videoTime: req.body.videoTime }, {
        where: {
          id: req.body.memoId
        }
      });
      res.status(200).send('Successfully updated!');
    }
  },
};