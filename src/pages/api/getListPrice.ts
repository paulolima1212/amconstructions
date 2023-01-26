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

  const listProducts = await prisma.price.findMany({
    where: {
      product_id: product?.id,
    },
    include: {
      product: {
        select: {
          name: true,
        },
      },
    },
  })

  return res.json(listProducts)
}
