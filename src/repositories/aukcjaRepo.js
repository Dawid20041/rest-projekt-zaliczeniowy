const prisma = require('../config/prisma')

const createAuction = (data) => {return prisma.auction.create({ data })}

const getAuctionById = (id) => {return prisma.auction.findUnique({where: { id: Number(id) }})}

const getAllAuctions = (where = {}, orderBy = undefined) => {
    const query = { where }
    if (orderBy) query.orderBy = orderBy
    return prisma.auction.findMany(query)
}

const updateAuction = (id, data) => {return prisma.auction.update({where: { id: Number(id) }, data})}

const deleteAuction = async (id) => {
  const auctionId = Number(id)

  await prisma.bid.deleteMany({
    where: {
      auctionId: auctionId
    }
  })

  return prisma.auction.delete({
    where: {
      id: auctionId
    }
  })
}

module.exports = {
    createAuction,
    getAllAuctions,
    getAuctionById,
    deleteAuction,
    updateAuction,

}