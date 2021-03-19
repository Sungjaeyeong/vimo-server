const { users, memos } = require('../../models')
module.exports = {
  get: async (req, res) => {
    if (!req.session.userId) {
      res.status(404).send('Not found');
    } else {
      const userInfo = await users.findOne({
        where: { id: req.session.userId }
      });
      const memoInfo = await memos.findAll({
        where: { userId: req.session.userId }
      });
      res.status(200).send({
        data: { userInfo, memoInfo }
      })
    }
  },
};