import background from '../../../public/background.jpg'

import { styled } from '@/styles'

export const ProductsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  minHeight: '100vh',
  color: '$gray100',
  alignItems: 'center',
  backgroundImage: `url("${background.src}")`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
})

export const ButtonsContainer = styled('div', {
  display: 'flex',
  color: '$gray900',
  marginTop: '6rem',
  gap: '3.4rem',
})
