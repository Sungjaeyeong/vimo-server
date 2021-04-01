const { memos } = require('../../models');
module.exports = {
  delete: async (req, res) => {
    const memoInfo = await memos.findOne({
      where: { id: req.body.memoId }
    });
    if (!memoInfo) {
      res.status(404).send('Not found')
    } else {
      await memos.destroy({
        where: {
          id: req.body.memoId,
        }
      }).then(() => {
        res.status(200).send('successfully deledted!');
      }).catch(() => {
        res.status(400).send('Bad Request!');
      })
    }
  },
};