import { api } from '@/lib/axios.config'
import { FormEvent, useState } from 'react'
import { FormContainer } from './styles'

export function FormNewProduct() {
  const [product, setProduct] = useState('')
  const [provider, setProvider] = useState('')
  const [family, setFamily] = useState('')
  const [price, setPrice] = useState(0)

  async function handleSubmit(event: FormEvent) {
    const measureValue = document.getElementById('measure') as HTMLSelectElement
    const measure = measureValue.value

    event.preventDefault()
    api
      .post(`/api/createProduct`, {
        name: product,
        provider,
        price,
        measure,
        family,
      })
      .then((response) => {
        return response.data
      })

    setProduct('')
    setProvider('')
    setPrice(0)
  }
  return (
    <FormContainer>
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
        <label htmlFor="family">
          <input
            type="text"
            id="family"
            placeholder="Digite o nome do fornecedor"
            onChange={(e) => setFamily(e.target.value)}
            value={family}
          />
        </label>
        <select aria-label="measure-unit" name="measure" id="measure">
          <option value="UN">UN</option>
          <option value="KG">KG</option>
          <option value="M2">M²</option>
          <option value="M">M</option>
        </select>
        <button type="submit">Cadastrar</button>
      </form>
    </FormContainer>
  )
}
