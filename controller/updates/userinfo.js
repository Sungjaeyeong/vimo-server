const { users } = require('../../models')
module.exports = {
  patch: async (req, res) => {
    if (!req.body.userId) {
      return res.status(400).send('No user')
    };
    const userInfo = await users.findOne({
      where: { id: req.body.userId }
    });
    if (!userInfo) {
      res.status(404).send('Not found');
    } else {
      if (req.body.newPassword && req.body.newPassword !== '') {
        await users.update({ username: req.body.username, password: req.body.newPassword }, {
          where: {
            id: req.body.userId
          }
        });
      } else {
        await users.update({ username: req.body.username, }, {
          where: {
            id: req.body.userId
          }
        });
      }
      res.status(200).send('Successfully updated!');
    }
  },
};