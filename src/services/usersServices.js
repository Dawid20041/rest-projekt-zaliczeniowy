const usersRepository = require("../repositories/usersRepository")

exports.createUser = async (data) => {
    return usersRepository.create(data)
}

exports.getAllUsers = async () => {
    return usersRepository.findAll()
}

exports.getUser = async (id) => {
    return usersRepository.findById(id)
}

exports.updateUser = async (id, data) => {
    return usersRepository.update(id, data)
}

exports.deleteUser = async (id) => {
    return usersRepository.delete(id)
}