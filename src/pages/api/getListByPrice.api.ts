import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

interface ProductList {
  family: string
  name: string
  price: number | any
  provider: string
  measure: string
  created_at: Date
}

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const listProducts: ProductList[] = await prisma.$queryRaw`
    SELECT 
      (
      SELECT 
        name
      FROM
        families f
      WHERE 
        p2.family_id = f.id 
      ) as family,
      p2.name,
      p.price,
      p.provider,
      p.created_at,
      p.measure
    FROM 
      price p
    INNER JOIN
      products p2 
    ON
      p.product_id = p2.id
    ORDER BY 
      p2.name
  `
  return res.json(listProducts)
}
