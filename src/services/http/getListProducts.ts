import { api } from '@/lib/axios.config'

export default async function getProducts() {
  const products = await api.get('/api/getListProducts').then((res) => res.data)
  return products
}
