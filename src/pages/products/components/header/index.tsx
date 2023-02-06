import logo from '../../../../assets/logo.png'

import Image from 'next/image'
import { HeaderContainer } from './styles'
import Link from 'next/link'

export default function Header() {
  return (
    <HeaderContainer>
      <Link href={'/'}>
        <Image alt="" src={logo.src} height={92} width={169} />
      </Link>
      <h2>Consulta de Preços </h2>
    </HeaderContainer>
  )
}
