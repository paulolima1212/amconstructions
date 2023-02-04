import { api } from '@/lib/axios.config'
import { useForm } from 'react-hook-form'
import { ArrowLeft } from 'phosphor-react'
import { Button, Form, FormContainer, Input, Select, Title } from './styles'
import Link from 'next/link'
import React from 'react'

export default function FormNewProduct() {
  const { handleSubmit, register, reset } = useForm()

  async function handleCreateNewProduct(data: any) {
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
      <Title>
        <Link href={'/'}>
          <ArrowLeft size={32} />
        </Link>
        Nova Entrada
      </Title>
      <Form onSubmit={handleSubmit(handleCreateNewProduct)}>
        <label htmlFor="product">
          <span>Produto</span>
          <Input
            type="text"
            placeholder="Digite o nome do produto"
            {...register('name')}
          />
        </label>
        <label htmlFor="price">
          <span>Preço</span>
          <Input
            type="number"
            placeholder="Digite o preço do produto"
            min={0.01}
            step={0.01}
            {...register('price')}
          />
        </label>
        <label htmlFor="provider">
          <span>Fornecedor</span>
          <Input
            type="text"
            placeholder="Digite o nome do fornecedor"
            {...register('provider')}
          />
        </label>
        <label htmlFor="family">
          <span>Categoria</span>
          <Input
            type="text"
            placeholder="Digite o nome do fornecedor"
            {...register('family')}
          />
        </label>
        <label>
          <span>Un.</span>
          <Select aria-label="measure-unit" {...register('measure')}>
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