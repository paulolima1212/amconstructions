import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { name } = req.query

  const product = await prisma.product.findUnique({
    where: {
      name: String(name),
    },
  })

  if (!product) {
    return res.status(404).json({ message: 'Product not found' })
  }

  const listProducts = await prisma.price.findMany({
    where: {
      product_id: product.id,
    },
    include: {
      product: {
        select: {
          name: true,
        },
      },
    },
    orderBy: {
      create_at: 'desc',
    },
  })

  return res.json(listProducts)
}
