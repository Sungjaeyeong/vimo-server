const { memos } = require('../../models');
module.exports = {
  delete: async (req, res) => {
    // res.json({data: "hi"})
    await memos.destroy({
      where: {
        id: req.body.memoId,
      }
    }).then(() => {
      res.status(200).send('successfully deledted!');
    }).catch(() => {
      res.status(400).send('Bad Request!');
    })
  },
};