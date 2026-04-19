const usersService = require("../services/usersService")

exports.createUser = async (req, res) => {
    try {
        const user = await usersService.createUser(req.body)
        res.status(201).json(user)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

exports.getAllUsers = async (req, res) => {
    const users = await usersService.getAllUsers()
    res.json(users)
}

exports.getUser = async (req, res) => {
    const user = await usersService.getUser(req.params.id)

    if (!user) {
        return res.status(404).json({ message: "User not found" })
    }

    res.json(user)
}

exports.updateUser = async (req, res) => {
    try {
        const user = await usersService.updateUser(req.params.id, req.body)
        res.json(user)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

exports.deleteUser = async (req, res) => {
    await usersService.deleteUser(req.params.id)
    res.status(204).send()
}