import { styled } from '@/styles'
import Link from 'next/link'

export const ButtonContainer = styled(Link, {
  all: 'unset',
  borderRadius: '10px',
  backgroundColor: '$baseButton',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',

  '&:hover': {
    background: '$gray500',
    color: '#fff',
  },

  variants: {
    size: {
      lg: {
        width: '27.5rem',
        height: '6.5rem',
        fontSize: '1.7rem',
      },
      md: {
        width: '15.9rem',
        height: '4.6rem',
        fontSize: '1.4rem',
      },
    },
  },

  defaultVariants: {
    size: 'lg',
  },
})
