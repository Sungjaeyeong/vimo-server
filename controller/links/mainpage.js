const { users, videos, memos, users_videos } = require('../../models');
const sequelize = require('sequelize');
module.exports = {
  get: async (req, res) => {
    // 메모많은 비디오
    const popularVideos = await videos.findAll({
      order: [
        ['memoNum', 'DESC']
      ],
      limit: 20
    });

    if (!popularVideos) {
      return res.status(404).send('No popularVideos')
    }

    // 새롭게 올라온 비디오
    const newVideos = await videos.findAll({
      order: [
        ['pubDate', 'DESC']
      ]
    });

    if (!newVideos) {
      return res.status(404).send('No newVideos')
    }

    // 새롭게 올라온 메모
    const newMemos = await memos.findAll({
      order: [
        ['createdAt', 'DESC']
      ]
    });

    if (!newMemos) {
      return res.status(404).send('No newMemos')
    }

    const popularvideoId = popularVideos.map(item => item.id);

    // 인기컨텐츠 메모
    const popularMemos = await memos.findAll({
      where: {
        videoId: popularvideoId
      }
    })

    if (!popularMemos) {
      return res.status(404).send('No popularMemos')
    }

    if (!req.session.userId) {
      const memosGroubyUser = await memos.findAll({
        attributes: ['userId', [sequelize.fn('count', sequelize.col('userId')), 'count']],
        group: ['userId'],
      })
      memosGroubyUser.sort((b, a) => {
        a.dataValues.count - b.dataValues.count
      });

      // 메모 컬렉션
      const colletionMemos = await memos.findAll({
        where: {
          userId: memosGroubyUser[0].dataValues.userId
        }
      })

      if (!colletionMemos) {
        return res.status(404).send('No colletionMemos')
      }

      res.status(200).send({
        message: 'Ok',
        data: {
          popularVideos,
          newVideos,
          newMemos,
          popularMemos,
          colletionMemos,
        }
      })
    } else {
      // 감상한 비디오
      const myVideos = await users_videos.findAll({
        where: {
          userId: req.session.userId,
        },
        order: [
          ['updatedAt', 'DESC']
        ],
      });

      if (!myVideos) {
        return res.status(404).send('No myVideos')
      }

      const myVideosId = myVideos.map(item => item.videoId);

      // 감상한 컨텐츠의 메모
      const viewdContentsMemos = await memos.findAll({
        where: {
          videoId: myVideosId
        }
      })

      if (!viewdContentsMemos) {
        return res.status(404).send('No viewdContentsMemos')
      }

      res.status(200).send({
        message: 'Ok',
        data: {
          myVideos,
          popularVideos,
          newVideos,
          newMemos,
          popularMemos,
          viewdContentsMemos
        }
      })
    }

  },
};