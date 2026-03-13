import { Prisma } from 'prisma/generated/client'
import {prisma} from '../../prisma/prisma.config'

export const userRepository = {
  findById: async (id: string) => {
    return await prisma.user.findUnique({ where: { id: parseInt(id) } })
  },
  

  findByEmail: async (email: string) => {
    return await prisma.user.findUnique({ where: { email } })
  },


  find: async (filter: Prisma.UserWhereInput, options?: {
    skip?: number
    take?: number  // limit
    select?: Prisma.UserSelect
    orderBy?: Prisma.UserOrderByWithRelationInput
  }) => {
    const users = await prisma.user.findMany({
      where: filter,           
      skip: options?.skip,
      take: options?.take,     //  limit 
      select: options?.select,
      orderBy: options?.orderBy,
    })

    return users
  },


  create: async (data: any) => {
    return await prisma.user.create({ data })
  },


  updateOne: async (id: string, data: any) => {
    return await prisma.user.update({ where: { id: parseInt(id)  }, data })
  },


  deleteOne: async (id: string) => {
    return await prisma.user.delete({ where: { id: parseInt(id)  } })
  }
}