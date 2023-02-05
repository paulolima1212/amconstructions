import background from '../../assets/background.jpg'

import { styled } from '@/styles'

export const ProductsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  minHeight: '100vh',
  color: '$gray100',
  backgroundImage: `url("${background.src}")`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
})
