import Skeleton from '@/components/skeleton'
import { useQuery } from 'react-query'
import { ButtonsContainer, ProductsContainer } from './styles'
import getProducts from '@/services/http/getListProducts'
import TableProduct from './components/tableProducts'
import Header from './components/header'
import Button from '@/components/button'

export default function Products() {
  const listProducts = useQuery('listProducts', getProducts, {
    refetchInterval: 100,
  })

  if (listProducts.status === 'loading') {
    return <Skeleton />
  }

  return (
    <ProductsContainer>
      <Header />
      <TableProduct products={listProducts} />
      <ButtonsContainer>
        <Button size={'md'} href={'/newproduct'} title="Nova entrada" />
        <Button size={'md'} href={'/'} title="Nova cotação" />
      </ButtonsContainer>
    </ProductsContainer>
  )
}
