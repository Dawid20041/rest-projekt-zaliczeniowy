const aukcjaService = require('../services/aukcjaService')

exports.createAuction = async (req, res) => {
    try {
        const auction = await aukcjaService.createAuction(req.body)
        res.status(201).json(auction)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

exports.getAllAuctions = async (req, res) => {
    try {
        const auctions = await aukcjaService.getAllAuctions()
        res.json(auctions)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

exports.getAuction = async (req, res) => {
    try {
        const auction = await aukcjaService.getAuction(req.params.id)

        if (!auction) {
            return res.status(404).json({ message: 'Auction not found' })
        }

        res.json(auction)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

exports.updateAuction = async (req, res) => {
    try {
        const auction = await aukcjaService.updateAuction(req.params.id, req.body)
        res.json(auction)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

exports.deleteAuction = async (req, res) => {
    try {
        await aukcjaService.deleteAuction(req.params.id)
        res.status(204).send()
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}