const bcrypt = require('bcrypt');
const userRepo = require('../repositories/userRepository');

const registerUser = async ({ username, email, password }) => {
  if (!username || !email || !password) {
    throw { status: 400, message: 'All fields are required' };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    return await userRepo.createUser({ username, email, password: hashedPassword });
  } catch (e) {
    if (e.code === 'P2002') { // Prisma unique constraint violation
      throw { status: 409, message: 'Email or username already exists' };
    }
    throw { status: 500, message: 'Internal server error' };
  }
};

module.exports = { registerUser };