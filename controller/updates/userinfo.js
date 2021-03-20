const { users } = require('../../models')
module.exports = {
  patch: async (req, res) => {
    if (!req.session.userId) {
      return res.status(400).send('Session does not exist')
    };
    const userInfo = await users.findOne({
      where: { id: req.session.userId }
    });
    if (!userInfo) {
      res.status(404).send('Not found');
    } else {
      if (req.body.originalPassword) {
        if (userInfo.password !== req.body.originalPassword) {
          return res.status(400).send('Bad request');
        }
      }
      if (req.body.newPassword) {
        await users.update({ username: req.body.username, profilePic: req.body.profilePic, password: req.body.newPassword }, {
          where: {
            id: req.session.userId
          }
        });
      } else {
        await users.update({ username: req.body.username, profilePic: req.body.profilePic }, {
          where: {
            id: req.session.userId
          }
        });
      }
      res.status(200).send('Successfully updated!');
    }
  },
};