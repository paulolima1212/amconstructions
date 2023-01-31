import { api } from '@/lib/axios.config'

export async function getProducts() {
  const products = await api.get('/api/getListProducts').then((res) => res.data)
  return products
}
