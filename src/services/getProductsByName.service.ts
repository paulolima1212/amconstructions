import { api } from '@/lib/axios.config'

export async function getProductsByName(name: string) {
  const { data } = await api.get(`/api/getListProductsByName?name=${name}`)

  return data
}
