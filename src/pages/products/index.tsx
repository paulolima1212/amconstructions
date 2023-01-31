import Skeleton from '@/components/skeleton'
import { dateFormatted, moneyFormatter } from '@/utils/formatter'
import { useQuery } from 'react-query'
import { ProductsContainer, TableContainer } from './styles'
import { FormNewProduct } from './formNewProduct'
import { getProducts } from '@/services/http/getListProducts'

export default function Home() {
  const listProducts = useQuery('listProducts', getProducts)

  if (listProducts.status === 'loading') {
    return <Skeleton />
  }

  return (
    <ProductsContainer>
      <h1>Price control</h1>

      <TableContainer>
        <table>
          <thead>
            <tr>
              <th>Familia</th>
              <th>Descrição</th>
              <th>Fornecedor</th>
              <th>Preço</th>
              <th>Un.</th>
              <th>Ult Preço</th>
            </tr>
          </thead>
          <tbody>
            {listProducts.data?.map((product: any) => {
              return (
                <tr key={product.id}>
                  <td>{product.family}</td>
                  <td>{product.name}</td>
                  <td>{product.provider}</td>
                  <td>{moneyFormatter.format(product.price)}</td>
                  <td>{product.measure}</td>
                  <td>{dateFormatted(new Date(product.ultPreco))}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </TableContainer>
      <FormNewProduct />
    </ProductsContainer>
  )
}
