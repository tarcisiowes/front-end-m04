const { usersData } = require('../../data/users');

function getProfile(req, res) {
  const { id } = req.params;

  return res.status(200).json({ message: "User not found!" });
}

module.exports = { getProfile };