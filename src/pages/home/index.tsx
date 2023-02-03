import Image from 'next/image'
import logo from '../../../public/logo.png'

import { ButtonsContainer, HeaderContainer, MainContainer } from './styles'
import { Button } from '@/components/button'

export default function Home() {
  return (
    <MainContainer>
      <HeaderContainer>
        <Image src={logo} width={278} height={151} alt={''} />
      </HeaderContainer>
      <ButtonsContainer>
        <Button title="Consulta de preços" />
        <Button title="Nova entrada" />
        <Button title="Nova cotação" />
      </ButtonsContainer>
    </MainContainer>
  )
}
