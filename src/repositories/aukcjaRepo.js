const prisma = require('../config/prisma')

const createAuction = (data) => {return prisma.auction.create({ data })}

const getAuctionById = (id) => {return prisma.auction.findUnique({where: { id: Number(id) }})}

const getAllAuctions = () => {return prisma.auction.findMany()}

const updateAuction = (id, data) => {return prisma.auction.update({where: { id: Number(id) }, data})}

const deleteAuction = (id) => {return prisma.auction.delete({where: { id: Number(id) }})}

module.exports = {
    createAuction,
    getAllAuctions,
    getAuctionById,
    deleteAuction,
    updateAuction,

}