const {users} = require('../../models')
module.exports = {
  post: async (req, res) => {
    await users.findOne({
      where: {email: req.body.email, password: req.body.password}
    }).then( data => {
      req.session.save(function(){
        req.session.profilePic = data.profilePic;
        req.session.email = data.email;
        req.session.username = data.username;
        res.json({id:data.id, isSocialLogin: true});
      }).then(() => {
        res.send('social login에 성공하였습니다.')
      })
    }).catch(() => {
      res.status(404).alert('아이디 혹은 비밀번호가 일치하지 않습니다.')
    })
  },
};