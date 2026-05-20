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

const SORTABLE_FIELDS = ['title', 'category', 'startingPrice', 'currentPrice', 'startDate', 'endDate', 'status']

const getAllAuctions = async (filters = {}) => {
    const { category, status, minPrice, maxPrice, title, sortBy, order } = filters
    const where = {}

    if (category) {
        where.category = category
    }

    if (status) {
        where.status = status
    }

    if (title) {
        where.title = { contains: title }
    }

    if (minPrice !== undefined || maxPrice !== undefined) {
        where.currentPrice = {}

        if (minPrice !== undefined) {
            const n = Number(minPrice)
            if (Number.isNaN(n)) throw new Error('minPrice must be a number')
            where.currentPrice.gte = n
        }

        if (maxPrice !== undefined) {
            const n = Number(maxPrice)
            if (Number.isNaN(n)) throw new Error('maxPrice must be a number')
            where.currentPrice.lte = n
        }
    }

    let orderBy

    if (sortBy !== undefined || order !== undefined) {
        if (!sortBy) {
            throw new Error('sortBy is required when order is provided')
        }
        if (!SORTABLE_FIELDS.includes(sortBy)) {
            throw new Error(`sortBy must be one of: ${SORTABLE_FIELDS.join(', ')}`)
        }
        const direction = order === undefined ? 'asc' : order
        if (direction !== 'asc' && direction !== 'desc') {
            throw new Error('order must be "asc" or "desc"')
        }
        orderBy = { [sortBy]: direction }
    }

    return aukcjaRepo.getAllAuctions(where, orderBy)
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