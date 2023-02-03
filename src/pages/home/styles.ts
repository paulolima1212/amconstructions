import background from '../../assets/background.jpg'
import { styled } from '@/styles'

export const MainContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  minHeight: '100vh',
  alignItems: 'center',
  backgroundImage: `url("${background.src}")`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
})

export const HeaderContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'rgba(217, 217, 217, 0.44)',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  width: '100%',
  height: '30rem',
})

export const ButtonsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '7.4rem',
  marginTop: '8.74rem',
  marginBottom: '7.4rem',
})
