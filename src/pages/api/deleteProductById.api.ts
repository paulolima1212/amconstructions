import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { id } = req.query

  await prisma.product.delete({
    where: {
      id: String(id),
    },
  })

  return res.status(200).end()
}
