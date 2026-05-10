const aukcjaRepo = require('../repositories/aukcjaRepo')
const userRepo = require('../repositories/userRepo')

const createAuction = async ({
    title,
    description,
    category,
    startingPrice,
    startDate,
    endDate,
    ownerId
}) => {
    if (!title || !description || !category || !startingPrice || !startDate || !endDate || !ownerId) {
        throw new Error('All fields are required')
    }

    if (Number(startingPrice) <= 0) {
        throw new Error('Starting price must be greater than 0')
    }

    if (new Date(endDate) <= new Date(startDate)) {
        throw new Error('End date must be later than start date')
    }

    const owner = await userRepo.getUserById(Number(ownerId))

    if (!owner) {
        throw new Error('Owner not found')
    }

    return aukcjaRepo.createAuction({
        title,
        description,
        category,
        startingPrice: Number(startingPrice),
        currentPrice: Number(startingPrice),
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        ownerId: Number(ownerId)
    })
}

const getAllAuctions = async () => {
    return aukcjaRepo.getAllAuctions()
}

const getAuction = async (id) => {
    return aukcjaRepo.getAuctionById(Number(id))
}

const updateAuction = async (id, data) => {
    if (data.startingPrice && Number(data.startingPrice) <= 0) {
        throw new Error('Starting price must be greater than 0')
    }

    if (data.startDate && data.endDate) {
        if (new Date(data.endDate) <= new Date(data.startDate)) {
            throw new Error('End date must be later than start date')
        }
    }

    if (data.startingPrice) {
        data.startingPrice = Number(data.startingPrice)
    }

    if (data.currentPrice) {
        data.currentPrice = Number(data.currentPrice)
    }

    if (data.startDate) {
        data.startDate = new Date(data.startDate)
    }

    if (data.endDate) {
        data.endDate = new Date(data.endDate)
    }

    return aukcjaRepo.updateAuction(Number(id), data)
}

const deleteAuction = async (id) => {
    return aukcjaRepo.deleteAuction(Number(id))
}

module.exports = {
    createAuction,
    getAllAuctions,
    getAuction,
    updateAuction,
    deleteAuction
}