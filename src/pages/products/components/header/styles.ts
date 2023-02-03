import { styled } from '@/styles'

export const HeaderContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  background: 'rgba(217, 217, 217, 0.69)',
  height: '13.7rem',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',

  h2: {
    fontSize: '2.7rem',
    textTransform: 'uppercase',
    fontWeight: 'normal',
    color: '$gray900',
    marginBottom: '0.7rem',
  },
})
