import { ArrowLeft } from 'phosphor-react'
import { Button, Form, FormContainer, Input, Select, Title } from './styles'
import Link from 'next/link'

export default function FormNewProduct() {
  async function handleCreateNewProduct() {
    // const { name, provider, price, measure, family } = data
    // api
    //   .post(`/api/createProduct`, {
    //     name,
    //     provider,
    //     price,
    //     measure,
    //     family,
    //   })
    //   .then((response) => {
    //     return response.data
    //   })
  }

  return (
    <FormContainer>
      <Title>
        <Link href={'/'}>
          <ArrowLeft size={32} />
        </Link>
        Nova Entrada
      </Title>
      <Form onSubmit={handleCreateNewProduct}>
        <label htmlFor="product">
          <span>Produto</span>
          <Input type="text" placeholder="Digite o nome do produto" />
        </label>
        <label htmlFor="price">
          <span>Preço</span>
          <Input
            type="number"
            placeholder="Digite o preço do produto"
            min={0.01}
            step={0.01}
          />
        </label>
        <label htmlFor="provider">
          <span>Fornecedor</span>
          <Input type="text" placeholder="Digite o nome do fornecedor" />
        </label>
        <label htmlFor="family">
          <span>Categoria</span>
          <Input type="text" placeholder="Digite o nome do fornecedor" />
        </label>
        <label>
          <span>Un.</span>
          <Select aria-label="measure-unit">
            <option value="UN">UN</option>
            <option value="KG">KG</option>
            <option value="M2">M²</option>
            <option value="M">M</option>
          </Select>
        </label>
        <Button type="submit">Cadastrar</Button>
      </Form>
    </FormContainer>
  )
}
