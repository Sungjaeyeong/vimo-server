module.exports = {
  post: (req, res) => {
    if (!req.session.userId) {
      res.status(400).send('you are currently not logged in.');
    } else {
      req.session.destroy();
      res.json('successfully logged out!');
    }
  },
};