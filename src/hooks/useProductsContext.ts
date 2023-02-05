import { ProductsContext } from '@/context/productsContext'
import { useContext } from 'react'

export function useProductsContext() {
  return useContext(ProductsContext)
}
