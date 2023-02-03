import { ComponentProps } from 'react'
import { ButtonContainer } from './styles'

type ButtonProps = ComponentProps<typeof ButtonContainer> & {
  title: string
}

export default function Button({ title, ...rest }: ButtonProps) {
  return <ButtonContainer {...rest}>{title}</ButtonContainer>
}
