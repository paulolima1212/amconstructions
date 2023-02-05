import { styled } from '@/styles'

export const FooterContainer = styled('footer', {
  display: 'flex',
  width: '100%',
  height: '100%',
  maxHeight: '5rem',
  padding: '5rem',
  position: 'sticky',
  bottom: 0,
  left: 0,
  zIndex: 1,
  color: '$gray900',
  marginTop: '7rem',
  background: 'rgba(217, 217, 217, 0.69)',
})

export const ButtonsContainer = styled('div', {
  position: 'relative',
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  color: '$gray900',
  justifyContent: 'space-around',
  gap: '2rem',
  marginBottom: '2rem',
})
