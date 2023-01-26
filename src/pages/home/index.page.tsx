import Skeleton from '@/components/skeleton'
import { api } from '@/lib/axios.config'
import { moneyFormatter } from '@/utils/formatter'
import { FormEvent, useState } from 'react'
import { useQuery } from 'react-query'

export default function Home() {
  const [product, setProduct] = useState('')
  const [price, setPrice] = useState(0)

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    api
      .post(`/api/createProduct?name=${product}&price=${price}`)
      .then((response) => {
        return response.data
      })

    setProduct('')
    setPrice(0)
  }

  async function getProducts() {
    const products = await api
      .get('/api/getListProducts')
      .then((res) => res.data)
    return products
  }

  const listProducts = useQuery('listProducts', getProducts)

  if (listProducts.status === 'loading') {
    return <Skeleton />
  }

  return (
    <div>
      <h1>Price control</h1>
      <form onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="product">
          <input
            type="text"
            id="product"
            placeholder="Digite o nome do produto"
            onChange={(e) => setProduct(e.target.value)}
          />
        </label>
        <label htmlFor="price">
          <input
            type="text"
            id="price"
            placeholder="Digite o preço do produto"
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </label>
        <button type="submit">Cadastrar</button>
      </form>
      <div>
        <ul>
          {listProducts.data?.map((product: any) => {
            return (
              <li key={product.id}>
                <span>{product.name}</span>
                <span>{moneyFormatter.format(product.price)}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
