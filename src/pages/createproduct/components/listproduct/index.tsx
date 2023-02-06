import { Products } from '@/@types/products'
import { ListProductsContainer } from './styles'

export function ListProductsFound({ products }: { products: Products[] }) {
  console.log(products)
  return (
    <ListProductsContainer>
      <ul>
        {products.map((product) => {
          return <li>{product.name}</li>
        })}
      </ul>
    </ListProductsContainer>
  )
}
