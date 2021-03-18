module.exports = {
  get: (req, res) => {
    const a = req.query.user_id
    res.json({data: "id: " + a + "" })
  },
};