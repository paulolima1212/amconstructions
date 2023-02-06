import { Products } from '@/@types/products'
import { ListProductsContainer } from './styles'
import { useProductsContext } from '@/hooks/useProductsContext'

interface ListProductsFoundProps {
  products: Products[]
  setProductId: (id: string) => void
}

export function ListProductsFound({
  products,
  setProductId,
}: ListProductsFoundProps) {
  return (
    <ListProductsContainer>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id} onClick={() => setProductId(product.id)}>
              {product.name}
            </li>
          )
        })}
      </ul>
    </ListProductsContainer>
  )
}
