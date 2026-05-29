const bidService = require('../services/bidService')

exports.createBid = async (req, res) => {
    try {
        const bid = await bidService.createBid(req.params.id, req.body)
        res.status(201).json(bid)
    } catch (err) {
        const status = err.message === 'Auction not found' || err.message === 'Bidder not found' ? 404 : 400
        res.status(status).json({ error: err.message })
    }
}

exports.getBidsByAuction = async (req, res) => {
    try {
        const bids = await bidService.getBidsByAuctionId(req.params.id)
        res.json(bids)
    } catch (err) {
        const status = err.message === 'Auction not found' ? 404 : 500
        res.status(status).json({ error: err.message })
    }
}
