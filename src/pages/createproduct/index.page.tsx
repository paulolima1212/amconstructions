import { api } from '@/lib/axios.config'
import { ArrowLeft } from 'phosphor-react'
import { Button, Form, FormContainer, Input, Select, Title } from './styles'
import Link from 'next/link'
import React, { FormEvent, useState } from 'react'
import Header from './components/header'

export default function FormNewProduct() {
  const [name, setName] = useState('')
  const [provider, setProvider] = useState('')
  const [price, setPrice] = useState('')
  const [measure, setMeasure] = useState('')
  const [family, setFamily] = useState('')

  async function handleCreateNewProduct(e: FormEvent) {
    e.preventDefault()

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

    setName('')
    setFamily('')
    setMeasure('')
    setPrice('')
    setPrice('')
    setProvider('')
  }

  return (
    <FormContainer>
      <Header />
      <Title>
        <Link href={'/'}>
          <ArrowLeft size={32} />
        </Link>
        Nova Entrada
      </Title>
      <Form onSubmit={handleCreateNewProduct}>
        <label htmlFor="product">
          <span>Produto</span>
          <Input
            type="text"
            placeholder="Digite o nome do produto"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label htmlFor="price">
          <span>Preço</span>
          <Input
            type="number"
            placeholder="Digite o preço do produto"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            min={0.01}
            step={0.01}
          />
        </label>
        <label htmlFor="provider">
          <span>Fornecedor</span>
          <Input
            type="text"
            placeholder="Digite o nome do fornecedor"
            onChange={(e) => setProvider(e.target.value)}
            value={provider}
          />
        </label>
        <label htmlFor="family">
          <span>Categoria</span>
          <Input
            type="text"
            placeholder="Digite o nome da categoria"
            onChange={(e) => setFamily(e.target.value)}
            value={family}
          />
        </label>
        <label>
          <span>Un.</span>
          <Select
            aria-label="measure-unit"
            onChange={(e) => setMeasure(e.target.value)}
            value={measure}
          >
            <option value="SELECT"> </option>
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
