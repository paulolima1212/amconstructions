import background from '../../assets/background.jpg'

import { styled } from '@/styles'

export const FormContainer = styled('div', {
  display: 'flex',
  width: '100%',
  height: '100%',
  minHeight: '100vh',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundImage: `url("${background.src}")`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
})

export const Form = styled('form', {
  display: 'flex',
  width: '100%',
  maxWidth: '400px',
  flexDirection: 'column',
  gap: '2.5rem',
  alignItems: 'center',
  padding: '2.5rem',

  label: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '1rem',
    fontSize: '1.5rem',

    span: {
      minWidth: '80px',
      color: '$gray900',
    },
  },

  '@bp4': {
    fontSize: '2rem',
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
  background: '$baseButton',
  boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)',

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
  background: '$baseButton',
  border: 'solid 1px $gray500',
  padding: '0.8rem 1rem',
  borderRadius: '8px',
  color: '$gray900',
  fontSize: '1.5rem',

  '&::placeholder': {
    fontSize: '1rem',
  },

  '@bp4': {
    fontSize: '2rem',

    '&::placeholder': {
      fontSize: '1.5rem',
    },
  },
})

export const Select = styled('select', {
  background: '$baseButton',
  border: 'solid 1px $gray500',
  padding: '0.5rem 1rem',
  borderRadius: '8px',
  color: '$gray900',
  cursor: 'pointer',

  option: {
    cursor: 'pointer',
  },
})

export const Title = styled('h2', {
  color: '$gray900',
  marginTop: '2.5rem',
  marginBottom: '3rem',
  fontSize: '2.5rem',
  display: 'flex',
  gap: '0.5rem',
  alignItems: 'center',
  position: 'relative',

  svg: {
    cursor: 'pointer',
  },

  a: {
    all: 'unset',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    left: '-2rem',
  },

  '@bp1': {
    fontSize: '3rem',
  },
})
