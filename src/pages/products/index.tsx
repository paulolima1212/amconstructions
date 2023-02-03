import Skeleton from '@/components/skeleton'
import { useQuery } from 'react-query'
import { ProductsContainer } from './styles'
import getProducts from '@/services/http/getListProducts'
import TableProduct from './tableProducts'

export default function Products() {
  const listProducts = useQuery('listProducts', getProducts, {
    refetchInterval: 100,
  })

  if (listProducts.status === 'loading') {
    return <Skeleton />
  }

  return (
    <ProductsContainer>
      <h1>Price control</h1>
      <TableProduct products={listProducts} />
    </ProductsContainer>
  )
}
