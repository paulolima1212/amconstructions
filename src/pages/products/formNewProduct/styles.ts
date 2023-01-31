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
  },
})

export const Button = styled('button', {
  display: 'flex',
  padding: '1rem 2.5rem',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '6px',
  border: 'none',
})
