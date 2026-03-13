import { prisma } from "prisma/prisma.config"

const profileRepository = {

    async create (data: any) {
        return await prisma.user.create(data)
    }

    async findById (id: string) {
        return await prisma.user.findUnique({ where: {id: parseInt(id)} })
    },

    async findByEmail (email: string) {
        return await prisma.user.findUnique({ where: {email} })
    },

    async deleteOne (id: string) {
        return await prisma.user.delete({ where: {id: parseInt(id)}})
    },

    async updateOne (id: string, data: any) {
        return await prisma.user.update( {where: {id: parseInt(id)}, data})
    }
}