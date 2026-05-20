const prisma = require('../config/prisma')

const createBid = (data) => {return prisma.bid.create({ data })}

const getBidsByAuctionId = (auctionId) => {
    return prisma.bid.findMany({
        where: { auctionId: Number(auctionId) },
        orderBy: { createdAt: 'desc' }
    })
}

const getHighestBidByAuctionId = (auctionId) => {
    return prisma.bid.findFirst({
        where: { auctionId: Number(auctionId) },
        orderBy: { amount: 'desc' }
    })
}

module.exports = {
    createBid,
    getBidsByAuctionId,
    getHighestBidByAuctionId
}
