import { MagnifyingGlass } from 'phosphor-react'
import { FieldContainer, Input, SearchContainer, Select } from './styles'
import { useProductsContext } from '@/hooks/useProductsContext'

export function Search() {
  const { filter, filterValue, handleSetFilter, handleSetFilterValue } =
    useProductsContext()

  return (
    <SearchContainer>
      <Select onChange={(e) => handleSetFilter(e.target.value)} value={filter}>
        <option value="">Filtro</option>
        <option value="family">Família</option>
        <option value="description">Descrição</option>
        <option value="provider">Fornecedor</option>
      </Select>
      <FieldContainer>
        <Input
          onChange={(e) => handleSetFilterValue(e.target.value)}
          value={filterValue}
        />
        <MagnifyingGlass size={24} color="#000" />
      </FieldContainer>
    </SearchContainer>
  )
}
