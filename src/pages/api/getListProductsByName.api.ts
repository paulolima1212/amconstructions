import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { name } = req.query

  const product = await prisma.product.findMany({
    where: {
      name: {
        contains: String(name).toLowerCase(),
      },
    },
    include: {
      Family: {
        select: {
          name: true,
        },
      },
    },
  })

  return res.json(product)
}
