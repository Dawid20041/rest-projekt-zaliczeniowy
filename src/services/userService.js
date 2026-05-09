const bcrypt = require('bcrypt')
const userRepo = require('../repositories/userRepo')

const createUser = async ({ username, email, password }) => {
    if (!username || !email) {
        throw new Error('Username and email are required')
    }

    let hashedPassword = null

    if (password) {
        hashedPassword = await bcrypt.hash(password, 10)
    }

    try {
        return await userRepo.createUser({
            username,
            email,
            password: hashedPassword
        })
    } catch (e) {
        if (e.code === 'P2002') {
            throw new Error('Email already exists')
        }
        throw new Error('Database error')
    }
}

const getAllUsers = async () => {
    return userRepo.getAllUsers()
}

const getUser = async (id) => {
    return userRepo.getUserById(Number(id))
}

const updateUser = async (id, data) => {
    if (data.password) {
        data.password = await bcrypt.hash(data.password, 10)
    }

    return userRepo.updateUser(Number(id), data)
}

const deleteUser = async (id) => {
    return userRepo.deleteUser(Number(id))
}

module.exports = {
    createUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser
}