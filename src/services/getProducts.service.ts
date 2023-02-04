import { prisma } from '@/lib/prisma'

export async function getProductsList() {
  const products = await prisma.$queryRaw`
    SELECT
      p.name,
      p.measure,
      (
      SELECT 
        f.name
      FROM
        families f 
      WHERE 
        f.id = p.family_id 
      ) as family,
      (
      SELECT
        price.price
      FROM
        price
      WHERE
        price.product_id = p.id
      ORDER BY
        price.created_at DESC
      LIMIT
        1
      ) as price,
      (
      SELECT
        price.provider
      FROM
        price
      WHERE
        price.product_id = p.id
      ORDER BY
        price.created_at DESC
      LIMIT
        1
      ) as provider,
      (
      SELECT
        price.created_at
      FROM
        price
      WHERE
        price.product_id = p.id
      ORDER BY
        price.created_at DESC
      LIMIT
        1
      ) as ultPreco
    FROM
      products p
  `

  return JSON.stringify(products)
}
