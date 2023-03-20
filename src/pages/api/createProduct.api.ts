import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const { name, price, provider, measure, family, iva, sale_price } = req.body

  const existsProduct = await prisma.product.findUnique({
    where: {
      name: String(name),
    },
  })

  if (existsProduct) {
    const newPrice = await prisma.price.create({
      data: {
        price: Number(price),
        product_id: existsProduct.id,
        provider: String(provider),
        measure,
        sale_price: Number(sale_price),
        iva: Number(iva),
      },
    })

    return res.status(201).json(newPrice)
  }

  const product = await prisma.product.create({
    data: {
      name: String(name),
      price: Number(price),
      provider: String(provider),
      measure,
      sale_price,
      iva,
      Family: {
        connectOrCreate: {
          where: {
            name: family,
          },
          create: {
            name: family,
          },
        },
      },
    },
  })

  await prisma.price.create({
    data: {
      price: Number(price),
      product_id: product.id,
      provider: String(provider),
      measure,
      sale_price,
      iva,
    },
  })

  res.status(200).json(product)
}
