import { MagnifyingGlass } from 'phosphor-react'
import { FieldContainer, Input, SearchContainer, Select } from './styles'

export function Search() {
  return (
    <SearchContainer>
      <Select>
        <option value="family">Família</option>
        <option value="description">Descrição</option>
        <option value="provider">Fornecedor</option>
      </Select>
      <FieldContainer>
        <Input />
        <MagnifyingGlass size={24} color="#000" />
      </FieldContainer>
    </SearchContainer>
  )
}
