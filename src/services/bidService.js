const bidRepo = require('../repositories/bidRepo')
const aukcjaRepo = require('../repositories/aukcjaRepo')
const userRepo = require('../repositories/userRepo')

const createBid = async (auctionId, { bidderId, amount }) => {
    if (!bidderId || amount === undefined || amount === null) {
        throw new Error('bidderId and amount are required')
    }

    const numericAmount = Number(amount)

    if (Number.isNaN(numericAmount) || numericAmount <= 0) {
        throw new Error('Amount must be a positive number')
    }

    const auction = await aukcjaRepo.getAuctionById(Number(auctionId))

    if (!auction) {
        throw new Error('Auction not found')
    }

    const bidder = await userRepo.getUserById(Number(bidderId))

    if (!bidder) {
        throw new Error('Bidder not found')
    }

    if (numericAmount <= auction.currentPrice) {
        throw new Error('Amount must be greater than current price')
    }

    const bid = await bidRepo.createBid({
        amount: numericAmount,
        auctionId: Number(auctionId),
        bidderId: Number(bidderId)
    })

    await aukcjaRepo.updateAuction(Number(auctionId), { currentPrice: numericAmount })

    return bid
}

const getBidsByAuctionId = async (auctionId) => {
    const auction = await aukcjaRepo.getAuctionById(Number(auctionId))

    if (!auction) {
        throw new Error('Auction not found')
    }

    return bidRepo.getBidsByAuctionId(Number(auctionId))
}

module.exports = {
    createBid,
    getBidsByAuctionId
}
