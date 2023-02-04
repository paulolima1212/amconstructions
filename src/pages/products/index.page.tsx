import { ButtonsContainer, ProductsContainer } from './styles'
import TableProduct from './components/tableProducts'
import Header from './components/header'
import Button from '@/components/button'
import { GetServerSideProps } from 'next'
import { getProductsList } from '@/services/getProducts.service'

export default function Products({ products }: any) {
  const listProducts = JSON.parse(products)

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

export const getServerSideProps: GetServerSideProps = async () => {
  const products = await getProductsList()

  return {
    props: {
      products,
    },
  }
}
