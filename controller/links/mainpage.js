const { users, videos, memos, users_videos } = require('../../models');
const sequelize = require('sequelize');
module.exports = {
  get: async (req, res) => {
    const popularVideos = await videos.findAll({
      order: [
        ['memoNum', 'DESC']
      ],
      limit: 20
    });
    const newVideos = await videos.findAll({
      order: [
        ['pubDate', 'DESC']
      ]
    });
    const newMemos = await memos.findAll({
      order: [
        ['createdAt', 'DESC']
      ]
    });
    const popularvideoId = popularVideos.map(item => item.id);
    const popularMemos = await memos.findAll({
      where: {
        videoId: popularvideoId
      }
    })

    if (!req.session.userId) {
      const memosGroubyUser = memos.findAll({
        attributes: ['userId', [sequelize.fn('count', sequelize.col('userId')), 'count']],
        group: ['userId'],
      })
      memosGroubyUser.sort((b, a) => {
        a.defaultValues.count - b.defaultValues.count
      });
      const colletionMemos = await memos.findAll({
        where: {
          userId: memosGroubyUser[0].defaultValues.userId
        }
      })
      res.status(200).send({
        popularVideos,
        newVideos,
        newMemos,
        popularMemos,
        colletionMemos,
      })
    } else {
      const myVideos = await users_videos.findAll({
        where: {
          userId: req.session.userId,
        },
        order: [
          ['updatedAt', 'DESC']
        ],
      });
      const myVideosId = myVideos.map(item => item.videoId);
      const viewdContentsMemos = await memos.findAll({
        where: {
          videoId: myVideosId
        }
      })
      res.status(200).send({
        myVideos,
        popularVideos,
        newVideos,
        newMemos,
        popularMemos,
        viewdContentsMemos
      })
    }

  },
};