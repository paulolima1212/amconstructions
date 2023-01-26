import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const products = await prisma.$queryRaw`
    SELECT 
      products.name,
      (
        SELECT 
          price.price
        FROM
          price
        WHERE
          price.product_id = products.id
        ORDER BY
          price.create_at DESC
        LIMIT
          1
      ) as price
    FROM
      products
  `

  return res.json(products)
}
