const prisma = require('../config/prisma')

const createUser = (data) => {
  return prisma.user.create({ data })
}

const getUserById = (id) => {
  return prisma.user.findUnique({
    where: { id: Number(id) }
  })
}

const getAllUsers = () => {
  return prisma.user.findMany()
}

const updateUser = (id, data) => {
  return prisma.user.update({
    where: { id: Number(id) },
    data
  })
}

const deleteUser = (id) => {
  return prisma.user.delete({
    where: { id: Number(id) }
  })
}

module.exports = {
  createUser,
  getUserById,
  getAllUsers,
  updateUser,
  deleteUser
}