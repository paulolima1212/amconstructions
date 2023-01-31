import { api } from '@/lib/axios.config'
import { Button, Form, FormContainer } from './styles'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const formNewProductData = z.object({
  name: z.string().min(3),
  provider: z.string().min(4),
  family: z.string().min(4),
  price: z.coerce.number(),
  measure: z.string(),
})

type FormNewProductDataSchema = z.infer<typeof formNewProductData>

export function FormNewProduct() {
  const { handleSubmit, register, reset } = useForm<FormNewProductDataSchema>({
    resolver: zodResolver(formNewProductData),
  })

  async function handleCreateNewProduct(data: FormNewProductDataSchema) {
    const { name, provider, price, measure, family } = data

    api
      .post(`/api/createProduct`, {
        name,
        provider,
        price,
        measure,
        family,
      })
      .then((response) => {
        return response.data
      })

    reset()
  }

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit(handleCreateNewProduct)}>
        <label htmlFor="product">
          Produto
          <input
            type="text"
            placeholder="Digite o nome do produto"
            {...register('name')}
          />
        </label>
        <label htmlFor="price">
          Preço
          <input
            type="number"
            placeholder="Digite o preço do produto"
            {...register('price')}
          />
        </label>
        <label htmlFor="provider">
          Fornecedor
          <input
            type="text"
            placeholder="Digite o nome do fornecedor"
            {...register('provider')}
          />
        </label>
        <label htmlFor="family">
          Categoria
          <input
            type="text"
            placeholder="Digite o nome do fornecedor"
            {...register('family')}
          />
        </label>
        <label>
          Un.
          <select aria-label="measure-unit" {...register('measure')}>
            <option value="UN">UN</option>
            <option value="KG">KG</option>
            <option value="M2">M²</option>
            <option value="M">M</option>
          </select>
        </label>
        <Button type="submit">Cadastrar</Button>
      </Form>
    </FormContainer>
  )
}
