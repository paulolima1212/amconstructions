import Button from '@/components/button'
import { ButtonsContainer, FooterContainer } from './styles'

export function Footer() {
  return (
    <FooterContainer>
      <ButtonsContainer>
        <Button size={'md'} href={'/createproduct'} title="Nova entrada" />
        <Button size={'md'} href={'/'} title="Nova cotação" />
      </ButtonsContainer>
    </FooterContainer>
  )
}
