import { styled } from '@/styles'

export const SearchContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  width: '100%',
  maxWidth: '250px',
  margin: '0 auto',
  marginTop: '1.5rem',
})

export const Select = styled('select', {
  padding: '0.5rem 0',
  cursor: 'pointer',
  border: 'none',
  background: 'transparent',
  maxWidth: '100px',

  option: {
    cursor: 'pointer',
  },
})

export const Input = styled('input', {
  flex: 1,
  padding: '0.8rem 1rem',
  borderRadius: '8px',
  border: 'none',
  background: '$baseButton',
  boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)',
})

export const FieldContainer = styled('div', {
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  position: 'relative',

  svg: {
    position: 'relative',
    left: '-3rem',
  },
})
