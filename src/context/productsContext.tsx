import { ReactNode, createContext, useState } from 'react'

interface ProductsContextProps {
  filter: string
  handleSetFilter: (value: string) => void
  filterValue: string
  handleSetFilterValue: (value: string) => void
}

export const ProductsContext = createContext({} as ProductsContextProps)

export function ProductsContextProvider({ children }: { children: ReactNode }) {
  const [filter, setFilter] = useState('')
  const [filterValue, setFilterValue] = useState('')

  function handleSetFilter(value: string) {
    setFilter(value)
  }

  function handleSetFilterValue(value: string) {
    setFilterValue(value)
  }

  return (
    <ProductsContext.Provider
      value={{
        filter,
        filterValue,
        handleSetFilter,
        handleSetFilterValue,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
