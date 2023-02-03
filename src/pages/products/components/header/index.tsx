import logo from '../../../../../public/logo.png'

import Image from 'next/image'
import { HeaderContainer } from './styles'

export default function Header() {
  return (
    <HeaderContainer>
      <Image alt="" src={logo.src} height={92} width={169} />
      <h2>Consulta de Preços </h2>
    </HeaderContainer>
  )
}
