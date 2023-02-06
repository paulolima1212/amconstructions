import dateFormatted, { moneyFormatter } from '@/utils/formatter'
import { TableContainer } from './styles'
import { useProductsContext } from '@/hooks/useProductsContext'
import { TrashSimple } from 'phosphor-react'
import { deleteProductById } from '@/services/deleteProductById.service'
import { useRouter } from 'next/router'

interface ProductsProps {
  id: string
  family: string
  measure: string
  name: string
  price: string
  provider: string
  ultPreco: string
}

export default function TableProduct({
  products,
}: {
  products: ProductsProps[]
}) {
  const navigate = useRouter()
  const { filter, filterValue } = useProductsContext()
  let newListProduct = products

  switch (filter) {
    case 'description':
      newListProduct = products.filter((product) =>
        product.name?.toLowerCase().startsWith(filterValue.toLowerCase()),
      )
      break
    case 'family':
      newListProduct = products.filter((product) =>
        product.family?.toLowerCase().startsWith(filterValue.toLowerCase()),
      )
      break
    case 'provider':
      newListProduct = products.filter((product) =>
        product.provider?.toLowerCase().startsWith(filterValue.toLowerCase()),
      )
      break

    default:
      break
  }

  function handleDeleteProductById(id: string) {
    deleteProductById(id)
    navigate.reload()
  }

  return (
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
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {newListProduct.map((product: ProductsProps) => {
            return (
              <tr key={product.id}>
                <td width={'15%'}>{product.family}</td>
                <td>{product.name}</td>
                <td>{product.provider}</td>
                <td>{moneyFormatter.format(Number(product.price))}</td>
                <td>{product.measure}</td>
                <td width={'30%'}>
                  {dateFormatted(new Date(product.ultPreco))}
                </td>
                <td>
                  <TrashSimple
                    size={20}
                    onClick={() => handleDeleteProductById(product.id)}
                  />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </TableContainer>
  )
}
