import { api } from '@/lib/axios.config'

export async function deleteProductById(id: string) {
  await api.delete(`/api/deleteProductById?id=${id}`)
}
