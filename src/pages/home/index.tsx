import { FormEvent, useState } from 'react'

export default function Home() {
  const [product, setProduct] = useState('')
  const [price, setPrice] = useState(0)

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    console.log(product, price)
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
    </div>
  )
}
