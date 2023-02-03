import { styled } from '@/styles'

export const FormContainer = styled('div', {
  display: 'flex',
  width: '100%',
  height: '100%',
  minHeight: '100vh',
  flexDirection: 'column',
  background: '$gray700',
  padding: '2.5rem',
  borderRadius: '8px',
  alignItems: 'center',
})

export const Form = styled('form', {
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  gap: '1rem',
  alignItems: 'center',

  label: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '1rem',

    span: {
      minWidth: '80px',
      color: '#FFFFFF',
    },
  },

  '@bp1': {
    fontSize: '1.5rem',
  },
})

export const Button = styled('button', {
  display: 'flex',
  flex: 1,
  padding: '1rem 2.5rem',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '6px',
  border: 'none',
  width: '100%',
  maxWidth: '300px',
  marginTop: '2rem',

  '@bp1': {
    fontSize: '2rem',
  },

  '&:hover': {
    opacity: '0.7',
  },
})

export const Input = styled('input', {
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  background: '$gray700',
  border: 'solid 1px $gray500',
  padding: '0.5rem 1rem',
  borderRadius: '8px',
  color: '$gray100',
  fontSize: '1rem',

  '&::placeholder': {
    fontSize: '0.7rem',
  },

  '@bp1': {
    fontSize: '2rem',

    '&::placeholder': {
      fontSize: '1rem',
    },
  },
})

export const Select = styled('select', {
  background: '$gray700',
  border: 'solid 1px $gray500',
  padding: '0.5rem 1rem',
  borderRadius: '8px',
  color: '$gray100',
})

export const Title = styled('h2', {
  color: '$gray300',
  marginTop: '2.5rem',
  marginBottom: '5rem',
  fontSize: '2.5rem',
  display: 'flex',
  gap: '0.5rem',
  alignItems: 'center',
  position: 'relative',

  a: {
    all: 'unset',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    left: '-2rem',
  },

  '@bp1': {
    fontSize: '5rem',
  },
})
