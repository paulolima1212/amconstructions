import dateFormatted, { moneyFormatter } from '@/utils/formatter'
import { TableContainer } from './styles'
import { useProductsContext } from '@/hooks/useProductsContext'
import { PlusCircle, TrashSimple } from 'phosphor-react'
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
  IVA: string
  sale_price: string
}

export default function TableProduct({
  products,
}: {
  products: ProductsProps[]
}) {
  const router = useRouter()
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
            <th>IVA</th>
            <th>Preço Venda</th>
            <th>Un.</th>
            <th>Ult Preço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {newListProduct.map((product: ProductsProps) => {
            return (
              <tr key={product.id}>
                <td>{product.family}</td>
                <td style={{ textAlign: 'left', minWidth: '15rem' }}>
                  {product.name}
                </td>
                <td style={{ textAlign: 'left' }}>{product.provider}</td>
                <td>{moneyFormatter.format(Number(product.price))}</td>
                <td>{product.IVA}%</td>
                <td>{moneyFormatter.format(Number(product.sale_price))}</td>
                <td>{product.measure}</td>
                <td style={{ minWidth: '15rem' }}>
                  {dateFormatted(new Date(product.ultPreco))}
                </td>
                <td className="actions">
                  <PlusCircle
                    size={20}
                    onClick={() =>
                      router.push(`/createproduct?id=${product.id}`)
                    }
                  />
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
