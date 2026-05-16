const userService = require('../services/userService')

exports.createUser = async (req, res) => {
    try {
        const user = await userService.createUser(req.body)

        const { password, ...safeUser } = user || {}

        res.status(201).json(safeUser)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

exports.getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers()
        res.json(users)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

exports.getUser = async (req, res) => {
    try {
        const user = await userService.getUser(req.params.id)

        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }

        res.json(user)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

exports.updateUser = async (req, res) => {
    try {
        const user = await userService.updateUser(req.params.id, req.body)
        res.json(user)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

exports.deleteUser = async (req, res) => {
    try {
        await userService.deleteUser(req.params.id)
        res.status(204).send()
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}
module.exports = exports