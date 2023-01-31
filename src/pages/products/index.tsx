import Skeleton from '@/components/skeleton'
import { api } from '@/lib/axios.config'
import { moneyFormatter } from '@/utils/formatter'
import { FormEvent, useState } from 'react'
import { useQuery } from 'react-query'

export default function Home() {
  const [product, setProduct] = useState('')
  const [provider, setProvider] = useState('')
  const [price, setPrice] = useState(0)

  async function handleSubmit(event: FormEvent) {
    const measureValue = document.getElementById('measure') as HTMLSelectElement
    const measure = measureValue.value

    event.preventDefault()
    api
      .post(`/api/createProduct`, {
        product,
        provider,
        price,
        measure,
      })
      .then((response) => {
        return response.data
      })

    setProduct('')
    setProvider('')
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
            value={product}
          />
        </label>
        <label htmlFor="price">
          <input
            type="text"
            id="price"
            placeholder="Digite o preço do produto"
            onChange={(e) => setPrice(Number(e.target.value))}
            value={price}
          />
        </label>
        <label htmlFor="provider">
          <input
            type="text"
            id="provider"
            placeholder="Digite o nome do fornecedor"
            onChange={(e) => setProvider(e.target.value)}
            value={provider}
          />
        </label>
        <select aria-label="measure-unit" name="measure" id="measure">
          <option value="UN">UN</option>
          <option value="KG">KG</option>
          <option value="M2">M2</option>
          <option value="M">M</option>
        </select>
        <button type="submit">Cadastrar</button>
      </form>
      <div>
        <ul>
          {listProducts.data?.map((product: any) => {
            return (
              <li key={product.id}>
                <span>{product.name}</span>
                <span>{moneyFormatter.format(product.price)}</span>
                <span>{product.provider}</span>
                <span>{product.ultPreco}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
