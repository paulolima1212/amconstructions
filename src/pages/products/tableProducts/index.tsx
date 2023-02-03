import { dateFormatted, moneyFormatter } from '@/utils/formatter'
import { TableContainer } from './styles'

export default function TableProduct({ products }: any) {
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
          </tr>
        </thead>
        <tbody>
          {products.data?.map((product: any) => {
            return (
              <tr key={product.id}>
                <td width={'15%'}>{product.family}</td>
                <td>{product.name}</td>
                <td>{product.provider}</td>
                <td>{moneyFormatter.format(product.price)}</td>
                <td>{product.measure}</td>
                <td width={'50%'}>
                  {dateFormatted(new Date(product.ultPreco))}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </TableContainer>
  )
}
