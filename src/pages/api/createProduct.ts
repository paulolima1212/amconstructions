import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const { name, price } = req.query

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
      },
    })

    return res.status(201).json(newPrice)
  }

  const product = await prisma.product.create({
    data: {
      name: String(name),
      price: Number(price),
    },
  })

  await prisma.price.create({
    data: {
      price: Number(price),
      product_id: product.id,
    },
  })

  res.status(200).json(product)
}
