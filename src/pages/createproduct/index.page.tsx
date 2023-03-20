import { api } from '@/lib/axios.config'
import { ArrowLeft } from 'phosphor-react'
import { Button, Form, FormContainer, Input, Select, Title } from './styles'
import Link from 'next/link'
import React, { useState } from 'react'
import Header from './components/header'
import { getProductsByName } from '@/services/getProductsByName.service'
import { ListProductsFound } from './components/listproduct'
import { Products } from '@/@types/products'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { GetServerSideProps } from 'next'
import handleGetProductById from '../api/getProductById'

const newProductSchema = z.object({
  name: z.string(),
  provider: z.string(),
  price: z.string(),
  measure: z.string(),
  family: z.string(),
  iva: z.string(),
  sale_price: z.string(),
})

type ProductData = z.infer<typeof newProductSchema>

export default function FormNewProduct({ product }: { product: Products }) {
  const { register, handleSubmit } = useForm<ProductData>({
    resolver: zodResolver(newProductSchema),
  })

  const [productList, setProductList] = useState<Products[]>([])
  const [activeProduct, setActiveProduct] = useState(() => {
    if (product) {
      return {
        productName: product.name,
        productProvider: product.provider,
        productPrice: product.price,
        productIVA: product.iva,
        productSalePrice: product.sale_price,
        productFamily: product.Family.name,
        productMeasure: product.measure,
      }
    }

    return {
      productName: '',
      productProvider: '',
      productPrice: '',
      productIVA: '23',
      productSalePrice: '',
      productFamily: '',
      productMeasure: '',
    }
  })

  async function handleCreateNewProduct() {
    api
      .post(`/api/createProduct`, {
        name: activeProduct.productName,
        provider: activeProduct.productProvider,
        price: activeProduct.productPrice,
        measure: activeProduct.productMeasure,
        family: activeProduct.productFamily,
        sale_price: (
          (Number(activeProduct.productIVA) / 100 + 1) *
          Number(activeProduct.productPrice)
        ).toFixed(2),
        iva: activeProduct.productIVA,
      })
      .then((response) => {
        return response.data
      })
    setActiveProduct({
      productName: '',
      productProvider: '',
      productPrice: '',
      productIVA: '23',
      productSalePrice: '',
      productFamily: '',
      productMeasure: '',
    })
  }

  async function handleGetListProduct(name: string) {
    const data = await getProductsByName(name)
    setProductList(data)
  }

  function handleProduct(value: string) {
    setActiveProduct({
      ...activeProduct,
      productName: value,
    })
    if (value !== '') {
      handleGetListProduct(value)
    } else {
      setProductList([])
    }
  }

  function handleSetProductSelected(id: string) {
    const newProduct = productList.find((product) => product.id === id)
    setActiveProduct({
      productFamily: newProduct!.Family.name,
      productIVA: newProduct!.iva,
      productMeasure: newProduct!.measure,
      productName: newProduct!.name,
      productPrice: newProduct!.price,
      productProvider: newProduct!.provider,
      productSalePrice: newProduct!.sale_price,
    })
    setProductList([])
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
      <Form onSubmit={handleSubmit(handleCreateNewProduct)}>
        <label htmlFor="product">
          <div>
            <span>Produto</span>
            <Input
              type="text"
              placeholder="Digite o nome do produto"
              {...register('name')}
              onChange={(e) => handleProduct(e.target.value)}
              value={activeProduct.productName}
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
              placeholder="Digite o preço do produto"
              {...register('price')}
              onChange={(e) =>
                setActiveProduct({
                  ...activeProduct,
                  productPrice: e.target.value,
                  productSalePrice: String(
                    Number(
                      (Number(activeProduct.productIVA) / 100 + 1) *
                        Number(e.target.value),
                    ).toFixed(2),
                  ),
                })
              }
              value={activeProduct.productPrice}
            />
          </div>
        </label>
        <label htmlFor="iva">
          <div>
            <span>IVA</span>
            <Input
              placeholder="Digite o preço do produto"
              {...register('iva')}
              onChange={(e) =>
                setActiveProduct({
                  ...activeProduct,
                  productIVA: e.target.value,
                  productSalePrice: String(
                    Number(
                      (Number(e.target.value) / 100 + 1) *
                        Number(activeProduct.productPrice),
                    ).toFixed(2),
                  ),
                })
              }
              value={activeProduct.productIVA}
            />
          </div>
        </label>
        <label htmlFor="sale_price">
          <div>
            <span>Preço de Venda</span>
            <Input
              readOnly
              value={activeProduct.productSalePrice}
              {...register('sale_price')}
            />
          </div>
        </label>
        <label htmlFor="provider">
          <div>
            <span>Fornecedor</span>
            <Input
              type="text"
              placeholder="Digite o nome do fornecedor"
              {...register('provider')}
              value={activeProduct.productProvider}
              onChange={(e) =>
                setActiveProduct({
                  ...activeProduct,
                  productProvider: e.target.value,
                })
              }
            />
          </div>
        </label>
        <label htmlFor="family">
          <div>
            <span>Categoria</span>
            <Input
              type="text"
              placeholder="Digite o nome da categoria"
              {...register('family')}
              value={activeProduct.productFamily}
              onChange={(e) =>
                setActiveProduct({
                  ...activeProduct,
                  productFamily: e.target.value,
                })
              }
            />
          </div>
        </label>
        <label>
          <div>
            <span>Un.</span>
            <Select
              aria-label="measure-unit"
              {...register('measure')}
              value={activeProduct.productMeasure}
              onChange={(e) =>
                setActiveProduct({
                  ...activeProduct,
                  productMeasure: e.target.value,
                })
              }
            >
              <option value="SELECT"> </option>
              <option value="UN">UN</option>
              <option value="KG">KG</option>
              <option value="M2">M²</option>
              <option value="M3">M³</option>
              <option value="M">M</option>
              <option value="KT">Kit</option>
            </Select>
          </div>
        </label>
        <Button type="submit">Cadastrar</Button>
      </Form>
    </FormContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  console.log(query)
  const { id } = query
  const product = await handleGetProductById(String(id))
  return {
    props: {
      product: JSON.parse(product),
    },
  }
}
