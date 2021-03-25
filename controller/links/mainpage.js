const { users, videos, memos, users_videos } = require('../../models');
const sequelize = require('sequelize');
const JWT = require('jsonwebtoken');

module.exports = {
  get: async (req, res) => {
    // 메모많은 비디오
    const popularVideos = await videos.findAll({
      order: [
        ['memoNum', 'DESC']
      ],
      limit: 15
    });

    if (!popularVideos) {
      return res.status(404).send('No popularVideos')
    }

    // 새롭게 올라온 비디오
    const newVideos = await videos.findAll({
      order: [
        ['pubDate', 'DESC']
      ],
      limit: 15
    });

    if (!newVideos) {
      return res.status(404).send('No newVideos')
    }

    // 새롭게 올라온 메모
    const newMemos = await memos.findAll({
      include: [{
        model: users
      }],
      order: [
        ['createdAt', 'DESC']
      ],
      limit: 7,
    });

    if (!newMemos) {
      return res.status(404).send('No newMemos')
    }

    const newMemos_videoId = newMemos.map(el => el.videoId);

    const newMemosVidoes = await videos.findAll({
      where: {
        id: newMemos_videoId
      }
    })

    const popularvideoId = popularVideos.map(item => item.id);

    // 인기컨텐츠 메모
    const popularMemos = await memos.findAll({
      where: {
        videoId: popularvideoId
      },
      include: [{
        model: users
      }],
      limit: 7,
    })

    if (!popularMemos) {
      return res.status(404).send('No popularMemos')
    }

    const popularMemos_videoId = popularMemos.map(el => el.videoId);

    const popularMemosVidoes = await videos.findAll({
      where: {
        id: popularMemos_videoId
      }
    })

    let data;
    let stateData;
    const authorization = req.headers['authorization'];
    if (!authorization) {
      res.json({ data: null, message: "invalid access token" })
    } else {
      const token = authorization.split(' ')[1];
      if (token !== '' && token) {
        stateData = JWT.verify(token, process.env.ACCESS_SECRET);
      }
      data = stateData
    }
    console.log(data)

    let expire = false;
    let cookieData;
    const accessToken = req.cookies.accessToken;
    if (accessToken) {
      cookieData = JWT.verify(accessToken, process.env.ACCESS_SECRET);
    }

    if (expire === true) {
      if (!req.cookies.refreshToken) {
        res.json({ message: "refresh token not provided" })
      } else {

      }
    }

    if (!stateData) {
      data = cookieData;
    }

    if (!data) data = { id: 0 }
    const userInfo = await users.findOne({
      where: { id: data.id }
    })


    if (!userInfo) {
      const memosGroubyUser = await memos.findAll({
        attributes: ['userId', [sequelize.fn('count', sequelize.col('userId')), 'count']],
        group: ['userId'],
      })

      if (memosGroubyUser.length === 0) {
        return res.status(404).send('No memos')
      }
      memosGroubyUser.sort((b, a) => {
        return a.dataValues.count - b.dataValues.count
      });

      // 메모 컬렉션
      const colletionMemos = await memos.findAll({
        where: {
          userId: memosGroubyUser[0].dataValues.userId
        },
        include: [{
          model: users
        }],
      })

      if (!colletionMemos) {
        return res.status(404).send('No colletionMemos')
      }

      const colletionMemos_videoId = colletionMemos.map(el => el.videoId);

      const colletionMemosVidoes = await videos.findAll({
        where: {
          id: colletionMemos_videoId
        }
      })

      res.status(200).send({
        message: 'Ok',
        data: {
          popularVideos,
          newVideos,
          newMemos,
          popularMemos,
          colletionMemos,
          newMemosVidoes,
          popularMemosVidoes,
          colletionMemosVidoes,
        }
      })
    } else {

      // 감상한 비디오
      const userVideos = await users_videos.findAll({
        where: {
          userId: userInfo.id,
        },
        order: [
          ['updatedAt', 'DESC']
        ],
        limit: 10
      })

      if (!userVideos) {
        return res.status(404).send('No colletionMemos')
      }

      const userVideosId = userVideos.map(el => el.videoId);

      const myVideos = await videos.findAll({
        where: {
          id: userVideosId
        },
      });

      if (!myVideos) {
        return res.status(404).send('No myVideos')
      }

      const myVideosId = myVideos.map(item => item.videoId);

      // 감상한 컨텐츠의 메모
      const viewdContentsMemos = await memos.findAll({
        where: {
          videoId: myVideosId
        },
        include: [{
          model: users
        }],
        limit: 7,
      })

      if (!viewdContentsMemos) {
        return res.status(404).send('No viewdContentsMemos')
      }

      const viewdContentsMemos_videoId = viewdContentsMemos.map(el => el.videoId);

      const viewdContentsMemosVidoes = await videos.findAll({
        where: {
          id: viewdContentsMemos_videoId
        }
      })

      res.status(200).send({
        message: 'Ok',
        data: {
          userId: userInfo.id,
          myVideos,
          popularVideos,
          newVideos,
          newMemos,
          popularMemos,
          viewdContentsMemos,
          newMemosVidoes,
          popularMemosVidoes,
          viewdContentsMemosVidoes,
        }
      })
    }


  },
};