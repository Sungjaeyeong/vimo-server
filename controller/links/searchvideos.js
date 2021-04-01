const { videos } = require('../../models')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = {
  get: async (req, res) => {
    await videos.findAll({
      where: {
        title: {
          [Op.like]: "%" + req.query.keyword + "%"
        }
      }
    }).then(data => {
      res.status(200).send({ videos: data })
    }).catch(() => {
      res.status(400).send('Bad Request!')
    })
  },
};