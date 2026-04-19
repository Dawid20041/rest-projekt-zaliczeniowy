const userService = require('../services/userService');

const register = async (req, res) => {
  try {
    const user = await userService.registerUser(req.body);
    const { password, ...safeUser } = user; // nigdy nie zwracaj hasła
    res.status(201).json(safeUser);
  } catch (err) {
    res.status(err.status || 500).json({ error: err.message });
  }
};

module.exports = { register };