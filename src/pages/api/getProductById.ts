import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handleGetProductById(id: string) {
  const product = await prisma.product.findUnique({
    where: {
      id: String(id),
    },
    include: {
      Family: {
        select: {
          name: true,
        },
      },
    },
  })

  return JSON.stringify(product)
}
