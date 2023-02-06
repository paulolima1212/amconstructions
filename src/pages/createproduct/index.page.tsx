import { api } from '@/lib/axios.config'
import { ArrowLeft } from 'phosphor-react'
import { Button, Form, FormContainer, Input, Select, Title } from './styles'
import Link from 'next/link'
import React, { FormEvent, useEffect, useState } from 'react'
import Header from './components/header'
import { getProductsByName } from '@/services/getProductsByName.service'
import { ListProductsFound } from './components/listproduct'
import { Products } from '@/@types/products'

export default function FormNewProduct() {
  const [name, setName] = useState<string | undefined>('')
  const [provider, setProvider] = useState<string | undefined>('')
  const [price, setPrice] = useState<string | undefined>('')
  const [measure, setMeasure] = useState<string | undefined>('')
  const [family, setFamily] = useState<string | undefined>('')
  const [productList, setProductList] = useState<Products[]>([])

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

  async function handleGetListProduct(name: string) {
    const data = await getProductsByName(name)

    setProductList(data)
  }

  function handleProduct(value: string) {
    setName(value)

    if (value !== '') {
      handleGetListProduct(value)
    } else {
      setProductList([])
    }
  }

  function handleSetProductSelected(id: string) {
    const newProduct = productList.find((product) => product.id === id)
    setProductList([])
    setName(newProduct?.name)
    setMeasure(newProduct?.measure)
    setPrice(newProduct?.price)
    setProvider(newProduct?.provider)
    setFamily(newProduct?.Family?.name)
  }

  useEffect(() => {
    setFamily('')
    setMeasure('')
    setPrice('')
    setPrice('')
    setProvider('')
  }, [name])

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
          <div>
            <span>Produto</span>
            <Input
              type="text"
              placeholder="Digite o nome do produto"
              onChange={(e) => handleProduct(e.target.value)}
              value={name}
            />
          </div>
          {productList.length > 0 && (
            <ListProductsFound
              setProductId={handleSetProductSelected}
              products={productList}
            />
          )}
        </label>
        <label htmlFor="price">
          <div>
            <span>Preço</span>
            <Input
              type="number"
              placeholder="Digite o preço do produto"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              min={0.01}
              step={0.01}
            />
          </div>
        </label>
        <label htmlFor="provider">
          <div>
            <span>Fornecedor</span>
            <Input
              type="text"
              placeholder="Digite o nome do fornecedor"
              onChange={(e) => setProvider(e.target.value)}
              value={provider}
            />
          </div>
        </label>
        <label htmlFor="family">
          <div>
            <span>Categoria</span>
            <Input
              type="text"
              placeholder="Digite o nome da categoria"
              onChange={(e) => setFamily(e.target.value)}
              value={family}
            />
          </div>
        </label>
        <label>
          <div>
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
          </div>
        </label>
        <Button type="submit">Cadastrar</Button>
      </Form>
    </FormContainer>
  )
}
