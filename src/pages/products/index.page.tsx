import { GetServerSideProps } from 'next'
import { ProductsContainer } from './styles'
import { getProductsList } from '@/services/getProducts.service'
import TableProduct from './components/tableProducts'
import Header from './components/header'
import Button from '@/components/button'
import { Footer } from './components/footer'
import { Search } from './components/search'

export default function Products({ products }: any) {
  const listProducts = JSON.parse(products)

  return (
    <ProductsContainer>
      <Header />
      <Search />
      <TableProduct products={listProducts} />
      <Footer />
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
