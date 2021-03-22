const { users } = require('../../models')
module.exports = {
  get: async (req, res) => {
    const userInfo = await users.findOne({
      where: { id: req.session.userId }
    })
    if (userInfo) {
      res.status(200).send({username: userInfo.username, profilePic: userInfo.profilePic, myMovies: []})
    } else {
      res.status(404).send('Bad request!')
    }
  },
};