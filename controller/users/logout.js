module.exports = {
  post: (req, res) => {
    if (!req.cookies.accessToken && req.headers['authorization']) {
      res.status(400).send('you are currently not logged in.');
    } else {
      res.clearCookie('accessToken', { path: '/', domain: 'vimo.link' });
      res.clearCookie('refreshToken', { path: '/', domain: 'vimo.link' });
      res.send('successfully logged out!');
    }
  },
};