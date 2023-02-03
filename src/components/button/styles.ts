import { styled } from '@/styles'
import Link from 'next/link'

export const ButtonContainer = styled(Link, {
  all: 'unset',
  width: '27.5rem',
  height: '6.5rem',
  borderRadius: '10px',
  backgroundColor: '$baseButton',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '1.7rem',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',

  '&:hover': {
    background: '$gray500',
    color: '#fff',
  },
})
