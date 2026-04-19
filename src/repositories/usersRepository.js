const prisma = require("../config/prisma")

exports.create = (data) => {
    return prisma.user.create({ data })
}

exports.findAll = () => {
    return prisma.user.findMany()
}

exports.findById = (id) => {
    return prisma.user.findUnique({
        where: { id: Number(id) }
    })
}

exports.update = (id, data) => {
    return prisma.user.update({
        where: { id: Number(id) },
        data
    })
}

exports.delete = (id) => {
    return prisma.user.delete({
        where: { id: Number(id) }
    })
}