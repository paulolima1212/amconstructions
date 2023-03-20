import { prisma } from '@/lib/prisma'

export async function getProductsList() {
  const products = await prisma.$queryRaw`
    SELECT
      p.id,
      p.name,
      p.measure,
      (
      SELECT
        f.name
      FROM
        families f
      WHERE
        f.id = p.family_id 
          ) AS family,
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
          ) AS price,
          (
      SELECT
        price.iva
      FROM
        price
      WHERE
        price.product_id = p.id
      ORDER BY
        price.created_at DESC
      LIMIT
            1
          ) AS IVA,
          (
      SELECT
        price.sale_price 
      FROM
        price
      WHERE
        price.product_id = p.id
      ORDER BY
        price.created_at DESC
      LIMIT
            1
          ) AS sale_price,
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
          ) AS provider,
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
          ) AS ultPreco
    FROM
      products p
  `

  return JSON.stringify(products)
}
