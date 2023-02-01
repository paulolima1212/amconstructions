import { styled } from '@/styles'

export const FormContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  background: '$gray700',
  padding: '2.5rem',
  borderRadius: '8px',
})

export const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  label: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '1rem',
  },
})

export const Button = styled('button', {
  display: 'flex',
  padding: '1rem 2.5rem',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '6px',
  border: 'none',

  '&:hover': {
    opacity: '0.7',
  },
})

export const Input = styled('input', {
  display: 'flex',
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
})

export const Select = styled('select', {
  background: '$gray700',
  border: 'solid 1px $gray500',
  padding: '0.5rem 1rem',
  borderRadius: '8px',
  color: '$gray100',
})
