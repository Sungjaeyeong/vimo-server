module.exports = {
  post: (req, res) => {
    if (!req.cookies.accessToken && req.headers['authorization']) {
      res.status(400).send('you are currently not logged in.');
    } else {
      console.log('로그아웃')
      res.clearCookie('accessToken');
      res.clearCookie('refreshToken');
      res.send('successfully logged out!');
    }
  },
};