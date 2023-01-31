import Skeleton from '@/components/skeleton'
import { useQuery } from 'react-query'
import { ProductsContainer } from './styles'
import { FormNewProduct } from './formNewProduct'
import { getProducts } from '@/services/http/getListProducts'
import { TableProduct } from './tableProducts'

export default function Home() {
  const listProducts = useQuery('listProducts', getProducts)

  if (listProducts.status === 'loading') {
    return <Skeleton />
  }

  return (
    <ProductsContainer>
      <h1>Price control</h1>
      <TableProduct products={listProducts} />
      <FormNewProduct />
    </ProductsContainer>
  )
}
